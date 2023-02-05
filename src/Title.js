import React from 'react'
import css from "./Title.module.css"

export default function Title(props) {
  return (
    <div className={css.title}>
      <h1>{props.selfTitle}</h1>
    </div>
  )
}
