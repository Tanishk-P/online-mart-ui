import React, { useEffect } from 'react';
import { Col, Divider, Dropdown, Input, MenuProps, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/CommonButton";
import CommonHeader from "../components/CommonHeader";
import Logo from "../components/Logo";
import { colors } from "../utls/Color";
import * as labelConst from "../utls/Labels";
import { PageRoutes } from "../utls/PageRoutes";
import { UserDetails } from '../store/UserDetailsState/UserDetailsActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import { IUser } from '../models/IUser';
import { MdSearch } from 'react-icons/md';

function HomeHeader({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (query: string) => void }) {

    const navigate = useNavigate();
    const user: IUser = useSelector((state: IAppState) => state.userDetailState);
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(UserDetails());
    }, [dispatch]);

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

    const onLogout = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
    }

    return (
        <Row>
            <div className="home-header">
                <Col offset={1} className="title">
                    <Logo />
                    <CommonHeader level={2} title='Needs' color={colors.lightGrayColor} margin={'0'} />
                </Col>
                <Col offset={2} className="search">
                    <CommonButton type="text" onClick={() => navigate(PageRoutes.home)}>
                        <CommonHeader level={5} title={labelConst.PRODUCT_LIST} color={colors.lightGrayColor} margin={'0'} width={'12vw'} />
                    </CommonButton>
                    {/* <div style={{ cursor: "pointer" }}>
                            <Dropdown placement="bottom" overlayStyle={{ zIndex: "3000" }} menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}><AiFillFilter size={25} color={colors.lightGrayColor} /></Dropdown>
                        </div> */}
                    <Input suffix={<MdSearch size={20} color={colors.darkGray} />} prefix placeholder={labelConst.SEARCH} size="large" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </Col>
                <Col offset={!localStorage.getItem("authToken") ? 1 : 2} className="contain-center">
                    {!localStorage.getItem('authToken') ?
                        (<div key='no-user' style={{ display: 'flex', alignItems: 'center' }}>
                            <Divider type="vertical" style={{ margin: 0, height: "4vh", backgroundColor: colors.mediumGrayColor }} />
                            <CommonButton type={"text"} onClick={() => navigate(PageRoutes.login)}>
                                <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_IN}</Typography.Text>
                            </CommonButton>
                            <Divider type="vertical" style={{ margin: 0, height: "4vh", backgroundColor: colors.mediumGrayColor }} />
                            <CommonButton type={"text"} onClick={() => navigate(PageRoutes.signUp)}>
                                <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_UP}</Typography.Text>
                            </CommonButton>
                        </div>) :
                        (<div key='user' style={{ display: 'flex', alignItems: "center", position: 'fixed' }}>
                            <Typography.Text style={{ marginRight: 10, color: colors.lightGrayColor, fontWeight: 400 }}>Hello, {user?.name}</Typography.Text>
                            <Divider type="vertical" style={{ height: "4vh", backgroundColor: colors.mediumGrayColor }} />
                            <CommonButton type={"text"} onClick={() => onLogout()}>
                                <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_OUT}</Typography.Text>
                            </CommonButton>
                        </div>)}
                </Col>
            </div>
        </Row>
    )
}

export default HomeHeader;