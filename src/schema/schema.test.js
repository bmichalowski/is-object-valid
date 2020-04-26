import { schema } from './schema';

describe('schema', ()=>{
    it('should have isValid function', ()=>{
        const testObj = schema({});
        expect(typeof testObj.isValid).toBe('function');
    });    
});