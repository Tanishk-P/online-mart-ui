import React, { useState, useEffect } from 'react';
import { Col, Divider, InputNumber, Layout, Modal, Row, Slider, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import HomeHeader from '../components/HomeHeader';
import food from "../images/food.jpg";
import { MdShoppingCartCheckout } from 'react-icons/md';
import CommonHeader from '../components/CommonHeader';
import * as labelConst from '../utls/Labels';
import { colors } from '../utls/Color';
import CommonButton from '../components/CommonButton';
import { useLocation } from 'react-router-dom';

function ProductInfoScreen() {
    const [productName, setProductName] = useState<string>('');
    const [productImage, setProductImage] = useState<string>('')
    const [productQuantity, setProductQuantity] = useState<number>(20);
    const [productPrice, setProductPrice] = useState<number>();
    const [selectedQuantity, setSelectedQuanity] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState(productPrice);

    const location = useLocation();
    const productInfo = location.state.productInfo;
    console.log('productInfo on new screen', productInfo);

    useEffect(()=> {
        setProductName(productInfo?.name);
        setProductImage(productInfo?.imageUrl);
        setProductPrice(productInfo?.price)
    }, [productInfo])

        const onChange = (value: number | null) => {
            if (value !== null && productPrice) {
               setSelectedQuanity(value); 
               setTotalPrice(productPrice * value);
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
                <Col offset={5} span={4} style={{ display: "flex", alignItems: "center"}}>
                   <Typography.Text >{labelConst.CHECKOUT_PRICE} :</Typography.Text>
                </Col>
                <Col>
                    <InputNumber 
                        readOnly
                        prefix= "₹"
                        value={selectedQuantity !==1 ? totalPrice : productPrice}
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
                    <Col>{productInfo?.category}</Col>
                </Row>
                <Row>
                    <Col span={6}>{labelConst.PRODUCT_COMPANY}</Col>
                    <Col>{productInfo?.company}</Col>
                </Row>
                <Row>
                    <Col span={6}>{labelConst.PRODUCT_DESCRIPTION}</Col>
                    <Col>{productInfo?.description}</Col>
                </Row>             
            </>
            
        )
    }

    const _renderCheckOut = () => {
        const [modalState , setModalState] = useState<boolean>(false);

        const showModal = () => {
            setModalState(true);
        }

        const onOk = () => {
            setModalState(false);
        }

        const onCancel = () => {
            setModalState(false);
        }

        return (
            <>
                <CommonButton onClick={() => showModal()} disabled={ !localStorage?.getItem('authToken') ? true : false} ><div className='contain-center'><MdShoppingCartCheckout size={20} /> Checkout</div> </CommonButton>
                <Modal 
                    title="Checkout"
                    centered
                    open={modalState}
                    onOk={() => onOk()}
                    onCancel={() => onCancel()}
                >        
                    <CommonHeader level={2} margin={'5px'} title={productName} />
                    <div style={{ marginTop: "12px" }}/>
                    <Row>
                        <Col>{labelConst.CHECKOUT_QUANTITY} : {selectedQuantity}</Col>
                        <Col offset={4}>{labelConst.CHECKOUT_PRICE} : ₹ {selectedQuantity !== 1 ? totalPrice : productPrice} </Col>
                    </Row>
                </Modal>
            </>
            
        )
    }

  return (
   <Layout>
    <HomeHeader />
    <Content style={{ position: "absolute", top: "4.2rem", padding: "50px", backgroundColor: "#f0f0f0"}}>
        <Row gutter={16} style={{ display: "flex", justifyContent: "flex-start", gap: "5vw", width: "100vw", marginLeft: "5vw"}}>
            <Col >
                <div className='product-image'>
                    <img src={productImage} alt='food' style={{ width: "450px", height: "450px", objectFit: "cover", borderRadius: "10px" }}/>
                </div>
            </Col>
            <Col>
                <div className='info-container'>
                        <CommonHeader level={1} margin={'5px'} title={productName} />
                    <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_PRICE}</Divider>
                        <Typography.Title level={3} style={{ color: colors.grayColor, margin: 5}}>₹ {productPrice}</Typography.Title>
                    <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_STOCK}</Divider>
                       { _renderQuantitySlider()}
                       <div style={{ marginTop: "12px"}} />
                       {_renderQuanityPrice()}
                    <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_INFO}</Divider>
                        {_renderProductInfo()}
                        <div style={{ marginTop: "14px", display: 'flex', position: "absolute", bottom: "3.5rem", right: "5rem"}}>
                            {_renderCheckOut()}
                        </div>
                </div>
            </Col>
        </Row>
        {/* <Row style={{ position: "absolute", top: "62vh", left: "18vw", display: "flex", justifyContent: "center", padding: "2rem", width: "100vw" }}>
            <Col>
               <CommonButton >
                    Checkout
               </CommonButton>
            </Col>
        </Row> */}
    </Content>
   </Layout>
  )
}

export default ProductInfoScreen;