import React from 'react'

function CheckBoxComponent({ checked, handleCheck, labelValue}) {
  return (
    <label className=''>
        <input type="checkbox"
        checked={checked}
        className='px-2 me-3'
        onChange={() => handleCheck()}
        />{labelValue}
    </label>
  )
}

export default CheckBoxComponent