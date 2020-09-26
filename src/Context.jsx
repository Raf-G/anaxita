import React, { useState } from "react";
import Layout from './Layout';

var userDetailContext = React.createContext(null);

export default function ContextComponent() {
  var [userDetails] = useState({
    token: 'qweqweqwewqe',
    name: '',
    age: 50
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <Layout userDetails={userDetails}/>
    </userDetailContext.Provider>
  );
}