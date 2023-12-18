import { Button, Form, Input, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "images/logo.png";
import useUsername from "utils/username";

const notWithAuth = (WrappedComponent: React.FC) => {
  return () => {
    const { username } = useUsername();
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
  const { setUsername } = useUsername();
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
    <div>
      <div className="flex justify-center">
        <img src={logo} className="w-[75%]" alt="Logo" />
      </div>
      <div className="font-medium">
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
          label={<span className="font-medium">Tài khoản đăng nhập</span>}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản đăng nhập!",
            },
          ]}
        >
          <Input placeholder="Nhập tài khoản" className="font-medium h-12" />
        </Form.Item>
        <Form.Item
          name="password"
          label={<span className="font-medium">Mật khẩu</span>}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password
            placeholder="Nhập mật khẩu"
            className="font-medium h-12"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="font-medium h-12 mt-2 btnLogin">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>

      <Modal
        className="mt-20"
        title="Sai mật khẩu"
        visible={isShowModalLoginFail}
        onOk={() => setIsShowModalLoginFail(false)}
        okType="default"
        onCancel={() => setIsShowModalLoginFail(false)}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>Vui lòng đăng nhập lại</p>
      </Modal>
    </div>
  );
};

export const LoginNotWithAuth = notWithAuth(Login);
