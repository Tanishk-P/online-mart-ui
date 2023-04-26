import { Col, Row, Typography } from 'antd'
import React from 'react'
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';
import * as labelConst from "../utls/Labels" 
import { Link } from 'react-router-dom';
import { PageRoutes } from '../utls/PageRoutes';
import { colors } from '../utls/Color';

function Login() {
  return (
    <>
      <Row>
        <Col offset={8}>
          <div className='container'>
              <div className='contain-center'>
                <CommonHeader level={1} title={labelConst.WELCOME} />
              </div>
              <CommonInput label={labelConst.EMAIL} handleChangeText={(text: string) => {}} />
              <CommonInput label={labelConst.PASSWORD} handleChangeText={(text: string) => {}} />
              <div style={{ marginTop: 30 }}>
                <CommonButton type='primary' block >{labelConst.LOGIN}</CommonButton>
              </div>
              <div style={{ marginTop: 30, display: "inline-flex", alignItems: "center"}}>
                {labelConst.SIGNUP_MSG} 
                <Link to={PageRoutes.signUp}>
                  <Typography style={{ fontWeight: '400', color: colors.primaryColor, cursor: 'pointer', paddingLeft: 4 }} >{labelConst.REGISTER}!</Typography>  
                </Link>
              </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Login;