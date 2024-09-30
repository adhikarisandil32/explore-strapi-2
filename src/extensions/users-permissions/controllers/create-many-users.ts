import Strapi from "@strapi/strapi";
import { factories } from "@strapi/strapi";
import { Context } from "koa";

export default factories.createCoreController(
  "plugin::users-permissions.user",
  ({ strapi: Strapi }) => ({
    async createManyUsers(ctx: Context) {
      
    },
  }),
);
