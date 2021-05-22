import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardImg,CardBody} from 'reactstrap';
import avatar from '../../assets/img/avatar/img_avatar.png';
import './style.css';

export default function ListCard(props) {
    const { data } = props;
    return (
        <Card body className="card-list">
            <CardBody>
                <CardTitle tag="h5">Actor</CardTitle>
            </CardBody>
            <CardImg top src={avatar} alt="Card image cap" />
            <CardTitle tag="h5" className="mt-3 mb-2">{data.name}</CardTitle>
            <Link to={{
                pathname: '/movies',
                state: { movies: data.movies }
            }}>
                <Button color="primary">Views Movies</Button>
            </Link>
        </Card> 
    )
}
