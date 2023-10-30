
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

     
     const { signIn } = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate()

     const handleLogin = event => {
          event.preventDefault();

          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log( email, password);


          signIn(email, password)
               .then(result => {
                    const user = result.user
                    console.log(user);
                    navigate(location?.state ? location.state : '/')
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
                              <form onSubmit={handleLogin} className="card-body">
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
                                        <button className="btn text-white font-bold bg-[#FF3811]">Login</button>
                                   </div>
                              </form>
                              <p className='text-center pb-8 '>New to Car Doctors <Link to='/signup' className='text-[#FF3811] font-bold'>Sign Up</Link></p>
                         </div>
                    </div>
               </div>
          );
     };

     export default Login;