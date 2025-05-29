import { reshiPicHomepage, ReshiPicHomepage } from './plugin';
import { rootRouteRef } from './routes';

// Use Node.js globals instead of direct util import
if (typeof global.TextEncoder === 'undefined') {
  // These will be available in the Node.js environment
  global.TextEncoder = globalThis.TextEncoder;
  global.TextDecoder = globalThis.TextDecoder;
}

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
