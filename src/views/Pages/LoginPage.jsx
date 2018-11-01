import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
// import LockOutline from "@material-ui/icons/LockOutline";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { firebase } from "../../utils/firebase";
// import { connect } from "react-redux";
// import { startLogin } from "../../actions/auth";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card login className={classes[this.state.cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
              </CardHeader>

              <Formik
                onSubmit={async ({ email, password }) => {
                  try {
                    await firebase
                      .auth()
                      .signInWithEmailAndPassword(email, password);
                    this.props.history.push("/home");
                  } catch (error) {
                    this.props.history.push("/login");
                  }
                }}
                enableReinitialize={true}
                initialValues={{ email: "", password: "" }}
                render={() => (
                  <Form>
                    <CardBody>
                      <Field
                        name="email"
                        render={({ field }) => (
                          <CustomInput
                            labelText="Email.."
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "email",
                              ...field,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              )
                            }}
                          />
                        )}
                      />

                      <Field
                        type="password"
                        name="password"
                        render={({ field }) => (
                          <CustomInput
                            labelText="Password"
                            id="password"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "password",
                              ...field,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              )
                            }}
                          />
                        )}
                      />
                    </CardBody>
                    <CardFooter className={classes.justifyContentCenter}>
                      <Button color="rose" simple size="lg" type="submit" block>
                        {`Let's Go`}
                      </Button>
                    </CardFooter>
                  </Form>
                )}
              />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

// const mapDispatchToProps = dispatch => ({
//   startLogin: (email, password) => dispatch(startLogin(email, password))
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(withStyles(loginPageStyle)(LoginPage));

export default withStyles(loginPageStyle)(LoginPage);
