import './globals.css';
export const metadata = {
  title: "Cici's Art",
  description: "Cici Woolf's Art Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
