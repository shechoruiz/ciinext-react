import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import FooterL from "./FooterLogo";
import FooterM from "./FooterMarca";
import FooterS from "./FooterSocial";


const Layout = ({ children }) => (
 <div className="App">
     <Header />
     {children}
     <Footer>
         <FooterL />
         <FooterS />
         <FooterM />
     </Footer>
 </div>
)

export default Layout;