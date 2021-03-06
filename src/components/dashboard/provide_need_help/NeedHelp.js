import React, { Fragment } from 'react'
import Help from './index';
import Layout from '../../../hoc/Layout'

function NeedHelp() {
    const helpData = [{
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff Rice',
        quantity: '2',
        location: '0.2mm away '
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff Rice',
        quantity: '4',
        location: '0.2mm away'
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff Rice',
        quantity: '1',
        location: '0.2mm away'
    }, {
        date: 'Today, 12 April, 2020',
        type: 'Foodstuff fufu',
        quantity: '3',
        location: '0.9mm away'
    }]
    return (
        <Layout>
            <Fragment>
                <Help helpData={helpData} help='need' />
            </Fragment>
        </Layout>

    )
}

export default NeedHelp
