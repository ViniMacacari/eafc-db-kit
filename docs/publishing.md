# Publishing to npm

The package is named `eafc-db-kit`, uses the MIT license, and targets Node.js 24 or later with ES modules. The current release version is declared in `package.json` and synchronized in `package-lock.json`.

## Verify the release

From the repository root, install the development dependencies and run the checks:

```sh
npm ci
npm run check
npm run check:package
```

`check` runs TypeScript checking and the full test suite. `check:package` builds a real tarball in `output/npm/`, verifies its file inventory, and installs it in a temporary consumer project with production dependencies only. It checks public imports, reads all nine bundled database/XML pairs, and compiles a TypeScript consumer against the installed declarations, including the FC 27 types. The temporary consumer is removed after the check; the tarball remains available for inspection. Installing its runtime dependencies requires access to the npm registry or an existing npm cache.

The package includes compiled JavaScript, TypeScript declarations, FIFA/EA FC file services, version-specific transfer services, templates, executable examples, documentation, and the license. Source files, tests, development scripts, local output, the optional C# reference checker, and legacy CLI build artifacts are excluded. The installed-package check reads a database/XML pair through `FifaDatabaseService`, transfers a player, writes and reopens the edited database, and verifies the services' TypeScript declarations.

To preview publishing without uploading anything:

```sh
npm publish --dry-run
```

The `prepare` hook builds before packing. The `prepublishOnly` hook runs both `check` and `check:package` before publishing. See the official [npm lifecycle documentation](https://docs.npmjs.com/cli/v11/using-npm/scripts/).

## Publish

Log in with the account that will own the package, then publish from the repository root:

```sh
npm login --registry=https://registry.npmjs.org/
npm publish
```

Complete any authentication prompts from npm. `publishConfig` fixes the destination to the public npm registry and declares public access. Publication is a separate manual step; preparing or verifying this project does not upload a release.

After publication, consumers can install and import it with:

```sh
npm install eafc-db-kit
```

```js
import { readTemplateDatabase } from 'eafc-db-kit';

const data = await readTemplateDatabase({ version: 'FC 26', tables: ['teams'] });
```

## Later releases

After committing the changes for a release, update the version according to its compatibility impact:

```sh
npm version patch
npm publish
```

Use `minor` for compatible new features and `major` for breaking API changes. `npm version` updates both manifests and, in a clean Git checkout, creates a version commit and tag. Each release must use an unused version; npm does not allow replacing an already published name/version pair. See the official [npm publishing documentation](https://docs.npmjs.com/cli/v11/commands/npm-publish/).
