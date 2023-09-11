'use client'
import React from 'react'
import { useEffect, useState, useLayoutEffect } from "react"

function Counter(props) {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //   setTimeout(() => setCount(count + 1), 1000)
    //   sessionStorage.setItem('state', count.toString())
    // }, [count]);
  
    useLayoutEffect(() => {
      if (sessionStorage.getItem(props.name)) {
        setCount(parseInt(sessionStorage.getItem(props.name)))
      } else {
        sessionStorage.setItem(props.name, count.toString())
      }
    }, [])
  
    useEffect(() => {
      sessionStorage.setItem(props.name, count.toString())
    }, [count])

  return (
    <div >
    <h1>{count}</h1>
    <button style={{ margin: '0 auto' }} onClick={() => setCount(count + 1)}>Incrementar</button>
    <button style={{ margin: '0 auto' }} onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  )
}

export default Counter