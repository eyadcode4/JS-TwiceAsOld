import { describe, it, expect } from 'vitest';
import { calcAgeTwice } from './twiceAsOld.js';

describe('calcAgeTwice', () => {
    it('diff between', () => {
        expect(calcAgeTwice(36, 7)).toBe(22);
    });

    it('father age years after son has double age ', () => {
    expect(calcAgeTwice(55, 30)).toBe(5)
    });

    it('zero year when son has half of his father', () => {
    expect(calcAgeTwice(42, 21)).toBe(0)
    });

    it('diff', () => {
    expect(calcAgeTwice(22, 1)).toBe(20);
    });

    it('diff', () => {
    expect(calcAgeTwice(29, 0)).toBe(29);
    });

})