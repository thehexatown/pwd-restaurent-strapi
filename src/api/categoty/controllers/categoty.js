"use strict";

/**
 * categoty controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::categoty.categoty",
  ({ strapi }) => ({
    organizationCategories: async (ctx, next) => {
      const { id } = ctx.request.params;
      const categories = await strapi.db
        .query("api::categoty.categoty")
        .findMany({
          where: {
            users_permissions_user: id,
          },
        });
      return categories;
    },
  })
);
