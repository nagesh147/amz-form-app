import React, { useState } from 'react'
import './styles.css'
const Radio = ({
  formItem,
  renderNextOrderFields,
  onChange,
  value,
  error,
  invalid,
  ref,
}) => {
  const [eventEl, setEventEl] = useState(null)
  const renderNextCheck = (e) => e && renderNextOrderFields(e, formItem)

  return (
    <>
      <div
        className="questionItem"
        onChange={(e) => {
          e.persist()
          onChange(e.target.value)
          setEventEl(e)
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
              <>
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
              </>
            )
          })}
        </div>
      </div>
      {eventEl && renderNextCheck(eventEl)}
      {error && error.ref.name && error.type === 'required' && (
        <div className="radioBtnWrapper errorMsg">
          <span className="astr">* </span>required field
        </div>
      )}
    </>
  )
}

export default Radio
