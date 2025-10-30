import Papa from 'papaparse';
import type { Film, PollYearData } from '@/lib/types/film';

/**
 * Parses the main-data.csv file and returns an array of Film objects
 */
export function parseFilmData(csvText: string): Film[] {
  const result = Papa.parse<Record<string, string>>(csvText, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: false, // We'll handle type conversion manually
  });

  if (result.errors.length > 0) {
    console.error('CSV parsing errors:', result.errors);
  }

  return result.data.map((row) => {
    // Parse country array from semicolon-delimited string
    const countryArray = row.ARR_CountryArray
      ? row.ARR_CountryArray.split(';')
          .map((c) => c.trim())
          .filter((c) => c.length > 0)
      : [];

    // Parse director array
    const directorArray = row.ARR_DirectorArray
      ? row.ARR_DirectorArray.split(';')
          .map((d) => d.trim())
          .filter((d) => d.length > 0)
      : [];

    // Parse title array
    const titleArray = row.ARR_TitleArray
      ? row.ARR_TitleArray.split(';')
          .map((t) => t.trim())
          .filter((t) => t.length > 0)
      : [];

    // Parse poll year data
    const pollYears = {
      1952: parsePollYearData(row['1952rank'], row['1952votes']),
      1962: parsePollYearData(row['1962rank'], row['1962votes']),
      1972: parsePollYearData(row['1972rank'], row['1972votes']),
      1982: parsePollYearData(row['1982rank'], row['1982votes']),
      1992: parsePollYearData(row['1992rank'], row['1992votes']),
      2002: parsePollYearData(row['2002rank'], row['2002votes']),
      2012: parsePollYearData(row['2012rank'], row['2012votes']),
      2022: parsePollYearData(row['2022rank'], row['2022votes']),
    };

    return {
      key: Number.parseInt(row.key, 10),
      databaseFilmTitle: row.databaseFilmTitle || '',
      filmTitle: row.FilmTitle || '',
      alternateTitle: row.AlternateTitle || '',
      titleArray,
      year: Number.parseInt(row.Year, 10) || 0,
      director: row.Director || '',
      directorArray,
      country: row.Country || '',
      countryArray,
      pollYears,
    };
  });
}

/**
 * Helper to parse rank and votes for a single poll year
 */
function parsePollYearData(rank: string, votes: string): PollYearData {
  // Rank: empty string or "0" means not ranked
  // Votes: "0" means no votes
  const parsedRank = rank && rank !== '0' ? Number.parseInt(rank, 10) : 0;
  const parsedVotes = votes ? Number.parseInt(votes, 10) : 0;

  return {
    rank: parsedRank,
    votes: parsedVotes,
  };
}
