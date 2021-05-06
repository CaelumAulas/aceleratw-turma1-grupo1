import React from 'react'

import BaseLayout from '../../containers/BaseLayout/BaseLayout'
import AddUserForm from "../../containers/UsersForm/AddUserForm";

const Users = () => (
    <BaseLayout pageName="Usuários">
        <AddUserForm />
    </BaseLayout>
)

export default Users