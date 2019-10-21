import React, {Component} from 'react';
import styles from './styles.module.scss'
import cn from 'classnames'
import Video from '../../components/fullpageVideo'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    static defaultProps = {};

    start() {
        const videoDom = document.getElementById('v-main');
        videoDom.play();
    }

    left() {
        const mainDom = document.getElementById('v-main');
        const leftDom = document.getElementById('v-left');
        mainDom.src = leftDom.src;
    }

    right() {
        const mainDom = document.getElementById('v-main');
        const rightDom = document.getElementById('v-right');
        mainDom.src = rightDom.src;
    }

    render() {
        return (
            <div className={cn(styles.root, 'browniu-app-root')}>
                <div className={styles.panel}>
                    <button onClick={() => this.start()}>start</button>
                    <div className={styles.flow}>
                        <button onClick={() => this.left()}>上台比武</button>
                        <button onClick={() => this.right()}>算了不去</button>
                    </div>
                </div>
                <div className={styles.videos}>
                    <Video id={'v-main'} src={'static/video/left1.mp4'}/>
                    <Video id={'v-left'}
                           src={'static/video/left2.mp4'}/>
                    <Video id={'v-right'}
                           src={'static/video/left4.mp4'}/>
                </div>
            </div>
        );
    }
}
