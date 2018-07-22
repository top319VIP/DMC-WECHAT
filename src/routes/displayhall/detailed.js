import React, { Component } from 'react';
import $ from 'jquery';
import Layout from '../../components/Layout';
import Http from '../../utils/http';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style/detailed.scss';
import car from './images/noCar.png';


const title = "详细配置";

const apis = [
  { "id": "packages", "url": "packages" },

  { "id": "carInfo", "url": "bsd/post", "mock": "user/post", "format": false },
];

// Http.setDomainUrl("http://localhost:9019/showroom/api/v1/");
Http.setDomainUrl("http://40.125.204.129/wx/showroom/api/v1/")

Http.setMutiApi(apis);

// const headers = {"access-token":"balabala"};

// Http.setRequestHeader(headers).get("userInfo",{"name":"wangdogfen"},(callback)=>{
//   console.log('userInfo--get----callback---->',callback);
// })

// Http.post("carInfo",{"test":"postman"},(callback)=>{
//   console.log('carInfo--post----callback---->',callback);
// })


class DDisplayHall extends Component {
  componentWillMount() {
    this.setState({
      sub: {
        flagIco: car,
        prand: "宝马5系",
        grounding: "43-77",
        outputVolume: [
          {
            volume: "全部排量",
            list: [
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
            ]
          },
          {
            volume: "3.0T",
            list: [
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
            ]
          },
          {
            volume: "2.0T",
            list: [
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
              {
                carName: "BMW 5系旅行轿车 520i*",
                guidePrice: "48.9",
                shopsPrices: "48.9"
              },
            ]
          },
        ]
      },
      detail: {
        "brandCode": "GMMC",
        "brandName": "广汽三菱",
        "seriesCode": "CK",
        "seriesName": "帕杰罗",
        "modelCode": "CK_2005",
        "modelName": "CK_2005",
        "guidePrice": null,
        "localPrice": null,
        "includeLincesePrice": null,
        "includeAllPrice": null,
        "packageCode": "CFA2031GDM",
        "packageName": "CFA2031GDM",
        "vehicleModel": "--/--",
        "standardGear": null,
        "engine": "--/--/--",
        "gearbox": "--/--",
        "bodyStructure": "--/--/--",
        "miitFuelConsum": null,
        "length": null,
        "width": null,
        "height": null,
        "wheelBase": null,
        "fwTrack": null,
        "rwTrack": null,
        "curbWeight": null,
        "cargoVolume": null,
        "engineModel": null,
        "displacement": null,
        "cylinderVolume": null,
        "airIntakeForm": null,
        "cylinderArran": null,
        "cylinderNum": null,
        "cylinderNumPer": null,
        "reductionRatio": null,
        "maxHorsepower": null,
        "maxPower": null,
        "maxPowerSpeed": null,
        "maxTorque": null,
        "maxTorqueSpeed": null,
        "fuelType": null,
        "fuelLabel": null,
        "oilSupplyWay": null,
        "fueltankVolume": null,
        "gearNum": null,
        "gearboxType": null,
        "driveWay": null,
        "frontSusType": null,
        "rearSusType": null,
        "powerType": null,
        "faType": null,
        "raType": null,
        "ftSize": null,
        "rtSize": null,
        "spareTireSize": null,
        "wheelHubMaterial": null,
        "drivingAirbag": null,
        "copilotAirbag": null,
        "fsAirbag": null,
        "fhAirbag": null,
        "kneeAirbag": null,
        "rsAirbag": null,
        "rhAirbag": null,
        "saBeltPrompt": null,
        "tirePmDevices": null,
        "zeroPressureLc": null,
        "cenLock": null,
        "csLock": null,
        "teleKey": null,
        "keylessSs": null,
        "engineElecGuard": null,
        "absAntiLock": null,
        "brakeForceDisb": null,
        "brakeAssist": null,
        "tractionControl": null,
        "stabilityControl": null,
        "assistParking": null,
        "slopeSlowDescent": null,
        "varSusp": null,
        "airSusp": null,
        "varSteerRatio": null,
        "autoPi": null,
        "autoCruise": null,
        "cruiseControl": null,
        "doublingAuxiliary": null,
        "initiativeBrake": null,
        "activeSteerSystem": null,
        "powerSunroof": null,
        "panoramicSunroof": null,
        "motionAppearSuite": null,
        "elecSuctionDoor": null,
        "leatherSw": null,
        "swAdjust": null,
        "swElecAdjust": null,
        "multiFunSw": null,
        "swShift": null,
        "reverRadar": null,
        "reverVideoImages": null,
        "drivingScreen": null,
        "hudDigisplay": null,
        "gps": null,
        "locInterServices": null,
        "nvSystem": null,
        "controlLcdDisplay": null,
        "panoramicCamera": null,
        "ccScreen": null,
        "catTv": null,
        "rearLcd": null,
        "multimediaSystem": null,
        "speakersNum": null,
        "seatMateria": null,
        "movementStyleSeats": null,
        "seatHeightAdjust": null,
        "lsAdjust": null,
        "ssAdjust": null,
        "driversElecAdjust": "--/--",
        "srAngleAdjust": null,
        "srSeatMove": null,
        "rsElecAdjust": null,
        "elecChairMemory": null,
        "frSeatHeating": "--/--",
        "rsVentilation": null,
        "massageSeat": null,
        "trSeats": null,
        "rsWayDown": null,
        "frCentralArmrest": "--/--",
        "rearCupHolder": null,
        "bcPhone": null,
        "extAudioInterface": null,
        "audioSupportMp3": null,
        "headlight": null,
        "drLamps": null,
        "autoHeadlights": null,
        "shLamp": null,
        "frontFogLamp": null,
        "hhAdjust": null,
        "hcDevice": null,
        "atmoCarLights": null,
        "frElecWins": "--/--",
        "winClipHandFun": null,
        "heatProtectGlass": null,
        "rmElecRegulation": null,
        "rmHeating": null,
        "rmAntiGlare": null,
        "rmElecFolding": null,
        "rmMemory": null,
        "rearWs": null,
        "rearsideWs": null,
        "vcMirror": null,
        "rearWiper": null,
        "sensingWiper": null,
        "acControlMode": null,
        "rearIndeAc": null,
        "rearDiffuser": null,
        "tpZoneControl": null,
        "carAirCondi": null,
        "carRefrigerator": null,
        "picUrl": null
      }
    });

    let _this = this;
    const packageCode = this.props.query.packageCode;
    Http.get('packages', { packageCode: packageCode }, (result) => {
      if (result) {
        _this.setState({
          detail: result
        })
      }
      console.log(_this.state.detail)
    })


  }
  render() {
    const v = this.state.detail;
    return (
      <div className={s.sub} id="detailed">
        <div className={s.title}>
          <div className={s.left}>
            <p>{v.seriesName}</p>
            <p>
              <span>指导价</span>
              <span>￥ {v.guidePrice} 万</span>
            </p>
            <p>
              <span>本店价</span>
              <span>￥ {v.localPrice} 万</span>
            </p>
          </div>
          <div className={s.rImg}>
            <img src={v.picUrl ? v.picUrl : car} />
          </div>
          <p>
            <span><i></i>试驾预约</span>
            <span><i></i>咨询低价</span>
          </p>
        </div>
        <div className={s.essential}>
          <div className={s.tit}>
            <span>基本参数</span>
            <i onClick={this.checkShow.bind(this, this)} className={s.iconfont} alt="右箭头">&#xe600;</i>
          </div>
          <ul>
            <li>
              <span>排放标准</span>
              <span>{v.standardGear}</span>
            </li>
            <li>
              <span>排量</span>
              <span>{v.displacement}</span>
            </li>
            <li>
              <span>类型</span>
              <span>{v.vehicleModel}</span>
            </li>
            <li>
              <span>车身型式</span>
              <span>{v.bodyStructure}</span>
            </li>
            <li>
              <span>工信部综合油耗(L/100km)</span>
              <span>{v.miitFuelConsum}</span>
            </li>
          </ul>
        </div>
        <div className={s.bodywork}>
          <div className={s.tit}>
            <span>车身配置</span>
            <i className={s.iconfont} alt="右箭头">&#xe600;</i>
          </div>
          <ul>
            <li>
              <span>长度(mm)</span>
              <span>{v.length}</span>
            </li>
            <li>
              <span>宽度(mm)</span>
              <span>{v.width}</span>
            </li>
            <li>
              <span>高度(mm)</span>
              <span>{v.height}</span>
            </li>
            <li>
              <span>轴距(mm)</span>
              <span>{v.wheelBase}</span>
            </li>
            <li>
              <span>前轮距(mm)</span>
              <span>{v.fwTrack}</span>
            </li>
            <li>
              <span>后轮距(mm)</span>
              <span>{v.rwTrack}</span>
            </li>
            <li>
              <span>整备质量(kg)</span>
              <span>{v.curbWeight}</span>
            </li>
            <li>
              <span>行李厢容积(L)</span>
              <span>{v.cargoVolume}</span>
            </li>
          </ul>
        </div>
        <div className={s.safeConfig}>
          <div className={s.tit}>
            <span>安全配置</span>
            <i className={s.iconfont} alt="右箭头">&#xe600;</i>
          </div>
          <ul>
            <li>
              <span>驾驶位安全气囊</span>
              <span>{v.drivingAirbag}</span>
            </li>
            <li>
              <span>副驾驶位安全气囊</span>
              <span>{v.copilotAirbag}</span>
            </li>
            <li>
              <span>前排侧安全气囊</span>
              <span>{v.fsAirbag}</span>
            </li>
            <li>
              <span>前排头部气囊(气帘)</span>
              <span>{v.fhAirbag}</span>
            </li>
            <li>
              <span>膝部气囊</span>
              <span></span>
            </li>
            <li>
              <span>后排侧安全气囊</span>
              <span>{v.rsAirbag}</span>
            </li>
            <li>
              <span>后排头部气囊(气帘)</span>
              <span>{v.rhAirbag}</span>
            </li>
            <li>
              <span>安全带未系提示</span>
              <span>{v.saBeltPrompt}</span>
            </li>
            <li>
              <span>胎压监测装置</span>
              <span>{v.tirePmDevices}</span>
            </li>
            <li>
              <span>零压续行(零胎压继续行驶)</span>
              <span>{v.zeroPressureLc}</span>
            </li>
            <li>
              <span>中控门锁</span>
              <span>{v.cenLock}</span>
            </li>
            <li>
              <span>儿童锁</span>
              <span>{v.csLock}</span>
            </li>
            <li>
              <span>遥控钥匙</span>
              <span>{v.teleKey}</span>
            </li>
            <li>
              <span>无钥匙启动系统</span>
              <span>{v.keylessSs}</span>
            </li>
            <li>
              <span>发动机电子防盗</span>
              <span>{v.engineElecGuard}</span>
            </li>
          </ul>
        </div>
        <div className={s.outsideConfig}>
          <div className={s.tit}>
            <span>外部配置</span>
            <i className={s.iconfont} alt="右箭头">&#xe600;</i>
          </div>
          <ul>
            <li>
              <span>电动天窗</span>
              <span>{v.powerSunroof}</span>
            </li>
            <li>
              <span>全景天窗</span>
              <span>{v.panoramicSunroof}</span>
            </li>
            <li>
              <span>运动外观套件</span>
              <span>{v.motionAppearSuite}</span>
            </li>
            <li>
              <span>电动吸合门</span>
              <span>{v.elecSuctionDoor}</span>
            </li>
          </ul>
        </div>
        <div className={s.interiorConfig}>
          <div className={s.tit}>
            <span>内部配置</span>
            <i className={s.iconfont} alt="右箭头">&#xe600;</i>
          </div>
          <ul>
            <li>
              <span>真皮方向盘B80:B98</span>
              <span>{v.leatherSw}</span>
            </li>
            <li>
              <span>外部配置-B80:B98电动吸合门</span>
              <span>{v.swAdjust}</span>
            </li>
            <li>
              <span>方向盘电动调节</span>
              <span>{v.swElecAdjust}</span>
            </li>
            <li>
              <span>多功能方向盘</span>
              <span>{v.multiFunSw}</span>
            </li>
            <li>
              <span>方向盘换挡</span>
              <span>{v.swShift}</span>
            </li>
            <li>
              <span>倒车雷达</span>
              <span>{v.reverRadar}</span>
            </li>
            <li>
              <span>倒车视频影像</span>
              <span>{v.reverVideoImages}</span>
            </li>
            <li>
              <span>行车电脑显示屏</span>
              <span>{v.drivingScreen}</span>
            </li>
            <li>
              <span>HUD抬头数字显示</span>
              <span>{v.hudDigisplay}</span>
            </li>
            <li>
              <span>GPS导航系统</span>
              <span>{v.gps}</span>
            </li>
            <li>
              <span>定位互动服务</span>
              <span>{v.locInterServices}</span>
            </li>
            <li>
              <span>夜视系统</span>
              <span>{v.nvSystem}</span>
            </li>
            <li>
              <span>中控液晶屏分屏显示</span>
              <span>{v.controlLcdDisplay}</span>
            </li>
            <li>
              <span>全景摄像头</span>
              <span>{v.panoramicCamera}</span>
            </li>
            <li>
              <span>中控台彩色大屏</span>
              <span>{v.ccScreen}</span>
            </li>
            <li>
              <span>车载电视</span>
              <span>{v.catTv}</span>
            </li>
            <li>
              <span>后排液晶屏</span>
              <span>{v.rearLcd}</span>
            </li>
            <li>
              <span>多媒体系统</span>
              <span>{v.multimediaSystem}</span>
            </li>
            <li>
              <span>扬声器数量</span>
              <span>{v.speakersNum}</span>
            </li>
          </ul>
        </div>
        <div className={s.engineOil}>
          <div className={s.tit}>
            <span>发动机油</span>
            <i className={s.iconfont} alt="右箭头">&#xe600;</i>
          </div>
          <ul>
            <li>
              <span>发动机型号</span>
              <span>{v.engineModel}</span>
            </li>
            <li>
              <span>气缸容积(mL)</span>
              <span>{v.cylinderVolume}</span>
            </li>
            <li>
              <span>进气形式</span>
              <span>{v.airIntakeForm}</span>
            </li>
            <li>
              <span>气缸排列型式</span>
              <span>{v.cylinderArran}</span>
            </li>
            <li>
              <span>气缸数(个)</span>
              <span>{v.cylinderNum}</span>
            </li>
            <li>
              <span>每缸气门数(个)</span>
              <span>{v.cylinderNumPer}</span>
            </li>
            <li>
              <span>压缩比</span>
              <span>{v.reductionRatio}</span>
            </li>
            <li>
              <span>最大马力(Ps)</span>
              <span>{v.maxHorsepower}</span>
            </li>
            <li>
              <span>最大功率(kW)</span>
              <span>{v.maxPower}</span>
            </li>
            <li>
              <span>最大功率转速(rpm)</span>
              <span>{v.maxPowerSpeed}</span>
            </li>
            <li>
              <span>最大扭矩(Nm)</span>
              <span>{v.maxTorque}</span>
            </li>
            <li>
              <span>最大扭矩转速(rpm)</span>
              <span>{v.maxTorqueSpeed}</span>
            </li>
            <li>
              <span>燃料类型</span>
              <span>{v.fuelType}</span>
            </li>
            <li>
              <span>燃油标号</span>
              <span>{v.fuelLabel}</span>
            </li>
            <li>
              <span>供油方式</span>
              <span>{v.oilSupplyWay}</span>
            </li>
            <li>
              <span>燃油箱容积(L)</span>
              <span>{v.fueltankVolume}</span>
            </li>
          </ul>
        </div>
        <div className={s.gearBox}>
          <div className={s.tit}>
            <span>变速箱</span>
            <i className={s.iconfont} alt="右箭头">&#xe600;</i>
          </div>
          <ul>
            <li>
              <span>挡位个数</span>
              <span>{v.gearNum}</span>
            </li>
            <li>
              <span>变速箱类型</span>
              <span>v.gearboxType</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  checkShow(e) {
  }
  componentWillReceiveProps() { }
  componentDidMount() {
    $('#detailed>div>div').on('click', function () {
      let node = $(this).siblings('ul');
      let i = $(this).children('i')[0];
      if ($(node).css('display') == 'none') {
        $(node).show();
        i.innerHTML = '&#xe61b;';
      } else {
        $(node).hide();
        i.innerHTML = '&#xe600;';
      }
    })
  }
}

const DisplayHall = withStyles(s)(DDisplayHall);

function action({path,query,hash}) {
  return {
    chunks: ['displayhallDetailed'],
    title,
    component: (
      <Layout>
        <DisplayHall query={query}/>
      </Layout>
    ),
  };
}
export default action;