function smoothScroll(target, duration) {
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().top
    var startPosition = window.pageYOffset
    var distance = targetPosition - startPosition
    var startTime = null

    function animation(currTime) {
        if (startTime === null) startTime = currTime
        var timeElapsed = currTime - startTime
        var run = ease(timeElapsed, startPosition, distance, duration)
        window.scroll(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)

    }
    function ease(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };

    requestAnimationFrame(animation)
}




var section1 = document.querySelector('.section1')
var section2 = document.querySelector('.section2')

section1.addEventListener('click', function () {
    smoothScroll('.section2', 3000)
})

section2.addEventListener('click', function () {
    smoothScroll('.section1', 1000)
})