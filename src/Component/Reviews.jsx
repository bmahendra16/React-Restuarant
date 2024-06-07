import React from 'react'
import Person1 from '../assets/image/person1.jpg';
import Person2 from '../assets/image/person2.jpg';
import Person3 from '../assets/image/person3.jpg';
import Person4 from '../assets/image/person4.jpg';

function Reviews() {
  return (
    <div className="reviews-section container py-4">
    <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
    <div className="row g-4">
        <div className="col-lg-6 review-box">
            <div className="h-100 shadow">
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
            <div className="h-100 shadow">
                <div>
                    <div className="p-4">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
                        </p>
                    </div>
                </div>
                <footer className="d-flex align-items-center mt-4 py-2 bg-secondary-subtle">
                    <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                    <p className="text-success">Maria Cruz</p>
                </footer>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="h-100 shadow">
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
            <div className="h-100 shadow">
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
  )
}

export default Reviews
