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
    type: (expected) => {
        return (value) => {
            let result;
            switch(expected) {
                case array:
                    result = Array.isArray(value);
                default:
                    result = typeof value === expected;
            }
            return {
                result,
                message: result ? '' : `Expected '${expected}' but got '${value}'.`
            };
        }
    },
    minLength: 'minLength',
    maxLength: 'maxLength',
    minValue: 'minValue',
    maxValue: 'maxValue',
    regex: 'regex',
    custom: 'custom',
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