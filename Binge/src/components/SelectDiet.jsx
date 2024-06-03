import Select from 'react-select'
import { useRecipeContext } from '../hooks/RecipeContext';

const dietPreferencies = [
  { value: 'paleodiet', label: 'Paleodiet' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'keto', label: 'Keto' },
  { value: 'raw-food', label: 'Raw-food' },
  { value: 'LCHF-diet', label: 'LCHF-diet' },
]
const isMulti = false;

export default function DietPreferencies() {
  const { selectedDiets, addDiet, clearDiets } = useRecipeContext();

  const getValue = () => {
    // Return the option object where value matches selectedDiets string
    return dietPreferencies.find(c => c.value === selectedDiets);
  };

  const onChange = (newValue) => {
    const newDiet = newValue ? newValue.value : null;
    clearDiets();
    if (newDiet) {
      addDiet(newDiet); // Ensure addDiet updates the context with a string
    }
  };

  return (
    <div className='mt-3 mx-5'>
      <h1 className='text-lg font-bold	'>Diet</h1>
      <Select
        isMulti={isMulti}
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
