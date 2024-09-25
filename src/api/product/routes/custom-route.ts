
export default {
  routes: [
    {
      method: "GET",
      path: "/product/custom-endpoint",
      handler: "custom-controller.logValueFromCustom",
      config: {
        policies: ["allow-all"]
      }
    }
  ]
}