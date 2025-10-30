'use client';

import { useMemo } from 'react';
import { useVisualizationStore } from '@/lib/stores/visualization-store';
import { useFilmData } from '@/lib/hooks/use-film-data';
import { getCountryChartData } from '@/lib/data/country-aggregation';
import { CountriesBarChart } from './countries-bar-chart';
import { ChartFilters } from '@/components/filters/chart-filters';

export function CountriesChartContainer() {
  const { data: films, isLoading, error } = useFilmData();

  const { pollYear, rankingTier, topNCountries, setPollYear, setRankingTier, setTopNCountries } =
    useVisualizationStore();

  // Compute chart data when films or filters change
  const chartData = useMemo(() => {
    if (!films || films.length === 0) return [];
    return getCountryChartData(films, pollYear, rankingTier, topNCountries);
  }, [films, pollYear, rankingTier, topNCountries]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <p className="text-destructive">Error loading film data. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <ChartFilters
            pollYear={pollYear}
            rankingTier={rankingTier}
            topN={topNCountries}
            onPollYearChange={setPollYear}
            onRankingTierChange={setRankingTier}
            onTopNChange={setTopNCountries}
          />
        </div>
        <div className="lg:w-3/4">
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-bold mb-4">Films by Country of Origin</h2>
            <CountriesBarChart data={chartData} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
