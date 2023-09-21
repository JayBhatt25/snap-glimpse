import Header from './Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-gray-100 text-black dark:bg-zinc-900 transition-all-duration-700 dark:text-white'>
        <Header />
        <div className='max-w-6xl mx-auto'>{children}</div>
      </body>
    </html>
  )
}
