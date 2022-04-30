const { Users } = require('../db')
const { check } = require("../validation/validation");


const prueba = (req ,res ,next) => {
    console.log("AQUI");
    res.send("Has sentido el poder del cosmos?");
}


// const crearclient = async( req , res , next) => {
//     console.log(req.body);
//     try {
//         const {name, lastName , age , birthday} = req.body
        
//         const validations =  check({name: name , lastName: lastName , age : age , birthday: birthday})
//         if (validations) {
//             const user = Users.create({name, lastName , age , birthday})
//             res.send(`User ${ name }created`).status(201)
//         } else {
//             console.log(error); 
//         }
//     } catch (error) {
//         console.log(error);
//         next(error)
//     }
// }
module.exports = {
    prueba
  };