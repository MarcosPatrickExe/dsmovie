import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';
import './style.css';

type Props = {
    score: number
}

export default function MovieStars( {score}:Props ){

    function getFills(score : number){ // score = média de avaliacoes
        const fills = [0, 0, 0, 0, 0];
        const integerPart = Math.floor(score);//obtendo a parte inteira
       
        for( let i=0; i < integerPart; i++){
            fills[i] = 1;
        }
        if( score - integerPart > 0)
            fills[integerPart] = 0.5;
    
        return fills;
    }


    return (
        <div className="dsmovie-stars-container">

            {
                getFills(score)
                    .map( (valor : number) =>{

                        if(valor === 1)
                            return <StarFull />

                        else if(valor === 0.5)
                            return <StarHalf />

                        else if(valor === 0)
                            return <StarEmpty />
                })
            }
          
        </div>
    );
}