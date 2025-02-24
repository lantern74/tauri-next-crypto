import { Metadata } from "next";
import { Providers } from "./providers";
import { SidebarProvider } from "../context/SidebarContext"; // ✅ Import SidebarProvider
import LayoutContent from "@/components/layout/LayoutContent"; // ✅ Import Client Wrapper
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "My Crypto App",
  description: "Manage your crypto assets easily",
  icons: { icon: "/favicon.ico" },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <SidebarProvider>
            <LayoutContent>{children}</LayoutContent>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
