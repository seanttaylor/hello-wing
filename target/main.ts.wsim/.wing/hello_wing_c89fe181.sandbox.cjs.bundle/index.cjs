"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// target/main.ts.wsim/.wing/hello_wing_c89fe181.sandbox.cjs
var $handler = void 0;
exports.handler = async function(event) {
  $handler = $handler ?? await (async () => {
    const $func = /* @__PURE__ */ __name(async function helloWing() {
      return "Wing!";
    }, "helloWing");
    const $ctx = {};
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
