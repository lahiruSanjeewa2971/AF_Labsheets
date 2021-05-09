const Koa = require('koa');
//serve = require('koa-static');
serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.routes');

require('./dal');
const app = new Koa();

app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());

app.use(bodyParser());

app.use(serve('public/'));

app.listen(3000, err => {
    if (err){
        console.log(err);
        return;
    }
    console.log("Application is running on port 3000");
});


