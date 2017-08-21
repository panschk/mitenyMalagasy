var languages = [
{code:"en", name:"English"},
{code:"de", name:"Deutsch"},
{code:"fr", name:"Français"},
{code: "mg", name:"Malagasy"}

];
var translate = function(code, lang) {

	var texts = {
		settings 	: {de: "Einstellungen", en: "Settings", fr: "Réglages", mg: "Fikirana"},
		menulang	: {de: "Menüsprache", 	en: "menu language", fr : "langue menu", mg: "fanovana teny"},
		langToLearn	: {de: "Sprache zu lernen", 	en: "Language to Learn", fr : "langue à apprendre", mg: "ny teny ianarana"},
		back		: {de: "Zurück",	en:"back", fr: "retour", mg:"indray"},
		translate_imperativ	: {de:	"Übersetze", en: "Translate", fr: "Traduis", mg: "avadiho"},
		good_job	: {de: "Gut gemacht!", en: "Good job", fr: "Très bien", mg: "Tsara!"},
		wrong		: {de: "Falsch!", en: "That's wrong", fr: "Faux!", mg: "Diso!"},
		where_is	: {de: "Wo ist", en: "Where is", fr: "Où est", mg: "Aiza"},
		listen		: {de: "Hör zu", en: "Listen!", fr:"Ecoute", mg:"Mihaino"},
		sound		: {de: "Sound", en : "sound", fr : "son", mg: "feo" },
		new_list	: {de: "neue Liste", en: "new list", fr: "nouvelle liste", mg : "lisitra vaovao"},
		add			: {de: "hinzufügen", en: "add", fr:"ajouter", mg:"ampiana"},
		enter_name_list: {de: "Name der Liste:", en : "name of list:", fr: "nom de la liste", mg:"anaran'ny lisitra" },
		name_exists : {de: "Name existiert bereits", en : "name already exists", fr: "nom existe déjà", mg: "efa misy ny anarana "},
		remove		: {de: "löschen", en: "remove", fr:"enlever", mg:"fafana"},
		"10randomwords" : {de:"10 Wörter zufällig", en : "10 random words", fr : "dix mots par hasard", mg : "teny folo par hasard"},
		stats		: {de : "Vokabel-Statistik", en : "stats", fr: "statistique", mg: "statistika"},
		mastered	: {de : "gelernt", en : "mastered", fr: "maitrisé", mg: "efa hay"},
		learning	: {de : "kennengelernt", en: "learning", fr : "en cours", mg : "mbola hianarana"}
		
	};
	if (!code){
		return "/";
	}
	if (lang && lang.code) {
		var valForLang = texts[code][lang.code];
		if (valForLang) {
			return valForLang;
		}
	}
	return texts[code].en; 
};
