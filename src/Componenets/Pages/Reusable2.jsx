
import { useForm } from "react-hook-form"
import axios from "axios"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import "../Styles/Register.css"
function Reusable2({ data }) {
    const schema = yup.object().shape({
        email: yup.string().email("invalid Email").required("Email field is required"),
        password1: yup.string().required("Password is requird").min(5,"Pass word must have a minimum of 5 characters"),
       
      });

      const { register, handleSubmit, getValues, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
      });
    
    const onSubmit = (values) => {

        const data = {
            email: getValues("email"),
            password: getValues("password1")
        }
        const dataSubmit = async (value) => {
            try {
          const     res = await axios.post("http://localhost:5000/api/user/auth/login/", data)
                if (res.status === 201) {
                    console.log(res)
                    alert("from submission successful")
                } 
            } catch (error) {
                console.log(error)
                alert("form submission failed please reset your internet and retry")
            }
        }
        dataSubmit()
        reset()
        console.log(values)
    }
    const {row3} = data
    const render3 = 
        row3.map((i,k) => {
          switch (i.type) {
                case "email": return (
                    <div key={k} className="register_right_first">
                        <label htmlFor={i.label}>{i.label}</label>
                        <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                        {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                        <br />
                    </div>
                )
                case "password":
                    return (
                        <div key={k} className="register_right_first">
                            <label htmlFor={i.label}>{i.label}</label>
                            <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}   {...register(i.name)} required />
                            {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                            <br />
                        </div>
                    )      
            
                default: return (
                    <div><span>invalid field</span></div>
                )
          
            }
        })
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="register_right_input_firstChild">
            {render3}
           </div>
           <div className="register_right_input">
            <div className="register_notify">
          <div className="register_notify_firstChild">
            <input type="checkbox" />
           <p> Yes i want to receive Lotery Dispaly emails </p>
         </div>
          <div className="register_notify_firstChild">
             <input type="checkbox" />
           <p> i agree to all Terms. Privacy Policy and  fees</p>
         </div>
      
            </div>
        <div className="register_button">
          <button type="submit">
            Login
          </button>
          <p>Don't have an account? <a href="">Create Account</a></p>
        </div>
          </div>
      </form>
  </div>
    );
}

export default Reusable2;


