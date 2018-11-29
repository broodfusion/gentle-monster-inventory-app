// @material-ui/icons
import Icon from '@material-ui/core/Icon';
import withStyles from '@material-ui/core/styles/withStyles';
import regularFormsStyle from 'assets/jss/material-dashboard-pro-react/views/regularFormsStyle';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import columnsArr from 'variables/columns';
import { getProductInitialValues as getInitialValues } from 'variables/getInitialValues';
import { startAddProduct } from '../../actions/products';

class RegularForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css', document.querySelector('#insertion-point-jss'));
  }
  render() {
    const { classes, onClose, item, startAddProduct } = this.props;
    const columns = columnsArr.filter(e => e.accessor !== 'image' && e.accessor !== 'actions');
    return (
      <Card>
        <CardHeader color="rose" icon>
          <CardIcon color="rose">
            <Icon className={'fas fa-glasses'} />
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
                {columns.map((c, index) => (
                  <Field
                    key={index}
                    type="text"
                    name={c.accessor}
                    render={({ field }) => (
                      <CustomInput
                        labelText={c.Header}
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
  startAddProduct: values => dispatch(startAddProduct(values))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(regularFormsStyle)(RegularForms)));
