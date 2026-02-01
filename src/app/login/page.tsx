import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]"></div>

      <div className="w-full max-w-md space-y-8 border border-white/12 p-10 rounded-3xl bg-white/50 dark:bg-background/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Login
          </h1>
          <p className="mt-2 text-muted-foreground">
            Welcome back to {siteConfig.name}
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
            <div>
              <label
                htmlFor="email-address"
                className="text-sm font-medium text-foreground block mb-1"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground focus:z-10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none sm:text-sm transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-foreground block mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground focus:z-10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none sm:text-sm transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-full bg-secondary py-3 px-4 text-sm font-normal tracking-wide text-primary-foreground dark:text-secondary-foreground shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/12 hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all ease-out active:scale-95"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center text-sm mt-6">
          <span className="text-muted-foreground">
            Don&apos;t have an account?{" "}
          </span>
          <Link
            href="/register"
            className="font-semibold text-secondary hover:underline transition-colors"
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
}
