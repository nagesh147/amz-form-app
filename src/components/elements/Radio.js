import React, { useState } from 'react'
import './styles.css'
const Radio = ({ formItem, renderNextOrderFields, onChange }) => {
  const [eventEl, setEventEl] = useState(null)
  const renderNextCheck = (e) => e && renderNextOrderFields(e, formItem)

  return (
    <>
      <div className="questionItem" onChange={(e) => setEventEl(e)}>
        <label className="label">
          {formItem.isRequired && <span className="astr">* </span>}
          {formItem.question}
        </label>
        <br />
        <div className="radioBtnWrapper">
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
      {renderNextCheck(eventEl)}
    </>
  )
}

export default Radio
