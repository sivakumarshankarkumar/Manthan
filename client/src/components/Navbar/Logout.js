import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { GoogleLogout } from "react-google-login";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    textAlign: "center",
    padding: 0,
    paddingBottom: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  name: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  email: {
    margin: theme.spacing(2),
    fontWeight: "bolder",
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 0,
    border: "solid 1px gray",
  },
  report: {
    paddingTop: theme.spacing(2),
    fontSize: "smaller",
    textDecoration: "none",
  },
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const logout = () => {
    props.setUser({});
    props.setClasses([]);
    props.setAuth(false);
  };
  const handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        <Avatar src={props.user.image} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Container className={classes.profileCard}>
          <Avatar className={classes.avatar} src={props.user.image} />
          <Typography className={classes.name}>
            {props.user.username}{" "}
          </Typography>
          <Typography className={classes.email}>{props.user.email}</Typography>
          <Divider /><br/>
          <GoogleLogout
            clientId={props.clientId}
            icon={false}
            buttonText='Login'
            onLogoutSuccess={logout}
            onFailure={handleLogoutFailure}
            render={(renderProps) => (
              <Button className={classes.button} onClick={renderProps.onClick}>
                Sign out
              </Button>
            )}
          />
          
          
        </Container>
      </Popover>
    </div>
  );
}
