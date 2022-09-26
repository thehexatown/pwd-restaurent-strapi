"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  productsByCategory: async (ctx, next) => {
    const { id } = ctx.request.params;

    const products = await strapi.db.query("api::product.product").findMany({
      where: {
        category: {
          id: {
            $eq: id,
          },
        },
      },
    });

    return { products };
  },
  search: async (ctx, next) => {
    const { title, id } = ctx.request.params;
    console.log(title);

    const products = await strapi.db.query("api::product.product").findMany({
      where: {
        title: {
          $contains: title,
        },
        organization: id,
      },
    });

    return { products };
  },
  organizationProducts: async (ctx, next) => {
    const { id } = ctx.request.params;
    const products = await strapi.db.query("api::product.product").findMany({
      populate: { extras: true },
      where: {
        organization: id,
      },
    });
    return products;
  },
}));
