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
import { addProducts, editProduct, deleteProduct, getAllProducts, searchProducts } from '../services/ApiActions';
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
  const [editProductDetails, setEditProductDetails] = useState<DataType>({} as DataType);
  const [newProduct, setNewProduct] = useState<IProduct>({} as IProduct);
  const [clearProduct, setClearProduct] = useState<boolean>(false);

  useEffect(() => {
    dispatch(Products());
  }, [dispatch]);

  interface DataType {
    key: string,
    name: string,
    company: string,
    category: string,
    price: string,
    description: string,
    imageUrl: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
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
      name: product.name,
      company: product.company,
      category: product.category,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    }
  })

  function handleSearchChange(value: string): void {
    setSearch(value);
    searchProducts(value.toLowerCase()).then((response) => {
      setFilteredData(response?.data || []);
    }).catch((error) => {
      console.error(error);
      setFilteredData([]);
    });
  }

  const newData: DataType[] = data.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  ).map((product) => {
    return {
      key: product.key,
      name: product.name,
      company: product.company,
      category: product.category,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl
    };
  });

  function renderAdd(): JSX.Element {
    function handleAdd(): void {
      addProducts(newProduct).then(response => {
        getAllProducts().then(response => {
          dispatch(Products())
        });
        response?.success && notification.success({
          placement: "bottomRight",
          message: "New Product Added",
          description: <Typography.Text style={{ display: "inline-flex", gap: 5, color: colors.grayColor }}>{newProduct.name} has been added to the list.</Typography.Text>,
          style: { position: 'relative', zIndex: 3000 }
        });
      })
      setClearProduct(true);
      setAddModelState(false);
    }

    return (
      <>
        <CommonButton backgroundColor={colors.grayColor} onClick={() => setAddModelState(true)}>
          <Typography.Text style={{ color: colors.lightGrayColor }}>Add Product</Typography.Text>
        </CommonButton>
        <AddProductModal modelOpen={addModelState} setModel={setAddModelState} onOk={handleAdd} clearProduct={clearProduct} onAddProduct={setNewProduct} />
      </>
    )
  }

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

  function handleEdit(): void {
    editProduct(editProductDetails).then((response) => {
      getAllProducts().then( response => {
        dispatch(Products());
      })
        notification.success({
          placement: "bottomRight",
          message: "Product updated successfully"
      })
  })
    setEditModelState(false);
  }

  function renderDelete(productId: string): JSX.Element {
    const handleDelete = () => {
      deleteProduct(productId).then(response => {
        getAllProducts().then( response => {
          dispatch(Products());
        })
        notification.success({
          placement: "bottomRight",
          message: "Successfuly deleted"
        }) 
      })           
    }

    return (
      <>
        <Popconfirm 
          title={labelConst.DELETE_PRODUCT}
          icon={<FaQuestionCircle size={14} color={"red"}/>}
          onConfirm={handleDelete}        
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
          <Input prefix suffix={<MdSearch size={20} color={colors.transparentGrey} />} value={search} onChange={(e) => handleSearchChange(e.target.value)} placeholder={labelConst.SEARCH} style={{ width: '25rem' }} />
        </Col>
        {renderAdd()}
      </Header>
      <Content className='admin-screen-content' style={{ backgroundColor: "#f0f0f0", height: "90vh", padding: "1rem 3.5rem" }}>
        <Table bordered dataSource={newData} columns={columns} scroll={{ y: "50vh" }} />
      </Content>
      <ViewProductModal modelOpen={viewModelState} setModel={setViewModelState} product={selectedProduct} />
      <EditProductModal modelOpen={editModelState} setModel={setEditModelState} product={selectedProduct} onOk={handleEdit} onEditModal={setEditProductDetails} />
    </>
  )
}

export default AdminProductInfo;