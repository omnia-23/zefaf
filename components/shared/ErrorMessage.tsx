export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-center p-8 bg-red-50 rounded-lg max-w-md mx-auto">
      <div className="text-red-500 font-medium">{message}</div>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-[#DB0962] text-white rounded-md hover:bg-[#C00858]"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}
