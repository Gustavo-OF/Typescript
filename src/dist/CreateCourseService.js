"use strict";
/**
 * name - string
 * duration(weeks) - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var _b = _a.duration, duration = _b === void 0 ? 8 : _b, educator = _a.educator, name = _a.name;
        console.log(name, duration, educator);
    };
    return CreateCourseService;
}());
//Com o export, é possivel importar essa classe para outros, ou seja, vira um modulo
exports.default = new CreateCourseService();
