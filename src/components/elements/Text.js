import React, { useState } from 'react'
import './styles.css'

const Text = ({ formItem, onChange }) => {
  const [values, setvalues] = useState(null);
  return (
    <div
        onChange={(e) => {
          // setEvent(e)
          setvalues(e.target.value)
          // setFormDataHandler(formItem.id, e.target.value)
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
        onChange={onChange}
      />
    </div>
  )
}

export default Text
