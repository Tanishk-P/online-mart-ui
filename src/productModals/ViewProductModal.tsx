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
import food from '../images/food.jpg'

function ViewProductModal({ modelOpen, setModel }: { modelOpen: boolean, setModel: (arg0: boolean) => void }) {
  const [productName, setProductName] = useState<string>('');
  const [productCompany, setProductCompany] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');

  const handleOk = () => {
    setModel(false);
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
      <Modal title={labelConst.VIEW_PRODUCT} open={modelOpen} onOk={handleOk} onCancel={handleCancel}>
        <Row gutter={20} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Col>
            <Typography.Title level={3} >{labelConst.PRODUCT_NAME}</Typography.Title>
            <Row gutter={16}>
              <Col>
                <Typography.Text className='contain-center-with-gap'><TbBuildingBank size={18} />{labelConst.COMPANY}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row gutter={16}>
              <Col>
                <Typography.Text className='contain-center-with-gap'><BiCategory size={18} />{labelConst.CATEGORY}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row>
              <Col>
                <Typography.Text className='contain-center-with-gap'><MdCurrencyRupee size={18} />{labelConst.PRICE}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row >
              <Col>
                <Typography.Text className='contain-center-with-gap'><MdSubtitles size={18} />{labelConst.DESCRIPTION}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row>
              <Col>
                <Typography.Text className='contain-center-with-gap'><BiLink size={18} />{labelConst.IMAGE_URL}</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col offset={4} style={{ marginTop: 65 }}>
            <img className='product-image' src={food} alt='image' />
          </Col>
        </Row>

        <Divider />
      </Modal>
    </>
  )
}

export default ViewProductModal;