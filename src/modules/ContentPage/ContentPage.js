import { Gallery } from 'components/Gallery/Gallery';
import { Breadcrumbs } from 'modules/ContentPage/Breadcrumbs/Breadcrumbs';
import { Faq } from 'modules/ContentPage/Faq/Faq';
import { SimilarListings } from 'modules/ContentPage/SimilarListings/SimilarListings';
import { galleryItems } from 'data/galleryItems';
import { houseDetails } from 'data/houseDetailsTemplate';
import { HouseDetails } from 'components/HouseDetails/HouseDetails';
import { DescriptionHouse } from './ContentPage.styled';

const Content = () => {
  return (
    <>
      <Breadcrumbs />
      <DescriptionHouse>
        <Gallery items={galleryItems} />
      </DescriptionHouse>
      <HouseDetails details={houseDetails} />
      <SimilarListings />
      <Faq />
    </>
  );
};

export default Content;
