import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as authActions from "../store/actions/auth";
import { withStyles } from "@material-ui/core/styles";
import colors from "../constants/colors";
import { Skeleton } from "@mui/material";
// import { Button } from "@material-ui/core";
import LogoutIcon from "@mui/icons-material/Logout";
const styles = {};
const Home = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const local = localStorage.getItem("token");
      const { token } = JSON.parse(local);
      if (token) {
        dispatch(authActions.getProfile(token));
        navigate("/");
      } else {
        navigate("/login");
      }
    };
    getUser();
  }, [navigate, dispatch]);
  const user = useSelector((state) => state.auth.user);
  const { classes } = props;
  return (
    <div className={classes.main}>
      <p>{user.name}</p>
    </div>
  );
};

export default withStyles(styles)(Home);
