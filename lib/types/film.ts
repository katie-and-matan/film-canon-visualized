/**
 * Represents a film entry from the Sight and Sound dataset
 */
export interface Film {
  key: number;
  databaseFilmTitle: string;
  filmTitle: string;
  alternateTitle: string;
  titleArray: string[];
  year: number;
  director: string;
  directorArray: string[];
  country: string; // Original comma-separated format
  countryArray: string[]; // Parsed from ARR_CountryArray
  pollYears: {
    1952: PollYearData;
    1962: PollYearData;
    1972: PollYearData;
    1982: PollYearData;
    1992: PollYearData;
    2002: PollYearData;
    2012: PollYearData;
    2022: PollYearData;
  };
}

export interface PollYearData {
  rank: number; // 0 if not ranked
  votes: number;
}

export type PollYear = 1952 | 1962 | 1972 | 1982 | 1992 | 2002 | 2012 | 2022 | 'all';
export type RankingTier = 'all' | 'top100' | 'top250';
export type TopNCountries = 5 | 10 | 15 | 20;
