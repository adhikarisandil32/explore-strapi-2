import slugify from "slugify"

export default {
  async beforeCreate(event) {
    // console.log(event, "event from beforeCreate lifecycle ")
    const {
      params: { data },
    } = event
    // console.log(data, "from lifeyccle");
    /* console.log(event.params.populate,"params.populate")
    console.log(event.params.data, "params.data") */
    const slug = slugify(data.name.toLowerCase())

    /* const existingSimilarSlugs = await strapi.db.query("api::product.product").findMany({
      where: {
        slug: slug
      },
      orderBy: {
        slug: 'desc'
      }
    })

    console.log(existingSimilarSlugs) */

    data.slug = slug
  },
}
