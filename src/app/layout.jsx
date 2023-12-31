import "./index.css";
import { ToastProvider } from "@/components/providers/toaster-provider";
export const metadata = {
  title: "Next portfolio website",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
