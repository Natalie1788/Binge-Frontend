
import Select from 'react-select'
import { useState } from 'react'

const tastePreferencies = [
  { value: 'söt', label: 'Söt' },
  { value: 'salt', label: 'Salt' },
  { value: 'sur', label: 'Sur' },
  { value: 'bitter', label: 'Bitter' },
  { value: 'kryddig', label: 'Kryddig' },
  { value: 'neutral', label: 'Neutral' },
  
]
const isMulti = true;

export default function TastePreferencies(){
const [taste, setTaste] = useState("")

const getValue = () =>{
  if (taste) {
    return isMulti ? tastePreferencies.filter(c => taste.indexOf(c.value) >= 0) : tastePreferencies.find(c => c.value === taste)
  } else {
    return isMulti ? [] : ""
  }
}
const onChange = (newValue) => {
  setTaste(
    isMulti ? newValue.map(v => v.value) : newValue.value
  )
}
  return(
    <div className='container w-2/4 mx-auto mt-12'>
      <h1 className='text-lg'>Smakpreferenser</h1>
      <Select
    //defaultValue={[options[2], options[3]]}
    isMulti
    name="tastes"
    options={tastePreferencies}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
    value={getValue()}
  />
    </div>
  )
}