module.exports = {
  routes: [
    {
      method: "GET",
      path: "/categories/organization/:id",
      handler: "categoty.organizationCategories",
    },
  ],
};
