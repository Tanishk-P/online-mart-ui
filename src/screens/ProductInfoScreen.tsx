import React, { useState } from 'react';
import { Col, Divider, InputNumber, Layout, Row, Slider, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import HomeHeader from '../components/HomeHeader';
import food from "../images/food.jpg";
import CommonHeader from '../components/CommonHeader';
import * as labelConst from '../utls/Labels';
import { colors } from '../utls/Color';
import CommonButton from '../components/CommonButton';

function ProductInfoScreen() {
    
    const [inputValue, setInputValue] = useState(1);
        const onChange = (value: number | null) => {
            if (value !== null) {
               setInputValue(value); 
            }
        };

    const _renderQuantitySlider = () => {
        return (
          <Row>
            <Col span={8}>
              <Slider
                min={1}
                max={20}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
              />
            </Col>
            <Col >
              <InputNumber
                min={1}
                max={20}
                style={{ margin: "0 20px" }}
                value={inputValue}
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
                   <Typography.Text >Total Price :</Typography.Text>
                </Col>
                <Col>
                    <InputNumber 
                        readOnly
                        prefix= "$"
                        value={10 * inputValue}
                    />
                </Col>
            </Row>
        )
    }

    const _renderProductInfo = () => {
        return (
            <>
                <Row >
                    <Col span={6}>Manifacture Date :</Col>
                    <Col>dd/mm/yyyy</Col>
                </Row>
                <Row>
                    <Col span={6}>Use by Date :</Col>
                    <Col>dd/mm/yyyy</Col>
                </Row>
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
                    <img src={food} alt='food' style={{ width: "450px", height: "450px", objectFit: "cover", borderRadius: "10px" }}/>
                </div>
            </Col>
            <Col>
                <div className='info-container'>
                        <CommonHeader level={1} margin={'5px'} title="Product One" />
                    <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_PRICE}</Divider>
                        <CommonHeader level={3} margin={'5px'} title="$10.00" />
                    <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_STOCK}</Divider>
                       { _renderQuantitySlider()}
                       <div style={{ marginTop: "12px"}} />
                       {_renderQuanityPrice()}
                    <Divider plain style={{ color: colors.grayColor, borderColor: colors.darkGray }}>{labelConst.PRODUCT_INFO}</Divider>
                        {_renderProductInfo()}
                        <div className='contain-center' style={{ marginTop: "14px"}}>
                            <CommonButton  >Checkout</CommonButton>
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