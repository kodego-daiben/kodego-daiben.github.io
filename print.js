const p = require("process");

exports.print = function() {
    p.stdin.on('data', function(data) {
        p.stdout.write('\nYou entered ' + data.toString().trim() + '\n');
    });
    return data.toString().trim();
};