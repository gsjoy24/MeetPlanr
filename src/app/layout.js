import './globals.css';
import Script from 'next/script';
import { poppins } from '@/utils/fonts';
import { AuthProvider } from '@/providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'MeetPlanr',
  description:
    'MeetPlanr: The open-source solution for effortless meeting scheduling and planning. Sync calendars, leverage smart algorithms, and boost collaboration.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        {/* Google Tag Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17911165587"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17911165587');
          `}
        </Script>

        <AuthProvider>
          <main className="min-h-[calc(100vh-200px)]">
            {children}
          </main>
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>

      </body>
    </html>
  );
}
