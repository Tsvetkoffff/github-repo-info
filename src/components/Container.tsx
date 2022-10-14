import {HTMLAttributes, ReactNode, FC} from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({children}) => (
  <div className='container mx-auto px-3 xl:px-4 2xl:px-5'>{children}</div>
)

export default Container
