import { describe, it, expect } from 'vitest';
import { parseFilmData } from './csv-parser';

describe('parseFilmData', () => {
  it('parses a single film correctly', () => {
    const csv = `key,databaseFilmTitle,FilmTitle,AlternateTitle,ARR_TitleArray,Year,Director,ARR_DirectorArray,Country,ARR_CountryArray,1952rank,1952votes,1962rank,1962votes,1972rank,1972votes,1982rank,1982votes,1992rank,1992votes,2002rank,2002votes,2012rank,2012votes,2022rank,2022votes
1,Test Film,Test Film,,Test Film,2020,Test Director,Test Director,United States,United States,0,0,0,0,0,0,0,0,0,0,100,5,50,10,25,20`;

    const result = parseFilmData(csv);

    expect(result).toHaveLength(1);
    expect(result[0].key).toBe(1);
    expect(result[0].filmTitle).toBe('Test Film');
    expect(result[0].year).toBe(2020);
    expect(result[0].countryArray).toEqual(['United States']);
    expect(result[0].pollYears[2002].rank).toBe(100);
    expect(result[0].pollYears[2002].votes).toBe(5);
    expect(result[0].pollYears[1952].rank).toBe(0);
  });

  it('parses multi-country films correctly', () => {
    const csv = `key,databaseFilmTitle,FilmTitle,AlternateTitle,ARR_TitleArray,Year,Director,ARR_DirectorArray,Country,ARR_CountryArray,1952rank,1952votes,1962rank,1962votes,1972rank,1972votes,1982rank,1982votes,1992rank,1992votes,2002rank,2002votes,2012rank,2012votes,2022rank,2022votes
2,Test Film 2,Test Film 2,,Test Film 2,2020,Test Director,Test Director,"France, United States",France; United States,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,10`;

    const result = parseFilmData(csv);

    expect(result[0].countryArray).toEqual(['France', 'United States']);
  });

  it('handles empty/missing rank values', () => {
    const csv = `key,databaseFilmTitle,FilmTitle,AlternateTitle,ARR_TitleArray,Year,Director,ARR_DirectorArray,Country,ARR_CountryArray,1952rank,1952votes,1962rank,1962votes,1972rank,1972votes,1982rank,1982votes,1992rank,1992votes,2002rank,2002votes,2012rank,2012votes,2022rank,2022votes
3,Test Film 3,Test Film 3,,Test Film 3,2020,Test Director,Test Director,France,France,,0,0,0,,0,,0,,0,,0,,0,,0`;

    const result = parseFilmData(csv);

    expect(result[0].pollYears[1952].rank).toBe(0);
    expect(result[0].pollYears[1972].rank).toBe(0);
  });
});
