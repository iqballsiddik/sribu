import React, { useState,useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Spinner } from 'reactstrap';
import ListCard from '../../../components/Card';
import './style.css';
import services from '../../../helper/services';

export default function Home() {
    const [listActors, setListActors] = useState();

    useEffect(() => {
        const params = JSON.stringify(
            {
                "query" : "{actors { id name age movies{ id name genre actor{name}}}}" 
            }
        );
        const fetchActors = () => {
            services.getActors(params)
            .then(res => setListActors(res.data))
            .catch(err => { return err})
        }
        fetchActors()
    }, [])
    
    return (
        <div>
            <Container className="mt-2 mb-4">
                {
                    listActors
                ?
                    <Row md={2} sm={1} xs={1} className="d-flex justify-content-center">
                        {
                            listActors.data.actors.map((val) => {
                                return (
                                    <Col className="mt-3" key={val.id}>
                                        <ListCard data={val} />
                                    </Col>                                                                   
                                )
                            })
                        }
                    </Row>
                : 
                    <div className="wrap-loading">
                        <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="primary" />
                    </div>
                }
            </Container>
        </div>
    )
}