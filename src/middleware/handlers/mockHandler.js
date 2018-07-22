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
      let state = roundApps[1];
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


class UpdateDealerUsers extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      data: {},
      elapsedMilliseconds: 0,
      errMsg: 'ok',
      resultCode: 0,
      success: true,
      time: serverTime
    }

    //异常情况
    // const model = {
    //   resultCode: 0,
    //   data: null,
    //   errMsg: "获取人员信息异常，请联系管理员校验！",
    //   time: "2017-12-23 10:58:42",
    //   success: false,
    //   elapsedMilliseconds: 0
    //   }

    this.res.json(model);

  }
}

class ManagerList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 1,
        "orderBy": null,
        "startRow": 1,
        "endRow": 1,
        "total": 1,
        "pages": 1,
        "list": [
          {
            "driveId": 463,
            "sex": null,
            "userName": "王芳",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": "4301",
            "address": "横港路39号",
            "carType": null,
            "carCode": "GMC6440A",
            "applyTimeType": null,
            "applyTime": "2018-01-15 12:00:00",
            "tags": null,
            "remark": null,
            "dispatchObject": "CS001",
            "manager": "39986",
            "licenseNo": "鲁KWX69X",
            "appreciationEngineer": "39988",
            "counselor": "78",
            "driveStartTime": null,
            "driveEndTime": null,
            "status": 10131004,
            "createDate": "2018-01-05 16:39:36",
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "centerName": "长沙虚拟中心",
            "regionName": "长沙市",
            "appellation": "女士",
            "carName": "林肯MKZ",
            "statusName": "待试驾",
            "managerName": "陆丹丹",
            "couselorName": "湘西首席顾问",
            "appreciationEngineerName": "鉴赏工程师Z",
            "engineerPhone": null,
            "color": null,
            "remind": null,
            "applyTimeName": null,
            "carTypeName": null
          },
          {
            "driveId": 462,
            "sex": null,
            "userName": "钱坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": "4301",
            "address": "浏阳河大桥1100号",
            "carType": null,
            "carCode": "GMC6440A",
            "applyTimeType": null,
            "applyTime": "2018-01-08 10:25:00",
            "tags": null,
            "remark": null,
            "dispatchObject": "CS001",
            "manager": "39986",
            "licenseNo": "沪A01W8X",
            "appreciationEngineer": "39988",
            "counselor": "72",
            "driveStartTime": null,
            "driveEndTime": null,
            "status": 10131002,
            "createDate": "2018-01-04 17:20:28",
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "centerName": "长沙虚拟中心",
            "regionName": "长沙市",
            "appellation": "先生",
            "carName": "林肯MKZ",
            "statusName": "待接单",
            "managerName": "陆丹丹",
            "couselorName": "株洲首席顾问",
            "appreciationEngineerName": "鉴赏工程师Z",
            "engineerPhone": null,
            "color": null,
            "remind": null,
            "applyTimeName": null,
            "carTypeName": null
          },
          {
            "driveId": 22,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131004",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "待试驾",
            "engineerPhone": null
          },
          {
            "driveId": 23,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131005",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "已出发",
            "engineerPhone": null
          },
          {
            "driveId": 24,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131006",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "试驾中",
            "engineerPhone": null
          },
          {
            "driveId": 25,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131007",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "已试驾",
            "engineerPhone": null
          },
          {
            "driveId": 26,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131008",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "已取消",
            "engineerPhone": null
          },
          {
            "driveId": 27,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131009",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "已反馈",
            "engineerPhone": null
          },
          {
            "driveId": 28,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131001",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "待分拨",
            "engineerPhone": null
          },
          {
            "driveId": 29,
            "sex": null,
            "userName": "乾坤",
            "userPhone": "13156671556",
            "proviceCode": null,
            "cityCode": null,
            "address": "辽油大厦",
            "carCode": "GMC6440A",
            "status": "10131003",
            "applyTime": "2017-12-20 06:40",
            "createDate": null,
            "createBy": null,
            "updateDate": null,
            "updateBy": null,
            "oddNumber": null,
            "remark": null,
            "licenseNo": "沪A12345",
            "dispatchCity": "4301",
            "dispatchObject": "CS001",
            "appreciationEngineer": "鉴赏工程师B",
            "counselor": "湘潭首席顾问",
            "manager": "长沙虚拟中心经理",
            "driveAgreementUrl": null,
            "driveStartTime": null,
            "driveEndTime": null,
            "appellation": "先生",
            "statusName": "待确认",
            "engineerPhone": null
          },

        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": false,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
          1
        ]
      },
      "errMsg": "mock数据",
      "time": serverTime,
      "elapsedMilliseconds": 0,
      "success": true
    }

    this.res.json(model);

  }
}


class DriverInfo extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "driveId": 1183,
        "sex": null,
        "userName": "wass",
        "userPhone": "13367889084",
        "proviceCode": "430000",
        "cityCode": "4302",
        "address": "11111",
        "carType": 2,
        "carCode": "GMC6440C",
        "applyTimeType": 0,
        "applyTime": "2018-01-24 20:33:00",
        "tags": "1",
        "remark": "11",
        "dispatchObject": "CS001",
        "manager": "39986",
        "licenseNo": "沪O9211X",
        "appreciationEngineer": "17",
        "counselor": "26",
        "driveStartTime": null,
        "driveEndTime": null,
        "status": 10131003,
        "createDate": "2018-01-24 20:33:44",
        "createBy": null,
        "updateDate": null,
        "updateBy": null,
        "feedbackUrl": null,
        "centerName": "长沙虚拟中心",
        "regionName": "株洲市",
        "appellation": "女士",
        "carName": "林肯CONTINENTAL",
        "statusName": "待确认",
        "managerName": "陆丹丹",
        "couselorName": "首席顾问C",
        "appreciationEngineerName": "鉴赏工程师B",
        "engineerPhone": "13466961040",
        "color": null,
        "remind": "(特别提醒：请在2018-01-27 18:53前完成确认)",
        "applyTimeName": "不限",
        "carTypeName": "轿车",
        "couselorPhone": "18156252217",
        "proviceName": "湖南省",
        "tagsName": "带家人",
        "key": null
      },
      "errMsg": "",
      "time": "2018-01-29 14:14:40",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class DriveFinished extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "data": {},
      "elapsedMilliseconds": 0,
      "errMsg": "",
      "resultCode": 1,
      "success": true,
      "time": serverTime
    }

    this.res.json(model);

  }
}

class Dealer extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "dealerCode": "TYTC001",						//销售店CODE
          "dealerName": "湖南坤宝汽车销售服务有限公司",	//销售店名称
          "dealerShortName": "长沙坤宝天心店",			//销售店简称
          "dealerType": 2,
          "provinceId": "430000",
          "cityId": "4301",
          "regionCode": "1100001316",
          "detailAddress": "长沙市天心区芙蓉南路一段999号",
          "longitude": 112.986521,
          "latitude": 28.136709,
          "sosTel": "13955507664",
          "serviceHotline": "0731-85895555",
          "salesHotline": "0731-85895555",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "J11A001",
          "dealerName": "北京猎豹商贸有限责任公司",
          "dealerShortName": "北京猎豹店",
          "dealerType": 2,
          "provinceId": "110000",
          "cityId": "1101",
          "regionCode": "1100001318",
          "detailAddress": "北京市丰台区南四环西路73号",
          "longitude": 116.330025,
          "latitude": 39.838124,
          "sosTel": "13911828516",
          "serviceHotline": "18500203030",
          "salesHotline": "18500203030",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        }
      ],
      "errMsg": "",
      "time": "2017-12-28 00:14:39",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class Counselor extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "userId": 75,	//顾问ID
          "dealerCode": "00000",	//顾问所属销售店
          "userCode": null,
          "loginName": "xiangtan",
          "userName": "湘潭首席顾问",	//顾问姓名
          "sex": null,
          "birthday": null,
          "phone": "18156671555",		//顾问电话
          "identityCard": null,
          "quartersId": null,
          "quartersSideIds": null,
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "userType": null,
          "createDate": null,
          "createBy": null,
          "updateDate": null,
          "updateBy": null,
          "status": null,
          "emial": null,
          "iconsPhoto": null,
          "vcode": null,
          "failureNum": 0,
          "virtualCenter": null,
          "manager": "61"		//所属经理ID
        },
        {
          "userId": 74,
          "dealerCode": "00000",
          "userCode": null,
          "loginName": "loudi",
          "userName": "娄底首席顾问",
          "sex": null,
          "birthday": null,
          "phone": "18156671554",
          "identityCard": null,
          "quartersId": null,
          "quartersSideIds": null,
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "userType": null,
          "createDate": null,
          "createBy": null,
          "updateDate": null,
          "updateBy": null,
          "status": null,
          "emial": null,
          "iconsPhoto": null,
          "vcode": null,
          "failureNum": 0,
          "virtualCenter": null,
          "manager": "61"
        },
        {
          "userId": 73,
          "dealerCode": "00000",
          "userCode": null,
          "loginName": "yiyang",
          "userName": "益阳首席顾问",
          "sex": null,
          "birthday": null,
          "phone": "18156671553",
          "identityCard": null,
          "quartersId": null,
          "quartersSideIds": null,
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "userType": null,
          "createDate": null,
          "createBy": null,
          "updateDate": null,
          "updateBy": null,
          "status": null,
          "emial": null,
          "iconsPhoto": null,
          "vcode": null,
          "failureNum": 0,
          "virtualCenter": null,
          "manager": "61"
        },
        {
          "userId": 72,
          "dealerCode": "00000",
          "userCode": null,
          "loginName": "zhuzhou",
          "userName": "株洲首席顾问",
          "sex": null,
          "birthday": null,
          "phone": "18156671552",
          "identityCard": null,
          "quartersId": null,
          "quartersSideIds": null,
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "userType": null,
          "createDate": null,
          "createBy": null,
          "updateDate": null,
          "updateBy": null,
          "status": null,
          "emial": null,
          "iconsPhoto": null,
          "vcode": null,
          "failureNum": 0,
          "virtualCenter": null,
          "manager": "61"
        },
        {
          "userId": 71,
          "dealerCode": "00000",
          "userCode": null,
          "loginName": "yueyang",
          "userName": "岳阳首席顾问",
          "sex": null,
          "birthday": null,
          "phone": "18156671551",
          "identityCard": null,
          "quartersId": null,
          "quartersSideIds": null,
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "userType": null,
          "createDate": null,
          "createBy": null,
          "updateDate": null,
          "updateBy": null,
          "status": null,
          "emial": null,
          "iconsPhoto": null,
          "vcode": null,
          "failureNum": 0,
          "virtualCenter": null,
          "manager": "61"
        }
      ],
      "errMsg": "mock数据",
      "time": serverTime,
      "elapsedMilliseconds": 0,
      "success": true
    }

    this.res.json(model);

  }
}

class CarModel extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "carName": "GF8WXTXPZL1C-R04",
          "carCode": "GF8WXTXPZL1C-R04"
        },
        {
          "carName": "GMC6440A",
          "carCode": "GMC6440A"
        },
        {
          "carName": "GMC6471DT",
          "carCode": "GMC6471DT"
        },
        {
          "carName": "GF8WXTHPZL1C-S03",
          "carCode": "GF8WXTHPZL1C-S03"
        },
        {
          "carName": "GF8WXTHPZL1C-R03",
          "carCode": "GF8WXTHPZL1C-R03"
        },
        {
          "carName": "GMC6471F",
          "carCode": "GMC6471F"
        },
        {
          "carName": "NA4WLRGYL1C-D06",
          "carCode": "NA4WLRGYL1C-D06"
        },
        {
          "carName": "GF8WXTHPZL1C-T03",
          "carCode": "GF8WXTHPZL1C-T03"
        },
        {
          "carName": "GMC6440B",
          "carCode": "GMC6440B"
        },
        {
          "carName": "GMC6471CT",
          "carCode": "GMC6471CT"
        },
        {
          "carName": "GMC6431BP",
          "carCode": "GMC6431BP"
        },
        {
          "carName": "GF8WXTXPZL1C-T04",
          "carCode": "GF8WXTXPZL1C-T04"
        },
        {
          "carName": "GMC6471D",
          "carCode": "GMC6471D"
        },
        {
          "carName": "V754WLVXLL1C-H642Y",
          "carCode": "V754WLVXLL1C-H642Y"
        },
        {
          "carName": "GMC6473AS",
          "carCode": "GMC6473AS"
        },
        {
          "carName": "GMC6431A",
          "carCode": "GMC6431A"
        },
        {
          "carName": "GMC6430C",
          "carCode": "GMC6430C"
        },
        {
          "carName": "GF8WXTSPZL1C-R18",
          "carCode": "GF8WXTSPZL1C-R18"
        },
        {
          "carName": "GMC6431B",
          "carCode": "GMC6431B"
        },
        {
          "carName": "V93WLYBVQL1C-K65",
          "carCode": "V93WLYBVQL1C-K65"
        },
        {
          "carName": "GF8WXTMPZL1C-R20",
          "carCode": "GF8WXTMPZL1C-R20"
        },
        {
          "carName": "GMC6440BXP",
          "carCode": "GMC6440BXP"
        },
        {
          "carName": "GMC6473C（尊贵黑内）",
          "carCode": "GMC6473C"
        },
        {
          "carName": "GMC6470A",
          "carCode": "GMC6470A"
        },
        {
          "carName": "GMC6473BS",
          "carCode": "GMC6473BS"
        },
        {
          "carName": "GMC6431CT",
          "carCode": "GMC6431CT"
        },
        {
          "carName": "GMC6430B",
          "carCode": "GMC6430B"
        },
        {
          "carName": "GMC6431C",
          "carCode": "GMC6431C"
        },
        {
          "carName": "GMC6441B",
          "carCode": "GMC6441B"
        },
        {
          "carName": "GF8WXTSPZL1C-R13",
          "carCode": "GF8WXTSPZL1C-R13"
        },
        {
          "carName": "GMC6473A",
          "carCode": "GMC6473A"
        },
        {
          "carName": "GMC6471FT",
          "carCode": "GMC6471FT"
        },
        {
          "carName": "GMC6431FT",
          "carCode": "GMC6431FT"
        },
        {
          "carName": "GMC6431HP",
          "carCode": "GMC6431HP"
        },
        {
          "carName": "GMC6473B",
          "carCode": "GMC6473B"
        },
        {
          "carName": "GA2WXTHHL1C-G83",
          "carCode": "GA2WXTHHL1C-G83"
        },
        {
          "carName": "CW5WXTSHZL1C-D41",
          "carCode": "CW5WXTSHZL1C-D41"
        },
        {
          "carName": "GF7WXTHPZL1C-T02",
          "carCode": "GF7WXTHPZL1C-T02"
        },
        {
          "carName": "GMC6430A",
          "carCode": "GMC6430A"
        },
        {
          "carName": "V93WLYHVL1C-J68",
          "carCode": "V93WLYHVL1C-J68"
        },
        {
          "carName": "GF8WXTMPZL1C-R14",
          "carCode": "GF8WXTMPZL1C-R14"
        },
        {
          "carName": "GA2WXTHHL1C-P85",
          "carCode": "GA2WXTHHL1C-P85"
        },
        {
          "carName": "GF8WXTHPZL1C-R08",
          "carCode": "GF8WXTHPZL1C-R08"
        },
        {
          "carName": "CW5WXTJHZL1C-E94",
          "carCode": "CW5WXTJHZL1C-E94"
        },
        {
          "carName": "V93WLYBVQL1C-K68",
          "carCode": "V93WLYBVQL1C-K68"
        },
        {
          "carName": "GF8WXTXPZL1C-R09",
          "carCode": "GF8WXTXPZL1C-R09"
        },
        {
          "carName": "GA2WXTHHZL1C-G84",
          "carCode": "GA2WXTHHZL1C-G84"
        },
        {
          "carName": "GF8WXTXPZL1C-E04",
          "carCode": "GF8WXTXPZL1C-E04"
        },
        {
          "carName": "GMC6431EP",
          "carCode": "GMC6431EP"
        },
        {
          "carName": "GMC6441BXP",
          "carCode": "GMC6441BXP"
        },
        {
          "carName": "GMC6471C",
          "carCode": "GMC6471C"
        },
        {
          "carName": "GF8WXTMPZL1C-R19",
          "carCode": "GF8WXTMPZL1C-R19"
        },
        {
          "carName": "CW5WXTSHZL1C-K7B",
          "carCode": "CW5WXTSHZL1C-K7B"
        },
        {
          "carName": "CW5WXTSHZL1C-F97",
          "carCode": "CW5WXTSHZL1C-F97"
        }
      ],
      "errMsg": "",
      "time": "2017-12-26 16:52:34",
      "elapsedMilliseconds": 0,
      "success": true
    }

    this.res.json(model);

  }
}

class Engineer extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "userId": 37,					//工程师ID
          "dealerCode": "BMWF001",		//所属经销商CODE
          "userCode": null,
          "loginName": "gongchengshid",
          "userName": "鉴赏工程师F",	//工程师姓名
          "sex": null,
          "birthday": null,
          "phone": "17602180454",		//工程师电话
          "identityCard": null,
          "quartersId": null,
          "quartersSideIds": null,
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "userType": null,
          "createDate": null,
          "createBy": null,
          "updateDate": null,
          "updateBy": null,
          "status": null,
          "emial": null,
          "iconsPhoto": null,
          "vcode": "UZGR",
          "failureNum": 0,
          "virtualCenter": null,
          "manager": null
        },
        {
          "userId": 40,					//工程师ID
          "dealerCode": "BMWF001",		//所属经销商CODE
          "userCode": null,
          "loginName": "gongchengshid",
          "userName": "鉴赏工程师D",	//工程师姓名
          "sex": null,
          "birthday": null,
          "phone": "17602180454",		//工程师电话
          "identityCard": null,
          "quartersId": null,
          "quartersSideIds": null,
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "userType": null,
          "createDate": null,
          "createBy": null,
          "updateDate": null,
          "updateBy": null,
          "status": null,
          "emial": null,
          "iconsPhoto": null,
          "vcode": "UZGR",
          "failureNum": 0,
          "virtualCenter": null,
          "manager": null
        }
      ],
      "errMsg": "",
      "time": "2017-12-27 23:39:48",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class ConfirmOrder extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",
        "errorMsg": "该试驾确认成功"
      },
      "errMsg": "",
      "time": "2017-12-28 00:41:19",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class Cancel extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",
        "errorMsg": "该预约已成功取消"
      },
      "errMsg": "",
      "time": "2017-12-28 01:25:43",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class ResourceObject extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "centerId": 1,					//编号
          "centerName": "长沙虚拟中心",		//虚拟中心名称
          "centerCode": "CS001",			//虚拟中心CODE
          "createDate": 1513653900000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null,
          "cityCode": "4301"				//所在城市CODE
        },
        {
          "centerId": 2,
          "centerName": "衡阳虚拟中心",
          "centerCode": "HY001",
          "createDate": 1513653900000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null,
          "cityCode": "4304"
        },
        {
          "centerId": 3,
          "centerName": "常德虚拟中心",
          "centerCode": "CD001",
          "createDate": 1513653900000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null,
          "cityCode": "4307"
        }
      ],
      "errMsg": "",
      "time": "2017-12-27 23:28:47",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}


class Dispatch extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",
        "errorMsg": "分拨该预约单成功"
      },
      "errMsg": "",
      "time": "2017-12-27 23:46:05",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}



class CarList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        "辽A307W*",
        "沪B201F*",
        "皖H888N*",
        "浙K999M*",
      ],
      "errMsg": "",
      "time": "2017-12-27 23:35:55",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class DispatchCarList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        "辽A307W*",
        "沪B201F*",
        "皖H888N*",
        "浙K999M*",
      ],
      "errMsg": "",
      "time": "2017-12-27 23:35:55",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}


class Manager extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",
        "errorMsg": "经理接单成功"
      },
      "errMsg": "",
      "time": "2017-12-28 00:20:20",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class UnableToRespond extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",
        "errorMsg": "该单已处理为-无法响应"
      },
      "errMsg": "",
      "time": "2017-12-27 23:49:26",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class Start extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",
        "errorMsg": "已成功出发"
      },
      "errMsg": "",
      "time": "2017-12-28 11:26:33",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class DriveAgreement extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",				//1是成功，0是异常
        "errorMsg": "上传试驾协议成功"	//errorCode为0时返回异常信息，为1时返回成功信息
      },
      "errMsg": "",
      "time": "2017-12-27 23:17:01",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}

class Evaluate extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "errorCode": "1",
        "errorMsg": "新增试驾人成功"
      },
      "errMsg": "",
      "time": "2017-12-28 16:28:36",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}


class GoodsList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "goodsId": 1,											//物品ID
          "goodsName": "《林肯中国远程试乘试驾客户反馈表》",	//物品名称
          "goodsStatus": "1",									//物品状态：1(必选);2(可选)
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 2,
          "goodsName": "《林肯车型宣传彩页》",
          "goodsStatus": "1",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 3,
          "goodsName": "《好客包》",
          "goodsStatus": "1",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 4,
          "goodsName": "《林肯中国试乘试驾协议》",
          "goodsStatus": "1",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 5,
          "goodsName": "《林肯雨伞》",
          "goodsStatus": "1",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 6,
          "goodsName": "《干湿纸巾》",
          "goodsStatus": "1",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 7,
          "goodsName": "《手机充电器》",
          "goodsStatus": "1",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 8,
          "goodsName": "《水笔、写字板》",
          "goodsStatus": "1",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 9,
          "goodsName": "个性化用户体验(毛毯、热水壶)",
          "goodsStatus": "2",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 10,
          "goodsName": "iPad",
          "goodsStatus": "2",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 11,
          "goodsName": "《DVD》",
          "goodsStatus": "2",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "goodsId": 12,
          "goodsName": "小礼品",
          "goodsStatus": "2",
          "createDate": 1514370600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        }
      ],
      "errMsg": "",
      "time": "2017-12-28 11:12:34",
      "success": true,
      "elapsedMilliseconds": 0
    }

    this.res.json(model);

  }
}


class TagsList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "tagId": 1,
          "tagName": "带家人",
          "createDate": 1515055500000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "tagId": 2,
          "tagName": "不要黑色",
          "createDate": 1515055500000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        }
      ],
      "errMsg": "",
      "time": "2018-01-08 14:11:22",
      "success": true,
      "elapsedMilliseconds": 0
    }
    this.res.json(model);
  }
}

class CarTypeList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "id": 1,
          "carCode": "GMC6440B",
          "carName": "林肯MKC",
          "carType": 1,
          "createDate": 1515054600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "id": 2,
          "carCode": "GMC6440C",
          "carName": "林肯MKX",
          "carType": 1,
          "createDate": 1515054600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "id": 3,
          "carCode": "GMC6440D",
          "carName": "林肯NAVIGATOR",
          "carType": 1,
          "createDate": 1515054600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        },
        {
          "id": 4,
          "carCode": "GMC6440E",
          "carName": "全新林肯NAVIGATOR",
          "carType": 1,
          "createDate": 1515054600000,
          "createBy": 666666,
          "updateDate": null,
          "updateBy": null
        }
      ],
      "errMsg": "",
      "time": "2018-01-11 16:53:44",
      "success": true,
      "elapsedMilliseconds": 0
    }
    this.res.json(model);
  }
}

class ResourceDealer extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": [
        {
          "dealerCode": "J11A001",
          "dealerName": "北京猎豹商贸有限责任公司",
          "dealerShortName": "北京猎豹店",
          "dealerType": 2,
          "provinceId": "110000",
          "cityId": "1101",
          "regionCode": "1100001318",
          "detailAddress": "北京市丰台区南四环西路73号",
          "longitude": 116.330025,
          "latitude": 39.838124,
          "sosTel": "13911828516",
          "serviceHotline": "18500203030",
          "salesHotline": "18500203030",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "MKCN001",
          "dealerName": "湖南力天林肯中心",
          "dealerShortName": "湖南力天林肯中心",
          "dealerType": 2,
          "provinceId": "320000",
          "cityId": "3201",
          "regionCode": "1100001313",
          "detailAddress": "南京市江宁区临麒南路2号",
          "longitude": 118.880197,
          "latitude": 31.97977,
          "sosTel": "13195571556",
          "serviceHotline": "025-86102222",
          "salesHotline": "025-86102222",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "BMWH001",
          "dealerName": "郑州郑德宝汽车销售服务有限公司",
          "dealerShortName": "郑州郑德宝店",
          "dealerType": 2,
          "provinceId": "410000",
          "cityId": "4101",
          "regionCode": "1100001317",
          "detailAddress": "河南省郑州市花园北路与连霍高速交汇处向北500米",
          "longitude": 113.679336,
          "latitude": 34.848414,
          "sosTel": "13195571556",
          "serviceHotline": "0371-6551 9999",
          "salesHotline": "0371-6551 9999",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "J31A001",
          "dealerName": "湖南力天林肯中心衡阳分公司",
          "dealerShortName": "湖南力天林肯中心衡阳分公司",
          "dealerType": 2,
          "provinceId": "310000",
          "cityId": "3101",
          "regionCode": "1100001319",
          "detailAddress": "上海市嘉定区祁连山南路2199号1层C区",
          "longitude": 121.378934,
          "latitude": 31.258582,
          "sosTel": "13156671556",
          "serviceHotline": "021-39177300",
          "salesHotline": "021-39177300",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "BMWF001",
          "dealerName": "厦门信达通宝汽车销售服务有限公司",
          "dealerShortName": "厦门通宝店",
          "dealerType": 2,
          "provinceId": "350000",
          "cityId": "3502",
          "regionCode": "1100001314",
          "detailAddress": "厦门市湖里区枋钟路机场候机楼广场西南",
          "longitude": 118.134548,
          "latitude": 24.531989,
          "sosTel": "13955507664",
          "serviceHotline": "0592-3338888",
          "salesHotline": "0592-3338888",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "TYTC001",
          "dealerName": "湖南坤宝汽车销售服务有限公司",
          "dealerShortName": "长沙坤宝天心店",
          "dealerType": 2,
          "provinceId": "430000",
          "cityId": "4301",
          "regionCode": "1100001316",
          "detailAddress": "长沙市天心区芙蓉南路一段999号",
          "longitude": 112.986521,
          "latitude": 28.136709,
          "sosTel": "13955507664",
          "serviceHotline": "0731-85895555",
          "salesHotline": "0731-85895555",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "MKZT001",
          "dealerName": "湖南力天中南林肯中心",
          "dealerShortName": "湖南力天中南林肯中心",
          "dealerType": 2,
          "provinceId": "120000",
          "cityId": "1201",
          "regionCode": "1100001312",
          "detailAddress": "天津自贸试验区环河西路8号",
          "longitude": 117.364222,
          "latitude": 39.158508,
          "sosTel": "13195571556",
          "serviceHotline": "022-58992595",
          "salesHotline": "022-58992595",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "BUKA001",
          "dealerName": "湖北博城汽车销售服务有限公司",
          "dealerShortName": "湖北博城店",
          "dealerType": 2,
          "provinceId": "420000",
          "cityId": "4201",
          "regionCode": "1100001315",
          "detailAddress": "武汉市江岸区黄埔科技园特6号",
          "longitude": 114.277366,
          "latitude": 30.629937,
          "sosTel": "13955507664",
          "serviceHotline": "4008908667",
          "salesHotline": "4008908667",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "TYTS001",
          "dealerName": "湖南力天林肯中心常德分公司",
          "dealerShortName": "湖南力天林肯中心常德分公司",
          "dealerType": 2,
          "provinceId": "430000",
          "cityId": "4307",
          "regionCode": "1100001319",
          "detailAddress": "上海市浦东新区御桥路1458号",
          "longitude": 121.560408,
          "latitude": 31.155717,
          "sosTel": "13156671556",
          "serviceHotline": "021-68930345",
          "salesHotline": "021-68930345",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": 1514946816000,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": "http://weixin.qq.com/q/02C6GXV4AraGP10000007q",
          "wxQrcodeTicket": "gQH88DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyQzZHWFY0QXJhR1AxMDAwMDAwN3EAAgQAQUxaAwQAAAAA",
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        },
        {
          "dealerCode": "J31A001*",
          "dealerName": "上海东昌汽车服务有限公司",
          "dealerShortName": "上海东昌花木店",
          "dealerType": 2,
          "provinceId": "310000",
          "cityId": "3101",
          "regionCode": "1100001319",
          "detailAddress": "浦东新区浦建路1285号",
          "longitude": 121.543251,
          "latitude": 31.205897,
          "sosTel": "13955507664",
          "serviceHotline": "4008908667",
          "salesHotline": "4008908667",
          "starRating": null,
          "pictureUrl": null,
          "deleteFlag": "1",
          "ascStatus": null,
          "onlineStatus": null,
          "incrementalTime": null,
          "createDate": 1513588233000,
          "updateDate": null,
          "createBy": 111111,
          "updateBy": null,
          "url": null,
          "dealerlng": null,
          "dealerlat": null,
          "isCharge": 10011002,
          "contactsMan": null,
          "contactsTel": null,
          "managerEmail": null,
          "belongGroup": null,
          "belongAgent": null,
          "customerCare": null,
          "wechatSenior": null,
          "firstWord": null,
          "isSampleplate": null,
          "templetMsg": null,
          "profession": null,
          "chainStore": null,
          "logsUrl": null,
          "authorizerAppid": null,
          "dmsDealerCode": null,
          "imgCreateDate": null,
          "tmBrandId": null,
          "townId": null,
          "dictionaryCode": null,
          "isTestAccount": null,
          "tmWxPublicAccountId": null,
          "wxQrcodeUrl": null,
          "wxQrcodeTicket": null,
          "dealerId": null,
          "gscDealerFlag": 0,
          "gscMaxMileage": 100
        }
      ],
      "errMsg": "",
      "time": "2018-01-12 17:13:48",
      "success": true,
      "elapsedMilliseconds": 0
    }
    this.res.json(model);
  }
}

class ResourceUsage extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 10,
        "orderBy": null,
        "startRow": 0,
        "endRow": 9,
        "total": 10,
        "pages": 1,
        "list": [
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "粤A-5YS6X",
            "dealerName": "湖南力天林肯中心",
            "centerName": "长沙虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "冀AF89UX",
            "dealerName": "湖南力天林肯中心衡阳分公司",
            "centerName": "长沙虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "蒙K02C3X",
            "dealerName": "湖南力天中南林肯中心",
            "centerName": "长沙虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "沪A01W8X",
            "dealerName": "湖南力天林肯中心衡阳分公司",
            "centerName": "长沙虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "渝B7Q11X",
            "dealerName": "湖南力天林肯中心衡阳分公司",
            "centerName": "长沙虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "鲁KWX69X",
            "dealerName": "湖南力天林肯中心衡阳分公司",
            "centerName": "长沙虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "浙A5Z556",
            "dealerName": "北京猎豹商贸有限责任公司",
            "centerName": "衡阳虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "鲁KAH39X",
            "dealerName": "湖南坤宝汽车销售服务有限公司",
            "centerName": "衡阳虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "津R-F596X",
            "dealerName": "北京猎豹商贸有限责任公司",
            "centerName": "衡阳虚拟中心"
          },
          {
            "modelName": "GMC6440A",
            "timeList": [
              {
                "resource": "",
                "time": "09:00"
              },
              {
                "resource": "",
                "time": "09:30"
              },
              {
                "resource": "",
                "time": "10:00"
              },
              {
                "resource": "",
                "time": "10:30"
              },
              {
                "resource": "",
                "time": "11:00"
              },
              {
                "resource": "",
                "time": "11:30"
              },
              {
                "resource": "",
                "time": "12:00"
              },
              {
                "resource": "",
                "time": "12:30"
              },
              {
                "resource": "",
                "time": "13:00"
              },
              {
                "resource": "",
                "time": "13:30"
              },
              {
                "resource": "",
                "time": "14:00"
              },
              {
                "resource": "",
                "time": "14:30"
              },
              {
                "resource": "",
                "time": "15:00"
              },
              {
                "resource": "",
                "time": "15:30"
              },
              {
                "resource": "",
                "time": "16:00"
              },
              {
                "resource": "",
                "time": "16:30"
              },
              {
                "resource": "",
                "time": "17:00"
              },
              {
                "resource": "",
                "time": "17:30"
              },
              {
                "resource": "",
                "time": "18:00"
              }
            ],
            "licenseNo": "京NN204X",
            "dealerName": "北京猎豹商贸有限责任公司",
            "centerName": "衡阳虚拟中心"
          }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
          1
        ]
      },
      "errMsg": "",
      "time": "2018-01-15 10:42:51",
      "success": true,
      "elapsedMilliseconds": 0
    }
    this.res.json(model);
  }
}

class FeedBackList extends BaseRoute {
  handle() {
    const serverTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const model = {
      "resultCode": 1,
      "data": {
        "id": 41,
        "driveId": "898",
        "compareModel": "欧蓝德",
        "buyType": 0,
        "buyTypeName": "首购",
        "currentCar": null,
        "purchasingPlan": 0,
        "purchasingPlanName": "全款",
        "deliveryTime": 0,
        "deliveryTimeName": "7天",
        "deliveryType": 0,
        "deliveryTypeName": "上门交车服务",
        "remark": null,
        "createDate": "2018-01-15 18:08:14",
        "createBy": null,
        "updateDate": null,
        "updateBy": null
      },
      "errMsg": "",
      "time": "2018-01-16 17:47:21",
      "success": true,
      "elapsedMilliseconds": 0
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


  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/userInfo`, UpdateDealerUsers.makeRouteHandle());


  router.get(`${ROUTE_BASE_PATH}/mock/token/create`, CreateToken.makeRouteHandle());

  router.post(`${ROUTE_BASE_PATH}/mock/token/decode`, DecodeToken.makeRouteHandle());

  router.post(`${ROUTE_BASE_PATH}/mock/token/update`, UpdateToken.makeRouteHandle());

  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/list`, ManagerList.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/driverInfo`, DriverInfo.makeRouteHandle());
  router.post(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/driveFinished`, DriveFinished.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/dealer`, Dealer.makeRouteHandle());

  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/counselor`, Counselor.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/carModel`, CarModel.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/carList`, CarList.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/carTypeList`, CarTypeList.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/dispatchCarList`, DispatchCarList.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/engineer`, Engineer.makeRouteHandle());
  router.post(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/confirmOrder`, ConfirmOrder.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/cancel`, Cancel.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/tagsList`, TagsList.makeRouteHandle());

  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/resourceUsage`, ResourceUsage.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/resourceObject`, ResourceObject.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/resourceDealer`, ResourceDealer.makeRouteHandle());
  router.post(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/dispatch`, Dispatch.makeRouteHandle());
  router.post(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/manager`, Manager.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/unableToRespond`, UnableToRespond.makeRouteHandle());
  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/feedBackList`, FeedBackList.makeRouteHandle());

  router.post(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/start`, Start.makeRouteHandle());

  router.post(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/driveAgreement`, DriveAgreement.makeRouteHandle());

  router.get(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/goodsList`, GoodsList.makeRouteHandle());

  router.post(`${ROUTE_BASE_PATH}/mock/dealer/api/v1/evaluate`, Evaluate.makeRouteHandle());






};

export default routeHandle;