import './globals.css';

export const metadata = {
  title: "The Art of Cici Woolf",
  description: "Cici Woolf's Digital Art Portfolio.",
  keywords: "art, software, Christine Woolf, Cici Woolf, paintings",
  author: "Christine 'Cici' Woolf",
  viewport: "width=device-width, initial-scale=1, user-scalable=yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
