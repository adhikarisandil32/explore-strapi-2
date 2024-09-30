export default {
  routes: [
    {
      method: "GET",
      path: "/products/custom-endpoint",
      handler: "custom-controller.custom-controller-function",
      config: {
        policies: ["allow-all"],
        middlewares: [
          async (ctx, next) => {
            console.log("hello from custom controller function", ctx.state?.user ?? "no user");
            return next();
          },
        ],
      },
    },
    {
      method: "GET",
      path: "/products/logger-endpoint",
      handler: "product.logValue",
      config: {
        middlewares: [
          async (ctx, next) => {
            console.log("hello from log value", ctx.state?.user ?? "no user");
            return next();
          },
        ],
        policies: ["allow-all"],
      },
    },
  ],
};
