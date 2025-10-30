import type { Story } from '@ladle/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CountriesChartContainer } from './countries-chart-container';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

export const Default: Story = () => (
  <QueryClientProvider client={queryClient}>
    <div className="p-8">
      <CountriesChartContainer />
    </div>
  </QueryClientProvider>
);
