
import "./globals.css";


export const metadata = {
  title: "Diary",
  description: "A place where you can write",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
