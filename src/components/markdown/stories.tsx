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
# Your markdown here
## Your markdown here
### Your markdown here
#### Your markdown here
##### Your markdown here
###### Your markdown here
`

const docpart3 =
`
> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
`

const docpart4 =
`
- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.
`

const docpart5 =
`
1. Type in stuff on the left.
2. See the live updates on the right.
`

const docpart6 =
`
| Feature   | Support | Support |
| --------- | ------- | ------- |
| tables    | ✔ | 33
| alignment | ✔ | 33
| wewt      | ✔ | 3333333333333333333333
`

const docpart7 =
`
$$E=mc^2$$
`

export const Base = () => (
  <>
    <MarkDown source={docpart1} />
    <MarkDown source={docpart2} />
    <MarkDown>{docpart3}</MarkDown>
    <MarkDown>{docpart4}</MarkDown>
    <MarkDown>{docpart5}</MarkDown>
    <MarkDown>{docpart6}</MarkDown>
    <MarkDown>{docpart7}</MarkDown>
  </>
);
