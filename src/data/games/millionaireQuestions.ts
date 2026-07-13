// Kim Milyoner Olmak İster? (Millionaire Quiz) Oyunu Soru Havuzu
// Toplam 1000 adet dini ve genel kültür sorusu içerir.
// Her soru { id, question, options, correct, difficulty, category } formatındadır.

export interface MillionaireQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const MILLIONAIRE_QUESTIONS_DB: MillionaireQuestion[] = [
  {
    id: "mil_q_1",
    question: "\"Şüphesiz Allah çok tövbe edenleri, çok temizlenenleri sever\" ayeti aşağıdaki ibadetlerden hangisine dikkat çekmektedir?",
    options: ["Namaz", "Oruç", "Zekat", "Abdest"],
    correct: "Abdest",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_2",
    question: "Aşağıdakilerden hangisi İslam’ın öngördügü temizlik çeşitlerinden biri degildir?",
    options: ["Manevi Temizlik", "Maddi Temizlik", "Suri Temizlik", "Hükmi Temizlik"],
    correct: "Suri Temizlik",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_3",
    question: "Müslümanın ibadetlerinde ve günlük yasantısında necaset adı verilen gözle görülen pisliklerden, elbisesini ve çevresini temizlemesine ne ad verilir?",
    options: ["Manevi Temizlik", "Maddi Temizlik", "Hükmi Temizlik", "Dini Temizlik"],
    correct: "Maddi Temizlik",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_4",
    question: "Kişinin abdest veya gusül alarak yaptığı temizliğe ne ad verilir?",
    options: ["Manevi Temizlik", "Maddi Temizlik", "Hükmi Temizlik", "Necasetten Temizlik"],
    correct: "Hükmi Temizlik",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_5",
    question: "Kişinin abdest almak veya gusületmesini gerektiren kirlilikten temizlenmesine ne ad verilir?",
    options: ["Hadesten Taharet", "Necasetten Taharet", "Tahareti Kübra", "Tahareti Suğra"],
    correct: "Hadesten Taharet",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_6",
    question: "Aşağıdakilerden hangisi hadesten temizlenme yolu değildir?",
    options: ["Abdest almak", "Gusül yapmak", "Teyemmüm yapmak", "Elbiseleri temizlemek"],
    correct: "Elbiseleri temizlemek",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_7",
    question: "Kişinin kalbini ve benliğini, yalan, kibir, haset, gıybet ve benzeri bütün kötülük, günah ve çirkinliklerden arındırması hangi temizlik çeşidine girer?",
    options: ["Manevi temizlik", "Maddi Temizlik", "Hükmi Temizlik", "Çevre Temizliği"],
    correct: "Manevi temizlik",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_8",
    question: "\"Nefsini arındıran kurtuluşa ermiştir\" ayeti hangi temizliğe vurgu yapar?",
    options: ["Maddi Temizlik", "Manevi Temizlik", "Hükmi Temizlik", "Çevre Temizliği"],
    correct: "Manevi Temizlik",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_9",
    question: "Abdestsizlik veya cünüplük sebebiyle dinimizce insanda meydana geldiği kabul edilen hükmi kirliliğe ne ad verilir?",
    options: ["Taharet", "Necaset", "Hades", "Haset"],
    correct: "Hades",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_10",
    question: "Gözle görülebilen pisliklere ne ad verilir?",
    options: ["Taharet", "Necaset", "Haset", "Hades"],
    correct: "Necaset",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_11",
    question: "Aşağıdakilerden hangisi necaset değildir?",
    options: ["Kan, insan idrari ve dışkısı", "Ağız dolusu olmayan kusmuk", "Domuz eti", "Yenmesi helal olmayan hayvanların idrar ve dışkısı"],
    correct: "Ağız dolusu olmayan kusmuk",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_12",
    question: "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
    options: ["Hades — Hükmi temizlik", "Necaset — Maddi temizlik", "Tövbe — Manevi temizlik", "Abdest — Manevi Temizlik"],
    correct: "Abdest — Manevi Temizlik",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_13",
    question: "Temizlik anlamına gelen kelime hangisidir?",
    options: ["Necaset", "Taharet", "Hades", "Kehanet"],
    correct: "Taharet",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_14",
    question: "Necaset denilen maddi pisliklerden ve hades denilen hükmi pisliklerden temizlenmeye ne ad verilir?",
    options: ["Kehanet", "Hades", "Taharet", "Necaset"],
    correct: "Taharet",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_15",
    question: "\"Temizlik imandandır\" hadisiyle hangi temizliğin önemine vurgu yapılmıştır?",
    options: ["Maddi temizlik", "Manevi Temizlik", "Hükmi temizlik", "Hepsi"],
    correct: "Hepsi",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_16",
    question: "Aşağıdakilerden hangisi abdestin farzlarıyla ilgili yanlış bir bilgidir?",
    options: ["Yüzü yıkamak", "Kolları dirseklere kadar yıkamak", "Başı meshetmek", "Ayakları topuklarla birlikte yıkamak"],
    correct: "Kolları dirseklere kadar yıkamak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_17",
    question: "Aşağıdakilerden hangisi abdestin farzlarıyla ilgili eksik bir bilgidir?",
    options: ["Ayaklan topuklara kadar yıkamak", "Başı meshetmek", "Kolları dirseklerle birlikte yıkamak", "Yüzü yıkamak"],
    correct: "Ayaklan topuklara kadar yıkamak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_18",
    question: "Aşağıdakilerden hangisi abdestin farzlarıyla ilgili yanlış bir bilgidir?",
    options: ["Yüzü yıkamak", "KolIarı dirseklerle birlikte yıkamak", "Başın tamamını meshetmek", "Ayakları topuklarla birlikte yıkamak"],
    correct: "Başın tamamını meshetmek",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_19",
    question: "Abdestle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: ["Namaz için abdest farzdır", "Camiye girmek için abdest vaciptir", "Tavaf için abdest vaciptir", "Yatmadan önce abdest almak sünnettir"],
    correct: "Camiye girmek için abdest vaciptir",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_20",
    question: "Abdestle ilgili aşağıdaki bilgilerden hangisi yanlıştır?",
    options: ["Niyeti unutursak yeniden abdest almamız ğerekir", "Abdeste Eüzü Besmele ile başlamak sünnettir", "Kollarımızı ve ayaklarımızı yıkarken sağ kol ve sağ ayaktan başlarız", "Ayaklarımızı yıkarken parmak aralarını da yıkarız"],
    correct: "Niyeti unutursak yeniden abdest almamız ğerekir",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_21",
    question: "Abdestle ilgili aşağıdakilerden hangisi yanlıştir?",
    options: ["Abdeste niyet edilir", "Eüzü Besmele çekilir", "Tüm uzuvlarımızı üç kez yıkarız", "Burnumuza sağ avucumuzla su verir, sol elimizle temizleriz"],
    correct: "Tüm uzuvlarımızı üç kez yıkarız",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_22",
    question: "Kıyamet günü insanların uzuvlarını pırıl pırıl parlatacak olan amel hangisidir?",
    options: ["Namaz kımak", "Oruç tutmak", "Zekat vermek", "Abdest Almak"],
    correct: "Abdest Almak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_23",
    question: "Aşağıdakilerden hangisi abdesti bozmaz?",
    options: ["Küçük veya büyük tuvalet yapmak", "Yellenmek", "Namazda yanımızdaki duyacak kadar gülmek", "Ağız dolusu olmayacak kadar kusmak"],
    correct: "Ağız dolusu olmayacak kadar kusmak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_24",
    question: "Aşağıdakilerden hangisi abdesti bozmaz?",
    options: ["Ağız dolusu kusmak", "Bayılmak", "Uyumak", "Namazda yanımızdaki kişinin duymayacağı kadar gülmek"],
    correct: "Namazda yanımızdaki kişinin duymayacağı kadar gülmek",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_25",
    question: "Hadesten temizlenmek için bütün bedenin temiz su ile yıkanmasına dini anlamda ne ad verilir?",
    options: ["Necasetten taharet", "Banyo yapmak", "Boy abdesti almak", "Duş almak"],
    correct: "Boy abdesti almak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_26",
    question: "Bir şeyi su ile yıkamak anlamına gelen kelime hangisidir?",
    options: ["Taharet", "Temizlik", "Necaset", "Gusül"],
    correct: "Gusül",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_27",
    question: "Aşağidakilerden hanğisi guslün farzlarından değildir?",
    options: ["Ağza su almak", "Burna su almak", "Niyet etmek", "Bütün vücudu yıkamak"],
    correct: "Niyet etmek",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_28",
    question: "Aşağıdaki guslün alınışıyla ilgili bilgilerden hangisi yanıştır?",
    options: ["Ellerimizi bileklere kadar üç defa yıkarız", "Hiçbir yer kuru kahnamasına dikkat ederiz", "Besmele ve niyeti unutursak yeniden gusül alırız", "Banyodan ayaklarımızı yıkayarak çıkarız."],
    correct: "Besmele ve niyeti unutursak yeniden gusül alırız",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_29",
    question: "Bir işe yönelmek, bir şeyi kastetmek anlamma gelen kelime hangisidir?",
    options: ["Gusül", "Teheccüd", "Temayül", "Teyemmüm"],
    correct: "Teyemmüm",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_30",
    question: "Abdest ve gusül yerine geçen temizlik hangisidir?",
    options: ["Teemmül", "Temayül", "Teyemmüm", "Tefehhüm"],
    correct: "Teyemmüm",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_31",
    question: "Hangi durumlarda teyemmüm almak gereksizdir?",
    options: ["Abdest alacak kadar su bulunmadığında", "Gusül yapacak kadar su bulunmadığında", "Suyun bulunup kullanılması mümkün olmadığında", "Abdest azalarından birinin yarıdan azının yara olması durumunda"],
    correct: "Abdest azalarından birinin yarıdan azının yara olması durumunda",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_32",
    question: "Hangisi teyemmümün farzlarmdan değildir?",
    options: ["Baş meshetmek", "Niyet etmek", "Yüzü meshetmek", "Kolları meshetmek"],
    correct: "Baş meshetmek",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_33",
    question: "Bir şeyi elle sivazlama anlamma gelen, abdest alırken islak eli başa, enseye; teyemmüm alırken de toprağa vurulan eli, kol ve yüze sürmeye ne ad verilir?",
    options: ["Medh", "Merih", "Melih", "Mesh"],
    correct: "Mesh",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_34",
    question: "Aşağıdakilerden hanğisi abdest için alınan teyemmümü bozmaz?",
    options: ["Su bulunduğunda", "Vücudumuz kanayıp kanı dağıldığında", "Namazda sadece kendimiz duyacak kadar güldüğümüzde", "Ağız dolusu kustuğumuzda"],
    correct: "Namazda sadece kendimiz duyacak kadar güldüğümüzde",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_35",
    question: "Aşağıdaki durumlardan hangisi gusül abdesti almayı gerektirir?",
    options: ["Uyumak", "Bayılmak", "Yellenmek", "Cünüplük"],
    correct: "Cünüplük",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_36",
    question: "Abdestle ilgili aşağidaki sıralamalardan hangisi doğrudur?",
    options: ["Yüz-Baş-Kol-Ayak", "Kol-Baş-Yüz-Ayak", "Yüz-Kol-Baş-Ayak", "Yüz-Kol-Ayak-Baş"],
    correct: "Yüz-Kol-Baş-Ayak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_37",
    question: "Namaz aşağidaki kimselerden hangisine farz değildir?",
    options: ["Müslümana", "Akıllı olanlara", "Erğenlik çağına gelmemiş çocuklara", "Hastalara"],
    correct: "Erğenlik çağına gelmemiş çocuklara",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_38",
    question: "Aağıdakilerden hangisi namazın şartlarından değildir?",
    options: ["Vakit", "Niyet", "Taharet", "Sücüd"],
    correct: "Sücüd",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_39",
    question: "Erkeklerin en az göbekle diz kapağı arasnı; kadınlarm el, yüz ve ayak hariç bütün vücutlarını namazda iken örtmesine ne ad verilir?",
    options: ["İstikbali Kıble", "Setri avret", "Kade-i ahire", "Kıyam"],
    correct: "Setri avret",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_40",
    question: "Namaza Allahu Ekber diyerek başlamak namazın hangi rüknüdür?",
    options: ["İftitah tekbiri", "Kade-i ahire", "Kıyam", "Kıraat"],
    correct: "İftitah tekbiri",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_41",
    question: "Aşağıdakilerden hangisi namazın rükünlerinden değildir?",
    options: ["Kıyam", "Kıraat", "Kade-i ahire", "Niyet"],
    correct: "Niyet",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_42",
    question: "Kıraat ne demektir?",
    options: ["Ayakta durmak", "Eğilmek", "Yere kapanmak", "Kuran okumak"],
    correct: "Kuran okumak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_43",
    question: "Cenaze namazini kılmanın hükmü nedir?",
    options: ["Farz", "Vacip", "Nafile", "Sünnet"],
    correct: "Farz",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_44",
    question: "Vitir namazını, kılmanın hükmü nedir?",
    options: ["Farz", "Vacip", "Nafile", "Sünnet"],
    correct: "Vacip",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_45",
    question: "Bayram namazını kılmanın hükmü nedir?",
    options: ["Vacip", "Farz", "Nafile", "Sünnet"],
    correct: "Vacip",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_46",
    question: "Namazın rekatlarıyla ilgili bilgilerden hangisi doğrudur?",
    options: ["17 ilk sünnet, 14 farz, 6 son sünnet, 3 vacip, toplam 40 rekat", "17 ilk sünnet, 14 farz, 3 son sünnet, 6 vacip, toplam 40 rekat", "14 ilk sünnet, 17 farz, 6 son sünnet, 3 vacip, toplam 40 rekat", "6 ilk sünnet, 17 farz, 14 son sünnet, 3 vacip, toplam 40 rekat"],
    correct: "14 ilk sünnet, 17 farz, 6 son sünnet, 3 vacip, toplam 40 rekat",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_47",
    question: "Namazın hükümleriyle ilgili hangisi yanlıştır?",
    options: ["Cuma namazı, beş vakit namaz, cenaze namazı— farz", "Vitir namazı, teravih namazı, teheccüd namazı — vacip", "Ramazan ve kurban bayramı namazları— vacip", "Beş vakit namazla ve Cuma günleri kılınan sünnet namazları — nafile"],
    correct: "Vitir namazı, teravih namazı, teheccüd namazı — vacip",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_48",
    question: "4 rekatlı hangi namazın ilk oturuşunda Salli - Barik ve 3. rekatında da Sübhaneke okunur?",
    options: ["Öğle ve ikindinin i1k sünnetleri", "Öğle ve yatsının ilk sünnetleri", "Cuma ve yatsının ilk sünnetleri", "İkindi ve yatsının ilk sünnetleri"],
    correct: "İkindi ve yatsının ilk sünnetleri",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_49",
    question: "Vacip olan, kunut tekbiriyle kunut duası okunan sabah namazı vaktine kadar kılınabilen namaz hangisidir?",
    options: ["Teheccüd namazı", "Yatsi namazı", "Vitir namazı", "Teravih namazı"],
    correct: "Vitir namazı",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_50",
    question: "Aşağıdaki hangi durumda namaz bozulmaz?",
    options: ["Namazın farzlarını bilerek terk etmek", "Konuşmak, selam alşp vermek", "Bir şey yiyip içmek", "Gözün kıbleden farklı bir yöne çevrilmesi"],
    correct: "Gözün kıbleden farklı bir yöne çevrilmesi",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_51",
    question: "Aşağıdaki hangi durumlarda namaz bozulmaz?",
    options: ["Bayılmak", "Gusül veya abdestin bozulması", "İmamın hizasından öne geçmek", "Bir yere dayanmadan uyumak"],
    correct: "Bir yere dayanmadan uyumak",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_52",
    question: "Aşağıdaki hangi durumda sadece namaz bozulur, abdest bozulmaz?",
    options: ["Teyemmümlünün suyu bulması", "Ağız dolusu kusmak", "Yanımızdaki duymayacak kadar gülmek", "Bir yere dayanarak uyumak"],
    correct: "Yanımızdaki duymayacak kadar gülmek",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_53",
    question: "Cuma ve bayram namazlarında minberde okunan dua ve öğüte ne ad verilir?",
    options: ["Hutbe", "Sohbet", "Vaaz", "Salavat"],
    correct: "Hutbe",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_54",
    question: "Camilerde hatibin çıkıp hutbe okuduğu merdivenli yüksek yere ne ad verilir?",
    options: ["Mihrap", "Minber", "Kürsü", "Rahle"],
    correct: "Minber",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_55",
    question: "Hz. Peygamber, namazi dinin neyi olarak kabul etmiştir?",
    options: ["Namaz dinin direğidir", "Namaz dinin şartıdır", "Namaz dinin kalbidir", "Namaz dinin beynidir."],
    correct: "Namaz dinin direğidir",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_56",
    question: "\"Namaz, insanı hayasızlıktan ve kötülükten alıkoyar.\" Sözü nedir?",
    options: ["Ayettir.", "Hadistir.", "Kutsi hadisdir.", "Sünnettir."],
    correct: "Ayettir.",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_57",
    question: "Oruç vakti ne zaman başlar, ne zaman biter?",
    options: ["Güneşin doğuşundan batışına kadar.", "Sabahtan akşam vaktine kadar", "İmsak vaktinden iftar vaktine kadar.", "İftitah vaktinde başlar akşam vaktinde biter"],
    correct: "İmsak vaktinden iftar vaktine kadar.",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_58",
    question: "Hac ibadetinin zamanı için aşağıda yazılı ifadelerden hanğisi doğrudur?",
    options: ["Her zaman", "Belirli zamanda", "Ramazan da", "Kabeyi gördüğünde"],
    correct: "Belirli zamanda",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_59",
    question: "Hac ibadeti esnasında aşağıdaki ibadetlerden hangisi yapılmaz?",
    options: ["Tavaf", "Namaz", "Kurban", "Teravih"],
    correct: "Teravih",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_60",
    question: "Hangisi zekatın faydalarından değildir?",
    options: ["Dilenmeye alıştırır", "Sosyal dayanışmayı sağlar", "Barışı sağlar", "Yokluğu giderir."],
    correct: "Dilenmeye alıştırır",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_61",
    question: "Dinen zengin sayılsalar da aşağıdakilerden hangisi zekat vermekle mükellef değildir?",
    options: ["Akıllı olmayanlar", "MüsIümanlar", "Akıllı olanlar", "Buluğ çağına erenler"],
    correct: "Akıllı olmayanlar",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_62",
    question: "İbadet niyetiyle ve kendine özel kurallarına uymak sureti ile inzivaya çekilmeye ne denir?",
    options: ["İtikaf", "İtikad", "İhlas", "İhsan"],
    correct: "İtikaf",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_63",
    question: "Peygamber efendimizin \" Gözümün nuru \"diye tabir ettiği ibadet hangisidir?",
    options: ["Oruç", "Namaz", "Hac", "Zekat"],
    correct: "Namaz",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_64",
    question: "Peygamberimizin ashabına imamlık yaptığı ve şuan kabrinin bulunduğu yerin adı nedir?",
    options: ["Kabe-i Muazzama", "Mescid-i Nebevi", "Mescid-i Aksa", "Arafat"],
    correct: "Mescid-i Nebevi",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_65",
    question: "Aşağıdakilerden hangisi sadece Ramazan ayında kılınan namazdır.",
    options: ["Teravih Namazı", "Yatsi Namazı", "Bayram Namazı", "Cuma Namazı"],
    correct: "Teravih Namazı",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_66",
    question: "Aşağidakilerden hangisi hicri takvime göre yılda iki kez kılınan namazdır?",
    options: ["Cuma Namazı", "Teravih Namazı", "Bayram Namazı", "Cenaze Namazı"],
    correct: "Bayram Namazı",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_67",
    question: "İslamın beş şartından olup Ramazan ayında yapılması zorunlu ibadet aşağıdakilerden hangisidir?",
    options: ["Oruç", "Teravih", "Fitre", "Zekat"],
    correct: "Oruç",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_68",
    question: "İslamın temel ilkelerinden olan oruç, ne ile yapılan ibadetlerdendir?",
    options: ["Malla", "Bedenle", "Hem mal hem bedenle", "Hirbiri"],
    correct: "Bedenle",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_69",
    question: "Aşağıdakilerden hangisi hem mal hem bedenle yapilan ibadetlerdendir?",
    options: ["Oruç", "Teravih", "Hac", "Zekat"],
    correct: "Hac",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_70",
    question: "Akıllı ve erginlik çağına gelmiş her müslümanın Ramazan aymda oruç tutmasını hükmü nedir?",
    options: ["Müstehab", "Sünnet", "Farz", "Vacib"],
    correct: "Farz",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_71",
    question: "\"Ey iman edenler! Allah'a karşı gelmekten sakınmanız için oruç sizden öncekilere farz kılındığı gibi size de farz kılındı \" ifadesi nedir?",
    options: ["Ayeti Kerime", "Hadis-i Şerif", "Kelam-i Kibar", "Atasözü 74- Oruca başlama zamanı aşağıdakilerden hanğisidir? a) İftar b) İmsak c) Sahur d)Hiçbiri"],
    correct: "Ayeti Kerime",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_72",
    question: "Güneşin batmasıyla birlikte orucun sona erdiği ve akşam namazını vaktinin girdiği zamanın özel adı aşağıdakilerden hangisidir?",
    options: ["İmsak", "Sahur", "İftar", "Hiçbiri"],
    correct: "İftar",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_73",
    question: "Yolculuk ve hastalık durumlardan dolayı oruç tutulamadığında, kişinin Ramazan ayı dışında istediği bir zamanda tutmadığı ğün sayısınca oruç tutmasına denir?",
    options: ["Kaza", "Kader", "Nafile", "Namaz"],
    correct: "Kaza",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_74",
    question: "Hastalık, yaşlılık gibi çeşitli sebeplerden ötürü zamanında oruç tutamayan, ama daha sonra da kaza edilemeyen ve her bir gün oruç için kişinin yediği bir günlük yemek miktarı para olarak bir fakire vermeyi ya da bir fakiri bir gün doyurmasına ne denir?",
    options: ["İftar", "Fidye", "Zekat", "Fitre"],
    correct: "Fidye",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_75",
    question: "Ertesi günkü oruca bir hazırlık ve niyet olarak imsaktan önceki vaktin ve bu vakitte yenilen yemeğin adi aşağıdakilerden hangisidir?",
    options: ["İftar", "Sahur", "İmsak", "Akşam yemeği"],
    correct: "Sahur",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_76",
    question: "Aşağıdakilerden hangisi orucu bozmaz?",
    options: ["Bilerek bir şey yemek ve içmek", "Güneş battı sanarak iftar etmek", "Ağza giren yağmur, kar ve doluyu bilerek yutmak", "Unutarak bir şey yiyip içmek"],
    correct: "Unutarak bir şey yiyip içmek",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_77",
    question: "Namaza başlarken ellerimizi kaldirıp kulaklarımıza götürdüğümüzde hangi kelimeyi söyleriz?",
    options: ["Sübhanallah", "Elhamdülillah", "Allahu Ekber", "Bismillah"],
    correct: "Allahu Ekber",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_78",
    question: "Namazlarda besmeleden sonra her rekatta okunan sure hangisidir?",
    options: ["İhlas", "Kevser", "Fatiha", "Nas"],
    correct: "Fatiha",
    difficulty: "easy",
    category: "İbadet"
  },
  {
    id: "mil_q_79",
    question: "Cuma ve bayram namazlarında imamın çıkıp hutbe okuduğu yerin adi nedir?",
    options: ["Minber", "Mihrap", "Kürsü", "Şadırvan"],
    correct: "Minber",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_80",
    question: "Yatsı Namazından sonra üç rekat olarak kılınan namazm adı nedir?",
    options: ["Teravih Namazı", "Gece Namazı", "Vitir Namazı", "Kuşluk Namazı"],
    correct: "Vitir Namazı",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_81",
    question: "Aşağıdakilerden hangisi Ramazan ayına mahsus bir ibadet değildir?",
    options: ["Namaz", "Oruç", "Teravih", "Sadaka-i Fıtır"],
    correct: "Namaz",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_82",
    question: "Aşağıdakilerden hangisi islam'ın 5 temel şartlarından biri değildir?",
    options: ["Zekat vermek", "Umreye gitmek", "Kelime-i şahadet getirmek", "Hacca gitmek"],
    correct: "Umreye gitmek",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_83",
    question: "Camilerde ezan okunan ince ve yüksek yapıya ne denir?",
    options: ["Şerefe", "Mahya", "Minare", "Avlu"],
    correct: "Minare",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_84",
    question: "Minarede müezzinin ezan okuduğu çıkıntılı özel bölümün adı nedir?",
    options: ["Şerefe", "Alem", "Minare", "Mahya"],
    correct: "Şerefe",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_85",
    question: "Minarelerin ucuna takılan hilale ne denir?",
    options: ["Alem", "Şerefe", "Minare", "Mahya"],
    correct: "Alem",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_86",
    question: "Ramazan aylarında ve kutsal gecelerde iki minare arasına asılan işiklı yazıya ne denir?",
    options: ["Mahya", "Minare", "Şerefe", "Alem"],
    correct: "Mahya",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_87",
    question: "Namazın sonunda Ettehiyyatü duasını okuyacak kadar oturup beklemeye ne denir?",
    options: ["Ka'de-i ahire", "Ka'de-i ula", "Ka'de-i vüsta", "İlk oturuş"],
    correct: "Ka'de-i ahire",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_88",
    question: "Aşağıdakilerden hangisi nafile namazlardan değildir?",
    options: ["Teheccüd", "Cenaze namazı", "Cuma namazının son sünneti", "Tereavih"],
    correct: "Cenaze namazı",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_89",
    question: "Aşağıdakı namazlardan hangisi 20 rekat olarak kılınır?",
    options: ["Cuma Namazı", "Bayram Namazı", "Teravih Namazı", "Cenaze namazı"],
    correct: "Teravih Namazı",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_90",
    question: "Ramazan ayında kılınan Teravih namazının hükmü nedir?",
    options: ["Farz", "Sünnet", "Vacip", "Mübah"],
    correct: "Sünnet",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_91",
    question: "Haram olmamakla beraber yapılması dinimiz tarafından hoş karşılanmayan davranışa ne denir?",
    options: ["Mekruh", "Müfsid", "Mübah", "Müstehab"],
    correct: "Mekruh",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_92",
    question: "Cuma Namazı kaç rekattır?",
    options: ["20", "8", "10", "16"],
    correct: "10",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_93",
    question: "Aşağıdaki namazlardan hangisi sadece ayakta kılınarak tamamlanan namazdır?",
    options: ["Sabah Namazı", "Cuma Namazı", "Cenaze Namazı", "Bayram Namazı"],
    correct: "Cenaze Namazı",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_94",
    question: "Müslümanların tek tek değil topluca sorumlu oldukları, ama içlerinden bir veya birkaç kişin yapmasıyla diğerleri üzerinden sorumluluğun kalktığı yükümlülüğün adı nedir?",
    options: ["Farz-ı Ayın", "Farz-ı Kifaye", "Vacip", "Farz"],
    correct: "Farz-ı Kifaye",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_95",
    question: "Ergenlik çaına gelen ve akıl sağlığı yerinde olan, dinin belirlediği hükümlerle yükümlü ve sorum olan kişiye ne denir?",
    options: ["Mükellef", "Mü'min", "Müslüman", "Mükemmel"],
    correct: "Mükellef",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_96",
    question: "Aşağıdakilerden hangisi müslüman olmanın ilk şartıdır?",
    options: ["Namaz", "Zekat", "Kelime-i Şahadet", "Oruç"],
    correct: "Kelime-i Şahadet",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_97",
    question: "\"İyi ya da barışık davranış\" anlamına gelen kavramın karşınğı aşağıdakilerden hangisidir?",
    options: ["Ahlak", "Farz", "Sünnet", "Ameli salih"],
    correct: "Ameli salih",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_98",
    question: "Aşağıdakilerden hangisi müstehap değildir?",
    options: ["Nafile namaz kılmak", "Nafile oruç tutmak", "Akşam namazını vakti girer girmez kılmak", "Cumaı namazının ilk sünneti"],
    correct: "Cumaı namazının ilk sünneti",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_99",
    question: "Allah'a yaklaşma ve O'nun rızasını kazanma amacıyla yapılan şeye ne denir?",
    options: ["İbadet", "Müstehap", "Sünnet", "Hadis"],
    correct: "İbadet",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_100",
    question: "Aşağıdaki şıklardan hangisinde birbirine zıt kavramlar bulunmaktadır?",
    options: ["Farz - Vacib", "Haram-Helal", "Sünnet -Müstehab", "Mekruh-Haram"],
    correct: "Haram-Helal",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_101",
    question: "İbadet çeşitleri ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: ["Namaz bedenle yapılan bir ibadettir", "Zekat malla yapdan bir ibadettir", "Hac bedenle ve malla yapılan bir ibadettir", "Oruç malla yapılan bir ibadettir"],
    correct: "Oruç malla yapılan bir ibadettir",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_102",
    question: "Hangisi ibadet kelimesinin anlamı değildir?",
    options: ["Hoşgörü", "İtaat etmek", "Boyun eğmek", "Saygı göstermek"],
    correct: "Hoşgörü",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_103",
    question: "Namaz kimlere farz değildir?",
    options: ["Hastalara", "Ergenlik çağına gelmeyenlere", "Akıllılara", "Seferi Olanlara"],
    correct: "Ergenlik çağına gelmeyenlere",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_104",
    question: "Oruç kimlere farz değildir?",
    options: ["Ergenlik çağına gelmiş olanlara", "Akıl sağlığı yerinde olmayanlara", "Hasta olanlara", "Yolcu olanlara"],
    correct: "Akıl sağlığı yerinde olmayanlara",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_105",
    question: "Hac kimlere farzdır?",
    options: ["Günah işleyenlere", "Parası olanlara", "Dinin zengin saydiğı sağlıklı kişilere", "Ergenliğe girmeyenlere"],
    correct: "Dinin zengin saydiğı sağlıklı kişilere",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_106",
    question: "Hangisi farz değildir?",
    options: ["Zekat vermek", "Oruç tutmak", "Hacca gitmek", "Sadaka vermek"],
    correct: "Sadaka vermek",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_107",
    question: "Aşağıdakilerden hangisi Mükellef kelimesinin anlamı değildir?",
    options: ["Sorumlu olmayan", "Yükümlü olan", "Ergenlik çağına gelen", "Sorumlu olan"],
    correct: "Sorumlu olmayan",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_108",
    question: "Hanğisi \"Efal-i Mükellefin\"den değildir?",
    options: ["Müflis", "Müfsit", "Müstehap", "Mekruh"],
    correct: "Müflis",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_109",
    question: "Aşağıdakilerden hangisi yanlıştır?",
    options: ["Yapılmaması dinimiz tarafından kesinlikle yasaklanan şeylere HARAM denir", "Yapılması dinimiz tarafindan kesin olarak emredilen şeylere FARZ denir.", "Hz. Peygamberin farz ve vacip dışındaki söz ve davranışlarına SÜNNET denir.", "Haram olmamakla beraber yapılması dinimiz tarafından hoş karşılanmayana MÜFSİD denir."],
    correct: "Haram olmamakla beraber yapılması dinimiz tarafından hoş karşılanmayana MÜFSİD denir.",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_110",
    question: "Kişinin sırf Allah rızası için muhtaç kimselere malından zekat dışında yapılan yardıma ne ad verilir?",
    options: ["Öğüt", "Ödünç", "Sadaka", "Kurban"],
    correct: "Sadaka",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_111",
    question: "Aşağıdakilerden hangisi haccın farzlarından değildir?",
    options: ["İhram", "Kabeyi tavaf", "Şeytan taşlama", "Arafatta vakfe"],
    correct: "Şeytan taşlama",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_112",
    question: "Bir kimseye haccın farz olmasi için aşağıdakilerden hangisi gerekmez?",
    options: ["Maddi gücün olması", "Yaşlı olması", "Hür olması", "Müslüman olması"],
    correct: "Yaşlı olması",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_113",
    question: "Hacerül Esvedin bulunduğu köşeden başlayarak Kabe'nin etrafında sadece bir tur dolaşmanın adı nedir?",
    options: ["Say", "Şavt", "Vakfe", "Tavaf"],
    correct: "Şavt",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_114",
    question: "Hacda şeytan taşlanılan ve kurban kesilen yerin adı aşağıdakilerden hangisidir?",
    options: ["Mina", "Müzdelife", "Safa-Merve", "Mescidi Haram"],
    correct: "Mina",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_115",
    question: "Mescid-i Nebevi nerededir?",
    options: ["Mekke", "Medine", "Şam", "Bağdat"],
    correct: "Medine",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_116",
    question: "Aşağıdakilerden hangisi umre ile hac arasındaki farklardan değildir?",
    options: ["Hac farz, umre sünnettir", "Hacda Safa ile Merve arasında say yapmak gerekmez", "Hac yılın belli zamanında yapılır umre hac günleri dışında yapılır.", "Umrede vakfe, şeytan taşlama ve kurban kesme yoktur."],
    correct: "Hacda Safa ile Merve arasında say yapmak gerekmez",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_117",
    question: "Hangi ikisi umrenin farzlarındır?",
    options: ["Vakfe -Şeytan taşlama", "Say – Tavaf", "Vakfe - Kurban kesme", "İhram - Tavaf"],
    correct: "İhram - Tavaf",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_118",
    question: "Safa ile Merve arasinda gidip-gelmek suretiyle yapılan yürüyüşe ne ad verilir?",
    options: ["Say", "Şavt", "Tavaf", "Vakfe"],
    correct: "Say",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_119",
    question: "Hacda Kabenin etrafını yedi kez dolanmaya ne ad verilir?",
    options: ["Say", "Savt", "Tavaf", "Vakfe"],
    correct: "Tavaf",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_120",
    question: "Hacda Arafat'ta hangi gün vakfe yapılır?",
    options: ["Kurban bayramından bir gün önce", "Kurban bayramının birinci günü", "Kurban bayramı içinde herhangi bir gün", "Kurban bayramından sonra"],
    correct: "Kurban bayramından bir gün önce",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_121",
    question: "Kebenin yakınlarmda kaynağı olan mübarek suyun adı nedir?",
    options: ["Makam-ı İbrahim", "Zemzem", "Merve", "Mültezem"],
    correct: "Zemzem",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_122",
    question: "Mekkeye varınca yapılması gereken ilk ibadet hangisidir?",
    options: ["Namaz kılmak", "Say yapmak", "Zemzem suyu içmek", "Tavaf yapmak"],
    correct: "Tavaf yapmak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_123",
    question: "İhramdan nasıl çıkılır?",
    options: ["İhram elbisesi çıkarılarak", "Tras olunarak", "Tavaf yapılarak", "Say yapılınca"],
    correct: "Tras olunarak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_124",
    question: "Mekke'den aynlırken yapılan son tavafın adı nedir?",
    options: ["Ziyaret tavafı", "Umre tavafı", "Veda tavafı", "Nafile tavavaf"],
    correct: "Veda tavafı",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_125",
    question: "İhrama niyetten sonra lebbeyk şeklinde okunan duaya ne denir?",
    options: ["Telbiye", "Tekbir", "İhram duası", "Tavaf duası"],
    correct: "Telbiye",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_126",
    question: "Peygamberimiz (sav)'in kabri şerifleri nerededir?",
    options: ["Mekke'de- Cennetü'l-muallada", "Medine'de - Mescidi Nebevi'nin içinde", "Mekke'de- Mescid-i Haramin içinde", "Medine'de — Cennetü'l- bakide"],
    correct: "Medine'de - Mescidi Nebevi'nin içinde",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_127",
    question: "Arafat ile Mina arasında bulunan ve hacıların Arefe günü güneş batımından sonra bayram günü güneşin doğuşuna kadar vakfe yaptıkları yerin adı nedir?",
    options: ["Cebel-i Rahme", "Müzdelife", "Cennetü'l Baki", "Harem bölgesi"],
    correct: "Müzdelife",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_128",
    question: "Hac ibadeti dışında yılın herhangi bir zamanında ihrama girip tavaf ve sa'y yaptıktan sonra tıraş olup ihramdan çıkarak yapılan ibadete ne denir?",
    options: ["Hac", "Umre", "Hacc-ı Kıran", "Hacc-ı Temettu"],
    correct: "Umre",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_129",
    question: "Aşağıdakilerden hangileri umre ibadetinin vaciplerindendir?",
    options: ["Vakfe", "Tavaf", "İhram", "Sa'y"],
    correct: "Sa'y",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_130",
    question: "Aşağıdakilerden hangisi Mina'da yapılan işlerden değildir?",
    options: ["Vakfe", "Kurban kesme", "Şeytan taşlama", "Traş olma"],
    correct: "Vakfe",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_131",
    question: "Aşağıdakilerden hangisi umrenin kelime anlamlarından değildir?",
    options: ["Ziyaret etmek", "Uzun ömürlü olmak", "Vakfe yapmak", "Allah'a kul olmak."],
    correct: "Vakfe yapmak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_132",
    question: "Kurban kelimesinin anlamı aşağıdakilerden hangisidir?",
    options: ["Yakınlaşmak", "Uzaklaşmak", "Cömertlik", "Cimrilik"],
    correct: "Yakınlaşmak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_133",
    question: "Yılın belirli günlerinde, belirli vasıfları olan bir hayvanı Allah'a manen yakın olmak ve O'nu rızasını kazanmak için kesmek, olarak tarif edilen ibadetin adı nedir?",
    options: ["Adak", "Nezir", "Kurban", "Akika"],
    correct: "Kurban",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_134",
    question: "Kurban edilecek hayvan Kurban Bayramının hangi günlerinde kesilebilir?",
    options: ["Sadece birinci gününde", "Birinci ve ikinci gününde", "İlk üç gününde", "Bütün günlerinde"],
    correct: "İlk üç gününde",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_135",
    question: "Aşağıdakilerden hangisi Kurban edilecek hayvanda bulunması gereken özelliklerden biri değildir.",
    options: ["Kurban edilecek hayvan koyun, keçi, deve veya sığır cinsinden olmalıdır", "Sığır cinsi hayvanlar iki yaşını doldurmuş olmalıdır", "Kesilecek hayvanın sağlıklı ve semiz olması", "Kesilecek hayvanın güzel olması"],
    correct: "Kesilecek hayvanın güzel olması",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_136",
    question: "Kurban ibadeti ile ilğili olarak aşağıdaki ifadelerden hangisi söylenemez?",
    options: ["Kurban kesen kişi, Allah'a itaat sınavna hazir olduğunu simgesel bir davranışla gösterir.", "Kurban etinin paylaşılması toplumda dayanışma ve yardımlaşma rahunu diri ve taze tutar.", "Kurban ibadeti zavallı hayvanların acımasızca öldürülmesine sebep olur.", "Bize verilmiş olan sahip olduğumuz nimetlerin birer emanet olduğu duygusunu geliştirir."],
    correct: "Kurban ibadeti zavallı hayvanların acımasızca öldürülmesine sebep olur.",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_137",
    question: "Kurban ibadeti hanği iki Peygamber arasında yaşanmıştır?",
    options: ["Hz. İbrahim — Hz. İshak", "Hz. Musa — Hz. Harun", "Hz. İbrahim — Hz. İsmail", "Hz. Yakup — Hz. Yusuf"],
    correct: "Hz. İbrahim — Hz. İsmail",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_138",
    question: "Teşrik tekbirleri hangi günlerde getirilir?",
    options: ["Arefe günü sabah namazı başlar, birinci gün ikindi namazına kadar devam eder.", "Arefe günü sabah namaza başlar, ikinci gün ikindi namazma kadar devam eder.", "Arefe günü sabab namazı başlar, üçüncü gün ikindi namazına kadar devam eder.", "Arefe günü sabah namazı başlar, dördüncü gün ikindi namazına kadar devam eder."],
    correct: "Arefe günü sabah namazı başlar, dördüncü gün ikindi namazına kadar devam eder.",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_139",
    question: "Aşağidakilerden hangisi Kurban kesme ibadetini yerine getirecek kişinin taşıması gereken şartlardan değildir?",
    options: ["Müslüman olmak", "Akıl sağlığı yerinde olmak", "Ergenlik çağına gelmiş olnak", "Erkek olmak"],
    correct: "Erkek olmak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_140",
    question: "Dinimizce zengin kabul edilen müslümanların, mallarının belli bir oranını ibadet niyetiyle Kur'an- Kerim'de belirtilen yerlere vermeleri, olarak tanımlanan ibadet aşağıdakilerden hangisidir.",
    options: ["Zekat", "Fitre", "Kurban", "Sadaka"],
    correct: "Zekat",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_141",
    question: "Toprak Ürünlerinin nisap ve zekat miktarları ile ilgili olarak aşağıda verilen değerlerden hangisi doğrudur?",
    options: ["Nisap Miktarı: 653 Kğ./Zekat Miktarı: Masraf yapıldıysa 1/10—Masraf Yapılmadıysa 1/20", "Nisap Miktarı: 653 Kğ./Zekat Miktarı: Masraf yapıldıysa 2/10 — Masraf Yapdmadıysa 1/20", "Nisap Miktarı: 633 Kğ./Zekat Miktarı: Masraf yapıldıysa 1/10 — Masraf Yapılmadıysa 1/20", "Nisap Miktarı: 753 Kğ./Zekat Miktarı: Masraf yapıldıysa 1/10 — Masraf Yapılmadıysa 1/30"],
    correct: "Nisap Miktarı: 653 Kğ./Zekat Miktarı: Masraf yapıldıysa 1/10—Masraf Yapılmadıysa 1/20",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_142",
    question: "Aşağıdakilerden hangisi Kur'an-ı Kerim'de \"zekat\" kelimesi ile bazen aynı anlamlarda kullanılan kelimelerden birisidir?",
    options: ["Hayır", "İyilik", "İnfak", "Cömertlik"],
    correct: "İnfak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_143",
    question: "Aşağıdakilerden hangisi zekatın kelime anlamlarından biri değildir.",
    options: ["Temizlenmek", "Armmak", "Çoğalmak", "Yükselmek"],
    correct: "Yükselmek",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_144",
    question: "Zekat ibadeti ile ilgili olarak aşağıdaki ifadelerden hangisi söylenemez?",
    options: ["Zekat malı temizler", "Zekat mala bereket kazandırır.", "Zekat toplumsal barışa olumlu katkıda bulunur", "Zekat malı azaltır"],
    correct: "Zekat malı azaltır",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_145",
    question: "\"Allah'ın rızasını kazanmak niyetiyle karşılıksız olarak yardım etme, iyilik ve ihsanda bulunma anlamına gelen farz ibadet aşağıdakilerden hangisidir?",
    options: ["Teberru", "Zekat", "Hasene", "Hayır"],
    correct: "Zekat",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_146",
    question: "Aşağıdakilerden hangisi \"Allah'ın hoşnutluğunu kazanmak amacıyla kişinin sahip olduğu şeylerden harcamada bulunmasi\" şeklinde tarif edilen ibadettir?",
    options: ["İnfak", "Sadaka", "Zekat", "Hayır"],
    correct: "İnfak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_147",
    question: "Aşağıdakilerden hangisi zekat verecek kişide bulunması gereken şartlardan biri değildir?",
    options: ["Müslüman olmak", "Akıllı olmak", "Ergenlik çağına gelmiş olmak", "Erkek olmak"],
    correct: "Erkek olmak",
    difficulty: "medium",
    category: "İbadet"
  },
  {
    id: "mil_q_148",
    question: "Aşağıdakilerden hangisi zekat verilecek mallarda bulunması gereken şartlardan biri değildir?",
    options: ["Nisap", "Tam mülkiyet", "Artıcı olmama", "Yıllanma"],
    correct: "Artıcı olmama",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_149",
    question: "Zekat verilecek malda bulunması gereken ve \"Zekat verilecek malın hem kendisinin hem sağlayacağı kazancın, sahibinin yetkisinde olması\" şeklinde tanımlanan şart aşağıdaki şıklardan hangisinde doğru olarak yazılmıştır?",
    options: ["Tam mülkiyet", "Nisap", "Artıcı olma", "Yıllanma"],
    correct: "Tam mülkiyet",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_150",
    question: "Zekat verilecek malda bulunması gereken ve \"Dinimizin mallar için koyduğu bir ölçü ve zengin olmanın en alt ssınırı\" şeklinde tanımlanan şart aşağıdaki şıklardan hangisinde doğru olarak yazılmıştır?",
    options: ["Tam mülkiyet", "Nisap", "Artıcı olma", "Yıllanma"],
    correct: "Nisap",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_151",
    question: "Zekat verilecek malda bulunması gereken ve \"Malın, sahibine kar veya gelir getirmesi ya da kendiliğinden çoğalması\" şeklinde tanımlanan şart aşeağıdaki şıklardan hangisinde doğru olarak yazılmıştır?",
    options: ["Tam Mülkiyet", "Nisap", "Artıcı olma", "Yıllanma"],
    correct: "Artıcı olma",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_152",
    question: "Zekat verilecek malda bulunması gereken ve \"Zekat verilecek malın üzerinden bir yılın geçmesi gerekir\" şeklinde tanımlanan şart aşağıdaki şıklardan hangisinde doğru olarak yazılmıştır?",
    options: ["Tam Mülkiyet", "Nisap", "Artıcı olma", "Yıllanma"],
    correct: "Yıllanma",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_153",
    question: "Aşağıda yazılan iş ve davranışlardan hangisi sadaka olarak tanımlanamaz?",
    options: ["Helal şeyleri yapmak", "Oruç tutmak", "Güzel söz söylemek", "Yolda insanlara rahatsızlık veren bir şeyi kaldırmak."],
    correct: "Oruç tutmak",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_154",
    question: "\"Mü'minler gerçekten kurtuluşa ermişlerdir. Onlar ki namazlarında derin saygı içindedirler. Onlar ki faydasız işlerden ve boş sözlerden yüz çevirirler. Onlar ki zekatı öderler.\" Bu ayet hangi surede yer almaktadır?",
    options: ["İhlas", "Mü'minun Suresi", "Fatiha", "Bakara"],
    correct: "Mü'minun Suresi",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_155",
    question: "Aşağidaki mallardan hangisinden zekat verilmez?",
    options: ["Altın", "Gümüş", "Ticari mal", "Asli ihtiyaçlardan olan mal"],
    correct: "Asli ihtiyaçlardan olan mal",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_156",
    question: "Aşağıda zekat verilecek malların nisap ve zekat miktarlan eşleştirilmiştir. Yapılan bu eşleşmelerden hanğisi yanlıştır?",
    options: ["Altın= Nisap miktan: 80,18 ğr./ Zekat miktari: 1/40", "Koyun ve Keçi = Nisap Miktari: 40 Koyun veya Keçi / Zekat Miktarı 1 Koyun veya Keçi", "Deve = Nisap Miktarı: 5 Deve / Zekat Miktarı: 1 Koyun", "Gümüş= Nisap Miktarş: 561,2 gr. / Zekat Miktari: 1/50"],
    correct: "Gümüş= Nisap Miktarş: 561,2 gr. / Zekat Miktari: 1/50",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_157",
    question: "Aşağidakilerden hangisi Kur'an-ı Kerimde bildirilen zekat verilecek kişilerden değildir?",
    options: ["Yoksullar", "İhtiyaç sahibi insanlar", "Çocuklar", "Esirler"],
    correct: "Çocuklar",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_158",
    question: "Allah'a yalvarma, yakarma, O'ndan maddi ya da manevi bir şeyler istemeye ne denir?",
    options: ["Dua etmek", "Zekat vermek", "Oruç tutmak", "Hacca gitmek"],
    correct: "Dua etmek",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_159",
    question: "\"Dua\"nın kelime anlamı aşağıdakilerden hangisidir?",
    options: ["Vermek", "Almak", "Götürmek", "İstemek"],
    correct: "İstemek",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_160",
    question: "Aşağıdakilerden hangisi dilimizde dua kelimesi ile eş anlamlı olarak kullandan kelimelerden değildir?",
    options: ["Niyazda bulunmak", "Yakarmak", "Münacaat", "Münazara"],
    correct: "Münazara",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_161",
    question: "Dua ederken uyulması gereken temel ilke aşağıdakilerden hangisidir?",
    options: ["Samimiyet", "Camide olmak", "Dua ederken hadis okumak", "Dua ederken ayet okumak"],
    correct: "Samimiyet",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_162",
    question: "Hangi zamanlarda dua edilebilir?",
    options: ["Sabahlan", "Akşamları", "Geceleyin", "Her zaman"],
    correct: "Her zaman",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_163",
    question: "\"Bizi yedirip doyuran, bizim susuzluğumuzu gideren ve bizi Müslümanlardan eyleyen Allah'a hamd olsun\" şeklinde yapılan duanm adı nedir?",
    options: ["Namaz duası", "Yemek duası", "Ezan duası", "Cenaze duası"],
    correct: "Yemek duası",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_164",
    question: "\"Rabbim! İlmimi arttır\" anlammdaki dua ayeti aşağıdaki surelerin hanğisinde bulunmaktadır?",
    options: ["Bakara Suresi", "Enfal Suresi", "Yasin Suresi", "Ta-Ha Suresi"],
    correct: "Ta-Ha Suresi",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_165",
    question: "\"Rabbimiz! Bize bu dünyada iyilik ver, ahrette de iyilik ver ve bizi ateş azabından koru\" anlamındaki dua ayeti aşağıdaki surelerin hangisinde bulunmaktadır?",
    options: ["Bakara Suresi", "Yasin Suresi", "Mülk Suresi", "Nisa Suresi"],
    correct: "Bakara Suresi",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_166",
    question: "\"Ya Rabbi! Sen affedicisin. Affetmeyi seversin. Bütün insanlan affet\" duası kime aittir?",
    options: ["Hz. Muhammed (A.S.)", "Hz. Ömer (R.A.)", "Hz. Ebu Bekr (R.A.)", "Hz. Osman (R.A.) 173 \"Bilerek veya bilmeyerek açıktan veya gizlice işlenmiş günahlardan, hatalardan ve kusurlardan pişmanlık duymak, onlan bir daha yapmamaya niyet etmek ve yeniden aynı yanlışlara düşmemek için çaba göstermeye\" ne denir? a) İtiraf b) Tövbe c) Günah çıkartma d) Yalvarma"],
    correct: "Hz. Muhammed (A.S.)",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_167",
    question: "Dua etmek ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: ["Ancak helal ve temiz şeyler icin Allah'a dua edilir.", "Duanın kabulü hususunda tereddüt edilmemelidir.", "Haram, yasak ve kötü şeyler icin de dua edilebilir.", "Dua ederken bağırıp çağırmamak gerekir."],
    correct: "Haram, yasak ve kötü şeyler icin de dua edilebilir.",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_168",
    question: "Kur'an'da tövbeyle yakın anlama sahip bir kelime daha kullanılır. Bu kelime aşağıdakilerden hangisidir?",
    options: ["İstiğfar", "İstifra", "Tevekkül", "Tevazu"],
    correct: "İstiğfar",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_169",
    question: "Tövbe ile ilgili aşağıda bulunan ifadelerden hangisi yanlıştır?",
    options: ["Tövbe eden kişi ruhen rahata ve huzura erer.", "Tövbe, hata ve kusur karanlığında önümüzü aydınlatan bir lambadır.", "Tövbe, hata ve kusur kirlerini temizleyen tertemiz bir sudur.", "Tövbe etmek için hiç günah işlenmemiş olması gerekir."],
    correct: "Tövbe etmek için hiç günah işlenmemiş olması gerekir.",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_170",
    question: "Aşağıdakilerden hangisi tövbe eden kişinin özen göstermesi gereken hususlarladan değildir?",
    options: ["Bir hata yaptıktan sonra hemen tövbe edilmelidir.", "Yapılan hatayı bir daha yapmamaya samimi olarak niyet edip karar vermek gerekir.", "Aynı hata veya kusuru işlememek için elden geldiğince çaba göstermek gerekir.", "Tövbe ederken gelişigüzel sözler kullanılabilir"],
    correct: "Tövbe ederken gelişigüzel sözler kullanılabilir",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_171",
    question: "\"Ben nefsimi temize çıkarmam, çünkü Rabbimin merhamet ettiği hariç, nefis aşırı derecede kötülüğü emreder. Şüphesiz Rabbim çok bağışlayandır, çok merhamet edendir\" tövbesi hangi Peygambere aittir?",
    options: ["Yusuf A.S.", "NuhA.S.", "Musa A.S.", "Yunus A.S."],
    correct: "Yusuf A.S.",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_172",
    question: "\"Ey Rabbim! Beni ve kardeşimi bağışla. Bizi kendi rahmetine sok. Sen merhametlilerin en merhametlisisin.\" Tövbesi hangi Peygambere aittir?",
    options: ["Yusuf A.S.", "Nuh A.S.", "Musa A.S.", "Yunus A.S."],
    correct: "Musa A.S.",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_173",
    question: "\"Rabbim! Beni, ana babamı, iman etmiş olarak evime girenleri, iman eden erkekleri ve iman eden kadınları bağışla. Zalimlerin de ancak helakini arttır\" Tövbesi hangi Peygambere aittir?",
    options: ["Yusuf A.S.", "Nuh A.S.", "Musa A.S.", "Yunus A.S."],
    correct: "Nuh A.S.",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_174",
    question: "\"Senden başka hiçbir ilah yoktur. Seni eksikliklerden uzak tutarım. Ben gerçekten (nefsine zulmedenlerden oldum\" Tövbesi hangi Peygambere aittir?",
    options: ["Yusuf A.S.", "Nuh A.S.", "Musa A.S.", "Yunus"],
    correct: "Yunus",
    difficulty: "hard",
    category: "İbadet"
  },
  {
    id: "mil_q_175",
    question: "İslam dininin inanç yönünden en önemli şartı aşağıdakilerden hangisidir?",
    options: ["Allah’ın varlığına ve birliğine inanmak", "Her topluluğa peygamber gönderildiğine inanmak", "Müslümanların birbirlerine selam vermesi", "Yardıma muhtaç insanlara yardımda bulunmak"],
    correct: "Allah’ın varlığına ve birliğine inanmak",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_176",
    question: "Allah’a iman aşağıdaki şartlardan hangisine aittir ?",
    options: ["İslamın şartları", "İmanın şartları", "Namazın Şartları", "Abdestin şartları"],
    correct: "İmanın şartları",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_177",
    question: "Aşağıdaki kısa surelerden hangisi Allah’ın bir olduğunu anlatır ?",
    options: ["İhlas Suresi", "Nas suresi", "Kevser suresi", "Felak suresi"],
    correct: "İhlas Suresi",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_178",
    question: "Allah’ın sıfatlarından olan “Vücud” sıfatı aşağıdakilerden hangisine işaret eder?",
    options: ["Allah’ın her şeyi görmesi", "Allah’ın her şeyi işitmesi", "Allah’ın her şeye gücü yetmesi", "Allah’ın var olması"],
    correct: "Allah’ın var olması",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_179",
    question: "“Allah’ın doğru ve güzel söz söylemesi” aşağıdaki sıfatlardan hangisidir?",
    options: ["İrade", "Basar", "Kelam", "Kudret"],
    correct: "Kelam",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_180",
    question: "“Her şey Allah’ın dilemesiyle olur” Bu sıfat aşağıdakilerden hangisidir?",
    options: ["Hayat", "İlim", "Tekvin", "İrade"],
    correct: "İrade",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_181",
    question: "Aşağıdakilerden hangisi Allah’ın “Zati” sıfatlarındandır?",
    options: ["Vücut", "Hayat", "Kudret", "Semi"],
    correct: "Vücut",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_182",
    question: "Aşağıdakilerden hangisi Allah’ın sıfatlarındandır?",
    options: ["Emanet", "Fetanet", "Beka", "Tebliğ"],
    correct: "Beka",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_183",
    question: "Aşağıdakilerden hangisi Allah’ın isimlerinden değildir?",
    options: ["Rahman", "Samed", "Kur’an", "Alim"],
    correct: "Kur’an",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_184",
    question: "Aşağıdakilerden hangisi Allah’ın “Rezzak” isminin anlamıdır?",
    options: ["Zengin", "Rızık veren", "Affedici", "Hayat veren"],
    correct: "Rızık veren",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_185",
    question: "Aşağıdakilerden hangisi Allah’ın isimlerinden değildir?",
    options: ["Rahman", "Samed", "İslam", "Şahid"],
    correct: "İslam",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_186",
    question: "Aşağıdakilerden hangisi Allah’ın isimlerindendir?",
    options: ["İlim", "Hayat", "Basar", "Aziz"],
    correct: "Aziz",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_187",
    question: "Aşağıdakilerden hangisinde ilk ve son peygamberin isimleri yer alır?",
    options: ["Adem-Muhammed (A.S.)", "İsa- Musa (A.S.)", "Harun-Yahya (A.S.)", "Nuh-Hud (A.S.)"],
    correct: "Adem-Muhammed (A.S.)",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_188",
    question: "Aşağıdakilerden hangisi Peygamberlerin özelliklerinden değildir?",
    options: ["Sıdk", "Emanet", "İsmet", "Sefa"],
    correct: "Sefa",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_189",
    question: "“Peygamberler her zaman doğru sözlüdürler” cümlesi aşağıdaki sıfatlardan hangisidir?",
    options: ["İsmet", "Sıdk", "Mü’min", "Müslüman"],
    correct: "Sıdk",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_190",
    question: "Aşağıdakilerden hangisi Kur’anda ismi geçen peygamberlerden değildir?",
    options: ["Hz. İdris", "Hz. Musa", "Hz. Süleyman", "Hz. Şit"],
    correct: "Hz. Şit",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_191",
    question: "Aşağıdakilerden hangisi bir peygamber ismidir?",
    options: ["Abdullah", "İsrafil", "Halis", "Harun"],
    correct: "Harun",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_192",
    question: "Aşağıdakilerden hangisi peygamberlerin görevlerinden değildir?",
    options: ["Allah’tan gelen emir ve yasakları insanlara bildirmek", "İnsanlara iyi, doğru ve güzel olan her şeyi anlatmak ve örnek olmak", "Her alanda kendilerine tabi olanlara örnek olmak, güzel ahlakı anlatmak", "İnsanların işledikleri günahları bağışlamak"],
    correct: "İnsanların işledikleri günahları bağışlamak",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_193",
    question: "Aşağıdakilerden hangisi “Mucize” nin anlamını ifade etmektedir?",
    options: ["Peygamberliği ispatlamak için kendilerine verilen olağanüstü durum ve olaylar", "Sihir yaparak insanları şaşkına çevirmek", "İnsanlara Allah’ın mesajını ulaştırmak", "Güzel ahlakı ve islam’ı insanlara anlatmak"],
    correct: "Peygamberliği ispatlamak için kendilerine verilen olağanüstü durum ve olaylar",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_194",
    question: "Aşağıdakilerden hangisi Hz. Muhammed (A.S.)’i diğer peygamberlerden ayıran özellik değildir?",
    options: ["Son peygamber olması", "Bütün insanlığa gönderilmiş olması", "Kendisine kitap verilmesi", "Son din olan İslam dinini temsil etmesi"],
    correct: "Kendisine kitap verilmesi",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_195",
    question: "Aşağıdakilerden hangisi Hz.Muhammed (A.S.)’in özelliklerinden değildir?",
    options: ["İlk peygamber olması", "Medine’ye hicret . .etmesi", "40 yaşında peygamber olması", "Miraca Yükselmesi"],
    correct: "İlk peygamber olması",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_196",
    question: "Aşağıdaki peygamberlerden hangisi kendisine kitap gönderilen peygamber değildir?",
    options: ["Hz.Musa", "", "Hz.İsa", "Hz.Muhammed d- Hz.Yunus"],
    correct: "Hz.Muhammed d- Hz.Yunus",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_197",
    question: "“Ahiret Gününe İman” Aşağıdakilerden hangisinin şartıdır?",
    options: ["İslamın", "İmanın", "Namazın", "Abdestin"],
    correct: "İmanın",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_198",
    question: "“İnsanların yeniden dirilmesi” imanın şartlarından hangisine işaret eder?",
    options: ["Allah’a iman", "Ahirete iman", "Kitaplara İman", "Melekler iman"],
    correct: "Ahirete iman",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_199",
    question: "Kıyamet vakti geldiğinde “Sur’a” üflemekle görevli melek aşağıdakilerden hangisidir?",
    options: ["Cebrail", "Mikail", "İsrafil", "Azrail"],
    correct: "İsrafil",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_200",
    question: "Aşağıdakilerden hangisi insan öldükten sonra yaşayacağı olaylardan ilkidir?",
    options: ["Hesap verme", "Cehennem", "Cennet", "Sırat"],
    correct: "Hesap verme",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_201",
    question: "“Kabir” Sözcüğü aşağıdakilerden hangisine işaret eder?",
    options: ["Doğum", "Yaşam", "Evlilik", "Ölüm"],
    correct: "Ölüm",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_202",
    question: "Hz.İsa günümüzde hangi dinin peygamberi olarak görülmektedir?",
    options: ["İslamın", "Hristiyanlığın", "Yahudiliğin", "Hinduizm"],
    correct: "Hristiyanlığın",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_203",
    question: "“Peygamberler Allah’dan aldıkları emirleri insanlara ulaştırırlar” cümlesi aşağıdakilerden hangisini açıklamaktadır?",
    options: ["İsmet", "Emanet", "Tebliğ", "Fetanet"],
    correct: "Tebliğ",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_204",
    question: "Dünya hayatı ahirete göre neye benzetilmiştir?",
    options: ["Beşik", "Tarla", "Ev", "Terazi"],
    correct: "Tarla",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_205",
    question: "“Dünya ahiretin tarlasıdır” sözü aşağıdakilerden hangisini ifade eder?",
    options: ["Hadis", "Ayet", "Kelam", "Atasözü"],
    correct: "Hadis",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_206",
    question: "Allah’ın güzel isimlerine ne ad verilir?",
    options: ["İman", "İslam", "Esma-ül Hüsna", "Din"],
    correct: "Esma-ül Hüsna",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_207",
    question: "“Allah’ın her şeyi bilmesi” aşağıdakilerden hangisinin anlamını ifade eder?",
    options: ["Büyük", "Bağışlayan", "Kahhar", "Alim"],
    correct: "Alim",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_208",
    question: "Evrenin ve insanlığın son bulup yok olmasına ne ad verilir?",
    options: ["Kıyamet", "Mahşer", "Sur", "Dirilme"],
    correct: "Kıyamet",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_209",
    question: "Allah’ın eşinin be benzerinin bulunmaması ve bir olması Allah’ın hangi sıfatıdır?",
    options: ["Vücud", "Kıdem", "Vahdaniyet", "Beka"],
    correct: "Vahdaniyet",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_210",
    question: "Allah’ın “Dilediğini dilediğince yaratması” sıfatı aşağıdakilerden hangisidir?",
    options: ["Hayat", "İlim", "Basar", "Tekvin"],
    correct: "Tekvin",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_211",
    question: "Allah’ın “Esmaü-l husna” olarak ifade edilen kaç tane ismi vardır?",
    options: ["99", "89", "199", "24"],
    correct: "99",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_212",
    question: "Aşağıdakilerden hangisi “Kiramen Katibin” meleklerinin görevidir?",
    options: ["Cennet bekçisi", "Cehennem bekçisi", "Sorgu melekleri", "Sevap ve günah yazan"],
    correct: "Sevap ve günah yazan",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_213",
    question: "Dünya hayatından sonra başlayacak hayat aşağıdakilerden hangisidir?",
    options: ["Cennet hayatı", "Kabir hayatı", "Cehennem hayatı", "Mahşer hayatı"],
    correct: "Kabir hayatı",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_214",
    question: "İnsanların Allah’ın huzurunda toplanacakları yere ne ad verilir?",
    options: ["Berzah", "Kabir", "Mahşer", "Hesap"],
    correct: "Mahşer",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_215",
    question: "“Her peygambere bir kitap verilmiştir” buna göre aşağıdaki bilgilerden hangisi yanlıştır?",
    options: ["Tevrat-Hz. Musa(as)", "İncil-Hz. İsa (as)", "Kuran-Hz. Muhammed (as)", "Zebur-Hz. Musa (as)"],
    correct: "Zebur-Hz. Musa (as)",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_216",
    question: "Kelime-i Tevhid in türkçe anlamı hangisidir?",
    options: ["Şahidlik etmek", "Allah tan başka ilah olmadığına inanmak", "Allah tan başka ilah yoktur,Muhammed Allah ın elçisidir.", "Allah ın dışında hiç bir varlığa boyun eğilmeyeceğine inanmak."],
    correct: "Allah tan başka ilah yoktur,Muhammed Allah ın elçisidir.",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_217",
    question: "Kelime-i Şehadet aşağıdakilerden hangisidir?",
    options: ["Lailahe illellah ,Muhammedürrasülüllah", "Eşhedü ellailahe illellah, Muhammedürrasülüllah", "Veeşhedü enne ,Muhammeden abdühü verasülüh.", "Eşhedü ellailahe illellah veeşhedü enne Muhammeden abdühü verasülüh."],
    correct: "Eşhedü ellailahe illellah veeşhedü enne Muhammeden abdühü verasülüh.",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_218",
    question: "Kelime-i Şehadet in tam anlamı hangisidir?",
    options: ["Ben kabul ederim ki Allaht an başka ilah yoktur. Muhammed Allah ın kulu ve elçisidir.", "Ben kabul eder ve şahitlik ederim ki Allahtan başka ilah yoktur. Ve yine kabul eder ve şahitlik ederim ki Muhammed, Allah ın kulu ve elçisidir.", "Allah tan başka ilah yoktur.Muhammed Allah ın kuludur.", "Ben şahitlik ederim ki Allah birdir.Muhammed Allah ın Peygamberidir."],
    correct: "Ben kabul eder ve şahitlik ederim ki Allahtan başka ilah yoktur. Ve yine kabul eder ve şahitlik ederim ki Muhammed, Allah ın kulu ve elçisidir.",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_219",
    question: "Kelime-i Tevhid hangisinde doğru olarak yazılmıştır?",
    options: ["Lailahe illellah , Muhammedürrasülüllah.", "Eşhedü ellailahe illellah,veeşhedü enne Muhammeden abdühü verasülüh.", "Sübhanellahi velhamdülillah", "Lailahe illa ente sübhaneke inni küntü minezzalimin"],
    correct: "Lailahe illellah , Muhammedürrasülüllah.",
    difficulty: "easy",
    category: "İtikad"
  },
  {
    id: "mil_q_220",
    question: "İnsanlara Allah’ın mesajlarını ulaştıran, onları dine çağıran kimseye ne ad verilir?",
    options: ["Hoca", "Resül", "Tevhid", "İlah"],
    correct: "Resül",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_221",
    question: "Kelime-i şehadeti söyleyen ve İslam’a gönülden teslim olan kişiye ne denir?",
    options: ["Mümin", "İslam", "İnsan", "Müslüman"],
    correct: "Müslüman",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_222",
    question: "Aşağıdaki karışık kelime ve hecelerin doğru yazılışı hangi kavramı ifade eder? İllallah, Muhammedün, resülüllah, la, ilahe",
    options: ["Kelime-i Tevhid", "Kelime-i Şehadet", "Kelime-i sözcük", "İlahi ibadet"],
    correct: "Kelime-i Tevhid",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_223",
    question: "Dinin tarifi aşağıdakilerden hangisidir?",
    options: ["Akıl sahibi insanların kendi seçimleriyle tercih ettikleri yoldur.", "Mecbur olarak kabul edilen Allah kanunu.", "Akıl sahibi insanların kendi seçimleriyle tercih ettikleri, onları iyi, güzel ve doğru olan şeylere yönlendiren ilahi öğütler bütünüdür.", "Bütün insanların inanmak zorunda oldukları Allah sözüdür."],
    correct: "Akıl sahibi insanların kendi seçimleriyle tercih ettikleri, onları iyi, güzel ve doğru olan şeylere yönlendiren ilahi öğütler bütünüdür.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_224",
    question: "Allah’ın bütün peygamberler aracılığıyla gönderdiği dinin ortak adı nedir?",
    options: ["Hristiyanlık", "Yahudilik", "Hanif", "İslam"],
    correct: "İslam",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_225",
    question: "‘’Şüphesiz Allah katında din İslam’dır.’’sözü nedir?",
    options: ["Hadis", "Ayet", "Kutsi hadis", "Farz"],
    correct: "Ayet",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_226",
    question: "Barış ve esenlik, selamet, bağlanma, boyun eğme, teslim olma,s elam verme, neyin tarifidir?",
    options: ["Barış", "Özgürluk", "Din", "İslam"],
    correct: "İslam",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_227",
    question: "Hangisi peygamberler tarafından insanlara bidirilen temel ilkelerden değildir?",
    options: ["Allahın varlığına ve birliğine inanmak.", "Ondan başkasına kulluk etmemek", "Ölümden sonra dirilişe inanmak", "Namaz kılmak"],
    correct: "Namaz kılmak",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_228",
    question: "Hangisi İslam dininin temel özelliklerinden değildir?",
    options: ["İnsana kolaylıklar sunan, fakat kolayca uygulanamayan dindir.", "İlahi bir dindir.", "İnsan yaratılışına uygundur.", "Aklın ve vicdanın rahatlıkla anlayabileceği ve kabulleneceği bir dindir."],
    correct: "İnsana kolaylıklar sunan, fakat kolayca uygulanamayan dindir.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_229",
    question: "Aşağıdakilerden hangisi İslamın şartlarından değildir?",
    options: ["Namaz kılmak", "Allah’tan başkasına kulluk etmemek", "Zekat vermek", "Hacca gitmek"],
    correct: "Allah’tan başkasına kulluk etmemek",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_230",
    question: "Hangisi imanın şartlarından değildir?",
    options: ["Allah’ın varlığına ve birliğine inanmak", "Peygamberlere inanmak", "Ahlak kurallarına inanmak", "Ölümden sonra dirilişe inanmak"],
    correct: "Ahlak kurallarına inanmak",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_231",
    question: "Kim İslam’ı beş temel üzere kurulmuş bir binaya benzetmiştir?",
    options: ["Peygamber Efendimiz", "Allah(cc)", "Mevlana", "Yunus Emre"],
    correct: "Peygamber Efendimiz",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_232",
    question: "Aşağıdakilerden hangisinde yazım hatası yoktur?",
    options: ["Peygamber", "Oruc", "Müslüman", "İlaah"],
    correct: "Müslüman",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_233",
    question: "Aşağıdaki cümlelerden hangisi yanlış değildir?",
    options: ["İslam, eksikleri olan bir dindir.", "İslam, zor anlaşılır bir dindir.", "İslam, ilahi bir dindir.", "İslam, kolayca uygulanamayan bir dindir."],
    correct: "İslam, ilahi bir dindir.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_234",
    question: "İman en özlü biçimiyle nasıl ifade edilir?",
    options: ["Hacca giderek", "Kur’an okuyarak", "Namaz kılarak", "Kelime-i şehadet söyleyerek"],
    correct: "Kelime-i şehadet söyleyerek",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_235",
    question: "Aşağıdakilerden hangisi, imanın tam tarifidir?",
    options: ["Şüphe duymaksızın bir şeyi kabul etmemek", "Güvenerek onaylamak", "Şüphe duymaksızın bir şeyi kabul etmek, doğrulamak, güven duyarak onaylamak.", "Allah a inanmak"],
    correct: "Şüphe duymaksızın bir şeyi kabul etmek, doğrulamak, güven duyarak onaylamak.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_236",
    question: "Yaratılan varlıklar içerisinde insanı diğer varlıklardan ayıran özellikler nelerdir?",
    options: ["Akıl sahibi bir varlık olması", "Yiyen ve içen bir varlık olması", "Çoğalan varlık olması", "Doğup, büyüyüp ve ölmesi."],
    correct: "Akıl sahibi bir varlık olması",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_237",
    question: "İnsanı en mutlu ve huzurlu yapan özellik nedir?",
    options: ["İnanç", "Zenginlik", "Çok okumak", "İyi bir işte çalışmak"],
    correct: "İnanç",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_238",
    question: "Allah’a, Hz.Peygamber’e (as) ve onun getirdiği her şeye kalpten inanıp bunları kabul eden kişiye ne denir?",
    options: ["Müslüman", "Muhacir", "Mücahit", "Mümin"],
    correct: "Mümin",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_239",
    question: "Allah’ın dinine ve Hz. Peygamber’in (as) bildirdiği her şeye gönülden teslim olup inandıklarını yaşamaya çalışan kişiye ne denir?",
    options: ["Müslüman", "Mümin", "Muhlis", "Muhacir"],
    correct: "Müslüman",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_240",
    question: "İman esasları hangi metinde anlatılmaktadır?",
    options: ["Sübhaneke", "Salli- barik", "Amentü", "Kunut duası"],
    correct: "Amentü",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_241",
    question: "Hangisi meklerin özelliklerinden değildir?",
    options: ["Müminler için dua ederler", "Gece gündüz Allah ı zikrederler", "Oruç tutarlar", "Nurdan yaratılmışlardır"],
    correct: "Oruç tutarlar",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_242",
    question: "Hangisi peygamberlerin görevlerinden değildir?",
    options: ["Allah tarafından bildirilen mesajları insanlara ulaştırmaktır.", "Peygamberler, gaybı(geleceği) bilirler.", "Peygamberler, dini insanlara öğretirler.", "Peygamberler, örnek şahsiyetlerdir."],
    correct: "Peygamberler, gaybı(geleceği) bilirler.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_243",
    question: "Ahiret hayatına inanmak müminlere ne kazandırmaz ?",
    options: ["İnsanların hayatının şekillenmesinde rol üstlenir.", "Dünyayı bir sınav yeri olarak değerlendirir.", "Ölümü bir son ve yok oluş olarak görmez.", "İyi bir kul olmak için öldükten sonra da ibadet etmesi gerektiğine inanır."],
    correct: "İyi bir kul olmak için öldükten sonra da ibadet etmesi gerektiğine inanır.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_244",
    question: "Aşağıdakilerden hangisi meleklerin özelliklerinden biridir?",
    options: ["Oruç tutarlar.", "Evlenir çoğalırlar", "Ateşten yaratılmışlardır.", "Allah`ı tesbih ederler."],
    correct: "Allah`ı tesbih ederler.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_245",
    question: "Aşağıdakilerden hangisi melek kelimesinin anlamı değildir?",
    options: ["Elçilik", "İdarecilik", "İyilik", "Kuvvet"],
    correct: "İyilik",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_246",
    question: "Aşağıdakilerden hangisi İsrafil meleğinin görevidir?",
    options: ["Kıyametin haberi olan sura üfürmek.", "Tabiat olaylarını düzenlemek", "Can almak.", "Vahiy getirmek."],
    correct: "Kıyametin haberi olan sura üfürmek.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_247",
    question: "Asağıdaki meleklerden hangisi insanın sağında ve solunda bulunur?",
    options: ["Cebrail", "Mikail", "Kiramen Katibin", "Münker-Nekir"],
    correct: "Kiramen Katibin",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_248",
    question: "Aşağıdakilerin hangisi meleklerin özelliklerinden değildir?",
    options: ["Bol bol tevbe ederler.", "Bol bol tesbih ederler.", "Son derece süratli, güçlü ve kuvvetli varlıklardır.", "Güzel koku ve güzel sözlerden hoşlanırlar."],
    correct: "Bol bol tevbe ederler.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_249",
    question: "Aşağıdakilerden hangisi meleklerin görevlerinden değildir?",
    options: ["Peygamberlere vahiy getirmek.", "İnsanların iyi ve kötü davranışlarını kaydetmek.", "Cennet ve cehennemde kendilerine verilen görevleri yerine getirmek.", "Kıyamet günü insanları sorgulamak."],
    correct: "Kıyamet günü insanları sorgulamak.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_250",
    question: "Aşağıdakilerden hangisi cinlerin özelliklerindendir?",
    options: ["Allah`a kulluk ve ibadetle mükelleftirler.", "Nurdan yaratılmıslardır.", "İnsanları korumakla görevlidirler.", "Dişilikleri erkeklikleri yoktur."],
    correct: "Allah`a kulluk ve ibadetle mükelleftirler.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_251",
    question: "Aşağıdakilerden hangisi şeytanın özelliklerindendir?",
    options: ["Cinlerden de, insanlardan da olabilirler.", "İnsanı kötülükten menederler.", "Allah’ın emrinden hiç çıkmamışlardır.", "Nurdan yaratılmışlardır."],
    correct: "Cinlerden de, insanlardan da olabilirler.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_252",
    question: "Aşağıdakilerden hangisi meleklerin özelliklerinden değildir?",
    options: ["Allah’ın emri ve izniyle çeşitli sekil ve kılıklara bürünebilirler.", "Günah islediklerinde meleklikten çıkarlar.", "İnsanı önünden ve ardından takip edenleri vardır.", "Kanatları vardır."],
    correct: "Günah islediklerinde meleklikten çıkarlar.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_253",
    question: "Meleklere iman insana aşağıdakilerden hangisini kazandırmaz?",
    options: ["Kendisini çevreleyen varlıkların çokluğunu düşünür ve Allah’ın kudretine hayranlığı artar.", "Yazıcı Meleklerin kendisinin yaptığı iyi ve kötü davranışları kaydettiğini bilir daha dikkatli davranır.", "Meleklerin kendisi için dua ettiğini bilir ve bundan manevi güç alır.", "Herhangi bir günah işlediğinde meleklerin kendisi için zaten af dilediğini bilir ve tövbe etmeye gerek kalmaz."],
    correct: "Herhangi bir günah işlediğinde meleklerin kendisi için zaten af dilediğini bilir ve tövbe etmeye gerek kalmaz.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_254",
    question: "Aşağıdakilerden hangisi Cebrail meleğinin görevidir?",
    options: ["Tabiat olaylarını düzenlemek", "Sur’a üfürmek", "Vahiy getirmek", "Can almak"],
    correct: "Vahiy getirmek",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_255",
    question: "Tabiat olaylariyla ilgilenen meleğin adı nedir?",
    options: ["Kiramen Katibin", "Münker-Nekir", "İsrafil", "Mikail"],
    correct: "Mikail",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_256",
    question: "Aşağıdakilerden hangisi dört büyük meleğin görevlerinden degildir?",
    options: ["Vahiy getirmek.", "Sorgu sual sormak.", "Tabiat olaylarıyla ilgilenmek.", "Kıyamet günü sura üflemek"],
    correct: "Sorgu sual sormak.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_257",
    question: "Aşağıdakilerden hangisi Meleklerin görevleri arasında sayılamaz?",
    options: ["Cennet ve cehennemde kendilerine verilen görevleri yerine getirmek.", "İnsanların iyi ve kötü tüm fiillerini kaydetmek.", "İnsanlara zor anlarında yardım etmek.", "İnsanların kalplerine ferahlık vermek."],
    correct: "İnsanlara zor anlarında yardım etmek.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_258",
    question: "Aşağıdakilerden hangisi kitaplara imanın faydalarından değildir?",
    options: ["Allahın vahyinin kullarıyla konuşmak olduğunu bilmek.", "Allahın kitabını okumak ve okunulanların gönüllere huzur ve şifa verdiğini bilmek.", "Milyarlarca insanin ayni kitabi okuduğunu bilmek ve birlik ve beraberlik duygularını geliştirmek.", "Sadece bir yakinini kaybettiğinde okunması gereken bir kitap olduğunu düşünmek."],
    correct: "Sadece bir yakinini kaybettiğinde okunması gereken bir kitap olduğunu düşünmek.",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_259",
    question: "Aşağıdakilerden hangisi dört büyük kitaplardan degildir?",
    options: ["Mesnevi", "Zebur", "İncil", "Tevrat"],
    correct: "Mesnevi",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_260",
    question: "Aşağıdakilerden hangisi Musa AS.peygambere gönderilmistir.",
    options: ["Tevrat", "İncil", "Kur’an", "Zebur"],
    correct: "Tevrat",
    difficulty: "medium",
    category: "İtikad"
  },
  {
    id: "mil_q_261",
    question: "Aşağıdakilerden hangisi Davut A.S.Peygambere gönderilmiştir.",
    options: ["Tevrat", "İncil", "Kur’an", "Zebur"],
    correct: "Zebur",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_262",
    question: "Aşağidaki kitaplardan hangisi orjinalligini korumaktadır?",
    options: ["Tevrat", "İncil", "Kur’an", "Zebur"],
    correct: "Kur’an",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_263",
    question: "Günümüzde Mezmurlar adı altında Tevrat içerisinde bir bölüm olarak yer alan Kutsal kitap aşağıdakilerden hangisidir?",
    options: ["Ahd-i Atik", "İncil", "Kur’an", "Zebur"],
    correct: "Zebur",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_264",
    question: "Aşağıdaki Kutsal Kitaplardan hangisi Ahd-i Cedid (Yeni Ahid) ismiyle bilinir?",
    options: ["Tevrat", "İncil", "Kur’an", "Zebur"],
    correct: "İncil",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_265",
    question: "Aşağıdakilerden hangisi Kuran-i Kerimin diğer isimlerinden değildir?",
    options: ["Furkan", "Zikir", "Hüda", "Ahd-i Cedid"],
    correct: "Ahd-i Cedid",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_266",
    question: "Aşağıdaki Kitaplardan hangisi bütün insanlığa gönderilmiştir?",
    options: ["Tevrat", "Zebur", "İncil", "Kur’an"],
    correct: "Kur’an",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_267",
    question: "Aşağıdakilerden hangisi Ehl-i Kitap değildir?",
    options: ["Yahudiler", "Hristiyanlar", "Müslümanlar", "Müşrikler"],
    correct: "Müşrikler",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_268",
    question: "Aşağıdaki peygamberlerden hangisine kitap gönderilmiştir?",
    options: ["Hz. İbrahim", "Hz. Adem", "Hz. Musa", "Hz. İdris"],
    correct: "Hz. Musa",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_269",
    question: "Hz. Sit (a.s)’a kaç suhuf gönderilmiştir?",
    options: ["50", "20", "10", "30"],
    correct: "30",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_270",
    question: "Aşağıdaki peygamberlerden hangi ikisine 10`ar suhuf gönderilmiştir?",
    options: ["Hz. Sit-Hz. Adem", "Hz. İdris- Hz. İbrahim", "Hz. Sit- Hz. İbrahim", "Hz. Adem-Hz.İbrahim"],
    correct: "Hz. Adem-Hz.İbrahim",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_271",
    question: "Allahin ilim, irade ve kudretiyle ezelden ebede kadar olmuş ve olacak herşeyi bilmesine ne denir?",
    options: ["Kaza", "Kader", "Hayır", "Şerr"],
    correct: "Kader",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_272",
    question: "Yapılması gereken herseyi yaptıktan sonra sonucu Allah’a bırakmak aşağıdakilerden hangisidir?",
    options: ["Temayül", "Tevekkül", "Tefekkür", "Tekebbür"],
    correct: "Tevekkül",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_273",
    question: "Yenilen içilen türden, Allahın kullarına vermiş olduğu şeylere ne denir?",
    options: ["Rızık", "Nimet", "Yemek", "Hediye"],
    correct: "Rızık",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_274",
    question: "Aşağıdakilerden hangisi son kutsal kitaptır?",
    options: ["Kur’an-ı Kerim", "İncil", "Zebur", "Tevrat"],
    correct: "Kur’an-ı Kerim",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_275",
    question: "Bir kimsenin dinin buyruklarını yerine getirmek için yaptığı iş, eylem ve ibadete ne ad verilir.",
    options: ["Din", "Şahadet", "Amel", "İtaat"],
    correct: "Amel",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_276",
    question: "Kalbiyle inanmadığı halde diliyle inandığını söyleyen kimseye ne ad verilir?",
    options: ["Müşrik", "Münafık", "Kafir", "Mecusi"],
    correct: "Münafık",
    difficulty: "hard",
    category: "İtikad"
  },
  {
    id: "mil_q_277",
    question: "Kur’an’da “alemlere rahmet” olarak gönderildiği bildirilen peygamber kimdir?",
    options: ["Hz. İbrahim", "Hz. İsa", "Hz. Musa", "Hz. Muhammed"],
    correct: "Hz. Muhammed",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_278",
    question: "“Muhammedü’l-Emin” hangi anlama gelmektedir?",
    options: ["Muhammed Peygamber", "Sevilen Muhammed", "Güvenilir Muhammed", "Değerli Muhammed"],
    correct: "Güvenilir Muhammed",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_279",
    question: "Aşağıdaki peygamberlerden hangisi özellikle “emin” adıyla nitelenmiştir?",
    options: ["Hz. İsa", "Hz. Muhammed", "Hz. Musa", "Hz. Adem"],
    correct: "Hz. Muhammed",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_280",
    question: "Peygamberimiz’in Mekke’den hicret etmeden önce yanındaki emanetlerin sahiplerine teslim edilmesi için Hz. Ali’yi görevlendirmesi O’nun daha çok hangi özelliğinin bir ifadesidir?",
    options: ["Alçakgönüllülüğünün", "Hoşgörüsünün", "Güvenilirliğinin", "Adaletinin"],
    correct: "Güvenilirliğinin",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_281",
    question: "Peygamberimiz, Mekke’den hicret ederken, korunması için kendisine bırakılmış emanetleri neden Hz. Ali’ye teslim etmiştir?",
    options: ["İhtiyaçlarını karşılaması için", "Malları sahiplerine geri vermesi için", "Daha sonra kendisine getirmesi için", "Hz. Ali istediği için"],
    correct: "Malları sahiplerine geri vermesi için",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_282",
    question: "Peygamberimiz’in insanlarla ilişkilerinde din ve akrabalık farkı gözetmemesi O’nun daha çok hangi özelliğinin bir ifadesidir?",
    options: ["Adaletinin", "Güvenilirliğinin", "Cömertliğinin", "Hoşgörüsünün"],
    correct: "Adaletinin",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_283",
    question: "“Ey efendimiz ve Efendimiz’in oğlu!” diyerek kendini öven bir sahabiye Peygamberimiz şöyle karşılık verdi: “Ey insanlar! Günahlardan sakının, şeytan sizi yanıltmasın. Ben Abdullah’ın oğlu Muhammed’im, Allah’ın kulu ve elçisiyim. Beni Allah’ın çıkardığı makamdan daha yukarı çıkarmanızdan hoşlanmam.” Bu olay Peygamberimiz’in hangi sıfatı ile ilgilidir?",
    options: ["Alçakgönüllülük", "Cömertlik", "Adalet", "Sabır"],
    correct: "Alçakgönüllülük",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_284",
    question: "“Peygamberimiz üç günden fazla elinde mal bekletmez, o mal dağıtılmadıkça evine uğramazdı.” Bu ifade, Peygamberimiz’in daha çok hangi özelliğini anlatmaktadır?",
    options: ["Doğruluk", "Sabır", "Hoşgörü", "Cömertlik"],
    correct: "Cömertlik",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_285",
    question: "Peygamberimiz en çok hangi ay içerisinde daha cömertçe hareket ederdi?",
    options: ["Ocak", "Muharrem", "Ramazan", "Nisan"],
    correct: "Ramazan",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_286",
    question: "“Vallahi hırsızlık yapan kızım Fatıma da olsa cezalandırırdım” sözü Peygamberimiz’in daha çok hangi özelliğini ön plana çıkarmaktadır?",
    options: ["Adaletini", "Alçakgönüllülüğünü", "Sabrını", "Cesaretini"],
    correct: "Adaletini",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_287",
    question: "Peygamberimiz, karşısında korkudan titreyen birine aşağıdaki sözlerden hangisini söylemiştir:",
    options: ["“Korkma! Ben hükümdar değilim. Kuru et pişirerek karnını doyuran bir kadının oğluyum.”", "“Korkma! Ben bir peygamberim”", "“Korkmana gerek yok. Sana bir şey yapacak değilim.”", "“Korkma! Ben peygamberim, ama annem de hep yoksulluk içinde yaşadı.”"],
    correct: "“Korkma! Ben hükümdar değilim. Kuru et pişirerek karnını doyuran bir kadının oğluyum.”",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_288",
    question: "“Vallahi hırsızlık yapan kızım Fatıma da olsa cezalandırırdım” sözü hangi olay için söylenmiştir?",
    options: ["Kızı hırsızlık yaptığı zaman", "Saygın bir kadının cezalandırılmasının uygun olmayacağı söylendiği zaman,", "Hırsızlığın ne kadar kötü bir davranış olduğunu anlatmak için", "Fatıma’yı uyarmak için"],
    correct: "Saygın bir kadının cezalandırılmasının uygun olmayacağı söylendiği zaman,",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_289",
    question: "Peygamberimiz’in ilk eşi ve evlilik süresi aşağıdakilerin hangisinde doğru olarak verilmiştir?",
    options: ["Aişe – 25", "Hatice – 25", "Hatice - 22", "Aişe - 22"],
    correct: "Hatice – 25",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_290",
    question: "Peygamberimiz eşiyle zaman zaman spor müsabakaları yapardı. Aşağıdaki şıklardan hangisinde eşi ve yaptığı müsabaka doğru olarak verilmiştir?",
    options: ["Hz. Hatice - Atıcılık", "Hz. Aişe - Koşu", "Hz. Zeynep - Koşu", "Hz. Aişe - Atıcılık"],
    correct: "Hz. Aişe - Koşu",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_291",
    question: "Bir eş olarak Peygamberimizi tanımlamada uygun düşmeyen şık hangisidir?",
    options: ["Peygamberimiz aile fertlerine karşı nazik ve yumuşaktı.", "Peygamberimiz, çok işi olduğu için, ailesine uğrayacak zaman bulamıyordu.", "Peygamberimiz aile fertlerine yardımcı olmaktan geri durmazdı.", "Peygamberimiz Allah’ın emirlerini ilk olarak aile fertlerine aktarırdı."],
    correct: "Peygamberimiz, çok işi olduğu için, ailesine uğrayacak zaman bulamıyordu.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_292",
    question: "Aile hayatıyla ilgili olarak “Ailesine Resulüllah’tan daha şefkatli kimseyi görmedim” diyen ve Peygamberimiz’in evinde büyüyen sahabi kimdir?",
    options: ["Hz. Ebubekir", "Hz. Ali", "Hz. Enes", "Hz. Hüseyin"],
    correct: "Hz. Enes",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_293",
    question: "“Gönül üzülür, gözler yaşarır ama yine de biz Rabbimizin hoşuna giden sözler söyleriz” sözü niçin söylenmiştir?",
    options: ["Ağlamanın erkeklere yakışmadığını anlatmak için", "Ağlamakla bir şey elde etmenin mümkün olmadığını söylemek için", "Amcası Ebu Talib’in vefatına ağlamanın fayda vermeyeceğini söylemek için", "Oğlu İbrahim’in vefatına ağlamasını yadırgamanın doğru olmadığını anlatmak için"],
    correct: "Oğlu İbrahim’in vefatına ağlamasını yadırgamanın doğru olmadığını anlatmak için",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_294",
    question: "Bir baba olarak Peygamberimizi tanımlamada uygun düşmeyen şık hangisidir?",
    options: ["Peygamberimiz çocuklarına karşı şefkat ve sevgi dolu bir babaydı.", "Peygamberimiz çocuklarının sorunları ve ihtiyaçlarıyla daima ilgilenirdi.", "Peygamberimiz yaramaz çocukları bazen dövmenin iyi olacağını söylemiştir.", "Peygamberimiz, namazda babalarının sırtına çıkan çocuklara kötü davranılmamasını istemiştir."],
    correct: "Peygamberimiz yaramaz çocukları bazen dövmenin iyi olacağını söylemiştir.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_295",
    question: "“Peygamberimiz, her yanına geldiğinde ayağa kalkar, onu alnından öper ve yerine oturturdu.” Bu söz, Peygamberimiz’in hangi çocuğu için söylenmiştir?",
    options: ["Hz. Zeynep", "Hz. Ümmü Gülsüm", "Hz. İbrahim", "Hz. Fatıma"],
    correct: "Hz. Fatıma",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_296",
    question: "Peygamberimiz’in torunlarının adı hangisinde doğru olarak verilmiştir?",
    options: ["Ahmet – Mehmet", "Hasan – Hüseyin", "Ayşe – Fatma", "Zeynep - Hatice"],
    correct: "Hasan – Hüseyin",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_297",
    question: "Kim başkalarına merhametli davranmazsa Allah da ona merhametli davranmaz” sözü hangi olay üzerine söylenmiştir?",
    options: ["Peygamberimiz’i torunlarını severken gören birinin “benim on çocuğum var; hiçbirini kucaklayıp öpmedim” demesi üzerine", "Çocuklarını döven bir babayı görmesi üzerine", "Allah’ın merhametinin sınırsız olduğunu anlatmak istemiştir.", "Bir hayvana kötü davranan birini görmesi üzerine"],
    correct: "Peygamberimiz’i torunlarını severken gören birinin “benim on çocuğum var; hiçbirini kucaklayıp öpmedim” demesi üzerine",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_298",
    question: "“Benim 10 çocuğum var. Şimdiye kadar hiçbirini kucaklayıp öpmedim” sözüne Peygamberimiz nasıl bir karşılık vermiştir?",
    options: ["“Kim başkalarına merhametli davranmazsa Allah da ona merhametli davranmaz.”", "“Sen pek katı kalpli biriymişsin. Git çocuklarını öp.”", "“On çocuk çok fazla. Çok çocuk sahibi olmak iyi değildir.”", "“Zaten çocukları öpmek iyi değildir. Kucaklaman yeterli.”"],
    correct: "“Kim başkalarına merhametli davranmazsa Allah da ona merhametli davranmaz.”",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_299",
    question: "Peygamberimiz’in “Allah’ım ben onları seviyorum, sen de onları sev” dediği kimlerdir?",
    options: ["Torunları: Hz. Hasan ve Hz. Hüseyin", "Çocukları : Fatıma ve Zeynep", "Torunları : Ümame ve Üsame", "Çocukları: İbrahim ve Abdullah"],
    correct: "Torunları: Hz. Hasan ve Hz. Hüseyin",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_300",
    question: "Hz. Hasan ve Hz. Hüseyin’in anne ve babası kimdir?",
    options: ["Aişe – Muhammed", "Hatice – Muhammed", "Fatıma – Hüseyin", "Fatıma – Ali"],
    correct: "Fatıma – Ali",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_301",
    question: "Bir komşu olarak Peygamberimiz’i tanımlamada uygun düşmeyen şık hangisidir?",
    options: ["Peygamberimiz komşularına saygı gösterir ve onlara kibar davranırdı.", "Peygamberimiz komşularına selam verir ve güler yüz gösterirdi.", "Peygamberimiz “komşusu açken tok yatan bizden değildir” buyurmuştur.", "Peygamberimiz komşularına bazen saygı gösterir ve kibar davranırdı."],
    correct: "Peygamberimiz komşularına bazen saygı gösterir ve kibar davranırdı.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_302",
    question: "“….. açken tok yatan bizden değildir.” Boşluğa aşağıdakilerden hangisi uymaktadır?",
    options: ["Komşusu", "Arkadaşı", "Annesi", "Kardeşi"],
    correct: "Komşusu",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_303",
    question: "“Bir hediyem ve iki komşum var. Hediyeyi hangisine vereyim” diye soran Hz. Aişe’ye Peygamberimiz nasıl bir cevap vermiştir?",
    options: ["En sevdiğin arkadaşına", "En yakın akrabana", "En yakın komşuna", "En sevdiğin komşuna"],
    correct: "En yakın komşuna",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_304",
    question: "Cebrail’in Peygamberimiz’e iyilik etmesi konusunda çok fazla tavsiyede bulunduğu ve “neredeyse mirasçı kılınacaklardı” dediği kişiler kimlerdir?",
    options: ["Komşular", "Arkadaşlar", "Dostlar", "Akrabalar"],
    correct: "Komşular",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_305",
    question: "Bir arkadaş olarak Peygamberimiz’i tanımlayan en uygun şık hangisidir?",
    options: ["Peygamberimiz arkadaşları için güven kaynağıydı.", "Peygamberimiz arkadaşlarına karşı çok şakaçıydı.", "Peygamberimiz arkadaşlarını her şeyden çok severdi.", "Peygamberimiz arkadaşlarıyla zaman geçirmekten çok hoşlanırdı."],
    correct: "Peygamberimiz arkadaşları için güven kaynağıydı.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_306",
    question: "Hicret yolculuğu sırasında Peygamberimiz’e arkadaşlık yapan kişi kimdir?",
    options: ["Hz. Ali", "Hz. Ebubekir", "Hz. Ömer", "Hz. Osman"],
    correct: "Hz. Ebubekir",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_307",
    question: "Ebu Talip sıkıntıya düştüğünde Peygamberimiz amcasının geçimini kolaylaştırmak için onun oğlu Ali’yi yanına alarak bakımını üstlendi. Bu olay Peygaberimiz’in daha çok hangi özelliğini anlatır?",
    options: ["Cömertlik", "Merhamet", "Vefa ve yardımseverlik", "Sabır ve tevekkül"],
    correct: "Vefa ve yardımseverlik",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_308",
    question: "Peygamberimiz’in faiz ve kan davasını ilk olarak akrabaları arasında kaldırmasının anlamı nedir?",
    options: ["Akrabalık ilişkilerine önem vermesi", "Önce yakınlarından başlayarak Allah’ın emirlerinin uygulanmasında adil olduğunu göstermesi", "Akrabalarını çok sevmesi", "Gerekirse yakınlarını cezalandırmaktan geri durmayacağı"],
    correct: "Önce yakınlarından başlayarak Allah’ın emirlerinin uygulanmasında adil olduğunu göstermesi",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_309",
    question: "Peygamberimiz’in ilk kaldırdığı kan davası hangisidir?",
    options: ["Amcası Abbas’ın kan davası", "Dedesi Abdulmuttalib’in kan davası", "Amcası Abbas’ın torunu Rebia’nın kan davası", "Dedesi Abdulmuttalib’in torunu Rebia’nın kan davası"],
    correct: "Dedesi Abdulmuttalib’in torunu Rebia’nın kan davası",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_310",
    question: "Peygamberimiz’in ilk kaldırdığı faiz davası hangisidir?",
    options: ["Dedesi Abdulmuttalib’in torunu Rebia’nın faizi", "Amcası Abbas’ın faizi", "Dedesi Abbas’ın torunu Rebia’nın faizi", "Amcası Abdulmuttalib’in faizi"],
    correct: "Amcası Abbas’ın faizi",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_311",
    question: "Peygamberimiz’in, İslam medeniyetinin evrensel ve insani ilkeler çerçevesinde temellerini attığı ve Medinelilerden bu ilkelere uyacaklarına dair söz aldığı ilk olay hangisidir?",
    options: ["Veda Hutbesi", "Akabe Biatları", "Medine Vesikası", "Veda Haccı"],
    correct: "Akabe Biatları",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_312",
    question: "Akabe biatlarında aşağıdakilerden hangisine yer verilmemiştir?",
    options: ["İbadet etmenin önemi", "Hırsızlık yapmamak", "Zina yapmamak", "Allah’a ortak koşmamak"],
    correct: "İbadet etmenin önemi",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_313",
    question: "Aşağıdakilerden hangisi Akabe biatlarında yer almaktadır?",
    options: ["İftira etmekten sakınmak", "İbadet etmenin önemi", "Namaz kılmanın fazileti", "Oruç tutmanın önemi"],
    correct: "İftira etmekten sakınmak",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_314",
    question: "Peygamberimiz’in evrensel ve insani ilkelerinin özetlendiği son konuşmasının adı nedir?",
    options: ["Akabe Biatı", "Medine Sözleşmesi", "Veda Hutbesi", "Veda Haccı"],
    correct: "Veda Hutbesi",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_315",
    question: "Veda Hutbesi’nde aşağıdakilerden hangisine yer verilmemiştir?",
    options: ["Emanetleri sahiplerine vermek", "Kadınlara iyi davranmak", "Hırsızlık ve zinadan uzak durmak", "Selam vermek"],
    correct: "Selam vermek",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_316",
    question: "Aşağıdakilerden hangisi Veda Hutbesi’nde yer almaktadır?",
    options: ["Selam vermenin önemi", "Eğitim ve öğretimin önemi", "İnsanların eşit olduğu fikri", "Kurban kesmenin fazileti"],
    correct: "İnsanların eşit olduğu fikri",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_317",
    question: "Veda Hutbesi’nde Peygamberimiz’in Müslümanlara bıraktığı iki rehber aşağıdakilerden hangisidir?",
    options: ["Kur’an-ı Kerim – Sünnet", "Sünnet - İcma", "Kitap – İcma", "Kur’an-ı Kerim - Siyer"],
    correct: "Kur’an-ı Kerim – Sünnet",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_318",
    question: "Veda Hutbesi’nde en çok hangi konular üzerinde durulmuştur?",
    options: ["Sosyal konular", "Siyasal konular", "İbadet konuları", "İtikad konuları"],
    correct: "Sosyal konular",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_319",
    question: "Peygamberimiz’in, amcası Hz. Hamza’yı öldüren Vahşi’yi bile affetmesi onun hangi özelliğini en iyi anlatır?",
    options: ["Sabır ve Hoşgörüsünü", "Tevekkülünü", "Adaletini", "Güvenilirliğini"],
    correct: "Sabır ve Hoşgörüsünü",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_320",
    question: "Peygamberimiz’in Hz. Aişe’yle yaptığı iki koşu yarışması nasıl neticelenmiştir?",
    options: ["İlkinde Peygamberimiz, ikincisinde Hz. Aişe kazanmıştı.", "İlkinde Hz. Aişe, ikincisinde Peygamberimiz kazanmıştı.", "Her iki yarışmada da Peygamberimiz kazanmıştır.", "Her iki yarışmada da Hz. Aişe kazanmıştır."],
    correct: "İlkinde Hz. Aişe, ikincisinde Peygamberimiz kazanmıştı.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_321",
    question: "Peygamberimiz’in, kızı Fatıma’nın kendisine hizmetçi isteğini reddetmesi O’nun daha çok hangi özelliğiyle ilgilidir?",
    options: ["Cömertliği", "Sade yaşama isteği", "Alçakgönüllülüğü", "Adaleti"],
    correct: "Sade yaşama isteği",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_322",
    question: "Bir baba olarak Peygamberimizi tanımlayan en uygun ifade hangisidir?",
    options: ["Peygamberimiz sabahları çocuklarının kapılarının önüne giderek onları namaza kaldırırdı.", "Peygamberimiz çocuklarına her istediklerini verirdi.", "Peygamberimiz kızlarını daha çok severdi.", "Peygamberimiz erkek çocuklarını daha çok severdi."],
    correct: "Peygamberimiz sabahları çocuklarının kapılarının önüne giderek onları namaza kaldırırdı.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_323",
    question: "Bir eş olarak Peygamberimizi tanımlayan en uygun ifade hangisidir?",
    options: ["Peygamberimiz ev süpürmenin, elbise dikmenin erkek işi olmadığını düşünürdü.", "Peygamberimiz, eşine danışma gereği duymazdı.", "Peygamberimiz eşine danışmaktan çekinmezdi.", "Peygamberimiz, eşiyle oynamayı ayıp sayardı."],
    correct: "Peygamberimiz eşine danışmaktan çekinmezdi.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_324",
    question: "Bir komşu olarak Peygamberimizi tanımlayan en uygun ifade hangisidir?",
    options: ["Peygamberimiz evde pişen yemekte komşunun da hakkı olduğunu söylerdi.", "Peygamberimiz kötü komşuyu azarlamanın gerekli olduğunu düşünürdü.", "Peygamberimiz komşularına miras bırakmıştır.", "Peygamberimiz sevdiği komşularına öncelik verirdi."],
    correct: "Peygamberimiz evde pişen yemekte komşunun da hakkı olduğunu söylerdi.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_325",
    question: "Aşağıdaki ifadelerden hangisi Peygamberimiz’in doğruluk sıfatı ile bağdaşmamaktadır?",
    options: ["Peygamberimiz asla yalan söylemezdi.", "Peygamberimiz kendisine eziyet edenlerin mallarını korumanın gerekli olmadığını düşünürdü.", "Peygamberimiz, doğru olmayan şakalar yapmazdı.", "Peygamberimiz emanete ihanet etmezdi."],
    correct: "Peygamberimiz kendisine eziyet edenlerin mallarını korumanın gerekli olmadığını düşünürdü.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_326",
    question: "Aşağıdaki ifadelerden hangisi Peygamberimiz’in adaleti ile bağdaşmamaktadır?",
    options: ["Peygamberimiz, Yahudilerin haklarını korumanın kendi görevi olmadığını düşünürdü.", "Peygamberimiz, başka dinden olanların haklarını aramaktan geri durmazdı.", "Peygamberimiz zorluklarla karşılaştığında dahi adaletten ayrılmazdı.", "Peygamberimiz, kendi aleyhine de olsa adil davranmaktan çekinmezdi."],
    correct: "Peygamberimiz, Yahudilerin haklarını korumanın kendi görevi olmadığını düşünürdü.",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_327",
    question: "Peygamber Efendimiz hangi şehirde doğmuştur?",
    options: ["Medine", "Kudüs", "Cidde", "Mekke"],
    correct: "Mekke",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_328",
    question: "Peygamber Efendimiz’in doğduğu dönemde Mekke´de ki insanların en önemli geçim kaynağı ne idi?",
    options: ["Tarım", "Hayvancılık", "Madencilik", "Ticaret"],
    correct: "Ticaret",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_329",
    question: "Peygamberimiz Mekke yönetiminde söz sahibi olan ve hacıların ağırlanması gibi görevleri de üstlenen bir soya mensuptur. Geldiği soyun adı nedir?",
    options: ["Kureyşin Haşimoğulları kolundan", "Kureyşin Hanif soyunda", "Kureyşin Aşıroğulları kolundan", "Kureyşin Abbasoğulları kolundan"],
    correct: "Kureyşin Haşimoğulları kolundan",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_330",
    question: "Peygamberimiz’in babasının adı nedir?",
    options: ["Abdulmuttalip", "Abdullah", "Abbas", "Hamza"],
    correct: "Abdullah",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_331",
    question: "Efendimiz’in ilk eşinin adı nedir?",
    options: ["Fatıma", "Aişe", "Ümmü Gülsüm", "Hatice"],
    correct: "Hatice",
    difficulty: "easy",
    category: "Siyer"
  },
  {
    id: "mil_q_332",
    question: "Pegamber Efendimiz hangi tarihte dünyaya geldi?",
    options: ["18 Mart 571", "20 Nisan 571", "20 Nisan 570", "18 Mart 570"],
    correct: "20 Nisan 571",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_333",
    question: "Peygamberimiz’e “göklerde ve yerde herkes tarafından övülsün” diye Muhammed ismini veren kimdir?",
    options: ["Babası Abdullah", "Amcası Abbas", "Annesi Amine", "Dedesi Abdulmuttalip"],
    correct: "Dedesi Abdulmuttalip",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_334",
    question: "Peygamberimiz, Mekke sıcak ve kurak olduğundan 4 yaşına kadar çocukluğunu süt annesinin yanında geçirdi. Yanında kaldığı süt annesinin adı nedir?",
    options: ["Halime", "Amine", "Aişe", "Hatice"],
    correct: "Halime",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_335",
    question: "Efendimiz’in süt kardeşinin adı nedir?",
    options: ["Halime", "Aişe", "Şeyma", "Rukiyye"],
    correct: "Şeyma",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_336",
    question: "Efendimiz henüz dünyaya gelmeden babasını, daha çocuk yaşlarda annesini kaybetti. Annesi Hz. Amine vefat ettiğinde Peygamberimiz kaç yaşında idi?",
    options: ["5", "6", "7", "8"],
    correct: "6",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_337",
    question: "Efendimiz çocukluk ve gençlik yıllarını akrabalarından kimin yanında geçirdi?",
    options: ["Amcası Abbas", "Amcası Ebu Talip", "Amcası Hamza", "Amcası Ebu Leheb"],
    correct: "Amcası Ebu Talip",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_338",
    question: "Peygamberimiz’in ilk ticaret yolculuğuna çıktığında Rahib Bahira ile karşılaştığı yer hangisidir?",
    options: ["Yemen", "Şam", "Bursa", "Busra"],
    correct: "Busra",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_339",
    question: "Peygamberimiz’e Mekke´liler “Muhammed’ül-Emin“ diyorlardı. Peygamber Efendimiz’in daha çok hangi özelliğinden dolayı bu ismi vermişlerdi?",
    options: ["Cömert ve iyiliksever olmasından", "Büyüklere karşı hürmetli olmasından", "Dürüst ve güvenilir olmasından", "Güler yüzlü ve tatli dilli olmasından"],
    correct: "Büyüklere karşı hürmetli olmasından",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_340",
    question: "Mekke´nin ileri gelenlerince kötülüklerin arttığı, zayıf ve güçsüzlerin haklarının yendiği bir sırada kurulan ve Peygamberimiz’in de katıldığı “Hilful Fudul“ teşkilatının amacı ne idi?",
    options: ["İnsanlara iş bulmak", "Suçlunun karşısında birlik olup haksızlığa uğrayanlara yardımcı olmak.", "Mazlumların maddi ihtiyaclarını karşılamak", "İnsanların eğitimine yardımcı olmak"],
    correct: "Suçlunun karşısında birlik olup haksızlığa uğrayanlara yardımcı olmak.",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_341",
    question: "Efendimiz’in amcasının maddi durumu iyi olmadığından yanına aldığı ve daha çok kendi yanında yetiştirdiği amcasının oğlunun adı nedir?",
    options: ["Hz. Ali", "Hz. Ebubekir", "Hz. Ömer", "Hz. Osman"],
    correct: "Hz. Ali",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_342",
    question: "Aşağıdakilerden hangisi Efendimiz’in çocuklarından biri değildir?",
    options: ["Rukiye", "Zeyneb", "Kasım", "Zeyd"],
    correct: "Zeyd",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_343",
    question: "Efendimiz’e ilk vahyi getiren meleğin adı nedir?",
    options: ["Azrail", "Cebrail", "Mikail", "İsrafil"],
    correct: "Cebrail",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_344",
    question: "İslam´da ilk emir nedir?",
    options: ["Namaz", "Oruc", "Hac", "Oku"],
    correct: "Oku",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_345",
    question: "İlk vahiy Peygamberimiz’e hangi yılda geldi?",
    options: ["610", "623", "571", "632"],
    correct: "610",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_346",
    question: "Allah´ın Kur´an’dan Peygamberimiz’e indirdiği ilk ayetler hangisidir?",
    options: ["Fatiha Suresi", "Kevser Suresi", "Alak Suresi’nin ilk 5 ayeti", "Yasin Suresi"],
    correct: "Alak Suresi’nin ilk 5 ayeti",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_347",
    question: "Peygamberimiz’e ilk vahiy gelince başından geçenleri kime anlattı? Kim kendisini teselli etmişti?",
    options: ["Amcası Ebu Talip", "Dedesi Abdulmuttalib", "Amcası Hamza", "Eşi Hz. Hatice"],
    correct: "Eşi Hz. Hatice",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_348",
    question: "Peygamberimiz’e ilk vahiy gelince Hz. Hatice’nin kendisine götürdüğü ve “Bu Allah´ın Musa´ya ve İsa´ya gönderdiği mesajdır“ diyerek Peygamberimiz’i teselli eden kimdir?",
    options: ["Hz.Ali", "Varaka", "Abdulmuttalib", "Ebu Talib"],
    correct: "Varaka",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_349",
    question: "Allah Teala, Peygamberimiz’e ilk vahiyden sonra yakın çevreye İslam´ın duyrulmasını emreden ayetler indirdi. Bunlar hangi ayetler idi?",
    options: ["Müddesir Suresi’nin ilk 5 ayet", "Alak Suresi’nin ilk 5 ayeti", "Bakara Suresi’nin ilk 5 ayeti", "Müzzemmil Suresi’nin ilk 5 ayeti"],
    correct: "Müddesir Suresi’nin ilk 5 ayet",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_350",
    question: "Peygamberimiz’e ve getirdiği yüce hakikatlere ilk inanan hanım kim idi?",
    options: ["Hz. Aişe", "Hz. Amine", "Hz. Hatice", "Hz. Fatıma"],
    correct: "Hz. Hatice",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_351",
    question: "Aşağıdakilerden hangisi Peygamberimiz’e ilk iman edenlerden biri değildir?",
    options: ["Hz. Ali", "Hz. Hatice", "Hz. Ebubekir", "Hz. Ömer"],
    correct: "Hz. Ömer",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_352",
    question: "Müslümanlar Mekke´de daha çok gizlice nerede bir araya gelerek Allah´ın emirlerini öğrenip, ibadet ediyorlardı?",
    options: ["Peygamberimiz’in evinde", "Erkam´ın evinde", "Ebu Bekir´ in evinde", "Hz. Ali´nin evinde"],
    correct: "Erkam´ın evinde",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_353",
    question: "Aşağıdakilerden hangisi müslümanlara baskı ve işkence yapanlardan biridir?",
    options: ["Varaka", "Bahira", "Ümmü Eymen", "Ebu Cehil"],
    correct: "Ebu Cehil",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_354",
    question: "Kur´an’da, hakkında hususi bir süre olan, Peygamber Efendimiz’in yakınlarına başlattığı davete ilk itirazı yapan, kızları ve oğulları nişanlı iken baskı yaparak oğullarını ayıran şahıs kimdir?",
    options: ["Ebu Cehil", "Ebu Leheb", "Ebu Süfyan", "Ebu İshak"],
    correct: "Ebu Leheb",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_355",
    question: "Aşağıdaki şahısların hangisi şehit olan ilk müslümanlardan biridir?",
    options: ["Yasin", "Yasir", "Usame", "Zeyd"],
    correct: "Yasir",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_356",
    question: "Hz. Ömer´in müslüman olmasına etki eden en önemli hadise nedir?",
    options: ["Tüm akrabalarının müslüman olması", "Mekke´nin ileri gelenlerinin müslüman olması", "Dinlediği Kur´an ayetleri", "Dinlediği güzel sözler"],
    correct: "Dinlediği Kur´an ayetleri",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_357",
    question: "“Bir elime güneşi bir elime ayı verseler de bu davamdan vazgeçmem” sözü kime aittir?",
    options: ["Hz. Ali", "Hz. Ebubekir", "Hz. Ömer", "Hz. Muhammed"],
    correct: "Hz. Muhammed",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_358",
    question: "İslam´dan önce Arabistan´da putlara tapmayan, kötülükten uzak duran, bir olan Allah’a inanan kimseler de vardı. Bunlara ne isim veriliyordu?",
    options: ["Müslüman", "Hanif", "Hrıstiyan", "Yahudi"],
    correct: "Yahudi",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_359",
    question: "Müslümanlar Mekke´de kendilerine yapılan eziyetten dolayı ilk defa nereye hicret ettiler?",
    options: ["Medine", "Taife", "Habeşistan", "Şam"],
    correct: "Habeşistan",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_360",
    question: "Habeşistan’a hicret eden müslümanların arasında bulunan ve Peygamberimiz’in de damadı olan sahabi kimdir?",
    options: ["Hz. Osman", "Hz. Ali", "Hz. Ebubekir", "Hz. Ömer"],
    correct: "Hz. Osman",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_361",
    question: "Müslümanların ilk hicret yurdu olan Habeşistan’da Müslümanları iyi bir şekilde ağırlayan ve onlara iyilikte bulunan hükümdarın ismi nedir?",
    options: ["Habeşi", "Necaşi", "Harisi", "Haşimi"],
    correct: "Necaşi",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_362",
    question: "Habeşistan kralı Necaşi, Müslümanları şikayet eden müşriklere nasıl davrandı?",
    options: ["Müslümanları iade etti.", "Müslümanları haksız buldu.", "Himayesinde istedikleri kadar kalabileceklerini söyledi.", "Mekke’li müşrikler istediklerini aldılar."],
    correct: "Himayesinde istedikleri kadar kalabileceklerini söyledi.",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_363",
    question: "Mekkeliler, müslümanları dinlerinden döndürmek için, boykot kararı aldılar ve müslümanlara üç yıl boykot uyguladılar. Alınan boykot kararını nereye asarak ilan ettiler?",
    options: ["Evlere", "Okullara", "Caddelere", "Kabe’ye"],
    correct: "Kabe’ye",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_364",
    question: "Mekkelilerin müslümanlara uyguladakları ve büyük sıkıntı yaşattıkları boykot kaç yıl sürdü?",
    options: ["1 Yıl", "2 Yıl", "3 Yıl", "4 Yıl"],
    correct: "3 Yıl",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_365",
    question: "Peygamberimiz (sav) çok sevdiği iki değerli varlığını kaybedince bu yıla “Hüzün Yılı” dendi. Kimler vefat edince o yıla hüzün yılı dendi ?",
    options: ["Hz. Hatice ve Ebu Talip", "Hz. Aişe ve Ebu Bekir", "Hz. Hatice ve Abdulmuttalip", "Hz. Fatıma ve Hz. Hamza"],
    correct: "Hz. Hatice ve Ebu Talip",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_366",
    question: "Hz. Hatice ve amcası Ebu Talip vefat edince Peygamberimiz’in ve Müslümanların sıkıntıları ve üzüntüleri nedeniyle bu yıla ne dendi ?",
    options: ["Hazan Yılı", "Hüzün Yılı", "Ölüm Yılı", "Ölüm Dönemi"],
    correct: "Hüzün Yılı",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_367",
    question: "Mekkeliler Peygamber Efendimize “Hasta isen tedavi ettirelim, amacın kral olmaksa seni başımıza kral yapalım, para istiyorsan Mekke’nin en zengini yapalım, niyetin evlenmekse Mekke’nin en güzel kızıyla evlendirelim… » diye teklifte bulunuyorlardı. Bunun karşılığında ne istiyorlardı ?",
    options: ["Mekke’yi terk etmesini", "İslam’ı anlatmaktan vazgeçmesini", "Medine’ye göç etmesini", "Kabe’ye girmemesini"],
    correct: "İslam’ı anlatmaktan vazgeçmesini",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_368",
    question: "Peygamber Efendimiz amcasının ölümünden sonra Mekke dışında İslam’ı anlatmaya karar verince yardımcısı Zeyd’le beraber hangi şehre giderek insanları İslam’a davet etti?",
    options: ["Medine", "Yemen", "Şam", "Taif"],
    correct: "Taif",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_369",
    question: "Peygamber Efendimiz amcasının ölümünden sonra Taif’e İslam’ı anlatmak için gittiğinde yanında bulunan sahabi kimdi?",
    options: ["Hz. Zeyd", "Hz. Ali", "Hz Ömer", "Hz. Hasan"],
    correct: "Hz. Zeyd",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_370",
    question: "Peygamberimiz’in İslam’ı tebliğ için gittigi Taif dönüşü dinlenmek için bir müddet kaldığı bahçede duyduğu besmeleye şaşıran ve Peygamberimiz’in telkini ile müslüman olan şahsın adı nedir?",
    options: ["Varaka", "Addas", "Necaşi", "Ümmü Eymen"],
    correct: "Addas",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_371",
    question: "Peygamberimiz’in Taif yolculugu sonrası Kudüs’teki Mescid-i Aksa ve oradan Cenab-ı Hakk’ın yüce makamlarına çıkarıldığı gece yolculuğuna ne denir?",
    options: ["Mevlid", "Kadir", "İsra ve Mirac", "Berat"],
    correct: "İsra ve Mirac",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_372",
    question: "Peygamberimiz’in Mirac gecesinde Allah’ın katına yükseldiği Kudüs’deki mescidin adı nedir?",
    options: ["Mescid-i Haram", "Mescid-i Nebevi", "Mescid-i İsra", "Mescid-i Aksa"],
    correct: "Mescid-i Aksa",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_373",
    question: "Peygamberimiz’in İsra ve Mirac mucizesini duyan müşrikler, doğruca O’nun en sadık dostuna koştular. Ama ondan da “o söylemişse doğrudur” cevabını aldılar. Bu cevabı veren Peygamberimiz’in en sadık dostu kimdi?",
    options: ["Hz. Ebu Bekir", "Hz. Ali", "Hz. Ömer", "Hz. Osman"],
    correct: "Hz. Ebu Bekir",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_374",
    question: "Peygamberimiz’in Allah’ın bir armağanı olarak meydana gelen gece yolculuğu yaptığı Mescid-i Aksa’nın da bulundugu şehir hangisidir?",
    options: ["Mekke", "Kudüs", "Medine", "Şam"],
    correct: "Kudüs",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_375",
    question: "“Yesrib“ aşağıdaki sehirlerden hangisinin eski ismidir?",
    options: ["Mekke", "Medine", "Kudüs", "Taif"],
    correct: "Medine",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_376",
    question: "Peygamberimiz, kendisi hicret etmeden önce İslam’ı anlatmak ve öğretmek üzere hangi sahabi’yi Medine’ye gönderdi?",
    options: ["Hz. Ali", "Hz. Ömer", "Hz. Osman", "Musab b. Umeyr"],
    correct: "Musab b. Umeyr",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_377",
    question: "Peygamberimiz (sav) Akabe görüşmeleri neticesinde yanında Hz. Ebu Bekir ile birlikte hangi şehre göç etti?",
    options: ["Medine", "Mekke", "Kudüs", "Taif"],
    correct: "Medine",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_378",
    question: "Peygamber Efendimiz’in hicret için yola çıkacağında kendi yatağında kalmasını istediği, sahipleri müşrik de olsa yanında bulunan emanetleri sahiplerine iade ederek arkasından Medine’ye gelmesini istediği sahabi kimdir?",
    options: ["Hz. Ebu Bekir", "Hz. Ali", "Hz. Ömer", "Hz. Osman"],
    correct: "Hz. Ali",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_379",
    question: "Medine’ye hicret eden Peygamberimiz, Medine’de hangi sahabenin evinde 7 ay kadar misafir kaldı?",
    options: ["Musab b. Umeyr", "Hz. Aişe", "Ebu Eyyub el Ensari", "Hz. Osman"],
    correct: "Ebu Eyyub el Ensari",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_380",
    question: "Mekke’den Medine’ye bütün mallarını bırakarak göç eden müslümanlara ne denir?",
    options: ["Sahabe", "Suffa", "Ensar", "Muhacir"],
    correct: "Muhacir",
    difficulty: "medium",
    category: "Siyer"
  },
  {
    id: "mil_q_381",
    question: "Aşağıdaki mescidlerden hangisi bütün müslümanlar için en önemli ve kutsal sayılan üç mescidden biri değildir?",
    options: ["Mescid-i Kuba", "Mescid-i Haram", "Mescid-i Nebevi", "Mescid- Aksa"],
    correct: "Mescid-i Kuba",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_382",
    question: "Mescid-i Nebevi’nin hemen yanı başına hem okul hem yatakhane olarak kullanılan büyükçe bir bölüm ayrıldı. Mescidin yanında eğitim için ayrılan bu yere ne denir?",
    options: ["Cami", "Mescid", "Suffa", "Mihrab"],
    correct: "Suffa",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_383",
    question: "Peygamber Efendimiz Medine’ye hicret ettiklerinde diğer dinlere mensup insanlar da vardı. Şehirde birliği sağlamak için onlarla iş birliği Antlaşması da yaptı. Aşağıdakilerden hangisi o dönemde Medine’de yaşayan diğer din mensuplarından biridir?",
    options: ["Mecusiler", "Hrıstiyanlar", "Budistler", "Yahudiler"],
    correct: "Yahudiler",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_384",
    question: "Medine’de müslümanları ve İslam’ı yok etmek isteyen müşriklere karşı Allah, müslümanlara savaş izni vererek ilk zaferi nasip etti. Bu savaşın adı nadir?",
    options: ["Bedir", "Uhud", "Hendek", "Tebük"],
    correct: "Bedir",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_385",
    question: "Müslümanların büyük acı yaşadığı, bir ara Peygamberimiz’in öldüğü haberinin yayıldığı, Hz.Hamza ve 70 kadar müslümanın şehit düştüğü savaş hangisidir?",
    options: ["Bedir", "Hendek", "Uhud", "Hudeybiye"],
    correct: "Hendek",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_386",
    question: "Medine’nin çevresinin hendeklerle çevrilerek Medine’nin korunduğu ve müşriklerin günlerce hendekleri geçemediklerinden İslam’ı yok etme ümitlerinin kırıldığı savaş hangisidir?",
    options: ["Bedir", "Uhud", "Hendek", "Hudeybiye"],
    correct: "Hendek",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_387",
    question: "Müslümanlar Mekke’den ayrılalı altı yıl olmuştu. Mekkeliler Medineli müslümanlarla bir antlaşma yaptılar. Antlaşma şartlarından bazıları: “Müslümanlar gelecek yıl Kabe’yi ziyaret edebilecekler, müslümanlardan biri dininden dönerse onu iade etmeyecekler” … Yapılan bu tarihi antlaşmaya ne denir?",
    options: ["Barış Antlaşması", "Akabe Antlaşması", "Hac Antlaşması", "Hudeybiye Antlaşması"],
    correct: "Hudeybiye Antlaşması",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_388",
    question: "Peygamberimiz Hudeybiye Antlaşması’ndan sonra komşu devletlerin hükümdarlarına İslam’a davet mektupları gönderdi. Aşağıdakilerden hangi ülkeye davet mektubu gitmemiştir?",
    options: ["Irak’a", "Habeşistan’a", "Mısır’a", "İran’a"],
    correct: "Irak’a",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_389",
    question: "Peygamberimiz’in Mekke’nin fethinden sonra onbinlerce sahabesi ile yaptığı hac ibadeti esnasında, Arafat’ta okuduğu hutbeye ne ad verilir?",
    options: ["Namaz Hutbesi", "Veda Hutbesi", "İslam Hutbesi", "Hac Hutbesi"],
    correct: "Veda Hutbesi",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_390",
    question: "Peygamber Efendimiz vefatından önce hastalığı döneminde, namaz kıldıramaz duruma geldiklerinde cemaate namazı kim kıldırıyordu?",
    options: ["Hz. Ali", "Hz. Ömer", "Hz. Ebu Bekir", "Hz. Osman"],
    correct: "Hz. Ebu Bekir",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_391",
    question: "Peygamberimiz Medine’de kaç yılında vefat etti?",
    options: ["622", "631", "623", "632"],
    correct: "632",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_392",
    question: "Peygamberimiz vefat ettiklerinde kaç yaşında idiler?",
    options: ["63", "60", "53", "61"],
    correct: "63",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_393",
    question: "İslam Tarihinde ilk Cuma namazı nerede kılındı?",
    options: ["Mekke’de", "Medine’de", "Kuba’da", "Taif’te"],
    correct: "Kuba’da",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_394",
    question: "Medine’li olup Mekke’den Medine’ye göç eden müslümanlara yardım eden insanlara ne denir?",
    options: ["Ensar", "Muhacir", "Suffa", "Ashap"],
    correct: "Ensar",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_395",
    question: "Peygamber Efendimize 10 yıl hizmette bulunmuş ve kendisinden birçok hadis rivayet etmiş olan sahibi kimdir?",
    options: ["Enes b. Malik", "Hz. Ali", "Hz. Ömer", "Hz. Ebu Bekir"],
    correct: "Enes b. Malik",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_396",
    question: "Müslüman olarak Hz. Peygamberi canlı görmüş, onun sohbetinde bulunmuş ve Müslüman olarak ölmüş kimseye ne denir?",
    options: ["Müellefei Kulüb", "Tebei Tabiin", "Sahabi", "Tabiin"],
    correct: "Tabiin",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_397",
    question: "Peygamberimiz’in ashabına imamlık yaptığı ve şu an kabrinin bulunduğu yerin adı nedir?",
    options: ["Kabe-i Muazzama", "Mescid-i Nebevi", "Mescid-i Aksa", "Mescid-i Kuba"],
    correct: "Mescid-i Nebevi",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_398",
    question: "Peygamber Efendimiz’in eş ve çocukları için söylenen ve her namaz sonunda kendilerine dua edilen ailesinin adı nedir?",
    options: ["Ehl-i Kitap", "Ehl-i Sünnet", "Ehl-i Beyt", "Ehl-i Kabe"],
    correct: "Ehl-i Beyt",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_399",
    question: "Aşağıdakilerden hangi hanım Peygamberimiz’in eşidir?",
    options: ["Hz. Fatıma", "Hz. Aişe", "Meryem", "Rukiye"],
    correct: "Hz. Aişe",
    difficulty: "hard",
    category: "Siyer"
  },
  {
    id: "mil_q_400",
    question: "Aşağıdaki kelimelerden hangisi ahlakla doğrudan ilgili bir kavram degildir?",
    options: ["Namaz", "Dogru", "İyi", "Çirkin"],
    correct: "Namaz",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_401",
    question: "Aşağıdakilerden hangisi övülen, güzel davranışlardan biridir?",
    options: ["Holgörü", "Aldatmak", "Kibir", "Zulüm"],
    correct: "Holgörü",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_402",
    question: "Aşağıdakilerden hangisi çirkin görülen davranışlardan biridir?",
    options: ["Adalet", "Saygı", "İftira", "Sabır"],
    correct: "İftira",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_403",
    question: "Hangi kelime, yapılan hataları affetmek, anlayışla karşılamak manasına gelir?",
    options: ["Cömertlik", "Hoşgörü", "Cesaret", "Güven"],
    correct: "Hoşgörü",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_404",
    question: "Hangi kelime; başkalarını küçük görmek, onlara tepeden bakmak anlamına gelir?",
    options: ["İsraf", "Bencillik", "Aldatmak", "Kibir."],
    correct: "Kibir.",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_405",
    question: "\"Mü’minlerin iman bakımmndan en üstün olanı .............. olandır\". Hadisindeki boşluğa aşağıdakilerden hangisi en uygundur?",
    options: ["Malı en çok", "Zekası en üstün", "Cesaretli", "Ahlakı en güzel"],
    correct: "Ahlakı en güzel",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_406",
    question: "Aşağıdakilerden hangisi maddi bir temizlik degildir?",
    options: ["Kalp temizligi", "Beden temizligi", "Giyecek temizliği", "Çevre temizliği"],
    correct: "Kalp temizligi",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_407",
    question: "Aşağıdakilerden hangisi manevi temizligin kapsamı içine girer?",
    options: ["Ev temizliği", "Aklımızın temizliği", "Beden temizliği", "Elbise temizliği"],
    correct: "Aklımızın temizliği",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_408",
    question: "Aşağıdaki kelimelerden hangisi „İslam’ın dürüstlük\" ilkesine uymaz?",
    options: ["Sözünde durmak", "Güvenilir olmak", "Aldatmak", "Dogruluk"],
    correct: "Aldatmak",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_409",
    question: "Aşağıdakilerden hangisi müslümanm temel özelliklerinden biri degildir?",
    options: ["Sözünde durmamak", "İyilik yapmak", "Yardım etmek", "Saygılı olmak"],
    correct: "Sözünde durmamak",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_410",
    question: "Aşağıdakilerden hangisi, \"adalet\". kavramının karşıt (zıt) anlamıdır?",
    options: ["Cahillik", "Hırsızlık", "Tembellik", "Zulüm"],
    correct: "Zulüm",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_411",
    question: "Aşağıdakilerden hangisi \"cimrilik\" kavrammm karşıt (zıt) anlamıdır?",
    options: ["Doğruluk", "Nezaket", "Cömertlik", "Çalışkanlık"],
    correct: "Cömertlik",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_412",
    question: "Hangi kelime \"kibar olmak, incitmeden ve tatli dille konuşmak\" anlamına gelir?",
    options: ["Nezaket", "Sabır", "Şefkat", "Adalet"],
    correct: "Nezaket",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_413",
    question: "Hangi kelime \"sadece kendini düşünmek, başkalarını düşünmemek\" anlamma gelir?",
    options: ["İsraf", "Bencillik", "İkiyüzlülük", "Kin"],
    correct: "Bencillik",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_414",
    question: "Aşağıdaki hangi iki kelime birbirinin zıddı değildir?",
    options: ["Adalet-Zulüm", "Nezaket-Kabalık", "Doğruluk-Yalan", "Hoşgörü-İyilik"],
    correct: "Hoşgörü-İyilik",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_415",
    question: "Aşağıdaki hangi iki kelime birbiriyle aynı anlamdadır?",
    options: ["Korkaklık- Cesaret", "Şefkat-Merhamet", "Hakaret-Saygı", "Dostluk-Düşmanlık"],
    correct: "Şefkat-Merhamet",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_416",
    question: "Peygamber efendimiz, \"Bizi aldatan bizden degildir\" sözüyle neyi vurgulamıştır?",
    options: ["Dürüstlük", "Temizlik", "Çalışkanlık", "Sabırlı olmak"],
    correct: "Dürüstlük",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_417",
    question: "Aşağıdakilerden hangisi manevi bir iyiliktir?",
    options: ["Zekat vermek", "Sadaka vermek", "Bir fakiri doyurmak", "İnsanlara ögüt vermek"],
    correct: "İnsanlara ögüt vermek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_418",
    question: "Aşağıdakilerden hangisi maddi bir iyiliktir?",
    options: ["Fitre vermek", "Büyüklere saygı", "Küçüklere sevgi", "Güleryüzlü olmak"],
    correct: "Fitre vermek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_419",
    question: "Allah’ın verdigi nimetlere karşı yapmamamzz gereken şey nedir?",
    options: ["Nankörlük", "Dua", "Şükür", "Tövbe"],
    correct: "Nankörlük",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_420",
    question: "Aşağıdakilerden hangisi Ahlak'ın tanımı içerisine girmez?",
    options: ["İyilik yapmak", "Kötülükten uzak durmak", "Güzel huylu olmak", "Bilgili olmak"],
    correct: "Bilgili olmak",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_421",
    question: "\"Allah’ın verdigi nimetleri saçıp savurmak, boşa harcamak, gereksiz yere tüketmek\" anlamlarına gelen ve İslamın da yasakladığı bu kötü davranışın adı nedir?",
    options: ["İftira", "Riya", "Öfke", "İsraf"],
    correct: "İsraf",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_422",
    question: "Bize iyilik yapan bir kişiye karşı aşağıdakilerden hangisini yapmamiz doğru degildir?",
    options: ["Teşekkür etmek", "Dua etmek", "Nankörlük etmek", "İyilik etmek"],
    correct: "Nankörlük etmek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_423",
    question: "Bize kötülük yapan bir kişiye karşı aşağıdakilerden hagisini yapmak dogru degildir?",
    options: ["Affetmek", "Sabretmek", "İftira etmek", "Fedakarlık etmek"],
    correct: "İftira etmek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_424",
    question: "Aşağıdakilerden hangisi \"Sevgi\" ile uyumlu degildir?",
    options: ["Muhabbet", "Şefkat", "Merhamet", "Nefret"],
    correct: "Nefret",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_425",
    question: "Aşağıdakilerden hangisi müslümanların birbirlerini sevme sebebi olamaz?",
    options: ["Maddi bir menfaat", "Allah rızası", "Kardeşlik duygusu", "Birlik beraberlik ruhu"],
    correct: "Maddi bir menfaat",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_426",
    question: "Allah Teâlâ, aşağıdaki davranışlardan hangisini yapanları sevmez?",
    options: ["İyilik edenleri", "Temizlenenleri", "Tevekkül edenleri", "Kibirlenenleri"],
    correct: "Kibirlenenleri",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_427",
    question: "Allah Teâlâ, aşağıdaki davranışlardan hangisini yapanları çok sever?",
    options: ["Bozgunculuk yapanları", "İsraf edenleri", "Sabredenleri", "Haddi aşanları"],
    correct: "Sabredenleri",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_428",
    question: "Aşağıdaki ikili gruplardan hangisi birbiriyle uyumlu degildir?",
    options: ["Tövbe etmek-Tevekkül etmek", "Zulmetmek-Sabretmek", "Temiz olmak İyilik yapmak", "İnkar etmek Günah işlemek"],
    correct: "Zulmetmek-Sabretmek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_429",
    question: "Allah Teâlâ'nın kesinlikle affetmeyecegi günah aşağıdakilerden hangisidir?",
    options: ["İçki içmek", "Oruç tutmamak", "Yalan söylemek", "Kul hakkı yemek"],
    correct: "Kul hakkı yemek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_430",
    question: "Aşağıdakilerden hangisi \"Kul Hakkı\"na girer?",
    options: ["Hırsızlık", "Namaz kılmamak", "Oruç tutmamak", "Tembellik"],
    correct: "Hırsızlık",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_431",
    question: "Aşağıdaki1erden hangisi \"Kul Hakkı\"na girmez?",
    options: ["Gıybet-Dedikodu", "İftira etmek", "Aldatmak", "Namazı terketmek"],
    correct: "Namazı terketmek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_432",
    question: "Aşağıdakilerden hangisi günahlardan arınmak için şart değildir?",
    options: ["Pişman olmak", "Sabretmek", "Tövbe etmek", "Hak sahibinden helallik almak"],
    correct: "Sabretmek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_433",
    question: "Kul Hakkı hem maddi hem de manevi haklardan oluşur. Aşağıdakilerden hangisi maddi olan bir Kul Hakkı çeşididir?",
    options: ["Alay etmek", "Gıybet etmek", "Hakaret etmek", "Adam öldürmek"],
    correct: "Adam öldürmek",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_434",
    question: "Kul Hakkı hem maddi hem de manevi haklardan oluşur: Aşagıdakilerden hangisi manevi olan bir Kul Hakkı çeşididir?",
    options: ["Lakap takma", "Hırsızlık", "Tefecilik", "Rüşvet"],
    correct: "Lakap takma",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_435",
    question: "Aşağıdakilerden hangisi Ahlak'ın konuları içine girmez?",
    options: ["Dürüstlük", "Doğru Sözlülük", "Affetmek", "Kitaplara İnanmak"],
    correct: "Kitaplara İnanmak",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_436",
    question: "Aşağıdakilerden hangisi Ahlak'ın konuları içine girer?",
    options: ["Ahirete İman", "Güvenilir Olmak", "Hacca Gitmek", "Kadere İman"],
    correct: "Güvenilir Olmak",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_437",
    question: "Bir kişinin yapmadığı bir şeyi, yalan söyleyerek; \"Falan kişi şöyle şöyle yaptı\" demek dinimizce büyük günahtır. Bu kötü davranışın adı nedir?",
    options: ["Kibir", "Kabalık", "İftira", "Riya"],
    correct: "İftira",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_438",
    question: "Başkaları için bir şeyler yapmak, zor da olsa onlara yardım etmek için gayret göstermek güzel bir davranıştır. Bu davranışın adı nedir?",
    options: ["Cesaret", "Saygı", "Kanaat", "Fedakarlık"],
    correct: "Fedakarlık",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_439",
    question: "\"Güzel Ahlak\" kavramının karşıt anlamı aşağıdakilerden hangisidir?",
    options: ["Haksızlık", "Merhametsizlik", "Sevimlilik", "Kötü Ahlak"],
    correct: "Kötü Ahlak",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_440",
    question: "\"Temizlik\" kavramının karşıt anlamı aşağıdakilerden hangisidir?",
    options: ["Kirlilik", "Düzensizlik", "Merhamet", "Kincilik"],
    correct: "Kirlilik",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_441",
    question: "\"Dogruluk\" kavramının Karşıt anlamı aşağıdakilerden hangisidir?",
    options: ["Saygısızlık", "Merhametsizlik", "Yalancılık", "Duyarsızlık"],
    correct: "Yalancılık",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_442",
    question: "\"İyilik\" kavramının karşıt anlamı aşağıdakilerden hangisidir?",
    options: ["Acımasızlık", "Kötülük", "Yardımseverlik", "Yalancılık"],
    correct: "Kötülük",
    difficulty: "easy",
    category: "Ahlak"
  },
  {
    id: "mil_q_443",
    question: "\"Sevgi\" kavramının karşıt anlamı aşağıdakilerden hangisidir?",
    options: ["Nefret", "Saygı", "Kötü Ahlak", "Sevimlilik"],
    correct: "Nefret",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_444",
    question: "\"Hoşgörü\" kavrammm karşıt-zıt anlamı aşağıdakilerden hangisidir?",
    options: ["Bencillik", "Düzensizlik", "Merhamet", "Müsamahasızlık Kincilik"],
    correct: "Müsamahasızlık Kincilik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_445",
    question: "\"Bağışlama\" kavramını karşıt-zıt anlamı aşağıdakilerden hangisidir?",
    options: ["Haksızlık", "İkiyüzlülük", "Cezalandırma", "Sevimlilik"],
    correct: "Cezalandırma",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_446",
    question: "\"Cömertlik\" kavramının karşıt-zıt anlamı aşağıdakilerden hangisidir?",
    options: ["Eli Açık", "Cimrilik", "Duyarsızlık", "Kincilik"],
    correct: "Cimrilik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_447",
    question: "\"Adalet\" kavramının karşıt-zıt anlamı aşağıdakilerden hangisidir?",
    options: ["Zulüm", "Kuralcılık", "Yalancılık", "Duyarsızlık"],
    correct: "Zulüm",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_448",
    question: "\"Özveri\" kavramının karşıt-zıt anlamı aşağıdakilerden hangisidir ?",
    options: ["Acımasızlık", "Bağışlama", "Bencillik", "Fedakarlık"],
    correct: "Bencillik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_449",
    question: "Hz. Ebu Bekir'in malının tamamını Müslümanlar için vermesi onun hangi yönünü göstermektedir?",
    options: ["Bağımsızlık", "Bağışlama", "Dostluk", "Cömertlik"],
    correct: "Cömertlik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_450",
    question: "Aşağıdaki kavramlardan hangisi olumlu bir kavramdır?",
    options: ["Beddua Etmek", "Hoşgörü", "Kin", "Nefret"],
    correct: "Hoşgörü",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_451",
    question: "Aşağıdaki kavramlardan hangisi olumsuz bir kavramdır?",
    options: ["Özveri", "Hoşgörü", "Kin", "Saygı"],
    correct: "Kin",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_452",
    question: "Aşağıdaki kavramlardan hangisi müslümanda bulunmaması gereken bir özelliktir?",
    options: ["Sevgi", "Özveri", "Cimrilik", "Cömertlik"],
    correct: "Cimrilik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_453",
    question: "Aşağıdaki kavramlardan hangisi \" Şefkat, Acıma, Bağışlama\" anlamında kullanılmaktadır?",
    options: ["Merhamet", "Özveri", "Cana Yakın", "Kahraman"],
    correct: "Merhamet",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_454",
    question: "Hz. Ömer'in en çok bilinen özelligi aşağıdakilerden hangisidir?",
    options: ["Güvenilir Olması", "Adaletli Olması", "Mekkeli Olması", "Müsamahakar Olması"],
    correct: "Adaletli Olması",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_455",
    question: "Hz. Osman'ın en çok bilinen özelliği aşağıdakilerden hangisidir?",
    options: ["Güvenilir Olması", "Peygamberimizin Damadı Olması", "Mekkeli Olması", "Yumuşak huylu Olması"],
    correct: "Yumuşak huylu Olması",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_456",
    question: "Hz. Ali'nin en çok bilinen özelliği aşağıdakilerden hangisidir?",
    options: ["Tecrübe Sahibi Olması", "Merhametli Olması", "Ilim Sahibi Olması", "Müsamahakar Olması"],
    correct: "Ilim Sahibi Olması",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_457",
    question: "\"İnsanı bir şeye veya bir kimseye karşı yakın ilgi ve bağlılık göstermeye yönelten insanlar arasi ilişkide çok önemli yeri olan bir duygu. \" Tanımı aşağıdaki kavramlardan hangisine aittir?",
    options: ["Sevgi", "Hased", "Cimrilik", "Tevekkül"],
    correct: "Sevgi",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_458",
    question: "\"Kişinin kendisinin onaylamadığı bir şeyi gerektiğinde anlayışla karşılaması.\" Tanımı aşağıdaki kavramlardan hangisine aittir?",
    options: ["Sorumluluk", "Hoşgörü", "Selamet", "Yardımlaşma"],
    correct: "Hoşgörü",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_459",
    question: "\"Kişisel menfaatleri bir kenara bırakabilmek, toplumun faydasına ve özeIlikle kutsal değerler için fedakarlık yapabilmek. \" Tanımı aşağıdaki kavramlardan hangisine aittir?",
    options: ["Sabır", "Çalışmak", "Kul Hakkı", "Özveri"],
    correct: "Özveri",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_460",
    question: "\"Dürüstlüğün, doğrulugun ve güvenirliligin gereğidir. Onun yerine getirilmemesini Peygamberimiz (as) münafıklığın alametlerinden saymıştır. \" Aşağıdaki kavramlardan hangisi münafıklık alametidir?",
    options: ["Sorumluluk", "Oruç Tutmak", "Sözünde Durmamak,", "Cana Kıymak"],
    correct: "Sözünde Durmamak,",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_461",
    question: "\"Dürüstlük, sıdk, sözünde durmak, sadakat, sözünde ve işinde emin olmak, istikamet üzere olmak, özü sözü bir olmak gibi anlamları içerir. \" Bu kavramın tanımı aşağıdakilerden hangisidir?",
    options: ["Doğruluk", "Maharetli OImak", "Cana Yakın", "Sevecen"],
    correct: "Doğruluk",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_462",
    question: "\"Tutarlı ve dengeli davranmak, her şeyin ve herkesin hakkını vermek, bir şeyi yerli yerine koymak, hak ve hukuka uygunluk, hakkı gözetmek anlamlarına gelir.\" Bu kavramın tanımı aşağıdakilerden hangisidir?",
    options: ["Sakin", "Hoşgörü", "Tecrübeli", "Adalet"],
    correct: "Adalet",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_463",
    question: "\"İnsanda var olan ve onun davranışlarına yön veren yaratılış ve ruh özelliklerinin bütünü, mizaç, tabiat, kalıplaşmış davranış tarzıdır.\" Bu kavramın tanımı aşağıdakilerden hangisidir?",
    options: ["Anlayış", "Huy", "Adalet", "Akıl"],
    correct: "Huy",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_464",
    question: "\"Kişinin kendi istek ve iradesi ile yaptığı veya kendi yetki alanına giren herhangi bir işin sonuçlarını üstlenmesi, mesuliyet.\" Bu kavramın tanımı aşağıdakilerden hangisidir?",
    options: ["Söz tutmak", "Özveri", "Sorumluluk", "İsteklilik"],
    correct: "Sorumluluk",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_465",
    question: "\"Bireyin malından, mülkünden, rahatından, gerektiğinde sahip oldugu imkanlardan Allah rızası için vazgeçebilmesi. \" Bu kavramm tanımı aşağıdakilerden hangisidir?",
    options: ["Fedakarlik", "Sadakat", "Saadet", "Huzur"],
    correct: "Fedakarlik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_466",
    question: "\"Hayatın tüm alanlarında insanlarin birbirleri ile olan ilişkiIerinden doğan karşılıklı haklara\" ne denir?",
    options: ["Adalet", "Töre", "Örf", "Kul Hakkı"],
    correct: "Kul Hakkı",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_467",
    question: "\"İnsanin, Allah'a, Peygambere ve diğer yaratılmışlara karşı söz ve davranışlarında, taşıması gereken ölçülülük durumudur.\"",
    options: ["Örf", "Saygılı Olmak", "Adet", "Sadakat"],
    correct: "Saygılı Olmak",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_468",
    question: "\"Sahip olunan imkanlardan israfa kaçmadan fedakarca harcamada bulunmaya ne denir?",
    options: ["Cömertlik", "Mükafat", "Saçıp Savurmak", "Sadakat"],
    correct: "Cömertlik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_469",
    question: "\"İnsanın güzel ve doğru davranışları yaparak; kötü olan davranışlardan da kaçınarak ulaştığı ahlaki nitelik.\" Aşağıdaki tanımlardan hangisidir?",
    options: ["Diğergamlılık", "Hasislik", "Güzel Ahlak", "Hoşgörü"],
    correct: "Güzel Ahlak",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_470",
    question: "\"Kişinin sahip oldugu imkanları başkalarının istifadesine sunmasi. İnsanlara, sıkıntılarını gidermede destek olmak üzere gönülden kopup geien iyilik duygusu ve davranışı.\" nedir?",
    options: ["Saadet", "Yardımlaşma", "Örf", "Doğruluk"],
    correct: "Yardımlaşma",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_471",
    question: "\"Affetme, bağışlama, insanlara ve diger canlılara karşı acıma duygusu taşıma, bir kimsenin veya bir başka canlının karşılaştığı kötü durumdan dolayı duyulan üzüntü\". Tanımı aşağıdakilerden hangisine aittir?",
    options: ["Temizlik", "Saygı", "Çıkarcılık", "Merhamet"],
    correct: "Merhamet",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_472",
    question: "\"Kendisinin ihtiyaci olduğu halde başkasını kendi nefsine tercih etme duygusu, özgecilik.\" Tanımı aşağıdaki kavramlardan hangisidir?",
    options: ["Doğruluk", "Sevgi", "Saygı", "Diğergamlılık"],
    correct: "Diğergamlılık",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_473",
    question: "\"Yapılan bir hata ya da kusuru bağışlamak.\" Tanımı aşağıdakilerden hangisidir?",
    options: ["Cömertlik", "Saygılı OImak", "Affetmek", "Dürüstlük"],
    correct: "Affetmek",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_474",
    question: "\"Peygamberimizin (as) \"Eger mü'minlere güç1ük verecek olmasaydı, onlara her namaz için .............. kullanmayı emrederdim.\" dediği, belli ağaçların dal ve köklerinden yapılan ve diş fırçalanmasında kullanzlan temizlik aracı.",
    options: ["Misvak", "Besmele", "Abdest", "Temizlik"],
    correct: "Misvak",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_475",
    question: "\"Ahlaki tüm güzel prensiplerin özü ve dayanak noktası olan duygu, karşılık bekmeden yapılan yardım, lütuf, ihsan.\" Tanımı aşağıdakilerden hangisidir? .",
    options: ["Cömertlik", "İyilik", "Sabır", "Zekat"],
    correct: "Cömertlik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_476",
    question: "Aşağıdaki kavramlardan hangileri birbirine benzer kavramlardır?",
    options: ["Adalet-Cehalet", "Kin-Din", "Örf -Adet", "Kul Hakkı-Hoş Görü"],
    correct: "Örf -Adet",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_477",
    question: "Aşağıdaki kavramlardan hangileri birbirine benzer kavramlardır?",
    options: ["Merhamet-Şefkat", "Sevgi-Sükunet", "Cimrilik-Cana Yakınlık", "Adalet-Sabır"],
    correct: "Merhamet-Şefkat",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_478",
    question: "Aşağıdaki kavramlardan hangileri birbirine benzer kavramlardir?",
    options: ["Duyarsızlık-Düşmanlık", "Kötülük-Sorumsuzluk", "Menfaatçilik-Zulüm", "Münafıklık-İki Yüzlülük"],
    correct: "Münafıklık-İki Yüzlülük",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_479",
    question: "Aşağıdaki kavramlardan hangileri birbirine zıt kavramlardır?",
    options: ["Zulüm-İyilik", "Gösteriş- Hasislik", "Aldatma-Acımasızlık", "Adalet-Doğruluk"],
    correct: "Zulüm-İyilik",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_480",
    question: "Aşağıdaki kavramlardan hangileri birbirine zıt kavramlardır?",
    options: ["Adam Kayırma-Çikarcılık", "Merhametsizlik-Haksızlık", "Bağışlama-Affetme", "Dostluk-Düşmanlık"],
    correct: "Dostluk-Düşmanlık",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_481",
    question: "\"Müslüman küçüklerine karşı sevgi besleyen, büyüklerine karşı ........ duyan kimsedir.\" Boş bırakılan yere aşağıdakilerden hangisi uygundur?",
    options: ["Hasetlik", "Merhamet", "Saygı", "Bağışlama"],
    correct: "Saygı",
    difficulty: "medium",
    category: "Ahlak"
  },
  {
    id: "mil_q_482",
    question: "Aşağıdaki kavramlardan hangileri birbirine zrt kavramlardır?",
    options: ["Menfaatçilik-Çıkarcılık", "Affetmek Cezalandırmak,", "Dostluk-Arkadaşlık", "Dedikodu yapmak Gıybet Etmek"],
    correct: "Affetmek Cezalandırmak,",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_483",
    question: "\"Aşağıdaki kavramlardan hangisi münafıkların özelliklerindendir?",
    options: ["Ahde vefa", "Cesurluk", "Fedakarlık", "İki Yüzlülük"],
    correct: "İki Yüzlülük",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_484",
    question: "Aşağıdaki kavramlardan hangileri birbirine benzer kavramlardir?",
    options: ["Mü'min-Kafir", "Sevgi-Sükunet", "Haksızlık-Bencillik", "Yardımlaşma-Dayanışma"],
    correct: "Yardımlaşma-Dayanışma",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_485",
    question: "\"Komşusu açken tok yatan bizden degildir\" sözü nedir?",
    options: ["Ayet", "Hadis", "Atasözü", "Kelami Kibar"],
    correct: "Hadis",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_486",
    question: "Peygamberimizin (as) Özellikle \"Emrolunduğun gibi dost dogru ol\" ayetinden dolayı kendisini ihtiyarlattığını söylediği sure hangisidir?",
    options: ["Alak suresi", "Hud Suresi", "Maide Suresi", "A'raf Suresi"],
    correct: "Hud Suresi",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_487",
    question: "\"Ben .........tamamlamak için gönderildim \" hadisi şerifinde boş bırakılan yere aşağıdaki kavramlardan hangisi uygundur?",
    options: ["Kurban", "Sünnet", "Güzel ahlak", "İbadet"],
    correct: "Güzel ahlak",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_488",
    question: "\"Bağışlamak\" sözcüğünün bir diğer ismi aşağıdakilerden hangisidir?",
    options: ["İntikam", "Sözde durmak", "İyilik", "Affetmek"],
    correct: "Affetmek",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_489",
    question: "Aşağıdakilerden hangisi ahlaki bakımdan iyi davranışlardan degildir?",
    options: ["Yardım Etmek", "Cezalandırmak", "Şükretmek", "Dua etmek"],
    correct: "Cezalandırmak",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_490",
    question: "\"Anlayışlı olmak\" ifadesi aşağıdakilerden hangisini ifade eder?",
    options: ["Hoşgörülü olmak", "Sinirli olmak", "Teşekkür etmek", "Gıybet etmek"],
    correct: "Hoşgörülü olmak",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_491",
    question: "\"İnsan sahip oldugu imkanlari başkalanna da sunmalı\" ne demektir?",
    options: ["Cimrilik", "Menfeatcilik", "Bencillik", "Yardım etmek"],
    correct: "Yardım etmek",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_492",
    question: "İslam'ın 5 şartından hangisi yardımlaşmak anlamındadir?",
    options: ["Namaz kılmak", "Zekat vermek", "Hacca gitmek", "Oruç tutmak"],
    correct: "Zekat vermek",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_493",
    question: "Aşağıdakilerden hangisi müslümana yakışmayan dasvranışlardandır?",
    options: ["Yardım etmek", "İçki içmek", "Selam vermek", "Sözünde durmak"],
    correct: "İçki içmek",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_494",
    question: "Aşağıdakilerden hangisi \"münafıklığın alametlerinden\" degildir?",
    options: ["Yalan söylemek", "Sözünde durmamak", "Emanete hiyanet etmek", "Güzel söz söylemek"],
    correct: "Güzel söz söylemek",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_495",
    question: "\"Adaletli olmak\" ne demektir?",
    options: ["İnsanlar arasında ayrım yapmak", "İnsanlara zulmetmek", "Her şeyin ve herkesin hakkını vermek", "Haksızlık yapmak"],
    correct: "Her şeyin ve herkesin hakkını vermek",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_496",
    question: "\"Aşağıdakilerden hangisi bir müslümanın sahip olması gereken özelliklerden degildir?",
    options: ["Fedakarlık", "Yardım etmek", "Hased etmek", "Doğru söylemek"],
    correct: "Hased etmek",
    difficulty: "hard",
    category: "Ahlak"
  },
  {
    id: "mil_q_497",
    question: "Türkiye Cumhuriyeti'nin başkenti hangi ilimizdir?",
    options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
    correct: "Ankara",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_498",
    question: "Dünya'mızın tek doğal uydusu hangisidir?",
    options: ["Güneş", "Mars", "Jüpiter", "Ay"],
    correct: "Ay",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_499",
    question: "Üç tarafı denizlerle çevrili kara parçasına ne ad verilir?",
    options: ["Ada", "Yarımada", "Körfez", "Kıta"],
    correct: "Yarımada",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_500",
    question: "Hangi okyanus Dünya'nın en büyük okyanusudur?",
    options: ["Atlas Okyanusu", "Hint Okyanusu", "Büyük Okyanus (Pasifik)", "Arktik Okyanusu"],
    correct: "Büyük Okyanus (Pasifik)",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_501",
    question: "Dünya'nın en yüksek dağı hangisidir?",
    options: ["Ağrı Dağı", "Everest Dağı", "Alpler", "Ural Dağı"],
    correct: "Everest Dağı",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_502",
    question: "Türkiye'nin en yüksek dağı hangisidir?",
    options: ["Erciyes Dağı", "Süphan Dağı", "Kaçkar Dağı", "Ağrı Dağı"],
    correct: "Ağrı Dağı",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_503",
    question: "Türkiye'nin en uzun nehri hangisidir?",
    options: ["Fırat", "Dicle", "Kızılırmak", "Yeşilırmak"],
    correct: "Kızılırmak",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_504",
    question: "Hangi gezegen gökyüzünde kırmızı rengiyle ayırt edilir ve 'Kızıl Gezegen' olarak bilinir?",
    options: ["Venüs", "Mars", "Satürn", "Merkür"],
    correct: "Mars",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_505",
    question: "Güneş sistemindeki en sıcak gezegen hangisidir?",
    options: ["Merkür", "Venüs", "Dünya", "Mars"],
    correct: "Venüs",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_506",
    question: "Türkiye'nin en büyük gölü hangisidir?",
    options: ["Tuz Gölü", "Beyşehir Gölü", "Van Gölü", "Eğirdir Gölü"],
    correct: "Van Gölü",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_507",
    question: "İlkbahar, yaz, sonbahar ve kış mevsimlerinden sonra hangi mevsim gelir?",
    options: ["İlkbahar", "Yaz", "Kış", "Güz"],
    correct: "İlkbahar",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_508",
    question: "Yapraklarını dökmeyen ve kışın da yeşil kalan ağaç hangisidir?",
    options: ["Kavak", "Meşe", "Çam", "Gürgen"],
    correct: "Çam",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_509",
    question: "Su buharının gökyüzünde soğuk hava ile karşılaşarak buz kristalleri halinde yere düşmesine ne denir?",
    options: ["Yağmur", "Dolu", "Kar", "Sis"],
    correct: "Kar",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_510",
    question: "Bal arıları bal yapmak için çiçeklerden ne toplarlar?",
    options: ["Polen ve Nektar", "Yaprak", "Su", "Toprak"],
    correct: "Polen ve Nektar",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_511",
    question: "Gündüz gökyüzünde gördüğümüz ve Dünya'mızı ısıtan en parlak yıldız hangisidir?",
    options: ["Kutup Yıldızı", "Güneş", "Çolpan", "Sirius"],
    correct: "Güneş",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_512",
    question: "Ülkemizin hangi coğrafi bölgesinde çay tarımı en yaygındır?",
    options: ["Ege Bölgesi", "Marmara Bölgesi", "Karadeniz Bölgesi", "Akdeniz Bölgesi"],
    correct: "Karadeniz Bölgesi",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_513",
    question: "Türkiye'nin Asya kıtasında kalan büyük toprak parçasına ne ad verilir?",
    options: ["Trakya", "Anadolu", "Mezopotamya", "Rumeli"],
    correct: "Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_514",
    question: "Hangi kıta kutup bölgesinde yer alır ve tamamen buzullarla kaplıdır?",
    options: ["Asya", "Avustralya", "Antarktika", "Afrika"],
    correct: "Antarktika",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_515",
    question: "Havadaki su buharı miktarını belirten kavrama ne ad verilir?",
    options: ["Sıcaklık", "Rüzgar", "Nem", "Basınç"],
    correct: "Nem",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_516",
    question: "Pamukkale travertenleri hangi ilimizde yer almaktadır?",
    options: ["Aydın", "Denizli", "Muğla", "Manisa"],
    correct: "Denizli",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_517",
    question: "Kapadokya'daki ünlü peri bacaları hangi ilimizin sınırları içerisindedir?",
    options: ["Kayseri", "Nevşehir", "Niğde", "Aksaray"],
    correct: "Nevşehir",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_518",
    question: "Dünya'nın kendi ekseni etrafında bir tam dönüşü ne kadar sürer?",
    options: ["1 Ay", "1 Yıl", "24 Saat", "12 Saat"],
    correct: "24 Saat",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_519",
    question: "Dünya'nın Güneş etrafında dolanmasıyla hangi doğa olayı gerçekleşir?",
    options: ["Gece ve gündüz", "Gelgit", "Mevsimler", "Deprem"],
    correct: "Mevsimler",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_520",
    question: "Ege ve Akdeniz kıyılarında yaygın olan, yazları sıcak ve kurak, kışları ılık ve yağışlı geçen iklim hangisidir?",
    options: ["Karasal İklim", "Akdeniz İklimi", "Karadeniz İklimi", "Muson İklimi"],
    correct: "Akdeniz İklimi",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_521",
    question: "Depremin büyüklüğünü ölçmek için kullanılan cihazın adı nedir?",
    options: ["Barometre", "Sismograf", "Termometre", "Kronometre"],
    correct: "Sismograf",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_522",
    question: "Ülkemizde fındık üretiminin en çok yapıldığı Karadeniz ilimiz hangisidir?",
    options: ["Trabzon", "Rize", "Ordu", "Samsun"],
    correct: "Ordu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_523",
    question: "Dünya'nın en derin noktası olarak kabul edilen yer hangisidir?",
    options: ["Mariana Çukuru", "Büyük Kanyon", "Cebelitarık Boğazı", "Nil Vadisi"],
    correct: "Mariana Çukuru",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_524",
    question: "Hangi nehir Afrika kıtasından geçerek Akdeniz'e dökülür ve Dünya'nın en uzun nehirlerinden biridir?",
    options: ["Amazon Nehri", "Mississippi Nehri", "Nil Nehri", "Ganj Nehri"],
    correct: "Nil Nehri",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_525",
    question: "Ülkemizde en fazla petrol çıkarılan Güneydoğu Anadolu ilimiz hangisidir?",
    options: ["Diyarbakır", "Siirt", "Batman", "Mardin"],
    correct: "Batman",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_526",
    question: "Asya ile Amerika kıtalarını birbirine en yakın noktadan ayıran boğaz hangisidir?",
    options: ["Bering Boğazı", "Cebelitarık Boğazı", "Macellan Boğazı", "Malakka Boğazı"],
    correct: "Bering Boğazı",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_527",
    question: "Atmosferin en alt tabakası olan ve hava olaylarının gerçekleştiği tabaka hangisidir?",
    options: ["Stratosfer", "Mezosfer", "Troposfer", "Termosfer"],
    correct: "Troposfer",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_528",
    question: "Avrupa ile Afrika kıtalarını birbirine bağlayan / ayıran stratejik boğaz hangisidir?",
    options: ["Süveyş Kanalı", "Cebelitarık Boğazı", "Babülmendep Boğazı", "Hürmüz Boğazı"],
    correct: "Cebelitarık Boğazı",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_529",
    question: "Dünya'nın en büyük sıcak çölü olan Sahra Çölü hangi kıtadadır?",
    options: ["Asya", "Afrika", "Avustralya", "Güney Amerika"],
    correct: "Afrika",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_530",
    question: "Vücudumuzda kanı tüm organlara pompalamakla görevli organ hangisidir?",
    options: ["Akciğer", "Mide", "Karaciğer", "Kalp"],
    correct: "Kalp",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_531",
    question: "Nefes alırken havadan aldığımız ve yaşamamız için şart olan gaz hangisidir?",
    options: ["Karbondioksit", "Azot", "Oksijen", "Helyum"],
    correct: "Oksijen",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_532",
    question: "Suyun kimyasal formülü aşağıdakilerden hangisidir?",
    options: ["CO2", "H2O", "NaCl", "O2"],
    correct: "H2O",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_533",
    question: "Dişlerimizin sağlıklı kalması için günde en az kaç kez fırçalamalıyız?",
    options: ["1", "2", "4", "5"],
    correct: "2",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_534",
    question: "Gözümüzün görmesini sağlayan ve vücudumuzdaki en önemli duyu organlarından biri hangisidir?",
    options: ["Kulak", "Göz", "Burun", "Deri"],
    correct: "Göz",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_535",
    question: "Kendi besinini güneş ışığı yardımıyla kendisi üretebilen canlı grubu hangisidir?",
    options: ["Hayvanlar", "Mantarlar", "Bitkiler", "Bakteriler"],
    correct: "Bitkiler",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_536",
    question: "Yer çekimi kanununu ağaçtan düşen elma sayesinde formüle eden ünlü bilim insanı kimdir?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Thomas Edison"],
    correct: "Isaac Newton",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_537",
    question: "Canlıların en küçük yapı taşına ne ad verilir?",
    options: ["Organ", "Doku", "Hücre", "Sistem"],
    correct: "Hücre",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_538",
    question: "Güneş ışınlarının zararlı etkilerinden korunmak için vücudumuz hangi vitamini sentezler?",
    options: ["A Vitamini", "B Vitamini", "C Vitamini", "D Vitamini"],
    correct: "D Vitamini",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_539",
    question: "Hangi organımız vücudumuza giren zararlı maddeleri süzerek temizler ve zehirsiz hale getirir?",
    options: ["Böbrek", "Karaciğer", "Dalak", "Pankreas"],
    correct: "Karaciğer",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_540",
    question: "Elektrik ampulünü icat eden ünlü mucit kimdir?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    correct: "Thomas Edison",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_541",
    question: "Maddenin kaç temel fiziksel hali vardır?",
    options: ["2", "3", "5", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_542",
    question: "Havadaki oksijeni alıp kana veren ve solunum sistemimizin en önemli organı olan yapı hangisidir?",
    options: ["Akciğer", "Kalp", "Mide", "Yutak"],
    correct: "Akciğer",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_543",
    question: "Kuduz aşısını bulan ünlü Fransız kimyager ve mikrobiyolog kimdir?",
    options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Marie Curie"],
    correct: "Louis Pasteur",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_544",
    question: "Kendi ışığını üretemeyen, bir yıldızın etrafında dolanan gök cisimlerine ne ad verilir?",
    options: ["Kuyruklu Yıldız", "Meteor", "Gezegen", "Nebula"],
    correct: "Gezegen",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_545",
    question: "Kanımızda oksijen taşımakla görevli, kana kırmızı rengini veren hücrelerin adı nedir?",
    options: ["Akyuvar", "Alyuvar", "Kan pulcukları", "Plazma"],
    correct: "Alyuvar",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_546",
    question: "Sesin yayılmadığı tek ortam hangisidir?",
    options: ["Su", "Hava", "Demir", "Boşluk (Vakum)"],
    correct: "Boşluk (Vakum)",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_547",
    question: "Suyun donma noktası 0 derece iken kaynama noktası deniz seviyesinde kaç derecedir?",
    options: ["50", "80", "100", "120"],
    correct: "100",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_548",
    question: "Türkiye Cumhuriyeti'nin kurucusu kimdir?",
    options: ["Mustafa Kemal Atatürk", "İsmet İnönü", "Kazım Karabekir", "Fevzi Çakmak"],
    correct: "Mustafa Kemal Atatürk",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_549",
    question: "İstanbul hangi Osmanlı padişahı tarafından fethedilmiştir?",
    options: ["Yavuz Sultan Selim", "Fatih Sultan Mehmet", "Kanuni Sultan Süleyman", "Orhan Gazi"],
    correct: "Fatih Sultan Mehmet",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_550",
    question: "İstiklal Marşı'mızın yazarı kimdir?",
    options: ["Ziya Gökalp", "Mehmet Akif Ersoy", "Namık Kemal", "Necip Fazıl Kısakürek"],
    correct: "Mehmet Akif Ersoy",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_551",
    question: "Osmanlı İmparatorluğu'nun kurucusu olan bey kimdir?",
    options: ["Ertuğrul Gazi", "Osman Bey", "Orhan Gazi", "Süleyman Şah"],
    correct: "Osman Bey",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_552",
    question: "Atatürk'ün Samsun'a çıkarak Milli Mücadele'yi başlattığı tarih hangisidir?",
    options: ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "30 Ağustos 1922"],
    correct: "19 Mayıs 1919",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_553",
    question: "Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açan Selçuklu sultanı kimdir?",
    options: ["Tuğrul Bey", "Alparslan", "Melihşah", "Kılıçarslan"],
    correct: "Alparslan",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_554",
    question: "Osmanlı Devleti'nin ilk başkenti neresidir?",
    options: ["Söğüt", "Bursa", "Edirne", "İstanbul"],
    correct: "Söğüt",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_555",
    question: "Cumhuriyetimiz hangi tarihte ilan edilmiştir?",
    options: ["29 Ekim 1923", "23 Nisan 1920", "19 Mayıs 1919", "30 Ağustos 1922"],
    correct: "29 Ekim 1923",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_556",
    question: "İlk Türk devletlerinde hükümdarlara verilen unvanlardan biri hangisidir?",
    options: ["Kral", "Padişah", "Han / Hakan", "Sultan"],
    correct: "Han / Hakan",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_557",
    question: "Orhun Abideleri hangi tarihi devlete aittir?",
    options: ["Göktürk Devleti", "Uygur Devleti", "Hun Devleti", "Selçuklu Devleti"],
    correct: "Göktürk Devleti",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_558",
    question: "Mimar Sinan'ın 'çıraklık eserim' dediği İstanbul'daki ünlü cami hangisidir?",
    options: ["Süleymaniye Camii", "Selimiye Camii", "Şehzade Camii", "Sultanahmet Camii"],
    correct: "Şehzade Camii",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_559",
    question: "Mimar Sinan'ın 'kalfalık eserim' dediği şaheseri hangisidir?",
    options: ["Süleymaniye Camii", "Selimiye Camii", "Şehzade Camii", "Mihrimah Sultan Camii"],
    correct: "Süleymaniye Camii",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_560",
    question: "Mimar Sinan'ın 'ustalık eserim' dediği Edirne'deki cami hangisidir?",
    options: ["Süleymaniye Camii", "Selimiye Camii", "Şehzade Camii", "Fatih Camii"],
    correct: "Selimiye Camii",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_561",
    question: "Osmanlı Devleti'nde Yavuz Sultan Selim'in Mısır Seferi sonucunda Osmanlı'ya geçen önemli unvan hangisidir?",
    options: ["Sultan", "Halife", "Hakan", "Şah"],
    correct: "Halife",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_562",
    question: "İlk yazılı anlaşma olarak tarihe geçen Kadeş Anlaşması hangi iki devlet arasında yapılmıştır?",
    options: ["Mısır - Hitit", "Asur - Sümer", "Babil - Pers", "Yunan - Roma"],
    correct: "Mısır - Hitit",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_563",
    question: "Eşeğe ters binmesi ve fıkralarıyla ünlü Türk mizah ve bilgelik büyüğü kimdir?",
    options: ["Keloğlan", "Karagöz", "Nasreddin Hoca", "Hacivat"],
    correct: "Nasreddin Hoca",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_564",
    question: "İstiklal Marşı'mızın ilk kelimesi hangisidir?",
    options: ["Sönme", "Çatma", "Korkma", "Arkadaş"],
    correct: "Korkma",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_565",
    question: "Geleneksel Türk gölge oyununun iki ana karakteri kimlerdir?",
    options: ["Keloğlan - Köse", "Karagöz - Hacivat", "Meddah - Orta Oyunu", "Kavuklu - Pişekar"],
    correct: "Karagöz - Hacivat",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_566",
    question: "Kur'an-ı Kerim'in ilk inen ayeti hangi emirle başlar?",
    options: ["Yaz", "Oku", "Düşün", "Söyle"],
    correct: "Oku",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_567",
    question: "Yaz Kur'an kurslarında öğrendiğimiz ve namaza başlarken söylediğimiz 'Allah-u Ekber' kelimesinin anlamı nedir?",
    options: ["Allah merhametlidir", "Allah en büyüktür", "Allah birdir", "Allah her şeyi bilir"],
    correct: "Allah en büyüktür",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_568",
    question: "Hristiyanların ibadet yeri kilise, Yahudilerin sinagog iken Müslümanların ibadet yeri neresidir?",
    options: ["Kütüphane", "Cami / Mescit", "Okul", "Dergah"],
    correct: "Cami / Mescit",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_569",
    question: "Müslümanların kutsal kitabı hangisidir?",
    options: ["Tevrat", "Zebur", "İncil", "Kur'an-ı Kerim"],
    correct: "Kur'an-ı Kerim",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_570",
    question: "Peygamber Efendimiz (s.a.v.) hangi şehirde doğmuştur?",
    options: ["Medine", "Mekke", "Kudüs", "Taif"],
    correct: "Mekke",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_571",
    question: "Her güzel işe başlarken söylediğimiz 'Besmele'nin tam okunuşu nasıldır?",
    options: ["Elhamdülillahi Rabbil Alemin", "Bismillahirrahmanirrahim", "Euzubillahimineşşeytanirracim", "Subhanekeallahümme"],
    correct: "Bismillahirrahmanirrahim",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_572",
    question: "İslam dininin peygamberi kimdir?",
    options: ["Hz. İbrahim", "Hz. İsa", "Hz. Muhammed (s.a.v.)", "Hz. Musa"],
    correct: "Hz. Muhammed (s.a.v.)",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_573",
    question: "Müslümanların Kabe'nin etrafında yedi kez dönerek yaptıkları ibadete ne ad verilir?",
    options: ["Tavaf", "Vakfe", "Sa'y", "İhram"],
    correct: "Tavaf",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_574",
    question: "Dinin direği olarak nitelendirilen ve günde 5 vakit yerine getirilen ibadet hangisidir?",
    options: ["Oruç", "Zekat", "Hac", "Namaz"],
    correct: "Namaz",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_575",
    question: "Mekke'de bulunan ve Müslümanların namaz kılarken yöneldikleri siyah örtülü kutsal yapı hangisidir?",
    options: ["Mescid-i Aksa", "Kabe", "Mescid-i Nebi", "Kubbetü's-Sahra"],
    correct: "Kabe",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_576",
    question: "Kur'an-ı Kerim'in her 20 sayfadan oluşan bölümlerine ne ad verilir?",
    options: ["Ayet", "Sure", "Cüz", "Meal"],
    correct: "Cüz",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_577",
    question: "Peygamber Efendimiz'in (s.a.v.) kabrinin bulunduğu şehir hangisidir?",
    options: ["Mekke", "Medine", "Kudüs", "Şam"],
    correct: "Medine",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_578",
    question: "Namaz kılmak için camiye gittiğimizde ezan okuyan görevliye ne ad verilir?",
    options: ["Müezzin", "İmam", "Vaiz", "Müftü"],
    correct: "Müezzin",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_579",
    question: "Camide cemaate namaz kıldıran ve önderlik eden görevliye ne ad verilir?",
    options: ["Müezzin", "Kayyım", "İmam", "Hatip"],
    correct: "İmam",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_580",
    question: "Peygamber Efendimiz'in hicret ederken Hz. Ebu Bekir ile sığındıkları ünlü mağara hangisidir?",
    options: ["Hira Mağarası", "Sevr Mağarası", "Kehf Mağarası", "Uhud Mağarası"],
    correct: "Sevr Mağarası",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_581",
    question: "Kur'an-ı Kerim'in ilk inmeye başladığı ve Peygamberimiz'e ilk vahyin geldiği mağara hangisidir?",
    options: ["Sevr Mağarası", "Hira Mağarası", "Kehf Mağarası", "Uhud Mağarası"],
    correct: "Hira Mağarası",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_582",
    question: "İslam tarihinde ilk ezanı okuyan ve sesinin güzelliğiyle bilinen sahabi kimdir?",
    options: ["Hz. Ali", "Hz. Bilal-i Habeşi", "Hz. Ömer", "Hz. Ebubekir"],
    correct: "Hz. Bilal-i Habeşi",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_583",
    question: "Kur'an-ı Kerim'de kaç sure bulunmaktadır?",
    options: ["114", "6666", "30", "40"],
    correct: "114",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_584",
    question: "İslam dininde zengin Müslümanların yılda bir kez mallarının belli bir kısmını fakirlere vermesine ne ad verilir?",
    options: ["Sadaka", "Zekat", "Fitre", "Öşür"],
    correct: "Zekat",
    difficulty: "medium",
    category: "Dini Genel Küktür"
  },
  {
    id: "mil_q_585",
    question: "Ramazan ayında yatsı namazından sonra cemaatle kılınan sünnet namaz hangisidir?",
    options: ["Teheccüd Namazı", "Teravih Namazı", "Cuma Namazı", "Bayram Namazı"],
    correct: "Teravih Namazı",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_586",
    question: "Peygamber Efendimiz'in (s.a.v.) süt annesinin adı nedir?",
    options: ["Amine", "Halime", "Sureyya", "Fatıma"],
    correct: "Halime",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_587",
    question: "Peygamber Efendimiz'in (s.a.v.) ilk eşi ve altı çocuğunun annesi olan büyük sahabi kimdir?",
    options: ["Hz. Aişe", "Hz. Hatice", "Hz. Fatıma", "Hz. Mariye"],
    correct: "Hz. Hatice",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_588",
    question: "Peygamber Efendimiz'in dedesinin adı nedir?",
    options: ["Ebu Talip", "Abdülmuttalip", "Abdullah", "Ebu Lehep"],
    correct: "Abdülmuttalip",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_589",
    question: "Müslümanların ilk kıblesi olan ve Kudüs'te bulunan kutsal mescit hangisidir?",
    options: ["Mescid-i Haram", "Mescid-i Nebi", "Mescid-i Aksa", "Kuba Mescidi"],
    correct: "Mescid-i Aksa",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_590",
    question: "Peygamberimiz'in hicret ederken Medine yakınlarında inşa ettirdiği, İslam tarihinin ilk mescidi hangisidir?",
    options: ["Mescid-i Haram", "Mescid-i Nebi", "Kuba Mescidi", "Mescid-i Kıbleteyn"],
    correct: "Kuba Mescidi",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_591",
    question: "Müslümanlar ile Mekkeli müşrikler arasında yapılan ilk büyük savaş hangisidir?",
    options: ["Uhud Savaşı", "Hendek Savaşı", "Bedir Savaşı", "Hayber Savaşı"],
    correct: "Bedir Savaşı",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_592",
    question: "Boğazı, tarihi sarayları ve Kız Kulesi ile ünlü olan, iki kıta üzerine kurulu en kalabalık ilimiz hangisidir?",
    options: ["İstanbul", "Ankara", "Konya", "Samsun"],
    correct: "İstanbul",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_593",
    question: "Ege'nin incisi olarak bilinen, tarihi Saat Kulesi ve Kordonboyu ile ünlü ilimiz hangisidir?",
    options: ["İzmir", "Ankara", "Konya", "Samsun"],
    correct: "İzmir",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_594",
    question: "Yeşil Bursa olarak bilinen, Uludağ'ı ve ipeği ile ünlü, Osmanlı'nın eski başkentlerinden olan ilimiz hangisidir?",
    options: ["Bursa", "Ankara", "Konya", "Samsun"],
    correct: "Bursa",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_595",
    question: "Pamukkale travertenleri ve horozu ile ünlü olan ilimiz hangisidir?",
    options: ["Denizli", "Ankara", "Konya", "Samsun"],
    correct: "Denizli",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_596",
    question: "Sümela Manastırı, hamsisi ve kemençesi ile ünlü Karadeniz ilimiz hangisidir?",
    options: ["Trabzon", "Ankara", "Konya", "Samsun"],
    correct: "Trabzon",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_597",
    question: "Ülkemizin çay bahçeleri ve Ayder Yaylası ile ünlü yeşil Karadeniz ilimiz hangisidir?",
    options: ["Rize", "Ankara", "Konya", "Samsun"],
    correct: "Rize",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_598",
    question: "Turizmin başkenti olarak bilinen, Düden Şelalesi ve Konyaaltı Plajı ile ünlü ilimiz hangisidir?",
    options: ["Antalya", "Ankara", "Konya", "Samsun"],
    correct: "Antalya",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_599",
    question: "Kebabı, şalgamı ve Taş Köprü'sü ile ünlü Akdeniz ilimiz hangisidir?",
    options: ["Adana", "Ankara", "Konya", "Samsun"],
    correct: "Adana",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_600",
    question: "Baklavası, fıstığı ve Zeugma Mozaik Müzesi ile ünlü gastronomi şehrimiz hangisidir?",
    options: ["Gaziantep", "Ankara", "Konya", "Samsun"],
    correct: "Gaziantep",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_601",
    question: "Peygamberler şehri olarak bilinen, Balıklıgöl ve Göbeklitepe'ye ev sahipliği yapan ilimiz hangisidir?",
    options: ["Şanlıurfa", "Ankara", "Konya", "Samsun"],
    correct: "Şanlıurfa",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_602",
    question: "Mevlana Müzesi ve etliekmeyi ile ünlü, geniş ovalara sahip ilimiz hangisidir?",
    options: ["Konya", "Ankara", "Samsun", "Diğer Şık"],
    correct: "Konya",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_603",
    question: "Çifte Minareli Medrese'si, kadayıf dolması ve Palandöken kayak merkezi ile ünlü ilimiz hangisidir?",
    options: ["Erzurum", "Ankara", "Konya", "Samsun"],
    correct: "Erzurum",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_604",
    question: "Tarihi surları ve karpuzu ile ünlü Güneydoğu Anadolu ilimiz hangisidir?",
    options: ["Diyarbakır", "Ankara", "Konya", "Samsun"],
    correct: "Diyarbakır",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_605",
    question: "Tarihi medreseleri ve Kangal köpeği ile ünlü ilimiz hangisidir?",
    options: ["Sivas", "Ankara", "Konya", "Samsun"],
    correct: "Sivas",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_606",
    question: "Ani Harabeleri, peyniri ve kış turizmi ile ünlü en doğudaki sınır ilimiz hangisidir?",
    options: ["Kars", "Ankara", "Konya", "Samsun"],
    correct: "Kars",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_607",
    question: "İncir üretimi ile dünya çapında birinci sırada olan ilimiz hangisidir?",
    options: ["Aydın", "Ankara", "Konya", "Samsun"],
    correct: "Aydın",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_608",
    question: "Dünya çapında kayısı üretimiyle ünlü olan ilimiz hangisidir?",
    options: ["Malatya", "Ankara", "Konya", "Samsun"],
    correct: "Malatya",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_609",
    question: "Bodrum, Fethiye ve Marmaris gibi dünyaca ünlü turistik ilçelere sahip ilimiz hangisidir?",
    options: ["Muğla", "Ankara", "Konya", "Samsun"],
    correct: "Muğla",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_610",
    question: "Pastırması, sucuğu, mantısı ve Erciyes Dağı ile ünlü ilimiz hangisidir?",
    options: ["Kayseri", "Ankara", "Konya", "Samsun"],
    correct: "Kayseri",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_611",
    question: "Tarihi taş evleri ve dar sokakları ile açık hava müzesini andıran ilimiz hangisidir?",
    options: ["Mardin", "Ankara", "Konya", "Samsun"],
    correct: "Mardin",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_612",
    question: "Kur'an-ı Kerim'in ilk suresi olup namazların her rekatında okunan sure hangisidir?",
    options: ["Fatiha", "Mülk", "Yasin", "Nisa"],
    correct: "Fatiha",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_613",
    question: "Kur'an-ı Kerim'in kalbi olarak nitelendirilen meşhur sure hangisidir?",
    options: ["Yasin", "Bakara", "Kevser", "Fatiha"],
    correct: "Yasin",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_614",
    question: "Tevhid inancını en özlü şekilde anlatan, 'De ki: O Allah tektir' diye başlayan sure hangisidir?",
    options: ["İhlas", "Bakara", "Kevser", "Fatiha"],
    correct: "İhlas",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_615",
    question: "Kötülüklerden Allah'a sığınmak için okunan ve 'De ki: Sabahın Rabbine sığınırım' diye başlayan sure hangisidir?",
    options: ["Felak", "Bakara", "Kevser", "Fatiha"],
    correct: "Felak",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_616",
    question: "Kötülüklerden ve vesveselerden sığınmak için okunan, Kur'an'ın en son suresi hangisidir?",
    options: ["Nas", "Bakara", "Kevser", "Fatiha"],
    correct: "Nas",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_617",
    question: "Kur'an'ın en kısa suresi olan, 'Şüphesiz biz sana Kevser'i verdik' diye başlayan sure hangisidir?",
    options: ["Kevser", "Mülk", "Yasin", "Nisa"],
    correct: "Kevser",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_618",
    question: "Kabe'yi yıkmaya gelen Ebrehe ordusunun helak edilişini anlatan sure hangisidir?",
    options: ["Fil", "Bakara", "Kevser", "Fatiha"],
    correct: "Fil",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_619",
    question: "Zamana yemin ederek başlayan ve insanın ziyanda olduğunu belirten sure hangisidir?",
    options: ["Asr", "Bakara", "Kevser", "Fatiha"],
    correct: "Asr",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_620",
    question: "Bakara suresinin 255. ayeti olan, Allah'ın yüce sıfatlarını anlatan meşhur ayet hangisidir?",
    options: ["Ayetel Kürsi", "Bakara", "Kevser", "Fatiha"],
    correct: "Ayetel Kürsi",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_621",
    question: "Mekke'nin fethinden veya genel fetih müjdesinden bahseden sure hangisidir?",
    options: ["Fatih", "Bakara", "Kevser", "Fatiha"],
    correct: "Fatih",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_622",
    question: "İçinde Ayetel Kürsi'nin de yer aldığı, Kur'an'ın en uzun suresi hangisidir?",
    options: ["Bakara", "Mülk", "Yasin", "Nisa"],
    correct: "Bakara",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_623",
    question: "Kabir azabından koruyucu olarak bilinen ve 'Tebareke' adıyla da anılan sure hangisidir?",
    options: ["Mülk", "Bakara", "Kevser", "Fatiha"],
    correct: "Mülk",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_624",
    question: "Kıyamet gününden ve büyük haberden bahseden, 'Amme' adıyla bilinen sure hangisidir?",
    options: ["Nebe", "Bakara", "Kevser", "Fatiha"],
    correct: "Nebe",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_625",
    question: "Her ayette 'Rabbinizin nimetlerinden hangisini yalanlarsınız?' diye tekrarlanan sure hangisidir?",
    options: ["Rahman", "Bakara", "Kevser", "Fatiha"],
    correct: "Rahman",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_626",
    question: "İlk inen ayetleri barındıran ve 'Yaratan Rabbinin adıyla oku' diye başlayan sure hangisidir?",
    options: ["Alak", "Bakara", "Kevser", "Fatiha"],
    correct: "Alak",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_627",
    question: "Gemisiyle tufandan inananları kurtaran peygamber kimdir?",
    options: ["Hz. Nuh", "Hz. Musa", "Hz. İbrahim", "Hz. Adem"],
    correct: "Hz. Nuh",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_628",
    question: "Ateşe atıldığı halde yanmayan ve Nemrut'a karşı mücadele eden peygamber kimdir?",
    options: ["Hz. İbrahim", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. İbrahim",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_629",
    question: "Kardeşleri tarafından kuyuya atılan, rüya tabiri yeteneğiyle Mısır'a yönetici olan peygamber kimdir?",
    options: ["Hz. Yusuf", "Hz. Musa", "Hz. İbrahim", "Hz. Adem"],
    correct: "Hz. Yusuf",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_630",
    question: "Ağır hastalıklara ve sabrıyla tüm insanlığa örnek olan peygamber kimdir?",
    options: ["Hz. Eyüp", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. Eyüp",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_631",
    question: "Hayvanların dillerini anlayan, rüzgarlara hükmeden hükümdar peygamber kimdir?",
    options: ["Hz. Süleyman", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. Süleyman",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_632",
    question: "Demiri hamur gibi şekillendirebilen, sesi çok güzel olan ve kendisine Zebur verilen peygamber kimdir?",
    options: ["Hz. Davut", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. Davut",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_633",
    question: "Kızıldeniz'i asasıyla ikiye bölen ve Firavun'a karşı mücadele eden peygamber kimdir?",
    options: ["Hz. Musa", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. Musa",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_634",
    question: "Allah'ın izniyle hastaları iyileştiren, çamurdan kuş yapıp uçuran peygamber kimdir?",
    options: ["Hz. İsa", "Hz. Musa", "Hz. İbrahim", "Hz. Adem"],
    correct: "Hz. İsa",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_635",
    question: "Balığın karnında günlerce tövbe ederek kurtulan peygamber kimdir?",
    options: ["Hz. Yunus", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. Yunus",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_636",
    question: "Kayadan mucizevi bir deve çıkaran Semud kavminin peygamberi kimdir?",
    options: ["Hz. Salih", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. Salih",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_637",
    question: "Yeryüzündeki ilk insan ve ilk peygamber kimdir?",
    options: ["Hz. Adem", "Hz. Nuh", "Hz. Yusuf", "Hz. İsa"],
    correct: "Hz. Adem",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_638",
    question: "Bir basamaklı en büyük tek sayı hangisidir?",
    options: ["7", "8", "9", "10"],
    correct: "9",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_639",
    question: "İki basamaklı en küçük sayı hangisidir?",
    options: ["9", "10", "11", "99"],
    correct: "10",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_640",
    question: "Bir gün kaç saattir?",
    options: ["12", "24", "48", "60"],
    correct: "24",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_641",
    question: "Bir saat kaç dakikadır?",
    options: ["30", "45", "60", "90"],
    correct: "60",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_642",
    question: "Haftanın beşinci günü hangisidir?",
    options: ["Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
    correct: "Cuma",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_643",
    question: "Yılda kaç mevsim vardır?",
    options: ["3", "4", "5", "12"],
    correct: "4",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_644",
    question: "Bir yılda kaç ay vardır?",
    options: ["4", "10", "12", "52"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_645",
    question: "Üçüncü dereceden bir açının dik açı olabilmesi için kaç derece olması gerekir?",
    options: ["45", "90", "180", "360"],
    correct: "90",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_646",
    question: "Karenin kaç kenarı vardır?",
    options: ["3", "4", "5", "6"],
    correct: "4",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_647",
    question: "Üçgenin iç açılarının toplamı kaç derecedir?",
    options: ["90", "180", "270", "360"],
    correct: "180",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_648",
    question: "Hangi sayının 5 katı 25 eder?",
    options: ["3", "4", "5", "6"],
    correct: "5",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_649",
    question: "50 sayısının yarısı kaçtır?",
    options: ["10", "20", "25", "30"],
    correct: "25",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_650",
    question: "En küçük asal sayı hangisidir?",
    options: ["0", "1", "2", "3"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_651",
    question: "Gökkuşağında kaç renk bulunur?",
    options: ["5", "6", "7", "8"],
    correct: "7",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_652",
    question: "Trafik ışıklarında en üstte yanan renk hangisidir?",
    options: ["Kırmızı", "Mavi", "Sarı", "Yeşil"],
    correct: "Kırmızı",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_653",
    question: "Hangi hayvan çölde susuzluğa en dayanıklı hayvandır?",
    options: ["At", "Ceylan", "Deve", "Eşek"],
    correct: "Deve",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_654",
    question: "Karıncaların kaç bacağı vardır?",
    options: ["10", "4", "6", "8"],
    correct: "6",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_655",
    question: "Hangisi uçabilen bir memeli hayvandır?",
    options: ["Kelebek", "Kuş", "Uçan Balık", "Yarasa"],
    correct: "Yarasa",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_656",
    question: "Gözleri açık uyuyan tek canlı hangisidir?",
    options: ["Balık", "Kuş", "Tavşan", "Yılan"],
    correct: "Balık",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_657",
    question: "Dünya'nın en büyük adası hangisidir?",
    options: ["Grönland", "Kıbrıs", "Madagaskar", "İzlanda"],
    correct: "Grönland",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_658",
    question: "Telefonu icat eden mucit kimdir?",
    options: ["Albert Einstein", "Alexander Graham Bell", "Nikola Tesla", "Thomas Edison"],
    correct: "Alexander Graham Bell",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_659",
    question: "İnternet tarayıcısında adres çubuğunun başında yer alan 'www' kısaltmasının açılımı nedir?",
    options: ["Web World Wide", "Wide World Web", "World Wide Web", "World Word Web"],
    correct: "World Wide Web",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_660",
    question: "Bilgisayarın geçici hafızası olarak adlandırılan bellek türü hangisidir?",
    options: ["Flash Bellek", "Hard Disk", "RAM", "ROM"],
    correct: "RAM",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_661",
    question: "Hangi vitamin eksikliğinde gece körlüğü ortaya çıkar?",
    options: ["A Vitamini", "B Vitamini", "C Vitamini", "D Vitamini"],
    correct: "A Vitamini",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_662",
    question: "Sıcaklığı ölçen alet hangisidir?",
    options: ["Barometre", "Kronometre", "Sismograf", "Termometre"],
    correct: "Termometre",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_663",
    question: "Havadaki nemi ölçen alet hangisidir?",
    options: ["Barometre", "Higrometre", "Sismograf", "Termometre"],
    correct: "Higrometre",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_664",
    question: "Kandaki oksijeni vücuda taşıyan ve demir içeren protein hangisidir?",
    options: ["Antikor", "Hemoglobin", "Kollajen", "İnsülin"],
    correct: "Hemoglobin",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_665",
    question: "Güneş'e en yakın gezegen hangisidir?",
    options: ["Dünya", "Mars", "Merkür", "Venüs"],
    correct: "Merkür",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_666",
    question: "Güneş sistemindeki en dıştaki gezegen hangisidir?",
    options: ["Neptün", "Plüton", "Satürn", "Uranüs"],
    correct: "Neptün",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_667",
    question: "Dünya'nın çevresini dolaşan ilk denizci kimdir?",
    options: ["Amerigo Vespucci", "Kristof Kolomb", "Macellan", "Vasco da Gama"],
    correct: "Macellan",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_668",
    question: "Cumhurbaşkanlığı Forsunda kaç tane küçük yıldız vardır?",
    options: ["12", "16", "24", "32"],
    correct: "16",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_669",
    question: "Hangi spor dalında kaleci, forvet ve savunma oyuncuları suyun içinde mücadele eder?",
    options: ["Kürek", "Paletli yüzme", "Su topu", "Yüzme"],
    correct: "Su topu",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_670",
    question: "Satranç tahtasında toplam kaç kare bulunur?",
    options: ["100", "32", "64", "81"],
    correct: "64",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_671",
    question: "İstiklal Marşı'mız toplam kaç kıtadır?",
    options: ["10", "2", "4", "8"],
    correct: "10",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_672",
    question: "Cumhuriyetimizin kaçıncı yılını 2023 yılında kutladık?",
    options: ["100", "150", "50", "75"],
    correct: "100",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_673",
    question: "Futbolda bir takım sahaya kaç oyuncuyla çıkar?",
    options: ["11", "15", "7", "9"],
    correct: "11",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_674",
    question: "Basketbolda bir takım sahada kaç oyuncuyla mücadele eder?",
    options: ["11", "5", "6", "7"],
    correct: "5",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_675",
    question: "Voleybolda bir takım sahada kaç oyuncuyla oynar?",
    options: ["5", "6", "7", "8"],
    correct: "6",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_676",
    question: "Hangi ülkenin bayrağında kırmızı zemin üzerinde beyaz hilal ve yıldız bulunur?",
    options: ["Azerbaycan", "Cezayir", "Tunus", "Türkiye"],
    correct: "Türkiye",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_677",
    question: "Türkçe'de kaç sesli harf vardır?",
    options: ["21", "29", "6", "8"],
    correct: "8",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_678",
    question: "Türkçe alfabesinde toplam kaç harf bulunur?",
    options: ["28", "29", "30", "32"],
    correct: "29",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_679",
    question: "Güneş ışığı Dünya'ya yaklaşık kaç dakikada ulaşır?",
    options: ["1 dakika", "1 saat", "24 dakika", "8 dakika"],
    correct: "8 dakika",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_680",
    question: "Dünya'nın katmanlarından hangisi en içte yer alır?",
    options: ["Atmosfer", "Manto", "Yer Kabuğu", "Çekirdek"],
    correct: "Çekirdek",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_681",
    question: "Hangi element havada en yüksek oranda bulunur?",
    options: ["Azot", "Hidrojen", "Karbondioksit", "Oksijen"],
    correct: "Azot",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_682",
    question: "Kemosentez veya fotosentez yapamayan, sporla çoğalan canlı grubu hangisidir?",
    options: ["Algler", "Bakteriler", "Bitkiler", "Mantarlar"],
    correct: "Mantarlar",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_683",
    question: "Mikroskobu ilk geliştiren bilim insanı kimdir?",
    options: ["Galileo Galilei", "Louis Pasteur", "Robert Hooke", "Zacharias Janssen"],
    correct: "Zacharias Janssen",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_684",
    question: "İlk uzay seyahatini gerçekleştiren insan kimdir?",
    options: ["Buzz Aldrin", "John Glenn", "Neil Armstrong", "Yuri Gagarin"],
    correct: "Yuri Gagarin",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_685",
    question: "Ay'a ilk ayak basan insan kimdir?",
    options: ["Buzz Aldrin", "John Glenn", "Neil Armstrong", "Yuri Gagarin"],
    correct: "Neil Armstrong",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_686",
    question: "Hangi ülke piramitleri ile dünyaca ünlüdür?",
    options: ["Hindistan", "Meksika", "Mısır", "Çin"],
    correct: "Mısır",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_687",
    question: "Çin Seddi hangi ülkede yer almaktadır?",
    options: ["Japonya", "Kore", "Moğolistan", "Çin"],
    correct: "Çin",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_688",
    question: "Eyfel Kulesi hangi şehirdedir?",
    options: ["Berlin", "Londra", "Paris", "Roma"],
    correct: "Paris",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_689",
    question: "Kız Kulesi hangi ilimizde yer alır?",
    options: ["Muğla", "Çanakkale", "İstanbul", "İzmir"],
    correct: "İstanbul",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_690",
    question: "Selimiye Camii hangi ilimizde yer almaktadır?",
    options: ["Bursa", "Edirne", "Konya", "İstanbul"],
    correct: "Edirne",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_691",
    question: "Anıtkabir hangi şehrimizde yer alır?",
    options: ["Ankara", "Sivas", "İstanbul", "İzmir"],
    correct: "Ankara",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_692",
    question: "Çanakkale Şehitliği hangi ilimizdedir?",
    options: ["Balıkesir", "Edirne", "Tekirdağ", "Çanakkale"],
    correct: "Çanakkale",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_693",
    question: "Mevlana Müzesi hangi ilimizdedir?",
    options: ["Ankara", "Kayseri", "Konya", "Sivas"],
    correct: "Konya",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_694",
    question: "Yunus Emre'nin mezarının olduğu söylenen Eskişehir ilçesi hangisidir?",
    options: ["Mihalıççık", "Odunpazarı", "Sivrihisar", "Çifteler"],
    correct: "Mihalıççık",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_695",
    question: "İstiklal Marşı'mız hangi yıl kabul edilmiştir?",
    options: ["1920", "1921", "1923", "1924"],
    correct: "1921",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_696",
    question: "TBMM hangi tarihte açılmıştır?",
    options: ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"],
    correct: "23 Nisan 1920",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_697",
    question: "İlk anayasamız olan Teşkilat-ı Esasiye hangi yıl kabul edilmiştir?",
    options: ["1920", "1921", "1924", "1961"],
    correct: "1921",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_698",
    question: "Osmanlı Devleti'nin son padişahı kimdir?",
    options: ["II. Abdülhamit", "Mehmet Reşat", "V. Murat", "Vahdettin"],
    correct: "Vahdettin",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_699",
    question: "Fatih Sultan Mehmet kaç yaşında İstanbul'u fethetmiştir?",
    options: ["18", "21", "25", "30"],
    correct: "21",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_700",
    question: "Preveze Deniz Zaferi hangi Osmanlı amirali komutasında kazanılmıştır?",
    options: ["Barbaros Hayreddin Paşa", "Oruç Reis", "Piri Reis", "Seydi Ali Reis"],
    correct: "Barbaros Hayreddin Paşa",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_701",
    question: "İlk haritasını ceylan derisi üzerine çizen ünlü Osmanlı denizcisi kimdir?",
    options: ["Barbaros Hayreddin Paşa", "Kılıç Ali Paşa", "Piri Reis", "Seydi Ali Reis"],
    correct: "Piri Reis",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_702",
    question: "İlk Türkçe sözlük olan Divânu Lugâti't-Türk kim tarafından yazılmıştır?",
    options: ["Ahmet Yesevi", "Edip Ahmet Yükneki", "Kaşgarlı Mahmut", "Yusuf Has Hacib"],
    correct: "Kaşgarlı Mahmut",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_703",
    question: "Kutadgu Bilig adlı eserin yazarı kimdir?",
    options: ["Ahmet Yesevi", "Edip Ahmet Yükneki", "Kaşgarlı Mahmut", "Yusuf Has Hacib"],
    correct: "Yusuf Has Hacib",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_704",
    question: "Divan-ı Hikmet adlı eserin yazarı ve ilk Türk mutasavvıfı kimdir?",
    options: ["Hacı Bektaş Veli", "Hoca Ahmed Yesevî", "Mevlana", "Yunus Emre"],
    correct: "Hoca Ahmed Yesevî",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_705",
    question: "Makalat adlı eseriyle bilinen Anadolu velisi kimdir?",
    options: ["Ahi Evran", "Hacı Bektaş Veli", "Mevlana", "Yunus Emre"],
    correct: "Hacı Bektaş Veli",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_706",
    question: "Risaletü'n-Nushiyye adlı eserin yazarı olan ünlü halk şairi kimdir?",
    options: ["Dadaloğlu", "Karacaoğlan", "Köroğlu", "Yunus Emre"],
    correct: "Yunus Emre",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_707",
    question: "Ahilik teşkilatının kurucusu ve esnafların piri kimdir?",
    options: ["Ahi Evran", "Hacı Bektaş Veli", "Mevlana", "Yunus Emre"],
    correct: "Ahi Evran",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_708",
    question: "Fatih Sultan Mehmet'in hocası ve İstanbul'un manevi fatihi olarak bilinen tıp bilgini kimdir?",
    options: ["Akşemsettin", "Ali Kuşçu", "Molla Gürani", "Zenbilli Ali Efendi"],
    correct: "Akşemsettin",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_709",
    question: "Fatih Sultan Mehmet döneminde İstanbul'a davet edilen ünlü matematikçi ve gökbilimci kimdir?",
    options: ["Ali Kuşçu", "Kadızade-i Rumi", "Takiyüddin", "Uluğ Bey"],
    correct: "Ali Kuşçu",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_710",
    question: "Güneş merkezli evren teorisini ilk ortaya koyan Polonyalı gökbilimci kimdir?",
    options: ["Galileo", "Kepler", "Kopernik", "Newton"],
    correct: "Kopernik",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_711",
    question: "Kendi yaptığı kanatlarla Galata Kulesi'nden Üsküdar'a uçan Osmanlı bilgini kimdir?",
    options: ["Evliya Çelebi", "Hezarfen Ahmed Çelebi", "Katip Çelebi", "Lagari Hasan Çelebi"],
    correct: "Hezarfen Ahmed Çelebi",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_712",
    question: "Kendi yaptığı roketle dikey olarak uçan ilk insan olan Osmanlı bilgini kimdir?",
    options: ["Hezarfen Ahmed Çelebi", "Katip Çelebi", "Lagari Hasan Çelebi", "Takiyüddin"],
    correct: "Lagari Hasan Çelebi",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_713",
    question: "Seyahatname adlı dev eseriyle ünlü Osmanlı seyyahı kimdir?",
    options: ["Evliya Çelebi", "Katip Çelebi", "Piri Reis", "Seydi Ali Reis"],
    correct: "Evliya Çelebi",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_714",
    question: "Cihannüma ve Keşfü'z-Zunûn adlı bibliyografik eserlerin yazarı Osmanlı bilgini kimdir?",
    options: ["Evliya Çelebi", "Hezarfen Ahmed Çelebi", "Katip Çelebi", "Naima"],
    correct: "Katip Çelebi",
    difficulty: "hard",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_715",
    question: "İslam dininde Peygamber Efendimiz'e getirilen salavatın okunuşu nasıldır?",
    options: ["Allahümme salli ala Muhammed", "Elhamdülillah", "Estağfirullah", "Sübhanallah"],
    correct: "Allahümme salli ala Muhammed",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_716",
    question: "Her ezandan sonra okunan duaya ne ad verilir?",
    options: ["Ettehiyyatü", "Ezan Duası", "Kunut Duası", "Sübhaneke"],
    correct: "Ezan Duası",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_717",
    question: "Namazların sonunda okunan ve anne-babamız için bağışlanma dilediğimiz dua hangisidir?",
    options: ["Fatiha", "Kunut Duaları", "Rabbena Duaları", "Sübhaneke"],
    correct: "Rabbena Duaları",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_718",
    question: "Cemaatle namaz kılınırken imamın arkasında saf tutan cemaatin yaptığı niyete ne ad verilir?",
    options: ["İktida", "İstihare", "İstişare", "İtikaf"],
    correct: "İktida",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_719",
    question: "Hz. Muhammed'in (s.a.v.) kabrinin bulunduğu Mescid-i Nebi içindeki özel cennet bahçesi olarak adlandırılan bölüme ne ad verilir?",
    options: ["Kabe", "Mihrap", "Minber", "Rawdah (Ravza-i Mutahhara)"],
    correct: "Rawdah (Ravza-i Mutahhara)",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_720",
    question: "İslam dininde ilk cuma namazı nerede kılınmıştır?",
    options: ["Kuba Mescidi", "Mescid-i Haram", "Mescid-i Nebi", "Ranuna Vadisi"],
    correct: "Ranuna Vadisi",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_721",
    question: "Peygamber Efendimiz'in hicret sırasında Medine'deki evinde misafir olduğu ünlü sahabe kimdir?",
    options: ["Ebu Eyyub el-Ensari", "Enes bin Malik", "Musab bin Umeyr", "Sa'd bin Muaz"],
    correct: "Ebu Eyyub el-Ensari",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_722",
    question: "Peygamberimiz'e 10 yıl boyunca hizmet eden ve O'nun ahlakını öven genç sahabi kimdir?",
    options: ["Abdullah bin Ömer", "Enes bin Malik", "Zeyd bin Harise", "İbn Abbas"],
    correct: "Enes bin Malik",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_723",
    question: "Kur'an-ı Kerim'i ilk kez kitap (mushaf) haline getiren halife kimdir?",
    options: ["Hz. Ali", "Hz. Ebubekir", "Hz. Osman", "Hz. Ömer"],
    correct: "Hz. Ebubekir",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_724",
    question: "Kur'an-ı Kerim'i çoğaltarak çeşitli İslam merkezlerine gönderen halife kimdir?",
    options: ["Hz. Ali", "Hz. Ebubekir", "Hz. Osman", "Hz. Ömer"],
    correct: "Hz. Osman",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_725",
    question: "İslam tarihinde devlet hazinesine ne ad verilir?",
    options: ["Beytülmal", "Cizye", "Sadaka", "Zekat"],
    correct: "Beytülmal",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_726",
    question: "Peygamberimiz'in çocuklarından hangisi O'ndan sonra vefat etmiştir?",
    options: ["Hz. Fatıma", "Hz. Ruqiyye", "Hz. Zeynep", "Hz. İbrahim"],
    correct: "Hz. Fatıma",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_727",
    question: "Namazın içinde elleri kulaklara kaldırıp 'Allahu Ekber' demeye ne ad verilir?",
    options: ["Kıyam", "Rüku", "Secde", "İftitah Tekbiri"],
    correct: "İftitah Tekbiri",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_728",
    question: "Peygamberimizin hicret ettiği 622 yılı başlangıç kabul edilen takvim hangisidir?",
    options: ["Celali Takvim", "Hicri Takvim", "Miladi Takvim", "Rumi Takvim"],
    correct: "Hicri Takvim",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_729",
    question: "Hicri takvimin ilk ayı hangisidir?",
    options: ["Muharrem", "Ramazan", "Recep", "Şaban"],
    correct: "Muharrem",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_730",
    question: "Aşure günü hicri takvimin hangi ayındadır?",
    options: ["Muharrem", "Ramazan", "Recep", "Safer"],
    correct: "Muharrem",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_731",
    question: "Hicri takvimin son ayı hangisidir?",
    options: ["Muharrem", "Ramazan", "Zilhicce", "Şevval"],
    correct: "Zilhicce",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_732",
    question: "Kurban bayramı hicri takvimin hangi ayında kutlanır?",
    options: ["Muharrem", "Recep", "Zilhicce", "Şevval"],
    correct: "Zilhicce",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_733",
    question: "Hac ibadeti hangi ayda yapılır?",
    options: ["Muharrem", "Ramazan", "Recep", "Zilhicce"],
    correct: "Zilhicce",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_734",
    question: "Ramazan bayramı hicri takvimin hangi ayının ilk gününde başlar?",
    options: ["Muharrem", "Ramazan", "Safer", "Şevval"],
    correct: "Şevval",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_735",
    question: "Dinimize göre ergenlik çağına gelmiş, aklı başında her Müslümana ne ad verilir?",
    options: ["Mükellef", "Mümin", "Salih", "Zahit"],
    correct: "Mükellef",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_736",
    question: "Peygamber Efendimiz'in (s.a.v.) İslam'a davet için Medine'ye gönderdiği ilk öğretmen sahabi kimdir?",
    options: ["Enes bin Malik", "Muaz bin Cebel", "Mus'ab bin Umeyr", "Zeyd bin Harise"],
    correct: "Mus'ab bin Umeyr",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_737",
    question: "Yemen'e vali ve öğretmen olarak gönderilen, Peygamberimiz'in 'Muaz ne güzel bir insandır' dediği sahabi kimdir?",
    options: ["Ebu Hureyre", "Enes bin Malik", "Muaz bin Cebel", "Mus'ab bin Umeyr"],
    correct: "Muaz bin Cebel",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_738",
    question: "En çok hadis rivayet eden sahabi kimdir?",
    options: ["Ebu Hureyre", "Enes bin Malik", "Hz. Aişe", "İbn Ömer"],
    correct: "Ebu Hureyre",
    difficulty: "hard",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_739",
    question: "Peygamberimiz'in soyunu devam ettiren kızı Hz. Fatıma ile evlenen dördüncü halife kimdir?",
    options: ["Hz. Ali", "Hz. Ebubekir", "Hz. Osman", "Hz. Ömer"],
    correct: "Hz. Ali",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_740",
    question: "Hz. Ali ile Hz. Fatıma'nın çocukları olan Peygamberimiz'in sevgili torunları kimlerdir?",
    options: ["Hz. Abdullah ve Hz. Kasım", "Hz. Hamza ve Hz. Abbas", "Hz. Hasan ve Hz. Hüseyin", "Hz. Kasım ve Hz. İbrahim"],
    correct: "Hz. Hasan ve Hz. Hüseyin",
    difficulty: "easy",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_741",
    question: "Hangi sayının 3 katı 6 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_742",
    question: "Hangi sayının 6 katı 30 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_743",
    question: "Hangi sayının 5 katı 20 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_744",
    question: "Hangi sayının 3 katı 36 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_745",
    question: "Hangi sayının 3 katı 33 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_746",
    question: "Hangi sayının 8 katı 16 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_747",
    question: "Hangi sayının 2 katı 6 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_748",
    question: "Hangi sayının 5 katı 25 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_749",
    question: "Hangi sayının 2 katı 20 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_750",
    question: "Hangi sayının 5 katı 60 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_751",
    question: "Hangi sayının 8 katı 40 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_752",
    question: "Hangi sayının 9 katı 99 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_753",
    question: "Hangi sayının 6 katı 12 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_754",
    question: "Hangi sayının 4 katı 32 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_755",
    question: "Hangi sayının 7 katı 42 eder?",
    options: ["12", "5", "6", "7"],
    correct: "6",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_756",
    question: "Hangi sayının 4 katı 20 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_757",
    question: "Hangi sayının 7 katı 21 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_758",
    question: "Hangi sayının 3 katı 24 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_759",
    question: "Hangi sayının 3 katı 21 eder?",
    options: ["14", "6", "7", "8"],
    correct: "7",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_760",
    question: "Hangi sayının 7 katı 77 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_761",
    question: "Hangi sayının 6 katı 12 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_762",
    question: "Hangi sayının 9 katı 90 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_763",
    question: "Hangi sayının 3 katı 24 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_764",
    question: "Hangi sayının 3 katı 30 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_765",
    question: "Hangi sayının 6 katı 72 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_766",
    question: "Hangi sayının 7 katı 77 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_767",
    question: "Hangi sayının 5 katı 15 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_768",
    question: "Hangi sayının 2 katı 24 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_769",
    question: "Hangi sayının 5 katı 30 eder?",
    options: ["12", "5", "6", "7"],
    correct: "6",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_770",
    question: "Hangi sayının 3 katı 15 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_771",
    question: "Hangi sayının 3 katı 24 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_772",
    question: "Hangi sayının 6 katı 54 eder?",
    options: ["10", "18", "8", "9"],
    correct: "9",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_773",
    question: "Hangi sayının 7 katı 28 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_774",
    question: "Hangi sayının 7 katı 49 eder?",
    options: ["14", "6", "7", "8"],
    correct: "7",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_775",
    question: "Hangi sayının 5 katı 60 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_776",
    question: "Hangi sayının 6 katı 72 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_777",
    question: "Hangi sayının 3 katı 33 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_778",
    question: "Hangi sayının 4 katı 40 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_779",
    question: "Hangi sayının 5 katı 20 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_780",
    question: "Hangi sayının 9 katı 72 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_781",
    question: "Hangi sayının 6 katı 72 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_782",
    question: "Hangi sayının 5 katı 60 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_783",
    question: "Hangi sayının 7 katı 14 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_784",
    question: "Hangi sayının 5 katı 10 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_785",
    question: "Hangi sayının 7 katı 56 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_786",
    question: "Hangi sayının 6 katı 18 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_787",
    question: "Hangi sayının 5 katı 55 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_788",
    question: "Hangi sayının 7 katı 35 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_789",
    question: "Hangi sayının 9 katı 72 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_790",
    question: "Hangi sayının 9 katı 36 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_791",
    question: "Hangi sayının 6 katı 24 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_792",
    question: "Hangi sayının 5 katı 50 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_793",
    question: "Hangi sayının 6 katı 66 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_794",
    question: "Hangi sayının 8 katı 88 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_795",
    question: "Hangi sayının 8 katı 56 eder?",
    options: ["14", "6", "7", "8"],
    correct: "7",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_796",
    question: "Hangi sayının 5 katı 20 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_797",
    question: "Hangi sayının 9 katı 27 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_798",
    question: "Hangi sayının 2 katı 6 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_799",
    question: "Hangi sayının 4 katı 48 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_800",
    question: "Hangi sayının 4 katı 48 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_801",
    question: "Hangi sayının 8 katı 88 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_802",
    question: "Hangi sayının 3 katı 24 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_803",
    question: "Hangi sayının 8 katı 88 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_804",
    question: "Hangi sayının 9 katı 90 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_805",
    question: "Hangi sayının 6 katı 60 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_806",
    question: "Hangi sayının 2 katı 24 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_807",
    question: "Hangi sayının 3 katı 36 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_808",
    question: "Hangi sayının 6 katı 72 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_809",
    question: "Hangi sayının 7 katı 21 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_810",
    question: "Hangi sayının 6 katı 48 eder?",
    options: ["16", "7", "8", "9"],
    correct: "8",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_811",
    question: "Hangi sayının 4 katı 36 eder?",
    options: ["10", "18", "8", "9"],
    correct: "9",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_812",
    question: "Hangi sayının 2 katı 12 eder?",
    options: ["12", "5", "6", "7"],
    correct: "6",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_813",
    question: "Hangi sayının 4 katı 40 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_814",
    question: "Hangi sayının 3 katı 36 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_815",
    question: "Hangi sayının 6 katı 72 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_816",
    question: "Hangi sayının 5 katı 20 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_817",
    question: "Hangi sayının 7 katı 28 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_818",
    question: "Hangi sayının 2 katı 22 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_819",
    question: "Hangi sayının 7 katı 63 eder?",
    options: ["10", "18", "8", "9"],
    correct: "9",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_820",
    question: "Hangi sayının 2 katı 6 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_821",
    question: "Hangi sayının 7 katı 42 eder?",
    options: ["12", "5", "6", "7"],
    correct: "6",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_822",
    question: "Hangi sayının 5 katı 10 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_823",
    question: "Hangi sayının 5 katı 55 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_824",
    question: "Hangi sayının 3 katı 9 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_825",
    question: "Hangi sayının 9 katı 27 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_826",
    question: "Hangi sayının 4 katı 16 eder?",
    options: ["3", "4", "5", "8"],
    correct: "4",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_827",
    question: "Hangi sayının 9 katı 90 eder?",
    options: ["10", "11", "20", "9"],
    correct: "10",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_828",
    question: "Hangi sayının 4 katı 24 eder?",
    options: ["12", "5", "6", "7"],
    correct: "6",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_829",
    question: "Hangi sayının 8 katı 40 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_830",
    question: "Hangi sayının 5 katı 30 eder?",
    options: ["12", "5", "6", "7"],
    correct: "6",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_831",
    question: "Hangi sayının 8 katı 96 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_832",
    question: "Hangi sayının 7 katı 63 eder?",
    options: ["10", "18", "8", "9"],
    correct: "9",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_833",
    question: "Hangi sayının 9 katı 27 eder?",
    options: ["2", "3", "4", "6"],
    correct: "3",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_834",
    question: "Hangi sayının 5 katı 25 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_835",
    question: "Hangi sayının 3 katı 21 eder?",
    options: ["14", "6", "7", "8"],
    correct: "7",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_836",
    question: "Hangi sayının 2 katı 22 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_837",
    question: "Hangi sayının 5 katı 55 eder?",
    options: ["10", "11", "12", "22"],
    correct: "11",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_838",
    question: "Hangi sayının 5 katı 10 eder?",
    options: ["1", "2", "3", "4"],
    correct: "2",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_839",
    question: "Hangi sayının 3 katı 36 eder?",
    options: ["11", "12", "13", "24"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_840",
    question: "Hangi sayının 2 katı 10 eder?",
    options: ["10", "4", "5", "6"],
    correct: "5",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_841",
    question: "Edirne ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_842",
    question: "Tekirdağ ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_843",
    question: "Kırklareli ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_844",
    question: "Kocaeli ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_845",
    question: "Sakarya ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_846",
    question: "Bilecik ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_847",
    question: "Balıkesir ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_848",
    question: "Çanakkale ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "Marmara", "İç Anadolu"],
    correct: "Marmara",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_849",
    question: "Manisa ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_850",
    question: "İzmir ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_851",
    question: "Aydın ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_852",
    question: "Muğla ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_853",
    question: "Denizli ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_854",
    question: "Afyonkarahisar ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_855",
    question: "Kütahya ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_856",
    question: "Uşak ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Ege",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_857",
    question: "Bolu ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_858",
    question: "Düzce ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_859",
    question: "Zonguldak ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_860",
    question: "Karabük ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_861",
    question: "Bartın ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_862",
    question: "Kastamonu ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_863",
    question: "Sinop ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_864",
    question: "Samsun ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_865",
    question: "Ordu ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_866",
    question: "Giresun ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_867",
    question: "Trabzon ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_868",
    question: "Rize ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_869",
    question: "Artvin ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_870",
    question: "Gümüşhane ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_871",
    question: "Bayburt ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_872",
    question: "Amasya ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_873",
    question: "Tokat ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_874",
    question: "Çorum ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "Karadeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_875",
    question: "Adana ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_876",
    question: "Mersin ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_877",
    question: "Hatay ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_878",
    question: "Osmaniye ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_879",
    question: "Kahramanmaraş ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_880",
    question: "Antalya ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_881",
    question: "Isparta ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_882",
    question: "Burdur ili hangi coğrafi bölgemizde yer alır?",
    options: ["Akdeniz", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Akdeniz",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_883",
    question: "Ankara ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_884",
    question: "Konya ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_885",
    question: "Kayseri ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_886",
    question: "Eskişehir ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_887",
    question: "Sivas ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_888",
    question: "Kırıkkale ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_889",
    question: "Aksaray ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_890",
    question: "Karaman ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_891",
    question: "Niğde ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_892",
    question: "Nevşehir ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_893",
    question: "Kırşehir ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_894",
    question: "Yozgat ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_895",
    question: "Çankırı ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Karadeniz", "İç Anadolu", "Diğer Şık"],
    correct: "İç Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_896",
    question: "Erzurum ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_897",
    question: "Erzincan ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_898",
    question: "Kars ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_899",
    question: "Ardahan ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_900",
    question: "Iğdır ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_901",
    question: "Ağrı ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_902",
    question: "Muş ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_903",
    question: "Bitlis ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_904",
    question: "Van ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_905",
    question: "Hakkari ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_906",
    question: "Şırnak ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_907",
    question: "Siirt ili hangi coğrafi bölgemizde yer alır?",
    options: ["Doğu Anadolu", "Ege", "Karadeniz", "İç Anadolu"],
    correct: "Doğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_908",
    question: "Gaziantep ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Güneydoğu Anadolu", "Karadeniz", "İç Anadolu"],
    correct: "Güneydoğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_909",
    question: "Şanlıurfa ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Güneydoğu Anadolu", "Karadeniz", "İç Anadolu"],
    correct: "Güneydoğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_910",
    question: "Diyarbakır ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Güneydoğu Anadolu", "Karadeniz", "İç Anadolu"],
    correct: "Güneydoğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_911",
    question: "Mardin ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Güneydoğu Anadolu", "Karadeniz", "İç Anadolu"],
    correct: "Güneydoğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_912",
    question: "Batman ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Güneydoğu Anadolu", "Karadeniz", "İç Anadolu"],
    correct: "Güneydoğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_913",
    question: "Adıyaman ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Güneydoğu Anadolu", "Karadeniz", "İç Anadolu"],
    correct: "Güneydoğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_914",
    question: "Kilis ili hangi coğrafi bölgemizde yer alır?",
    options: ["Ege", "Güneydoğu Anadolu", "Karadeniz", "İç Anadolu"],
    correct: "Güneydoğu Anadolu",
    difficulty: "medium",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_915",
    question: "Peygamber Efendimiz'in babasının adı nedir?",
    options: ["Abdullah", "Abdulmuttalip", "Ebu Talip", "Hamza"],
    correct: "Abdullah",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_916",
    question: "Peygamber Efendimiz'in annesinin adı nedir?",
    options: ["Amine", "Fatıma", "Halime", "Hatice"],
    correct: "Amine",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_917",
    question: "Peygamber Efendimiz'in süt annesinin adı nedir?",
    options: ["Amine", "Fatıma", "Halime", "Şeyma"],
    correct: "Halime",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_918",
    question: "Peygamber Efendimiz'in ilk eşinin adı nedir?",
    options: ["Aişe", "Hafsa", "Hatice", "Zeynep"],
    correct: "Hatice",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_919",
    question: "Peygamber Efendimiz'in vefatında yanında olan, Hz. Ebubekir'in kızı olan eşi kimdir?",
    options: ["Aişe", "Hatice", "Mariye", "Safiyye"],
    correct: "Aişe",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_920",
    question: "Peygamber Efendimiz'in en küçük ve O'nun soyunu devam ettiren kızının adı nedir?",
    options: ["Fatıma", "Rukiye", "Zeynep", "Ümmü Gülsüm"],
    correct: "Fatıma",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_921",
    question: "Peygamber Efendimiz'in Mısırlı eşi Hz. Mariye'den dünyaya gelen ve küçük yaşta vefat eden oğlunun adı nedir?",
    options: ["Abdullah", "Kasım", "Tayyip", "İbrahim"],
    correct: "İbrahim",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_922",
    question: "Peygamber Efendimiz'in Uhud Savaşı'nda şehit düşen yiğit amcası kimdir?",
    options: ["Ebu Leheb", "Ebu Talip", "Hz. Abbas", "Hz. Hamza"],
    correct: "Hz. Hamza",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_923",
    question: "Peygamber Efendimiz'e çocukluğunda ve gençliğinde kol kanat geren, koruyan amcası kimdir?",
    options: ["Ebu Leheb", "Ebu Talip", "Hz. Abbas", "Hz. Hamza"],
    correct: "Ebu Talip",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_924",
    question: "Peygamber Efendimiz'in en uzun ömürlü olan ve Mekke'nin fethinden sonra da yaşayan amcası kimdir?",
    options: ["Ebu Talip", "Haris", "Hz. Abbas", "Hz. Hamza"],
    correct: "Hz. Abbas",
    difficulty: "medium",
    category: "Dini Genel Kültür"
  },
  {
    id: "mil_q_925",
    question: "1 + 1 işleminin sonucu kaçtır?",
    options: ["2", "3", "1", "4"],
    correct: "2",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_926",
    question: "2 + 2 işleminin sonucu kaçtır?",
    options: ["4", "5", "3", "6"],
    correct: "4",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_927",
    question: "3 + 3 işleminin sonucu kaçtır?",
    options: ["6", "7", "5", "8"],
    correct: "6",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_928",
    question: "4 + 4 işleminin sonucu kaçtır?",
    options: ["8", "9", "7", "10"],
    correct: "8",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_929",
    question: "5 + 5 işleminin sonucu kaçtır?",
    options: ["10", "11", "9", "12"],
    correct: "10",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_930",
    question: "6 + 6 işleminin sonucu kaçtır?",
    options: ["12", "13", "11", "14"],
    correct: "12",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_931",
    question: "7 + 7 işleminin sonucu kaçtır?",
    options: ["14", "15", "13", "16"],
    correct: "14",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_932",
    question: "8 + 8 işleminin sonucu kaçtır?",
    options: ["16", "17", "15", "18"],
    correct: "16",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_933",
    question: "9 + 9 işleminin sonucu kaçtır?",
    options: ["18", "19", "17", "20"],
    correct: "18",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_934",
    question: "10 + 10 işleminin sonucu kaçtır?",
    options: ["20", "21", "19", "22"],
    correct: "20",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_935",
    question: "11 + 11 işleminin sonucu kaçtır?",
    options: ["22", "23", "21", "24"],
    correct: "22",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_936",
    question: "12 + 12 işleminin sonucu kaçtır?",
    options: ["24", "25", "23", "26"],
    correct: "24",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_937",
    question: "13 + 13 işleminin sonucu kaçtır?",
    options: ["26", "27", "25", "28"],
    correct: "26",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_938",
    question: "14 + 14 işleminin sonucu kaçtır?",
    options: ["28", "29", "27", "30"],
    correct: "28",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_939",
    question: "15 + 15 işleminin sonucu kaçtır?",
    options: ["30", "31", "29", "32"],
    correct: "30",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_940",
    question: "16 + 16 işleminin sonucu kaçtır?",
    options: ["32", "33", "31", "34"],
    correct: "32",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_941",
    question: "17 + 17 işleminin sonucu kaçtır?",
    options: ["34", "35", "33", "36"],
    correct: "34",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_942",
    question: "18 + 18 işleminin sonucu kaçtır?",
    options: ["36", "37", "35", "38"],
    correct: "36",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_943",
    question: "19 + 19 işleminin sonucu kaçtır?",
    options: ["38", "39", "37", "40"],
    correct: "38",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_944",
    question: "20 + 20 işleminin sonucu kaçtır?",
    options: ["40", "41", "39", "42"],
    correct: "40",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_945",
    question: "21 + 21 işleminin sonucu kaçtır?",
    options: ["42", "43", "41", "44"],
    correct: "42",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_946",
    question: "22 + 22 işleminin sonucu kaçtır?",
    options: ["44", "45", "43", "46"],
    correct: "44",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_947",
    question: "23 + 23 işleminin sonucu kaçtır?",
    options: ["46", "47", "45", "48"],
    correct: "46",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_948",
    question: "24 + 24 işleminin sonucu kaçtır?",
    options: ["48", "49", "47", "50"],
    correct: "48",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_949",
    question: "25 + 25 işleminin sonucu kaçtır?",
    options: ["50", "51", "49", "52"],
    correct: "50",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_950",
    question: "26 + 26 işleminin sonucu kaçtır?",
    options: ["52", "53", "51", "54"],
    correct: "52",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_951",
    question: "27 + 27 işleminin sonucu kaçtır?",
    options: ["54", "55", "53", "56"],
    correct: "54",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_952",
    question: "28 + 28 işleminin sonucu kaçtır?",
    options: ["56", "57", "55", "58"],
    correct: "56",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_953",
    question: "29 + 29 işleminin sonucu kaçtır?",
    options: ["58", "59", "57", "60"],
    correct: "58",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_954",
    question: "30 + 30 işleminin sonucu kaçtır?",
    options: ["60", "61", "59", "62"],
    correct: "60",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_955",
    question: "31 + 31 işleminin sonucu kaçtır?",
    options: ["62", "63", "61", "64"],
    correct: "62",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_956",
    question: "32 + 32 işleminin sonucu kaçtır?",
    options: ["64", "65", "63", "66"],
    correct: "64",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_957",
    question: "33 + 33 işleminin sonucu kaçtır?",
    options: ["66", "67", "65", "68"],
    correct: "66",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_958",
    question: "34 + 34 işleminin sonucu kaçtır?",
    options: ["68", "69", "67", "70"],
    correct: "68",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_959",
    question: "35 + 35 işleminin sonucu kaçtır?",
    options: ["70", "71", "69", "72"],
    correct: "70",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_960",
    question: "36 + 36 işleminin sonucu kaçtır?",
    options: ["72", "73", "71", "74"],
    correct: "72",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_961",
    question: "37 + 37 işleminin sonucu kaçtır?",
    options: ["74", "75", "73", "76"],
    correct: "74",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_962",
    question: "38 + 38 işleminin sonucu kaçtır?",
    options: ["76", "77", "75", "78"],
    correct: "76",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_963",
    question: "39 + 39 işleminin sonucu kaçtır?",
    options: ["78", "79", "77", "80"],
    correct: "78",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_964",
    question: "40 + 40 işleminin sonucu kaçtır?",
    options: ["80", "81", "79", "82"],
    correct: "80",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_965",
    question: "41 + 41 işleminin sonucu kaçtır?",
    options: ["82", "83", "81", "84"],
    correct: "82",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_966",
    question: "42 + 42 işleminin sonucu kaçtır?",
    options: ["84", "85", "83", "86"],
    correct: "84",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_967",
    question: "43 + 43 işleminin sonucu kaçtır?",
    options: ["86", "87", "85", "88"],
    correct: "86",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_968",
    question: "44 + 44 işleminin sonucu kaçtır?",
    options: ["88", "89", "87", "90"],
    correct: "88",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_969",
    question: "45 + 45 işleminin sonucu kaçtır?",
    options: ["90", "91", "89", "92"],
    correct: "90",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_970",
    question: "46 + 46 işleminin sonucu kaçtır?",
    options: ["92", "93", "91", "94"],
    correct: "92",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_971",
    question: "47 + 47 işleminin sonucu kaçtır?",
    options: ["94", "95", "93", "96"],
    correct: "94",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_972",
    question: "48 + 48 işleminin sonucu kaçtır?",
    options: ["96", "97", "95", "98"],
    correct: "96",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_973",
    question: "49 + 49 işleminin sonucu kaçtır?",
    options: ["98", "99", "97", "100"],
    correct: "98",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_974",
    question: "50 + 50 işleminin sonucu kaçtır?",
    options: ["100", "101", "99", "102"],
    correct: "100",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_975",
    question: "51 + 51 işleminin sonucu kaçtır?",
    options: ["102", "103", "101", "104"],
    correct: "102",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_976",
    question: "52 + 52 işleminin sonucu kaçtır?",
    options: ["104", "105", "103", "106"],
    correct: "104",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_977",
    question: "53 + 53 işleminin sonucu kaçtır?",
    options: ["106", "107", "105", "108"],
    correct: "106",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_978",
    question: "54 + 54 işleminin sonucu kaçtır?",
    options: ["108", "109", "107", "110"],
    correct: "108",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_979",
    question: "55 + 55 işleminin sonucu kaçtır?",
    options: ["110", "111", "109", "112"],
    correct: "110",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_980",
    question: "56 + 56 işleminin sonucu kaçtır?",
    options: ["112", "113", "111", "114"],
    correct: "112",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_981",
    question: "57 + 57 işleminin sonucu kaçtır?",
    options: ["114", "115", "113", "116"],
    correct: "114",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_982",
    question: "58 + 58 işleminin sonucu kaçtır?",
    options: ["116", "117", "115", "118"],
    correct: "116",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_983",
    question: "59 + 59 işleminin sonucu kaçtır?",
    options: ["118", "119", "117", "120"],
    correct: "118",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_984",
    question: "60 + 60 işleminin sonucu kaçtır?",
    options: ["120", "121", "119", "122"],
    correct: "120",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_985",
    question: "61 + 61 işleminin sonucu kaçtır?",
    options: ["122", "123", "121", "124"],
    correct: "122",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_986",
    question: "62 + 62 işleminin sonucu kaçtır?",
    options: ["124", "125", "123", "126"],
    correct: "124",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_987",
    question: "63 + 63 işleminin sonucu kaçtır?",
    options: ["126", "127", "125", "128"],
    correct: "126",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_988",
    question: "64 + 64 işleminin sonucu kaçtır?",
    options: ["128", "129", "127", "130"],
    correct: "128",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_989",
    question: "65 + 65 işleminin sonucu kaçtır?",
    options: ["130", "131", "129", "132"],
    correct: "130",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_990",
    question: "66 + 66 işleminin sonucu kaçtır?",
    options: ["132", "133", "131", "134"],
    correct: "132",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_991",
    question: "67 + 67 işleminin sonucu kaçtır?",
    options: ["134", "135", "133", "136"],
    correct: "134",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_992",
    question: "68 + 68 işleminin sonucu kaçtır?",
    options: ["136", "137", "135", "138"],
    correct: "136",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_993",
    question: "69 + 69 işleminin sonucu kaçtır?",
    options: ["138", "139", "137", "140"],
    correct: "138",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_994",
    question: "70 + 70 işleminin sonucu kaçtır?",
    options: ["140", "141", "139", "142"],
    correct: "140",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_995",
    question: "71 + 71 işleminin sonucu kaçtır?",
    options: ["142", "143", "141", "144"],
    correct: "142",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_996",
    question: "72 + 72 işleminin sonucu kaçtır?",
    options: ["144", "145", "143", "146"],
    correct: "144",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_997",
    question: "73 + 73 işleminin sonucu kaçtır?",
    options: ["146", "147", "145", "148"],
    correct: "146",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_998",
    question: "74 + 74 işleminin sonucu kaçtır?",
    options: ["148", "149", "147", "150"],
    correct: "148",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_999",
    question: "75 + 75 işleminin sonucu kaçtır?",
    options: ["150", "151", "149", "152"],
    correct: "150",
    difficulty: "easy",
    category: "Genel Kültür"
  },
  {
    id: "mil_q_1000",
    question: "76 + 76 işleminin sonucu kaçtır?",
    options: ["152", "153", "151", "154"],
    correct: "152",
    difficulty: "easy",
    category: "Genel Kültür"
  },
];
