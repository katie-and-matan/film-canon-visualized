# Data Files

## main-data.csv

Sight and Sound Greatest Films poll data.

- **Size**: 796 KB
- **Records**: 4,850 films
- **Columns**: 26 (identification, metadata, and poll data)
- **Poll Years**: 8 surveys from 1952 to 2022 (10-year intervals)

### Columns:
- Identification: key, databaseFilmTitle, FilmTitle, AlternateTitle, ARR_TitleArray
- Production: Year, Director, ARR_DirectorArray, Country, ARR_CountryArray
- Poll Data: [YEAR]rank and [YEAR]votes for years 1952, 1962, 1972, 1982, 1992, 2002, 2012, 2022

### Usage:
Load this file in components or API routes:
- Client-side: `fetch('/data/main-data.csv')`
- Server-side: `fs.readFileSync('public/data/main-data.csv')`
