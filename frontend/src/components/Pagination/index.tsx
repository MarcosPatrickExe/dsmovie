import { ReactComponent as Arrow } from 'assets/img/arrow-icon.svg';
import './style.css';


export default function Pagination(){
   
    return(

       <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>

                <p style={{color: 'white'}}>
                    {`${1} de ${3}`}
                </p>
                
                <button className="dsmovie-pagination-button" disabled={false} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
       </div>
    );
}