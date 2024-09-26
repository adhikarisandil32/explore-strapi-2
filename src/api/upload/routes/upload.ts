export default {
  routes: [
    /* {
      method: "GET",
      path: "/upload/files",
      handler: 'upload-handler.upload-handler',
      policies: ["allow-all"]
    },
    {
      method: "DELETE",
      path: "/upload/files-del/:id",
      handler: "content-api.destroy",
      policies: ["allow-all"]
    } */
    {
      method: "GET",
      path: "/upload/files",
      handler: "upload-core.uploadFile",
      // policies: ["allow-all"]
    },
  ],
};

/* 
import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("plugin::upload.file", {
  config: {
    find: {
      policies: [],
      middlewares: [],
      auth: false
    },
    findOne: {
      policies: [],
      middlewares: [],
      auth: false
    }
  }
}) */