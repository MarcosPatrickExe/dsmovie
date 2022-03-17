import { ReactComponent as Arrow } from 'assets/img/arrow-icon.svg';
import { MoviePage } from 'types/movie';
import './style.css';

type Props = {
    page: MoviePage;
    onChange: Function;
}

export default function Pagination( {page, onChange}:Props ){
   
    return(

       <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">

                {/*========== O BOTAO DA ESQUERDA ============ */}
                                                     {/* O botao esquerdo estará desabilitado se a pagina atual for a 1ª */}
                <button className="dsmovie-pagination-button" 
                                disabled={page.first}
                                        onClick={ ()=>{
                                                onChange(page.number -1);
                                        } }>
                    <Arrow />
                </button>


                <p style={{color: 'white'}}>
                    {`${page.number+1} de ${page.totalPages}`}
                </p>
                

                {/*========== O BOTAO DA DIREITA ============ */}
                <button className="dsmovie-pagination-button" 
                            disabled={page.last}
                                onClick={ ()=>{
                                    onChange(page.number +1);
                            } }>
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>

            </div>
       </div>
    );
}