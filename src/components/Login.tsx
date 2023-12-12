import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import bg from "../images/bg-login.png";
import logo from "../images/logo.png";
import useStore from "../utils/store";

export const Login: React.FC = () => {
  const { username, setUsername } = useStore();
  const [isShowModalLoginFail, setIsShowModalLoginFail] = useState(false);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleLogin = (values: { username: string; password: string }) => {
    if (values.username === values.password) {
      setUsername(values.username);
      navigate("/home");
    } else {
      setIsShowModalLoginFail(true);
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="form">
        <div className="divLogo">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="text">
          Nhập thông tin của bạn để truy cập vào hệ thống của Chi nhánh
        </div>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={handleLogin}
        >
          <Form.Item
            name="username"
            label={<span style={{ fontWeight: 500 }}>Tài khoản đăng nhập</span>}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản đăng nhập!",
              },
            ]}
          >
            <Input placeholder="Nhập tài khoản" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span style={{ fontWeight: 500 }}>Mật khẩu</span>}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" style={{ fontWeight: 500 }}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title="Sai mật khẩu"
        visible={isShowModalLoginFail}
        onOk={() => setIsShowModalLoginFail(false)}
        cancelButtonProps={{ style: { display: "none" } }}
      ></Modal>
    </div>
  );
};
