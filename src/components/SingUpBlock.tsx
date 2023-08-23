const SingUpBlock = () => {
  return (
    <div className="flex flex-col gap-10 py-10 ">
      <h1 className="text-white text-[64px] font-light leading-normal">
        Journey Safe into the most trusted Blockchain Service on the Web!
      </h1>
      <div className=" flex items-center border-[1px] border-white rounded-[50px] w-fit">
        <input
          type="text"
          className="w-[210px] h-[47px] bg-transparent py-2 px-4 text-base font-extralight text-white placeholder:text-[#858080] outline-0"
          placeholder="Enter your Email address"
        />
        <button className="w-[108px] h-[47px] bg-[#D9D9D9] text-xl text-black rounded-[50px] border-[1px] border-white font-bold drop-shadow-baseText hover:bg-cyan-400 transition-colors">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SingUpBlock;
