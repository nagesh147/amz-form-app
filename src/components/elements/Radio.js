import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Radio = ({ formItem, orderHandler, currentOrder }) => {
  const [selectedOption, setselectedOption] = useState(null)
  const { register } = useForm()
  return (
    <>
      <div
        onChange={(e) => {
          setselectedOption(e.target.value)
        }}
      >
        <label>{formItem.question}</label>
        <br />

        <input
          type={formItem.dataType}
          className="mbt5"
          value={formItem.dataTypeValue.split(',')[0]}
          {...register('orderOne', { required: formItem.isRequired })}
        />
        <label>{formItem.dataTypeValue.split(',')[0]}</label>
      </div>
      {/* {selectedOption === 'Yes' && orderHandler(currentOrder)}
      {selectedOption === 'Injury' && orderHandler(currentOrder)} */}
    </>
  )
}

export default Radio
