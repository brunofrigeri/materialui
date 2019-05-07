import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  div_container: {
    width: "auto",
    display: "block",
    backgroundColor: "#D3D3D3",
    borderRadius: "3px",
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
  }
});

function App(props) {
  const { classes } = props;
  return (
    <main className={classes.div_container}>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Bruno Frigeri"
          style={{ margin: "10px", backgroundColor: "#d3d" }}
        >
          BF
        </Avatar>
      </Grid>

      <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" type="text" />
        </FormControl>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Rewrite your email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" />
        </FormControl>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Rewrite your password</InputLabel>
          <Input id="password" type="password" />
        </FormControl>
      </form>
    </main>
  );
}

export default withStyles(styles)(App);
