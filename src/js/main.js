import VideoPlayer from './VideoPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize video modal
    new VideoPlayer(
        'header-video-play-button',
        'mUGYPlAgJPw',
        '.header__video-wrapper',
    );
});
