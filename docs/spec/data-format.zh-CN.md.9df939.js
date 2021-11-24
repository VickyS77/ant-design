(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/data-format.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/data-format.zh-CN.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/data-format.zh-CN.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"article\",\n    [\n      \"h2\",\n      \"设计目标\"\n    ],\n    [\n      \"p\",\n      \"规范数据表达，保证直观准确一致地理解数据。\"\n    ],\n    [\n      \"h2\",\n      \"类型\"\n    ],\n    [\n      \"h3\",\n      \"数值\"\n    ],\n    [\n      \"p\",\n      \"数值用来表示计量大小，可单独出现或搭配数字符号进行使用。\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"符号格式\"\n          ],\n          [\n            \"th\",\n            \"如何使用及何时使用\"\n          ],\n          [\n            \"th\",\n            \"例子\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"千分位\"\n          ],\n          [\n            \"td\",\n            \"默认使用千分位帮助用户阅读。\"\n          ],\n          [\n            \"td\",\n            \"123,220\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"计量单位\"\n          ],\n          [\n            \"td\",\n            \"计量单位默认用小写字母。\"\n          ],\n          [\n            \"td\",\n            \"123,220kg\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"百分比\"\n          ],\n          [\n            \"td\",\n            \"比例问题等。\"\n          ],\n          [\n            \"td\",\n            \"12.32%\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"正斜杠\"\n          ],\n          [\n            \"td\",\n            \"用分数的形式表示事项进展。\"\n          ],\n          [\n            \"td\",\n            \"12/30\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img good\",\n          \"align\": \"right\",\n          \"alt\": \"推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*vjAcTqS6VKoAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img bad\",\n          \"align\": \"right\",\n          \"alt\": \"不推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3CXaSK6NcrwAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"位置排列\"\n      ],\n      \"：便于用户直观而又准确地读取数据，要做到一眼观定、简洁明了。在表格中，诸如金额、数量等数值分布排列时，通常采用“右对齐”方式，既方便用户快捷读取数据，还可以使用户进行纵向数据对比。\"\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img good\",\n          \"align\": \"right\",\n          \"alt\": \"推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*5ymtS5WU83EAAAAAAAAAAABkARQnAQ\"\n        }\n      ],\n      \"\\n\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img bad\",\n          \"align\": \"right\",\n          \"alt\": \"不推荐示例\",\n          \"description\": \"单位统一放在表头上，表格里不带单位，金额默认右对齐\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*qjzFQL3CqiQAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"计量单位\"\n      ],\n      \"：在表格中，计量单位默认放在表头，并默认右对齐。\"\n    ],\n    [\n      \"h3\",\n      \"金额\"\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"小写金额：\"\n      ],\n      \"规范格式为「货币符号+数字」的格式，例如“CNY1,123.00\\\"。 \",\n      [\n        \"strong\",\n        \"货币符号\"\n      ],\n      \"：表示货币种类的符号代码（\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://baike.baidu.com/item/%E8%B4%A7%E5%B8%81%E4%BB%A3%E7%A0%81/7467182?fr=aladdin\"\n        },\n        \"货币符号表\"\n      ],\n      \"），分为字母和字符两种：\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"货币符号\"\n          ],\n          [\n            \"th\",\n            \"如何使用及何时使用\"\n          ],\n          [\n            \"th\",\n            \"例子\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"字符\"\n          ],\n          [\n            \"td\",\n            \"以人民币为例，金额前带货币单位标志\",\n            [\n              \"code\",\n              \"¥\"\n            ]\n          ],\n          [\n            \"td\",\n            \"¥123.00\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"字母\"\n          ],\n          [\n            \"td\",\n            \"以人民币为例，推荐使用 \",\n            [\n              \"code\",\n              \"CNY\"\n            ],\n            \"，\",\n            [\n              \"code\",\n              \"CNY\"\n            ],\n            \" 为国际上通用的货币代码。\"\n          ],\n          [\n            \"td\",\n            \"CNY123.00\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img good\",\n          \"align\": \"right\",\n          \"alt\": \"推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FGtoQIKHySkAAAAAAAAAAABkARQnAQ\"\n        }\n      ],\n      \"\\n\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img bad\",\n          \"align\": \"right\",\n          \"alt\": \"不推荐示例\",\n          \"description\": \"金额数字到「元」为止的，在「元」之后，应写「整」字，在「角」之后可以不写「整」字。金额数字有「分」的，「分」后面不写「整」字。\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*adz2QIF8umQAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"大写金额：\"\n      ],\n      \"一般用于银行、公司或个人的重要结算凭证和各种交易票据，需要使用大写数字以确保数据无法涂改，规范格式为「货币名称+金额数字」。\"\n    ],\n    [\n      \"p\",\n      [\n        \"br\"\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img good\",\n          \"align\": \"right\",\n          \"alt\": \"推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*dHYhQ4iqnJkAAAAAAAAAAABkARQnAQ\"\n        }\n      ],\n      \"\\n\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img good\",\n          \"align\": \"right\",\n          \"alt\": \"推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T6hbQJdz5usAAAAAAAAAAABkARQnAQ\"\n        }\n      ],\n      \"\\n\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img bad\",\n          \"align\": \"right\",\n          \"alt\": \"不推荐示例\",\n          \"description\": \"“千”不能以单位的形式展示。\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*iuEARoq_-o0AAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"大额计量：\"\n      ],\n      \"如果一个金额很大，那么数值中的“万”“亿”单位可采用汉字。如果一个数值很大，那么数值中的“万”“亿”单位可采用汉字。\"\n    ],\n    [\n      \"h3\",\n      \"日期时间\"\n    ],\n    [\n      \"h4\",\n      \"绝对时间\"\n    ],\n    [\n      \"p\",\n      \"针对时间精确度要求较高的用户，强调信息发布的精确时间点，有回顾过去内容并通过绝对时间用来检索信息的诉求。\"\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"日期格式：\"\n      ],\n      \"可用如下标准化计法：\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"格式\"\n          ],\n          [\n            \"th\",\n            \"如何使用及何时使用\"\n          ],\n          [\n            \"th\",\n            \"例子\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"年、月、日\"\n          ],\n          [\n            \"td\",\n            \"中国默认使用 \",\n            [\n              \"code\",\n              \"yyyy-mm-dd\"\n            ],\n            \" 格式。（\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://zh.wikipedia.org/wiki/%E5%90%84%E5%9C%B0%E6%97%A5%E6%9C%9F%E5%92%8C%E6%97%B6%E9%97%B4%E8%A1%A8%E7%A4%BA%E6%B3%95\"\n              },\n              \"其它国家参考链接）\"\n            ],\n            \"。\"\n          ],\n          [\n            \"td\",\n            \"2019-12-08\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"专用名词\"\n          ],\n          [\n            \"td\",\n            \"含有月日的专用名词采用阿拉伯数字表示时，应采用间隔号 \",\n            [\n              \"code\",\n              \"·\"\n            ],\n            \" 将月、日分开，并在数字前后加引号。\"\n          ],\n          [\n            \"td\",\n            \"6.1 儿童节\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"日期范围\"\n          ],\n          [\n            \"td\",\n            \"在日期或时间范围之间显示一个波浪号 （前后需要空格）。\"\n          ],\n          [\n            \"td\",\n            \"2018-12-08 ～ 2019-12-07\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"时间格式\"\n      ],\n      \"：默认使用二十四小时制：\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"时间制\"\n          ],\n          [\n            \"th\",\n            \"如何使用及何时使用\"\n          ],\n          [\n            \"th\",\n            \"例子\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"二十四小时制\"\n          ],\n          [\n            \"td\",\n            \"二十四小时时间格式  \",\n            [\n              \"code\",\n              \"HH:mm:ss\"\n            ],\n            \" 。\"\n          ],\n          [\n            \"td\",\n            \"14:08:00\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"十二小时制\"\n          ],\n          [\n            \"td\",\n            \"十二小时时间格式 \",\n            [\n              \"code\",\n              \"h:mm:ss\"\n            ],\n            \" 。\"\n          ],\n          [\n            \"td\",\n            \"2:08:00 PM \",\n            \"|\",\n            \" 2:08:00 AM\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"标准格式\"\n      ],\n      \"：日期与时间连在一起时，两者之间用「空格」隔开，如“2019-12-08 06:00:00”。\"\n    ],\n    [\n      \"h4\",\n      \"相对时间\"\n    ],\n    [\n      \"p\",\n      \"时间的精确度对于用户并不十分重要，重要的是信息的即时性。在中后台中，相对时间一般用于消息、通知类功能，用户往往更关注于书面形式的时间单位，而不必去往前推算出发布的具体时间点。\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"时间\"\n          ],\n          [\n            \"th\",\n            \"展示形式\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"1 分钟以内的时间\"\n          ],\n          [\n            \"td\",\n            \"刚刚\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"1 小时以内的时间\"\n          ],\n          [\n            \"td\",\n            \"N 分钟前\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"24 小时以内的时间\"\n          ],\n          [\n            \"td\",\n            \"N 小时前\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"24 小时以外的时间\"\n          ],\n          [\n            \"td\",\n            \"用 \",\n            [\n              \"code\",\n              \"mm-dd HH:mm\"\n            ],\n            \" 的形式表示，即 12-08 08:00\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"超过一年的时间\"\n          ],\n          [\n            \"td\",\n            \"用 \",\n            [\n              \"code\",\n              \"yyyy-mm-dd HH:mm\"\n            ],\n            \" 的形式表示，即 2019-12-08 08:00\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"数字脱敏\"\n    ],\n    [\n      \"p\",\n      \"数据脱敏是指对某些敏感信息通过脱敏规则进行数据变形，实现敏感隐私数据的可靠保护。此处给出的脱敏规则为通用产品规范，遇到数据安全性较强的业务场景，可根据业务场景自行调整。\"\n    ],\n    [\n      \"h4\",\n      \"全部脱敏\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img good\",\n          \"align\": \"right\",\n          \"alt\": \"推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*NJs8QYejQyEAAAAAAAAAAABkARQnAQ\"\n        }\n      ],\n      \"\\n\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img bad\",\n          \"align\": \"right\",\n          \"alt\": \"不推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*JvI4T5SXvIYAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"一般用于金额、时间等特别重要敏感的信息，需要对所有数字进行脱敏。数据用一个 \",\n      [\n        \"code\",\n        \"***\"\n      ],\n      \" 代替。\"\n    ],\n    [\n      \"h4\",\n      \"部分脱敏\"\n    ],\n    [\n      \"p\",\n      \"一般用于需要部分信息进行识别的状况，只需要对部分信息进行脱敏处理，但数字真实位数保留。数据脱敏部分用 \",\n      [\n        \"code\",\n        \"*\"\n      ],\n      \" 代替。\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"脱敏类型\"\n          ],\n          [\n            \"th\",\n            \"如何使用\"\n          ],\n          [\n            \"th\",\n            \"例子\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"姓名\"\n          ],\n          [\n            \"td\",\n            \"两个字的姓名：显示第一个字符，后面的隐藏为 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \"。\"\n          ],\n          [\n            \"td\",\n            \"仲\",\n            \"*\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\"\n          ],\n          [\n            \"td\",\n            \"三个字及三个字以上的姓名：显示第一个字符和最后一个字符，中间字符为 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \"。\"\n          ],\n          [\n            \"td\",\n            \"仲\",\n            \"*\",\n            \"妮\",\n            [\n              \"br\"\n            ],\n            \"仲\",\n            \"*\",\n            \"*\",\n            \"妮\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"手机号码\"\n          ],\n          [\n            \"td\",\n            \"保留手机号码前 3 位与后 4 位。\"\n          ],\n          [\n            \"td\",\n            \"186 \",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \" 1402\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"身份证号码\"\n          ],\n          [\n            \"td\",\n            \"公民身份号码由六位地址码，八位出生日期码，三位顺序码和一位校验码组成。脱敏规则分为高、中、低级：\",\n            [\n              \"br\"\n            ],\n            [\n              \"strong\",\n              \"高级\"\n            ],\n            \"：保留前一位与后一位，其余 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表示，仅能识别该人属于哪个地区。\",\n            [\n              \"br\"\n            ],\n            [\n              \"strong\",\n              \"中级\"\n            ],\n            \"：保留前三位与后三位，其余 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表示，仅能识别该人的省市与是男是女。\",\n            [\n              \"br\"\n            ],\n            [\n              \"strong\",\n              \"低级\"\n            ],\n            \"：保留前六位与后四位，其余 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表示，仅能识别该人的省市区与是男是女。\"\n          ],\n          [\n            \"td\",\n            \"6\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"2\",\n            [\n              \"br\"\n            ],\n            \"213\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"203\",\n            [\n              \"br\"\n            ],\n            \"212912\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"2233\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"联系地址\"\n          ],\n          [\n            \"td\",\n            \"保留省市区，后面的用 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表述。\"\n          ],\n          [\n            \"td\",\n            \"浙江省杭州市 西湖区 \",\n            \"*\",\n            [\n              \"strong\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\"\n            ]\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"邮箱\"\n          ],\n          [\n            \"td\",\n            \"保留邮箱主机名与前三位字符，其余 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表示。\"\n          ],\n          [\n            \"td\",\n            \"123\",\n            \"*\",\n            [\n              \"strong\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\"\n            ],\n            \"@163.com\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"银行卡号码\"\n          ],\n          [\n            \"td\",\n            \"银行卡号码由发卡行标识代码（六到十二位不等），个人账号标识（六到十二位不等），一位校验码组成。脱敏规则分为高、中、低级：\",\n            [\n              \"br\"\n            ],\n            [\n              \"strong\",\n              \"高级\"\n            ],\n            \"：保留后四位，其余 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表示，仅能识别部份个人账号标识。\",\n            [\n              \"br\"\n            ],\n            [\n              \"strong\",\n              \"中级\"\n            ],\n            \"：保留前六位与后四位，其余 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表示，仅能识别发卡行与小部份个人账号标识。\",\n            [\n              \"br\"\n            ],\n            [\n              \"strong\",\n              \"低级\"\n            ],\n            \"：保留前四位与后六位，其余 \",\n            [\n              \"code\",\n              \"*\"\n            ],\n            \" 表示。仅能识别发卡行与大部份个人账号标识。\"\n          ],\n          [\n            \"td\",\n            \"*\",\n            [\n              \"strong\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\",\n              \"*\"\n            ],\n            \"1208\",\n            [\n              \"br\"\n            ],\n            \"620121\",\n            [\n              \"strong\",\n              \"*\",\n              \"*\"\n            ],\n            \"1208\",\n            [\n              \"br\"\n            ],\n            \"620121\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"*\",\n            \"111208\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"数据状态\"\n    ],\n    [\n      \"h4\",\n      \"无数据\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img good\",\n          \"align\": \"right\",\n          \"alt\": \"推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*o0duS6P8WUEAAAAAAAAAAABkARQnAQ\"\n        }\n      ],\n      \"\\n\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img bad\",\n          \"align\": \"right\",\n          \"alt\": \"不推荐示例\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ssPWRaVkIy8AAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"无数据用 \",\n      [\n        \"code\",\n        \"--\"\n      ],\n      \" 表述。\"\n    ],\n    [\n      \"h4\",\n      \"数据加载\"\n    ],\n    [\n      \"p\",\n      [\n        \"img\",\n        {\n          \"class\": \"preview-img\",\n          \"align\": \"right\",\n          \"src\": \"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*E6pGTJYEh-gAAAAAAAAAAABkARQnAQ\"\n        }\n      ]\n    ],\n    [\n      \"p\",\n      \"数据加载用「骨架屏」表示。\"\n    ],\n    [\n      \"h2\",\n      \"参考文档\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://baike.baidu.com/item/%E8%B4%A7%E5%B8%81%E4%BB%A3%E7%A0%81/7467182?fr=aladdin\"\n            },\n            \"货币符号表\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://zh.wikipedia.org/wiki/%E5%90%84%E5%9C%B0%E6%97%A5%E6%9C%9F%E5%92%8C%E6%97%B6%E9%97%B4%E8%A1%A8%E7%A4%BA%E6%B3%95\"\n            },\n            \"其它国家时间规范参考链接\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091154536.pdf\"\n            },\n            \"出版物数字规范\"\n          ]\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"设计模式\",\n    \"type\": \"全局规则\",\n    \"order\": 5,\n    \"title\": \"数据格式\",\n    \"filename\": \"docs/spec/data-format.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#设计目标\",\n          \"title\": \"设计目标\"\n        },\n        \"设计目标\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#类型\",\n          \"title\": \"类型\"\n        },\n        \"类型\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#参考文档\",\n          \"title\": \"参考文档\"\n        },\n        \"参考文档\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./docs/spec/data-format.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);