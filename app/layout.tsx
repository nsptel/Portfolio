import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html>
      <head>
        <title>Nilkumar Patel</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
