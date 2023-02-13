import React, { useState } from "react";
import logo from "../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import colors from "../constants/colors";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../store/actions/auth";
const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchor1, setAnchor1] = useState(null);
  const [anchor2, setAnchor2] = useState(null);
  const [anchor3, setAnchor3] = useState(null);
  const [anchor4, setAnchor4] = useState(null);
  const [anchor5, setAnchor5] = useState(null);
  const [anchor6, setAnchor6] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { isAuthenticated } = props;
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
    setAnchor1(null);
    setAnchor2(null);
    setAnchor3(null);
    setAnchor4(null);
    setAnchor5(null);
    setAnchor6(null);
  }
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
            style={{ width: 50, height: "90%", marginLeft: 20 }}
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
              <Button
                id="basic-button"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                style={{ textTransform: "none" }}
              >
                {user && user.name} <KeyboardArrowDownIcon />
              </Button>
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
          <FavoriteIcon style={{ color: colors.primary }} />
          <ShoppingCartIcon style={{ color: colors.primary }} />
        </div>
      </div>
      <div
        style={{ backgroundColor: "black", height: 1, color: colors.accent }}
      ></div>
      <div
        style={{
          height: 50,
          backgroundColor: "white",
          borderColor: "black",
          paddingInline: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button
            aria-owns={anchor1 ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={(event) => {
              if (anchor1 !== event.currentTarget) {
                setAnchor1(event.currentTarget);
              }
            }}
            style={{ textTransform: "none" }}
            onMouseOver={(event) => {
              if (anchor1 !== event.currentTarget) {
                setAnchor1(event.currentTarget);
              }
            }}
          >
            Visage <KeyboardArrowDownIcon />
          </Button>
          <Button
            aria-owns={anchor2 ? "simple-menu" : undefined}
            aria-haspopup="true"
            style={{ textTransform: "none" }}
            onClick={(event) => {
              if (anchor2 !== event.currentTarget) {
                setAnchor2(event.currentTarget);
              }
            }}
            onMouseOver={(event) => {
              if (anchor2 !== event.currentTarget) {
                setAnchor2(event.currentTarget);
              }
            }}
          >
            Solaire <KeyboardArrowDownIcon />
          </Button>
          <Button
            aria-owns={anchor3 ? "simple-menu" : undefined}
            aria-haspopup="true"
            style={{ textTransform: "none" }}
            onClick={(event) => {
              if (anchor3 !== event.currentTarget) {
                setAnchor3(event.currentTarget);
              }
            }}
            onMouseOver={(event) => {
              if (anchor3 !== event.currentTarget) {
                setAnchor3(event.currentTarget);
              }
            }}
          >
            Corps <KeyboardArrowDownIcon />
          </Button>
          <Button
            aria-owns={anchor4 ? "simple-menu" : undefined}
            aria-haspopup="true"
            style={{ textTransform: "none" }}
            onClick={(event) => {
              if (anchor4 !== event.currentTarget) {
                setAnchor4(event.currentTarget);
              }
            }}
            onMouseOver={(event) => {
              if (anchor4 !== event.currentTarget) {
                setAnchor4(event.currentTarget);
              }
            }}
          >
            Cheveux <KeyboardArrowDownIcon />
          </Button>
          <Button
            style={{ textTransform: "none" }}
            aria-owns={anchor5 ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={(event) => {
              if (anchor5 !== event.currentTarget) {
                setAnchor5(event.currentTarget);
              }
            }}
            onMouseOver={(event) => {
              if (anchor5 !== event.currentTarget) {
                setAnchor5(event.currentTarget);
              }
            }}
          >
            Bébe & Maman <KeyboardArrowDownIcon />
          </Button>
          <Button
            style={{ textTransform: "none" }}
            aria-owns={anchor6 ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={(event) => {
              if (anchor6 !== event.currentTarget) {
                setAnchor6(event.currentTarget);
              }
            }}
            onMouseOver={(event) => {
              if (anchor6 !== event.currentTarget) {
                setAnchor6(event.currentTarget);
              }
            }}
          >
            Hygiéne <KeyboardArrowDownIcon />
          </Button>
          <p>Bien-étre</p>
          <p>Appareils & Mesures</p>
          <p>Contact</p>
          <p>Promotions</p>
        </div>
      </div>
      <Menu
        id="visage"
        anchorEl={anchor1}
        open={Boolean(anchor1)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Menu
        id="solaire"
        anchorEl={anchor2}
        open={Boolean(anchor2)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Menu
        id="corps"
        anchorEl={anchor3}
        open={Boolean(anchor3)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Menu
        id="cheveux"
        anchorEl={anchor4}
        open={Boolean(anchor4)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Menu
        id="BebeMaman"
        anchorEl={anchor5}
        open={Boolean(anchor5)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Menu
        id="hygiene"
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorEl={anchor6}
        open={Boolean(anchor6)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Profoooooooooooooooile</MenuItem>
      </Menu>
      <Menu
        id="profile"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(authActions.logOut());
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
