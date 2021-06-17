import React, { useState } from 'react'
import './styles.css'
import { v4 as uuid_v4 } from 'uuid'
const Radio = ({ formItem, renderNextOrderFields, onChange }) => {
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
        }}
      >
        <label className="label">
          {formItem.isRequired && <span className="astr">* </span>}
          {formItem.question}
        </label>
        <br />
        <div className="radioBtnWrapper">
          {formItem.dataTypeValue.split(',').map((radioValue) => {
            return (
              <div key={uuid_v4()}>
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
