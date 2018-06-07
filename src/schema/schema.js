export const schema = (pattern, acceptUndeclaredValues = false) => {
    const base = Object.assign(pattern);

    return {
        isValid: (target) => {
            let result = Object.keys(target).map(key => {
                console.log(target[key], typeof target[key]);
            });
        }
    }
}
