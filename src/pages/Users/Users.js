import React from 'react'

import BaseLayout from '../../containers/BaseLayout/BaseLayout'
import UsersTable from '../../containers/UsersTable/UsersTable'



const Users = () => (
    <BaseLayout pageName="Usuários">
        <UsersTable/>
    </BaseLayout>
)

export default Users