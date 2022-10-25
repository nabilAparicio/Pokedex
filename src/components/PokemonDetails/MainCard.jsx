const MainCard = ({ Pokemon }) => {
  const Stats = {
    HP: Pokemon.stats[1].base_stat,
    Attack: Pokemon.stats[2].base_stat,
    Defense: Pokemon.stats[3].base_stat,
    Speed: Pokemon.stats[5].base_stat
  }
  const StatsStyle = {
    HP: { width: `${(Stats.HP * 100) / 150}%` },
    Attack: { width: `${(Stats.Attack * 100) / 150}%` },
    Defense: { width: `${(Stats.Defense * 100) / 150}%` },
    Speed: { width: `${(Stats.Speed * 100) / 150}%` }
  }
  return (
    <div className=" bg-white  relative rounded shadow">
      <img
        className=" max-h-60 inset-x-1/3 -inset-y-1/4 absolute mx-auto "
        src={Pokemon.sprites.other['official-artwork'].front_default}
        alt={Pokemon.name}
      />
      <div className="mt-32">
        <h2 className="text-5xl text-center font-bold capitalize ">
          {Pokemon.name}
        </h2>
      </div>
      <div className="m-5">
        <p className="font-bold">HP</p>
        <div className="w-full bg-gray-200 rounded-full h-5 mb-6">
          <div className="bg-green-400 h-5 rounded-full " style={StatsStyle.HP}>
            <span className="text-sm align-middle font-bold flex justify-end mr-2 ">
              {Stats.HP}/150
            </span>
          </div>
        </div>
        <p className="font-bold">Attack</p>
        <div className="w-full bg-gray-200 rounded-full h-5 mb-6">
          <div
            className="bg-blue-400 h-5 rounded-full  "
            style={StatsStyle.Attack}>
            <span className="text-sm align-middle font-bold flex justify-end mr-2 ">
              {Stats.Attack}/150
            </span>
          </div>
        </div>
        <p className="font-bold">Defense</p>
        <div className="w-full bg-gray-200 rounded-full h-5 mb-6">
          <div
            className="bg-yellow-400 h-5 rounded-full  "
            style={StatsStyle.Defense}>
            <span className="text-sm align-middle font-bold flex justify-end mr-2 ">
              {Stats.Defense}/150
            </span>
          </div>
        </div>
        <p className="font-bold">Speed</p>
        <div className="w-full bg-gray-200 rounded-full h-5">
          <div
            className="bg-red-400 h-5 rounded-full "
            style={StatsStyle.Speed}>
            <span className="text-sm align-middle font-bold flex justify-end mr-2 ">
              {Stats.Speed}/150
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard
