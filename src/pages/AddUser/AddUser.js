import React from 'react'

import BaseLayout from '../../containers/BaseLayout/BaseLayout'
import AddUsersForm from '../../containers/AddUserForm/AddUserForm'

const AddUser = () => (
    <BaseLayout pageName="Usuários">
        <AddUsersForm/>
    </BaseLayout>
)

export default AddUser