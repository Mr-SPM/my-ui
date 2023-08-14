import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Space } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import classNames from 'classnames';
import React from 'react';
import './style.less';

export interface SearchBarProps {
  /**
   * @description       类名
   */
  className?: string;
  /**
   * @description       样式
   */
  style?: React.CSSProperties;
  /**
   * @description      搜索回调
   * @param values 表单值
   */
  onSearch(values: Record<string, any>): void;
  /**
   * @description      搜索回调
   * @param values 表单值
   */
  onReset(values?: Record<string, any>): void;
  /**
   * @description      表单项
   */
  filters: FormItemProps[];
}

const prefixCls = 'ne-ui-search-bar';
const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { className, filters, onSearch, onReset, ...others } = props;
  const [form] = Form.useForm();
  const handleSearch = () => {
    const values = form.getFieldsValue(true);
    onSearch(values);
  };
  const handleReset = () => {
    form.resetFields();
    onReset(form.getFieldsValue(true));
  };

  return (
    <div className={classNames(className, prefixCls)} {...others}>
      <Form form={form}>
        <Space>
          {filters.map((filter, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Form.Item key={index} {...filter} />
          ))}
        </Space>

        <Space style={{ marginLeft: 20 }}>
          <Button type="primary" onClick={handleSearch}>
            <SearchOutlined />
            搜索
          </Button>
          <Button onClick={handleReset}>重置</Button>
        </Space>
      </Form>
    </div>
  );
};

export default SearchBar;
