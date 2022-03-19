import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';
import { Movie } from "types/movie";
import validateEmail from 'utils/validate';
import './style.css';
import { BASE_URL } from "utils/requests";


type Props = {
     movieId : string
}

//let moveIdGlobal :string;


export default function FormCard( { movieId }: Props ){
     
    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();  
    const [update, setUpdate] = useState(false);
    const [salvo, salvar] = useState('salvo-sucesso');

    useEffect( ()=>{
        const aux = {
            backend_domain : `${BASE_URL}`,
            config : {
                headers: {'Access-Control-Allow-Origin':'*'}
            }
        }

        axios.get( `${aux.backend_domain}/movies/${movieId}`, aux.config) // RETORNA UMA PROMISE
            .then( (response : any )=>{
                const filme = response.data as Movie;
                setMovie(filme);

            }).catch( (error: any)=>{
                alert(`Erro ao tentar se conectar com o backend!!!!! ${movieId}`);
            })

       // alert(`${aux.backend_domain}/movies/${movieId}`);

    } ,[movieId]);
    /* o "movieId" é uma dependencia do useEffect, 
        o que indica que a requisicao so vai ser efeita (ou refeita)
         quando o valor dessa variavel for alterada */

  
    return(

        <div className="dsmovie-form-container">
                                                   {/* É o mesmo que "movie==true ? movie.image : null" */}
          <img className="dsmovie-movie-card-image" src={ movie?.image } alt={ `${movie?.title}`}/>
          <div className="dsmovie-card-bottom-container">
               <h3>{ movie?.title }</h3>


               <form className="dsmovie-form" onSubmit={ formularioEnviado }>
                         <div className="form-group dsmovie-form-group">
                              <label htmlFor="email">Informe seu email</label>
                              <input type="email" className="form-control" id="email" />
                              <h5 className="mt-2" style={{color: 'red', fontSize: 14, display: (update===false)? "none": "block" }}>
                                   Formato de email incorreto....
                              </h5>
                         </div>

                         <div className="form-group dsmovie-form-group">
                              <label htmlFor="score">Informe sua avaliação</label>
                              <select className="form-control" id="score" onClick={ ()=>{ setUpdate(false);} }>
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                                   <option>5</option>
                              </select>
                         </div>

                         <div className="dsmovie-form-btn-container">
                              <button type="submit" className={`btn btn-primary dsmovie-btn  ${salvo==="aparecer"?'ocultar':''}`}>Salvar</button>
                         </div>
               </form >


               <Link to="/">
                    <button className={`btn btn-primary dsmovie-btn mt-3  ${salvo==="aparecer"?'ocultar':''}`}>Cancelar</button>
               </Link>

               <div className={`${salvo}`}>{/*{ salvo===false?'salvo-sucesso':'aparecer'} */}
                    <h4>Salvo!</h4>     
               </div>
         
          </div>
        </div >
    );

     //=========================== FUNCAO DE ENVIAR FORMULARIO ================================

     function formularioEnviado ( event : React.FormEvent<HTMLFormElement>) {
          event.preventDefault();// IMPEDE O ENVIO DO FORMULARIO E A RELOAD DA PAGINA

          const email = (event.target as any).email.value; 
          // "event.target" aponta para o objeto do "form"

          const score = (event.target as any).score.value;
          
          if( !validateEmail(email) ){ // SE EMAIL INCORRETO....
               setUpdate(true);
               return;
          }else{
               setUpdate(false); // TIRANDO A MENSAGEM DE ERRO DO EMAIL
               salvar('aparecer'); // FAZ A DIV "SALVO" APARECER
          }
             

          const config : AxiosRequestConfig = {
               baseURL: `${BASE_URL}`,
               method: 'PUT',
               url: '/scores',// TRECHO QUE SERA ADICIONADO NA BASE URL...
               data: {
                    email,
                    movieId,
                    score
               }
          }

     
     //========= FAZENDO UMA REQUISICAO PARA CADASTRAR OS DADOS ( MÉTODO 1) ===============
       /*
          const cadastrarAvalicao = async ()=>{

               try{
                    let dados = await axios(config);
                    console.log("status dos Server: "+dados.status );
                    console.log(JSON.stringify(dados.data, undefined, 4));

                   // setTimeout(()=> console.log("..."), 20000)
                    
                    navigate('/');// RETORNANDO PARA A PAGINA INICIAL DE LISTAGEM DE FILMES

               }catch(error : any){
                    alert("Houve um erro ao tentar acessar o servidor...   \n"+ error);
               }
          }

          console.log( cadastrarAvalicao() );
       */

          //========= FAZENDO UMA REQUISICAO PARA CADASTRAR OS DADOS ( MÉTODO 2) ===============
               
          axios(config)
               .then( (response)=>{
                    console.log("Cadastrado com sucesso!!!!!");
                    console.log(JSON.stringify(response.data, undefined, 4));
                   
                    setTimeout(()=> {
                           navigate('/');}, 
                    1500)
                    // RETORNANDO PARA A PAGINA INICIAL DE LISTAGEM DE FILMES

               }).catch( (error)=>{
                    alert("Houve um erro ao tentar acessar o servidor...   \n"+ error);
               })
               
         
          //console.log("promessa: "+promessa);

         
     }

}



