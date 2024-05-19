import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from '@/components/hero/Hero'
import Main from '@/components/main/Main'
import ProductWrapper from '@/components/product-wrapper/ProductWrapper'
import Section from '@/components/section/Section'


async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  let data = await getData()

  return <main>
    <div className="nav__bg">
      <Header />
    </div>
    <Hero />
    <Main />
    <ProductWrapper data={data} />
    <Section />
    <div className="nav__bg">
      <Footer />
    </div>
  </main>
}


