import React from 'react'

const NavListItem = ({nav}) => {
  return (
    <li className='p-2'>
        <a href={nav.link}>{nav.name}</a>
    </li>
  )
}

export default NavListItem