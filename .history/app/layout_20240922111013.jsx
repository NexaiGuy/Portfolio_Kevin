import { JetBrains_Mono, JetBrains_Mono} from "next/font/google";
import "./globals.css";

const JetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "2"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
