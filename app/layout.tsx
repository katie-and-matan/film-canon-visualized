import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from '@/lib/providers/query-provider';

export const metadata: Metadata = {
  title: 'Film Canon Visualized - Sight and Sound Greatest Films',
  description:
    'Interactive visualization of 4,850 films from the Sight and Sound Greatest Films poll (1952-2022)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
