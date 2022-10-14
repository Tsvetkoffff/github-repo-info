import {FC, HTMLAttributes} from 'react'

const Error: FC<HTMLAttributes<HTMLParagraphElement>> = () => (
  <p className='w-[360px] p-4 my-4 mx-auto bg-red-400 rounded-2xl text-center'>
    Something went wrong!!!
  </p>
)

export default Error
