import React, { useState } from 'react'
// import '../../forms/styles.css'
import './styles.css'

const Radio = ({ formItem, renderNextOrderFields, setFormDataHandler, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [event, setEvent] = useState(null)
  const renderNextCheck = (e) => {
    if (selectedOption === 'Yes' || selectedOption === 'Injury') {
      return renderNextOrderFields(e, formItem)
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
        <div className="radioBtnWrapper" key={formItem.id}>
        {formItem.dataTypeValue.split(',').map((radioValue) => {
          return (
            <div>
              <input
                type={formItem.dataType}
                value={radioValue}
                htmlFor={radioValue}
                onChange={onChange}
                name={formItem.id}
              />
              <label className="optionLabel">{radioValue}</label>
            </div>
          )
        })}
        </div>
      </div>
      {renderNextCheck(event)}
    </>
  )
}

export default Radio
