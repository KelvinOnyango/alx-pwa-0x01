const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E2D609]"></div>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Loading Movies...
        </h1>
        <p className="text-gray-300">
          We're preparing an amazing collection for you
        </p>
      </div>
    </div>
  );
};

export default Loading;
