import { CoinData } from "../types";

const ItemCoinCard = ({ name, price, symbol, icon }: CoinData) => {
  return (
    <div className="flex items-center justify-between w-[48%] bg-white gap-4  p-4 rounded-2xl hover:scale-105 transform ease-in-out duration-500">
      <div className="flex items-center gap-5 ">
        <img className="w-12 h-12" src={icon} alt={name} />
        <div className="flex flex-col ">
          <h2 className="text-black font-extrabold text-xl">{symbol}</h2>
          <p className="text-black font-extralight text-base">
            {name.slice(0, 10)}
          </p>
        </div>
      </div>
      <span className="text-black font-bold text-xl ">${price.toFixed(4)}</span>
    </div>
  );
};

export default ItemCoinCard;
