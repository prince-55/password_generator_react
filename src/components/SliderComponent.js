import React from 'react'

function SliderComponent({value, handleChange}) {
  return (
    <div className='container_slider'>
        <h6>Character length <span className="spanValue">{value}</span></h6>
        <input type="range" 
        value={value} 
        min={10} 
        max={20}
        step={1}
        onChange={handleChange }
        />
    </div>
  )
}

export default SliderComponent