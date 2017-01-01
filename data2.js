/**
 * 
 * from list of 1000 most common words - http://1000mostcommonwords.com/
 * 
 * Qualility of data is very questionable, but could be helpful to get some basic vocabulary. 
 */
 
var data2 = [
{
	type:"normal",
	name:{de:"Wörter 0",en:"Words 0",fr:"Mots 0",mg:"Teny 0"},
	de:["wie","ich","seine","dass","er","für","auf","sind","mit","sie","sein","bei","ein","haben","dies"],
	en:["as","I","his","that","he","for","on","are","with","they","be","at","one","have","this"],
	fr:["comme","je","son","que","il","pour","sur","sont","avec","ils","être","à","un","avoir","ce"],
	mg:["toy ny","aho","ny","fa","izy","fa","amin’ny","dia","amin’ny","izy ireo","ho","amin’ny","iray","manana","izany"]
},
{
	type:"normal",
	name:{de:"Wörter 1",en:"Words 1",fr:"Mots 1",mg:"Teny 1"},
	de:["durch","heiß","Wort","aber","was","einige","ist","es","Du","oder","hatte","die","von","zu","und"],
	en:["by","hot","word","but","what","some","is","it","you","or","had","the","of","to","and"],
	fr:["par","chaud","mot","mais","que","certains","est","il","tu","ou","eu","la","de","à","et"],
	mg:["amin’ny","mafana","teny","fa","inona","ny sasany","dia","izany","ianao","na","nanana","ny","ny","ny","ary"]
},
{
	type:"normal",
	name:{de:"Wörter 2",en:"Words 2",fr:"Mots 2",mg:"Teny 2"},
	de:["ein","bei","wir","können","aus","andere","waren","die","tun","ihre","Zeit","wenn","werden","wie","sagte"],
	en:["a","in","we","can","out","other","were","which","do","their","time","if","will","how","said"],
	fr:["un","dans","nous","pouvoir","dehors","autre","étaient","qui","faire","leur","temps","si","volonté","comment","dit"],
	mg:["ny","amin’ny","izahay","afaka","avy","hafa","ireo","izay","atao","ny","fotoana","raha","ho","ahoana","nanao hoe:"]
},
{
	type:"normal",
	name:{de:"Wörter 3",en:"Words 3",fr:"Mots 3",mg:"Teny 3"},
	de:["ein","jeder","sagen","tut","Satz","wollen","Luft","gut","auch","spielen","klein","Ende","setzen","Zuhause","lesen"],
	en:["an","each","tell","does","set","want","air","well","also","play","small","end","put","home","read"],
	fr:["un","chaque","dire","ne","ensemble","vouloir","air","bien","aussi","jouer","petit","fin","mettre","maison","lire"],
	mg:["iray","tsirairay","milaza","no","napetraka","te","rivotra","tsara","koa","milalao","kely","tapitra","mametraka","an-trano","vakio"]
},
{
	type:"normal",
	name:{de:"Wörter 4",en:"Words 4",fr:"Mots 4",mg:"Teny 4"},
	de:["seits","Hafen","groß","buchstabieren","hinzufügen","auch","Lande","hier","muss","groß","hoch","so","folgen","Akt","warum"],
	en:["hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why"],
	fr:["main","port","grand","épeler","ajouter","même","terre","ici","il faut","grand","haut","tel","suivre","acte","pourquoi"],
	mg:["tanana","seranan-tsambo","lehibe","tsipelina","ampio","na dia","tany","eto","tsy maintsy","lehibe","avo","toy izany","manaraka","zavatra","antony"]
},
{
	type:"normal",
	name:{de:"Wörter 5",en:"Words 5",fr:"Mots 5",mg:"Teny 5"},
	de:["fragen","Männer","Veränderung","ging","Licht","Art","aus","müssen","Haus","Bild","versuchen","uns","wieder","Tier","Punkt"],
	en:["ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point"],
	fr:["interroger","hommes","changement","est allé","lumière","genre","de","besoin","maison","image","essayer","nous","encore","animal","point"],
	mg:["manontany","ny olona","fanovana","nandeha","fahazavana","tsara fanahy","eny","mila","trano","sary","manandrana","antsika","indray","biby","hevitra"]
},
{
	type:"normal",
	name:{de:"Wörter 6",en:"Words 6",fr:"Mots 6",mg:"Teny 6"},
	de:["Mutter","Welt","in der Nähe von","bauen","selbst","Erde","Vater","jeder","neu","Arbeit","Teil","nehmen","erhalten","Ort","gemacht"],
	en:["mother","world","near","build","self","earth","father","any","new","work","part","take","get","place","made"],
	fr:["mère","monde","près de","construire","soi","terre","père","tout","nouveau","travail","partie","prendre","obtenir","lieu","fabriqué"],
	mg:["ny reniny","izao tontolo izao","akaiky","hanorina","tena","eto an-tany","ray","rehetra","vaovao","asa","Fizarana","handray","mahazo","toerana","nanao"]
},
{
	type:"normal",
	name:{de:"Wörter 7",en:"Words 7",fr:"Mots 7",mg:"Teny 7"},
	de:["leben","wo","nach","zurück","wenig","nur","Mann","Jahr","kam","zeigen","jeder","gut","mir","geben","unsere"],
	en:["live","where","after","back","little","only","man","year","came","show","every","good","me","give","our"],
	fr:["vivre","où","après","arrière","peu","seulement","homme","année","est venu","montrer","tous","bon","moi","donner","notre"],
	mg:["velona","izay","rehefa","indray","kely","ihany","ny olona","taona","tonga","fampisehoana","rehetra","tsara","ahy","manome","ny"]
},
{
	type:"normal",
	name:{de:"Wörter 8",en:"Words 8",fr:"Mots 8",mg:"Teny 8"},
	de:["unter","Name","sehr","nur","Formular","Satz","groß","denken","sagen","Hilfe","niedrig","Linie","abweichen","wiederum","Ursache"],
	en:["under","name","very","just","form","sentence","great","think","say","help","low","line","differ","turn","cause"],
	fr:["sous","nom","très","juste","forme","phrase","grand","penser","dire","aider","faible","ligne","différer","tour","la cause"],
	mg:["eo ambany","anarana","tena","fotsiny","endrika","didim-pitsarana","lehibe","mieritreritra","milaza","vonjeo","ambany","tsipika","mitovy","indray","antony"]
},
{
	type:"normal",
	name:{de:"Wörter 9",en:"Words 9",fr:"Mots 9",mg:"Teny 9"},
	de:["viel","bedeuten","vor","Recht","Junge","alt","zu","gleich","sie","alle","da","wenn","nach oben","Verwendung","Ihre"],
	en:["much","mean","before","right","boy","old","too","same","she","all","there","when","up","use","your"],
	fr:["beaucoup","signifier","avant","droit","garçon","vieux","trop","même","elle","tous","là","quand","jusqu’à","utiliser","votre"],
	mg:["be","hoe","talohan’ny","marina","zazalahy","taloha","koa","toy izany koa","izy","rehetra","ery","rahoviana","ny","fampiasana","ny"]
},
{
	type:"normal",
	name:{de:"Wörter 10",en:"Words 10",fr:"Mots 10",mg:"Teny 10"},
	de:["über","viele","dann","sie","schreiben","würde","wie","so","diese","sie","lange","machen","Sache","sehen","ihm"],
	en:["about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him"],
	fr:["sur","beaucoup","puis","les","écrire","voudrais","comme","si","ces","son","long","faire","chose","voir","lui"],
	mg:["ny","maro","avy eo","azy ireo","manoratra","te","toy ny","izany","ireo","azy","ela","manao","zavatra","jereo","azy"]
},
{
	type:"normal",
	name:{de:"Wörter 11",en:"Words 11",fr:"Mots 11",mg:"Teny 11"},
	de:["hat","suchen","mehr","Tag","könnte","gehen","kommen","tat","Anzahl","klingen","nicht","am meisten","Menschen","wissen","Wasser"],
	en:["has","look","more","day","could","go","come","did","number","sound","no","most","people","know","water"],
	fr:["a","regarder","plus","jour","pourrait","aller","venir","fait","nombre","son","aucun","plus","personnes","savoir","eau"],
	mg:["manana","mijery","bebe kokoa","andro","afaka","mandeha","ho avy","nanao","isa","feo","tsy","indrindra","ny olona","mahafantatra","rano"]
},
{
	type:"normal",
	name:{de:"Wörter 12",en:"Words 12",fr:"Mots 12",mg:"Teny 12"},
	de:["als","Anruf","erste","die","können","nach unten","Seite","gewesen","jetzt","finden","Kopf","stehen","besitzen","Seite","sollte"],
	en:["than","call","first","who","may","down","side","been","now","find","head","stand","own","page","should"],
	fr:["que","appel","première","qui","peut","vers le bas","côté","été","maintenant","trouver","tête","supporter","propre","page","devrait"],
	mg:["noho ny","antso","voalohany","izay","mety","midina","lafiny","efa","ankehitriny","hahita","lohany","mitsangana","manokana","pejy","tokony"]
},
{
	type:"normal",
	name:{de:"Wörter 13",en:"Words 13",fr:"Mots 13",mg:"Teny 13"},
	de:["Land","gefunden","Antwort","Schule","wachsen","Studie","noch","lernen","Anlage","Abdeckung","Lebensmittel","Sonne","zwischen","Zustand","halten"],
	en:["country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","between","state","keep"],
	fr:["pays","trouvé","réponse","école","croître","étude","encore","apprendre","usine","couvercle","nourriture","soleil","entre","état","garder"],
	mg:["firenena","hita","valiny","am-pianarana","mitombo","fianarana","mbola","mianatra","fototra","fonony","sakafo","masoandro","eo","fanjakana","foana"]
},
{
	type:"normal",
	name:{de:"Wörter 14",en:"Words 14",fr:"Mots 14",mg:"Teny 14"},
	de:["Auge","nie","letzte","lassen","Gedanken","Stadt","Baum","überqueren","Bauernhof","Beginn","Macht","Geschichte","Säge","weit","Meer"],
	en:["eye","never","last","let","thought","city","tree","cross","farm","start","might","story","saw","far","sea"],
	fr:["œil","jamais","dernier","laisser","pensée","ville","arbre","traverser","ferme","début","puissance","histoire","scie","loin","mer"],
	mg:["maso","na oviana na oviana","farany","aoka","nihevitra","tanàna","hazo","miampita","toeram-pambolena","nanomboka","mety","tantara","tsofa","lavitra","ranomasina"]
},
{
	type:"normal",
	name:{de:"Wörter 15",en:"Words 15",fr:"Mots 15",mg:"Teny 15"},
	de:["ziehen","links","spät","laufen","unterlassen Sie","während","Presse","Schließen","Nacht","Leben","wenige","Norden","Buch","tragen","nahm"],
	en:["draw","left","late","run","don’t","while","press","close","night","life","few","north","book","carry","took"],
	fr:["tirer","gauche","tard","courir","needs a context","tandis que","presse","proche","nuit","vie","peu","nord","livre","porter","a pris"],
	mg:["hanatona","niala","tara","Run","aza","raha","mpanao gazety","akaiky","alina","fiainana","vitsivitsy","avaratra","boky","mitondra","naka"]
},
{
	type:"normal",
	name:{de:"Wörter 16",en:"Words 16",fr:"Mots 16",mg:"Teny 16"},
	de:["Wissenschaft","essen","Zimmer","Freund","begann","Idee","Fisch","berg","Stopp","einmal","Basis","hören","Pferd","Schnitt","sicher"],
	en:["science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure"],
	fr:["science","manger","chambre","ami","a commencé","idée","poisson","montagne","Arrêtez","une fois","base","entendre","cheval","coupe","sûr"],
	mg:["ny siansa","mihinana","efitra","namana","nanomboka","hevitra","trondro","tendrombohitra","mijanòna","indray mandeha","fototra","mihainoa","soavaly","notapatapahina","azo antoka"]
},
{
	type:"normal",
	name:{de:"Wörter 17",en:"Words 17",fr:"Mots 17",mg:"Teny 17"},
	de:["beobachten","Farbe","Gesicht","Holz","Haupt-","geöffnet","scheinen","zusammen","nächste","weiß","Kinder","Start","bekam","gehen","Beispiel"],
	en:["watch","color","face","wood","main","open","seem","together","next","white","children","begin","got","walk","example"],
	fr:["regarder","couleur","face","bois","principal","ouvert","paraître","ensemble","suivant","blanc","enfants","commencer","eu","marcher","exemple"],
	mg:["mijery","loko","endrika","hazo","lehibe","misokatra","toa","miara-","manaraka","fotsy","ankizy","manomboka","nahazo","mandeha","ohatra"]
},
{
	type:"normal",
	name:{de:"Wörter 18",en:"Words 18",fr:"Mots 18",mg:"Teny 18"},
	de:["erleichtern","Papier","Gruppe","immer","Musik","diejenigen","beide","Marke","oft","Schreiben","bis","Meile","Fluss","Auto","Füße"],
	en:["ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet"],
	fr:["facilité","papier","groupe","toujours","musique","ceux","tous les deux","marque","souvent","lettre","jusqu’à ce que","mile","rivière","voiture","pieds"],
	mg:["hanamaivana","taratasy","vondrona","foana","mozika","ireo","samy","marika","matetika","taratasy","mandra-","kilaometatra","ony","fiara","tongotra"]
},
{
	type:"normal",
	name:{de:"Wörter 19",en:"Words 19",fr:"Mots 19",mg:"Teny 19"},
	de:["Pflege","zweite","genug","Ebene","Mädchen","üblich","jung","bereit","oben","je","rot","Liste","obwohl","fühlen","Vortrag"],
	en:["care","second","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk"],
	fr:["soins","deuxième","assez","plaine","fille","habituel","jeune","prêt","au-dessus","jamais","rouge","liste","bien que","sentir","parler"],
	mg:["fikarakarana","faharoa","ampy","tani-hay","ankizivavy","mahazatra","tanora","vonona","ambony","mandrakizay","mena","lisitra","aza","mahatsapa","lahateny"]
},
{
	type:"normal",
	name:{de:"Wörter 20",en:"Words 20",fr:"Mots 20",mg:"Teny 20"},
	de:["Vogel","bald","Körper","Hund","Familie","direkt","Pose","verlassen","Lied","messen","Tür","Produkt","schwarz","kurz","Zahl"],
	en:["bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral"],
	fr:["oiseau","bientôt","corps","chien","famille","direct","pose","laisser","chanson","mesurer","porte","produit","noir","court","chiffre"],
	mg:["vorona","tsy ho ela","vatana","amboa","fianakaviana","mivantana","mametraka","miala","hira","mandrefy","varavarana","vokatra","mainty","fohy","Anarana iombonana"]
},
{
	type:"normal",
	name:{de:"Wörter 21",en:"Words 21",fr:"Mots 21",mg:"Teny 21"},
	de:["Klasse","Wind","Frage","passieren","vollständig","Schiff","Bereich","Hälfte","Stein","bestellen","Feuer","Süden","Problem","Stück","sagte"],
	en:["class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told"],
	fr:["classe","vent","question","arriver","complète","navire","zone","moitié","rock","ordre","feu","sud","problème","pièce","dit"],
	mg:["am-pianarana","rivotra","fanontaniana","hitranga","tanteraka","sambo","faritra","antsasany","vato","mba","afo","Atsimo","olana","kely","nilaza"]
},
{
	type:"normal",
	name:{de:"Wörter 22",en:"Words 22",fr:"Mots 22",mg:"Teny 22"},
	de:["wusste","passieren","seit","obere","ganze","König","Straße","Zoll","multiplizieren","nichts","Kurs","bleiben","Rad","voll","Kraft"],
	en:["knew","pass","since","top","whole","king","street","inch","multiply","nothing","course","stay","wheel","full","force"],
	fr:["savait","passer","depuis","haut","ensemble","roi","rue","pouce","multiplier","rien","cours","rester","roue","plein","force"],
	mg:["nahalala","nitranga","satria","ambony","rehetra","mpanjaka","teny an-dalana","mirefy","hahamaro","na inona na inona","Mazava ho azy fa","mijanona","kodiarana","feno","hery"]
},
{
	type:"normal",
	name:{de:"Wörter 23",en:"Words 23",fr:"Mots 23",mg:"Teny 23"},
	de:["blau","Objekt","entscheiden","Oberfläche","tief","Mond","Insel","Fuß","System","beschäftigt","Prüfung","Rekord","Boot","gemeinsam","goldenen"],
	en:["blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold"],
	fr:["bleu","objet","décider","surface","profond","lune","île","pied","système","occupé","test","record","bateau","commun","or"],
	mg:["manga","zavatra","manapa-kevitra","ambonin’ny","lalina","volana","nosy","tongotra","rafitra","be asa","fitsapana","rakitsoratra","sambokely","iombonana","volamena"]
},
{
	type:"normal",
	name:{de:"Wörter 24",en:"Words 24",fr:"Mots 24",mg:"Teny 24"},
	de:["möglich","Flugzeug","statt","trocken","Wunder","Lachen","tausend","vor","lief","überprüfen","Spiel","Form","gleichsetzen","heiß","Fehl"],
	en:["possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss"],
	fr:["possible","plan","place","sec","se demander","rire","mille","il ya","ran","vérifier","jeu","forme","assimiler","chaud","manquer"],
	mg:["azo atao","fiaramanidina","hisolo","maina","manontany tena","nihomehy mihitsy","arivo","lasa izay","nihazakazaka","hanamarina","lalao","endrika","equate","mafana","Miss"]
},
{
	type:"normal",
	name:{de:"Wörter 25",en:"Words 25",fr:"Mots 25",mg:"Teny 25"},
	de:["gebracht","Wärme","Schnee","Reifen","bringen","ja","entfernt","füllen","Osten","malen","Sprache","unter","Einheit","Macht","Stadt"],
	en:["brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","unit","power","town"],
	fr:["apporté","chaleur","neige","pneu","apporter","oui","lointain","remplir","est","peindre","langue","entre","unité","puissance","ville"],
	mg:["nitondra","hafanana","oram-panala","kodiarana","mitondra","eny","lavitra","mameno","atsinanana","nandoko","fiteny","eo","vondrona","fahefana","tanàna"]
},
{
	type:"normal",
	name:{de:"Wörter 26",en:"Words 26",fr:"Mots 26",mg:"Teny 26"},
	de:["fein","sicher","fliegen","fallen","führen","Schrei","dunkel","Maschine","note","warten","Plan","Abbildung","Stern","Kasten","Nomen"],
	en:["fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun"],
	fr:["fin","certain","voler","tomber","conduire","cri","sombre","machine","Note","patienter","plan","figure","étoile","boîte","nom"],
	mg:["tsara dia tsara","sasany","manidina","lavo","mitarika","fitarainany","maizina","milina","fanamarihana","miandry","drafitra","endrika","kintana","boaty","anarana iombonana"]
},
{
	type:"normal",
	name:{de:"Wörter 27",en:"Words 27",fr:"Mots 27",mg:"Teny 27"},
	de:["Feld","Rest","richtig","fähig","Pfund","getan","Schönheit","Antriebs","stand","enthalten","Front","lehren","Woche","Finale","gab"],
	en:["field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave"],
	fr:["domaine","reste","correct","capable","livre","Terminé","beauté","entraînement","résisté","contenir","avant","enseigner","semaine","finale","donné"],
	mg:["an-tsaha","fitsaharana","marina","afaka","Pound","nanaovanareo","hatsaran-tarehy","fiara","nitsangana","dia ahitana","anoloana","mampianatra","herinandro","farany","nanome"]
},
{
	type:"normal",
	name:{de:"Wörter 28",en:"Words 28",fr:"Mots 28",mg:"Teny 28"},
	de:["grün","oh","schnell","entwickeln","Ozean","warme","kostenlos","Minute","stark","besondere","Geist","hinter","klar","Schwanz","produzieren"],
	en:["green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce"],
	fr:["vert","oh","rapide","développer","océan","chaud","gratuit","minute","fort","spécial","esprit","derrière","clair","queue","produire"],
	mg:["maitso","ô","haingana","hampitombo","ranomasina","mafana","maimaim-poana","minitra","mahery","manokana","an-tsaina","aoriana","mazava","rambo","voka-pambolena sy fiompiana"]
},
{
	type:"normal",
	name:{de:"Wörter 29",en:"Words 29",fr:"Mots 29",mg:"Teny 29"},
	de:["Tatsache","Raum","gehört","beste","Stunde","besser","WAHR","während","hundert","fünf","merken","Schritt","früh","halten","Westen"],
	en:["fact","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west"],
	fr:["fait","espace","entendu","meilleur","heure","mieux","vrai","pendant","cent","cinq","rappeler","étape","tôt","tenir","ouest"],
	mg:["Raha ny marina","toerana","nandre","tsara indrindra","ora","tsara kokoa","marina","mandritra","jato","dimy","tsarovy","dingana","tany am-boalohany","mihazona","andrefana"]
},
{
	type:"normal",
	name:{de:"Wörter 30",en:"Words 30",fr:"Mots 30",mg:"Teny 30"},
	de:["Boden","Interesse","erreichen","schnell","Verbum","singen","hören","sechs","Tabelle","Reise","weniger","Morgen","zehn","einfach","mehrere"],
	en:["ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several"],
	fr:["sol","intérêt","atteindre","rapide","verbe","chanter","écouter","six","table","Voyage","moins","matin","dix","simple","plusieurs"],
	mg:["tany","mahaliana","hahatratra","fifadian-kanina","ny matoanteny amin’ny","mihira","mihaino","enina","latabatra","Tsangatsangana","kely kokoa","maraina","folo","tsotra","maro"]
},
{
	type:"normal",
	name:{de:"Wörter 31",en:"Words 31",fr:"Mots 31",mg:"Teny 31"},
	de:["Vokal","auf","Krieg","legen","gegen","Muster","schleppend","Zentrum","Liebe","Person","Geld","dienen","erscheinen","Straße","Karte"],
	en:["vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map"],
	fr:["voyelle","vers","guerre","poser","contre","modèle","lent","centre","amour","personne","argent","servir","apparaître","route","carte"],
	mg:["zanatsoratra","amin’ny","ady","mametraka","manohitra","fomba","miadana","afovoany","fitiavana","olona","vola","manompo","hita","lalana","sarintany"]
},
{
	type:"normal",
	name:{de:"Wörter 32",en:"Words 32",fr:"Mots 32",mg:"Teny 32"},
	de:["regen","Regel","regieren","ziehen","Kälte","Hinweis","Stimme","Energie","Jagd","wahrscheinlich","Bett","Bruder","Ei","Fahrt","Zelle"],
	en:["rain","rule","govern","pull","cold","notice","voice","energy","hunt","probable","bed","brother","egg","ride","cell"],
	fr:["pluie","règle","gouverner","tirer","froid","avis","voix","énergie","chasse","probable","lit","frère","œuf","tour","cellule"],
	mg:["orana","fitsipika","hitantana","sintony","mangatsiaka","filazana","feo","hery","mihaza","inoana","fandriana","rahalahy","atody","mitaingina","efitra"]
},
{
	type:"normal",
	name:{de:"Wörter 33",en:"Words 33",fr:"Mots 33",mg:"Teny 33"},
	de:["glauben","vielleicht","pflücken","plötzlich","zählen","Platz","Grund","Dauer","vertreten","Kunst","Thema","Region","Größe","variieren","regeln"],
	en:["believe","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","size","vary","settle"],
	fr:["croire","peut-être","choisir","soudain","compter","carré","raison","longueur","représenter","art","sujet","région","taille","varier","régler"],
	mg:["mino","angamba","haka","tampoka","manisa","kianja","antony","lavany","maneho","zava-kanto","foto-kevitra","faritra","habeny","Tsy mitovy","hanorim-ponenana"]
},
{
	type:"normal",
	name:{de:"Wörter 34",en:"Words 34",fr:"Mots 34",mg:"Teny 34"},
	de:["sprechen","Gewicht","allgemein","Eis","Materie","Kreis","Paar","umfassen","Kluft","Silbe","Filz","groß","Kugel","noch","Welle"],
	en:["speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","grand","ball","yet","wave"],
	fr:["parler","poids","général","glace","question","cercle","paire","inclure","fracture","syllabe","feutre","grandiose","balle","encore","vague"],
	mg:["miteny","lanja","ankapobeny","ranomandry","zavatra","faribolana","mpivady","Anisan’ny","fisarahana","vanin","nahatsapa","lehibe","baolina","nefa","alon"]
},
{
	type:"normal",
	name:{de:"Wörter 35",en:"Words 35",fr:"Mots 35",mg:"Teny 35"},
	de:["fallen","Herz","Uhr","vorhanden","schwer","Tanz","Motor","Position","Arm","breit","Segel","Material","Fraktion","Wald","sitzen"],
	en:["drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","fraction","forest","sit"],
	fr:["tomber","cœur","h","présent","lourd","danse","moteur","position","bras","large","voile","matériel","fraction","forêt","s’asseoir"],
	mg:["mitete","fo","aho","ankehitriny","mavesatra","dihy","maotera","toerana","sandry","malalaka","niondrana an-tsambo","fitaovana","ampahany","ala","mipetraka"]
},
{
	type:"normal",
	name:{de:"Wörter 36",en:"Words 36",fr:"Mots 36",mg:"Teny 36"},
	de:["Rennen","Fenster","Speicher","Sommer","Zug","Schlaf","beweisen","einsam","Bein","Übung","Wand","Fang","Berg","wünschen","Himmel"],
	en:["race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky"],
	fr:["course","fenêtre","magasin","été","train","sommeil","prouver","seul","jambe","exercice","mur","capture","monture","souhaiter","ciel"],
	mg:["hazakazaka","varavarankely","fivarotana","fahavaratra","fiaran-dalamby","torimaso","manaporofo","irery","tongotra","fanatanjahan-tena","rindrina","trondro","tendrombohitra","maniry","lanitra"]
},
{
	type:"normal",
	name:{de:"Wörter 37",en:"Words 37",fr:"Mots 37",mg:"Teny 37"},
	de:["Board","Freude","Winter","geschrieben","wilden","Instrument","gehalten","Glas","Gras","Kuh","Arbeit","Rand","Zeichen","Besuch"],
	en:["board","joy","winter","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit"],
	fr:["conseil","joie","hiver","écrit","sauvage","instrument","conservé","verre","herbe","vache","emploi","bord","signe","visite"],
	mg:["birao","fifaliana","ririnina","voasoratra","bibidia","fitaovana","foana","fitaratra","ny ahitra","omby vavy","asa","sisin’ny","famantarana","fitsidihana"]
},
{
	type:"normal",
	name:{de:"Wörter 38",en:"Words 38",fr:"Mots 38",mg:"Teny 38"},
	de:["Vergangenheit","weich","Spaß","hell","Gases","Wetter","Monat","Million","tragen","Finish","glücklich","hoffen","blume","kleiden","seltsam"],
	en:["past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange"],
	fr:["passé","doux","amusement","clair","gaz","temps","mois","million","porter","finition","heureux","espoir","fleur","vêtir","étrange"],
	mg:["Ny lasa","malefaka","mahafinaritra","mamirapiratra","mandatsa-dranomaso","toetrandro","volana","tapitrisa","Mijoro ho","farany","sambatra","manantena","voninkazo","mitafy","hafahafa"]
},
{
	type:"normal",
	name:{de:"Wörter 39",en:"Words 39",fr:"Mots 39",mg:"Teny 39"},
	de:["Vorbei","Handel","Melodie","Reise","Büro","empfangen","Reihe","Mund","genau","Zeichen","sterben","am wenigsten","Ärger","Schrei","außer"],
	en:["gone","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except"],
	fr:["disparu","commerce","mélodie","voyage","bureau","recevoir","rangée","bouche","exact","symbole","mourir","moins","difficulté","cri","sauf"],
	mg:["lasa","varotra","hira fiderana","saran-dalana","birao","mandray","ny laharana","vava","marina","famantarana","faty","kely indrindra","olana","Manaova feo fifaliana","afa-tsy"]
},
{
	type:"normal",
	name:{de:"Wörter 40",en:"Words 40",fr:"Mots 40",mg:"Teny 40"},
	de:["schrieb","Samen","Ton","beitreten","vorschlagen","sauber","Pause","Dame","Hof","steigen","schlecht","Schlag","Öl","Blut","berühren"],
	en:["wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch"],
	fr:["écrit","semence","ton","joindre","suggérer","propre","pause","dame","cour","augmenter","mauvais","coup","huile","sang","toucher"],
	mg:["nanoratra","voa","fiteny","hiaraka","hevitra","madio","fiatoana","vehivavy","tokontany","mitsangana","ratsy","namely","menaka","ra","mikasika"]
},
{
	type:"normal",
	name:{de:"Wörter 41",en:"Words 41",fr:"Mots 41",mg:"Teny 41"},
	de:["wuchs","Cent","mischen","Mannschaft","Draht","Kosten","verloren","braun","tragen","Garten","gleich","gesendet","wählen","fiel","passen"],
	en:["grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit"],
	fr:["a augmenté","cent","mélanger","équipe","fil","coût","perdu","brun","porter","jardin","égal","expédié","choisir","est tombé","s’adapter"],
	mg:["nitombo","#BEZUG!","afangaro","ekipa","tariby","vidin’ny","very","Brown","mitondra","zaridaina","mitovy","naniraka","misafidy","latsaka","antonona"]
},
{
	type:"normal",
	name:{de:"Wörter 42",en:"Words 42",fr:"Mots 42",mg:"Teny 42"},
	de:["fließen","Messe","Bank","sammeln","sparen","Kontrolle","dezimal","Ohr","sonst","ganz","pleite","Fall","Mitte","töten","Sohn"],
	en:["flow","fair","bank","collect","save","control","decimal","ear","else","quite","broke","case","middle","kill","son"],
	fr:["débit","juste","banque","recueillir","sauver","contrôle","décimal","oreille","autre","tout à fait","cassé","cas","milieu","tuer","fils"],
	mg:["mikoriana","ara-drariny","banky","hanangona","afa-","fanaraha-maso","decimal","sofina","hafa","tena","namaky","tranga","afovoany","mamono","zazalahy"]
},
{
	type:"normal",
	name:{de:"Wörter 43",en:"Words 43",fr:"Mots 43",mg:"Teny 43"},
	de:["See","Moment","Maßstab","laut","Frühling","beobachten","Kind","gerade","Konsonant","Nation","Wörterbuch","milch","Geschwindigkeit","Verfahren","Orgel"],
	en:["lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ"],
	fr:["lac","moment","échelle","fort","printemps","observer","enfant","droit","consonne","nation","dictionnaire","lait","vitesse","méthode","organe"],
	mg:["farihy","fotoana","ambaratonga","mafy","lohataona","mandinika","ankizy","mahitsy","consonant","firenena","rakibolana","ronono","hafainganam-pandeha","fomba","taova"]
},
{
	type:"normal",
	name:{de:"Wörter 44",en:"Words 44",fr:"Mots 44",mg:"Teny 44"},
	de:["zahlen","Alter","Abschnitt","Kleid","Wolke","Überraschung","ruhig","Stein","winzig","Aufstieg","kühlen","Entwurf","arm","Menge","Versuch"],
	en:["pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment"],
	fr:["payer","âge","section","robe","nuage","surprise","calme","pierre","minuscule","montée","frais","conception","pauvres","lot","expérience"],
	mg:["vola","taona","faritra","fitafiana","rahona","tsy nampoizina","mangina","vato","kely","fihanihana","milay","famolavolana","mahantra","be dia be","andrana"]
},
{
	type:"normal",
	name:{de:"Wörter 45",en:"Words 45",fr:"Mots 45",mg:"Teny 45"},
	de:["Boden","Schlüssel","Eisen","Einzel","Stick","Wohnung","zwanzig","Haut","Lächeln","Falte","Loch","springen","Kind","acht","Dorf"],
	en:["bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","jump","baby","eight","village"],
	fr:["bas","clé","fer","unique","bâton","plat","vingt","peau","sourire","pli","trou","sauter","bébé","huit","village"],
	mg:["ambany","fototra","vy","tokan-tena","tapa-kazo","marin-","roa-polo","hoditra","tsiky","crease","lavaka","hitsambikina","Baby","valo","tanàna"]
},
{
	type:"normal",
	name:{de:"Wörter 46",en:"Words 46",fr:"Mots 46",mg:"Teny 46"},
	de:["treffen","Wurzel","kaufen","erhöhen","lösen","Metall","ob","drücken","sieben","Absatz","dritte","wird","Hand","Haar","beschreiben"],
	en:["meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe"],
	fr:["se rencontrent","racine","acheter","augmenter","résoudre","métal","si","pousser","sept","paragraphe","troisième","doit","en attente","cheveux","décrire"],
	mg:["mivory","faka","mividy","atsangano","mamaha","metaly","na","atoseho","fito","andinin-tsoratra","fahatelo","dia","Held","volony","mamaritra"]
},
{
	type:"normal",
	name:{de:"Wörter 47",en:"Words 47",fr:"Mots 47",mg:"Teny 47"},
	de:["Koch","Boden","entweder","Ergebnis","brennen","Hügel","sicher","Katze","Jahrhundert","betrachten","Typ","Gesetz","Bit","Küste","Kopie"],
	en:["cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy"],
	fr:["cuisinier","étage","chaque","résultat","brûler","colline","coffre-fort","chat","siècle","envisager","type","droit","peu","côte","copie"],
	mg:["Cook","rihana","na","vokatra","hodorana","colina","azo antoka","saka","taonjato","Diniho","karazany","lalàna","kely","fari-","dika mitovy"]
},
{
	type:"normal",
	name:{de:"Wörter 48",en:"Words 48",fr:"Mots 48",mg:"Teny 48"},
	de:["Ausdruck","still","hoch","Sand","Boden","Rolle","Temperatur","Finger","Industrie","Wert","Kampf","Lüge","schlagen","begeistern","natürlich"],
	en:["phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural"],
	fr:["phrase","silencieux","haut","sable","sol","rouleau","température","doigt","industrie","valeur","lutte","mensonge","battre","exciter","naturel"],
	mg:["andian-teny","mangina","lava","fasika","nofon-tany","horonam-boky","mari-pana","rantsan-tànany","orinasa","danja","ady","lainga","nandresy","manaitaitra","voajanahary"]
},
{
	type:"normal",
	name:{de:"Wörter 49",en:"Words 49",fr:"Mots 49",mg:"Teny 49"},
	de:["Blick","Sinn","Hauptstadt","wird nicht","Stuhl","Achtung","Obst","reich","dick","Soldat","Prozess","betreiben","Praxis","trennen","schwierig"],
	en:["view","sense","capital","won’t","chair","danger","fruit","rich","thick","soldier","process","operate","practice","separate","difficult"],
	fr:["vue","sens","capital","ne sera pas","chaise","danger","fruit","riche","épais","soldat","processus","fonctionner","pratique","séparé","difficile"],
	mg:["View","hevitra","Renivohitra","dia tsy","seza","loza","vokatra","manan-karena","matevina","miaramila","dingana","miasa","fanao","misaraka","sarotra"]
},
{
	type:"normal",
	name:{de:"Wörter 50",en:"Words 50",fr:"Mots 50",mg:"Teny 50"},
	de:["Arzt","Bitte","schützen","Mittag","Ernte","modernen","Elementes","treffen","Schüler","Ecke","Partei","Versorgung","deren","lokalisieren","Rings"],
	en:["doctor","please","protect","noon","crop","modern","element","hit","student","corner","party","supply","whose","locate","ring"],
	fr:["médecin","s’il vous plaît","protéger","midi","récolte","moderne","élément","frapper","étudiant","coin","partie","alimentation","dont","localiser","anneau"],
	mg:["dokotera","mba miangavy re","miaro","mitataovovonana","vokatra","ankehitriny","singa","voa","mpianatra","zoro","antoko","famatsiana","izay","toerana","peratra"]
},
{
	type:"normal",
	name:{de:"Wörter 51",en:"Words 51",fr:"Mots 51",mg:"Teny 51"},
	de:["Charakter","insekt","gefangen","Zeit","zeigen","Funk","Speiche","Atom","Mensch","Geschichte","Wirkung","elektrisch","erwarten","Knochen","Schiene"],
	en:["character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","bone","rail"],
	fr:["caractère","insecte","pris","période","indiquer","radio","rayon","atome","humain","histoire","effet","électrique","attendre","os","rail"],
	mg:["toetra","bibikely","tratra","fotoana","maneho","onjam-peo","niteny","tsivaky","olombelona","tantara","vokatry","elektrika","manantena","taolana","lalamby"]
},
{
	type:"normal",
	name:{de:"Wörter 52",en:"Words 52",fr:"Mots 52",mg:"Teny 52"},
	de:["vorstellen","bieten","zustimmen","so","sanft","Frau","Kapitän","erraten","erforderlich","scharf","Flügel","schaffen","Nachbar","Wasch","Fledermaus"],
	en:["imagine","provide","agree","thus","gentle","woman","captain","guess","necessary","sharp","wing","create","neighbor","wash","bat"],
	fr:["imaginer","fournir","se mettre d’accord","ainsi","doux","femme","capitaine","deviner","nécessaire","net","aile","créer","voisin","lavage","chauve-souris"],
	mg:["sary an-tsaina","manome","miombon-kevitra","dia toy izany no","malemy fanahy","vehivavy","komandin’ny","maminavina","ilaina","maranitra","elatra","hamorona","mpiara-belona","Wash","ramanavy"]
},
{
	type:"normal",
	name:{de:"Wörter 53",en:"Words 53",fr:"Mots 53",mg:"Teny 53"},
	de:["eher","Menge","mais","vergleichen","Gedicht","Schnur","Glocke","abhängen","Fleisch","einreiben","Rohr","berühmt","Dollar","Strom","Angst"],
	en:["rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear"],
	fr:["plutôt","foule","blé","comparer","poème","chaîne","cloche","dépendre","viande","rub","tube","célèbre","dollar","courant","peur"],
	mg:["fa","vahoaka","katsaka","ampitahao amin’ny","tononkalo","kofehy","Bell","miankina","hena","RUB","fantsona","malaza","dolara","Stream","tahotra"]
},
{
	type:"normal",
	name:{de:"Wörter 54",en:"Words 54",fr:"Mots 54",mg:"Teny 54"},
	de:["Blick","dünn","Dreieck","Erde","Eile","Chef","Kolonie","Uhr","Mine","Krawatte","eingeben","Dur","frisch","Suche","senden"],
	en:["sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send"],
	fr:["vue","mince","triangle","planète","se dépêcher","chef","colonie","horloge","mine","lien","entrer","majeur","frais","recherche","envoyer"],
	mg:["fahitana","manify","telozoro","planeta","faingana","lehiben’ny","zanatany","famantaranandro","ny ahy","karavato","hiditra","lehibe","vaovao","fikarohana","handefa"]
},
{
	type:"normal",
	name:{de:"Wörter 55",en:"Words 55",fr:"Mots 55",mg:"Teny 55"},
	de:["gelb","Pistole","erlauben","Druck","tot","Stelle","Wüste","Anzug","Strom","Aufzug","stiegen","ankommen","Stamm","Spur","Elternteil"],
	en:["yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","arrive","master","track","parent"],
	fr:["jaune","pistolet","permettre","impression","mort","place","désert","costume","courant","ascenseur","rose","arriver","maître","piste","mère"],
	mg:["mavo","basy","hamela","printy","maty","toerana","efitra","niantso ny Fiangonany","amin’izao fotoana izao","atraka","nitsangana","tonga","tompony","lalana","ray aman-dreny"]
},
{
	type:"normal",
	name:{de:"Wörter 56",en:"Words 56",fr:"Mots 56",mg:"Teny 56"},
	de:["Ufer","Teilung","Blatt","Substanz","begünstigen","verbinden","nach","verbringen","Akkord","Fett","froh","Original","Aktie","Station","Papa"],
	en:["shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad"],
	fr:["rivage","division","feuille","substance","favoriser","relier","poste","passer","corde","graisse","heureux","original","part","station","papa"],
	mg:["eny an-tanety","fizarana","lamba","fananana","mankasitraka","mifandray","lahatsoratra","mandany","chord","tavy","faly","tany am-boalohany","anjara","peo","Dada"]
},
{
	type:"normal",
	name:{de:"Wörter 57",en:"Words 57",fr:"Mots 57",mg:"Teny 57"},
	de:["Brot","aufladen","richtig","Leiste","Angebot","Segment","Sklave","ente","Augenblick","Markt","Grad","besiedeln","küken","liebe","Feind"],
	en:["bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy"],
	fr:["pain","charger","propre","bar","proposition","segment","esclave","canard","instant","marché","degré","peupler","poussin","cher","ennemi"],
	mg:["mofo","Mampianiana","iombonana","bar","tolotra","ampahany","mpanompo","gana","avy hatrany","tsena","diplaoma","hameno","zana-borona","malala","fahavalo"]
},
{
	type:"normal",
	name:{de:"Wörter 58",en:"Words 58",fr:"Mots 58",mg:"Teny 58"},
	de:["antworten","Getränk","auftreten","Unterstützung","Rede","Natur","Angebot","Dampf","Bewegung","Weg","Flüssigkeit","protokollieren","gemeint","Quotient","Gebiss"],
	en:["reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth"],
	fr:["répondre","boisson","se produire","support","discours","nature","gamme","vapeur","mouvement","chemin","liquide","enregistrer","signifiait","quotient","dents"],
	mg:["navalin’i","zava-pisotro","mitranga","fanohanana","miteny","toetra","isan-karazany","etona","Soratra Masina","lalana","rano","midira","natao","quotient","nify"]
},
{
	type:"normal",
	name:{de:"Wörter 59",en:"Words 59",fr:"Mots 59",mg:"Teny 59"},
	de:["Schale","Hals","Sauerstoff","Zucker","Tod","ziemlich","Geschicklichkeit","Frauen","Saison","Lösung","Magnet","Silber","danken","Zweig","Spiel"],
	en:["shell","neck","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match"],
	fr:["coquille","cou","oxygène","sucre","décès","assez","compétence","femmes","saison","solution","aimant","argent","merci","branche","rencontre"],
	mg:["akorandriaka","tendany","ôksizenina","siramamy","fahafatesana","tsara tarehy","fahaiza-manao","vehivavy","vanim-potoana","vahaolana","andriamby","volafotsy","misaotra","sampana","lalao"]
},
{
	type:"normal",
	name:{de:"Wörter 60",en:"Words 60",fr:"Mots 60",mg:"Teny 60"},
	de:["Suffix","insbesondere","Feige","ängstlich","riesig","Schwester","Stahl","diskutieren","vorwärts","ähnlich","führen","Erfahrung","Partitur","apfel","gekauft"],
	en:["suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought"],
	fr:["suffixe","particulièrement","figue","peur","énorme","sœur","acier","discuter","avant","similaire","guider","expérience","score","pomme","acheté"],
	mg:["suffix","indrindra","aviavy","raiki-tahotra","goavana","rahavavy","vy","hevitra","handroso","mitovy","hitari-dalana","traikefa","maty","paoma","nividy"]
},
{
	type:"normal",
	name:{de:"Wörter 61",en:"Words 61",fr:"Mots 61",mg:"Teny 61"},
	de:["geführt","Tonhöhe","Mantel","Masse","Karte","Band","Seil","Rutsch","gewinnen","träumen","Abend","Zustand","Futtermittel","Werkzeug","gesamt"],
	en:["led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total"],
	fr:["LED","pas","manteau","masse","carte","bande","corde","glissement","gagner","rêver","soirée","condition","alimentation","outil","total"],
	mg:["led","dity","akanjo","faobe","karatra","tarika","tady","taratasy mi-","Win","manonofy","hariva","toe-","fahana","fitaovana","tanteraka"]
},
{
	type:"normal",
	name:{de:"Wörter 62",en:"Words 62",fr:"Mots 62",mg:"Teny 62"},
	de:["Basis","Geruch","Tal","noch","doppelt","Sitz","fortsetzen","Block","Tabelle","Hut","verkaufen","Erfolg","Firma","subtrahieren","Veranstaltung"],
	en:["basic","smell","valley","nor","double","seat","continue","block","chart","hat","sell","success","company","subtract","event"],
	fr:["de base","odeur","vallée","ni","double","siège","continuer","bloc","graphique","chapeau","vendre","succès","entreprise","soustraire","événement"],
	mg:["fototra","manimbolo","dohasaha","na","avo roa heny","seza","foana","andian-tsoratra","tabilao","satroka","mivarotra","fahombiazana","orinasa","analana","zava-nitranga"]
},
{
	type:"normal",
	name:{de:"Wörter 63",en:"Words 63",fr:"Mots 63",mg:"Teny 63"},
	de:["besondere","viel","schwimmen","Begriff","Gegenteil","Frau","Schuh","Schulter","Verbreitung","arrangieren","Lager","erfinden","Baumwolle","geboren","bestimmen"],
	en:["particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine"],
	fr:["particulier","accord","baignade","terme","opposé","femme","chaussure","épaule","propagation","organiser","camp","inventer","coton","né","déterminer"],
	mg:["manokana","fifanarahana","milomano","teny","mifanohitra","vadiny","kiraro","soroka","fielezan’ny","handamina","toby","mamorona","landihazo","Born","mamaritra"]
},
{
	type:"normal",
	name:{de:"Wörter 64",en:"Words 64",fr:"Mots 64",mg:"Teny 64"},
	de:["Quart","neun","Lastwagen","Lärm","Ebene","Chance","sammeln","Geschäft","Stretch","werfen","Glanz","Immobilien","Spalte","Molekül","wählen"],
	en:["quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select"],
	fr:["litre","neuf","camion","bruit","niveau","chance","recueillir","boutique","tronçon","jeter","éclat","propriété","colonne","molécule","sélectionner"],
	mg:["litatra","sivy","kamiao","feo","ambaratonga","kisendrasendra","hanangona","fivarotana","mihinjitra","hitora","hamirapiratra","fananana","tsanganana","molekiola","mifidy"]
},
{
	type:"normal",
	name:{de:"Wörter 65",en:"Words 65",fr:"Mots 65",mg:"Teny 65"},
	de:["FALSCH","grau","Wiederholung","erfordern","breit","vorbereiten","Salz","Nase","mehreren","Zorn","Anspruch","Kontinent"],
	en:["wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent"],
	fr:["mal","gris","répétition","exiger","large","préparer","sel","nez","pluriel","colère","revendication","continent"],
	mg:["diso","volondavenona","Avereno","mitaky","malalaka","hiomana","sira","orona","teny","fahatezerana","fitarainana","kaontinanta"]
}];
data.push.apply(data, data2);
