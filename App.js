import './App.css';
//props in functional component:

// import React,{useState} from 'react';
// /* import Increament from './Increament'; */
// import Usercard from './Usercard';
// function App() {
   
//   /* let [data,setData]=useState("anshi")
//   const updatedata=()=>{
//     setData("anshi ahlawat");
//      alert(data)
//   }; */
//   const[name,setName]=useState("anshi");

//   // const userData=[
//   //   {name:'abs',age:20,email:'anybody@gmail.com'},
//   //   {name:'abc',age:21,email:'nobody@gmail.com'},
//   // ]
//   return (
//     <>
//       <div className='app'>
//        {/*  <h1>
//           {data}
//         </h1>
//         <button onClick={updatedata}>updateValue</button */



//         // <h1>hello</h1>
//         }
//         <Usercard name={name}/>
//         <button onClick={()=> setName('anshi ahlawat')}>update props</button>





//         {/* {userData.map((user,index)=>(
//         <Usercard
//         key={index}
//         name={user.name}
//         age={user.age}
//         email={user.email}
//         />
//         ))} */}

//       </div>
//       {/* <Increament /> */}
      
      
      
          
        
      

      

//     </>
//   );
// }

// export default App;







//props in class commponenet:

// import React, { Component } from 'react'
// import Propsclass from './Propsclass';

// class App extends Component {
//   constructor(){
//     super();
//     this.state=
//       {name:"anshi",
//         email:"anshiahlawta@!"
//       }
//   }
//   render() {
//     return (
//       <div className='App'>
//         <h1>props in class component
//           </h1>
//           <Propsclass name={this.state.name} email={this.state.email}/> 
//           <button onClick={()=>this.setState({name:"anshi ahlawat"})

//           }>update props</button>
//         </div>
//     )
//   }
// }
// export default App


//get input box value:
 

// export default function App() {

//     const [inputValue,setInputValue]=useState("");
//     const [inputValueShow,setInputValueHide]=useState(false);
//     const handleChange=(event)=>{
//         console.log(event.target.value);
//         setInputValue(event.target.value);
//         setInputValueHide(false);
//     }
//   return (
//     <div>
//         {/* <h1>{inputValue
//             }</h1> */}
//             <h1>{inputValueShow ? inputValue : '' }</h1>
//         <input type="text" onChange={handleChange}/>
//         <button onClick={()=>setInputValueHide(true)}>submit</button>
//     </div>
//   )
// }



//hide show and toggle

// import './App.css';
// import React,{useState} from 'react'

// function App() {
//     const [status,setStatus]=useState(true);
//   return (
//     <>
//     <div className="h1"><h1>Show, Hide and Toggle</h1></div>
//     {status ? <div className="status">Hi, I am Back</div> :null}
    
 
//     <button onClick={()=>setStatus(false)}>hide</button>    
//     <button onClick={()=>setStatus(true)}>show</button>
//     <button onClick={()=>setStatus(!status)}>jaadu</button>
    
//     </>
//   )
// }

// export default App



//form handling


// import React,{useState} from 'react'

// function App() {
//     const [formData ,setFormData]=useState({
//         username:'',
//         email:'',
//         password:'',
//         isSubscribed:'',
//         role:''
//     })

//     const handleChange=(event)=>{
//         const {name,value,type,checked}=event.target;
//         const fieldValue=type==='checkbox'? checked:value;

//         setFormData({
//             ...formData,
//             [name]:fieldValue
//         })
//         }
//         const handleSubmit=(event)=>{
//             event.preventDefault();
//             console.log('formData',formData)
//         }
//   return (
//     <>
//         <h1>Form</h1>
//         <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="username">username:</label>
//             <input type="text"
//             id='username'
//             name='username'
//             value={formData.username}
//             onChange={handleChange}
//             />
//         </div>

//         <div>
//             <label htmlFor="email">email:</label>
//             <input type="email"
//             id='email'
//             name='email'
//             value={formData.email}
//             onChange={handleChange}
//             />
//         </div>

//         <div>
//             <label htmlFor="password">password:</label>
//             <input type="password"
//             id='password'
//             name='password'
//             value={formData.password}
//             onChange={handleChange}
//             />
//         </div>

//         <div>
//             <label htmlFor="isSubscribed">subscribe:</label>
//             <input type="checkbox"
//             id='subscribe'
//             name='subscribe'
//             value={formData.isSubscribed}
//             onChange={handleChange}
//             />
//         </div>

//         <div>
//             <label htmlFor="role">role:</label>
//             <select
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}>
//                 <option value="">Select Role</option>
//                 <option value="admin">admin</option>
//                 <option value="user">user</option>
//                 <option value="guest">guest</option>


//             </select>
//             <button>submit</button>
//         </div>


//     </form>
//     </>
//   )
// }

// export default App

//conditional rendering

// import React from 'react';


// export default function App() {
//     const isLoggedIn=true;



//     const items=["Apple","Banana","Orange"];

//     const isAuthenticated=true;
//   return (
//     <>
//         {isLoggedIn ?   <h2>Welcome Guest</h2>:<h1>conditional rendering method</h1>}



//         <div>{items.length>0?(
//             <ul>
//                 {items.map((item,index)=>(
//                     <li key={index}>{item}</li>
//                 ))
                
//                 }
//             </ul>
//         ):(
//             <p>no item to display</p>
//         )}

//         </div>
//         <div>
//             {isAuthenticated && (
//                 <button onClick={()=>console.log("logged out")}>log out</button>
//             )}
//         </div>




        
      
    
//     </>
//   )
// }


//form validation

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
