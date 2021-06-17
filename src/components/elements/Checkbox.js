import React, { useState, useEffect } from 'react'
import './styles.css'

const Checkbox = ({ formItem, renderNextOrderFields, onChange, value }) => {
  console.log(value)
  const [event, setEvent] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])

  useEffect(() => {
    let cbOptions = {}
    formItem.dataTypeValue.split(',').map((checkValue) => {
      cbOptions[checkValue] = false
    })
    setSelectedOptions(cbOptions)
  }, [])

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
                    selectedOptionsHandler(e, checkValue)
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
      {event && renderNextCheck(event)}
    </>
  )
}

export default Checkbox
