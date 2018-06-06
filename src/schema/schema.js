exports.schema = (base, acceptUndeclaredValues) => {
    this.base = base;
    this.acceptUndeclaredValues = acceptUndeclaredValues;

    return {
        isValid: (target) => {
            let result = Object.keys(target).map(key => {
                console.log(target[key], typeof target[key]);
            });
        }
    }
}

