import type { Metadata } from 'next'
import {Nunito} from "next/font/google"
import './globals.css'
import Navbar from './components/navbar/Navbar'
//import Modals from './components/Modals/Modals'
import RegisterModal from './components/Modals/RegisterModal'
import LoginModal from './components/Modals/LoginModal'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import ClientOnly from './components/ClientOnly'
import {SafeUser} from "@/app/types";
import RentModal from './components/Modals/RentModal'
import SearchModal from './components/Modals/SearchModal'
export const metadata: Metadata = {
  title: 'Vibe Stay',
  description: 'Travel Smarter, Not Harder',
}

const font = Nunito ({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}> 
        <ClientOnly>
          <ToasterProvider/>
          <SearchModal/>
          <RegisterModal/>
          <LoginModal/>
          <RentModal/>
          <Navbar currentUser = {currentUser}/>
        </ClientOnly> 
        {children}
        <div className="pb-20 pt-28">
          {children}
        </div> 
      </body>
    </html>
  )
}
