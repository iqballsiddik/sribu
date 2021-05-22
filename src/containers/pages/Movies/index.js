import React from 'react';
import { Container, Row, Col, Card,CardTitle,Button } from 'reactstrap';
import './style.css';
import { Link, useHistory } from "react-router-dom";

export default function Movies(props) {
    let history = useHistory();
    const data = props.location.state;
    let renderCard;
    if (data) {
        renderCard = data.movies.map(val => {
            return(
                <Col className="mt-2" key={val.id} >
                    <Card body className="card-movies">
                        <CardTitle tag="h5">Name Movies : {val.name}</CardTitle>
                        <p>Genre : {val.genre}</p>
                        <p>Actor : {val.actor.name}</p>
                        <Link to='/'>
                            <Button outline color="primary">Back Home</Button>
                        </Link>
                    </Card>
                </Col>
            )
        })
    } else {
        history.push('/');
    }

    return (
        <Container>
            <div className="mt-4 mb-4">
                <Row md={2}>
                    {
                        renderCard
                    }
                </Row>
            </div>
        </Container>
    )
}