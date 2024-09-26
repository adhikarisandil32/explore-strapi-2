// this code and the code below produce the same result. Show the function in the location (in admin pannel) > settings > roles (inside users & permissions) > expand the product
/* export default {
  "custom-controller-function": async (ctx, next) => {
    console.log("koa's ctx")
  
    return {
      success: true,
      message: "successful request",
    }
  }
}
 */



import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::product.product", ({ strapi }) => ({
  // this controller can be viewed inside products inside roles under user and permissions 
  async logValueFromCustom(ctx) {
    // console.log(ctx.state);
    console.log(ctx);

    return {
      success: true,
      message: "successful"
    }
  },
}));
