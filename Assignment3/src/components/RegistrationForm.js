import React, { useState } from 'react';
function RegistrationForm(props) {
    return (
        <div class="container h-100">
        <div class="row h-100 justify-content-center">

        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
               

                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
             
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    LOGIN
                    
                </button>
            </form>
                </div>
            </div>
            </div>
    )
}

export default RegistrationForm;