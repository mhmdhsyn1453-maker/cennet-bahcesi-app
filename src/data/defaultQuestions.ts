import { GameData } from '../types';

export const defaultGameData: GameData = {
  kelimeQuestions: [
    {
      id: 'k1',
      turkishWord: 'Ahlâk',
      arabicRoot: 'h-l-k (خ-ل-ق)',
      description: 'Gündelik hayatta "güzel davranışlar" olarak kullandığımız "Ahlâk" kelimesi, "Halk" (yaratılış) ve "Hâlık" (yaratıcı) kelimeleriyle aynı kökten gelir.',
      clues: [
        'Kişinin yaratılışındaki özü, karakter yapısı demektir.',
        'Mahlûkat (yaratılanlar) kelimesi ile aynı kök harflerini taşır.',
        'Kuran-ı Kerim\'de Peygamberimiz için "büyük bir ahlak üzere" olduğu bildirilir.'
      ],
      options: [
        'H-L-K (Yaratılış ve fıtrat ile bağdaşır)',
        'S-B-R (Zorluklara karşı göğüs germek)',
        'H-K-M (Karar vermek ve yönetmek)',
        'A-D-L (Denge ve adaletli olmak)'
      ],
      correctOption: 'H-L-K (Yaratılış ve fıtrat ile bağdaşır)',
      quranReference: 'Kalem Suresi, 4. Ayet: "Ve şüphesiz sen, pek büyük bir ahlak üzerindesin."',
      wisdomNote: 'Ahlak, yapay veya dışarıdan ekleme bir maske değildir; insanın fıtratındaki (yaratılışındaki) güzelliğin dışa vurmasıdır. Yaratıcı\'ya (Hâlık) yönelen insan, mahlûkata güzel ahlak ile muamele eder.'
    },
    {
      id: 'k2',
      turkishWord: 'Medeniyet',
      arabicRoot: 'm-d-n (م-د-ن)',
      description: 'Şehirleşme, kültür ve uygarlık anlamındaki "Medeniyet" kelimesi, İslam tarihinin dönüm noktası olan bir şehre ve bir yaşam tarzına dayanır.',
      clues: [
        'Yathrib şehrinin hicretten sonraki yeni adıyla aynı köktendir.',
        'Hukukun, adaletin, kardeşliğin ve ortak kuralların geçerli olduğu toplumsal merkezdir.',
        '"Medine" kelimesinden türetilmiştir.'
      ],
      options: [
        'K-T-B (Yazmak ve belgelemek)',
        'M-D-N (Medine, yani şehirleşmek, nizam kurmak)',
        'S-L-M (Boyun eğmek ve barış içinde olmak)',
        'A-L-M (Bilmek ve bilinç kazanmak)'
      ],
      correctOption: 'M-D-N (Medine, yani şehirleşmek, nizam kurmak)',
      quranReference: 'Tevbe Suresi, 100. Ayet (Yerel halk olan Ensar ve Muhacirlerin Medine nizamındaki öncülüğü vurgulanır.)',
      wisdomNote: 'Gerçek medeniyet sadece beton binalardan ibaret değildir. Kökünü "Medine"den (Aydınlanmış Şehir) alan medeniyet; adalet, ahlak, yardımlaşma ve hukukun hakim olduğu erdemli bir toplum kurma çabasıdır.'
    },
    {
      id: 'k3',
      turkishWord: 'Sabır',
      arabicRoot: 's-b-r (ص-ب-ر)',
      description: 'Zor zamanlarda sığındığımız "Sabır" kelimesinin köken anlamı, pasif bir bekleyiş değil; son derece aktif ve zekice bir direnç formudur.',
      clues: [
        'Kök anlamı "geri durmak, nefsi tutmak, kendini hapsetmek ve direnmek"tir.',
        'Zorluk anında telaş yapmayıp mantıklı ve dirayetli adımlar atmayı simgeler.',
        'Kimya literatüründe sarsılmadan sabit kalan dayanıklı maddeler için de bu kök kullanılır.'
      ],
      options: [
        'S-B-R (Nefsi korumak, zorluğa karşı kararlılıkla direnmek)',
        'C-H-D (Çalışmak ve mücadele etmek)',
        'Ş-K-R (Nimetin sahibini bilip övmek)',
        'T-W-K (Vekil kılmak ve teslim olmak)'
      ],
      correctOption: 'S-B-R (Nefsi korumak, zorluğa karşı kararlılıkla direnmek)',
      quranReference: 'Bakara Suresi, 153. Ayet: "Ey iman edenler! Sabır ve namazla yardım dileyin. Şüphesiz Allah sabredenlerle beraberdir."',
      wisdomNote: 'Sabır, haksızlığa karşı öylece durup boyun eğmek değildir. Sabır; zorluk karşısında aklını, vicdanını ve inancını koruyarak çözüm üretmeye, pes etmeden doğru yolda durmaya çalışmaktır.'
    },
    {
      id: 'k4',
      turkishWord: 'Adalet',
      arabicRoot: 'A-D-L (ع-د-ل)',
      description: 'Hukukun can damarı olan "Adalet", İslam inancında çok derin kozmik ve insani bir teraziye dayanır.',
      clues: [
        'Eşitlemek, dengelemek, her şeyi kendi hakkı olan yere koymak demektir.',
        'Kameri tartıların iki kefesinin dengede durmasına bu kelimeden türetilen "Muâdele" denir.',
        'Evrendeki fiziksel dengeler (kütleçekim vb.) ile ahlaki dengeler aynı mana kökünde birleşir.'
      ],
      options: [
        'H-K-M (Bilgelikle hüküm vermek)',
        'A-D-L (Dengede tutmak, hakkını teslim etmek)',
        'R-H-M (Merhamet etmek, esirgemek)',
        'S-D-K (Gerçek söylemek, dürüst olmak)'
      ],
      correctOption: 'A-D-L (Dengede tutmak, hakkını teslim etmek)',
      quranReference: 'Nahl Suresi, 90. Ayet: "Şüphesiz Allah, adaleti, iyilik yapmayı ve yakınlara yardım etmeyi emreder..."',
      wisdomNote: 'Adalet, tarafsızlıktır. Evrendeki kozmik nizam nasıl hassas bir dengeyle kurulduysa, insan ilişkileri de ancak "Adalet" terazisiyle dengede kalabilir. Güçlüye göre değil, haklıya göre karar vermek adaletin özüdür.'
    }
  ],
  dilemmaQuestions: [
    {
      id: 'd1',
      title: 'Akademik Dürüstlük ve Dostluk Sınavı',
      scenario: 'Yarın çok önemli bir ortak ders sınavı var. En sevdiğin ve ailevi sorunlar yüzünden dersi hiç dinlememiş olan yakın arkadaşın, sınav esnasında senden kopya istiyor. Sana "Eğer vermezsen sınıfta kalırım ve ailemle aram çok açılır, bana yardım etmelisin" diyor. Sınav başlayınca yanına oturuyor ve bir işaret veriyor. Sınıfta hocanın gözü üzerinizde değil. Nasıl hareket edersin?',
      options: [
        {
          text: 'Kopya vermem fakat bu akşam eksik olduğu zor konuları ona tek tek anlatmayı teklif ederim.',
          points: 10,
          virtue: 'Dürüstlük ve Gerçek Dostluk',
          feedback: 'Harika! Gerçek bir dost kötülükte (kopya çekmek kul hakkıdır) yardımlaşmaz. Onu hem haksızlıktan korudun hem de çalışarak emeğiyle başarması için fedakarlık yaptın.'
        },
        {
          text: 'Sadece bir iki soruya bakmasına izin veririm, ne de olsa yakın arkadaşım, onu zor durumda bırakamam.',
          points: 3,
          virtue: 'Zayıf Sadakat (Hatalı Empati)',
          feedback: 'Hatalı bir yaklaşım. Kopya çekmesine izin vermek, gece gündüz çalışan diğer arkadaşlarınızın emeğini gasbetmektir (kul hakkı). Ayrıca onu tembelliğe alıştırmış olursun.'
        },
        {
          text: 'Kopya çekmenin kul hakkı olduğunu, sınavdan sonra ona ders çalıştırabileceğimi ama sınavda yardım edemeyeceğimi açıkça söylerim.',
          points: 10,
          virtue: 'Ahlaki Cesaret ve Adalet',
          feedback: 'Mükemmel! Akran baskısına boyun eğmeyip doğru olanı dürüstçe yüzüne söylemek büyük bir ahlaki cesarettir. Gerçek dost kırılsa da doğruyu söyleyendir.'
        }
      ]
    },
    {
      id: 'd2',
      title: 'Sosyal Medyadaki Dedikodu Yangını',
      scenario: 'Sınıfınızın ortak mesaj grubunda, pek sevilmeyen ve yalnız kalan bir arkadaşınızın çekilmiş komik ve biraz da küçük düşürücü bir fotoğrafı paylaşılıyor. Arkasından gruptaki popüler kişiler onunla dalga geçmeye, caps yapmaya başlıyor. Mesajlar çığ gibi büyüyor ve gruptan kahkahalar yükseliyor. Sen grupta aktifsin ve bu durumun o arkadaşını ne kadar inciteceğini biliyorsun. Ne yaparsın?',
      options: [
        {
          text: 'Gruptaki diğer popüler liderlerle aram bozulmasın diye sessiz kalırım, gruptan da çıkmam, izlerim.',
          points: 4,
          virtue: 'Çekimserlik (Bana Dokunmayan Yılan)',
          feedback: 'Zulme ve haksızlığa karşı sessiz kalmak, haksızlığı yapanların cesaretini artırır. Peygamberimiz bir kötülük gördüğümüzde onu elimizle, dilimizle düzeltmeyi, en azından kalbimizle buğzetmeyi emreder.'
        },
        {
          text: 'Gruba "Arkadaşlar bu yaptığımız açıkça alay etmektir ve gıybettir. Kul hakkına giriyoruz, bu fotoğrafı silelim ve konuyu kapatalım" yazarak net tavır koyarım.',
          points: 10,
          virtue: 'Münkeri Nehiy (Kötülüğü Engellemek)',
          feedback: 'Muhteşem bir cesaret! Grup baskısından korkmadan hakkı dile getirmek ve zayıfın yanında durmak tam anlamıyla "fütüvvet" (kahramanlık) ve İslam ahlakıdır.'
        },
        {
          text: 'Arkadaşımın üzülmesini engellemek için ona özelden yazar, sakin olmasını söylerim ama ortak gruba hiçbir şey yazmam.',
          points: 7,
          virtue: 'Gizli Merhamet (Yarı Destek)',
          feedback: 'Güzel ama eksik. Arkadaşını bireysel olarak teselli etmen merhametini gösterir, ancak gruptaki açık zorbalığı durdurmak için orada da hakkı savunmak gerekirdi.'
        }
      ]
    },
    {
      id: 'd3',
      title: 'Emanet ve Sosyal Sorumluluk',
      scenario: 'Yaz kursundaki arkadaşlarınla caminin bahçesinde oynarken, camiye ait güzel bir basketbol topunun yanlışlıkla çok dikenli bir çalıya kaçtığını ve patladığını görüyorsunuz. Kimsenin haberi yok. Arkadaş grubun "Bunu biz yapmadık diyelim, rüzgar fırlatmıştır" diyerek olayın üzerini kapatmak istiyor. Sen ne dersin?',
      options: [
        {
          text: '"Hakikat gizli kalmaz, gidip hocaya durumu dürüstçe anlatalım, harçlıklarımızla yenisini alırız" diyerek grubu dürüstlüğe sevk ederim.',
          points: 10,
          virtue: 'Emanet Bilinci ve Dürüstlük',
          feedback: 'Harika değer! Cami malları hepimize emanettir. Hatayı kabul etmek, dürüst olmak ve telafi yoluna gitmek İslam\'ın özüdür.'
        },
        {
          text: 'Hocaya gidip topu patlatan arkadaşın ismini gizlice söylerim, kendi adımı karıştırmam.',
          points: 5,
          virtue: 'Bireysel Sıyrılma',
          feedback: 'Çözümcü değil. Arkadaşını ihbar etmek yerine, arkadaşlarınla birlikte sorumluluk alıp hocaya dürüstçe söylemeniz ve telafi etmeniz daha ahlakidir.'
        },
        {
          text: 'Gruptan ayrılırım, camiye girmem. Ne söylerim ne de olaya dahil olurum.',
          points: 3,
          virtue: 'Sorumluluktan Kaçış',
          feedback: 'Cami malları topluma aittir, yani tüyü bitmemiş yetimin hakkı vardır. "Bana ne" demek sorumlu müslümana yakışmaz.'
        }
      ]
    }
  ],
  chronologyQuestions: [
    {
      id: 'ch1',
      title: 'Nübüvvetin Mekke Dönemi',
      theme: 'Peygamber Efendimiz\'in (s.a.v.) Mekke\'deki tebliğ mücadelesinin en kritik dönüm noktalarını doğru sıraya koyun.',
      events: [
        {
          id: 'ch1_e1',
          title: 'İlk Vahiy ve Nübüvvet',
          year: 'M. 610 / Hira Mağarası',
          description: 'Cebrail (a.s) aracılığıyla Alak Suresi\'nin ilk ayetlerinin inmesi.',
          order: 1
        },
        {
          id: 'ch1_e2',
          title: 'Habeşistan Hicretleri',
          year: 'M. 615 / İşkenceler ve Baskı Altında',
          description: 'Müslümanların ilk sığınağı olan adaletiyle ünlü Hristiyan Necaşi\'nin ülkesine göç.',
          order: 2
        },
        {
          id: 'ch1_e3',
          title: 'Hüzün Yılı (Amul Huzn)',
          year: 'M. 620 / Büyük Vefatlar',
          description: 'Peygamberimiz\'in en büyük hâmisi amcası Ebu Talib ve sevgili eşi Hz. Hatice\'nin vefatı.',
          order: 3
        },
        {
          id: 'ch1_e4',
          title: 'Medine\'ye Kutlu Hicret',
          year: 'M. 622 / Yepyeni Başlangıç',
          description: 'Müslümanların baskılardan kurtulup İslam devletinin temellerini atmak üzere Medine\'ye göçü.',
          order: 4
        }
      ]
    },
    {
      id: 'ch2',
      title: 'Medine Dönemi Savunma ve Fetihler',
      theme: 'İslam dininin kendisini koruma, anlaşma ve nihai olarak barışla yayılma aşamalarını sıraya dizin.',
      events: [
        {
          id: 'ch2_e1',
          title: 'Bedir Gazvesi',
          year: 'M. 624 / İlk Büyük Savunma',
          description: 'Müslümanların inanç ve strateji ile kendilerinden 3 kat kalabalık orduya karşı kazandığı ilk büyük zafer.',
          order: 1
        },
        {
          id: 'ch2_e2',
          title: 'Uhud Gazvesi',
          year: 'M. 625 / Okçular Tepesi İbreti',
          description: 'Disiplin, lider sözüne itaat ve ganimet hırsına kapılmamanın önemini öğreten çetin sınav.',
          order: 2
        },
        {
          id: 'ch2_e3',
          title: 'Hudeybiye Barış Antlaşması',
          year: 'M. 628 / Feth-i Mübîn',
          description: 'Görünüşte müslümanların aleyhinde şartlar taşıyan ancak İslam\'ın hızla yayılmasını sağlayan dâhice barış adımı.',
          order: 3
        },
        {
          id: 'ch2_e4',
          title: 'Mekke\'nin Kansız Fethi',
          year: 'M. 630 / Gönüllerin Fethi',
          description: 'Peygamber Efendimiz\'in (s.a.v.) kendisine zulmedenleri toptan affederek sergilediği merhamet zirvesi.',
          order: 4
        }
      ]
    }
  ],
  esmaQuestions: [
    {
      id: 'e1',
      name: 'El-Mumsik (Hassas Dengeyi Tutan)',
      translation: 'Kudretiyle her şeyi tutan, gök cisimlerinin yörüngeden çıkmasını engelleyen.',
      cosmosClue: 'Gök cisimlerinin birbirine çarpmadan, görünmez astrofizik kurallarıyla (yerçekimi ve merkezkaç kuvvetleri gibi) yörüngede asılı kalması ve dünyamızın üstündeki koruyucu atmosfer tabakasının uzaya dağılmadan sımsıkı dünyada tutulması mucizesi Hangi Esma-ül Hüsna ile doğrudan ilişkilidir?',
      options: [
        'El-Mumsik (Gökleri ve dengeleri kudretiyle tutan)',
        'El-Musavvir (Her şeye şekil ve suret veren)',
        'El-Vehhâb (Karşılıksız bolca nimet veren)',
        'Es-Samed (Hiçbir şeye muhtaç olmayan)'
      ],
      correctEsma: 'El-Mumsik (Gökleri ve dengeleri kudretiyle tutan)',
      scientificInsight: 'Kuran-ı Kerim Hac Suresi 65. ayette: "Kendi izni olmadıkça yeri düşmesin diye göğü tutan da O\'dur. Şüphesiz Allah, insanlara karşı çok şefkatlidir, çok merhametlidir" buyurarak evrendeki hassas çekim dengesini ve "El-Mumsik" isminin tecellisini bilimsel ufkumuza asırlar öncesinden taşır.'
    },
    {
      id: 'e2',
      name: 'Eş-Şâfî (Şifa Veren)',
      translation: 'Maddi ve manevi her türlü hastalığa şifa bahşeden, yaraları onaran.',
      cosmosClue: 'Vücudumuzda ufak bir kesik oluştuğunda, "Trombosit" adı verilen mikro askerlerin saniyeler içinde yaralı bölgeye akın edip bir ağ örerek kanamayı durdurması, ardından kök hücrelerin yeni deri dokuları üreterek hiçbir iz dahi bırakmadan orayı tamir etmesi biyolojik tasarımı hangi ismin yansımasıdır?',
      options: [
        'Eş-Şâfî (Şifayı yaratan ve onaran)',
        'El-Kuddûs (Her türlü eksiklikten uzak olan)',
        'Eş-Şekûr (Şükrün karşılığını fazlasıyla veren)',
        'El-Bâsit (Dilediğine rızkı ve ferahlığı yayan)'
      ],
      correctEsma: 'Eş-Şâfî (Şifayı yaratan ve onaran)',
      scientificInsight: 'İnsan vücudundaki "Koagülasyon Şelalesi" adı verilen pıhtılaşma zinciri ve doku onarım mekanizmaları, yaraların kendiliğinden değil, kusursuz bir biyotıp laboratuvarı gibi çalışan sarmal bir düzen ile şifa bulduğunu kanıtlar. Bu Eş-Şâfî tecellisidir.'
    },
    {
      id: 'e3',
      name: 'El-Hâdî (Kılavuzluk Eden)',
      translation: 'Her varlığa ne yapacağını öğreten, yön gösteren, hidayete ulaştıran.',
      cosmosClue: 'Kupkuru, gözsüz, kulaksız ve beyinsiz bir bitki tohumunun toprağın derinliklerinde uyandıktan sonra, filizini tam ışığın ve gökyüzünün olduğu yukarı yöne doğrultup saniyede milimetrik adımlarla yukarı tırmanırken; köklerini ise tam ters yöne (yani yerçekimine doğru) göndererek su araması pusulası hangi Esma ile açıklanır?',
      options: [
        'El-Hâdî (Yolu gösteren, fıtrata rehberlik eden)',
        'El-Mukaddim (Dilediğini öne alan, yükselten)',
        'El-Kahhâr (Her şeye boyun eğdiren, galip gelen)',
        'El-Gaffâr (Günahları çokça bağışlayan)'
      ],
      correctEsma: 'El-Hâdî (Yolu gösteren, fıtrata rehberlik eden)',
      scientificInsight: 'Bitkilerde ışığa yönelmeyi (fototropizma) ve yerçekimine yönelmeyi (gravitropizma) sağlayan "Oksin hormonu" tabanlı bir kimyasal kurgu vardır. Tohumun ne yöne gideceğini "bilerek" doğması ve kılavuzlanması, Allah\'ın yaratılmış tüm mahlukata rehberlik eden El-Hâdî isminin muazzam bir doğa mucizesidir.'
    }
  ],
  sirAyetiQuestions: [
    {
      id: 's1',
      clue: 'Zor zamanlarda ümitsizliğe kapılan gençlik için inmiş, her geceyi aydınlatan ünlü teselli ayeti.',
      maskedText: 'Şüphesiz her zorlukla beraber bir ________ vardır.',
      correctWord: 'KOLAYLIK',
      surah: 'İnşirah Suresi, 5. Ayet',
      letters: ['K', 'O', 'L', 'A', 'Y', 'L', 'I', 'K', 'S', 'R', 'M', 'N', 'A', 'T', 'Z'],
      wisdomNote: 'Ayet, zorluğun ardında veya içinde mutlaka bir kolaylık barındırdığını vurgular. Başarı ve ferahlık, mücadele ve sabırla gelen birer hediyedir. Çaresizlik yoktur, İnşirah vardır.'
    },
    {
      id: 's2',
      clue: 'Gençlerin hedeflerine ulaşırken tembellikten kaçınıp eyleme geçmesini emreden adalet ve başarı kanunu.',
      maskedText: 'İnsan için ancak çalıştığının ________ vardır.',
      correctWord: 'KARŞILIĞI',
      surah: 'Necm Suresi, 39. Ayet',
      letters: ['K', 'A', 'R', 'Ş', 'I', 'L', 'I', 'Ğ', 'I', 'B', 'V', 'D', 'O', 'K', 'S', 'P'],
      wisdomNote: 'İslam dininde bedavacılık, haksız kazanç veya çalışmadan tevekkül etmek yoktur. Eğitimde, meslekte ve ahlakta gerçek kazanım ancak döktüğümüz dürüst terin meyvesidir.'
    },
    {
      id: 's3',
      clue: 'Gökyüzündeki muazzam nizamı ve mimariyi tefekküre davet eden ayetin can damarı.',
      maskedText: 'O, gökleri görebileceğiniz bir direk olmaksızın ________.',
      correctWord: 'YÜKSELTTİ',
      surah: 'Ra\'d Suresi, 2. Ayet',
      letters: ['Y', 'Ü', 'K', 'S', 'E', 'L', 'T', 'T', 'İ', 'M', 'N', 'Z', 'F', 'L', 'V', 'R'],
      wisdomNote: 'Evrenin sütunlar yerine hassas kütleçekimi, uzay-zaman bükülmesi ve genişleme geometrisiyle dengede durması modern astrofiziğin konusudur ve Kuran bunu harika bir dille tasvir eder.'
    }
  ]
};
