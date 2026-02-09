import { ReactNode, CSSProperties } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Layout = ({ children, showFooter = false, className = "", style }: LayoutProps) => {
  return (
    <div className={`min-h-screen relative overflow-hidden ${className}`} style={style}>
      <Header />
      <main>{children}</main>
      {showFooter && <Footer />}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
