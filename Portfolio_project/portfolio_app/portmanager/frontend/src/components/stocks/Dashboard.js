import React, { Fragment } from 'react'
import Stocks from './Stocks'
import Form from './Form'


export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Stocks />
        </Fragment>

    )
}
