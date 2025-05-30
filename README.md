# ReshiPics Plugin for Backstage
adding this

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

![Reshi](./src/pics/reshi-pic1.jpg)

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

### Commit Guidelines

This project uses conventional commits to automate versioning and release notes. Your commit messages must follow this format:

```
<type>: <description>

[optional body]

[optional footer(s)]
```

Where `type` must be one of:

- `feat`: A new feature (minor version bump)
- `fix`: A bug fix (patch version bump)
- `perf`: A performance improvement
- `docs`: Documentation only changes
- `chore`: Changes to the build process or auxiliary tools
- `style`: Changes that do not affect the meaning of the code
- `refactor`: Code changes that neither fix a bug nor add a feature
- `ci`: Changes to CI configuration files and scripts
- `test`: Adding missing tests or correcting existing tests
- `revert`: Reverting a previous commit
- `breaking`: Introduces a breaking change (major version bump)
- `major`: Explicit major version bump
- `minor`: Explicit minor version bump

Examples:

```
feat: add new dog wisdom feature
fix: correct image display on mobile devices
docs: update installation instructions
```

Commit messages are automatically validated by a pre-commit hook. Invalid commit messages will be rejected.

### Release Process

Releases are automated through GitHub Actions when changes are pushed to the main branch. The semantic-release tool analyzes commit messages to determine the next version number and automatically publishes to NPM.

## License
---
This plugin is released under the Apache-2.0 license.

## TODO
---
- Octo-sts
- Pipeline to publish NPM
- Semantic Versioning
