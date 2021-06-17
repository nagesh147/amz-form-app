import React from 'react'
import jsonData from '../../data.json'
import Field from '../elements/Field'
import { useForm, Controller } from 'react-hook-form'
import './styles.css'

export default function EntryForm() {
  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    criteriaMode: 'all',
    shouldFocusError: true,
    shouldUnregister: true,
  })

  const renderNextOrderFields = (event, formItem) => {
    const selectedVal = event.target.value
    const name = formItem.name
    console.log({ selectedVal, name })
    return renderFormFields(selectedVal, name)
  }

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

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
        .map((formItem) => (
          <Controller
            key={formItem.name}
            name={formItem.name}
            control={control}
            defaultValue=""
            render={({
              field: { onChange, value, name, ref, onBlur },
              fieldState: { error, invalid },
              formState: { isValid, isSubmitSuccessful },
            }) => (
              <Field
                formItem={formItem}
                renderNextOrderFields={renderNextOrderFields}
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
