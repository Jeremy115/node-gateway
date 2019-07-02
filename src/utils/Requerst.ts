
export enum HTTPMethod {
  GET = 'get',
  POST = "post",
  PUT = "put",
  DEL = "del",
  PATCH = "patch"
}
class Params {
  param: Array<Object> = [];

}

export const getMetadataArgsStorage = function () {
  return new Params();
}

