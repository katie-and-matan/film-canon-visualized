import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Film Canon Visualized',
  description: 'Interactive visualization of Sight and Sound Greatest Films poll',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
