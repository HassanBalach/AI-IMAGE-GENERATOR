import { Header, TransformationForm } from '@/components/Shared'
import React from 'react'
import { SearchParamProps } from '../../../../../../Types'
import { transformationTypes } from '../../../../../../constants'


const AddTransmissionTypePage = ({params: {type}}:SearchParamProps ) => {
 
  const transformation = transformationTypes[type]

  return (
    <>
      <Header
      title={transformation.title}
      subtitle= {transformation.subTitle}
      />

    <TransformationForm />


      
</>
  )
}

export default AddTransmissionTypePage
