import * as Koa from 'koa';
import KoaRouter from 'koa-router';
import * as glob from 'glob';
import { getMetadataArgsStorage } from './Requerst';


type HTTPMethodTyoe = 'get' | 'post' | 'put' | 'del' | 'patch';
type RouteOptions = {
  prefix?: string;
  middlewares?: Array<Koa.Middleware>
};
type loadOptions = {
  exthname?: string;
};
export const Router = (mathod: HTTPMethodTyoe, path: string, options?: RouteOptions) => route(mathod, path, options);



let route = function (mathod: HTTPMethodTyoe, path: string, options: RouteOptions = {}) {
  return function (target: any, property: string) {

  }
}

export const load = (prefix: string, folder: string, options: loadOptions = {}): KoaRouter => {
  const extname = options.exthname || '.{js,ts}';
  const router = new KoaRouter();
  route = function (mathod: HTTPMethodTyoe, path: string, options: RouteOptions = {}) {
    return function (target: any, property: string) {
      process.nextTick(() => {
        let url = target.prefix ? target.prefix + path : path;
        url = prefix + url;
        // console.log(mathod, url, target[property]);
        router[mathod](url, target[property])
      })
    }
  }
  glob.sync(require('path').join(folder, `./**/*${extname}`)).forEach(item => require(item));
  return router
}


/**
 * 应用在类上，以给该类中所有路由添加中间件
 * @param middlewares Koa.Middleware数组
 */
export const RequestMapping = function (path: string) {
  return (target: any) => {
    target.prototype.prefix = path;
  };
}




export enum HTTPMethod {
  GET = 'get',
  POST = "post",
  PUT = "put",
  DEL = "del",
  PATCH = "patch"
}


export function Param(name: string): Function {
  return function (object: Object, methodName: string, index: number) {
    [{
      type: "param",
      object: object,
      method: methodName,
      index: index,
      name: name,
      parse: false, // it does not make sense for Param to be parsed
      required: true, // params are always required, because if they are missing router will not match the route
      classTransform: undefined
    }].filter(param => {
      return param.object.constructor === target && param.method === methodName;
    })
  };
}
