// components/Loader.js
const Loader = () => {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
        <div className="spinner-border animate-spin rounded-full border-4 border-t-4 border-white w-16 h-16"></div>
      </div>
    );
  };
  
  export default Loader;
  