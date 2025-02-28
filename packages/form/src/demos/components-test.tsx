import React, { useRef } from 'react';

import { SmileOutlined } from '@ant-design/icons';
import ProForm, {
  ProFormSwitch,
  ProFormRadio,
  ProFormCheckbox,
  ProFormUploadButton,
  ProFormField,
  ProFormSlider,
  ProFormUploadDragger,
} from '@ant-design/pro-form';
import LightWrapper from '../BaseForm/LightWrapper';

const Demo = () => {
  const formRef = useRef();
  return (
    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        range: 5,
        name: 'qixian',
      }}
      formRef={formRef}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormUploadButton
        name="upload"
        icon={<SmileOutlined />}
        label="Upload"
        title="点击上传"
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormRadio name="test" />
      <ProFormCheckbox name="test2" />
      <ProFormSwitch width="l" label="是否打开" />
      <ProFormUploadDragger
        title="拖动上传"
        icon={<SmileOutlined />}
        description="支持 text"
        label="Dragger"
        name="dragger"
        fieldProps={{
          showUploadList: true,
        }}
      />
      <LightWrapper valuePropName="value">test</LightWrapper>
      <LightWrapper valuePropName="value">test</LightWrapper>
      <ProFormSlider name="range" label="范围" />
      <ProFormField>test</ProFormField>
    </ProForm>
  );
};

export default Demo;
