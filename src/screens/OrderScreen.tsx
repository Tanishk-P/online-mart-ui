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
        <Content style={{ backgroundColor: "#f0f0f0", height: "90vh", padding: "3.5rem" }}>
            <Table bordered dataSource={data} columns={columns} />                
        </Content>
    </>
  )
}

export default OrderScreen