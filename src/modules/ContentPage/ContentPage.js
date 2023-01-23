import { Gallery } from 'components/Gallery/Gallery';
import { Breadcrumbs } from 'modules/ContentPage/Breadcrumbs/Breadcrumbs';
import { Faq } from 'modules/ContentPage/Faq/Faq';
import { SimilarListings } from 'modules/ContentPage/SimilarListings/SimilarListings';
import { galleryItems } from 'mocks/galleryItems';
import { houseDetails } from 'mocks/houseDetailsTemplate';
import { HouseDetails } from 'components/HouseDetails/HouseDetails';
import { DescriptionHouse } from './ContentPage.styled';
import { items } from 'mocks/ProductCardItems';
import { elements } from 'mocks/FaqElements';

const Content = () => {
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

export default Content;
