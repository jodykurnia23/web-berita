import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const Content = () => {
    const [berita, setBerita] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=e10ef662f34d416eb904dde5c92902c3';

    useEffect(() => {
        newsCategories();
    }, []);

    const newsCategories = async () => {
        try{
            const { data } = await axios.get(url)

            setBerita(data.articles);
        } catch (eror) {
            console.log(eror, '<== Eror terjadi di News Categories')
        }
    }

    const NewsList = () => {
        return berita.map((news, i) => {
            return(
                    <Col sm={4} key={i}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={news.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>{news.description}</Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
            )
        })
    }

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
      }

      useEffect(() => {
        const fetchFilteredArticles = async () => {
          const result = await axios(
            `https://newsapi.org/v2/top-headlines?q=${searchQuery}&apiKey=e10ef662f34d416eb904dde5c92902c3&language=id`
          );
          setBerita(result.data.articles);
        };
    
        fetchFilteredArticles();
      }, [searchQuery]);

    return ( 
        <Container>
            <Form className="d-flex mb-5">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 input-keyword"
                    aria-label="Search" 
                    value={searchQuery} 
                    onChange={handleInputChange} 
                    />
                    <Button variant="outline-primary search_button">Search</Button>
            </Form>
            <Row>
              <NewsList />
            </Row>
        </Container>
     );
}
 
export default Content;