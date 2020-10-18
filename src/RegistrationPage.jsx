import React from "react";
import { Form, Input, Button, Select } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const { TextArea } = Input;

const Margins = styled.div`
  margin: 100px;
  margin-left: 300px;
  margin-right: 300px;
`;

function RegistrationPage() {
  let history = useHistory();

  let findBuddies = () => {
    history.push("/matching");
  };

  let onFinish = (values) => {
    findBuddies();
  };
  let onFinishFailed = (errorInfo) => {};

  return (
    <Margins>
      <h1>Registration</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="First name"
          name="firstname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="lastname"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Select>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="nonbinary">Non-binary</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Preferred workout area"
          name="workouttype"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select>
            <Select.Option value="like">I like everything</Select.Option>
            <Select.Option value="abs">Abs</Select.Option>
            <Select.Option value="arms">Arms</Select.Option>
            <Select.Option value="back">Back</Select.Option>
            <Select.Option value="butt">Butt</Select.Option>
            <Select.Option value="legs">Legs</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="About Me" name="aboutme">
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Margins>
  );
}

export default RegistrationPage;
