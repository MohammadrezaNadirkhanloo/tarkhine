import esteadadFont from "@/theme/localFonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import ClientOnlyLayout from "@/components/ClientOnlyLayout";
import DrawerAppBar from "@/components/appbare/Appbare";
import { Toolbar } from "@mui/material";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: {
    template: "%s | ترخینه",
    default: "ترخینه",
  },
  description: "رستوران ترخینه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ClientOnlyLayout>
          <body className={`${esteadadFont.variable}`}>
            <DrawerAppBar />
            <Toolbar />
            <div className="main-body" style={{ marginTop: 10 }}>
              {children}
            </div>
            <Footer />
          </body>
        </ClientOnlyLayout>
      </AppRouterCacheProvider>
    </html>
  );
}
