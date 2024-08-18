"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// target/main.ts.wsim/.wing/onrequesthandler1_c84819d7.sandbox.cjs
var $handler = void 0;
exports.handler = async function(event) {
  $handler = $handler ?? await (async () => {
    const $func = /* @__PURE__ */ __name(async (ctx, event2) => {
      if (!event2) {
        throw new Error("invalid API request event");
      }
      const response = await ctx.handler(event2);
      if (!response) {
        return void 0;
      } else {
        return response;
      }
    }, "$func");
    const $ctx = {
      handler: await (async () => {
        const $func2 = /* @__PURE__ */ __name(async (ctx, request) => {
          const val = JSON.parse(request?.body);
          console.log(val.header);
          return {
            status: 200,
            body: JSON.stringify({
              name: "com.beepboop.api.intents",
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            }),
            headers: {
              "content-type": "application/json"
            }
          };
        }, "$func");
        const $ctx2 = {};
        let newFunction2 = /* @__PURE__ */ __name(async (...args) => {
          return $func2($ctx2, ...args);
        }, "newFunction");
        newFunction2.handle = newFunction2;
        return newFunction2;
      })()
    };
    let newFunction = /* @__PURE__ */ __name(async (...args) => {
      return $func($ctx, ...args);
    }, "newFunction");
    newFunction.handle = newFunction;
    return newFunction;
  })();
  return await $handler.handle(event);
};
process.on("uncaughtException", (reason) => {
  process.send({ type: "error", reason });
});
process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "ok", value });
});
//# sourceMappingURL=index.cjs.map
