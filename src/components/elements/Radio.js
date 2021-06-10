import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Radio = ({ formItem, optionChangeHandler }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [event, setEvent] = useState(null)
  const { register } = useForm()

  return (
    <>
      <div
        onChange={(e) => {
          setEvent(e)
          setSelectedOption(e.target.value)
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
      {selectedOption === 'Yes' && optionChangeHandler(event)}
      {selectedOption === 'Injury' && optionChangeHandler(event)}
    </>
  )
}

export default Radio
