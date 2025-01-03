// app/layout.tsx

//import Header from "@/components/Header";
//import ThemeRegistry from "@/components/ThemeRegistry";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Currency Exchange App",
  description: "Get live currency exchange rates.",
  openGraph: {
    title: "Currency Exchange",
    description: "Real-time exchange rates for various currencies.",
    url: "https://yourdomain.com",
    siteName: "Currency Exchange",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeRegistry> */}
        {/* <Header /> */}

        {children}
        <Analytics />
        <footer
        // style={{
        //   textAlign: "center",
        //   padding: "10px",
        //   backgroundColor: "#f1f1f1",
        // }}
        >
          <p>
            &copy; {new Date().getFullYear()} dollartoinr.in. All rights
            reserved.
          </p>
        </footer>
        {/* </ThemeRegistry> */}
      </body>
    </html>
  );
}
