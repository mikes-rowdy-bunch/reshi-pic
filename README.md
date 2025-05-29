# ReshiPics Plugin for Backstage

Welcome to the reshi-pic plugin!

This plugin allows you to see my dog Reshi and he will give you some words of wisdom!

This plugin was created through the Backstage CLI

## Development

### Prerequisites

- Node.js
- Yarn

## How to use
---
Install the plugin into your Backstage environment: yarn --cwd packages/app add @micdavis1992/plugin-reshi-pic

Import the card into your app for whichever page you want to use it on!

import { ReshiPic } from '@micdavis1992/plugin-reshi-pic';
Add the card to your page!
const overviewContent = (
  <Grid container spacing={3} alignItems="stretch">
    {entityWarningContent}
    <Grid item md={6}>
      <EntityAboutCard variant="gridItem" />
    </Grid>
    <Grid item md={6} xs={12}>
      <EntityCatalogGraphCard variant="gridItem" height={400} />
    </Grid>
+    <Grid item md={4} xs={12}>
+      <ReshiPic />
+    </Grid>

    <Grid item md={6} xs={12}>
      <OpaMetadataAnalysisCard />
    </Grid>

    <Grid item md={4} xs={12}>
      <EntityLinksCard />
    </Grid>
    <Grid item md={8} xs={12}>
      <EntityHasSubcomponentsCard variant="gridItem" />
    </Grid>
  </Grid>
);

## Example
---
An example of what you can see!

![Reshi](./src/pics/reshi_pic1.png)

### Testing

This project uses Jest for testing. Run tests with:

```bash
yarn test
```

### Test Configuration

The project includes a Jest setup file (`jest.setup.js`) that provides polyfills for browser APIs that are missing in the Node.js environment, such as TextEncoder and TextDecoder.

### Image Handling in Tests

Image imports in tests are handled by a custom file transformer that replaces image imports with a stub during testing.

## Building

```bash
yarn build
```

## Contributing

Please ensure all tests pass before submitting a pull request.

## License
---
This plugin is released under the Apache-2.0 license.

## TODO
---
- Octo-sts
- Pipeline to publish NPM
- Semantic Versioning
