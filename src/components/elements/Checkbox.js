import React, { useState, useEffect } from 'react'
import './styles.css'

const Checkbox = ({
  formItem,
  renderNextOrderFields,
  onChange,
  value,
  error,
  invalid,
}) => {
  const [event, setEvent] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])

  useEffect(() => {
    let cbOptions = {}
    formItem.dataTypeValue
      .split(',')
      .map((checkValue) => (cbOptions[checkValue] = false))
    setSelectedOptions(cbOptions)
  }, [formItem.dataTypeValue])

  const selectedOptionsHandler = (e, checkValue) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [checkValue]: e.target.checked,
    }))
  }

  const renderNextCheck = (e) =>
    renderNextOrderFields(e, formItem, selectedOptions)

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
                    e.persist()
                    selectedOptionsHandler(e, checkValue)
                    setEvent(e)
                    onChange(selectedOptions)
                  }}
                  name={formItem.dataTypeValue}
                />
                <label className="optionLabel">{checkValue}</label>
              </div>
            )
          })}
        </div>
      </div>
      {event && renderNextCheck(event)}
      {error && error.ref.name && error.type === 'required' && (
        <div className="checkboxWrapper errorMsg">
          <span className="astr">* </span>required field
        </div>
      )}
    </>
  )
}

export default Checkbox
