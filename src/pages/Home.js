import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as authActions from "../store/actions/auth";
import { withStyles } from "@material-ui/core/styles";
import colors from "../constants/colors";
import { Skeleton } from "@mui/material";
// import { Button } from "@material-ui/core";

import * as productsActions from "../store/actions/products";
import ProductCard from "../components/ProductCard";
const styles = {
  main: {
    padding: 50,
  },
};
const Home = (props) => {
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.products.allProducts);
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
  const loadProducts = useCallback(async () => {
    try {
      dispatch(productsActions.fetchProducts());
    } catch (err) {
      console.log(err.message);
    }
  }, [dispatch]);
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  const { classes } = props;
  return (
    <div className={classes.main}>
      {products &&
        products.map((item) => <ProductCard key={item.key} value={item} />)}
    </div>
  );
};

export default withStyles(styles)(Home);
