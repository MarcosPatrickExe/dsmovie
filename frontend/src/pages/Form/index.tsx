import { useParams } from 'react-router-dom';
import FormCard from 'components/FormCard/index';

export default function Form( ){

    const params = useParams(); //params.movieID para pegar o parmetro do ID do filme

    return (
        <>
          <FormCard movieId= { `${params.movieId}` /*Convertendo 'movieId para String' */ } />
        </>
    );
}