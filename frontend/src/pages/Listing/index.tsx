import Pagination from "components/Pagination";
import axios from "axios";
import {useState, useEffect} from 'react';
//import {BASE_URL} from "utils/requests";
import React from "react";
import MovieCard from "components/MovieCard/index";
import "../../components/FormCard/style.css";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


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

    const [page, setPages] = useState <MoviePage>({ // Parametrizando com o generics "<MoviePage>"
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 0,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(()=>{
        const aux = {
            backend_domain : `${BASE_URL}`,
            config : {
                headers: {'Access-Control-Allow-Origin':'*'}
            }
        }

      //axios.get( `${BASE_URL}/movies?size=12&page=0`)
        axios.get( `${aux.backend_domain}/movies?size=12&page=${pageNumber}`, aux.config) //page=0&sort=id OU &sort=title
            .then( (response : any) =>{
                    const data = response.data as MoviePage;// Associando os dados recebidos ao objeto "MoviePage"
                    setPageNumber(data.number);
                    setPages( data );// Passando uma lista do tipo "<MoviePage>", para a funcao "setPages<MoviePage>()"

                }).catch( (error: any)=>{
                     alert("Erro ao tentar acessar o servidor backend....");
                });
    }, [pageNumber]);

  
    const handlePageChange = ( newPageNumber : number)=>{

     //   if ( ((newPageNumber-1) !== -1) && 
       //         ((newPageNumber-1) < page.size))
                    setPageNumber( newPageNumber);
    }


    return (
        <React.Fragment>
              <Pagination page={page} onChange={handlePageChange}  />

              <h1 className="mb-3 mt-3" style={{fontSize: '42px', marginLeft: '7%', color: 'white'}}>
                  Filmes em alta:
              </h1>

              <div className="container">
                    <div className="row">

                        {  /*================= LISTANDO O "MOVIE CARD" ====================*/
                            page.content.map( ( movie)=>{
                                return (
                                        <div key={movie.id} className="col-sm-6  col-lg-4 col-xl-3  mb-4">
                                                <MovieCard movie={ movie } />
                                            {/* Criando propriedade com 
                                                o nome de "movie" que tem 
                                                como valor o objeto "movie"
                                            */}
                                        </div>
                                )
                            })
                        }
                       
                    </div>
              </div>
                 
               
        </React.Fragment>
    );
}