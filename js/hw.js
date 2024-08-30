var _scale = 1;

var _wording = document.querySelector('.wording');
var _wordTextMob = document.querySelector('.word-text-mob');
var _wordTextDesk = document.querySelector('.word-text-desk');

var _licText = document.querySelector('.lic-text');

window.addEventListener('onresize', resizeHW);

function resizeHW() {

    var _windowWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    var _windowHeight = Math.min(document.documentElement.clientHeight, window.innerHeight || 0);

    // Then we set the value in the --vh custom property to the root of the document
    var vh = _windowHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    if (_wording) _wording.style.height = Math.round(window.innerHeight * .15) + 'px';
    // document.querySelector('.license').style.bottom = (-1 * _zone) + 'px';

    if ((_windowHeight > _windowWidth)) {

        _scale = Math.min(_windowWidth / 960, _windowHeight / 1400, 1);

        if (_licText) _licText.style.fontSize = Math.min(Math.round(16 * _scale * 1.3), 16) + 'px';

        if (_wording) {
            var _legalScaleX = _wording.clientWidth / (_wordTextMob.clientWidth + 10);
            var _legalScaleY = _wording.clientHeight / (_wordTextMob.clientHeight + 10);

            _wordTextMob.style.transform = `scale(${_legalScaleX},${_legalScaleY})`;
        }

    } else {

        _scale = Math.min(_windowWidth / 1920, _windowHeight / 970, 1);

        if (_licText) _licText.style.fontSize = Math.min(Math.round(16 * _scale * 1.3), 12) + 'px';

        if (_wording) {
            var _legalScaleX = _wording.clientWidth / (_wordTextDesk.clientWidth + 10);
            var _legalScaleY = _wording.clientHeight / (_wordTextDesk.clientHeight + 10);

            _wordTextDesk.style.transform = `scale(${_legalScaleX},${_legalScaleY})`;
        }

    }

};

resizeHW();