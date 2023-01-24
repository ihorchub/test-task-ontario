import styled from 'styled-components';
import Gallery from 'components/Gallery/Gallery';
import Breadcrumbs from 'modules/ContentPage/Breadcrumbs';
import Faq from 'modules/ContentPage/Faq';
import SimilarListings from 'modules/ContentPage/SimilarListings';
import { galleryItems } from 'mocks/galleryItems';
import { houseDetails } from 'mocks/houseDetailsTemplate';
import { items } from 'mocks/ProductCardItems';
import { elements } from 'mocks/FaqElements';
import HouseDetails from 'components/HouseDetails/HouseDetails';

const ContentPage = () => {
  return (
    <>
      <Breadcrumbs />
      <DescriptionHouse>
        <Gallery items={galleryItems} />
      </DescriptionHouse>
      <HouseDetails details={houseDetails} />
      <SimilarListings items={items} />
      <Faq elements={elements} />
    </>
  );
};

const DescriptionHouse = styled.div`
  margin-top: 24px;
  margin-bottom: 41px;
`;

export default ContentPage;
