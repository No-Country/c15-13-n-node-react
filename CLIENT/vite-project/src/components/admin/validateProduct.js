export default function validateProduct(newProduct) {
    const newError = {};
    if (!newProduct.name || newProduct.name?.length < 3 || newProduct.name?.length > 100) {
        newError.name = "El nombre debe tener entre 3 y 100 letras";
    } else {
        newProduct.name.split(/[ ,]+/).forEach((element) => {
            if (element.length > 23)
                newError.name = "El nombre no puede tener mas de 23 letras";
        });
    }

    if (!newProduct.reference || newProduct.reference?.length < 3 || newProduct.reference?.length > 100) {
        newError.reference = "La referencia debe tener entre 3 y 100 letras";
    } else {
        newProduct.reference.split(/[ ,]+/).forEach((element) => {
            if (element.length > 23)
                newError.reference = "El nombre no puede tener mas de 23 letras";
        });
    }
    if (!newProduct.description || newProduct.description?.length < 3 || newProduct.description?.length > 100) {
        newError.reference = "La referencia debe tener entre 3 y 100 letras";
    } else {
        newProduct.description.split(/[ ,]+/).forEach((element) => {
            if (element.length > 23)
                newError.description = "El nombre no puede tener mas de 23 letras";
        });
    }

    return { ...newError };
}