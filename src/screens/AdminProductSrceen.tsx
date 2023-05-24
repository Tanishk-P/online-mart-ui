import { Content, Header } from 'antd/es/layout/layout';
import React, { useState, useEffect } from 'react'
import { colors } from '../utls/Color';
import { Button, Col, Divider, Input, Modal, notification, Popconfirm, Row, Table, Typography } from 'antd';
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
import { FaQuestionCircle, FaTrashAlt } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { addProducts, deleteProduct, searchProducts } from '../services/ApiActions';
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
  const [selectedProduct, setSelectedProduct] = useState<DataType>({} as DataType);
  const [viewModelState, setViewModelState] = useState<boolean>(false);
  const [editModelState, setEditModelState] = useState<boolean>(false);

  useEffect(() => {
    dispatch(Products());
  }, [dispatch]);

  interface DataType {
    key: string,
    product: string,
    company: string,
    category: string,
    price: string,
    description: string,
    imageUrl: string
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
            {renderEdit(record)}
            {renderView(record)}
            {renderDelete(record.key)}
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
      description: product.description,
      imageUrl: product.imageUrl,
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
      description: product.description,
      imageUrl: product.imageUrl
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

  // function _addProduct() {
  //   addProducts(productDetails).then(response => {
  //     response?.success && notification.success({
  //       placement: "bottomRight",
  //       message: "New Product Added",
  //       description: <Typography.Text style={{ display: "inline-flex", gap: 5, color: colors.grayColor }}>{productDetails.name} has been added to the list.</Typography.Text>,
  //       style: { position: 'relative', zIndex: 3000 }
  //     });
  //   })
  // }

  function renderView(product: DataType): JSX.Element {
    return (
      <>
        <Button 
          icon={<AiFillEye size={18} />} 
          onClick={() => {
            setSelectedProduct(product);
            setViewModelState(true);
          }} 
        />
      </>
    )
  }

  function renderEdit(product: DataType): JSX.Element {
    return (
      <>
        <Button 
          type="primary" 
          icon={<MdEdit size={18} />} 
          onClick={() => {
            setSelectedProduct(product);
            setEditModelState(true);
            }} 
        />
      </>
    )
  }

  function renderDelete(productId: string): JSX.Element {
    const handleOk = () => {
      deleteProduct(productId).then(response => {
        notification.success({
          message: "Successfuly deleted"
        }) 
      })           
    }
    return (
      <>
        <Popconfirm 
          title={labelConst.DELETE_PRODUCT}
          // description="Are you sure to delete this product?"
          icon={<FaQuestionCircle size={14} color={"red"}/>}
          onConfirm={handleOk}        
        >
          <Button 
          danger
          icon={<FaTrashAlt size={18} />}          
        />
        </Popconfirm>
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
      <ViewProductModal modelOpen={viewModelState} setModel={setViewModelState} product={selectedProduct} />
      <EditProductModal modelOpen={editModelState} setModel={setEditModelState} product={selectedProduct} />
    </>
  )
}

export default AdminProductInfo;