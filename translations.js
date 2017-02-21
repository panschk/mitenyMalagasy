var languages = [
{code:"en", name:"English"},
{code:"de", name:"Deutsch"},
{code:"fr", name:"Français"},
{code: "mg", name:"Malagasy"}

];
var translate = function(code, lang) {

	var texts = {
		settings 	: {de: "Einstellungen", en: "Settings", fr: "Réglages", mg: "??"},
		menulang	: {de: "Menüsprache", 	en: "menu language", fr : "langue menu", mg: "??"},
		langToLearn	: {de: "Sprache zu lernen", 	en: "Language to Learn", fr : "langue à apprendre", mg: "??"},
		back		: {de: "Zurück",	en:"back", fr: "retour", mg:"??"},
		translate_imperativ	: {de:	"Übersetze", en: "Translate", fr: "Traduis", mg: "??"	},
		good_job	: {de: "Gut gemacht!", en: "Good job", fr: "Très bien", mg: "Tsara!"},
		wrong		: {de: "Falsch!", en: "That's wrong", fr: "Faux!", mg: "Diso!"},
		where_is	: {de: "Wo ist", en: "Where is", fr: "Où est", mg: "Aiza"},
		listen		: {de: "Hör zu", en: "Listen!", fr:"Ecoute", mg:"Mihaino"},
		sound		: {de: "Sound", en : "sound", fr : "son", mg: "??" },
		new_list	: {de: "neue Liste", en: "new list", fr: "nouvelle liste", mg : "??"},
		add			: {de: "hinzufügen", en: "add", fr:"ajouter", mg:"??"},
		enter_name_list: {de: "Name der Liste:", en : "name of list:", fr: "nom de la liste", mg:"??" },
		name_exists : {de: "Name existiert bereits", en : "name already exists", fr: "nom existe déjà", mg: "??"},
		remove		: {de: "löschen", en: "remove", fr:"enlever", mg:"??"}
		
	};
	if (lang && lang.code) { 
		var valForLang = texts[code][lang.code];
		if (valForLang) {
			return valForLang;
		}
	}
	return texts[code].en; 
};
