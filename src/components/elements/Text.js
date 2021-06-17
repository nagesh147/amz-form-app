import React from 'react'
import './styles.css'

const Text = ({ formItem, onChange, renderNextOrderFields }) => {
  const renderNextCheck = (e) =>
    e && e.target.value && renderNextOrderFields(e, formItem)
  return (
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
      />
    </div>
  )
}

export default Text
