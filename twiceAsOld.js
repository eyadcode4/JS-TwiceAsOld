function calcAgeTwice(edadaPadre, edadHijo) {
    const diference = edadaPadre - edadHijo;
    if (diference > edadHijo){
        return diference - edadHijo;
    } else {
        return edadHijo - diference;
    }
}

export { calcAgeTwice }