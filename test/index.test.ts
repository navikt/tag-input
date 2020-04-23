import Component, { parseTekst } from './../src/tag-input';

describe('index - exports', () => {
    it('should export default `Component`', () => {
        expect(Component).not.toBe(null)
    });

    it('should export `parseTekst`', () => {
        expect(parseTekst).not.toBe(null)
    });
});
