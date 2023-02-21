import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import * as productsActions from "../store/actions/products";
const ProductsByCategory = () => {
  const products = useSelector((state) => state.products.productsByCategory);
  const dispatch = useDispatch();
  const { id } = useParams();
  const loadProducts = useCallback(async () => {
    try {
      dispatch(productsActions.fetchProductsByCategory(id));
    } catch (err) {
      console.log(err.message);
    }
  }, [dispatch, id]);
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  return (
    <div style={{ padding: 50 }}>
      <h1 style={{ marginBottom: 50 }}>Category: {id}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {products &&
          products.map((item) => <ProductCard key={item.key} value={item} />)}
      </div>
    </div>
  );
};

export default ProductsByCategory;
