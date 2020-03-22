define({ "api": [
  {
    "type": "post",
    "url": "/goods",
    "title": "创建商品",
    "name": "CreateGoods",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"肥皂\",\n    \"description\": \"纯天然无污染肥皂\",\n    \"details\": \"这是一块好肥皂\",\n    \"imgUrl\": \"https://img.url\",\n    \"price\": 500,\n    \"stock\": 10,\n    \"shopId\": 12345\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Goods",
            "optional": false,
            "field": "data",
            "description": "<p>创建的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"data\": {\n         \"id\": 12345,\n         \"name\": \"肥皂\",\n         \"description\": \"纯天然无污染肥皂\",\n         \"details\": \"这是一块好肥皂\",\n         \"imgUrl\": \"https://img.url\",\n         \"price\": 500,\n         \"stock\": 10,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 若用户尝试创建非自己管理店铺的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/GoodsController.java",
    "groupTitle": "商品"
  },
  {
    "type": "delete",
    "url": "/goods/:id",
    "title": "删除商品",
    "name": "DeleteGoods",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Goods",
            "optional": false,
            "field": "data",
            "description": "<p>被删除的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"id\": 12345,\n         \"name\": \"肥皂\",\n         \"description\": \"纯天然无污染肥皂\",\n         \"details\": \"这是一块好肥皂\",\n         \"imgUrl\": \"https://img.url\",\n         \"price\": 500,\n         \"stock\": 10,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 若用户尝试删除非自己管理店铺的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/GoodsController.java",
    "groupTitle": "商品"
  },
  {
    "type": "get",
    "url": "/goods",
    "title": "获取所有商品",
    "name": "GetGoods",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示的数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "shopId",
            "description": "<p>店铺ID，若传递，则只显示该店铺中的商品</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数，从1开始</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示的数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>共有多少页</p>"
          },
          {
            "group": "Success 200",
            "type": "Goods",
            "optional": false,
            "field": "data",
            "description": "<p>商品列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pageNum\": 1,\n  \"pageSize\": 10,\n  \"totalPage\": 5,\n  \"data\": [\n     {\n         \"id\": 12345,\n         \"name\": \"肥皂\",\n         \"description\": \"纯天然无污染肥皂\",\n         \"details\": \"这是一块好肥皂\",\n         \"imgUrl\": \"https://img.url\",\n         \"price\": 500,\n         \"stock\": 10,\n         \"shopId\": 12345,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n     },\n     {\n         ...\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/GoodsController.java",
    "groupTitle": "商品"
  },
  {
    "type": "patch",
    "url": "/goods/:id",
    "title": "更新商品",
    "name": "UpdateGoods",
    "group": "商品",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"肥皂\",\n    \"description\": \"纯天然无污染肥皂\",\n    \"details\": \"这是一块好肥皂\",\n    \"imgUrl\": \"https://img.url\",\n    \"price\": 500,\n    \"stock\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Goods",
            "optional": false,
            "field": "data",
            "description": "<p>更新后的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"id\": 12345,\n         \"name\": \"肥皂\",\n         \"description\": \"纯天然无污染肥皂\",\n         \"details\": \"这是一块好肥皂\",\n         \"imgUrl\": \"https://img.url\",\n         \"price\": 500,\n         \"stock\": 10,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 若用户尝试修改非自己管理店铺的商品</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/GoodsController.java",
    "groupTitle": "商品"
  },
  {
    "type": "post",
    "url": "/shop",
    "title": "创建店铺",
    "name": "CreateShop",
    "group": "店铺",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": 12345,\n    \"name\": \"我的店铺\",\n    \"description\": \"我的苹果专卖店\",\n    \"imgUrl\": \"https://img.url\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"id\": 12345,\n         \"name\": \"我的店铺\",\n         \"description\": \"我的苹果专卖店\",\n         \"imgUrl\": \"https://img.url\",\n         \"ownerUserId\": 12345,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "get",
    "url": "/shop",
    "title": "获取当前用户名下的所有店铺",
    "name": "GetShop",
    "group": "店铺",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示的数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数，从1开始</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示的数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>共有多少页</p>"
          },
          {
            "group": "Success 200",
            "type": "Shop",
            "optional": false,
            "field": "data",
            "description": "<p>店铺列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pageNum\": 1,\n  \"pageSize\": 10,\n  \"totalPage\": 5,\n  \"data\": [\n     {\n         \"id\": 12345,\n         \"name\": \"我的店铺\",\n         \"description\": \"我的苹果专卖店\",\n         \"imgUrl\": \"https://img.url\",\n         \"ownerUserId\": 12345,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n     },\n     {\n         ...\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "PATCH",
    "url": "/shop/:id",
    "title": "修改店铺",
    "name": "UpdateShop",
    "group": "店铺",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>店铺ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": 12345,\n    \"name\": \"我的店铺\",\n    \"description\": \"我的苹果专卖店\",\n    \"imgUrl\": \"https://img.url\",\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"id\": 12345,\n         \"name\": \"我的店铺\",\n         \"description\": \"我的苹果专卖店\",\n         \"imgUrl\": \"https://img.url\",\n         \"ownerUserId\": 12345,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 若用户尝试修改非自己管理店铺</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  },
  {
    "type": "DELETE",
    "url": "/shop/:id",
    "title": "删除店铺",
    "name": "UpdateShop",
    "group": "店铺",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>店铺ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n         \"id\": 12345,\n         \"name\": \"我的店铺\",\n         \"description\": \"我的苹果专卖店\",\n         \"imgUrl\": \"https://img.url\",\n         \"ownerUserId\": 12345,\n         \"createdAt\": \"2020-03-22T13:22:03Z\",\n         \"updatedAt\": \"2020-03-22T13:22:03Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized 若用户未登录</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden 若用户尝试删除非自己管理店铺</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/hcsp/wxshop/controller/ShopController.java",
    "groupTitle": "店铺"
  }
] });