function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-green-700"></div>

      <p className="mt-4 text-gray-600">
        Carregando produtos...
      </p>
    </div>
  );
}

export default Loading;