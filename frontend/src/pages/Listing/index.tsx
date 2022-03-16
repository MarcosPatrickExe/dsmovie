import Pagination from "components/Pagination";
import axios from "axios";
//import {BASE_URL} from "utils/requests";
import React from "react";
import MovieCard from "components/MovieCard/index";
import "../Form/style.css";

export default function Listing(){

    const backend_domain = "https://patrick-dsmovie-backend.herokuapp.com";

    var config = {
        headers: {'Access-Control-Allow-Origin':'*'}
    }

  //  axios.get( `${BASE_URL}/movies?size=12&page=0`)
    axios.get( `${backend_domain}/movies?size=12&page=0`, config)

        .then( (response : any) =>{

            console.log(typeof(response));
            console.log(response.data);

        }).catch( (error: any)=>{
            alert("Erro ao tentar acessar o servidor backend....");
        });


    return (
        <React.Fragment>
              <Pagination />
              <h1 className="mb-3 mt-3" style={{fontSize: '42px', marginLeft: '7%', color: 'white'}}>
                  Filmes em alta
              </h1>

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