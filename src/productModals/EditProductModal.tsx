import { Col, Divider, Modal, Row, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import * as labelConst from '../utls/Labels';
import { TbBuildingBank } from 'react-icons/tb';
import { BiCategory, BiLink } from 'react-icons/bi';
import CommonInput from '../components/CommonInput';
import { MdCurrencyRupee, MdSubtitles, MdTitle } from 'react-icons/md';
import { IDataType } from '../models/IDatatype';

interface EditProductModalProps {
    modelOpen: boolean;
    setModel: (state: boolean) => void;
    product: IDataType;
    onOk: () => void;
    onEditModal: (details: IDataType) => void;
}

function EditProductModal(props: (EditProductModalProps)) {
    const { modelOpen, setModel, product, onOk, onEditModal } = props;
  const [productDetails, setProductDetails] = useState<IDataType>(product);

  useEffect(() => {
    setProductDetails(product);
  },[product])

  function handleChange (value: string, key: 'key' | 'name' | 'company' | 'category' | 'price' | 'description' | 'imageUrl' ) {
    const _productDetails: IDataType = {...productDetails};
    _productDetails[key] = value;
    setProductDetails(_productDetails);
    onEditModal(_productDetails);
  } 

  const handleCancel = () => {
    setModel(false);
  };


  return (
    <>
      <Modal title={labelConst.EDIT_PRODUCT} open={modelOpen} onOk={onOk} onCancel={handleCancel} okText={labelConst.EDIT_PRODUCT} >
      <CommonInput type='text' placeholder={labelConst.PRODUCT_NAME} prefix={<MdTitle />} value={productDetails.name} handleChangeText={(text: string) => {
          handleChange(text, 'name');
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
          handleChange(text, 'imageUrl');
        }} />
        <Divider />
      </Modal>
    </>
  )
}

export default EditProductModal;