import './globals.css'

export const metadata = {
  title: 'Iconic Impact',
  description: 'Iconic Impact Tutorial, educational Consultant, Tutor, Impacting Lives, Blogger, Writer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body className='scrollbar-thin scrollbar-track-[#4C0859]/10 scrollbar-thumb-[#fdc000]/90'>{children}</body>
    </html>
  )
}
