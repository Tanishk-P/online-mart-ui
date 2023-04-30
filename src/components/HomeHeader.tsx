import { Avatar, Col, Divider, Dropdown, Input, MenuProps, Row, Typography } from "antd";
import { AiFillFilter, AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import CommonButton from "../components/CommonButton";
import CommonHeader from "../components/CommonHeader";
import Logo from "../components/Logo";
import { colors } from "../utls/Color";
import * as labelConst from "../utls/Labels";
import { PageRoutes } from "../utls/PageRoutes";

function HomeHeader() {
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: 'Product 1',
        },
        {
          key: '2',
          label: 'Product 2',
        },
        {
          key: '3',
          label: 'Product 3',
        },
      ];

    return (
        <Row>
            <Col>
                <div className="home-header">
                    <div className="title">
                        <Logo />
                       <CommonHeader level={2} title='Needs' color={colors.lightGrayColor} margin={'0'}/> 
                    </div>
                    <div className="search">
                        <CommonButton type="text" onClick={() => navigate(PageRoutes.home)}>
                            <CommonHeader level={5} title={labelConst.PRODUCT_LIST} color={colors.lightGrayColor} margin={'0'} width={'12vw'} />
                        </CommonButton>
                        <div style={{ cursor: "pointer" }}>
                            <Dropdown placement="bottom" overlayStyle={{ zIndex: "3000" }} menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}><AiFillFilter size={25} color={colors.lightGrayColor} /></Dropdown>
                        </div>
                        <Input.Search size="large" />
                    </div>
                    <div className="contain-center">
                        <Divider type="vertical" style={{ margin: 0, height: "4vh", backgroundColor: colors.mediumGrayColor }}/>
                            <CommonButton type={"text"} onClick={() => navigate(PageRoutes.login)}> 
                                <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_IN}</Typography.Text> 
                            </CommonButton>
                        <Divider type="vertical" style={{ margin: 0, height: "4vh", backgroundColor: colors.mediumGrayColor }}/>
                            <CommonButton type={"text"} onClick={() => navigate(PageRoutes.signUp)}> 
                                <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_UP}</Typography.Text> 
                            </CommonButton>
                        {/* <Divider type="vertical" style={{ height: "4vh", backgroundColor: colors.mediumGrayColor }}/>
                            <Avatar size={"default"} style={{ backgroundColor: colors.lightGrayColor, color: colors.darkGray, cursor: "pointer" }} icon={<AiOutlineUser />}></Avatar> */}
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default HomeHeader;