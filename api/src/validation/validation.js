const Validator = require("fastest-validator");
const v = new Validator({});

const schema = {
    name: { type: "string", min: 3, max: 30 },
    lastName: { type:"string", min: 3, max: 30 },
    age: {type:"number"},
    birthday: {type: "date"}
    
};

const check = v.compile(schema);

module.exports ={
    check
}