import { Col, Row } from "antd";
import CommonHeader from "../components/CommonHeader";

function Home() {
    return (
        <Row>
            <Col offset={1}>
                <div className="home">
                    <CommonHeader level={1} title='Product Lists'/>
                </div>
            </Col>
        </Row>
    )
}

export default Home;