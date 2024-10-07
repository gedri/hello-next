import React from "react";
import Footer from "./../footer";

import "./styles.css";

export const dynamic = 'force-dynamic';

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
