import { useQuery } from '@tanstack/react-query';
import { parseFilmData } from '@/lib/utils/csv-parser';
import type { Film } from '@/lib/types/film';

export function useFilmData() {
  return useQuery<Film[]>({
    queryKey: ['films'],
    queryFn: async () => {
      const response = await fetch('/data/main-data.csv');
      if (!response.ok) {
        throw new Error('Failed to fetch film data');
      }
      const text = await response.text();
      return parseFilmData(text);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
}
