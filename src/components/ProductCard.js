import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import product from "../assets/product.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import colors from "../constants/colors";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const { value } = props;
  return (
    <Card sx={{ maxWidth: 300, borderColor: colors.third, borderWidth: 2 }}>
      <Link to={"/product-info/" + value.id} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={product}
            alt="green iguana"
          />
          <CardContent className="grid grid-cols-2">
            <Typography gutterBottom variant="h5" component="div">
              {value.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="green"
              style={{ marginLeft: "40%" }}
            >
              {value.price} TND
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to={"/product-info/" + value.id}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="subtitle1" style={{}}>
            Plus d'informations
          </Typography>
        </Link>
        <AddShoppingCartIcon onClick={() => console.log("clicked")} />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
