import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import '../../forms/styles.css'
import './styles.css'

const Radio = ({ formItem, renderNextOrderFields, setFormDataHandler }) => {
  const { register } = useForm()
  const [selectedOption, setSelectedOption] = useState(null)
  const [event, setEvent] = useState(null)
  const renderNextCheck = (e) => {
    let nextOrder = formItem.order
    if (selectedOption === 'Yes' || selectedOption === 'Injury') {
      nextOrder++
      return renderNextOrderFields(e, formItem, nextOrder)
    }
  }

  return (
    <>
      <div
        onChange={(e) => {
          setEvent(e)
          setSelectedOption(e.target.value)
          setFormDataHandler(formItem.id, e.target.value)
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
