import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Iconic Impact',
  description: 'Iconic Impact Tutorial, educational Consultant, Tutor, Impacting Lives, Blogger, Writer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
