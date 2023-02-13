import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as authActions from "../store/actions/auth";
import { withStyles } from "@material-ui/core/styles";
import colors from "../constants/colors";
import { Skeleton } from "@mui/material";
// import { Button } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import logo from "../assets/logo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const styles = {
  main: {
    padding: 50,
  },
};
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
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={logo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shampoo
            </Typography>
            <Typography variant="subtitle1" color="green">
              121,08TND
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <FavoriteBorderIcon />
          <AddShoppingCartIcon />
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Home);
