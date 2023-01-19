import { AboutHouse } from 'components/AboutHouse/AboutHouse';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import { SimilarListings } from 'components/SimilarListings/SimilarListings';

const Content = () => {
  return (
    <>
      <Breadcrumbs />
      <AboutHouse />
      <SimilarListings />
    </>
  );
};

export default Content;
