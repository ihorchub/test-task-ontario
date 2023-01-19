import { AboutHouse } from 'components/AboutHouse/AboutHouse';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import { Faq } from 'components/Faq/Faq';
import { SimilarListings } from 'components/SimilarListings/SimilarListings';

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
