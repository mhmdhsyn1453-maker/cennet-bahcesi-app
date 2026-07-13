export interface FallingWordQuestion {
  id: string;
  word: string;
  clue: string;
  wisdom: string;
  category: 'İnanç' | 'İbadet' | 'Ahlak' | 'Siyer' | 'Medeniyet' | 'Genel Kültür';
}

export const FALLING_WORDS_QUESTIONS_DB: FallingWordQuestion[] = [
  {
    id: "fw_i̇nanç_1",
    category: "İnanç",
    word: "İMAN",
    clue: "Allah'a, peygamberlerine ve gönderdiği tüm esaslara kalpten inanıp güvenmek.",
    wisdom: "İman, kalbin tasdiki ve dilin ikrarı ile gerçekleşir. Müminin en büyük hazinesidir."
  },
  {
    id: "fw_i̇nanç_2",
    category: "İnanç",
    word: "TEVHİD",
    clue: "Allah'ın bir ve tek olduğuna, O'ndan başka ilah olmadığına inanma esası.",
    wisdom: "Tevhid, İslam'ın en temel inanç esasıdır ve La İlahe İllallah kelimesiyle ifade edilir."
  },
  {
    id: "fw_i̇nanç_3",
    category: "İnanç",
    word: "MELEK",
    clue: "Allah'ın nurdan yarattığı, günah işlemeyen, gözle görülmeyen manevi varlık.",
    wisdom: "Meleklere inanmak imanın şartlarından biridir. Onlar gece gündüz Allah'ı tesbih ederler."
  },
  {
    id: "fw_i̇nanç_4",
    category: "İnanç",
    word: "AHİRET",
    clue: "Dünya hayatından sonra başlayacak olan ve sonsuza kadar sürecek olan ebedi hayat.",
    wisdom: "Ahiret inancı, insanın bu dünyada adil ve sorumluluk sahibi bir hayat yaşamasını sağlar."
  },
  {
    id: "fw_i̇nanç_5",
    category: "İnanç",
    word: "KADER",
    clue: "Allah'ın evrende olacak her şeyi önceden bilip planlaması ve takdir etmesi.",
    wisdom: "Kader, her şeyin Allah'ın bilgisi ve kontrolü dahilinde belirli bir ölçüyle yaratılmasıdır."
  },
  {
    id: "fw_i̇nanç_6",
    category: "İnanç",
    word: "KAZA",
    clue: "Allah'ın önceden takdir ettiği olayların zamanı gelince gerçekleşmesi.",
    wisdom: "Kaza, kader planının vakti geldiğinde yaratılarak hayata geçirilmesidir."
  },
  {
    id: "fw_i̇nanç_7",
    category: "İnanç",
    word: "MİZAN",
    clue: "Ahiret gününde insanların günah ve sevaplarının tartılacağı manevi terazi.",
    wisdom: "Mizan terazisi, hiçbir haksızlığın yapılmayacağı ilahi adaletin tecelli noktasıdır."
  },
  {
    id: "fw_i̇nanç_8",
    category: "İnanç",
    word: "SİRAT",
    clue: "Ahirette cehennemin üzerine kurulacak olan ve müminlerin hızla geçeceği köprü.",
    wisdom: "Sırat köprüsünden geçiş hızı, insanın dünyadaki salih amellerinin gücüne bağlıdır."
  },
  {
    id: "fw_i̇nanç_9",
    category: "İnanç",
    word: "CENNET",
    clue: "İnanıp yararlı işler yapanların ahirette ödüllendirileceği sonsuz mutluluk yurdu.",
    wisdom: "Cennet, içinde hiçbir kötülüğün, üzüntünün ve yaşlanmanın olmadığı eşsiz nimetler yeridir."
  },
  {
    id: "fw_i̇nanç_10",
    category: "İnanç",
    word: "CEHENNEM",
    clue: "İnkar edenlerin ve günahkarların ahirette cezalandırılacağı azap yeri.",
    wisdom: "Cehennem azabı, ilahi adaletin ve uyarılara kulak asmamanın bir sonucudur."
  },
  {
    id: "fw_i̇nanç_11",
    category: "İnanç",
    word: "RAHMAN",
    clue: "Allah'ın dünyada inanıp inanmayan herkese şefkat ve merhamet göstermesini belirten ismi.",
    wisdom: "Rahman ismiyle Allah, yeryüzündeki tüm canlılara rızık verir ve onları gözetir."
  },
  {
    id: "fw_i̇nanç_12",
    category: "İnanç",
    word: "RAHİM",
    clue: "Allah'ın ahirette sadece mümin kullarına merhamet etmesini ifade eden ismi.",
    wisdom: "Rahîm ismi şerifi, inançlı kulların ahiretteki özel mükafatını ve korunmasını müjdeler."
  },
  {
    id: "fw_i̇nanç_13",
    category: "İnanç",
    word: "SAMED",
    clue: "Hiçbir şeye muhtaç olmayan, aksine her şeyin kendisine muhtaç olduğu ilahi sıfat.",
    wisdom: "Es-Samed ismi, İhlas Suresi'nde geçer ve Allah'ın mutlak zenginliğini ifade eder."
  },
  {
    id: "fw_i̇nanç_14",
    category: "İnanç",
    word: "AHAD",
    clue: "Allah'ın zatında, sıfatlarında ve fiillerinde bir ve tek olması.",
    wisdom: "Ahad sıfatı, Allah'ın bölünmesi veya ortağı olmasının imkansızlığını anlatır."
  },
  {
    id: "fw_i̇nanç_15",
    category: "İnanç",
    word: "VAHİY",
    clue: "Allah'ın peygamberlerine bildirmek istediği mesajları gizli ve hızlı yolla iletmesi.",
    wisdom: "Vahiy, insanlığın doğru yolu bulması için gönderilen ilahi rehberlik ışığıdır."
  },
  {
    id: "fw_i̇nanç_16",
    category: "İnanç",
    word: "RESUL",
    clue: "Kendisine yeni bir kitap verilerek insanları hak dine davet eden peygamber.",
    wisdom: "Resuller, Allah'tan aldıkları şeriatı insanlığa tebliğ etmekle görevlidir."
  },
  {
    id: "fw_i̇nanç_17",
    category: "İnanç",
    word: "NEBİ",
    clue: "Kendisine yeni kitap verilmeyip kendinden önceki peygamberin kitabını tebliğ eden elçi.",
    wisdom: "Nebiler, insanlarını mevcut ilahi yasalara uymaya davet eden rehberlerdir."
  },
  {
    id: "fw_i̇nanç_18",
    category: "İnanç",
    word: "HAŞR",
    clue: "Kıyametten sonra tüm insanların hesaba çekilmek üzere bir meydanda toplanması.",
    wisdom: "Haşr günü, insanların dünyada yaptıklarının hesabını vereceği toplanma günüdür."
  },
  {
    id: "fw_i̇nanç_19",
    category: "İnanç",
    word: "BERZAH",
    clue: "Ölüm ile kıyamet arasındaki kabir hayatı dönemi ve ruhlar alemi.",
    wisdom: "Berzah, dünya ile ahiret arasında yer alan geçici bekleme koridorudur."
  },
  {
    id: "fw_i̇nanç_20",
    category: "İnanç",
    word: "KABİR",
    clue: "Ölen insanın ahirete geçiş kapısı olan toprak altındaki ilk durağı.",
    wisdom: "Kabir, mümin için cennet bahçelerinden bir bahçe, inkarcı için ise cehennem çukurlarından bir çukurdur."
  },
  {
    id: "fw_i̇nanç_21",
    category: "İnanç",
    word: "FİTRAT",
    clue: "İnsanın doğuştan getirdiği, temiz ve Allah'a inanmaya yatkın yaratılış özelliği.",
    wisdom: "Her çocuk İslam fıtratı üzere doğar, sonradan çevresiyle şekillenir."
  },
  {
    id: "fw_i̇nanç_22",
    category: "İnanç",
    word: "İHLAS",
    clue: "İbadet ve davranışları sadece ve sadece Allah rızası için samimiyetle yapmak.",
    wisdom: "İhlas, amellerin ruhudur. İhlassız yapılan ibadetlerin Allah katında değeri yoktur."
  },
  {
    id: "fw_i̇nanç_23",
    category: "İnanç",
    word: "ŞİRK",
    clue: "Allah'ın zatında, sıfatlarında veya ibadette O'na ortak koşmak.",
    wisdom: "Şirk, en büyük zulüm ve günahtır. Tevhid inancının tamamen zıddıdır."
  },
  {
    id: "fw_i̇nanç_24",
    category: "İnanç",
    word: "NÜBÜVVET",
    clue: "Peygamberlik kurumu, Allah ile insanlar arasındaki elçilik vazifesi.",
    wisdom: "Nübüvvet, insanlığın karanlıktan aydınlığa çıkması için kurulmuş ilahi köprüdür."
  },
  {
    id: "fw_i̇nanç_25",
    category: "İnanç",
    word: "TEVEKKÜL",
    clue: "Bir iş için gerekli tüm tedbirleri aldıktan sonra kalben Allah'a güvenmek.",
    wisdom: "Tevekkül, tembellik etmek değil, çalışıp sonucu Allah'ın adaletine bırakmaktır."
  },
  {
    id: "fw_i̇nanç_26",
    category: "İnanç",
    word: "KUTSAL",
    clue: "Dini açıdan saygı duyulan, mukaddes ve mübarek kabul edilen değerler.",
    wisdom: "Kutsal değerlerimize hürmet göstermek, kalbimizdeki takvanın bir alametidir."
  },
  {
    id: "fw_i̇nanç_27",
    category: "İnanç",
    word: "ZEBUR",
    clue: "Hz. Davud (a.s.) peygambere indirilmiş olan ilahi kitap.",
    wisdom: "Zebur, dört büyük ilahi kitaptan biri olup genellikle dua ve ilahilerden oluşur."
  },
  {
    id: "fw_i̇nanç_28",
    category: "İnanç",
    word: "İNCİL",
    clue: "Hz. İsa (a.s.) peygambere indirilmiş olan kutsal kitap.",
    wisdom: "İncil, tahrif edilmeden önce Tevhid inancını ve Hz. Muhammed'in geleceğini müjdeliyordu."
  },
  {
    id: "fw_i̇nanç_29",
    category: "İnanç",
    word: "TEVRAT",
    clue: "Hz. Musa (a.s.) peygambere indirilmiş olan kutsal kitap.",
    wisdom: "Tevrat, İsrailoğulları'na gönderilen ve adalet esaslarını içeren ilk büyük kitaptır."
  },
  {
    id: "fw_i̇nanç_30",
    category: "İnanç",
    word: "KURAN",
    clue: "Hz. Muhammed'e (s.a.v.) indirilen, kıyamete kadar korunan son ilahi kitap.",
    wisdom: "Kur'an-ı Kerim, insanlığın uyması gereken nihai hayat rehberi ve anayasasıdır."
  },
  {
    id: "fw_i̇nanç_31",
    category: "İnanç",
    word: "KUDRET",
    clue: "Allah'ın her şeye gücünün yetmesi anlamına gelen subutî sıfatı.",
    wisdom: "Allah'ın kudreti sınırsızdır; O bir şeyin olmasını dilediğinde sadece 'Ol' der."
  },
  {
    id: "fw_i̇nanç_32",
    category: "İnanç",
    word: "TEKVİN",
    clue: "Allah'ın yoktan var etme, yaratma ve inşa etme sıfatı.",
    wisdom: "Kainattaki her zerre Allah'ın tekvin sıfatının mükemmel birer yansımasıdır."
  },
  {
    id: "fw_i̇nanç_33",
    category: "İnanç",
    word: "İRADE",
    clue: "Allah'ın dilediğini seçmesi ve dilemesi sıfatı.",
    wisdom: "Allah'ın iradesi cüz'i değil küllidir, her şey O'nun dilemesiyle vücut bulur."
  },
  {
    id: "fw_i̇nanç_34",
    category: "İnanç",
    word: "BEKA",
    clue: "Allah'ın varlığının sonunun olmaması, ebedi olması zati sıfatı.",
    wisdom: "Evrendeki her şey fani (geçici), sadece yüce Allah bakidir (sonsuzdur)."
  },
  {
    id: "fw_i̇nanç_35",
    category: "İnanç",
    word: "KİDEM",
    clue: "Allah'ın varlığının başlangıcının olmaması, ezeli olması zati sıfatı.",
    wisdom: "Kıdem sıfatı, Allah'ın zamandan münezzeh olduğunu ve sonradan var olmadığını belirtir."
  },
  {
    id: "fw_i̇nanç_36",
    category: "İnanç",
    word: "ESMA",
    clue: "Allah'ın güzel isimlerinin genel adı (Esma-i Hüsna).",
    wisdom: "Allah'ın güzel isimlerini öğrenip onlarla dua etmek kalbe huzur ve bereket verir."
  },
  {
    id: "fw_i̇nanç_37",
    category: "İnanç",
    word: "SÜBUTİ",
    clue: "Allah'ın benzerleri insanlarda sınırlı olarak bulunan sıfatlarının sınıfı.",
    wisdom: "Hayat, İlim, Semî, Basar, İrade, Kudret, Kelam ve Tekvin sübuti sıfatlardır."
  },
  {
    id: "fw_i̇nanç_38",
    category: "İnanç",
    word: "ZATİ",
    clue: "Sadece Allah'ın zatına has olan, yaratılanlarda asla bulunmayan sıfatlar.",
    wisdom: "Vücud, Kıdem, Beka, Vahdaniyet, Muhalefetün lil-havadis ve Kıyam bi-nefsihi zati sıfatlardır."
  },
  {
    id: "fw_i̇nanç_39",
    category: "İnanç",
    word: "SUHUF",
    clue: "Bazı peygamberlere gönderilen küçük hacimli sayfalardan oluşan vahiyler.",
    wisdom: "Hz. Adem, Hz. Şit, Hz. İdris ve Hz. İbrahim peygamberlere suhuf indirilmiştir."
  },
  {
    id: "fw_i̇nanç_40",
    category: "İnanç",
    word: "KELAM",
    clue: "Allah'ın harfe, sese ihtiyaç duymadan konuşması sıfatı.",
    wisdom: "Kur'an-ı Kerim, Allah'ın kelam sıfatının tecellisi olan ilahi konuşmasıdır."
  },
  {
    id: "fw_i̇nanç_41",
    category: "İnanç",
    word: "VÜCUD",
    clue: "Allah'ın var olması anlamına gelen en temel zati sıfatı.",
    wisdom: "Allah vardır, varlığı kendindendir ve O'nun yokluğu düşünülemez."
  },
  {
    id: "fw_i̇nanç_42",
    category: "İnanç",
    word: "SEMÎ",
    clue: "Allah'ın gizli, açık her sesi eksiksiz işitmesi sıfatı.",
    wisdom: "Allah fısıltıları, kalpten geçen duaları ve kainattaki tüm sesleri aynı anda işitir."
  },
  {
    id: "fw_i̇nanç_43",
    category: "İnanç",
    word: "BASAR",
    clue: "Allah'ın her şeyi, hiçbir sınırlama olmaksızın görmesi sıfatı.",
    wisdom: "Karanlık gecede siyah taşın üzerindeki karıncayı bile gören sıfat Basar'dır."
  },
  {
    id: "fw_i̇nanç_44",
    category: "İnanç",
    word: "HAYAT",
    clue: "Allah'ın diri ve canlı olması sıfatı, tüm canlılara can vermesi.",
    wisdom: "Allah hayattadır, ezeli ve ebedi yaşam sahibidir, uyuklama veya yorulma O'na uzakttır."
  },
  {
    id: "fw_i̇nanç_45",
    category: "İnanç",
    word: "MEHDİ",
    clue: "Kıyamete yakın zamanlarda gelip yeryüzünde adaleti tesis edeceğine inanılan şahsiyet.",
    wisdom: "Mehdi kavramı, haksızlığın arttığı dönemde adaleti müjdeleyen inanç motiflerindendir."
  },
  {
    id: "fw_i̇nanç_46",
    category: "İnanç",
    word: "DECCAL",
    clue: "Kıyametten önce çıkıp insanları saptırmaya çalışacak yalancı ve hilekar figür.",
    wisdom: "Deccal, kötülüğü ve fitneyi temsil eden kıyamet alametlerinden biridir."
  },
  {
    id: "fw_i̇nanç_47",
    category: "İnanç",
    word: "NÜZUL",
    clue: "Kur'an ayetlerinin peygamberimize indirilme süreci ve iniş vakti.",
    wisdom: "Ayetlerin nüzul sebebini bilmek, Kur'an'ı doğru anlamanın anahtarlarından biridir."
  },
  {
    id: "fw_i̇nanç_48",
    category: "İnanç",
    word: "TEFSİR",
    clue: "Kur'an ayetlerinin anlamlarını, nüzul sebeplerini genişçe açıklayan bilim dalı.",
    wisdom: "Tefsir alimleri (müfessirler), ayetleri dil ve tarihi bağlamında şerh ederler."
  },
  {
    id: "fw_i̇nanç_49",
    category: "İnanç",
    word: "MÜFESSİR",
    clue: "Kur'an ayetlerini tefsir eden, geniş bilgi sahibi İslam alimi.",
    wisdom: "Elmalılı Hamdi Yazır, en önemli Türk müfessirler arasında yer alır."
  },
  {
    id: "fw_i̇nanç_50",
    category: "İnanç",
    word: "HADİS",
    clue: "Peygamber Efendimiz'in (s.a.v.) söylediği sözler, yaptığı işler ve onayları.",
    wisdom: "Hadisler, Kur'an-ı Kerim'den sonra İslam'ın ikinci ana bilgi kaynağıdır."
  },
  {
    id: "fw_i̇nanç_51",
    category: "İnanç",
    word: "SÜNNET",
    clue: "Peygamber Efendimiz'in (s.a.v.) Müslümanlar için örnek teşkil eden hayat tarzı.",
    wisdom: "Sünnete uymak, Peygamberimiz'e duyulan sevginin ve itaatin en güzel göstergesidir."
  },
  {
    id: "fw_i̇nanç_52",
    category: "İnanç",
    word: "HÜKM",
    clue: "Allah'ın ve peygamberin kullardan yapmasını istediği dini kurallar.",
    wisdom: "Şer'i hükümler helal, haram, farz, vacip gibi sınıflara ayrılır."
  },
  {
    id: "fw_i̇nanç_53",
    category: "İnanç",
    word: "HARAM",
    clue: "Dinen yapılması kesin olarak yasaklanan ve günah kabul edilen işler.",
    wisdom: "Yalan söylemek, hırsızlık yapmak ve insanlara zarar vermek haramdır."
  },
  {
    id: "fw_i̇nanç_54",
    category: "İnanç",
    word: "FARZ",
    clue: "Dinen yapılması kesin olarak emredilen ve terki günah olan ibadetler.",
    wisdom: "Beş vakit namaz kılmak, Ramazan orucu tutmak kesin farzlardandır."
  },
  {
    id: "fw_i̇nanç_55",
    category: "İnanç",
    word: "VACİP",
    clue: "Farz kadar kesin olmasa da yapılması güçlü bir şekilde emredilen dini kurallar.",
    wisdom: "Bayram namazı kılmak ve kurban kesmek vacip ibadetlerdendir."
  },
  {
    id: "fw_i̇nanç_56",
    category: "İnanç",
    word: "MÜBAH",
    clue: "Dinen yapılması veya yapılmaması serbest bırakılan, günahı ve sevabı olmayan işler.",
    wisdom: "Uyumak, yürümek ve temiz gıdalarla beslenmek mübah davranışlardandır."
  },
  {
    id: "fw_i̇nanç_57",
    category: "İnanç",
    word: "MEKRUH",
    clue: "Dinen yapılması hoş karşılanmayan, çirkin bulunan ama kesin yasak olmayan işler.",
    wisdom: "Soğan yiyip camiye gitmek veya suyu israf etmek mekruh kabul edilmiştir."
  },
  {
    id: "fw_i̇nanç_58",
    category: "İnanç",
    word: "MUSTAHAP",
    clue: "Peygamberimizin bazen yaptığı, yapıldığında sevap kazandıran güzel davranışlar.",
    wisdom: "Kuşluk namazı kılmak veya dişleri misvakla temizlemek müstehaptır."
  },
  {
    id: "fw_i̇nanç_59",
    category: "İnanç",
    word: "MÜFSİD",
    clue: "Başlanmış olan bir ibadeti bozan, geçersiz kılan durum veya davranışlar.",
    wisdom: "Namazda konuşmak veya oruçluyken bilerek yemek yemek müfsiddir."
  },
  {
    id: "fw_i̇nanç_60",
    category: "İnanç",
    word: "TAKVA",
    clue: "Allah'ın emirlerine uyup, yasaklarından kaçınarak O'na yakınlaşma çabası.",
    wisdom: "Müminlerin Allah katındaki üstünlük derecesi sadece takva iledir."
  },
  {
    id: "fw_i̇nanç_61",
    category: "İnanç",
    word: "İHSAN",
    clue: "Allah'ı görüyormuş gibi ibadet etmek, her işi en güzel şekilde yapmak.",
    wisdom: "Sen O'nu görmesen de O seni görmektedir; ihsan bu bilince sahip olmaktır."
  },
  {
    id: "fw_i̇nanç_62",
    category: "İnanç",
    word: "BERAT",
    clue: "Günahlardan arınma, temize çıkma anlamlarına gelen mübarek gece.",
    wisdom: "Berat Gecesi, duaların kabul edildiği, af ve mağfiret kapılarının açıldığı gecedir."
  },
  {
    id: "fw_i̇nanç_63",
    category: "İnanç",
    word: "MİRAÇ",
    clue: "Peygamberimizin göğe yükselip ilahi huzura çıktığı mucizevi yolculuk.",
    wisdom: "Miraç gecesinde beş vakit namaz farz kılınmış ve Bakara Suresi'nin son ayetleri indirilmiştir."
  },
  {
    id: "fw_i̇nanç_64",
    category: "İnanç",
    word: "REGAİP",
    clue: "Arzular, rağbetler anlamına gelen, Üç Ayların ilk mübarek cuma gecesi.",
    wisdom: "Regaip Gecesi, rahmet kapılarının açıldığı, tövbelerin kabul gördüğü gecedir."
  },
  {
    id: "fw_i̇nanç_65",
    category: "İnanç",
    word: "MEVLİT",
    clue: "Peygamber Efendimiz Hz. Muhammed'in (s.a.v.) doğum gecesi ve kandili.",
    wisdom: "Mevlit Kandili, peygamberimizi anlama ve salavat getirme vesilesidir."
  },
  {
    id: "fw_i̇nanç_66",
    category: "İnanç",
    word: "KADİR",
    clue: "Bin aydan daha hayırlı olduğu Kur'an'da bildirilen mübarek gece.",
    wisdom: "Kadir Gecesi, Kur'an-ı Kerim'in indirilmeye başlandığı eşsiz bir gecedir."
  },
  {
    id: "fw_i̇nanç_67",
    category: "İnanç",
    word: "HAŞR",
    clue: "Kıyamet gününde ölülerin diriltilip toplanacağı büyük buluşma meydanı.",
    wisdom: "Haşr meydanı, herkesin kendi derdine düşeceği adalet gününün kurulduğu yerdir."
  },
  {
    id: "fw_i̇nanç_68",
    category: "İnanç",
    word: "NEFH",
    clue: "İsrafil (a.s.) meleğinin sur borusuna üflemesi eylemi.",
    wisdom: "Sur borusuna ilk nefh ile kıyamet kopacak, ikinci nefh ile herkes dirilecektir."
  },
  {
    id: "fw_i̇nanç_69",
    category: "İnanç",
    word: "BAS",
    clue: "Ölümden sonra sur borusuna ikinci kez üflenmesiyle yeniden dirilmek.",
    wisdom: "Bas (yeniden diriliş), ahiret inancının en önemli safhalarından biridir."
  },
  {
    id: "fw_i̇nanç_70",
    category: "İnanç",
    word: "SAHİR",
    clue: "Kıyamet gününde insanların üzerinde toplanacağı bembeyaz düz meydan.",
    wisdom: "Sahir meydanı, adalet terazisinin kurulacağı düzlük alanı ifade eder."
  },
  {
    id: "fw_i̇nanç_71",
    category: "İnanç",
    word: "KİTAB",
    clue: "Peygamberlere gönderilen ilahi mesajların toplandığı yazılı kaynak.",
    wisdom: "Dört büyük kutsal kitap (Tevrat, Zebur, İncil, Kur'an) imanın parçasıdır."
  },
  {
    id: "fw_i̇nanç_72",
    category: "İnanç",
    word: "CÜZ",
    clue: "Kur'an-ı Kerim'in her 20 sayfalık bölümüne verilen isim.",
    wisdom: "Kur'an'da toplam 30 cüz bulunur; her cüz bir okuma kolaylığı sağlar."
  },
  {
    id: "fw_i̇nanç_73",
    category: "İnanç",
    word: "AYET",
    clue: "Kur'an-ı Kerim'deki cümleler veya cümle parçaları olan ilahi belgeler.",
    wisdom: "Kur'an'da 6236 ayet bulunur ve her ayet insanlığa birer hitaptır."
  },
  {
    id: "fw_i̇nanç_74",
    category: "İnanç",
    word: "SURE",
    clue: "Kur'an-ı Kerim'in ayetlerden oluşan 114 ana bölümünden her biri.",
    wisdom: "Kur'an'ın en uzun suresi Bakara, en kısa suresi ise Kevser Suresi'dir."
  },
  {
    id: "fw_i̇nanç_75",
    category: "İnanç",
    word: "MEKKİ",
    clue: "Peygamberimizin Mekke'de geçen peygamberlik döneminde inen ayetler.",
    wisdom: "Mekki sureler genellikle inanç, tevhid ve ahlak konularını işler."
  },
  {
    id: "fw_i̇nanç_76",
    category: "İnanç",
    word: "MEDENİ",
    clue: "Peygamberimizin Medine'ye hicretinden sonra inen ayetler ve sureler.",
    wisdom: "Medeni sureler ibadet, hukuk, aile ve toplum düzenini belirleyen kurallar içerir."
  },
  {
    id: "fw_i̇nanç_77",
    category: "İnanç",
    word: "MUHKEM",
    clue: "Anlamı açık, net ve yoruma gerek duymayan Kur'an ayetleri.",
    wisdom: "Muhkem ayetler dinin temel yasalarını ve helal-haram sınırlarını çizer."
  },
  {
    id: "fw_i̇nanç_78",
    category: "İnanç",
    word: "MÜTEŞABİH",
    clue: "Anlamı derin, sembolik veya yoruma açık olan Kur'an ayetleri.",
    wisdom: "Müteşabih ayetler insan aklının sınırlarını aşan gayb konularında semboller sunar."
  },
  {
    id: "fw_i̇nanç_79",
    category: "İnanç",
    word: "MUSHAF",
    clue: "Kur'an ayetlerinin iki kapak arasına getirilerek kitaplaşmış hali.",
    wisdom: "İlk Mushaf Hz. Ebu Bekir döneminde kitaplaştırılmış, Hz. Osman döneminde çoğaltılmıştır."
  },
  {
    id: "fw_i̇nanç_80",
    category: "İnanç",
    word: "TECVİD",
    clue: "Kur'an-ı Kerim'i harflerin çıkış yerlerine ve kurallarına göre güzel okuma sanatı.",
    wisdom: "Tecvid kurallarına uyarak Kur'an okumak, kelimelerin anlamlarının bozulmasını engeller."
  },
  {
    id: "fw_i̇nanç_81",
    category: "İnanç",
    word: "HAFİZ",
    clue: "Kur'an-ı Kerim'in tamamını ezberleyip zihninde koruyan kişi.",
    wisdom: "Hafızlar, Kur'an lafzını nesiller boyu koruyan canlı kütüphanelerdir."
  },
  {
    id: "fw_i̇nanç_82",
    category: "İnanç",
    word: "MUKABELE",
    clue: "Ramazan ayında Kur'an'ı birinin okuyup diğerlerinin takip etmesi geleneği.",
    wisdom: "Mukabele geleneği Cebrail (a.s.) ile Peygamberimiz'in Kur'an'ı karşılıklı okumalarına dayanır."
  },
  {
    id: "fw_i̇nanç_83",
    category: "İnanç",
    word: "TEZHİP",
    clue: "Kutsal kitapları ve yazıları altın tozu kullanarak süsleme sanatı.",
    wisdom: "Tezhip, hat sanatıyla yazılan Kur'an sayfalarını süsleyen köklü bir medeniyet sanatıdır."
  },
  {
    id: "fw_i̇nanç_84",
    category: "İnanç",
    word: "HAT",
    clue: "Arap harfleriyle estetik ve şık yazılar yazma sanatı.",
    wisdom: "Hat sanatı (Hüsn-i Hat), camileri ve levhaları süsleyen en asil İslam sanatlarındandır."
  },
  {
    id: "fw_i̇nanç_85",
    category: "İnanç",
    word: "HATTAT",
    clue: "Hat sanatını profesyonelce icra eden, güzel yazı ustası.",
    wisdom: "Hattatlar, ömürlerini Kur'an harflerine estetik formlar kazandırmaya adarlar."
  },
  {
    id: "fw_i̇badet_1",
    category: "İbadet",
    word: "NAMAZ",
    clue: "Günde beş vakit yerine getirilmesi farz olan bedenî ibadet.",
    wisdom: "Namaz dinin direğidir ve müminin miracı olarak kabul edilir."
  },
  {
    id: "fw_i̇badet_2",
    category: "İbadet",
    word: "ABDEST",
    clue: "Namaz kılmak için belirli organları suyla yıkama temizliği.",
    wisdom: "Abdest hem maddi temizlik sağlar hem de manevi kirlerden arındırır."
  },
  {
    id: "fw_i̇badet_3",
    category: "İbadet",
    word: "ORUÇ",
    clue: "İmsaktan iftara kadar yeme, içme ve kötü sözlerden uzak durma ibadeti.",
    wisdom: "Oruç sabrı öğretir, fakirlerin halini anlamayı sağlar ve nefsi terbiye eder."
  },
  {
    id: "fw_i̇badet_4",
    category: "İbadet",
    word: "ZEKAT",
    clue: "Zenginlerin yılda bir kez mallarının yüzde 2.5'ini fakirlere vermesi.",
    wisdom: "Zekat toplumsal adaleti ve yardımlaşmayı sağlayan köprü bir ibadettir."
  },
  {
    id: "fw_i̇badet_5",
    category: "İbadet",
    word: "HAC",
    clue: "Yılın belirli günlerinde Kabe'yi ve kutsal mekanları ziyaret etme ibadeti.",
    wisdom: "Hac ibadeti tüm Müslümanların eşitliğini ve kardeşliğini simgeler."
  },
  {
    id: "fw_i̇badet_6",
    category: "İbadet",
    word: "SECDE",
    clue: "Namazda alnı, burnu, elleri, dizleri ve ayakları yere koyarak eğilme.",
    wisdom: "Kulun Allah'a en yakın olduğu an secde anıdır."
  },
  {
    id: "fw_i̇badet_7",
    category: "İbadet",
    word: "RÜKÛ",
    clue: "Namazda ayaktayken bel hizasında eğilip elleri dizlere koyma hareketi.",
    wisdom: "Rükûda 'Sübhâne rabbiye'l-azîm' diyerek Allah'ın yüceliğini anarız."
  },
  {
    id: "fw_i̇badet_8",
    category: "İbadet",
    word: "TAVAF",
    clue: "Kabe'nin etrafında ibadet niyetiyle yedi kez dönme eylemi.",
    wisdom: "Kabe etrafında her dönüşe şavt denir, yedi şavt bir tavaf eder."
  },
  {
    id: "fw_i̇badet_9",
    category: "İbadet",
    word: "İHRAM",
    clue: "Hac ve umre yaparken giyilen iki parçadan oluşan dikişsiz beyaz örtü.",
    wisdom: "İhram, dünya makamlarından sıyrılıp mahşerdeki eşitliği simgeler."
  },
  {
    id: "fw_i̇badet_10",
    category: "İbadet",
    word: "FİTRE",
    clue: "Ramazan ayında bayramdan önce verilmesi gereken vacip sadaka.",
    wisdom: "Fıtır sadakası, Ramazan orucunun kabulü için şükran borcudur."
  },
  {
    id: "fw_i̇badet_11",
    category: "İbadet",
    word: "ÖŞÜR",
    clue: "Tarım ürünlerinden ve meyvelerden verilen onda bir oranındaki zekat.",
    wisdom: "Toprak mahsullerinin bereketlenmesi için öşür verilmesi emredilmiştir."
  },
  {
    id: "fw_i̇badet_12",
    category: "İbadet",
    word: "VAKFE",
    clue: "Arafat tepesinde Arife günü belirli bir süre durup dua etmek.",
    wisdom: "Arafat vakfesi haccın en temel farzıdır, 'Hac Arafat'tır' denilmiştir."
  },
  {
    id: "fw_i̇badet_13",
    category: "İbadet",
    word: "KİYAM",
    clue: "Namazda ayakta durmak anlamına gelen namazın farzı.",
    wisdom: "Kıyam, Allah'ın huzurunda saygıyla ayakta durmayı ifade eder."
  },
  {
    id: "fw_i̇badet_14",
    category: "İbadet",
    word: "KİRAAT",
    clue: "Namaz kılarken ayaktayken Kur'an'dan ayet veya sure okumak.",
    wisdom: "Kıraat namazın içindeki farzlardan biri olup asgari düzeyde Kur'an okumaktır."
  },
  {
    id: "fw_i̇badet_15",
    category: "İbadet",
    word: "HUTBE",
    clue: "Cuma ve bayram namazlarında minberden yapılan dini konuşma.",
    wisdom: "Hutbeyi sessizce ve pürüzsüzce dinlemek cemaat için farz veya vaciptir."
  },
  {
    id: "fw_i̇badet_16",
    category: "İbadet",
    word: "SEFERİ",
    clue: "Dinen yolculukta olan ve ibadetlerinde bazı kolaylıklar tanınan kişi.",
    wisdom: "Seferi olanlar 4 rekatlık farz namazları kısaltarak 2 rekat kılarlar."
  },
  {
    id: "fw_i̇badet_17",
    category: "İbadet",
    word: "EZAN",
    clue: "Namaz vaktinin girdiğini ilan etmek için yapılan çağrı.",
    wisdom: "Ezan, tevhid inancını günde beş kez tüm dünyaya haykıran çağrıdır."
  },
  {
    id: "fw_i̇badet_18",
    category: "İbadet",
    word: "KAMET",
    clue: "Farz namazlara başlamadan önce cemaate yapılan hızlı ezan çağrısı.",
    wisdom: "Kamet getirmek erkekler için sünnet olup namaza odaklanmayı sağlar."
  },
  {
    id: "fw_i̇badet_19",
    category: "İbadet",
    word: "TESBİH",
    clue: "Allah'ı noksan sıfatlardan tenzih etmek için söylenen Sübhanallah kelimesi.",
    wisdom: "Namaz sonlarında 33'er kez Sübhanallah, Elhamdülillah ve Allahu Ekber denir."
  },
  {
    id: "fw_i̇badet_20",
    category: "İbadet",
    word: "CAMİ",
    clue: "Müslümanların ibadet etmek için toplandığı kutsal bina.",
    wisdom: "Camiler birlik ve beraberliğin pekiştiği ibadet ve ilim merkezleridir."
  },
  {
    id: "fw_i̇badet_21",
    category: "İbadet",
    word: "MİNBER",
    clue: "Camilerde hutbe okumak için çıkılan merdivenli yüksek kürsü.",
    wisdom: "Minber, cemaatin hatibi rahatça duyması ve görmesi için tasarlanmıştır."
  },
  {
    id: "fw_i̇badet_22",
    category: "İbadet",
    word: "MİHRAP",
    clue: "Camide imamın namaz kıldırırken durduğu yön gösteren girintili yer.",
    wisdom: "Mihrap, namaz kılan cemaate Kabe yönünü tam olarak işaret eder."
  },
  {
    id: "fw_i̇badet_23",
    category: "İbadet",
    word: "ŞEREFE",
    clue: "Minarelerde müezzinin çıkıp ezan okuduğu balkon şeklindeki bölüm.",
    wisdom: "Eski dönemlerde müezzinler şerefeye merdivenle tıklar, oradan ezan okurlardı."
  },
  {
    id: "fw_i̇badet_24",
    category: "İbadet",
    word: "TEYEMMÜM",
    clue: "Su bulunmadığında temiz toprakla elleri ve yüzü mesh ederek alınan abdest.",
    wisdom: "Teyemmüm, zor durumlar için dinimizin sunduğu kolaylık temizliğidir."
  },
  {
    id: "fw_i̇badet_25",
    category: "İbadet",
    word: "GUSÜL",
    clue: "Tüm vücudu kuru yer kalmayacak şekilde yıkamak suretiyle alınan boy abdesti.",
    wisdom: "Gusül abdesti, hükmi kirlilikten kurtulmak için farz olan temizliktir."
  },
  {
    id: "fw_i̇badet_26",
    category: "İbadet",
    word: "FİDYE",
    clue: "Sağlık sebebiyle oruç tutamayanların her güne karşılık fakire verdiği bedel.",
    wisdom: "Fidye miktarı, bir fakiri sabah ve akşam doyuracak yemek parası kadardır."
  },
  {
    id: "fw_i̇badet_27",
    category: "İbadet",
    word: "SAHUR",
    clue: "Ramazan ayında oruç tutmak için imsak vaktinden önce yenen yemek.",
    wisdom: "Peygamberimiz sahur yemeğinde bereket ve sağlık olduğunu belirtmiştir."
  },
  {
    id: "fw_i̇badet_28",
    category: "İbadet",
    word: "İFTAR",
    clue: "Orucun vakti girince akşam ezanıyla birlikte açılması.",
    wisdom: "İftar vakti, duaların en makbul olduğu sevinç ve şükür anıdır."
  },
  {
    id: "fw_i̇badet_29",
    category: "İbadet",
    word: "TERAVİH",
    clue: "Ramazan gecelerinde yatsıdan sonra kılınan 20 rekatlık sünnet namazı.",
    wisdom: "Teravih namazı Ramazan ayına mahsus olup sınıfça ve cemaatle neşeyle kılınır."
  },
  {
    id: "fw_i̇badet_30",
    category: "İbadet",
    word: "İTİKAF",
    clue: "Ramazan'ın son on gününde ibadet amacıyla mescide kapanıp beklemek.",
    wisdom: "İtikaf, dünya işlerinden sıyrılıp tamamen Allah'a yönelme eğitimidir."
  },
  {
    id: "fw_i̇badet_31",
    category: "İbadet",
    word: "KURBAN",
    clue: "Kurban bayramında Allah rızası için hayvan kesme ibadeti.",
    wisdom: "Kurban, Allah'a yakınlaşmayı ve muhtaçlarla et paylaşmayı sağlar."
  },
  {
    id: "fw_i̇badet_32",
    category: "İbadet",
    word: "FİTRE",
    clue: "Ramazan ayında bayramdan önce her Müslümanın vermesi gereken sadaka.",
    wisdom: "Fitre, hayatta olmanın ve bayrama ulaşmanın şükran sadakasıdır."
  },
  {
    id: "fw_i̇badet_33",
    category: "İbadet",
    word: "SADAKA",
    clue: "Allah rızası için gönüllü olarak yapılan her türlü maddi manevi yardım.",
    wisdom: "Gülümsemek, yol üstündeki taşı kaldırmak bile birer sadakadır."
  },
  {
    id: "fw_i̇badet_34",
    category: "İbadet",
    word: "CARİYE",
    clue: "Kesilmeyen, sürekli sevap kazandıran sadaka türü (Sadaka-i Cariye).",
    wisdom: "Okul, cami yaptırmak veya hayırlı bir ilmi eser bırakmak sadaka-i cariyedir."
  },
  {
    id: "fw_i̇badet_35",
    category: "İbadet",
    word: "NİYET",
    clue: "İbadetlere başlarken kalben ne yapacağını bilmek ve karar vermek.",
    wisdom: "Niyetsiz yapılan ameller ibadet değeri taşımaz; niyet amelin ruhudur."
  },
  {
    id: "fw_i̇badet_36",
    category: "İbadet",
    word: "TEKBİR",
    clue: "Allah en büyüktür anlamına gelen 'Allahu Ekber' sözü.",
    wisdom: "Namazlara başlarken iftitah tekbiri getirmek namazın farzlarındandır."
  },
  {
    id: "fw_i̇badet_37",
    category: "İbadet",
    word: "SALAVAT",
    clue: "Peygamber Efendimiz'e (s.a.v.) dua ve selam gönderme sözleri.",
    wisdom: "Allahümme salli ala Muhammed demek peygamberimize olan sevgiyi artırır."
  },
  {
    id: "fw_i̇badet_38",
    category: "İbadet",
    word: "DUA",
    clue: "Kulun istek ve sığınmalarını doğrudan yaratıcısına iletmesi.",
    wisdom: "Dua ibadetin özüdür. Kulun acziyetini bilip Allah'tan yardım istemesidir."
  },
  {
    id: "fw_i̇badet_39",
    category: "İbadet",
    word: "HAMD",
    clue: "Allah'a şükran borcunu sunmak, O'nu övmek ve teşekkür etmek.",
    wisdom: "Elhamdülillah diyerek aldığımız her nefese ve nimete hamd ederiz."
  },
  {
    id: "fw_i̇badet_40",
    category: "İbadet",
    word: "ŞÜKÜR",
    clue: "Verilen nimetlere karşı dil, kalp ve bedenle teşekkür etmek.",
    wisdom: "Nimetin şükrü kendi cinsindendir; zekanın şükrü ders çalışıp öğretmektir."
  },
  {
    id: "fw_i̇badet_41",
    category: "İbadet",
    word: "İSTİĞFAR",
    clue: "İşlenen günahlardan dolayı pişman olup Allah'tan af dilemek.",
    wisdom: "Estağfirullah diyerek kalbimizdeki günah lekelerini temizleyebiliriz."
  },
  {
    id: "fw_i̇badet_42",
    category: "İbadet",
    word: "TÖVBE",
    clue: "Günahı terk edip bir daha yapmamaya karar vererek Allah'a sığınmak.",
    wisdom: "Tövbe kapısı kıyamete kadar herkese açıktır; hatadan dönmek erdemdir."
  },
  {
    id: "fw_i̇badet_43",
    category: "İbadet",
    word: "CEMAAT",
    clue: "Birlikte namaz kılan veya aynı amaçla toplanan Müslüman topluluğu.",
    wisdom: "Cemaatle kılınan namaz, tek başına kılınan namazdan 27 kat daha sevaptır."
  },
  {
    id: "fw_i̇badet_44",
    category: "İbadet",
    word: "İMAM",
    clue: "Namaz kıldırırken cemaatin önüne geçip onlara önderlik eden kişi.",
    wisdom: "İmam, ahlakı ve Kur'an okuyuşu ile cemaate örnek olan rehberdir."
  },
  {
    id: "fw_i̇badet_45",
    category: "İbadet",
    word: "MÜEZZİN",
    clue: "Ezan okumak ve camide namaz düzenini sağlamakla görevli kişi.",
    wisdom: "Müezzinler güzel sesleriyle cemaati namaza ve huzura davet ederler."
  },
  {
    id: "fw_i̇badet_46",
    category: "İbadet",
    word: "KİBLE",
    clue: "Namaz kılarken yöneldiğimiz Mekke'deki kutsal bina (Kabe).",
    wisdom: "Dünyanın neresinde olursak olalım kıbleye yönelerek namaz kılarız."
  },
  {
    id: "fw_i̇badet_47",
    category: "İbadet",
    word: "KABE",
    clue: "Mekke'de bulunan, yeryüzünde Allah için yapılan ilk ibadet evi.",
    wisdom: "Kabe, siyah örtüsüyle tüm Müslümanların tevhid merkezini simgeler."
  },
  {
    id: "fw_i̇badet_48",
    category: "İbadet",
    word: "HACER",
    clue: "Kabe'nin köşesinde bulunan ve tavafın başlangıç çizgisi olan Hacerü'l-Esved taşı.",
    wisdom: "Cennetten indiğine inanılan bu siyah taş, tavafı selamlamak için bir nişandır."
  },
  {
    id: "fw_i̇badet_49",
    category: "İbadet",
    word: "MÜZDELİFE",
    clue: "Hac sırasında Arafat dönüşü vakfe yapılan ve taş toplanan kutsal bölge.",
    wisdom: "Müzdelife'de sabaha karşı yapılan vakfe, haccın vaciplerindendir."
  },
  {
    id: "fw_i̇badet_50",
    category: "İbadet",
    word: "MİNA",
    clue: "Hac sırasında kurban kesilen ve şeytan taşlama eylemi yapılan kutsal yer.",
    wisdom: "Mina, Hz. İbrahim'in oğlu Hz. İsmail'i Allah için feda etme sınavının mekanıdır."
  },
  {
    id: "fw_i̇badet_51",
    category: "İbadet",
    word: "SA'Y",
    clue: "Hacda Safa ve Merve tepeleri arasında 7 kez hızlıca yürümek.",
    wisdom: "Sa'y, Hz. Hacer'in bebeği İsmail'e su bulmak için çırpınışının hatırasıdır."
  },
  {
    id: "fw_i̇badet_52",
    category: "İbadet",
    word: "SAFA",
    clue: "Sa'y ibadetinin başladığı Mekke'deki kutsal tepelerden biri.",
    wisdom: "Safa tepesinden Kabe'ye bakarak niyet edilir ve tavaftan sonra yürüyüş başlar."
  },
  {
    id: "fw_i̇badet_53",
    category: "İbadet",
    word: "MERVE",
    clue: "Sa'y ibadetinin tamamlandığı Safa'nın karşısındaki kutsal tepe.",
    wisdom: "Yürüyüş Merve tepesinde son bulur ve hacılar tıraş olarak ihramdan çıkarlar."
  },
  {
    id: "fw_i̇badet_54",
    category: "İbadet",
    word: "MİKAD",
    clue: "Hac ve umreye gidenlerin ihrama girmek zorunda olduğu sınır kapıları.",
    wisdom: "Mikad sınırlarını ihramsız geçmek fıkhen ceza gerektirir."
  },
  {
    id: "fw_i̇badet_55",
    category: "İbadet",
    word: "UMRE",
    clue: "Hac mevsimi dışında Kabe'yi tavaf ve sa'y ile ziyaret etme ibadeti.",
    wisdom: "Umre, küçük hac olarak da bilinir ve sünnet bir ibadettir."
  },
  {
    id: "fw_i̇badet_56",
    category: "İbadet",
    word: "MUSHAF",
    clue: "Kur'an sayfalarının bir araya getirilip ciltlenmiş haline fıkıhta verilen isim.",
    wisdom: "Mushafı abdestsiz tutmamak Kur'an'a olan saygımızın bir gereğidir."
  },
  {
    id: "fw_i̇badet_57",
    category: "İbadet",
    word: "MESH",
    clue: "Abdest alırken ıslak elle başın, kulakların ve ayak kabının (mest) üzerini sıvazlamak.",
    wisdom: "Mesh, abdestte kolaylık sağlayan ve suyun ulaşmasını hızlandıran uygulamadır."
  },
  {
    id: "fw_i̇badet_58",
    category: "İbadet",
    word: "MEST",
    clue: "Abdest alırken üzerine mesh yapılabilen özel deri veya yün ayak giysisi.",
    wisdom: "Mestler temiz olmalı ve topukları örtecek yükseklikte olmalıdır."
  },
  {
    id: "fw_i̇badet_59",
    category: "İbadet",
    word: "HADESTEN",
    clue: "Gusül veya abdest gerektiren manevi kirlilikten temizlenme (Hadesten Taharet).",
    wisdom: "Namaz kılmak için hadesten taharet farzdır, abdestsiz namaz kılınamaz."
  },
  {
    id: "fw_i̇badet_60",
    category: "İbadet",
    word: "NECASETTEN",
    clue: "Beden, elbise veya namaz kılınacak yerdeki maddi pisliği temizleme.",
    wisdom: "Necasetten taharet namazın dışındaki farzlarından biridir."
  },
  {
    id: "fw_i̇badet_61",
    category: "İbadet",
    word: "KADEİ",
    clue: "Namazın sonunda Ettehiyyatü duasını okuyacak kadar oturup beklemek (Ka'de-i Ahîre).",
    wisdom: "Son oturuş namazın rükünlerinden (farzlarından) biridir."
  },
  {
    id: "fw_i̇badet_62",
    category: "İbadet",
    word: "KUNUT",
    clue: "Yatsı namazından sonra kılınan vitir namazının son rekatında okunan dualar.",
    wisdom: "Kunut dualarında Allah'a sığınır, O'na şükreder ve yardım dileriz."
  },
  {
    id: "fw_i̇badet_63",
    category: "İbadet",
    word: "SÜBHANEKE",
    clue: "Namazlarda başlangıç tekbirinden sonra ilk okunan dua.",
    wisdom: "Sübhaneke duası Allah'ı tüm eksikliklerden tenzih ederek başlar."
  },
  {
    id: "fw_i̇badet_64",
    category: "İbadet",
    word: "FATİHA",
    clue: "Kur'an'ın ilk suresi, namazın her rekatında okunması farz olan sure.",
    wisdom: "Fatiha Suresi şifa ve hidayet suresidir, 'Fatihasız namaz olmaz' denir."
  },
  {
    id: "fw_i̇badet_65",
    category: "İbadet",
    word: "SÜRE",
    clue: "Kur'an-ı Kerim'in ayetlerden oluşan 114 ana bölümünden her biri.",
    wisdom: "Her sure birer ilahi mesaj demetidir ve hayatımıza rehberlik eder."
  },
  {
    id: "fw_i̇badet_66",
    category: "İbadet",
    word: "AYET",
    clue: "Kur'an-ı Kerim'in en küçük cümle veya kelime gruplarından oluşan birimleri.",
    wisdom: "Ayetler Allah'ın varlığının ve birliğinin açık delilleridir."
  },
  {
    id: "fw_i̇badet_67",
    category: "İbadet",
    word: "MİNAR",
    clue: "Camilerin ezan okunan ve uzaktan fark edilmesini sağlayan yüksek ince kuleleri.",
    wisdom: "Minareler İslam medeniyetinin mimari sembolü ve estetik abideleridir."
  },
  {
    id: "fw_i̇badet_68",
    category: "İbadet",
    word: "KÜRSÜ",
    clue: "Camilerde vaizlerin cemaate vaaz edip ders anlattığı yüksek oturma yeri.",
    wisdom: "Kürsüde cemaate dini nasihatler verilir, bilgilendirme yapılır."
  },
  {
    id: "fw_i̇badet_69",
    category: "İbadet",
    word: "AVRET",
    clue: "Dinen örtülmesi farz olan, başkalarının bakmasının yasak olduğu vücut kısımları.",
    wisdom: "Erkek ve kadın için avret sınırları farklı fıkhi ölçülerle belirlenmiştir."
  },
  {
    id: "fw_i̇badet_70",
    category: "İbadet",
    word: "VAKİT",
    clue: "Namazların kılınması gereken belirli zaman dilimleri (Namazın farzlarından).",
    wisdom: "Vakit girmeden kılınan namaz geçersizdir; her namaz kendi vaktine bağlıdır."
  },
  {
    id: "fw_i̇badet_71",
    category: "İbadet",
    word: "SABAH",
    clue: "Tan yerinin ağarmasından (imsak) güneşin doğuşuna kadar kılınan namaz.",
    wisdom: "Günün ilk ibadeti olan sabah namazı güne bereketle başlamamızı sağlar."
  },
  {
    id: "fw_i̇badet_72",
    category: "İbadet",
    word: "ÖĞLE",
    clue: "Güneşin tam tepeden batıya doğru kaymasıyla başlayan vakit ve namazı.",
    wisdom: "Günün ortasındaki bu ibadet, yoğun iş temposunda ruha bir mola aldırır."
  },
  {
    id: "fw_i̇badet_73",
    category: "İbadet",
    word: "İKİNDİ",
    clue: "Güneşin batmaya yaklaştığı, eşyanın gölgesinin uzadığı vakitte kılınan namaz.",
    wisdom: "İkindi namazını kaçırmamak fıkhen çok önemlidir, hadislerde vurgulanmıştır."
  },
  {
    id: "fw_i̇badet_74",
    category: "İbadet",
    word: "AKŞAM",
    clue: "Güneşin batmasıyla başlayan ve akşam kızıllığı kaybolana kadar süren namaz.",
    wisdom: "Akşam namazı günün batışını ibadetle karşıladığımız kısa ama bereketli bir namazdır."
  },
  {
    id: "fw_i̇badet_75",
    category: "İbadet",
    word: "YATSİ",
    clue: "Akşam kızıllığının tamamen kaybolup gecenin girmesiyle kılınan namaz.",
    wisdom: "Yatsı namazı günün son farz ibadetidir, yatağa abdestli ve huzurlu girmeyi sağlar."
  },
  {
    id: "fw_i̇badet_76",
    category: "İbadet",
    word: "VİTİR",
    clue: "Yatsı namazından sonra kılınan 3 rekatlık vacip namaz.",
    wisdom: "Vitir namazının son rekatında kunut duaları okunur ve tekbir getirilir."
  },
  {
    id: "fw_i̇badet_77",
    category: "İbadet",
    word: "BAYRAM",
    clue: "Yılda iki kez cemaatle kılınan 2 rekatlık vacip namaz.",
    wisdom: "Ramazan ve Kurban bayramı namazları Müslümanların sevinç günlerinin ilk adımıdır."
  },
  {
    id: "fw_i̇badet_78",
    category: "İbadet",
    word: "CUMA",
    clue: "Haftada bir kez cuma günü öğle vakti cemaatle kılınan farz namaz.",
    wisdom: "Cuma namazı haftalık Müslüman buluşmasıdır, tek başına kılınamaz."
  },
  {
    id: "fw_i̇badet_79",
    category: "İbadet",
    word: "CENAZE",
    clue: "Vefat eden Müslüman için ayakta rükûsuz ve secdesiz kılınan dua namazı.",
    wisdom: "Cenaze namazı farz-ı kifayedir; vefat eden kardeşimize son görevimizdir."
  },
  {
    id: "fw_i̇badet_80",
    category: "İbadet",
    word: "KAZA",
    clue: "Vaktinde kılınamayan bir namazın sonradan kılınarak telafi edilmesi.",
    wisdom: "Namazı kazaya bırakmamak esastır, meşru bir sebeple kaçarsa kaza edilir."
  },
  {
    id: "fw_i̇badet_81",
    category: "İbadet",
    word: "SEHİV",
    clue: "Namazda yanılarak farzın gecikmesi veya vacibin terkiyle yapılan secde (Sehiv Secdesi).",
    wisdom: "Namaz sonundaki sehiv secdesi, yapılan yanılma kusurunu telafi eder."
  },
  {
    id: "fw_i̇badet_82",
    category: "İbadet",
    word: "TİLAVET",
    clue: "Kur'an'daki 14 secde ayetinden birini okuyunca veya duyunca yapılan secde.",
    wisdom: "Tilavet secdesi tek secde halinde yapılır; ayete hürmeti gösterir."
  },
  {
    id: "fw_i̇badet_83",
    category: "İbadet",
    word: "ŞAVT",
    clue: "Kabe etrafındaki her bir tek dönüşe fıkıhta verilen isim.",
    wisdom: "Hacerü'l-Esved'den başlayıp tekrar aynı yere gelmek bir şavttır."
  },
  {
    id: "fw_i̇badet_84",
    category: "İbadet",
    word: "ŞÜKÜR",
    clue: "Bir dileğin kabul olması veya nimete ulaşılması sebebiyle yapılan secde.",
    wisdom: "Müjdeli bir haber alan Peygamberimiz hemen şükür secdesine kapanırdı."
  },
  {
    id: "fw_i̇badet_85",
    category: "İbadet",
    word: "İSTİSRA",
    clue: "Kuraklık dönemlerinde yağmur yağması için kılınan yağmur namazı.",
    wisdom: "Yağmur namazı ve duası kulun acziyetini bildirip bereket istemesidir."
  },
  {
    id: "fw_ahlak_1",
    category: "Ahlak",
    word: "GİYBET",
    clue: "Bir kimsenin arkasından, duyduğunda üzüleceği gerçek şeyleri konuşmak.",
    wisdom: "Gıybet etmek kul hakkıdır ve toplumsal sevgi bağlarını tamamen koparır."
  },
  {
    id: "fw_ahlak_2",
    category: "Ahlak",
    word: "HASET",
    clue: "Başkasındaki nimetleri çekemeyip o nimetin yok olmasını istemek.",
    wisdom: "Haset, ateşin odunu yiyip bitirdiği gibi insanın iyiliklerini tüketir."
  },
  {
    id: "fw_ahlak_3",
    category: "Ahlak",
    word: "TEVAZU",
    clue: "Alçakgönüllü olmak, insanlara karşı kibirlenip büyüklük taslamamak.",
    wisdom: "Tevazu sahibi insanları Allah yüceltir ve toplumda sevilmelerini sağlar."
  },
  {
    id: "fw_ahlak_4",
    category: "Ahlak",
    word: "EMANET",
    clue: "Korunması için verilen maddi veya manevi değerleri hıyanet etmeden korumak.",
    wisdom: "Emanet peygamberlerin ortak özelliğidir; güvenilir olmanın baş şartıdır."
  },
  {
    id: "fw_ahlak_5",
    category: "Ahlak",
    word: "SİDK",
    clue: "Sözde ve davranışta her zaman doğru olmak, yalandan kaçınmak.",
    wisdom: "Sıdk (doğruluk) insanı cennete, yalan ise kötülüğe ve cehenneme götürür."
  },
  {
    id: "fw_ahlak_6",
    category: "Ahlak",
    word: "VEFA",
    clue: "Verilen söze sadık kalmak, dostluk ve iyilikleri unutmamak.",
    wisdom: "Vefa, vefakar olmak, zor günde dostunun yanında yer almaktır."
  },
  {
    id: "fw_ahlak_7",
    category: "Ahlak",
    word: "SABİR",
    clue: "Zorluklar, musibetler ve ibadetlerin zorlukları karşısında direnç göstermek.",
    wisdom: "Sabır, ilk sarsıntı anında gösterilendir; sabredenler mutlaka kazanır."
  },
  {
    id: "fw_ahlak_8",
    category: "Ahlak",
    word: "HAYA",
    clue: "Kötü ve çirkin işlerden utanarak ahlak sınırlarını korumak.",
    wisdom: "Haya imandan bir şubedir; insanı kötülük yapmaktan koruyan kalkandır."
  },
  {
    id: "fw_ahlak_9",
    category: "Ahlak",
    word: "İFFET",
    clue: "Namusunu, şerefini ve ahlaki temizliğini her türlü kötülükten korumak.",
    wisdom: "İffet sahibi olmak, ahlaken erdemli kalmanın en asil yoludur."
  },
  {
    id: "fw_ahlak_10",
    category: "Ahlak",
    word: "ŞECAAT",
    clue: "Adalet ve hak yolunda cesur olmak, korkaklıktan uzak durmak.",
    wisdom: "Şecaat, zulme karşı hakkı haykırma cesaretine sahip olmaktır."
  },
  {
    id: "fw_ahlak_11",
    category: "Ahlak",
    word: "İHSAN",
    clue: "Allah'ı görüyormuş gibi yaşamak ve insanlara sürekli iyilik yapmak.",
    wisdom: "İhsan sahibi müminler, kötülük yapana bile iyilikle mukabele ederler."
  },
  {
    id: "fw_ahlak_12",
    category: "Ahlak",
    word: "KANAAT",
    clue: "Allah'ın verdiğine razı olup hırstan ve açgözlülükten kaçınmak.",
    wisdom: "Kanaat bitmez bir hazinedir; insanı başkalarına el açmaktan korur."
  },
  {
    id: "fw_ahlak_13",
    category: "Ahlak",
    word: "İSRAF",
    clue: "Maddiyatı, zamanı, sağlığı veya yiyecekleri boş yere saçıp savurmak.",
    wisdom: "İsraf haramdır; kaynakları dengeli kullanmak ahlaki bir ödevdir."
  },
  {
    id: "fw_ahlak_14",
    category: "Ahlak",
    word: "HİLİM",
    clue: "Öfke anında sakin kalabilmek, yumuşak huylu ve bağışlayıcı olmak.",
    wisdom: "Hilim sahibi insanlar, kötülük ve sertlik karşısında sükunetle dururlar."
  },
  {
    id: "fw_ahlak_15",
    category: "Ahlak",
    word: "İSAR",
    clue: "Kendi ihtiyacı olduğu halde başkalarını kendi nefsine tercih etmek.",
    wisdom: "Medineli Ensar'ın hicret eden Muhacirlere yaptığı fedakarlık en büyük isardır."
  },
  {
    id: "fw_ahlak_16",
    category: "Ahlak",
    word: "ADALET",
    clue: "Her hak sahibine hakkını vermek, ölçü ve tartıda dürüst olmak.",
    wisdom: "Adalet mülkün temelidir; adaletle hükmetmek huzurun kaynağıdır."
  },
  {
    id: "fw_ahlak_17",
    category: "Ahlak",
    word: "KİBİR",
    clue: "Kendini başkalarından üstün görmek, insanları küçük düşürmek.",
    wisdom: "Kalbide hardal tanesi kadar kibir olan cennete giremez denilmiştir."
  },
  {
    id: "fw_ahlak_18",
    category: "Ahlak",
    word: "RİYA",
    clue: "İbadet ve güzel işleri gösteriş için, insanların beğenisi için yapmak.",
    wisdom: "Riya amelleri boşa çıkaran gizli bir tehlikedir; samimiyetin düşmanıdır."
  },
  {
    id: "fw_ahlak_19",
    category: "Ahlak",
    word: "İFTİRA",
    clue: "Bir insana işlemediği bir suçu asılsız yere yüklemek.",
    wisdom: "İftira kul hakkının en ağırıdır; toplumda fitne ve nefrete yol açar."
  },
  {
    id: "fw_ahlak_20",
    category: "Ahlak",
    word: "YALAN",
    clue: "Gerçeğe aykırı söz söylemek, insanları aldatmak ve dürüst olmamak.",
    wisdom: "Yalan münafıklık alametlerindendir; güveni tamamen yok eder."
  },
  {
    id: "fw_ahlak_21",
    category: "Ahlak",
    word: "SADAKAT",
    clue: "Dostluğa, söze ve inanca ömür boyu bağlı kalmak, dürüstlük.",
    wisdom: "Sadakat, Hz. Ebu Bekir'in peygamberimize gösterdiği eşsiz bağlılıktır."
  },
  {
    id: "fw_ahlak_22",
    category: "Ahlak",
    word: "MERHAMET",
    clue: "Canlılara acımak, şefkat göstermek ve onlara yardım etmek.",
    wisdom: "Yeryüzündekilere merhamet edin ki gökteki melekler de size merhamet etsin."
  },
  {
    id: "fw_ahlak_23",
    category: "Ahlak",
    word: "CÖMERT",
    clue: "Sahip olduğu maddi manevi imkanları esirgemeden paylaşan kişi.",
    wisdom: "Cömert insan Allah'a yakın, insanlara yakın ve cennete yakındır."
  },
  {
    id: "fw_ahlak_24",
    category: "Ahlak",
    word: "CİMRİ",
    clue: "Malını ve imkanlarını paylaşmaktan kaçınan, aşırı bencil kişi.",
    wisdom: "Cimrilik kalbi daraltır; bencilce yaşamak ahlaken zayıflıktır."
  },
  {
    id: "fw_ahlak_25",
    category: "Ahlak",
    word: "SEVGİ",
    clue: "Canlılara kalpten bağlanmak, değer vermek ve iyi davranmak.",
    wisdom: "İman etmedikçe cennete giremezsiniz, birbirinizi sevmedikçe iman etmiş olmazsınız."
  },
  {
    id: "fw_ahlak_26",
    category: "Ahlak",
    word: "SAYGİ",
    clue: "İnsanların haklarına, yaşlarına ve değerlerine değer vermek, hürmet.",
    wisdom: "Büyüklerimize saygı, küçüklerimize sevgi göstermek ahlakımızın gereğidir."
  },
  {
    id: "fw_ahlak_27",
    category: "Ahlak",
    word: "GÜLER",
    clue: "İnsanlara karşı asık suratlı olmayıp tebessüm etmek (Güler yüz).",
    wisdom: "Müslüman kardeşinin yüzüne tebessüm etmen bir sadakadır."
  },
  {
    id: "fw_ahlak_28",
    category: "Ahlak",
    word: "ADAP",
    clue: "Toplum içinde uyulması gereken ahlaki ve nezaket kuralları.",
    wisdom: "Yemek yeme, konuşma ve selamlaşma adapları toplumu güzelleştirir."
  },
  {
    id: "fw_ahlak_29",
    category: "Ahlak",
    word: "SELAM",
    clue: "Karşılaştığımız insanlara esenlik ve barış dilemek (Selamlaşmak).",
    wisdom: "Aranızda selamı yayın ki sevginiz ve dostluğunuz artsın."
  },
  {
    id: "fw_ahlak_30",
    category: "Ahlak",
    word: "İFTİHAR",
    clue: "Yapılan güzel işlerden dolayı haklı bir gurur ve sevinç duymak.",
    wisdom: "Anne babayı gururlandıracak salih ameller işlemek iftihar vesilesidir."
  },
  {
    id: "fw_ahlak_31",
    category: "Ahlak",
    word: "FEDAKAR",
    clue: "Kendi rahatından ve çıkarlarından başkası için vazgeçen özverili kişi.",
    wisdom: "Fedakarlık dostluğu pekiştirir, toplumsal dayanışmayı en üst seviyeye taşır."
  },
  {
    id: "fw_ahlak_32",
    category: "Ahlak",
    word: "SADİK",
    clue: "Sözünde duran, asla yalan söylemeyen ve güvenilir olan kişi.",
    wisdom: "Sadıklarla beraber olun emri Kur'an-ı Kerim'de yer almaktadır."
  },
  {
    id: "fw_ahlak_33",
    category: "Ahlak",
    word: "ADİL",
    clue: "Her işinde adaletle karar veren, tarafsız ve dürüst şahsiyet.",
    wisdom: "Adil bir yönetici, kıyamet gününde arşın gölgesinde gölgelenecektir."
  },
  {
    id: "fw_ahlak_34",
    category: "Ahlak",
    word: "EMİN",
    clue: "Kendisine güvenilen, elinden ve dilinden zarar gelmeyen insan.",
    wisdom: "Müslüman, diğer insanların elinden ve dilinden emin olduğu kimsedir."
  },
  {
    id: "fw_ahlak_35",
    category: "Ahlak",
    word: "HASLET",
    clue: "İnsanın doğuştan sahip olduğu veya sonradan edindiği güzel ahlaki huy.",
    wisdom: "Güzel hasletler edinmek, ahlak terbiyesinin nihai hedefidir."
  },
  {
    id: "fw_ahlak_36",
    category: "Ahlak",
    word: "EDEP",
    clue: "Haya sınırlarını korumak, edep kurallarına uygun saygılı yaşamak.",
    wisdom: "Edep yahu! Edep, ilimden önce gelen en büyük ziynettir."
  },
  {
    id: "fw_ahlak_37",
    category: "Ahlak",
    word: "NEZAKET",
    clue: "İnsanlara karşı kibar, ince ve saygılı davranma sanatı.",
    wisdom: "Nezaketle konuşmak kalpleri yumuşatır, düşmanlıkları engeller."
  },
  {
    id: "fw_ahlak_38",
    category: "Ahlak",
    word: "HOŞGÖRÜ",
    clue: "İnsanların hata ve kusurlarını anlayışla karşılayıp affedici olmak.",
    wisdom: "Hoşgörülü olmak, toplumsal barışı ve huzuru koruyan en büyük köprüdür."
  },
  {
    id: "fw_ahlak_39",
    category: "Ahlak",
    word: "TEŞEKKÜR",
    clue: "Yapılan iyiliklere karşı şükran borcunu söz veya davranışla bildirmek.",
    wisdom: "İnsanlara teşekkür etmeyen, Allah'a da şükretmiş olmaz."
  },
  {
    id: "fw_ahlak_40",
    category: "Ahlak",
    word: "SİLA",
    clue: "Akrabaları ve yakınları arayıp sormak, onları ziyaret etmek (Sıla-i Rahim).",
    wisdom: "Sıla-i rahim yapmak ömrü uzatır, rızkı bereketlendirir."
  },
  {
    id: "fw_ahlak_41",
    category: "Ahlak",
    word: "HÜRMET",
    clue: "Büyüklere, kutsal değerlere ve anne babaya gösterilen derin saygı.",
    wisdom: "Anne babaya hürmet göstermek, cennet kapılarını aralayan büyük bir ibadettir."
  },
  {
    id: "fw_ahlak_42",
    category: "Ahlak",
    word: "MİSAFİR",
    clue: "Eve gelen konuklara güler yüz gösterip ikramda bulunma ahlakı.",
    wisdom: "Misafir rızkıyla gelir, ev sahibinin günahlarının affına vesile olur."
  },
  {
    id: "fw_ahlak_43",
    category: "Ahlak",
    word: "KULHAKKİ",
    clue: "Başkalarının haklarını çiğnemek, adaletsizlik yapmak.",
    wisdom: "Allah kul hakkını kul bağışlamadıkça affetmeyeceğini bildirmiştir."
  },
  {
    id: "fw_ahlak_44",
    category: "Ahlak",
    word: "TEVAZU",
    clue: "Alçakgönüllü olmak, insanlara karşı kibirlenmemek.",
    wisdom: "Tevazu, yüceliğin alametidir; alçakgönüllü olanı herkes sever."
  },
  {
    id: "fw_ahlak_45",
    category: "Ahlak",
    word: "İSTİKAMET",
    clue: "Dosdoğru yaşamak, inandığı yoldan sapmadan kararlı yürümek.",
    wisdom: "İstikamet sahibi olmak, en büyük keramet olarak kabul edilir."
  },
  {
    id: "fw_ahlak_46",
    category: "Ahlak",
    word: "DOSTLUK",
    clue: "İnsanlar arasında sevgi ve güvene dayalı samimi bağ.",
    wisdom: "Dostunun dini üzere yaşar insan; bu yüzden dost seçimine dikkat etmelidir."
  },
  {
    id: "fw_ahlak_47",
    category: "Ahlak",
    word: "KARDEŞ",
    clue: "Müslümanların birbirini dinen yakın görmesi (Müminler kardeştir).",
    wisdom: "Müminler ancak kardeştirler; öyleyse kardeşlerinizin arasını düzeltin."
  },
  {
    id: "fw_ahlak_48",
    category: "Ahlak",
    word: "HÜSNÜZAN",
    clue: "İnsanların davranışlarını iyi niyetle yorumlamak, iyi düşünmek.",
    wisdom: "Hüsnüzan ibadetin güzelliğindendir; suizandan (kötü niyet) kaçınmalıyız."
  },
  {
    id: "fw_ahlak_49",
    category: "Ahlak",
    word: "GÜVEN",
    clue: "İnsanların birbirine inanması, emniyet duyması.",
    wisdom: "Güvenin olmadığı yerde sevgi ve dostluk barınamaz."
  },
  {
    id: "fw_ahlak_50",
    category: "Ahlak",
    word: "ÖFKE",
    clue: "Kızgınlık anında kendine hakim olamama duygusu.",
    wisdom: "Güçlü kimse güreşte yenen değil, öfke anında nefsine hakim olandır."
  },
  {
    id: "fw_ahlak_51",
    category: "Ahlak",
    word: "SABİR",
    clue: "Zorluklara karşı dayanma gücü ve tevekkül göstermek.",
    wisdom: "Sabır kurtuluşun anahtarı ve en büyük ibadettir."
  },
  {
    id: "fw_ahlak_52",
    category: "Ahlak",
    word: "KANAAT",
    clue: "Elindekine razı olup başkalarının malına göz dikmemek.",
    wisdom: "Kanaat eden zenginleşir; açgözlü olan hep fakir kalır."
  },
  {
    id: "fw_ahlak_53",
    category: "Ahlak",
    word: "YARDİM",
    clue: "Muhtaç olanların elinden tutmak, destek olmak.",
    wisdom: "Bir kardeşinin yardımında olanın, Allah da yardımında olur."
  },
  {
    id: "fw_ahlak_54",
    category: "Ahlak",
    word: "ŞEFKAT",
    clue: "Canlıları koruma, onlara sevgi ve acıma duygusuyla yaklaşma.",
    wisdom: "Şefkat göstermek, peygamber ahlakının en yumuşak yönüdür."
  },
  {
    id: "fw_ahlak_55",
    category: "Ahlak",
    word: "DOĞRULUK",
    clue: "Sözünde ve işinde dürüst olmak, hileden kaçınmak.",
    wisdom: "Doğruluk iyiliğe, iyilik ise cennete götürür."
  },
  {
    id: "fw_ahlak_56",
    category: "Ahlak",
    word: "GÜZELHUY",
    clue: "Güzel ahlaka sahip olmak, çevresine huzur vermek.",
    wisdom: "Müminlerin iman bakımından en mükemmeli, ahlakı en güzel olanıdır."
  },
  {
    id: "fw_ahlak_57",
    category: "Ahlak",
    word: "TEMİZLİK",
    clue: "Bedenini, elbiselerini ve kalbini kirlerden arındırmak.",
    wisdom: "Temizlik imanın yarısıdır buyurularak önemi vurgulanmıştır."
  },
  {
    id: "fw_ahlak_58",
    category: "Ahlak",
    word: "ADALET",
    clue: "Ölçüde, tartıda ve hak dağıtımında tarafsız olmak.",
    wisdom: "Adaletle davranın; şüphesiz Allah adil olanları sever."
  },
  {
    id: "fw_ahlak_59",
    category: "Ahlak",
    word: "İFFET",
    clue: "Namusunu ve şerefini her türlü çirkinlikten korumak.",
    wisdom: "İffetli yaşamak müminin manevi asaletidir."
  },
  {
    id: "fw_ahlak_60",
    category: "Ahlak",
    word: "HAYA",
    clue: "Günah işlemeye karşı duyulan utanma hissi.",
    wisdom: "Haya baştan aşağı hayırdır, insanı kötülükten korur."
  },
  {
    id: "fw_ahlak_61",
    category: "Ahlak",
    word: "KİBAR",
    clue: "Nezaketli ve yumuşak sözlü olmak.",
    wisdom: "İnsanlara kibar davranmak, kalplerini İslam'a ısındırır."
  },
  {
    id: "fw_ahlak_62",
    category: "Ahlak",
    word: "TEBESSÜM",
    clue: "Güler yüzlü olmak, çevresine pozitif enerji yaymak.",
    wisdom: "Tebessüm sadakadır ve insan ilişkilerini güzelleştirir."
  },
  {
    id: "fw_ahlak_63",
    category: "Ahlak",
    word: "SADAKAT",
    clue: "İnancına ve dostlarına bağlı kalmak.",
    wisdom: "Sadakat, sözün fiille ispat edilmesidir."
  },
  {
    id: "fw_ahlak_64",
    category: "Ahlak",
    word: "CÖMERT",
    clue: "Paylaşmayı seven ve yardım eden yardımsever kişi.",
    wisdom: "Cömertlik cennet ağaçlarından bir ağaçtır, dalı cömerdin elindedir."
  },
  {
    id: "fw_ahlak_65",
    category: "Ahlak",
    word: "MİSAFİR",
    clue: "Konukseverlik göstermek, misafire ikram etmek.",
    wisdom: "Allah'a ve ahirete inanan misafirine ikram etsin."
  },
  {
    id: "fw_ahlak_66",
    category: "Ahlak",
    word: "HÜRMET",
    clue: "Anne babaya ve büyüklere saygı göstermek.",
    wisdom: "Büyüklerimize hürmet göstermek ömrümüze bereket katar."
  },
  {
    id: "fw_ahlak_67",
    category: "Ahlak",
    word: "AFETMEK",
    clue: "Hataları bağışlamak, intikam peşinde koşmamak.",
    wisdom: "Affetmek büyüklüğün şanındandır; Allah affedenleri sever."
  },
  {
    id: "fw_ahlak_68",
    category: "Ahlak",
    word: "SÖZÜNDE",
    clue: "Verilen sözü mutlaka tutmak (Sözünde durmak).",
    wisdom: "Sözünde durmak müminin alametidir, sözünden dönmek ise münafıklıktır."
  },
  {
    id: "fw_ahlak_69",
    category: "Ahlak",
    word: "BİRLİK",
    clue: "Müslümanlar arasında dayanışma ve tek vücut olmak.",
    wisdom: "Birlikte rahmet, ayrılıkta ise azap vardır."
  },
  {
    id: "fw_ahlak_70",
    category: "Ahlak",
    word: "VEFA",
    clue: "Dostlukları ve iyilikleri asla unutmamak.",
    wisdom: "Vefakar olmak, geçmiş hukuku ömür boyu korumaktır."
  },
  {
    id: "fw_ahlak_71",
    category: "Ahlak",
    word: "KULHAKKİ",
    clue: "İnsanların hakkına saygı duymak, kul hakkı yememek.",
    wisdom: "Kul hakkı, ahirette helalleşmeden affedilmeyen tek günahtır."
  },
  {
    id: "fw_ahlak_72",
    category: "Ahlak",
    word: "HÜSNÜZAN",
    clue: "İnsanlar hakkında iyi düşünmek, suizan etmemek.",
    wisdom: "Hüsnüzan beslemek kalbi temiz tutmanın ilk adımıdır."
  },
  {
    id: "fw_ahlak_73",
    category: "Ahlak",
    word: "GÜLER",
    clue: "Tebessüm eden, sevecen yüzlü olmak (Güler yüz).",
    wisdom: "Güler yüzlü insan çevresine güven ve neşe verir."
  },
  {
    id: "fw_ahlak_74",
    category: "Ahlak",
    word: "ADAP",
    clue: "Nezaket ve terbiye kuralları.",
    wisdom: "Edep ve adap, insanı diğer canlılardan ayıran en büyük değerdir."
  },
  {
    id: "fw_ahlak_75",
    category: "Ahlak",
    word: "SELAM",
    clue: "Barış ve esenlik dileği olan selamı yaymak.",
    wisdom: "Selamlaşmak Müslümanlar arasındaki sevgiyi artıran köprüdür."
  },
  {
    id: "fw_ahlak_76",
    category: "Ahlak",
    word: "YUMUŞAK",
    clue: "Sert ve kırıcı olmayıp yumuşak sözlü olmak.",
    wisdom: "Yumuşak davranmak, peygamberimizin en belirgin ahlaki vasfıdır."
  },
  {
    id: "fw_ahlak_77",
    category: "Ahlak",
    word: "HOŞGÖRÜ",
    clue: "Farklılıklara ve hatalara anlayışla yaklaşmak.",
    wisdom: "Hoşgörülü olmak toplumsal barışın temel taşıdır."
  },
  {
    id: "fw_ahlak_78",
    category: "Ahlak",
    word: "TEŞEKKÜR",
    clue: "Yapılan iyiliğe karşı şükran bildirmek.",
    wisdom: "Teşekkür etmek kadirşinaslığın ve ahlakın gereğidir."
  },
  {
    id: "fw_ahlak_79",
    category: "Ahlak",
    word: "SİLA",
    clue: "Akrabaları ziyaret edip arayıp sormak.",
    wisdom: "Sıla-i rahim yapmak ömrü uzatır ve rızkı genişletir."
  },
  {
    id: "fw_ahlak_80",
    category: "Ahlak",
    word: "DÜRÜST",
    clue: "Yalana ve hileye başvurmayan dürüst şahsiyet.",
    wisdom: "Dürüstlük müminin en büyük ziynetidir."
  },
  {
    id: "fw_ahlak_81",
    category: "Ahlak",
    word: "ALÇAK",
    clue: "Kibirlenmeyip alçakgönüllü olmak (Alçakgönüllülük).",
    wisdom: "Alçakgönüllü olanı Allah yüceltir ve sevilmesini sağlar."
  },
  {
    id: "fw_ahlak_82",
    category: "Ahlak",
    word: "CÖMERT",
    clue: "Paylaşımcı ve ikram sahibi yardımsever.",
    wisdom: "Cömert insan Allah'ın dostudur."
  },
  {
    id: "fw_ahlak_83",
    category: "Ahlak",
    word: "MERHAMET",
    clue: "Tüm canlılara şefkat göstermek.",
    wisdom: "Merhamet etmeyene merhamet edilmez."
  },
  {
    id: "fw_ahlak_84",
    category: "Ahlak",
    word: "SABİR",
    clue: "Zorluklara tevekkülle katlanmak.",
    wisdom: "Sabreden mümin mükafatını hesapsız alır."
  },
  {
    id: "fw_ahlak_85",
    category: "Ahlak",
    word: "GÜVEN",
    clue: "Emniyet duygusu, dürüstlük ve sözünde durmak.",
    wisdom: "Güvenilir olmak şahsiyetin temelidir."
  },
  {
    id: "fw_siyer_1",
    category: "Siyer",
    word: "HİCRET",
    clue: "Müslümanların Mekke'den Medine'ye inançları uğruna göç etmesi.",
    wisdom: "Hicret 622 yılında yapılmış ve İslam devletinin temellerini atmıştır."
  },
  {
    id: "fw_siyer_2",
    category: "Siyer",
    word: "ENSAR",
    clue: "Hicretle gelen Muhacirlere yardım eden Medineli Müslümanlar.",
    wisdom: "Ensar kelime anlamı olarak yardım edenler demektir."
  },
  {
    id: "fw_siyer_3",
    category: "Siyer",
    word: "MUHACİR",
    clue: "İnançları uğruna Mekke'deki evlerini bırakıp göç eden Müslümanlar.",
    wisdom: "Muhacirler inançları için her şeylerinden vazgeçen kahramanlardır."
  },
  {
    id: "fw_siyer_4",
    category: "Siyer",
    word: "VAHİY",
    clue: "Allah'ın mesajlarını Cebrail aracılığıyla peygamberimize indirmesi.",
    wisdom: "İlk vahiy Hira mağarasında Alak Suresi'nin ilk beş ayetiyle başlamıştır."
  },
  {
    id: "fw_siyer_5",
    category: "Siyer",
    word: "HİRA",
    clue: "Peygamberimize ilk vahyin indirildiği Nur Dağı'ndaki mağara.",
    wisdom: "Hira Mağarası peygamberimizin peygamberlik öncesi inzivaya çekildiği yerdir."
  },
  {
    id: "fw_siyer_6",
    category: "Siyer",
    word: "BEDİR",
    clue: "Müşriklerle Müslümanlar arasında yapılan ilk büyük savaş.",
    wisdom: "624 yılındaki Bedir Savaşı'nı sayıca az olan Müslümanlar kazanmıştır."
  },
  {
    id: "fw_siyer_7",
    category: "Siyer",
    word: "UHUD",
    clue: "Okçular tepesinin terk edilmesiyle Müslümanların zor anlar yaşadığı savaş.",
    wisdom: "625 yılındaki Uhud Savaşı'nda Peygamberimizin amcası Hz. Hamza şehit olmuştur."
  },
  {
    id: "fw_siyer_8",
    category: "Siyer",
    word: "HENDEK",
    clue: "Medine'nin etrafına büyük çukurlar kazılarak yapılan savunma savaşı.",
    wisdom: "Hendek kazma fikrini Selman-ı Farisi vermiş ve savunmada başarı sağlanmıştır."
  },
  {
    id: "fw_siyer_9",
    category: "Siyer",
    word: "KUBA",
    clue: "Hicret esnasında duraklanan ve ilk mescidin inşa edildiği köy.",
    wisdom: "Kuba Mescidi İslam tarihinde inşa edilen ilk mescit binasıdır."
  },
  {
    id: "fw_siyer_10",
    category: "Siyer",
    word: "MEKKE",
    clue: "Peygamberimizin doğduğu ve Kabe'nin bulunduğu kutsal şehir.",
    wisdom: "Mekke, vahyin başladığı ve Müslümanların kutsal merkezidir."
  },
  {
    id: "fw_siyer_11",
    category: "Siyer",
    word: "MEDİNE",
    clue: "Hicret yurdu olan, Peygamberimizin kabrinin bulunduğu şehir.",
    wisdom: "Medine, hicretten sonra İslam medeniyetinin başkenti olmuştur."
  },
  {
    id: "fw_siyer_12",
    category: "Siyer",
    word: "TAİF",
    clue: "Peygamberimizin İslam'ı tebliğ etmek için gidip taşlandığı komşu şehir.",
    wisdom: "Taifliler peygamberimizi taşlamış ama o onlar için hidayet duası etmiştir."
  },
  {
    id: "fw_siyer_13",
    category: "Siyer",
    word: "AKABE",
    clue: "Medinelilerin peygamberimize bağlılık sözü verdiği Mekke yakınındaki yer.",
    wisdom: "Akabe biatları Medine Hicreti'nin kapısını aralayan sözleşmelerdir."
  },
  {
    id: "fw_siyer_14",
    category: "Siyer",
    word: "BİAT",
    clue: "Peygamberimize veya yöneticiye bağlılık ve itaat sözü vermek.",
    wisdom: "Biat etmek birlik ve beraberliği koruma kararlılığını gösterir."
  },
  {
    id: "fw_siyer_15",
    category: "Siyer",
    word: "FATİMA",
    clue: "Peygamberimizin soyunu devam ettiren, en sevgili kızı.",
    wisdom: "Hz. Fatıma (r.a.) cennet kadınlarının efendisi olarak müjdelenmiştir."
  },
  {
    id: "fw_siyer_16",
    category: "Siyer",
    word: "HAMZA",
    clue: "Peygamberimizin Uhud'da şehit olan yiğit amcası.",
    wisdom: "Hz. Hamza (r.a.) 'Şehitlerin Efendisi' lakabıyla anılan büyük kahramandır."
  },
  {
    id: "fw_siyer_17",
    category: "Siyer",
    word: "ABBAS",
    clue: "Peygamberimizin amcalarından biri, Mekke'nin fethinde Müslüman olan sahabi.",
    wisdom: "Hz. Abbas soyu daha sonra büyük bir İslam devleti kurmuştur."
  },
  {
    id: "fw_siyer_18",
    category: "Siyer",
    word: "SUFFE",
    clue: "Mescid-i Nebevi'nin yanındaki gölgelik eğitim alanı.",
    wisdom: "Suffe'de barınan sahabiler (Ashab-ı Suffe) kendilerini ilme adamışlardır."
  },
  {
    id: "fw_siyer_19",
    category: "Siyer",
    word: "ERKAM",
    clue: "Mekke'de ilk Müslümanların gizlice toplandığı evin sahibi olan sahabi (Darülerkam).",
    wisdom: "Erkam'ın evi İslam'ın ilk gizli tebliğ ve eğitim merkezidir."
  },
  {
    id: "fw_siyer_20",
    category: "Siyer",
    word: "MÜEZZİN",
    clue: "Ezan okuyan sahabi, sesiyle insanları namaza davet eden.",
    wisdom: "Bilal-i Habeşi İslam tarihinin ilk müezzini olarak bilinir."
  },
  {
    id: "fw_siyer_21",
    category: "Siyer",
    word: "BİLAL",
    clue: "İslam'ın ilk müezzini olan Habeşistanlı sadık sahabi.",
    wisdom: "Bilal-i Habeşi kölelikten kurtulup İslam'ın en şerefli seslerinden biri olmuştur."
  },
  {
    id: "fw_siyer_22",
    category: "Siyer",
    word: "KASVA",
    clue: "Peygamber Efendimiz'in hicrette ve Medine'de bindiği meşhur devesi.",
    wisdom: "Mescid-i Nebevi'nin yapılacağı yer Kasva isimli devenin çöktüğü arsadır."
  },
  {
    id: "fw_siyer_23",
    category: "Siyer",
    word: "HALEF",
    clue: "Peygamberimizden sonra İslam toplumuna liderlik eden halifeler (Halef/Halife).",
    wisdom: "Dört Büyük Halife sırasıyla Hz. Ebu Bekir, Hz. Ömer, Hz. Osman ve Hz. Ali'dir."
  },
  {
    id: "fw_siyer_24",
    category: "Siyer",
    word: "HAKEM",
    clue: "Kabileler arasında çıkan anlaşmazlıkları adaletle çözen hakem şahsiyet.",
    wisdom: "Hacerü'l-Esved taşının yerine konulmasında peygamberimiz hakemlik yapmıştır."
  },
  {
    id: "fw_siyer_25",
    category: "Siyer",
    word: "MÜŞRİK",
    clue: "Allah'a ortak koşan, İslam davetine karşı çıkan Mekkeliler.",
    wisdom: "Müşrikler peygamberimizin tevhid davetini engellemek için savaşmışlardır."
  },
  {
    id: "fw_siyer_26",
    category: "Siyer",
    word: "KUREYŞ",
    clue: "Peygamberimizin mensup olduğu, Mekke'nin en büyük ve soylu kabilesi.",
    wisdom: "Kureyş kabilesi ticaretle uğraşır ve Kabe'nin bakımını üstlenirdi."
  },
  {
    id: "fw_siyer_27",
    category: "Siyer",
    word: "ABDULLAH",
    clue: "Peygamber Efendimiz'in doğumundan önce vefat eden babası.",
    wisdom: "Abdullah temiz ahlakıyla bilinen, Kureyş kabilesinin saygın bir gencidir."
  },
  {
    id: "fw_siyer_28",
    category: "Siyer",
    word: "AMİNE",
    clue: "Peygamber Efendimiz Hz. Muhammed'in (s.a.v.) annesi.",
    wisdom: "Amine Hatun peygamberimiz 6 yaşındayken Ebva köyünde vefat etmiştir."
  },
  {
    id: "fw_siyer_29",
    category: "Siyer",
    word: "HALİME",
    clue: "Peygamberimizin çocukluğunda süt emziren süt annesi.",
    wisdom: "Halime Hatun peygamberimizi kendi evlatlarından ayırmayarak büyütmüştür."
  },
  {
    id: "fw_siyer_30",
    category: "Siyer",
    word: "EBUBEKİR",
    clue: "Peygamberimizin en yakın dostu, hicret arkadaşı ve ilk halife.",
    wisdom: "Hz. Ebu Bekir (r.a.) sadakati sebebiyle 'Sıddık' lakabıyla anılmıştır."
  },
  {
    id: "fw_siyer_31",
    category: "Siyer",
    word: "ÖMER",
    clue: "İslam'ın ikinci halifesi, adaletiyle ünlü cesur sahabi.",
    wisdom: "Hz. Ömer (r.a.) mücadelesiyle hak ile batılı ayıran 'Faruk' lakabını almıştır."
  },
  {
    id: "fw_siyer_32",
    category: "Siyer",
    word: "OSMAN",
    clue: "İslam'ın üçüncü halifesi, Kuran'ı çoğaltan haya timsali sahabi.",
    wisdom: "Hz. Osman (r.a.) cömertliği ve yumuşak huyluluğu ile tanınır."
  },
  {
    id: "fw_siyer_33",
    category: "Siyer",
    word: "ALİ",
    clue: "Peygamberimizin damadı, ilmin kapısı ve dördüncü halife.",
    wisdom: "Hz. Ali (r.a.) cesareti, ilmi ve adaletiyle İslam tarihinin zirve şahsiyetidir."
  },
  {
    id: "fw_siyer_34",
    category: "Siyer",
    word: "HATİCE",
    clue: "Peygamberimizin ilk eşi, O'na ilk inanan asil hanımefendi.",
    wisdom: "Hz. Hatice (r.a.) 'Tahire' (temiz) lakabıyla anılan en asil Müslüman kadındır."
  },
  {
    id: "fw_siyer_35",
    category: "Siyer",
    word: "AYŞE",
    clue: "Peygamberimizin eşi, en çok hadis rivayet eden alime sahabi hanım.",
    wisdom: "Hz. Ayşe (r.a.) zekası ve ilmiyle İslam fıkhının gelişmesine büyük katkı sunmuştur."
  },
  {
    id: "fw_siyer_36",
    category: "Siyer",
    word: "ZEYNEP",
    clue: "Peygamber Efendimiz'in en büyük kızı.",
    wisdom: "Hz. Zeynep (r.a.) hicret ederken zorluklar yaşamış sadık bir hanımefendidir."
  },
  {
    id: "fw_siyer_37",
    category: "Siyer",
    word: "RUKİYE",
    clue: "Peygamberimizin kızlarından biri, Hz. Osman'ın eşi.",
    wisdom: "Hz. Rukiye (r.a.) Habeşistan'a ilk hicret eden grupta yer almıştır."
  },
  {
    id: "fw_siyer_38",
    category: "Siyer",
    word: "ÜMMÜGÜLSÜM",
    clue: "Peygamberimizin kızı, Hz. Rukiye vefat edince Hz. Osman ile evlenmiştir.",
    wisdom: "Hz. Osman iki kızıyla evlendiği için 'Zinnureyn' (iki nur sahibi) unvanını almıştır."
  },
  {
    id: "fw_siyer_39",
    category: "Siyer",
    word: "KASİM",
    clue: "Peygamberimizin küçük yaşta vefat eden ilk erkek çocuğu.",
    wisdom: "Peygamberimiz ilk erkek çocuğu olan Kasım sebebiyle 'Ebu'l-Kasım' diye çağrılırdı."
  },
  {
    id: "fw_siyer_40",
    category: "Siyer",
    word: "İBRAHİM",
    clue: "Peygamberimizin Medine'de doğan ve küçük yaşta vefat eden en son oğlu.",
    wisdom: "İbrahim vefat ettiğinde peygamberimiz ağlamış, 'göz yaşarır ama kalp isyan etmez' buyurmuştur."
  },
  {
    id: "fw_siyer_41",
    category: "Siyer",
    word: "MÜTE",
    clue: "Müslümanlar ile Bizans ordusu arasında yapılan ilk savaş (Mute Savaşı).",
    wisdom: "Mute Savaşı'nda Müslüman komutanlar sırasıyla kahramanca şehit düşmüşlerdir."
  },
  {
    id: "fw_siyer_42",
    category: "Siyer",
    word: "HUNEYN",
    clue: "Mekke'nin fethinden sonra kabilelerin pusu kurduğu vadide yapılan savaş.",
    wisdom: "Huneyn Savaşı'nda başlangıçta panik yaşansa da peygamberimizin cesaretiyle zafer kazanılmıştır."
  },
  {
    id: "fw_siyer_43",
    category: "Siyer",
    word: "TEBÜK",
    clue: "Peygamberimizin katıldığı en son askeri sefer (Tebük Seferi).",
    wisdom: "Tebük Seferi çok sıcak bir mevsimde yapıldığı için 'Zorluk Seferi' de denilmiştir."
  },
  {
    id: "fw_siyer_44",
    category: "Siyer",
    word: "HUDEYBİYE",
    clue: "Müşriklerle yapılan ve barış dönemini başlatan tarihi antlaşma.",
    wisdom: "Hudeybiye Antlaşması başlangıçta aleyhte görünse de İslam'ın yayılmasını hızlandırmıştır."
  },
  {
    id: "fw_siyer_45",
    category: "Siyer",
    word: "MEKKE",
    clue: "Müslümanların kan dökmeden fethettiği, putlardan temizlediği kutsal şehir (Mekke'nin Fethi).",
    wisdom: "630 yılındaki fetihle Kabe putlardan temizlenmiş ve genel af ilan edilmiştir."
  },
  {
    id: "fw_siyer_46",
    category: "Siyer",
    word: "VEDA",
    clue: "Peygamberimizin vefatından önce yüz bini aşkın Müslümana yaptığı tarihi konuşma (Veda Hutbesi).",
    wisdom: "Veda Hutbesi evrensel insan hakları beyannamesi niteliğindedir."
  },
  {
    id: "fw_siyer_47",
    category: "Siyer",
    word: "HAYBER",
    clue: "Medine'den çıkarılan Yahudilerin sığındığı ve Hz. Ali'nin fethettiği kale.",
    wisdom: "Hayber'in fethiyle Şam ticaret yolunun güvenliği tamamen sağlanmıştır."
  },
  {
    id: "fw_siyer_48",
    category: "Siyer",
    word: "KİBLETEN",
    clue: "Kıblenin Kabe'ye çevrilmesiyle iki kıbleli mescit olan yapı (Mescid-i Kıbleteyn).",
    wisdom: "Namaz kılınırken gelen vahiy üzerine yön Mescid-i Aksa'dan Kabe'ye çevrilmiştir."
  },
  {
    id: "fw_siyer_49",
    category: "Siyer",
    word: "MİRAÇ",
    clue: "Peygamberimizin Kudüs'e gidişi ve oradan göğe yükselmesi mucizesi.",
    wisdom: "Miraç gecesi Müslümanlara beş vakit namaz hediye edilmiştir."
  },
  {
    id: "fw_siyer_50",
    category: "Siyer",
    word: "İSRA",
    clue: "Peygamberimizin bir gece Mekke'den Kudüs'teki Mescid-i Aksa'ya götürülmesi.",
    wisdom: "İsra (gece yürüyüşü) mucizesi Kur'an-ı Kerim'de açıkça zikredilmektedir."
  },
  {
    id: "fw_siyer_51",
    category: "Siyer",
    word: "DARÜNNEDV",
    clue: "Mekke'de müşrik kabile liderlerinin toplandığı karar ve yönetim binası.",
    wisdom: "Peygamberimize suikast kararı bu Darünnedve binasında alınmıştır."
  },
  {
    id: "fw_siyer_52",
    category: "Siyer",
    word: "SEVR",
    clue: "Hicret yolunda peygamberimiz ile Hz. Ebu Bekir'in saklandığı mağara.",
    wisdom: "Örümcek ve güvercinin yuva yapmasıyla müşrikler bu mağaraya girmekten vazgeçmiştir."
  },
  {
    id: "fw_siyer_53",
    category: "Siyer",
    word: "SÜRAKA",
    clue: "Hicret yolunda peygamberimizi yakalamak isterken atının ayakları kuma batan savaşçı.",
    wisdom: "Süraka pişman olmuş ve daha sonra Müslümanlığı kabul etmiştir."
  },
  {
    id: "fw_siyer_54",
    category: "Siyer",
    word: "RANUNA",
    clue: "Peygamberimizin Medine yolunda ilk Cuma namazını kıldırdığı vadi.",
    wisdom: "Ranuna vadisinde ilk cuma hutbesi okunmuş ve namaz cemaatle kılınmıştır."
  },
  {
    id: "fw_siyer_55",
    category: "Siyer",
    word: "KASVA",
    clue: "Peygamberimizin Medine'ye girerken bindiği devesi.",
    wisdom: "Kasva'nın serbest bırakılması istenmiş, o da Mescid-i Nebevi'nin arsasına çökmüştür."
  },
  {
    id: "fw_siyer_56",
    category: "Siyer",
    word: "EYÜP",
    clue: "Medine'ye hicret edildiğinde peygamberimizi evinde misafir eden sahabi (Ebu Eyyub el-Ensari).",
    wisdom: "Ebu Eyyub el-Ensari hazretleri İstanbul'un fethi kuşatmasında şehit olmuştur."
  },
  {
    id: "fw_siyer_57",
    category: "Siyer",
    word: "MUAHAH",
    clue: "Mekkeli Muhacirler ile Medineli Ensar arasında ilan edilen kardeşlik sözleşmesi.",
    wisdom: "Kardeşlik sözleşmesi sayesinde her Medineli bir Mekkeli aileye evini açmıştır."
  },
  {
    id: "fw_siyer_58",
    category: "Siyer",
    word: "MEDİNE",
    clue: "İslam devletinin anayasası kabul edilen tarihi sözleşme (Medine Vesikası).",
    wisdom: "Medine Vesikası inanç özgürlüğünü ve Medine'nin birlikte savunulmasını güvenceye almıştır."
  },
  {
    id: "fw_siyer_59",
    category: "Siyer",
    word: "DARÜLERKA",
    clue: "Erkam adındaki sahabenin ilk Müslümanların gizlice toplandığı evi.",
    wisdom: "Bu ev İslam tebliğinin ilk eğitim ve istişare merkezidir."
  },
  {
    id: "fw_siyer_60",
    category: "Siyer",
    word: "MUSAB",
    clue: "Medine'ye ilk öğretmen olarak gönderilen genç ve yakışıklı sahabi.",
    wisdom: "Mus'ab bin Umeyr tatlı diliyle Medine'nin çoğunun Müslüman olmasına vesile olmuştur."
  },
  {
    id: "fw_siyer_61",
    category: "Siyer",
    word: "ŞEYMA",
    clue: "Peygamber Efendimiz'in süt kız kardeşi.",
    wisdom: "Şeyma süt annesi Halime'nin kızı olup peygamberimizi çok severdi."
  },
  {
    id: "fw_siyer_62",
    category: "Siyer",
    word: "BAHİRA",
    clue: "Suriye kervan yolunda çocuk yaştaki peygamberimizin peygamber olacağını anlayan rahip.",
    wisdom: "Bahira, amcası Ebu Talib'e bu çocuğu korumasını tavsiye etmiştir."
  },
  {
    id: "fw_siyer_63",
    category: "Siyer",
    word: "HİLFUL",
    clue: "Mekke'de mazlumları korumak için kurulan Erdemliler Birliği (Hılfu'l-Fudûl).",
    wisdom: "Genç yaştaki peygamberimiz de bu birliğe katılmış ve adalet çalışmalarına destek vermiştir."
  },
  {
    id: "fw_siyer_64",
    category: "Siyer",
    word: "FİCAR",
    clue: "Mekke'de kutsal aylarda yapılan ahlak dışı kabile savaşlarının adı.",
    wisdom: "Peygamberimiz gençliğinde bu haksız savaşlara sadece savunma amaçlı katılmıştır."
  },
  {
    id: "fw_siyer_65",
    category: "Siyer",
    word: "EBVA",
    clue: "Peygamberimizin annesi Amine'nin vefat ettiği ve kabrinin bulunduğu köy.",
    wisdom: "Ebva köyü Mekke ile Medine arasında yer alan hüzünlü bir duraktır."
  },
  {
    id: "fw_siyer_66",
    category: "Siyer",
    word: "SÜVEYBE",
    clue: "Peygamberimizi Halime'den önce kısa bir süre emziren ilk süt annesi.",
    wisdom: "Süveybe, amcası Ebu Leheb'in cariyesi olup daha sonra serbest bırakılmıştır."
  },
  {
    id: "fw_siyer_67",
    category: "Siyer",
    word: "HAMZA",
    clue: "Peygamberimizin amcası ve süt kardeşi olan kahraman sahabi.",
    wisdom: "Hz. Hamza ile peygamberimiz aynı zamanda süt kardeşiydiler."
  },
  {
    id: "fw_siyer_68",
    category: "Siyer",
    word: "MÜEZZİN",
    clue: "Camilerde ezan okuyup namaz düzenini sağlayan kişi.",
    wisdom: "Müezzinler, sesleriyle insanları bir araya getiren davetçilerdir."
  },
  {
    id: "fw_siyer_69",
    category: "Siyer",
    word: "KASVA",
    clue: "Peygamberimizin devesinin ismi.",
    wisdom: "Kasva, peygamberimizin tüm önemli yolculuklarında onunla olmuştur."
  },
  {
    id: "fw_siyer_70",
    category: "Siyer",
    word: "ERKAM",
    clue: "Evi İslam'ın ilk okulu olan sahabi.",
    wisdom: "Erkam bin Ebu'l-Erkam İslam'a ilk giren fedakar gençlerden biridir."
  },
  {
    id: "fw_siyer_71",
    category: "Siyer",
    word: "BİLAL",
    clue: "İslamiyetin ilk müezzini olan Habeşistanlı sahabi.",
    wisdom: "Bilal bin Rebah, kızgın kumlara yatırılmasına rağmen inancından dönmemiştir."
  },
  {
    id: "fw_siyer_72",
    category: "Siyer",
    word: "AKABE",
    clue: "Biatların yapıldığı Mekke yakınlarındaki bölge.",
    wisdom: "Akabe biatları İslam'ın yayılmasında dönüm noktasıdır."
  },
  {
    id: "fw_siyer_73",
    category: "Siyer",
    word: "FATİMA",
    clue: "Peygamberimizin en küçük kızı.",
    wisdom: "Hz. Fatıma, Peygamberimizin ahlakını en güzel yansıtan evladıdır."
  },
  {
    id: "fw_siyer_74",
    category: "Siyer",
    word: "HAMZA",
    clue: "Şehitlerin efendisi olarak bilinen peygamber amcası.",
    wisdom: "Hz. Hamza gücü ve cesaretiyle Müslümanlara büyük destek vermiştir."
  },
  {
    id: "fw_siyer_75",
    category: "Siyer",
    word: "ABBAS",
    clue: "Peygamberimizin amcalarından biri.",
    wisdom: "Hz. Abbas, Mekke döneminde gizlice Müslümanlara istihbarat desteği vermiştir."
  },
  {
    id: "fw_siyer_76",
    category: "Siyer",
    word: "SUFFE",
    clue: "Mescidin yanındaki gölgelik eğitim alanı.",
    wisdom: "Suffe, İslam tarihinin ilk yatılı üniversitesi kabul edilebilir."
  },
  {
    id: "fw_siyer_77",
    category: "Siyer",
    word: "HİRA",
    clue: "Vahyin başladığı Hira mağarası.",
    wisdom: "Hira mağarası Cebrail'in ilk oku emrini getirdiği mekandır."
  },
  {
    id: "fw_siyer_78",
    category: "Siyer",
    word: "BEDİR",
    clue: "Müslümanlar ile müşrikler arasındaki ilk savaş.",
    wisdom: "Bedir savaşı hak ile batılın tarihteki ilk büyük karşılaşmasıdır."
  },
  {
    id: "fw_siyer_79",
    category: "Siyer",
    word: "UHUD",
    clue: "Okçuların tepeyi terk etmesiyle bilinen savaş yeri.",
    wisdom: "Uhud dağı Müslümanlar için hem bir hüzün hem de büyük bir ders mekanıdır."
  },
  {
    id: "fw_siyer_80",
    category: "Siyer",
    word: "HENDEK",
    clue: "Selman-ı Farisi'nin hendek kazma fikriyle kazanılan savunma.",
    wisdom: "Hendek savaşı müşriklerin Medine'yi yok etme umutlarını bitirmiştir."
  },
  {
    id: "fw_siyer_81",
    category: "Siyer",
    word: "KUBA",
    clue: "İlk mescidin yapıldığı Medine yakınlarındaki köy.",
    wisdom: "Kuba mescidi takva üzerine kurulan ilk mescittir."
  },
  {
    id: "fw_siyer_82",
    category: "Siyer",
    word: "MEKKE",
    clue: "Kabe'nin bulunduğu peygamberimizin doğduğu şehir.",
    wisdom: "Mekke, şehirlerin anası (Ümmü'l-Kurâ) olarak adlandırılır."
  },
  {
    id: "fw_siyer_83",
    category: "Siyer",
    word: "MEDİNE",
    clue: "Peygamberimizin hicret ettiği ve kabrinin bulunduğu şehir.",
    wisdom: "Medine, nurlanmış şehir (Medine-i Münevvere) olarak bilinir."
  },
  {
    id: "fw_medeniyet_1",
    category: "Medeniyet",
    word: "SİNA",
    clue: "Tıbbın Kanunu kitabını yazan, Batı'da Avicenna denilen tıp dâhisi (İbn-i Sina).",
    wisdom: "İbn-i Sina tıp dışında felsefe, astronomi ve fizik alanında da otoritedir."
  },
  {
    id: "fw_medeniyet_2",
    category: "Medeniyet",
    word: "CEZERİ",
    clue: "Sibernetiğin kurucusu, Diyarbakır'da otomatik makineler yapan mühendis (El-Cezeri).",
    wisdom: "El-Cezeri dişli çarklarla çalışan ilk robotları tasarlamıştır."
  },
  {
    id: "fw_medeniyet_3",
    category: "Medeniyet",
    word: "HAREZMİ",
    clue: "Cebir biliminin kurucusu, sıfır (0) rakamını matematiğe kazandıran deha (El-Harezmi).",
    wisdom: "Algoritma kelimesi Harezmi'nin isminden türetilmiştir."
  },
  {
    id: "fw_medeniyet_4",
    category: "Medeniyet",
    word: "HEYSEM",
    clue: "Modern optik biliminin kurucusu, karanlık odayı keşfeden fizikçi (İbnü'l-Heysem).",
    wisdom: "İbnü'l-Heysem ışığın gözden çıkmadığını, göze yansıdığını kanıtlamıştır."
  },
  {
    id: "fw_medeniyet_5",
    category: "Medeniyet",
    word: "HAYYAN",
    clue: "Kimya biliminin babası, atomun parçalanabileceğini söyleyen alim (Cabir bin Hayyan).",
    wisdom: "Cabir bin Hayyan ilk hassas terazileri kullanarak modern kimyayı kurmuştur."
  },
  {
    id: "fw_medeniyet_6",
    category: "Medeniyet",
    word: "SİNAN",
    clue: "Osmanlı döneminde Süleymaniye ve Selimiye'yi yapan başmimar (Mimar Sinan).",
    wisdom: "Mimar Sinan 99 yıllık ömrüne yüzlerce ölümsüz mimari eser sığdırmıştır."
  },
  {
    id: "fw_medeniyet_7",
    category: "Medeniyet",
    word: "ALPARSLAN",
    clue: "Malazgirt Savaşı'yla Anadolu'nun kapılarını açan Selçuklu Sultanı.",
    wisdom: "Sultan Alparslan adil ve cesur yönetimiyle tarihe damga vurmuştur."
  },
  {
    id: "fw_medeniyet_8",
    category: "Medeniyet",
    word: "FATİH",
    clue: "İstanbul'u fethederek orta çağı kapatıp yeni çağı açan Osmanlı Padişahı.",
    wisdom: "Fatih Sultan Mehmet 6 dil bilen, bilime ve sanata aşık bir entelektüeldir."
  },
  {
    id: "fw_medeniyet_9",
    category: "Medeniyet",
    word: "ULUĞBEY",
    clue: "Semerkand'da rasathane kurup gökyüzü haritaları çizen Türk astronom (Uluğ Bey).",
    wisdom: "Uluğ Bey aynı zamanda bir devlet adamı olup bilimi saraya taşımıştır."
  },
  {
    id: "fw_medeniyet_10",
    category: "Medeniyet",
    word: "ALİKUŞÇU",
    clue: "Uluğ Bey'in öğrencisi olan, Ay'ın haritasını çizen gökbilimci (Ali Kuşçu).",
    wisdom: "Ali Kuşçu Fatih'in davetiyle İstanbul'a gelip matematik dersleri vermiştir."
  },
  {
    id: "fw_medeniyet_11",
    category: "Medeniyet",
    word: "HALDUN",
    clue: "Sosyoloji ve tarih felsefesinin kurucusu sayılan Tunuslu düşünür (İbn-i Haldun).",
    wisdom: "İbn-i Haldun'un Mukaddime eseri toplum biliminin temel kaynağıdır."
  },
  {
    id: "fw_medeniyet_12",
    category: "Medeniyet",
    word: "PİRİREİS",
    clue: "1513 yılında çizdiği dünya haritasıyla ünlü Osmanlı denizcisi (Piri Reis).",
    wisdom: "Piri Reis'in Kitab-ı Bahriye eseri denizcilik tarihinin şaheseridir."
  },
  {
    id: "fw_medeniyet_13",
    category: "Medeniyet",
    word: "EDEBALİ",
    clue: "Osman Gazi'nin hocası, Osmanlı Devleti'nin manevi kurucusu (Şeyh Edebali).",
    wisdom: "Şeyh Edebali'nin 'İnsanı yaşat ki devlet yaşasın' öğüdü meşhurdur."
  },
  {
    id: "fw_medeniyet_14",
    category: "Medeniyet",
    word: "KİTAP",
    clue: "Bilginin nesiller boyu aktarılmasını sağlayan yazılı materyal.",
    wisdom: "İslam medeniyeti kitap ve kütüphane merkezli bir ilim medeniyetidir."
  },
  {
    id: "fw_medeniyet_15",
    category: "Medeniyet",
    word: "KÜTÜPHAN",
    clue: "Kitapların toplandığı, korunduğu ve okunduğu ilim yuvası (Kütüphane).",
    wisdom: "Bağdat'taki Beytülhikme kütüphanesi döneminin en büyük bilim merkezidir."
  },
  {
    id: "fw_medeniyet_16",
    category: "Medeniyet",
    word: "RASATHAN",
    clue: "Gökyüzünü, yıldızları ve gezegenleri incelemek için kurulan gözlemevi (Rasathane).",
    wisdom: "Müslümanlar astronomi çalışmalarını rasathanelerde yürütmüşlerdir."
  },
  {
    id: "fw_medeniyet_17",
    category: "Medeniyet",
    word: "BEYTÜLHİ",
    clue: "Bağdat'ta Abbasi döneminde kurulan bilim ve tercüme merkezi (Beytülhikme).",
    wisdom: "Beytülhikme'de antik Yunanca eserler Arapçaya çevrilerek bilim korunmuştur."
  },
  {
    id: "fw_medeniyet_18",
    category: "Medeniyet",
    word: "NİZAMİYE",
    clue: "Vezir Nizamülmülk tarafından kurulan tarihin ilk büyük medrese üniversitesi.",
    wisdom: "Nizamiye Medreseleri ücretsiz eğitim ve kütüphaneleriyle çığır açmıştır."
  },
  {
    id: "fw_medeniyet_19",
    category: "Medeniyet",
    word: "BİRUNİ",
    clue: "Dünya'nın döndüğünü ve yarıçapını Newton'dan önce hesaplayan dahi (El-Biruni).",
    wisdom: "Biruni coğrafya, matematik ve eczacılık alanında yüzlerce eser vermiştir."
  },
  {
    id: "fw_medeniyet_20",
    category: "Medeniyet",
    word: "RAZİ",
    clue: "Çiçek ve kızamık hastalıklarını ilk kez ayırt eden Müslüman hekim (Ebubekir er-Razi).",
    wisdom: "Razi tıp alanındaki deneysel çalışmalarıyla Avrupa'da 'Rhazes' adıyla anılmıştır."
  },
  {
    id: "fw_medeniyet_21",
    category: "Medeniyet",
    word: "FARABİ",
    clue: "Mantık ve felsefe alanındaki derinliğiyle Muallim-i Sani unvanını alan filozof.",
    wisdom: "Farabi müzik teorileri geliştirmiş ve Kanun adlı müzik aletini icat etmiştir."
  },
  {
    id: "fw_medeniyet_22",
    category: "Medeniyet",
    word: "KİNDİ",
    clue: "İslam dünyasında felsefe akımını başlatan ilk Müslüman filozof (El-Kindi).",
    wisdom: "Kindi kriptoloji (şifreleme) biliminin ilk temel kurallarını yazmıştır."
  },
  {
    id: "fw_medeniyet_23",
    category: "Medeniyet",
    word: "GAZZALİ",
    clue: "İhya-u Ulumiddin eseriyle ünlü, Nizamiye medresesi rektörü büyük alim.",
    wisdom: "İmam Gazzali felsefecilerin tutarsızlıklarını eleştirerek teolojiyi savunmuştur."
  },
  {
    id: "fw_medeniyet_24",
    category: "Medeniyet",
    word: "İDRİSİ",
    clue: "Roger'ın Kitabı adıyla bilinen dünya haritasını çizen coğrafyacı (El-İdrisi).",
    wisdom: "İdrisi gümüş bir küre üzerine dünya haritasını kabartma olarak işlemiştir."
  },
  {
    id: "fw_medeniyet_25",
    category: "Medeniyet",
    word: "KÂTİP",
    clue: "Keşfü'z-Zunûn eseriyle ünlü Osmanlı bibliyografya uzmanı (Katip Çelebi).",
    wisdom: "Katip Çelebi coğrafya ve tarih alanında binlerce kitabı tasnif etmiştir."
  },
  {
    id: "fw_medeniyet_26",
    category: "Medeniyet",
    word: "HEZARFEN",
    clue: "Kendi yaptığı kanatlarla Galata'dan Üsküdar'a uçan Osmanlı havacısı.",
    wisdom: "Hezarfen Ahmed Çelebi rüzgar hareketlerini inceleyerek uçuşu başarmıştır."
  },
  {
    id: "fw_medeniyet_27",
    category: "Medeniyet",
    word: "LAGARİ",
    clue: "Barut gücüyle çalışan ilk roketi icat edip uçan Osmanlı mucidi (Lagari Hasan).",
    wisdom: "Lagari Hasan Çelebi padişahın huzurunda roketle havaya yükselip denize inmiştir."
  },
  {
    id: "fw_medeniyet_28",
    category: "Medeniyet",
    word: "ZAHRAVİ",
    clue: "Modern cerrahinin babası sayılan, ameliyat aletlerini icat eden Endülüslü hekim.",
    wisdom: "El-Zahravi 'Et-Tasrif' kitabında yüzlerce cerrahi aleti resmetmiştir."
  },
  {
    id: "fw_medeniyet_29",
    category: "Medeniyet",
    word: "BATTUT",
    clue: "117 bin kilometre gezerek seyahatname yazan ünlü Faslı gezgin (İbn-i Battuta).",
    wisdom: "İbn-i Battuta orta çağın en büyük seyyahı kabul edilir."
  },
  {
    id: "fw_medeniyet_30",
    category: "Medeniyet",
    word: "RÜŞD",
    clue: "Aristo felsefesini Avrupa'ya tanıtan Endülüslü büyük filozof (İbn-i Rüşd).",
    wisdom: "İbn-i Rüşd akıl ile nakil (din) arasındaki uyumu savunmuştur."
  },
  {
    id: "fw_medeniyet_31",
    category: "Medeniyet",
    word: "BATANİ",
    clue: "Trigonometri bilimini geliştiren, sinüs ve kosinüs kavramlarını kullanan matematikçi.",
    wisdom: "El-Battani gökyüzü gözlemleriyle güneş yılını hassas şekilde hesaplamıştır."
  },
  {
    id: "fw_medeniyet_32",
    category: "Medeniyet",
    word: "ŞERİF",
    clue: "İlk coğrafya atlasını hazırlayan ünlü Müslüman coğrafyacı (Şerif el-İdrisi).",
    wisdom: "İdrisi'nin haritası yüzyıllarca denizciler tarafından rehber alınmıştır."
  },
  {
    id: "fw_medeniyet_33",
    category: "Medeniyet",
    word: "SABUNCU",
    clue: "Amasya darüşşifasında çalışan, ameliyat yöntemlerini çizimli anlatan cerrah.",
    wisdom: "Sabuncuoğlu Şerefeddin tıp kitaplarında Türkçe dili kullanmıştır."
  },
  {
    id: "fw_medeniyet_34",
    category: "Medeniyet",
    word: "MEDRESE",
    clue: "İslam medeniyetinde yüksek din ve fen bilimlerinin öğretildiği okul binası.",
    wisdom: "Medreseler bilim ve ahlakın birlikte öğretildiği yükseköğretim kurumlarıdır."
  },
  {
    id: "fw_medeniyet_35",
    category: "Medeniyet",
    word: "DARÜŞŞİF",
    clue: "İslam dünyasında hastaların müzik ve su sesiyle tedavi edildiği hastane (Darüşşifa).",
    wisdom: "Darüşşifalar vakıf sistemiyle çalışır ve hastalardan ücret almazdı."
  },
  {
    id: "fw_medeniyet_36",
    category: "Medeniyet",
    word: "BİMARİST",
    clue: "Selçuklu ve Abbasilerde ruhsal ve bedensel hastalıkların tedavi edildiği hastane.",
    wisdom: "Bimaristanlar temizliği ve şefkatli tedavi yöntemleriyle bilinirdi."
  },
  {
    id: "fw_medeniyet_37",
    category: "Medeniyet",
    word: "VAKİF",
    clue: "Malını Allah rızası için toplum yararına süresiz bağışlama sistemi.",
    wisdom: "Vakıflar sayesinde hastaneler, çeşmeler ve medreseler yüzyıllarca ücretsiz hizmet vermiştir."
  },
  {
    id: "fw_medeniyet_38",
    category: "Medeniyet",
    word: "SEBİL",
    clue: "Yolcuların ve halkın ücretsiz içmesi için yapılan hayrat su çeşmesi.",
    wisdom: "Sebiller İslam medeniyetinin insana ve çevreye verdiği değerin mimari yansımasıdır."
  },
  {
    id: "fw_medeniyet_39",
    category: "Medeniyet",
    word: "KÜLLİYE",
    clue: "Cami merkezli olarak okul, kütüphane ve hastanenin bir arada bulunduğu yapılar topluluğu.",
    wisdom: "Külliyeler şehirlerin sosyal ve kültürel yaşam merkezleridir."
  },
  {
    id: "fw_medeniyet_40",
    category: "Medeniyet",
    word: "ŞADİRVAN",
    clue: "Camilerin avlusunda bulunan, abdest almak için yapılan kubbeli su çeşmesi.",
    wisdom: "Şadırvanlar estetik su akış tasarımlarıyla bahçeleri süsler."
  },
  {
    id: "fw_medeniyet_41",
    category: "Medeniyet",
    word: "MİHRAP",
    clue: "Camide imamın namaz kıldırırken durduğu yön gösteren girintili yer.",
    wisdom: "Mihrap, namaz kılan cemaate Kabe yönünü tam olarak işaret eder."
  },
  {
    id: "fw_medeniyet_42",
    category: "Medeniyet",
    word: "MİNBER",
    clue: "Camilerde hutbe okumak için çıkılan merdivenli yüksek kürsü.",
    wisdom: "Minber, cemaatin hatibi rahatça duyması ve görmesi için tasarlanmıştır."
  },
  {
    id: "fw_medeniyet_43",
    category: "Medeniyet",
    word: "ŞEREFE",
    clue: "Minarelerde müezzinin çıkıp ezan okuduğu balkon şeklindeki bölüm.",
    wisdom: "Eski dönemlerde müezzinler şerefeye merdivenle tıklar, oradan ezan okurlardı."
  },
  {
    id: "fw_medeniyet_44",
    category: "Medeniyet",
    word: "MİNARE",
    clue: "Camilerin ezan okunan ve uzaktan fark edilmesini sağlayan yüksek ince kuleleri.",
    wisdom: "Minareler İslam medeniyetinin mimari sembolü ve estetik abideleridir."
  },
  {
    id: "fw_medeniyet_45",
    category: "Medeniyet",
    word: "KÜRSÜ",
    clue: "Camilerde vaizlerin cemaate vaaz edip ders anlattığı yüksek oturma yeri.",
    wisdom: "Kürsüde cemaate dini nasihatler verilir, bilgilendirme yapılır."
  },
  {
    id: "fw_medeniyet_46",
    category: "Medeniyet",
    word: "KUBBE",
    clue: "Cami ve türbelerin üzerini örten yarım küre şeklindeki tavan yapısı.",
    wisdom: "Kubbeler gökyüzünün sonsuzluğunu simgeleyen geniş mimari örtülerdir."
  },
  {
    id: "fw_medeniyet_47",
    category: "Medeniyet",
    word: "KEMER",
    clue: "Mimaride iki sütun arasındaki yükü taşımak için yapılan kavisli yapı.",
    wisdom: "Kemerler İslam mimarisinde estetik geçişler sağlamak için sıkça kullanılmıştır."
  },
  {
    id: "fw_medeniyet_48",
    category: "Medeniyet",
    word: "ÇİNİ",
    clue: "Pişmiş toprak üzerine renkli nakışlar çizilerek yapılan seramik süsleme.",
    wisdom: "Mavi beyaz Osmanlı çinileri cami duvarlarını bahar bahçelerine çevirir."
  },
  {
    id: "fw_medeniyet_49",
    category: "Medeniyet",
    word: "EBRU",
    clue: "Su üzerine damlatılan boyaların kağıda aktarılmasıyla yapılan süsleme sanatı.",
    wisdom: "Ebru sanatı sabır ve estetiğin su üzerindeki dansıdır."
  },
  {
    id: "fw_medeniyet_50",
    category: "Medeniyet",
    word: "MOZAİK",
    clue: "Renkli taş veya cam parçalarının yan yana getirilmesiyle yapılan resim.",
    wisdom: "İslam sanatında geometrik mozaikler sarayları ve zeminleri süsler."
  },
  {
    id: "fw_medeniyet_51",
    category: "Medeniyet",
    word: "MİNYATÜR",
    clue: "Kitap sayfalarını süsleyen, derinliği olmayan küçük renkli resim sanatı.",
    wisdom: "Minyatürler tarihi olayları ve günlük yaşamı belgeleyen görsel kaynaklardır."
  },
  {
    id: "fw_medeniyet_52",
    category: "Medeniyet",
    word: "KİTAP",
    clue: "Bilginin nesiller boyu aktarılmasını sağlayan yazılı materyal.",
    wisdom: "İslam medeniyeti kitap ve kütüphane merkezli bir ilim medeniyetidir."
  },
  {
    id: "fw_medeniyet_53",
    category: "Medeniyet",
    word: "TEZHİP",
    clue: "Kutsal kitapları ve yazıları altın tozu kullanarak süsleme sanatı.",
    wisdom: "Tezhip, hat sanatıyla yazılan Kur'an sayfalarını süsleyen köklü bir medeniyet sanatıdır."
  },
  {
    id: "fw_medeniyet_54",
    category: "Medeniyet",
    word: "HAT",
    clue: "Arap harfleriyle estetik ve şık yazılar yazma sanatı.",
    wisdom: "Hat sanatı (Hüsn-i Hat), camileri ve levhaları süsleyen en asil İslam sanatlarındandır."
  },
  {
    id: "fw_medeniyet_55",
    category: "Medeniyet",
    word: "HATTAT",
    clue: "Hat sanatını profesyonelce icra eden, güzel yazı ustası.",
    wisdom: "Hattatlar, ömürlerini Kur'an harflerine estetik formlar kazandırmaya adarlar."
  },
  {
    id: "fw_medeniyet_56",
    category: "Medeniyet",
    word: "NURUOSMA",
    clue: "İstanbul'da inşa edilen ilk barok tarzı Osmanlı camisi (Nuruosmaniye).",
    wisdom: "Nuruosmaniye Camii ışık geçiren geniş pencereleri ve kubbesiyle ünlüdür."
  },
  {
    id: "fw_medeniyet_57",
    category: "Medeniyet",
    word: "SÜLEYMAN",
    clue: "Mimar Sinan'ın kalfalık eseri olan, İstanbul'daki muhteşem cami (Süleymaniye).",
    wisdom: "Süleymaniye Camii akustiği ve depreme dayanıklı temelleriyle mimarlık harikasıdır."
  },
  {
    id: "fw_medeniyet_58",
    category: "Medeniyet",
    word: "SELİMİY",
    clue: "Mimar Sinan'ın ustalık eserim dediği Edirne'deki dünya mirası cami (Selimiye).",
    wisdom: "Selimiye Camii tek kubbe altındaki geniş iç hacmiyle zirvedir."
  },
  {
    id: "fw_medeniyet_59",
    category: "Medeniyet",
    word: "SULTANAH",
    clue: "Avrupalıların Mavi Cami dediği, 6 minareli tarihi İstanbul camisi (Sultanahmet).",
    wisdom: "Sultanahmet Camii içindeki binlerce mavi çinisi sebebiyle bu ismi almıştır."
  },
  {
    id: "fw_medeniyet_60",
    category: "Medeniyet",
    word: "ORTAKÖY",
    clue: "Boğaz kıyısında bulunan, barok tarzı zarif Osmanlı camisi (Ortaköy Camii).",
    wisdom: "Ortaköy Camii deniz üzerindeki zarif siluetiyle İstanbul'un sembollerindendir."
  },
  {
    id: "fw_medeniyet_61",
    category: "Medeniyet",
    word: "DİVRİĞİ",
    clue: "Sivas'ta bulunan, taş işçiliğiyle ünlü UNESCO mirası cami ve şifahane.",
    wisdom: "Divriği Ulu Camii kapılarındaki gölge siluetleriyle dahi bir tasarımdır."
  },
  {
    id: "fw_medeniyet_62",
    category: "Medeniyet",
    word: "YEŞİL",
    clue: "Bursa'da bulunan, muhteşem çini süslemeleriyle ünlü tarihi cami (Yeşil Camii).",
    wisdom: "Yeşil Camii çinileri ve mermer işçiliğiyle Erken Osmanlı sanatının en güzel örneğidir."
  },
  {
    id: "fw_medeniyet_63",
    category: "Medeniyet",
    word: "ULU",
    clue: "Bursa'da bulunan, 20 kubbeli ve içindeki şadırvanıyla ünlü tarihi ulu cami.",
    wisdom: "Bursa Ulu Camii duvarlarındaki devasa hat levhalarıyla hat müzesi gibidir."
  },
  {
    id: "fw_medeniyet_64",
    category: "Medeniyet",
    word: "KASR",
    clue: "Saray veya köşk anlamına gelen tarihi küçük saray yapısı.",
    wisdom: "İslam coğrafyasındaki çöller üzerine kurulu av köşkleri mimari zenginliktir."
  },
  {
    id: "fw_medeniyet_65",
    category: "Medeniyet",
    word: "KALE",
    clue: "Şehirleri savunmak için yapılan kalın taş duvarlı askeri yapılar.",
    wisdom: "Kuzey Afrika ve Anadolu kaleleri savunma mimarisinin başyapıtlarıdır."
  },
  {
    id: "fw_medeniyet_66",
    category: "Medeniyet",
    word: "BURÇ",
    clue: "Kule veya kalelerin üzerindeki gözetleme ve savunma çıkıntıları.",
    wisdom: "Burçlar askeri nöbetçilerin şehri uzaktan izlemesini sağlardı."
  },
  {
    id: "fw_medeniyet_67",
    category: "Medeniyet",
    word: "SUR",
    clue: "Şehirlerin etrafını saran yüksek ve kalın savunma duvarları.",
    wisdom: "Diyarbakır ve İstanbul surları binlerce yıllık savunma anıtlarıdır."
  },
  {
    id: "fw_medeniyet_68",
    category: "Medeniyet",
    word: "KÖPRÜ",
    clue: "Nehirlerin üzerinden geçişi sağlayan kemerli taş yapılar.",
    wisdom: "Mostar Köprüsü Selçuklu ve Osmanlı estetiğinin Balkanlar'daki mührüdür."
  },
  {
    id: "fw_medeniyet_69",
    category: "Medeniyet",
    word: "KAYSERİ",
    clue: "Gevher Nesibe Hatun adına yapılan ilk tıp okulu ve şifahane (Kayseri Darüşşifası).",
    wisdom: "Kayseri Gevher Nesibe Şifahanesi tıp eğitimiyle hastanenin bir arada olduğu ilk merkezdir."
  },
  {
    id: "fw_medeniyet_70",
    category: "Medeniyet",
    word: "AMASYA",
    clue: "Ruh hastalarının müzikle tedavi edildiği Sabuncuoğlu darüşşifası (Amasya Şifahanesi).",
    wisdom: "Amasya Darüşşifası bugün tıp tarihi müzesi olarak hizmet vermektedir."
  },
  {
    id: "fw_medeniyet_71",
    category: "Medeniyet",
    word: "DARÜLFÜ",
    clue: "Osmanlı'nın son döneminde kurulan modern üniversitenin adı (Darülfünun).",
    wisdom: "Darülfünun bugünkü İstanbul Üniversitesi'nin temelini oluşturur."
  },
  {
    id: "fw_medeniyet_72",
    category: "Medeniyet",
    word: "NİZAMÜL",
    clue: "Siyasetname kitabını yazan, Nizamiye medreselerinin kurucusu Selçuklu Veziri.",
    wisdom: "Nizamülmülk devlet yönetimi ve eğitim alanında çığır açan kararlar almıştır."
  },
  {
    id: "fw_medeniyet_73",
    category: "Medeniyet",
    word: "KAŞGARL",
    clue: "Divanü Lügati't-Türk adlı ilk Türkçe sözlüğü yazan Karahanlı alimi (Kaşgarlı Mahmud).",
    wisdom: "Kaşgarlı Mahmud Türk dilinin zenginliğini Araplara öğretmek için bu eseri yazmıştır."
  },
  {
    id: "fw_medeniyet_74",
    category: "Medeniyet",
    word: "YUSUF",
    clue: "Kutadgu Bilig (Mutluluk Veren Bilgi) eserini yazan Balasagunlu yazar.",
    wisdom: "Yusuf Has Hacib devlet yönetimi ve ahlak konularını şiirsel dille anlatmıştır."
  },
  {
    id: "fw_medeniyet_75",
    category: "Medeniyet",
    word: "AHMET",
    clue: "Divan-ı Hikmet adlı tasavvufi şiir kitabını yazan Türkistanlı pir (Ahmet Yesevi).",
    wisdom: "Hoca Ahmet Yesevi Anadolu'nun Müslümanlaşmasını sağlayan alperenleri yetiştirmiştir."
  },
  {
    id: "fw_medeniyet_76",
    category: "Medeniyet",
    word: "YUNUS",
    clue: "Türkçe şiirleriyle insan sevgisini ve ilahi aşkı anlatan halk şairi (Yunus Emre).",
    wisdom: "Yunus Emre 'Yaratılanı severiz Yaratan'dan ötürü' felsefesinin sözcüsüdür."
  },
  {
    id: "fw_medeniyet_77",
    category: "Medeniyet",
    word: "MEVLANA",
    clue: "Mesnevi adlı ünlü eseri yazan, tasavvuf düşünürü ve hümanist alim.",
    wisdom: "Celaleddin Rumi Mevlana Konya'da yaşamış ve tüm dünyayı sevgiyle kucaklamıştır."
  },
  {
    id: "fw_medeniyet_78",
    category: "Medeniyet",
    word: "HACİBAY",
    clue: "Ankara'da yaşayan, tasavvuf ve tarım çalışmalarını birlikte yürüten veli zat.",
    wisdom: "Hacı Bayram-ı Veli esnafı ve halkı ahlaki değerlerle bir araya getirmiştir."
  },
  {
    id: "fw_medeniyet_79",
    category: "Medeniyet",
    word: "SOMUNCU",
    clue: "Bursa Ulu Camii'nin açılışında ilk hutbeyi okuyan mütevazı veli zat.",
    wisdom: "Somuncu Baba fırınında pişirdiği ekmekleri halkla paylaşan ahlak abidesidir."
  },
  {
    id: "fw_medeniyet_80",
    category: "Medeniyet",
    word: "HACİBEK",
    clue: "Anadolu'nun manevi mimarlarından olan, Makalat kitabını yazan pir.",
    wisdom: "Hacı Bektaş-ı Veli 'Bir olalım, iri olalım, diri olalım' diyerek birliği savunmuştur."
  },
  {
    id: "fw_genelkültür_1",
    category: "Genel Kültür",
    word: "JÜPİTER",
    clue: "Güneş sistemindeki en büyük dev gaz gezegeni.",
    wisdom: "Jüpiter, içine yaklaşık 1300 adet Dünya sığabilecek büyüklüktedir."
  },
  {
    id: "fw_genelkültür_2",
    category: "Genel Kültür",
    word: "EVEREST",
    clue: "Dünya'nın deniz seviyesinden en yüksek dağ zirvesi.",
    wisdom: "Everest zirvesi Himalayalar sıradağında bulunur ve yüksekliği 8848 metredir."
  },
  {
    id: "fw_genelkültür_3",
    category: "Genel Kültür",
    word: "MEHMET",
    clue: "İstiklal Marşı'mızın yazarı olan İstiklal Şairimiz (Mehmet Akif Ersoy).",
    wisdom: "Mehmet Akif Ersoy marşımızı kahraman Türk ordusuna ithaf etmiştir."
  },
  {
    id: "fw_genelkültür_4",
    category: "Genel Kültür",
    word: "SU",
    clue: "Yaşamın temel sıvısı olan iki hidrojen bir oksijenden oluşan molekül.",
    wisdom: "Dünya yüzeyinin yaklaşık yüzde 70'i sularla kaplıdır."
  },
  {
    id: "fw_genelkültür_5",
    category: "Genel Kültür",
    word: "ATATÜRK",
    clue: "Türkiye Cumhuriyeti'nin kurucusu ve ilk Cumhurbaşkanı.",
    wisdom: "Gazi Mustafa Kemal Atatürk bilime ve modern eğitime büyük önem vermiştir."
  },
  {
    id: "fw_genelkültür_6",
    category: "Genel Kültür",
    word: "MARİANA",
    clue: "Dünya'nın okyanustaki en derin noktası (Mariana Çukuru).",
    wisdom: "Mariana Çukuru Büyük Okyanus'ta yer alır ve derinliği yaklaşık 11 bin metredir."
  },
  {
    id: "fw_genelkültür_7",
    category: "Genel Kültür",
    word: "GÜNEŞ",
    clue: "Dünya'mızı aydınlatan ve ısıtan en yakın orta boy yıldız.",
    wisdom: "Güneş olmasaydı yeryüzünde hiçbir canlı yaşamı var olamazdı."
  },
  {
    id: "fw_genelkültür_8",
    category: "Genel Kültür",
    word: "VAN",
    clue: "Türkiye'nin yüzölçümü bakımından en büyük sodalı gölü (Van Gölü).",
    wisdom: "Van Gölü içinde sadece inci kefali adı verilen özel bir balık türü yaşar."
  },
  {
    id: "fw_genelkültür_9",
    category: "Genel Kültür",
    word: "NEWTON",
    clue: "Yer çekimi kanununu sistemli formüle eden İngiliz fizikçi.",
    wisdom: "Newton kütle çekimini ve hareket yasalarını matematiksel olarak açıklamıştır."
  },
  {
    id: "fw_genelkültür_10",
    category: "Genel Kültür",
    word: "ALYUVAR",
    clue: "Kana kırmızı rengini veren, oksijen taşıyan kan hücreleri.",
    wisdom: "Alyuvarlar akciğerden aldıkları oksijeni tüm vücut organlarına iletirler."
  },
  {
    id: "fw_genelkültür_11",
    category: "Genel Kültür",
    word: "AFRİKA",
    clue: "Yeryüzünde en çok bağımsız ülkeye sahip olan dev kıta.",
    wisdom: "Afrika kıtasında zengin madenler bulunmasına rağmen yoksulluk hâlâ yüksektir."
  },
  {
    id: "fw_genelkültür_12",
    category: "Genel Kültür",
    word: "AZOT",
    clue: "Atmosferde en yüksek oranda bulunan renksiz gaz (%78 oranında).",
    wisdom: "Soluduğumuz havanın büyük çoğunluğunu azot gazı oluşturur."
  },
  {
    id: "fw_genelkültür_13",
    category: "Genel Kültür",
    word: "BABİL",
    clue: "Asılı bahçeleriyle ünlü Mezopotamya uygarlığı.",
    wisdom: "Babil kralı Hammurabi tarihin ilk yazılı kanunlarını hazırlatmıştır."
  },
  {
    id: "fw_genelkültür_14",
    category: "Genel Kültür",
    word: "MİKROSK",
    clue: "Gözle görülmeyen bakterileri büyüterek gösteren alet (Mikroskop).",
    wisdom: "Mikroskop sayesinde biyoloji ve tıp bilimleri devasa ilerleme kaydetmiştir."
  },
  {
    id: "fw_genelkültür_15",
    category: "Genel Kültür",
    word: "ÜÇGEN",
    clue: "İç açılarının toplamı her zaman 180 derece olan geometrik şekil.",
    wisdom: "Üçgen, mimari yapılarda en dayanıklı taşıyıcı formlardan biridir."
  },
  {
    id: "fw_genelkültür_16",
    category: "Genel Kültür",
    word: "ANKARA",
    clue: "Türkiye Cumhuriyeti'nin başkenti olan İç Anadolu ilimiz.",
    wisdom: "Ankara Milli Mücadele'nin karargahı olmuş ve 1923'te başkent yapılmıştır."
  },
  {
    id: "fw_genelkültür_17",
    category: "Genel Kültür",
    word: "DİŞMİNE",
    clue: "Vücudumuzdaki en sert doku olan, dişleri koruyan dış tabaka.",
    wisdom: "Diş minesi yüksek kalsiyum oranıyla kemikten bile daha sert bir yapıya sahiptir."
  },
  {
    id: "fw_genelkültür_18",
    category: "Genel Kültür",
    word: "KİRMİZİ",
    clue: "Pusula iğnesinin kuzey yönünü gösteren boyalı ucu.",
    wisdom: "Pusula iğnesi dünyanın manyetik alanı doğrultusunda kuzeye yönelir."
  },
  {
    id: "fw_genelkültür_19",
    category: "Genel Kültür",
    word: "YARİMAD",
    clue: "Üç tarafı denizlerle çevrili, bir tarafı karaya bağlı coğrafi yeryüzü şekli.",
    wisdom: "Ülkemizin bulunduğu Anadolu toprakları büyük bir yarımadadır."
  },
  {
    id: "fw_genelkültür_20",
    category: "Genel Kültür",
    word: "AĞRİ",
    clue: "Türkiye sınırları içindeki en yüksek volkanik dağ zirvesi.",
    wisdom: "Ağrı Dağı 5137 metre yüksekliğiyle Türkiye'nin çatısı kabul edilir."
  },
  {
    id: "fw_genelkültür_21",
    category: "Genel Kültür",
    word: "GÖBEKLİ",
    clue: "Şanlıurfa'da bulunan, insanlık tarihinin bilinen en eski tapınak kalıntıları.",
    wisdom: "Göbeklitepe 12 bin yıllık tarihiyle tarih kitaplarını tamamen değiştirmiştir."
  },
  {
    id: "fw_genelkültür_22",
    category: "Genel Kültür",
    word: "AY",
    clue: "Dünya'mızın tek doğal uydusu olan gök cismi.",
    wisdom: "Ay üzerindeki çekim gücü gelgit olaylarına sebep olur."
  },
  {
    id: "fw_genelkültür_23",
    category: "Genel Kültür",
    word: "BİT",
    clue: "Bilgisayar teknolojisinde verilerin depolandığı en küçük bilgi birimi.",
    wisdom: "Bit, ikili kod sisteminde 0 veya 1 değerlerini alan en temel birimdir."
  },
  {
    id: "fw_genelkültür_24",
    category: "Genel Kültür",
    word: "SANCAR",
    clue: "DNA onarımı çalışmasıyla Nobel Kimya Ödülü alan bilim insanımız (Aziz Sancar).",
    wisdom: "Aziz Sancar 2015 yılında Nobel alarak ülkemizi gururlandırmıştır."
  },
  {
    id: "fw_genelkültür_25",
    category: "Genel Kültür",
    word: "SÜMERLE",
    clue: "Yazıyı icat ederek tarihi çağları başlatan Mezopotamya uygarlığı.",
    wisdom: "Sümerler çivi yazısını kil tabletler üzerine yazarak tarihi başlatmışlardır."
  },
  {
    id: "fw_genelkültür_26",
    category: "Genel Kültür",
    word: "COĞRAF",
    clue: "Yeryüzünü, iklimleri ve insan yerleşimlerini inceleyen bilim dalı (Coğrafya).",
    wisdom: "Coğrafya öğrenmek ülkemizi ve dünyamızı daha iyi tanımamızı sağlar."
  },
  {
    id: "fw_genelkültür_27",
    category: "Genel Kültür",
    word: "TARİH",
    clue: "Geçmişte yaşanmış olayları yer ve zaman göstererek inceleyen bilim dalı.",
    wisdom: "Tarih okumak geçmişten ders çıkarıp geleceği inşa etmeye yarar."
  },
  {
    id: "fw_genelkültür_28",
    category: "Genel Kültür",
    word: "MATEMAT",
    clue: "Sayıları, şekilleri ve ölçümleri inceleyen mantıksal bilim (Matematik).",
    wisdom: "Matematik evrenin gizli dilidir; tüm mühendislikler bu dil üzerine kurulur."
  },
  {
    id: "fw_genelkültür_29",
    category: "Genel Kültür",
    word: "FİZİK",
    clue: "Maddeyi, enerjiyi ve aralarındaki etkileşimleri inceleyen doğa bilimi.",
    wisdom: "Fizik yasaları (yer çekimi, elektromanyetizma) evrenin işleyişini belirler."
  },
  {
    id: "fw_genelkültür_30",
    category: "Genel Kültür",
    word: "KİMYA",
    clue: "Maddelerin yapısını, özelliklerini ve tepkimelerini inceleyen fen bilimi.",
    wisdom: "Kimya sayesinde ilaçlar, plastikler ve yeni malzemeler üretilir."
  },
  {
    id: "fw_genelkültür_31",
    category: "Genel Kültür",
    word: "BİYOLOJ",
    clue: "Canlıları, bitkileri ve hayvanları inceleyen hayat bilimi (Biyoloji).",
    wisdom: "Biyoloji ekolojik dengenin korunması ve sağlık için en önemli bilimlerdendir."
  },
  {
    id: "fw_genelkültür_32",
    category: "Genel Kültür",
    word: "TÜRKİYE",
    clue: "Asya ve Avrupa kıtalarını birbirine bağlayan güzel vatanımız.",
    wisdom: "Türkiye jeopolitik konumu ve tarihi zenginlikleriyle bir köprü ülkedir."
  },
  {
    id: "fw_genelkültür_33",
    category: "Genel Kültür",
    word: "İSTANBU",
    clue: "Asya ve Avrupa'da toprakları olan, iki kıtalı tarihi metropolümüz (İstanbul).",
    wisdom: "İstanbul Bizans ve Osmanlı imparatorluklarına başkentlik yapmıştır."
  },
  {
    id: "fw_genelkültür_34",
    category: "Genel Kültür",
    word: "ATLAS",
    clue: "Haritaların bir araya getirilmesiyle oluşan coğrafya kitabı.",
    wisdom: "Atlaslar dünyadaki denizleri, sınırları ve dağları görsel olarak öğretir."
  },
  {
    id: "fw_genelkültür_35",
    category: "Genel Kültür",
    word: "PUSULA",
    clue: "Manyetik alan yardımıyla yön bulmamızı sağlayan tarihi alet.",
    wisdom: "Pusula Çinliler tarafından icat edilmiş ve denizciliği devrimleştirmiştir."
  },
  {
    id: "fw_genelkültür_36",
    category: "Genel Kültür",
    word: "DÜNYA",
    clue: "Güneş sisteminde üzerinde yaşam olduğu bilinen tek mavi gezegen.",
    wisdom: "Dünya Güneş etrafındaki dönüşünü 365 gün 6 saatte tamamlar."
  },
  {
    id: "fw_genelkültür_37",
    category: "Genel Kültür",
    word: "YİLDİZ",
    clue: "Kendi enerjisini üreten, gökyüzünde parlayan sıcak gaz kütleleri.",
    wisdom: "Yıldızlar milyarlarca yıl yaşar ve ömürleri süpernova ile son bulabilir."
  },
  {
    id: "fw_genelkültür_38",
    category: "Genel Kültür",
    word: "OKYANUS",
    clue: "Kıtaları birbirinden ayıran devasa tuzlu su kütleleri.",
    wisdom: "Yeryüzünde Pasifik, Atlantik ve Hint okyanusu olmak üzere üç büyük okyanus vardır."
  },
  {
    id: "fw_genelkültür_39",
    category: "Genel Kültür",
    word: "DAĞ",
    clue: "Çevresine göre oldukça yüksek ve dik yamaçlı yeryüzü kabartısı.",
    wisdom: "Dağlar yeryüzünün dengesini koruyan ve su kaynaklarını barındıran sütunlardır."
  },
  {
    id: "fw_genelkültür_40",
    category: "Genel Kültür",
    word: "NEHİR",
    clue: "Genellikle denizlere dökülen, tatlı su taşıyan büyük akarsular.",
    wisdom: "Fırat, Dicle ve Kızılırmak ülkemizin en önemli nehirlerindendir."
  },
  {
    id: "fw_genelkültür_41",
    category: "Genel Kültür",
    word: "ORMAN",
    clue: "Çok sayıda ağacın bir arada bulunduğu, oksijen deposu doğal alanlar.",
    wisdom: "Ormanlar dünyanın akciğerleridir ve binlerce canlıya yuva olurlar."
  },
  {
    id: "fw_genelkültür_42",
    category: "Genel Kültür",
    word: "SAĞLİK",
    clue: "Bedenen, ruhen ve sosyal yönden tam bir iyilik hali.",
    wisdom: "Sağlıklı kalmak için dengeli beslenmeli ve spor yapmalıyız."
  },
  {
    id: "fw_genelkültür_43",
    category: "Genel Kültür",
    word: "AKİL",
    clue: "İnsanı diğer canlılardan ayıran düşünme, anlama ve ayırt etme gücü.",
    wisdom: "Akıl, dini sorumluluğun da ilk ve en önemli şartıdır."
  },
  {
    id: "fw_genelkültür_44",
    category: "Genel Kültür",
    word: "ZEKA",
    clue: "Öğrenilenleri kavrama, problem çözme ve adapte olma yeteneği.",
    wisdom: "Zekamızı kitap okuyarak ve zeka oyunları oynayarak geliştirebiliriz."
  },
  {
    id: "fw_genelkültür_45",
    category: "Genel Kültür",
    word: "KALEM",
    clue: "Duygu ve düşünceleri kağıda aktararak kalıcı kılan yazma aracı.",
    wisdom: "Kalem kılıçtan keskindir sözü, bilginin gücünü ifade eder."
  },
  {
    id: "fw_genelkültür_46",
    category: "Genel Kültür",
    word: "BAYRAK",
    clue: "Bir devletin bağımsızlığını simgeleyen renkli kumaş sembol.",
    wisdom: "Al bayrağımız, bağımsızlığımızın ve şehitlerimizin kutsal sembolüdür."
  },
  {
    id: "fw_genelkültür_47",
    category: "Genel Kültür",
    word: "HÜRRİY",
    clue: "Kişinin başkalarına zarar vermeden özgürce yaşayabilmesi (Hürriyet).",
    wisdom: "Hürriyet insan onurunun en temel ve vazgeçilmez şartıdır."
  },
  {
    id: "fw_genelkültür_48",
    category: "Genel Kültür",
    word: "DİL",
    clue: "İnsanlar arasında anlaşmayı sağlayan en gelişmiş iletişim aracı.",
    wisdom: "Dilimiz Türkçeyi korumak ve güzel konuşmak milli bir görevdir."
  },
  {
    id: "fw_genelkültür_49",
    category: "Genel Kültür",
    word: "KÜLTÜR",
    clue: "Bir toplumun tarih boyunca ürettiği maddi ve manevi değerler bütünü.",
    wisdom: "Kültürümüz bizi biz yapan gelenekler, sanatlar ve yaşam tarzıdır."
  },
  {
    id: "fw_genelkültür_50",
    category: "Genel Kültür",
    word: "SANAT",
    clue: "Duyguların, hayallerin estetik bir biçimde ifade edilmesi.",
    wisdom: "Resim, müzik ve mimari İslam sanatının en güzel yansıma alanlarıdır."
  },
  {
    id: "fw_genelkültür_51",
    category: "Genel Kültür",
    word: "MÜZİK",
    clue: "Seslerin belirli bir ritim ve estetikle bir araya getirilmesi sanatı.",
    wisdom: "Müzik ruhun gıdasıdır denilerek insan psikolojisindeki etkisi vurgulanmıştır."
  },
  {
    id: "fw_genelkültür_52",
    category: "Genel Kültür",
    word: "TİYATR",
    clue: "Olayların sahnede oyuncular tarafından canlandırılması sanatı (Tiyatro).",
    wisdom: "Tiyatro insanı insana insanla anlatan canlı bir sanat dalıdır."
  },
  {
    id: "fw_genelkültür_53",
    category: "Genel Kültür",
    word: "SİNEMA",
    clue: "Görüntülerin bant üzerine kaydedilerek ekrana yansıtılması sanatı.",
    wisdom: "Sinema görsel anlatımın ve kitle iletişiminin en güçlü araçlarındandır."
  },
  {
    id: "fw_genelkültür_54",
    category: "Genel Kültür",
    word: "FOTOĞR",
    clue: "Işığın duyarlı yüzeyler üzerine kaydedilmesiyle elde edilen resim (Fotoğraf).",
    wisdom: "Fotoğraf anı dondurarak tarihe görsel bir belge bırakır."
  },
  {
    id: "fw_genelkültür_55",
    category: "Genel Kültür",
    word: "KİTAP",
    clue: "Yazılı veya basılı yaprakların bir araya getirilmiş ciltli hali.",
    wisdom: "Her kitap yeni bir dünyaya açılan penceredir, okumak zihni açar."
  },
  {
    id: "fw_genelkültür_56",
    category: "Genel Kültür",
    word: "ANSİKL",
    clue: "Bilgilerin konularına veya harf sırasına göre derlendiği devasa eserler (Ansiklopedi).",
    wisdom: "Ansiklopediler eski dönemlerde genel bilgi edinmenin en önemli kaynağıydı."
  },
  {
    id: "fw_genelkültür_57",
    category: "Genel Kültür",
    word: "SÖZLÜK",
    clue: "Kelimelerin anlamlarının, yazılışlarının derlendiği başvuru kitabı.",
    wisdom: "Sözlük okumak kelime hazinemizi geliştirmenin en hızlı yoludur."
  },
  {
    id: "fw_genelkültür_58",
    category: "Genel Kültür",
    word: "DENEY",
    clue: "Bilimsel bir gerçeği kanıtlamak için yapılan kontrollü gözlemler.",
    wisdom: "Fen derslerinde yapılan deneyler bilginin kalıcı olmasını sağlar."
  },
  {
    id: "fw_genelkültür_59",
    category: "Genel Kültür",
    word: "TEORİ",
    clue: "Bilimsel olarak kanıtlanmış, olguları açıklayan sistemli kuramlar.",
    wisdom: "Yer çekimi teorisi evrensel hareketleri açıklayan güçlü bir teoridir."
  },
  {
    id: "fw_genelkültür_60",
    category: "Genel Kültür",
    word: "YASA",
    clue: "Her zaman ve her yerde aynı şartlarda değişmeyen bilimsel doğrular.",
    wisdom: "Suyun kaldırma kuvveti fiziksel bir doğa yasasıdır."
  },
  {
    id: "fw_genelkültür_61",
    category: "Genel Kültür",
    word: "İCAT",
    clue: "Daha önce bulunmayan yeni bir şeyi ilk kez yapma, keşif eylemi.",
    wisdom: "Tekerlek ve matbaanın icadı insanlık tarihini tamamen değiştirmiştir."
  },
  {
    id: "fw_genelkültür_62",
    category: "Genel Kültür",
    word: "KEŞİF",
    clue: "Var olan ama bilinmeyen bir yerin veya gerçeğin bulunması.",
    wisdom: "Amerika kıtasının keşfi coğrafya ve dünya tarihini yeniden şekillendirmiştir."
  },
  {
    id: "fw_genelkültür_63",
    category: "Genel Kültür",
    word: "ROBOT",
    clue: "Kendisine verilen program doğrultusunda işleri yapan otomatik makine.",
    wisdom: "Robotlar bugün sanayide, tıpta ve uzay araştırmalarında kullanılmaktadır."
  },
  {
    id: "fw_genelkültür_64",
    category: "Genel Kültür",
    word: "UZAY",
    clue: "Dünya atmosferinin dışında kalan sonsuz boşluk ve gök cisimleri alanı.",
    wisdom: "Uzay araştırmaları evrenin sırlarını çözmemize yardım eder."
  },
  {
    id: "fw_genelkültür_65",
    category: "Genel Kültür",
    word: "ROKET",
    clue: "Tepki gücüyle çalışan, uzaya veya havaya fırlatılan araç.",
    wisdom: "Roket teknolojisi uyduların uzaya fırlatılmasını ve iletişimi sağlar."
  },
  {
    id: "fw_genelkültür_66",
    category: "Genel Kültür",
    word: "UYDU",
    clue: "Gezegenlerin etrafında dönen gök cisimleri veya yapay araçlar.",
    wisdom: "Yapay uydular televizyon, internet ve haritacılık için veri sağlarlar."
  },
  {
    id: "fw_genelkültür_67",
    category: "Genel Kültür",
    word: "TELEFO",
    clue: "Seslerin teller veya elektromanyetik dalgalarla uzaktan iletilmesi (Telefon).",
    wisdom: "Telefonun icadı insanları saniyeler içinde birbirine bağlamıştır."
  },
  {
    id: "fw_genelkültür_68",
    category: "Genel Kültür",
    word: "RADYO",
    clue: "Elektromanyetik dalgalarla seslerin geniş kitlelere yayınlanması.",
    wisdom: "Radyo, eski dönemlerde en önemli haber ve kültür yayma aracıydı."
  },
  {
    id: "fw_genelkültür_69",
    category: "Genel Kültür",
    word: "TELEVİ",
    clue: "Görüntü ve seslerin dalgalar halinde evlerdeki ekranlara taşınması (Televizyon).",
    wisdom: "Televizyon kitle iletişimini ve görsel kültürün yayılmasını sağlamıştır."
  },
  {
    id: "fw_genelkültür_70",
    category: "Genel Kültür",
    word: "BİLGİS",
    clue: "Verileri işleyen, depolayan ve programlanabilen dahi elektronik alet (Bilgisayar).",
    wisdom: "Bilgisayar teknolojisi bugünkü dijital çağın kurucu motorudur."
  },
  {
    id: "fw_genelkültür_71",
    category: "Genel Kültür",
    word: "İNTERN",
    clue: "Dünya çapındaki bilgisayarları birbirine bağlayan devasa ağ (İnternet).",
    wisdom: "İnternet bilgiye ulaşmayı saniyeler düzeyine indiren evrensel kütüphanedir."
  },
  {
    id: "fw_genelkültür_72",
    category: "Genel Kültür",
    word: "YAZİLİ",
    clue: "Bilgisayar donanımlarının çalışmasını sağlayan kodlanmış programlar (Yazılım).",
    wisdom: "Yazılımlar olmasaydı bilgisayarlar ve telefonlar sadece metal yığınları olurdu."
  },
  {
    id: "fw_genelkültür_73",
    category: "Genel Kültür",
    word: "KODLA",
    clue: "Bilgisayara ne yapması gerektiğini anlatan komutlar yazma işi (Kodlama).",
    wisdom: "Kodlama öğrenmek algoritmik düşünmeyi geliştiren en önemli beceridir."
  },
  {
    id: "fw_genelkültür_74",
    category: "Genel Kültür",
    word: "OYUN",
    clue: "Kuralları olan, eğlenmek ve öğrenmek için yapılan her türlü aktivite.",
    wisdom: "Oyun oynamak çocukların zihinsel ve sosyal becerilerini geliştiren en doğal yoldur."
  },
  {
    id: "fw_genelkültür_75",
    category: "Genel Kültür",
    word: "SPOR",
    clue: "Beden sağlığını korumak için yapılan düzenli fiziksel hareketler.",
    wisdom: "Güreş, okçuluk ve binicilik geleneksel ata sporlarımızdandır."
  },
  {
    id: "fw_genelkültür_76",
    category: "Genel Kültür",
    word: "FUTBOL",
    clue: "11'er kişilik iki takım arasında ayakla top oynanan popüler spor.",
    wisdom: "Futbol takım ruhunu ve yardımlaşmayı geliştiren eğlenceli bir spordur."
  },
  {
    id: "fw_genelkültür_77",
    category: "Genel Kültür",
    word: "BASKET",
    clue: "5'er kişilik takımlarla topu çembere atmaya dayalı spor (Basketbol).",
    wisdom: "Basketbol boy uzamasına ve reflekslerin gelişmesine katkı sağlar."
  },
  {
    id: "fw_genelkültür_78",
    category: "Genel Kültür",
    word: "TENİS",
    clue: "İki veya dört kişiyle raket yardımıyla topu fileden aşırma sporu.",
    wisdom: "Tenis odaklanmayı ve hızlı karar vermeyi geliştiren asil bir spordur."
  },
  {
    id: "fw_genelkültür_79",
    category: "Genel Kültür",
    word: "YÜZME",
    clue: "Su üzerinde batmadan çeşitli tekniklerle ilerleme sporu.",
    wisdom: "Yüzme tüm vücut kaslarını çalıştıran en sağlıklı sporlardan biridir."
  },
  {
    id: "fw_genelkültür_80",
    category: "Genel Kültür",
    word: "ATLAS",
    clue: "Haritalar kitabı.",
    wisdom: "Atlaslar dünyayı avucumuzun içine sığdıran coğrafi pencerelerdir."
  }
];
