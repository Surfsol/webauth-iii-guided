//validate users

module.exports ={
    validateUser
}

function validateUser(user){
    //collection of errors
    let errors = []

    if(!user.username || user.username.length < 2){
        error.push("Please include a username with at least 2 characters")
    }

    if(!user.password || user.password.length < 4){
        error.push("Please include a password with at least 4 characters")
    }

    return{
        isSuccessful: errors.length > 0 ? false : true,
        errors
    }
}

