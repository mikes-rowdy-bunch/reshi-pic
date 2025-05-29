import React from 'react';
import { ReshiPic } from './ReshiPics';
import { ReshiPic as ReshiPicType } from '../../types';

// Mock the image imports
jest.mock('../../pics/reshi-pic1.jpg', () => 'mocked-image-1');
jest.mock('../../pics/reshi-pic2.jpg', () => 'mocked-image-2');
jest.mock('../../pics/reshi-pic3.jpg', () => 'mocked-image-3');
jest.mock('../../pics/reshi-pic4.jpg', () => 'mocked-image-4');
jest.mock('../../pics/reshi-pic5.jpg', () => 'mocked-image-5');

describe('ReshiPic', () => {
  it('should be defined', () => {
    expect(ReshiPic).toBeDefined();
  });

  it('should accept extraPics prop', () => {
    const extraPics: ReshiPicType[] = [{ 
      image: 'extra-pic.jpg', 
      quote: 'This is an extra quote' 
    }];
    
    // This is a type check test - if the component accepts the props without type errors, the test passes
    expect(() => {
      // Just creating the element, not rendering it
      React.createElement(ReshiPic, { extraPics });
    }).not.toThrow();
  });
});
