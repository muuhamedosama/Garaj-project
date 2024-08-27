"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStatus = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType[UserType["admin"] = 0] = "admin";
    UserType[UserType["Customer"] = 1] = "Customer";
    UserType[UserType["ServiceProvider"] = 2] = "ServiceProvider";
})(UserType || (exports.UserType = UserType = {}));
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["Pending"] = "pending";
    BookingStatus["Completed"] = "completed";
    BookingStatus["Canceled"] = "canceled";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
//# sourceMappingURL=enums.js.map