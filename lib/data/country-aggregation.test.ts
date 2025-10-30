import { describe, it, expect } from 'vitest';
import { filterFilms, aggregateByCountry } from './country-aggregation';
import type { Film } from '@/lib/types/film';

describe('filterFilms', () => {
  const mockFilms: Film[] = [
    {
      key: 1,
      filmTitle: 'Film 1',
      countryArray: ['United States'],
      pollYears: {
        1952: { rank: 0, votes: 0 },
        1962: { rank: 0, votes: 0 },
        1972: { rank: 0, votes: 0 },
        1982: { rank: 0, votes: 0 },
        1992: { rank: 0, votes: 0 },
        2002: { rank: 50, votes: 100 },
        2012: { rank: 0, votes: 0 },
        2022: { rank: 0, votes: 0 },
      },
    } as Film,
    {
      key: 2,
      filmTitle: 'Film 2',
      countryArray: ['France'],
      pollYears: {
        1952: { rank: 0, votes: 0 },
        1962: { rank: 0, votes: 0 },
        1972: { rank: 0, votes: 0 },
        1982: { rank: 0, votes: 0 },
        1992: { rank: 0, votes: 0 },
        2002: { rank: 150, votes: 50 },
        2012: { rank: 0, votes: 0 },
        2022: { rank: 0, votes: 0 },
      },
    } as Film,
  ];

  it('filters by specific poll year', () => {
    const result = filterFilms(mockFilms, 2002, 'all');
    expect(result).toHaveLength(2);
  });

  it('filters by top 100 ranking tier', () => {
    const result = filterFilms(mockFilms, 2002, 'top100');
    expect(result).toHaveLength(1);
    expect(result[0].filmTitle).toBe('Film 1');
  });

  it('filters by top 250 ranking tier', () => {
    const result = filterFilms(mockFilms, 2002, 'top250');
    expect(result).toHaveLength(2);
  });
});

describe('aggregateByCountry', () => {
  const mockFilms: Film[] = [
    {
      key: 1,
      countryArray: ['United States'],
    } as Film,
    {
      key: 2,
      countryArray: ['United States'],
    } as Film,
    {
      key: 3,
      countryArray: ['France', 'United States'], // Multi-country
    } as Film,
  ];

  it('counts each country separately for multi-country films', () => {
    const result = aggregateByCountry(mockFilms, 10);

    const us = result.find((d) => d.country === 'United States');
    const france = result.find((d) => d.country === 'France');

    expect(us?.count).toBe(3); // All three films
    expect(france?.count).toBe(1); // Only the multi-country film
  });

  it('sorts by count descending', () => {
    const result = aggregateByCountry(mockFilms, 10);
    expect(result[0].country).toBe('United States');
    expect(result[0].count).toBe(3);
  });

  it('limits to top N countries', () => {
    const mockFilmsWithManyCountries: Film[] = [
      { key: 1, countryArray: ['United States'] } as Film,
      { key: 2, countryArray: ['United States'] } as Film,
      { key: 3, countryArray: ['France'] } as Film,
      { key: 4, countryArray: ['Japan'] } as Film,
      { key: 5, countryArray: ['United Kingdom'] } as Film,
      { key: 6, countryArray: ['Italy'] } as Film,
      { key: 7, countryArray: ['Germany'] } as Film,
      { key: 8, countryArray: ['Spain'] } as Film,
    ];

    const result = aggregateByCountry(mockFilmsWithManyCountries, 5);
    expect(result).toHaveLength(5); // Should limit to exactly 5
    expect(result[0].country).toBe('United States'); // Still highest count
  });
});
