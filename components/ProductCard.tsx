import { Product } from "@/types"

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div>
      Product Card
    </div>
  )
}

export default ProductCard
