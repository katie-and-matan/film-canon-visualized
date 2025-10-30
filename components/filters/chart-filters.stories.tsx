import { useState } from 'react';
import type { Story } from '@ladle/react';
import { ChartFilters } from './chart-filters';
import type { PollYear, RankingTier, TopNCountries } from '@/lib/types/film';

export const Interactive: Story = () => {
  const [pollYear, setPollYear] = useState<PollYear>('all');
  const [rankingTier, setRankingTier] = useState<RankingTier>('all');
  const [topN, setTopN] = useState<TopNCountries>(10);

  return (
    <div className="p-8">
      <ChartFilters
        pollYear={pollYear}
        rankingTier={rankingTier}
        topN={topN}
        onPollYearChange={setPollYear}
        onRankingTierChange={setRankingTier}
        onTopNChange={setTopN}
      />
      <div className="mt-4 p-4 border rounded">
        <h3 className="font-semibold mb-2">Current Filters:</h3>
        <p>Poll Year: {pollYear}</p>
        <p>Ranking Tier: {rankingTier}</p>
        <p>Top N: {topN}</p>
      </div>
    </div>
  );
};
