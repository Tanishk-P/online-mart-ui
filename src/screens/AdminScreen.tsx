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