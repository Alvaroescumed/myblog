import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]}) // forma de importar fonts en Next, con subset seleccionamos que queremos importar

export default function App({ Component, pageProps }) {
  return(

    <div className={inter.className}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
     </div>
     )
}
