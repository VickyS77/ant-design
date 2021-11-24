(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/time-picker/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/time-picker/index.zh-CN.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/time-picker/index.zh-CN.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"时间选择框\",\n    \"type\": \"数据录入\",\n    \"title\": \"TimePicker\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg\",\n    \"filename\": \"components/time-picker/index.zh-CN.md\"\n  },\n  \"description\": [\n    \"section\",\n    [\n      \"p\",\n      \"输入或选择时间的控件。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ]\n  ],\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#方法\",\n          \"title\": \"方法\"\n        },\n        \"方法\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#FAQ\",\n          \"title\": \"FAQ\"\n        },\n        \"FAQ\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"hr\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token keyword\\\">import</span> moment <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'moment'</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>TimePicker</span> <span class=\\\"token attr-name\\\">defaultValue</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token function\\\">moment</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'13:30:56'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'HH:mm:ss'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">}</span></span> <span class=\\\"token punctuation\\\">/></span></span><span class=\\\"token punctuation\\\">;</span>\"\n      },\n      [\n        \"code\",\n        \"import moment from 'moment';\\n<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;\"\n      ]\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"allowClear\"\n          ],\n          [\n            \"td\",\n            \"是否展示清除按钮\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoFocus\"\n          ],\n          [\n            \"td\",\n            \"自动获取焦点\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bordered\"\n          ],\n          [\n            \"td\",\n            \"是否有边框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"className\"\n          ],\n          [\n            \"td\",\n            \"选择器类名\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"clearIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义的清除图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"clearText\"\n          ],\n          [\n            \"td\",\n            \"清除按钮的提示文案\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"clear\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultValue\"\n          ],\n          [\n            \"td\",\n            \"默认时间\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"http://momentjs.com/\"\n              },\n              \"moment\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabled\"\n          ],\n          [\n            \"td\",\n            \"禁用全部操作\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabledHours\"\n          ],\n          [\n            \"td\",\n            \"禁止选择部分小时选项\"\n          ],\n          [\n            \"td\",\n            \"function()\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabledMinutes\"\n          ],\n          [\n            \"td\",\n            \"禁止选择部分分钟选项\"\n          ],\n          [\n            \"td\",\n            \"function(selectedHour)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabledSeconds\"\n          ],\n          [\n            \"td\",\n            \"禁止选择部分秒选项\"\n          ],\n          [\n            \"td\",\n            \"function(selectedHour, selectedMinute)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"format\"\n          ],\n          [\n            \"td\",\n            \"展示的时间格式\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"HH:mm:ss\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"getPopupContainer\"\n          ],\n          [\n            \"td\",\n            \"定义浮层的容器，默认为 body 上新建 div\"\n          ],\n          [\n            \"td\",\n            \"function(trigger)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"hideDisabledOptions\"\n          ],\n          [\n            \"td\",\n            \"隐藏禁止选择的选项\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"hourStep\"\n          ],\n          [\n            \"td\",\n            \"小时选项间隔\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"1\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"inputReadOnly\"\n          ],\n          [\n            \"td\",\n            \"设置输入框为只读（避免在移动设备上打开虚拟键盘）\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"minuteStep\"\n          ],\n          [\n            \"td\",\n            \"分钟选项间隔\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"1\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"open\"\n          ],\n          [\n            \"td\",\n            \"面板是否打开\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"placeholder\"\n          ],\n          [\n            \"td\",\n            \"没有值的时候显示的内容\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" \",\n            \"[\",\n            \"string, string]\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"请选择时间\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"popupClassName\"\n          ],\n          [\n            \"td\",\n            \"弹出层类名\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"popupStyle\"\n          ],\n          [\n            \"td\",\n            \"弹出层样式对象\"\n          ],\n          [\n            \"td\",\n            \"object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"renderExtraFooter\"\n          ],\n          [\n            \"td\",\n            \"选择框底部显示自定义的内容\"\n          ],\n          [\n            \"td\",\n            \"() => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"secondStep\"\n          ],\n          [\n            \"td\",\n            \"秒选项间隔\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"1\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showNow\"\n          ],\n          [\n            \"td\",\n            \"面板是否显示“此刻”按钮\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.4.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"suffixIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义的选择框后缀图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"use12Hours\"\n          ],\n          [\n            \"td\",\n            \"使用 12 小时制，为 true 时 \",\n            [\n              \"code\",\n              \"format\"\n            ],\n            \" 默认为 \",\n            [\n              \"code\",\n              \"h:mm:ss a\"\n            ]\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"当前时间\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"http://momentjs.com/\"\n              },\n              \"moment\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"时间发生变化的回调\"\n          ],\n          [\n            \"td\",\n            \"function(time: moment, timeString: string): void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onOpenChange\"\n          ],\n          [\n            \"td\",\n            \"面板打开/关闭时的回调\"\n          ],\n          [\n            \"td\",\n            \"(open: boolean) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"方法\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"名称\"\n          ],\n          [\n            \"th\",\n            \"描述\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"blur()\"\n          ],\n          [\n            \"td\",\n            \"移除焦点\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"focus()\"\n          ],\n          [\n            \"td\",\n            \"获取焦点\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"RangePicker\"\n    ],\n    [\n      \"p\",\n      \"属性与 DatePicker 的 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/components/date-picker/#RangePicker\"\n        },\n        \"RangePicker\"\n      ],\n      \" 相同。还包含以下属性：\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"order\"\n          ],\n          [\n            \"td\",\n            \"始末时间是否自动排序\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"4.1.0\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"style\",\n      \"\\n.code-box-demo .ant-picker { margin: 0 8px 12px 0; }\\n.ant-row-rtl .code-box-demo .ant-picker { margin: 0 0 12px 8px; }\\n\"\n    ],\n    [\n      \"h2\",\n      \"FAQ\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/docs/react/replace-moment#TimePicker\"\n            },\n            \"如何在 TimePicker 中使用自定义日期库（如 dayjs ）\"\n          ]\n        ]\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/time-picker/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);