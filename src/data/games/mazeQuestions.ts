export interface MazeQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correct: string;
  wisdom: string;
}

export const MAZE_QUESTIONS_DB: MazeQuestion[] = [
  {
    "id": "mz_ahlak_1",
    "category": "İslami Ahlak & Edep",
    "question": "Bir Müslümanın arkasından onun hoşlanmayacağı şekilde konuşup çekiştirmesine ne ad verilir?",
    "options": [
      "İftira",
      "Bühtan",
      "Riya",
      "Gıybet"
    ],
    "correct": "Gıybet",
    "wisdom": "Gıybet, kardeşinin ölü etini yemeye benzetilmiş büyük bir ahlaki kusurdur."
  },
  {
    "id": "mz_ahlak_2",
    "category": "İslami Ahlak & Edep",
    "question": "Bir kimseye işlemediği bir suçu, yapmadığı bir davranışı kasıtlı olarak yüklemeye ne ad verilir?",
    "options": [
      "Haset",
      "Gıybet",
      "İftira",
      "Kibir"
    ],
    "correct": "İftira",
    "wisdom": "İftira, kul hakkı doğuran ve toplumu zehirleyen büyük günahlardandır."
  },
  {
    "id": "mz_ahlak_3",
    "category": "İslami Ahlak & Edep",
    "question": "Başkasındaki nimetleri ve başarıları kıskanıp, o nimetin ondan yok olmasını istemeye ne ad verilir?",
    "options": [
      "Kibir",
      "Haset",
      "Riya",
      "Gıpta"
    ],
    "correct": "Haset",
    "wisdom": "Haset, ateşin odunu yakıp bitirdiği gibi insanın güzel amellerini bitirir."
  },
  {
    "id": "mz_ahlak_4",
    "category": "İslami Ahlak & Edep",
    "question": "Başkasının sahip olduğu güzel bir nimete imrenerek 'keşke benim de olsa' demeye ne ad verilir?",
    "options": [
      "Haset",
      "Riya",
      "Kibir",
      "Gıpta"
    ],
    "correct": "Gıpta",
    "wisdom": "Gıpta, hasetten farklı olarak kıskançlık içermez ve İslam'da caiz görülmüştür."
  },
  {
    "id": "mz_ahlak_5",
    "category": "İslami Ahlak & Edep",
    "question": "Kendini başkalarından üstün görmek, insanları küçümseyip hakkı kabul etmemek hangi ahlaki hastalıktır?",
    "options": [
      "Kibir",
      "Haset",
      "Riya",
      "Tevazu"
    ],
    "correct": "Kibir",
    "wisdom": "Kalbinde zerre kadar kibir olan kimse cennete giremez."
  },
  {
    "id": "mz_ahlak_6",
    "category": "İslami Ahlak & Edep",
    "question": "Alçakgönüllü olmak, kibirden uzak durup insanlara eşit ve değerli davranmak hangi kavramdır?",
    "options": [
      "Sıdk",
      "Adalet",
      "Haya",
      "Tevazu"
    ],
    "correct": "Tevazu",
    "wisdom": "Tevazu, müminin şerefini ve Allah katındaki değerini artıran güzel bir haslettir."
  },
  {
    "id": "mz_ahlak_7",
    "category": "İslami Ahlak & Edep",
    "question": "İbadetleri veya iyilikleri Allah rızası için değil, insanların beğenisi ve övgüsü için yapmaya ne denir?",
    "options": [
      "Kibir",
      "İhlas",
      "Riya",
      "Haset"
    ],
    "correct": "Riya",
    "wisdom": "Riya, ibadetlerin sevabını yok eden 'gizli şirk' olarak tanımlanmıştır."
  },
  {
    "id": "mz_ahlak_8",
    "category": "İslami Ahlak & Edep",
    "question": "İbadet ve güzel amelleri sadece ve sadece Allah rızasını gözeterek yapmaya ne ad verilir?",
    "options": [
      "Riya",
      "İhlas",
      "Sıdk",
      "Tevazu"
    ],
    "correct": "İhlas",
    "wisdom": "İhlas, ibadetlerin özü ve kabul edilme şartıdır."
  },
  {
    "id": "mz_ahlak_9",
    "category": "İslami Ahlak & Edep",
    "question": "Sözünde, özünde ve davranışlarında doğru olmak, yalan söylememek hangi peygamberi vasıftır?",
    "options": [
      "İsmet",
      "Sıdk",
      "Emanet",
      "Fetanet"
    ],
    "correct": "Sıdk",
    "wisdom": "Sıdk dürüstlüktür ve insanı iyiliğe, iyilik de cennete götürür."
  },
  {
    "id": "mz_ahlak_10",
    "category": "İslami Ahlak & Edep",
    "question": "Kötü, çirkin ve günahtan utanıp uzak durmak, edep sınırlarını korumak anlamına gelen kavram nedir?",
    "options": [
      "İhlas",
      "Adalet",
      "Vefa",
      "Haya"
    ],
    "correct": "Haya",
    "wisdom": "Haya imandandır ve imandan olan haya sadece hayır getirir."
  },
  {
    "id": "mz_ahlak_11",
    "category": "İslami Ahlak & Edep",
    "question": "Korunması için verilen bir şeyi hakkıyla korumak ve sahibine güvenilir olmak hangi kavramdır?",
    "options": [
      "Sıdk",
      "Vefa",
      "Emanet",
      "Adalet"
    ],
    "correct": "Emanet",
    "wisdom": "Emanet, müminin en temel vasfıdır; emanete hıyanet ise münafıklık alametidir."
  },
  {
    "id": "mz_ahlak_12",
    "category": "İslami Ahlak & Edep",
    "question": "Her şeye hakkını vermek, hak sahibine hakkını teslim etmek ve eşitliği gözetmek nedir?",
    "options": [
      "Kanaat",
      "Vefa",
      "Merhamet",
      "Adalet"
    ],
    "correct": "Adalet",
    "wisdom": "Adalet mülkün temelidir ve Allah adaleti ve iyiliği emreder."
  },
  {
    "id": "mz_ahlak_13",
    "category": "İslami Ahlak & Edep",
    "question": "Başkalarının acılarına şefkat göstermek, yumuşak kalpli olmak ve koruyup kollamak nedir?",
    "options": [
      "Adalet",
      "Sabır",
      "İhlas",
      "Merhamet"
    ],
    "correct": "Merhamet",
    "wisdom": "Yerdekilere merhamet edin ki göktekiler de size merhamet etsin."
  },
  {
    "id": "mz_ahlak_14",
    "category": "İslami Ahlak & Edep",
    "question": "Verdiği sözde durmak, iyilikleri unutmamak ve dostluğu devam ettirmek hangi kavramdır?",
    "options": [
      "Sıdk",
      "Haya",
      "Tevazu",
      "Vefa"
    ],
    "correct": "Vefa",
    "wisdom": "Ahde vefa göstermek, imanın gereği ve peygamber ahlakındandır."
  },
  {
    "id": "mz_ahlak_15",
    "category": "İslami Ahlak & Edep",
    "question": "Zorluklar, musibetler ve ibadetlerin zorlukları karşısında direnip yılgınlık göstermeme gücü nedir?",
    "options": [
      "Sabır",
      "Şükür",
      "Kanaat",
      "Zühd"
    ],
    "correct": "Sabır",
    "wisdom": "Sabır, ilk darbe anında gösterilen dirençtir ve sonu selamet olan bir hazinedir."
  },
  {
    "id": "mz_ahlak_16",
    "category": "İslami Ahlak & Edep",
    "question": "Allah'ın verdiği nimetlere karşı teşekkür edip o nimetleri O'nun rızasına uygun kullanmak nedir?",
    "options": [
      "Kanaat",
      "Tevazu",
      "Şükür",
      "Sabır"
    ],
    "correct": "Şükür",
    "wisdom": "Şükür, eldeki nimetleri artırır ve Allah'ın sevgisini kazanmaya vesiledir."
  },
  {
    "id": "mz_ahlak_17",
    "category": "İslami Ahlak & Edep",
    "question": "Eldeki nimetlerle yetinip hırstan ve açgözlülükten uzak durmaya ne ad verilir?",
    "options": [
      "Tevazu",
      "Zühd",
      "İhlas",
      "Kanaat"
    ],
    "correct": "Kanaat",
    "wisdom": "Kanaat, tükenmeyen bir hazinedir ve insanı başkalarına boyun eğmekten korur."
  },
  {
    "id": "mz_ahlak_18",
    "category": "İslami Ahlak & Edep",
    "question": "Dünyalık şeylere aşırı bağlanmamak, kalpten dünya sevgisini çıkarıp ahirete yönelmek nedir?",
    "options": [
      "Zühd",
      "İhlas",
      "Riya",
      "Kanaat"
    ],
    "correct": "Zühd",
    "wisdom": "Zühd, dünya nimetlerini tamamen terk etmek değil, onlara köle olmamaktır."
  },
  {
    "id": "mz_ahlak_19",
    "category": "İslami Ahlak & Edep",
    "question": "Akrabayı ziyaret etmek, onlarla iyi ilişkiler kurup yardımlaşmak hangi ahlaki kavramdır?",
    "options": [
      "Sıla-i Rahim",
      "Vefa",
      "Fütüvvet",
      "İsar"
    ],
    "correct": "Sıla-i Rahim",
    "wisdom": "Sıla-i rahim yapmak ömrü uzatır ve rızkı bereketlendirir."
  },
  {
    "id": "mz_ahlak_20",
    "category": "İslami Ahlak & Edep",
    "question": "Kendisi ihtiyaç içinde olduğu halde başkasını kendine tercih etmeye ne ad verilir?",
    "options": [
      "İsar",
      "Tevazu",
      "Zühd",
      "Cömertlik"
    ],
    "correct": "İsar",
    "wisdom": "İsar, cömertliğin en yüksek zirvesidir ve sahabe ahlakıdır."
  },
  {
    "id": "mz_ahlak_21",
    "category": "İslami Ahlak & Edep",
    "question": "Sahip olunan imkanları başkalarıyla cömertçe paylaşma ahlakı nedir?",
    "options": [
      "Adalet",
      "Zühd",
      "Cömertlik",
      "Kanaat"
    ],
    "correct": "Cömertlik",
    "wisdom": "Cömert insan Allah'a yakın, cennete yakın ve insanlara yakındır."
  },
  {
    "id": "mz_ahlak_22",
    "category": "İslami Ahlak & Edep",
    "question": "Nimetleri gereksiz yere harcamak, saçıp savurmak ve israf etmek ne ad verilir?",
    "options": [
      "Riya",
      "İsraf",
      "Kibir",
      "Cömertlik"
    ],
    "correct": "İsraf",
    "wisdom": "İsraf haram kılınmıştır. Yiyiniz, içiniz fakat israf etmeyiniz."
  },
  {
    "id": "mz_ahlak_23",
    "category": "İslami Ahlak & Edep",
    "question": "Harcamalarda dengeli olmak, tasarruflu davranmak hangi kavramdır?",
    "options": [
      "Zühd",
      "İktisat",
      "Kanaat",
      "Cimrilik"
    ],
    "correct": "İktisat",
    "wisdom": "İktisat eden (tasarruflu davranan) fakirleşmez."
  },
  {
    "id": "mz_ahlak_24",
    "category": "İslami Ahlak & Edep",
    "question": "Peygamberimiz'e göre 'Yanı başındaki komşusu açken' tok yatan kimsenin durumu nedir?",
    "options": [
      "Münafıktır",
      "Günahkar değildir",
      "Kafirdir",
      "Bizden değildir"
    ],
    "correct": "Bizden değildir",
    "wisdom": "Komşusu açken tok yatan kamil mümin olamaz."
  },
  {
    "id": "mz_ahlak_25",
    "category": "İslami Ahlak & Edep",
    "question": "Anne babaya karşı söylenmesi Kur'an-ı Kerim'de yasaklanan en küçük kırıcı kelime hangisidir?",
    "options": [
      "Git",
      "Hayır",
      "Yeter",
      "Öf"
    ],
    "correct": "Öf",
    "wisdom": "Anne babaya 'öf' bile demek yasaklanmış, onlara tatlı söz söylenmesi emredilmiştir."
  },
  {
    "id": "mz_ahlak_26",
    "category": "İslami Ahlak & Edep",
    "question": "Konuşurken kırıcı olmayan, güzel ve yumuşak konuşmaya ne denir?",
    "options": [
      "Sıdk",
      "Fetanet",
      "Vefa",
      "Kavli Leyyin"
    ],
    "correct": "Kavli Leyyin",
    "wisdom": "Güzel ve tatlı söz sadakadır ve kalpleri birbirine ısındırır."
  },
  {
    "id": "mz_ahlak_27",
    "category": "İslami Ahlak & Edep",
    "question": "İnsanların gizli hallerini, kusurlarını ve özel hayatlarını araştırmaya ne ad verilir?",
    "options": [
      "Haset",
      "Gıybet",
      "İftira",
      "Tecessüs"
    ],
    "correct": "Tecessüs",
    "wisdom": "Müslümanların gizli hallerini ve ayıplarını araştırmayınız."
  },
  {
    "id": "mz_ahlak_28",
    "category": "İslami Ahlak & Edep",
    "question": "Müslümanları küçümseyerek taklit etmek veya dalga geçmek İslam'da nasıl karşılanır?",
    "options": [
      "Mekruhtur",
      "Haramdır",
      "Helaldir",
      "Caizdir"
    ],
    "correct": "Haramdır",
    "wisdom": "Bir topluluk diğer bir toplulukla alay etmesin; belki onlar kendilerinden hayırlıdır."
  },
  {
    "id": "mz_ahlak_29",
    "category": "İslami Ahlak & Edep",
    "question": "İnsanlara hoşlanmadıkları adlarla hitap etmek hakkında Kur'an ne söyler?",
    "options": [
      "Kötü lakap takmayın",
      "Helaldir",
      "Önemsizdir",
      "Sadece büyüklere serbesttir"
    ],
    "correct": "Kötü lakap takmayın",
    "wisdom": "Birbirinize kötü lakaplar takmayın. İmandan sonra fasıklık ne kötüdür!"
  },
  {
    "id": "mz_ahlak_30",
    "category": "İslami Ahlak & Edep",
    "question": "Peygamberimiz öfkelendiğimizde ne yapmamızı tavsiye etmiştir?",
    "options": [
      "Bağırmayı",
      "Uyumayı",
      "Abdest almayı",
      "Koşmayı"
    ],
    "correct": "Abdest almayı",
    "wisdom": "Öfke şeytandandır, şeytan ateşten yaratılmıştır. Ateşi söndüren ise sudur, bu yüzden abdest alın."
  },
  {
    "id": "mz_ahlak_31",
    "category": "İslami Ahlak & Edep",
    "question": "Müslüman kimdir sorusuna Peygamberimiz nasıl cevap vermiştir?",
    "options": [
      "Sadece namaz kılandır",
      "Çok zengin olandır",
      "Çok seyahat edendir",
      "Elinin ve dilinin güvenilir olduğu kimsedir"
    ],
    "correct": "Elinin ve dilinin güvenilir olduğu kimsedir",
    "wisdom": "Müslüman, diğer Müslümanların elinden ve dilinden güvende olduğu kimsedir."
  },
  {
    "id": "mz_ahlak_32",
    "category": "İslami Ahlak & Edep",
    "question": "Müslümanlar arasında sevgi bağlarını güçlendiren davranış nedir?",
    "options": [
      "Yemek yemek",
      "Selamlaşmak",
      "Hediyeleşmek",
      "Gülümsemek"
    ],
    "correct": "Selamlaşmak",
    "wisdom": "Aranızda selamı yayın ki birbirinizi sevesiniz."
  },
  {
    "id": "mz_ahlak_33",
    "category": "İslami Ahlak & Edep",
    "question": "Peygamberimiz 'Ben ancak ... tamamlamak için gönderildim' buyurmuştur?",
    "options": [
      "Güzel ahlakı",
      "Devleti",
      "Savaşları",
      "Ticareti"
    ],
    "correct": "Güzel ahlakı",
    "wisdom": "Ben ancak güzel ahlakı tamamlamak için gönderildim."
  },
  {
    "id": "mz_ahlak_34",
    "category": "İslami Ahlak & Edep",
    "question": "Müminlerin iman bakımından en mükemmeli kimdir?",
    "options": [
      "En çok parası olanı",
      "En güçlü olanı",
      "En yaşlı olanı",
      "Ahlakı en güzel olanı"
    ],
    "correct": "Ahlakı en güzel olanı",
    "wisdom": "Müminlerin iman bakımından en mükemmeli, ahlakı en güzel olanıdır."
  },
  {
    "id": "mz_ahlak_35",
    "category": "İslami Ahlak & Edep",
    "question": "Peygamberimiz'in 'Temizlik ... yarısıdır' buyurduğu kavram hangisidir?",
    "options": [
      "Ahlakın",
      "Hayatın",
      "Sağlığın",
      "İmanın"
    ],
    "correct": "İmanın",
    "wisdom": "Temizlik imanın yarısıdır."
  },
  {
    "id": "mz_ahlak_36",
    "category": "İslami Ahlak & Edep",
    "question": "Münafığın özelliklerinden biri aşağıdakilerden hangisidir?",
    "options": [
      "Namaz kılmak",
      "Sadaka vermek",
      "Çok dua etmek",
      "Sözünde durmamak"
    ],
    "correct": "Sözünde durmamak",
    "wisdom": "Münafığın alameti üçtür: Yalan söyler, sözünden döner, emanete hıyanet eder."
  },
  {
    "id": "mz_ahlak_37",
    "category": "İslami Ahlak & Edep",
    "question": "Müslüman kardeşinin yüzüne gülümsemek İslam'da ne olarak kabul edilir?",
    "options": [
      "Sadaka",
      "Mekruh",
      "Farz",
      "Zekat"
    ],
    "correct": "Sadaka",
    "wisdom": "Müslüman kardeşine tebessüm etmen bir sadakadır."
  },
  {
    "id": "mz_ahlak_38",
    "category": "İslami Ahlak & Edep",
    "question": "Hayvanlara eziyet etmek İslam ahlakına göre nasıl bir davranıştır?",
    "options": [
      "Caizdir",
      "Büyük günahtır",
      "Mübahtır",
      "Önemsizdir"
    ],
    "correct": "Büyük günahtır",
    "wisdom": "Her canlıya yapılan iyilikte bir sevap, eziyette ise günah vardır."
  },
  {
    "id": "mz_ahlak_39",
    "category": "İslami Ahlak & Edep",
    "question": "Allah katında şehitlerin bile bağışlanmayan tek günahı hangisidir?",
    "options": [
      "Gıybet",
      "Kul hakkı",
      "Namaz kılmamak",
      "Yalan söylemek"
    ],
    "correct": "Kul hakkı",
    "wisdom": "Allah kul hakkıyla gelenin günahını hak sahibi helal etmedikçe bağışlamaz."
  },
  {
    "id": "mz_ahlak_40",
    "category": "İslami Ahlak & Edep",
    "question": "Birine sır verildiğinde o sırrı saklamak hangi ahlaki kavramla ilişkilidir?",
    "options": [
      "Emanet",
      "Adalet",
      "Vefa",
      "Sıdk"
    ],
    "correct": "Emanet",
    "wisdom": "Verilen sırlar da birer emanettir ve ifşa edilmesi hıyanettir."
  },
  {
    "id": "mz_ahlak_41",
    "category": "İslami Ahlak & Edep",
    "question": "41. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_42",
    "category": "İslami Ahlak & Edep",
    "question": "42. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_43",
    "category": "İslami Ahlak & Edep",
    "question": "43. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_44",
    "category": "İslami Ahlak & Edep",
    "question": "44. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_45",
    "category": "İslami Ahlak & Edep",
    "question": "45. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_46",
    "category": "İslami Ahlak & Edep",
    "question": "46. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_47",
    "category": "İslami Ahlak & Edep",
    "question": "47. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_48",
    "category": "İslami Ahlak & Edep",
    "question": "48. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_49",
    "category": "İslami Ahlak & Edep",
    "question": "49. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_50",
    "category": "İslami Ahlak & Edep",
    "question": "50. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_51",
    "category": "İslami Ahlak & Edep",
    "question": "51. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_52",
    "category": "İslami Ahlak & Edep",
    "question": "52. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_53",
    "category": "İslami Ahlak & Edep",
    "question": "53. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_54",
    "category": "İslami Ahlak & Edep",
    "question": "54. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_55",
    "category": "İslami Ahlak & Edep",
    "question": "55. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_56",
    "category": "İslami Ahlak & Edep",
    "question": "56. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_57",
    "category": "İslami Ahlak & Edep",
    "question": "57. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_58",
    "category": "İslami Ahlak & Edep",
    "question": "58. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_59",
    "category": "İslami Ahlak & Edep",
    "question": "59. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_60",
    "category": "İslami Ahlak & Edep",
    "question": "60. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_61",
    "category": "İslami Ahlak & Edep",
    "question": "61. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_62",
    "category": "İslami Ahlak & Edep",
    "question": "62. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_63",
    "category": "İslami Ahlak & Edep",
    "question": "63. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_64",
    "category": "İslami Ahlak & Edep",
    "question": "64. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_65",
    "category": "İslami Ahlak & Edep",
    "question": "65. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_66",
    "category": "İslami Ahlak & Edep",
    "question": "66. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_67",
    "category": "İslami Ahlak & Edep",
    "question": "67. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_68",
    "category": "İslami Ahlak & Edep",
    "question": "68. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_69",
    "category": "İslami Ahlak & Edep",
    "question": "69. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_70",
    "category": "İslami Ahlak & Edep",
    "question": "70. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_71",
    "category": "İslami Ahlak & Edep",
    "question": "71. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_72",
    "category": "İslami Ahlak & Edep",
    "question": "72. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_73",
    "category": "İslami Ahlak & Edep",
    "question": "73. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_74",
    "category": "İslami Ahlak & Edep",
    "question": "74. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_75",
    "category": "İslami Ahlak & Edep",
    "question": "75. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_76",
    "category": "İslami Ahlak & Edep",
    "question": "76. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_77",
    "category": "İslami Ahlak & Edep",
    "question": "77. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_78",
    "category": "İslami Ahlak & Edep",
    "question": "78. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_79",
    "category": "İslami Ahlak & Edep",
    "question": "79. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_80",
    "category": "İslami Ahlak & Edep",
    "question": "80. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_81",
    "category": "İslami Ahlak & Edep",
    "question": "81. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_82",
    "category": "İslami Ahlak & Edep",
    "question": "82. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_83",
    "category": "İslami Ahlak & Edep",
    "question": "83. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_84",
    "category": "İslami Ahlak & Edep",
    "question": "84. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_85",
    "category": "İslami Ahlak & Edep",
    "question": "85. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_86",
    "category": "İslami Ahlak & Edep",
    "question": "86. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_87",
    "category": "İslami Ahlak & Edep",
    "question": "87. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_88",
    "category": "İslami Ahlak & Edep",
    "question": "88. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_89",
    "category": "İslami Ahlak & Edep",
    "question": "89. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_90",
    "category": "İslami Ahlak & Edep",
    "question": "90. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_91",
    "category": "İslami Ahlak & Edep",
    "question": "91. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_92",
    "category": "İslami Ahlak & Edep",
    "question": "92. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_93",
    "category": "İslami Ahlak & Edep",
    "question": "93. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_94",
    "category": "İslami Ahlak & Edep",
    "question": "94. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_95",
    "category": "İslami Ahlak & Edep",
    "question": "95. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_96",
    "category": "İslami Ahlak & Edep",
    "question": "96. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_97",
    "category": "İslami Ahlak & Edep",
    "question": "97. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_98",
    "category": "İslami Ahlak & Edep",
    "question": "98. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_99",
    "category": "İslami Ahlak & Edep",
    "question": "99. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_ahlak_100",
    "category": "İslami Ahlak & Edep",
    "question": "100. Kibirlenmeyen, insanları hor görmeyen alçakgönüllü kişiye ne ad verilir?",
    "options": [
      "Mütevazı",
      "Cömert",
      "Sabırlı",
      "Müşfik"
    ],
    "correct": "Mütevazı",
    "wisdom": "Tevazu sahibi insanları Allah yüceltir."
  },
  {
    "id": "mz_peygamber_101",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, İlk insan ve ilk peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Adem (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İbrahim (a.s.)"
    ],
    "correct": "Hz. Adem (a.s.)",
    "wisdom": "Hz. Adem balçıktan yaratılmış ve kendisine her şeyin ismi öğretilmiştir."
  },
  {
    "id": "mz_peygamber_102",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Tufan felaketinden iman edenleri kurtarmak için gemi yapan peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Nuh (a.s.)",
    "wisdom": "Hz. Nuh insanlığın ikinci babası olarak kabul edilir."
  },
  {
    "id": "mz_peygamber_103",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Nemrut'un ateşe attığı ve ateşin gül bahçesine döndüğü peygamber kimdir?",
    "options": [
      "Hz. İshak (a.s.)",
      "Hz. Yakub (a.s.)",
      "Hz. İbrahim (a.s.)",
      "Hz. İsmail (a.s.)"
    ],
    "correct": "Hz. İbrahim (a.s.)",
    "wisdom": "Hz. İbrahim 'Halilullah' yani Allah'ın dostu unvanına sahiptir."
  },
  {
    "id": "mz_peygamber_104",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. İbrahim'in kurban etmekle imtihan edildiği oğlu kimdir?",
    "options": [
      "Hz. Yusuf (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. İsmail (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. İsmail (a.s.)",
    "wisdom": "Hz. İsmail sabrı ve teslimiyetiyle Kur'an'da övülmüştür."
  },
  {
    "id": "mz_peygamber_105",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yusuf peygamberin babası olan ve oğlunun hasretiyle gözleri kapanan peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Yakub (a.s.)"
    ],
    "correct": "Hz. Yakub (a.s.)",
    "wisdom": "Hz. Yakub'un lakabı İsrail olup, soyundan gelenlere İsrailoğulları denmiştir."
  },
  {
    "id": "mz_peygamber_106",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kardeşleri tarafından kıskanılıp kuyuya atılan ve rüya tabir etme mucizesi olan peygamber kimdir?",
    "options": [
      "Hz. Yakub (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Bünyamin (a.s.)"
    ],
    "correct": "Hz. Yusuf (a.s.)",
    "wisdom": "Hz. Yusuf'un hayatı Kur'an'da 'Ahsenü'l-Kasas' yani kıssaların en güzeli olarak geçer."
  },
  {
    "id": "mz_peygamber_107",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hastalık ve musibetlere karşı gösterdiği muazzam sabırla bilinen peygamber kimdir?",
    "options": [
      "Hz. Yunus (a.s.)",
      "Hz. Zülkifl (a.s.)",
      "Hz. Elyasa (a.s.)",
      "Hz. Eyüp (a.s.)"
    ],
    "correct": "Hz. Eyüp (a.s.)",
    "wisdom": "Hz. Eyüp sabrının mükafatı olarak şifalı bir suyla iyileşmiştir."
  },
  {
    "id": "mz_peygamber_108",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ninova halkına gönderilen ve öfkeyle şehri terk edip balık tarafından yutulan peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Yunus (a.s.)",
      "Hz. Salih (a.s.)"
    ],
    "correct": "Hz. Yunus (a.s.)",
    "wisdom": "Hz. Yunus hatasını anlayıp balığın karnında samimiyetle tövbe etmiştir."
  },
  {
    "id": "mz_peygamber_109",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Asasıyla Kızıldeniz'i ikiye yaran ve Tur Dağı'nda Allah ile konuşan peygamber kimdir?",
    "options": [
      "Hz. Şuayb (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Harun (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya kutsal kitaplardan Tevrat indirilmiştir."
  },
  {
    "id": "mz_peygamber_110",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Zebur indirilen, demiri eliyle bükebilen ve sesinin güzelliğiyle dağları taşa getiren peygamber kimdir?",
    "options": [
      "Hz. Süleyman (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Davud (a.s.)"
    ],
    "correct": "Hz. Davud (a.s.)",
    "wisdom": "Hz. Davud hem peygamber hem de adil bir hükümdardır."
  },
  {
    "id": "mz_peygamber_111",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Rüzgarlara, hayvanlara ve cinlere hükmedebilen hükümdar peygamber kimdir?",
    "options": [
      "Hz. Lokman (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Süleyman (a.s.)",
      "Hz. Üzeyir (a.s.)"
    ],
    "correct": "Hz. Süleyman (a.s.)",
    "wisdom": "Hz. Süleyman babası Hz. Davud'un tahtına geçmiş ve muazzam bir saltanat kurmuştur."
  },
  {
    "id": "mz_peygamber_112",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Beşikteyken konuşan, hastaları iyileştiren ve babasız dünyaya gelen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. İsa (a.s.)",
    "wisdom": "Hz. İsa'ya semavi kitaplardan İncil indirilmiştir."
  },
  {
    "id": "mz_peygamber_113",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Semud kavmine gönderilen ve mucize olarak kayadan gebe bir deve çıkaran peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Nuh (a.s.)"
    ],
    "correct": "Hz. Salih (a.s.)",
    "wisdom": "Semud kavmi mucize deveyi katlettiği için helak olmuştur."
  },
  {
    "id": "mz_peygamber_114",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ad kavmine gönderilen ve kibirleri yüzünden rüzgarla helak olan kavmin peygamberi kimdir?",
    "options": [
      "Hz. Salih (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Şuayb (a.s.)"
    ],
    "correct": "Hz. Hud (a.s.)",
    "wisdom": "Ad kavmi devasa binalar yapan çok güçlü bir topluluktu."
  },
  {
    "id": "mz_peygamber_115",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Medyen halkına gönderilen, ölçü ve tartıda hile yapmamalarını söyleyen hatip peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Şuayb (a.s.)",
    "wisdom": "Hz. Şuayb güzel konuşmasından ötürü 'Hatibü'l-Enbiya' olarak anılır."
  },
  {
    "id": "mz_peygamber_116",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yazıyı ilk yazan ve terzilik mesleğinin öncüsü olan peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İdris (a.s.)"
    ],
    "correct": "Hz. İdris (a.s.)",
    "wisdom": "Hz. İdris göklere yükseltilen yüce bir makama sahipti."
  },
  {
    "id": "mz_peygamber_117",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kudüs'teki Süleyman Mabedi'nde görevli olan ve Hz. Meryem'in bakımını üstlenen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. Zekeriya (a.s.)",
    "wisdom": "Hz. Zekeriya yaşlılığında evlat istemiş ve kendisine Hz. Yahya müjdelenmiştir."
  },
  {
    "id": "mz_peygamber_118",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Sodom halkının ahlaksızlıklarına karşı mücadele eden peygamber kimdir?",
    "options": [
      "Hz. İbrahim (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Lut (a.s.)",
    "wisdom": "Hz. Lut, Hz. İbrahim'in yeğenidir ve onunla aynı dönemde yaşamıştır."
  },
  {
    "id": "mz_peygamber_119",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Adem'den sonra kendisine 50 sayfa (suhuf) gönderilen peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Şit (a.s.)"
    ],
    "correct": "Hz. Şit (a.s.)",
    "wisdom": "Hz. Şit, Hz. Adem'in Kabil tarafından öldürülen oğlu Habil'e karşılık verilen temiz bir evlattır."
  },
  {
    "id": "mz_peygamber_120",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Zekeriya'nın oğlu olan ve Hz. İsa'nın geleceğini müjdeleyen peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Yahya (a.s.)",
      "Hz. Elyasa (a.s.)"
    ],
    "correct": "Hz. Yahya (a.s.)",
    "wisdom": "Hz. Yahya nehirde insanları vaftiz ettiği için Hristiyan kaynaklarında Vaftizci Yahya olarak geçer."
  },
  {
    "id": "mz_peygamber_121",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, İlk insan ve ilk peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Adem (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İbrahim (a.s.)"
    ],
    "correct": "Hz. Adem (a.s.)",
    "wisdom": "Hz. Adem balçıktan yaratılmış ve kendisine her şeyin ismi öğretilmiştir."
  },
  {
    "id": "mz_peygamber_122",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Tufan felaketinden iman edenleri kurtarmak için gemi yapan peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Nuh (a.s.)",
    "wisdom": "Hz. Nuh insanlığın ikinci babası olarak kabul edilir."
  },
  {
    "id": "mz_peygamber_123",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Nemrut'un ateşe attığı ve ateşin gül bahçesine döndüğü peygamber kimdir?",
    "options": [
      "Hz. İshak (a.s.)",
      "Hz. Yakub (a.s.)",
      "Hz. İbrahim (a.s.)",
      "Hz. İsmail (a.s.)"
    ],
    "correct": "Hz. İbrahim (a.s.)",
    "wisdom": "Hz. İbrahim 'Halilullah' yani Allah'ın dostu unvanına sahiptir."
  },
  {
    "id": "mz_peygamber_124",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. İbrahim'in kurban etmekle imtihan edildiği oğlu kimdir?",
    "options": [
      "Hz. Yusuf (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. İsmail (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. İsmail (a.s.)",
    "wisdom": "Hz. İsmail sabrı ve teslimiyetiyle Kur'an'da övülmüştür."
  },
  {
    "id": "mz_peygamber_125",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yusuf peygamberin babası olan ve oğlunun hasretiyle gözleri kapanan peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Yakub (a.s.)"
    ],
    "correct": "Hz. Yakub (a.s.)",
    "wisdom": "Hz. Yakub'un lakabı İsrail olup, soyundan gelenlere İsrailoğulları denmiştir."
  },
  {
    "id": "mz_peygamber_126",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kardeşleri tarafından kıskanılıp kuyuya atılan ve rüya tabir etme mucizesi olan peygamber kimdir?",
    "options": [
      "Hz. Yakub (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Bünyamin (a.s.)"
    ],
    "correct": "Hz. Yusuf (a.s.)",
    "wisdom": "Hz. Yusuf'un hayatı Kur'an'da 'Ahsenü'l-Kasas' yani kıssaların en güzeli olarak geçer."
  },
  {
    "id": "mz_peygamber_127",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hastalık ve musibetlere karşı gösterdiği muazzam sabırla bilinen peygamber kimdir?",
    "options": [
      "Hz. Yunus (a.s.)",
      "Hz. Zülkifl (a.s.)",
      "Hz. Elyasa (a.s.)",
      "Hz. Eyüp (a.s.)"
    ],
    "correct": "Hz. Eyüp (a.s.)",
    "wisdom": "Hz. Eyüp sabrının mükafatı olarak şifalı bir suyla iyileşmiştir."
  },
  {
    "id": "mz_peygamber_128",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ninova halkına gönderilen ve öfkeyle şehri terk edip balık tarafından yutulan peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Yunus (a.s.)",
      "Hz. Salih (a.s.)"
    ],
    "correct": "Hz. Yunus (a.s.)",
    "wisdom": "Hz. Yunus hatasını anlayıp balığın karnında samimiyetle tövbe etmiştir."
  },
  {
    "id": "mz_peygamber_129",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Asasıyla Kızıldeniz'i ikiye yaran ve Tur Dağı'nda Allah ile konuşan peygamber kimdir?",
    "options": [
      "Hz. Şuayb (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Harun (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya kutsal kitaplardan Tevrat indirilmiştir."
  },
  {
    "id": "mz_peygamber_130",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Zebur indirilen, demiri eliyle bükebilen ve sesinin güzelliğiyle dağları taşa getiren peygamber kimdir?",
    "options": [
      "Hz. Süleyman (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Davud (a.s.)"
    ],
    "correct": "Hz. Davud (a.s.)",
    "wisdom": "Hz. Davud hem peygamber hem de adil bir hükümdardır."
  },
  {
    "id": "mz_peygamber_131",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Rüzgarlara, hayvanlara ve cinlere hükmedebilen hükümdar peygamber kimdir?",
    "options": [
      "Hz. Lokman (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Süleyman (a.s.)",
      "Hz. Üzeyir (a.s.)"
    ],
    "correct": "Hz. Süleyman (a.s.)",
    "wisdom": "Hz. Süleyman babası Hz. Davud'un tahtına geçmiş ve muazzam bir saltanat kurmuştur."
  },
  {
    "id": "mz_peygamber_132",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Beşikteyken konuşan, hastaları iyileştiren ve babasız dünyaya gelen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. İsa (a.s.)",
    "wisdom": "Hz. İsa'ya semavi kitaplardan İncil indirilmiştir."
  },
  {
    "id": "mz_peygamber_133",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Semud kavmine gönderilen ve mucize olarak kayadan gebe bir deve çıkaran peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Nuh (a.s.)"
    ],
    "correct": "Hz. Salih (a.s.)",
    "wisdom": "Semud kavmi mucize deveyi katlettiği için helak olmuştur."
  },
  {
    "id": "mz_peygamber_134",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ad kavmine gönderilen ve kibirleri yüzünden rüzgarla helak olan kavmin peygamberi kimdir?",
    "options": [
      "Hz. Salih (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Şuayb (a.s.)"
    ],
    "correct": "Hz. Hud (a.s.)",
    "wisdom": "Ad kavmi devasa binalar yapan çok güçlü bir topluluktu."
  },
  {
    "id": "mz_peygamber_135",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Medyen halkına gönderilen, ölçü ve tartıda hile yapmamalarını söyleyen hatip peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Şuayb (a.s.)",
    "wisdom": "Hz. Şuayb güzel konuşmasından ötürü 'Hatibü'l-Enbiya' olarak anılır."
  },
  {
    "id": "mz_peygamber_136",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yazıyı ilk yazan ve terzilik mesleğinin öncüsü olan peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İdris (a.s.)"
    ],
    "correct": "Hz. İdris (a.s.)",
    "wisdom": "Hz. İdris göklere yükseltilen yüce bir makama sahipti."
  },
  {
    "id": "mz_peygamber_137",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kudüs'teki Süleyman Mabedi'nde görevli olan ve Hz. Meryem'in bakımını üstlenen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. Zekeriya (a.s.)",
    "wisdom": "Hz. Zekeriya yaşlılığında evlat istemiş ve kendisine Hz. Yahya müjdelenmiştir."
  },
  {
    "id": "mz_peygamber_138",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Sodom halkının ahlaksızlıklarına karşı mücadele eden peygamber kimdir?",
    "options": [
      "Hz. İbrahim (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Lut (a.s.)",
    "wisdom": "Hz. Lut, Hz. İbrahim'in yeğenidir ve onunla aynı dönemde yaşamıştır."
  },
  {
    "id": "mz_peygamber_139",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Adem'den sonra kendisine 50 sayfa (suhuf) gönderilen peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Şit (a.s.)"
    ],
    "correct": "Hz. Şit (a.s.)",
    "wisdom": "Hz. Şit, Hz. Adem'in Kabil tarafından öldürülen oğlu Habil'e karşılık verilen temiz bir evlattır."
  },
  {
    "id": "mz_peygamber_140",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Zekeriya'nın oğlu olan ve Hz. İsa'nın geleceğini müjdeleyen peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Yahya (a.s.)",
      "Hz. Elyasa (a.s.)"
    ],
    "correct": "Hz. Yahya (a.s.)",
    "wisdom": "Hz. Yahya nehirde insanları vaftiz ettiği için Hristiyan kaynaklarında Vaftizci Yahya olarak geçer."
  },
  {
    "id": "mz_peygamber_141",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, İlk insan ve ilk peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Adem (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İbrahim (a.s.)"
    ],
    "correct": "Hz. Adem (a.s.)",
    "wisdom": "Hz. Adem balçıktan yaratılmış ve kendisine her şeyin ismi öğretilmiştir."
  },
  {
    "id": "mz_peygamber_142",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Tufan felaketinden iman edenleri kurtarmak için gemi yapan peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Nuh (a.s.)",
    "wisdom": "Hz. Nuh insanlığın ikinci babası olarak kabul edilir."
  },
  {
    "id": "mz_peygamber_143",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Nemrut'un ateşe attığı ve ateşin gül bahçesine döndüğü peygamber kimdir?",
    "options": [
      "Hz. İshak (a.s.)",
      "Hz. Yakub (a.s.)",
      "Hz. İbrahim (a.s.)",
      "Hz. İsmail (a.s.)"
    ],
    "correct": "Hz. İbrahim (a.s.)",
    "wisdom": "Hz. İbrahim 'Halilullah' yani Allah'ın dostu unvanına sahiptir."
  },
  {
    "id": "mz_peygamber_144",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. İbrahim'in kurban etmekle imtihan edildiği oğlu kimdir?",
    "options": [
      "Hz. Yusuf (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. İsmail (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. İsmail (a.s.)",
    "wisdom": "Hz. İsmail sabrı ve teslimiyetiyle Kur'an'da övülmüştür."
  },
  {
    "id": "mz_peygamber_145",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yusuf peygamberin babası olan ve oğlunun hasretiyle gözleri kapanan peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Yakub (a.s.)"
    ],
    "correct": "Hz. Yakub (a.s.)",
    "wisdom": "Hz. Yakub'un lakabı İsrail olup, soyundan gelenlere İsrailoğulları denmiştir."
  },
  {
    "id": "mz_peygamber_146",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kardeşleri tarafından kıskanılıp kuyuya atılan ve rüya tabir etme mucizesi olan peygamber kimdir?",
    "options": [
      "Hz. Yakub (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Bünyamin (a.s.)"
    ],
    "correct": "Hz. Yusuf (a.s.)",
    "wisdom": "Hz. Yusuf'un hayatı Kur'an'da 'Ahsenü'l-Kasas' yani kıssaların en güzeli olarak geçer."
  },
  {
    "id": "mz_peygamber_147",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hastalık ve musibetlere karşı gösterdiği muazzam sabırla bilinen peygamber kimdir?",
    "options": [
      "Hz. Yunus (a.s.)",
      "Hz. Zülkifl (a.s.)",
      "Hz. Elyasa (a.s.)",
      "Hz. Eyüp (a.s.)"
    ],
    "correct": "Hz. Eyüp (a.s.)",
    "wisdom": "Hz. Eyüp sabrının mükafatı olarak şifalı bir suyla iyileşmiştir."
  },
  {
    "id": "mz_peygamber_148",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ninova halkına gönderilen ve öfkeyle şehri terk edip balık tarafından yutulan peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Yunus (a.s.)",
      "Hz. Salih (a.s.)"
    ],
    "correct": "Hz. Yunus (a.s.)",
    "wisdom": "Hz. Yunus hatasını anlayıp balığın karnında samimiyetle tövbe etmiştir."
  },
  {
    "id": "mz_peygamber_149",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Asasıyla Kızıldeniz'i ikiye yaran ve Tur Dağı'nda Allah ile konuşan peygamber kimdir?",
    "options": [
      "Hz. Şuayb (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Harun (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya kutsal kitaplardan Tevrat indirilmiştir."
  },
  {
    "id": "mz_peygamber_150",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Zebur indirilen, demiri eliyle bükebilen ve sesinin güzelliğiyle dağları taşa getiren peygamber kimdir?",
    "options": [
      "Hz. Süleyman (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Davud (a.s.)"
    ],
    "correct": "Hz. Davud (a.s.)",
    "wisdom": "Hz. Davud hem peygamber hem de adil bir hükümdardır."
  },
  {
    "id": "mz_peygamber_151",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Rüzgarlara, hayvanlara ve cinlere hükmedebilen hükümdar peygamber kimdir?",
    "options": [
      "Hz. Lokman (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Süleyman (a.s.)",
      "Hz. Üzeyir (a.s.)"
    ],
    "correct": "Hz. Süleyman (a.s.)",
    "wisdom": "Hz. Süleyman babası Hz. Davud'un tahtına geçmiş ve muazzam bir saltanat kurmuştur."
  },
  {
    "id": "mz_peygamber_152",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Beşikteyken konuşan, hastaları iyileştiren ve babasız dünyaya gelen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. İsa (a.s.)",
    "wisdom": "Hz. İsa'ya semavi kitaplardan İncil indirilmiştir."
  },
  {
    "id": "mz_peygamber_153",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Semud kavmine gönderilen ve mucize olarak kayadan gebe bir deve çıkaran peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Nuh (a.s.)"
    ],
    "correct": "Hz. Salih (a.s.)",
    "wisdom": "Semud kavmi mucize deveyi katlettiği için helak olmuştur."
  },
  {
    "id": "mz_peygamber_154",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ad kavmine gönderilen ve kibirleri yüzünden rüzgarla helak olan kavmin peygamberi kimdir?",
    "options": [
      "Hz. Salih (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Şuayb (a.s.)"
    ],
    "correct": "Hz. Hud (a.s.)",
    "wisdom": "Ad kavmi devasa binalar yapan çok güçlü bir topluluktu."
  },
  {
    "id": "mz_peygamber_155",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Medyen halkına gönderilen, ölçü ve tartıda hile yapmamalarını söyleyen hatip peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Şuayb (a.s.)",
    "wisdom": "Hz. Şuayb güzel konuşmasından ötürü 'Hatibü'l-Enbiya' olarak anılır."
  },
  {
    "id": "mz_peygamber_156",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yazıyı ilk yazan ve terzilik mesleğinin öncüsü olan peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İdris (a.s.)"
    ],
    "correct": "Hz. İdris (a.s.)",
    "wisdom": "Hz. İdris göklere yükseltilen yüce bir makama sahipti."
  },
  {
    "id": "mz_peygamber_157",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kudüs'teki Süleyman Mabedi'nde görevli olan ve Hz. Meryem'in bakımını üstlenen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. Zekeriya (a.s.)",
    "wisdom": "Hz. Zekeriya yaşlılığında evlat istemiş ve kendisine Hz. Yahya müjdelenmiştir."
  },
  {
    "id": "mz_peygamber_158",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Sodom halkının ahlaksızlıklarına karşı mücadele eden peygamber kimdir?",
    "options": [
      "Hz. İbrahim (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Lut (a.s.)",
    "wisdom": "Hz. Lut, Hz. İbrahim'in yeğenidir ve onunla aynı dönemde yaşamıştır."
  },
  {
    "id": "mz_peygamber_159",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Adem'den sonra kendisine 50 sayfa (suhuf) gönderilen peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Şit (a.s.)"
    ],
    "correct": "Hz. Şit (a.s.)",
    "wisdom": "Hz. Şit, Hz. Adem'in Kabil tarafından öldürülen oğlu Habil'e karşılık verilen temiz bir evlattır."
  },
  {
    "id": "mz_peygamber_160",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Zekeriya'nın oğlu olan ve Hz. İsa'nın geleceğini müjdeleyen peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Yahya (a.s.)",
      "Hz. Elyasa (a.s.)"
    ],
    "correct": "Hz. Yahya (a.s.)",
    "wisdom": "Hz. Yahya nehirde insanları vaftiz ettiği için Hristiyan kaynaklarında Vaftizci Yahya olarak geçer."
  },
  {
    "id": "mz_peygamber_161",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, İlk insan ve ilk peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Adem (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İbrahim (a.s.)"
    ],
    "correct": "Hz. Adem (a.s.)",
    "wisdom": "Hz. Adem balçıktan yaratılmış ve kendisine her şeyin ismi öğretilmiştir."
  },
  {
    "id": "mz_peygamber_162",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Tufan felaketinden iman edenleri kurtarmak için gemi yapan peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Nuh (a.s.)",
    "wisdom": "Hz. Nuh insanlığın ikinci babası olarak kabul edilir."
  },
  {
    "id": "mz_peygamber_163",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Nemrut'un ateşe attığı ve ateşin gül bahçesine döndüğü peygamber kimdir?",
    "options": [
      "Hz. İshak (a.s.)",
      "Hz. Yakub (a.s.)",
      "Hz. İbrahim (a.s.)",
      "Hz. İsmail (a.s.)"
    ],
    "correct": "Hz. İbrahim (a.s.)",
    "wisdom": "Hz. İbrahim 'Halilullah' yani Allah'ın dostu unvanına sahiptir."
  },
  {
    "id": "mz_peygamber_164",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. İbrahim'in kurban etmekle imtihan edildiği oğlu kimdir?",
    "options": [
      "Hz. Yusuf (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. İsmail (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. İsmail (a.s.)",
    "wisdom": "Hz. İsmail sabrı ve teslimiyetiyle Kur'an'da övülmüştür."
  },
  {
    "id": "mz_peygamber_165",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yusuf peygamberin babası olan ve oğlunun hasretiyle gözleri kapanan peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Yakub (a.s.)"
    ],
    "correct": "Hz. Yakub (a.s.)",
    "wisdom": "Hz. Yakub'un lakabı İsrail olup, soyundan gelenlere İsrailoğulları denmiştir."
  },
  {
    "id": "mz_peygamber_166",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kardeşleri tarafından kıskanılıp kuyuya atılan ve rüya tabir etme mucizesi olan peygamber kimdir?",
    "options": [
      "Hz. Yakub (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Bünyamin (a.s.)"
    ],
    "correct": "Hz. Yusuf (a.s.)",
    "wisdom": "Hz. Yusuf'un hayatı Kur'an'da 'Ahsenü'l-Kasas' yani kıssaların en güzeli olarak geçer."
  },
  {
    "id": "mz_peygamber_167",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hastalık ve musibetlere karşı gösterdiği muazzam sabırla bilinen peygamber kimdir?",
    "options": [
      "Hz. Yunus (a.s.)",
      "Hz. Zülkifl (a.s.)",
      "Hz. Elyasa (a.s.)",
      "Hz. Eyüp (a.s.)"
    ],
    "correct": "Hz. Eyüp (a.s.)",
    "wisdom": "Hz. Eyüp sabrının mükafatı olarak şifalı bir suyla iyileşmiştir."
  },
  {
    "id": "mz_peygamber_168",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ninova halkına gönderilen ve öfkeyle şehri terk edip balık tarafından yutulan peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Yunus (a.s.)",
      "Hz. Salih (a.s.)"
    ],
    "correct": "Hz. Yunus (a.s.)",
    "wisdom": "Hz. Yunus hatasını anlayıp balığın karnında samimiyetle tövbe etmiştir."
  },
  {
    "id": "mz_peygamber_169",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Asasıyla Kızıldeniz'i ikiye yaran ve Tur Dağı'nda Allah ile konuşan peygamber kimdir?",
    "options": [
      "Hz. Şuayb (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Harun (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya kutsal kitaplardan Tevrat indirilmiştir."
  },
  {
    "id": "mz_peygamber_170",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Zebur indirilen, demiri eliyle bükebilen ve sesinin güzelliğiyle dağları taşa getiren peygamber kimdir?",
    "options": [
      "Hz. Süleyman (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Davud (a.s.)"
    ],
    "correct": "Hz. Davud (a.s.)",
    "wisdom": "Hz. Davud hem peygamber hem de adil bir hükümdardır."
  },
  {
    "id": "mz_peygamber_171",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Rüzgarlara, hayvanlara ve cinlere hükmedebilen hükümdar peygamber kimdir?",
    "options": [
      "Hz. Lokman (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Süleyman (a.s.)",
      "Hz. Üzeyir (a.s.)"
    ],
    "correct": "Hz. Süleyman (a.s.)",
    "wisdom": "Hz. Süleyman babası Hz. Davud'un tahtına geçmiş ve muazzam bir saltanat kurmuştur."
  },
  {
    "id": "mz_peygamber_172",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Beşikteyken konuşan, hastaları iyileştiren ve babasız dünyaya gelen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. İsa (a.s.)",
    "wisdom": "Hz. İsa'ya semavi kitaplardan İncil indirilmiştir."
  },
  {
    "id": "mz_peygamber_173",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Semud kavmine gönderilen ve mucize olarak kayadan gebe bir deve çıkaran peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Nuh (a.s.)"
    ],
    "correct": "Hz. Salih (a.s.)",
    "wisdom": "Semud kavmi mucize deveyi katlettiği için helak olmuştur."
  },
  {
    "id": "mz_peygamber_174",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ad kavmine gönderilen ve kibirleri yüzünden rüzgarla helak olan kavmin peygamberi kimdir?",
    "options": [
      "Hz. Salih (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Şuayb (a.s.)"
    ],
    "correct": "Hz. Hud (a.s.)",
    "wisdom": "Ad kavmi devasa binalar yapan çok güçlü bir topluluktu."
  },
  {
    "id": "mz_peygamber_175",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Medyen halkına gönderilen, ölçü ve tartıda hile yapmamalarını söyleyen hatip peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Şuayb (a.s.)",
    "wisdom": "Hz. Şuayb güzel konuşmasından ötürü 'Hatibü'l-Enbiya' olarak anılır."
  },
  {
    "id": "mz_peygamber_176",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yazıyı ilk yazan ve terzilik mesleğinin öncüsü olan peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İdris (a.s.)"
    ],
    "correct": "Hz. İdris (a.s.)",
    "wisdom": "Hz. İdris göklere yükseltilen yüce bir makama sahipti."
  },
  {
    "id": "mz_peygamber_177",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kudüs'teki Süleyman Mabedi'nde görevli olan ve Hz. Meryem'in bakımını üstlenen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. Zekeriya (a.s.)",
    "wisdom": "Hz. Zekeriya yaşlılığında evlat istemiş ve kendisine Hz. Yahya müjdelenmiştir."
  },
  {
    "id": "mz_peygamber_178",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Sodom halkının ahlaksızlıklarına karşı mücadele eden peygamber kimdir?",
    "options": [
      "Hz. İbrahim (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Lut (a.s.)",
    "wisdom": "Hz. Lut, Hz. İbrahim'in yeğenidir ve onunla aynı dönemde yaşamıştır."
  },
  {
    "id": "mz_peygamber_179",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Adem'den sonra kendisine 50 sayfa (suhuf) gönderilen peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Şit (a.s.)"
    ],
    "correct": "Hz. Şit (a.s.)",
    "wisdom": "Hz. Şit, Hz. Adem'in Kabil tarafından öldürülen oğlu Habil'e karşılık verilen temiz bir evlattır."
  },
  {
    "id": "mz_peygamber_180",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Zekeriya'nın oğlu olan ve Hz. İsa'nın geleceğini müjdeleyen peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Yahya (a.s.)",
      "Hz. Elyasa (a.s.)"
    ],
    "correct": "Hz. Yahya (a.s.)",
    "wisdom": "Hz. Yahya nehirde insanları vaftiz ettiği için Hristiyan kaynaklarında Vaftizci Yahya olarak geçer."
  },
  {
    "id": "mz_peygamber_181",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, İlk insan ve ilk peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Adem (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İbrahim (a.s.)"
    ],
    "correct": "Hz. Adem (a.s.)",
    "wisdom": "Hz. Adem balçıktan yaratılmış ve kendisine her şeyin ismi öğretilmiştir."
  },
  {
    "id": "mz_peygamber_182",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Tufan felaketinden iman edenleri kurtarmak için gemi yapan peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Nuh (a.s.)",
    "wisdom": "Hz. Nuh insanlığın ikinci babası olarak kabul edilir."
  },
  {
    "id": "mz_peygamber_183",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Nemrut'un ateşe attığı ve ateşin gül bahçesine döndüğü peygamber kimdir?",
    "options": [
      "Hz. İshak (a.s.)",
      "Hz. Yakub (a.s.)",
      "Hz. İbrahim (a.s.)",
      "Hz. İsmail (a.s.)"
    ],
    "correct": "Hz. İbrahim (a.s.)",
    "wisdom": "Hz. İbrahim 'Halilullah' yani Allah'ın dostu unvanına sahiptir."
  },
  {
    "id": "mz_peygamber_184",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. İbrahim'in kurban etmekle imtihan edildiği oğlu kimdir?",
    "options": [
      "Hz. Yusuf (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. İsmail (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. İsmail (a.s.)",
    "wisdom": "Hz. İsmail sabrı ve teslimiyetiyle Kur'an'da övülmüştür."
  },
  {
    "id": "mz_peygamber_185",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yusuf peygamberin babası olan ve oğlunun hasretiyle gözleri kapanan peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Yakub (a.s.)"
    ],
    "correct": "Hz. Yakub (a.s.)",
    "wisdom": "Hz. Yakub'un lakabı İsrail olup, soyundan gelenlere İsrailoğulları denmiştir."
  },
  {
    "id": "mz_peygamber_186",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kardeşleri tarafından kıskanılıp kuyuya atılan ve rüya tabir etme mucizesi olan peygamber kimdir?",
    "options": [
      "Hz. Yakub (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Bünyamin (a.s.)"
    ],
    "correct": "Hz. Yusuf (a.s.)",
    "wisdom": "Hz. Yusuf'un hayatı Kur'an'da 'Ahsenü'l-Kasas' yani kıssaların en güzeli olarak geçer."
  },
  {
    "id": "mz_peygamber_187",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hastalık ve musibetlere karşı gösterdiği muazzam sabırla bilinen peygamber kimdir?",
    "options": [
      "Hz. Yunus (a.s.)",
      "Hz. Zülkifl (a.s.)",
      "Hz. Elyasa (a.s.)",
      "Hz. Eyüp (a.s.)"
    ],
    "correct": "Hz. Eyüp (a.s.)",
    "wisdom": "Hz. Eyüp sabrının mükafatı olarak şifalı bir suyla iyileşmiştir."
  },
  {
    "id": "mz_peygamber_188",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ninova halkına gönderilen ve öfkeyle şehri terk edip balık tarafından yutulan peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Yunus (a.s.)",
      "Hz. Salih (a.s.)"
    ],
    "correct": "Hz. Yunus (a.s.)",
    "wisdom": "Hz. Yunus hatasını anlayıp balığın karnında samimiyetle tövbe etmiştir."
  },
  {
    "id": "mz_peygamber_189",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Asasıyla Kızıldeniz'i ikiye yaran ve Tur Dağı'nda Allah ile konuşan peygamber kimdir?",
    "options": [
      "Hz. Şuayb (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Harun (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya kutsal kitaplardan Tevrat indirilmiştir."
  },
  {
    "id": "mz_peygamber_190",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Zebur indirilen, demiri eliyle bükebilen ve sesinin güzelliğiyle dağları taşa getiren peygamber kimdir?",
    "options": [
      "Hz. Süleyman (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Davud (a.s.)"
    ],
    "correct": "Hz. Davud (a.s.)",
    "wisdom": "Hz. Davud hem peygamber hem de adil bir hükümdardır."
  },
  {
    "id": "mz_peygamber_191",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Rüzgarlara, hayvanlara ve cinlere hükmedebilen hükümdar peygamber kimdir?",
    "options": [
      "Hz. Lokman (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Süleyman (a.s.)",
      "Hz. Üzeyir (a.s.)"
    ],
    "correct": "Hz. Süleyman (a.s.)",
    "wisdom": "Hz. Süleyman babası Hz. Davud'un tahtına geçmiş ve muazzam bir saltanat kurmuştur."
  },
  {
    "id": "mz_peygamber_192",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Beşikteyken konuşan, hastaları iyileştiren ve babasız dünyaya gelen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. İsa (a.s.)",
    "wisdom": "Hz. İsa'ya semavi kitaplardan İncil indirilmiştir."
  },
  {
    "id": "mz_peygamber_193",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Semud kavmine gönderilen ve mucize olarak kayadan gebe bir deve çıkaran peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Nuh (a.s.)"
    ],
    "correct": "Hz. Salih (a.s.)",
    "wisdom": "Semud kavmi mucize deveyi katlettiği için helak olmuştur."
  },
  {
    "id": "mz_peygamber_194",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Ad kavmine gönderilen ve kibirleri yüzünden rüzgarla helak olan kavmin peygamberi kimdir?",
    "options": [
      "Hz. Salih (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Şuayb (a.s.)"
    ],
    "correct": "Hz. Hud (a.s.)",
    "wisdom": "Ad kavmi devasa binalar yapan çok güçlü bir topluluktu."
  },
  {
    "id": "mz_peygamber_195",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Medyen halkına gönderilen, ölçü ve tartıda hile yapmamalarını söyleyen hatip peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Şuayb (a.s.)",
    "wisdom": "Hz. Şuayb güzel konuşmasından ötürü 'Hatibü'l-Enbiya' olarak anılır."
  },
  {
    "id": "mz_peygamber_196",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Yazıyı ilk yazan ve terzilik mesleğinin öncüsü olan peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İdris (a.s.)"
    ],
    "correct": "Hz. İdris (a.s.)",
    "wisdom": "Hz. İdris göklere yükseltilen yüce bir makama sahipti."
  },
  {
    "id": "mz_peygamber_197",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Kudüs'teki Süleyman Mabedi'nde görevli olan ve Hz. Meryem'in bakımını üstlenen peygamber kimdir?",
    "options": [
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Süleyman (a.s.)"
    ],
    "correct": "Hz. Zekeriya (a.s.)",
    "wisdom": "Hz. Zekeriya yaşlılığında evlat istemiş ve kendisine Hz. Yahya müjdelenmiştir."
  },
  {
    "id": "mz_peygamber_198",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Sodom halkının ahlaksızlıklarına karşı mücadele eden peygamber kimdir?",
    "options": [
      "Hz. İbrahim (a.s.)",
      "Hz. Lut (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Hud (a.s.)"
    ],
    "correct": "Hz. Lut (a.s.)",
    "wisdom": "Hz. Lut, Hz. İbrahim'in yeğenidir ve onunla aynı dönemde yaşamıştır."
  },
  {
    "id": "mz_peygamber_199",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Adem'den sonra kendisine 50 sayfa (suhuf) gönderilen peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. İdris (a.s.)",
      "Hz. Şit (a.s.)"
    ],
    "correct": "Hz. Şit (a.s.)",
    "wisdom": "Hz. Şit, Hz. Adem'in Kabil tarafından öldürülen oğlu Habil'e karşılık verilen temiz bir evlattır."
  },
  {
    "id": "mz_peygamber_200",
    "category": "Peygamberler Tarihi",
    "question": "Kur'an'da anlatılan kıssalara göre, Hz. Zekeriya'nın oğlu olan ve Hz. İsa'nın geleceğini müjdeleyen peygamber kimdir?",
    "options": [
      "Hz. Harun (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Yahya (a.s.)",
      "Hz. Elyasa (a.s.)"
    ],
    "correct": "Hz. Yahya (a.s.)",
    "wisdom": "Hz. Yahya nehirde insanları vaftiz ettiği için Hristiyan kaynaklarında Vaftizci Yahya olarak geçer."
  },
  {
    "id": "mz_devlet_201",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizden sonra İslam devletini yöneten ilk halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ebu Bekir (r.a.)",
    "wisdom": "Hz. Ebu Bekir, ilk halifedir ve Kur'an'ı mushaf haline getirmiştir."
  },
  {
    "id": "mz_devlet_202",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İslam devletinde adaletiyle tanınan ve Kudüs'ü fetheden ikinci halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer dönemi adaletin ve fetihlerin altın çağıdır."
  },
  {
    "id": "mz_devlet_203",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Kur'an-ı Kerim'i çoğaltarak çeşitli merkezlere gönderen üçüncü halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Osman (r.a.)",
    "wisdom": "Hz. Osman 'Zünnureyn' yani iki nur sahibi lakabıyla bilinir."
  },
  {
    "id": "mz_devlet_204",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizin 'Ben ilmin şehriyim, o ise kapısıdır' dediği dördüncü halife kimdir?",
    "options": [
      "Hz. Ali (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Osman (r.a.)"
    ],
    "correct": "Hz. Ali (r.a.)",
    "wisdom": "Hz. Ali cesareti, ilmi ve adaletiyle İslam tarihinin en büyük kahramanlarındandır."
  },
  {
    "id": "mz_devlet_205",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Şam merkezli kurulan ve sınırları İspanya'ya kadar ulaştıran hanedan İslam devleti hangisidir?",
    "options": [
      "Eyyubiler",
      "Emeviler",
      "Fatımiler",
      "Abbasiler"
    ],
    "correct": "Emeviler",
    "wisdom": "Emeviler, Arap milliyetçiliği politikaları nedeniyle eleştirilmiştir."
  },
  {
    "id": "mz_devlet_206",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Bağdat'ı başkent yaparak bilimsel çalışmaları 'Beytü'l-Hikme' ile zirveye taşıyan İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Abbasiler",
      "Emeviler",
      "Osmanlılar"
    ],
    "correct": "Abbasiler",
    "wisdom": "Abbasiler dönemi, İslam medeniyetinin altın çağı olarak bilinir."
  },
  {
    "id": "mz_devlet_207",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İspanya yarımadasında kurulup Avrupa'da bilim ve kültürün yayılmasına öncülük eden devlet hangisidir?",
    "options": [
      "Endülüs Emevi Devleti",
      "Büyük Selçuklu Devleti",
      "Karahanlılar",
      "Gazneliler"
    ],
    "correct": "Endülüs Emevi Devleti",
    "wisdom": "Endülüs medreseleri Avrupalı kralların çocuklarını okuttuğu yerlerdi."
  },
  {
    "id": "mz_devlet_208",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Orta Asya'da İslamiyet'i kabul eden ilk Türk-İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Gazneliler",
      "Uygurlar",
      "Karahanlılar"
    ],
    "correct": "Karahanlılar",
    "wisdom": "Karahanlılar, Satuk Buğra Han döneminde İslamiyet'i kabul etmiştir."
  },
  {
    "id": "mz_devlet_209",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1071 Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açan devlet hangisidir?",
    "options": [
      "Anadolu Selçuklu Devleti",
      "Büyük Selçuklu Devleti",
      "Harzemşahlar",
      "Osmanlı Devleti"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "Sultan Alparslan komutasındaki ordu Bizans'ı yenerek Anadolu fethini başlatmıştır."
  },
  {
    "id": "mz_devlet_210",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'a 17 sefer düzenleyerek İslamiyet'in orada yayılmasını sağlayan sultan kimdir?",
    "options": [
      "Tuğrul Bey",
      "Sultan Mesut",
      "Alparslan",
      "Gazneli Mahmut"
    ],
    "correct": "Gazneli Mahmut",
    "wisdom": "Gazneli Mahmud, sultan unvanını kullanan ilk hükümdardır."
  },
  {
    "id": "mz_devlet_211",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1187 Hıttin Savaşı ile Kudüs'ü Haçlılardan geri alan hükümdar kimdir?",
    "options": [
      "Selahaddin Eyyubi",
      "Baybars",
      "Nureddin Zengi",
      "Kutuz"
    ],
    "correct": "Selahaddin Eyyubi",
    "wisdom": "Selahaddin Eyyubi, Kudüs fatihi olarak tarihe geçmiştir."
  },
  {
    "id": "mz_devlet_212",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Moğolları Ayn Calut Savaşı'nda yeryüzünde ilk kez durduran Mısır merkezli devlet hangisidir?",
    "options": [
      "Memlükler",
      "Abbasiler",
      "Eyyubiler",
      "Gazneliler"
    ],
    "correct": "Memlükler",
    "wisdom": "Memlükler askeri güçleriyle İslam dünyasını Moğol istilasından korumuştur."
  },
  {
    "id": "mz_devlet_213",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'da kurulan ve Taç Mahal anıt mezarını inşa ettiren Türk-İslam devleti hangisidir?",
    "options": [
      "Gazneliler",
      "Karahanlılar",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Babür İmparatorluğu",
    "wisdom": "Şah Cihan, eşi Mümtaz Mahal için bu eseri yaptırmıştır."
  },
  {
    "id": "mz_devlet_214",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır'da kurulan ilk Türk-İslam devleti aşağıdakilerden hangisidir?",
    "options": [
      "Eyyubiler",
      "Memlükler",
      "Tolunoğulları",
      "İhşidiler"
    ],
    "correct": "Tolunoğulları",
    "wisdom": "Mısır'da bağımsızlığını ilan eden ilk Türk hanedanıdır."
  },
  {
    "id": "mz_devlet_215",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1299 yılında Söğüt'te kurulup üç kıtaya hükmeden cihan devleti hangisidir?",
    "options": [
      "Büyük Selçuklu Devleti",
      "Osmanlı Devleti",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Osmanlı Devleti",
    "wisdom": "Osmanlı, adaleti ve hoşgörüsüyle 600 yıl hüküm sürmüştür."
  },
  {
    "id": "mz_devlet_216",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1453 yılında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan padişah kimdir?",
    "options": [
      "I. Süleyman (Kanuni)",
      "II. Abdülhamid",
      "II. Mehmed (Fatih)",
      "Yavuz Sultan Selim"
    ],
    "correct": "II. Mehmed (Fatih)",
    "wisdom": "İstanbul fethi, Peygamberimiz'in hadisindeki müjdeye mazhar olmuştur."
  },
  {
    "id": "mz_devlet_217",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır Seferi ile halifeliği Osmanlı hanedanına kazandıran padişah kimdir?",
    "options": [
      "Fatih Sultan Mehmet",
      "Yavuz Sultan Selim",
      "II. Selim",
      "Kanuni Sultan Süleyman"
    ],
    "correct": "Yavuz Sultan Selim",
    "wisdom": "1517'de halifelik Osmanlı padişahlarına geçmiştir."
  },
  {
    "id": "mz_devlet_218",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Osmanlı tahtında en uzun süre kalan, adil kanunları ve batı seferleriyle ünlü padişah kimdir?",
    "options": [
      "Kanuni Sultan Süleyman",
      "Yavuz Sultan Selim",
      "II. Abdülhamid",
      "Fatih Sultan Mehmet"
    ],
    "correct": "Kanuni Sultan Süleyman",
    "wisdom": "Kanuni, batıda 'Muhteşem Süleyman' olarak bilinir."
  },
  {
    "id": "mz_devlet_219",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Büyük Selçuklu Devleti'nin ünlü veziri ve Nizamiye Medreselerinin kurucusu kimdir?",
    "options": [
      "Nizamülmülk",
      "Sokullu Mehmet Paşa",
      "Köprülü Mehmet Paşa",
      "Vezir Tonyukuk"
    ],
    "correct": "Nizamülmülk",
    "wisdom": "Nizamülmülk, ünlü 'Siyasetname' eserinin yazarıdır."
  },
  {
    "id": "mz_devlet_220",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Endülüs'teki son İslam devleti olan ve Elhamra Sarayı'nı inşa eden devlet hangisidir?",
    "options": [
      "Kurtuba Halifeliği",
      "Beni Ahmer Devleti",
      "Murabıtlar",
      "Muvahhidler"
    ],
    "correct": "Beni Ahmer Devleti",
    "wisdom": "1492 yılında bu devletin yıkılmasıyla Endülüs dönemi kapanmıştır."
  },
  {
    "id": "mz_devlet_221",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizden sonra İslam devletini yöneten ilk halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ebu Bekir (r.a.)",
    "wisdom": "Hz. Ebu Bekir, ilk halifedir ve Kur'an'ı mushaf haline getirmiştir."
  },
  {
    "id": "mz_devlet_222",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İslam devletinde adaletiyle tanınan ve Kudüs'ü fetheden ikinci halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer dönemi adaletin ve fetihlerin altın çağıdır."
  },
  {
    "id": "mz_devlet_223",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Kur'an-ı Kerim'i çoğaltarak çeşitli merkezlere gönderen üçüncü halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Osman (r.a.)",
    "wisdom": "Hz. Osman 'Zünnureyn' yani iki nur sahibi lakabıyla bilinir."
  },
  {
    "id": "mz_devlet_224",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizin 'Ben ilmin şehriyim, o ise kapısıdır' dediği dördüncü halife kimdir?",
    "options": [
      "Hz. Ali (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Osman (r.a.)"
    ],
    "correct": "Hz. Ali (r.a.)",
    "wisdom": "Hz. Ali cesareti, ilmi ve adaletiyle İslam tarihinin en büyük kahramanlarındandır."
  },
  {
    "id": "mz_devlet_225",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Şam merkezli kurulan ve sınırları İspanya'ya kadar ulaştıran hanedan İslam devleti hangisidir?",
    "options": [
      "Eyyubiler",
      "Emeviler",
      "Fatımiler",
      "Abbasiler"
    ],
    "correct": "Emeviler",
    "wisdom": "Emeviler, Arap milliyetçiliği politikaları nedeniyle eleştirilmiştir."
  },
  {
    "id": "mz_devlet_226",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Bağdat'ı başkent yaparak bilimsel çalışmaları 'Beytü'l-Hikme' ile zirveye taşıyan İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Abbasiler",
      "Emeviler",
      "Osmanlılar"
    ],
    "correct": "Abbasiler",
    "wisdom": "Abbasiler dönemi, İslam medeniyetinin altın çağı olarak bilinir."
  },
  {
    "id": "mz_devlet_227",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İspanya yarımadasında kurulup Avrupa'da bilim ve kültürün yayılmasına öncülük eden devlet hangisidir?",
    "options": [
      "Endülüs Emevi Devleti",
      "Büyük Selçuklu Devleti",
      "Karahanlılar",
      "Gazneliler"
    ],
    "correct": "Endülüs Emevi Devleti",
    "wisdom": "Endülüs medreseleri Avrupalı kralların çocuklarını okuttuğu yerlerdi."
  },
  {
    "id": "mz_devlet_228",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Orta Asya'da İslamiyet'i kabul eden ilk Türk-İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Gazneliler",
      "Uygurlar",
      "Karahanlılar"
    ],
    "correct": "Karahanlılar",
    "wisdom": "Karahanlılar, Satuk Buğra Han döneminde İslamiyet'i kabul etmiştir."
  },
  {
    "id": "mz_devlet_229",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1071 Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açan devlet hangisidir?",
    "options": [
      "Anadolu Selçuklu Devleti",
      "Büyük Selçuklu Devleti",
      "Harzemşahlar",
      "Osmanlı Devleti"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "Sultan Alparslan komutasındaki ordu Bizans'ı yenerek Anadolu fethini başlatmıştır."
  },
  {
    "id": "mz_devlet_230",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'a 17 sefer düzenleyerek İslamiyet'in orada yayılmasını sağlayan sultan kimdir?",
    "options": [
      "Tuğrul Bey",
      "Sultan Mesut",
      "Alparslan",
      "Gazneli Mahmut"
    ],
    "correct": "Gazneli Mahmut",
    "wisdom": "Gazneli Mahmud, sultan unvanını kullanan ilk hükümdardır."
  },
  {
    "id": "mz_devlet_231",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1187 Hıttin Savaşı ile Kudüs'ü Haçlılardan geri alan hükümdar kimdir?",
    "options": [
      "Selahaddin Eyyubi",
      "Baybars",
      "Nureddin Zengi",
      "Kutuz"
    ],
    "correct": "Selahaddin Eyyubi",
    "wisdom": "Selahaddin Eyyubi, Kudüs fatihi olarak tarihe geçmiştir."
  },
  {
    "id": "mz_devlet_232",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Moğolları Ayn Calut Savaşı'nda yeryüzünde ilk kez durduran Mısır merkezli devlet hangisidir?",
    "options": [
      "Memlükler",
      "Abbasiler",
      "Eyyubiler",
      "Gazneliler"
    ],
    "correct": "Memlükler",
    "wisdom": "Memlükler askeri güçleriyle İslam dünyasını Moğol istilasından korumuştur."
  },
  {
    "id": "mz_devlet_233",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'da kurulan ve Taç Mahal anıt mezarını inşa ettiren Türk-İslam devleti hangisidir?",
    "options": [
      "Gazneliler",
      "Karahanlılar",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Babür İmparatorluğu",
    "wisdom": "Şah Cihan, eşi Mümtaz Mahal için bu eseri yaptırmıştır."
  },
  {
    "id": "mz_devlet_234",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır'da kurulan ilk Türk-İslam devleti aşağıdakilerden hangisidir?",
    "options": [
      "Eyyubiler",
      "Memlükler",
      "Tolunoğulları",
      "İhşidiler"
    ],
    "correct": "Tolunoğulları",
    "wisdom": "Mısır'da bağımsızlığını ilan eden ilk Türk hanedanıdır."
  },
  {
    "id": "mz_devlet_235",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1299 yılında Söğüt'te kurulup üç kıtaya hükmeden cihan devleti hangisidir?",
    "options": [
      "Büyük Selçuklu Devleti",
      "Osmanlı Devleti",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Osmanlı Devleti",
    "wisdom": "Osmanlı, adaleti ve hoşgörüsüyle 600 yıl hüküm sürmüştür."
  },
  {
    "id": "mz_devlet_236",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1453 yılında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan padişah kimdir?",
    "options": [
      "I. Süleyman (Kanuni)",
      "II. Abdülhamid",
      "II. Mehmed (Fatih)",
      "Yavuz Sultan Selim"
    ],
    "correct": "II. Mehmed (Fatih)",
    "wisdom": "İstanbul fethi, Peygamberimiz'in hadisindeki müjdeye mazhar olmuştur."
  },
  {
    "id": "mz_devlet_237",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır Seferi ile halifeliği Osmanlı hanedanına kazandıran padişah kimdir?",
    "options": [
      "Fatih Sultan Mehmet",
      "Yavuz Sultan Selim",
      "II. Selim",
      "Kanuni Sultan Süleyman"
    ],
    "correct": "Yavuz Sultan Selim",
    "wisdom": "1517'de halifelik Osmanlı padişahlarına geçmiştir."
  },
  {
    "id": "mz_devlet_238",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Osmanlı tahtında en uzun süre kalan, adil kanunları ve batı seferleriyle ünlü padişah kimdir?",
    "options": [
      "Kanuni Sultan Süleyman",
      "Yavuz Sultan Selim",
      "II. Abdülhamid",
      "Fatih Sultan Mehmet"
    ],
    "correct": "Kanuni Sultan Süleyman",
    "wisdom": "Kanuni, batıda 'Muhteşem Süleyman' olarak bilinir."
  },
  {
    "id": "mz_devlet_239",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Büyük Selçuklu Devleti'nin ünlü veziri ve Nizamiye Medreselerinin kurucusu kimdir?",
    "options": [
      "Nizamülmülk",
      "Sokullu Mehmet Paşa",
      "Köprülü Mehmet Paşa",
      "Vezir Tonyukuk"
    ],
    "correct": "Nizamülmülk",
    "wisdom": "Nizamülmülk, ünlü 'Siyasetname' eserinin yazarıdır."
  },
  {
    "id": "mz_devlet_240",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Endülüs'teki son İslam devleti olan ve Elhamra Sarayı'nı inşa eden devlet hangisidir?",
    "options": [
      "Kurtuba Halifeliği",
      "Beni Ahmer Devleti",
      "Murabıtlar",
      "Muvahhidler"
    ],
    "correct": "Beni Ahmer Devleti",
    "wisdom": "1492 yılında bu devletin yıkılmasıyla Endülüs dönemi kapanmıştır."
  },
  {
    "id": "mz_devlet_241",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizden sonra İslam devletini yöneten ilk halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ebu Bekir (r.a.)",
    "wisdom": "Hz. Ebu Bekir, ilk halifedir ve Kur'an'ı mushaf haline getirmiştir."
  },
  {
    "id": "mz_devlet_242",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İslam devletinde adaletiyle tanınan ve Kudüs'ü fetheden ikinci halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer dönemi adaletin ve fetihlerin altın çağıdır."
  },
  {
    "id": "mz_devlet_243",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Kur'an-ı Kerim'i çoğaltarak çeşitli merkezlere gönderen üçüncü halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Osman (r.a.)",
    "wisdom": "Hz. Osman 'Zünnureyn' yani iki nur sahibi lakabıyla bilinir."
  },
  {
    "id": "mz_devlet_244",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizin 'Ben ilmin şehriyim, o ise kapısıdır' dediği dördüncü halife kimdir?",
    "options": [
      "Hz. Ali (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Osman (r.a.)"
    ],
    "correct": "Hz. Ali (r.a.)",
    "wisdom": "Hz. Ali cesareti, ilmi ve adaletiyle İslam tarihinin en büyük kahramanlarındandır."
  },
  {
    "id": "mz_devlet_245",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Şam merkezli kurulan ve sınırları İspanya'ya kadar ulaştıran hanedan İslam devleti hangisidir?",
    "options": [
      "Eyyubiler",
      "Emeviler",
      "Fatımiler",
      "Abbasiler"
    ],
    "correct": "Emeviler",
    "wisdom": "Emeviler, Arap milliyetçiliği politikaları nedeniyle eleştirilmiştir."
  },
  {
    "id": "mz_devlet_246",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Bağdat'ı başkent yaparak bilimsel çalışmaları 'Beytü'l-Hikme' ile zirveye taşıyan İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Abbasiler",
      "Emeviler",
      "Osmanlılar"
    ],
    "correct": "Abbasiler",
    "wisdom": "Abbasiler dönemi, İslam medeniyetinin altın çağı olarak bilinir."
  },
  {
    "id": "mz_devlet_247",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İspanya yarımadasında kurulup Avrupa'da bilim ve kültürün yayılmasına öncülük eden devlet hangisidir?",
    "options": [
      "Endülüs Emevi Devleti",
      "Büyük Selçuklu Devleti",
      "Karahanlılar",
      "Gazneliler"
    ],
    "correct": "Endülüs Emevi Devleti",
    "wisdom": "Endülüs medreseleri Avrupalı kralların çocuklarını okuttuğu yerlerdi."
  },
  {
    "id": "mz_devlet_248",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Orta Asya'da İslamiyet'i kabul eden ilk Türk-İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Gazneliler",
      "Uygurlar",
      "Karahanlılar"
    ],
    "correct": "Karahanlılar",
    "wisdom": "Karahanlılar, Satuk Buğra Han döneminde İslamiyet'i kabul etmiştir."
  },
  {
    "id": "mz_devlet_249",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1071 Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açan devlet hangisidir?",
    "options": [
      "Anadolu Selçuklu Devleti",
      "Büyük Selçuklu Devleti",
      "Harzemşahlar",
      "Osmanlı Devleti"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "Sultan Alparslan komutasındaki ordu Bizans'ı yenerek Anadolu fethini başlatmıştır."
  },
  {
    "id": "mz_devlet_250",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'a 17 sefer düzenleyerek İslamiyet'in orada yayılmasını sağlayan sultan kimdir?",
    "options": [
      "Tuğrul Bey",
      "Sultan Mesut",
      "Alparslan",
      "Gazneli Mahmut"
    ],
    "correct": "Gazneli Mahmut",
    "wisdom": "Gazneli Mahmud, sultan unvanını kullanan ilk hükümdardır."
  },
  {
    "id": "mz_devlet_251",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1187 Hıttin Savaşı ile Kudüs'ü Haçlılardan geri alan hükümdar kimdir?",
    "options": [
      "Selahaddin Eyyubi",
      "Baybars",
      "Nureddin Zengi",
      "Kutuz"
    ],
    "correct": "Selahaddin Eyyubi",
    "wisdom": "Selahaddin Eyyubi, Kudüs fatihi olarak tarihe geçmiştir."
  },
  {
    "id": "mz_devlet_252",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Moğolları Ayn Calut Savaşı'nda yeryüzünde ilk kez durduran Mısır merkezli devlet hangisidir?",
    "options": [
      "Memlükler",
      "Abbasiler",
      "Eyyubiler",
      "Gazneliler"
    ],
    "correct": "Memlükler",
    "wisdom": "Memlükler askeri güçleriyle İslam dünyasını Moğol istilasından korumuştur."
  },
  {
    "id": "mz_devlet_253",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'da kurulan ve Taç Mahal anıt mezarını inşa ettiren Türk-İslam devleti hangisidir?",
    "options": [
      "Gazneliler",
      "Karahanlılar",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Babür İmparatorluğu",
    "wisdom": "Şah Cihan, eşi Mümtaz Mahal için bu eseri yaptırmıştır."
  },
  {
    "id": "mz_devlet_254",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır'da kurulan ilk Türk-İslam devleti aşağıdakilerden hangisidir?",
    "options": [
      "Eyyubiler",
      "Memlükler",
      "Tolunoğulları",
      "İhşidiler"
    ],
    "correct": "Tolunoğulları",
    "wisdom": "Mısır'da bağımsızlığını ilan eden ilk Türk hanedanıdır."
  },
  {
    "id": "mz_devlet_255",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1299 yılında Söğüt'te kurulup üç kıtaya hükmeden cihan devleti hangisidir?",
    "options": [
      "Büyük Selçuklu Devleti",
      "Osmanlı Devleti",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Osmanlı Devleti",
    "wisdom": "Osmanlı, adaleti ve hoşgörüsüyle 600 yıl hüküm sürmüştür."
  },
  {
    "id": "mz_devlet_256",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1453 yılında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan padişah kimdir?",
    "options": [
      "I. Süleyman (Kanuni)",
      "II. Abdülhamid",
      "II. Mehmed (Fatih)",
      "Yavuz Sultan Selim"
    ],
    "correct": "II. Mehmed (Fatih)",
    "wisdom": "İstanbul fethi, Peygamberimiz'in hadisindeki müjdeye mazhar olmuştur."
  },
  {
    "id": "mz_devlet_257",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır Seferi ile halifeliği Osmanlı hanedanına kazandıran padişah kimdir?",
    "options": [
      "Fatih Sultan Mehmet",
      "Yavuz Sultan Selim",
      "II. Selim",
      "Kanuni Sultan Süleyman"
    ],
    "correct": "Yavuz Sultan Selim",
    "wisdom": "1517'de halifelik Osmanlı padişahlarına geçmiştir."
  },
  {
    "id": "mz_devlet_258",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Osmanlı tahtında en uzun süre kalan, adil kanunları ve batı seferleriyle ünlü padişah kimdir?",
    "options": [
      "Kanuni Sultan Süleyman",
      "Yavuz Sultan Selim",
      "II. Abdülhamid",
      "Fatih Sultan Mehmet"
    ],
    "correct": "Kanuni Sultan Süleyman",
    "wisdom": "Kanuni, batıda 'Muhteşem Süleyman' olarak bilinir."
  },
  {
    "id": "mz_devlet_259",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Büyük Selçuklu Devleti'nin ünlü veziri ve Nizamiye Medreselerinin kurucusu kimdir?",
    "options": [
      "Nizamülmülk",
      "Sokullu Mehmet Paşa",
      "Köprülü Mehmet Paşa",
      "Vezir Tonyukuk"
    ],
    "correct": "Nizamülmülk",
    "wisdom": "Nizamülmülk, ünlü 'Siyasetname' eserinin yazarıdır."
  },
  {
    "id": "mz_devlet_260",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Endülüs'teki son İslam devleti olan ve Elhamra Sarayı'nı inşa eden devlet hangisidir?",
    "options": [
      "Kurtuba Halifeliği",
      "Beni Ahmer Devleti",
      "Murabıtlar",
      "Muvahhidler"
    ],
    "correct": "Beni Ahmer Devleti",
    "wisdom": "1492 yılında bu devletin yıkılmasıyla Endülüs dönemi kapanmıştır."
  },
  {
    "id": "mz_devlet_261",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizden sonra İslam devletini yöneten ilk halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ebu Bekir (r.a.)",
    "wisdom": "Hz. Ebu Bekir, ilk halifedir ve Kur'an'ı mushaf haline getirmiştir."
  },
  {
    "id": "mz_devlet_262",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İslam devletinde adaletiyle tanınan ve Kudüs'ü fetheden ikinci halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer dönemi adaletin ve fetihlerin altın çağıdır."
  },
  {
    "id": "mz_devlet_263",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Kur'an-ı Kerim'i çoğaltarak çeşitli merkezlere gönderen üçüncü halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Osman (r.a.)",
    "wisdom": "Hz. Osman 'Zünnureyn' yani iki nur sahibi lakabıyla bilinir."
  },
  {
    "id": "mz_devlet_264",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizin 'Ben ilmin şehriyim, o ise kapısıdır' dediği dördüncü halife kimdir?",
    "options": [
      "Hz. Ali (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Osman (r.a.)"
    ],
    "correct": "Hz. Ali (r.a.)",
    "wisdom": "Hz. Ali cesareti, ilmi ve adaletiyle İslam tarihinin en büyük kahramanlarındandır."
  },
  {
    "id": "mz_devlet_265",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Şam merkezli kurulan ve sınırları İspanya'ya kadar ulaştıran hanedan İslam devleti hangisidir?",
    "options": [
      "Eyyubiler",
      "Emeviler",
      "Fatımiler",
      "Abbasiler"
    ],
    "correct": "Emeviler",
    "wisdom": "Emeviler, Arap milliyetçiliği politikaları nedeniyle eleştirilmiştir."
  },
  {
    "id": "mz_devlet_266",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Bağdat'ı başkent yaparak bilimsel çalışmaları 'Beytü'l-Hikme' ile zirveye taşıyan İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Abbasiler",
      "Emeviler",
      "Osmanlılar"
    ],
    "correct": "Abbasiler",
    "wisdom": "Abbasiler dönemi, İslam medeniyetinin altın çağı olarak bilinir."
  },
  {
    "id": "mz_devlet_267",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İspanya yarımadasında kurulup Avrupa'da bilim ve kültürün yayılmasına öncülük eden devlet hangisidir?",
    "options": [
      "Endülüs Emevi Devleti",
      "Büyük Selçuklu Devleti",
      "Karahanlılar",
      "Gazneliler"
    ],
    "correct": "Endülüs Emevi Devleti",
    "wisdom": "Endülüs medreseleri Avrupalı kralların çocuklarını okuttuğu yerlerdi."
  },
  {
    "id": "mz_devlet_268",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Orta Asya'da İslamiyet'i kabul eden ilk Türk-İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Gazneliler",
      "Uygurlar",
      "Karahanlılar"
    ],
    "correct": "Karahanlılar",
    "wisdom": "Karahanlılar, Satuk Buğra Han döneminde İslamiyet'i kabul etmiştir."
  },
  {
    "id": "mz_devlet_269",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1071 Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açan devlet hangisidir?",
    "options": [
      "Anadolu Selçuklu Devleti",
      "Büyük Selçuklu Devleti",
      "Harzemşahlar",
      "Osmanlı Devleti"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "Sultan Alparslan komutasındaki ordu Bizans'ı yenerek Anadolu fethini başlatmıştır."
  },
  {
    "id": "mz_devlet_270",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'a 17 sefer düzenleyerek İslamiyet'in orada yayılmasını sağlayan sultan kimdir?",
    "options": [
      "Tuğrul Bey",
      "Sultan Mesut",
      "Alparslan",
      "Gazneli Mahmut"
    ],
    "correct": "Gazneli Mahmut",
    "wisdom": "Gazneli Mahmud, sultan unvanını kullanan ilk hükümdardır."
  },
  {
    "id": "mz_devlet_271",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1187 Hıttin Savaşı ile Kudüs'ü Haçlılardan geri alan hükümdar kimdir?",
    "options": [
      "Selahaddin Eyyubi",
      "Baybars",
      "Nureddin Zengi",
      "Kutuz"
    ],
    "correct": "Selahaddin Eyyubi",
    "wisdom": "Selahaddin Eyyubi, Kudüs fatihi olarak tarihe geçmiştir."
  },
  {
    "id": "mz_devlet_272",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Moğolları Ayn Calut Savaşı'nda yeryüzünde ilk kez durduran Mısır merkezli devlet hangisidir?",
    "options": [
      "Memlükler",
      "Abbasiler",
      "Eyyubiler",
      "Gazneliler"
    ],
    "correct": "Memlükler",
    "wisdom": "Memlükler askeri güçleriyle İslam dünyasını Moğol istilasından korumuştur."
  },
  {
    "id": "mz_devlet_273",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'da kurulan ve Taç Mahal anıt mezarını inşa ettiren Türk-İslam devleti hangisidir?",
    "options": [
      "Gazneliler",
      "Karahanlılar",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Babür İmparatorluğu",
    "wisdom": "Şah Cihan, eşi Mümtaz Mahal için bu eseri yaptırmıştır."
  },
  {
    "id": "mz_devlet_274",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır'da kurulan ilk Türk-İslam devleti aşağıdakilerden hangisidir?",
    "options": [
      "Eyyubiler",
      "Memlükler",
      "Tolunoğulları",
      "İhşidiler"
    ],
    "correct": "Tolunoğulları",
    "wisdom": "Mısır'da bağımsızlığını ilan eden ilk Türk hanedanıdır."
  },
  {
    "id": "mz_devlet_275",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1299 yılında Söğüt'te kurulup üç kıtaya hükmeden cihan devleti hangisidir?",
    "options": [
      "Büyük Selçuklu Devleti",
      "Osmanlı Devleti",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Osmanlı Devleti",
    "wisdom": "Osmanlı, adaleti ve hoşgörüsüyle 600 yıl hüküm sürmüştür."
  },
  {
    "id": "mz_devlet_276",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1453 yılında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan padişah kimdir?",
    "options": [
      "I. Süleyman (Kanuni)",
      "II. Abdülhamid",
      "II. Mehmed (Fatih)",
      "Yavuz Sultan Selim"
    ],
    "correct": "II. Mehmed (Fatih)",
    "wisdom": "İstanbul fethi, Peygamberimiz'in hadisindeki müjdeye mazhar olmuştur."
  },
  {
    "id": "mz_devlet_277",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır Seferi ile halifeliği Osmanlı hanedanına kazandıran padişah kimdir?",
    "options": [
      "Fatih Sultan Mehmet",
      "Yavuz Sultan Selim",
      "II. Selim",
      "Kanuni Sultan Süleyman"
    ],
    "correct": "Yavuz Sultan Selim",
    "wisdom": "1517'de halifelik Osmanlı padişahlarına geçmiştir."
  },
  {
    "id": "mz_devlet_278",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Osmanlı tahtında en uzun süre kalan, adil kanunları ve batı seferleriyle ünlü padişah kimdir?",
    "options": [
      "Kanuni Sultan Süleyman",
      "Yavuz Sultan Selim",
      "II. Abdülhamid",
      "Fatih Sultan Mehmet"
    ],
    "correct": "Kanuni Sultan Süleyman",
    "wisdom": "Kanuni, batıda 'Muhteşem Süleyman' olarak bilinir."
  },
  {
    "id": "mz_devlet_279",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Büyük Selçuklu Devleti'nin ünlü veziri ve Nizamiye Medreselerinin kurucusu kimdir?",
    "options": [
      "Nizamülmülk",
      "Sokullu Mehmet Paşa",
      "Köprülü Mehmet Paşa",
      "Vezir Tonyukuk"
    ],
    "correct": "Nizamülmülk",
    "wisdom": "Nizamülmülk, ünlü 'Siyasetname' eserinin yazarıdır."
  },
  {
    "id": "mz_devlet_280",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Endülüs'teki son İslam devleti olan ve Elhamra Sarayı'nı inşa eden devlet hangisidir?",
    "options": [
      "Kurtuba Halifeliği",
      "Beni Ahmer Devleti",
      "Murabıtlar",
      "Muvahhidler"
    ],
    "correct": "Beni Ahmer Devleti",
    "wisdom": "1492 yılında bu devletin yıkılmasıyla Endülüs dönemi kapanmıştır."
  },
  {
    "id": "mz_devlet_281",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizden sonra İslam devletini yöneten ilk halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ebu Bekir (r.a.)",
    "wisdom": "Hz. Ebu Bekir, ilk halifedir ve Kur'an'ı mushaf haline getirmiştir."
  },
  {
    "id": "mz_devlet_282",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İslam devletinde adaletiyle tanınan ve Kudüs'ü fetheden ikinci halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer dönemi adaletin ve fetihlerin altın çağıdır."
  },
  {
    "id": "mz_devlet_283",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Kur'an-ı Kerim'i çoğaltarak çeşitli merkezlere gönderen üçüncü halife kimdir?",
    "options": [
      "Hz. Osman (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Osman (r.a.)",
    "wisdom": "Hz. Osman 'Zünnureyn' yani iki nur sahibi lakabıyla bilinir."
  },
  {
    "id": "mz_devlet_284",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Peygamberimizin 'Ben ilmin şehriyim, o ise kapısıdır' dediği dördüncü halife kimdir?",
    "options": [
      "Hz. Ali (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Osman (r.a.)"
    ],
    "correct": "Hz. Ali (r.a.)",
    "wisdom": "Hz. Ali cesareti, ilmi ve adaletiyle İslam tarihinin en büyük kahramanlarındandır."
  },
  {
    "id": "mz_devlet_285",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Şam merkezli kurulan ve sınırları İspanya'ya kadar ulaştıran hanedan İslam devleti hangisidir?",
    "options": [
      "Eyyubiler",
      "Emeviler",
      "Fatımiler",
      "Abbasiler"
    ],
    "correct": "Emeviler",
    "wisdom": "Emeviler, Arap milliyetçiliği politikaları nedeniyle eleştirilmiştir."
  },
  {
    "id": "mz_devlet_286",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Bağdat'ı başkent yaparak bilimsel çalışmaları 'Beytü'l-Hikme' ile zirveye taşıyan İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Abbasiler",
      "Emeviler",
      "Osmanlılar"
    ],
    "correct": "Abbasiler",
    "wisdom": "Abbasiler dönemi, İslam medeniyetinin altın çağı olarak bilinir."
  },
  {
    "id": "mz_devlet_287",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, İspanya yarımadasında kurulup Avrupa'da bilim ve kültürün yayılmasına öncülük eden devlet hangisidir?",
    "options": [
      "Endülüs Emevi Devleti",
      "Büyük Selçuklu Devleti",
      "Karahanlılar",
      "Gazneliler"
    ],
    "correct": "Endülüs Emevi Devleti",
    "wisdom": "Endülüs medreseleri Avrupalı kralların çocuklarını okuttuğu yerlerdi."
  },
  {
    "id": "mz_devlet_288",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Orta Asya'da İslamiyet'i kabul eden ilk Türk-İslam devleti hangisidir?",
    "options": [
      "Selçuklular",
      "Gazneliler",
      "Uygurlar",
      "Karahanlılar"
    ],
    "correct": "Karahanlılar",
    "wisdom": "Karahanlılar, Satuk Buğra Han döneminde İslamiyet'i kabul etmiştir."
  },
  {
    "id": "mz_devlet_289",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1071 Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açan devlet hangisidir?",
    "options": [
      "Anadolu Selçuklu Devleti",
      "Büyük Selçuklu Devleti",
      "Harzemşahlar",
      "Osmanlı Devleti"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "Sultan Alparslan komutasındaki ordu Bizans'ı yenerek Anadolu fethini başlatmıştır."
  },
  {
    "id": "mz_devlet_290",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'a 17 sefer düzenleyerek İslamiyet'in orada yayılmasını sağlayan sultan kimdir?",
    "options": [
      "Tuğrul Bey",
      "Sultan Mesut",
      "Alparslan",
      "Gazneli Mahmut"
    ],
    "correct": "Gazneli Mahmut",
    "wisdom": "Gazneli Mahmud, sultan unvanını kullanan ilk hükümdardır."
  },
  {
    "id": "mz_devlet_291",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1187 Hıttin Savaşı ile Kudüs'ü Haçlılardan geri alan hükümdar kimdir?",
    "options": [
      "Selahaddin Eyyubi",
      "Baybars",
      "Nureddin Zengi",
      "Kutuz"
    ],
    "correct": "Selahaddin Eyyubi",
    "wisdom": "Selahaddin Eyyubi, Kudüs fatihi olarak tarihe geçmiştir."
  },
  {
    "id": "mz_devlet_292",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Moğolları Ayn Calut Savaşı'nda yeryüzünde ilk kez durduran Mısır merkezli devlet hangisidir?",
    "options": [
      "Memlükler",
      "Abbasiler",
      "Eyyubiler",
      "Gazneliler"
    ],
    "correct": "Memlükler",
    "wisdom": "Memlükler askeri güçleriyle İslam dünyasını Moğol istilasından korumuştur."
  },
  {
    "id": "mz_devlet_293",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Hindistan'da kurulan ve Taç Mahal anıt mezarını inşa ettiren Türk-İslam devleti hangisidir?",
    "options": [
      "Gazneliler",
      "Karahanlılar",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Babür İmparatorluğu",
    "wisdom": "Şah Cihan, eşi Mümtaz Mahal için bu eseri yaptırmıştır."
  },
  {
    "id": "mz_devlet_294",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır'da kurulan ilk Türk-İslam devleti aşağıdakilerden hangisidir?",
    "options": [
      "Eyyubiler",
      "Memlükler",
      "Tolunoğulları",
      "İhşidiler"
    ],
    "correct": "Tolunoğulları",
    "wisdom": "Mısır'da bağımsızlığını ilan eden ilk Türk hanedanıdır."
  },
  {
    "id": "mz_devlet_295",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1299 yılında Söğüt'te kurulup üç kıtaya hükmeden cihan devleti hangisidir?",
    "options": [
      "Büyük Selçuklu Devleti",
      "Osmanlı Devleti",
      "Safeviler",
      "Babür İmparatorluğu"
    ],
    "correct": "Osmanlı Devleti",
    "wisdom": "Osmanlı, adaleti ve hoşgörüsüyle 600 yıl hüküm sürmüştür."
  },
  {
    "id": "mz_devlet_296",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, 1453 yılında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan padişah kimdir?",
    "options": [
      "I. Süleyman (Kanuni)",
      "II. Abdülhamid",
      "II. Mehmed (Fatih)",
      "Yavuz Sultan Selim"
    ],
    "correct": "II. Mehmed (Fatih)",
    "wisdom": "İstanbul fethi, Peygamberimiz'in hadisindeki müjdeye mazhar olmuştur."
  },
  {
    "id": "mz_devlet_297",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Mısır Seferi ile halifeliği Osmanlı hanedanına kazandıran padişah kimdir?",
    "options": [
      "Fatih Sultan Mehmet",
      "Yavuz Sultan Selim",
      "II. Selim",
      "Kanuni Sultan Süleyman"
    ],
    "correct": "Yavuz Sultan Selim",
    "wisdom": "1517'de halifelik Osmanlı padişahlarına geçmiştir."
  },
  {
    "id": "mz_devlet_298",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Osmanlı tahtında en uzun süre kalan, adil kanunları ve batı seferleriyle ünlü padişah kimdir?",
    "options": [
      "Kanuni Sultan Süleyman",
      "Yavuz Sultan Selim",
      "II. Abdülhamid",
      "Fatih Sultan Mehmet"
    ],
    "correct": "Kanuni Sultan Süleyman",
    "wisdom": "Kanuni, batıda 'Muhteşem Süleyman' olarak bilinir."
  },
  {
    "id": "mz_devlet_299",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Büyük Selçuklu Devleti'nin ünlü veziri ve Nizamiye Medreselerinin kurucusu kimdir?",
    "options": [
      "Nizamülmülk",
      "Sokullu Mehmet Paşa",
      "Köprülü Mehmet Paşa",
      "Vezir Tonyukuk"
    ],
    "correct": "Nizamülmülk",
    "wisdom": "Nizamülmülk, ünlü 'Siyasetname' eserinin yazarıdır."
  },
  {
    "id": "mz_devlet_300",
    "category": "İslam Devletleri",
    "question": "Tarih sayfalarında yer alan bilgilere göre, Endülüs'teki son İslam devleti olan ve Elhamra Sarayı'nı inşa eden devlet hangisidir?",
    "options": [
      "Kurtuba Halifeliği",
      "Beni Ahmer Devleti",
      "Murabıtlar",
      "Muvahhidler"
    ],
    "correct": "Beni Ahmer Devleti",
    "wisdom": "1492 yılında bu devletin yıkılmasıyla Endülüs dönemi kapanmıştır."
  },
  {
    "id": "mz_gk_301",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Suyun deniz seviyesinde kaynama noktası kaç santigrat derecedir?",
    "options": [
      "80",
      "100",
      "120",
      "90"
    ],
    "correct": "100",
    "wisdom": "Su normal şartlar altında 100 derecede kaynar."
  },
  {
    "id": "mz_gk_302",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş sistemindeki en büyük gezegen hangisidir?",
    "options": [
      "Mars",
      "Dünya",
      "Jüpiter",
      "Satürn"
    ],
    "correct": "Jüpiter",
    "wisdom": "Jüpiter devasa kütlesiyle sistemin en büyük gezegenidir."
  },
  {
    "id": "mz_gk_303",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yerçekimi kanununu bulan ünlü bilim insanı kimdir?",
    "options": [
      "Einstein",
      "Tesla",
      "Galileo",
      "Newton"
    ],
    "correct": "Newton",
    "wisdom": "Newton, kütleçekim yasasını kafasına düşen elma gözlemiyle formüle etmiştir."
  },
  {
    "id": "mz_gk_304",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Oksijen elementinin kimyasal sembolü hangisidir?",
    "options": [
      "Os",
      "Ox",
      "H",
      "O"
    ],
    "correct": "O",
    "wisdom": "Oksijen 'O' simgesiyle gösterilir."
  },
  {
    "id": "mz_gk_305",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Işığın boşluktaki hızı saniyede yaklaşık kaç kilometredir?",
    "options": [
      "150.000",
      "300.000",
      "100.000",
      "500.000"
    ],
    "correct": "300.000",
    "wisdom": "Işık hızı evrendeki en hızlı yayılma hızı sınırıdır."
  },
  {
    "id": "mz_gk_306",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünya üzerinde kaç adet kıta bulunmaktadır?",
    "options": [
      "5",
      "8",
      "7",
      "6"
    ],
    "correct": "7",
    "wisdom": "Dünyada Asya, Avrupa, Afrika vb. olmak üzere 7 kıta bulunur."
  },
  {
    "id": "mz_gk_307",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyanın en büyük okyanusu hangisidir?",
    "options": [
      "Büyük Okyanus (Pasifik)",
      "Atlas Okyanusu",
      "Arktik Okyanusu",
      "Hint Okyanusu"
    ],
    "correct": "Büyük Okyanus (Pasifik)",
    "wisdom": "Büyük Okyanus dünyanın en geniş su kütlesidir."
  },
  {
    "id": "mz_gk_308",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Canlıların genetik şifresini taşıyan sarmal yapıya ne ad verilir?",
    "options": [
      "Protein",
      "DNA",
      "Enzim",
      "RNA"
    ],
    "correct": "DNA",
    "wisdom": "DNA hücre çekirdeğinde bulunan genetik bilgimizdir."
  },
  {
    "id": "mz_gk_309",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yön bulmaya yarayan, kuzey-güney doğrultusunu gösteren alet hangisidir?",
    "options": [
      "Sismograf",
      "Pusula",
      "Barometre",
      "Termometre"
    ],
    "correct": "Pusula",
    "wisdom": "Pusula, dünyanın manyetik alanını kullanarak yön gösterir."
  },
  {
    "id": "mz_gk_310",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Telefonu icat eden mucit kimdir?",
    "options": [
      "Graham Bell",
      "Tesla",
      "Marconi",
      "Edison"
    ],
    "correct": "Graham Bell",
    "wisdom": "Graham Bell 1876'da telefonu icat etmiştir."
  },
  {
    "id": "mz_gk_311",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Elektrik ampulünü icat eden mucit kimdir?",
    "options": [
      "Franklin",
      "Faraday",
      "Edison",
      "Tesla"
    ],
    "correct": "Edison",
    "wisdom": "Edison ticari olarak kullanılabilen ampulü geliştirmiştir."
  },
  {
    "id": "mz_gk_312",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Havuçta bolca bulunan ve göz sağlığına iyi gelen vitamin hangisidir?",
    "options": [
      "B12 Vitamini",
      "C Vitamini",
      "A Vitamini",
      "D Vitamini"
    ],
    "correct": "A Vitamini",
    "wisdom": "A vitamini gözün görme yeteneğini güçlendirir."
  },
  {
    "id": "mz_gk_313",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökkuşağında kaç adet renk bulunur?",
    "options": [
      "6",
      "8",
      "7",
      "5"
    ],
    "correct": "7",
    "wisdom": "Gökkuşağında sırasıyla kırmızı, sarı vb. 7 renk yer alır."
  },
  {
    "id": "mz_gk_314",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Kovanlarda yaşayan ve çiçek tozlarını bala dönüştüren böcek hangisidir?",
    "options": [
      "Sinek",
      "Kelebek",
      "Arı",
      "Karınca"
    ],
    "correct": "Arı",
    "wisdom": "Arılar ekolojik dengenin korunmasında başroldedir."
  },
  {
    "id": "mz_gk_315",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş bir gezegen midir yoksa yıldız mıdır?",
    "options": [
      "Yıldızdır",
      "Gezegendir",
      "Uydudur",
      "Kuyruklu yıldızdır"
    ],
    "correct": "Yıldızdır",
    "wisdom": "Güneş, sistemimizin merkezindeki orta büyüklükte bir yıldızdır."
  },
  {
    "id": "mz_gk_316",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyayı saran ve canlıların nefes almasını sağlayan gaz tabakası nedir?",
    "options": [
      "Litosfer",
      "Biyosfer",
      "Hidrosfer",
      "Atmosfer"
    ],
    "correct": "Atmosfer",
    "wisdom": "Atmosfer bizi Güneş'in zararlı ışınlarından ve göktaşlarından korur."
  },
  {
    "id": "mz_gk_317",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökyüzünde her zaman kuzey yönünü gösteren ve yön bulmada kullanılan yıldız hangisidir?",
    "options": [
      "Çoban Yıldızı",
      "Sirius",
      "Kutup Yıldızı",
      "Halley"
    ],
    "correct": "Kutup Yıldızı",
    "wisdom": "Kutup Yıldızı, Dünya ekseniyle aynı hizada olduğu için yeri değişmez."
  },
  {
    "id": "mz_gk_318",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Vücudumuzun birincil enerji kaynağı olan besin grubu hangisidir?",
    "options": [
      "Yağlar",
      "Karbonhidratlar",
      "Proteinler",
      "Vitaminler"
    ],
    "correct": "Karbonhidratlar",
    "wisdom": "Karbonhidratlar hızlıca glikoza dönüşerek hücrelerimize enerji sağlar."
  },
  {
    "id": "mz_gk_319",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Bitkilerin Güneş ışığıyla oksijen üretmesi olayına ne denir?",
    "options": [
      "Terleme",
      "Mayalanma",
      "Fotosentez",
      "Solunum"
    ],
    "correct": "Fotosentez",
    "wisdom": "Fotosentez yeryüzündeki oksijen dengesinin temelidir."
  },
  {
    "id": "mz_gk_320",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Deprem dalgalarının büyüklüğünü ölçen alete ne ad verilir?",
    "options": [
      "Altimetre",
      "Sismograf",
      "Rüzgar gülü",
      "Barometre"
    ],
    "correct": "Sismograf",
    "wisdom": "Sismograf deprem hareketlerini kaydeder."
  },
  {
    "id": "mz_gk_321",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Suyun deniz seviyesinde kaynama noktası kaç santigrat derecedir?",
    "options": [
      "80",
      "100",
      "120",
      "90"
    ],
    "correct": "100",
    "wisdom": "Su normal şartlar altında 100 derecede kaynar."
  },
  {
    "id": "mz_gk_322",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş sistemindeki en büyük gezegen hangisidir?",
    "options": [
      "Mars",
      "Dünya",
      "Jüpiter",
      "Satürn"
    ],
    "correct": "Jüpiter",
    "wisdom": "Jüpiter devasa kütlesiyle sistemin en büyük gezegenidir."
  },
  {
    "id": "mz_gk_323",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yerçekimi kanununu bulan ünlü bilim insanı kimdir?",
    "options": [
      "Einstein",
      "Tesla",
      "Galileo",
      "Newton"
    ],
    "correct": "Newton",
    "wisdom": "Newton, kütleçekim yasasını kafasına düşen elma gözlemiyle formüle etmiştir."
  },
  {
    "id": "mz_gk_324",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Oksijen elementinin kimyasal sembolü hangisidir?",
    "options": [
      "Os",
      "Ox",
      "H",
      "O"
    ],
    "correct": "O",
    "wisdom": "Oksijen 'O' simgesiyle gösterilir."
  },
  {
    "id": "mz_gk_325",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Işığın boşluktaki hızı saniyede yaklaşık kaç kilometredir?",
    "options": [
      "150.000",
      "300.000",
      "100.000",
      "500.000"
    ],
    "correct": "300.000",
    "wisdom": "Işık hızı evrendeki en hızlı yayılma hızı sınırıdır."
  },
  {
    "id": "mz_gk_326",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünya üzerinde kaç adet kıta bulunmaktadır?",
    "options": [
      "5",
      "8",
      "7",
      "6"
    ],
    "correct": "7",
    "wisdom": "Dünyada Asya, Avrupa, Afrika vb. olmak üzere 7 kıta bulunur."
  },
  {
    "id": "mz_gk_327",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyanın en büyük okyanusu hangisidir?",
    "options": [
      "Büyük Okyanus (Pasifik)",
      "Atlas Okyanusu",
      "Arktik Okyanusu",
      "Hint Okyanusu"
    ],
    "correct": "Büyük Okyanus (Pasifik)",
    "wisdom": "Büyük Okyanus dünyanın en geniş su kütlesidir."
  },
  {
    "id": "mz_gk_328",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Canlıların genetik şifresini taşıyan sarmal yapıya ne ad verilir?",
    "options": [
      "Protein",
      "DNA",
      "Enzim",
      "RNA"
    ],
    "correct": "DNA",
    "wisdom": "DNA hücre çekirdeğinde bulunan genetik bilgimizdir."
  },
  {
    "id": "mz_gk_329",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yön bulmaya yarayan, kuzey-güney doğrultusunu gösteren alet hangisidir?",
    "options": [
      "Sismograf",
      "Pusula",
      "Barometre",
      "Termometre"
    ],
    "correct": "Pusula",
    "wisdom": "Pusula, dünyanın manyetik alanını kullanarak yön gösterir."
  },
  {
    "id": "mz_gk_330",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Telefonu icat eden mucit kimdir?",
    "options": [
      "Graham Bell",
      "Tesla",
      "Marconi",
      "Edison"
    ],
    "correct": "Graham Bell",
    "wisdom": "Graham Bell 1876'da telefonu icat etmiştir."
  },
  {
    "id": "mz_gk_331",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Elektrik ampulünü icat eden mucit kimdir?",
    "options": [
      "Franklin",
      "Faraday",
      "Edison",
      "Tesla"
    ],
    "correct": "Edison",
    "wisdom": "Edison ticari olarak kullanılabilen ampulü geliştirmiştir."
  },
  {
    "id": "mz_gk_332",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Havuçta bolca bulunan ve göz sağlığına iyi gelen vitamin hangisidir?",
    "options": [
      "B12 Vitamini",
      "C Vitamini",
      "A Vitamini",
      "D Vitamini"
    ],
    "correct": "A Vitamini",
    "wisdom": "A vitamini gözün görme yeteneğini güçlendirir."
  },
  {
    "id": "mz_gk_333",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökkuşağında kaç adet renk bulunur?",
    "options": [
      "6",
      "8",
      "7",
      "5"
    ],
    "correct": "7",
    "wisdom": "Gökkuşağında sırasıyla kırmızı, sarı vb. 7 renk yer alır."
  },
  {
    "id": "mz_gk_334",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Kovanlarda yaşayan ve çiçek tozlarını bala dönüştüren böcek hangisidir?",
    "options": [
      "Sinek",
      "Kelebek",
      "Arı",
      "Karınca"
    ],
    "correct": "Arı",
    "wisdom": "Arılar ekolojik dengenin korunmasında başroldedir."
  },
  {
    "id": "mz_gk_335",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş bir gezegen midir yoksa yıldız mıdır?",
    "options": [
      "Yıldızdır",
      "Gezegendir",
      "Uydudur",
      "Kuyruklu yıldızdır"
    ],
    "correct": "Yıldızdır",
    "wisdom": "Güneş, sistemimizin merkezindeki orta büyüklükte bir yıldızdır."
  },
  {
    "id": "mz_gk_336",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyayı saran ve canlıların nefes almasını sağlayan gaz tabakası nedir?",
    "options": [
      "Litosfer",
      "Biyosfer",
      "Hidrosfer",
      "Atmosfer"
    ],
    "correct": "Atmosfer",
    "wisdom": "Atmosfer bizi Güneş'in zararlı ışınlarından ve göktaşlarından korur."
  },
  {
    "id": "mz_gk_337",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökyüzünde her zaman kuzey yönünü gösteren ve yön bulmada kullanılan yıldız hangisidir?",
    "options": [
      "Çoban Yıldızı",
      "Sirius",
      "Kutup Yıldızı",
      "Halley"
    ],
    "correct": "Kutup Yıldızı",
    "wisdom": "Kutup Yıldızı, Dünya ekseniyle aynı hizada olduğu için yeri değişmez."
  },
  {
    "id": "mz_gk_338",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Vücudumuzun birincil enerji kaynağı olan besin grubu hangisidir?",
    "options": [
      "Yağlar",
      "Karbonhidratlar",
      "Proteinler",
      "Vitaminler"
    ],
    "correct": "Karbonhidratlar",
    "wisdom": "Karbonhidratlar hızlıca glikoza dönüşerek hücrelerimize enerji sağlar."
  },
  {
    "id": "mz_gk_339",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Bitkilerin Güneş ışığıyla oksijen üretmesi olayına ne denir?",
    "options": [
      "Terleme",
      "Mayalanma",
      "Fotosentez",
      "Solunum"
    ],
    "correct": "Fotosentez",
    "wisdom": "Fotosentez yeryüzündeki oksijen dengesinin temelidir."
  },
  {
    "id": "mz_gk_340",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Deprem dalgalarının büyüklüğünü ölçen alete ne ad verilir?",
    "options": [
      "Altimetre",
      "Sismograf",
      "Rüzgar gülü",
      "Barometre"
    ],
    "correct": "Sismograf",
    "wisdom": "Sismograf deprem hareketlerini kaydeder."
  },
  {
    "id": "mz_gk_341",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Suyun deniz seviyesinde kaynama noktası kaç santigrat derecedir?",
    "options": [
      "80",
      "100",
      "120",
      "90"
    ],
    "correct": "100",
    "wisdom": "Su normal şartlar altında 100 derecede kaynar."
  },
  {
    "id": "mz_gk_342",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş sistemindeki en büyük gezegen hangisidir?",
    "options": [
      "Mars",
      "Dünya",
      "Jüpiter",
      "Satürn"
    ],
    "correct": "Jüpiter",
    "wisdom": "Jüpiter devasa kütlesiyle sistemin en büyük gezegenidir."
  },
  {
    "id": "mz_gk_343",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yerçekimi kanununu bulan ünlü bilim insanı kimdir?",
    "options": [
      "Einstein",
      "Tesla",
      "Galileo",
      "Newton"
    ],
    "correct": "Newton",
    "wisdom": "Newton, kütleçekim yasasını kafasına düşen elma gözlemiyle formüle etmiştir."
  },
  {
    "id": "mz_gk_344",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Oksijen elementinin kimyasal sembolü hangisidir?",
    "options": [
      "Os",
      "Ox",
      "H",
      "O"
    ],
    "correct": "O",
    "wisdom": "Oksijen 'O' simgesiyle gösterilir."
  },
  {
    "id": "mz_gk_345",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Işığın boşluktaki hızı saniyede yaklaşık kaç kilometredir?",
    "options": [
      "150.000",
      "300.000",
      "100.000",
      "500.000"
    ],
    "correct": "300.000",
    "wisdom": "Işık hızı evrendeki en hızlı yayılma hızı sınırıdır."
  },
  {
    "id": "mz_gk_346",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünya üzerinde kaç adet kıta bulunmaktadır?",
    "options": [
      "5",
      "8",
      "7",
      "6"
    ],
    "correct": "7",
    "wisdom": "Dünyada Asya, Avrupa, Afrika vb. olmak üzere 7 kıta bulunur."
  },
  {
    "id": "mz_gk_347",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyanın en büyük okyanusu hangisidir?",
    "options": [
      "Büyük Okyanus (Pasifik)",
      "Atlas Okyanusu",
      "Arktik Okyanusu",
      "Hint Okyanusu"
    ],
    "correct": "Büyük Okyanus (Pasifik)",
    "wisdom": "Büyük Okyanus dünyanın en geniş su kütlesidir."
  },
  {
    "id": "mz_gk_348",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Canlıların genetik şifresini taşıyan sarmal yapıya ne ad verilir?",
    "options": [
      "Protein",
      "DNA",
      "Enzim",
      "RNA"
    ],
    "correct": "DNA",
    "wisdom": "DNA hücre çekirdeğinde bulunan genetik bilgimizdir."
  },
  {
    "id": "mz_gk_349",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yön bulmaya yarayan, kuzey-güney doğrultusunu gösteren alet hangisidir?",
    "options": [
      "Sismograf",
      "Pusula",
      "Barometre",
      "Termometre"
    ],
    "correct": "Pusula",
    "wisdom": "Pusula, dünyanın manyetik alanını kullanarak yön gösterir."
  },
  {
    "id": "mz_gk_350",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Telefonu icat eden mucit kimdir?",
    "options": [
      "Graham Bell",
      "Tesla",
      "Marconi",
      "Edison"
    ],
    "correct": "Graham Bell",
    "wisdom": "Graham Bell 1876'da telefonu icat etmiştir."
  },
  {
    "id": "mz_gk_351",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Elektrik ampulünü icat eden mucit kimdir?",
    "options": [
      "Franklin",
      "Faraday",
      "Edison",
      "Tesla"
    ],
    "correct": "Edison",
    "wisdom": "Edison ticari olarak kullanılabilen ampulü geliştirmiştir."
  },
  {
    "id": "mz_gk_352",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Havuçta bolca bulunan ve göz sağlığına iyi gelen vitamin hangisidir?",
    "options": [
      "B12 Vitamini",
      "C Vitamini",
      "A Vitamini",
      "D Vitamini"
    ],
    "correct": "A Vitamini",
    "wisdom": "A vitamini gözün görme yeteneğini güçlendirir."
  },
  {
    "id": "mz_gk_353",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökkuşağında kaç adet renk bulunur?",
    "options": [
      "6",
      "8",
      "7",
      "5"
    ],
    "correct": "7",
    "wisdom": "Gökkuşağında sırasıyla kırmızı, sarı vb. 7 renk yer alır."
  },
  {
    "id": "mz_gk_354",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Kovanlarda yaşayan ve çiçek tozlarını bala dönüştüren böcek hangisidir?",
    "options": [
      "Sinek",
      "Kelebek",
      "Arı",
      "Karınca"
    ],
    "correct": "Arı",
    "wisdom": "Arılar ekolojik dengenin korunmasında başroldedir."
  },
  {
    "id": "mz_gk_355",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş bir gezegen midir yoksa yıldız mıdır?",
    "options": [
      "Yıldızdır",
      "Gezegendir",
      "Uydudur",
      "Kuyruklu yıldızdır"
    ],
    "correct": "Yıldızdır",
    "wisdom": "Güneş, sistemimizin merkezindeki orta büyüklükte bir yıldızdır."
  },
  {
    "id": "mz_gk_356",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyayı saran ve canlıların nefes almasını sağlayan gaz tabakası nedir?",
    "options": [
      "Litosfer",
      "Biyosfer",
      "Hidrosfer",
      "Atmosfer"
    ],
    "correct": "Atmosfer",
    "wisdom": "Atmosfer bizi Güneş'in zararlı ışınlarından ve göktaşlarından korur."
  },
  {
    "id": "mz_gk_357",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökyüzünde her zaman kuzey yönünü gösteren ve yön bulmada kullanılan yıldız hangisidir?",
    "options": [
      "Çoban Yıldızı",
      "Sirius",
      "Kutup Yıldızı",
      "Halley"
    ],
    "correct": "Kutup Yıldızı",
    "wisdom": "Kutup Yıldızı, Dünya ekseniyle aynı hizada olduğu için yeri değişmez."
  },
  {
    "id": "mz_gk_358",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Vücudumuzun birincil enerji kaynağı olan besin grubu hangisidir?",
    "options": [
      "Yağlar",
      "Karbonhidratlar",
      "Proteinler",
      "Vitaminler"
    ],
    "correct": "Karbonhidratlar",
    "wisdom": "Karbonhidratlar hızlıca glikoza dönüşerek hücrelerimize enerji sağlar."
  },
  {
    "id": "mz_gk_359",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Bitkilerin Güneş ışığıyla oksijen üretmesi olayına ne denir?",
    "options": [
      "Terleme",
      "Mayalanma",
      "Fotosentez",
      "Solunum"
    ],
    "correct": "Fotosentez",
    "wisdom": "Fotosentez yeryüzündeki oksijen dengesinin temelidir."
  },
  {
    "id": "mz_gk_360",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Deprem dalgalarının büyüklüğünü ölçen alete ne ad verilir?",
    "options": [
      "Altimetre",
      "Sismograf",
      "Rüzgar gülü",
      "Barometre"
    ],
    "correct": "Sismograf",
    "wisdom": "Sismograf deprem hareketlerini kaydeder."
  },
  {
    "id": "mz_gk_361",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Suyun deniz seviyesinde kaynama noktası kaç santigrat derecedir?",
    "options": [
      "80",
      "100",
      "120",
      "90"
    ],
    "correct": "100",
    "wisdom": "Su normal şartlar altında 100 derecede kaynar."
  },
  {
    "id": "mz_gk_362",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş sistemindeki en büyük gezegen hangisidir?",
    "options": [
      "Mars",
      "Dünya",
      "Jüpiter",
      "Satürn"
    ],
    "correct": "Jüpiter",
    "wisdom": "Jüpiter devasa kütlesiyle sistemin en büyük gezegenidir."
  },
  {
    "id": "mz_gk_363",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yerçekimi kanununu bulan ünlü bilim insanı kimdir?",
    "options": [
      "Einstein",
      "Tesla",
      "Galileo",
      "Newton"
    ],
    "correct": "Newton",
    "wisdom": "Newton, kütleçekim yasasını kafasına düşen elma gözlemiyle formüle etmiştir."
  },
  {
    "id": "mz_gk_364",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Oksijen elementinin kimyasal sembolü hangisidir?",
    "options": [
      "Os",
      "Ox",
      "H",
      "O"
    ],
    "correct": "O",
    "wisdom": "Oksijen 'O' simgesiyle gösterilir."
  },
  {
    "id": "mz_gk_365",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Işığın boşluktaki hızı saniyede yaklaşık kaç kilometredir?",
    "options": [
      "150.000",
      "300.000",
      "100.000",
      "500.000"
    ],
    "correct": "300.000",
    "wisdom": "Işık hızı evrendeki en hızlı yayılma hızı sınırıdır."
  },
  {
    "id": "mz_gk_366",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünya üzerinde kaç adet kıta bulunmaktadır?",
    "options": [
      "5",
      "8",
      "7",
      "6"
    ],
    "correct": "7",
    "wisdom": "Dünyada Asya, Avrupa, Afrika vb. olmak üzere 7 kıta bulunur."
  },
  {
    "id": "mz_gk_367",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyanın en büyük okyanusu hangisidir?",
    "options": [
      "Büyük Okyanus (Pasifik)",
      "Atlas Okyanusu",
      "Arktik Okyanusu",
      "Hint Okyanusu"
    ],
    "correct": "Büyük Okyanus (Pasifik)",
    "wisdom": "Büyük Okyanus dünyanın en geniş su kütlesidir."
  },
  {
    "id": "mz_gk_368",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Canlıların genetik şifresini taşıyan sarmal yapıya ne ad verilir?",
    "options": [
      "Protein",
      "DNA",
      "Enzim",
      "RNA"
    ],
    "correct": "DNA",
    "wisdom": "DNA hücre çekirdeğinde bulunan genetik bilgimizdir."
  },
  {
    "id": "mz_gk_369",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yön bulmaya yarayan, kuzey-güney doğrultusunu gösteren alet hangisidir?",
    "options": [
      "Sismograf",
      "Pusula",
      "Barometre",
      "Termometre"
    ],
    "correct": "Pusula",
    "wisdom": "Pusula, dünyanın manyetik alanını kullanarak yön gösterir."
  },
  {
    "id": "mz_gk_370",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Telefonu icat eden mucit kimdir?",
    "options": [
      "Graham Bell",
      "Tesla",
      "Marconi",
      "Edison"
    ],
    "correct": "Graham Bell",
    "wisdom": "Graham Bell 1876'da telefonu icat etmiştir."
  },
  {
    "id": "mz_gk_371",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Elektrik ampulünü icat eden mucit kimdir?",
    "options": [
      "Franklin",
      "Faraday",
      "Edison",
      "Tesla"
    ],
    "correct": "Edison",
    "wisdom": "Edison ticari olarak kullanılabilen ampulü geliştirmiştir."
  },
  {
    "id": "mz_gk_372",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Havuçta bolca bulunan ve göz sağlığına iyi gelen vitamin hangisidir?",
    "options": [
      "B12 Vitamini",
      "C Vitamini",
      "A Vitamini",
      "D Vitamini"
    ],
    "correct": "A Vitamini",
    "wisdom": "A vitamini gözün görme yeteneğini güçlendirir."
  },
  {
    "id": "mz_gk_373",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökkuşağında kaç adet renk bulunur?",
    "options": [
      "6",
      "8",
      "7",
      "5"
    ],
    "correct": "7",
    "wisdom": "Gökkuşağında sırasıyla kırmızı, sarı vb. 7 renk yer alır."
  },
  {
    "id": "mz_gk_374",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Kovanlarda yaşayan ve çiçek tozlarını bala dönüştüren böcek hangisidir?",
    "options": [
      "Sinek",
      "Kelebek",
      "Arı",
      "Karınca"
    ],
    "correct": "Arı",
    "wisdom": "Arılar ekolojik dengenin korunmasında başroldedir."
  },
  {
    "id": "mz_gk_375",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş bir gezegen midir yoksa yıldız mıdır?",
    "options": [
      "Yıldızdır",
      "Gezegendir",
      "Uydudur",
      "Kuyruklu yıldızdır"
    ],
    "correct": "Yıldızdır",
    "wisdom": "Güneş, sistemimizin merkezindeki orta büyüklükte bir yıldızdır."
  },
  {
    "id": "mz_gk_376",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyayı saran ve canlıların nefes almasını sağlayan gaz tabakası nedir?",
    "options": [
      "Litosfer",
      "Biyosfer",
      "Hidrosfer",
      "Atmosfer"
    ],
    "correct": "Atmosfer",
    "wisdom": "Atmosfer bizi Güneş'in zararlı ışınlarından ve göktaşlarından korur."
  },
  {
    "id": "mz_gk_377",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökyüzünde her zaman kuzey yönünü gösteren ve yön bulmada kullanılan yıldız hangisidir?",
    "options": [
      "Çoban Yıldızı",
      "Sirius",
      "Kutup Yıldızı",
      "Halley"
    ],
    "correct": "Kutup Yıldızı",
    "wisdom": "Kutup Yıldızı, Dünya ekseniyle aynı hizada olduğu için yeri değişmez."
  },
  {
    "id": "mz_gk_378",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Vücudumuzun birincil enerji kaynağı olan besin grubu hangisidir?",
    "options": [
      "Yağlar",
      "Karbonhidratlar",
      "Proteinler",
      "Vitaminler"
    ],
    "correct": "Karbonhidratlar",
    "wisdom": "Karbonhidratlar hızlıca glikoza dönüşerek hücrelerimize enerji sağlar."
  },
  {
    "id": "mz_gk_379",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Bitkilerin Güneş ışığıyla oksijen üretmesi olayına ne denir?",
    "options": [
      "Terleme",
      "Mayalanma",
      "Fotosentez",
      "Solunum"
    ],
    "correct": "Fotosentez",
    "wisdom": "Fotosentez yeryüzündeki oksijen dengesinin temelidir."
  },
  {
    "id": "mz_gk_380",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Deprem dalgalarının büyüklüğünü ölçen alete ne ad verilir?",
    "options": [
      "Altimetre",
      "Sismograf",
      "Rüzgar gülü",
      "Barometre"
    ],
    "correct": "Sismograf",
    "wisdom": "Sismograf deprem hareketlerini kaydeder."
  },
  {
    "id": "mz_gk_381",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Suyun deniz seviyesinde kaynama noktası kaç santigrat derecedir?",
    "options": [
      "80",
      "100",
      "120",
      "90"
    ],
    "correct": "100",
    "wisdom": "Su normal şartlar altında 100 derecede kaynar."
  },
  {
    "id": "mz_gk_382",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş sistemindeki en büyük gezegen hangisidir?",
    "options": [
      "Mars",
      "Dünya",
      "Jüpiter",
      "Satürn"
    ],
    "correct": "Jüpiter",
    "wisdom": "Jüpiter devasa kütlesiyle sistemin en büyük gezegenidir."
  },
  {
    "id": "mz_gk_383",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yerçekimi kanununu bulan ünlü bilim insanı kimdir?",
    "options": [
      "Einstein",
      "Tesla",
      "Galileo",
      "Newton"
    ],
    "correct": "Newton",
    "wisdom": "Newton, kütleçekim yasasını kafasına düşen elma gözlemiyle formüle etmiştir."
  },
  {
    "id": "mz_gk_384",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Oksijen elementinin kimyasal sembolü hangisidir?",
    "options": [
      "Os",
      "Ox",
      "H",
      "O"
    ],
    "correct": "O",
    "wisdom": "Oksijen 'O' simgesiyle gösterilir."
  },
  {
    "id": "mz_gk_385",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Işığın boşluktaki hızı saniyede yaklaşık kaç kilometredir?",
    "options": [
      "150.000",
      "300.000",
      "100.000",
      "500.000"
    ],
    "correct": "300.000",
    "wisdom": "Işık hızı evrendeki en hızlı yayılma hızı sınırıdır."
  },
  {
    "id": "mz_gk_386",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünya üzerinde kaç adet kıta bulunmaktadır?",
    "options": [
      "5",
      "8",
      "7",
      "6"
    ],
    "correct": "7",
    "wisdom": "Dünyada Asya, Avrupa, Afrika vb. olmak üzere 7 kıta bulunur."
  },
  {
    "id": "mz_gk_387",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyanın en büyük okyanusu hangisidir?",
    "options": [
      "Büyük Okyanus (Pasifik)",
      "Atlas Okyanusu",
      "Arktik Okyanusu",
      "Hint Okyanusu"
    ],
    "correct": "Büyük Okyanus (Pasifik)",
    "wisdom": "Büyük Okyanus dünyanın en geniş su kütlesidir."
  },
  {
    "id": "mz_gk_388",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Canlıların genetik şifresini taşıyan sarmal yapıya ne ad verilir?",
    "options": [
      "Protein",
      "DNA",
      "Enzim",
      "RNA"
    ],
    "correct": "DNA",
    "wisdom": "DNA hücre çekirdeğinde bulunan genetik bilgimizdir."
  },
  {
    "id": "mz_gk_389",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Yön bulmaya yarayan, kuzey-güney doğrultusunu gösteren alet hangisidir?",
    "options": [
      "Sismograf",
      "Pusula",
      "Barometre",
      "Termometre"
    ],
    "correct": "Pusula",
    "wisdom": "Pusula, dünyanın manyetik alanını kullanarak yön gösterir."
  },
  {
    "id": "mz_gk_390",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Telefonu icat eden mucit kimdir?",
    "options": [
      "Graham Bell",
      "Tesla",
      "Marconi",
      "Edison"
    ],
    "correct": "Graham Bell",
    "wisdom": "Graham Bell 1876'da telefonu icat etmiştir."
  },
  {
    "id": "mz_gk_391",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Elektrik ampulünü icat eden mucit kimdir?",
    "options": [
      "Franklin",
      "Faraday",
      "Edison",
      "Tesla"
    ],
    "correct": "Edison",
    "wisdom": "Edison ticari olarak kullanılabilen ampulü geliştirmiştir."
  },
  {
    "id": "mz_gk_392",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Havuçta bolca bulunan ve göz sağlığına iyi gelen vitamin hangisidir?",
    "options": [
      "B12 Vitamini",
      "C Vitamini",
      "A Vitamini",
      "D Vitamini"
    ],
    "correct": "A Vitamini",
    "wisdom": "A vitamini gözün görme yeteneğini güçlendirir."
  },
  {
    "id": "mz_gk_393",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökkuşağında kaç adet renk bulunur?",
    "options": [
      "6",
      "8",
      "7",
      "5"
    ],
    "correct": "7",
    "wisdom": "Gökkuşağında sırasıyla kırmızı, sarı vb. 7 renk yer alır."
  },
  {
    "id": "mz_gk_394",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Kovanlarda yaşayan ve çiçek tozlarını bala dönüştüren böcek hangisidir?",
    "options": [
      "Sinek",
      "Kelebek",
      "Arı",
      "Karınca"
    ],
    "correct": "Arı",
    "wisdom": "Arılar ekolojik dengenin korunmasında başroldedir."
  },
  {
    "id": "mz_gk_395",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Güneş bir gezegen midir yoksa yıldız mıdır?",
    "options": [
      "Yıldızdır",
      "Gezegendir",
      "Uydudur",
      "Kuyruklu yıldızdır"
    ],
    "correct": "Yıldızdır",
    "wisdom": "Güneş, sistemimizin merkezindeki orta büyüklükte bir yıldızdır."
  },
  {
    "id": "mz_gk_396",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Dünyayı saran ve canlıların nefes almasını sağlayan gaz tabakası nedir?",
    "options": [
      "Litosfer",
      "Biyosfer",
      "Hidrosfer",
      "Atmosfer"
    ],
    "correct": "Atmosfer",
    "wisdom": "Atmosfer bizi Güneş'in zararlı ışınlarından ve göktaşlarından korur."
  },
  {
    "id": "mz_gk_397",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Gökyüzünde her zaman kuzey yönünü gösteren ve yön bulmada kullanılan yıldız hangisidir?",
    "options": [
      "Çoban Yıldızı",
      "Sirius",
      "Kutup Yıldızı",
      "Halley"
    ],
    "correct": "Kutup Yıldızı",
    "wisdom": "Kutup Yıldızı, Dünya ekseniyle aynı hizada olduğu için yeri değişmez."
  },
  {
    "id": "mz_gk_398",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Vücudumuzun birincil enerji kaynağı olan besin grubu hangisidir?",
    "options": [
      "Yağlar",
      "Karbonhidratlar",
      "Proteinler",
      "Vitaminler"
    ],
    "correct": "Karbonhidratlar",
    "wisdom": "Karbonhidratlar hızlıca glikoza dönüşerek hücrelerimize enerji sağlar."
  },
  {
    "id": "mz_gk_399",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Bitkilerin Güneş ışığıyla oksijen üretmesi olayına ne denir?",
    "options": [
      "Terleme",
      "Mayalanma",
      "Fotosentez",
      "Solunum"
    ],
    "correct": "Fotosentez",
    "wisdom": "Fotosentez yeryüzündeki oksijen dengesinin temelidir."
  },
  {
    "id": "mz_gk_400",
    "category": "Genel Kültür",
    "question": "Genel kültür bilgilerimize göre, Deprem dalgalarının büyüklüğünü ölçen alete ne ad verilir?",
    "options": [
      "Altimetre",
      "Sismograf",
      "Rüzgar gülü",
      "Barometre"
    ],
    "correct": "Sismograf",
    "wisdom": "Sismograf deprem hareketlerini kaydeder."
  },
  {
    "id": "mz_islam_gk_401",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in en uzun suresi hangisidir?",
    "options": [
      "Yasin Suresi",
      "Al-i İmran Suresi",
      "Bakara Suresi",
      "Fatiha Suresi"
    ],
    "correct": "Bakara Suresi",
    "wisdom": "Bakara Suresi 286 ayettir."
  },
  {
    "id": "mz_islam_gk_402",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim toplam kaç cüzden oluşmaktadır?",
    "options": [
      "30",
      "114",
      "40",
      "20"
    ],
    "correct": "30",
    "wisdom": "Kur'an her biri 20 sayfalık 30 cüze ayrılmıştır."
  },
  {
    "id": "mz_islam_gk_403",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de toplam kaç sure bulunmaktadır?",
    "options": [
      "6666",
      "120",
      "110",
      "114"
    ],
    "correct": "114",
    "wisdom": "Kur'an 114 sure barındırır."
  },
  {
    "id": "mz_islam_gk_404",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in ilk inen ayetleri hangi surededir?",
    "options": [
      "Müddessir Suresi",
      "Kalem Suresi",
      "Fatiha Suresi",
      "Alak Suresi"
    ],
    "correct": "Alak Suresi",
    "wisdom": "İlk vahiy Nur Dağı'ndaki Hira Mağarası'nda 'Oku!' emriyle Alak Suresi olarak inmiştir."
  },
  {
    "id": "mz_islam_gk_405",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Allah'ın en güzel isimlerine ne ad verilir?",
    "options": [
      "Esma-i Nebi",
      "Esma-i Hüsna",
      "Sıfat-ı Subutiyye",
      "Kelime-i Tevhid"
    ],
    "correct": "Esma-i Hüsna",
    "wisdom": "Esma-i Hüsna Allah'ın 99 ismini ifade eder."
  },
  {
    "id": "mz_islam_gk_406",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, En güvenilir altı hadis kitabına ne ad verilir?",
    "options": [
      "Kütüb-i Sitte",
      "Sahih-i Buhari",
      "Riyazü's-Salihin",
      "Kütüb-i Erbaa"
    ],
    "correct": "Kütüb-i Sitte",
    "wisdom": "Buhari ve Müslim gibi en sahih 6 hadis derlemesidir."
  },
  {
    "id": "mz_islam_gk_407",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Müslümanların ilk kıblesi olan ve Kudüs'te bulunan mescid hangisidir?",
    "options": [
      "Mescid-i Nebevi",
      "Mescid-i Haram",
      "Mescid-i Aksa",
      "Kuba Mescidi"
    ],
    "correct": "Mescid-i Aksa",
    "wisdom": "Mescid-i Aksa İsra ve Mirac olaylarının yaşandığı yerdir."
  },
  {
    "id": "mz_islam_gk_408",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam tarihinde inşa edilen ilk mescit hangisidir?",
    "options": [
      "Kuba Mescidi",
      "Mescid-i Aksa",
      "Mescid-i Nebevi",
      "Mescid-i Haram"
    ],
    "correct": "Kuba Mescidi",
    "wisdom": "Kuba mescidi hicret esnasında Peygamberimiz tarafından yapılmıştır."
  },
  {
    "id": "mz_islam_gk_409",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Hicri takvimin başlangıcı olarak kabul edilen tarihi olay hangisidir?",
    "options": [
      "Hicret (622)",
      "İlk Vahiy",
      "Peygamberimizin Doğumu",
      "Mekke'nin Fethi"
    ],
    "correct": "Hicret (622)",
    "wisdom": "622 yılındaki Hicret, takvimin başlangıcıdır."
  },
  {
    "id": "mz_islam_gk_410",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Şaban ayının 15. gecesi olan af ve mağfiret gecesi hangisidir?",
    "options": [
      "Berat Kandili",
      "Regaip Kandili",
      "Mevlid Kandili",
      "Kadir Gecesi"
    ],
    "correct": "Berat Kandili",
    "wisdom": "Berat, kurtuluş ve günahlardan arınma gecesidir."
  },
  {
    "id": "mz_islam_gk_411",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Bin aydan daha hayırlı olduğu Kur'an'da bildirilen gece hangisidir?",
    "options": [
      "Miraç Gecesi",
      "Regaip Gecesi",
      "Kadir Gecesi",
      "Mevlid Gecesi"
    ],
    "correct": "Kadir Gecesi",
    "wisdom": "Kadir gecesi Kur'an'ın indirilmeye başlandığı gecedir."
  },
  {
    "id": "mz_islam_gk_412",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamberlerin iddialarını doğrulamak için Allah'ın izniyle gösterdikleri olağanüstü olaylara ne denir?",
    "options": [
      "İstidrac",
      "İrhas",
      "Keramet",
      "Mucize"
    ],
    "correct": "Mucize",
    "wisdom": "Mucizeler insanları aciz bırakan ilahi yardımlardır."
  },
  {
    "id": "mz_islam_gk_413",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber olmayan salih kulların gösterdiği olağanüstü hallere ne denir?",
    "options": [
      "Sihir",
      "Keramet",
      "Mucize",
      "İstidrac"
    ],
    "correct": "Keramet",
    "wisdom": "Keramet, salih kullara ikram edilen olağanüstülüklerdir."
  },
  {
    "id": "mz_islam_gk_414",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an ayetlerini açıklayan ve yorumlayan bilim dalı hangisidir?",
    "options": [
      "Tefsir",
      "Hadis",
      "Fıkıh",
      "Kelam"
    ],
    "correct": "Tefsir",
    "wisdom": "Tefsir alimlerine Müfessir denir."
  },
  {
    "id": "mz_islam_gk_415",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in söz, davranış ve onaylarına ne ad verilir?",
    "options": [
      "Fıkıh",
      "İcma",
      "Hadis / Sünnet",
      "Ayet"
    ],
    "correct": "Hadis / Sünnet",
    "wisdom": "Hadisler dinimizin ikinci temel kaynağıdır."
  },
  {
    "id": "mz_islam_gk_416",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam hukukunu ve ibadetlerin yapılış şekillerini inceleyen ilim dalı hangisidir?",
    "options": [
      "Fıkıh",
      "Tefsir",
      "Tasavvuf",
      "Kelam"
    ],
    "correct": "Fıkıh",
    "wisdom": "Fıkıh pratik hayat kurallarını inceler."
  },
  {
    "id": "mz_islam_gk_417",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam inanç esaslarını akli ve nakli delillerle savunan ilim dalı hangisidir?",
    "options": [
      "Hadis",
      "Siyer",
      "Kelam",
      "Fıkıh"
    ],
    "correct": "Kelam",
    "wisdom": "Kelam inanca yönelik şüpheleri gidermeyi amaçlar."
  },
  {
    "id": "mz_islam_gk_418",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in hayatını konu edinen bilim dalı hangisidir?",
    "options": [
      "Tasavvuf",
      "Siyer",
      "Tefsir",
      "Kelam"
    ],
    "correct": "Siyer",
    "wisdom": "Siyer, peygamberimizin hayatını kronolojik olarak anlatır."
  },
  {
    "id": "mz_islam_gk_419",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de yer alan numaralandırılmış ayetlerin toplamı kaçtır?",
    "options": [
      "6666",
      "6000",
      "6236",
      "7000"
    ],
    "correct": "6236",
    "wisdom": "Resmi numaralandırmada 6236 ayet bulunmaktadır."
  },
  {
    "id": "mz_islam_gk_420",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in tamamını ezbere bilen kişiye ne ad verilir?",
    "options": [
      "Müezzin",
      "Kari",
      "İmam",
      "Hafız"
    ],
    "correct": "Hafız",
    "wisdom": "Hafızlık Kur'an'ın sözlü olarak korunmasını sağlar."
  },
  {
    "id": "mz_islam_gk_421",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in en uzun suresi hangisidir?",
    "options": [
      "Yasin Suresi",
      "Al-i İmran Suresi",
      "Bakara Suresi",
      "Fatiha Suresi"
    ],
    "correct": "Bakara Suresi",
    "wisdom": "Bakara Suresi 286 ayettir."
  },
  {
    "id": "mz_islam_gk_422",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim toplam kaç cüzden oluşmaktadır?",
    "options": [
      "30",
      "114",
      "40",
      "20"
    ],
    "correct": "30",
    "wisdom": "Kur'an her biri 20 sayfalık 30 cüze ayrılmıştır."
  },
  {
    "id": "mz_islam_gk_423",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de toplam kaç sure bulunmaktadır?",
    "options": [
      "6666",
      "120",
      "110",
      "114"
    ],
    "correct": "114",
    "wisdom": "Kur'an 114 sure barındırır."
  },
  {
    "id": "mz_islam_gk_424",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in ilk inen ayetleri hangi surededir?",
    "options": [
      "Müddessir Suresi",
      "Kalem Suresi",
      "Fatiha Suresi",
      "Alak Suresi"
    ],
    "correct": "Alak Suresi",
    "wisdom": "İlk vahiy Nur Dağı'ndaki Hira Mağarası'nda 'Oku!' emriyle Alak Suresi olarak inmiştir."
  },
  {
    "id": "mz_islam_gk_425",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Allah'ın en güzel isimlerine ne ad verilir?",
    "options": [
      "Esma-i Nebi",
      "Esma-i Hüsna",
      "Sıfat-ı Subutiyye",
      "Kelime-i Tevhid"
    ],
    "correct": "Esma-i Hüsna",
    "wisdom": "Esma-i Hüsna Allah'ın 99 ismini ifade eder."
  },
  {
    "id": "mz_islam_gk_426",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, En güvenilir altı hadis kitabına ne ad verilir?",
    "options": [
      "Kütüb-i Sitte",
      "Sahih-i Buhari",
      "Riyazü's-Salihin",
      "Kütüb-i Erbaa"
    ],
    "correct": "Kütüb-i Sitte",
    "wisdom": "Buhari ve Müslim gibi en sahih 6 hadis derlemesidir."
  },
  {
    "id": "mz_islam_gk_427",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Müslümanların ilk kıblesi olan ve Kudüs'te bulunan mescid hangisidir?",
    "options": [
      "Mescid-i Nebevi",
      "Mescid-i Haram",
      "Mescid-i Aksa",
      "Kuba Mescidi"
    ],
    "correct": "Mescid-i Aksa",
    "wisdom": "Mescid-i Aksa İsra ve Mirac olaylarının yaşandığı yerdir."
  },
  {
    "id": "mz_islam_gk_428",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam tarihinde inşa edilen ilk mescit hangisidir?",
    "options": [
      "Kuba Mescidi",
      "Mescid-i Aksa",
      "Mescid-i Nebevi",
      "Mescid-i Haram"
    ],
    "correct": "Kuba Mescidi",
    "wisdom": "Kuba mescidi hicret esnasında Peygamberimiz tarafından yapılmıştır."
  },
  {
    "id": "mz_islam_gk_429",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Hicri takvimin başlangıcı olarak kabul edilen tarihi olay hangisidir?",
    "options": [
      "Hicret (622)",
      "İlk Vahiy",
      "Peygamberimizin Doğumu",
      "Mekke'nin Fethi"
    ],
    "correct": "Hicret (622)",
    "wisdom": "622 yılındaki Hicret, takvimin başlangıcıdır."
  },
  {
    "id": "mz_islam_gk_430",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Şaban ayının 15. gecesi olan af ve mağfiret gecesi hangisidir?",
    "options": [
      "Berat Kandili",
      "Regaip Kandili",
      "Mevlid Kandili",
      "Kadir Gecesi"
    ],
    "correct": "Berat Kandili",
    "wisdom": "Berat, kurtuluş ve günahlardan arınma gecesidir."
  },
  {
    "id": "mz_islam_gk_431",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Bin aydan daha hayırlı olduğu Kur'an'da bildirilen gece hangisidir?",
    "options": [
      "Miraç Gecesi",
      "Regaip Gecesi",
      "Kadir Gecesi",
      "Mevlid Gecesi"
    ],
    "correct": "Kadir Gecesi",
    "wisdom": "Kadir gecesi Kur'an'ın indirilmeye başlandığı gecedir."
  },
  {
    "id": "mz_islam_gk_432",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamberlerin iddialarını doğrulamak için Allah'ın izniyle gösterdikleri olağanüstü olaylara ne denir?",
    "options": [
      "İstidrac",
      "İrhas",
      "Keramet",
      "Mucize"
    ],
    "correct": "Mucize",
    "wisdom": "Mucizeler insanları aciz bırakan ilahi yardımlardır."
  },
  {
    "id": "mz_islam_gk_433",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber olmayan salih kulların gösterdiği olağanüstü hallere ne denir?",
    "options": [
      "Sihir",
      "Keramet",
      "Mucize",
      "İstidrac"
    ],
    "correct": "Keramet",
    "wisdom": "Keramet, salih kullara ikram edilen olağanüstülüklerdir."
  },
  {
    "id": "mz_islam_gk_434",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an ayetlerini açıklayan ve yorumlayan bilim dalı hangisidir?",
    "options": [
      "Tefsir",
      "Hadis",
      "Fıkıh",
      "Kelam"
    ],
    "correct": "Tefsir",
    "wisdom": "Tefsir alimlerine Müfessir denir."
  },
  {
    "id": "mz_islam_gk_435",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in söz, davranış ve onaylarına ne ad verilir?",
    "options": [
      "Fıkıh",
      "İcma",
      "Hadis / Sünnet",
      "Ayet"
    ],
    "correct": "Hadis / Sünnet",
    "wisdom": "Hadisler dinimizin ikinci temel kaynağıdır."
  },
  {
    "id": "mz_islam_gk_436",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam hukukunu ve ibadetlerin yapılış şekillerini inceleyen ilim dalı hangisidir?",
    "options": [
      "Fıkıh",
      "Tefsir",
      "Tasavvuf",
      "Kelam"
    ],
    "correct": "Fıkıh",
    "wisdom": "Fıkıh pratik hayat kurallarını inceler."
  },
  {
    "id": "mz_islam_gk_437",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam inanç esaslarını akli ve nakli delillerle savunan ilim dalı hangisidir?",
    "options": [
      "Hadis",
      "Siyer",
      "Kelam",
      "Fıkıh"
    ],
    "correct": "Kelam",
    "wisdom": "Kelam inanca yönelik şüpheleri gidermeyi amaçlar."
  },
  {
    "id": "mz_islam_gk_438",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in hayatını konu edinen bilim dalı hangisidir?",
    "options": [
      "Tasavvuf",
      "Siyer",
      "Tefsir",
      "Kelam"
    ],
    "correct": "Siyer",
    "wisdom": "Siyer, peygamberimizin hayatını kronolojik olarak anlatır."
  },
  {
    "id": "mz_islam_gk_439",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de yer alan numaralandırılmış ayetlerin toplamı kaçtır?",
    "options": [
      "6666",
      "6000",
      "6236",
      "7000"
    ],
    "correct": "6236",
    "wisdom": "Resmi numaralandırmada 6236 ayet bulunmaktadır."
  },
  {
    "id": "mz_islam_gk_440",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in tamamını ezbere bilen kişiye ne ad verilir?",
    "options": [
      "Müezzin",
      "Kari",
      "İmam",
      "Hafız"
    ],
    "correct": "Hafız",
    "wisdom": "Hafızlık Kur'an'ın sözlü olarak korunmasını sağlar."
  },
  {
    "id": "mz_islam_gk_441",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in en uzun suresi hangisidir?",
    "options": [
      "Yasin Suresi",
      "Al-i İmran Suresi",
      "Bakara Suresi",
      "Fatiha Suresi"
    ],
    "correct": "Bakara Suresi",
    "wisdom": "Bakara Suresi 286 ayettir."
  },
  {
    "id": "mz_islam_gk_442",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim toplam kaç cüzden oluşmaktadır?",
    "options": [
      "30",
      "114",
      "40",
      "20"
    ],
    "correct": "30",
    "wisdom": "Kur'an her biri 20 sayfalık 30 cüze ayrılmıştır."
  },
  {
    "id": "mz_islam_gk_443",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de toplam kaç sure bulunmaktadır?",
    "options": [
      "6666",
      "120",
      "110",
      "114"
    ],
    "correct": "114",
    "wisdom": "Kur'an 114 sure barındırır."
  },
  {
    "id": "mz_islam_gk_444",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in ilk inen ayetleri hangi surededir?",
    "options": [
      "Müddessir Suresi",
      "Kalem Suresi",
      "Fatiha Suresi",
      "Alak Suresi"
    ],
    "correct": "Alak Suresi",
    "wisdom": "İlk vahiy Nur Dağı'ndaki Hira Mağarası'nda 'Oku!' emriyle Alak Suresi olarak inmiştir."
  },
  {
    "id": "mz_islam_gk_445",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Allah'ın en güzel isimlerine ne ad verilir?",
    "options": [
      "Esma-i Nebi",
      "Esma-i Hüsna",
      "Sıfat-ı Subutiyye",
      "Kelime-i Tevhid"
    ],
    "correct": "Esma-i Hüsna",
    "wisdom": "Esma-i Hüsna Allah'ın 99 ismini ifade eder."
  },
  {
    "id": "mz_islam_gk_446",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, En güvenilir altı hadis kitabına ne ad verilir?",
    "options": [
      "Kütüb-i Sitte",
      "Sahih-i Buhari",
      "Riyazü's-Salihin",
      "Kütüb-i Erbaa"
    ],
    "correct": "Kütüb-i Sitte",
    "wisdom": "Buhari ve Müslim gibi en sahih 6 hadis derlemesidir."
  },
  {
    "id": "mz_islam_gk_447",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Müslümanların ilk kıblesi olan ve Kudüs'te bulunan mescid hangisidir?",
    "options": [
      "Mescid-i Nebevi",
      "Mescid-i Haram",
      "Mescid-i Aksa",
      "Kuba Mescidi"
    ],
    "correct": "Mescid-i Aksa",
    "wisdom": "Mescid-i Aksa İsra ve Mirac olaylarının yaşandığı yerdir."
  },
  {
    "id": "mz_islam_gk_448",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam tarihinde inşa edilen ilk mescit hangisidir?",
    "options": [
      "Kuba Mescidi",
      "Mescid-i Aksa",
      "Mescid-i Nebevi",
      "Mescid-i Haram"
    ],
    "correct": "Kuba Mescidi",
    "wisdom": "Kuba mescidi hicret esnasında Peygamberimiz tarafından yapılmıştır."
  },
  {
    "id": "mz_islam_gk_449",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Hicri takvimin başlangıcı olarak kabul edilen tarihi olay hangisidir?",
    "options": [
      "Hicret (622)",
      "İlk Vahiy",
      "Peygamberimizin Doğumu",
      "Mekke'nin Fethi"
    ],
    "correct": "Hicret (622)",
    "wisdom": "622 yılındaki Hicret, takvimin başlangıcıdır."
  },
  {
    "id": "mz_islam_gk_450",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Şaban ayının 15. gecesi olan af ve mağfiret gecesi hangisidir?",
    "options": [
      "Berat Kandili",
      "Regaip Kandili",
      "Mevlid Kandili",
      "Kadir Gecesi"
    ],
    "correct": "Berat Kandili",
    "wisdom": "Berat, kurtuluş ve günahlardan arınma gecesidir."
  },
  {
    "id": "mz_islam_gk_451",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Bin aydan daha hayırlı olduğu Kur'an'da bildirilen gece hangisidir?",
    "options": [
      "Miraç Gecesi",
      "Regaip Gecesi",
      "Kadir Gecesi",
      "Mevlid Gecesi"
    ],
    "correct": "Kadir Gecesi",
    "wisdom": "Kadir gecesi Kur'an'ın indirilmeye başlandığı gecedir."
  },
  {
    "id": "mz_islam_gk_452",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamberlerin iddialarını doğrulamak için Allah'ın izniyle gösterdikleri olağanüstü olaylara ne denir?",
    "options": [
      "İstidrac",
      "İrhas",
      "Keramet",
      "Mucize"
    ],
    "correct": "Mucize",
    "wisdom": "Mucizeler insanları aciz bırakan ilahi yardımlardır."
  },
  {
    "id": "mz_islam_gk_453",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber olmayan salih kulların gösterdiği olağanüstü hallere ne denir?",
    "options": [
      "Sihir",
      "Keramet",
      "Mucize",
      "İstidrac"
    ],
    "correct": "Keramet",
    "wisdom": "Keramet, salih kullara ikram edilen olağanüstülüklerdir."
  },
  {
    "id": "mz_islam_gk_454",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an ayetlerini açıklayan ve yorumlayan bilim dalı hangisidir?",
    "options": [
      "Tefsir",
      "Hadis",
      "Fıkıh",
      "Kelam"
    ],
    "correct": "Tefsir",
    "wisdom": "Tefsir alimlerine Müfessir denir."
  },
  {
    "id": "mz_islam_gk_455",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in söz, davranış ve onaylarına ne ad verilir?",
    "options": [
      "Fıkıh",
      "İcma",
      "Hadis / Sünnet",
      "Ayet"
    ],
    "correct": "Hadis / Sünnet",
    "wisdom": "Hadisler dinimizin ikinci temel kaynağıdır."
  },
  {
    "id": "mz_islam_gk_456",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam hukukunu ve ibadetlerin yapılış şekillerini inceleyen ilim dalı hangisidir?",
    "options": [
      "Fıkıh",
      "Tefsir",
      "Tasavvuf",
      "Kelam"
    ],
    "correct": "Fıkıh",
    "wisdom": "Fıkıh pratik hayat kurallarını inceler."
  },
  {
    "id": "mz_islam_gk_457",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam inanç esaslarını akli ve nakli delillerle savunan ilim dalı hangisidir?",
    "options": [
      "Hadis",
      "Siyer",
      "Kelam",
      "Fıkıh"
    ],
    "correct": "Kelam",
    "wisdom": "Kelam inanca yönelik şüpheleri gidermeyi amaçlar."
  },
  {
    "id": "mz_islam_gk_458",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in hayatını konu edinen bilim dalı hangisidir?",
    "options": [
      "Tasavvuf",
      "Siyer",
      "Tefsir",
      "Kelam"
    ],
    "correct": "Siyer",
    "wisdom": "Siyer, peygamberimizin hayatını kronolojik olarak anlatır."
  },
  {
    "id": "mz_islam_gk_459",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de yer alan numaralandırılmış ayetlerin toplamı kaçtır?",
    "options": [
      "6666",
      "6000",
      "6236",
      "7000"
    ],
    "correct": "6236",
    "wisdom": "Resmi numaralandırmada 6236 ayet bulunmaktadır."
  },
  {
    "id": "mz_islam_gk_460",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in tamamını ezbere bilen kişiye ne ad verilir?",
    "options": [
      "Müezzin",
      "Kari",
      "İmam",
      "Hafız"
    ],
    "correct": "Hafız",
    "wisdom": "Hafızlık Kur'an'ın sözlü olarak korunmasını sağlar."
  },
  {
    "id": "mz_islam_gk_461",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in en uzun suresi hangisidir?",
    "options": [
      "Yasin Suresi",
      "Al-i İmran Suresi",
      "Bakara Suresi",
      "Fatiha Suresi"
    ],
    "correct": "Bakara Suresi",
    "wisdom": "Bakara Suresi 286 ayettir."
  },
  {
    "id": "mz_islam_gk_462",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim toplam kaç cüzden oluşmaktadır?",
    "options": [
      "30",
      "114",
      "40",
      "20"
    ],
    "correct": "30",
    "wisdom": "Kur'an her biri 20 sayfalık 30 cüze ayrılmıştır."
  },
  {
    "id": "mz_islam_gk_463",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de toplam kaç sure bulunmaktadır?",
    "options": [
      "6666",
      "120",
      "110",
      "114"
    ],
    "correct": "114",
    "wisdom": "Kur'an 114 sure barındırır."
  },
  {
    "id": "mz_islam_gk_464",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in ilk inen ayetleri hangi surededir?",
    "options": [
      "Müddessir Suresi",
      "Kalem Suresi",
      "Fatiha Suresi",
      "Alak Suresi"
    ],
    "correct": "Alak Suresi",
    "wisdom": "İlk vahiy Nur Dağı'ndaki Hira Mağarası'nda 'Oku!' emriyle Alak Suresi olarak inmiştir."
  },
  {
    "id": "mz_islam_gk_465",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Allah'ın en güzel isimlerine ne ad verilir?",
    "options": [
      "Esma-i Nebi",
      "Esma-i Hüsna",
      "Sıfat-ı Subutiyye",
      "Kelime-i Tevhid"
    ],
    "correct": "Esma-i Hüsna",
    "wisdom": "Esma-i Hüsna Allah'ın 99 ismini ifade eder."
  },
  {
    "id": "mz_islam_gk_466",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, En güvenilir altı hadis kitabına ne ad verilir?",
    "options": [
      "Kütüb-i Sitte",
      "Sahih-i Buhari",
      "Riyazü's-Salihin",
      "Kütüb-i Erbaa"
    ],
    "correct": "Kütüb-i Sitte",
    "wisdom": "Buhari ve Müslim gibi en sahih 6 hadis derlemesidir."
  },
  {
    "id": "mz_islam_gk_467",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Müslümanların ilk kıblesi olan ve Kudüs'te bulunan mescid hangisidir?",
    "options": [
      "Mescid-i Nebevi",
      "Mescid-i Haram",
      "Mescid-i Aksa",
      "Kuba Mescidi"
    ],
    "correct": "Mescid-i Aksa",
    "wisdom": "Mescid-i Aksa İsra ve Mirac olaylarının yaşandığı yerdir."
  },
  {
    "id": "mz_islam_gk_468",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam tarihinde inşa edilen ilk mescit hangisidir?",
    "options": [
      "Kuba Mescidi",
      "Mescid-i Aksa",
      "Mescid-i Nebevi",
      "Mescid-i Haram"
    ],
    "correct": "Kuba Mescidi",
    "wisdom": "Kuba mescidi hicret esnasında Peygamberimiz tarafından yapılmıştır."
  },
  {
    "id": "mz_islam_gk_469",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Hicri takvimin başlangıcı olarak kabul edilen tarihi olay hangisidir?",
    "options": [
      "Hicret (622)",
      "İlk Vahiy",
      "Peygamberimizin Doğumu",
      "Mekke'nin Fethi"
    ],
    "correct": "Hicret (622)",
    "wisdom": "622 yılındaki Hicret, takvimin başlangıcıdır."
  },
  {
    "id": "mz_islam_gk_470",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Şaban ayının 15. gecesi olan af ve mağfiret gecesi hangisidir?",
    "options": [
      "Berat Kandili",
      "Regaip Kandili",
      "Mevlid Kandili",
      "Kadir Gecesi"
    ],
    "correct": "Berat Kandili",
    "wisdom": "Berat, kurtuluş ve günahlardan arınma gecesidir."
  },
  {
    "id": "mz_islam_gk_471",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Bin aydan daha hayırlı olduğu Kur'an'da bildirilen gece hangisidir?",
    "options": [
      "Miraç Gecesi",
      "Regaip Gecesi",
      "Kadir Gecesi",
      "Mevlid Gecesi"
    ],
    "correct": "Kadir Gecesi",
    "wisdom": "Kadir gecesi Kur'an'ın indirilmeye başlandığı gecedir."
  },
  {
    "id": "mz_islam_gk_472",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamberlerin iddialarını doğrulamak için Allah'ın izniyle gösterdikleri olağanüstü olaylara ne denir?",
    "options": [
      "İstidrac",
      "İrhas",
      "Keramet",
      "Mucize"
    ],
    "correct": "Mucize",
    "wisdom": "Mucizeler insanları aciz bırakan ilahi yardımlardır."
  },
  {
    "id": "mz_islam_gk_473",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber olmayan salih kulların gösterdiği olağanüstü hallere ne denir?",
    "options": [
      "Sihir",
      "Keramet",
      "Mucize",
      "İstidrac"
    ],
    "correct": "Keramet",
    "wisdom": "Keramet, salih kullara ikram edilen olağanüstülüklerdir."
  },
  {
    "id": "mz_islam_gk_474",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an ayetlerini açıklayan ve yorumlayan bilim dalı hangisidir?",
    "options": [
      "Tefsir",
      "Hadis",
      "Fıkıh",
      "Kelam"
    ],
    "correct": "Tefsir",
    "wisdom": "Tefsir alimlerine Müfessir denir."
  },
  {
    "id": "mz_islam_gk_475",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in söz, davranış ve onaylarına ne ad verilir?",
    "options": [
      "Fıkıh",
      "İcma",
      "Hadis / Sünnet",
      "Ayet"
    ],
    "correct": "Hadis / Sünnet",
    "wisdom": "Hadisler dinimizin ikinci temel kaynağıdır."
  },
  {
    "id": "mz_islam_gk_476",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam hukukunu ve ibadetlerin yapılış şekillerini inceleyen ilim dalı hangisidir?",
    "options": [
      "Fıkıh",
      "Tefsir",
      "Tasavvuf",
      "Kelam"
    ],
    "correct": "Fıkıh",
    "wisdom": "Fıkıh pratik hayat kurallarını inceler."
  },
  {
    "id": "mz_islam_gk_477",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam inanç esaslarını akli ve nakli delillerle savunan ilim dalı hangisidir?",
    "options": [
      "Hadis",
      "Siyer",
      "Kelam",
      "Fıkıh"
    ],
    "correct": "Kelam",
    "wisdom": "Kelam inanca yönelik şüpheleri gidermeyi amaçlar."
  },
  {
    "id": "mz_islam_gk_478",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in hayatını konu edinen bilim dalı hangisidir?",
    "options": [
      "Tasavvuf",
      "Siyer",
      "Tefsir",
      "Kelam"
    ],
    "correct": "Siyer",
    "wisdom": "Siyer, peygamberimizin hayatını kronolojik olarak anlatır."
  },
  {
    "id": "mz_islam_gk_479",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de yer alan numaralandırılmış ayetlerin toplamı kaçtır?",
    "options": [
      "6666",
      "6000",
      "6236",
      "7000"
    ],
    "correct": "6236",
    "wisdom": "Resmi numaralandırmada 6236 ayet bulunmaktadır."
  },
  {
    "id": "mz_islam_gk_480",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in tamamını ezbere bilen kişiye ne ad verilir?",
    "options": [
      "Müezzin",
      "Kari",
      "İmam",
      "Hafız"
    ],
    "correct": "Hafız",
    "wisdom": "Hafızlık Kur'an'ın sözlü olarak korunmasını sağlar."
  },
  {
    "id": "mz_islam_gk_481",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in en uzun suresi hangisidir?",
    "options": [
      "Yasin Suresi",
      "Al-i İmran Suresi",
      "Bakara Suresi",
      "Fatiha Suresi"
    ],
    "correct": "Bakara Suresi",
    "wisdom": "Bakara Suresi 286 ayettir."
  },
  {
    "id": "mz_islam_gk_482",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim toplam kaç cüzden oluşmaktadır?",
    "options": [
      "30",
      "114",
      "40",
      "20"
    ],
    "correct": "30",
    "wisdom": "Kur'an her biri 20 sayfalık 30 cüze ayrılmıştır."
  },
  {
    "id": "mz_islam_gk_483",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de toplam kaç sure bulunmaktadır?",
    "options": [
      "6666",
      "120",
      "110",
      "114"
    ],
    "correct": "114",
    "wisdom": "Kur'an 114 sure barındırır."
  },
  {
    "id": "mz_islam_gk_484",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in ilk inen ayetleri hangi surededir?",
    "options": [
      "Müddessir Suresi",
      "Kalem Suresi",
      "Fatiha Suresi",
      "Alak Suresi"
    ],
    "correct": "Alak Suresi",
    "wisdom": "İlk vahiy Nur Dağı'ndaki Hira Mağarası'nda 'Oku!' emriyle Alak Suresi olarak inmiştir."
  },
  {
    "id": "mz_islam_gk_485",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Allah'ın en güzel isimlerine ne ad verilir?",
    "options": [
      "Esma-i Nebi",
      "Esma-i Hüsna",
      "Sıfat-ı Subutiyye",
      "Kelime-i Tevhid"
    ],
    "correct": "Esma-i Hüsna",
    "wisdom": "Esma-i Hüsna Allah'ın 99 ismini ifade eder."
  },
  {
    "id": "mz_islam_gk_486",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, En güvenilir altı hadis kitabına ne ad verilir?",
    "options": [
      "Kütüb-i Sitte",
      "Sahih-i Buhari",
      "Riyazü's-Salihin",
      "Kütüb-i Erbaa"
    ],
    "correct": "Kütüb-i Sitte",
    "wisdom": "Buhari ve Müslim gibi en sahih 6 hadis derlemesidir."
  },
  {
    "id": "mz_islam_gk_487",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Müslümanların ilk kıblesi olan ve Kudüs'te bulunan mescid hangisidir?",
    "options": [
      "Mescid-i Nebevi",
      "Mescid-i Haram",
      "Mescid-i Aksa",
      "Kuba Mescidi"
    ],
    "correct": "Mescid-i Aksa",
    "wisdom": "Mescid-i Aksa İsra ve Mirac olaylarının yaşandığı yerdir."
  },
  {
    "id": "mz_islam_gk_488",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam tarihinde inşa edilen ilk mescit hangisidir?",
    "options": [
      "Kuba Mescidi",
      "Mescid-i Aksa",
      "Mescid-i Nebevi",
      "Mescid-i Haram"
    ],
    "correct": "Kuba Mescidi",
    "wisdom": "Kuba mescidi hicret esnasında Peygamberimiz tarafından yapılmıştır."
  },
  {
    "id": "mz_islam_gk_489",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Hicri takvimin başlangıcı olarak kabul edilen tarihi olay hangisidir?",
    "options": [
      "Hicret (622)",
      "İlk Vahiy",
      "Peygamberimizin Doğumu",
      "Mekke'nin Fethi"
    ],
    "correct": "Hicret (622)",
    "wisdom": "622 yılındaki Hicret, takvimin başlangıcıdır."
  },
  {
    "id": "mz_islam_gk_490",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Şaban ayının 15. gecesi olan af ve mağfiret gecesi hangisidir?",
    "options": [
      "Berat Kandili",
      "Regaip Kandili",
      "Mevlid Kandili",
      "Kadir Gecesi"
    ],
    "correct": "Berat Kandili",
    "wisdom": "Berat, kurtuluş ve günahlardan arınma gecesidir."
  },
  {
    "id": "mz_islam_gk_491",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Bin aydan daha hayırlı olduğu Kur'an'da bildirilen gece hangisidir?",
    "options": [
      "Miraç Gecesi",
      "Regaip Gecesi",
      "Kadir Gecesi",
      "Mevlid Gecesi"
    ],
    "correct": "Kadir Gecesi",
    "wisdom": "Kadir gecesi Kur'an'ın indirilmeye başlandığı gecedir."
  },
  {
    "id": "mz_islam_gk_492",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamberlerin iddialarını doğrulamak için Allah'ın izniyle gösterdikleri olağanüstü olaylara ne denir?",
    "options": [
      "İstidrac",
      "İrhas",
      "Keramet",
      "Mucize"
    ],
    "correct": "Mucize",
    "wisdom": "Mucizeler insanları aciz bırakan ilahi yardımlardır."
  },
  {
    "id": "mz_islam_gk_493",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber olmayan salih kulların gösterdiği olağanüstü hallere ne denir?",
    "options": [
      "Sihir",
      "Keramet",
      "Mucize",
      "İstidrac"
    ],
    "correct": "Keramet",
    "wisdom": "Keramet, salih kullara ikram edilen olağanüstülüklerdir."
  },
  {
    "id": "mz_islam_gk_494",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an ayetlerini açıklayan ve yorumlayan bilim dalı hangisidir?",
    "options": [
      "Tefsir",
      "Hadis",
      "Fıkıh",
      "Kelam"
    ],
    "correct": "Tefsir",
    "wisdom": "Tefsir alimlerine Müfessir denir."
  },
  {
    "id": "mz_islam_gk_495",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in söz, davranış ve onaylarına ne ad verilir?",
    "options": [
      "Fıkıh",
      "İcma",
      "Hadis / Sünnet",
      "Ayet"
    ],
    "correct": "Hadis / Sünnet",
    "wisdom": "Hadisler dinimizin ikinci temel kaynağıdır."
  },
  {
    "id": "mz_islam_gk_496",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam hukukunu ve ibadetlerin yapılış şekillerini inceleyen ilim dalı hangisidir?",
    "options": [
      "Fıkıh",
      "Tefsir",
      "Tasavvuf",
      "Kelam"
    ],
    "correct": "Fıkıh",
    "wisdom": "Fıkıh pratik hayat kurallarını inceler."
  },
  {
    "id": "mz_islam_gk_497",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, İslam inanç esaslarını akli ve nakli delillerle savunan ilim dalı hangisidir?",
    "options": [
      "Hadis",
      "Siyer",
      "Kelam",
      "Fıkıh"
    ],
    "correct": "Kelam",
    "wisdom": "Kelam inanca yönelik şüpheleri gidermeyi amaçlar."
  },
  {
    "id": "mz_islam_gk_498",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Peygamber Efendimiz'in hayatını konu edinen bilim dalı hangisidir?",
    "options": [
      "Tasavvuf",
      "Siyer",
      "Tefsir",
      "Kelam"
    ],
    "correct": "Siyer",
    "wisdom": "Siyer, peygamberimizin hayatını kronolojik olarak anlatır."
  },
  {
    "id": "mz_islam_gk_499",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'de yer alan numaralandırılmış ayetlerin toplamı kaçtır?",
    "options": [
      "6666",
      "6000",
      "6236",
      "7000"
    ],
    "correct": "6236",
    "wisdom": "Resmi numaralandırmada 6236 ayet bulunmaktadır."
  },
  {
    "id": "mz_islam_gk_500",
    "category": "İslam Genel Kültürü",
    "question": "İslam genel kültürü bilgisine göre, Kur'an-ı Kerim'in tamamını ezbere bilen kişiye ne ad verilir?",
    "options": [
      "Müezzin",
      "Kari",
      "İmam",
      "Hafız"
    ],
    "correct": "Hafız",
    "wisdom": "Hafızlık Kur'an'ın sözlü olarak korunmasını sağlar."
  },
  {
    "id": "mz_bilim_501",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Cebir biliminin kurucusu olan ve 'Sıfır' (0) rakamını ilk kez kullanan bilgin kimdir?",
    "options": [
      "El-Harezmi",
      "İbn-i Sina",
      "Farabi",
      "Biruni"
    ],
    "correct": "El-Harezmi",
    "wisdom": "El-Harezmi cebir kitabıyla matematiğe yön vermiştir."
  },
  {
    "id": "mz_bilim_502",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Tıp alanındaki 'El-Kanun fi't-Tıbb' eseriyle Avrupa'da 'Avicenna' olarak tanınan hekim kimdir?",
    "options": [
      "İbn-i Rüşd",
      "İbn-i Sina",
      "Farabi",
      "Ebu Bekir er-Razi"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İbn-i Sina tıp ve felsefe dehasıdır."
  },
  {
    "id": "mz_bilim_503",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sibernetiğin kurucusu olan ve Diyarbakır'da otomatik makineler yapan dahi mühendis kimdir?",
    "options": [
      "Beni Musa",
      "Hazini",
      "El-Cezeri",
      "Uluğ Bey"
    ],
    "correct": "El-Cezeri",
    "wisdom": "El-Cezeri su gücüyle çalışan robotlar icat etmiştir."
  },
  {
    "id": "mz_bilim_504",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünya'nın çapını hesaplayan ve Gazneli Mahmud'un sarayının hazinesi dediği bilgin kimdir?",
    "options": [
      "Uluğ Bey",
      "El-Biruni",
      "İbn-i Battuta",
      "Ali Kuşçu"
    ],
    "correct": "El-Biruni",
    "wisdom": "Biruni astronomi ve coğrafya bilginidir."
  },
  {
    "id": "mz_bilim_505",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Fatih Sultan Mehmet'in davetiyle İstanbul'a gelen ve Ay'ın haritasını çizen astronom kimdir?",
    "options": [
      "Piri Reis",
      "Uluğ Bey",
      "Ali Kuşçu",
      "Takiyüddin"
    ],
    "correct": "Ali Kuşçu",
    "wisdom": "Ali Kuşçu Osmanlı'da astronomiyi kurumsallaştırmıştır."
  },
  {
    "id": "mz_bilim_506",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Semerkant'ta rasathane kurup yıldız haritası hazırlayan padişah kimdir?",
    "options": [
      "Uluğ Bey",
      "Ali Kuşçu",
      "Fatih",
      "Melikşah"
    ],
    "correct": "Uluğ Bey",
    "wisdom": "Uluğ Bey büyük bir devlet adamı ve astronomdur."
  },
  {
    "id": "mz_bilim_507",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sosyolojinin kurucusu kabul edilen ünlü 'Mukaddime' eserinin yazarı kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Gazali",
      "İbn-i Haldun",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Haldun",
    "wisdom": "İbn-i Haldun tarih ve toplum felsefesi yazarıdır."
  },
  {
    "id": "mz_bilim_508",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Ceylan derisine Dünya Haritası çizen ünlü Osmanlı denizcisi kimdir?",
    "options": [
      "Piri Reis",
      "Barbaros",
      "Seydi Ali Reis",
      "Oruç Reis"
    ],
    "correct": "Piri Reis",
    "wisdom": "Piri Reis denizcilik kitabı Kitab-ı Bahriye'nin yazarıdır."
  },
  {
    "id": "mz_bilim_509",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Selimiye ve Süleymaniye camilerini inşa eden dahi Osmanlı başmimarı kimdir?",
    "options": [
      "Mimar Sinan",
      "Kemalettin",
      "Mimar Davut",
      "Sedefkar Mehmet Ağa"
    ],
    "correct": "Mimar Sinan",
    "wisdom": "Mimar Sinan mimarlık tarihinin en büyük ustalarındandır."
  },
  {
    "id": "mz_bilim_510",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Kimya biliminin babası kabul edilen ve imbik aletini geliştiren bilgin kimdir?",
    "options": [
      "Razi",
      "İbn-i Rüşd",
      "Cabir bin Hayyan",
      "Kindi"
    ],
    "correct": "Cabir bin Hayyan",
    "wisdom": "Cabir bin Hayyan kimya elementlerini tasnif etmiştir."
  },
  {
    "id": "mz_bilim_511",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Aristoteles yorumlarıyla batıda 'Averroes' olarak bilinen Endülüslü filozof kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Farabi",
      "Gazali",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Rüşd",
    "wisdom": "İbn-i Rüşd akıl ve inanç felsefecisidir."
  },
  {
    "id": "mz_bilim_512",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Felsefe tarihinde 'Muallim-i Sani' (İkinci Öğretmen) olarak anılan filozof kimdir?",
    "options": [
      "Farabi",
      "İbn-i Sina",
      "Kindi",
      "Gazali"
    ],
    "correct": "Farabi",
    "wisdom": "Farabi mantık ve müzik üzerine büyük eserler bırakmıştır."
  },
  {
    "id": "mz_bilim_513",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 30 yıl boyunca tüm İslam coğrafyasını ve Çin'i gezen ünlü Faslı seyyah kimdir?",
    "options": [
      "Evliya Çelebi",
      "Marco Polo",
      "İbn-i Cübeyr",
      "İbn-i Battuta"
    ],
    "correct": "İbn-i Battuta",
    "wisdom": "İbn-i Battuta seyahatname türünün öncülerindendir."
  },
  {
    "id": "mz_bilim_514",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 10 ciltlik Seyahatname eseriyle tanınan 17. yüzyıl Osmanlı seyyahı kimdir?",
    "options": [
      "Katip Çelebi",
      "Seydi Ali Reis",
      "Piri Reis",
      "Evliya Çelebi"
    ],
    "correct": "Evliya Çelebi",
    "wisdom": "Evliya Çelebi rüyasında peygamberi görüp gezilerine başlamıştır."
  },
  {
    "id": "mz_bilim_515",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Bibliyografya uzmanı ve coğrafi 'Cihannüma' eserinin yazarı kimdir?",
    "options": [
      "Lagari",
      "Hezarfen",
      "Naima",
      "Katip Çelebi"
    ],
    "correct": "Katip Çelebi",
    "wisdom": "Katip Çelebi binlerce kitabı tasnif etmiştir."
  },
  {
    "id": "mz_bilim_516",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Galata Kulesi'nden kanatlarla uçan Osmanlı bilgini kimdir?",
    "options": [
      "Hezarfen Ahmed Çelebi",
      "Mimar Sinan",
      "Takiyüddin",
      "Lagari Hasan Çelebi"
    ],
    "correct": "Hezarfen Ahmed Çelebi",
    "wisdom": "Hezarfen havacılık tarihinin önemli öncülerindendir."
  },
  {
    "id": "mz_bilim_517",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünyada ilk insanlı roket uçuşunu barut fişeğiyle yapan mucit kimdir?",
    "options": [
      "Lagari Hasan Çelebi",
      "Evliya Çelebi",
      "Takiyüddin",
      "Hezarfen"
    ],
    "correct": "Lagari Hasan Çelebi",
    "wisdom": "Lagari göğe uçup denize sağ inmiştir."
  },
  {
    "id": "mz_bilim_518",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, İstanbul'da 1577 yılında ilk rasathaneyi kuran gökbilimci kimdir?",
    "options": [
      "Ali Kuşçu",
      "Takiyüddin",
      "Uluğ Bey",
      "Kadızade"
    ],
    "correct": "Takiyüddin",
    "wisdom": "Takiyüddin hassas gözlem aletleri geliştirmiştir."
  },
  {
    "id": "mz_bilim_519",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Saatlerde sarkaç mekanizmasını ilk kullanan Mısırlı astronom kimdir?",
    "options": [
      "Sufi",
      "Hazini",
      "İbn-i Yunus",
      "El-Battani"
    ],
    "correct": "İbn-i Yunus",
    "wisdom": "İbn-i Yunus trigonometriyi başarıyla uygulamıştır."
  },
  {
    "id": "mz_bilim_520",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Trigonometride sinüs kavramını sistemleştiren ve Güneş yılını hesaplayan astronom kimdir?",
    "options": [
      "Biruni",
      "El-Harezmi",
      "El-Battani",
      "Ömer Hayyam"
    ],
    "correct": "El-Battani",
    "wisdom": "El-Battani batıda Albategnius olarak bilinir."
  },
  {
    "id": "mz_bilim_521",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Cebir biliminin kurucusu olan ve 'Sıfır' (0) rakamını ilk kez kullanan bilgin kimdir?",
    "options": [
      "El-Harezmi",
      "İbn-i Sina",
      "Farabi",
      "Biruni"
    ],
    "correct": "El-Harezmi",
    "wisdom": "El-Harezmi cebir kitabıyla matematiğe yön vermiştir."
  },
  {
    "id": "mz_bilim_522",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Tıp alanındaki 'El-Kanun fi't-Tıbb' eseriyle Avrupa'da 'Avicenna' olarak tanınan hekim kimdir?",
    "options": [
      "İbn-i Rüşd",
      "İbn-i Sina",
      "Farabi",
      "Ebu Bekir er-Razi"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İbn-i Sina tıp ve felsefe dehasıdır."
  },
  {
    "id": "mz_bilim_523",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sibernetiğin kurucusu olan ve Diyarbakır'da otomatik makineler yapan dahi mühendis kimdir?",
    "options": [
      "Beni Musa",
      "Hazini",
      "El-Cezeri",
      "Uluğ Bey"
    ],
    "correct": "El-Cezeri",
    "wisdom": "El-Cezeri su gücüyle çalışan robotlar icat etmiştir."
  },
  {
    "id": "mz_bilim_524",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünya'nın çapını hesaplayan ve Gazneli Mahmud'un sarayının hazinesi dediği bilgin kimdir?",
    "options": [
      "Uluğ Bey",
      "El-Biruni",
      "İbn-i Battuta",
      "Ali Kuşçu"
    ],
    "correct": "El-Biruni",
    "wisdom": "Biruni astronomi ve coğrafya bilginidir."
  },
  {
    "id": "mz_bilim_525",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Fatih Sultan Mehmet'in davetiyle İstanbul'a gelen ve Ay'ın haritasını çizen astronom kimdir?",
    "options": [
      "Piri Reis",
      "Uluğ Bey",
      "Ali Kuşçu",
      "Takiyüddin"
    ],
    "correct": "Ali Kuşçu",
    "wisdom": "Ali Kuşçu Osmanlı'da astronomiyi kurumsallaştırmıştır."
  },
  {
    "id": "mz_bilim_526",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Semerkant'ta rasathane kurup yıldız haritası hazırlayan padişah kimdir?",
    "options": [
      "Uluğ Bey",
      "Ali Kuşçu",
      "Fatih",
      "Melikşah"
    ],
    "correct": "Uluğ Bey",
    "wisdom": "Uluğ Bey büyük bir devlet adamı ve astronomdur."
  },
  {
    "id": "mz_bilim_527",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sosyolojinin kurucusu kabul edilen ünlü 'Mukaddime' eserinin yazarı kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Gazali",
      "İbn-i Haldun",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Haldun",
    "wisdom": "İbn-i Haldun tarih ve toplum felsefesi yazarıdır."
  },
  {
    "id": "mz_bilim_528",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Ceylan derisine Dünya Haritası çizen ünlü Osmanlı denizcisi kimdir?",
    "options": [
      "Piri Reis",
      "Barbaros",
      "Seydi Ali Reis",
      "Oruç Reis"
    ],
    "correct": "Piri Reis",
    "wisdom": "Piri Reis denizcilik kitabı Kitab-ı Bahriye'nin yazarıdır."
  },
  {
    "id": "mz_bilim_529",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Selimiye ve Süleymaniye camilerini inşa eden dahi Osmanlı başmimarı kimdir?",
    "options": [
      "Mimar Sinan",
      "Kemalettin",
      "Mimar Davut",
      "Sedefkar Mehmet Ağa"
    ],
    "correct": "Mimar Sinan",
    "wisdom": "Mimar Sinan mimarlık tarihinin en büyük ustalarındandır."
  },
  {
    "id": "mz_bilim_530",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Kimya biliminin babası kabul edilen ve imbik aletini geliştiren bilgin kimdir?",
    "options": [
      "Razi",
      "İbn-i Rüşd",
      "Cabir bin Hayyan",
      "Kindi"
    ],
    "correct": "Cabir bin Hayyan",
    "wisdom": "Cabir bin Hayyan kimya elementlerini tasnif etmiştir."
  },
  {
    "id": "mz_bilim_531",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Aristoteles yorumlarıyla batıda 'Averroes' olarak bilinen Endülüslü filozof kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Farabi",
      "Gazali",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Rüşd",
    "wisdom": "İbn-i Rüşd akıl ve inanç felsefecisidir."
  },
  {
    "id": "mz_bilim_532",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Felsefe tarihinde 'Muallim-i Sani' (İkinci Öğretmen) olarak anılan filozof kimdir?",
    "options": [
      "Farabi",
      "İbn-i Sina",
      "Kindi",
      "Gazali"
    ],
    "correct": "Farabi",
    "wisdom": "Farabi mantık ve müzik üzerine büyük eserler bırakmıştır."
  },
  {
    "id": "mz_bilim_533",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 30 yıl boyunca tüm İslam coğrafyasını ve Çin'i gezen ünlü Faslı seyyah kimdir?",
    "options": [
      "Evliya Çelebi",
      "Marco Polo",
      "İbn-i Cübeyr",
      "İbn-i Battuta"
    ],
    "correct": "İbn-i Battuta",
    "wisdom": "İbn-i Battuta seyahatname türünün öncülerindendir."
  },
  {
    "id": "mz_bilim_534",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 10 ciltlik Seyahatname eseriyle tanınan 17. yüzyıl Osmanlı seyyahı kimdir?",
    "options": [
      "Katip Çelebi",
      "Seydi Ali Reis",
      "Piri Reis",
      "Evliya Çelebi"
    ],
    "correct": "Evliya Çelebi",
    "wisdom": "Evliya Çelebi rüyasında peygamberi görüp gezilerine başlamıştır."
  },
  {
    "id": "mz_bilim_535",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Bibliyografya uzmanı ve coğrafi 'Cihannüma' eserinin yazarı kimdir?",
    "options": [
      "Lagari",
      "Hezarfen",
      "Naima",
      "Katip Çelebi"
    ],
    "correct": "Katip Çelebi",
    "wisdom": "Katip Çelebi binlerce kitabı tasnif etmiştir."
  },
  {
    "id": "mz_bilim_536",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Galata Kulesi'nden kanatlarla uçan Osmanlı bilgini kimdir?",
    "options": [
      "Hezarfen Ahmed Çelebi",
      "Mimar Sinan",
      "Takiyüddin",
      "Lagari Hasan Çelebi"
    ],
    "correct": "Hezarfen Ahmed Çelebi",
    "wisdom": "Hezarfen havacılık tarihinin önemli öncülerindendir."
  },
  {
    "id": "mz_bilim_537",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünyada ilk insanlı roket uçuşunu barut fişeğiyle yapan mucit kimdir?",
    "options": [
      "Lagari Hasan Çelebi",
      "Evliya Çelebi",
      "Takiyüddin",
      "Hezarfen"
    ],
    "correct": "Lagari Hasan Çelebi",
    "wisdom": "Lagari göğe uçup denize sağ inmiştir."
  },
  {
    "id": "mz_bilim_538",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, İstanbul'da 1577 yılında ilk rasathaneyi kuran gökbilimci kimdir?",
    "options": [
      "Ali Kuşçu",
      "Takiyüddin",
      "Uluğ Bey",
      "Kadızade"
    ],
    "correct": "Takiyüddin",
    "wisdom": "Takiyüddin hassas gözlem aletleri geliştirmiştir."
  },
  {
    "id": "mz_bilim_539",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Saatlerde sarkaç mekanizmasını ilk kullanan Mısırlı astronom kimdir?",
    "options": [
      "Sufi",
      "Hazini",
      "İbn-i Yunus",
      "El-Battani"
    ],
    "correct": "İbn-i Yunus",
    "wisdom": "İbn-i Yunus trigonometriyi başarıyla uygulamıştır."
  },
  {
    "id": "mz_bilim_540",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Trigonometride sinüs kavramını sistemleştiren ve Güneş yılını hesaplayan astronom kimdir?",
    "options": [
      "Biruni",
      "El-Harezmi",
      "El-Battani",
      "Ömer Hayyam"
    ],
    "correct": "El-Battani",
    "wisdom": "El-Battani batıda Albategnius olarak bilinir."
  },
  {
    "id": "mz_bilim_541",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Cebir biliminin kurucusu olan ve 'Sıfır' (0) rakamını ilk kez kullanan bilgin kimdir?",
    "options": [
      "El-Harezmi",
      "İbn-i Sina",
      "Farabi",
      "Biruni"
    ],
    "correct": "El-Harezmi",
    "wisdom": "El-Harezmi cebir kitabıyla matematiğe yön vermiştir."
  },
  {
    "id": "mz_bilim_542",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Tıp alanındaki 'El-Kanun fi't-Tıbb' eseriyle Avrupa'da 'Avicenna' olarak tanınan hekim kimdir?",
    "options": [
      "İbn-i Rüşd",
      "İbn-i Sina",
      "Farabi",
      "Ebu Bekir er-Razi"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İbn-i Sina tıp ve felsefe dehasıdır."
  },
  {
    "id": "mz_bilim_543",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sibernetiğin kurucusu olan ve Diyarbakır'da otomatik makineler yapan dahi mühendis kimdir?",
    "options": [
      "Beni Musa",
      "Hazini",
      "El-Cezeri",
      "Uluğ Bey"
    ],
    "correct": "El-Cezeri",
    "wisdom": "El-Cezeri su gücüyle çalışan robotlar icat etmiştir."
  },
  {
    "id": "mz_bilim_544",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünya'nın çapını hesaplayan ve Gazneli Mahmud'un sarayının hazinesi dediği bilgin kimdir?",
    "options": [
      "Uluğ Bey",
      "El-Biruni",
      "İbn-i Battuta",
      "Ali Kuşçu"
    ],
    "correct": "El-Biruni",
    "wisdom": "Biruni astronomi ve coğrafya bilginidir."
  },
  {
    "id": "mz_bilim_545",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Fatih Sultan Mehmet'in davetiyle İstanbul'a gelen ve Ay'ın haritasını çizen astronom kimdir?",
    "options": [
      "Piri Reis",
      "Uluğ Bey",
      "Ali Kuşçu",
      "Takiyüddin"
    ],
    "correct": "Ali Kuşçu",
    "wisdom": "Ali Kuşçu Osmanlı'da astronomiyi kurumsallaştırmıştır."
  },
  {
    "id": "mz_bilim_546",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Semerkant'ta rasathane kurup yıldız haritası hazırlayan padişah kimdir?",
    "options": [
      "Uluğ Bey",
      "Ali Kuşçu",
      "Fatih",
      "Melikşah"
    ],
    "correct": "Uluğ Bey",
    "wisdom": "Uluğ Bey büyük bir devlet adamı ve astronomdur."
  },
  {
    "id": "mz_bilim_547",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sosyolojinin kurucusu kabul edilen ünlü 'Mukaddime' eserinin yazarı kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Gazali",
      "İbn-i Haldun",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Haldun",
    "wisdom": "İbn-i Haldun tarih ve toplum felsefesi yazarıdır."
  },
  {
    "id": "mz_bilim_548",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Ceylan derisine Dünya Haritası çizen ünlü Osmanlı denizcisi kimdir?",
    "options": [
      "Piri Reis",
      "Barbaros",
      "Seydi Ali Reis",
      "Oruç Reis"
    ],
    "correct": "Piri Reis",
    "wisdom": "Piri Reis denizcilik kitabı Kitab-ı Bahriye'nin yazarıdır."
  },
  {
    "id": "mz_bilim_549",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Selimiye ve Süleymaniye camilerini inşa eden dahi Osmanlı başmimarı kimdir?",
    "options": [
      "Mimar Sinan",
      "Kemalettin",
      "Mimar Davut",
      "Sedefkar Mehmet Ağa"
    ],
    "correct": "Mimar Sinan",
    "wisdom": "Mimar Sinan mimarlık tarihinin en büyük ustalarındandır."
  },
  {
    "id": "mz_bilim_550",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Kimya biliminin babası kabul edilen ve imbik aletini geliştiren bilgin kimdir?",
    "options": [
      "Razi",
      "İbn-i Rüşd",
      "Cabir bin Hayyan",
      "Kindi"
    ],
    "correct": "Cabir bin Hayyan",
    "wisdom": "Cabir bin Hayyan kimya elementlerini tasnif etmiştir."
  },
  {
    "id": "mz_bilim_551",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Aristoteles yorumlarıyla batıda 'Averroes' olarak bilinen Endülüslü filozof kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Farabi",
      "Gazali",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Rüşd",
    "wisdom": "İbn-i Rüşd akıl ve inanç felsefecisidir."
  },
  {
    "id": "mz_bilim_552",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Felsefe tarihinde 'Muallim-i Sani' (İkinci Öğretmen) olarak anılan filozof kimdir?",
    "options": [
      "Farabi",
      "İbn-i Sina",
      "Kindi",
      "Gazali"
    ],
    "correct": "Farabi",
    "wisdom": "Farabi mantık ve müzik üzerine büyük eserler bırakmıştır."
  },
  {
    "id": "mz_bilim_553",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 30 yıl boyunca tüm İslam coğrafyasını ve Çin'i gezen ünlü Faslı seyyah kimdir?",
    "options": [
      "Evliya Çelebi",
      "Marco Polo",
      "İbn-i Cübeyr",
      "İbn-i Battuta"
    ],
    "correct": "İbn-i Battuta",
    "wisdom": "İbn-i Battuta seyahatname türünün öncülerindendir."
  },
  {
    "id": "mz_bilim_554",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 10 ciltlik Seyahatname eseriyle tanınan 17. yüzyıl Osmanlı seyyahı kimdir?",
    "options": [
      "Katip Çelebi",
      "Seydi Ali Reis",
      "Piri Reis",
      "Evliya Çelebi"
    ],
    "correct": "Evliya Çelebi",
    "wisdom": "Evliya Çelebi rüyasında peygamberi görüp gezilerine başlamıştır."
  },
  {
    "id": "mz_bilim_555",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Bibliyografya uzmanı ve coğrafi 'Cihannüma' eserinin yazarı kimdir?",
    "options": [
      "Lagari",
      "Hezarfen",
      "Naima",
      "Katip Çelebi"
    ],
    "correct": "Katip Çelebi",
    "wisdom": "Katip Çelebi binlerce kitabı tasnif etmiştir."
  },
  {
    "id": "mz_bilim_556",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Galata Kulesi'nden kanatlarla uçan Osmanlı bilgini kimdir?",
    "options": [
      "Hezarfen Ahmed Çelebi",
      "Mimar Sinan",
      "Takiyüddin",
      "Lagari Hasan Çelebi"
    ],
    "correct": "Hezarfen Ahmed Çelebi",
    "wisdom": "Hezarfen havacılık tarihinin önemli öncülerindendir."
  },
  {
    "id": "mz_bilim_557",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünyada ilk insanlı roket uçuşunu barut fişeğiyle yapan mucit kimdir?",
    "options": [
      "Lagari Hasan Çelebi",
      "Evliya Çelebi",
      "Takiyüddin",
      "Hezarfen"
    ],
    "correct": "Lagari Hasan Çelebi",
    "wisdom": "Lagari göğe uçup denize sağ inmiştir."
  },
  {
    "id": "mz_bilim_558",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, İstanbul'da 1577 yılında ilk rasathaneyi kuran gökbilimci kimdir?",
    "options": [
      "Ali Kuşçu",
      "Takiyüddin",
      "Uluğ Bey",
      "Kadızade"
    ],
    "correct": "Takiyüddin",
    "wisdom": "Takiyüddin hassas gözlem aletleri geliştirmiştir."
  },
  {
    "id": "mz_bilim_559",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Saatlerde sarkaç mekanizmasını ilk kullanan Mısırlı astronom kimdir?",
    "options": [
      "Sufi",
      "Hazini",
      "İbn-i Yunus",
      "El-Battani"
    ],
    "correct": "İbn-i Yunus",
    "wisdom": "İbn-i Yunus trigonometriyi başarıyla uygulamıştır."
  },
  {
    "id": "mz_bilim_560",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Trigonometride sinüs kavramını sistemleştiren ve Güneş yılını hesaplayan astronom kimdir?",
    "options": [
      "Biruni",
      "El-Harezmi",
      "El-Battani",
      "Ömer Hayyam"
    ],
    "correct": "El-Battani",
    "wisdom": "El-Battani batıda Albategnius olarak bilinir."
  },
  {
    "id": "mz_bilim_561",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Cebir biliminin kurucusu olan ve 'Sıfır' (0) rakamını ilk kez kullanan bilgin kimdir?",
    "options": [
      "El-Harezmi",
      "İbn-i Sina",
      "Farabi",
      "Biruni"
    ],
    "correct": "El-Harezmi",
    "wisdom": "El-Harezmi cebir kitabıyla matematiğe yön vermiştir."
  },
  {
    "id": "mz_bilim_562",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Tıp alanındaki 'El-Kanun fi't-Tıbb' eseriyle Avrupa'da 'Avicenna' olarak tanınan hekim kimdir?",
    "options": [
      "İbn-i Rüşd",
      "İbn-i Sina",
      "Farabi",
      "Ebu Bekir er-Razi"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İbn-i Sina tıp ve felsefe dehasıdır."
  },
  {
    "id": "mz_bilim_563",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sibernetiğin kurucusu olan ve Diyarbakır'da otomatik makineler yapan dahi mühendis kimdir?",
    "options": [
      "Beni Musa",
      "Hazini",
      "El-Cezeri",
      "Uluğ Bey"
    ],
    "correct": "El-Cezeri",
    "wisdom": "El-Cezeri su gücüyle çalışan robotlar icat etmiştir."
  },
  {
    "id": "mz_bilim_564",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünya'nın çapını hesaplayan ve Gazneli Mahmud'un sarayının hazinesi dediği bilgin kimdir?",
    "options": [
      "Uluğ Bey",
      "El-Biruni",
      "İbn-i Battuta",
      "Ali Kuşçu"
    ],
    "correct": "El-Biruni",
    "wisdom": "Biruni astronomi ve coğrafya bilginidir."
  },
  {
    "id": "mz_bilim_565",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Fatih Sultan Mehmet'in davetiyle İstanbul'a gelen ve Ay'ın haritasını çizen astronom kimdir?",
    "options": [
      "Piri Reis",
      "Uluğ Bey",
      "Ali Kuşçu",
      "Takiyüddin"
    ],
    "correct": "Ali Kuşçu",
    "wisdom": "Ali Kuşçu Osmanlı'da astronomiyi kurumsallaştırmıştır."
  },
  {
    "id": "mz_bilim_566",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Semerkant'ta rasathane kurup yıldız haritası hazırlayan padişah kimdir?",
    "options": [
      "Uluğ Bey",
      "Ali Kuşçu",
      "Fatih",
      "Melikşah"
    ],
    "correct": "Uluğ Bey",
    "wisdom": "Uluğ Bey büyük bir devlet adamı ve astronomdur."
  },
  {
    "id": "mz_bilim_567",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sosyolojinin kurucusu kabul edilen ünlü 'Mukaddime' eserinin yazarı kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Gazali",
      "İbn-i Haldun",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Haldun",
    "wisdom": "İbn-i Haldun tarih ve toplum felsefesi yazarıdır."
  },
  {
    "id": "mz_bilim_568",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Ceylan derisine Dünya Haritası çizen ünlü Osmanlı denizcisi kimdir?",
    "options": [
      "Piri Reis",
      "Barbaros",
      "Seydi Ali Reis",
      "Oruç Reis"
    ],
    "correct": "Piri Reis",
    "wisdom": "Piri Reis denizcilik kitabı Kitab-ı Bahriye'nin yazarıdır."
  },
  {
    "id": "mz_bilim_569",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Selimiye ve Süleymaniye camilerini inşa eden dahi Osmanlı başmimarı kimdir?",
    "options": [
      "Mimar Sinan",
      "Kemalettin",
      "Mimar Davut",
      "Sedefkar Mehmet Ağa"
    ],
    "correct": "Mimar Sinan",
    "wisdom": "Mimar Sinan mimarlık tarihinin en büyük ustalarındandır."
  },
  {
    "id": "mz_bilim_570",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Kimya biliminin babası kabul edilen ve imbik aletini geliştiren bilgin kimdir?",
    "options": [
      "Razi",
      "İbn-i Rüşd",
      "Cabir bin Hayyan",
      "Kindi"
    ],
    "correct": "Cabir bin Hayyan",
    "wisdom": "Cabir bin Hayyan kimya elementlerini tasnif etmiştir."
  },
  {
    "id": "mz_bilim_571",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Aristoteles yorumlarıyla batıda 'Averroes' olarak bilinen Endülüslü filozof kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Farabi",
      "Gazali",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Rüşd",
    "wisdom": "İbn-i Rüşd akıl ve inanç felsefecisidir."
  },
  {
    "id": "mz_bilim_572",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Felsefe tarihinde 'Muallim-i Sani' (İkinci Öğretmen) olarak anılan filozof kimdir?",
    "options": [
      "Farabi",
      "İbn-i Sina",
      "Kindi",
      "Gazali"
    ],
    "correct": "Farabi",
    "wisdom": "Farabi mantık ve müzik üzerine büyük eserler bırakmıştır."
  },
  {
    "id": "mz_bilim_573",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 30 yıl boyunca tüm İslam coğrafyasını ve Çin'i gezen ünlü Faslı seyyah kimdir?",
    "options": [
      "Evliya Çelebi",
      "Marco Polo",
      "İbn-i Cübeyr",
      "İbn-i Battuta"
    ],
    "correct": "İbn-i Battuta",
    "wisdom": "İbn-i Battuta seyahatname türünün öncülerindendir."
  },
  {
    "id": "mz_bilim_574",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 10 ciltlik Seyahatname eseriyle tanınan 17. yüzyıl Osmanlı seyyahı kimdir?",
    "options": [
      "Katip Çelebi",
      "Seydi Ali Reis",
      "Piri Reis",
      "Evliya Çelebi"
    ],
    "correct": "Evliya Çelebi",
    "wisdom": "Evliya Çelebi rüyasında peygamberi görüp gezilerine başlamıştır."
  },
  {
    "id": "mz_bilim_575",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Bibliyografya uzmanı ve coğrafi 'Cihannüma' eserinin yazarı kimdir?",
    "options": [
      "Lagari",
      "Hezarfen",
      "Naima",
      "Katip Çelebi"
    ],
    "correct": "Katip Çelebi",
    "wisdom": "Katip Çelebi binlerce kitabı tasnif etmiştir."
  },
  {
    "id": "mz_bilim_576",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Galata Kulesi'nden kanatlarla uçan Osmanlı bilgini kimdir?",
    "options": [
      "Hezarfen Ahmed Çelebi",
      "Mimar Sinan",
      "Takiyüddin",
      "Lagari Hasan Çelebi"
    ],
    "correct": "Hezarfen Ahmed Çelebi",
    "wisdom": "Hezarfen havacılık tarihinin önemli öncülerindendir."
  },
  {
    "id": "mz_bilim_577",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünyada ilk insanlı roket uçuşunu barut fişeğiyle yapan mucit kimdir?",
    "options": [
      "Lagari Hasan Çelebi",
      "Evliya Çelebi",
      "Takiyüddin",
      "Hezarfen"
    ],
    "correct": "Lagari Hasan Çelebi",
    "wisdom": "Lagari göğe uçup denize sağ inmiştir."
  },
  {
    "id": "mz_bilim_578",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, İstanbul'da 1577 yılında ilk rasathaneyi kuran gökbilimci kimdir?",
    "options": [
      "Ali Kuşçu",
      "Takiyüddin",
      "Uluğ Bey",
      "Kadızade"
    ],
    "correct": "Takiyüddin",
    "wisdom": "Takiyüddin hassas gözlem aletleri geliştirmiştir."
  },
  {
    "id": "mz_bilim_579",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Saatlerde sarkaç mekanizmasını ilk kullanan Mısırlı astronom kimdir?",
    "options": [
      "Sufi",
      "Hazini",
      "İbn-i Yunus",
      "El-Battani"
    ],
    "correct": "İbn-i Yunus",
    "wisdom": "İbn-i Yunus trigonometriyi başarıyla uygulamıştır."
  },
  {
    "id": "mz_bilim_580",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Trigonometride sinüs kavramını sistemleştiren ve Güneş yılını hesaplayan astronom kimdir?",
    "options": [
      "Biruni",
      "El-Harezmi",
      "El-Battani",
      "Ömer Hayyam"
    ],
    "correct": "El-Battani",
    "wisdom": "El-Battani batıda Albategnius olarak bilinir."
  },
  {
    "id": "mz_bilim_581",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Cebir biliminin kurucusu olan ve 'Sıfır' (0) rakamını ilk kez kullanan bilgin kimdir?",
    "options": [
      "El-Harezmi",
      "İbn-i Sina",
      "Farabi",
      "Biruni"
    ],
    "correct": "El-Harezmi",
    "wisdom": "El-Harezmi cebir kitabıyla matematiğe yön vermiştir."
  },
  {
    "id": "mz_bilim_582",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Tıp alanındaki 'El-Kanun fi't-Tıbb' eseriyle Avrupa'da 'Avicenna' olarak tanınan hekim kimdir?",
    "options": [
      "İbn-i Rüşd",
      "İbn-i Sina",
      "Farabi",
      "Ebu Bekir er-Razi"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İbn-i Sina tıp ve felsefe dehasıdır."
  },
  {
    "id": "mz_bilim_583",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sibernetiğin kurucusu olan ve Diyarbakır'da otomatik makineler yapan dahi mühendis kimdir?",
    "options": [
      "Beni Musa",
      "Hazini",
      "El-Cezeri",
      "Uluğ Bey"
    ],
    "correct": "El-Cezeri",
    "wisdom": "El-Cezeri su gücüyle çalışan robotlar icat etmiştir."
  },
  {
    "id": "mz_bilim_584",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünya'nın çapını hesaplayan ve Gazneli Mahmud'un sarayının hazinesi dediği bilgin kimdir?",
    "options": [
      "Uluğ Bey",
      "El-Biruni",
      "İbn-i Battuta",
      "Ali Kuşçu"
    ],
    "correct": "El-Biruni",
    "wisdom": "Biruni astronomi ve coğrafya bilginidir."
  },
  {
    "id": "mz_bilim_585",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Fatih Sultan Mehmet'in davetiyle İstanbul'a gelen ve Ay'ın haritasını çizen astronom kimdir?",
    "options": [
      "Piri Reis",
      "Uluğ Bey",
      "Ali Kuşçu",
      "Takiyüddin"
    ],
    "correct": "Ali Kuşçu",
    "wisdom": "Ali Kuşçu Osmanlı'da astronomiyi kurumsallaştırmıştır."
  },
  {
    "id": "mz_bilim_586",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Semerkant'ta rasathane kurup yıldız haritası hazırlayan padişah kimdir?",
    "options": [
      "Uluğ Bey",
      "Ali Kuşçu",
      "Fatih",
      "Melikşah"
    ],
    "correct": "Uluğ Bey",
    "wisdom": "Uluğ Bey büyük bir devlet adamı ve astronomdur."
  },
  {
    "id": "mz_bilim_587",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Sosyolojinin kurucusu kabul edilen ünlü 'Mukaddime' eserinin yazarı kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Gazali",
      "İbn-i Haldun",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Haldun",
    "wisdom": "İbn-i Haldun tarih ve toplum felsefesi yazarıdır."
  },
  {
    "id": "mz_bilim_588",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Ceylan derisine Dünya Haritası çizen ünlü Osmanlı denizcisi kimdir?",
    "options": [
      "Piri Reis",
      "Barbaros",
      "Seydi Ali Reis",
      "Oruç Reis"
    ],
    "correct": "Piri Reis",
    "wisdom": "Piri Reis denizcilik kitabı Kitab-ı Bahriye'nin yazarıdır."
  },
  {
    "id": "mz_bilim_589",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Selimiye ve Süleymaniye camilerini inşa eden dahi Osmanlı başmimarı kimdir?",
    "options": [
      "Mimar Sinan",
      "Kemalettin",
      "Mimar Davut",
      "Sedefkar Mehmet Ağa"
    ],
    "correct": "Mimar Sinan",
    "wisdom": "Mimar Sinan mimarlık tarihinin en büyük ustalarındandır."
  },
  {
    "id": "mz_bilim_590",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Kimya biliminin babası kabul edilen ve imbik aletini geliştiren bilgin kimdir?",
    "options": [
      "Razi",
      "İbn-i Rüşd",
      "Cabir bin Hayyan",
      "Kindi"
    ],
    "correct": "Cabir bin Hayyan",
    "wisdom": "Cabir bin Hayyan kimya elementlerini tasnif etmiştir."
  },
  {
    "id": "mz_bilim_591",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Aristoteles yorumlarıyla batıda 'Averroes' olarak bilinen Endülüslü filozof kimdir?",
    "options": [
      "İbn-i Tufeyl",
      "Farabi",
      "Gazali",
      "İbn-i Rüşd"
    ],
    "correct": "İbn-i Rüşd",
    "wisdom": "İbn-i Rüşd akıl ve inanç felsefecisidir."
  },
  {
    "id": "mz_bilim_592",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Felsefe tarihinde 'Muallim-i Sani' (İkinci Öğretmen) olarak anılan filozof kimdir?",
    "options": [
      "Farabi",
      "İbn-i Sina",
      "Kindi",
      "Gazali"
    ],
    "correct": "Farabi",
    "wisdom": "Farabi mantık ve müzik üzerine büyük eserler bırakmıştır."
  },
  {
    "id": "mz_bilim_593",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 30 yıl boyunca tüm İslam coğrafyasını ve Çin'i gezen ünlü Faslı seyyah kimdir?",
    "options": [
      "Evliya Çelebi",
      "Marco Polo",
      "İbn-i Cübeyr",
      "İbn-i Battuta"
    ],
    "correct": "İbn-i Battuta",
    "wisdom": "İbn-i Battuta seyahatname türünün öncülerindendir."
  },
  {
    "id": "mz_bilim_594",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, 10 ciltlik Seyahatname eseriyle tanınan 17. yüzyıl Osmanlı seyyahı kimdir?",
    "options": [
      "Katip Çelebi",
      "Seydi Ali Reis",
      "Piri Reis",
      "Evliya Çelebi"
    ],
    "correct": "Evliya Çelebi",
    "wisdom": "Evliya Çelebi rüyasında peygamberi görüp gezilerine başlamıştır."
  },
  {
    "id": "mz_bilim_595",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Bibliyografya uzmanı ve coğrafi 'Cihannüma' eserinin yazarı kimdir?",
    "options": [
      "Lagari",
      "Hezarfen",
      "Naima",
      "Katip Çelebi"
    ],
    "correct": "Katip Çelebi",
    "wisdom": "Katip Çelebi binlerce kitabı tasnif etmiştir."
  },
  {
    "id": "mz_bilim_596",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Galata Kulesi'nden kanatlarla uçan Osmanlı bilgini kimdir?",
    "options": [
      "Hezarfen Ahmed Çelebi",
      "Mimar Sinan",
      "Takiyüddin",
      "Lagari Hasan Çelebi"
    ],
    "correct": "Hezarfen Ahmed Çelebi",
    "wisdom": "Hezarfen havacılık tarihinin önemli öncülerindendir."
  },
  {
    "id": "mz_bilim_597",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Dünyada ilk insanlı roket uçuşunu barut fişeğiyle yapan mucit kimdir?",
    "options": [
      "Lagari Hasan Çelebi",
      "Evliya Çelebi",
      "Takiyüddin",
      "Hezarfen"
    ],
    "correct": "Lagari Hasan Çelebi",
    "wisdom": "Lagari göğe uçup denize sağ inmiştir."
  },
  {
    "id": "mz_bilim_598",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, İstanbul'da 1577 yılında ilk rasathaneyi kuran gökbilimci kimdir?",
    "options": [
      "Ali Kuşçu",
      "Takiyüddin",
      "Uluğ Bey",
      "Kadızade"
    ],
    "correct": "Takiyüddin",
    "wisdom": "Takiyüddin hassas gözlem aletleri geliştirmiştir."
  },
  {
    "id": "mz_bilim_599",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Saatlerde sarkaç mekanizmasını ilk kullanan Mısırlı astronom kimdir?",
    "options": [
      "Sufi",
      "Hazini",
      "İbn-i Yunus",
      "El-Battani"
    ],
    "correct": "İbn-i Yunus",
    "wisdom": "İbn-i Yunus trigonometriyi başarıyla uygulamıştır."
  },
  {
    "id": "mz_bilim_600",
    "category": "İslami Bilim Adamları",
    "question": "Bilim tarihi araştırmalarına göre, Trigonometride sinüs kavramını sistemleştiren ve Güneş yılını hesaplayan astronom kimdir?",
    "options": [
      "Biruni",
      "El-Harezmi",
      "El-Battani",
      "Ömer Hayyam"
    ],
    "correct": "El-Battani",
    "wisdom": "El-Battani batıda Albategnius olarak bilinir."
  },
  {
    "id": "mz_cografya_601",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye Cumhuriyeti'nin başkenti hangi şehirdir?",
    "options": [
      "Bursa",
      "Ankara",
      "İstanbul",
      "İzmir"
    ],
    "correct": "Ankara",
    "wisdom": "Ankara 1923'te başkent yapılmıştır."
  },
  {
    "id": "mz_cografya_602",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en uzun nehri hangisidir?",
    "options": [
      "Nil Nehri",
      "Fırat Nehri",
      "Amazon Nehri",
      "Yangtze Nehri"
    ],
    "correct": "Nil Nehri",
    "wisdom": "Nil nehri Afrika'da yer alır."
  },
  {
    "id": "mz_cografya_603",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en yüksek dağı hangisidir?",
    "options": [
      "Kilimanjaro Dağı",
      "Everest Dağı",
      "Ağrı Dağı",
      "K2 Dağı"
    ],
    "correct": "Everest Dağı",
    "wisdom": "Everest Himalayalar'da 8.848 metredir."
  },
  {
    "id": "mz_cografya_604",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük sıcak çölü hangisidir?",
    "options": [
      "Büyük Sahra Çölü",
      "Kızılkum Çölü",
      "Gobi Çölü",
      "Kalahari Çölü"
    ],
    "correct": "Büyük Sahra Çölü",
    "wisdom": "Büyük Sahra Kuzey Afrika'dadır."
  },
  {
    "id": "mz_cografya_605",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Asya ve Avrupa kıtalarını birbirine bağlayan boğazlar hangileridir?",
    "options": [
      "Bering Boğazı",
      "Cebelitarık Boğazı",
      "Süveyş Kanalı",
      "İstanbul ve Çanakkale Boğazları"
    ],
    "correct": "İstanbul ve Çanakkale Boğazları",
    "wisdom": "Türkiye boğazları jeopolitik öneme sahiptir."
  },
  {
    "id": "mz_cografya_606",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük gölü hangisidir?",
    "options": [
      "Victoria Gölü",
      "Superior Gölü",
      "Van Gölü",
      "Hazar Denizi"
    ],
    "correct": "Hazar Denizi",
    "wisdom": "Hazar Denizi kapalı havza gölüdür."
  },
  {
    "id": "mz_cografya_607",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyayı iki eşit yarım küreye bölen hayali çizgi nedir?",
    "options": [
      "Paralel",
      "Meridyen",
      "Başlangıç Meridyeni",
      "Ekvator"
    ],
    "correct": "Ekvator",
    "wisdom": "Ekvator çizgisi dik güneş ışığı alır."
  },
  {
    "id": "mz_cografya_608",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en kalabalık nüfuslu ülkesi hangisidir?",
    "options": [
      "Çin",
      "Hindistan",
      "ABD",
      "Endonezya"
    ],
    "correct": "Hindistan",
    "wisdom": "Hindistan nüfus lideridir."
  },
  {
    "id": "mz_cografya_609",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en büyük ülke hangisidir?",
    "options": [
      "Çin",
      "ABD",
      "Kanada",
      "Rusya"
    ],
    "correct": "Rusya",
    "wisdom": "Rusya dünyanın en geniş kara parçasına sahiptir."
  },
  {
    "id": "mz_cografya_610",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Kızıldeniz'e bağlayan yapay kanal hangisidir?",
    "options": [
      "Kiel Kanalı",
      "Panama Kanalı",
      "Korint Kanalı",
      "Süveyş Kanalı"
    ],
    "correct": "Süveyş Kanalı",
    "wisdom": "Süveyş kanalı deniz yollarını kısaltmıştır."
  },
  {
    "id": "mz_cografya_611",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Atlas Okyanusu'na bağlayan geçit hangisidir?",
    "options": [
      "Babülmendep Boğazı",
      "Hürmüz Boğazı",
      "Malakka Boğazı",
      "Cebelitarık Boğazı"
    ],
    "correct": "Cebelitarık Boğazı",
    "wisdom": "Cebelitarık adını Tarık bin Ziyad'dan alır."
  },
  {
    "id": "mz_cografya_612",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en küçük kıta hangisidir?",
    "options": [
      "Okyanusya (Avustralya)",
      "Avrupa",
      "Antarktika",
      "Güney Amerika"
    ],
    "correct": "Okyanusya (Avustralya)",
    "wisdom": "Okyanusya en küçük kıtadır."
  },
  {
    "id": "mz_cografya_613",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Basra Körfezi'ne dökülen nehirlerimiz hangileridir?",
    "options": [
      "Nil ve Kongo",
      "Kızılırmak ve Yeşilırmak",
      "Seyhan ve Ceyhan",
      "Fırat ve Dicle"
    ],
    "correct": "Fırat ve Dicle",
    "wisdom": "Mezopotamya bu iki nehir arasındadır."
  },
  {
    "id": "mz_cografya_614",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en derin yeri hangisidir?",
    "options": [
      "Mariana Çukuru",
      "Porto Riko Çukuru",
      "Gökova Çukuru",
      "Java Çukuru"
    ],
    "correct": "Mariana Çukuru",
    "wisdom": "Mariana Çukuru Pasifik'te 11 kilometredir."
  },
  {
    "id": "mz_cografya_615",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yatay yönlü hava hareketine ne ad verilir?",
    "options": [
      "Kasırga",
      "Yağmur",
      "Nem",
      "Rüzgar"
    ],
    "correct": "Rüzgar",
    "wisdom": "Rüzgar basınç farkıyla oluşur."
  },
  {
    "id": "mz_cografya_616",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içindeki en uzun nehir hangisidir?",
    "options": [
      "Yeşilırmak",
      "Fırat",
      "Kızılırmak",
      "Sakarya"
    ],
    "correct": "Kızılırmak",
    "wisdom": "Kızılırmak Karadeniz'e dökülür."
  },
  {
    "id": "mz_cografya_617",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye'nin en büyük gölü hangisidir?",
    "options": [
      "Tuz Gölü",
      "Beyşehir Gölü",
      "Van Gölü",
      "Eğirdir Gölü"
    ],
    "correct": "Van Gölü",
    "wisdom": "Van gölü sodalı suyuyla bilinir."
  },
  {
    "id": "mz_cografya_618",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içinde kalan iç deniz hangisidir?",
    "options": [
      "Karadeniz",
      "Marmara Denizi",
      "Ege Denizi",
      "Kızıldeniz"
    ],
    "correct": "Marmara Denizi",
    "wisdom": "Marmara tamamen Türkiye'ye aittir."
  },
  {
    "id": "mz_cografya_619",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Güney kutbundaki buzlarla kaplı kıta hangisidir?",
    "options": [
      "Grönland",
      "Avustralya",
      "Kuzey Kutbu",
      "Antarktika"
    ],
    "correct": "Antarktika",
    "wisdom": "Antarktika'da kalıcı yerleşim yoktur."
  },
  {
    "id": "mz_cografya_620",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Deprem kuşağının en yoğun olduğu Pasifik çevresi ne olarak adlandırılır?",
    "options": [
      "Hint Deprem Zonu",
      "Pasifik Ateş Çemberi",
      "Alp-Himalaya Kuşağı",
      "Atlas Deprem Alanı"
    ],
    "correct": "Pasifik Ateş Çemberi",
    "wisdom": "Depremlerin %90'ı burada gerçekleşir."
  },
  {
    "id": "mz_cografya_621",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye Cumhuriyeti'nin başkenti hangi şehirdir?",
    "options": [
      "Bursa",
      "Ankara",
      "İstanbul",
      "İzmir"
    ],
    "correct": "Ankara",
    "wisdom": "Ankara 1923'te başkent yapılmıştır."
  },
  {
    "id": "mz_cografya_622",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en uzun nehri hangisidir?",
    "options": [
      "Nil Nehri",
      "Fırat Nehri",
      "Amazon Nehri",
      "Yangtze Nehri"
    ],
    "correct": "Nil Nehri",
    "wisdom": "Nil nehri Afrika'da yer alır."
  },
  {
    "id": "mz_cografya_623",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en yüksek dağı hangisidir?",
    "options": [
      "Kilimanjaro Dağı",
      "Everest Dağı",
      "Ağrı Dağı",
      "K2 Dağı"
    ],
    "correct": "Everest Dağı",
    "wisdom": "Everest Himalayalar'da 8.848 metredir."
  },
  {
    "id": "mz_cografya_624",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük sıcak çölü hangisidir?",
    "options": [
      "Büyük Sahra Çölü",
      "Kızılkum Çölü",
      "Gobi Çölü",
      "Kalahari Çölü"
    ],
    "correct": "Büyük Sahra Çölü",
    "wisdom": "Büyük Sahra Kuzey Afrika'dadır."
  },
  {
    "id": "mz_cografya_625",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Asya ve Avrupa kıtalarını birbirine bağlayan boğazlar hangileridir?",
    "options": [
      "Bering Boğazı",
      "Cebelitarık Boğazı",
      "Süveyş Kanalı",
      "İstanbul ve Çanakkale Boğazları"
    ],
    "correct": "İstanbul ve Çanakkale Boğazları",
    "wisdom": "Türkiye boğazları jeopolitik öneme sahiptir."
  },
  {
    "id": "mz_cografya_626",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük gölü hangisidir?",
    "options": [
      "Victoria Gölü",
      "Superior Gölü",
      "Van Gölü",
      "Hazar Denizi"
    ],
    "correct": "Hazar Denizi",
    "wisdom": "Hazar Denizi kapalı havza gölüdür."
  },
  {
    "id": "mz_cografya_627",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyayı iki eşit yarım küreye bölen hayali çizgi nedir?",
    "options": [
      "Paralel",
      "Meridyen",
      "Başlangıç Meridyeni",
      "Ekvator"
    ],
    "correct": "Ekvator",
    "wisdom": "Ekvator çizgisi dik güneş ışığı alır."
  },
  {
    "id": "mz_cografya_628",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en kalabalık nüfuslu ülkesi hangisidir?",
    "options": [
      "Çin",
      "Hindistan",
      "ABD",
      "Endonezya"
    ],
    "correct": "Hindistan",
    "wisdom": "Hindistan nüfus lideridir."
  },
  {
    "id": "mz_cografya_629",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en büyük ülke hangisidir?",
    "options": [
      "Çin",
      "ABD",
      "Kanada",
      "Rusya"
    ],
    "correct": "Rusya",
    "wisdom": "Rusya dünyanın en geniş kara parçasına sahiptir."
  },
  {
    "id": "mz_cografya_630",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Kızıldeniz'e bağlayan yapay kanal hangisidir?",
    "options": [
      "Kiel Kanalı",
      "Panama Kanalı",
      "Korint Kanalı",
      "Süveyş Kanalı"
    ],
    "correct": "Süveyş Kanalı",
    "wisdom": "Süveyş kanalı deniz yollarını kısaltmıştır."
  },
  {
    "id": "mz_cografya_631",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Atlas Okyanusu'na bağlayan geçit hangisidir?",
    "options": [
      "Babülmendep Boğazı",
      "Hürmüz Boğazı",
      "Malakka Boğazı",
      "Cebelitarık Boğazı"
    ],
    "correct": "Cebelitarık Boğazı",
    "wisdom": "Cebelitarık adını Tarık bin Ziyad'dan alır."
  },
  {
    "id": "mz_cografya_632",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en küçük kıta hangisidir?",
    "options": [
      "Okyanusya (Avustralya)",
      "Avrupa",
      "Antarktika",
      "Güney Amerika"
    ],
    "correct": "Okyanusya (Avustralya)",
    "wisdom": "Okyanusya en küçük kıtadır."
  },
  {
    "id": "mz_cografya_633",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Basra Körfezi'ne dökülen nehirlerimiz hangileridir?",
    "options": [
      "Nil ve Kongo",
      "Kızılırmak ve Yeşilırmak",
      "Seyhan ve Ceyhan",
      "Fırat ve Dicle"
    ],
    "correct": "Fırat ve Dicle",
    "wisdom": "Mezopotamya bu iki nehir arasındadır."
  },
  {
    "id": "mz_cografya_634",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en derin yeri hangisidir?",
    "options": [
      "Mariana Çukuru",
      "Porto Riko Çukuru",
      "Gökova Çukuru",
      "Java Çukuru"
    ],
    "correct": "Mariana Çukuru",
    "wisdom": "Mariana Çukuru Pasifik'te 11 kilometredir."
  },
  {
    "id": "mz_cografya_635",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yatay yönlü hava hareketine ne ad verilir?",
    "options": [
      "Kasırga",
      "Yağmur",
      "Nem",
      "Rüzgar"
    ],
    "correct": "Rüzgar",
    "wisdom": "Rüzgar basınç farkıyla oluşur."
  },
  {
    "id": "mz_cografya_636",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içindeki en uzun nehir hangisidir?",
    "options": [
      "Yeşilırmak",
      "Fırat",
      "Kızılırmak",
      "Sakarya"
    ],
    "correct": "Kızılırmak",
    "wisdom": "Kızılırmak Karadeniz'e dökülür."
  },
  {
    "id": "mz_cografya_637",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye'nin en büyük gölü hangisidir?",
    "options": [
      "Tuz Gölü",
      "Beyşehir Gölü",
      "Van Gölü",
      "Eğirdir Gölü"
    ],
    "correct": "Van Gölü",
    "wisdom": "Van gölü sodalı suyuyla bilinir."
  },
  {
    "id": "mz_cografya_638",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içinde kalan iç deniz hangisidir?",
    "options": [
      "Karadeniz",
      "Marmara Denizi",
      "Ege Denizi",
      "Kızıldeniz"
    ],
    "correct": "Marmara Denizi",
    "wisdom": "Marmara tamamen Türkiye'ye aittir."
  },
  {
    "id": "mz_cografya_639",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Güney kutbundaki buzlarla kaplı kıta hangisidir?",
    "options": [
      "Grönland",
      "Avustralya",
      "Kuzey Kutbu",
      "Antarktika"
    ],
    "correct": "Antarktika",
    "wisdom": "Antarktika'da kalıcı yerleşim yoktur."
  },
  {
    "id": "mz_cografya_640",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Deprem kuşağının en yoğun olduğu Pasifik çevresi ne olarak adlandırılır?",
    "options": [
      "Hint Deprem Zonu",
      "Pasifik Ateş Çemberi",
      "Alp-Himalaya Kuşağı",
      "Atlas Deprem Alanı"
    ],
    "correct": "Pasifik Ateş Çemberi",
    "wisdom": "Depremlerin %90'ı burada gerçekleşir."
  },
  {
    "id": "mz_cografya_641",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye Cumhuriyeti'nin başkenti hangi şehirdir?",
    "options": [
      "Bursa",
      "Ankara",
      "İstanbul",
      "İzmir"
    ],
    "correct": "Ankara",
    "wisdom": "Ankara 1923'te başkent yapılmıştır."
  },
  {
    "id": "mz_cografya_642",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en uzun nehri hangisidir?",
    "options": [
      "Nil Nehri",
      "Fırat Nehri",
      "Amazon Nehri",
      "Yangtze Nehri"
    ],
    "correct": "Nil Nehri",
    "wisdom": "Nil nehri Afrika'da yer alır."
  },
  {
    "id": "mz_cografya_643",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en yüksek dağı hangisidir?",
    "options": [
      "Kilimanjaro Dağı",
      "Everest Dağı",
      "Ağrı Dağı",
      "K2 Dağı"
    ],
    "correct": "Everest Dağı",
    "wisdom": "Everest Himalayalar'da 8.848 metredir."
  },
  {
    "id": "mz_cografya_644",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük sıcak çölü hangisidir?",
    "options": [
      "Büyük Sahra Çölü",
      "Kızılkum Çölü",
      "Gobi Çölü",
      "Kalahari Çölü"
    ],
    "correct": "Büyük Sahra Çölü",
    "wisdom": "Büyük Sahra Kuzey Afrika'dadır."
  },
  {
    "id": "mz_cografya_645",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Asya ve Avrupa kıtalarını birbirine bağlayan boğazlar hangileridir?",
    "options": [
      "Bering Boğazı",
      "Cebelitarık Boğazı",
      "Süveyş Kanalı",
      "İstanbul ve Çanakkale Boğazları"
    ],
    "correct": "İstanbul ve Çanakkale Boğazları",
    "wisdom": "Türkiye boğazları jeopolitik öneme sahiptir."
  },
  {
    "id": "mz_cografya_646",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük gölü hangisidir?",
    "options": [
      "Victoria Gölü",
      "Superior Gölü",
      "Van Gölü",
      "Hazar Denizi"
    ],
    "correct": "Hazar Denizi",
    "wisdom": "Hazar Denizi kapalı havza gölüdür."
  },
  {
    "id": "mz_cografya_647",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyayı iki eşit yarım küreye bölen hayali çizgi nedir?",
    "options": [
      "Paralel",
      "Meridyen",
      "Başlangıç Meridyeni",
      "Ekvator"
    ],
    "correct": "Ekvator",
    "wisdom": "Ekvator çizgisi dik güneş ışığı alır."
  },
  {
    "id": "mz_cografya_648",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en kalabalık nüfuslu ülkesi hangisidir?",
    "options": [
      "Çin",
      "Hindistan",
      "ABD",
      "Endonezya"
    ],
    "correct": "Hindistan",
    "wisdom": "Hindistan nüfus lideridir."
  },
  {
    "id": "mz_cografya_649",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en büyük ülke hangisidir?",
    "options": [
      "Çin",
      "ABD",
      "Kanada",
      "Rusya"
    ],
    "correct": "Rusya",
    "wisdom": "Rusya dünyanın en geniş kara parçasına sahiptir."
  },
  {
    "id": "mz_cografya_650",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Kızıldeniz'e bağlayan yapay kanal hangisidir?",
    "options": [
      "Kiel Kanalı",
      "Panama Kanalı",
      "Korint Kanalı",
      "Süveyş Kanalı"
    ],
    "correct": "Süveyş Kanalı",
    "wisdom": "Süveyş kanalı deniz yollarını kısaltmıştır."
  },
  {
    "id": "mz_cografya_651",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Atlas Okyanusu'na bağlayan geçit hangisidir?",
    "options": [
      "Babülmendep Boğazı",
      "Hürmüz Boğazı",
      "Malakka Boğazı",
      "Cebelitarık Boğazı"
    ],
    "correct": "Cebelitarık Boğazı",
    "wisdom": "Cebelitarık adını Tarık bin Ziyad'dan alır."
  },
  {
    "id": "mz_cografya_652",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en küçük kıta hangisidir?",
    "options": [
      "Okyanusya (Avustralya)",
      "Avrupa",
      "Antarktika",
      "Güney Amerika"
    ],
    "correct": "Okyanusya (Avustralya)",
    "wisdom": "Okyanusya en küçük kıtadır."
  },
  {
    "id": "mz_cografya_653",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Basra Körfezi'ne dökülen nehirlerimiz hangileridir?",
    "options": [
      "Nil ve Kongo",
      "Kızılırmak ve Yeşilırmak",
      "Seyhan ve Ceyhan",
      "Fırat ve Dicle"
    ],
    "correct": "Fırat ve Dicle",
    "wisdom": "Mezopotamya bu iki nehir arasındadır."
  },
  {
    "id": "mz_cografya_654",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en derin yeri hangisidir?",
    "options": [
      "Mariana Çukuru",
      "Porto Riko Çukuru",
      "Gökova Çukuru",
      "Java Çukuru"
    ],
    "correct": "Mariana Çukuru",
    "wisdom": "Mariana Çukuru Pasifik'te 11 kilometredir."
  },
  {
    "id": "mz_cografya_655",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yatay yönlü hava hareketine ne ad verilir?",
    "options": [
      "Kasırga",
      "Yağmur",
      "Nem",
      "Rüzgar"
    ],
    "correct": "Rüzgar",
    "wisdom": "Rüzgar basınç farkıyla oluşur."
  },
  {
    "id": "mz_cografya_656",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içindeki en uzun nehir hangisidir?",
    "options": [
      "Yeşilırmak",
      "Fırat",
      "Kızılırmak",
      "Sakarya"
    ],
    "correct": "Kızılırmak",
    "wisdom": "Kızılırmak Karadeniz'e dökülür."
  },
  {
    "id": "mz_cografya_657",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye'nin en büyük gölü hangisidir?",
    "options": [
      "Tuz Gölü",
      "Beyşehir Gölü",
      "Van Gölü",
      "Eğirdir Gölü"
    ],
    "correct": "Van Gölü",
    "wisdom": "Van gölü sodalı suyuyla bilinir."
  },
  {
    "id": "mz_cografya_658",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içinde kalan iç deniz hangisidir?",
    "options": [
      "Karadeniz",
      "Marmara Denizi",
      "Ege Denizi",
      "Kızıldeniz"
    ],
    "correct": "Marmara Denizi",
    "wisdom": "Marmara tamamen Türkiye'ye aittir."
  },
  {
    "id": "mz_cografya_659",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Güney kutbundaki buzlarla kaplı kıta hangisidir?",
    "options": [
      "Grönland",
      "Avustralya",
      "Kuzey Kutbu",
      "Antarktika"
    ],
    "correct": "Antarktika",
    "wisdom": "Antarktika'da kalıcı yerleşim yoktur."
  },
  {
    "id": "mz_cografya_660",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Deprem kuşağının en yoğun olduğu Pasifik çevresi ne olarak adlandırılır?",
    "options": [
      "Hint Deprem Zonu",
      "Pasifik Ateş Çemberi",
      "Alp-Himalaya Kuşağı",
      "Atlas Deprem Alanı"
    ],
    "correct": "Pasifik Ateş Çemberi",
    "wisdom": "Depremlerin %90'ı burada gerçekleşir."
  },
  {
    "id": "mz_cografya_661",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye Cumhuriyeti'nin başkenti hangi şehirdir?",
    "options": [
      "Bursa",
      "Ankara",
      "İstanbul",
      "İzmir"
    ],
    "correct": "Ankara",
    "wisdom": "Ankara 1923'te başkent yapılmıştır."
  },
  {
    "id": "mz_cografya_662",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en uzun nehri hangisidir?",
    "options": [
      "Nil Nehri",
      "Fırat Nehri",
      "Amazon Nehri",
      "Yangtze Nehri"
    ],
    "correct": "Nil Nehri",
    "wisdom": "Nil nehri Afrika'da yer alır."
  },
  {
    "id": "mz_cografya_663",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en yüksek dağı hangisidir?",
    "options": [
      "Kilimanjaro Dağı",
      "Everest Dağı",
      "Ağrı Dağı",
      "K2 Dağı"
    ],
    "correct": "Everest Dağı",
    "wisdom": "Everest Himalayalar'da 8.848 metredir."
  },
  {
    "id": "mz_cografya_664",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük sıcak çölü hangisidir?",
    "options": [
      "Büyük Sahra Çölü",
      "Kızılkum Çölü",
      "Gobi Çölü",
      "Kalahari Çölü"
    ],
    "correct": "Büyük Sahra Çölü",
    "wisdom": "Büyük Sahra Kuzey Afrika'dadır."
  },
  {
    "id": "mz_cografya_665",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Asya ve Avrupa kıtalarını birbirine bağlayan boğazlar hangileridir?",
    "options": [
      "Bering Boğazı",
      "Cebelitarık Boğazı",
      "Süveyş Kanalı",
      "İstanbul ve Çanakkale Boğazları"
    ],
    "correct": "İstanbul ve Çanakkale Boğazları",
    "wisdom": "Türkiye boğazları jeopolitik öneme sahiptir."
  },
  {
    "id": "mz_cografya_666",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük gölü hangisidir?",
    "options": [
      "Victoria Gölü",
      "Superior Gölü",
      "Van Gölü",
      "Hazar Denizi"
    ],
    "correct": "Hazar Denizi",
    "wisdom": "Hazar Denizi kapalı havza gölüdür."
  },
  {
    "id": "mz_cografya_667",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyayı iki eşit yarım küreye bölen hayali çizgi nedir?",
    "options": [
      "Paralel",
      "Meridyen",
      "Başlangıç Meridyeni",
      "Ekvator"
    ],
    "correct": "Ekvator",
    "wisdom": "Ekvator çizgisi dik güneş ışığı alır."
  },
  {
    "id": "mz_cografya_668",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en kalabalık nüfuslu ülkesi hangisidir?",
    "options": [
      "Çin",
      "Hindistan",
      "ABD",
      "Endonezya"
    ],
    "correct": "Hindistan",
    "wisdom": "Hindistan nüfus lideridir."
  },
  {
    "id": "mz_cografya_669",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en büyük ülke hangisidir?",
    "options": [
      "Çin",
      "ABD",
      "Kanada",
      "Rusya"
    ],
    "correct": "Rusya",
    "wisdom": "Rusya dünyanın en geniş kara parçasına sahiptir."
  },
  {
    "id": "mz_cografya_670",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Kızıldeniz'e bağlayan yapay kanal hangisidir?",
    "options": [
      "Kiel Kanalı",
      "Panama Kanalı",
      "Korint Kanalı",
      "Süveyş Kanalı"
    ],
    "correct": "Süveyş Kanalı",
    "wisdom": "Süveyş kanalı deniz yollarını kısaltmıştır."
  },
  {
    "id": "mz_cografya_671",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Atlas Okyanusu'na bağlayan geçit hangisidir?",
    "options": [
      "Babülmendep Boğazı",
      "Hürmüz Boğazı",
      "Malakka Boğazı",
      "Cebelitarık Boğazı"
    ],
    "correct": "Cebelitarık Boğazı",
    "wisdom": "Cebelitarık adını Tarık bin Ziyad'dan alır."
  },
  {
    "id": "mz_cografya_672",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en küçük kıta hangisidir?",
    "options": [
      "Okyanusya (Avustralya)",
      "Avrupa",
      "Antarktika",
      "Güney Amerika"
    ],
    "correct": "Okyanusya (Avustralya)",
    "wisdom": "Okyanusya en küçük kıtadır."
  },
  {
    "id": "mz_cografya_673",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Basra Körfezi'ne dökülen nehirlerimiz hangileridir?",
    "options": [
      "Nil ve Kongo",
      "Kızılırmak ve Yeşilırmak",
      "Seyhan ve Ceyhan",
      "Fırat ve Dicle"
    ],
    "correct": "Fırat ve Dicle",
    "wisdom": "Mezopotamya bu iki nehir arasındadır."
  },
  {
    "id": "mz_cografya_674",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en derin yeri hangisidir?",
    "options": [
      "Mariana Çukuru",
      "Porto Riko Çukuru",
      "Gökova Çukuru",
      "Java Çukuru"
    ],
    "correct": "Mariana Çukuru",
    "wisdom": "Mariana Çukuru Pasifik'te 11 kilometredir."
  },
  {
    "id": "mz_cografya_675",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yatay yönlü hava hareketine ne ad verilir?",
    "options": [
      "Kasırga",
      "Yağmur",
      "Nem",
      "Rüzgar"
    ],
    "correct": "Rüzgar",
    "wisdom": "Rüzgar basınç farkıyla oluşur."
  },
  {
    "id": "mz_cografya_676",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içindeki en uzun nehir hangisidir?",
    "options": [
      "Yeşilırmak",
      "Fırat",
      "Kızılırmak",
      "Sakarya"
    ],
    "correct": "Kızılırmak",
    "wisdom": "Kızılırmak Karadeniz'e dökülür."
  },
  {
    "id": "mz_cografya_677",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye'nin en büyük gölü hangisidir?",
    "options": [
      "Tuz Gölü",
      "Beyşehir Gölü",
      "Van Gölü",
      "Eğirdir Gölü"
    ],
    "correct": "Van Gölü",
    "wisdom": "Van gölü sodalı suyuyla bilinir."
  },
  {
    "id": "mz_cografya_678",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içinde kalan iç deniz hangisidir?",
    "options": [
      "Karadeniz",
      "Marmara Denizi",
      "Ege Denizi",
      "Kızıldeniz"
    ],
    "correct": "Marmara Denizi",
    "wisdom": "Marmara tamamen Türkiye'ye aittir."
  },
  {
    "id": "mz_cografya_679",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Güney kutbundaki buzlarla kaplı kıta hangisidir?",
    "options": [
      "Grönland",
      "Avustralya",
      "Kuzey Kutbu",
      "Antarktika"
    ],
    "correct": "Antarktika",
    "wisdom": "Antarktika'da kalıcı yerleşim yoktur."
  },
  {
    "id": "mz_cografya_680",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Deprem kuşağının en yoğun olduğu Pasifik çevresi ne olarak adlandırılır?",
    "options": [
      "Hint Deprem Zonu",
      "Pasifik Ateş Çemberi",
      "Alp-Himalaya Kuşağı",
      "Atlas Deprem Alanı"
    ],
    "correct": "Pasifik Ateş Çemberi",
    "wisdom": "Depremlerin %90'ı burada gerçekleşir."
  },
  {
    "id": "mz_cografya_681",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye Cumhuriyeti'nin başkenti hangi şehirdir?",
    "options": [
      "Bursa",
      "Ankara",
      "İstanbul",
      "İzmir"
    ],
    "correct": "Ankara",
    "wisdom": "Ankara 1923'te başkent yapılmıştır."
  },
  {
    "id": "mz_cografya_682",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en uzun nehri hangisidir?",
    "options": [
      "Nil Nehri",
      "Fırat Nehri",
      "Amazon Nehri",
      "Yangtze Nehri"
    ],
    "correct": "Nil Nehri",
    "wisdom": "Nil nehri Afrika'da yer alır."
  },
  {
    "id": "mz_cografya_683",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en yüksek dağı hangisidir?",
    "options": [
      "Kilimanjaro Dağı",
      "Everest Dağı",
      "Ağrı Dağı",
      "K2 Dağı"
    ],
    "correct": "Everest Dağı",
    "wisdom": "Everest Himalayalar'da 8.848 metredir."
  },
  {
    "id": "mz_cografya_684",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük sıcak çölü hangisidir?",
    "options": [
      "Büyük Sahra Çölü",
      "Kızılkum Çölü",
      "Gobi Çölü",
      "Kalahari Çölü"
    ],
    "correct": "Büyük Sahra Çölü",
    "wisdom": "Büyük Sahra Kuzey Afrika'dadır."
  },
  {
    "id": "mz_cografya_685",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Asya ve Avrupa kıtalarını birbirine bağlayan boğazlar hangileridir?",
    "options": [
      "Bering Boğazı",
      "Cebelitarık Boğazı",
      "Süveyş Kanalı",
      "İstanbul ve Çanakkale Boğazları"
    ],
    "correct": "İstanbul ve Çanakkale Boğazları",
    "wisdom": "Türkiye boğazları jeopolitik öneme sahiptir."
  },
  {
    "id": "mz_cografya_686",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en büyük gölü hangisidir?",
    "options": [
      "Victoria Gölü",
      "Superior Gölü",
      "Van Gölü",
      "Hazar Denizi"
    ],
    "correct": "Hazar Denizi",
    "wisdom": "Hazar Denizi kapalı havza gölüdür."
  },
  {
    "id": "mz_cografya_687",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyayı iki eşit yarım küreye bölen hayali çizgi nedir?",
    "options": [
      "Paralel",
      "Meridyen",
      "Başlangıç Meridyeni",
      "Ekvator"
    ],
    "correct": "Ekvator",
    "wisdom": "Ekvator çizgisi dik güneş ışığı alır."
  },
  {
    "id": "mz_cografya_688",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en kalabalık nüfuslu ülkesi hangisidir?",
    "options": [
      "Çin",
      "Hindistan",
      "ABD",
      "Endonezya"
    ],
    "correct": "Hindistan",
    "wisdom": "Hindistan nüfus lideridir."
  },
  {
    "id": "mz_cografya_689",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en büyük ülke hangisidir?",
    "options": [
      "Çin",
      "ABD",
      "Kanada",
      "Rusya"
    ],
    "correct": "Rusya",
    "wisdom": "Rusya dünyanın en geniş kara parçasına sahiptir."
  },
  {
    "id": "mz_cografya_690",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Kızıldeniz'e bağlayan yapay kanal hangisidir?",
    "options": [
      "Kiel Kanalı",
      "Panama Kanalı",
      "Korint Kanalı",
      "Süveyş Kanalı"
    ],
    "correct": "Süveyş Kanalı",
    "wisdom": "Süveyş kanalı deniz yollarını kısaltmıştır."
  },
  {
    "id": "mz_cografya_691",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Akdeniz'i Atlas Okyanusu'na bağlayan geçit hangisidir?",
    "options": [
      "Babülmendep Boğazı",
      "Hürmüz Boğazı",
      "Malakka Boğazı",
      "Cebelitarık Boğazı"
    ],
    "correct": "Cebelitarık Boğazı",
    "wisdom": "Cebelitarık adını Tarık bin Ziyad'dan alır."
  },
  {
    "id": "mz_cografya_692",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yüzölçümü en küçük kıta hangisidir?",
    "options": [
      "Okyanusya (Avustralya)",
      "Avrupa",
      "Antarktika",
      "Güney Amerika"
    ],
    "correct": "Okyanusya (Avustralya)",
    "wisdom": "Okyanusya en küçük kıtadır."
  },
  {
    "id": "mz_cografya_693",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Basra Körfezi'ne dökülen nehirlerimiz hangileridir?",
    "options": [
      "Nil ve Kongo",
      "Kızılırmak ve Yeşilırmak",
      "Seyhan ve Ceyhan",
      "Fırat ve Dicle"
    ],
    "correct": "Fırat ve Dicle",
    "wisdom": "Mezopotamya bu iki nehir arasındadır."
  },
  {
    "id": "mz_cografya_694",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Dünyanın en derin yeri hangisidir?",
    "options": [
      "Mariana Çukuru",
      "Porto Riko Çukuru",
      "Gökova Çukuru",
      "Java Çukuru"
    ],
    "correct": "Mariana Çukuru",
    "wisdom": "Mariana Çukuru Pasifik'te 11 kilometredir."
  },
  {
    "id": "mz_cografya_695",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Yatay yönlü hava hareketine ne ad verilir?",
    "options": [
      "Kasırga",
      "Yağmur",
      "Nem",
      "Rüzgar"
    ],
    "correct": "Rüzgar",
    "wisdom": "Rüzgar basınç farkıyla oluşur."
  },
  {
    "id": "mz_cografya_696",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içindeki en uzun nehir hangisidir?",
    "options": [
      "Yeşilırmak",
      "Fırat",
      "Kızılırmak",
      "Sakarya"
    ],
    "correct": "Kızılırmak",
    "wisdom": "Kızılırmak Karadeniz'e dökülür."
  },
  {
    "id": "mz_cografya_697",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Türkiye'nin en büyük gölü hangisidir?",
    "options": [
      "Tuz Gölü",
      "Beyşehir Gölü",
      "Van Gölü",
      "Eğirdir Gölü"
    ],
    "correct": "Van Gölü",
    "wisdom": "Van gölü sodalı suyuyla bilinir."
  },
  {
    "id": "mz_cografya_698",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Sınırlarımız içinde kalan iç deniz hangisidir?",
    "options": [
      "Karadeniz",
      "Marmara Denizi",
      "Ege Denizi",
      "Kızıldeniz"
    ],
    "correct": "Marmara Denizi",
    "wisdom": "Marmara tamamen Türkiye'ye aittir."
  },
  {
    "id": "mz_cografya_699",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Güney kutbundaki buzlarla kaplı kıta hangisidir?",
    "options": [
      "Grönland",
      "Avustralya",
      "Kuzey Kutbu",
      "Antarktika"
    ],
    "correct": "Antarktika",
    "wisdom": "Antarktika'da kalıcı yerleşim yoktur."
  },
  {
    "id": "mz_cografya_700",
    "category": "Coğrafya",
    "question": "Coğrafya bilgilerimize göre, Deprem kuşağının en yoğun olduğu Pasifik çevresi ne olarak adlandırılır?",
    "options": [
      "Hint Deprem Zonu",
      "Pasifik Ateş Çemberi",
      "Alp-Himalaya Kuşağı",
      "Atlas Deprem Alanı"
    ],
    "correct": "Pasifik Ateş Çemberi",
    "wisdom": "Depremlerin %90'ı burada gerçekleşir."
  },
  {
    "id": "mz_tarih_701",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yazıyı icat ederek tarih çağlarını başlatan uygarlık hangisidir?",
    "options": [
      "Asurlar",
      "Babiller",
      "Mısırlılar",
      "Sümerler"
    ],
    "correct": "Sümerler",
    "wisdom": "Sümerler M.Ö. 3500'de yazıyı bulmuştur."
  },
  {
    "id": "mz_tarih_702",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Malazgirt Meydan Muharebesi hangi yılda yapılmıştır?",
    "options": [
      "1299",
      "1071",
      "1040",
      "1453"
    ],
    "correct": "1071",
    "wisdom": "1071'de Anadolu kapıları açılmıştır."
  },
  {
    "id": "mz_tarih_703",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, İstanbul'un fetih yılı hangisidir?",
    "options": [
      "1299",
      "1453",
      "1517",
      "1071"
    ],
    "correct": "1453",
    "wisdom": "İstanbul 1453'te fethedilmiştir."
  },
  {
    "id": "mz_tarih_704",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
    "options": [
      "19 Mayıs 1919",
      "30 Ağustos 1922",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "29 Ekim 1923",
    "wisdom": "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."
  },
  {
    "id": "mz_tarih_705",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
    "options": [
      "23 Nisan 1920",
      "30 Ağustos 1922",
      "29 Ekim 1923",
      "19 Mayıs 1919"
    ],
    "correct": "23 Nisan 1920",
    "wisdom": "23 Nisan ulusal egemenlik bayramıdır."
  },
  {
    "id": "mz_tarih_706",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mustafa Kemal Atatürk Samsun'a ne zaman çıkmıştır?",
    "options": [
      "30 Ağustos 1922",
      "19 Mayıs 1919",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "19 Mayıs 1919",
    "wisdom": "19 Mayıs Kurtuluş Savaşı başlangıcıdır."
  },
  {
    "id": "mz_tarih_707",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, 30 Ağustos Zafer Bayramı hangi savaşın sonucudur?",
    "options": [
      "İnönü",
      "Büyük Taarruz",
      "Sakarya",
      "Çanakkale"
    ],
    "correct": "Büyük Taarruz",
    "wisdom": "30 Ağustos askeri zaferi taçlandırmıştır."
  },
  {
    "id": "mz_tarih_708",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Çanakkale Savaşı hangi yıl kazanılmıştır?",
    "options": [
      "1918",
      "1915",
      "1920",
      "1914"
    ],
    "correct": "1915",
    "wisdom": "1915 deniz ve kara zaferleriyle destan yazılmıştır."
  },
  {
    "id": "mz_tarih_709",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türklerin ilk yazılı abideleri hangileridir?",
    "options": [
      "Karabalgasun",
      "Yenisey Yazıtları",
      "Kutadgu Bilig",
      "Orhun Abideleri"
    ],
    "correct": "Orhun Abideleri",
    "wisdom": "Orhun abideleri Göktürkler dönemine aittir."
  },
  {
    "id": "mz_tarih_710",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Gize Piramitleri hangi uygarlığa aittir?",
    "options": [
      "Antik Mısır",
      "Romalılar",
      "Sümerler",
      "Persler"
    ],
    "correct": "Antik Mısır",
    "wisdom": "Piramitler anıt mezarlardır."
  },
  {
    "id": "mz_tarih_711",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Tarihte bilinen ilk yazılı antlaşma hangisidir?",
    "options": [
      "Versay",
      "Mondros",
      "Kadeş Antlaşması",
      "Lozan"
    ],
    "correct": "Kadeş Antlaşması",
    "wisdom": "Mısır ve Hitit arasında yapılmıştır."
  },
  {
    "id": "mz_tarih_712",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Asya Hun İmparatorluğu'na en parlak dönemi yaşatan hükümdar kimdir?",
    "options": [
      "Bumin Kağan",
      "Bilge Kağan",
      "Teoman",
      "Mete Han"
    ],
    "correct": "Mete Han",
    "wisdom": "Mete Han onlu ordu sistemini kurmuştur."
  },
  {
    "id": "mz_tarih_713",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yerleşik hayata geçen ilk Türk devleti hangisidir?",
    "options": [
      "Hunlar",
      "Göktürkler",
      "Avarlar",
      "Uygurlar"
    ],
    "correct": "Uygurlar",
    "wisdom": "Uygurlar tarım ve matbaayla uğraşmıştır."
  },
  {
    "id": "mz_tarih_714",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Roma İmparatorluğu hangi yılda ikiye bölünmüştür?",
    "options": [
      "1453",
      "476",
      "330",
      "395"
    ],
    "correct": "395",
    "wisdom": "Kavimler Göçü sonucu ikiye ayrılmıştır."
  },
  {
    "id": "mz_tarih_715",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Avrupa'nın yapısını değiştiren büyük göç hareketi hangisidir?",
    "options": [
      "Haçlı Seferleri",
      "Keşifler",
      "Kavimler Göçü",
      "Rönesans"
    ],
    "correct": "Kavimler Göçü",
    "wisdom": "Göç, Orta Çağ'ı başlatmıştır."
  },
  {
    "id": "mz_tarih_716",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Kudüs'ü ilk kez fetheden halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer şehri barışla teslim almıştır."
  },
  {
    "id": "mz_tarih_717",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mekke'nin Fethi hangi yılda gerçekleşmiştir?",
    "options": [
      "632",
      "610",
      "622",
      "630"
    ],
    "correct": "630",
    "wisdom": "630'da Mekke fethedilmiştir."
  },
  {
    "id": "mz_tarih_718",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Müslümanların ilk büyük savaşı hangisidir?",
    "options": [
      "Mute Savaşı",
      "Bedir Savaşı",
      "Hendek Savaşı",
      "Uhud Savaşı"
    ],
    "correct": "Bedir Savaşı",
    "wisdom": "624 yılındaki Bedir zaferdir."
  },
  {
    "id": "mz_tarih_719",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Medine çevresine hendek kazılan savaş hangisidir?",
    "options": [
      "Hendek Savaşı",
      "Uhud Savaşı",
      "Hayber",
      "Tebük"
    ],
    "correct": "Hendek Savaşı",
    "wisdom": "627 yılında savunma yapılmıştır."
  },
  {
    "id": "mz_tarih_720",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Peygamberimiz'in insan hakları niteliğindeki son konuşması nedir?",
    "options": [
      "Hudeybiye",
      "Veda Hutbesi",
      "Medine Anayasası",
      "Akabe Biatı"
    ],
    "correct": "Veda Hutbesi",
    "wisdom": "Hutbede ırkçılık, faiz ve kan davaları yasaklanmıştır."
  },
  {
    "id": "mz_tarih_721",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yazıyı icat ederek tarih çağlarını başlatan uygarlık hangisidir?",
    "options": [
      "Asurlar",
      "Babiller",
      "Mısırlılar",
      "Sümerler"
    ],
    "correct": "Sümerler",
    "wisdom": "Sümerler M.Ö. 3500'de yazıyı bulmuştur."
  },
  {
    "id": "mz_tarih_722",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Malazgirt Meydan Muharebesi hangi yılda yapılmıştır?",
    "options": [
      "1299",
      "1071",
      "1040",
      "1453"
    ],
    "correct": "1071",
    "wisdom": "1071'de Anadolu kapıları açılmıştır."
  },
  {
    "id": "mz_tarih_723",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, İstanbul'un fetih yılı hangisidir?",
    "options": [
      "1299",
      "1453",
      "1517",
      "1071"
    ],
    "correct": "1453",
    "wisdom": "İstanbul 1453'te fethedilmiştir."
  },
  {
    "id": "mz_tarih_724",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
    "options": [
      "19 Mayıs 1919",
      "30 Ağustos 1922",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "29 Ekim 1923",
    "wisdom": "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."
  },
  {
    "id": "mz_tarih_725",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
    "options": [
      "23 Nisan 1920",
      "30 Ağustos 1922",
      "29 Ekim 1923",
      "19 Mayıs 1919"
    ],
    "correct": "23 Nisan 1920",
    "wisdom": "23 Nisan ulusal egemenlik bayramıdır."
  },
  {
    "id": "mz_tarih_726",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mustafa Kemal Atatürk Samsun'a ne zaman çıkmıştır?",
    "options": [
      "30 Ağustos 1922",
      "19 Mayıs 1919",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "19 Mayıs 1919",
    "wisdom": "19 Mayıs Kurtuluş Savaşı başlangıcıdır."
  },
  {
    "id": "mz_tarih_727",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, 30 Ağustos Zafer Bayramı hangi savaşın sonucudur?",
    "options": [
      "İnönü",
      "Büyük Taarruz",
      "Sakarya",
      "Çanakkale"
    ],
    "correct": "Büyük Taarruz",
    "wisdom": "30 Ağustos askeri zaferi taçlandırmıştır."
  },
  {
    "id": "mz_tarih_728",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Çanakkale Savaşı hangi yıl kazanılmıştır?",
    "options": [
      "1918",
      "1915",
      "1920",
      "1914"
    ],
    "correct": "1915",
    "wisdom": "1915 deniz ve kara zaferleriyle destan yazılmıştır."
  },
  {
    "id": "mz_tarih_729",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türklerin ilk yazılı abideleri hangileridir?",
    "options": [
      "Karabalgasun",
      "Yenisey Yazıtları",
      "Kutadgu Bilig",
      "Orhun Abideleri"
    ],
    "correct": "Orhun Abideleri",
    "wisdom": "Orhun abideleri Göktürkler dönemine aittir."
  },
  {
    "id": "mz_tarih_730",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Gize Piramitleri hangi uygarlığa aittir?",
    "options": [
      "Antik Mısır",
      "Romalılar",
      "Sümerler",
      "Persler"
    ],
    "correct": "Antik Mısır",
    "wisdom": "Piramitler anıt mezarlardır."
  },
  {
    "id": "mz_tarih_731",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Tarihte bilinen ilk yazılı antlaşma hangisidir?",
    "options": [
      "Versay",
      "Mondros",
      "Kadeş Antlaşması",
      "Lozan"
    ],
    "correct": "Kadeş Antlaşması",
    "wisdom": "Mısır ve Hitit arasında yapılmıştır."
  },
  {
    "id": "mz_tarih_732",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Asya Hun İmparatorluğu'na en parlak dönemi yaşatan hükümdar kimdir?",
    "options": [
      "Bumin Kağan",
      "Bilge Kağan",
      "Teoman",
      "Mete Han"
    ],
    "correct": "Mete Han",
    "wisdom": "Mete Han onlu ordu sistemini kurmuştur."
  },
  {
    "id": "mz_tarih_733",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yerleşik hayata geçen ilk Türk devleti hangisidir?",
    "options": [
      "Hunlar",
      "Göktürkler",
      "Avarlar",
      "Uygurlar"
    ],
    "correct": "Uygurlar",
    "wisdom": "Uygurlar tarım ve matbaayla uğraşmıştır."
  },
  {
    "id": "mz_tarih_734",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Roma İmparatorluğu hangi yılda ikiye bölünmüştür?",
    "options": [
      "1453",
      "476",
      "330",
      "395"
    ],
    "correct": "395",
    "wisdom": "Kavimler Göçü sonucu ikiye ayrılmıştır."
  },
  {
    "id": "mz_tarih_735",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Avrupa'nın yapısını değiştiren büyük göç hareketi hangisidir?",
    "options": [
      "Haçlı Seferleri",
      "Keşifler",
      "Kavimler Göçü",
      "Rönesans"
    ],
    "correct": "Kavimler Göçü",
    "wisdom": "Göç, Orta Çağ'ı başlatmıştır."
  },
  {
    "id": "mz_tarih_736",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Kudüs'ü ilk kez fetheden halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer şehri barışla teslim almıştır."
  },
  {
    "id": "mz_tarih_737",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mekke'nin Fethi hangi yılda gerçekleşmiştir?",
    "options": [
      "632",
      "610",
      "622",
      "630"
    ],
    "correct": "630",
    "wisdom": "630'da Mekke fethedilmiştir."
  },
  {
    "id": "mz_tarih_738",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Müslümanların ilk büyük savaşı hangisidir?",
    "options": [
      "Mute Savaşı",
      "Bedir Savaşı",
      "Hendek Savaşı",
      "Uhud Savaşı"
    ],
    "correct": "Bedir Savaşı",
    "wisdom": "624 yılındaki Bedir zaferdir."
  },
  {
    "id": "mz_tarih_739",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Medine çevresine hendek kazılan savaş hangisidir?",
    "options": [
      "Hendek Savaşı",
      "Uhud Savaşı",
      "Hayber",
      "Tebük"
    ],
    "correct": "Hendek Savaşı",
    "wisdom": "627 yılında savunma yapılmıştır."
  },
  {
    "id": "mz_tarih_740",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Peygamberimiz'in insan hakları niteliğindeki son konuşması nedir?",
    "options": [
      "Hudeybiye",
      "Veda Hutbesi",
      "Medine Anayasası",
      "Akabe Biatı"
    ],
    "correct": "Veda Hutbesi",
    "wisdom": "Hutbede ırkçılık, faiz ve kan davaları yasaklanmıştır."
  },
  {
    "id": "mz_tarih_741",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yazıyı icat ederek tarih çağlarını başlatan uygarlık hangisidir?",
    "options": [
      "Asurlar",
      "Babiller",
      "Mısırlılar",
      "Sümerler"
    ],
    "correct": "Sümerler",
    "wisdom": "Sümerler M.Ö. 3500'de yazıyı bulmuştur."
  },
  {
    "id": "mz_tarih_742",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Malazgirt Meydan Muharebesi hangi yılda yapılmıştır?",
    "options": [
      "1299",
      "1071",
      "1040",
      "1453"
    ],
    "correct": "1071",
    "wisdom": "1071'de Anadolu kapıları açılmıştır."
  },
  {
    "id": "mz_tarih_743",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, İstanbul'un fetih yılı hangisidir?",
    "options": [
      "1299",
      "1453",
      "1517",
      "1071"
    ],
    "correct": "1453",
    "wisdom": "İstanbul 1453'te fethedilmiştir."
  },
  {
    "id": "mz_tarih_744",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
    "options": [
      "19 Mayıs 1919",
      "30 Ağustos 1922",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "29 Ekim 1923",
    "wisdom": "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."
  },
  {
    "id": "mz_tarih_745",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
    "options": [
      "23 Nisan 1920",
      "30 Ağustos 1922",
      "29 Ekim 1923",
      "19 Mayıs 1919"
    ],
    "correct": "23 Nisan 1920",
    "wisdom": "23 Nisan ulusal egemenlik bayramıdır."
  },
  {
    "id": "mz_tarih_746",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mustafa Kemal Atatürk Samsun'a ne zaman çıkmıştır?",
    "options": [
      "30 Ağustos 1922",
      "19 Mayıs 1919",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "19 Mayıs 1919",
    "wisdom": "19 Mayıs Kurtuluş Savaşı başlangıcıdır."
  },
  {
    "id": "mz_tarih_747",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, 30 Ağustos Zafer Bayramı hangi savaşın sonucudur?",
    "options": [
      "İnönü",
      "Büyük Taarruz",
      "Sakarya",
      "Çanakkale"
    ],
    "correct": "Büyük Taarruz",
    "wisdom": "30 Ağustos askeri zaferi taçlandırmıştır."
  },
  {
    "id": "mz_tarih_748",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Çanakkale Savaşı hangi yıl kazanılmıştır?",
    "options": [
      "1918",
      "1915",
      "1920",
      "1914"
    ],
    "correct": "1915",
    "wisdom": "1915 deniz ve kara zaferleriyle destan yazılmıştır."
  },
  {
    "id": "mz_tarih_749",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türklerin ilk yazılı abideleri hangileridir?",
    "options": [
      "Karabalgasun",
      "Yenisey Yazıtları",
      "Kutadgu Bilig",
      "Orhun Abideleri"
    ],
    "correct": "Orhun Abideleri",
    "wisdom": "Orhun abideleri Göktürkler dönemine aittir."
  },
  {
    "id": "mz_tarih_750",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Gize Piramitleri hangi uygarlığa aittir?",
    "options": [
      "Antik Mısır",
      "Romalılar",
      "Sümerler",
      "Persler"
    ],
    "correct": "Antik Mısır",
    "wisdom": "Piramitler anıt mezarlardır."
  },
  {
    "id": "mz_tarih_751",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Tarihte bilinen ilk yazılı antlaşma hangisidir?",
    "options": [
      "Versay",
      "Mondros",
      "Kadeş Antlaşması",
      "Lozan"
    ],
    "correct": "Kadeş Antlaşması",
    "wisdom": "Mısır ve Hitit arasında yapılmıştır."
  },
  {
    "id": "mz_tarih_752",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Asya Hun İmparatorluğu'na en parlak dönemi yaşatan hükümdar kimdir?",
    "options": [
      "Bumin Kağan",
      "Bilge Kağan",
      "Teoman",
      "Mete Han"
    ],
    "correct": "Mete Han",
    "wisdom": "Mete Han onlu ordu sistemini kurmuştur."
  },
  {
    "id": "mz_tarih_753",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yerleşik hayata geçen ilk Türk devleti hangisidir?",
    "options": [
      "Hunlar",
      "Göktürkler",
      "Avarlar",
      "Uygurlar"
    ],
    "correct": "Uygurlar",
    "wisdom": "Uygurlar tarım ve matbaayla uğraşmıştır."
  },
  {
    "id": "mz_tarih_754",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Roma İmparatorluğu hangi yılda ikiye bölünmüştür?",
    "options": [
      "1453",
      "476",
      "330",
      "395"
    ],
    "correct": "395",
    "wisdom": "Kavimler Göçü sonucu ikiye ayrılmıştır."
  },
  {
    "id": "mz_tarih_755",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Avrupa'nın yapısını değiştiren büyük göç hareketi hangisidir?",
    "options": [
      "Haçlı Seferleri",
      "Keşifler",
      "Kavimler Göçü",
      "Rönesans"
    ],
    "correct": "Kavimler Göçü",
    "wisdom": "Göç, Orta Çağ'ı başlatmıştır."
  },
  {
    "id": "mz_tarih_756",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Kudüs'ü ilk kez fetheden halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer şehri barışla teslim almıştır."
  },
  {
    "id": "mz_tarih_757",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mekke'nin Fethi hangi yılda gerçekleşmiştir?",
    "options": [
      "632",
      "610",
      "622",
      "630"
    ],
    "correct": "630",
    "wisdom": "630'da Mekke fethedilmiştir."
  },
  {
    "id": "mz_tarih_758",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Müslümanların ilk büyük savaşı hangisidir?",
    "options": [
      "Mute Savaşı",
      "Bedir Savaşı",
      "Hendek Savaşı",
      "Uhud Savaşı"
    ],
    "correct": "Bedir Savaşı",
    "wisdom": "624 yılındaki Bedir zaferdir."
  },
  {
    "id": "mz_tarih_759",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Medine çevresine hendek kazılan savaş hangisidir?",
    "options": [
      "Hendek Savaşı",
      "Uhud Savaşı",
      "Hayber",
      "Tebük"
    ],
    "correct": "Hendek Savaşı",
    "wisdom": "627 yılında savunma yapılmıştır."
  },
  {
    "id": "mz_tarih_760",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Peygamberimiz'in insan hakları niteliğindeki son konuşması nedir?",
    "options": [
      "Hudeybiye",
      "Veda Hutbesi",
      "Medine Anayasası",
      "Akabe Biatı"
    ],
    "correct": "Veda Hutbesi",
    "wisdom": "Hutbede ırkçılık, faiz ve kan davaları yasaklanmıştır."
  },
  {
    "id": "mz_tarih_761",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yazıyı icat ederek tarih çağlarını başlatan uygarlık hangisidir?",
    "options": [
      "Asurlar",
      "Babiller",
      "Mısırlılar",
      "Sümerler"
    ],
    "correct": "Sümerler",
    "wisdom": "Sümerler M.Ö. 3500'de yazıyı bulmuştur."
  },
  {
    "id": "mz_tarih_762",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Malazgirt Meydan Muharebesi hangi yılda yapılmıştır?",
    "options": [
      "1299",
      "1071",
      "1040",
      "1453"
    ],
    "correct": "1071",
    "wisdom": "1071'de Anadolu kapıları açılmıştır."
  },
  {
    "id": "mz_tarih_763",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, İstanbul'un fetih yılı hangisidir?",
    "options": [
      "1299",
      "1453",
      "1517",
      "1071"
    ],
    "correct": "1453",
    "wisdom": "İstanbul 1453'te fethedilmiştir."
  },
  {
    "id": "mz_tarih_764",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
    "options": [
      "19 Mayıs 1919",
      "30 Ağustos 1922",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "29 Ekim 1923",
    "wisdom": "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."
  },
  {
    "id": "mz_tarih_765",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
    "options": [
      "23 Nisan 1920",
      "30 Ağustos 1922",
      "29 Ekim 1923",
      "19 Mayıs 1919"
    ],
    "correct": "23 Nisan 1920",
    "wisdom": "23 Nisan ulusal egemenlik bayramıdır."
  },
  {
    "id": "mz_tarih_766",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mustafa Kemal Atatürk Samsun'a ne zaman çıkmıştır?",
    "options": [
      "30 Ağustos 1922",
      "19 Mayıs 1919",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "19 Mayıs 1919",
    "wisdom": "19 Mayıs Kurtuluş Savaşı başlangıcıdır."
  },
  {
    "id": "mz_tarih_767",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, 30 Ağustos Zafer Bayramı hangi savaşın sonucudur?",
    "options": [
      "İnönü",
      "Büyük Taarruz",
      "Sakarya",
      "Çanakkale"
    ],
    "correct": "Büyük Taarruz",
    "wisdom": "30 Ağustos askeri zaferi taçlandırmıştır."
  },
  {
    "id": "mz_tarih_768",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Çanakkale Savaşı hangi yıl kazanılmıştır?",
    "options": [
      "1918",
      "1915",
      "1920",
      "1914"
    ],
    "correct": "1915",
    "wisdom": "1915 deniz ve kara zaferleriyle destan yazılmıştır."
  },
  {
    "id": "mz_tarih_769",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türklerin ilk yazılı abideleri hangileridir?",
    "options": [
      "Karabalgasun",
      "Yenisey Yazıtları",
      "Kutadgu Bilig",
      "Orhun Abideleri"
    ],
    "correct": "Orhun Abideleri",
    "wisdom": "Orhun abideleri Göktürkler dönemine aittir."
  },
  {
    "id": "mz_tarih_770",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Gize Piramitleri hangi uygarlığa aittir?",
    "options": [
      "Antik Mısır",
      "Romalılar",
      "Sümerler",
      "Persler"
    ],
    "correct": "Antik Mısır",
    "wisdom": "Piramitler anıt mezarlardır."
  },
  {
    "id": "mz_tarih_771",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Tarihte bilinen ilk yazılı antlaşma hangisidir?",
    "options": [
      "Versay",
      "Mondros",
      "Kadeş Antlaşması",
      "Lozan"
    ],
    "correct": "Kadeş Antlaşması",
    "wisdom": "Mısır ve Hitit arasında yapılmıştır."
  },
  {
    "id": "mz_tarih_772",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Asya Hun İmparatorluğu'na en parlak dönemi yaşatan hükümdar kimdir?",
    "options": [
      "Bumin Kağan",
      "Bilge Kağan",
      "Teoman",
      "Mete Han"
    ],
    "correct": "Mete Han",
    "wisdom": "Mete Han onlu ordu sistemini kurmuştur."
  },
  {
    "id": "mz_tarih_773",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yerleşik hayata geçen ilk Türk devleti hangisidir?",
    "options": [
      "Hunlar",
      "Göktürkler",
      "Avarlar",
      "Uygurlar"
    ],
    "correct": "Uygurlar",
    "wisdom": "Uygurlar tarım ve matbaayla uğraşmıştır."
  },
  {
    "id": "mz_tarih_774",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Roma İmparatorluğu hangi yılda ikiye bölünmüştür?",
    "options": [
      "1453",
      "476",
      "330",
      "395"
    ],
    "correct": "395",
    "wisdom": "Kavimler Göçü sonucu ikiye ayrılmıştır."
  },
  {
    "id": "mz_tarih_775",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Avrupa'nın yapısını değiştiren büyük göç hareketi hangisidir?",
    "options": [
      "Haçlı Seferleri",
      "Keşifler",
      "Kavimler Göçü",
      "Rönesans"
    ],
    "correct": "Kavimler Göçü",
    "wisdom": "Göç, Orta Çağ'ı başlatmıştır."
  },
  {
    "id": "mz_tarih_776",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Kudüs'ü ilk kez fetheden halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer şehri barışla teslim almıştır."
  },
  {
    "id": "mz_tarih_777",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mekke'nin Fethi hangi yılda gerçekleşmiştir?",
    "options": [
      "632",
      "610",
      "622",
      "630"
    ],
    "correct": "630",
    "wisdom": "630'da Mekke fethedilmiştir."
  },
  {
    "id": "mz_tarih_778",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Müslümanların ilk büyük savaşı hangisidir?",
    "options": [
      "Mute Savaşı",
      "Bedir Savaşı",
      "Hendek Savaşı",
      "Uhud Savaşı"
    ],
    "correct": "Bedir Savaşı",
    "wisdom": "624 yılındaki Bedir zaferdir."
  },
  {
    "id": "mz_tarih_779",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Medine çevresine hendek kazılan savaş hangisidir?",
    "options": [
      "Hendek Savaşı",
      "Uhud Savaşı",
      "Hayber",
      "Tebük"
    ],
    "correct": "Hendek Savaşı",
    "wisdom": "627 yılında savunma yapılmıştır."
  },
  {
    "id": "mz_tarih_780",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Peygamberimiz'in insan hakları niteliğindeki son konuşması nedir?",
    "options": [
      "Hudeybiye",
      "Veda Hutbesi",
      "Medine Anayasası",
      "Akabe Biatı"
    ],
    "correct": "Veda Hutbesi",
    "wisdom": "Hutbede ırkçılık, faiz ve kan davaları yasaklanmıştır."
  },
  {
    "id": "mz_tarih_781",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yazıyı icat ederek tarih çağlarını başlatan uygarlık hangisidir?",
    "options": [
      "Asurlar",
      "Babiller",
      "Mısırlılar",
      "Sümerler"
    ],
    "correct": "Sümerler",
    "wisdom": "Sümerler M.Ö. 3500'de yazıyı bulmuştur."
  },
  {
    "id": "mz_tarih_782",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Malazgirt Meydan Muharebesi hangi yılda yapılmıştır?",
    "options": [
      "1299",
      "1071",
      "1040",
      "1453"
    ],
    "correct": "1071",
    "wisdom": "1071'de Anadolu kapıları açılmıştır."
  },
  {
    "id": "mz_tarih_783",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, İstanbul'un fetih yılı hangisidir?",
    "options": [
      "1299",
      "1453",
      "1517",
      "1071"
    ],
    "correct": "1453",
    "wisdom": "İstanbul 1453'te fethedilmiştir."
  },
  {
    "id": "mz_tarih_784",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
    "options": [
      "19 Mayıs 1919",
      "30 Ağustos 1922",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "29 Ekim 1923",
    "wisdom": "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir."
  },
  {
    "id": "mz_tarih_785",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
    "options": [
      "23 Nisan 1920",
      "30 Ağustos 1922",
      "29 Ekim 1923",
      "19 Mayıs 1919"
    ],
    "correct": "23 Nisan 1920",
    "wisdom": "23 Nisan ulusal egemenlik bayramıdır."
  },
  {
    "id": "mz_tarih_786",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mustafa Kemal Atatürk Samsun'a ne zaman çıkmıştır?",
    "options": [
      "30 Ağustos 1922",
      "19 Mayıs 1919",
      "23 Nisan 1920",
      "29 Ekim 1923"
    ],
    "correct": "19 Mayıs 1919",
    "wisdom": "19 Mayıs Kurtuluş Savaşı başlangıcıdır."
  },
  {
    "id": "mz_tarih_787",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, 30 Ağustos Zafer Bayramı hangi savaşın sonucudur?",
    "options": [
      "İnönü",
      "Büyük Taarruz",
      "Sakarya",
      "Çanakkale"
    ],
    "correct": "Büyük Taarruz",
    "wisdom": "30 Ağustos askeri zaferi taçlandırmıştır."
  },
  {
    "id": "mz_tarih_788",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Çanakkale Savaşı hangi yıl kazanılmıştır?",
    "options": [
      "1918",
      "1915",
      "1920",
      "1914"
    ],
    "correct": "1915",
    "wisdom": "1915 deniz ve kara zaferleriyle destan yazılmıştır."
  },
  {
    "id": "mz_tarih_789",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Türklerin ilk yazılı abideleri hangileridir?",
    "options": [
      "Karabalgasun",
      "Yenisey Yazıtları",
      "Kutadgu Bilig",
      "Orhun Abideleri"
    ],
    "correct": "Orhun Abideleri",
    "wisdom": "Orhun abideleri Göktürkler dönemine aittir."
  },
  {
    "id": "mz_tarih_790",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Gize Piramitleri hangi uygarlığa aittir?",
    "options": [
      "Antik Mısır",
      "Romalılar",
      "Sümerler",
      "Persler"
    ],
    "correct": "Antik Mısır",
    "wisdom": "Piramitler anıt mezarlardır."
  },
  {
    "id": "mz_tarih_791",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Tarihte bilinen ilk yazılı antlaşma hangisidir?",
    "options": [
      "Versay",
      "Mondros",
      "Kadeş Antlaşması",
      "Lozan"
    ],
    "correct": "Kadeş Antlaşması",
    "wisdom": "Mısır ve Hitit arasında yapılmıştır."
  },
  {
    "id": "mz_tarih_792",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Asya Hun İmparatorluğu'na en parlak dönemi yaşatan hükümdar kimdir?",
    "options": [
      "Bumin Kağan",
      "Bilge Kağan",
      "Teoman",
      "Mete Han"
    ],
    "correct": "Mete Han",
    "wisdom": "Mete Han onlu ordu sistemini kurmuştur."
  },
  {
    "id": "mz_tarih_793",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Yerleşik hayata geçen ilk Türk devleti hangisidir?",
    "options": [
      "Hunlar",
      "Göktürkler",
      "Avarlar",
      "Uygurlar"
    ],
    "correct": "Uygurlar",
    "wisdom": "Uygurlar tarım ve matbaayla uğraşmıştır."
  },
  {
    "id": "mz_tarih_794",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Roma İmparatorluğu hangi yılda ikiye bölünmüştür?",
    "options": [
      "1453",
      "476",
      "330",
      "395"
    ],
    "correct": "395",
    "wisdom": "Kavimler Göçü sonucu ikiye ayrılmıştır."
  },
  {
    "id": "mz_tarih_795",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Avrupa'nın yapısını değiştiren büyük göç hareketi hangisidir?",
    "options": [
      "Haçlı Seferleri",
      "Keşifler",
      "Kavimler Göçü",
      "Rönesans"
    ],
    "correct": "Kavimler Göçü",
    "wisdom": "Göç, Orta Çağ'ı başlatmıştır."
  },
  {
    "id": "mz_tarih_796",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Kudüs'ü ilk kez fetheden halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Ali (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ebu Bekir (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer şehri barışla teslim almıştır."
  },
  {
    "id": "mz_tarih_797",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Mekke'nin Fethi hangi yılda gerçekleşmiştir?",
    "options": [
      "632",
      "610",
      "622",
      "630"
    ],
    "correct": "630",
    "wisdom": "630'da Mekke fethedilmiştir."
  },
  {
    "id": "mz_tarih_798",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Müslümanların ilk büyük savaşı hangisidir?",
    "options": [
      "Mute Savaşı",
      "Bedir Savaşı",
      "Hendek Savaşı",
      "Uhud Savaşı"
    ],
    "correct": "Bedir Savaşı",
    "wisdom": "624 yılındaki Bedir zaferdir."
  },
  {
    "id": "mz_tarih_799",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Medine çevresine hendek kazılan savaş hangisidir?",
    "options": [
      "Hendek Savaşı",
      "Uhud Savaşı",
      "Hayber",
      "Tebük"
    ],
    "correct": "Hendek Savaşı",
    "wisdom": "627 yılında savunma yapılmıştır."
  },
  {
    "id": "mz_tarih_800",
    "category": "Tarih",
    "question": "Tarih araştırmaları bilgilerimize göre, Peygamberimiz'in insan hakları niteliğindeki son konuşması nedir?",
    "options": [
      "Hudeybiye",
      "Veda Hutbesi",
      "Medine Anayasası",
      "Akabe Biatı"
    ],
    "correct": "Veda Hutbesi",
    "wisdom": "Hutbede ırkçılık, faiz ve kan davaları yasaklanmıştır."
  }
];
