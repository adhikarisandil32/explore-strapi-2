/**
 * product router
 */

import { factories } from "@strapi/strapi"

export default factories.createCoreRouter("api::product.product", {
  config: {
    create: {
      middlewares: [
        async (ctx, next) => {
          console.log("here we arrived, create product middleware")
          console.log(ctx.request?.body ?? ctx.request, "from create middleware create")

          return next()
        },
      ],
    },
    find: {
      middlewares: [
        async (ctx, next) => {
          console.log("here we are, find product middleware")
          console.log(ctx.request, "from find middleware")
          return next()
        },
      ],
    },
  },
})
