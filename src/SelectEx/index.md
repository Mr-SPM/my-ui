---
nav: Components
group:
  title: 组件
  order: 2
---

# SelectEx 下拉选择

标准示例

```tsx
import { SelectEx } from 'my-ui';
async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);

  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: {
          name: { first: string; last: string };
          login: { username: string };
        }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }),
      ),
    );
}
export default () => (
  <SelectEx
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="请输入搜索"
    fetchOptions={fetchUserList}
  />
);
```

## 配置项

| 参数            | 说明              | 类型                             | 默认值 | 版本 |
| --------------- | ----------------- | -------------------------------- | ------ | ---- |
| fetchOptions    | 加载 options 函数 | (search: string) => Promise<T[]> | -      |      |
| debounceTimeout | 防抖时间          | number                           | 500    |      |


## 拓展[Select](https://ant-design.gitee.io/components/select-cn)
