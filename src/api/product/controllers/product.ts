/**
 * product controller
 */

import { factories } from "@strapi/strapi"

export default factories.createCoreController("api::product.product", ({ strapi }) => ({
  // this controller can be viewed inside products inside roles under user and permissions

  async logValue(ctx, next) {
    // console.log(ctx.state);
    // console.log(ctx, "just above the plugin controller")
    // console.log(ctx.request.body, "from logVaue ctx request body")

    // const users = await strapi.service("plugin::users-permissions.user").find(ctx, next)
    // console.log(strapi.service("plugin::users-permissions.user").fetchAll) // to get the functionName as used below

    // careful, because this will show each and evey details, including passwords and the fields which the users isn't supposed to see
    const users = await strapi.service("plugin::users-permissions.user").fetchAll({
      populate: "*",
      fields: [
        {
          password: false,
        },
      ],
    })

    /* console.log(ctx.state, "ctx.state")

    console.log(user) */

    // console.log(users, "users from plugi controllers")
    // response on the postman returns from the find controller

    /* console.log(
      strapi.controller("api::product.custom-controller")["custom-controller-function"](ctx, next),
      "plugin controller"
    ) */

    return {
      success: true,
      message: "successful",
      fetchedUsers: users,
    }
  },
}))
