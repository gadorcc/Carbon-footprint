'use client'
import React from 'react'
import MyComponent from '@/app/api/calculator/car/route'
import Form from '@/components/Form'

const page = () => {
  return (
    <>
    <div>calculator car CO2</div>
    <Form />
    <MyComponent distance={15} />
    </>
  )
}

export default page
