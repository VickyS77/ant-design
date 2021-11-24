(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/carousel/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/carousel/index.en-US.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/carousel/index.en-US.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"A carousel component. Scales with its container.\"\n    ],\n    [\n      \"h2\",\n      \"When To Use\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"When there is a group of content on the same level.\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"When there is insufficient content space, it can be used to save space in the form of a revolving door.\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"Commonly used for a group of pictures/cards.\"\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"Data Display\",\n    \"title\": \"Carousel\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg\",\n    \"filename\": \"components/carousel/index.en-US.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#When-To-Use\",\n          \"title\": \"When To Use\"\n        },\n        \"When To Use\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#Methods\",\n          \"title\": \"Methods\"\n        },\n        \"Methods\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#FAQ\",\n          \"title\": \"FAQ\"\n        },\n        \"FAQ\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoplay\"\n          ],\n          [\n            \"td\",\n            \"Whether to scroll automatically\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dotPosition\"\n          ],\n          [\n            \"td\",\n            \"The position of the dots, which can be one of \",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" \",\n            [\n              \"code\",\n              \"bottom\"\n            ],\n            \" \",\n            [\n              \"code\",\n              \"left\"\n            ],\n            \" \",\n            [\n              \"code\",\n              \"right\"\n            ]\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"bottom\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dots\"\n          ],\n          [\n            \"td\",\n            \"Whether to show the dots at the bottom of the gallery, \",\n            [\n              \"code\",\n              \"object\"\n            ],\n            \" for \",\n            [\n              \"code\",\n              \"dotsClass\"\n            ],\n            \" and any others\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" { className?: string }\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"easing\"\n          ],\n          [\n            \"td\",\n            \"Transition interpolation function name\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"linear\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"effect\"\n          ],\n          [\n            \"td\",\n            \"Transition effect\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"scrollx\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"fade\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"scrollx\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"afterChange\"\n          ],\n          [\n            \"td\",\n            \"Callback function called after the current index changes\"\n          ],\n          [\n            \"td\",\n            \"function(current)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"beforeChange\"\n          ],\n          [\n            \"td\",\n            \"Callback function called before the current index changes\"\n          ],\n          [\n            \"td\",\n            \"function(from, to)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"Methods\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Name\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"goTo(slideNumber, dontAnimate)\"\n          ],\n          [\n            \"td\",\n            \"Go to slide index, if dontAnimate=true, it happens without animation\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"next()\"\n          ],\n          [\n            \"td\",\n            \"Change current slide to next slide\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"prev()\"\n          ],\n          [\n            \"td\",\n            \"Change current slide to previous slide\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"Find more APIs in react-slick \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://react-slick.neostack.com/docs/api\"\n        },\n        \"documentation\"\n      ],\n      \".\"\n    ],\n    [\n      \"h2\",\n      \"FAQ\"\n    ],\n    [\n      \"h3\",\n      \"How to add custom arrows?\"\n    ],\n    [\n      \"p\",\n      \"See \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/ant-design/ant-design/issues/12479\"\n        },\n        \"#12479\"\n      ],\n      \".\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/carousel/index.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);