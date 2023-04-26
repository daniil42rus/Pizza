import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="100" ry="100" width="260" height="260" />
    <rect x="0" y="278" rx="0" ry="0" width="278" height="36" />
    <rect x="0" y="328" rx="0" ry="0" width="278" height="59" />
    <rect x="0" y="418" rx="0" ry="0" width="87" height="39" />
    <rect x="138" y="417" rx="24" ry="24" width="137" height="39" />
  </ContentLoader>
);

export default Skeleton;
