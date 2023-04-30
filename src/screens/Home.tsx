import { Card, Col, Layout, Pagination, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import HomeHeader from "../components/HomeHeader";
import food from "../images/food.jpg";
import { colors } from "../utls/Color";
import { AiFillEye } from "react-icons/ai";
import * as labelConst from "../utls/Labels";
import { PageRoutes } from "../utls/PageRoutes";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <Layout>
            <HomeHeader />
            <Content style={{ position: 'absolute', top: '10vh' }}>
                <div className="product-list-bg" >
                    <Row>
                        <Col>
                            <Card 
                                size="small"
                                cover={<img src={food} alt="cover" style={{ objectFit: "cover", height: "35vh"}} />} 
                                style={{ margin: "20px", width: "300px", height: "48vh"}} 
                                hoverable
                            >
                               <Typography.Text className="view" >
                                    <div style={{ display: "flex", gap: "10px"}} onClick={() => navigate(PageRoutes.info)}> 
                                        <AiFillEye key="view" size={20} />
                                        {labelConst.PRODUCT}
                                    </div>
                               </Typography.Text>
                            </Card>
                        </Col>
                    </Row> 
                    <br />
                    <br />
                    <Pagination
                        className="home-pagination"
                        size="small" 
                        total={85}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        defaultPageSize={20}
                        defaultCurrent={1}
                    /> 
                </div>       
            </Content>   
        </Layout>
    )
}

export default Home;