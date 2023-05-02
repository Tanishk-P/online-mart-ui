import { Carousel, Col, Divider, Row, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React from 'react'
import { colors } from '../utls/Color';
import * as labelConst from '../utls/Labels';
import Logo from '../components/Logo';
import CommonButton from '../components/CommonButton';
import CommonHeader from '../components/CommonHeader';
import { PageRoutes } from '../utls/PageRoutes';
import { useNavigate } from 'react-router-dom';

function AdminScreen() {
    const navigate = useNavigate();

  return (
    <>
        <Header style={{ backgroundColor: colors.white }}>
            <Row >
                <Col>
                    <CommonHeader level={1} margin={'0.5rem'} color={"rgb(0 0 0 / 59%)"} title={labelConst.ADMIN_SCREEN} />
                </Col>
                <Col offset={14}>
                    <div className='contain-center' >
                        <CommonButton type='text' onClick={() => navigate(PageRoutes.adminOrder)}>
                            <Typography.Text style={{color: "rgb(0 0 0 / 59%)", fontWeight: 400}} >Orders</Typography.Text>
                        </CommonButton>
                        <Divider type='vertical' style={{ backgroundColor: "rgb(0 0 0 / 59%)" , height: '1.2rem'}} />
                        <CommonButton type='text'onClick={() => navigate(PageRoutes.home)}> 
                            <Typography.Text style={{color: "rgb(0 0 0 / 59%)", fontWeight: 400}} >Sign Out</Typography.Text>
                        </CommonButton> 
                    </div>
                    
                </Col>
            </Row>
        </Header>
        <Content className='admin-screen-content' style={{ backgroundColor: "#f0f0f0", height: "90vh" }}>
            <Row >
                <Col>
                    
                </Col>
            </Row>
                
        </Content>
    </>
  )
}

export default AdminScreen;