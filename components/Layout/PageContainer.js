import React from "react";
import { PageContent } from "./pagecontainer.style";

const PageContainer = ({ children, ...props }) => {
  return <PageContent className={`${props.className}`}>{children}</PageContent>;
};

export default PageContainer;
