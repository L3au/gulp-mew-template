define(function () {
  var template = new XTemplateRuntime(function (undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func2(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <p>';
pos.line = 12;
var id3 = ((t=(affix.name)) !== undefined ? t:((t = data.name) !== undefined ? t :scope.resolveLooseUp(["name"])));
buffer = buffer.writeEscaped(id3);
buffer.data += ' is a good name</p>\n    ';
return buffer;
}
function func5(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <li>';
pos.line = 18;
var id6 = ((t=(affix.xindex)) !== undefined ? t:((t = data.xindex) !== undefined ? t :scope.resolveLooseUp(["xindex"])));
buffer = buffer.writeEscaped(id6);
buffer.data += '. ';
var id7 = data;
buffer = buffer.writeEscaped(id7);
buffer.data += '</li>\n    ';
return buffer;
}


buffer.data += '<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <title>';
pos.line = 5;
var id0 = ((t=(affix.title)) !== undefined ? t:((t = data.title) !== undefined ? t :scope.resolveLooseUp(["title"])));
buffer = buffer.writeEscaped(id0);
buffer.data += '</title>\n</head>\n<body>\n    <h1>Hello，';
pos.line = 8;
var id1 = ((t=(affix.name)) !== undefined ? t:((t = data.name) !== undefined ? t :scope.resolveLooseUp(["name"])));
buffer = buffer.writeEscaped(id1);
buffer.data += '</h1>\n\n    <h2>Condition</h2>\n    ';
pos.line = 11;
pos.line = 11;
var id4 = ((t=(affix.name)) !== undefined ? affix.name.length:((t = data.name) !== undefined ? (t.length) :scope.resolveLooseUp(["name","length"])));
buffer = ifCommand.call(tpl, scope, {params:[id4],fn: func2}, buffer);
buffer.data += '\n\n    <h2>Array</h2>\n    <ul>\n    ';
pos.line = 17;
pos.line = 17;
var id8 = ((t=(affix.skills)) !== undefined ? t:((t = data.skills) !== undefined ? t :scope.resolveLooseUp(["skills"])));
buffer = eachCommand.call(tpl, scope, {params:[id8],fn: func5}, buffer);
buffer.data += '\n    </ul>\n</body>\n</html>\n';
return buffer;
});

  return {
    render: function (data) {
      return template.render(data || {});
    }
  };
});