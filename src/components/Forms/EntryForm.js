import React, { useState } from 'react'
import jsonData from '../../data.json'
import Field from '../../components/elements/Field'
import { useForm } from 'react-hook-form'
import './styles.css'

export default function EntryForm() {
  const { register, handleSubmit } = useForm()

  const [values, setValues] = useState({})
  const renderNextOrderFields = (event, formItem, nextOrder) => {
    return renderFormFields(nextOrder)
  }

  const setFormDataHandler = (fieldId, value) => {
    console.log({ fieldId, value })
    setValues((currentValues) => {
      currentValues[fieldId] = value
      return currentValues
    })
  }

  const onSubmit = (data) => alert(JSON.stringify(data))

  const renderFormFields = (nextOrder = 1) => {
    const el =
      jsonData &&
      jsonData
        .filter((i) => i.order === nextOrder)
        .map((formItem, index) => (
          <>
            {
              <Field
                formItem={formItem}
                key={formItem.id}
                renderNextOrderFields={renderNextOrderFields}
                setFormDataHandler={setFormDataHandler}
              />
            }
            {/* <input
              {...register('lastnmeekdsfdjlj', {
                required: true,
                maxLength: 20,
              })}
            /> */}
          </>
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
