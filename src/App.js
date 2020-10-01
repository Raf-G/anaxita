import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ContextProvider } from "./Context";
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
