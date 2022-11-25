import React from 'react';
import ContentLoader from 'react-content-loader';

const BookItemSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={210}
    height={614}
    viewBox="0 0 210 614"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="398" rx="2" ry="2" width="180" height="45" />
    <rect x="15" y="47" rx="2" ry="2" width="180" height="320" />
    <rect x="15" y="462" rx="0" ry="0" width="180" height="33" />
    <rect x="49" y="508" rx="0" ry="0" width="103" height="17" />
    <rect x="9" y="569" rx="0" ry="0" width="86" height="33" />
    <rect x="114" y="569" rx="0" ry="0" width="86" height="33" />
    <rect x="49" y="539" rx="0" ry="0" width="103" height="17" />
  </ContentLoader>
);

export default BookItemSkeleton;
