import React, { useEffect } from "react";

const Layout = ({ children, ...props }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
