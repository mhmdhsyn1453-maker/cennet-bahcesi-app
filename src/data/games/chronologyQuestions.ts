// Zaman Şeridi (Chronology Game) Soru Havuzu
// Toplam 60 adet kronolojik/sıralama seviyesi içerir (yaklaşık 300 sıralama adımı).
// Her seviye { id, title, category, items, description, difficulty } formatındadır.

export interface ChronologyLevel {
  id: string;
  title: string;
  category: 'Siyer' | 'İbadet' | 'Peygamberler' | 'Sureler' | 'Adab';
  items: string[];      // Doğru sıralanmış hali (eskiden yeniye, baştan sona)
  description: string;  // Sıralama tamamlanınca gösterilecek açıklama/öğreti
  difficulty: 'easy' | 'medium' | 'hard';
}

export const CHRONOLOGY_QUESTIONS_DB: ChronologyLevel[] = [
  // ===== SİYER & İSLAM TARİHİ =====
  {
    id: "chrono_1",
    title: "Peygamberimizin (s.a.v.) Çocukluk Yılları",
    category: "Siyer",
    items: [
      "Doğumu (571)",
      "Sütanne Halime'nin yanına verilmesi",
      "Annesi Âmine'nin vefatı (577)",
      "Dedesi Abdülmuttalib'in vefatı (579)",
      "Amcası Ebu Talib'in himayesine girmesi"
    ],
    description: "Peygamber Efendimiz küçük yaşta anne ve dedesini kaybetmiş, amcası Ebu Talib'in yanında sevgi ve şefkatle büyümüştür.",
    difficulty: "easy"
  },
  {
    id: "chrono_2",
    title: "İslam'ın İlk Yılları",
    category: "Siyer",
    items: [
      "Gizli davet dönemi",
      "Açıktan davetin başlaması",
      "Habeşistan hicretleri",
      "Hüzün Yılı (Ebu Talib ve Hz. Hatice'nin vefatı)",
      "Akabe Biatları (Medinelilerle görüşme)"
    ],
    description: "İslamiyet Mekke'de büyük baskılar altında gizli davetle başlamış, boykot yılları ve Hüzün Yılı'nın ardından Medine kapıları Akabe Biatları ile açılmıştır.",
    difficulty: "medium"
  },
  {
    id: "chrono_3",
    title: "Hicret ve Medine Dönemi Başlangıcı",
    category: "Siyer",
    items: [
      "Mekke'den Sevr Mağarası'na hareket",
      "Kuba Mescidi'nin inşa edilmesi",
      "Ranuna Vadisi'nde ilk Cuma namazı",
      "Medine'ye varış and Ebu Eyyub el-Ensari'nin evine misafir oluş",
      "Ensar ile Muhacir kardeşliği (Muahat)"
    ],
    description: "622 yılında gerçekleşen Hicret, İslam tarihinin dönüm noktası olup Medine'de adalet ve kardeşlik temelli bir toplumun kurulmasını sağlamıştır.",
    difficulty: "medium"
  },
  {
    id: "chrono_4",
    title: "Mekkelilerle Yapılan Savunma Savaşları",
    category: "Siyer",
    items: [
      "Bedir Savaşı (624)",
      "Uhud Savaşı (625)",
      "Hendek Savaşı (627)"
    ],
    description: "Müslümanlar kendilerini savunmak ve inançlarını özgürce yaşamak adına Bedir, Uhud ve Hendek savaşlarında canla başla mücadele etmişlerdir.",
    difficulty: "easy"
  },
  {
    id: "chrono_5",
    title: "Mekke'nin Fethine Giden Yol",
    category: "Siyer",
    items: [
      "Hudeybiye Antlaşması (628)",
      "Hayber'in Fethi (629)",
      "Mekke'nin Fethi (630)"
    ],
    description: "Hudeybiye Antlaşması ile sağlanan barış ortamı, Hayber'in fethini ve nihayetinde 630 yılında Mekke'nin kansız şekilde fethedilmesini hazırlamıştır.",
    difficulty: "easy"
  },
  {
    id: "chrono_6",
    title: "Peygamberimizin Vefat Süreci",
    category: "Siyer",
    items: [
      "Veda Haccı için Mekke'ye hareket",
      "Arafat'ta Veda Hutbesi'nin okunması",
      "Peygamberimizin hastalanması",
      "Peygamber Efendimiz'in vefatı (632)"
    ],
    description: "Peygamber Efendimiz 632 yılında on binlerce Müslümanla Veda Haccı'nı yapmış, bıraktığı iki emaneti (Kur'an ve Sünnet) bildirerek vefat etmiştir.",
    difficulty: "easy"
  },
  {
    id: "chrono_7",
    title: "Hulefa-i Raşidin (Dört Halife) Dönemi",
    category: "Siyer",
    items: [
      "Hz. Ebu Bekir Dönemi",
      "Hz. Ömer Dönemi",
      "Hz. Osman Dönemi",
      "Hz. Ali Dönemi"
    ],
    description: "Peygamberimizin vefatından sonra İslam toplumuna adaletle liderlik eden dört büyük halifemiz sırasıyla bu görevi üstlenmiştir.",
    difficulty: "easy"
  },
  {
    id: "chrono_8",
    title: "Mekke Dönemi Önemli Olayları",
    category: "Siyer",
    items: [
      "İlk vahyin gelişi (610)",
      "Müslümanlara yönelik boykot yılları (617-620)",
      "İsra ve Mirac mucizesi (621)"
    ],
    description: "Mekke dönemi, ilk vahyin heyecanıyla başlamış, boykotların getirdiği ağır imtihanlardan sonra Mirac mucizesi ile Müslümanlara teselli verilmiştir.",
    difficulty: "easy"
  },
  {
    id: "chrono_9",
    title: "Vahiy İniş Süreci Başlangıcı",
    category: "Siyer",
    items: [
      "Hira Mağarası'nda ilk vahyin gelmesi (Alak Suresi)",
      "Vahyin bir süreliğine kesilmesi (Fetret-i Vahiy)",
      "Vahyin yeniden başlaması (Müddessir Suresi)"
    ],
    description: "İlk vahiyden sonra vahiy bir süre kesilmiş, Peygamberimiz endişeyle beklerken Müddessir suresiyle insanları uyarma görevi başlamıştır.",
    difficulty: "medium"
  },
  {
    id: "chrono_10",
    title: "Medine Dönemi Anlaşmaları ve Olayları",
    category: "Siyer",
    items: [
      "Medine Sözleşmesi'nin imzalanması (622)",
      "Kıblenin Kudüs'ten Kabe'ye çevrilmesi (624)",
      "Mescid-i Nebevi'nin inşasının tamamlanması"
    ],
    description: "Medine Sözleşmesi farklı inançtaki insanları koruma altına alırken, kıblenin Kabe'ye dönmesi Müslümanların yönünü belirlemiştir.",
    difficulty: "hard"
  },
  {
    id: "chrono_11",
    title: "Müslümanların Katıldığı Gazveler",
    category: "Siyer",
    items: [
      "Bedir Gazvesi (624)",
      "Uhud Gazvesi (625)",
      "Hayber'in Fethi (629)",
      "Huneyn Gazvesi (630)"
    ],
    description: "Peygamberimiz'in bizzat komuta ettiği askeri harekatlara Gazve denir. Müslümanlar bu gazvelerde savunma ve fetih mücadeleleri vermişlerdir.",
    difficulty: "medium"
  },
  {
    id: "chrono_12",
    title: "Hicretler Kronolojisi",
    category: "Siyer",
    items: [
      "Habeşistan'a 1. Hicret (615)",
      "Habeşistan'a 2. Hicret (616)",
      "Medine'ye büyük Hicret (622)"
    ],
    description: "Zulüm altındaki ilk Müslümanlar önce adil kral Necaşi'nin ülkesi Habeşistan'a sığınmış, daha sonra ise Medine'ye tamamen göç etmişlerdir.",
    difficulty: "easy"
  },

  // ===== İBADET ADIMLARI =====
  {
    id: "chrono_13",
    title: "Abdestin Temel Alınış Aşamaları",
    category: "İbadet",
    items: [
      "Niyet edip elleri bileklere kadar yıkamak",
      "Ağza ve burna üçer kez su vermek",
      "Yüzü ve ardından kolları yıkamak",
      "Başı meshedip kulak ve boynu sıvazlamak",
      "Ayakları topuklarla birlikte yıkamak"
    ],
    description: "Abdest, namazın anahtarı ve Müslümanın manevi temizlik kalkanıdır. Sırasıyla organları temizlemek ibadetin sıhhati için gereklidir.",
    difficulty: "easy"
  },
  {
    id: "chrono_14",
    title: "Gusül (Boy Abdesti) Farzları Sırası",
    category: "İbadet",
    items: [
      "Niyet edip elleri yıkamak",
      "Ağza bolca su verip boğaza kadar çalkalamak (Mazmaza)",
      "Burna su çekip genzi temizlemek (İstinşak)",
      "Tüm vücudu kuru yer kalmayacak şekilde yıkamak"
    ],
    description: "Gusül abdestinde ağza ve burna su vermek ve tüm vücudu tepeden tırnağa kuru yer kalmayacak şekilde yıkamak farzdır.",
    difficulty: "easy"
  },
  {
    id: "chrono_15",
    title: "Teyemmümün Yapılış Sırası",
    category: "İbadet",
    items: [
      "Niyet edip besmele çekmek",
      "Elleri temiz toprağa vurup yüzü meshetmek",
      "Elleri tekrar vurup sağ ve sol kolları meshetmek"
    ],
    description: "Su bulunmadığında veya kullanılamayacağında, temiz toprakla alınan teyemmüm, İslam'ın kolaylık dini olduğunun en güzel göstergesidir.",
    difficulty: "easy"
  },
  {
    id: "chrono_16",
    title: "Ezan Cümlelerinin Sıralanışı",
    category: "İbadet",
    items: [
      "Allahu Ekber (4 Kez)",
      "Eşhedü en lâ ilâhe illallah (2 Kez)",
      "Eşhedü enne Muhammeden Resûlullah (2 Kez)",
      "Hayye ales-salâh & Hayye alel-felâh (İkişer kez)",
      "Allahu Ekber (2 Kez) & Lâ ilâhe illallah (1 Kez)"
    ],
    description: "Günde 5 vakit minarelerden yükselen ezan, Tevhid inancının ve Peygamberliğin dünyaya haykırılmasıdır.",
    difficulty: "medium"
  },
  {
    id: "chrono_17",
    title: "Namazın İçindeki Farzlar (Rükünler)",
    category: "İbadet",
    items: [
      "İftitah Tekbiri (Başlangıç tekbiri)",
      "Kıyam (Ayakta durmak)",
      "Kıraat (Kur'an okumak)",
      "Rükû (Eğilmek)",
      "Secde (Alnı yere koymak)",
      "Ka'de-i Ahîre (Son oturuş)"
    ],
    description: "Namaz kılarken bu altı farzı (rükünleri) sırasıyla yerine getirmek namazın ana omurgasını oluşturur.",
    difficulty: "medium"
  },
  {
    id: "chrono_18",
    title: "Namazın Dışındaki Farzlar (Şartlar)",
    category: "İbadet",
    items: [
      "Hadesten Taharet (Abdest/Gusül)",
      "Necasetten Taharet (Elbise/Mekan temizliği)",
      "Setr-i Avret (Örtünülmesi gereken yerleri örtmek)",
      "İstikbal-i Kıble (Kabe'ye yönelmek)",
      "Vakit (Namaz vaktinin girmesi)",
      "Niyet (Hangi namazı kılacağını bilmek)"
    ],
    description: "Namazın dışındaki farzlar, namaza hazırlık şartlarıdır. Namaza başlamadan önce bu şartlar hazır olmalıdır.",
    difficulty: "hard"
  },
  {
    id: "chrono_19",
    title: "Kamet Getirme Sırası",
    category: "İbadet",
    items: [
      "Tekbirler ile başlama (Allahu Ekber)",
      "Şehadet cümlelerini hızlıca okuma",
      "Hayye ales-salah & Hayye alel-felah deme",
      "Kad kâmetis-salâh (Namaz başladı) cümlesi",
      "Son tekbirler ve kelime-i tevhid ile bitirme"
    ],
    description: "Farz namazlardan hemen önce cemaati namaza çağırmak amacıyla hızlıca getirilen çağrıya Kamet denir.",
    difficulty: "hard"
  },
  {
    id: "chrono_20",
    title: "Namazda Bir Rekatın Akışı",
    category: "İbadet",
    items: [
      "Ayakta durup kıraat (Kur'an) okumak",
      "Rükûya eğilip 'Sübhâne rabbiyel-azîm' demek",
      "Doğrulup 'Semiallahu limen hamideh' demek",
      "Secdeye gidip başı yere koymak",
      "İki secde arasında kısa bir süre oturmak"
    ],
    description: "Her namaz rekatı kıyam, rükû, doğrulma ve peş peşe yapılan iki secde aşamalarından oluşur.",
    difficulty: "medium"
  },
  {
    id: "chrono_21",
    title: "Cenaze Namazı Aşamaları",
    category: "İbadet",
    items: [
      "Niyet edip birinci tekbiri almak ve Sübhaneke okumak",
      "İkinci tekbiri alıp Salli-Barik dualarını okumak",
      "Üçüncü tekbiri alıp Cenaze duasını okumak",
      "Dördüncü tekbiri alıp sağa ve sola selam vermek"
    ],
    description: "Cenaze namazı rükûsuz ve secdesiz, ayakta kılınan, vefat eden Müslüman kardeşimiz için toplu bir duadır.",
    difficulty: "medium"
  },
  {
    id: "chrono_22",
    title: "Bayram Namazı Tekbir Sırası (1. Rekat)",
    category: "İbadet",
    items: [
      "Niyet edip başlangıç tekbiri almak ve Sübhaneke okumak",
      "Peş peşe üç zait tekbiri alıp elleri yana salmak",
      "Fatiha ve zamm-ı sure okumak",
      "Rükûya ve ardından secdelere gitmek"
    ],
    description: "Bayram namazlarında normal namazlardan farklı olarak kulaklar hizasında alınan ilave zait tekbirleri bulunur.",
    difficulty: "hard"
  },
  {
    id: "chrono_23",
    title: "Hac İbadetinin Temel Rüknleri",
    category: "İbadet",
    items: [
      "Mikat sınırında İhrama girmek",
      "Kurban Bayramı arefesinde Arafat'ta vakfe yapmak",
      "Müzdelife ve Mina'da şeytan taşlama / kurban kesme",
      "Kabe'yi yedi kez tavaf etmek (Ziyaret tavafı)"
    ],
    description: "Hac ibadeti ihramla başlar, Arafat'ta duruşla zirveye ulaşır ve tavafla tamamlanır.",
    difficulty: "medium"
  },

  // ===== PEYGAMBERLER TARİHİ =====
  {
    id: "chrono_24",
    title: "Ulu'l-Azm (Azimli) Peygamberler Sırası",
    category: "Peygamberler",
    items: [
      "Hz. Nuh",
      "Hz. İbrahim",
      "Hz. Musa",
      "Hz. İsa",
      "Hz. Muhammed (s.a.v.)"
    ],
    description: "Karşılaştıkları ağır zorluklara büyük sabır gösteren beş büyük peygambere Ulu'l-Azm denir.",
    difficulty: "easy"
  },
  {
    id: "chrono_25",
    title: "Tarihin İlk Peygamberleri",
    category: "Peygamberler",
    items: [
      "Hz. Adem (İlk İnsan)",
      "Hz. Şit",
      "Hz. İdris (Terzilik ve kalemi bulan)",
      "Hz. Nuh (Tufan peygamberi)"
    ],
    description: "İnsanlığın başlangıcında sırasıyla gönderilen bu ilk elçiler, Tevhid inancını yeryüzüne yaymışlardır.",
    difficulty: "medium"
  },
  {
    id: "chrono_26",
    title: "Hz. İbrahim ve Soyunun Sıralanışı",
    category: "Peygamberler",
    items: [
      "Hz. İbrahim (Halilullah)",
      "Hz. Yakub (İsrail lakaplı)",
      "Hz. Yusuf (Rüya yorumcusu)",
      "Hz. Musa (Tur dağında vahyedilen)"
    ],
    description: "Peygamberlerin babası kabul edilen Hz. İbrahim'in soyundan Yakub, Yusuf ve Musa peygamberler gelmiştir.",
    difficulty: "medium"
  },
  {
    id: "chrono_27",
    title: "Kral-Peygamberler ve İsrailoğulları Önderleri",
    category: "Peygamberler",
    items: [
      "Hz. Musa (Mısır'dan çıkış)",
      "Hz. Davud (Zebur vahyedilen)",
      "Hz. Süleyman (Kuşların dilini bilen)",
      "Hz. İsa (İncil vahyedilen)"
    ],
    description: "İsrailoğullarına gönderilen peygamberlerden Hz. Davud ve Süleyman aynı zamanda büyük hükümdarlardır.",
    difficulty: "hard"
  },
  {
    id: "chrono_28",
    title: "Son Dönem Peygamberleri",
    category: "Peygamberler",
    items: [
      "Hz. Zekeriyya",
      "Hz. Yahya",
      "Hz. İsa",
      "Hz. Muhammed (s.a.v.)"
    ],
    description: "Hz. Muhammed'den hemen önce gelen son elçiler Hz. İsa ve onun müjdecisi olan Hz. Yahya ve Zekeriyya'dır.",
    difficulty: "easy"
  },
  {
    id: "chrono_29",
    title: "Kronolojik Peygamberler Serisi I",
    category: "Peygamberler",
    items: [
      "Hz. Nuh",
      "Hz. Salih (Semud kavmi)",
      "Hz. İbrahim",
      "Hz. Yusuf",
      "Hz. Eyüp (Sabır timsali)"
    ],
    description: "İslam inancına göre peygamberler insanlığa doğru yolu göstermek için tarih boyunca peş peşe gönderilmişlerdir.",
    difficulty: "hard"
  },
  {
    id: "chrono_30",
    title: "Kronolojik Peygamberler Serisi II",
    category: "Peygamberler",
    items: [
      "Hz. Harun",
      "Hz. Yunus (Balığın karnında dua eden)",
      "Hz. İsa",
      "Hz. Muhammed (s.a.v.)"
    ],
    description: "Tarihin son dönem peygamberleri insanlığı son büyük vahiy olan İslam'a ve Kur'an'a hazırlamışlardır.",
    difficulty: "medium"
  },

  // ===== SURELER =====
  {
    id: "chrono_31",
    title: "Kur'an-ı Kerim'in İlk 5 Suresi",
    category: "Sureler",
    items: [
      "Fatiha Suresi",
      "Bakara Suresi",
      "Âl-i İmrân Suresi",
      "Nisâ Suresi",
      "Mâide Suresi"
    ],
    description: "Mushaf sırasına göre Kur'an-ı Kerim Fatiha suresiyle başlar ve Bakara gibi uzun surelerle devam eder.",
    difficulty: "easy"
  },
  {
    id: "chrono_32",
    title: "Kur'an'ın Son 5 Suresi (Sondan Başa)",
    category: "Sureler",
    items: [
      "Nâs Suresi",
      "Felâk Suresi",
      "İhlâs Suresi",
      "Tebbet Suresi",
      "Nasr Suresi"
    ],
    description: "Kur'an-ı Kerim'in en sonundaki sureleri sondan geriye doğru sıralayarak ezberimizi pekiştiriyoruz.",
    difficulty: "easy"
  },
  {
    id: "chrono_33",
    title: "Namaz Sureleri Sırası I (Mushaf Sırası)",
    category: "Sureler",
    items: [
      "Fil Suresi",
      "Kureyş Suresi",
      "Mâûn Suresi",
      "Kevser Suresi",
      "Kâfirûn Suresi"
    ],
    description: "Namazlarda sıklıkla okuduğumuz namaz sureleri Mushaf'ta sırasıyla yer almaktadır. Namazda da bu sıraya uymak sünnettir.",
    difficulty: "medium"
  },
  {
    id: "chrono_34",
    title: "Namaz Sureleri Sırası II (Mushaf Sırası)",
    category: "Sureler",
    items: [
      "Kâfirûn Suresi",
      "Nasr Suresi",
      "Tebbet Suresi",
      "İhlâs Suresi",
      "Felâk Suresi"
    ],
    description: "Kafirun suresinden sonra sırasıyla Nasr, Tebbet, İhlas ve Felak sureleri gelerek Kur'an nihayete erer.",
    difficulty: "medium"
  },
  {
    id: "chrono_35",
    title: "İlk İnen Sureler (Vahiy Sırası)",
    category: "Sureler",
    items: [
      "Alak Suresi (İlk 5 Ayet)",
      "Kalem Suresi",
      "Müzzemmil Suresi",
      "Müddessir Suresi",
      "Fatiha Suresi"
    ],
    description: "Vahiy sırasına göre ilk olarak Alak suresinin 'Oku!' emriyle başlayan ilk ayetleri inmiştir.",
    difficulty: "hard"
  },
  {
    id: "chrono_36",
    title: "Kur'an'ın Kalbi ve Faziletli Sureleri",
    category: "Sureler",
    items: [
      "Yâsîn Suresi (Kur'an'ın kalbi)",
      "Mülk Suresi (Tebâreke)",
      "Nebe Suresi (Amme)",
      "İhlâs Suresi"
    ],
    description: "Mushaf sırasına göre Yasin suresi 36. cüzlerde başlarken Mülk 29., Nebe 30. cüzdedir. İhlas ise en sondadır.",
    difficulty: "hard"
  },
  {
    id: "chrono_37",
    title: "Bazı Surelerin Ayet Sayısına Göre Sırası (Çoktan Aza)",
    category: "Sureler",
    items: [
      "Bakara Suresi (286 Ayet)",
      "Yâsîn Suresi (83 Ayet)",
      "İhlâs Suresi (4 Ayet)",
      "Kevser Suresi (3 Ayet)"
    ],
    description: "Kur'an'ın en uzun suresi Bakara iken, en kısa suresi 3 ayetten oluşan Kevser suresidir.",
    difficulty: "easy"
  },

  // ===== GÜNLÜK YAŞAM VE ADAB =====
  {
    id: "chrono_38",
    title: "Cami Adabı Uygulama Sırası",
    category: "Adab",
    items: [
      "Niyet edip temiz kıyafetlerle yola çıkmak",
      "Camiye sağ ayakla salavat getirerek girmek",
      "Tahiyyetü'l-mescid (Mescit selamla) namazı kılmak",
      "Namazı cemaatle huşu içinde kılmak",
      "Sol ayakla, dua ederek camiden çıkmak"
    ],
    description: "Camiler Allah'ın evidir. Oraya temiz kıyafetlerle gitmek, sağ ayakla girmek ve edeple ibadet etmek Müslüman edebidir.",
    difficulty: "medium"
  },
  {
    id: "chrono_39",
    title: "Yemek Yeme Adabı Sırası",
    category: "Adab",
    items: [
      "Yemekten önce elleri su ve sabunla yıkamak",
      "Besmele çekerek (Bismillah) yemeğe başlamak",
      "Yemeği sağ elle ve tabağın önünden yemek",
      "Yemek sonunda 'Elhamdülillah' diyerek şükretmek",
      "Yemekten sonra elleri ve ağzı temizlemek"
    ],
    description: "Peygamber Efendimiz yemeğe besmele ile başlamayı, sağ elle yemeyi ve sonunda şükretmeyi bizlere öğretmiştir.",
    difficulty: "easy"
  },
  {
    id: "chrono_40",
    title: "Uyku Öncesi Yapılması Sünnet Olanlar",
    category: "Adab",
    items: [
      "Yatmadan önce abdest almak",
      "Ağız ve diş temizliği (Misvak/Fırçalama) yapmak",
      "Yatağa sağ tarafının üzerine uzanmak",
      "İhlas, Felak, Nas surelerini okuyup dua etmek"
    ],
    description: "Uyku küçük ölümdür. Abdestle uykuya girmek, sağ yana yatıp dualar okumak gece boyu korunmamıza vesile olur.",
    difficulty: "easy"
  },
  {
    id: "chrono_41",
    title: "Sabah Uyanınca Yapılacak Sünnetler",
    category: "Adab",
    items: [
      "Uyanınca uykuyu dağıtıp şükür duası okumak",
      "Elleri ve yüzü suyla yıkamak",
      "Dişleri misvaklamak veya temizlemek",
      "Sabah namazı hazırlığı için abdest almak"
    ],
    description: "Güne erken başlamak, uyanınca Allah'a şükretmek ve hemen temizlenip sabah namazına hazırlanmak berekettir.",
    difficulty: "medium"
  },
  {
    id: "chrono_42",
    title: "Eve Giriş Adabı Sırası",
    category: "Adab",
    items: [
      "Besmele çekerek kapıyı çalmak",
      "Eve sağ ayakla girmek",
      "Ev halkına güler yüzle selam vermek (Esselamü Aleyküm)",
      "Ayakkabıları düzenli bir şekilde yerine koymak"
    ],
    description: "Eve selamla girmek o haneye bereket ve huzur getirir, şeytanın o eve girmesini engeller.",
    difficulty: "easy"
  },
  {
    id: "chrono_43",
    title: "Misafirlik Adabı Sırası",
    category: "Adab",
    items: [
      "Kapı zilini en fazla üç kez çalarak izin istemek",
      "Ev sahibinin gösterdiği yere edebimizle oturmak",
      "İkram edilen yiyeceklere teşekkür edip besmeleyle yemek",
      "Ayrılırken ev sahibine dua edip selamla çıkmak"
    ],
    description: "Misafir on kısmetle gelir, birini yer dokuzunu ev sahibine bırakır. Misafirlikte ev sahibine yük olmamak ve edebi korumak esastır.",
    difficulty: "medium"
  },
  {
    id: "chrono_44",
    title: "Kur'an-ı Kerim Okuma Adabı",
    category: "Adab",
    items: [
      "Abdest alıp temiz elbiseler giymek",
      "Kıbleye yönelerek saygıyla oturmak",
      "Euzü-Besmele çekerek tilavete başlamak",
      "Sure sonlarında 'Sadakallahulazim' (Yüce Allah doğru söyledi) demek"
    ],
    description: "Kur'an Allah'ın kelamıdır. Ona saygı duymak, abdestle okumak ve tertil üzere yavaşça okumak en güzel edeptir.",
    difficulty: "easy"
  },
  {
    id: "chrono_45",
    title: "Hapşırma Adabı Sırası",
    category: "Adab",
    items: [
      "Hapşırınca 'Elhamdülillah' (Allah'a hamdolsun) demek",
      "Yanındakinin 'Yerhamukallah' (Allah sana merhamet etsin) demesi",
      "Hapşıranın tekrar 'Yehdina ve yehdikumullah' (Allah bize ve size hidayet etsin) demesi"
    ],
    description: "Hapşırmak beyindeki basıncı azaltan bir nimettir. Bu yüzden hamdetmek ve karşılıkli dua etmek Müslümanlar arası bir haktır.",
    difficulty: "easy"
  },
  {
    id: "chrono_46",
    title: "Yolculuk Adabı Aşamaları",
    category: "Adab",
    items: [
      "Yolculuk öncesi niyet edip sadaka vermek",
      "Evden çıkarken 'Sefer Duası' okumak",
      "Bineğe binerken besmele çekip şükretmek",
      "Yolculuk dönüşünde aileye selamla kavuşmak"
    ],
    description: "Yolculuk öncesi sadaka vermek kazaları önler, dualarla yola çıkmak ise yolculuğumuzu ibadete dönüştürür.",
    difficulty: "hard"
  },
  {
    id: "chrono_47",
    title: "Günde Kılınan Namaz Vakitleri",
    category: "Adab",
    items: [
      "Sabah Namazı",
      "Öğle Namazı",
      "İkindi Namazı",
      "Akşam Namazı",
      "Yatsı Namazı"
    ],
    description: "Namaz dinin direğidir. Günde 5 vakit namaz belirli vakitlerde Müslümanlara farz kılınmıştır.",
    difficulty: "easy"
  },
  {
    id: "chrono_48",
    title: "İslam'ın Şartları Sıralaması",
    category: "Adab",
    items: [
      "Kelime-i Şehadet getirmek",
      "Namaz kılmak",
      "Zekat vermek",
      "Oruç tutmak",
      "Hacca gitmek"
    ],
    description: "İslam binası bu beş temel esas üzerine kurulmuştur. Her Müslümanın bu şartları bilmesi ve yerine getirmesi gerekir.",
    difficulty: "easy"
  },
  {
    id: "chrono_49",
    title: "İmanın Şartları Sıralaması",
    category: "Adab",
    items: [
      "Allah'ın varlığına ve birliğine inanmak",
      "Meleklere inanmak",
      "Allah'ın gönderdiği kitaplara inanmak",
      "Peygamberlere inanmak",
      "Ahiret gününe inanmak",
      "Kader ve kazaya inanmak"
    ],
    description: "İman kalp ile tasdik, dil ile ikrardır. İmanın altı esasına şüphe duymadan inanmak gerekir.",
    difficulty: "easy"
  },
  {
    id: "chrono_50",
    title: "Bir Müslümanın Günlük İbadet Akışı",
    category: "Adab",
    items: [
      "Sabah namazı ve sabah zikirleri",
      "Öğle namazı",
      "İkindi namazı",
      "Akşam namazı ve iftar/akşam yemeği",
      "Yatsı namazı ve uyku duası"
    ],
    description: "Müslümanın günü ibadet vakitlerine göre programlanır. Bu plan hayatımıza bereket ve düzen katar.",
    difficulty: "medium"
  },
  {
    id: "chrono_51",
    title: "Ramazan Gününün Aşamaları",
    category: "Adab",
    items: [
      "Gece sahura kalkıp yemek yemek ve niyet etmek",
      "İmsak vaktiyle beraber yeme içmeyi bırakmak",
      "Gün boyu dili ve ahlakı kötülüklerden korumak",
      "Akşam ezanıyla beraber orucu açıp iftar etmek",
      "Yatsı vaktinde cemaatle Teravih namazı kılmak"
    ],
    description: "Ramazan ayı sabır, ibadet ve paylaşım ayıdır. Sahurla başlayan bereket iftarla neşeye, teravihle huzura dönüşür.",
    difficulty: "medium"
  },
  {
    id: "chrono_52",
    title: "Yeni Doğan Bebek İçin Yapılacak Sünnetler",
    category: "Adab",
    items: [
      "Bebeğin sağ kulağına ezan, sol kulağına kamet okumak",
      "Anlamı güzel, İslami bir isim koymak",
      "Şükür nişanesi olarak Akika kurbanı kesmek"
    ],
    description: "Yeni bir çocuk dünyaya geldiğinde ona ilk olarak Tevhid kelimelerini dinletmek ve akika kesmek güzel bir sünnettir.",
    difficulty: "medium"
  },
  {
    id: "chrono_53",
    title: "Zekat Verilecek Malların Zekat Oranları (Çoktan Aza)",
    category: "Adab",
    items: [
      "Toprak ürünleri (Masrafsız ise 1/10 oranında öşür)",
      "Madenler ve define (Çıkarılan malın 1/5 oranında)",
      "Altın, gümüş, para ve ticaret malları (1/40 - %2.5)",
      "Sığır ve mandalar (Her 30 sığır için 1 buzağı)"
    ],
    description: "İslam zenginlerin mallarından fakirlere verilmek üzere zekat oranlarını adaletle belirlemiştir.",
    difficulty: "hard"
  },
  {
    id: "chrono_54",
    title: "Cuma Günü Sünnetleri ve İbadet Akışı",
    category: "Adab",
    items: [
      "Gusül abdesti alıp tırnakları kesmek",
      "Temiz, beyaz elbiseler giyip güzel koku sürünmek",
      "Camiye erken gidip sessizce hutbeyi beklemek",
      "Hatibin irad ettiği hutbeyi can kulağıyla dinlemek",
      "Cuma namazının farzını imamla kılmak"
    ],
    description: "Cuma günü Müslümanların haftalık bayramıdır. Cuma namazında hutbe okunurken konuşmamak ve dinlemek farzdır.",
    difficulty: "medium"
  },
  {
    id: "chrono_55",
    title: "Bir İnsanın Ahiret Yolculuğu Evreleri",
    category: "Adab",
    items: [
      "Ölüm ve dünya hayatının son bulması",
      "Kabir hayatı (Berzah alemi)",
      "Kıyametin kopması ve sur borusuyla uyanış (Ba's)",
      "Mahşer meydanında toplanma (Haşr) ve hesap",
      "Sırat köprüsü ve cennet veya cehenneme varış"
    ],
    description: "Dünya hayatı geçici bir sınav yeridir. Her nefis ölümü tadacak ve ebedi ahiret yolculuğuna çıkacaktır.",
    difficulty: "medium"
  },
  {
    id: "chrono_56",
    title: "Namaz Çeşitlerinin Hüküm Dereceleri (Kuvvetliden Zayıfa)",
    category: "Adab",
    items: [
      "Farz Namazlar (Günde 5 vakit namaz ve Cuma namazı)",
      "Vacip Namazlar (Bayram namazları ve Vitir namazı)",
      "Sünnet Namazlar (Vakit namazlarının sünnetleri)",
      "Nafile Namazlar (Teheccüd, Duha, Evvabin namazları)"
    ],
    description: "İbadetlerin hüküm dereceleri farz, vacip, sünnet ve nafile olarak Müslümanlar için önem sırasına sahiptir.",
    difficulty: "hard"
  },
  {
    id: "chrono_57",
    title: "Hac İbadetindeki Kritik Mekanlar",
    category: "Adab",
    items: [
      "Mikat Sınırı (İhrama girilen yer)",
      "Arafat Tepesi (Vakfe durulan yer)",
      "Müzdelife ve Mina (Şeytan taşlanan yer)",
      "Mescid-i Haram ve Kabe (Tavaf edilen kutsal mekan)"
    ],
    description: "Hac ibadeti yapılırken Mekke dışındaki Mikat sınırından başlayarak Arafat, Mina ve Kabe sırasıyla ziyaret edilir.",
    difficulty: "hard"
  },
  {
    id: "chrono_58",
    title: "Namazın Rükû ve Secde Tesbihat Sırası",
    category: "Adab",
    items: [
      "Rükûda üç kez 'Sübhâne Rabbiyel-Azîm' demek",
      "Doğrulurken 'Semiallahü limen hamideh' demek",
      "Ayakta iken 'Rabbena lekel-hamd' demek",
      "Secdede üç kez 'Sübhâne Rabbiyel-A'lâ' demek"
    ],
    description: "Rükûda Yüce Rabbimizin azametini (Azîm), secdede ise O'nun en yüce oluşunu (A'lâ) tesbih ederiz.",
    difficulty: "easy"
  },
  {
    id: "chrono_59",
    title: "Kıyamet Günü Aşamaları",
    category: "Adab",
    items: [
      "Sur borusuna birinci üfleniş (Her şeyin yok olması)",
      "Sur borusuna ikinci üfleniş (Yeniden diriliş)",
      "Mizan (Amellerin terazi ile tartılması)",
      "Sırat köprüsünden geçiş aşaması"
    ],
    description: "Kıyamet günü İsrafil (a.s.) sur borusuna üfleyecek, ardından diriliş, mahşer, mizan ve sırat aşamaları yaşanacaktır.",
    difficulty: "medium"
  },
  {
    id: "chrono_60",
    title: "Miraç Mucizesinin Aşamaları",
    category: "Adab",
    items: [
      "Mescid-i Haram'dan Kudüs'teki Mescid-i Aksa'ya gidiş (İsra)",
      "Mescid-i Aksa'da peygamberlere namaz kıldırma",
      "Gökyüzünün tabakalarından Sidretü'l-Münteha'ya yükseliş (Miraç)",
      "Beş vakit namaz müjdesiyle Mekke'ye geri dönüş"
    ],
    description: "Peygamberimiz bir gece Mescid-i Aksa'ya götürülmüş, oradan göklere yükselerek ümmetine namaz hediyesiyle dönmüştür.",
    difficulty: "hard"
  }
];
