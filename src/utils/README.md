# koa-router-decors

简化`koa-router`路由书写方法。

## 使用方法

### 1. 书写路由文件`user.ts`;

```typescript
import { Router, HTTPMethod } from "../utils/decorators";
class User {
    @Router(HTTPMethod.GET,'/user')
    async get(ctx) {
        ctx.body = {
            user: {},
        };
    }
}
```

### 2. 加载路由文件

```typescript
import * as Koa from 'koa';
import { load } from "./utils/decorators";

const app = new Koa();
 let router = load(resolve(__dirname, '路由目录'));
 app.use(router.routes());
```
