import {
  Row,
  Col,
  Nav,
  Navbar,
  FormControl,
  Form,
  Button,
} from 'react-bootstrap';
function NavTop() {
  return (
    <Row>
      <Col>
        <Navbar bg='light' variant='light' className='custom-nav'>
          <Navbar.Brand href='/'>My Pictures</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/add_new'>Add New</Nav.Link>
            <Nav.Link href='/all_plant'>All Pictures</Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link href='/signinpassport'>Login</Nav.Link>
            <Nav.Link href='/signup'>Signup</Nav.Link>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-dark'>Search</Button>
          </Form>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavTop;
