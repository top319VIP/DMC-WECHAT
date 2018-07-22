import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../style/Emoji.scss';
import { Carousel } from 'antd-mobile';

class Emoji extends React.Component {
    constructor() {
        super()
        let line = [], group = [];
        const emoji = [
            "😩", "😲", "😞", "😵", "😰", "😒", "😍", "😤", "😜", "😝", "😋", "😘", "😚", "😷", "😳", "😃", "😆", "😁", "😂", "😄", "😢", "😭", "😨", "😣", "😡", "😌", "😖", "😔", "😱", "😪", "😏", "😓", "😥", "😫", "😉", "😺", "😸", "😹", "😽", "😻", "😿", "😼", "🙀", "🙋", "🙌", "🙍", "🙏", "🔥", "🎁", "🎄", "🎅", "🎈", "🎉", "👮", "👱", "👲", "👳", "👴", "👵", "👶", "👷", "👸", "👯", "👻", "👼", "👽", "👾", "👿", "💀", "💂", "💃", "🌻", "🌴", "🌵", "🌾", "🍎", "🍊", "🍓", "👀", "👂", "👃", "👄", "👅", "💅", "👦", "👧", "👨", "👩", "👫", "🎍", "🎎", "🎓", "🎏", "🎐", "🎃", "📞", "📱", "📲", "📠", "💻", "💽", "💾", "💿", "📀", "🎵", "🎶", "🎼", "💜", "💝", "💢", "💤", "💦", "💨", "💩", "💪", "✨", "🔔", "✊", "👊", "👍", "☝", "👆", "👇", "👈", "👉", "👋", "👏", "👌", "👎", "👐", "🌀", "🌂", "🌙", "🌟", "🍀", "🌷", "🌱", "🍁", "🌸", "🌹", "🍂", "🍃", "🌺"
        ];

        emoji.map((item, index) => {
            line.push(item)
            if ((index + 1) % 36 == 0 || index === emoji.length - 1) {
                group.push(line);
                line = [];
            }
        });
        this.state = {
            group,
            imgHeight: 176,
        }
    }
    async componentWillMount() {
    }
    componentDidMount() { }
    render() {

        const Item = this.state.group.map((item, index)=>{
            return(
                <div key={index} className={s.CarouselItem}>
                {item.map((it, ix)=>{
                    return (
                        <span key={ix} onClick={this.change.bind(this, it)}>{it}</span>
                    )
                })}
                </div>
            )
        })
        return (
            <div>
                <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={0}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.group.map((item, index) => (
                        <div
                            key={index}
                            className={s.CarouselItem}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            {item.map((v, i) => {
                                return (
                                    <span
                                        key={i}
                                        onClick={this.change.bind(this, v)}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    >{v}</span>
                                )

                            })}
                        </div>
                    ))}
                </Carousel>
            </div>
        )




    }
    change(v) {
        this.props.check(v)
    }
}

export default withStyles(s)(Emoji)