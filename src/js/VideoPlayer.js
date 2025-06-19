/**
 * VideoPlayer class to handle YouTube video playback
 * @class VideoPlayer
 * @param {string} triggerElementId - The ID of the element that triggers the video playback
 * @param {string} videoId - The YouTube video ID to play
 * @param {string} [containerSelector='.header__video-wrapper'] - The CSS selector for the container where the video will be embedded
 */
export default class VideoPlayer {
    constructor(triggerElementId, videoId, containerSelector = '.header__video-wrapper') {
        this.triggerElement = document.getElementById(triggerElementId);
        this.videoId = videoId;
        this.container = document.querySelector(containerSelector);
        this.thumbnailImage = this.container ? this.container.querySelector('img') : null;

        this.init();
    }

    init() {
        if (!this.triggerElement || !this.container) {
            console.error('Trigger element or container not found');
            return;
        }

        // Add click event listener to play button
        this.triggerElement.addEventListener('click', (e) => this.playVideo(e));
    }

    playVideo(event) {
        event.preventDefault();

        // Create YouTube iframe
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0`);
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';

        if (this.thumbnailImage) {
            this.thumbnailImage.style.visibility = 'hidden';
        }

        this.triggerElement.style.display = 'none';
        this.container.appendChild(iframe);
        this.container.classList.add('video-playing');
    }
}
