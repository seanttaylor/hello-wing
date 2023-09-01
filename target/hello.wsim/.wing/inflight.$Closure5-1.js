module.exports = function({ $db }) {
  class $Closure5 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const id = (request.vars)["id"];
      (await $db.delete(id));
      return ({"status": 204});
    }
  }
  return $Closure5;
}
