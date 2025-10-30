import { CountriesChartContainer } from '@/components/charts/countries-chart-container';

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sight and Sound Greatest Films Visualization</h1>
          <p className="text-xl text-muted-foreground">
            Interactive visualization of 4,850 films from the Sight and Sound Greatest Films poll
            (1952-2022)
          </p>
        </div>

        <CountriesChartContainer />
      </div>
    </main>
  );
}
