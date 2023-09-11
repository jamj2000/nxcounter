'use client'

import Link from "next/link"
import Counter from "@/components/counter"

function contadores() {

  return (
    <div>
      <Counter name='c1'/>
      <Counter name='c2'/>
      <br></br>
      <h1><Link href="/"> Inicio </Link></h1>
    </div>

  )
}

export default contadores