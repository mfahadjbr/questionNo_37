function make_shirt(size, message) {
    if (message === void 0) { message = 'i love typescript'; }
    console.log("we will sell you a shirt of sizs: ".concat(size, ",with message on it: ").concat(message));
}
make_shirt('larger');
make_shirt('medium');
make_shirt('small', 'i love javascript');
