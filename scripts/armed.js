const armed = (function () {
    const tracks = document.getElementsByTagName('audio');
    const track1 = document.getElementById('track-1');
    const track2 = document.getElementById('track-2');
    track2.play();
    let playing;
    for (let element of tracks) {
        (!element.paused) ? playing = element : null;
    }
    return playing;
}());

export default armed;