import React from 'react';
import Usercontext from './userContext';

const Usercontextprovider = ({children}) => {

  return (
      <Usercontext.Provider value={null}>
          {children}
      </Usercontext.Provider>
  )
};

export default Usercontextprovider;
