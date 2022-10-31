import React, { Suspense } from 'react'
import { gql , useShopQuery} from '@shopify/hydrogen'
import HeaderC from './header.client'

export default function HeaderS() {


  const {data : {menu}} = useShopQuery({
    query : GET_MENUE_ITEMS,
    variables : {
      handle : "Main-menue"
    }
  })

  
  return (
    <header className='header'>
        <HeaderC menue={menu.items} />
    </header>
  )
}


const GET_MENUE_ITEMS = gql`
{
	menu(handle : "Main-menu"){
    title
    items {
      title
      id
    }
  }
}
`



