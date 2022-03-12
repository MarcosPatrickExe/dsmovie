import Pagination from "components/Pagination";
//import MovieStars from 'components/MovieStars/index';
import React from "react";
import MovieCard from "components/MovieCard/index";
import "../Form/style.css";

export default function Listing(){
    
    return (
        <React.Fragment>
              <Pagination />
              <h1>Página de listagem</h1>

              <div className="container">
                  <div className="row">
                        <div className="col-sm-6  col-lg-4 col-xl-3  mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6  col-lg-4 col-xl-3  mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6  col-lg-4 col-xl-3  mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6  col-lg-4 col-xl-3  mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6  col-lg-4 col-xl-3  mb-3">
                            <MovieCard />
                        </div>
                       
                    </div>
              </div>
                 
               
        </React.Fragment>
    );
}