
import ProductWrapper from '@/components/product-wrapper/ProductWrapper'

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
    <div className="container">
      <ProductWrapper data={data} />
    </div>
  </main>
}


