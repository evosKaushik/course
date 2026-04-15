import { fetchPhotos } from "./api/mediaApi";

const App = () => {
  return (
    <main className="h-screen w-full text-white bg-gray-950">
      <button
        onClick={async () => {
          const data = await fetchPhotos("cat");
          console.log(data.result);
        }}
      >
        Get Photos
      </button>
    </main>
  );
};

export default App;
