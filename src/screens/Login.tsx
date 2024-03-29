import { Col, Row, Typography, message } from 'antd'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';
import { RiLockPasswordFill } from 'react-icons/ri'
import * as labelConst from "../utls/Labels"
import { Link, useNavigate } from 'react-router-dom';
import { PageRoutes } from '../utls/PageRoutes';
import { colors } from '../utls/Color';
import Logo from '../components/Logo';
import { SiGmail } from 'react-icons/si';
import { IInputError } from '../models/IInputError';
import { getUserDetails, login } from '../services/ApiActions';
import { IUser } from '../models/IUser';
import { getErrorText, validateEmail } from '../utls/Helper';

function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, SetPassword] = useState<string>('');
  const [error, setError] = useState<IInputError[]>([]);
  const navigate = useNavigate();

  function onLogin(): void {
    if (validation()) {
      login(email, password).then(response => {
        if (response?.success) {
          message.success('Login successfull')
          getUserDetails().then(response => {
            // console.log('user role is', response?.data?.role);
            { response?.data?.role == 1 ? navigate(PageRoutes.adminOrder) : navigate(PageRoutes.home) }
          })
        }
      })
    }
  }

  function validation(): boolean {
    let validated = true;
    const validationError: IInputError[] = Object.assign([], error)
    if (!validateEmail(email)) {
      validationError.push({
        errorText: "Please enter valid email address",
        name: 'email'
      })
      validated = false;
    }
    if (password?.trim?.() === '') {
      validationError.push({
        errorText: 'Please enter valid password',
        name: 'password',
      })
      validated = false;
    }
    setError(validationError);
    validationError && message.error('Something went wrong');
    return validated;
  }

  return (
    <div className='app'>
      <Row>
        <Col offset={8}>
          <div className='container'>
            <div className='contain-center-with-gap' onClick={() => navigate(PageRoutes.home)} style={{ cursor: "pointer" }}>
              <Logo />
              <CommonHeader level={1} title={labelConst.NEEDS} />
            </div>
            <Typography.Text className='contain-center'>{labelConst.WELCOME}</Typography.Text>
            <CommonInput status={getErrorText('email', error) ? 'error' : ''} errorText={getErrorText('email', error)} label={labelConst.EMAIL} placeholder={labelConst.LOGIN_EMAIL} value={email} type='email' prefix={<SiGmail />} handleChangeText={(text: string) => {
              setEmail(text);
              setError([]);
            }} />
            <CommonInput status={getErrorText('password', error) ? 'error' : ''} errorText={getErrorText('password', error)} label={labelConst.PASSWORD} placeholder={labelConst.LOGIN_PASSWORD} value={password} type='password' prefix={<RiLockPasswordFill />} handleChangeText={(text: string) => {
              SetPassword(text);
              setError([]);
            }} />
            <div style={{ marginTop: 30 }}>
              <CommonButton type='primary' block onClick={() => onLogin()}>{labelConst.LOGIN}</CommonButton>
            </div>
            <div style={{ marginTop: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {labelConst.SIGNUP_MSG}
              <Link to={PageRoutes.signUp}>
                <Typography style={{ fontWeight: '400', color: colors.primaryColor, cursor: 'pointer', paddingLeft: 4 }} >{labelConst.REGISTER}!</Typography>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Login;