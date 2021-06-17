import React, { useState } from 'react'
import jsonData from '../../data.json'
import Field from '../elements/Field'
import { useForm, Controller } from 'react-hook-form'
import './styles.css'

export default function EntryForm() {
  const { handleSubmit, control } = useForm()

  const [values, setValues] = useState({})
  const renderNextOrderFields = (event, formItem) => {
    const selectedVal = event.target.value
    const name = formItem.name
    return renderFormFields(selectedVal, name)
  }

  const setFormDataHandler = (fieldId, value) => {
    console.log({ fieldId, value })
    setValues((currentValues) => {
      currentValues[fieldId] = value
      return currentValues
    })
  }

  const onSubmit = (data) => console.log(JSON.stringify(data))

  const renderFormFields = (selectedVal = '', identifier = '') => {
    const el =
      jsonData &&
      jsonData
        .filter((i) => {
          if (identifier !== '') {
            return (
              i.selectedOption === selectedVal &&
              i.parentIdentifier === identifier
            )
          } else {
            return i.parentIdentifier === identifier
          }
        })
        // form
        .map((formItem) => (
          <Controller
            name={formItem.name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Field
                formItem={formItem}
                renderNextOrderFields={renderNextOrderFields}
                setFormDataHandler={setFormDataHandler}
                value={value}
                onChange={onChange}
              />
            )}
            rules={{
              required: formItem.isRequired,
            }}
          />
        ))
    return <>{el}</>
  }

  return (
    <form className="entryForm" onSubmit={handleSubmit(onSubmit)}>
      {renderFormFields()}

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
