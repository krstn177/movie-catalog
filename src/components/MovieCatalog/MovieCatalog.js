import Row from 'react-bootstrap/Row';
import './MovieCatalog.css';
import { CatalogCard } from './CatalogCard/CatalogCard'; 

export const MovieCatalog = ({
    movies
}) => {
    return (
        <div className="Rows bg-dark">
            <Row style={{justifyContent: 'center', width: "60vw"}} xs={1} md={2} className="g-4 ">
                {movies.map(x => <CatalogCard key={x._id} {...x} />)}
            </Row>
        </div>
      );
}