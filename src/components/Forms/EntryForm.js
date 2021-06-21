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

  const renderNextOrderFields = (event, formItem, optionalArg) => {
    const selectedVal = event.target.value
    const name = formItem.name
    return renderFormFields(selectedVal, name, optionalArg)
  }

  const onSubmit = (data) => {
    console.dir(data)
  }

  const renderFormFields = (
    selectedVal = '',
    identifier = '',
    optionalArg = ''
  ) => {
    const el =
      jsonData &&
      jsonData
        .filter((i) => {
          if (identifier !== '' && !optionalArg) {
            return (
              i.selectedOption === selectedVal &&
              i.parentIdentifier === identifier
            )
          } else if (identifier !== '' && optionalArg) {
            if (optionalArg[i.selectedOption])
              return i.parentIdentifier === identifier
          } else {
            return i.parentIdentifier === identifier
          }
          return null
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
                error={error}
                invalid={invalid}
                onChange={onChange}
                ref={ref}
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
