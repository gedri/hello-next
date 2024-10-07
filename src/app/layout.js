import React from "react";
import Footer from "./../footer";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
