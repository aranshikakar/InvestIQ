export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <div className="relative">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600"></div>

        <div className="absolute inset-0 rounded-full bg-violet-100/40 blur-md"></div>

      </div>

      <h3 className="mt-6 text-lg font-semibold text-slate-900">
        Analyzing Company
      </h3>

      <p className="mt-2 text-slate-500">
        Gemini AI is generating your investment report...
      </p>

    </div>
  );
}