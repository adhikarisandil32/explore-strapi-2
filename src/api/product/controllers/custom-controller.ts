export default {
  "custom-controller-function": async (ctx, next) => {
    console.log("koa's ctx")
  
    return {
      success: true,
      message: "successful request",
    }
  }
}
