import { IBM_Plex_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata = {
  title: "Cloud Migration Cost Calculator",
  description: "Calculate cloud migration costs for Azure, AWS, and Google Cloud Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-mono antialiased',
        fontMono.variable
      )}>
        {children}
      </body>
    </html>
  );
}
