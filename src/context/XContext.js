import React from 'react';
const XContext = React.createContext({x: 'Defaulting'});
export const XProvider = XContext.Provider;
export default XContext;
