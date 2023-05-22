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
        {/* <CommonHeader level={4} title={labelConst.PRODUCT_INFO} /> */}
        {/* <Divider style={{ margin: 0}} />   */}
            <Row gutter={12}>
                <Col>
                    <Typography.Title level={3} >{labelConst.PRODUCT_NAME}</Typography.Title>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col offset={1}>
                    <Typography.Text>{labelConst.COMPANY}</Typography.Text>
                </Col>                              
            </Row>
            <div style={{ marginTop: 12}}/>
            <Row gutter={16}>
                <Col offset={1}>
                    <Typography.Text>{labelConst.CATEGORY}</Typography.Text>
                </Col>  
                <Col offset={2}>
                    <Typography.Text>{labelConst.PRICE}</Typography.Text>
                </Col>
            </Row>
            <div style={{ marginTop: 12}}/>
            <Row >
                <Col offset={1}>
                    <Typography.Text>{labelConst.DESCRIPTION}</Typography.Text>
                </Col>
            </Row>
            <div style={{ marginTop: 12}}/>
            <Row>
                
            </Row>
        <Divider />
      </Modal>
    </>
  )
}

export default ViewProductModal;