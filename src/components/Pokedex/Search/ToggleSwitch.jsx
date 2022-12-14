import { useDispatch, useSelector } from 'react-redux'
import { setTypeName } from '../../../store/slice/pokeTypeName.slice'
import { setToggle } from '../../../store/slice/toggleSwitch.slice'

const ToggleSwitch = ({ isOn, handleToggle }) => {
  const dispatch = useDispatch()
  const Toggle = useSelector((state) => state.toggleSwitchSlice)
  return (
    <div className="mx-auto">
      <label
        htmlFor="teal-toggle"
        className="inline-flex relative items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          id="teal-toggle"
          className="sr-only peer"
          checked={Toggle}
          onChange={() => {
            dispatch(setToggle(!Toggle))
            dispatch(setTypeName(''))
          }}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
      </label>
    </div>
  )
}

export default ToggleSwitch
