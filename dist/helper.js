'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.print = print;

var _jspdf = require('jspdf');

var _jspdf2 = _interopRequireDefault(_jspdf);

var _html2canvas = require('html2canvas');

var _html2canvas2 = _interopRequireDefault(_html2canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function print() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'document';
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'root';
    var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'p';
    var saveOrOutPut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'save';

    console.log('output', saveOrOutPut);

    var element = document.querySelector('#' + id);
    if (!element) {
        console.log('%c Pdf generate error', 'font-weight: bold; font-size: 15px; color: red; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black ');
        console.warn('failed to copy dom for pdf print');
        return false;
    }
    (0, _html2canvas2.default)(element).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new _jspdf2.default(orientation);
        pdf.addImage(imgData, 'PNG', 0, 0);
        if (saveOrOutPut === 'save') {
            pdf.save(name + '.pdf');
        } else {
            pdf.output('dataurlnewwindow', name + '.pdf');
        }
    });
}