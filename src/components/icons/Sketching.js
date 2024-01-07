import * as React from 'react';
const SvgSketching = props => (
  <svg xmlns='http://www.w3.org/2000/svg' width={800} height={800} fill='none' viewBox='0 0 24 24' {...props}>
    <path
      fill={props.fill || '#464455'}
      d='m10.354 11.434-.351-.355a.5.5 0 0 0-.144.287l.495.069Zm6.589-6.514.351.356-.351-.356Zm2.017 1.991-.36-.346.36.346Zm-6.479 6.723.073.494a.5.5 0 0 0 .287-.148l-.36-.347ZM10 14l-.495-.068a.5.5 0 0 0 .568.563L10 14Zm8.865-9.146.326-.379-.326.38ZM8 16.5a.5.5 0 0 0 0-1v1Zm12 4a.5.5 0 0 0 0-1v1Zm-9.294-8.71 6.588-6.514-.703-.712-6.588 6.515.703.711ZM18.6 6.565l-6.479 6.721.72.694 6.479-6.722-.72-.694Zm-6.192 6.574-2.481.366.146.99 2.481-.367-.146-.99Zm-1.913.93.355-2.566-.99-.137-.355 2.566.99.136Zm8.043-8.836a.917.917 0 0 1 .062 1.332l.72.693a1.917 1.917 0 0 0-.129-2.783l-.653.758Zm-1.244.043a.917.917 0 0 1 1.244-.043l.653-.758a1.917 1.917 0 0 0-2.6.09l.703.71ZM8 15.5H6v1h2v-1Zm-2 5h14v-1H6v1ZM3.5 18A2.5 2.5 0 0 0 6 20.5v-1A1.5 1.5 0 0 1 4.5 18h-1ZM6 15.5A2.5 2.5 0 0 0 3.5 18h1A1.5 1.5 0 0 1 6 16.5v-1Z'
    />
  </svg>
);
export default SvgSketching;