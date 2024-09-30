import controller from "./controllers/users"

export default (plugin) => {
  plugin.controllers.user.createMany = controller.createManyUsers

  plugin.routes["content-api"].routes.push({
    method: "POST",
    path: "/users/create-many",
    handler: "user.createMany",
    config: {
      prefix: "",
    },
  })

  return plugin
}
