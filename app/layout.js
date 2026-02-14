import '../ properly.css/normalize.css';
import '../css/main.css';
import '../css/bootstrap.min.css';
import '../css/animate.min.css';
import '../css/font-awesome.min.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/meanmenu.min.css';
import '../css/responsive.css';
import '../style.css';

export const metadata = {
  title: 'Green Agventure Lanka | Home',
  description: 'Green Agventure Lanka Pvt Ltd - Leading plant exporting and landscaping company in Sri Lanka. We export plants, provide landscaping, horticulture, vertical gardening, rooftop gardening, and micro-irrigation services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.css" />
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=370252033038305&autoLogAppEvents=1" nonce="R6cN2Wkm" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-234095702-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-234095702-1');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
