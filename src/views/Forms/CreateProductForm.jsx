// @material-ui/icons
import Icon from "@material-ui/core/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProductInitialValues as getInitialValues } from "variables/getInitialValues";
import { startAddProduct } from "../../actions/products";

class RegularForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }
  render() {
    const { classes, onClose, item, startAddProduct } = this.props;
    return (
      <Card>
        <CardHeader color="rose" icon>
          <CardIcon color="rose">
            <Icon className={"fas fa-glasses"} />
          </CardIcon>
          <h4 className={classes.cardIconTitle}>Create Product</h4>
        </CardHeader>
        <CardBody>
          <Formik
            onSubmit={(values, actions) => {
              startAddProduct(values);
              onClose();
            }}
            enableReinitialize={true}
            initialValues={getInitialValues(item)}
            render={() => (
              <Form>
                <Field
                  type="text"
                  name="BarcodeNo"
                  render={({ field }) => (
                    <CustomInput
                      labelText="BarcodeNo"
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
                <Field
                  type="text"
                  name="Category"
                  render={({ field }) => (
                    <CustomInput
                      labelText="Category"
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
                <Field
                  type="text"
                  name="ImageUrl"
                  render={({ field }) => (
                    <CustomInput
                      labelText="ImageUrl"
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
                <Field
                  type="text"
                  name="ItemName"
                  render={({ field }) => (
                    <CustomInput
                      labelText="ItemName"
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
                <Field
                  type="text"
                  name="QTY"
                  render={({ field }) => (
                    <CustomInput
                      labelText="QTY"
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
                <Field
                  type="text"
                  name="Status"
                  render={({ field }) => (
                    <CustomInput
                      labelText="Status"
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
                <Field
                  type="text"
                  name="WMSItemName"
                  render={({ field }) => (
                    <CustomInput
                      labelText="WMSItemName"
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
                <Field
                  type="text"
                  name="Year"
                  render={({ field }) => (
                    <CustomInput
                      labelText="Year"
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
  startAddProduct: values => dispatch(startAddProduct(values))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(regularFormsStyle)(RegularForms)));
