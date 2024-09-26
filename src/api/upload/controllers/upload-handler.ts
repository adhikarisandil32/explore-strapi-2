export default {
  "upload-handler": async (ctx, next) => {
    return {
      success: true,
      message: "successfully hit upload route",
    };
  },
};
