

var l = function() { } //function(str) { console.log('next/prev: '+str); }

function _find(data, direction) {
	var uri = data.uri;
	var post_type = data.post_type;
	if (!uri || !post_type) {
		l(uri + ' not found: post_type='+post_type)
		return null;
	}
	//l('data is:\n' + (require('util').inspect(data, {colors:true})))

	var all = data[post_type]; // this relies upon collate plugin
	if (!all) {
		l('list of post_types not found for ' + uri)
		return null;
	}

	var idx = all.findIndex(function(p) { return p.uri == uri; })
	if (idx<0) {
		l(uri + ' not found in current list')
		return null;
	}

	idx += direction;
	if (idx<0 || idx>=all.length) {
		l(uri + ' + ' + direction +' == bof/eof')
		return null;
	}
	var post = all[idx];
	l(uri + ' + ' + direction + ' ==> ' + post.uri)
	post.isFirst = idx===0; // stop calling back into our 'isFirst/isLast', by providing the extra info now, directly
	post.isLast = idx===all.length-1;
	return post;
}


module.exports = {
	name: "Ergo Next/Prev Plugin",
	url: "https://github.com/ergo-cms/plugin-nextprev",
	active: true,

	default_fields: {
		has_nextprev: true, // a simple signal to themes that we're available
		next: function() { return _find(this, 1); },
		prev: function() { return _find(this, -1); },
		/*isFirst: function() { // this can interfere when iterating a section. Usematch also defines 'isFirst' & 'isLast'
			var p = _find(this, 0); 
			return !!p ? p.isFirst : false;
		},
		isLast: function() { 
			var p = _find(this, 0); 
			return !!p ? p.isLast : false;
		},*/
	}
}


