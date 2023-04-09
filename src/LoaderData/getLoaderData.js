export const getProductsAndCartData = async () => {
  const res = await fetch("products.json");
  const data = await res.json();
  //   console.log(data);

  return data;
};
