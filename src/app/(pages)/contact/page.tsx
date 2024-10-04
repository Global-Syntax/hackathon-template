import Bounded from '@/components/ui/bounded'
import Heading from '@/components/ui/heading'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
   <Bounded>
    <Heading title="Contact" size="xl" tag="h1" className="mb-2"/>
      <span className="mb-8 text-lg">
        You can contact me here...
      </span>
   </Bounded>
  )
}