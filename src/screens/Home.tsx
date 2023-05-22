import React, { useEffect, useState } from 'react';
import { Col, Layout, Row, notification } from "antd";
import { Content } from "antd/es/layout/layout";
import HomeHeader from "../components/HomeHeader";
import { colors } from "../utls/Color";
import { AiFillEye } from "react-icons/ai";
import * as labelConst from "../utls/Labels";
import { PageRoutes } from "../utls/PageRoutes";
import { useNavigate } from "react-router-dom";
import { IProductState } from '../store/ProductState/ProductState';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import { useDispatch } from 'react-redux';
import { Products } from '../store/ProductState/ProductActionState';

function Home() {
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const products: IProductState = useSelector((state: IAppState) => state.productState);

    useEffect(() => {
        dispatch(Products());
    }, [dispatch])

    const productData = products.productList.filter( product => product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())).map( product => {
        const { ...props } = product;
        return (
            <Col id={props._id} key={props._id}>
                <div className="product-container" style={{ backgroundImage: `url(${props.imageUrl})`}} onClick={() => onSelectProduct(props._id)}>
                    <div className="product-name">
                        <AiFillEye key="view" size={20} /> {props.name}
                    </div>
                </div>
            </Col>
        )
    });

    function onSelectProduct(productId: string): void {
        console.log('selected product', productId);
        !localStorage.getItem('authToken') && notification.warning({
            message: 'Sign-In required',
            description:
                <div style={{ display: 'inline-flex', gap: 3 }}>To Checkout items,
                    <div style={{ cursor: 'pointer', color: colors.primaryColor }} onClick={() => navigate(PageRoutes.login)}>{labelConst.LOGIN}</div> or
                    <div style={{ cursor: 'pointer', color: colors.red }} onClick={() => navigate(PageRoutes.signUp)}>{labelConst.SIGN_UP}</div>
                </div>
        })
        navigate(PageRoutes.info, { state: { productId } })
    }

    return (
        <Layout>
            <HomeHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Content style={{ position: 'absolute', top: '10vh' }}>
                <div className="product-list-bg" >
                    <Row gutter={16} style={{ marginLeft: '1rem'}}>
                        {productData}
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}

export default Home;