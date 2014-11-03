define(function () {
  var template = function anonymous(it) {
var out = ''; out+='<!DOCTYPE html> <html> <head>     <meta charset="utf-8">     <title>'; out +=  title; out += '</title> </head> <body>     <h1>Hello，'; out +=  it.name; out += '</h1>      <h2>Condition</h2>     '; if (it.name.length) { out+='     <p>'; out +=  name ; out += ' is a good name</p>     '; } out+='      <h2>Array</h2>     <ul>     '; for (var i = 0; i < it.skills.length; i++) { out+='     <li>'; out +=  i ; out += '. '; out +=  it.skills[i] ; out += '</li>     '; } out+='     </ul> </body> </html> '; return out;
};

  return {
    render: function (data) {
      return template(data || {});
    }
  };
});