
export enum HTTPMethod {
  GET = 'get',
  POST = "post",
  PUT = "put",
  DEL = "delete",
  PATCH = "patch",
  CHECKOUT = "checkout",
  CONNECT = "connect",
  COPY = "copy",
  HEAD = "head",
  LOCK = "lock",
  MERGE = "merge",
  MKACTIVITY = "mkactivity",
  MKCOL = "mkcol",
  MOVE = "move",
  MSEARCH = "m-search",
  NOTIFY = "notify",
  OPTIONS = "options",
  PROPFIND = "propfind",
  PROPPATCH = "proppatch",
  PURGE = "purge",
  REPORT = "report",
  SEARCH = "search",
  SUBSCRIBE = "subscribe",
  TRACE = "trace",
  UNLOCK = "unlock",
  UNSUBSCRIBE = "unsubscribe"
}

class Params {
  param: Array<Object> = [];

}

export const getMetadataArgsStorage = function () {
  return new Params();
}

