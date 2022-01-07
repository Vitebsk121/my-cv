import './MyIcon.scss';

import React from 'react';

type MyIconProps = {
  imgSrc: string;
  description: string;
};

const MyIcon: React.FC<MyIconProps> = ({ imgSrc, description }) => (
  <img className="myIcon" src={imgSrc} alt={description} />
);

export default MyIcon;
