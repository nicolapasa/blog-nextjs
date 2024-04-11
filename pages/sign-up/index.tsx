
import style from './signup.module.css'
import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {

  return (
    <div className={style.container}>
          <SignUp />
     
    </div>
  )
}

export default SignupPage