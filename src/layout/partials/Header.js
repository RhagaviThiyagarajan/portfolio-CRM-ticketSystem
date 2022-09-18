// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavbarBrand } from 'react-bootstrap';
// import logo from  '../../assets/img/crm-logo.png';



// export default function Header() {
//   return (
//    <Navbar collapseOnSelect
//       variant="dark"
//       bg='info'>
// <Container>
// <Navbar.Brand>
//   <img src={logo} alt='logo' width='50px'/>
// </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="me-auto">
//       <Nav.Link href="/dashboard">Dashboard</Nav.Link>
//       <Nav.Link href="/tickets">Tikets</Nav.Link>
//       </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }





import React from 'react'
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';
import logo from  '../../assets/img/crm-logo.png';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark"
      expand="xl">
        <Container>
        <Navbar.Brand>
   <img src={logo} alt='logo' width='50px'/>
 </Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ml-auto">
       <Nav.Link href="/dashboard">Dashboard</Nav.Link>
       <Nav.Link href="/tickets">Tikets</Nav.Link>
       <Nav.Link href="/dashboard">Logout</Nav.Link>
       </Nav>
         </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  );
}

export default ColorSchemesExample;