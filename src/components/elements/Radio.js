import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Radio = ({ formItem, orderHandler, targetVal }) => {
  const [selectedOption, setselectedOption] = useState(null)
  const { register } = useForm()
  return (
    <>
      <div
        onChange={(e) => {
          // setselectedOption(e.target.value)
          orderHandler(e)
        }}
      >
        <label>{formItem.question}</label>
        <br />
        {formItem.dataTypeValue.split(',').map((radioValue, index) => {
          return (
            <>
              <input
                type={formItem.dataType}
                className="mbt5"
                value={radioValue}
                {...register('orderOne', { required: formItem.isRequired })}
              />
              <label>{radioValue}</label>
            </>
          )
        })}
      </div>
      {/* {selectedOption === 'Yes' && orderHandler(currentOrder)}
      {selectedOption === 'Injury' && orderHandler(currentOrder)} */}
    </>
  )
}

export default Radio
