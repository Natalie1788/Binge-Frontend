import React, { useState } from 'react';


function TagInput() {
  const [inputText, setInputText] = useState('');
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTag(inputText.trim());
      setInputText('');
    }
  };

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  function handleAddTags() {
    addTag(inputText.trim());
      setInputText('');
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  function handleRemoveTags() {
    setTags([]);
  }

  return (
    <div className='container w-2/4 mx-auto mt-12'>
        <p className='mb-5'>Ingredienser</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="border border-slate-500 border-solid rounded-md bg-gray-300 py-0.5 px-1.5 mr-1">
            {tag}
            <button onClick={() => removeTag(tag)}>&times;</button>
          </span>
        ))}
      </div>
      <input className='border border-slate-500 border-solid rounded mt-2.5'
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
        placeholder="Skriv in ingredienser"
      />
      <button className="border border-slate-500 border-solid rounded-md bg-gray-300 px-1.5 ml-2" onClick={()=> handleAddTags()}>Add</button>
      <button className="border border-slate-500 border-solid rounded-md bg-gray-300 px-1.5 ml-2" onClick={()=> handleRemoveTags()}>Remove all</button>
    </div>
  );
}

export default TagInput;