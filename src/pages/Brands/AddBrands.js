import React from 'react';

import BaseLayout from '../../containers/BaseLayout/BaseLayout';
import BrandsForm from '../../containers/BrandsForm/BrandsForm';

const AddBrands = () => (
    <BaseLayout>
        <BrandsForm sendBrand={sendBrand} />
    </BaseLayout>
);

function sendBrand(brand) {
    console.log(brand);
}

export default AddBrands;