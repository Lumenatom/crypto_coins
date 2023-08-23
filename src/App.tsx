import Header from "./components/Header.tsx";
import SingUpBlock from "./components/SingUpBlock.tsx";
import CardsCoins from "./components/ CardsCoins.tsx";

function App() {
  return (
    <div className="w-full h-full min-h-screen  bg-bg-image bg-no-repeat bg-left-top bg-cover">
      <div className="text-white bg-black bg-opacity-60 w-full h-screen">
        <Header />
        <div className="grid xl:grid-cols-2 gap-5 sm:grid-cols-1 container mx-auto">
          <SingUpBlock />
          <CardsCoins />
        </div>
      </div>
    </div>
  );
}

export default App;
