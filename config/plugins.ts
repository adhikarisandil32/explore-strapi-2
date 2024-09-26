export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("cloudinary_cloud_name"),
        api_key: env("cloudinary_api_key"),
        api_secret: env("cloudinary_api_secret"),
      },
    },
  },
  /* "my-plugin": {
    enabled: true,
    resolve: "./src/plugins/my-plugin",
  }, */
  /* "users-permissions": {
    enabled: false
  } */
  
});
