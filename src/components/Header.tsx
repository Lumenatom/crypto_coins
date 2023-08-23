const Header = () => {
  return (
    <header className="p-5 bg-black flex justify-between items-center">
      <h2 className="font-extralight text-white text-xl border-b-[1px]">
        CryptoDEV
      </h2>
      <ul className="flex items-center gap-5 text-white text-base">
        <li>
          <button className="font-extralight text-white text-base border-b-[1px]">
            Log In
          </button>
        </li>
        <li>
          <button className="px-1 font-extralight text-black rounded text-base border-b-[1px] bg-white">
            Log Out
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
