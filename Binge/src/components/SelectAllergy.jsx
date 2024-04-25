import React from 'react'
import Select from 'react-select'
import { useState } from 'react'

const allergies = [
  { value: 'nötter', label: 'Nötter' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'ägg', label: 'Ägg' },
  { value: 'gluten', label: 'Gluten' },
  { value: 'laktos', label: 'Laktos' },
  { value: 'fruktos', label: 'Fruktos' },
  
]
const isMulti = true;

export default function AllergySelection(){
const [taste, setTaste] = useState("")

const getValue = () =>{
  if (taste) {
    return isMulti ? allergies.filter(c=>taste.indexOf(c.value)>=0) : options.find(c=>c.value === taste)
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
      <h1 className='text-lg'>Allergier</h1>
      <Select
    //defaultValue={[options[2], options[3]]}
    isMulti
    name="allergies"
    options={allergies}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
    value={getValue()}
  />
    </div>
  )
}