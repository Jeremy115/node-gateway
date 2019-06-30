import * as Koa from 'koa';
import KoaRouter from 'koa-router';
import * as glob from 'glob';
type HTTPMethodTyoe = 'get' | 'post' | 'put' | 'del' | 'patch';
type RouteOptions = {
  prefix?: string;
  middlewares?: Array<Koa.Middleware>
};
type loadOptions = {
  exthname?: string;
};
const router = new KoaRouter();


export const load = (folder: string, options: loadOptions = {}) => {
  const extname = options.exthname || '.{js,ts}';
  glob.sync(require('path').join(folder, `./**/*${extname}`)).forEach(item => require(item));
  return router
}
export const Router = function (mathod: HTTPMethodTyoe, path: string, options: RouteOptions = {}) {
  return function (target: any, property: string, descriptor: any) {
    const url = options.prefix ? options.prefix + path : path;
    router[mathod](url, target[property])
  }
}

/**
 * 应用在类上，以给该类中所有路由添加中间件
 * @param middlewares Koa.Middleware数组
 */
export const middlewares = (middlewares: Array<Koa.Middleware>) => {
  return function (target: any) {
    target.prototype.middlewares = middlewares;
  };
};
export enum HTTPMethod {
  GET = 'get',
  POST = "post",
  PUT = "put",
  DEL = "del",
  PATCH = "patch"
}
