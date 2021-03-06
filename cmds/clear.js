/**
 * clear cache log
 * @author ydr.me
 * @create 2015-11-06 18:19
 */


'use strict';

var fse = require('fs-extra');
var path = require('ydr-utils').path;
var debug = require('ydr-utils').debug;

module.exports = function (options) {
    var destCacheFile = path.join(options.srcDirname, '7niu.cache.log');

    try {
        fse.removeSync(destCacheFile);
        debug.success('clear cache', 'success');
    } catch (err) {
        debug.error('clear cache', path.toSystem(destCacheFile));
        debug.error('clear cache', err.message);
        return process.exit(1);
    }
};


