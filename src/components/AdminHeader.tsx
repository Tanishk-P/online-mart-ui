import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { colors } from '../utls/Color';
import * as labelConst from '../utls/Labels';
import { Col, Divider, Row, Typography } from 'antd'
import CommonHeader from './CommonHeader'
import CommonButton from './CommonButton'
import { PageRoutes } from '../utls/PageRoutes';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState<string>(PageRoutes.adminOrder);

    const handleClick = (adminRoute: string) => {
        setSelectedButton(adminRoute);
        navigate(adminRoute);
    }

    return (
        <Header style={{ backgroundColor: colors.white }}>
            <Row >
                <Col>
                    <CommonHeader level={1} margin={'0.5rem'} color={"rgb(0 0 0 / 59%)"} title={labelConst.ADMIN_SCREEN} />
                </Col>
                <Col offset={10}>
                    <div className='contain-center' >
                        <CommonButton type='text' onClick={() => handleClick(PageRoutes.adminOrder)} >
                            <Typography.Text style={{ color: "rgb(0 0 0 / 59%)", fontWeight: selectedButton === PageRoutes.adminOrder ? 'bold' : 400 }} >Orders</Typography.Text>
                            {selectedButton === PageRoutes.adminOrder && <Divider style={{ position: "absolute", top: "1rem", left: ".2rem", border: "1px solid rgb(0 0 0 / 59%)" }} />}
                        </CommonButton>
                        <Divider type='vertical' style={{ backgroundColor: "rgb(0 0 0 / 59%)", height: '1.2rem' }} />
                        <CommonButton type='text' onClick={() => handleClick(PageRoutes.adminProduct)}>
                            <Typography.Text style={{ color: "rgb(0 0 0 / 59%)", fontWeight: selectedButton === PageRoutes.adminProduct ? 'bold' : 400 }} >Products</Typography.Text>
                            {selectedButton === PageRoutes.adminProduct && <Divider style={{ position: "absolute", top: "1rem", right: ".05rem", border: "1px solid rgb(0 0 0 / 59%)" }} />}
                        </CommonButton>
                        <Divider type='vertical' style={{ backgroundColor: "rgb(0 0 0 / 59%)", height: '1.2rem' }} />
                        <CommonButton type='text' onClick={() => handleClick(PageRoutes.admin)}>
                            <Typography.Text style={{ color: "rgb(0 0 0 / 59%)", fontWeight: selectedButton === PageRoutes.admin ? 'bold' : 400 }} >Sales</Typography.Text>
                            {selectedButton === PageRoutes.admin && <Divider style={{ position: "absolute", top: "1rem", right: ".1rem", border: "1px solid rgb(0 0 0 / 59%)" }} />}
                        </CommonButton>
                        <Divider type='vertical' style={{ backgroundColor: "rgb(0 0 0 / 59%)", height: '1.2rem' }} />
                        <CommonButton type='text' onClick={() => handleClick(PageRoutes.home)}>
                            <Typography.Text style={{ color: "rgb(0 0 0 / 59%)", fontWeight: 400 }} >Sign Out</Typography.Text>
                        </CommonButton>
                    </div>

                </Col>
            </Row>
        </Header>
    )
}

export default AdminHeader