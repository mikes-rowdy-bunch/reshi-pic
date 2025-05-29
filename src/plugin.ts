/* src/plugin.ts */
import { createPlugin, createRouteRef } from '@backstage/core-plugin-api';
import ExampleComponent from './components/ExampleComponent';
import { rootRouteRef } from './routes';

// Create a plugin instance and export this from your plugin package
export const reshiPicHomepage = createPlugin({
  id: 'reshi-pic-homepage',
  routes: {
    root: rootRouteRef, // This is where the route ref should be exported for usage in the app
  },
});

// This creates a routable extension, which are typically full pages of content.
// Each extension should also be exported from your plugin package.
export const ReshiPicHomepage = reshiPicHomepage.provide(
  createRoutableExtension({
    name: 'ReshiPicHomepage',
    // The component needs to be lazy-loaded. It's what will actually be rendered in the end.
    component: () =>
      import('./components/ReshiPics').then(m => m.ReshiPic),
    // This binds the extension to this route ref, which allows for routing within and across plugin extensions
    mountPoint: rootRouteRef,
  }),
);
