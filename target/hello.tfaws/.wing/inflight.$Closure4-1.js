module.exports = function({ $db, $std_Json }) {
  class $Closure4 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      {
        const $if_let_value = request.body;
        if ($if_let_value != undefined) {
          const body = $if_let_value;
          const employeeData = (JSON.parse(body));
          const id = (request.vars)["id"];
          (await $db.update(id,employeeData));
          return ({"status": 200,"body": ((args) => { return JSON.stringify(args[0], null, args[1]?.indent) })([employeeData])});
        }
      }
    }
  }
  return $Closure4;
}
