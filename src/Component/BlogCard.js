import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const BlogCard = () => {

    const BlogData = [
        {
            image: "../Images/Blog/blog1.jpg",
            title: "This Some dummy title blog one",
            dec: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "../Images/Blog/blog2.jpg",
            title: "This Some dummy title blog two",
            dec: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "../Images/Blog/blog3.jpg",
            title: "This Some dummy title blog three",
            dec: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "../Images/Blog/blog4.jpg",
            title: "This Some dummy title blog four",
            dec: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "../Images/Blog/blog5.jpg",
            title: "This Some dummy title blog five",
            dec: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            image: "../Images/Blog/blog6.jpg",
            title: "This Some dummy title blog six",
            dec: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]
    return (
        <div>
            <Container>
                <div className='text-[#333] text-4xl text-center my-[30px] font-bold'>Blogs</div>
                <Row xs={2} md={3} className="g-5 my-2 justify-center md:justify-start">
                    {
                        BlogData.map((item, index) => {
                            return (
                                <Col key={index} style={{ width: '18rem' }}>
                                    <Card>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.dec}</Card.Text>
                                            <Button variant="primary">Red more</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div >
    )
}

export default BlogCard;
