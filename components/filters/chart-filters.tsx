'use client';

import { Label } from '@/components/ui/label';
import type { PollYear, RankingTier, TopNCountries } from '@/lib/types/film';

interface ChartFiltersProps {
  pollYear: PollYear;
  rankingTier: RankingTier;
  topN: TopNCountries;
  onPollYearChange: (year: PollYear) => void;
  onRankingTierChange: (tier: RankingTier) => void;
  onTopNChange: (n: TopNCountries) => void;
}

const POLL_YEARS: { value: PollYear; label: string }[] = [
  { value: 'all', label: 'All Years' },
  { value: 1952, label: '1952' },
  { value: 1962, label: '1962' },
  { value: 1972, label: '1972' },
  { value: 1982, label: '1982' },
  { value: 1992, label: '1992' },
  { value: 2002, label: '2002' },
  { value: 2012, label: '2012' },
  { value: 2022, label: '2022' },
];

export function ChartFilters({
  pollYear,
  rankingTier,
  topN,
  onPollYearChange,
  onRankingTierChange,
  onTopNChange,
}: ChartFiltersProps) {
  return (
    <div className="flex flex-col gap-6 p-6 border rounded-lg bg-card">
      {/* Poll Year Selector */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="poll-year">Poll Year</Label>
        <select
          id="poll-year"
          value={pollYear}
          onChange={(e) => onPollYearChange(e.target.value as PollYear)}
          className="px-3 py-2 border rounded-md bg-background"
        >
          {POLL_YEARS.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      </div>

      {/* Ranking Tier Selector */}
      <div className="flex flex-col gap-2">
        <Label>Ranking Tier</Label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="ranking-tier"
              value="all"
              checked={rankingTier === 'all'}
              onChange={(e) => onRankingTierChange(e.target.value as RankingTier)}
              className="cursor-pointer"
            />
            <span>All Films</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="ranking-tier"
              value="top250"
              checked={rankingTier === 'top250'}
              onChange={(e) => onRankingTierChange(e.target.value as RankingTier)}
              className="cursor-pointer"
            />
            <span>Top 250</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="ranking-tier"
              value="top100"
              checked={rankingTier === 'top100'}
              onChange={(e) => onRankingTierChange(e.target.value as RankingTier)}
              className="cursor-pointer"
            />
            <span>Top 100</span>
          </label>
        </div>
      </div>

      {/* Top N Countries Selector */}
      <div className="flex flex-col gap-2">
        <Label>Number of Countries</Label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="top-n"
              value="5"
              checked={topN === 5}
              onChange={(e) => onTopNChange(Number(e.target.value) as TopNCountries)}
              className="cursor-pointer"
            />
            <span>Top 5</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="top-n"
              value="10"
              checked={topN === 10}
              onChange={(e) => onTopNChange(Number(e.target.value) as TopNCountries)}
              className="cursor-pointer"
            />
            <span>Top 10</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="top-n"
              value="15"
              checked={topN === 15}
              onChange={(e) => onTopNChange(Number(e.target.value) as TopNCountries)}
              className="cursor-pointer"
            />
            <span>Top 15</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="top-n"
              value="20"
              checked={topN === 20}
              onChange={(e) => onTopNChange(Number(e.target.value) as TopNCountries)}
              className="cursor-pointer"
            />
            <span>Top 20</span>
          </label>
        </div>
      </div>
    </div>
  );
}
