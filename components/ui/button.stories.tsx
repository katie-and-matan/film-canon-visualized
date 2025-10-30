import type { Story } from '@ladle/react';
import { Button } from './button';

export const Default: Story = () => <Button>Click me</Button>;

export const Variant: Story = () => (
  <div className="flex gap-2">
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);
