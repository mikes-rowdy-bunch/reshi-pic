# ReshiPics Plugin for Backstage

A Backstage plugin for displaying Reshi pictures.

## Development

### Prerequisites

- Node.js
- Yarn

### Setup

```bash
yarn install
```

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
