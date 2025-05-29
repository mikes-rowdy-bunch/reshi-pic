import { render } from '@testing-library/react';
import { ReshiPic } from './ReshiPic'; // Updated import path if needed
import reshiPic1 from '../../pics/reshi-pic1.png';
import reshiPic2 from '../../pics/reshi-pic2.png';
import reshiPic3 from '../../pics/reshi-pic3.png';
import reshiPic4 from '../../pics/reshi-pic4.png';
import reshiPic5 from '../../pics/reshi-pic5.png';

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
