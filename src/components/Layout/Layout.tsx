import { FC, Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout: FC = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
