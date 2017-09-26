import React from 'react';

import './../CSS/bootstrap.css'
import './../CSS/App.css'


class Newpage extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
              <a class="navbar-brand" >Start Bootstrap</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" >Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" >About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" >Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" >Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header class="masthead">
            <div class="overlay">
              <div class="container">
                <h1 class="display-1 text-white">One Page Wonder</h1>
                <h2 class="display-4 text-white">Will Rock Your Socks Off</h2>
              </div>
            </div>
          </header>

          <section>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 order-2">
                  <div class="p-5">
                    <img class="img-fluid rounded-circle" src="https://unsplash.it/500/500?image=836" alt=""/>
                  </div>
                </div>
                <div class="col-md-6 order-1">
                  <div class="p-5">
                    <h2 class="display-4">For those about to rock...</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="p-5">
                    <img class="img-fluid rounded-circle" src="https://unsplash.it/500/500?image=452" alt=""/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="p-5">
                    <h2 class="display-4">We salute you!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-6 order-2">
                  <div class="p-5">
                    <img class="img-fluid rounded-circle" src="https://unsplash.it/500/500?image=453" alt=""/>
                  </div>
                </div>
                <div class="col-md-6 order-1">
                  <div class="p-5">
                    <h2 class="display-4">Let there be rock!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Footer --> */}
          <footer class="py-5 bg-dark">
            <div class="container">
              <p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
            </div>
            {/* <!-- /.container --> */}
          </footer>
        </div>
    )
  }
}

export default Newpage;
