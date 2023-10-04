const author = 'Nilkumar Patel';
const description = 'Software Engineer from Toronto, Canada.';
const url = 'https://nilkumar-patel.com';

export const AppMetadata = {
  metadataBase: new URL('https://nilkumar-patel.com'),
  title: {
    default: `Portfolio | ${author}`,
    template: `%s | ${author}`,
  },
  description,
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Nilkumar Patel',
    'Nilkumar Patel - software engineer',
    'Frontend developer',
    'Backend developer',
    'Full-stack engineer',
    'Portfolio website',
    'Full-stack engineer Portfolio',
  ],
  creator: author,
  authors: [{ name: author, url }],
  colorScheme: 'dark',
  openGraph: {
    title: `${author} | Portfolio`,
    description,
    url,
    siteName: `${author} | Portfolio`,
    locale: 'en-US',
    type: 'website',
  },
};
