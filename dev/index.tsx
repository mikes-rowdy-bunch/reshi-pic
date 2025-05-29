import { createDevApp } from '@backstage/dev-utils';
import { reshiPicHomepage, ReshiPicHomepage } from '../src/plugin';

createDevApp()
  .registerPlugin(reshiPicHomepage)
  .addPage({
    element: <ReshiPicHomepage />,
    title: 'Reshi Pic',
    path: '/reshi-pic-homepage',
  })
  .render();
