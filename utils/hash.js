const bcrypt = require('bcrypt')

const hashPassword = async(password)=>{
    const salt = 10
    return await bcrypt.hash(password,salt)
};

const comparePassword=async(password,hashPassword)=>{
    return bcrypt.compare(password,hashPassword)
}

module.exports = { hashPassword,comparePassword }