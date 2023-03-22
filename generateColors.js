import { writeFileSync } from 'fs';
import { presetPalettes, presetPrimaryColors } from '@ant-design/colors';

const presetCutomColors = {
  white: '#ffffff',
  primary: '#19A7CE',
};

const colorsShades = Object.entries(presetPalettes).flatMap(([key, value]) => {
  if (Array.isArray(value)) {
    return value.map((value, i) => `$${key}-${i + 1}: ${value};`);
  }
});

const primaryColors = Object.entries(presetPrimaryColors).map(
  ([key, value]) => `$${key}: ${value};`
);

const customColors = Object.entries(presetCutomColors).map(
  ([key, value]) => `$${key}: ${value};`
);

writeFileSync(
  './src/styles/_colors.scss',
  [...customColors, ...primaryColors, ...colorsShades].join('\n')
);
