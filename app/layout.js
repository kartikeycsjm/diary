
import "./globals.css";


export const metadata = {
  title: "TodoListApplication",
  description: "A place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
