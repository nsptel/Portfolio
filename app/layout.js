import { AppWrapper } from '@/_components';
import 'styles/globals.css';

// TODO: Next `metadata` not working somehow. Manually added the meta tag temporarily.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Portfolio: Nilkumar Patel" />
        <meta name="author" content="Nilkumar Patel" />
        <link rel="author" href="https://nilkumar-patel.com" />
        <meta name="author" content="Nilkumar Patel" />
        <meta
          name="description"
          content="Portfolio website of Nilkumar Patel, a Software Engineer from Toronto, Canada. Highlights his skills and experience in the Information Technology industry."
        />
        <meta
          name="keywords"
          content="Nilkumar Patel, Nilkumar Patel - software engineer, Frontend developer, Backend developer, Full-stack engineer, Portfolio website, Full-stack engineer Portfolio"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="creator" content="Nilkumar Patel" />
        <meta
          name="format-detection"
          content="address=Toronto - Canada, email=nilkumarpatel48@gmail.com"
        />
        <title>Nilkumar Patel</title>
      </head>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
