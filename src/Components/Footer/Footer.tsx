import './Footer.scss';

import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => <div className="footer">
  <a target="_blank" href="https://github.com/vitebsk121" className='contactLink'>
    <div className="contactIcon" />
    Alexandr Demchenko
  </a>
</div>;

export default Footer;
