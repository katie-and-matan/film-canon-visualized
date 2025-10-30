import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFilmData } from './use-film-data';
import type { ReactNode } from 'react';

// Mock fetch
global.fetch = vi.fn();

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

describe('useFilmData', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches and parses CSV data successfully', async () => {
    const mockCsv = `key,databaseFilmTitle,FilmTitle,AlternateTitle,ARR_TitleArray,Year,Director,ARR_DirectorArray,Country,ARR_CountryArray,1952rank,1952votes,1962rank,1962votes,1972rank,1972votes,1982rank,1982votes,1992rank,1992votes,2002rank,2002votes,2012rank,2012votes,2022rank,2022votes
1,Test,Test,,Test,2020,Dir,Dir,US,US,0,0,0,0,0,0,0,0,0,0,50,10,0,0,0,0`;

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      text: async () => mockCsv,
    } as Response);

    const { result } = renderHook(() => useFilmData(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toHaveLength(1);
    expect(result.current.data?.[0].filmTitle).toBe('Test');
  });

  it('handles fetch errors', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
    } as Response);

    const { result } = renderHook(() => useFilmData(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toBeTruthy();
  });
});
