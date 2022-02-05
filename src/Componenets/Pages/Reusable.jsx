import axios from "axios"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import "../Styles/Register.css"
function Reusable({ data }) {
    const history = useHistory()
    const schema = yup.object().shape({
        first_name: yup.string().required("First name is required"),
        last_name: yup.string().required("Last name is required"),
        email: yup.string().email("invalid Email").required("Email field is required"),
        phone: yup.string().required("Phone Number is required"),
        password1: yup.string().required("Password is requird").min(5,"Pass word must have a minimum of 5 characters"),
        password2: yup.string().required("Confirm Password is required").oneOf([yup.ref('password')], 'Passwords must and should match'),
      });

      const { register, handleSubmit,getValues, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
      });
    
    const onSubmit = (values) => {
        const dataSubmit = async (values) => {
            try {
                const data = {
                    first_ame: getValues("first_name"),
                    last_name:getValues("last_name"),
                    phone: getValues("phone"),
                    email: getValues("email"),
                    password: getValues("password1")
                }
          console.log("this are the data",data)
                const res = await axios.post("http://localhost:5000/api/user/auth/register/", data)
                if (res) {
                    console.log(res)
                   history.push("/")
                } 
            } catch (error) {
                console.log(error)
                alert("form submission failed please reset your internet and retry")
            }
        }
        dataSubmit()
        reset()
       
    }
    const { row1, row2, row3} = data
    const render1 = 
        row1.map((i,k) => {
          switch (i.type) {
                case "email": return (
                    <div key={k} className="register_right_first">
                        <label htmlFor={i.label}>{i.label}</label>
                        <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                        {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                        <br />
                    </div>
                )
                case "text":
                    return (
                        <div key={k} className="register_right_first">
                            <label htmlFor={i.label}>{i.label}</label>
                            <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}   {...register(i.name)} required />
                            {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                            <br />
                        </div>
                    )
                   
              case "number": return (
                <div key={k} className="register_right_first">
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
              )
              case "password": return (
                <div key={k}>
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
      )
              case "confirmPassword": return (
                <div key={k}>
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
            )
                    
            
                default: return (
                    <div><span>invalid field</span></div>
                )
          
            }
        })
       
 const render2= 
        row2.map((i,k) => {
          switch (i.type) {
                case "email": return (
                    <div key={k} className="register_right_first">
                        <label htmlFor={i.label}>{i.label}</label>
                        <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                        {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                        <br />
                    </div>
                )
                case "text":
                    return (
                        <div key={k} className="register_right_first">
                            <label htmlFor={i.label}>{i.label}</label>
                            <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}   {...register(i.name)} required />
                            {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                            <br />
                        </div>
                    )
                   
              case "number": return (
                <div key={k} className="register_right_first">
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
              )
              case "password": return (
                <div key={k} className="register_right_first">
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
      )
              case "confirmPassword": return (
                <div key={k}>
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder} className={i.classWord}  {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
            )
                    
            
                default: return (
                    <div><span>invalid field</span></div>
                )
          
            }
        })
const render3 = 
        row3.map((i,k) => {
          switch (i.type) {
                case "email": return (
                    <div key={k} className="register_right_first">
                        <label htmlFor={i.label}>{i.label}</label>
                        <input type={i.text} name={i.name} placeholder={i.placeholder}  {...register(i.name)} required />
                        {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                        <br />
                    </div>
                )
                case "text":
                    return (
                        <div key={k} className="register_right_first">
                            <label htmlFor={i.label}>{i.label}</label>
                            <input type={i.text} name={i.name} placeholder={i.placeholder}  {...register(i.name)} required />
                            {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                            <br />
                             
                        </div>
                    )
                   
              case "number": return (
                <div key={k} className="register_right_last">
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder}   {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
              )
              case "password": return (
                <div key={k} className="register_right_first">
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder}   {...register(i.name)} required />
                    {errors[i.name] && <span>{errors[i.name]["message"]}</span>}
                    <br />
          </div>
      )
              case "confirmPassword": return (
                <div key={k} className="register_right_last">
                    <label htmlFor={i.label}>{i.label}</label>
                    <input type={i.text} name={i.name} placeholder={i.placeholder}   {...register(i.name)} required />
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
            {render1}
                </div>
                <div className="register_right_input_firstChild">
            {render2}
                </div>
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
            Create Account
          </button>
          <p>Allready have an account? <a href="">Log in</a></p>
        </div>
          </div>
      </form>
  </div>
    );
}

export default Reusable;


