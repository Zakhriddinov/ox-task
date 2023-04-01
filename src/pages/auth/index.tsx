import { Content, FormWrapper, PageAuth } from './style';
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ApartmentOutlined, LockOutlined } from '@ant-design/icons/lib/icons';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../features/auth/authSlice';
import { useEffect } from 'react';
import { Spin } from 'antd';

const AuthPage = () => {
   const dispatch = useAppDispatch();

   const { isLoading, isSuccess, isAuthenticated, status } = useAppSelector((state) => state.auth);
   const navigate = useNavigate();

   const onSubmit = (values: any) => {
      dispatch(login(values));
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
   };
   const [form] = Form.useForm();

   useEffect(() => {
      if (!isAuthenticated) return;
      navigate('/');
   }, [isAuthenticated]);

   if (isLoading) {
      <Spin size="large" className="overlay" delay={300} />;
   }
   useEffect(() => {
      if (isSuccess) {
         dispatch(reset());
      }
   }, [isSuccess, dispatch]);
   return (
      <PageAuth>
         <Content>
            <h2>Login</h2>
            <FormWrapper
               layout="vertical"
               name="basic"
               form={form}
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               initialValues={{ remember: true }}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
               onFinish={onSubmit}
            >
               <FormWrapper.Item
                  label="User name"
                  name="_username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
               >
                  <Input
                     placeholder="User name"
                     prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.45)' }} />}
                     name="_username"
                  />
               </FormWrapper.Item>

               <FormWrapper.Item
                  label="Password"
                  name="_password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
               >
                  <Input.Password
                     placeholder="Enter your password"
                     prefix={<LockOutlined style={{ color: 'rgba(0, 0, 0, 0.45)' }} />}
                  />
               </FormWrapper.Item>

               <FormWrapper.Item
                  label="Subdomain"
                  name="_subdomain"
                  rules={[{ required: true, message: 'Please input your subdomain!' }]}
               >
                  <Input
                     placeholder="Subdomain"
                     prefix={<ApartmentOutlined style={{ color: 'rgba(0, 0, 0, 0.45)' }} />}
                  />
               </FormWrapper.Item>

               <FormWrapper.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                     Login
                  </Button>
               </FormWrapper.Item>
            </FormWrapper>
         </Content>
      </PageAuth>
   );
};

export default AuthPage;
