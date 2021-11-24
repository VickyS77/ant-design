(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/badge/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/badge/index.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/badge/index.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"图标右上角的圆形徽标数字。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"p\",\n      \"一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"徽标数\",\n    \"type\": \"数据展示\",\n    \"title\": \"Badge\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg\",\n    \"filename\": \"components/badge/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"h3\",\n      \"Badge\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"color\"\n          ],\n          [\n            \"td\",\n            \"自定义小圆点的颜色\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"count\"\n          ],\n          [\n            \"td\",\n            \"展示的数字，大于 overflowCount 时显示为 \",\n            [\n              \"code\",\n              \"${overflowCount}+\"\n            ],\n            \"，为 0 时隐藏\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dot\"\n          ],\n          [\n            \"td\",\n            \"不展示数字，只有一个小红点\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"offset\"\n          ],\n          [\n            \"td\",\n            \"设置状态点的位置偏移\"\n          ],\n          [\n            \"td\",\n            \"[\",\n            \"number, number]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"overflowCount\"\n          ],\n          [\n            \"td\",\n            \"展示封顶的数字值\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"99\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showZero\"\n          ],\n          [\n            \"td\",\n            \"当数值为 0 时，是否展示 Badge\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"在设置了 \",\n            [\n              \"code\",\n              \"count\"\n            ],\n            \" 的前提下有效，设置小圆点的大小\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"default\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.6.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"status\"\n          ],\n          [\n            \"td\",\n            \"设置 Badge 为状态点\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"success\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"processing\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"default\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"error\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"warning\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"text\"\n          ],\n          [\n            \"td\",\n            \"在设置了 \",\n            [\n              \"code\",\n              \"status\"\n            ],\n            \" 的前提下有效，设置状态点的文本\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"设置鼠标放在状态点上时显示的文字\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Badge.Ribbon (4.5.0+)\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"color\"\n          ],\n          [\n            \"td\",\n            \"自定义缎带的颜色\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"placement\"\n          ],\n          [\n            \"td\",\n            \"缎带的位置，\",\n            [\n              \"code\",\n              \"start\"\n            ],\n            \" 和 \",\n            [\n              \"code\",\n              \"end\"\n            ],\n            \" 随文字方向（RTL 或 LTR）变动\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"start\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"end\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"end\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"text\"\n          ],\n          [\n            \"td\",\n            \"缎带中填入的内容\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/badge/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);