import React from 'react';

import BaseLayout from '../../containers/BaseLayout/BaseLayout';
import VehiclesAddForm from '../../containers/VehiclesAddForm/VehiclesAddForm';

function toSend(form){
    console.log(form);
}

const RegisterVehicles = () => (
    <BaseLayout pageName="Cadastro de Veículos">
        <VehiclesAddForm toSend={toSend} />
    </BaseLayout>
)

export default RegisterVehicles
