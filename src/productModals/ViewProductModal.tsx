import { Col, Divider, Modal, Row, Typography } from 'antd';
import React from 'react';
import * as labelConst from '../utls/Labels';
import { TbBuildingBank } from 'react-icons/tb';
import { BiCategory, BiLink } from 'react-icons/bi';
import { MdCurrencyRupee, MdSubtitles } from 'react-icons/md';

interface DataType {
    key: string,
    product: string,
    company: string,
    category: string,
    price: string,
    description: string,
    imageUrl: string
  }

  interface ViewProductModalProps {
    modelOpen: boolean;
    setModel: (state: boolean) => void;
    product?: DataType;
  }

function ViewProductModal(props: (ViewProductModalProps)): JSX.Element {
    const  { modelOpen, setModel, product } = props;

  const handleOk = () => {
    setModel(false);
  };

  const handleCancel = () => {
    setModel(false);
  };


  return (
    <>
      <Modal title={labelConst.VIEW_PRODUCT} open={modelOpen} onOk={handleOk} onCancel={handleCancel}>
        <Row >
          <Col>
            <Typography.Title level={2} >{product?.product}</Typography.Title>
            <Row >
              <Col>
                <Typography.Text className='contain-center-with-gap'><TbBuildingBank size={18} />{product?.company}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row>
              <Col>
                <Typography.Text className='contain-center-with-gap'><BiCategory size={18} />{product?.category}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row>
              <Col>
                <Typography.Text className='contain-center-with-gap'><MdCurrencyRupee size={18} />{product?.price}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row >
              <Col>
                <Typography.Text className='contain-center-with-gap'><MdSubtitles size={18} />{product?.description}</Typography.Text>
              </Col>
            </Row>
            <div style={{ marginTop: 12 }} />
            <Row>
              {/* <Col>
                <Typography.Text className='contain-center-with-gap'><BiLink size={18} />{product?.imageUrl}</Typography.Text>
              </Col> */}
            </Row>
          </Col>
          <Col offset={1} style={{ marginTop: 65 }}>
            <img className='product-image-view' src={product?.imageUrl} alt='image' />
          </Col>
        </Row>
        <Divider />
      </Modal>
    </>
  )
}

export default ViewProductModal;