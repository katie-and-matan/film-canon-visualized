import type { Story } from '@ladle/react';
import { CountriesBarChart } from './countries-bar-chart';
import type { CountryChartData } from '@/lib/data/country-aggregation';

const mockData: CountryChartData[] = [
  { country: 'United States', count: 1234 },
  { country: 'France', count: 987 },
  { country: 'United Kingdom', count: 765 },
  { country: 'Japan', count: 543 },
  { country: 'Italy', count: 432 },
  { country: 'Germany', count: 321 },
  { country: 'Soviet Union', count: 234 },
  { country: 'India', count: 198 },
  { country: 'Spain', count: 176 },
  { country: 'Sweden', count: 154 },
];

export const Default: Story = () => <CountriesBarChart data={mockData} />;

export const Loading: Story = () => <CountriesBarChart data={[]} isLoading={true} />;

export const EmptyState: Story = () => <CountriesBarChart data={[]} isLoading={false} />;

export const FewCountries: Story = () => <CountriesBarChart data={mockData.slice(0, 5)} />;

export const SingleCountry: Story = () => (
  <CountriesBarChart data={[{ country: 'United States', count: 500 }]} />
);
