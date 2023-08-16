import React from 'react';
import { Form, Input, Menu } from 'antd';
import { BellOutlined } from '@ant-design/icons';

function Navbar() {
    return (
        <div className='drop-shadow-xl'>
            <Menu mode="horizontal">
                <h1 className="font-bold" style={{ marginLeft: "50px",marginTop: "9px", fontFamily: "bold", fontSize: "20px" }} >NusaLearning</h1>
                <Form className='nav w-80' style={{ marginLeft: "15rem", marginTop: "5px", marginBottom:"10px" }}>
                    <Input className='border-black' style={{height: "40px"}} placeholder='Cari Pelatihan ...' />
                </Form>
                <div className="ms" style={{ marginLeft: "30rem" }}>
                    <Menu.Item key="home" >
                        Beranda
                    </Menu.Item>
                    <Menu.Item key="search" >
                        Pelatihan
                    </Menu.Item>
                    <Menu.Item icon={< BellOutlined />}>
                    </Menu.Item>
                    <Menu.Item key="search" >
                        Login
                    </Menu.Item>
                </div>
            </Menu>
        </div>
    )
}

export default Navbar