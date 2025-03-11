import { getProducts } from "@/prisma-db"

type Product = {
  id: number;
  price: number;
  title: string;
  description: string | null
}

export default async function ProductsDB() {
  const products: Product[] = await getProducts()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-700 mb-2">{product.title}</h2>
              <p className="text-2xl font-bold text-emerald-600 mb-4">
                ${(product.price / 100).toFixed(2)}
              </p>
              {product.description && (
                <p className="text-slate-500">{product.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}