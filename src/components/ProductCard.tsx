import type { Product } from "@/store/cartStore";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((s) => s.addToCart);

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg animate-scale-in">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 font-body text-xs text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="mt-1 font-body text-[11px] italic text-muted-foreground">
          by {product.artisan}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-primary">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 font-body text-xs font-semibold text-primary-foreground transition-colors hover:bg-deep-red-light"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
