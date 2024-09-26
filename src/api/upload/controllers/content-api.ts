import { factories } from "@strapi/strapi";

export default factories.createCoreController("plugin::upload.file", ({ strapi }) => ({
  async deleteFile(ctx) {
    return {
      message: "successfully intercepted the delete-file-controller",
      success: true,
    };
  },
}));
