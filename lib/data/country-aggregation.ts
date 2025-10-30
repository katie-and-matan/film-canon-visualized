import type { Film, PollYear, RankingTier, TopNCountries } from '@/lib/types/film';

export interface CountryChartData {
  country: string;
  count: number;
}

/**
 * Filters films based on poll year and ranking tier
 */
export function filterFilms(films: Film[], pollYear: PollYear, rankingTier: RankingTier): Film[] {
  return films.filter((film) => {
    // Filter by poll year
    if (pollYear !== 'all') {
      const yearData = film.pollYears[pollYear];
      // Film must have a rank (rank > 0) to be included
      if (yearData.rank === 0) {
        return false;
      }

      // Filter by ranking tier
      if (rankingTier === 'top100' && yearData.rank > 100) {
        return false;
      }
      if (rankingTier === 'top250' && yearData.rank > 250) {
        return false;
      }
    } else {
      // For "all years", check if film appeared in ANY poll
      const appearedInAnyPoll = Object.values(film.pollYears).some((yearData) => yearData.rank > 0);

      if (!appearedInAnyPoll) {
        return false;
      }

      // For "all years" with ranking tier, filter by best rank achieved
      if (rankingTier !== 'all') {
        const bestRank = Math.min(
          ...Object.values(film.pollYears)
            .map((yearData) => yearData.rank)
            .filter((rank) => rank > 0),
        );

        if (rankingTier === 'top100' && bestRank > 100) {
          return false;
        }
        if (rankingTier === 'top250' && bestRank > 250) {
          return false;
        }
      }
    }

    return true;
  });
}

/**
 * Aggregates filtered films by country, counting each country separately for multi-country films
 */
export function aggregateByCountry(films: Film[], topN: TopNCountries): CountryChartData[] {
  const countryCounts = new Map<string, number>();

  // Count films for each country
  for (const film of films) {
    // Each country in countryArray gets counted separately
    for (const country of film.countryArray) {
      const currentCount = countryCounts.get(country) || 0;
      countryCounts.set(country, currentCount + 1);
    }
  }

  // Convert to array and sort by count descending
  const sortedData = Array.from(countryCounts.entries())
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count);

  // Return top N countries
  return sortedData.slice(0, topN);
}

/**
 * Main function to get chart data with all filters applied
 */
export function getCountryChartData(
  films: Film[],
  pollYear: PollYear,
  rankingTier: RankingTier,
  topN: TopNCountries,
): CountryChartData[] {
  const filtered = filterFilms(films, pollYear, rankingTier);
  return aggregateByCountry(filtered, topN);
}
