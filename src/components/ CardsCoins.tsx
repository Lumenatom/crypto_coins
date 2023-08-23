import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import ItemCoinCard from "./ItemCoinCard.tsx";
import { CoinData } from "../types";

async function fetchCoins(page = 0) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${page}&limit=8&currency=USD`,
  );
  return data.coins;
}
const CardsCoins = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery(
    ["coins", page],
    () => fetchCoins(page),
    {
      keepPreviousData: true,
    },
  );
  console.log(data);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error:(</h3>;
  }
  if (!data) {
    return <h3>Not data</h3>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10  ">
      {data.map((el: CoinData) => (
        <ItemCoinCard
          key={el.symbol}
          name={el.name}
          icon={el.icon}
          symbol={el.symbol}
          price={el.price}
        />
      ))}
      <div className="flex gap-10 mt-10">
        <button
          onClick={() => setPage(page - 8)}
          disabled={!page}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-cyan-800 font-light rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer disabled:opacity-50"
        >
          Previous coins
        </button>
        <button
          onClick={() => setPage(page + 8)}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-cyan-800 font-light rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
        >
          Next coins
        </button>
      </div>
    </div>
  );
};

export default CardsCoins;
