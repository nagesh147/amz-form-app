import React from 'react'
import Radio from '../elements/Radio'
import Text from '../elements/Text'
import Checkbox from '../elements/Checkbox'
import './styles.css'

const Field = (props) => {
  const formItem = props.formItem
  switch (formItem.dataType) {
    case 'radio':
      return (
        <Radio
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
          onChange={props.onChange}
          value={props.value}
          error={props.error}
          invalid={props.invalid}
        />
      )
    case 'picklist':
      return (
        <Checkbox
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
          onChange={props.onChange}
          value={props.value}
          error={props.error}
          invalid={props.invalid}
        />
      )
    case 'text':
      return (
        <Text
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
          onChange={props.onChange}
          value={props.value}
          error={props.error}
          invalid={props.invalid}
        />
      )
    default:
      break
  }

  return null
}

export default Field
