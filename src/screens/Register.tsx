import { Col, Row, Typography } from 'antd';
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';
import { AiFillDatabase } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import * as labelConst from "../utls/Labels" 
import { Link, useNavigate } from 'react-router-dom';
import { PageRoutes } from '../utls/PageRoutes';
import { colors } from '../utls/Color';
import Logo from '../components/Logo';
import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';

function Register() {
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, SetPassword] = useState<string>();
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

  return (
    <div className='app'>
      <Row>
        <Col offset={8}>
          <div className='container'>
              <div className='contain-center-with-gap' onClick={() => navigate(PageRoutes.home)} style={{ cursor: "pointer"}}>
                <Logo />
                <CommonHeader level={1} title={labelConst.NEEDS} />
              </div>
              <Typography.Text className='contain-center'>{labelConst.REGISTER}</Typography.Text>
              <CommonInput label={labelConst.NAME} placeholder={labelConst.PLACEHOLDER_NAME} value={username} name={username} type='username' prefix={<AiFillDatabase />} handleChangeText={(text: string) => {
                setUsername(text);
              }} />
              <CommonInput label={labelConst.EMAIL} placeholder={labelConst.PLACEHOLDER_EMAIL} value={email} name={email} type='email' prefix={<SiGmail />} handleChangeText={(text: string) => {
                setEmail(text);
              }} />
              <CommonInput label={labelConst.PASSWORD} placeholder={labelConst.PLACEHOLDER_PASSWORD} value={password} type='password' prefix={<RiLockPasswordFill />} handleChangeText={(text: string) => {
                SetPassword(text);
              }} />
              <div style={{ marginTop: 30 }}>
                <CommonButton type='primary' block >{labelConst.REGISTER}</CommonButton>
              </div>
              <div style={{ marginTop: 30, display: "flex", justifyContent: "center", alignItems: "center"}}>
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