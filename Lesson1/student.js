const Module = require("module");

const getName = () => {
    return "Sadik Saroar";
}

const getAge = () =>{
    return "24";
}
 const cgpa = 2.30;
// exports.getName = getName;
// exports.getAge = getAge;

module.exports  = {
    getAge, getAge, cgpa,
}