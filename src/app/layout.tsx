// app/layout.tsx

//import Header from "@/components/Header";
//import ThemeRegistry from "@/components/ThemeRegistry";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Currency Exchange App | Live Dollar to INR Rates",
  description:
    "Get real-time currency exchange rates for USD, EUR, GBP, and more. Convert currencies with accuracy and ease.",
  keywords:
    "currency exchange, dollar to inr, live forex rates, USD to INR, real-time currency converter, euro to inr, forex market rates",
  author: "Currency Exchange Team",
  robots: "index, follow",
  openGraph: {
    title: "Currency Exchange | Live Forex Rates",
    description:
      "Real-time exchange rates and currency conversion for international and local currencies.",
    url: "https://www.dollartoinr.in",
    siteName: "Dollar to Inr",
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
