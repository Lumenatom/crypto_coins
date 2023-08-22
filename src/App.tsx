function App() {
  return (
    <div className="w-full h-screen bg-bg-image bg-no-repeat bg-left-top bg-cover">
      <div className="text-white bg-black bg-opacity-60 w-full h-full">
        <header className="p-5 bg-black flex justify-between items-center">
          <h2>LOGO</h2>
          <ul className="flex items-center gap-5 text-white text-base">
            <li>
              <button>Log In</button>
            </li>
            <li>
              <button>Log Out</button>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default App;
