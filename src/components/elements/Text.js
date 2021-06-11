import React from 'react'
// import '../../forms/styles.css'

const Text = ({ formItem, orderHandler, currentOrder }) => {
  return (
    <div className="mbt5">
      <label className="label">
        <span className="astr">* </span>
        {formItem.question}
      </label>
      <br />
      <input
        type={formItem.dataType}
        className="textBox"
        placeholder={'Please provide details'}
        // onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  )
}

export default Text
