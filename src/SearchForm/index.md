---

nav: Components
group: 
  title: 组件
  order: 2
---

# SearchForm 搜索

标准示例

```jsx
import { Input, Select } from 'antd';
import { SearchForm } from 'my-ui';

const filters = [
  {
    label: '姓名',
    name: 'age',
    children: <Input placeholder="请输入" />,
  },
  {
    label: '性别',
    name: 'sex',
    children: (
      <Select
        placeholder="请选择"
        options={['男', '女'].map((item) => ({ label: item, value: item }))}
      />
    ),
  },
];
export default () => <SearchForm filters={filters} />;
```

## 配置项


| 参数       | 说明   | 类型                                                                         | 默认值 | 版本 |
| ---------- | ------ | ---------------------------------------------------------------------------- | ------ | ---- |
| className? |        | string                                                                       |        |      |
| style?     |        | React.CSSProperties                                                          |        |      |
| onSearch   | 搜索   | (values) => void                                                             | -      | -    |
| onReset    | 重置   | (values) => void                                                             | -      | -    |
| filters    | 筛选项 | [FormItemProps](https://ant-design.gitee.io/components/form-cn/#Form.Item)[] | -      | -    |
