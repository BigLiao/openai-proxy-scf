const Koa = require('koa');
const proxy = require('koa-proxy');

const app = new Koa();

app.use(proxy({
  host: 'https://api.openai.com',
  match: /^\/closeai2024/,
  map: (path) => path.replace(/^\/closeai2024/, ''),
  jar: true,
  requestOptions: {
    strictSSL: false
  }
}));

const port = 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
