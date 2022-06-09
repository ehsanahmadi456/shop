export const validate = (data, type) => {
    
    const errors = {};
    
    if (!data.name.trim()) {
        errors.name = "Username required"
    } else {
        delete errors.name
    }

    if (!data.password) {
        errors.password = "Password is required"
    } else if (data.password.length < 6) {
        errors.password = "Password need to be 6 character or more"
    } else {
        delete errors.password
    }
    
            if (data.isAccepted) {
                delete errors.isAccepted
            } else {
                errors.isAccepted = "Accept our regulations"
            }
    
    if (type === "signup") {
        
        if (!data.email) {
            errors.email = "Email required"
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email address is invalid"
        } else {
            delete errors.email
        }
    }

    return errors;
}