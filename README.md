# reshi-pic

Welcome to the reshi-pic plugin!

This plugin allows you to see my dog Reshi and he will give you some words of wisdom!

_This plugin was created through the Backstage CLI_

## How to use
---

1. Install the plugin into your Backstage environment:
    `yarn --cwd packages/app add @micdavis1992/plugin-reshi-pic`

2. Import the card into your app for whichever page you want to use it on!
```bash
import { ReshiPic } from '@micdavis1992/plugin-reshi-pic';
```

3. Add the card to your page!

```diff
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
```

## Example
---

An example of what you can see!

![Reshi](./src/pics/reshi-pic1.jpg)


## License
---
This plugin is released under the Apache-2.0 License.

## TODO
---
- Semantic Versioning
- OctoSTS
- Pipeline to publish to NPM
- Testing
