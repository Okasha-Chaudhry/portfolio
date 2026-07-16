import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-8xl font-bold text-accent">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-muted">This page does not exist or has moved.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </main>
  );
}