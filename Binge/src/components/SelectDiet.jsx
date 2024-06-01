
import Select from 'react-select'
import { useRecipeContext } from '../hooks/RecipeContext';

const dietPreferencies = [
  { value: 'paleodiet', label: 'Paleodiet' },
  { value: 'vegansk', label: 'Vegansk' },
  { value: 'vegetarisk', label: 'Vegetarisk' },
  { value: 'ketogen', label: 'Ketogen' },
  { value: 'raw-food', label: 'Raw-food' },
  { value: 'LCHF-diet', label: 'LCHF-diet' },
  
]
const isMulti = true;

export default function DietPreferencies(){
  const { selectedDiets, addDiet, clearDiets } = useRecipeContext();

const getValue = () => {
  return isMulti ? dietPreferencies.filter(c => selectedDiets.includes(c.value)) : dietPreferencies.find(c => c.value === selectedDiets);
};

const onChange = (newValue) => {
  const newDiets = isMulti ? newValue.map(v => v.value) : newValue.value;
  clearDiets(); 
  newDiets.forEach((diet) => {
    addDiet(diet); 
  });
};


  return(
    <div className='container w-2/4 mx-auto mt-12'>
      <h1 className='text-lg'>Dietpreferenser</h1>
      <Select
    isMulti
    name="diets"
    options={dietPreferencies}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
    value={getValue()}
  />
    </div>
  )
}