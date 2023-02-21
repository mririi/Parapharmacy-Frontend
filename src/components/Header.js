import React, { Fragment } from "react";
import logo from "../assets/logo1.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import colors from "../constants/colors";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
const Header = (props) => {
  const user = useSelector((state) => state.auth.user);
  const { isAuthenticated } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          height: 80,
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: 100, height: "90%", marginLeft: 20 }}
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: 80,
            width: 250,
            justifyContent: "space-between",
          }}
        >
          {isAuthenticated && (
            <div
              style={{
                display: "flex",
                color: colors.primary,
              }}
            >
              <p>
                {user && user.name} <KeyboardArrowDownIcon />
              </p>
            </div>
          )}
          {!isAuthenticated && (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  color: colors.primary,
                }}
              >
                Connexion
                <LoginIcon />
              </div>
            </Link>
          )}
          <ShoppingCartIcon style={{ color: colors.primary }} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: colors.third,
          height: 1,
          color: colors.accent,
        }}
      ></div>
      <div
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          borderWidth: 2,
          borderRadius: 15,
          borderColor: colors.third,
          marginTop: 20,
          marginLeft: "25%",
          height: "5vh",
          padding: 20,
        }}
      >
        <Link to="/product-by-category/Orthopédique">
          <p>Orthopédique</p>
        </Link>
        <p>Bien étre</p>
        <p>Femme</p>
        <p>Homme</p>
        <p>Enfants</p>
        <p>Cheveux</p>
      </div>
    </>
  );
};

export default Header;
