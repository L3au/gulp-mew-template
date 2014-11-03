define(function () {
  var template = function anonymous(it) {
var out='<!DOCTYPE html><html><head> <meta charset="utf-8"> <title>'+( it.title )+'</title></head><body> <h1>Hello，'+( it.name )+'</h1> <h2>Condition</h2> ';if(it.name.length){out+=' <p>'+( it.name )+' is a good name</p> ';}out+=' <h2>Array</h2> <ul> ';var arr1=it.skills;if(arr1){var val,idx=-1,l1=arr1.length-1;while(idx<l1){val=arr1[idx+=1];out+=' <li>'+( idx )+'. '+( val )+'</li> ';} } out+=' </ul></body></html>';return out;
};

  return {
    render: function (data) {
      return template(data || {});
    }
  };
});