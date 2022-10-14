import {FC, HTMLAttributes} from 'react'

const Loader: FC<HTMLAttributes<HTMLParagraphElement>> = ({className}) => (
  <p className={`text-center p-6 ${className}`}>Loading...</p>
)

export default Loader
