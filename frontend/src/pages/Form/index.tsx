import { useParams } from 'react-router-dom';
import FormCard from 'components/FormCard/index';

export default function Form(){

    const params = useParams(); //params.movieID para pegar o parmetro do ID do filme

   // console.log(JSON.stringify(params, null, 4));

    return (
        <>
          <FormCard movieId= { String(params.movieId)} />
                    {/*  /*Convertendo 'movieId para String'  */}
        </>
    );
}