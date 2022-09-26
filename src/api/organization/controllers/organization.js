"use strict";
/**
 * organization controller
 */
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController(
  "api::organization.organization",
  ({ strapi }) => ({
    findOrganization: async (ctx, next) => {
      const { title, id } = ctx.request.params;
      console.log(title);
      const organization = await strapi.db
        .query("api::organization.organization")
        .findOne({
          // populate: { users_permissions_users: true },
          where: {
            users_permissions_users: id,
          },
        });
      return { organization };
    },
  })
);
