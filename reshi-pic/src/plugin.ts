import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const reshiPicPlugin = createPlugin({
  id: 'reshi-pic',
  routes: {
    root: rootRouteRef,
  },
});

export const ReshiPicPage = reshiPicPlugin.provide(
  createRoutableExtension({
    name: 'ReshiPicPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
