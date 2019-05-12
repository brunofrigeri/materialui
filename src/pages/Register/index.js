import React from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

import { registerUserAction } from "../../store/actions/authenticationActions";

const styles = theme => ({
  div_container: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    },
    fontSize: "14px"
  },
  form: {
    margin: "auto",
    width: "50%",
    padding: "10px"
  },
  button: {
    marginTop: "20px"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

class RegisterPage extends React.Component {
  state = {
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, email, confirmEmail, password, confirmPassword } = this.state;

    const data = {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword
    };
    console.log(data);
    //this.props.dispatch(registerUserAction(data));
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.div_container}>
        <Paper className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            <Avatar
              alt="Bruno Frigeri"
              style={{ margin: "20px", backgroundColor: "primary" }}
            >
              FT
            </Avatar>
          </Grid>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor=" email">Rewrite your email</InputLabel>
              <Input
                id="confirmEmail"
                type="email"
                name="confirmEmail"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Rewrite your password</InputLabel>
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                onChange={this.handleChange}
              />
            </FormControl>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              Sing Up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = response => ({
  response
});

export default withStyles(styles)(connect(mapStateToProps)(RegisterPage));
