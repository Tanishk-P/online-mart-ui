import { Col, Divider, Row, Table, Typography } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React from 'react'
import CommonHeader from '../components/CommonHeader'
import { colors } from '../utls/Color'
import CommonButton from '../components/CommonButton'
import * as labelConst from '../utls/Labels'
import { useNavigate } from 'react-router-dom'
import { PageRoutes } from '../utls/PageRoutes'
import { ColumnsType } from 'antd/es/table'

function OrderScreen() {
    const navigate = useNavigate();

    interface DataType {
        key: string;
        customerName: string;
        product: string;
        quantity: number;
        totalPrice: number;
      }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            render: (text) => <>$ {text}</>,
        }
    ];

    const data: DataType[] = [
        {
            key: '1',
            customerName: 'John Brown',
            product: 'Toast',
            quantity: 10,
            totalPrice: 320,
        },
        {
            key: '1',
            customerName: 'John Brown',
            product: 'Toast',
            quantity: 10,
            totalPrice: 320,
        },
        {
            key: '1',
            customerName: 'John Brown',
            product: 'Toast',
            quantity: 10,
            totalPrice: 320,
        },
        {
            key: '1',
            customerName: 'John Brown',
            product: 'Toast',
            quantity: 10,
            totalPrice: 320,
        },
        
    ]

  return (
    <>
        <Header style={{ backgroundColor: 'white' }}>
            <Row >
                <Col>
                    <CommonHeader level={1} margin={'0.5rem'} color={"rgb(0 0 0 / 59%)"} title={labelConst.ADMIN_SCREEN} />
                </Col>
                <Col offset={14}>
                    <div className='contain-center' >
                        <CommonButton type='text' onClick={() => navigate(PageRoutes.admin)}>
                            <Typography.Text style={{color: "rgb(0 0 0 / 59%)", fontWeight: 400}} >Sales</Typography.Text>
                        </CommonButton>
                        <Divider type='vertical' style={{ backgroundColor: "rgb(0 0 0 / 59%)" , height: '1.2rem'}} />
                        <CommonButton type='text'onClick={() => navigate(PageRoutes.home)}> 
                            <Typography.Text style={{color: "rgb(0 0 0 / 59%)", fontWeight: 400}} >Sign Out</Typography.Text>
                        </CommonButton> 
                    </div>
                </Col>
            </Row>
        </Header>
        <Content style={{ backgroundColor: "#f0f0f0", height: "90vh", padding: "3.5rem" }}>
            <Table bordered dataSource={data} columns={columns} />                
        </Content>
    </>
  )
}

export default OrderScreen