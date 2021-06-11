import React from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'

const Text = ({ formItem, orderHandler, currentOrder }) => {
  const { register } = useForm()
  return (
    <div>
      <label className="label">
        {formItem.isRequired && <span className="astr">* </span>}
        {formItem.question}
      </label>
      <br />
      {/* <input
        type={formItem.dataType}
        className="textBox"
        placeholder={'Please provide details'}
        // onChange={(event) => handleChange(field_id, event)}
      /> */}
      <input
        type={formItem.dataType}
        className="textBox"
        placeholder={'Please provide details'}
        {...register(formItem.id, {
          required: formItem.isRequired,
        })}
      />
    </div>
  )
}

export default Text
