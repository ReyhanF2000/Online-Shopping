import React from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import Products from './Products'
import Sidebar from './Sidebar'
import { myContext } from '../Context/context'

export default function ContainerComponent(props) {

    return (
        <myContext.Consumer>
            {(value) => (
                <>
                    <Navbar
                        state={value.state}
                        dispatch={value.dispatch}
                        {...props}
                    />
                    <Sidebar
                        state={value.state}
                        dispatch={value.dispatch}
                        {...props}
                    />
                    <Introduction />
                    <Products
                        dispatch={value.dispatch}
                        {...props}
                    />
                </>
            )}
        </myContext.Consumer>
    )
}

