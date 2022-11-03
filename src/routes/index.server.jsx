import HeaderS from "../../components/header/header.server"
import MainSliderC from "../../components/homecomponents/MainSlider.client"
import Footer from "../../components/footer/Footer.server"
import FeaturedProduct from "../../components/homecomponents/FeaturedProduct/FeaturedProduct.server"
import CollectionGrid from "../../components/homecomponents/Collectiongrid/collectiongrid.server"
import TextMoving from "../../components/homecomponents/textmoving.client"
import ProductWheel from "../../components/homecomponents/productwheel/ProductWheel.server"


export default function Home() {


  return (
    <main>
      <HeaderS />
      <MainSliderC />
      {/* <TextMoving /> */}
      <CollectionGrid />
      <TextMoving />
      <FeaturedProduct />
      <ProductWheel />


      <Footer />

    </main>
  ) 
}
