import './globals.css';

export const metadata = {
  title: 'Grand Royale Interior',
  description: 'Premium interior products for modern spaces',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
