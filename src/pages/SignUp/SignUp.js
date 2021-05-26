import React from 'react'

import BaseLayout from '../../containers/BaseLayout/BaseLayout'
import SignUpForm from '../../containers/SignUpForm/SignUpForm'

const SignUp = () => (
    <BaseLayout pageName="SignUp">
      <SignUpForm toSend={sendSignUp} />
    </BaseLayout>
)

function sendSignUp(signUpData) {
  console.log(signUpData);
  //chamar o método de enviar para API
}

export default SignUp
