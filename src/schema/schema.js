export const schema = (pattern, acceptUndeclaredValues = false) => {
    const base = Object.assign({}, pattern);
    // todo: check if pattern has valid structure
    return {
        isValid: (target) => {
            let result = {
                valid: true,
                message: null,
            }
            if(!acceptUndeclaredValues) {
//                console.log('undeclare values test:',base.length === Object.keys(target).length);
                Object.keys(base).forEach((key)=>{

                })
            }
            result = Object.keys(target).map(key => {
                console.log(target[key], typeof target[key]);
            });
        }
    }
}

const check = (valuesArray) => {
    
}
