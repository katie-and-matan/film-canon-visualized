import { describe, it, expect } from 'vitest';
import { parseFilmData } from './csv-parser';

describe('parseFilmData', () => {
  it('returns empty array for placeholder implementation', () => {
    const result = parseFilmData('test');
    expect(result).toEqual([]);
  });
});
