import { create } from 'zustand';
import type { PollYear, RankingTier, TopNCountries } from '@/lib/types/film';

interface VisualizationState {
  selectedFilmIds: string[];
  pollYear: PollYear;
  rankingTier: RankingTier;
  topNCountries: TopNCountries;
  setSelectedFilmIds: (ids: string[]) => void;
  setPollYear: (year: PollYear) => void;
  setRankingTier: (tier: RankingTier) => void;
  setTopNCountries: (n: TopNCountries) => void;
}

export const useVisualizationStore = create<VisualizationState>((set) => ({
  selectedFilmIds: [],
  pollYear: 'all',
  rankingTier: 'all',
  topNCountries: 10,
  setSelectedFilmIds: (ids) => set({ selectedFilmIds: ids }),
  setPollYear: (year) => set({ pollYear: year }),
  setRankingTier: (tier) => set({ rankingTier: tier }),
  setTopNCountries: (n) => set({ topNCountries: n }),
}));
