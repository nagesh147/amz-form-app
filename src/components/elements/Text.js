import React from 'react'
import './styles.css'

const Text = ({
  formItem,
  renderNextOrderFields,
  onChange,
  value,
  error,
  invalid,
}) => {
  const renderNextCheck = (e) => {
    e.persist()
    onChange(e.target.value)
    e && e.target.value && renderNextOrderFields(e, formItem)
  }
  return (
    <>
      <div
        onChange={(e) => {
          renderNextCheck(e)
        }}
      >
        <label className="label">
          {formItem.isRequired && <span className="astr">* </span>}
          {formItem.question}
        </label>
        <br />
        <input
          type={formItem.dataType}
          className="textBox"
          placeholder={formItem.dataType}
          name={formItem.name}
        />
      </div>
      {error && error.ref.name && error.type === 'required' && (
        <div className="checkboxWrapper errorMsg">
          <span className="astr">* </span>required field
        </div>
      )}
    </>
  )
}

export default Text
