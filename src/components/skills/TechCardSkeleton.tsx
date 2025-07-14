import "./styles/skeleton.css"

const TechCardSkeleton = () => {
  return (
    <div className="relative w-50 h-50 bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-10 blur-sm transform skew-x-[-20deg] shimmer-effect"></div>

      <div className="w-16 h-16 bg-gray-700 rounded-full mb-4"></div>

      <div className="h-4 w-3/4 bg-gray-700 rounded mb-2"></div>

      <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
    </div>
  );
};

export default TechCardSkeleton;
