function makeString(s){
   var matches = s.match(/\b\w/g);
   return matches.join('');
}

exports.stringapp = {
    makeString: makeString
}
