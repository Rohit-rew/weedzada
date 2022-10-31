import HeaderS from "../../components/header/header.server"
import MainSliderC from "../../components/homecomponents/MainSlider.client"
import Footer from "../../components/footer/Footer.server"
import FeaturedProduct from "../../components/homecomponents/FeaturedProduct/FeaturedProduct.server"

export default function Home() {


  return (
    <main>
      <HeaderS />
      <MainSliderC />
      <FeaturedProduct />




      <Footer />

    </main>
  ) 
}
