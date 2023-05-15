import { Content, Header } from 'antd/es/layout/layout';
import React, { useState, useEffect } from 'react'
import { colors } from '../utls/Color';
import { Button, Col, Divider, Input, Modal, Row, Table, Typography } from 'antd';
import * as labelConst from '../utls/Labels';
import CommonHeader from '../components/CommonHeader';
import CommonButton from '../components/CommonButton';
import { MdEdit, MdSearch } from 'react-icons/md';
import { ColumnsType } from 'antd/es/table';
import { useDispatch } from 'react-redux';
import { Products } from '../store/ProductState/ProductActionState';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import { IProductState } from '../store/ProductState/ProductState';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { searchProducts } from '../services/ApiActions';
import { IProduct } from '../models/IProduct';
import AddProductModal from './AddProductModal';

function AdminProductInfo() {
  const dispatch: any = useDispatch();
  const products: IProductState = useSelector((state: IAppState) => state.productState);
  const [search , setSearch] = useState<string>('');
  const [fiteredData, setFilteredData] = useState<IProduct>();
  const [modelState, setModelState] = useState<boolean>(false);

  useEffect(() => {
    dispatch(Products());
  }, [dispatch]);  

  interface DataType {
    key: string,
    product: string,
    company: string,
    category?: string,
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
      dataIndex: "company",
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
      key: "price",
      render: (price) => `₹ ${price}`
    },    
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => <div style={{ display: "flex", justifyContent: "center", gap: "10px"}}><Button type='primary' icon={<MdEdit size={18}/>} /><Button icon={<AiFillEye size={18}/>}/> <Button icon={<FaTrashAlt size={18}/>} danger /></div>
    },
  ]

  const data: DataType[] = products.productList.map((product) => {
    return {
      key: product._id,
      product: product.name,
      company: product.company,
      category: product.category,
      price: product.price,
      actions: 'edit/delete'
    }
  })

  function handleChange(value: string): void {
    setSearch(value);
    searchProducts(search).then((response) => {
      setFilteredData(response?.data);
      console.log(response?.data)
    })
  }

  function renderAdd() {
    
    return (
      <>
        <CommonButton backgroundColor={colors.grayColor} onClick={() => setModelState(true)}>
            <Typography.Text style={{ color: colors.lightGrayColor}}>Add Product</Typography.Text>
          </CommonButton>
          <AddProductModal modelOpen={modelState} setModel={setModelState} />
      </>
    )
  }

  return (
    <>      
      <Header style={{ display: "flex", backgroundColor: "#f0f0f0" , justifyContent: "space-between"}}>
        <CommonHeader level={3} margin='1rem' title={labelConst.PRODUCT_LIST}/>
          <Col offset={2} className="search">
            <Input prefix suffix={<MdSearch size={20} color={colors.transparentGrey}/>} value={search} onChange={(e) => handleChange(e.target.value)} placeholder={labelConst.SEARCH} style={{ width: '25rem'}}/>
          </Col>                 
          {renderAdd()}
      </Header>
        <Content className='admin-screen-content' style={{ backgroundColor: "#f0f0f0", height: "90vh", padding: "1rem 3.5rem" }}>
          <Table bordered dataSource={data} columns={columns} />                            
        </Content>
    </>
  )
}

export default AdminProductInfo;