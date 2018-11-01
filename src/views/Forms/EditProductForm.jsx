// @material-ui/icons
import withStyles from "@material-ui/core/styles/withStyles";
import MailOutline from "@material-ui/icons/MailOutline";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProductInitialValues as getInitialValues } from "variables/getInitialValues";
import { startEditProducts } from "../../actions/products";
class RegularForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, item, onClose, startEditProducts } = this.props;
    const keys = Object.keys(item).filter(e => e !== "id");
    return (
      <Card>
        <CardHeader color="rose" icon>
          <CardIcon color="rose">
            <MailOutline />
          </CardIcon>
          <h4 className={classes.cardIconTitle}>Edit Product</h4>
        </CardHeader>
        <CardBody>
          <Formik
            onSubmit={(values, actions) => {
              startEditProducts(item.id, values);
              onClose();
            }}
            enableReinitialize={true}
            initialValues={getInitialValues(item)}
            render={() => (
              <Form>
                {keys.map((k, index) => (
                  <Field
                    key={index}
                    type="text"
                    name={k}
                    render={({ field }) => (
                      <CustomInput
                        labelText={k}
                        labelProps={{
                          required: true
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          ...field
                        }}
                      />
                    )}
                  />
                ))}

                <Button color="rose" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          />
        </CardBody>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditProducts: (id, values) => dispatch(startEditProducts(id, values))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(regularFormsStyle)(RegularForms)));
