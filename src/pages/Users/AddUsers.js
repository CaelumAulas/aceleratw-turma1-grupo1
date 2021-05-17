import React from 'react'

import BaseLayout from '../../containers/BaseLayout/BaseLayout'
import UserForm from '../../containers/UserForm/UserForm'

const AddUsers = () => (
    <BaseLayout>
        <UserForm toSend={sendUser} />
    </BaseLayout>
)

function sendUser(user) {
    console.log(user)
}

export default AddUsers
