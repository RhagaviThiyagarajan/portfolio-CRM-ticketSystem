import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import tickets from '../../assets/img/data/DummyTickets.json'
import BreadCrumpb from '../../components/breadcrumb/BreadCrumpb'
import TicketTable from '../../components/tickets/TicketTable'
function DashboardPage() {
  return (
    <Container>
        <Row>
            <Col>
<BreadCrumpb page="dashboard"/>
        </Col>
            <Col className="text-center mt-8 mb-1 ml-5 mr-5">
            <Button variant='info' style={{
                'fontSize':'2rem',
                padding:"10px 30px"
            }}>
                Add New Ticket
            </Button>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2">
            <div>Total Tickets:50</div>
            <div>Pending Tickets:5</div>
            </Col>
        </Row> 
        <Row>
            <Col className=" mt-2">
         Recently Added tickets
            </Col>
        </Row> 
        <hr/>

        <Row>
            <Col className="recent-ticket">
<TicketTable tickets={tickets}/>
            </Col>
        </Row> 
        <hr/>


    </Container>
  )
}

export default DashboardPage