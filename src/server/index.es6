import { resolve } from 'path';
import Koa from 'koa';
import convert from 'koa-convert';
import serve from 'koa-static';
import { default as cfg } from './config';

const app = new Koa();

app.use(async (ctx, next) => {
    const start = new Date;
    await next();
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(convert(serve(resolve(__dirname, cfg.static_dir))));

app.listen(3000);
