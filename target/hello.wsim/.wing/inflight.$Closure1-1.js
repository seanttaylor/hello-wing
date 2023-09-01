module.exports = function({ $db, $std_Json }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const result = [];
      let i = 0;
      for (const employee of (await $db.list())) {
        ((obj, args) => { obj[args[0]] = args[1]; })(result, [i,employee]);
        i = (i + 1);
      }
      return ({"status": 200,"body": ((args) => { return JSON.stringify(args[0], null, args[1]?.indent) })([result])});
    }
  }
  return $Closure1;
}
