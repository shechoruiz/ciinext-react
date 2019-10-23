import React from 'react';
import Header2 from "./Header2";
import Footer2 from "./Footer2";

const Layout2 = ({ children }) => (
    <div className="App">
     <Header2 />
     {children}
     <Footer2 />
 </div>
)

export default Layout2;