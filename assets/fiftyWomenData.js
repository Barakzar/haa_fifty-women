// Scrapped data of fifty women, from  https://www.haaretz.co.il/gallery/literature/EXT.premium.HIGHLIGHT-EXT-STATIC-1.9903191

let fiftyWomenData = {
  // Array.from(document.querySelector('#articleBodyWrapper > section.int-grid-container.ah.ft.fu.fv.ak.fw.fx.fy').querySelectorAll('img')).reduce((prev,curr)=>prev.concat(curr.src),[])
  imgLinks: [
    "https://img.haarets.co.il/img/1.9915793/4220257191.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915413/3659438690.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9914918/833732031.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915878/2849377983.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915446/3135373583.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9913951/1035757157.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915932/733784009.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9913954/4189978936.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915882/973269394.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9913956/1869177832.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9913958/2344375836.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9922330/4214833934.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9914856/861418229.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915883/4178962864.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9913957/384705644.png?precrop=422,704,x0,y0&height=684&width=410",
    "https://img.haarets.co.il/img/1.9915875/1259288497.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9922338/4266722869.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9914882/118941450.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9914895/3669722612.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9914898/2220142696.png?precrop=422,912,x0,y0&height=886&width=410",
    "https://img.haarets.co.il/img/1.9922343/4266264243.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915914/3744227722.png?precrop=422,829,x0,y0&height=805&width=410",
    "https://img.haarets.co.il/img/1.9915859/2323787431.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9914907/1125892449.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915785/4034233165.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9914927/292541205.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9922756/4251289024.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9914954/1742310714.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915386/1480912011.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915392/2910502726.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915399/1919099313.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915403/3954039697.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915405/4285994708.png?precrop=422,843,x0,y0&height=819&width=410",
    "https://img.haarets.co.il/img/1.9915887/3285201958.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915416/1177792044.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915926/1097598821.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915832/492711443.png?precrop=422,829,x0,y0&height=805&width=410",
    "https://img.haarets.co.il/img/1.9915423/2962226018.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915863/1491322705.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915789/420862368.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915432/857259412.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915438/1890400278.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915440/1221579333.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915751/1702123405.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915873/3337483970.png?precrop=422,941,x0,y0&height=914&width=410",
    "https://img.haarets.co.il/img/1.9915444/1573034935.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915442/3761118576.png?precrop=422,1027,x0,y0&height=998&width=410",
    "https://img.haarets.co.il/img/1.9915848/2124290873.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9915763/1528112377.png?precrop=422,1026,x0,y0&height=997&width=410",
    "https://img.haarets.co.il/img/1.9922335/4287857779.png?precrop=422,676,x0,y0&height=657&width=410",
  ],

  // Array.from(document.querySelector('#articleBodyWrapper > section.int-grid-container.ah.ft.fu.fv.ak.fw.fx.fy').querySelectorAll('span:not([class]):first-child')).reduce((prev,curr)=>prev.concat(curr.innerText),[])
  titles: [
    "הספר לימד אותי לא לבקש, אלא לדרוש",
    "משחק מקדים מדהים",
    "מעין מדריך למשתמש עבור נשים",
    "השלמתי עם הגוף ועם המיניות שלי",
    "כבר לא מגניב לראות את הבתולה המלחששת",
    "אני הולכת להעיף לכן את הראש",
    "סלבס, משחקי מין וסושי",
    "שינה לי את החיים",
    "שינוי חברתי כמו אחרי המצאת הגלולה",
    "הרבה רבנים ממליצים על הקריאה",
    "הבנתי שגם אמא שלי קוראת",
    "אני מבית דתי. זה נתן לי לגיטימציה לנסות",
    "הדגדגן הוא מה שחשוב כאן",
    "לא מתנצלת על מה שעושה לי כיף",
    "דרישה לקולות נשיים",
    "אחרי שנים של בושה, קיבלתי קול",
    "פתאום הבנתי שפנטזיות מסוימות הן לגיטימיות",
    "נפתח פתח לנשים לכתוב על סקס",
    "הרגשתי כמו טינאייג'רית",
    "פנזטיה על הצלפות בעליית הגג",
    "עם הזמן גם בעלי הביא רעיונות",
    "פתאום גם אני התחלתי ליזום",
    "פתח לי תיבת פנדורה",
    "הבנתי שאפשר להראות מה קורה מאחורי הדלת",
    "היו רעידות בכל הגוף, חשבתי עליו בלי סוף",
    "קריאה מעולה להפרעת הקשב שלי",
    "בפעם הראשונה בחיים קניתי פיג'מה סקסית",
    "קראתי אותו בבית קפה. היום לא אעשה זאת",
    "תורי ענק בדוכנים",
    "עדיין קיימת עין מפקחת שמפריעה לנו לגמור",
    "פתאום הרגשתי בבית",
    'תמונה מעוותת לגבי בדס"ם',
    "אף אישה מעולם לא גמרה מרפרוף של נוצה על הפות",
    "43 אלף חברות",
    "אשתו קראה את הספר ולא נתנה לו לישון",
    "כל ההתלהבות מעידה בעיניי דווקא על שמרנות",
    "יש קבוצות של אלפי בנות באותו הקטע",
    "זה היה כמו גל ששטף אותנו",
    "בלי קשר לנטייה המינית שלנו",
    "הספר שלח נשים לחנויות לצעצועי מין",
    'בדס"ם מוצג כפתולוגיה',
    "למצוא את הפנטזיה המדויקת",
    "פתאום זו לא בושה לקרוא ספרות רומנטית",
    "פעם ראשונה שמתייחסים לווסת של הגיבורה",
    "מעלה המון שאלות על פמיניזם",
    "מסלול עוקף פורנו",
    "שיטפון של נשים שיצאו מהארון הרומנטי",
    "מהרגע שקראתי זה השתלט לי על החיים",
    "אני תמיד מוצאת בגיבור משהו שמזכיר לי את בעלי",
    "פתח את הצ'אקרות להמון נשים",
  ],

  // Array.from(document.querySelector('#articleBodyWrapper > section.int-grid-container.ah.ft.fu.fv.ak.fw.fx.fy').querySelectorAll('span[class="hc cf ck cl"')).reduce((prev,curr)=>prev.concat(curr.innerText),[])
  subTitles: [
    "עינב נויברג, 39, נשואה + 3, בודקת תוכנה",
    "דנה לוי אלגרוד, 43, נשואה + 2, סופרת רומנים רומנטיים",
    "לירון סיני זאבו, 38, בזוגיות + 1, מבקרת תרבות ואסטרטגית",
    "נועה ז'לסקו־נוימן, 41, נשואה + 2, בודקת תוכנה",
    "נילי צרויה, 44, נשואה + 2, יוצרת ושחקנית",
    "נטע גורביץ', 50, נשואה + 4, מייסדת ובעלים של הוצאת ליטראטי",
    'מיכל פייקין, 40, בזוגיות + 2, מנהלת פיתוח עסקי ב"עברית"',
    'איילת סטוויצקי, 44, נשואה + 3, סופרת ומו"לית',
    "ליהי גרוס־אביטל, 38, בזוגיות, מנהלת בחברת תוכנה",
    "גלית גודלי, 48, נשואה + 11, עקרת בית",
    "ג'ני שניידמן, 36, נשואה + 1, מו\"לית הוצאת ונוס",
    "אביבית וודזילובסקי, 29, נשואה, אחות",
    "שרי שביט, 39, נשואה + 2, סופרת, משוררת ועורכת",
    "נעה ברויאר, 32, רווקה, אופה",
    "נועה מנהיים, 46, נשואה + 1, ראש מחלקת ספרות עברית בכנרת זמורה דביר",
    "מורן מימוני, 34, נשואה + 1, מנהלת תוכן",
    "אמילי בן חמו, 36, גרושה, עוסקת במערכות מידע",
    "תמר ביאליק, 47, בזוגיות + 1, עורכת ולקטורית",
    "טל פורקוש, 45, בזוגיות + 1, מנהלת שיווק",
    "מיכל רפטר, 37, נשואה + 2, שירות לקוחות",
    "קארין ביניאשוילי, 34, נשואה + 1, מורה",
    "סבטלנה מאן, 38, נשואה + 2, פיזיותרפיסטית וסופרת",
    "קרינה מלמד, 39, נשואה + 2, בעלת עסק",
    "יהודית ציפורי, 53, נשואה + 3, מנהלת כספים וסופרת",
    "דפי קרייזל, 32, נשואה+1, עורכת ראשית של הוצאת אופוריה",
    "ליאן רזניק פירקה, 39, נשואה + 1, מודליסטית",
    "שרית חיים, 51, נשואה + 3, סופרת בז'אנר",
    'ד"ר סיגל נאור פרלמן, 52, נשואה + 3, חוקרת ומשוררת',
    'גילי איזיקוביץ, 41, נשואה + 2, כתבת הספרות של "הארץ"',
    "יסמין קיני, 52, בזוגיות + 1, במאית",
    "עדי אטיאס, 26, רווקה, מוכרת בחנות ספרים",
    'תומא דאב, 26, בזוגיות, בלוגרית בדס"ם',
    'ד"ר יסמין פרהדיאן, 32, נשואה + 1, רופאה',
    "שני ויסלברג, 27, בזוגיות, מהנדסת תוכנה",
    "מיקי זינגר, 48, נשואה + 2, יועצת שיווק",
    "יסמין לוי, בזוגיות, 46, עיתונאית",
    "גלית מייר, 47, נשואה + 3, סייעת לרופא שיניים",
    "לי ראובני, 43, בזוגיות + 2, מטפלת מינית וזוגית",
    'ד"ר קרן לנדסמן, 42, נשואה + 2, רופאה',
    "דפנה דויד קורן, 48, רווקה, בעלת חנות מוצרי מין",
    "דפנה גרינר, 45, רווקה + 2, פסיכותרפיסטית",
    "ענבל שגיב־נקדימון, 49, נשואה + 2, מתרגמת ומרצה",
    "נרדית מנחם, 43, נשואה + 2, מנהלת תמיכה שיווקית",
    "ענת שדה, 43, נשואה + 3, מנתחת מערכות מידע",
    "קרן להמן, 40, נשואה + 3, משוררת ואשת חינוך",
    "מגי אוצרי, 37, בזוגיות + 1, סופרת",
    "נטליה שדה, 47, רווקה + 2, רפרנטית אבטחת איכות",
    "גלית אוזן מלכה, 32, נשואה + 1, בעלת הוצאת הספרים טורקיז",
    "כרמית פישרמן, 35, נשואה + 2, מאמנת כושר",
    "חגית עוז, 43, נשואה + 4, יועצת משפטית",
  ],

  // Array.from(document.querySelector('#articleBodyWrapper > section.int-grid-container.ah.ft.fu.fv.ak.fw.fx.fy').querySelectorAll('span[class="hg al"')).reduce((prev,curr)=>prev.concat(curr.nextSibling.wholeText),[])
  textCards: [
    '"מר גריי יקבל אותך עכשיו" אני פותחת את הדלת, ונופלת ישר על הפרצוף. אני על ארבע וידיים עדינות עוזרות לי לקום. אני מעזה להרים מבט. שִׁיט, הוא כל כך צעיר!"',
    "\"השיניים שלו סביב הפטמה, האגודל והאצבע מושכות בשנייה, ואני מתפרקת לו בידיים. על פניו חיוך מדושן עונג. 'את מגיבה מאוד חזק', הוא נושם. 'תצטרכי ללמוד לשלוט בזה. יהיה תענוג ללמד אותך'\" ",
    'האצבע שלו מקיפה אותי במעגלים אִיטיים. "כמה שאת רטובה, אלוהים, כמה שאני רוצה אותך". הוא דוחף את אצבעו לתוכי, שוב ושוב, מגביר עוד ועוד, עד שאני נאנקת',
    '"את באמת רוצה לעשות את זה?" הוא שואל בשקט. "בבקשה", אני מתחננת. "אני הולך לזיין אותך עכשיו, לזיין אותך חזק". אני צועקת כשהוא מבתק לי את הבתולים. עיניו זוהרות בהתעלות של ניצחון',
    "הוא מוריד את תחתוני הבוקסר והאיבר שלו, במלוא זקפתו, משתחרר כמו קפיץ. שיואו שאני אמות... הוא גוחן אל השידה ולוקח את הקונדום, ואז הוא עובר לי אל בין הרגליים, ומפשק אותן עוד יותר",
    '"מתי התחיל לך המחזור, אנסטסיה?" הוא שואל פתאום, בלי שום הקדמות. "אה... אתמול", אני ממלמלת, מחורמנת מאוד. "טוב מאוד"... הוא שולח לי את היד אל בין הרגליים ומושך לי בחוט הכחול - מה? - שולף בעדינות את הטמפון ומשליך אותו',
  ],

  // Array.from(document.querySelector('#articleBodyWrapper > section.int-grid-container.ah.ft.fu.fv.ak.fw.fx.fy').querySelectorAll('span:not([class]):nth-child(2)')).reduce((prev,curr)=>prev.concat(curr.innerText),[])
  texts: [
    `בדור שלי, מיניות היה דבר שנעשה בחדרי חדרים, בהיחבא, שלא מדברים עליו. "50 גוונים" לימד אותי לא לבקש את מה שאני רוצה, אלא לדרוש. להגיד "אני רוצה שתעשה לי את זה", בלי להסמיק ובלי להתבייש. נתתי לבעלי לקרוא קטעים ושאלתי, "מה אתה אומר, זה אפשרי, אנטומית?" ואז בדקנו יחד. "50 גוונים" היה נקודת המוצא שבה הבנתי שסקס זו לא מטלה שמסמנים עליה וי, ושגם לי מגיע ליהנות מזה
  `,
    `בניגוד לגברים שיכולים להתחרמן תוך 30 שניות מסרט כחול, נשים צריכות את המשחק המקדים, והמשחק המקדים בספר הזה הוא מדהים. המתח נבנה בו כך שכשהאקט כבר מגיע אפשר ממש להרגיש אותו בבטן, וזו ההצלחה של הספר — הוא פתח את המיניות שלנו למשהו שמותר להתרגש ממנו, והוביל נשים לצאת ולהתנסות. בתוך השגרה האפורה שאנחנו חיות בה קל לכבות אותנו, אבל "50 גוונים" הצליח לגרום לנשים למצוא את הקול והמיניות שלהן מחדש
  `,
    `נשים בצד את הכתיבה האיומה ואת העובדה שיש פה גבר שמסגביר לנו איך אנחנו צריכות ליהנות. הכוח של "50 גוונים" נובע מכך שהוא מהווה מעין "מדריך למשתמש" עבור נשים, שעוסק במיניות האישה ושמלמד אותנו איך לחקור את המיניות שלנו, עם הסברים כמעט אנטומיים. בניגוד לפורנו, כאן יש מישהי שמספרת: "הוא עשה לי ככה, הכניס לי את האצבע לשם, הזיז אותה בצורה הזאת ואז ראיתי ישועות'" זה מאוד פרקטי
  `,
    `זה שיחרר אצלי מקום נעול ואיפשר לי להשלים עם הגוף ועם המיניות שלי. לדעת להיות יותר חופשייה עם הרצונות שלי. הבנתי שלכולם יש רצונות ופנטזיות שנמצאים עמוק בפנים ושהם מפחדים להוציא החוצה, וזה שיחרר משהו. זה נתן לגיטימציה לעשות כמעט הכל מבחינת הקריאה והחופש למיניות. פתאום גם אני מבקשת דברים, ומדברת על מיניות בצורה חופשית יותר, גם עם החברות וגם עם בעלי
  `,
    `עברנו כברת דרך בעשור האחרון, והיום זה כבר לא באמת מגניב לראות את הבתולה שמלחששת. היום יש על המסך הרבה יותר ייצוגים של נשים שלא גומרות רק מחדירה, ויש הרבה יותר התייחסות לדגדגן ולהנאה של האישה. כמו ב"ברידג'רטון", שם הגיבורה לא נחותה מהגבר - היא יודעת בדיוק מה היא רוצה, והרצונות לא פחות חשובים מאלה שלו. הסקס ביניהם הוא כזה שמסב הנאה לשניהם עם המון מקום למשחק המקדים, וזה פנטסטי
  `,
    `כשהייתי העורכת הראשית של "ידיעות ספרים", התעוררתי למייל מחברה מלונדון שסיפרה על ספר שאני חייבת לקרוא. כמה רגעים אחר כך קיבלתי הודעה זהה מניו יורק. התחלתי לקרוא אותו ולא הצלחתי להפסיק. באותו היום היה יום הולדת לילד מהגן, שם ראיתי תריסר אימהות עייפות, ואמרתי "חברות, בעוד כמה חודשים אעיף לכן את הראש". באותו היום סגרנו על מקדמה של אלף דולר, ושבוע אחרי כבר נמכרו זכויות התרגום בגרמניה במיליון דולר
  `,
    `כדוברת של "ידיעות ספרים", היה לי ברור שיש כאן משהו שלא נראה כמותו, וכך התייחסנו להשקה. הבנו שאסור לנו לפספס. חודש לפני כבר הפצנו ברושור עם כל הכתבות שיצאו על הספר בעולם. שבועיים לפני שלחנו לתקשורת ולמובילי דעה ספר פרומו, עם קטעי הסקס הכי לוהטים. את '50 גוונים' השקנו באולם עם סלבס, קוקטיילים, משחקי מין וסושי. וזה עבד, תוך יומיים נמכרו 5,000 עותקים. תוך שבועיים 20 אלף
  `,
    `נתקלתי בפרק הראשון בעיתון סוף השבוע, ובשבת כבר טסתי לחנות לקנות את הספר. משהו נפתח בי ומיד התחלתי לכתוב את "תחרה וצבע", טרילוגיה שבה דיברתי על המאניה־דיפרסיה שאני סובלת ממנה. זה נשפך ממני, היה בזה משהו תרפויטי. לא היה לי יום ולא לילה, רק ישבתי וכתבתי. הספר שינה לי את החיים והפך אותי מאישה שלא קוראת לאישה שמשלימה קריאה של הקלאסיקות הגדולות ומתפרנסת מכתיבה בלבד
  `,
    `הגלולה למניעת היריון התפוצצה בסוף שנות ה-50 ובתחילת שנות ה-60, במקביל לתנועת הסחף האדירה של דור הפרחים והאהבה החופשית. היא אפשרה לנשים להשתתף בחוויה הזו, ונתנה להן כוח אדיר. באופן דומה, יש משהו בתופעה של "50 גוונים", בזמן ובמקום שבו הוא יצא, שאיפשר לנשים לדבר על המיניות שלהן, להרגיש יותר בנוח להשתמש בצעצועי מין, לשחרר דברים שאולי חשבנו עליהם אבל שמעולם לא דוברו. והדבר הזה איפשר שינוי חברתי מאוד מוצלח ומשחרר
  `,
    `עד לפני שבע שנים לא קראתי ספרים שלא קשורים לדת, ובעקבות משבר הגעתי ל"50 גוונים" - ונשאבתי. אפילו הלכתי לראות את הסרט בקולנוע, למרות שאני דתייה. יש לי 11 ילדים בבית, אין לי כסף לספרים, אז ההוצאות שולחות לי חינם בתמורה לעזרה בפייסבוק. יש בספרים הללו המון דברים שמלמדים איך להתנהג בזוגיות, זה יוצר שלום בית, ולכן הרבה רבנים ממליצים על הקריאה בהם. מאז שהתחלתי לקרוא, היחסים שלי עם בעלי השתפרו מאוד
  `,
    `נסעתי עם אבא שלי להשתלת כליה בחו"ל. סיטואציה לא נעימה שהיתה אמורה להימשך שבוע ובסוף נמשכה חודש. בזמן הזה קראתי את הטרילוגיה בכמה ימים, ומיד קראתי אותה שוב מההתחלה. זו היתה בריחה, וזה פתח לי עולם אחר. אני באה מבית רוסי קשוח ולא ידעתי שהספרות האירוטית קיימת. בדיעבד הבנתי שגם אמא שלי קוראת אותה. תמיד היו לה סטוקים של ספרים, ופתאום התחלתי להסתכל על הכריכות והבנתי מה היא קוראת
  `,
    `אני מגיעה מבית דתי, מעולם לא ראיתי פורנו, ופתאום נתקלתי במשהו שהדליק אותי, שפתח אותי לעולם שלא הכרתי. יש משהו נורא כיף בלקרוא על אהבה ועל המימוש שלה, שזה משהו שלא היה בספרים עד אז. זה גרם לי להוריד את השיפוטיות ולהיפטר מהסטיגמות. פתאום התחלתי לקבל את העובדה שזה בסדר לחשוב ולחיות אחרת. הבנתי שפנטזיות מסוימות הן לגיטימיות, שמותר לי לנסות דברים בלי להרגיש שזה לא בסדר
  `,
    `הספר הזה פונה למכנה המשותף הרחב ביותר, ומי שמזלזל ביכולת הספרותית לייצר מוצר שפונה לכולן לא מבין את הכוח האמיתי של ספרות. תוך כדי הקריאה שאלתי את עצמי "למה זה עובד עלי?" והבנתי שהמשוואה כאן היא אחרת. שהוא עובד על מבחן הרטוב בתחתונים. הסופרת הצליחה לקלף את השאלה "מה נשים רוצות" ונשארה עם הגרעין הקשה והמדויק ביותר. הוא לא נכתב כדי שנתרשם מהמילה הכתובה, הדגדגן הוא מה שחשוב כאן
  `,
    `יש תנועה של נשים שאומרת בקול שהגיע הזמן להפסיק עם הצירוף "גילטי פלז'ר". שאם משהו מסב לי עונג אני ממש לא צריכה להרגיש אשמה לגביו - והבנתי שזה נכון. שאני לא צריכה להתנצל על משהו שעושה לי כיף, ושאני יכולה להשתחרר מהסטיגמה ופשוט ליהנות. בעבר, בחרתי תמיד "ספרים איכותיים" ממקום שיפוטי כלפי עצמי. אבל הבנתי שאין לי על מה להרגיש אשמה והפסיק להיות לי אכפת. היום אני פשוט נהנית
  `,
    `העשור שהתחיל בשנות האלפיים עם "הארי פוטר" ו"דמדומים", נגמר ביציאה של "50 גוונים", שמתאפיין בחדירת הפנטזיה אל עומק המיינסטרים. אמנם אין ב"50 גוונים" קוסמים מעופפים, אבל הוא ספר פנטזיה לכל דבר שהגיע מתוך רצון עולמי עמוק באסקפיזם. ההצלחה האדירה שלו, והרגע התרבותי הנדיר הזה, מגיעים גם מהדרישה ליותר קולות נשיים - דרישה שבאה בהלימה עם תהליך שנמשך עד היום, שבמסגרתו נשברים המבנים ההיררכיים של שיווק, פרסום, ביקורת והוצאה לאור
  `,
    `בניית העולם ב"50 גוונים" סחפה אותי, והרגשתי שאני צוללת לעולם חדש שידעתי שקיים רק מתוכניות תיעודיות. לא היה לי מושג איך זה באמת נראה במציאות או שאנשים באמת חיים את זה. פתאום כולן סביבי התחילו לדבר על הספר והבנתי שאני ממש לא לבד. בכל שיחה על הספר, המיניות היתה נוכחת וזה איפשר לי, אחרי שנים שבהן התביישתי, פשוט להיפתח. במובן מסוים, "50 גוונים" נתן לי קול
  `,
    `תמיד קראתי המון, אבל "50 גוונים" היה מבחינתי טאבו. הוא עבר על מוסכמות חברתיות ונמנעתי ממנו. בסוף, בעקבות כל הדיבור, קראתי אותו, והוא פתח לי עולם שלא הכרתי. הוא איפשר לדבר על מיניות שהיא קצת אחרת, ופתאום הבנתי שפנטזיות מסוימות הן לגיטימיות. זה נתן לי לגיטימציה לחקור דברים בלי להרגיש לא בסדר. השיפוטיות שלי ירדה והתחלתי להיחשף לעולמות ואנשים חדשים
  `,
    `"50 גוונים" פתח פתח לנשים לכתוב על סקס, וזה אקט מאוד פמיניסטי בעיניי. כמה חודשים אחרי שהוא יצא התחלנו לקבל בהוצאה ערמות של כתבי יד אירוטיים ללקטורה, וזה זרם שנמשך עד היום. בהתחלה אלה היו חיקויים, נשים שהרגישו שגם הן רוצות לספר את הסיפור הזה, ומהר מאוד היה אפשר להבין מי יודעת על מה היא מדברת ויש לה ניסיון בזה, ואצל מי הניסיון מסתכם בכך שהיא קראה את "50 גוונים"
  `,
    `הייתי בטוחה שהוא יהיה גרוע, והופתעתי מאוד. הרגשתי כמו טינאייג'רית שמרגישה את כל התחושות שעולות כשיש גבר שאת דלוקה עליו, ואת מה שזה עושה לך בגוף. כבר שכחתי שהתחושות האלה קיימות. לא היה לי אכפת מהדיאלוגים הגרועים, כי הגיבורים הם שני אנשים נורא צעירים שהופכים את הכל לדרמה הרבה יותר גדולה ממה שהיא, ובמובן הזה הספר אפילו אמין. ככה צעירים באמת חווים ריגוש מיני חדש וראשוני
  `,
    `בגיל 20 הכרתי את בעלי ומאז אנחנו יחד. הכל היה מאוד בתולי, הוא הגיע מבית דתי, נושא הסקס היה די רדום - ופתאום יצאה הטרילוגיה והדיבור בינינו נפתח. הקראתי לו קטעים מהספר שגם אם עברו לנו בראש, לא העזנו לדבר עליהם. לבן אדם יש חדר אדום של כאב בבית - איך אפשר שלא לדבר על זה? היתה תקופה שכל בנות העולם פנטזו על הגבר עם עליית הגג שיצליף בהן. זה ממש שיחרר את הפקקים האסורים
  `,
    `נשאבתי אליו כמו שבחיים לא נשאבתי, הרגשתי שאני איתם בחדר האדום. רוב הדמויות שכתבו עד אז היו רכות ונעימות, ואז הגיע כריסטיאן גריי, חתיכת מניאק, ושבר את השוק. בעלי היה די ונילה ופתאום התחלתי להציע לו דברים, ועם הזמן גם הוא התחיל להביא רעיונות. עד היום אני ממשיכה לספר לו על קטעים מהספרים והוא זורם איתי. הספר הזה שינה לי את החיים 
  `,
    `"50 גוונים" כתוב בשפה פשוטה שפונה לקהל הרחב, זה שלא מתחבר למטאפורות ושלא רוצה לעצור אחרי כל משפט כדי לתהות למה התכוון המשורר. ובתוך זה, הסופרת הצליחה ליצור מתח מיני לאורך כל הספר. הספר הזה העלה לי את הליבידו ושיפר מאוד את היחסים ביני ובין בעלי. לא היו לנו בעיות, אבל הסקס תמיד היה ביוזמתו ולי לא היה כוח וחשק, ופתאום התחלתי ליזום. זה עורר משהו שהיה רדום אצלי שנים
  `,
    `אני לא אדם כל כך ונילה, אם לצטט את מר גריי, והספר הזה אישר לי שאני נורמלית. בעקבות הקריאה נהפכתי לאדם הרבה יותר פתוח, אני הרבה יותר מדברת וצוחקת. גם מבחינה מינית זה פתח לי תיבת פנדורה. בעלי ואני 22 שנים יחד, הוא החבר הראשון שלי, הנשיקה הראשונה שלי, ופתאום אני משתפת אותו ברצונות ובפנטזיות שלי, בדברים שכתובים בספרים. אחרי הכל, אם הם בני ביצוע - אז למה לא?
  `,
    `תמיד אהבתי רומנים רומנטיים מהסוג של נורה רוברטס, אבל אף פעם לא היה שם אקשן. הגיבורים הגיעו לחדר השינה וסגרו לי את הדלת בפרצוף. ב"50 גוונים" סוף סוף מישהי הרשתה לעצמה לפתוח את הדלת ולהכניס אותנו לחדר השינה, ואנשים נטרפו מזה. ברגע שראיתי שהז'אנר משתולל זה נתן לי את הדחיפה לכתוב בעצמי, איך וכמה שבא לי. פתאום הבנתי שאפשר לכתוב ספרים שיראו לקוראות מה קורה מאחורי הדלת, באופן הכי חופשי
  `,
    `עד "50 גוונים" לא הייתי בקטע של ספרים, ופתאום קראתי ולא יכולתי להוציא אותו מהראש. היו לי רעידות בכל הגוף, חשבתי עליו בלי סוף. האובססיה של כריסטיאן לאנסטסיה מיגנטה אותי וגרמה לי לרצות להיות היא, להיות חלק מהעולם הזה ומהעושר שהוא הציג בפניה. היחסים ביניהם, והסקס האלים והשונה שהיה שם, אלה דברים שלא הכרתי לפני, שגרמו לי להיות פתוחה יותר בדיבור על סקס עם חברות, עם בעלי וביני לבין עצמי
  `,
    `יש לי לקויות למידה, בעיה בקריאה והפרעת קשב, ודווקא הכתיבה היחסית קלה ולא מורכבת של הספר, והעובדה שיש בו המון רגש שמעלה את האדרנלין, היתה מעולה מול הפרעת הקשב שלי. קראתי אותו בשקיקה בכלום זמן, והוא היה כמו מתאבן קליל ומגניב שעשה ספתח לז'אנר שלם שלא ידעתי שקיים
  `,
    `"50 גוונים" גרם לי לגלות את המיניות שלי, ובעקבותיו העזתי לדבר על זה עם בעלי באופן פתוח. בהתחלה קראתי במיטה והסתכלתי כל הזמן לראות שהוא ישן. לאט לאט התחלתי לספר לו על הסצינות: "הוא עושה לה ככה, והיא עושה לו ככה". ואז, ביום ההולדת שלי, בפעם הראשונה בחיים קניתי פיג'מה סקסית. חיכיתי לו איתה במיטה והוא נכנס והיה בהלם, הוא לא הבין מה נחת עליו. אמרתי, "זה מהספרים שאני קוראת"
  `,
    `"50 גוונים" יצא לפני עידן מי טו, שעם כל ההישגים העצומים שלו גם ניסה, במובנים רבים, להפוך את הספרות למשהו נקי וטהור. אבל ספרות היא לא טהורה ונקייה, כמו שהחיים לא. ולא משנה כמה מניפולציות נעשה על החיים, הם תמיד יישארו קצת מלוכלכים ופרומים בקצוות. כשהוא יצא, ישבתי לקרוא אותו בבית הקפה, אבל היום אני כבר לא אעשה זאת. אני לא רוצה שהעיניים התרבותיות שמנסות למשמע אותנו - יסתכלו גם עלי
  `,
    `אחת לכמה שנים מתפוצצת בעולם הספרות תופעה שהופכת לבוננזה של הרגע. "הארי פוטר" עשה את זה לבני הנוער, כששינה הרגלי קריאה ועורר פלח שוק שנחשב כמעט אבוד. כך קרה גם עם "50 גוונים" שהצליח להביא קהל חדש ומגוון. כדי להבין את ממדי התופעה מספיק להסתכל על דוכני הספרות האירוטית בשבוע הספר, אלה שכולם תפסו עליהם תחת, שפתאום הפכו לשוקקים ביותר, עם תורי ענק של נשים עם סלים רב־פעמיים שמשתרכים מולם.
  `,
    `נשים עדיין משלמות מחיר על המיניות שלהן, לא חשוב מה הן יעשו. עדיין קיימת עין שמפקחת עלינו, וקולות מבחוץ שמפריעים לנו להקשיב לקולות מבפנים. ואותם קולות - מפריעים לנו לגמור. מצד שני, נשים בדור הצעיר כבר מסתכלות על עצמן אחרת ואומרות "אעשה מה שבא לי עם מי בא לי". העשור הקודם, שהתחיל ב"50 גוונים" והמשיך עם מהפכת מי טו, מתאפיין בתנועת מטוטלת שמגדירה מחדש את מערך הכוחות בין המינים
  `,
    `קראתי את "50 גוונים" בצבא, וממנו הגעתי לקבוצות הרומנטיות בפייסבוק. אחרי שהשתחררתי היו המון מפגשים של הקהילה הרומנטית והלכתי. לא הכרתי שם אף אחת אבל הן מיד חיבקו ודיברו איתי כאילו הן מכירות אותי שנים, ופתאום הרגשתי בבית. החברות בקהילה הזו מיוחדת, אין בחוץ דברים כאלה. מי עוד תבין מה קראת ומה עובר עלייך. זה כבר לא חברות שמדברות רק על ספרים, זו משפחה, שאנחנו מדברות בה על הכל
  `,
    `"50 גוונים" נתן הצצה לדברים שאנשים לא ידעו שיש להם שם או שקיימים מחוץ לפורנו, אבל הוא גם הציג תמונה מעוותת לגבי מה זה בדס"ם. יש אנשים שעבורם בדס"ם זו פשוט נטייה מינית, וכאן נוצרה סטיגמה שבה כל מי שהוא בדס"מי עבר טראומה או שהוא אדם שבור, שרק צריך למצוא את האדם המתאים כדי לחזור להיות נורמטיבי. מצד שני, זה גרם לאנשים לרצות ללמוד, לשמוע הרצאות, ולהרחיב את הידע בנושא
  `,
    `הספרים הללו שמרניים ומסוכנים, ומנציחים את הסיפור של "תהי ילדה טובה, תישארי בתולה וחכי בשקט לגבר שיגיע". הם מנציחים התנהגויות פוגעניות, קנאיות ואובססיביות במסווה של רומנטיקה, והסיבה היחידה שזה לא מרים לנו את כל הדגלים האדומים היא כי הגיבור חתיך ועשיר. אף אישה בהיסטוריה מעולם לא גמרה מזה שרפרפו לה עם נוצה על הפות, וכל ההתייחסות לבדס"ם היא מחרידה ומסוכנת. כל מה שקשור לבטיחות והסכמה נעדר מהסיפור לחלוטין
  `,
    `השיחה הראשונה שלי עם דנה, שמנהלת איתי את קבוצת "כל הרומנטיקה הזאת", היתה על "50 גוונים". החלטנו שאנחנו רוצות שיביאו לכאן עוד ספרים כאלו והבנו שכדי שזה יקרה אנחנו חייבות להתחיל ללחוץ על ההוצאות. אז הרמנו טלפונים ודיברנו איתן ובמקביל פעלנו להגדיל את הקבוצה, כדי להראות שיש פה ביקוש וקהל. היום, שש שנים אחרי, כבר יש בקבוצה מעל ל-43 אלף חברות שמהוות כוח קנייה מטורף עם השפעה אדירה על הענף
  `,
    `יום אחד בעלי נכנס הביתה וסיפר שקולגה נכנס לאוטו שלו שפוך מעייפות. הוא שאל מה קרה, והקולגה ענה שאשתו קראה את הספר ולא נותנת לו לישון. "50 גוונים" פרץ את גבולות המיינסטרים כי בבסיס, היה שם סיפור אהבה עם גוון כאילו חתרני. התופעה שנהייתה ממנו, העובדה שכולן דיברו על אותו הדבר ופתאום עלו שאלות של האם את בקטע של סאדו, הפכה אותו למדורת שבט מינית נשית ותרמה מאוד לפתיחות בשיח
  `,
    `מה שזכור לי מהספר היא המילה "שיואו" שהופיעה בכל פסקה שנייה. אחרי שלושה עמודים של 'שיואו' שמתי אותו בצד ואמרתי חלאס. לא הגעתי לסקס כי נתקעתי ב"שיואו", זה היה ספרון למעודדת המתחילה. בסרטים צפיתי והתייחסתי אליהם כאל קומדיה רומנטית נחמדה, אבל יש דברים הרבה יותר מדליקים מזה. כל ההתלהבות סביב העניין מעידה בעיניי דווקא על שמרנות ועל הליכה אחורה. פעם היינו הרבה יותר ליברלים והמיניות היתה הרבה יותר מובהקת
  `,
    `"50 גוונים" ריתק אותי, והתחלתי לחפש בפייסבוק עוד בנות שקראו. הצטרפתי כמנהלת לקבוצת "מכורות לרומנטיקה אבל לא פראייריות". בהתחלה נלחמנו על מחירי הספרים, וכך תרמנו להורדת מחירי ההשקה. משם עברנו לדבר על הספרים עצמם, שזה משהו שבוער בי. את קוראת ספר, עולות בך המון תחושות ואין לך תמיד עם מי לשתף. כאן, יש קבוצה של אלפי בנות שהן באותו הקטע, שאפשר לדבר איתן ולפרוק. זה ענק מבחינתי
  `,
    `הטרנד של "50 גוונים" היה כל כך דומיננטי שאי אפשר היה להתעלם ממנו. זה היה כמו גל ששטף אותנו, והיה מגניב שפתאום אפשר לדבר על סקס ופנטזיות. גם היה משהו מאוד נכון בכך שגריי משקיע בפנטזיה עד כדי לבנות חדר משחקים בבית, ומקדיש זמן לחוויה המינית. מיניות זקוקה לזמן ומרחב, ואפשר לקחת מזה הרבה דברים: לתת למיניות מקום, ולצאת מעצמנו, או מהמרחב שבו אנחנו נמצאים, אל אותו מרחב פנטזיה
  `,
    `לספר היתה השפעה מדהימה בפתיחה ובלגיטימיות של השוק הרומנטי. פתאום נשים התחילו לדבר על ההעדפות הרומנטיות שלהן ועצם הדיבור נהפך ללגיטימי. אלה כבר לא הספרים המאובקים מהמדף בספרייה. היום לגיטימי לקרוא רומנטיקה ולהגיד שזה מה שאת אוהבת. "50 גוונים" גם נתן לגיטימציה לכתוב על מה שאנחנו רוצות בלי קשר לנטייה המינית שלנו, וחלק מהלגיטימציה לכתוב ספרות קינקית מגיעה מהתפוצה הרחבה שלו
  `,
    `פתאום הגיעו נשים שמעולם לא ביקרו בחנויות לצעצועי מין, וביקשו את מה שהופיע בספר. יש פרק שבו הגיבורים משתמשים בכדורי בנואה בזמן הסקס, והמון נשים הגיעו לחפש אותם. גם כל תחום הקשירות נהפך למיינסטרים כמעט בן לילה. אם בעבר פעם בשבוע מישהו הגיע לקנות אזיקים או שוט קטן שהיו מונחים באיזו פינה בחנות, כשיצא הספר, כל לקוחה שנייה חיפשה ערכת קשירה למתחילים
  `,
    `בדס"ם מוצג בספר כפתולוגיה דרך זה שהוא מחובר אצל גריי לטראומות ילדות, ומכיוון שזהו תנאי בלעדי עבורו לקיום יחסי מין. בנוסף, הגיבורה לא שותפה לעניין שלו בפרקטיקה. היא אוהבת את גריי, רוצה ממנו קשר ואינטימיות, ומוכנה לשלם את המחיר ולהיפגע כדי לתת לו את מה שהוא רוצה. היא לא מחברת את הכאב עם ההנאה, ומאוד סמלי בעיניי שהחוזה ביניהם לא נחתם, כי היא באמת לא שם
  `,
    `היה פה פלח אוכלוסייה שלא העלה על דעתו שאפשר לקרוא על סקס, ופתאום "50 גוונים" נתן לגיטימציה ליהנות מהספרים הללו, ומשם גם לחפש ספרים שכתובים טוב יותר, ובנישות ספציפיות יותר. הקוראות התחילו להרגיש שזכותן למצוא את הפנטזיה המדויקת שהן רוצות, ואת הסיפור האירוטי שיאפשר להן לראות את עצמן בתוכו - בין אם הוא כולל ערפדים, אנשי זאב, דמויות א-בינאריות או זוגות בפרק ב'
  `,
    `לא רק שהספר פתח את הדלת לז'אנר הרומנטי, הוא גם פתח את כל החלונות והמרפסות. פעם, כשחיפשתי ספרים מהסוגה בחנויות הספרים, שלחו אותי לקומה התחתונה. היום הם ממלאים מדפים שלמים בכניסה לחנות. פתאום זו לא בושה לקרוא אותם ולא צריך להתחבא. אפשר לראות את זה בכמות הוצאות הספרים הרומנטיות, בכל קבוצות הפייסבוק ובבלגן שהולך במפגשים שלנו. פתאום באמצע החיים הכרתי בקבוצות שתי חברות נפש שכבר מזמן נהפכו למשפחה
  `,
    `גריי הוא הגיבור הראשון שהתייחס לווסת של הגיבורה ושאל אותה אם היא בהתחלה או בסוף. המחזור החודשי הוא חלק מהחיים, אבל זה מעולם לא דובר לפני, הייתי המומה מזה. הגעתי אליו כשקראתי על אימהות בחו"ל שקראו אותו בגני שעשועים ומרוב שהיו שקועות לא עניין אותן שהילדים נופלים מהמגלשות. מיד רצתי לקנות אותו במחיר שערורייתי של 98 שקלים, שהיה שווה כל שקל. הספר הזה החזיר לי את הרצון לקרוא ולהישאב לעולם אחר
  `,
    `קראתי את הספר כי הבנתי שהוא מעורר שיח ומעלה שאלות על פמיניזם, על האם הוא מקדם נשים או דווקא משמר סטריאוטיפים, אבל הוא בעיקר גרם לי להרגיש מבולבלת. אין כאן תחושה של איזו פריצת דרך פמיניסטית. בסוף, הוצגו שם יחסי כוחות מאוד לא שוויוניים, ומצד שני, הוא כן נירמל את הדיבור על בדס"ם, והרחיב את אפשרויות העונג הנשי ואת היכולת לדבר עליו, וזה כשלעצמו אקט פמיניסטי
  `,
    `הספר יצר מסלול עוקף פורנו. בעולם שבו עדיין שולט הפורנו הדכאני, המנצל את גוף האישה לצורכי ההנאה הגברית - "50 גוונים" הספרותי נכנס כאלטרנטיבה. ומצד שני, הוא עדיין משמר את ההיררכיות שקיימות בפורנו. גם כאן יש לנו גבר עשיר וחזק מול בתולה שנחשפת לעולם המיניות דרך הסביבה שהוא יצר עבורה. בסוף, ספרות היא פוליטית, וכשאנחנו מציגים מודל כזה של מיניות כמודל אהוב - המסר עובר, וזה משהו שצריך לחשוב עליו
  `,
    `הספר הגיע בתקופה שבה נשים התחילו לתפוס את הערך שלהן אחרת. הן הבינו שאין מה להתבייש בעצמן ובמיניות שלהן, לא במיטה ולא מחוץ לה. באותה תקופה נשים עדיין החביאו ספרים בתוך כריכות של ספרים אחרים. כמה קל לקחת ספר של א"ב יהושוע, לעטוף את הרומן הרומנטי ולעלות איתו לאוטובוס? ובתוך נקודת הזמן הזו, שהיתה תפנית במאזן הכוחות המגדרי, נכנס "50 גוונים" ויצר שיטפון מטורף של נשים שיצאו מהארון הרומנטי
  `,
    `בהתחלה לא הבנתי מה הסיפור של ספר על סקס, אבל מהרגע שקראתי אותו זה השתלט לי על החיים. נכנסתי לקבוצות פייסבוק של הז'אנר ונוצרו שם חברויות שהן הרבה מעבר לספרים, הן כבר כמו משפחה. כשהסתיימה לי חופשת הלידה החלטתי שאני רוצה להקים הוצאת ספרים עם חברה מאחת הקבוצות. אנחנו כבר יודעות מה אנחנו אוהבות ואת מה אנחנו רוצות להביא, ולמרות שזה היה מפחיד - פשוט הלכנו על זה
  `,
    `חברה העבירה לי את הספר, והתלהבתי ברמה שקראתי את הטרילוגיה פעמיים ונשאבתי לז'אנר. לפעמים בעלי מתעצבן שאני כל היום עם הספרים מחפשת לי איזה נסיך. כשאני קוראת אני תמיד מוצאת בגיבור משהו שמזכיר לי את בעלי או שהייתי רוצה שיהיה בו, אבל אני לא התחתנתי עם הדמות בספר ואני לא הולכת לפגוש אותה בגינה מתחת לבניין. מותר לפנטז על דמות מספר, ולדעתי זה הפתרון. אי אפשר לראות או לפגוש אותו, רק לפנטז
  `,
    `"50 גוונים" היה פורץ דרך. זה כבר לא הרומן הרומנטי עם הנסיך על הסוס הלבן והגיבורה עם היד על המצח. זה ספר שכל כולו תעוזה וחוצפה ושיש בו הכל: אהבה, שליטה, דמויות שבורות. הוא אחת מהמתנות הכי גדולות שנשים יכלו לקבל, וזה בכלל לא משנה אם הוא כתוב טוב או לא. הוא איפשר לנו להתנסות, להעז, לקחת את האינטימיות לשלב הבא. הוא פתח את הצ'אקרות להמון נשים
  `,
  ],
};

export default fiftyWomenData;
