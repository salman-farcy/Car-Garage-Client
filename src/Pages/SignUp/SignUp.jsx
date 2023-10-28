
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';



const SignUp = () => {
     const {createUser} = useContext(AuthContext)

     const handleSignUp = event => {
          event.preventDefault();

          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, email, password);
          

          createUser(email, password)
          .then(result => {
               const user = result.user
               console.log(user);
          })
          .catch(error => {
               console.error(error);
          })
     }


     return (
          <div className="hero min-h-screen ">
               <div className="hero-content flex-col gap-20 lg:flex-row">
                    <div className="w-full text-center lg:text-left">
                         <img className='w-full' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <form onSubmit={handleSignUp} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn text-white font-bold bg-[#FF3811]">Sign Up</button>
                              </div>
                         </form>
                         <p className='text-center pb-8 '>Already Have an Account? <Link to='/login' className='text-[#FF3811] font-bold'>Login</Link></p>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;