module.exports = {
  routes: [
    {
      method: "GET",
      path: "/customers/search/:search",
      handler: "customer.searchCustomer",
    },
  ],
};
