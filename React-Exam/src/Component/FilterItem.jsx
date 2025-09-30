import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch, FaSave } from "react-icons/fa";

function FilterItem() {
    return (
        <Container className="my-4 p-4 shadow-sm rounded bg-light border">
            <Row className="align-items-center g-3">
                <Col xs={12} md={2} className="fw-semibold text-muted">
                    Select Inventory
                </Col>

                <Col xs={12} md={3}>
                    <Form.Control
                        type="text"
                        placeholder="Warehouse"
                        className="rounded-pill"
                    />
                </Col>

                <Col xs={12} md={3}>
                    <Form.Label htmlFor="myDate" className="fw-semibold me-2">
                        Warehouse as of:
                    </Form.Label>
                    <Form.Control
                        type="date"
                        id="myDate"
                        className="rounded-pill"
                    />
                </Col>

                <Col xs={12} md={4} className="d-flex gap-2">
                    <Form.Control
                        type="text"
                        placeholder="Expand Additional Filters"
                        className="rounded-pill"
                    />
                    <Button variant="outline-secondary" className="rounded-pill px-3">
                        <FaSearch className="me-2" />
                        Search
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default FilterItem;
