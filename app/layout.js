import './globals.css'

export const metadata = {
  title: 'Unick.io',
  description: 'Unick.io landing page',
  favicon: "public/favicon.ico",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
