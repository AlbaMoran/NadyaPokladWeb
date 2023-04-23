import '../../../styles/App.css'
import { Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useUserAuth } from '../../../context/UserAuthContext';
import SideBar from './SideBar';


export function Dashboard() {

   const {user} = useUserAuth();
   const navigate = useNavigate();

  return (
    <>      
        <Row>
          <SideBar />

          <Col sm="9" className="main-menu">
            <Container fluid>
              <Row className="mt-3">
                <Col sm={10}>
                  <Row >
                    <p style={{marginLeft: 0}}> Your are logged in with the email: {user && user.email}</p>      
                  </Row>
                </Col>

            </Row>
          </Container>
          
          </Col>
        </Row>
    </>
  )
}