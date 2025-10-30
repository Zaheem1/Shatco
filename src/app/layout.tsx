import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shatco - Premium Solutions',
  description: 'Luxury services and premium solutions for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}