const proxy = require("http-proxy-middleware");

module.exports = function(app) {
app.use(
    proxy("/api", {
      target: backend:3001,
      changeOrigin: true,
    });
  )
}
