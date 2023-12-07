export const video = (selector, initialValue = true) => ({
  isPlayVideo: initialValue,
  togglePlayPause() {
    const video = document.querySelector(`${selector} video`);
    if (video.paused) {
      video.play();
      this.isPlayVideo = true;
    } else {
      video.pause();
      this.isPlayVideo = false;
    }
  },
});
