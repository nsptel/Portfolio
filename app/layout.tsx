import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
