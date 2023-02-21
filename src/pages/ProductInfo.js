import { Button } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import productImage from "../assets/product.png";
import colors from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../store/actions/products";
import { useParams } from "react-router";
const ProductInfo = () => {
  const product = useSelector((state) => state.products.currentProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  const loadProducts = useCallback(async () => {
    try {
      dispatch(productsActions.fetchProductById(id));
    } catch (err) {
      console.log(err.message);
    }
  }, [dispatch]);
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  return (
    <div>
      <div
        style={{
          borderColor: colors.third,
          borderWidth: 2,
          width: "90%",
          height: "60vh",
          borderRadius: 15,
          margin: "5%",
          display: "flex",
        }}
      >
        <div style={{ width: "50%" }}>
          <div
            style={{
              width: "80%",
              height: "80%",
              borderColor: colors.third,
              borderWidth: 2,
              margin: "6%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src={productImage}
              alt="product"
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
          </div>
        </div>
        <div style={{ margin: "5%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "2em" }}>
              {product && product.product.title}
            </p>
            <p style={{ fontSize: "2em", color: "greenyellow" }}>
              {product && product.product.price} TND
            </p>
          </div>
          <p style={{ color: "grey" }}>Catégorie:</p>
          <p style={{ fontWeight: "600" }}>{product && product.category}</p>
          <p style={{ color: "grey" }}>Description:</p>
          <p style={{ maxWidth: 600 }}>
            {product && product.product.description}
          </p>
          <Button
            style={{ position: "absolute", right: "10%", bottom: "20%" }}
            variant="outlined"
            color="success"
          >
            Ajouter au panier
          </Button>
        </div>
      </div>
    </div>
    // <div
    //   style={{ width: "90%", height: "70%" }}
    //   className="bg-white  w-full mt-12 ml-20 grid grid-cols-2"
    // >
    //   <div
    //     style={{
    //       alignItems: "center",
    //       justifyContent: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <img
    //       src={productImage}
    //       alt="product"
    //       style={{
    //         width: "60%",
    //         height: "60%",
    //       }}
    //     />
    //   </div>
    //   <div className="grid grid-cols-2">
    //     <div className="h-full w-1 bg-[grey]"></div>
    //     <div className="mt-12">
    //       <p>product name </p>
    //       <p>product description</p>
    //       <p>price</p>
    //       <p>add to cart cta</p>
    //       <p>add to favorites</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductInfo;
