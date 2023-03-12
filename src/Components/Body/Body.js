import React from 'react'
import StepContext from '../Pages/create_project/Context/StepContext'
import CreateProjectBody from '../Pages/create_project/Steps_Container/CreateProjectBody'

export const Body = () => {
  return (
      <StepContext>
         <div>
            <CreateProjectBody />
          </div>
      </StepContext>     
  )
}
