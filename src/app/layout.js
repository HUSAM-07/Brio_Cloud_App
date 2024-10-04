import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: "Brio Tech - Cloud Migration Cost Calculator",
  description: "Calculate cloud migration costs for Azure, AWS, and Google Cloud Platform with Brio Tech's efficient and joyous process.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("h-full", inter.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
