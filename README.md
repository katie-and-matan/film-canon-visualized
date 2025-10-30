# Film Canon Visualized

Interactive data visualization of the Sight and Sound Greatest Films poll (1952-2022).

## Overview

This project visualizes data from 4,850 films across 8 polling years, exploring how critical opinion has evolved over 70 years of cinema history.

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router, Turbopack)
- **Language**: TypeScript 5.9.3
- **Package Manager**: pnpm 10.20
- **Styling**: Tailwind CSS 4.1.16, shadcn/ui 3.5.0
- **Visualization**: Recharts 3.3.0
- **Animation**: Framer Motion 12.23.24
- **Interaction**: @dnd-kit/core 6.3.1
- **State**: TanStack Query 5.90.5, Zustand 5.0.8
- **Colors**: Chroma.js 3.1.2
- **Testing**: Vitest 4.0.4, Playwright 1.56.1, Ladle 5.1.0
- **Code Quality**: Biome (linting & formatting), Lefthook (git hooks)

## Getting Started

### Prerequisites

- Node.js 20.0.0 or higher
- pnpm 10.0.0 or higher

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server (Turbopack) |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linting |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm format` | Format code with Biome |
| `pnpm check` | Lint and format in one command |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test` | Run Vitest unit tests |
| `pnpm test:ui` | Run Vitest with UI |
| `pnpm test:coverage` | Generate test coverage report |
| `pnpm test:e2e` | Run Playwright E2E tests |
| `pnpm test:e2e:ui` | Run Playwright in UI mode |
| `pnpm ladle:serve` | Start Ladle component development server |
| `pnpm ladle:build` | Build Ladle static site |

## Project Structure

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed structure.

## Data

The dataset (`public/data/main-data.csv`) contains:
- 4,850 films
- 26 columns of data
- 8 poll years: 1952, 1962, 1972, 1982, 1992, 2002, 2012, 2022
- Rankings and vote counts for each poll

## Development

### Code Quality

- **Linting & Formatting**: Biome runs automatically on git pre-commit via Lefthook
- **Type Safety**: TypeScript with strict mode enabled
- **Testing**: Unit tests (Vitest), E2E tests (Playwright), component stories (Ladle)

### Component Development

Use Ladle for isolated component development:

```bash
pnpm ladle:serve
```

Navigate to [http://localhost:61000](http://localhost:61000).

## License

MIT License
