import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import '../../forms/styles.css'
import './styles.css'

const Radio = ({ formItem, optionChangeHandler }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [event, setEvent] = useState(null)
  const { register } = useForm()
  const renderNextCheck = (event) => {
    if (selectedOption === 'Yes' || selectedOption === 'Injury') {
      return optionChangeHandler(event)
    }
  }

  return (
    <>
      <div
        onChange={(e) => {
          setEvent(e)
          setSelectedOption(e.target.value)
        }}
      >
        <label className="label">
          {formItem.isRequired && <span className="astr">* </span>}
          {formItem.question}
        </label>
        <br />
        {formItem.dataTypeValue.split(',').map((radioValue, index) => {
          return (
            <div className="radioBtnWrapper" key={radioValue}>
              <input
                type={formItem.dataType}
                value={radioValue}
                {...register(formItem.id, {
                  required: formItem.isRequired,
                })}
              />
              <label className="optionLabel">{radioValue}</label>
            </div>
          )
        })}
      </div>
      {renderNextCheck(event)}
    </>
  )
}

export default Radio
