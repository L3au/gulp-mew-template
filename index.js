var gutil = require('gulp-util');
var through = require('through-gulp');
var template = require('mew-template');

var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-mew-template';

module.exports = function(options) {
    return through(function(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(new PluginError('gulp-mew-template', 'Streaming not supported'));
        }

        var contents = file.contents.toString();
        var compiled;

        try {
            compiled = template(contents, options);
            file.contents = new Buffer(compiled);
            file.path     = gutil.replaceExtension(file.path, '.js');

            this.push(file);
            callback();
        } catch (e) {
            e.filename = file.path;
            e.filepath = file.path.split('/').slice(-3).join('/');
            callback(e);
        }
    });
};
