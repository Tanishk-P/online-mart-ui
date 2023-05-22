import React, { useState, useEffect } from 'react';
import { Col, Divider, InputNumber, Layout, Modal, Row, Slider, Typography, notification } from 'antd';
import { Content } from 'antd/es/layout/layout';
import HomeHeader from '../components/HomeHeader';
import { MdShoppingCartCheckout } from 'react-icons/md';
import CommonHeader from '../components/CommonHeader';
import * as labelConst from '../utls/Labels';
import { colors } from '../utls/Color';
import CommonButton from '../components/CommonButton';
import { useLocation } from 'react-router-dom';
import { orderProduct } from '../services/ApiActions';
import { useDispatch } from 'react-redux';
import { ProductDetails } from '../store/ProductDetailsState/ProductDetailsAction';
import { IProduct } from '../models/IProduct';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';

function ProductInfoScreen() {

    const location = useLocation();
    const productId = location.state.productId;

    const dispatch: any = useDispatch();
    const product: IProduct = useSelector((state: IAppState) => state.productDetailState);

    useEffect(() => {
        dispatch(ProductDetails(productId));
        // setSearchQuery();
    }, [dispatch]);

    console.log()

    const [productQuantity, setProductQuantity] = useState<number>(20);
    const [selectedQuantity, setSelectedQuanity] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChange = (value: number | null) => {
        if (value !== null) {
            setSelectedQuanity(value);
            setTotalPrice(String(Number(product.price) * value));
        }
    };

    const _renderQuantitySlider = () => {
        return (
            <Row>
                <Col span={8}>
                    <Slider
                        min={1}
                        max={productQuantity}
                        onChange={onChange}
                        value={typeof selectedQuantity === "number" ? selectedQuantity : 0}
                    />
                </Col>
                <Col >
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ margin: "0 20px" }}
                        value={selectedQuantity}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        );
    }

    const _renderQuanityPrice = () => {
        return (
            <Row>
                <Col offset={5} span={4} style={{ display: "flex", alignItems: "center" }}>
                    <Typography.Text >{labelConst.CHECKOUT_PRICE} :</Typography.Text>
                </Col>
                <Col>
                    <InputNumber
                        readOnly
                        prefix="₹"
                        value={selectedQuantity !== 1 ? totalPrice : product.price}
                    />
                </Col>
            </Row>
        )
    }

    const _renderProductInfo = () => {
        return (
            <>
                <Row >
                    <Col span={6}>{labelConst.PRODUCT_CATEGORY}</Col>
                    <Col>{product.category}</Col>
                </Row>
                <Row>
                    <Col span={6}>{labelConst.PRODUCT_COMPANY}</Col>
                    <Col>{product.company}</Col>
                </Row>
                <Row>
                    <Col span={6}>{labelConst.PRODUCT_DESCRIPTION}</Col>
                    <Col>{product.description}</Col>
                </Row>
            </>

        )
    }

    const _renderCheckOut = () => {
        const [modalState, setModalState] = useState<boolean>(false);

        const showModal = () => {
            setModalState(true);
        }

        const onOk = () => {
            if (product._id && selectedQuantity && totalPrice && product.name) {
                orderProduct(product._id, selectedQuantity, totalPrice, product.name).then(response => {
                    console.log('order successfull', response?.data);
                    notification.success({
                        message: "Order Placed",
                        description: <Typography.Text style={{ display: "inline-flex", gap: 5, color: colors.grayColor }}>Purchased <div style={{ color: colors.primaryColor }}>{product.name}</div>, quantity is <div style={{ color: colors.primaryColor }}>{selectedQuantity}</div></Typography.Text>,
                        style: { position: 'relative', zIndex: 3000 }
                    });
                    setModalState(false);
                    // dispatch(OrderDetails());
                });
            }
        }

        const onCancel = () => {
            setModalState(false);
        }

        return (
            <>
                <CommonButton onClick={() => showModal()} disabled={!localStorage?.getItem('authToken') ? true : false} ><div className='contain-center'><MdShoppingCartCheckout size={20} /> Checkout</div> </CommonButton>
                <Modal
                    title="Checkout"
                    centered
                    open={modalState}
                    onOk={() => onOk()}
                    onCancel={() => onCancel()}
                >
                    <CommonHeader level={2} margin={'5px'} title={product.name} />
                    <div style={{ marginTop: "12px" }} />
                    <Row>
                        <Col>{labelConst.CHECKOUT_QUANTITY} : {selectedQuantity}</Col>
                        <Col offset={4}>{labelConst.CHECKOUT_PRICE} : ₹ {selectedQuantity !== 1 ? totalPrice : product.price} </Col>
                    </Row>
                </Modal>
            </>

        )
    }

    return (
        <Layout>
            <HomeHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Content style={{ position: "absolute", top: "4.2rem", padding: "50px", backgroundColor: "#f0f0f0" }}>
                <Row gutter={16} style={{ display: "flex", justifyContent: "flex-start", gap: "5vw", width: "100vw", marginLeft: "5vw" }}>
                    <Col >
                        <div className='product-image'>
                            <img src={product.imageUrl} alt='food' style={{ width: "450px", height: "450px", objectFit: "cover", borderRadius: "10px" }} />
                        </div>
                    </Col>
                    <Col>
                        <div className='info-container'>
                            <CommonHeader level={1} margin={'5px'} title={product.name} />
                            <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_PRICE}</Divider>
                            <Typography.Title level={3} style={{ color: colors.grayColor, margin: 5 }}>₹ {product.price}</Typography.Title>
                            <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_STOCK}</Divider>
                            {_renderQuantitySlider()}
                            <div style={{ marginTop: "12px" }} />
                            {_renderQuanityPrice()}
                            <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_INFO}</Divider>
                            {_renderProductInfo()}
                            <div style={{ marginTop: "14px", display: 'flex', position: "absolute", bottom: "3.5rem", right: "5rem" }}>
                                {_renderCheckOut()}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default ProductInfoScreen;