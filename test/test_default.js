let obj=require("../root.js");
let defaults=require("../defaults.js");

const default_1={ name: 'Madv', age: 18, location: 'Guntur'}


console.log(defaults({ name: 'Bruce Wayne', age: 36, location: undefined},default_1));