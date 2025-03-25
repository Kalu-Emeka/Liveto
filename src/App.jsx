import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css"; // Import default styles
AOS.init();

function App() {

  return (
    <>
     <WalletProvider>
      <BrowserRouter>
          <Routes>
              <Route index element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
     </WalletProvider>
    </>
  )
}

export default App
