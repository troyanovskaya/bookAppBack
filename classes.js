"use strict";
exports.__esModule = true;
exports.Author = exports.User = exports.Book = exports.Series = exports.Genre = exports.Role = exports.url = void 0;
exports.url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
var Role;
(function (Role) {
    Role[Role["user"] = 0] = "user";
    Role[Role["administrator"] = 1] = "administrator";
})(Role = exports.Role || (exports.Role = {}));
var Genre = /** @class */ (function () {
    function Genre() {
    }
    return Genre;
}());
exports.Genre = Genre;
var Series = /** @class */ (function () {
    function Series() {
    }
    return Series;
}());
exports.Series = Series;
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
exports.Book = Book;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Author = /** @class */ (function () {
    function Author() {
    }
    return Author;
}());
exports.Author = Author;
