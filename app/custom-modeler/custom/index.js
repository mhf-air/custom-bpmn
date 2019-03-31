import CustomContextPadProvider from './CustomContextPadProvider';
import CustomElementFactory from './CustomElementFactory';
import CustomOrderingProvider from './CustomOrderingProvider';
import CustomPalette from './CustomPalette';
import CustomRenderer from './CustomRenderer';
import CustomRules from './CustomRules';
import CustomUpdater from './CustomUpdater';
import CustomReplaceMenuProvider from './CustomReplaceMenuProvider.js';

export default {
  __init__: [
    'contextPadProvider',
    'customOrderingProvider',
    'customRenderer',
    'customRules',
    'customUpdater',
    'paletteProvider',
    'replaceMenuProvider',
  ],
  contextPadProvider: ['type', CustomContextPadProvider],
  customOrderingProvider: ['type', CustomOrderingProvider],
  customRenderer: ['type', CustomRenderer],
  customRules: ['type', CustomRules],
  customUpdater: ['type', CustomUpdater],
  elementFactory: ['type', CustomElementFactory],
  paletteProvider: ['type', CustomPalette],
  replaceMenuProvider: ['type', CustomReplaceMenuProvider],
};
