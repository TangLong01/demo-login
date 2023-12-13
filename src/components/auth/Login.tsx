import { Button, Form, Input, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../images/bg-login.png";
import logo from "../../images/logo.png";
import useStore from "../../utils/store";
import "./login.scss";

const notWithAuth = (WrappedComponent: React.FC) => {
  return () => {
    const { username } = useStore();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (localStorage.getItem("username") && username !== "") {
        setLoading(true);
        navigate("/");
      } else {
        setLoading(false);
      }
    }, [username, navigate]);

    return loading ? <Spin size="large" /> : <WrappedComponent />;
  };
};

const Login: React.FC = () => {
  const { setUsername } = useStore();
  const [isShowModalLoginFail, setIsShowModalLoginFail] = useState(false);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleLogin = (values: { username: string; password: string }) => {
    if (values.username === values.password) {
      setUsername(values.username);
      navigate("/");
    } else {
      setIsShowModalLoginFail(true);
    }
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
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
            <Input
              placeholder="Nhập tài khoản"
              style={{ fontWeight: 600, height: "50px" }}
            />
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
            <Input.Password
              placeholder="Nhập mật khẩu"
              style={{ height: "50px" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              style={{ fontWeight: 500, height: "50px", marginTop: "6px" }}
            >
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

export const LoginNotWithAuth = notWithAuth(Login);
