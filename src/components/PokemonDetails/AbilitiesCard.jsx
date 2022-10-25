const AbilitiesCard = ({ Pokemon }) => {
  return (
    <div className="bg-white rounded w-1/2">
      <h2 className="text-center text-3xl font-bold">Type</h2>
      <div className="flex flex-wrap justify-evenly">
        {Pokemon?.abilities.map((x) => (
          <div
            className="bg-slate-300 py-3 px-5  m-3 rounded text-center"
            key={x.ability.name + x.ability.url}>
            {x.ability.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AbilitiesCard
