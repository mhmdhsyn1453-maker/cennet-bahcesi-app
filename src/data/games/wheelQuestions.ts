export interface WheelQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  wisdom: string;
  category: 'İnanç' | 'İbadet' | 'Ahlak' | 'Siyer' | 'Medeniyet' | 'Genel Kültür';
}

export const WHEEL_QUESTIONS_DB: WheelQuestion[] = [
  // ==================== İNANÇ (25 Soru) ====================
  {
    id: "wh_in_1",
    category: "İnanç",
    question: "Allah'ın her şeyi bilmesi anlamına gelen subutî sıfatı aşağıdakilerden hangisidir?",
    options: ["İlim", "Semî", "Basar", "Kudret"],
    correct: "İlim",
    wisdom: "Allah'ın 'İlim' sıfatı O'nun gizli, açık, geçmiş, gelecek her şeyi eksiksiz bilmesi anlamına gelir."
  },
  {
    id: "wh_in_2",
    category: "İnanç",
    question: "Allah'ın bir ve tek olması, eşi ve benzerinin bulunmaması esasına ne ad verilir?",
    options: ["Tevhid", "Nübüvvet", "Ahiret", "Kaza"],
    correct: "Tevhid",
    wisdom: "Tevhid, İslam inancının temeli olup Allah'ın birliğini ifade eder ve İhlas Suresi'nde detaylıca anlatılır."
  },
  {
    id: "wh_in_3",
    category: "İnanç",
    question: "Kutsal kitaplardan Tevrat, hangi peygambere indirilmiştir?",
    options: ["Hz. Musa (a.s.)", "Hz. Davud (a.s.)", "Hz. İsa (a.s.)", "Hz. İbrahim (a.s.)"],
    correct: "Hz. Musa (a.s.)",
    wisdom: "Tevrat Hz. Musa'ya, Zebur Hz. Davud'a, İncil Hz. İsa'ya ve Kur'an-ı Kerim Hz. Muhammed'e (s.a.v.) indirilmiştir."
  },
  {
    id: "wh_in_4",
    category: "İnanç",
    question: "Ahiret hayatında insanların hesaba çekildikten sonra amellerinin tartılacağı manevi teraziye ne ad verilir?",
    options: ["Mizan", "Sırat", "Haşr", "Berzah"],
    correct: "Mizan",
    wisdom: "Mizan, ahirette sevap ve günahların adaletle ölçülüp tartılacağı ilahi denge ve teraziye verilen isimdir."
  },
  {
    id: "wh_in_5",
    category: "İnanç",
    question: "Tabiat olaylarını idare etmek ve yönetmekle görevli melek aşağıdakilerden hangisidir?",
    options: ["Mikail", "Cebrail", "Azrail", "İsrafil"],
    correct: "Mikail",
    wisdom: "Dört büyük melekten Mikail (a.s.) tabiat olaylarını ve rızıkları idare etmekle görevlidir."
  },
  {
    id: "wh_in_6",
    category: "İnanç",
    question: "Ölümden sonra başlayıp kıyamete kadar sürecek olan kabir hayatına ne ad verilir?",
    options: ["Berzah", "Haşr", "Mizan", "Araf"],
    correct: "Berzah",
    wisdom: "Berzah, dünya ile ahiret arasında bulunan, ruhların kıyamete kadar bekleyeceği geçiş alemidir."
  },
  {
    id: "wh_in_7",
    category: "İnanç",
    question: "Allah'ın her şeye gücünün yetmesi, dilediğini dilediği an yapabilmesi hangi sıfatıyla ifade edilir?",
    options: ["Kudret", "Tekvin", "Hayat", "İrade"],
    correct: "Kudret",
    wisdom: "Kudret sıfatı, Allah'ın sınırsız güç sahibi olduğunu ve hiçbir şeyin O'na zor gelmediğini belirtir."
  },
  {
    id: "wh_in_8",
    category: "İnanç",
    question: "İnanç esaslarında, Allah'ın ezelde takdir ettiği olayların zamanı gelince gerçekleşmesine ne denir?",
    options: ["Kaza", "Kader", "Tevekkül", "Rızık"],
    correct: "Kaza",
    wisdom: "Kader planlama, Kaza ise bu planlanan olayların vakti gelince yaratılması ve gerçekleşmesidir."
  },
  {
    id: "wh_in_9",
    category: "İnanç",
    question: "Yaratılmış olan hiçbir şeye benzememek anlamına gelen sıfat aşağıdakilerden hangisidir?",
    options: ["Muhalefetün lil-havadis", "Kıyam bi-nefsihi", "Vahdaniyet", "Kıdem"],
    correct: "Muhalefetün lil-havadis",
    wisdom: "Muhalefetün lil-havadis sıfatı, Allah'ın sonradan yaratılan varlıklardan tamamen farklı olduğunu ifade eder."
  },
  {
    id: "wh_in_10",
    category: "İnanç",
    question: "Vahiy getirmekle ve peygamberlere ulaştırmakla görevli melek hangisidir?",
    options: ["Cebrail", "Mikail", "Azrail", "İsrafil"],
    correct: "Cebrail",
    wisdom: "Cebrail (a.s.) vahiy meleğidir. Allah'tan aldığı emirleri peygamberlere tebliğ etmekle görevlidir."
  },
  {
    id: "wh_in_11",
    category: "İnanç",
    question: "Kıyamet günü sur borusuna üflemekle görevlendirilen melek hangisidir?",
    options: ["İsrafil", "Azrail", "Cebrail", "Mikail"],
    correct: "İsrafil",
    wisdom: "İsrafil (a.s.) sur borusuna iki defa üfleyecek; ilkinde kıyamet kopacak, ikincisinde ise yeniden diriliş gerçekleşecektir."
  },
  {
    id: "wh_in_12",
    category: "İnanç",
    question: "Kuran-ı Kerim'de adı geçen ve uzun süre uykuda kalan inanmış gençlerin hikayesi hangi isimle anılır?",
    options: ["Ashab-ı Kehf", "Ashab-ı Uhdud", "Ashab-ı Suffe", "Ashab-ı Karye"],
    correct: "Ashab-ı Kehf",
    wisdom: "Ashab-ı Kehf (Mağara Arkadaşları), inançlarını korumak için mağaraya sığınan ve orada yüzyıllarca uyutulan gençlerdir."
  },
  {
    id: "wh_in_13",
    category: "İnanç",
    question: "Peygamberlerin günah işlemekten korunmuş olmaları anlamına gelen sıfatları hangisidir?",
    options: ["İsmet", "Sıdk", "Emanet", "Fetanet"],
    correct: "İsmet",
    wisdom: "İsmet peygamberlerin günahsızlığını, Sıdk dürüstlüklerini, Emanet güvenilirliklerini, Fetanet ise üstün zekalarını ifade eder."
  },
  {
    id: "wh_in_14",
    category: "İnanç",
    question: "İhlas Suresi'nde geçen ve 'hiçbir şeye muhtaç olmayan, her şeyin kendisine muhtaç olduğu varlık' anlamına gelen isim hangisidir?",
    options: ["Samed", "Ahad", "Rahman", "Melik"],
    correct: "Samed",
    wisdom: "Es-Samed ismi şerifi, yüce Allah'ın mutlak bağımsızlığını ve tüm kainatın O'na muhtaç olduğunu belirtir."
  },
  {
    id: "wh_in_15",
    category: "İnanç",
    question: "İnsanın çalışıp çabaladıktan sonra sonucu Allah'a bırakıp O'na güvenmesine ne ad verilir?",
    options: ["Tevekkül", "Kader", "Kaza", "Vesvese"],
    correct: "Tevekkül",
    wisdom: "Tevekkül, gerekli tüm maddi ve manevi tedbirleri aldıktan sonra kalben Allah'a teslim olmak ve dayanmaktır."
  },
  {
    id: "wh_in_16",
    category: "İnanç",
    question: "Ölüm meleği olarak bilinen ve eceli gelenlerin ruhunu teslim almakla görevli melek hangisidir?",
    options: ["Azrail", "Mikail", "Münker", "Nekir"],
    correct: "Azrail",
    wisdom: "Azrail (a.s.), meleklerin büyüklerinden olup Allah'ın izniyle canlıların ruhunu kabzetmekle görevlidir."
  },
  {
    id: "wh_in_17",
    category: "İnanç",
    question: "Kabirde insanları sorguya çekecek olan iki sorgu meleği aşağıdakilerden hangisidir?",
    options: ["Münker ve Nekir", "Kiramen Kâtibin", "Hafaza Melekleri", "Rıdvan ve Malik"],
    correct: "Münker ve Nekir",
    wisdom: "Kabir hayatı başladığında Münker ve Nekir adındaki iki melek insana Rabbini, dinini ve peygamberini sorar."
  },
  {
    id: "wh_in_18",
    category: "İnanç",
    question: "İnsanın sağında ve solunda bulunup günah ve sevaplarını kaydetmekle görevli melekler hangisidir?",
    options: ["Kiramen Kâtibin", "Münker ve Nekir", "Azrail ve Mikail", "Hafaza Melekleri"],
    correct: "Kiramen Kâtibin",
    wisdom: "Kiramen Kâtibin (Değerli Yazıcılar), insanın her davranışını amel defterine kaydeden yazıcı meleklerdir."
  },
  {
    id: "wh_in_19",
    category: "İnanç",
    question: "Allah'ın isimlerinden olan ve 'çok bağışlayan, merhamet eden' anlamına gelen isim hangisidir?",
    options: ["Rahîm", "Kuddüs", "Cebbar", "Kahhar"],
    correct: "Rahîm",
    wisdom: "Rahman dünyadaki tüm varlıklara merhamet eden, Rahîm ise ahirette sadece müminlere merhamet edecek olandır."
  },
  {
    id: "wh_in_20",
    category: "İnanç",
    question: "İslam inancına göre peygamberlerin Allah'tan aldıkları mesajları insanlara aynen ulaştırmalarına ne denir?",
    options: ["Tebliğ", "Fetanet", "İsmet", "Emanet"],
    correct: "Tebliğ",
    wisdom: "Tebliğ, peygamberlerin getirdiği vahyi eksiltmeden veya artırmadan insanlara ulaştırma görevidir."
  },
  {
    id: "wh_in_21",
    category: "İnanç",
    question: "Allah'ın varlığının başlangıcının olmaması, yani zamandan münezzeh olarak ezelî olması hangi sıfatıdır?",
    options: ["Kıdem", "Beka", "Kudret", "Vücud"],
    correct: "Kıdem",
    wisdom: "Kıdem başlangıcı olmamak, Beka ise sonu olmamak (ebedî olmak) anlamına gelen zati sıfatlardandır."
  },
  {
    id: "wh_in_22",
    category: "İnanç",
    question: "Dinen mükellef olan bir insanın yapıp etmelerine ne ad verilir?",
    options: ["Ef'al-i Mükellefin", "Fıtrat", "Sünnet", "Vacip"],
    correct: "Ef'al-i Mükellefin",
    wisdom: "Ef'al-i Mükellefin, farz, sünnet, helal gibi mükellef kişilerin dini yükümlülük taşıyan fiilleridir."
  },
  {
    id: "wh_in_23",
    category: "İnanç",
    question: "Yüce Allah'ın evrendeki her şeyi yoktan var etmesi ve yaratması hangi sıfatıyla ifade edilir?",
    options: ["Tekvin", "Kıdem", "Beka", "Kıyam bi-nefsihi"],
    correct: "Tekvin",
    wisdom: "Tekvin sıfatı, Allah'ın dilediği her şeyi yoktan var etmesi ve icat etmesi anlamına gelir."
  },
  {
    id: "wh_in_24",
    category: "İnanç",
    question: "Peygamberlerin haklılıklarını kanıtlamak için Allah'ın izniyle gösterdikleri olağanüstü olaylara ne denir?",
    options: ["Mucize", "Keramet", "İstidrac", "İrhas"],
    correct: "Mucize",
    wisdom: "Mucize, peygamberlik iddiasını ispatlamak amacıyla Allah'ın izniyle gerçekleştirilen olağanüstü durumlardır."
  },
  {
    id: "wh_in_25",
    category: "İnanç",
    question: "Peygamber gönderilmeyen fetret dönemlerinde yaşayan ve hiçbir dinden haberi olmayan kişilerin inanç sorumluluğu nasıldır?",
    options: ["Sadece Allah'ın varlığına inanmakla sorumludurlar", "Tüm fıkhi ibadetlerden sorumludurlar", "Hiçbir sorumlulukları yoktur", "Cezalandırılacaklardır"],
    correct: "Sadece Allah'ın varlığına inanmakla sorumludurlar",
    wisdom: "Fetret dönemi insanları akıl yoluyla yaratıcının varlığını bulmakla yükümlü kabul edilirler, şeriat kurallarından değil."
  },

  // ==================== İBADET (25 Soru) ====================
  {
    id: "wh_ib_1",
    category: "İbadet",
    question: "Namaz kılarken Kabe yönüne dönmeye ne ad verilir?",
    options: ["İstikbal-i Kıble", "Setr-i Avret", "Hadesten Taharet", "Necasetten Taharet"],
    correct: "İstikbal-i Kıble",
    wisdom: "İstikbal-i Kıble namazın dışındaki farzlardan olup, namaz kılarken kıbleye (Kabe'ye) yönelmeyi şart koşar."
  },
  {
    id: "wh_ib_2",
    category: "İbadet",
    question: "Namazın içinde elleri dizlere koyup eğilerek yapılan harekete ne ad verilir?",
    options: ["Rükû", "Secde", "Kıyam", "Kade-i Ahîre"],
    correct: "Rükû",
    wisdom: "Rükû, namazda ayaktayken (kıyam) sonra bel hizasında eğilerek üç kez 'Sübhâne rabbiye'l-azîm' demektir."
  },
  {
    id: "wh_ib_3",
    category: "İbadet",
    question: "Zekat ibadeti dinen zengin sayılan Müslümanlara farzdır. Bu zenginlik ölçüsüne ne ad verilir?",
    options: ["Nisap miktarı", "Fitre", "Öşür", "Sadaka-i cariye"],
    correct: "Nisap miktarı",
    wisdom: "Nisap, borçlarından fazla olarak 80.18 gram altın veya dengi mala sahip olan kişilerin zenginlik sınırıdır."
  },
  {
    id: "wh_ib_4",
    category: "İbadet",
    question: "Ramazan ayında oruçlu bir insanın fecr-i sadıktan (imsak vakti) önce yediği yemeğe ne ad verilir?",
    options: ["Sahur", "İftar", "Mukabele", "Teravih"],
    correct: "Sahur",
    wisdom: "Peygamber Efendimiz (s.a.v.) 'Sahur yapınız, zira sahurda bereket vardır' buyurarak sahuru teşvik etmiştir."
  },
  {
    id: "wh_ib_5",
    category: "İbadet",
    question: "Hac ibadeti sırasında Kabe'nin etrafında yedi kez dönmeye ne ad verilir?",
    options: ["Tavaf", "Sa'y", "Vakfe", "İhram"],
    correct: "Tavaf",
    wisdom: "Kabe etrafında her bir dönüşe 'şavt' denir. Yedi şavt tamamlandığında bir 'tavaf' yapılmış olur."
  },
  {
    id: "wh_ib_6",
    category: "İbadet",
    question: "Namazda ayaktayken Kur'an-ı Kerim'den sure veya ayet okumaya ne ad verilir?",
    options: ["Kıraat", "Kıyam", "Rükû", "Secde"],
    correct: "Kıraat",
    wisdom: "Kıraat namazın içindeki farzlardan biridir ve namaz kılarken ayakta Kur'an okumayı ifade eder."
  },
  {
    id: "wh_ib_7",
    category: "İbadet",
    question: "Su bulunmadığında veya suyu kullanma imkanı olmadığında temiz toprakla alınan abdest hangisidir?",
    options: ["Teyemmüm", "Gusül", "Teyemmün", "Mesh"],
    correct: "Teyemmüm",
    wisdom: "Teyemmüm, niyet edip elleri toprağa vurarak yüzü ve kolları mesh etmek suretiyle alınan hükmi temizliktir."
  },
  {
    id: "wh_ib_8",
    category: "İbadet",
    question: "Yılda bir kez tarım ürünlerinden alınan zekata fıkıhta ne ad verilir?",
    options: ["Öşür", "Nisap", "Fitre", "Fidye"],
    correct: "Öşür",
    wisdom: "Toprak mahsullerinden alınan zekata öşür denir. Sulama masrafı yoksa onda bir (1/10), varsa yirmide bir (1/20) oranındadır."
  },
  {
    id: "wh_ib_9",
    category: "İbadet",
    question: "Ramazan ayında, gücü yeten her Müslümanın bayram namazından önce fakirlere vermesi gereken vacip sadaka hangisidir?",
    options: ["Fıtır Sadakası (Fitre)", "Öşür", "Fidye", "Sadaka-i Cariye"],
    correct: "Fıtır Sadakası (Fitre)",
    wisdom: "Fıtır sadakası, Ramazan orucunu tutup bayrama ulaşmanın şükran borcu olarak verilen vacip bir sadakadır."
  },
  {
    id: "wh_ib_10",
    category: "İbadet",
    question: "Gusül abdestinin farzları sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?",
    options: ["Ağıza su vermek, burna su vermek, bütün vücudu yıkamak", "Niyet etmek, kolları yıkamak, başı mesh etmek", "Yüzü yıkamak, ayakları yıkamak, niyet etmek", "Elleri yıkamak, mesh etmek, niyet etmek"],
    correct: "Ağıza su vermek, burna su vermek, bütün vücudu yıkamak",
    wisdom: "Guslün farzı üçtür: Ağıza dolu dolu su vermek (mazmaza), burna su çekmek (istinşak) ve tüm bedeni kuru yer kalmayacak şekilde yıkamak."
  },
  {
    id: "wh_ib_11",
    category: "İbadet",
    question: "Namazın farzlarından olan 'Setr-i Avret' ne anlama gelmektedir?",
    options: ["Vücudun örtülmesi gereken yerlerini örtmek", "Namaz vaktinin girmesi", "Kıbleye yönelmek", "Beden ve elbise temizliği"],
    correct: "Vücudun örtülmesi gereken yerlerini örtmek",
    wisdom: "Setr-i Avret, erkeklerde en az göbek ile diz kapağı arasını, kadınlarda ise el, yüz ve ayak hariç tüm vücudu örtmektir."
  },
  {
    id: "wh_ib_12",
    category: "İbadet",
    question: "Hac ibadeti sırasında Safa ile Merve tepeleri arasında 4 gidiş 3 geliş şeklinde yapılan yürüyüşe ne denir?",
    options: ["Sa'y", "Tavaf", "Vakfe", "İhram"],
    correct: "Sa'y",
    wisdom: "Sa'y, Hz. Hacer validemizin oğlu Hz. İsmail için su ararken bu iki tepe arasında yaptığı koşunun hatırasıdır."
  },
  {
    id: "wh_ib_13",
    category: "İbadet",
    question: "Namaz kılarken kıyamda dururken elleri bağlayıp ilk okuduğumuz dua hangisidir?",
    options: ["Sübhaneke", "Ettehiyyatü", "Fatiha", "Kunut Duaları"],
    correct: "Sübhaneke",
    wisdom: "Namazın başlangıç tekbirinden sonra ilk olarak Sübhaneke duası okunur. Bu dua Allah'ı tenzih ve hamd ile başlar."
  },
  {
    id: "wh_ib_14",
    category: "İbadet",
    question: "Zekat verilecek mallarda aranan en önemli şartlardan biri de malın üzerinden ne kadar süre geçmiş olmasıdır?",
    options: ["1 yıl", "6 ay", "2 yıl", "1 ay"],
    correct: "1 yıl",
    wisdom: "Zekata tabi olan nakit, altın ve ticaret mallarının üzerinden kameri takvime göre tam 1 yıl geçmiş olması gerekir."
  },
  {
    id: "wh_ib_15",
    category: "İbadet",
    question: "Namazda rükûdan doğrulurken söylediğimiz 'Semiallahu limen hamideh' ifadesinin anlamı nedir?",
    options: ["Allah kendisine hamd edeni işitti", "Rabbimiz hamd sanadır", "Allah en büyüktür", "Kusursuz olan Rabbim yücedir"],
    correct: "Allah kendisine hamd edeni işitti",
    wisdom: "Doğrulurken 'Semiallahu limen hamideh' (Allah hamd edeni duydu) denir, doğrulunca ise 'Rabbenâ leke'l-hamd' denir."
  },
  {
    id: "wh_ib_16",
    category: "İbadet",
    question: "Namazların her rekatında okunması farz olan ve Kur'an'ın ilk suresi olan sure hangisidir?",
    options: ["Fatiha", "İhlas", "Kevser", "Bakara"],
    correct: "Fatiha",
    wisdom: "Fatiha Suresi namazların her rekatında okunur. Peygamberimiz 'Fatihasız namaz olmaz' buyurmuştur."
  },
  {
    id: "wh_ib_17",
    category: "İbadet",
    question: "Hac ibadetinde Zilhicce ayının 9. günü (Arife günü) Arafat tepesinde bir süre durmaya ne ad verilir?",
    options: ["Vakfe", "Tavaf", "Müzdelife", "Sa'y"],
    correct: "Vakfe",
    wisdom: "Arafat vakfesi haccın en önemli farzıdır. Peygamberimiz (s.a.v.) 'Hac Arafat'tan ibarettir' buyurmuştur."
  },
  {
    id: "wh_ib_18",
    category: "İbadet",
    question: "Namazın son rekatında Ettehiyyatü duasını okuyacak kadar oturup beklemeye ne ad verilir?",
    options: ["Ka'de-i Ahîre", "Kıyam", "Sücud", "Rükû"],
    correct: "Ka'de-i Ahîre",
    wisdom: "Ka'de-i Ahîre (Son Oturuş) namazın rüknü yani farzıdır. Burada Ettehiyyatü, Salli-Barik ve Rabbenâ duaları okunur."
  },
  {
    id: "wh_ib_19",
    category: "İbadet",
    question: "Dinen yolcu (seferi) olan bir kişinin 4 rekatlık farz namazları kaç rekat olarak kılması sünnettir?",
    options: ["2 rekat", "3 rekat", "1 rekat", "Aynen kılmalıdır"],
    correct: "2 rekat",
    wisdom: "Seferilikte kolaylık ilkesi gereği 4 rekatlık farz namazlar kısaltılarak 2 rekat olarak kılınır."
  },
  {
    id: "wh_ib_20",
    category: "İbadet",
    question: "Namaz içinde elleri kulak hizasına kaldırıp 'Allahu Ekber' diyerek namaza başlamaya ne ad verilir?",
    options: ["İftitah Tekbiri", "Kıyam", "Kade-i Ahîre", "Niyet"],
    correct: "İftitah Tekbiri",
    wisdom: "İftitah Tekbiri (Başlangıç Tekbiri) ile dünya meşgaleleri geride bırakılır ve namaz ibadetine girilmiş olur."
  },
  {
    id: "wh_ib_21",
    category: "İbadet",
    question: "Cuma namazından önce minberde hatibin cemaate hitaben yaptığı konuşmaya ve nasihate ne ad verilir?",
    options: ["Hutbe", "Vaaz", "Kamet", "Ezan"],
    correct: "Hutbe",
    wisdom: "Hutbe okumak Cuma namazının sıhhat şartlarındandır. Cemaatin hutbeyi sessizce dinlemesi farzdır."
  },
  {
    id: "wh_ib_22",
    category: "İbadet",
    question: "Oruç tutamayacak kadar yaşlı veya kalıcı hasta olanların, tutamadıkları her gün için fakirlere verdiği ücrete ne denir?",
    options: ["Fidye", "Fitre", "Öşür", "Zekat"],
    correct: "Fidye",
    wisdom: "Fidye, ibadetlerdeki eksikliklerin maddi olarak telafi edilmesidir. Bir günlük fidye miktarı bir fakiri iki öğün doyurmaktır."
  },
  {
    id: "wh_ib_23",
    category: "İbadet",
    question: "Namazda secdeye gidildiğinde üç kez söylenen tesbih ifadesi aşağıdakilerden hangisidir?",
    options: ["Sübhâne rabbiye'l-a'lâ", "Sübhâne rabbiye'l-azîm", "Sübhânallah", "Elhamdülillah"],
    correct: "Sübhâne rabbiye'l-a'lâ",
    wisdom: "Rükûda 'Sübhâne rabbiye'l-azîm' (Yüce Rabbim noksanlardan uzaktır), secdede 'Sübhâne rabbiye'l-a'lâ' (En yüce Rabbim noksanlardan uzaktır) denir."
  },
  {
    id: "wh_ib_24",
    category: "İbadet",
    question: "Kur'an-ı Kerim'de tilavet secdesi yapılması gereken kaç secde ayeti bulunmaktadır?",
    options: ["14", "10", "15", "12"],
    correct: "14",
    wisdom: "Kur'an-ı Kerim'deki 14 özel secde ayetinden biri okunduğunda veya işitildiğinde tilavet secdesi yapmak vaciptir."
  },
  {
    id: "wh_ib_25",
    category: "İbadet",
    question: "Kurban kesmenin fıkhi hükmü dinen zengin olan Müslümanlar için nedir?",
    options: ["Vacip", "Farz", "Sünnet", "Müstehap"],
    correct: "Vacip",
    wisdom: "Hanefi mezhebine göre Kurban bayramında kurban kesmek maddi durumu yerinde olan hür Müslümanlar için vaciptir."
  },

  // ==================== AHLAK (25 Soru) ====================
  {
    id: "wh_ah_1",
    category: "Ahlak",
    question: "Bir kimsenin arkasından, duyduğunda hoşlanmayacağı şeyleri söylemeye ne ad verilir?",
    options: ["Gıybet", "İftira", "Haset", "Tecessüs"],
    correct: "Gıybet",
    wisdom: "Gıybet, Kur'an'da 'ölü kardeşinin etini yemeye' benzetilerek şiddetle yasaklanmış büyük bir ahlaki kusurdur."
  },
  {
    id: "wh_ah_2",
    category: "Ahlak",
    question: "Verilen söze sadık kalmak, emanetleri korumak ve dürüst olmak ahlakta hangi kavramla ifade edilir?",
    options: ["Güvenilirlik (Emanet)", "Cömertlik", "Tevazu", "Adalet"],
    correct: "Güvenilirlik (Emanet)",
    wisdom: "Emanet, hem peygamberlerin ortak sıfatı hem de bir Müslümanın şahsiyetinin en temel direğidir."
  },
  {
    id: "wh_ah_3",
    category: "Ahlak",
    question: "Kişinin kendi hata ve kusurlarını görerek büyüklük taslamaması, alçakgönüllü olması anlamına gelen kavram hangisidir?",
    options: ["Tevazu", "Kibir", "Riya", "Gıybet"],
    correct: "Tevazu",
    wisdom: "Peygamberimiz (s.a.v.) 'Kim Allah için tevazu gösterirse, Allah onu yüceltir' buyurmuştur."
  },
  {
    id: "wh_ah_4",
    category: "Ahlak",
    question: "Başkalarının sahip olduğu nimetleri çekemeyip, o nimetlerin onlardan gitmesini istemeye ne ad verilir?",
    options: ["Haset", "Gıybet", "İftira", "Riya"],
    correct: "Haset",
    wisdom: "Haset kıskançlığın kötücül halidir. Peygamberimiz 'Haset, ateşin odunu yiyip tükettiği gibi iyilikleri tüketir' demiştir."
  },
  {
    id: "wh_ah_5",
    category: "Ahlak",
    question: "İbadetleri veya güzel davranışları Allah rızası için değil, insanların beğenisini kazanmak için yapmaya (gösterişe) ne denir?",
    options: ["Riya", "Kibir", "İhlas", "Gıybet"],
    correct: "Riya",
    wisdom: "Riya gizli şirk olarak kabul edilir. İbadetlerin makbul olması ancak samimiyet yani 'İhlas' ile mümkündür."
  },
  {
    id: "wh_ah_6",
    category: "Ahlak",
    question: "Başkalarının gizli hallerini, kusurlarını ve mahremiyetini araştırma hastalığına İslam ahlakında ne ad verilir?",
    options: ["Tecessüs", "Haset", "Gıybet", "İftira"],
    correct: "Tecessüs",
    wisdom: "Hucurat Suresi 12. ayette 'Birbirinizin kusurlarını araştırmayın (tecessüs etmeyin)' buyurularak bu davranış yasaklanmıştır."
  },
  {
    id: "wh_ah_7",
    category: "Ahlak",
    question: "Her durumda doğruluktan ayrılmamak, içi dışı bir olmak ve dürüst davranmak hangi ahlaki kavramla açıklanır?",
    options: ["Sıdk (Doğruluk)", "Haya", "İffet", "Şecaat"],
    correct: "Sıdk (Doğruluk)",
    wisdom: "Sıdk doğruluk demektir. Peygamber Efendimiz (s.a.v.) hayatı boyunca doğruluktan milim sapmamıştır."
  },
  {
    id: "wh_ah_8",
    category: "Ahlak",
    question: "İnsanın kötü söz ve davranışlardan kaçınarak utanma duygusuna sahip olması ve ahlak sınırlarını koruması nedir?",
    options: ["Haya", "Kibir", "Tevazu", "Şecaat"],
    correct: "Haya",
    wisdom: "Haya utanma duygusudur. Hadis-i şerifte 'Haya imandan bir şubedir' buyurulmuştur."
  },
  {
    id: "wh_ah_9",
    category: "Ahlak",
    question: "Bir insana işlemediği bir suçu veya kusuru yükleyerek onu asılsız yere suçlamaya ne ad verilir?",
    options: ["İftira", "Gıybet", "Haset", "Yalan"],
    correct: "İftira",
    wisdom: "İftira kul hakkının en ağır boyutlarındandır. Toplumda fitneye sebep olur ve kardeşlik bağlarını yok eder."
  },
  {
    id: "wh_ah_10",
    category: "Ahlak",
    question: "Haksızlık karşısında cesur olmak, dinini, vatanını ve sevdiklerini korumak için gösterilen yiğitliğe ne denir?",
    options: ["Şecaat", "Tevazu", "Haya", "Adalet"],
    correct: "Şecaat",
    wisdom: "Şecaat, korkaklık ile çılgınlık arasındaki dengedir; hak yolunda cesaret göstermeyi ifade eder."
  },
  {
    id: "wh_ah_11",
    category: "Ahlak",
    question: "Maddi veya manevi imkanları ihtiyaç sahipleriyle cömertçe paylaşma, ikram etme ahlakına ne denir?",
    options: ["İhsan", "İsraf", "Tevazu", "Kanaat"],
    correct: "İhsan",
    wisdom: "İhsan hem Allah'ı görüyormuş gibi kulluk etmek hem de insanlara iyilikte bulunmak anlamına gelir."
  },
  {
    id: "wh_ah_12",
    category: "Ahlak",
    question: "Eldeki rızka razı olup, aşırı hırstan kaçınarak Allah'ın verdiğine şükretme ahlakına ne denir?",
    options: ["Kanaat", "Gıybet", "İsraf", "Haset"],
    correct: "Kanaat",
    wisdom: "Kanaat bitmez bir hazinedir. İnsanı hırsın kölesi olmaktan korur ve ruhsal huzur verir."
  },
  {
    id: "wh_ah_13",
    category: "Ahlak",
    question: "Kendisine yapılan iyiliğin değerini bilip bunu dile getirme ve teşekkür etme davranışına ne denir?",
    options: ["Şükür/Kadirşinaslık", "Tevazu", "Riya", "Kibir"],
    correct: "Şükür/Kadirşinaslık",
    wisdom: "Hadiste 'İnsanlara teşekkür etmeyen, Allah'a da şükretmiş olmaz' buyurularak teşekkür ahlakı vurgulanmıştır."
  },
  {
    id: "wh_ah_14",
    category: "Ahlak",
    question: "İhtiyaç sınırını aşarak malı, zamanı veya sağlığı boş yere harcayıp saçıp savurmaya ne ad verilir?",
    options: ["İsraf", "Cömertlik", "Riya", "Haset"],
    correct: "İsraf",
    wisdom: "Ayet-i kerimede 'Yiyiniz, içiniz fakat israf etmeyiniz. Çünkü Allah israf edenleri sevmez' buyurulmuştur."
  },
  {
    id: "wh_ah_15",
    category: "Ahlak",
    question: "Öfke anında kendine hakim olabilmek, insanların hatalarını bağışlayabilmek hangi ahlaki erdemdir?",
    options: ["Hilim (Yumuşak huyluluk)", "Şecaat", "Kibir", "İsraf"],
    correct: "Hilim (Yumuşak huyluluk)",
    wisdom: "Hilim, kızgınlık anında sabır gösterip yumuşak davranabilme yeteneğidir. Müminlerin seçkin vasıflarındandır."
  },
  {
    id: "wh_ah_16",
    category: "Ahlak",
    question: "Anne ve babaya iyi davranmak, onların haklarını gözetmek ve rızalarını kazanmak hakkında İslam'ın emri nedir?",
    options: ["Farz derecesinde bir ahlaki görevdir", "İsteğe bağlıdır", "Sadece yaşlandıklarında gereklidir", "Dini bir bağı yoktur"],
    correct: "Farz derecesinde bir ahlaki görevdir",
    wisdom: "Kur'an'da anne babaya 'öf' bile denilmesi yasaklanmış, onlara itaat Allah'a kulluktan hemen sonra zikredilmiştir."
  },
  {
    id: "wh_ah_17",
    category: "Ahlak",
    question: "İnsanın kendi çıkarlarını düşünmeyerek başkalarının menfaatini kendi nefsine tercih etmesine ne ad verilir?",
    options: ["İsar", "Haset", "Cömertlik", "Adalet"],
    correct: "İsar",
    wisdom: "İsar fedakarlığın zirvesidir. Medineli Ensar'ın Muhacir kardeşleri için yaptığı fedakarlıklar buna en güzel örnektir."
  },
  {
    id: "wh_ah_18",
    category: "Ahlak",
    question: "Karşılaşılan zorluklar, musibetler ve ibadetlerin zorlukları karşısında yılgınlık göstermeyip dirençli olmaya ne denir?",
    options: ["Sabır", "Korkaklık", "Hırs", "Tevazu"],
    correct: "Sabır",
    wisdom: "Sabır kurtuluşun anahtarıdır. Ayette 'Şüphesiz Allah sabredenlerle beraberdir' buyurulmaktadır."
  },
  {
    id: "wh_ah_19",
    category: "Ahlak",
    question: "Peygamber Efendimiz'in en belirgin ahlaki lakaplarından biri olan ve 'Güvenilir Muhammed' anlamına gelen sıfat hangisidir?",
    options: ["Muhammedü'l-Emin", "Resulullah", "Habibullah", "Şafi"],
    correct: "Muhammedü'l-Emin",
    wisdom: "Müşrikler bile değerli eşyalarını koruması için Peygamberimiz'e emanet ederlerdi; O asla emanete ihanet etmezdi."
  },
  {
    id: "wh_ah_20",
    category: "Ahlak",
    question: "Dostluğun ve sadakatin gereği olarak arkadaşının sırrını saklamak ve onu zor anında terk etmemek hangi kavramla ifade edilir?",
    options: ["Vefa", "Adalet", "Tevazu", "Şecaat"],
    correct: "Vefa",
    wisdom: "Vefa, verilen sözleşmelere sadık kalmak ve geçmişteki hukuku, dostluğu unutmayıp gereğini yapmaktır."
  },
  {
    id: "wh_ah_21",
    category: "Ahlak",
    question: "İnsanın her işinde aşırılıktan kaçınıp ölçülü, dengeli ve adil davranması durumuna ne ad verilir?",
    options: ["İtidal", "İsraf", "Kibir", "Haset"],
    correct: "İtidal",
    wisdom: "İsraf ve cimrilik gibi uç noktalardan uzak durup orta yolu bulmaya itidal (denge) denir."
  },
  {
    id: "wh_ah_22",
    category: "Ahlak",
    question: "Dinimizin komşu haklarına verdiği öneme göre, komşunun komşu üzerindeki haklarının genel adı nedir?",
    options: ["Hukuk-u Civar (Komşuluk Hukuku)", "Sıla-i Rahim", "Nisap Hukuku", "Kul Hakkı"],
    correct: "Hukuk-u Civar (Komşuluk Hukuku)",
    wisdom: "Peygamberimiz 'Cebrail bana komşuyu o kadar çok tavsiye etti ki neredeyse onu varis kılacak sandım' buyurmuştur."
  },
  {
    id: "wh_ah_23",
    category: "Ahlak",
    question: "Akrabaları ziyaret etmek, arayıp sormak ve onlarla iyi ilişkiler kurmak ahlaki kavram olarak ne ad alır?",
    options: ["Sıla-i Rahim", "Tecessüs", "Hayırlı Evlat", "İhsan"],
    correct: "Sıla-i Rahim",
    wisdom: "Sıla-i rahim, akrabalık bağlarını koparmamak, onları maddi ve manevi olarak desteklemektir."
  },
  {
    id: "wh_ah_24",
    category: "Ahlak",
    question: "İşçinin emeğinin karşılığını zamanında vermek ahlaken çok önemlidir. Peygamberimizin bu konudaki uyarısı nedir?",
    options: ["Alnının teri kurumadan hakkını veriniz", "Hafta sonu ödeyiniz", "İş bittikten sonra pazarlık ediniz", "Asgari ücretten ödeyiniz"],
    correct: "Alnının teri kurumadan hakkını veriniz",
    wisdom: "Peygamberimiz (s.a.v.) kul hakkına azami dikkat gösterilmesini istemiş ve çalışanların emeğinin hemen ödenmesini emretmiştir."
  },
  {
    id: "wh_ah_25",
    category: "Ahlak",
    question: "Düşmanlık ve dargınlıkları uzatmayıp affedici olmak hakkında dinimizin tavsiyesi nedir?",
    options: ["Müslümanın Müslüman kardeşine üç günden fazla küs durması helal değildir", "Küs kalmak serbesttir", "Dargınlık bir yıl sürebilir", "Küs kalınan kişiyle bağlar tamamen koparılmalıdır"],
    correct: "Müslümanın Müslüman kardeşine üç günden fazla küs durması helal değildir",
    wisdom: "İslam barış dinidir. Kişisel meselelerden dolayı küslüklerin en fazla üç gün sürmesine izin verilmiştir."
  },

  // ==================== SİYER (25 Soru) ====================
  {
    id: "wh_si_1",
    category: "Siyer",
    question: "Peygamber Efendimiz Hz. Muhammed (s.a.v.) hangi şehirde ve hangi yılda dünyaya gelmiştir?",
    options: ["Mekke - 571", "Medine - 610", "Mekke - 622", "Taif - 571"],
    correct: "Mekke - 571",
    wisdom: "Peygamberimiz 20 Nisan 571 (Rabiulevvel ayının 12. gecesi) Mekke'de doğmuştur."
  },
  {
    id: "wh_si_2",
    category: "Siyer",
    question: "Peygamber Efendimiz'e ilk vahiy hangi mağarada gelmiştir?",
    options: ["Hira Mağarası", "Sevr Mağarası", "Uhud Mağarası", "Kuba Mağarası"],
    correct: "Hira Mağarası",
    wisdom: "İlk vahiy 610 yılının Ramazan ayında Nur Dağı'nda bulunan Hira Mağarası'nda nazil olmuştur."
  },
  {
    id: "wh_si_3",
    category: "Siyer",
    question: "Peygamber Efendimiz'in süt annesinin adı nedir?",
    options: ["Halime", "Amine", "Suveybe", "Şeyma"],
    correct: "Halime",
    wisdom: "Peygamberimiz Mekke'nin sıcak havasından korunması için süt annesi Halime Hatun'a verilmiş ve çocukluğunun bir kısmını orada geçirmiştir."
  },
  {
    id: "wh_si_4",
    category: "Siyer",
    question: "Peygamber Efendimiz'e ilk iman eden kadın ve eşi olan şahsiyet kimdir?",
    options: ["Hz. Hatice", "Hz. Ayşe", "Hz. Fatıma", "Hz. Safiye"],
    correct: "Hz. Hatice",
    wisdom: "Hz. Hatice (r.a.) ilk Müslüman olup Peygamberimiz'i zor günlerinde hem canıyla hem de malıyla desteklemiştir."
  },
  {
    id: "wh_si_5",
    category: "Siyer",
    question: "Müslümanların Mekke'den Medine'ye inançlarını korumak amacıyla yaptıkları göçe ne ad verilir?",
    options: ["Hicret", "Rıhlet", "Sefer", "Cihat"],
    correct: "Hicret",
    wisdom: "622 yılında gerçekleşen Medine Hicreti, İslam tarihinde yeni bir dönemin ve İslam devletinin başlangıcı olmuştur."
  },
  {
    id: "wh_si_6",
    category: "Siyer",
    question: "Hicret sırasında Peygamberimiz ile yol arkadaşlığı yapan ve Sevr Mağarası'nda birlikte saklandığı sahabe kimdir?",
    options: ["Hz. Ebu Bekir", "Hz. Ömer", "Hz. Osman", "Hz. Ali"],
    correct: "Hz. Ebu Bekir",
    wisdom: "Hz. Ebu Bekir (r.a.) hicretteki sadakati sebebiyle 'Yarın İkincisi' (Saniyenisneyn) olarak Kur'an'da anılmıştır."
  },
  {
    id: "wh_si_7",
    category: "Siyer",
    question: "Mekke'den göç eden Müslümanlara kucak açan ve onlarla her şeyini paylaşan Medineli Müslümanlara ne ad verilir?",
    options: ["Ensar", "Muhacir", "Ashab-ı Suffe", "Havariler"],
    correct: "Ensar",
    wisdom: "Ensar yardım edenler demektir. Göç eden Mekkeli Müslümanlara ise 'Muhacir' (hicret eden) denir."
  },
  {
    id: "wh_si_8",
    category: "Siyer",
    question: "Müslümanlar ile Mekkeli müşrikler arasında yapılan ilk büyük savaş hangisidir?",
    options: ["Bedir Savaşı", "Uhud Savaşı", "Hendek Savaşı", "Hayber Savaşı"],
    correct: "Bedir Savaşı",
    wisdom: "624 yılında yapılan Bedir Savaşı'nı Müslümanlar sayıca az olmalarına rağmen kazanmışlardır."
  },
  {
    id: "wh_si_9",
    category: "Siyer",
    question: "Hicret esnasında Peygamberimiz'in Medine yakınlarında inşa ettirdiği ve İslam tarihindeki ilk mescit olan yapı hangisidir?",
    options: ["Kuba Mescidi", "Mescid-i Nebevi", "Mescid-i Aksa", "Mescid-i Kıbleteyn"],
    correct: "Kuba Mescidi",
    wisdom: "Peygamberimiz Medine'ye girmeden önce Kuba köyünde konaklamış ve burada ilk mescidin inşasında bizzat çalışmıştır."
  },
  {
    id: "wh_si_10",
    category: "Siyer",
    question: "Peygamber Efendimiz'in Medine'de yaptırdığı, hem ibadet edilen hem de eğitim yuvası olan merkez mescit hangisidir?",
    options: ["Mescid-i Nebevi", "Mescid-i Haram", "Kuba Mescidi", "Mescid-i Dırar"],
    correct: "Mescid-i Nebevi",
    wisdom: "Mescid-i Nebevi, Medine döneminde idari, askeri, dini ve eğitsel tüm faaliyetlerin kalbi olmuştur."
  },
  {
    id: "wh_si_11",
    category: "Siyer",
    question: "Peygamber Efendimiz'in dedesinin adı aşağıdakilerden hangisidir?",
    options: ["Abdulmuttalib", "Ebu Talib", "Abdullah", "Vehb"],
    correct: "Abdulmuttalib",
    wisdom: "Babası doğumundan önce ölen peygamberimize dedesi Abdulmuttalib sahip çıkmış ve ona 'Muhammed' ismini vermiştir."
  },
  {
    id: "wh_si_12",
    category: "Siyer",
    question: "Peygamber Efendimiz'in annesinin vefatından sonra 8 yaşına kadar bakımını üstlenen amcası kimdir?",
    options: ["Ebu Talib", "Hz. Hamza", "Hz. Abbas", "Ebu Leheb"],
    correct: "Ebu Talib",
    wisdom: "Dedesi Abdulmuttalib vefat edince vasiyeti üzerine peygamberimizin bakımını amcası Ebu Talib üstlenmiştir."
  },
  {
    id: "wh_si_13",
    category: "Siyer",
    question: "Peygamberimiz'in çocuk yaşta Müslüman olan ve hicret gecesinde Peygamberimiz'in yatağına yatarak müşrikleri şaşırtan kuzeni kimdir?",
    options: ["Hz. Ali", "Hz. Cafer", "Hz. Hamza", "Hz. Ebu Bekir"],
    correct: "Hz. Ali",
    wisdom: "Hz. Ali (r.a.) hicret gecesi canını tehlikeye atarak Peygamberimiz'in yatağına yatmış ve emanetleri sahiplerine ulaştırmıştır."
  },
  {
    id: "wh_si_14",
    category: "Siyer",
    question: "İslam tarihinde Habeşistan'a yapılan ilk hicretten sonra Medine dönemi öncesi Akabe denilen yerde Peygamberimiz ile Medineliler arasında yapılan bağlılık sözleşmelerine ne denir?",
    options: ["Akabe Biatları", "Hudeybiye Antlaşması", "Medine Sözleşmesi", "Rıdvan Biatı"],
    correct: "Akabe Biatları",
    wisdom: "Akabe Biatları, Medineli Müslümanların İslam'ı koruma ve peygamberimizi Medine'ye davet etme sözüdür."
  },
  {
    id: "wh_si_15",
    category: "Siyer",
    question: "Peygamber Efendimiz'in soyunu devam ettiren, Hz. Ali ile evli olan sevgili kızı kimdir?",
    options: ["Hz. Fatıma", "Hz. Zeynep", "Hz. Rukiye", "Hz. Ümmü Gülsüm"],
    correct: "Hz. Fatıma",
    wisdom: "Hz. Fatıma (r.a.) peygamberimizin en küçük ve en çok sevdiği kızı olup, cennet kadınlarının seyyidesi olarak müjdelenmiştir."
  },
  {
    id: "wh_si_16",
    category: "Siyer",
    question: "Uhud Savaşı'nda şehit düşen ve 'Şehitlerin Efendisi' lakabıyla anılan Peygamberimizin kahraman amcası kimdir?",
    options: ["Hz. Hamza", "Hz. Abbas", "Ebu Talib", "Hz. Haris"],
    correct: "Hz. Hamza",
    wisdom: "Hz. Hamza (r.a.) Uhud Savaşı'nda vahşice şehit edilmiş ve İslam tarihinin en büyük yaslarından birine sebep olmuştur."
  },
  {
    id: "wh_si_17",
    category: "Siyer",
    question: "Medine Mescidi'nin yanında kimsesiz ve fakir sahabilerin barınması ve eğitim görmesi için yapılan gölgeliğe/odalara ne ad verilir?",
    options: ["Suffe", "Beytülmal", "Darülaceze", "Darülerkam"],
    correct: "Suffe",
    wisdom: "Suffe'de yetişen sahabiler (Ashab-ı Suffe) kendilerini ilme adamış, İslam'ın ilk öğretmenleri olmuşlardır."
  },
  {
    id: "wh_si_18",
    category: "Siyer",
    question: "Müslümanlar ile müşrikler arasında Medine'yi savunmak amacıyla etrafına büyük çukurlar kazılarak yapılan savaş hangisidir?",
    options: ["Hendek Savaşı", "Uhud Savaşı", "Bedir Savaşı", "Huneyn Savaşı"],
    correct: "Hendek Savaşı",
    wisdom: "Hendek Savaşı'nda hendek kazma fikrini İranlı sahabi Selman-ı Farisi vermiş ve bu taktik savunmada zafer getirmiştir."
  },
  {
    id: "wh_si_19",
    category: "Siyer",
    question: "Peygamber Efendimiz'in vefat ettiği tarih ve şehir aşağıdakilerden hangisidir?",
    options: ["Medine - 632", "Mekke - 632", "Medine - 610", "Şam - 632"],
    correct: "Medine - 632",
    wisdom: "Peygamberimiz 8 Haziran 632 tarihinde Medine'de vefat etmiş ve naaşı Mescid-i Nebevi içindeki Hücre-i Saadet'e defnedilmiştir."
  },
  {
    id: "wh_si_20",
    category: "Siyer",
    question: "Peygamber Efendimiz'in vefatından önce yüz bini aşkın Müslümana hitap ettiği tarihi konuşma hangisidir?",
    options: ["Veda Hutbesi", "Akabe Hutbesi", "Hutbe-i Şamiye", "Medine Hutbesi"],
    correct: "Veda Hutbesi",
    wisdom: "Veda Hutbesi insan hakları, adalet, kadın hakları ve eşitlik konularında evrensel bir beyanname niteliğindedir."
  },
  {
    id: "wh_si_21",
    category: "Siyer",
    question: "İslamiyet'in ilk dönemlerinde Mekke'de gizlice toplanılan ve eğitim yapılan Erkam adındaki sahabenin evi hangi isimle anılır?",
    options: ["Darülerkam", "Darünnedve", "Suffe", "Kabe Müştemilatı"],
    correct: "Darülerkam",
    wisdom: "Darülerkam, İslam tebliğinin ilk merkezidir. Müslümanlar burada gizlice toplanıp Kur'an okumuş ve eğitilmişlerdir."
  },
  {
    id: "wh_si_22",
    category: "Siyer",
    question: "Peygamberimiz'in hicret ederken Medine yolunda ilk Cuma namazını kıldırdığı vadi hangisidir?",
    options: ["Ranuna Vadisi", "Kuba Vadisi", "Bedir Vadisi", "Uhud Vadisi"],
    correct: "Ranuna Vadisi",
    wisdom: "Peygamberimiz Kuba'dan Medine'ye doğru yola çıktığında Ranuna vadisinde ilk Cuma namazını kıldırmış ve hutbe irad etmiştir."
  },
  {
    id: "wh_si_23",
    category: "Siyer",
    question: "Peygamber Efendimiz'in dedesi ve amcası vefat etmeden önce ona bakan, 'annemden sonraki annem' dediği yengesi kimdir?",
    options: ["Fatıma binti Esed", "Halime Hatun", "Suveybe Hatun", "Ümmü Eymen"],
    correct: "Fatıma binti Esed",
    wisdom: "Hz. Ali'nin annesi olan Fatıma binti Esed, Peygamberimiz'i çocukluğunda kendi evlatlarından ayırmayarak sevgiyle büyütmüştür."
  },
  {
    id: "wh_si_24",
    category: "Siyer",
    question: "İslamiyet'in ilk ezanını okuyan ve sesiyle Müslümanları namaza davet eden ilk müezzin kimdir?",
    options: ["Bilal-i Habeşi", "Ebu Zer", "Ammar bin Yasir", "Mus'ab bin Umeyr"],
    correct: "Bilal-i Habeşi",
    wisdom: "Bilal-i Habeşi (r.a.) kölelikten kurtulup İslam'ın en şerefli görevlerinden biri olan ilk müezzinliği üstlenmiştir."
  },
  {
    id: "wh_si_25",
    category: "Siyer",
    question: "Müslümanların Habeşistan'a hicret eden ilk kafilesinin başında bulunan peygamberimizin damadı olan sahabe kimdir?",
    options: ["Hz. Osman", "Hz. Ali", "Hz. Ebu Bekir", "Hz. Ömer"],
    correct: "Hz. Osman",
    wisdom: "Hz. Osman (r.a.) eşi Hz. Rukiye ile birlikte Habeşistan'a göç eden ilk grubun liderliğini yapmıştır."
  },

  // ==================== MEDENİYET (25 Soru) ====================
  {
    id: "wh_me_1",
    category: "Medeniyet",
    question: "Tıbbın babası olarak bilinen, yazdığı 'El-Kanun fi't-Tıbb' (Tıbbın Kanunu) eseri Avrupa üniversitelerinde yüzyıllarca ders kitabı olarak okutulan büyük Müslüman hekim kimdir?",
    options: ["İbn-i Sina", "Farabi", "Biruni", "Harezmi"],
    correct: "İbn-i Sina",
    wisdom: "Batı dünyasında 'Avicenna' olarak tanınan İbn-i Sina, tıp, felsefe ve astronomi alanında çağ açmış bir dâhidir."
  },
  {
    id: "wh_me_2",
    category: "Medeniyet",
    question: "Sibernetiğin ve robotik bilminin kurucusu kabul edilen, Diyarbakır Artuklu Sarayı'nda otomatik makineler ve su saatleri yapan İslam bilgini kimdir?",
    options: ["El-Cezeri", "Beni Musa", "Harezmi", "İbnü'l-Heysem"],
    correct: "El-Cezeri",
    wisdom: "El-Cezeri, dişli çarklar, pistonlar ve mekanik şifreli kilitler geliştirerek bugünkü robot teknolojisinin temellerini atmıştır."
  },
  {
    id: "wh_me_3",
    category: "Medeniyet",
    question: "Cebir biliminin kurucusu olan ve matematikte 'sıfır' (0) rakamını ilk kez sistemli kullanan Harezm doğumlu Müslüman matematikçi kimdir?",
    options: ["El-Harezmi", "Ömer Hayyam", "Ali Kuşçu", "Biruni"],
    correct: "El-Harezmi",
    wisdom: "Batı dillerindeki 'Algorithm' (Algoritma) kelimesi Harezmi'nin isminin Latince telaffuzundan türemiştir."
  },
  {
    id: "wh_me_4",
    category: "Medeniyet",
    question: "Modern optik biliminin kurucusu sayılan, karanlık odayı (kamera obskura) keşfedip gözün görme mekanizmasını fiziksel olarak açıklayan alim kimdir?",
    options: ["İbnü'l-Heysem", "Biruni", "Cabir bin Hayyan", "Kindi"],
    correct: "İbnü'l-Heysem",
    wisdom: "İbnü'l-Heysem 'Kitabü'l-Menazır' (Optik Kitabı) eseriyle ışığın kırılması ve yansıması kurallarını deneysel olarak kanıtlamıştır."
  },
  {
    id: "wh_me_5",
    category: "Medeniyet",
    question: "Kimya biliminin babası kabul edilen, maddeleri atom bombasına benzer bir enerjiyle parçalanabileceğini öne süren ve ilk hassas terazileri kullanan bilgin kimdir?",
    options: ["Cabir bin Hayyan", "Zekeriya er-Razi", "İbn-i Rüşd", "Kindi"],
    correct: "Cabir bin Hayyan",
    wisdom: "Batı'da 'Geber' adıyla bilinen Cabir bin Hayyan, nitrik asit, hidroklorik asit ve sülfürik asiti keşfeden ilk kişidir."
  },
  {
    id: "wh_me_6",
    category: "Medeniyet",
    question: "Fatih Sultan Mehmet'in hocası olan, mikropların varlığını Pasteur'dan yüzyıllar önce 'Maddetü'l-Hayat' adlı eserinde açıklayan tıp ve din alimi kimdir?",
    options: ["Akşemseddin", "Ali Kuşçu", "Molla Gürani", "Ebussuud Efendi"],
    correct: "Akşemseddin",
    wisdom: "Akşemseddin hem İstanbul'un manevi fatihi olmuş hem de mikrobiyolojinin ilk temellerini atan bilim insanı olmuştur."
  },
  {
    id: "wh_me_7",
    category: "Medeniyet",
    question: "Semerkand'da büyük bir gözlemevi (rasathane) kuran, astronomi cetvelleri (Zic) hazırlayan ve aynı zamanda bir devlet adamı olan ünlü Türk matematikçi kimdir?",
    options: ["Uluğ Bey", "Ali Kuşçu", "Kadızade-i Rumi", "Gıyaseddin Cemşid"],
    correct: "Uluğ Bey",
    wisdom: "Uluğ Bey, Timur'un torunu olup Semerkand'ı bilim merkezine dönüştürmüş ve gökyüzü haritaları çizmiştir."
  },
  {
    id: "wh_me_8",
    category: "Medeniyet",
    question: "Uluğ Bey'in öğrencisi olan, Semerkand'dan İstanbul'a gelerek Fatih Sultan Mehmet tarafından Ayasofya Medresesi başmüderrisi yapılan gökbilimci kimdir?",
    options: ["Ali Kuşçu", "Miri Rim", "Matrakçı Nasuh", "Takıyüddin"],
    correct: "Ali Kuşçu",
    wisdom: "Ali Kuşçu, İstanbul'un enlem ve boylamını hesaplamış, Ay'ın ilk haritalarından birini çizdiği için NASA tarafından adı Ay'daki bir kratere verilmiştir."
  },
  {
    id: "wh_me_9",
    category: "Medeniyet",
    question: "Tarih, sosyoloji ve iktisat bilimlerinin kurucusu sayılan, meşhur 'Mukaddime' adlı eserin yazarı Tunuslu devlet adamı ve filozof kimdir?",
    options: ["İbn-i Haldun", "İbn-i Battuta", "İrşadi", "İbn-i Cübeyr"],
    correct: "İbn-i Haldun",
    wisdom: "İbn-i Haldun, medeniyetlerin yükseliş ve çöküşünü 'Asabiyet' teorisiyle açıklamış modern sosyolojinin öncüsüdür."
  },
  {
    id: "wh_me_10",
    category: "Medeniyet",
    question: "Kanuni Sultan Süleyman döneminde yaşayan, dünya haritasını çizip 'Kitab-ı Bahriye' adında denizcilik eseri yazan Osmanlı denizcisi kimdir?",
    options: ["Piri Reis", "Seydi Ali Reis", "Barbaros Hayreddin", "Oruç Reis"],
    correct: "Piri Reis",
    wisdom: "Piri Reis'in 1513 yılında ceylan derisi üzerine çizdiği harita, Amerika kıtasını gösteren en eski ve en detaylı haritalardandır."
  },
  {
    id: "wh_me_11",
    category: "Medeniyet",
    question: "Osmanlı döneminde yaşayan, Süleymaniye ve Selimiye gibi mimari şaheserleri inşa eden dahi başmimar kimdir?",
    options: ["Mimar Sinan", "Mimar Sedefkar Mehmed Ağa", "Mimar Hayreddin", "Mimar Kemaleddin"],
    correct: "Mimar Sinan",
    wisdom: "Mimar Sinan, çıraklık eseri Şehzadebaşı, kalfalık eseri Süleymaniye ve ustalık eseri Selimiye Camii ile dünya mimarlık tarihine damga vurmuştur."
  },
  {
    id: "wh_me_12",
    category: "Medeniyet",
    question: "Dünya seyahat tarihinin en büyük seyyahlarından biri kabul edilen, Rıhletü İbn-i Battuta adıyla anılan gezi kitabını yazan Faslı gezgin kimdir?",
    options: ["İbn-i Battuta", "Evliya Çelebi", "Marco Polo", "İbn-i Cübeyr"],
    correct: "İbn-i Battuta",
    wisdom: "İbn-i Battuta, orta çağda tam 117 bin kilometre yol katederek neredeyse tüm İslam coğrafyasını ve Asya'yı gezmiştir."
  },
  {
    id: "wh_me_13",
    category: "Medeniyet",
    question: "Endülüs İslam devletinde yaşayan, felsefe ve tıp alanında Batı dünyasını derinden etkileyen ve 'Averroes' adıyla tanınan bilgin kimdir?",
    options: ["İbn-i Rüşd", "İbn-i Tufeyl", "Gazzali", "İbn-i Bace"],
    correct: "İbn-i Rüşd",
    wisdom: "İbn-i Rüşd, Aristo felsefesini yorumlayarak Rönesans ve Reform hareketlerinin felsefi altyapısına katkıda bulunmuştur."
  },
  {
    id: "wh_me_14",
    category: "Medeniyet",
    question: "Gazneli Mahmud'un 'Sarayımın en değerli hazinesi' dediği, Dünya'nın döndüğünü ve yerçekimini Newton'dan önce hesaplayan Harezmli dahi kimdir?",
    options: ["El-Biruni", "İbn-i Sina", "Kindi", "Ömer Hayyam"],
    correct: "El-Biruni",
    wisdom: "Biruni, Dünya'nın yarıçapını sadece 15 metrelik bir hata payıyla hesaplamayı başarmış evrensel bir bilim insanıdır."
  },
  {
    id: "wh_me_15",
    category: "Medeniyet",
    question: "İslam dünyasında felsefenin ilk temsilcisi kabul edilen, kriptoloji (şifreleme) biliminin ilk eserini yazan Iraklı matematikçi filozof kimdir?",
    options: ["El-Kindi", "Farabi", "İbn-i Rüşd", "Sühreverdi"],
    correct: "El-Kindi",
    wisdom: "Batı'da 'Alkindus' adıyla anılan Kindi, felsefeyi İslam dünyasına tanıtan ilk büyük filozoftur."
  },
  {
    id: "wh_me_16",
    category: "Medeniyet",
    question: "Aristo'dan sonra felsefe dünyasında 'Muallim-i Sani' (İkinci Öğretmen) unvanıyla anılan, müzik ve mantık alanında büyük eserler veren Türk-İslam filozofu kimdir?",
    options: ["Farabi", "İbn-i Sina", "Kindi", "Gazzali"],
    correct: "Farabi",
    wisdom: "Batı'da 'Alpharabius' olarak bilinen Farabi, ideal devlet ve toplum teorilerini 'Medinetü'l-Fazıla' adlı eserinde yazmıştır."
  },
  {
    id: "wh_me_17",
    category: "Medeniyet",
    question: "Osmanlı Devleti'nin kurucusu Osman Bey'in kayınpederi ve hocası olan, Osmanlı'nın manevi mimarı sayılan Şeyh kimdir?",
    options: ["Şeyh Edebali", "Hacı Bayram-ı Veli", "Akşemseddin", "Somuncu Baba"],
    correct: "Şeyh Edebali",
    wisdom: "Şeyh Edebali'nin Osman Gazi'ye verdiği 'Ey oğul, beysin! Bundan sonra öfke bize, uysallık sana...' öğüdü devletin kuruluş felsefesini oluşturur."
  },
  {
    id: "wh_me_18",
    category: "Medeniyet",
    question: "Malazgirt Savaşı'nda Bizans ordusunu yenerek Anadolu'nun kapılarını Müslüman Türklere açan Selçuklu Sultanı kimdir?",
    options: ["Sultan Alparslan", "Tuğrul Bey", "Melikşah", "Sultan Sencer"],
    correct: "Sultan Alparslan",
    wisdom: "Sultan Alparslan 1071 yılında beyaz kefen gibi bir elbiseyle ordusunun önüne çıkıp savaşarak büyük bir kahramanlık sergilemiştir."
  },
  {
    id: "wh_me_19",
    category: "Medeniyet",
    question: "Osmanlı İmparatorluğu'nda ilk tıp okulunu ve ilk hastaneleri (darüşşifa) kuran, cerrahi aletlerin çizimlerini içeren kitap yazan ünlü Osmanlı hekimi kimdir?",
    options: ["Sabuncuoğlu Şerefeddin", "Altuncuzade", "Akşemseddin", "Şerafeddin Mağmumi"],
    correct: "Sabuncuoğlu Şerefeddin",
    wisdom: "Sabuncuoğlu Şerefeddin, 'Cerrahiyyetü'l-Haniyye' eserinde ameliyat yöntemlerini ve cerrahi aletleri görsel olarak çizmiştir."
  },
  {
    id: "wh_me_20",
    category: "Medeniyet",
    question: "Selçuklu veziri nizamülmülk tarafından Bağdat'ta kurulan, tarihin ilk büyük üniversitelerinden sayılan eğitim kurumunun adı nedir?",
    options: ["Nizamiye Medreseleri", "Sahn-ı Seman Medreseleri", "Süleymaniye Medresesi", "Semerkand Gözlemevi"],
    correct: "Nizamiye Medreseleri",
    wisdom: "Nizamiye Medreseleri, ücretsiz eğitim, kütüphaneler ve üstün hocalarıyla İslam dünyasında altın çağın eğitim lokomotifi olmuştur."
  },
  {
    id: "wh_me_21",
    category: "Medeniyet",
    question: "Bağdat'ta Abbasi halifesi Memun tarafından kurulan, içerisinde devasa bir kütüphane ve tercüme evi barındıran bilim merkezinin adı nedir?",
    options: ["Beytü'l-Hikme (Hikmetler Evi)", "Darülfünun", "Suffe", "Nizamiye"],
    correct: "Beytü'l-Hikme (Hikmetler Evi)",
    wisdom: "Beytü'l-Hikme, felsefe, tıp ve fen bilimlerine ait antik Yunanca, Hintçe eserlerin Arapçaya çevrildiği dünya çapında bir bilim yuvasıydı."
  },
  {
    id: "wh_me_22",
    category: "Medeniyet",
    question: "Haritaları ve coğrafi keşifleriyle ünlü, Galiçyalı haritacı Roger'ın adıyla anılan haritayı ve coğrafya ansiklopedisini hazırlayan Müslüman coğrafyacı kimdir?",
    options: ["El-İdrisi", "Piri Reis", "İbn-i Hurdazbih", "Biruni"],
    correct: "El-İdrisi",
    wisdom: "İdrisi, gümüş bir küre üzerine dünya haritasını çizmiş ve o dönemin en detaylı coğrafya atlaslarını hazırlamıştır."
  },
  {
    id: "wh_me_23",
    category: "Medeniyet",
    question: "Hristiyan dünyasında 'Gundisalvus' veya felsefi etkisiyle tanınan, Bağdat Nizamiye medresesi rektörlüğü yapan ve 'İhya-u Ulumiddin' eserini yazan alim kimdir?",
    options: ["İmam Gazzali", "İmam Şafi", "İmam Azam", "İbn-i Hazm"],
    correct: "İmam Gazzali",
    wisdom: "İmam Gazzali (r.a.) felsefecilerin tutarsızlıklarını eleştirdiği 'Tehafütü'l-Felasife' eseriyle İslam düşüncesinde derin izler bırakmıştır."
  },
  {
    id: "wh_me_24",
    category: "Medeniyet",
    question: "Osmanlı tarihinin en büyük tarihçi ve coğrafyacılarından olan, 'Cihannüma' ve 'Keşfü'z-Zunûn' adlı devasa kaynak eserleri yazan Katip Çelebi Batı'da hangi isimle bilinir?",
    options: ["Hacı Halife", "Piri Reis", "Evliya Çelebi", "Naima"],
    correct: "Hacı Halife",
    wisdom: "Katip Çelebi (Hacı Halife), bibliyografya ve coğrafya alanında binlerce kitabı tasnif ederek büyük bir ilmi miras bırakmıştır."
  },
  {
    id: "wh_me_25",
    category: "Medeniyet",
    question: "17. yüzyılda yaşayan, kendi yaptığı kanatlarla Galata Kulesi'nden Üsküdar'a uçmayı başaran ilk Türk havacı kimdir?",
    options: ["Hezarfen Ahmed Çelebi", "Lagari Hasan Çelebi", "Takıyüddin", "Evliya Çelebi"],
    correct: "Hezarfen Ahmed Çelebi",
    wisdom: "Hezarfen Ahmed Çelebi, kuşların uçuş mekanizmasını inceleyerek yaptığı kanatlarla İstanbul Boğazı'nı havadan geçmiştir."
  },

  // ==================== GENEL KÜLTÜR (25 Soru) ====================
  {
    id: "wh_gk_1",
    category: "Genel Kültür",
    question: "Güneş sistemindeki en büyük gezegen aşağıdakilerden hangisidir?",
    options: ["Jüpiter", "Satürn", "Neptün", "Dünya"],
    correct: "Jüpiter",
    wisdom: "Jüpiter, Güneş sisteminin en büyük gezegeni olup, çapı Dünya'nın yaklaşık 11 katıdır."
  },
  {
    id: "wh_gk_2",
    category: "Genel Kültür",
    question: "Dünya'nın en yüksek dağ zirvesi olan Everest hangi sıradağlar üzerinde yer alır?",
    options: ["Himalayalar", "Alpler", "And Dağları", "Toroslar"],
    correct: "Himalayalar",
    wisdom: "Everest zirvesi, Nepal ile Çin sınırı arasında Himalayalar sıradağlarında bulunur ve yüksekliği 8848 metredir."
  },
  {
    id: "wh_gk_3",
    category: "Genel Kültür",
    question: "İstiklal Marşı'mızın şairi aşağıdakilerden hangisidir?",
    options: ["Mehmet Akif Ersoy", "Namık Kemal", "Ziya Gökalp", "Yahya Kemal"],
    correct: "Mehmet Akif Ersoy",
    wisdom: "Mehmet Akif Ersoy, İstiklal Marşı'nı kahraman Türk ordusuna ithaf etmiş ve kazandığı para ödülünü Darülmesai vakfına bağışlamıştır."
  },
  {
    id: "wh_gk_4",
    category: "Genel Kültür",
    question: "Suyun kimyasal formülü aşağıdakilerden hangisidir?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correct: "H2O",
    wisdom: "Su molekülü, iki Hidrojen (H) ve bir Oksijen (O) atomunun kovalent bağ yapmasıyla oluşur."
  },
  {
    id: "wh_gk_5",
    category: "Genel Kültür",
    question: "Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ün nüfusa kayıtlı olduğu il hangisidir?",
    options: ["Gaziantep", "Ankara", "İstanbul", "Selanik"],
    correct: "Gaziantep",
    wisdom: "Gazi Mustafa Kemal Atatürk, Gaziantep ilinin Şahinbey ilçesi nüfusuna kayıtlıdır."
  },
  {
    id: "wh_gk_6",
    category: "Genel Kültür",
    question: "Dünya'nın en derin noktası olarak bilinen Mariana Çukuru hangi okyanusta yer almaktadır?",
    options: ["Büyük Okyanus (Pasifik)", "Atlas Okyanusu", "Hint Okyanusu", "Kuzey Buz Denizi"],
    correct: "Büyük Okyanus (Pasifik)",
    wisdom: "Mariana Çukuru yaklaşık 11 bin metre derinliğiyle Dünya'nın en derin noktasıdır."
  },
  {
    id: "wh_gk_7",
    category: "Genel Kültür",
    question: "Kendi ışığını üreten ve Dünya'mıza en yakın yıldız olan gök cismi hangisidir?",
    options: ["Güneş", "Kutup Yıldızı", "Sirius", "Halley"],
    correct: "Güneş",
    wisdom: "Güneş, Dünya'ya en yakın orta büyüklükte bir yıldız olup, tüm yaşamın enerji ve ısı kaynağıdır."
  },
  {
    id: "wh_gk_8",
    category: "Genel Kültür",
    question: "Türkiye Cumhuriyeti'nin yüzölçümü en büyük olan gölü aşağıdakilerden hangisidir?",
    options: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"],
    correct: "Van Gölü",
    wisdom: "Van Gölü 3713 kilometrekare yüzölçümüyle Türkiye'nin en büyük, dünyanın ise en büyük sodalı gölüdür."
  },
  {
    id: "wh_gk_9",
    category: "Genel Kültür",
    question: "Yer çekimi kanununu sistemli bir şekilde formülleştiren ünlü bilim insanı kimdir?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correct: "Isaac Newton",
    wisdom: "Newton, başına elma düşmesi hikayesiyle sembolleşen kütle çekim yasasını matematiksel olarak açıklamıştır."
  },
  {
    id: "wh_gk_10",
    category: "Genel Kültür",
    question: "Kan değerlerimizi taşıyan ve kırmızı rengi veren hücre türü aşağıdakilerden hangisidir?",
    options: ["Alyuvar (Eritrosit)", "Akyuvar (Lökosit)", "Trombosit", "Plazma"],
    correct: "Alyuvar (Eritrosit)",
    wisdom: "Alyuvarlar içerdikleri hemoglobin proteini sayesinde oksijen taşır ve kana kırmızı rengini verir."
  },
  {
    id: "wh_gk_11",
    category: "Genel Kültür",
    question: "Dünya haritası üzerinde en çok ülkeye sahip olan kıta hangisidir?",
    options: ["Afrika", "Asya", "Avrupa", "Güney Amerika"],
    correct: "Afrika",
    wisdom: "Afrika kıtasında Birleşmiş Milletler tarafından tanınan 54 bağımsız ülke bulunmaktadır."
  },
  {
    id: "wh_gk_12",
    category: "Genel Kültür",
    question: "Havada en çok bulunan ve nefes alırken ciğerlerimize giren gaz hangisidir?",
    options: ["Azot (Azot gazı %78)", "Oksijen (%21)", "Karbondioksit", "Helyum"],
    correct: "Azot (Azot gazı %78)",
    wisdom: "Atmosferin %78'ini Azot, %21'ini Oksijen ve kalan %1'ini diğer gazlar oluşturur."
  },
  {
    id: "wh_gk_13",
    category: "Genel Kültür",
    question: "Tarihte bilinen ilk yazılı anayasaya benzer kanunlar olan Hammurabi Kanunları hangi medeniyete aittir?",
    options: ["Babil", "Asur", "Mısır", "Sümer"],
    correct: "Babil",
    wisdom: "Kral Hammurabi tarafından hazırlanan bu kanunlar 'kısasa kısas' ilkesine dayanmasıyla ünlüdür."
  },
  {
    id: "wh_gk_14",
    category: "Genel Kültür",
    question: "Gözle görülemeyecek kadar küçük canlıları büyüterek incelememizi sağlayan alet hangisidir?",
    options: ["Mikroskop", "Teleskop", "Büyüteç", "Periskop"],
    correct: "Mikroskop",
    wisdom: "Mikroskobu ilk geliştiren bilim insanları arasında Zacharias Janssen ve Antonie van Leeuwenhoek yer alır."
  },
  {
    id: "wh_gk_15",
    category: "Genel Kültür",
    question: "Bir üçgenin iç açılarının toplamı kaç derecedir?",
    options: ["180", "360", "90", "270"],
    correct: "180",
    wisdom: "Öklid geometrisinde her türlü üçgenin iç açılarının toplamı her zaman 180 dereceye eşittir."
  },
  {
    id: "wh_gk_16",
    category: "Genel Kültür",
    question: "Türkiye Cumhuriyeti'nin başkenti neresidir?",
    options: ["Ankara", "İstanbul", "İzmir", "Bursa"],
    correct: "Ankara",
    wisdom: "Ankara, Kurtuluş Savaşı'nın idare merkezi olmuş ve 13 Ekim 1923'te resmen başkent ilan edilmiştir."
  },
  {
    id: "wh_gk_17",
    category: "Genel Kültür",
    question: "Vücudumuzdaki en sert doku aşağıdakilerden hangisidir?",
    options: ["Diş Minesi", "Kemik", "Kıkırdak", "Tırnak"],
    correct: "Diş Minesi",
    wisdom: "Dişlerin dış yüzeyini kaplayan diş minesi, kalsiyum minerali yapısıyla vücudun en sert maddesidir."
  },
  {
    id: "wh_gk_18",
    category: "Genel Kültür",
    question: "Pusulada kuzey yönünü gösteren ibre genellikle hangi renkle boyanmıştır?",
    options: ["Kırmızı", "Mavi", "Yeşil", "Sarı"],
    correct: "Kırmızı",
    wisdom: "Mıknatıslı pusula iğnesinin kuzeyi (N) gösteren ucu her zaman kırmızı renkle işaretlenir."
  },
  {
    id: "wh_gk_19",
    category: "Genel Kültür",
    question: "Üç tarafı denizlerle çevrili kara parçalarına coğrafyada ne ad verilir?",
    options: ["Yarımada", "Ada", "Körfez", "Kıta"],
    correct: "Yarımada",
    wisdom: "Anadolu yarımadası, kuzeyde Karadeniz, güneyde Akdeniz, batıda Ege denizi ile çevrili bir yarımadadır."
  },
  {
    id: "wh_gk_20",
    category: "Genel Kültür",
    question: "Türkiye'nin en yüksek dağı olan Ağrı Dağı'nın yüksekliği yaklaşık kaç metredir?",
    options: ["5137", "3917", "4058", "2918"],
    correct: "5137",
    wisdom: "Ağrı Dağı 5137 metre yüksekliğiyle Türkiye'nin ve tüm Avrupa kıtasının en yüksek volkanik zirvesidir."
  },
  {
    id: "wh_gk_21",
    category: "Genel Kültür",
    question: "Tarihin sıfır noktası kabul edilen, dünyanın en eski tapınak kalıntılarının bulunduğu Şanlıurfa'daki arkeolojik alan hangisidir?",
    options: ["Göbeklitepe", "Çatalhöyük", "Efes", "Troya"],
    correct: "Göbeklitepe",
    wisdom: "Göbeklitepe yaklaşık 12 bin yıllık tarihiyle tarım devriminden bile önce inşa edilmiş en eski anıtsal yapıdır."
  },
  {
    id: "wh_gk_22",
    category: "Genel Kültür",
    question: "Dünya'nın tek doğal uydusu olan gök cismi hangisidir?",
    options: ["Ay", "Güneş", "Mars", "Türksat"],
    correct: "Ay",
    wisdom: "Ay, Dünya etrafındaki dönüşünü ve kendi etrafındaki dönüşünü yaklaşık 27 günde tamamlar."
  },
  {
    id: "wh_gk_23",
    category: "Genel Kültür",
    question: "Bilgisayar bilimlerinde verilerin depolandığı en küçük bilgi birimi aşağıdakilerden hangisidir?",
    options: ["Bit", "Byte", "Megabyte", "Kilobyte"],
    correct: "Bit",
    wisdom: "Bit, ikili sayı sistemindeki en temel veri birimidir (0 veya 1)."
  },
  {
    id: "wh_gk_24",
    category: "Genel Kültür",
    question: "Nobel ödülünü kazanan ilk Türk bilim insanı olan, DNA onarımı araştırmalarıyla kimya alanında ödül alan alimimiz kimdir?",
    options: ["Aziz Sancar", "Cahit Arf", "Oktay Sinanoğlu", "Celal Şengör"],
    correct: "Aziz Sancar",
    wisdom: "Aziz Sancar, 2015 yılında hücrelerin hasar gören DNA'ları nasıl onardığını haritalandırarak Nobel Kimya Ödülü'nü almıştır."
  },
  {
    id: "wh_gk_25",
    category: "Genel Kültür",
    question: "Yazıyı icat ederek insanlık tarihini tarih öncesi çağlardan tarihi çağlara taşıyan ilk Mezopotamya uygarlığı hangisidir?",
    options: ["Sümerler", "Akadlar", "Asurlar", "Babiller"],
    correct: "Sümerler",
    wisdom: "Sümerler M.Ö. 3500 yıllarında çivi yazısını bularak insanlık tarihinin en büyük sıçramasını gerçekleştirmişlerdir."
  }
];
