/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::product.product", ({ strapi }) => ({
  // this controller can be viewed inside products inside roles under user and permissions 
  async logValue(ctx) {
    // console.log(ctx.state);
    console.log(ctx);

    return {
      success: true,
      message: "successful"
    }
  },
}));
