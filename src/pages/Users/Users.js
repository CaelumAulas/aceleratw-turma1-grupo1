import React from 'react'

import BaseLayout from '../../containers/BaseLayout/BaseLayout'
import UsersForm from "../../containers/UsersForm/UsersForm";

const Users = () => (
    <BaseLayout pageName="Usuários">
        <UsersForm />
    </BaseLayout>
)

export default Users