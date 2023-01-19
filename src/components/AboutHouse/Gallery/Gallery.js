import { Wrapper } from './Gallery.styled';
import { galleryItems } from './galleryItems';

export const Gallery = () => {
  return (
    <Wrapper>
      {galleryItems.map(({ id, x1, x2, alt }) => (
        <li key={id}>
          <img srcSet={`${x1} 1x, ${x2} 2x`} src={x1} alt={alt} />
        </li>
      ))}
    </Wrapper>
  );
};
