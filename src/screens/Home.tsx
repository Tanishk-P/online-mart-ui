import { Card, Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HomeHeader from "../components/HomeHeader";
import food from "../images/food.jpg";

function Home() {

    const { Meta } = Card;

    return (
        <Layout>
            <HomeHeader />
            <Content style={{ position: 'absolute', top: '12vh', padding: "0 75px", paddingBottom: "50px" }}>
                <Row gutter={20}>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                    <Col>
                        <Card cover={<img src={food} alt="cover" style={{ objectFit: "cover"}} />} style={{ marginTop: "20px", width: "300px"}} hoverable><Meta title="Card 1" description="Hello" /></Card>
                    </Col>
                </Row> 
            </Content>   
        </Layout>
    )
}

export default Home;