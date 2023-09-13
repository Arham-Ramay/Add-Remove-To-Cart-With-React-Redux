import React from 'react'

function User(props) {
const {data}=props

  return (
    <>
    <h1>user component</h1>
    <h4>{data.name}</h4>
    <h4>{data.age}</h4>

    </>
  )
}

export default User