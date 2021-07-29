
export const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}

export const cleanContactObject = (object) => {
    Object.keys(object).forEach(key =>
        object[key] === undefined ? delete object[key] : {}
    );
}
