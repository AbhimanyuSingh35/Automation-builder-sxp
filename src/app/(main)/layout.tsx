import React from 'react'
import MenuOptions from '@/components/sidebar'
type Props = {children:React.ReactNode}
const Layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'> 
     <MenuOptions/>
    <div className='w-full'>
      {props.children}</div></div>
  )
}

export default Layout