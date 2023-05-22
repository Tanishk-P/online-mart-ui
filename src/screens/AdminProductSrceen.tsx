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
import AddProductModal from '../productModals/AddProductModal';
import ViewProductModal from '../productModals/ViewProductModal';
import EditProductModal from '../productModals/EditProductModal';

function AdminProductInfo() {
  const dispatch: any = useDispatch();
  const products: IProductState = useSelector((state: IAppState) => state.productState);
  const [search, setSearch] = useState<string>('');
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [addModelState, setAddModelState] = useState<boolean>(false);
  const [viewModelState, setViewModelState] = useState<boolean>(true);
  const [editModelState, setEditModelState] = useState<boolean>(false);

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
      key: "product",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹ ${price}`,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record, index) => {
        return (
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {renderEdit()}
            {renderView()}
            <Button icon={<FaTrashAlt size={18} />} danger />
          </div>
        )
      }
    },
  ];

  const data: DataType[] = products.productList.map((product) => {
    return {
      key: product._id,
      product: product.name,
      company: product.company,
      category: product.category,
      price: product.price,
      actions: 'edit/delete',
    }
  })

  function handleChange(value: string): void {
    setSearch(value);
    searchProducts(value.toLowerCase()).then((response) => {
      setFilteredData(response?.data || []);
    }).catch((error) => {
      console.error(error);
      setFilteredData([]);
    });
  }

  const newData: DataType[] = data.filter((product) =>
    product.product.toLowerCase().includes(search.toLowerCase())
  ).map((product) => {
    return {
      key: product.key,
      product: product.product,
      company: product.company,
      category: product.category,
      price: product.price,
      actions: 'edit/delete'
    };
  });

  function renderAdd() {

    return (
      <>
        <CommonButton backgroundColor={colors.grayColor} onClick={() => setAddModelState(true)}>
          <Typography.Text style={{ color: colors.lightGrayColor }}>Add Product</Typography.Text>
        </CommonButton>
        <AddProductModal modelOpen={addModelState} setModel={setAddModelState} />
      </>
    )
  }

  function renderView(): JSX.Element {
    return (
      <>
        <Button icon={<AiFillEye size={18} />} onClick={() => setViewModelState(true)} />
      </>
    )
  }

  function renderEdit(): JSX.Element {
    return (
      <>
        <Button type="primary" icon={<MdEdit size={18} onClick={() => setEditModelState(true)} />} />
      </>
    )
  }

  return (
    <>
      <Header style={{ display: "flex", backgroundColor: "#f0f0f0", justifyContent: "space-between" }}>
        <CommonHeader level={3} margin='1rem' title={labelConst.PRODUCT_LIST} />
        <Col offset={2} className="search">
          <Input prefix suffix={<MdSearch size={20} color={colors.transparentGrey} />} value={search} onChange={(e) => handleChange(e.target.value)} placeholder={labelConst.SEARCH} style={{ width: '25rem' }} />
        </Col>
        {renderAdd()}
      </Header>
      <Content className='admin-screen-content' style={{ backgroundColor: "#f0f0f0", height: "90vh", padding: "1rem 3.5rem" }}>
        <Table bordered dataSource={newData} columns={columns} scroll={{ y: "50vh" }} />
      </Content>
      <ViewProductModal modelOpen={viewModelState} setModel={setViewModelState} />
      <EditProductModal modelOpen={editModelState} setModel={setEditModelState} />
    </>
  )
}

export default AdminProductInfo;