import { Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';
import { RiLockPasswordFill } from 'react-icons/ri'
import * as labelConst from "../utls/Labels" 
import { Link } from 'react-router-dom';
import { PageRoutes } from '../utls/PageRoutes';
import { colors } from '../utls/Color';
import Logo from '../components/Logo';
import { SiGmail } from 'react-icons/si';

function Login() {

  const [email, setEmail] = useState<string>();
  const [password, SetPassword] = useState<string>();

  return (
    <>
      <Row>
        <Col offset={8}>
          <div className='container'>
              <div className='contain-center-with-gap'>
                <Logo />
                <CommonHeader level={1} title={labelConst.WELCOME} />
              </div>
              <CommonInput label={labelConst.EMAIL} placeholder={labelConst.PLACEHOLDER_EMAIL} value={email} prefix={<SiGmail />} handleChangeText={(text: string) => {
                setEmail(text);
              }} />
              <CommonInput label={labelConst.PASSWORD} placeholder={labelConst.PLACEHOLDER_PASSWORD} value={password} prefix={<RiLockPasswordFill /> } handleChangeText={(text: string) => {
                SetPassword(text);
              }} />
              <div style={{ marginTop: 30 }}>
                <CommonButton type='primary' block >{labelConst.LOGIN}</CommonButton>
              </div>
              <div style={{ marginTop: 30, display: "flex", justifyContent: "center", alignItems: "center"}}>
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