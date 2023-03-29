import Row from 'react-bootstrap/Row';
import { useMovieContext } from '../../contexts/MovieContext';
import './MovieCatalog.css';
import { CatalogCard } from '../CatalogCard/CatalogCard'; 

export const MovieCatalog = () => {

    const { movies } = useMovieContext();

    return (
        <div className="Rows bg-dark" style={{minHeight: "86vh"}}>
            {
                movies.length === 0 && <h1 className="text-white" style={{textAlign: "center"}}>There are no movies yet...</h1>
            }
            { movies.length !== 0 &&
                <Row style={{justifyContent: 'center', width: "60vw"}} xs={1} md={2} className="g-4 ">
                    {movies.map(x => <CatalogCard key={x._id} {...x} />)}
                </Row>
            }
        </div>
      );
}