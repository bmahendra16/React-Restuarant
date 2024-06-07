import React from 'react'
import Contactinfo from '../Component/Contactinfo';
import { Form } from 'react-router-dom';
import Person1 from '../assets/image/person1.jpg';
import Person2 from '../assets/image/person2.jpg';
import Person3 from '../assets/image/person3.jpg';
import Person4 from '../assets/image/person4.jpg';

function Contact_us() {
  return (
    <div className='contact-page'>
    <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>Contact</h1>
        </div>
    </header>

    <div className='container my-5'>
        <div className='row'>
            <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <Contactinfo />
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
            <form>
            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' id='first-name' className='form-control my-2' />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' id='last-name' className='form-control my-2' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label htmlFor='email-address'>Email Address</label>
                    <input type='email' id='email-address' className='form-control my-2' />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input type='tel' id='phone-number' className='form-control my-2' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label htmlFor='date'>Date</label>
                    <input type='date' id='date' className='form-control my-2' />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='guests-number'>Number Of Guests</label>
                    <input type='number' id='guests-number' className='form-control my-2' />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor='comments'>Comments</label>
                <textarea id='comments' className='form-control my-2' rows='3'></textarea>
            </div>
            <button type='submit' className='btn btn-success btn-lg'>Submit</button>
        </form>
            </div>
        </div>
    </div>

    <div className="reviews-section py-4 bg-dark">
        <div className="container">
    <h2 className="text-center mb-5 text-uppercase fw-bold fs-1 text-light">Reviews</h2>
    <div className="row g-4">
        <div className="col-lg-6">
            <div className="h-100 shadow bg-light">
                <div>
                    <div className="p-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                        </p>
                    </div>
                </div>
                <footer className="d-flex align-items-center py-2 bg-secondary-subtle">
                    <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                    <p className="text-success">John Mike</p>
                </footer>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="h-100 shadow bg-light">
                <div>
                    <div className="p-4">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
                        </p>
                    </div>
                </div>
                <footer className="d-flex align-items-center py-2 bg-secondary-subtle mt-4">
                    <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                    <p className="text-success">Maria Cruz</p>
                </footer>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="h-100 shadow bg-light">
                <div>
                    <div className="p-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
                        </p>
                    </div>
                </div>
                <footer className="d-flex align-items-center py-2 bg-secondary-subtle">
                    <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                    <p className="text-success">Anna Gold</p>
                </footer>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="h-100 shadow bg-light">
                <div>
                    <div className="p-4">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
                        </p>
                    </div>
                </div>
                <footer className="d-flex align-items-center py-2 bg-secondary-subtle">
                    <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                    <p className="text-success">Nick Burn</p>
                </footer>
            </div>
        </div>
        
    </div>
    </div>
</div>
</div>
  )
}

export default Contact_us
