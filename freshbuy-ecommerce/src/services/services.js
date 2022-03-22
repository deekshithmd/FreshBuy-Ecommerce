import axios from "axios";

export const getProducts = async () => await axios.get("/api/products");

export const getWishlist = async ({ encodedToken }) =>
  await axios.get(`/api/user/wishlist`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const addWishlist = async ({ product, encodedToken }) =>
  await axios.get(
    `/api/user/wishlist`,
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteWishlist = async ({ productId, encodedToken }) =>
  axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
export const getCartlist = async ({ encodedToken }) =>
  await axios.get(`/api/user/cart`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const addCartlist = async ({ product, encodedToken }) =>
  await axios.get(
    `/api/user/cart`,
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deleteCartlist = async ({ productId, encodedToken }) =>
  axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const editCartlist = async ({ productId, encodedToken, type }) =>
  await axios.post(
    `/api/user/cart/${productId}`,
    {
      action: { type },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
