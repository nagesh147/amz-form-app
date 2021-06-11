import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import '../../forms/styles.css'
import './styles.css'

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
        <label className="label">
          <span className="astr">* </span>
          {formItem.question}
        </label>
        <br />
        {formItem.dataTypeValue.split(',').map((radioValue, index) => {
          return (
            <div className="radioBtnWrapper">
              <input
                type={formItem.dataType}
                className="mbt5"
                value={radioValue}
                {...register('orderOne', { required: formItem.isRequired })}
              />
              <label className="optionLabel">{radioValue}</label>
            </div>
          )
        })}
      </div>
      {selectedOption === 'Yes' && optionChangeHandler(event)}
      {selectedOption === 'Injury' && optionChangeHandler(event)}
    </>
  )
}

export default Radio
