// Jest setup file to provide missing browser APIs in Node.js environment

// Add TextEncoder and TextDecoder to the global scope
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Mock any other browser APIs that might be missing in the test environment
