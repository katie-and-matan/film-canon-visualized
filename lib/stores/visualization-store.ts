import { create } from 'zustand';

interface VisualizationState {
  // Placeholder for future visualization state
  selectedFilmIds: string[];
  setSelectedFilmIds: (ids: string[]) => void;
}

export const useVisualizationStore = create<VisualizationState>((set) => ({
  selectedFilmIds: [],
  setSelectedFilmIds: (ids) => set({ selectedFilmIds: ids }),
}));
