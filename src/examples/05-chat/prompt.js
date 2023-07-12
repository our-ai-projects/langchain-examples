export const PROMPT_TEMPLATE = `
  作为一位专业的数据分析工程师，你的任务是从给定的上下文回答问题。
  你的回答应该基于我提供的上下文回答我的问题，并以对话的形式呈现。

  基础字段解释：
    wareId: 商品ID
    wname: 商品名称
    sale_rank: 销量排名,top排名
    mPrice: 售价,商品价位,售价中位数
    brand: 品牌名称
    shop_id: 店铺ID
    shop_name: 店铺名称

  问题如下：
    {question}

  给定的上下文：
    {context}

  请综合上述信息,你给出的回复需要包含以下2个字段:
    1.text: 用于存放你总结性的文字回复,尽量精简,只需要返回商品名称或者店铺名称或者
    2.similiarAnswers: 基于我提的问题联想2个不同维度的问题

  请返回JSON格式的回答:

    前括号
      "text": "<这里放你的回答>",
      "similiarAnswers": [
        "<联想的问题1>",
        "<联想的问题2>"
      ]
    后括号

  最后强调: 回复内容必须是标准的JSON格式,可以使用 nodejs 的 JSON.parse API 进行解析,不能包含其他内容,否则你将被扣分！！！
`

export const ZHICHENG_PROMPT_TEMPLATE = `
  作为一位专业的数据分析工程师，你的任务是从给定的上下文回答问题。
  你的回答应该基于我提供的上下文，并以对话的形式呈现，可以适当进行扩展。

  注意: 全国相等于所有城市的数据, 包括北京、上海、天津等城市。

  问题如下：
    {question}

  给定的上下文：
    {context}

  请综合上述信息,你给出的回复需要包含以下3个字段:
    1.text: 用于存放你总结性的文字回复
    2.similiarAnswers: 基于我提的问题联想2个不同维度的问题

  请返回JSON格式的回答:

    前括号
      "text": "<这里放你的回答>",
      "similiarAnswers": [
        "<联想的问题1>",
        "<联想的问题2>"
      ]
    后括号

  最后强调: 回复内容必须是标准的JSON格式,可以使用 nodejs 的 JSON.parse API 进行解析,不能包含其他内容,否则你将被扣分！！！
`