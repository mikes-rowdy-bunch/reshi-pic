import { render } from '@testing-library/react';
import { ReshiPic } from './ReshiPic'; // Updated import path if needed
import reshiPic1 from '../../pics/reshi-pic1.jpg';
import reshiPic2 from '../../pics/reshi-pic2.jpg';
import reshiPic3 from '../../pics/reshi-pic3.jpg';
import reshiPic4 from '../../pics/reshi-pic4.jpg';
import reshiPic5 from '../../pics/reshi-pic5.jpg';

describe('ReshiPic', () => {
  it('renders an image with alt text "Random Reshi"', () => {
    const { getByAltText } = render(<ReshiPic />);
    const image = getByAltText('Random Reshi');

    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
  });

  it('renders a valid image source', () => {
    const { getByAltText } = render(<ReshiPic />);
    const image = getByAltText('Random Reshi') as HTMLImageElement;

    // Check that the image src matches one of the expected images
    const expectedSrcs = [
      reshiPic1,
      reshiPic2,
      reshiPic3,
      reshiPic4,
      reshiPic5,
    ];

    const isSrcValid = expectedSrcs.some((src) =>
      image.src.includes(src)
    );

    expect(isSrcValid).toBe(true);
  });
});
