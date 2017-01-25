var d = {
	de:	["das Haus","der Baum","der Zaun","die Blume","das Tor", "der Vogel", "die Sonne", "die Wolke", "der Weg", "die Wurzel", "die Tür", "das Fenster"],
	coordinates : []
}
var i = 0;
var a = function(e) {
	console.log("<button style='left:"+e.clientX + ";top:" + e.clientY+"'>" + i + "</button>");
	i++;

};

var x = 0;
var y = 0;
var md = function(e) {
	x = e.clientX;
	y = e.clientY;

};
var mu = function(e) {
	var x1 = Math.min(x, e.clientX);
	var y1 = Math.min(y, e.clientY);
	var x2 = Math.max(x, e.clientX);
	var y2 = Math.max(y, e.clientY);
	var w = x2 - x1;
	var h = y2 - y1;
	d.coordinates[i] = [x1, y1, w, h];
	if (d.coordinates.length>=d.de.length) {
		console.log(JSON.stringify(d));
	}
	
	i++;

};