var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
var mongoose = require('mongoose');
var Role;
(function (Role) {
    Role[Role["user"] = 0] = "user";
    Role[Role["administrator"] = 1] = "administrator";
})(Role || (Role = {}));
var Genre = /** @class */ (function () {
    function Genre(name) {
        this.genre_name = name;
    }
    return Genre;
}());
var Series = /** @class */ (function () {
    function Series() {
    }
    return Series;
}());
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Author = /** @class */ (function () {
    function Author() {
    }
    return Author;
}());
function generateSchemas() {
    return __awaiter(this, void 0, void 0, function () {
        var genreSchema, seriesSchema, bookSchema, userSchema, authorSchema, genre, series, book, user, author;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.connect(url)];
                case 1:
                    _a.sent();
                    genreSchema = new mongoose.Schema(Genre);
                    seriesSchema = new mongoose.Schema(Series);
                    bookSchema = new mongoose.Schema(Book);
                    userSchema = new mongoose.Schema(User);
                    authorSchema = new mongoose.Schema(Author);
                    genre = mongoose.model('Genre', genreSchema);
                    series = mongoose.model('Series', seriesSchema);
                    book = mongoose.model('Book', bookSchema);
                    user = mongoose.model('User', userSchema);
                    author = mongoose.model('Author', authorSchema);
                    return [2 /*return*/];
            }
        });
    });
}
function userSchema() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.connect(url)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//  generateSchemas();
function addBooks() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
function addGenres() {
    return __awaiter(this, void 0, void 0, function () {
        var fiction, historical, novel, classics, gothic, youngAdult, fantasy, scienceFiction, postApocalyptic, action, disutopia, genre;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.connect(url)];
                case 1:
                    _a.sent();
                    fiction = new Genre({ genre_name: 'Fiction' });
                    historical = new Genre({ genre_name: 'Historical' });
                    novel = new Genre({ genre_name: 'Novel' });
                    classics = new Genre({ genre_name: 'Classics' });
                    gothic = new Genre({ genre_name: 'Gothic' });
                    youngAdult = new Genre({ genre_name: 'Young adult' });
                    fantasy = new Genre({ genre_name: 'Fantasy' });
                    scienceFiction = new Genre({ genre_name: 'Science fiction' });
                    postApocalyptic = new Genre({ genre_name: 'Post Apocalyptic' });
                    action = new Genre({ genre_name: 'Action' });
                    disutopia = new Genre({ genre_name: 'Disutopia' });
                    genre = mongoose.model('Genre');
                    genre.insertMany([fiction, historical, novel, classics, gothic, youngAdult, fantasy, scienceFiction, postApocalyptic, action, disutopia]);
                    return [2 /*return*/];
            }
        });
    });
}
addGenres();
