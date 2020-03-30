// TODO: 待实现
import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import style from './style.less'
import Container, { IProps as BaseProps } from '../container'

marked.setOptions({
  gfm: true, // 兼容 github 语法
  xhtml: false, //  自动闭合 <br/>, <img/> 类的标签
  breaks: false, // 允许回车换行。该选项要求 gfm 为true
  sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
  pedantic: false, // 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  smartLists: true, // 使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
  smartypants: false, // 使用更为时髦的标点，比如在引用语法中加入破折号。
  renderer: new marked.Renderer(),
  highlight: function (code: string) {
    return hljs.highlightAuto(code).value;
  }
});

export interface IProps extends BaseProps {
  source?: string
  children?: string
}

export const MarkDown: React.FC<IProps> = props => {
  let source = props.source || props.children

  if (!source) {
    return null
  }

  return (
    <Container className={[style.markdown, props.className]} style={props.style}>
      <blockquote
        className={style.context}
        dangerouslySetInnerHTML={{
          __html: marked(source)
        }}
      >
      </blockquote>
    </Container>
  )
}

export default MarkDown
