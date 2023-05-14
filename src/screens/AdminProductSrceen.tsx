import { Content, Header } from 'antd/es/layout/layout';
import React from 'react'
import { colors } from '../utls/Color';
import { Col, Divider, Row, Typography } from 'antd';
import * as labelConst from '../utls/Labels';
import CommonHeader from '../components/CommonHeader';
import CommonButton from '../components/CommonButton';
import { PageRoutes } from '../utls/PageRoutes';
import { useNavigate } from 'react-router-dom';

function AdminProductInfo() {
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

export default AdminProductInfo;