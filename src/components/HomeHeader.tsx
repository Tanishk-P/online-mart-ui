import React, { useEffect, useState } from 'react';
import { Avatar, Col, Divider, Dropdown, Input, MenuProps, Row, Typography } from "antd";
import { AiFillFilter, AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
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
import { getUserDetails } from '../services/ApiActions';
import { MdSearch } from 'react-icons/md';

function HomeHeader({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (query: string) => void }) {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState<IUser>();
    const user: IUser | undefined = useSelector((state : IAppState )=> state.userDetailState);
    const dispatch = useDispatch();

    // console.log('hello', user)          

    useEffect(() => {
        _fetchUserDetails();
    }, [])

    const _fetchUserDetails = () => {
        getUserDetails().then((response) => {
            // console.log('This is the user details', response.data);            
            setUserDetails(response?.data);
        })
    }

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
                        {/* <div style={{ cursor: "pointer" }}>
                            <Dropdown placement="bottom" overlayStyle={{ zIndex: "3000" }} menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}><AiFillFilter size={25} color={colors.lightGrayColor} /></Dropdown>
                        </div> */}
                        <Input suffix={<MdSearch size={20} color={colors.darkGray} />} prefix placeholder={labelConst.SEARCH} size="large" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    </div>
                    <div className="contain-center">                        
                        { !localStorage.getItem('authToken') ? 
                        (<div style={{ display: 'flex', alignItems: 'center'}}>
                            <Divider type="vertical" style={{ margin: 0, height: "4vh", backgroundColor: colors.mediumGrayColor }}/>
                                <CommonButton type={"text"} onClick={() => navigate(PageRoutes.login)}> 
                                    <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_IN}</Typography.Text> 
                                </CommonButton>
                            <Divider type="vertical" style={{ margin: 0, height: "4vh", backgroundColor: colors.mediumGrayColor }}/>
                                <CommonButton type={"text"} onClick={() => navigate(PageRoutes.signUp)}> 
                                    <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_UP}</Typography.Text> 
                                </CommonButton>
                        </div>) :
                        (<div style={{ display: 'flex', alignItems: "center"}}>
                                    <Typography.Text style={{ marginRight: 10, color: colors.lightGrayColor, fontWeight: 400 }}>Hello, {userDetails?.name}</Typography.Text>                                
                            <Divider type="vertical" style={{ height: "4vh", backgroundColor: colors.mediumGrayColor }}/>     
                                <CommonButton type={"text"} onClick={() => onLogout()}> 
                                    <Typography.Text style={{ color: colors.lightGrayColor, fontWeight: 400 }}>{labelConst.SIGN_OUT}</Typography.Text> 
                                </CommonButton>
                        </div>)}
                                                    
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default HomeHeader;