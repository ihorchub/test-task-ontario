import styled from 'styled-components';

const Gallery = ({ items }) => {
  return (
    <Wrapper>
      {items.map(({ id, x1, x2, alt }) => (
        <Item key={id}>
          <img src={process.env.PUBLIC_URL + x1} alt={alt} />
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 10px;
`;

const Item = styled.li`
  width: 226px;
`;

export default Gallery;
