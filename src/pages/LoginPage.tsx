import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, ShieldCheck, Palette, ShoppingBag, Megaphone } from "lucide-react";

const roles = [
  { value: "buyer", label: "Buyer", icon: ShoppingBag, desc: "Browse & purchase handloom products" },
  { value: "artisan", label: "Artisan", icon: Palette, desc: "Manage your handloom creations" },
  { value: "admin", label: "Admin", icon: ShieldCheck, desc: "Platform administration" },
  { value: "marketing", label: "Marketing Specialist", icon: Megaphone, desc: "Campaigns & market insights" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("buyer");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email, role: selectedRole }));
    toast({ title: `Welcome, ${email}!`, description: `Logged in as ${selectedRole}` });
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border-border shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-display text-3xl font-bold text-primary">
            Handloom Hub
          </CardTitle>
          <CardDescription className="font-body text-muted-foreground">
            {isSignup ? "Create your account" : "Sign in to continue"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label className="font-body text-sm font-medium">Select Role</Label>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setSelectedRole(r.value)}
                    className={`flex flex-col items-center gap-1 rounded-md border p-3 text-center transition-all ${
                      selectedRole === r.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    <r.icon className="h-5 w-5" />
                    <span className="font-body text-xs font-semibold">{r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-body">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full font-body font-semibold">
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <p className="mt-4 text-center font-body text-sm text-muted-foreground">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="font-semibold text-primary hover:underline"
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
