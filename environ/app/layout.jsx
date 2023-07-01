import '../styles/globals.css';
import MyNavbar from '../components/MyNavbar';




export const metadata = {
  title: "Environ",
  description: "Discover your traveling carbon footprint and environmental facts."
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
        <MyNavbar sticky="top" />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
