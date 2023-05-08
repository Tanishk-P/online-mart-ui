import React, { useEffect, useState } from 'react';
import { Card, Col, Layout, Pagination, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import HomeHeader from "../components/HomeHeader";
import { colors } from "../utls/Color";
import { AiFillEye } from "react-icons/ai";
import * as labelConst from "../utls/Labels";
import { PageRoutes } from "../utls/PageRoutes";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from '../services/ApiActions';
import { IProduct } from '../models/IProduct';

function Home() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        _fetchAllProducts();
    }, [])

    async function _fetchAllProducts() {
      const response = await getAllProducts();
      const products = response?.data;
      const productList = products.map((product) => {
        
        const { ...props } = product;
        
        return (
            <Card
                id={props._id}
                size="small"
                cover={<img src={props.imageUrl} alt={props.category} style={{ objectFit: "cover", height: "35vh" }} />}
                style={{ margin: "20px", width: "300px", height: "48vh" }}
                hoverable
            >
                <Typography.Text className="view" >
                    <div style={{ display: "flex", gap: "10px" }} onClick={() => {onSelectProduct(props)}}>
                        <AiFillEye key="view" size={20} />
                        {props.name}
                    </div>
                </Typography.Text>
            </Card>
        )
      });
      setProductList(productList); 

        function onSelectProduct(productInfo: IProduct) : void {
            console.log('selected product', productInfo);
            productInfo && navigate(PageRoutes.info, { state: { productInfo } })        
        }       
    }

    return (
        <Layout>
            <HomeHeader />
            <Content style={{ position: 'absolute', top: '10vh' }}>
                <div className="product-list-bg" >
                    <Row>
                        <Col style={{ display: 'flex'}}>
                            {productList}
                        </Col>
                    </Row> 
                    {/* <br />
                    <br />
                    <Pagination
                        className="home-pagination"
                        size="small" 
                        total={85}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        defaultPageSize={20}
                        defaultCurrent={1}
                    />  */}
                </div>       
            </Content>   
        </Layout>
    )
}

export default Home;