export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

      <p className="mt-5 text-gray-400">
        AI is analyzing the company...
      </p>
    </div>
  );
}