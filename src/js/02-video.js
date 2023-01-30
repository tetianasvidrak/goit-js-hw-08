import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const currentSeconds = localStorage.getItem('videoplayer-current-time');

if (currentSeconds) {
  player.setCurrentTime(Number(currentSeconds));
}

const onTimeUpdateHandler = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(onTimeUpdateHandler, 1000));
