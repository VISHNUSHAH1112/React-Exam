import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData, DeleteData } from "../Slice/productSlice";
import Product from "./Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

function Products() {
    const dispatch = useDispatch();
    const { Shop, status, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(FetchData());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(DeleteData(id));
    };

    if (status === "loading")
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary" />
            </div>
        );

    if (status === "error")
        return (
            <Alert variant="danger" className="text-center mt-4">
                Error: {error}
            </Alert>
        );

    return (
        <Container className="my-4">
            <Row className="g-4">
                {Shop.map((item) => (
                    <Col
                        key={item.id}
                        className="d-flex justify-content-center"
                    >
                        <Card
                            className="shadow-lg border-0 rounded-4"
                            style={{ width: "18rem" }}
                        >
                            <Card.Img
                                variant="top"
                                src={item.image}
                                alt={item.title}
                                style={{
                                    height: "200px",
                                    objectFit: "contain",
                                    padding: "10px",
                                }}
                            />
                            <Card.Body>
                                <Card.Title className="fw-semibold text-truncate">
                                    {item.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {item.category}
                                </Card.Subtitle>
                                <Card.Text>
                                    <span className="fw-bold text-success">₹{item.price}</span>
                                    <br />
                                    Quantity:{" "}
                                    <span className="fw-semibold">{item.quantity}</span>
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="rounded-pill px-3"
                                    >
                                        Buy Now
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        className="rounded-pill px-3"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
