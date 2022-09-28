"use strict";

/**
 * customer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::customer.customer",
  ({ strapi }) => ({
    searchCustomer: async (ctx, next) => {
      const { search } = ctx.request.params;
      console.log(search);

      const customers = await strapi.db
        .query("api::customer.customer")
        .findMany({
          where: {
            email: {
              $contains: search,
            },
          },
        });

      return { customers };
    },
  })
);
