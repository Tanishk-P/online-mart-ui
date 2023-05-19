import { Col, Input, Row, Typography, message } from 'antd';
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';
import { AiFillDatabase } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import * as labelConst from "../utls/Labels"
import { Link, useNavigate } from 'react-router-dom';
import { PageRoutes } from '../utls/PageRoutes';
import { colors } from '../utls/Color';
import Logo from '../components/Logo';
import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IInputError } from '../models/IInputError';
import { register } from '../services/ApiActions';
import { getErrorText, validateContact, validateEmail } from '../utls/Helper';

function Register() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState<number>()
  const [password, SetPassword] = useState<string>('');
  const [error, setError] = useState<IInputError[]>([]);
  const navigate = useNavigate();

  function onRegister(): void {
    console.log("clicked register", email, username, contact, password);
    if (validation()) {
      if (email && username && contact && password) {
        register(email, username, contact, password).then(response => {
          if (response?.success) {
            console.log('signed up', response?.data);
            navigate(PageRoutes.home);
          }
        }).catch(error => {
          console.log("error");
          setError(error);
        })
      }
    }
  }

  function validation(): boolean {
    let validated = true;
    const validationError: IInputError[] = Object.assign([], error);
    if (username?.trim?.() === '') {
      validationError.push({
        errorText: 'Add valid name',
        name: 'name'
      })
      validated = false;
    }
    if (!validateEmail(email)) {
      validationError.push({
        errorText: 'Add a valid email address',
        name: 'email'
      })
      validated = false;
    }
    if (!validateContact(contact)) {
      validationError.push({
        errorText: 'Add a valid phone number',
        name: 'contact'
      })
      validated = false;
    }
    if (password?.trim?.() === '' || password?.length < 4) {
      validationError.push({
        errorText: 'Add a valid password',
        name: 'password'
      })
      validated = false;
    }
    setError(validationError)
    validationError ? message.error('Unable to sign-up') : message.success('Successfully signed-up');
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
            <Typography.Text className='contain-center'>{labelConst.REGISTER}</Typography.Text>
            <CommonInput status={getErrorText('name', error) ? 'error' : ''} errorText={getErrorText('name', error)} label={labelConst.NAME} placeholder={labelConst.PLACEHOLDER_NAME} value={username} type='username' prefix={<AiFillDatabase />} handleChangeText={(text: string) => {
              setUsername(text);
              setError([]);
            }} />
            <CommonInput status={getErrorText('email', error) ? 'error' : ''} errorText={getErrorText('email', error)} label={labelConst.EMAIL_CONTACT} placeholder={labelConst.PLACEHOLDER_EMAIL} value={email} type='email' prefix={<SiGmail />} handleChangeText={(text: string) => {
              setEmail(text);
              setError([]);
            }} />
            <div style={{ marginTop: 5 }}>
              <Input status={getErrorText('contact', error) ? 'error' : ''} placeholder={labelConst.PLACEHOLDER_CONTACT} value={contact} maxLength={10} type='tel' prefix={<FaPhoneAlt />} style={{ marginTop: 4, borderRadius: 0 }} onChange={(e) => setContact(parseInt(e.target.value))} />
              {getErrorText('contact', error) && <Typography.Text type='danger'>{getErrorText('contact', error)}</Typography.Text>}
            </div>
            <CommonInput status={getErrorText('password', error) ? 'error' : ''} errorText={getErrorText('password', error)} label={labelConst.PASSWORD} placeholder={labelConst.PLACEHOLDER_PASSWORD} value={password} type='password' prefix={<RiLockPasswordFill />} handleChangeText={(text: string) => {
              SetPassword(text);
              setError([]);
            }} />
            <div style={{ marginTop: 30 }}>
              <CommonButton type='primary' block onClick={() => onRegister()}>{labelConst.REGISTER}</CommonButton>
            </div>
            <div style={{ marginTop: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {labelConst.LOGIN_MSG}
              <Link to={PageRoutes.login}>
                <Typography style={{ fontWeight: '400', color: colors.primaryColor, cursor: 'pointer', paddingLeft: 4 }} >{labelConst.LOGIN}!</Typography>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Register;