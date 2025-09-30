import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

function CustomNavbar() {
    return (
        <Navbar
            bg="light"
            expand="lg"
            className="shadow-sm border-bottom sticky-top"
        >
            <Container fluid>
                <Navbar.Brand href="#" className="fw-bold fs-3 text-primary">
                    Inventory
                </Navbar.Brand>

                <Nav className="ms-auto d-flex align-items-center gap-4">
                    <Nav.Link className="text-secondary fw-semibold">
                        Saved Searches
                    </Nav.Link>
                    <Nav.Link className="text-secondary fw-semibold">Columns</Nav.Link>
                    <Nav.Link className="text-secondary fw-semibold">CSV</Nav.Link>
                    <Button variant="outline-primary" size="sm" className="rounded-pill">
                        + Add Item
                    </Button>
                </Nav>
            </Container>

            <Container fluid className="bg-white border-top py-2">
                <Nav
                    variant="pills"
                    defaultActiveKey="all"
                    className="d-flex gap-3 justify-content-start"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="overview" className="fw-semibold">
                            Stock Overview
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="all" className="fw-semibold">
                            All
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="components" className="fw-semibold">
                            Components
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="kitted" className="fw-semibold">
                            Kitted
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="serialized" className="fw-semibold">
                            Serialized
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="arriving" className="fw-semibold">
                            Arriving Soon
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="recording" className="fw-semibold">
                            Recording Soon
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
