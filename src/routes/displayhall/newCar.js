import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Http from './../../utils/http';
import s from './style/newCar.scss';
import log from './images/log.png';
import car from './images/noCar.png';


const apis = [
  { "id": "brands", "url": "brands", "mock": "displayhall/brands", "format": true },
];



// Http.setDomainUrl("http://localhost:9019/showroom/api/v1/");
Http.setDomainUrl("http://40.125.204.129/wx/showroom/api/v1/");

// Http.setDebugger(true);
Http.setMutiApi(apis);

class newCar extends React.Component {
  componentWillMount() {
    this.setState({
      list: [
        {
        "brandName": " ",
        "brandCode": " ",
        "onsellCount": null,
        "series": [{
          "brandCode": null,
          "brandName": null,
          "seriesCode": " ",
          "seriesName": " ",
          "seriesCount": null,
          "localPriceMax": null,
          "localPriceMin": null,
          "models": null,
          "picUrl": null
        }, {
          "brandCode": null,
          "brandName": null,
          "seriesCode": " ",
          "seriesName": " ",
          "seriesCount": null,
          "localPriceMax": null,
          "localPriceMin": null,
          "models": null,
          "picUrl": null
        }, {
          "brandCode": null,
          "brandName": null,
          "seriesCode": " ",
          "seriesName": " ",
          "seriesCount": null,
          "localPriceMax": null,
          "localPriceMin": null,
          "models": null,
          "picUrl": null
        }, {
          "brandCode": null,
          "brandName": null,
          "seriesCode": " ",
          "seriesName": " ",
          "seriesCount": null,
          "localPriceMax": null,
          "localPriceMin": null,
          "models": null,
          "picUrl": null
        }, {
          "brandCode": null,
          "brandName": null,
          "seriesCode": " ",
          "seriesName": " ",
          "seriesCount": null,
          "localPriceMax": null,
          "localPriceMin": null,
          "models": null,
          "picUrl": null
        }],
        "picUrl": null
      }]
    })


    let _this = this;
    // Http.get('brands', {brandCode:'GMMC'},(result) => {
    Http.get('brands', (result) => {
      _this.setState({ list: [] });
      if (result) {
        _this.setState({
          list: result,
        })
      }
    })


  }
  render() {
    return (
      <div className={s.newCar}>
        {this.state.list.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <img src={item.picUrl ? item.picUrl : ""} />
                <span>{item.brandName}</span>
                {item.onsellCount ? <span>{item.onsellCount}</span> : <span></span>}
              </div>
              <ul className={s.item}>
                {item.series.map((v, i) => {
                  return (
                    <li key={i} onClick={this.goto.bind(this, 'displayhall/sub', v.seriesCode)}>
                      <img src={v.picUrl ? v.picUrl : car}/>
                      <p>{v.seriesName}</p>
                      <p>{v.seriesCount ? v.seriesCount : ""}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    );
  }
  componentWillReceiveProps() { }
  goto(path, param) {
    // history.push(path);
    const isDrive = this.props.query.drive
    if (isDrive) {
      location.href = path + "?seriesCode=" + param + "&drive=" + isDrive;
    } else {
      location.href = path + "?seriesCode=" + param;
    }
    // location.href = path + "?seriesCode=" + param;
  }
}
export default withStyles(s)(newCar);
