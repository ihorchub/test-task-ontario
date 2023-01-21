import { AboutHouse } from 'modules/ContentPage/components/AboutHouse/AboutHouse';
import { Breadcrumbs } from 'modules/ContentPage/components/Breadcrumbs/Breadcrumbs';
import { Faq } from 'modules/ContentPage/components/Faq/Faq';
import { SimilarListings } from 'modules/ContentPage/components/SimilarListings/SimilarListings';

const Content = () => {
  return (
    <>
      <Breadcrumbs />
      <AboutHouse />
      <SimilarListings />
      <Faq />
    </>
  );
};

export default Content;
