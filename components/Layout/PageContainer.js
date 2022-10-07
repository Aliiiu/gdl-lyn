import React from "react";
import { PageContent } from "./pagecontainer.style";

const PageContainer = ({ children, ...props }) => {
  return (
    <PageContent
      className={`${props.className} flex flex-col items-center justify-center`}
    >
      {children}
    </PageContent>
  );
};

export default PageContainer;
