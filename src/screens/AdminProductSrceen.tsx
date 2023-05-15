import { Content, Header } from 'antd/es/layout/layout';
import React from 'react'
import { colors } from '../utls/Color';
import { Col, Divider, Input, Row, Table, Typography } from 'antd';
import * as labelConst from '../utls/Labels';
import CommonHeader from '../components/CommonHeader';
import CommonButton from '../components/CommonButton';
import { PageRoutes } from '../utls/PageRoutes';
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { ColumnsType } from 'antd/es/table';

function AdminProductInfo() {
  const navigate = useNavigate();

  interface DataType {
    key: string,
    product: string,
    price: string,
    actions: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product"
    },
    {
      title: "Company",
      dataIndex: "oompany",
      key: "company"
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },    
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions"
    },
  ]

  const data: DataType[] = []

  return (
    <>      
      <Header style={{ display: "flex", backgroundColor: "#f0f0f0" , justifyContent: "space-between"}}>
        <CommonHeader level={3} margin='1rem' title={labelConst.PRODUCT_LIST}/>
          <Col offset={2} className="search">
            <Input prefix suffix={<MdSearch size={20} color={colors.transparentGrey}/>} placeholder={labelConst.SEARCH} style={{ width: '25rem'}}/>
          </Col>                 
          <CommonButton backgroundColor={colors.grayColor}>
            <Typography.Text style={{ color: colors.lightGrayColor}}>Add Product</Typography.Text>
          </CommonButton>        
      </Header>
        <Content className='admin-screen-content' style={{ backgroundColor: "#f0f0f0", height: "90vh", padding: "1rem 3.5rem" }}>
          <Table bordered dataSource={data} columns={columns} />                            
        </Content>
    </>
  )
}

export default AdminProductInfo;