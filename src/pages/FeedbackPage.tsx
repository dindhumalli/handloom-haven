import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) {
      toast.error("Please enter your feedback");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container flex min-h-[70vh] items-center justify-center py-20">
        <div className="w-full max-w-lg animate-fade-in-up">
          <h1 className="font-display text-3xl font-bold text-foreground">Share Your Feedback</h1>
          <p className="mt-2 font-body text-muted-foreground">
            Help us improve Handloom Hub. Your suggestions shape the future of ethical fashion.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you think..."
                rows={6}
                className="w-full rounded-lg border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={1000}
                required
              />
              <p className="mt-1 text-right font-body text-xs text-muted-foreground">
                {feedback.length}/1000
              </p>
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-primary py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-deep-red-light"
              >
                Submit Feedback
              </button>
            </form>
          ) : (
            <div className="mt-8 rounded-lg border bg-card p-8 text-center animate-scale-in">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                Thank You!
              </h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Your feedback has been received. We appreciate your time!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 font-body text-sm font-medium text-primary hover:underline"
              >
                Submit another response
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
