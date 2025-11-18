function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
}
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    throw new Error("Invalid input type");
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
function filterActiveUsers(users) {
    return users.filter(function (user) { return user.isActive === true; });
}
function printBookDetails(book) {
    var availability = book.isAvailable ? "Yes" : "No";
    return "Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published: ").concat(book.publishedYear, ", Available: ").concat(availability);
}
function getUniqueValues(arr1, arr2) {
    var result = [];
    var seen = {};
    var addValues = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var value = arr[i];
            var key = String(value);
            if (!seen[key]) {
                seen[key] = true;
                result[result.length] = value;
            }
        }
    };
    addValues(arr1);
    addValues(arr2);
    return result;
}
function calculateTotalPrice(products) {
    if (products.length === 0)
        return 0;
    var totalPrices = products.map(function (p) {
        var base = p.price * p.quantity;
        if (p.discount !== undefined && p.discount > 0) {
            var discountAmount = base * (p.discount / 100);
            return base - discountAmount;
        }
        return base;
    });
    return totalPrices.reduce(function (sum, val) { return sum + val; }, 0);
}
