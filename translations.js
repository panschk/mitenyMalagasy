var languages = [
{code:"en", name:"English"},
{code:"de", name:"Deutsch"},
{code:"fr", name:"Français"},
{code: "mg", name:"Malagasy"}

]
var translate = function(code, lang) {

	var texts = {
		settings 	: {de: "Einstellungen", en: "Settings", fr: "Réglages", mg: "??"},
		menulang	: {de: "Menüsprache", 	en: "menu language", fr : "langue menu", mg: "??"},
		langToLearn	: {de: "Sprache zu lernen", 	en: "Language to Learn", fr : "langue à apprendre", mg: "??"},
		back		: {de: "Zurück",	en:"back", fr: "retour", mg:"??"},
		
	}
	if (lang && lang.code) { 
		var valForLang = texts[code][lang.code];
		if (valForLang) {
			return valForLang;
		}
	}
	return texts[code]['en']; 
}
