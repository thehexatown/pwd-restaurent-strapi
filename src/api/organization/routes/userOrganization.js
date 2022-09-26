module.exports = {
  routes: [
    {
      method: "GET",
      path: "/user/organization/:id",
      handler: "organization.findOrganization",
    },
  ],
};
