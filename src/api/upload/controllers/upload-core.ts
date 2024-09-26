import { factories } from "@strapi/strapi";

export default factories.createCoreController("plugin::upload.file", ({ strapi }) => ({
  async uploadFile(ctx) {
    return {
      message: "successfully intercepted the upload-controller",
      success: true,
    };
  },
}));
