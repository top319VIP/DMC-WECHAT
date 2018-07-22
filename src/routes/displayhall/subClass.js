import React, { Component } from 'react';
import Layout from '../../components/Layout';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Http from './../../utils/http';
import s from './style/subClass.scss';
import car from './images/noCar.png';



const title = "新车展厅";

const apis = [
  { "id": "series", "url": "series", "mock": "displayhall/series", "format": true },
];

// Http.setDomainUrl("http://localhost:9019/showroom/api/v1/");
Http.setDomainUrl("http://40.125.204.129/wx/showroom/api/v1/");
// Http.setDebugger(true);
Http.setMutiApi(apis);

class DDisplayHall extends Component {
  componentWillMount() {
    let _this = this;
    // this.setState({
    //   currentIndex: 0,
    //   cantena: [{
    //     models:[{
    //       packages:[{}]
    //     }]
    //   }]
    // })
    const seriesCode = this.props.query.seriesCode;

    this.setState({
      currentIndex: 0,
      cantena: {
        "brandCode": null,
        "brandName": null,
        "seriesCode": "BMX1",
        "seriesName": "宝马X系",
        "seriesCount": null,
        "localPriceMax": null,
        "localPriceMin": null,
        "models": [{
          "modelCode": "BMX1-30",
          "modelName": "BMX1-30",
          "seriesCode": null,
          "displacement": null,
          "gearboxType": null,
          "packages": [{
            "brandCode": null,
            "brandName": null,
            "seriesCode": null,
            "seriesName": null,
            "modelCode": null,
            "modelName": null,
            "guidePrice": null,
            "localPrice": null,
            "includeLincesePrice": null,
            "includeAllPrice": null,
            "picUrl": "http://40.125.204.129/fs01/carModel/BMWx1.png",
            "packageCode": "V64WLYXVL1C-H4T",
            "packageName": "V64WLYXVL1C-H4T",
            "vehicleModel": null,
            "standardGear": null,
            "engine": null,
            "gearbox": null,
            "bodyStructure": null,
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
            "driversElecAdjust": null,
            "srAngleAdjust": null,
            "srSeatMove": null,
            "rsElecAdjust": null,
            "elecChairMemory": null,
            "frSeatHeating": null,
            "rsVentilation": null,
            "massageSeat": null,
            "trSeats": null,
            "rsWayDown": null,
            "frCentralArmrest": null,
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
            "frElecWins": null,
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
            "carRefrigerator": null
          }],
          "picUrl": "http://40.125.204.129/fs01/carModel/BMWx1.png"
        }],
        "picUrl": null,
      }
    });
    Http.get('series', { seriesCode: seriesCode }, (result) => {
      console.log(result)
        this.setState({
          currentIndex: 0,
          cantena: result
        })
    })
  }
  render() {
    const Title = this.state.cantena.models.map((item, index) => {
      return (
        <span key={index} onClick={this.onSelect.bind(this, index)} className={index === this.state.currentIndex ? s.active : ''}>{item.displacement ? item.displacement : ""}</span>
      )
    });
    const Ul = this.state.cantena.models.map((item, index) => {
      return (
        <ul key={index} className={index === this.state.currentIndex ? s.isShow : ''}>
          {item.packages.map((v, i) => {
            return (
              <li key={i}>
                <p onClick={this.go.bind(this, './detailed', v)}>
                  <span>{v.modelName ? v.nodelName : ""}&nbsp;</span>
                  <i className={s.iconfont}>&#xe600;</i>
                </p>
                <p>
                  <span>指导价：</span>
                  <span>{v.guidePrice ?  v.guidePrice + '万' : ""}</span>
                </p>
                <p>
                  <span>本店价：</span>
                  <span>{v.localPrice ?  v.localPrice + '万' : ""}</span>
                </p>
                <div>
                  <span>试驾预约</span>
                  <span>咨询低价</span>
                </div>
              </li>
            )
          })}
        </ul>
      )
    })
    const ite = this.state.cantena;
    const price = (ite.localPriceMin ? ite.localPriceMin : "")+(ite.localPriceMin&&ite.localPriceMax?"-":"")+(ite.localPriceMax ? ite.localPriceMax : "")+(ite.localPriceMin&&ite.localPriceMax?"万":"");
    // console.log(v)
    return (
      <div className={s.sub}>
        <div className={s.series}>
          <img src={ite.picUrl ? ite.picUrl : car} />
          <div>
            <p>
              <span>{ite.seriesName}</span>
              <i className={s.iconfont}>&#xe600;</i>
            </p>
            <p>
              <span>本店价:</span>
              <span>{price}</span>
            </p>
          </div>
        </div>
        <div className={s.subList}>
          <div className={s.title}>{Title}</div>
          <div className={s.list}>{Ul}</div>
        </div>
      </div>
    );
  }
  componentWillReceiveProps() { }
  onSelect(index) {
    let old = this.state
    let cur = Object.assign(old, { currentIndex: index })
    this.setState(cur)
  }
  go(path, obj) {
    const isDrive = this.props.query.drive
    if (isDrive) {
      location.href = "drive/?packageCode=" + obj.packageCode + "&packageName=" + obj.packageName + "&guidePrice=" + obj.guidePrice + "&localPrice=" + obj.localPrice + "&picUrl=" + obj.picUrl;
    } else {
      location.href = path + "?packageCode=" + obj.packageCode;
    }

  }
}

const DisplayHall = withStyles(s)(DDisplayHall);

function action({ path, query, hash }) {
  return {
    chunks: ['displayhallSubClass'],
    title,
    component: (
      <Layout>
        <DisplayHall query={query} />
      </Layout>
    ),
  };
}
export default action;