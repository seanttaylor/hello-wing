module.exports = function({ $db, $std_Json }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const employee = (await $db.get((request.vars)["id"]));
      return ({"status": 200,"body": ((args) => { return JSON.stringify(args[0], null, args[1]?.indent) })([employee])});
    }
  }
  return $Closure2;
}
