import React,{useState} from 'react';
import Usercontext from './userContext';

const Usercontextprovider = ({children}) => {
const [isuser, setIsuser] = useState(true)
  return (
      <Usercontext.Provider value={{isuser}}>
          {children}
      </Usercontext.Provider>
  )
};

export default Usercontextprovider;
