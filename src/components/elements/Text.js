import React from 'react'
// import '../../forms/styles.css'

const Text = ({ formItem, orderHandler, currentOrder }) => {
  return (
    <div className="mbt5">
      {/* <label> {formItem.question} </label> */}
      <input
        type={formItem.dataType}
        className="mbt5"
        placeholder={'Please provide details'}
        // onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  )
}

export default Text
