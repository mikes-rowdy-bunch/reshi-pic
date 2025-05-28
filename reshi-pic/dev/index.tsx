import { createDevApp } from '@backstage/dev-utils';
import { reshiPicPlugin, ReshiPicPage } from '../src/plugin';

createDevApp()
  .registerPlugin(reshiPicPlugin)
  .addPage({
    element: <ReshiPicPage />,
    title: 'Root Page',
    path: '/reshi-pic',
  })
  .render();
