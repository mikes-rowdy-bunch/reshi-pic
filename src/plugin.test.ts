import { reshiPicHomepage, ReshiPicHomepage } from './plugin';
import { TextEncoder, TextDecoder } from 'util';
import { rootRouteRef } from './routes';

global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;

describe('reshi-pic plugin', () => {
  it('should export plugin instance', () => {
    expect(reshiPicHomepage).toBeDefined();
    expect(reshiPicHomepage.getId()).toBe('reshi-pic-homepage');
  });

  it('should have the correct route configuration', () => {
    expect(reshiPicHomepage.routes.root).toBe(rootRouteRef);
  });

  it('should export routable extension', () => {
    expect(ReshiPicHomepage).toBeDefined();
    // The extension should be a function (it's a React component)
    expect(typeof ReshiPicHomepage).toBe('function');
  });
});
