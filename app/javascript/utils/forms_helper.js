export const cleanContactObject = (object) => {
    Object.keys(object).forEach(key =>
        object[key] === undefined ? delete object[key] : {}
    );
}
