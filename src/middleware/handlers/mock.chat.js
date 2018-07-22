//模拟数据
import moment from 'moment';
import BaseRoute from '../baseRoute';
import { ROUTE_BASE_PATH } from '../config';
import uuid from 'uuid';
import AuthUtil from '../authUtil';
class Gettoken extends BaseRoute {
  handle() {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEifQ.eyJkYXRhIjoiMTAwMTAxMjAwIiwiaWF0IjoxNTEzNDg5NjUxLCJhdWQiOiJlbnRhcHAiLCJpc3MiOiJkbWNmZWQiLCJzdWIiOiJlbnR1c2VyIiwianRpIjoiYTM3NWYxMGUtMmUzOC00MTk0LThhZGEtNjg0MmRlY2Y3ZTk2In0.coWUq8iveGKaFMkfOlkZZVEGpOqF_vJZBAar8fde0lI';
    const model = {
      errcode: 0,
      access_token: token,
      errmsg: 'ok',
      expires_in: 7200
    }

    this.res.json(model);

  }
}

class CreateToken extends BaseRoute {
  handle() {


    const userId = this.req.query['uid'] || 'wangdongfen';
    let resultToken = AuthUtil.createToken(userId);

    const model = {
      token: resultToken
    }

    this.res.json(model);
  }
}

class DecodeToken extends BaseRoute {
  handle() {
    let authToken = this.req.headers['authorization'];
    let token = AuthUtil.decodeToken(authToken);
    const result = {
      decodeToken: token
    }
    this.res.json(result);
  }
}

class UpdateToken extends BaseRoute {
  handle() {
    let oldToken = this.req.headers['authorization'];
    let refreshedtoken = AuthUtil.updateToken(oldToken);
    const result = {
      refreshedtoken: refreshedtoken
    }
    this.res.json(result);
  }
}

class Authorize extends BaseRoute {
  handle() {
    try {


      let roundApps = ['home', 'drive', 'sos', 'pick', 'repair'];
      //Math.ceil(Math.random()*5)
      let state = roundApps[0];
      let redictUrl = `http://localhost:9100/wx/ent/api/authorize?code=BmeFmUxC_pNusRIB7sjmlSQ3vyp-sZGEOp3gL-GDrco&state=${state}`;

      this.res.redirect(redictUrl);

    } catch (e) {
      console.log('mock-error--', e);
    }

  }
}

class Getuserinfo extends BaseRoute {
  handle() {

    const model = {
      errcode: 0,
      user_ticket: uuid.v1(),
      UserId: '100101200',
      DeviceId: uuid.v4().toLocaleUpperCase(),
      errmsg: 'ok',
      expires_in: 7200
    }

    this.res.json(model);

  }
}

class Getuserdetail extends BaseRoute {
  handle() {

    const model = {
      errcode: 0,
      errmsg: 'ok',
      userid: '100101200',
      name: "这里的冬天不下雪",
      department: [3],
      position: "前端工程师",
      gender: '1',
      avatar: "https://wechat.fanyou365.com/assets/images/jycx%402x.png"
    }

    this.res.json(model);

  }
}

class GetuserAllInfo extends BaseRoute {
  handle() {

    const model = {
      "errcode": 0,
      "errmsg": "ok",
      "userid": "wangdongfen",
      "name": "王东芬",
      "department": [
        41
      ],
      "position": "",
      "mobile": "15800362921",
      "gender": "1",
      "email": "",
      "avatar": "http://shp.qpic.cn/bizmp/avoaZsrKkicpMa0g3EWQCut6vFsRdaoqwJvKJ9Rib6u8Mlp9EK2icQ6IQ/",
      "status": 1,
      "isleader": 0,
      "extattr": {
        "attrs": []
      },
      "english_name": "",
      "telephone": "",
      "enable": 1,
      "hide_mobile": 0,
      "order": [
        0
      ]
    }

    this.res.json(model);

  }
}


class getChatUserList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = [
      {
        "userId": "1212581",
        "name": "第六天",
        "picUrl": null,
        "phone": null,
        "jmessage": null,
        "jpassword": null,
        "wxCode": null
      },
      {
        "userId": "1212590",
        "name": "Oi",
        "picUrl": null,
        "phone": null,
        "jmessage": null,
        "jpassword": null,
        "wxCode": null
      },
      {
        "userId": "1212583",
        "name": "汪海瀚",
        "picUrl": null,
        "phone": null,
        "jmessage": null,
        "jpassword": null,
        "wxCode": null
      },
      {
        "userId": "1212589",
        "name": "骨瓷瓷瓷瓷",
        "picUrl": null,
        "phone": null,
        "jmessage": null,
        "jpassword": null,
        "wxCode": null
      },
      {
        "userId": "1212587",
        "name": "Veeera",
        "picUrl": null,
        "phone": null,
        "jmessage": null,
        "jpassword": null,
        "wxCode": null
      }
    ]
    this.res.json(model);

  }
}


class getWxChatContent extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "returnFlag": 1,
      "data": [
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十",
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "contents": [
                "一二三四五六七八九十"
              ],
              "secondName": "一二三四五六七八九十"
            }
          ]
        },
        {
          "firstName": "一二三四五六七八九十",
          "children": [
            {
              "secondName": "一二三四五六七八九十"
            }
          ]
        }
      ],
      "errorMsg": null
    }
    
    this.res.json(model);

  }
}

class getWxChatDialogue extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "returnFlag": 1,
      "data": [
        {
          "id": 1,
          "dealerCode": "BUKA001",
          "content": "test",
          "useNum": 0,
          "createDate": 1514174434000,
          "updateDate": 1514174434000,
          "contentType": "text"
        },
        {
          "id": 2,
          "dealerCode": "BUKA001",
          "content": "test1",
          "useNum": 1,
          "createDate": 1514174442000,
          "updateDate": 1514174442000,
          "contentType": null
        }
      ],
      "errorMsg": null
    }
    
    this.res.json(model);

  }
}



const routeHandle = (router) => {

  router.get(`${ROUTE_BASE_PATH}/mock/wechat/gettoken`, Gettoken.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/wechat/authorize`, Authorize.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/wechat/user/getuserinfo`, Getuserinfo.makeRouteHandle());
  router.post(`${ROUTE_BASE_PATH}/mock/wechat/user/getuserdetail`, Getuserdetail.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/wechat/user/get`, GetuserAllInfo.makeRouteHandle());

  router.get(`${ROUTE_BASE_PATH}/mock/wx_getChatUserList`, getChatUserList.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/getWxChatContent`, getWxChatContent.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/getWxChatDialogue`, getWxChatDialogue.makeRouteHandle());



};

export default routeHandle;