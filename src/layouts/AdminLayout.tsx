import React from 'react'
import Admin from '../pages/Admin'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>
            headerAdmin
                <Outlet/>
            footerAdmin
        </div>
    )
}

export default AdminLayout