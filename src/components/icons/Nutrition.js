import * as React from 'react';
const SvgNutrition = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={800}
    height={800}
    baseProfile='tiny'
    viewBox='0 0 256 256'
    {...props}
  >
    <path
      fill={props.fill || 'black'}
      d='M29.8 166.1c.6-20-10.3-27.6-23.6-32.6-4.4 17.2 7.8 31.5 23.6 32.6M32.8 76.7c8.5-18.2 1.4-29.4-8.8-39.3-10.7 14-5.2 32 8.8 39.3M37.6 127.2c-.6-20 10.3-27.6 23.6-32.6 4.4 17.2-7.8 31.4-23.6 32.6M37.6 158.1c-.6-20 10.3-27.6 23.6-32.6 4.4 17.2-7.8 31.4-23.6 32.6M37.6 96.3c-.6-20 10.3-27.6 23.6-32.6 4.4 17.2-7.8 31.5-23.6 32.6M29.8 135.3c.6-20-10.3-27.6-23.6-32.6-4.4 17.1 7.8 31.4 23.6 32.6M29.8 104.4c.6-20-10.3-27.6-23.6-32.6C1.8 89 14 103.2 29.8 104.4M179.9 255.4H72.5l53.7-93 53.7 93zM14.2 192.1l227.5-61.9-3.4-12.5-227.5 61.9zM174.7.6s1.7 32.8 30.4 30c0 .1 3.3-27.4-30.4-30M204.8 107.4c-3 4.3-8 7-13.6 7-4.6 0-9.1-2.2-12.1-5.2-6.2-6.8-14.2-21.9-14.2-21.9-4.5-9.1-6.9-16.2-6.9-23.4 0-15.2 12.3-28.4 27.6-28.4 7.5 0 14.3 3 19.3 7.9 5-4.9 11.8-7.9 19.3-7.9 15.3 0 27.6 13.2 27.6 28.4 0 7.1-2.4 14.2-6.9 23.4 0 0-8 15.1-14.2 21.9-3 3-7.5 5.2-12.1 5.2-5.8 0-10.8-2.8-13.8-7'
    />
  </svg>
);
export default SvgNutrition;
