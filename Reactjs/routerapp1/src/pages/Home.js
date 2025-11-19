import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import c1 from './images/c1.jpeg';
import c2 from './images/c2.jpeg';
import b1 from './images/b1.jpeg';
import b2 from './images/b2.jpeg';
import b3 from './images/b3.jpeg';
import b4 from './images/b4.jpeg';


const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">This is Home</h1>

      {/* Bootstrap Carousel */}
      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="First Slide" />
          </div>
          <div className="carousel-item">
            <img src={c1} className="d-block w-100" alt="Second Slide" />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="Third Slide" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
         
       <center><h4>BankOffers</h4></center>
      {/* Four Cards in One Row */}
      <div className="row text-center">
        {[b1, b2, b3, b4].map((img, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card" style={{ width: "100%" }}>
              <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
              <div className="card-body">
                <h5 className="card-title">Card {index + 1}</h5>
                <p className="card-text">Sample content for card {index + 1}.</p>
                <a href="#" className="btn btn-primary">ViewDetails</a>
              </div>
            </div>
          </div>
        ))}
          {[b1, b2, b3, b4].map((img, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card" style={{ width: "100%" }}>
              <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
              <div className="card-body">
                <h5 className="card-title">Card {index + 1}</h5>
                <p className="card-text">Sample content for card {index + 1}.</p>
                <a href="#" className="btn btn-primary">ViewDetails</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Home;