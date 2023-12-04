export default function validate(newUser) {
    const newError = {};
    if (!newUser.name || newUser.name?.length < 3 || newUser.name?.length > 100) {
        newError.name = "El nombre debe tener entre 3 y 100 letras";
    } else {
        newUser.name.split(/[ ,]+/).forEach((element) => {
            if (element.length > 23)
                newError.name = "El nombre no puede tener mas de 23 letras";
        });
    }
    if (!newUser.email) {
        newError.email = 'Email es requerido';
    }
    if (!newUser.password) {
        newError.password = 'Contraseña es requerida';
    } else {
        if (newUser.password.length < 6) {
            newError.password = 'La contraseña debe tener al menos 6 caracteres';
        }
    }
    if (!newUser.confirmPassword) {
        newError.confirmPassword = 'Contraseña es requerida';
    }
    if (newUser.password !== newUser.confirmPassword) {
        newError.confirmPassword = 'Error contraseñas diferentes';
    }

    return { ...newError };
}