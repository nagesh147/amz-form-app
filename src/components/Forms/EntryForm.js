import React, { useState } from 'react'
import jsonData from '../../data.json'
import Field from '../../components/elements/Field'
import './styles.css'

export default function EntryForm() {
  const [values, setValues] = useState({})
  const renderNextOrderFields = (event, formItem, nextOrder) => {
    return renderFormFields(nextOrder)
  }

  // const checkValidity = (field) => {
  //   const rules = field.validation
  //   const value = field.value
  //   let isValid = true
  //   if (!rules) {
  //     return true
  //   }

  //   if (rules.required) {
  //     isValid = value.trim() !== '' && isValid
  //   }

  //   if (rules.minLength) {
  //     isValid = value.length >= rules.minLength && isValid
  //   }

  //   if (rules.maxLength) {
  //     isValid = value.length <= rules.maxLength && isValid
  //   }

  //   return isValid
  // }

  const setFormDataHandler = (fieldId, value) => {
    console.log({ fieldId, value })
    setValues((currentValues) => {
      currentValues[fieldId] = value
      return currentValues
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    console.log({ values })
  }

  const renderFormFields = (nextOrder = 1) => {
    const el =
      jsonData &&
      jsonData
        .filter((i) => i.order === nextOrder)
        .map((formItem, index) => (
          <Field
            formItem={formItem}
            key={formItem.id}
            renderNextOrderFields={renderNextOrderFields}
            setFormDataHandler={setFormDataHandler}
          />
        ))
    return <>{el}</>
  }

  return (
    <form onSubmit={(event) => onSubmit(event)} className="entryForm">
      {renderFormFields()}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
