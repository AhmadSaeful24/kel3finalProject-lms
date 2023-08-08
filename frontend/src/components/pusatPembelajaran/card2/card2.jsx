import "./card2.css"
import { Card } from "antd";
import { EyeOutlined, StarOutlined, CommentOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';


const card2 = () => {
    return (
        <div className="card">
            <Card 
            style={{
                width: 300,
                marginLeft: 50
            }}
            actions={[
            <EyeOutlined></EyeOutlined>,
            <StarOutlined></StarOutlined>,
            <CommentOutlined></CommentOutlined>
            
            ]}
            cover={
                <div
                    style={{
                        height: 150,
                        width: "100%",
                        fontSize: 15,
                        paddingLeft: 70,
                        paddingTop: 50
                    }}>
                        Sampul Latihan
                </div>
            }
            >
                <h1 style={{
                    fontWeight: "bold"
                }}>Judul Pelatihan</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque delectus corporis, id quaerat aliquam vitae </p> <br />
                <p>Dibuat Oleh:</p>
                <p>Untuk: </p>
            </Card>
            <Button>Default Button</Button>
        </div>
    )
}

export default card2;