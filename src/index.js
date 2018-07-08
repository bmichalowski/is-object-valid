import { schema } from './schema/schema.js';
const key = (rules, values) => ({
    rules,
    values,
})

const types = {
    array: 'array',
    bool: 'bool',
    number: 'number',
    string: 'string',
    object: 'object',
    function: 'function',
};

const rules = {
    type: (expected) => (value) => {
        let result;
        switch(expected) {
            case array:
                result = Array.isArray(value);
            default:
                result = typeof value === expected;
        }
        return {
            result,
            message: result ? null : `Expected '${expected}' but got '${value}'.`,
        };
    },
    minLength: (expected) => (value) => {
        if (value.hasOwnProperty('length')) {
            return {
                result: value.length >= expected,
                message: `Expected length to be equal at least ${expected} but got '${value.length}'.`
            }
        } else {
            return { 
                result: false,
                message: `No length property available at '${value}'`,
            }
        }

    },
    maxLength: (expected) => (value) => {
        if (value.hasOwnProperty('length')) {
            return {
                result: value.length <= expected,
                message: `Expected length to be equal at least ${expected} but got '${value.length}'.`,
            }
        } else {
            return { 
                result: false,
                message: `No length property available at '${value}'`,
            }
        }
    },
    minValue: (expected) => (value) => ({
        result: value >= expected,
        message: `Expected min value to be equal at least ${expected} but got '${value}'.`,
    }),
    maxValue: (expected) => (value) => ({
        result: value <= expected,
        message: `Expected max value to be equal ${expected} but got '${value}'.`,
    }),
    regex: (regex, flag) => (value) => {
        let result;
        try {
            result = new Regex(regex, flag).test(value);
        } catch {
            result = false;
        }
        return {
            valid: result || new Regex(regex, flag).test(value),
            message: `Regex test failed for value '${value} - regex was: ${regex}, ${flag}'`,
        }
    },
    custom: (custom) => (value) => {
        try{
            if(typeof custom !== 'function') {
                constole.log(`Error at custom for '${value}' - custom have to be a function.`)
                return;
            }
            custom(value);
        } catch(error) {
            console.log(`Error at custom for '${value}' - ${error}`);
        }
        return;
    },
};

const base = {
    a: key(types.string),
    b: key(types.object, {c: key(types.number)})
};

schema(base).isValid({a: 2, b: 'c', c: null, d: [], e: true});

// // rules

// type
// min 
// max
// minValue
// maxValue
// regex
// custom

// rules, child