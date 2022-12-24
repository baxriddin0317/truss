import React from 'react'
import AppLayout from '../../components/layout/AppLayout'
import Solution from '../../components/solutions'
import Contents from '../../components/solutions/Contents'

const hero = {
    info: "solutions",
    title: "Who can use Truss?",
    childComponent: <Contents />  
}


const index = () => {
  return (
    <AppLayout heroChild={hero}>
        <Solution />
    </AppLayout>
  )
}

export default index