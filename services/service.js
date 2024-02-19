const model = require("../models/model");


const services = {
//   store: async (username, password, res) => {
//     return await model.create({ username, password });
//   },

addData:async(username,password)=>{
    return await model.create({username,password})
}
};

module.exports = services;
