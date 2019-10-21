import React, {Component} from 'react';
import styles from './styles.module.scss'

export default class FpVideo extends Component {
    render() {
        const {src, id} = this.props;
        return (
            <div className={styles.root}>
                <video
                    id={id}
                    style={{width: '100vw', height: '100vh', objectFit: 'fill'}}
                    x5-video-player-fullscreen="true"
                    x5-video-player-type="h5"
                    x5-video-orientation="landscape"
                    loop autoPlay muted preload="auto"
                    airplay="allow"
                    playsinline="true"
                    src={src}/>
            </div>
        );
    }
}
