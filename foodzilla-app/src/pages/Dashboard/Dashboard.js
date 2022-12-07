import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Dashboard.css';

function Dashboard() {
    const [feed, setFeed] = useState([]);
    const [click, setClick] = useState(false);
    
    useEffect(() => {
        if (click === true) {
            const listdata = document.getElementById("ft").value;
            const address = document.getElementById("location").value
            const location = "http://maps.google.com/maps?q=" + encodeURIComponent(address);
            const contact = document.getElementById("ph").value;
            const list = feed;
            list.push({info: listdata, loc: location, address: address, contact: contact});
            setFeed(list);
            setClick(false);
            document.getElementById("ft").value='';
            document.getElementById("location").value='';
            document.getElementById("ph").value='';
        }
    }, [click])

    return (
        <>
            <div class="container">
                <Container>
                    <Col md="3">
                        <h3></h3>
                        <Card className='title'>
                            <Card.Body>
                                <Card.Text>
                                    <br /><br /><br /><br /><br /><br />
                                    <h2>Have Leftovers?</h2>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="11">
                        <h3></h3>
                        <Card>
                            <Card.Body>
                                <Card.Title>Check the feed!</Card.Title>
                                <Card.Text>
                                    <div className='feed'>
                                        {feed !== null ? feed.map((f) => {
                                            return(
                                            <Alert className='feedtext'>
                                                {f.info + ' @ '}
                                                <a href={f.loc} target="_blank">{f.address}</a><br/>{" Please contact on "}
                                                <a href={"https://wa.me/" + f.contact}>{"Whatsapp"}</a>
                                            </Alert>
                                            )
                                        }) : null}
                                    </div>
                                    <div className='send'>
                                        <input type="text" placeholder='Enter message' id='ft' />
                                        <input type="text" placeholder='Enter location' id='location' />
                                        <input type="text" placeholder='Enter Contact number' id='ph' />
                                        <Button variant="secondary" className='sendbtn' onClick={() => {setClick(true)}}>Send</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default Dashboard