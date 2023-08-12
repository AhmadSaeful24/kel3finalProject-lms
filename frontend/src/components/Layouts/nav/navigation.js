import { Form, Input } from 'antd';
import { Menu, Button, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import React from 'react';
import "./nav.css"


function Nav() {
    return (
        // <div className="navb bg-white drop-shadow-xl">
        //         <Form className='nav w-80'>
        //             <Input className='border-black' placeholder='Cari Pelatihan ...'/>
        //         </Form>
        //             </div>

        <div>
      <div className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">My Website</div>
          <div className="md:hidden">
            <Space>
              <Button type="text" icon={<MenuOutlined />} />
            </Space>
          </div>
        </div>
      </div>

      {/* Hidden menu on small screens */}
      <div className="md:hidden">
        <Menu theme="dark" mode="vertical">
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </div>
    </div>
            );
}

export default Nav


