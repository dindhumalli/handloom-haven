import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCartStore();
  const [showAddress, setShowAddress] = useState(false);
  const [addressSaved, setAddressSaved] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.address || !form.city || !form.state || !form.pincode) {
      toast.error("Please fill in all fields");
      return;
    }
    setAddressSaved(true);
    toast.success("Address Saved Successfully!");
  };

  if (items.length === 0 && !addressSaved) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20">
          <h1 className="font-display text-2xl font-bold text-foreground">Your Cart is Empty</h1>
          <p className="mt-2 font-body text-muted-foreground">Start shopping to add items to your cart.</p>
          <a
            href="/shop"
            className="mt-6 rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-deep-red-light"
          >
            Browse Collection
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold text-foreground">Shopping Cart</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="space-y-4 lg:col-span-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-lg border bg-card p-4 animate-fade-in"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-md object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-md border p-1 text-muted-foreground hover:bg-muted"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center font-body text-sm font-semibold text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-md border p-1 text-muted-foreground hover:bg-muted"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-display text-base font-bold text-primary">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.info(`${item.name} removed`);
                      }}
                      className="rounded-md p-1.5 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">Order Summary</h2>
            <div className="mt-4 space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between font-body text-sm text-muted-foreground">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-display text-lg font-bold text-foreground">
                <span>Total</span>
                <span>₹{totalPrice().toLocaleString("en-IN")}</span>
              </div>
            </div>
            <button
              onClick={() => setShowAddress(true)}
              className="mt-6 w-full rounded-md bg-primary py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-deep-red-light"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Address Form */}
        {showAddress && !addressSaved && (
          <div className="mt-10 mx-auto max-w-lg animate-fade-in-up">
            <h2 className="font-display text-2xl font-bold text-foreground">Shipping Address</h2>
            <form onSubmit={handleAddressSubmit} className="mt-6 space-y-4">
              {([
                { key: "name", label: "Full Name", type: "text" },
                { key: "contact", label: "Contact Number", type: "tel" },
                { key: "address", label: "Address", type: "text" },
                { key: "city", label: "City", type: "text" },
                { key: "state", label: "State", type: "text" },
                { key: "pincode", label: "Pincode", type: "text" },
              ] as const).map((field) => (
                <div key={field.key}>
                  <label className="font-body text-sm font-medium text-foreground">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="mt-1 w-full rounded-md border bg-card px-4 py-2.5 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full rounded-md bg-primary py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-deep-red-light"
              >
                Save Address
              </button>
            </form>
          </div>
        )}

        {addressSaved && (
          <div className="mt-10 text-center animate-scale-in">
            <div className="mx-auto max-w-md rounded-lg border bg-card p-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                Address Saved Successfully!
              </h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Your order is being prepared. Thank you for supporting handloom artisans!
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
