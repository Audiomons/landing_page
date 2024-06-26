import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Alto',
    default: 'Alto Health - The simple way to engage patients and know who needs review',
  },
  description:
    'Alto is the easy-to-use platform that streamlines patient engagement and prioritises high risk patients for clinical review. <br>\n' +
      '                Reducing manual administration, freeing up staff time, maximising clinical impact, and making patients happier.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
