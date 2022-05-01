const Validator = require("fastest-validator");
const v = new Validator({});

const schema = {
    name: { type: "string", min: 3, max: 30 },
    lastName: { type:"string", min: 3, max: 30 },
    age: {type:"number"},
    birthday: {type: "date"}
    
};
const isValidDate = (dateString) => {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  };
const check = v.compile(schema);

module.exports ={
    check,
    isValidDate
}