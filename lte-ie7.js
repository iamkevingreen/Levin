/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-columns' : '&#xe002;',
			'icon-list' : '&#xe003;',
			'icon-icons' : '&#xe004;',
			'icon-chevron-left' : '&#xf053;',
			'icon-chevron-right' : '&#xf054;',
			'icon-folder' : '&#xe000;',
			'icon-cancel' : '&#xe001;',
			'icon-search' : '&#xf002;',
			'icon-file-alt' : '&#xf0f6;',
			'icon-group' : '&#xf0c0;',
			'icon-calendar' : '&#xf073;',
			'icon-star-empty' : '&#xf006;',
			'icon-star' : '&#xf005;',
			'icon-clock' : '&#xe005;',
			'icon-dollar' : '&#xf155;',
			'icon-cancel-2' : '&#xe006;',
			'icon-location' : '&#xe007;',
			'icon-facebook' : '&#xe008;',
			'icon-twitter' : '&#xe009;',
			'icon-linkedin' : '&#xe00a;',
			'icon-instagram' : '&#xe00b;',
			'icon-radio-checked' : '&#xe00c;',
			'icon-radio-unchecked' : '&#xe00d;',
			'icon-list-2' : '&#xe00e;',
			'icon-x' : '&#xe00f;',
			'icon-x-altx-alt' : '&#xe010;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};