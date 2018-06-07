import { schema } from './schema/schema.js';
const key = (rules, values) => ({
    rules,
    values,
})

const types = {
    array: (key) => {
        const result = Array.isArray(key);
    },
    bool: (key) => typeof key === 'bool',
    number: 'number',
    string: 'string',
    object: 'object',
};

const rules = {
    type: 'type',
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