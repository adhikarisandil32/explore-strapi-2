
export default {
  routes: [
    {
      method: "GET",
      path: "/product/custom-endpoint",
      handler: "custom-controller.logValueFromCustom",
      config: {
        policies: ["allow-all"]
      }
    },
    {
      method: "GET",
      path: "/product/logger-endpoint",
      handler: "product.logValue",
      config: {
        policies: ["allow-all"]
      }
    }
  ]
}