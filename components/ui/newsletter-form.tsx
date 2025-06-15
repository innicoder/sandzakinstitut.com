"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";

interface NewsletterFormProps {
  variant?: "default" | "inline";
  buttonText?: string;
  placeholder?: string;
}

export function NewsletterForm({ 
  variant = "default",
  buttonText = "Prijavite se",
  placeholder = "Vaša email adresa"
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Molimo unesite validnu email adresu");
      return;
    }

    setStatus("loading");
    
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      // For now, just simulate success
      setStatus("success");
      setMessage("Hvala! Uspješno ste se prijavili na naš newsletter.");
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Greška pri prijavi. Molimo pokušajte ponovo.");
    }
  };

  if (status === "success" && variant === "default") {
    return (
      <Alert className="mx-auto max-w-md border-green-200 bg-green-50">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          {message}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`
      ${variant === "inline" ? "mx-auto flex max-w-md flex-col gap-4 sm:flex-row" : "space-y-4"}
    `}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        disabled={status === "loading"}
        className={`
          ${variant === "inline" ? "flex-1" : ""}
          ${status === "error" ? "border-red-500" : ""}
        `}
      />
      <Button 
        type="submit" 
        size={variant === "inline" ? "lg" : "default"}
        variant={variant === "inline" ? "secondary" : "default"}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Prijavljivanje..." : buttonText}
      </Button>
      
      {status === "error" && (
        <Alert className="mt-2 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            {message}
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}