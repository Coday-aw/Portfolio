export default function Footer() {
  return (
    <footer className="border-t border-surface-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Coday Awahmed</span>. All
          rights reserved.
        </p>
        <p className="text-xs text-muted/60">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
