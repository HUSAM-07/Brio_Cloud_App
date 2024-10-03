import { IBM_Plex_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Footer } from '@/components/Footer'

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata = {
  title: "Brio Tech - Cloud Migration Cost Calculator",
  description: "Calculate cloud migration costs for Azure, AWS, and Google Cloud Platform with Brio Tech's efficient and joyous process.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn(
        'min-h-screen bg-background font-mono antialiased flex flex-col',
        fontMono.variable
      )}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
