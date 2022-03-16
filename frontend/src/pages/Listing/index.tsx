import Pagination from "components/Pagination";
import axios from "axios";
import {useState, useEffect} from 'react';
//import {BASE_URL} from "utils/requests";
import React from "react";
import MovieCard from "components/MovieCard/index";
import "../Form/style.css";
import { MoviePage } from "types/movie";

export default function Listing(){

   // ================ FORMA ERRADA: ===========================
   /* const backend_domain = "https://patrick-dsmovie-backend.herokuapp.com";

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

        // SIMPLESMENTE ESCREVER A LOGICA DE NEGOCIO DENTRO DA FUNCAO
        FAZ COM QUE O CODIGO (NO CASO ACIMA) SEJA EXECUTAO MAIS DE UMA
        VEZ POR NAO ESTAR LIGADO AO CICLO DE VIDA DO COMPONENTE REACT!!!
        PARA ASSOCIAR ESSA LÓGICA AO CICLO DE VIDA DEVE-SE UTILIZA OS HOOKS,
        FUNÇÕES QUE EXECUTAM TAREFAS SEGUINDO O CICLO DE VIDA DO COMPONENTE
    */

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(()=>{
        const aux = {
            backend_domain : "https://patrick-dsmovie-backend.herokuapp.com",
            config : {
                headers: {'Access-Control-Allow-Origin':'*'}
            }    
        }

      //axios.get( `${BASE_URL}/movies?size=12&page=0`)
        axios.get( `${aux.backend_domain}/movies?size=12&page=0`, aux.config)
            .then( (response : any) =>{
                    console.log(typeof(response));
                    console.log(response.data);

                    const data = response.data as MoviePage;// Associando os dados recebidos ao objeto "MoviePage"
                    setPageNumber(data.number);
                    alert("numero de filmes: "+data.size);

                }).catch( (error: any)=>{
                     alert("Erro ao tentar acessar o servidor backend....");
                });

    }, []);

    return (
        <React.Fragment>
              <Pagination />

              <h1 className="mb-3 mt-3" style={{fontSize: '42px', marginLeft: '7%', color: 'white'}}>
                  Filmes em alta:  (Pagina {pageNumber})
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