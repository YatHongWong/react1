import React from 'react'

interface Props {
    text: string;
    type: string;
}

const Buttons = ({text, type}: Props) => {
  return (
    <button className={'btn btn-' + type}>{text}</button>
  )
}

export default Buttons