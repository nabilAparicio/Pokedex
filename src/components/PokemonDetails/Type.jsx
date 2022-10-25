import pokemonTypes from '../../assets/PokeTypesTailwind'
const Type = ({ type }) => {
  const typeColor = pokemonTypes[type.type.name] || 'slate-100'
  const bgStyle = {
    backGColor: { backgroundColor: `${typeColor}` }
  }
  return (
    <div>
      <div
        className="bg-red-500 py-3 px-5 shadow-lg m-3 rounded text-center"
        style={bgStyle.backGColor}>
        {type.type.name}
      </div>
    </div>
  )
}

export default Type
