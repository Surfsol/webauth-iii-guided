jwt.io  - site to debug token

token 3 parts
header
payload
verify signature - secret, verifies token was not changed

client will have to save token 

cyptografically signed

npm i jsonwebtoken

const jwt = require('jsonwebtoken')

{const token = generateToken(user)}

res.status(200).json({
    token
})


function generateToken(user){
    const payload = {
        subject: user.id //sub property in header
        username: user.name,
        //additional data, do not include sensitve info
    }
    const secret = 'aslskek34l4kfnad'
    const options = {
        expiresIn : '8h'
    }
    return jwt.signed(payload, secret, options)
}


module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'keep no creste, hu8'
}