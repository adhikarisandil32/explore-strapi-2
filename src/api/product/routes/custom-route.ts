
export default {
  routes: [
    {
      method: "GET",
      path: "/test",
      handler: "custom-controller.custom-controller-function",
      config: {
        policies: ["allow-all"]
      }
    }
  ]
}