import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import colors from "../../constants/colors";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Register = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  const dispatch = useDispatch();
  const theme = createTheme();
  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(name, email, password, password_confirmation);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("password_confirmation", password_confirmation);
    const action = authActions.register(data);
    try {
      await dispatch(action);
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.error(err.message);
      setOpenAlert(true);
      setOpen(false);
      setError(err.message);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "white",
          height: 550,
          borderRadius: 10,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: colors.primary }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Créer un compte
          </Typography>
          <Box
            component="form"
            noValidate={false}
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nom complet"
                  autoFocus
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={password !== password_confirmation}
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirmation de mot de passe"
                  type="password"
                  id="password_confirmation"
                  autoComplete="new-password"
                  onChange={(event) =>
                    setPassword_Confirmation(event.target.value)
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: colors.secondary,
                ":hover": { backgroundColor: "black" },
              }}
            >
              Créer un compte
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Déja un compte? Se connecter
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
