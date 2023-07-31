import { ReactNode, FC } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
    </>
  );
};

export default Layout;
