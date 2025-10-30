import chroma from 'chroma-js';

// Placeholder for color palette utilities

export const filmPalette = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#ec4899',
};

export function createColorScale(colors: string[], steps: number) {
  return chroma.scale(colors).mode('lab').colors(steps);
}
