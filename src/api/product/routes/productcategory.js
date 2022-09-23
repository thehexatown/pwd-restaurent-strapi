module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/category/:id",
      handler: "product.productsByCategory",
    },
    {
      method: "GET",
      path: "/products/search/:id/:title",
      handler: "product.search",
    },
    {
      method: "GET",
      path: "/products/organization/:id",
      handler: "product.organizationProducts",
    },
  ],
};
