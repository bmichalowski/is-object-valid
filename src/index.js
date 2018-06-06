let schema = require('./schema/schema.js').schema;

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
    b: v(types.object, {c: v(types.number)})
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