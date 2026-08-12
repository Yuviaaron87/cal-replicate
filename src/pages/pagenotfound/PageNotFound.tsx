import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f7f5] px-6">
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <p className="text-[120px] font-bold leading-none tracking-[-0.08em] text-neutral-900 sm:text-[180px]">
          404
        </p>

        {/* Badge */}
        <div className="mt-6 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
          Page not found
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Oops! This page doesn't exist.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-neutral-500 sm:text-base">
          The page you're looking for may have been moved, deleted, or the URL
          may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}