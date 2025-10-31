import ProductCard from './ProductCard'
import { medicines } from '../../utils/medicineData'

export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {medicines.map((m) => (
        <ProductCard key={m.id} product={m} />
      ))}
    </div>
  )
}
