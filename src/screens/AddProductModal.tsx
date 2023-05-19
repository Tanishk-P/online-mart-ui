import { Col, Divider, Modal, Row, Typography, notification } from 'antd';
import React, { useState, useEffect } from 'react';
import * as labelConst from '../utls/Labels';
import CommonHeader from '../components/CommonHeader';
import { TbBuildingBank } from 'react-icons/tb';
import { BiCategory, BiLink } from 'react-icons/bi';
import CommonInput from '../components/CommonInput';
import { MdCurrencyRupee, MdSubtitles, MdTitle } from 'react-icons/md';
import { addProducts } from '../services/ApiActions';
import { colors } from '../utls/Color';

function AddProductModal({ modelOpen, setModel }: { modelOpen: boolean, setModel: (arg0: boolean) => void }) {
  const [productName, setProductName] = useState<string>('');
  const [productCompany, setProductCompany] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');

  function _addProduct() {
    addProducts(productName, productCompany, productCategory, productPrice, productDescription, imageURL).then(response => {
      notification.success({
        placement: "bottomRight",
        message: "New Product Added",
        description: <Typography.Text style={{ display: "inline-flex", gap: 5, color: colors.grayColor }}>{productName} has been added to the list.</Typography.Text>,
        style: { position: 'relative', zIndex: 3000 }
      });
    })
  }

  const handleOk = () => {
    setModel(false);
    _addProduct();
    setImageURL("");
    setProductName("");
    setProductCategory("");
    setProductCompany("");
    setProductDescription("");
    setProductPrice("");
  };

  const handleCancel = () => {
    setModel(false);
  };


  return (
    <>
      <Modal open={modelOpen} onOk={handleOk} onCancel={handleCancel} okText={labelConst.ADD_PRODUCT} >
        <CommonHeader level={3} title={labelConst.ADD_PRODUCT} />
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

export default AddProductModal;