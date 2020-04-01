import React from 'react';
import MarkDown from '.';

export default {
  title: 'MarkDown'
};

const docpart1 =
`
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
`

const docpart2 =
`
# Your markdown here 标题
## Your markdown here 标题
### Your markdown here 标题
#### Your markdown here 标题
##### Your markdown here 标题
###### Your markdown here 标题
`

const docpart3 =
`
> The overriding design goal for Markdown's 引用
> formatting syntax is to make it as readable 引用
> as possible. The idea is that a 引用
> Markdown-formatted document should be 引用
> publishable as-is, as plain text, without 引用
> looking like it's been marked up with tags 引用
`

const docpart4 =
`
- **Preview:**  A live display of the generated HTML as it would render in a browser. 列表
- **HTML Source:**  The generated HTML before your browser makes it pretty. 列表
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this. 列表
- **Quick Reference:**  A brief run-down of how to format things using markdown. 列表
`

const docpart5 =
`
1. Type in stuff on the left. 列表
2. See the live updates on the right. 列表
`

const docpart6 =
`
| Feature 表格   | Support 表格 | Support 表格 |
| --------- | ------- | ------- |
| tables 表格    | ✔ | 33
| alignment 表格 | ✔ | 33
| wewt 表格     | ✔ | 3333333333333333333333
`

const docpart7 =
`
这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落

这是一个段落这

这是一个段落这
`

const docpart8 =
`
test testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest testtest test
`


const docpart9 =
`
👍👍🐝🐝🐬👯🌔🌔
`

export const Base = () => (
  <div style={{width: '400px'}}>
    <MarkDown source={docpart1} />
    <MarkDown source={docpart2} />
    <MarkDown>{docpart3}</MarkDown>
    <MarkDown>{docpart4}</MarkDown>
    <MarkDown>{docpart5}</MarkDown>
    <MarkDown>{docpart6}</MarkDown>
    <MarkDown>{docpart7}</MarkDown>
    <MarkDown>{docpart8}</MarkDown>
    <MarkDown width="10px">{docpart9}</MarkDown>
  </div>
);
