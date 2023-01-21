import { Wrapper } from './Gallery.styled';
import { galleryItems } from './galleryItems';

export const Gallery = () => {
  return (
    <Wrapper>
      {galleryItems.map(({ id, x1, x2, alt }) => (
        <li key={id}>
          <img
            srcSet={`${process.env.PUBLIC_URL + x1} 1x, ${
              process.env.PUBLIC_URL + x2
            } 2x`}
            src={process.env.PUBLIC_URL + x1}
            alt={alt}
          />
        </li>
      ))}
    </Wrapper>
  );
};
