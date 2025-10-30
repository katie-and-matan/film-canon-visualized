# Project Structure

```
film-canon-visualized/
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles (Tailwind v4)
├── components/
│   ├── charts/                  # Recharts visualization components
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── data/                    # Data processing utilities
│   ├── utils/                   # General utilities
│   ├── colors/                  # Chroma.js color utilities
│   ├── hooks/                   # Custom React hooks
│   ├── stores/                  # Zustand stores
│   └── providers/               # React context providers
├── public/
│   └── data/                    # CSV datasets
│       └── main-data.csv        # Film poll data
├── e2e/                         # Playwright E2E tests
├── .ladle/                      # Ladle configuration
├── biome.json                   # Biome configuration
├── lefthook.yml                 # Git hooks configuration
├── .npmrc                       # pnpm configuration
├── package.json
├── pnpm-lock.yaml
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vitest.config.mts            # Vitest configuration
├── playwright.config.ts         # Playwright configuration
└── components.json              # shadcn/ui configuration
```
