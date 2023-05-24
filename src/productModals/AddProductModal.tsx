import { Col, Divider, Modal, Row, Typography, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import * as labelConst from '../utls/Labels';
import { TbBuildingBank } from 'react-icons/tb';
import { BiCategory, BiLink } from 'react-icons/bi';
import CommonInput from '../components/CommonInput';
import { MdCurrencyRupee, MdSubtitles, MdTitle } from 'react-icons/md';
import { addProducts } from '../services/ApiActions';
import { colors } from '../utls/Color';
import { IProduct } from '../models/IProduct';

interface AddProductInterface {
  modelOpen: boolean,
  setModel: (arg0: boolean) => void,
  onOk?: object
}

function AddProductModal(props: AddProductInterface) {
  const { modelOpen, setModel, onOk } = props;
  const [productDetails, setProductDetails] = useState<IProduct>({} as IProduct);

  function handleChange(value: string, key: 'name' | 'company' | 'category' | 'price' | 'description' | 'imageUrl') {
    const _productDetails : IProduct = {...productDetails};
    _productDetails[key] = value;
    setProductDetails(_productDetails);
  }

  function _addProduct() {
    addProducts(productDetails).then(response => {
      response?.success && notification.success({
        placement: "bottomRight",
        message: "New Product Added",
        description: <Typography.Text style={{ display: "inline-flex", gap: 5, color: colors.grayColor }}>{productDetails.name} has been added to the list.</Typography.Text>,
        style: { position: 'relative', zIndex: 3000 }
      });
    })
  }

  const handleOk = () => {
    setModel(false);
    _addProduct();
    setProductDetails({} as IProduct);
  };

  const handleCancel = () => {
    setModel(false);
  };


  return (
    <>
      <Modal title={labelConst.ADD_PRODUCT} open={modelOpen} onOk={handleOk} onCancel={handleCancel} okText={labelConst.ADD_PRODUCT} >
        <CommonInput type='text' placeholder={labelConst.PRODUCT_NAME} prefix={<MdTitle />} value={productDetails?.name} handleChangeText={(text: string) => {
          handleChange(text, 'name')
        }} />
        <Row gutter={10}>
          <Col span={8}>
            <CommonInput placeholder={labelConst.COMPANY} type='text' prefix={<TbBuildingBank />} value={productDetails.company} handleChangeText={(text: string) => {
              handleChange(text, 'company');
            }} />
          </Col>
          <Col span={8}>
            <CommonInput placeholder={labelConst.CATEGORY} type='text' prefix={<BiCategory />} value={productDetails.category} handleChangeText={(text: string) => {
              handleChange(text, 'category');
            }} />
          </Col>
          <Col span={8}>
            <CommonInput placeholder={labelConst.PRICE} type='text' prefix={<MdCurrencyRupee />} value={productDetails.price} handleChangeText={(text: string) => {
              handleChange(text, 'price');
            }} />
          </Col>
        </Row>
        <CommonInput placeholder={labelConst.DESCRIPTION} prefix={<MdSubtitles />} value={productDetails.description} handleChangeText={(text: string) => {
          handleChange(text, 'description');
        }} />
        <CommonInput placeholder={labelConst.IMAGE_URL} type='url' prefix={<BiLink />} value={productDetails.imageUrl} handleChangeText={(text: string) => {
          handleChange(text, "imageUrl");
        }} />
        <Divider />
      </Modal>
    </>
  )
}

export default AddProductModal;