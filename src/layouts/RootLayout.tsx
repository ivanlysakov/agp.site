import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
