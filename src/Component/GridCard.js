import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const GridCard = () => {
    const Data = [
        {
            image: "../Images/Card/a.jpg",
            title: "This Is A Title One",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
        {
            image: "../Images/Card/b.jpg",
            title: "This Is A Title Two",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
        {
            image: "../Images/Card/c.jpg",
            title: "This Is A Title Three",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
        {
            image: "../Images/Card/d.jpg",
            title: "This Is A Title Four",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
        {
            image: "../Images/Card/e.jpg",
            title: "This Is A Title Five",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
        {
            image: "../Images/Card/f.jpg",
            title: "This Is A Title Six",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
        {
            image: "../Images/Card/g.jpg",
            title: "This Is A Title Seven",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
        {
            image: "../Images/Card/h.jpg",
            title: "This Is A Title Eight",
            disc: "This is a longer card with supporting text below as a to additional content. This content is a little bit longer."
        },
    ];

    return (
        <div>
            <Container>
            <div className='text-[#333] text-4xl text-center my-[30px] font-bold'>Services</div>
                <Row xs={1} md={2} className="g-4 my-2">
                    {
                        Data.map((item, indx) => {
                            return (
                                <Col key={indx} >
                                    <Card>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.disc}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </div>
    )
}

export default GridCard;
