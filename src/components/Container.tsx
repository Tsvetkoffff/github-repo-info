import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => (
  <div className=' container mx-auto px-3 xl:px-4 2xl:px-5 '>{children}</div>
)

export default Container
