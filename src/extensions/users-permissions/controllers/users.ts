import { Context, Next } from "koa"

export default {
  createManyUsers: async (ctx: Context, next: Next) => {
    console.log(ctx.request.body ?? "no body")

    return {
      message: "plugin controller extended",
    }
  },
}
