import './App.css';
import React,{useState} from 'react';


export default function App() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setErrors]=useState({})
    const [submittedData,setSubmittedData]=useState(null)
    
    
    const validateForm=()=>{
        let isValid=true;
        const newErrors={};

        if (!name.trim()){
            newErrors.name="name is required";
            isValid=false;
        }
        if (!email.trim()){
            newErrors.email="email is required";
            isValid=false;
        }else if(!/\S+@\S+/.test(email)){
            newErrors.email="email is invalid";
            isValid=false;
        }


        if(!password.trim()){
            newErrors.password="password is required";
            isValid=false;
        }else if(password.length <6){
            newErrors.password="Password must contain minimum 6 characters"
            isValid=false;
        }


        setErrors(newErrors);

        return isValid;
    }

    const handleSubmit=(event)=>
    {
        event.preventDefault();

        if(validateForm()){
            const submittedData={
                name,
                email,
                password
            };
            setSubmittedData(submittedData);
            console.log("Form Submitted:",submittedData);

        }
    }


  return (
    <>
    <div className="App">
        <h1>Form Validation</h1>
    </div>
    <form className='container' onSubmit={handleSubmit}>
        <div>
            <label>Full Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            {errors.name && <span className='error'>{errors.name}</span>}
        </div>


        <div>
            <label>Email add:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {errors.email && <span className='error'>{errors.email}</span>}
        </div>


        <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {errors.password && <span className='error'>{errors.password}</span>}
        </div>


        <button className='button' type='submit'>Submit</button>
    </form>
    {submittedData && (
        <div>
            <h2>Submitted Data:</h2>
            <p>Name:{submittedData.name}</p>
            <p>Name:{submittedData.email}</p>
            <p>Name:{submittedData.password}</p>
        </div>
    )

    }
    </>
  )
}
