module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/category/:id",
      handler: "product.confirmOrder",
    },
    {
      method: "GET",
      path: "/products/search/:title",
      handler: "product.search",
    },
  ],
};
