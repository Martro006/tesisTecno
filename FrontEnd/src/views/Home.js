import { Col, Row } from "reactstrap";
import Image from "../components/dashboard/Image";
import { ReactSession } from 'react-client-session';
import "./../assets/css/home.css"


const Home = () => {
    console.log(ReactSession.get("user"));
    return (
      <div>
        <Row>
          <Col sm="12" lg="12" xl="12" xxl="12">
          <h1 className="text-bienvenida">Bienvenido a LabReserve</h1>
            <Image 
              src="https://www.ipl.edu.do/images/Centro_de_Investigaci%C3%B3n.jpg"
              className= "imagen-bienvenida"
              
            />
          </Col>
        </Row>
      </div>
    );
  };
  
  export default Home;
  