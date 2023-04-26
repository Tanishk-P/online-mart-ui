import { Col, Row, Typography } from 'antd';
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';
import * as labelConst from "../utls/Labels" 
import { Link } from 'react-router-dom';
import { PageRoutes } from '../utls/PageRoutes';
import { colors } from '../utls/Color';

function Register() {
  return (
    <>
      <Row>
        <Col offset={8}>
          <div className='container'>
              <div className='contain-center'>
                <CommonHeader level={1} title={labelConst.REGISTER} />
              </div>
              <CommonInput label={labelConst.NAME} handleChangeText={(text: string) => {}} />
              <CommonInput label={labelConst.EMAIL} handleChangeText={(text: string) => {}} />
              <CommonInput label={labelConst.PASSWORD} handleChangeText={(text: string) => {}} />
              <div style={{ marginTop: 30 }}>
                <CommonButton type='primary' block >{labelConst.REGISTER}</CommonButton>
              </div>
              <div style={{ marginTop: 30, display: "inline-flex", alignItems: "center"}}>
                {labelConst.LOGIN_MSG} 
                <Link to={PageRoutes.login}>
                  <Typography style={{ fontWeight: '400', color: colors.primaryColor, cursor: 'pointer', paddingLeft: 4 }} >{labelConst.LOGIN}!</Typography>  
                </Link>
              </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Register;