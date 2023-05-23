import { Col, Divider, Modal, Row, Typography, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import * as labelConst from '../utls/Labels';
import CommonHeader from '../components/CommonHeader';
import { TbBuildingBank } from 'react-icons/tb';
import { BiCategory, BiLink } from 'react-icons/bi';
import CommonInput from '../components/CommonInput';
import { MdCurrencyRupee, MdSubtitles, MdTitle } from 'react-icons/md';
import { addProducts, editProduct } from '../services/ApiActions';
import { colors } from '../utls/Color';

interface DataType {
    key: string,
    product: string,
    company: string,
    category: string,
    price: string,
    description: string,
    imageUrl: string
  }

interface EditProductModalProps {
    modelOpen: boolean;
    setModel: (state: boolean) => void;
    product: DataType;
}

function EditProductModal(props: (EditProductModalProps)) {
    const { modelOpen, setModel, product } = props;
  const [productName, setProductName] = useState<string>('');
  const [productCompany, setProductCompany] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');

  useEffect(() => {
    setImageURL(product?.imageUrl);
    setProductName(product?.product);
    setProductCategory(product?.category);
    setProductCompany(product?.company);
    setProductDescription(product?.description);
    setProductPrice(product?.price);
  },[product])

  const handleOk = () => {
    setModel(false);
    product?.key && editProduct(product?.key, productName, productCompany, productCategory, productPrice, productDescription, imageURL).then((response) => {
        notification.success({
            message: "Product updated successfully"
        })
    })
  };

  const handleCancel = () => {
    setModel(false);
  };


  return (
    <>
      <Modal title={labelConst.EDIT_PRODUCT} open={modelOpen} onOk={handleOk} onCancel={handleCancel} okText={labelConst.EDIT_PRODUCT} >
      <CommonInput type='text' placeholder={labelConst.PRODUCT_NAME} prefix={<MdTitle />} value={productName} handleChangeText={(text: string) => {
          setProductName(text);
        }} />
        <Row gutter={10}>
          <Col span={8}>
            <CommonInput placeholder={labelConst.COMPANY} type='text' prefix={<TbBuildingBank />} value={productCompany} handleChangeText={(text: string) => {
              setProductCompany(text);
            }} />
          </Col>
          <Col span={8}>
            <CommonInput placeholder={labelConst.CATEGORY} type='text' prefix={<BiCategory />} value={productCategory} handleChangeText={(text: string) => {
              setProductCategory(text);
            }} />
          </Col>
          <Col span={8}>
            <CommonInput placeholder={labelConst.PRICE} type='text' prefix={<MdCurrencyRupee />} value={productPrice} handleChangeText={(text: string) => {
              setProductPrice(text);
            }} />
          </Col>
        </Row>
        <CommonInput placeholder={labelConst.DESCRIPTION} prefix={<MdSubtitles />} value={productDescription} handleChangeText={(text: string) => {
          setProductDescription(text);
        }} />
        <CommonInput placeholder={labelConst.IMAGE_URL} type='url' prefix={<BiLink />} value={imageURL} handleChangeText={(text: string) => {
          setImageURL(text);
        }} />
        <Divider />
      </Modal>
    </>
  )
}

export default EditProductModal;