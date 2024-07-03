import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSIgnup";

const SignUp=()=>{
    
    const [inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    });

    const {loading,signup}=useSignup();

    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs, gender});
    };

    const handleSubmit= async (event)=>{
        event.preventDefault();
        await signup(inputs);
    };

    return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp to
                <span className='text-blue-400'> BanterBox</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base font-semibold text-gray-200 label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder="John Doe" className='w-full input input-bordered h-10'
                    value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName:e.target.value})} />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base font-semibold text-gray-200 label-text'>Username</span>
                    </label>
                    <input type="text" placeholder="johndoe" className='w-full input input-bordered h-10'
                    value={inputs.username} onChange={(e)=>setInputs({...inputs, username:e.target.value})} />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base font-semibold text-gray-200 label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className='w-full input input-bordered h-10'
                    value={inputs.password} onChange={(e)=>setInputs({...inputs, password:e.target.value})} />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base font-semibold text-gray-200 label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className='w-full input input-bordered h-10'
                    value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})} />
                </div>

                <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />


                <Link to="/login" className='text-sm font-bold hover:underline hover:text-blue-300 mt-2 inline-block'>
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border-slate-700' disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span>: "Sign Up"}
                    </button>
                </div>
            </form>

        </div>
        
    </div>
};

export default SignUp;



// STARTER CODE FOR SIGNUP
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp=()=>{
//     return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//         backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
//                 <span className='text-blue-400'> ChatApp</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base font-semibold text-gray-200 label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder="John Doe" className='w-full input input-bordered h-10' />
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base font-semibold text-gray-200 label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder="johndoe" className='w-full input input-bordered h-10' />
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base font-semibold text-gray-200 label-text'>Password</span>
//                     </label>
//                     <input type="password" placeholder="Enter password" className='w-full input input-bordered h-10' />
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base font-semibold text-gray-200 label-text'>Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder="Confirm Password" className='w-full input input-bordered h-10' />
//                 </div>

//                 <GenderCheckBox />


//                 <a href="#" className='text-sm font-bold hover:underline hover:text-blue-300 mt-2 inline-block'>
//                     Already have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//                 </div>
//             </form>

//         </div>
        
//     </div>
// };

// export default SignUp;