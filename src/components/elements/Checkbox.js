import React, { useState } from 'react'
import './styles.css'

const Checkbox = ({ formItem, renderNextOrderFields, onChange }) => {
  const [event, setEvent] = useState(null)

  const renderNextCheck = (e) =>
    e && e.target.checked && renderNextOrderFields(e, formItem)

  return (
    <>
      <div>
        <label className="label">
          {formItem.isRequired && <span className="astr">* </span>}
          {formItem.question}
        </label>
        <div className="checkboxWrapper" key={formItem.id}>
          {formItem.dataTypeValue.split(',').map((checkValue) => {
            return (
              <div>
                <input
                  type={'checkbox'}
                  value={checkValue}
                  htmlFor={checkValue}
                  onChange={(e) => {
                    setEvent(e)
                    onChange(e.target.checked)
                  }}
                  name={formItem.dataTypeValue}
                />
                <label className="optionLabel">{checkValue}</label>
              </div>
            )
          })}
        </div>
      </div>
      {renderNextCheck(event)}
    </>
  )
}

export default Checkbox
