import Layout from '../components/layout/Layout'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastContainer } from 'react-toastify'
import './styles/global.css' 

export default function App({
  Component,
  pageProps
}) {
  return (
    <ClerkProvider>
    <Layout>
    <ToastContainer />
      <Component {...pageProps} />
   
    </Layout>
    </ClerkProvider>
  )
}