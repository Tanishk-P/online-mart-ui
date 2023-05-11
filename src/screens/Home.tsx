import React, { useEffect, useState } from 'react';
import { Card, Col, Layout, Pagination, Row, Typography, notification } from "antd";
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
    const [searchQuery, setSearchQuery] = useState('');
    const [productList, setProductList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        _fetchAllProducts();
    }, [searchQuery])

    async function _fetchAllProducts() {
      const response = await getAllProducts();
      const products = response?.data;
      const productList = products.filter((product) => product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())).map((product) => {
        
        const { ...props } = product;
        
        return (
            <Col id={props?._id}>
                <div className="product-container" style={{ backgroundImage: `url(${props.imageUrl})` }} onClick={() => onSelectProduct(props)}>
                    <div className="product-name">
                        <AiFillEye key="view" size={20} /> {props.name}
                    </div>
                </div>
            </Col>
            
        )
      });
      setProductList(productList); 

        function onSelectProduct(productInfo: IProduct) : void {
            console.log('selected product', productInfo);
            !localStorage.getItem('authToken') && notification.warning({
                message: 'Hey there,',
                description: 'You have to be signed-in to checkout!'
            })
            productInfo && navigate(PageRoutes.info, { state: { productInfo } })        
        }       
    }    

    return (
        <Layout>
            <HomeHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Content style={{ position: 'absolute', top: '10vh' }}>
                <div className="product-list-bg" >
                    <Row gutter={16} style={{ marginLeft: '1rem'}}>
                        {productList}
                    </Row>
                </div>       
            </Content>   
        </Layout>
    )
}

export default Home;