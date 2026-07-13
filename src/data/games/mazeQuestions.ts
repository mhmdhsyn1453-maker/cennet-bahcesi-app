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
    "id": "mz_q_1",
    "category": "Ahlak ve Edep",
    "question": "Bir kimsenin arkasından hoşlanmayacağı şekilde konuşmaya ne ad verilir?",
    "options": [
      "Gıybet",
      "İftira",
      "Haset",
      "Riya"
    ],
    "correct": "Gıybet",
    "wisdom": "Gıybet, arkadan konuşarak kardeşinin etini yemeye benzetilen büyük bir ahlaki kusurdur."
  },
  {
    "id": "mz_q_2",
    "category": "Ahlak ve Edep",
    "question": "Başkasında olan nimetleri çekemeyip o nimetin yok olmasını istemeye ne ad verilir?",
    "options": [
      "Haset",
      "Kibir",
      "Riya",
      "Gıybet"
    ],
    "correct": "Haset",
    "wisdom": "Haset, ateşin odunu yakıp bitirdiği gibi insanın güzel amellerini bitirir."
  },
  {
    "id": "mz_q_3",
    "category": "Ahlak ve Edep",
    "question": "Alçakgönüllü olmak, kibirden uzak durmak ve insanlara değer vermek hangi ahlaki kavramla ifade edilir?",
    "options": [
      "Tevazu",
      "Sıdk",
      "Adalet",
      "Vefa"
    ],
    "correct": "Tevazu",
    "wisdom": "Tevazu, Müslümanın şerefini artıran ve Allah katında onu yükselten güzel bir ahlaki özelliktir."
  },
  {
    "id": "mz_q_4",
    "category": "Ahlak ve Edep",
    "question": "İbadet ve güzel davranışları sadece Allah rızası için yapmaya, araya riya karıştırmamaya ne ad verilir?",
    "options": [
      "İhlas",
      "Tevazu",
      "Sıdk",
      "Haya"
    ],
    "correct": "İhlas",
    "wisdom": "İhlas, ibadetlerin özü ve kabul şartıdır. Ameller ancak ihlas ile değer kazanır."
  },
  {
    "id": "mz_q_5",
    "category": "Ahlak ve Edep",
    "question": "İbadetleri ve güzel davranışları başkalarına gösteriş yapmak ve övgü almak için yapmaya ne ad verilir?",
    "options": [
      "Riya",
      "Haset",
      "Kibir",
      "İftira"
    ],
    "correct": "Riya",
    "wisdom": "Riya, gizli şirk olarak adlandırılmıştır ve amellerin sevabını tamamen yok eder."
  },
  {
    "id": "mz_q_6",
    "category": "Ahlak ve Edep",
    "question": "Sözünde ve davranışlarında doğru olmak, yalandan kaçınmak hangi kavramla ifade edilir?",
    "options": [
      "Sıdk",
      "Emanet",
      "Fetanet",
      "İsmet"
    ],
    "correct": "Sıdk",
    "wisdom": "Sıdk, peygamberlerin de en önemli vasıflarından biri olup dürüstlük demektir."
  },
  {
    "id": "mz_q_7",
    "category": "Ahlak ve Edep",
    "question": "Kötü ve çirkin şeylerden utanıp uzak durmak, edep sınırlarını korumak anlamına gelen kavram nedir?",
    "options": [
      "Haya",
      "İhlas",
      "Vefa",
      "Adalet"
    ],
    "correct": "Haya",
    "wisdom": "Haya imandandır ve imandan olan haya, sahibini her türlü çirkinlikten korur."
  },
  {
    "id": "mz_q_8",
    "category": "Ahlak ve Edep",
    "question": "Zorluklar, musibetler ve ibadetlerin zorlukları karşısında yılgınlık göstermeyip direnme gücüne ne ad verilir?",
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
    "id": "mz_q_9",
    "category": "Ahlak ve Edep",
    "question": "Allah'ın verdiği nimetlere karşı dille ve bedenle teşekkür edip nimetleri O'nun yolunda kullanmaya ne ad verilir?",
    "options": [
      "Şükür",
      "Sabır",
      "Kanaat",
      "Tevazu"
    ],
    "correct": "Şükür",
    "wisdom": "Şükür, nimeti artırır ve Allah'ın sevgisini kazanmaya vesile olur."
  },
  {
    "id": "mz_q_10",
    "category": "Ahlak ve Edep",
    "question": "Eldeki nimetlerle yetinip açgözlülükten ve hırstan uzak durmaya ne ad verilir?",
    "options": [
      "Kanaat",
      "Zühd",
      "Tevazu",
      "İhlas"
    ],
    "correct": "Kanaat",
    "wisdom": "Kanaat, tükenmeyen bir hazinedir ve insanı başkalarına boyun eğmekten korur."
  },
  {
    "id": "mz_q_11",
    "category": "Ahlak ve Edep",
    "question": "Korunması için verilen bir şeyi korumak ve sahibine geri vermek, güvenilir olmak hangi kavramdır?",
    "options": [
      "Emanet",
      "Sıdk",
      "Adalet",
      "Vefa"
    ],
    "correct": "Emanet",
    "wisdom": "Emanet, müminin en önemli vasıflarındandır ve emanete hıyanet münafıklık alametidir."
  },
  {
    "id": "mz_q_12",
    "category": "Ahlak ve Edep",
    "question": "Her şeye hakkını vermek, hak sahibine hakkını teslim etmek ve eşitliği gözetmek nedir?",
    "options": [
      "Adalet",
      "Merhamet",
      "Vefa",
      "Kanaat"
    ],
    "correct": "Adalet",
    "wisdom": "Adalet mülkün temelidir ve Allah adaleti, iyiliği ve akrabaya yardımı emreder."
  },
  {
    "id": "mz_q_13",
    "category": "Ahlak ve Edep",
    "question": "Başkalarının acılarına ortak olmak, acımak, şefkat göstermek ve yumuşak kalpli olmak nedir?",
    "options": [
      "Merhamet",
      "Adalet",
      "Sabır",
      "İhlas"
    ],
    "correct": "Merhamet",
    "wisdom": "Yerdekilere merhamet edin ki göktekiler de size merhamet etsin."
  },
  {
    "id": "mz_q_14",
    "category": "Ahlak ve Edep",
    "question": "Verdiği sözde durmak, dostluk ve sevgiyi devam ettirmek, iyilikleri unutmamak hangi kavramdır?",
    "options": [
      "Vefa",
      "Sıdk",
      "Tevazu",
      "Haya"
    ],
    "correct": "Vefa",
    "wisdom": "Ahde vefa göstermek, imanın gereği ve peygamber ahlakındandır."
  },
  {
    "id": "mz_q_15",
    "category": "Ahlak ve Edep",
    "question": "Kendini başkalarından üstün görmek, insanları küçümsemek ve hakkı kabul etmemek nedir?",
    "options": [
      "Kibir",
      "Haset",
      "Riya",
      "Gıybet"
    ],
    "correct": "Kibir",
    "wisdom": "Kalbinde zerre kadar kibir olan kimse cennete giremez."
  },
  {
    "id": "mz_q_16",
    "category": "Ahlak ve Edep",
    "question": "Peygamberimiz (s.a.v.)'e göre asıl güçlü pehlivan kimdir?",
    "options": [
      "Öfkesini yenen",
      "Çok yük kaldıran",
      "Herkesi güreşte yenen",
      "Çok hızlı koşan"
    ],
    "correct": "Öfkesini yenen",
    "wisdom": "Gerçek güç, kas gücü değil, öfkelendiğinde nefsine hakim olabilmektir."
  },
  {
    "id": "mz_q_17",
    "category": "Ahlak ve Edep",
    "question": "Kur'an-ı Kerim'de anne babaya karşı söylenmesi yasaklanan en küçük kelime hangisidir?",
    "options": [
      "Öf",
      "Hayır",
      "Git",
      "Yeter"
    ],
    "correct": "Öf",
    "wisdom": "Anne babaya 'öf' bile demek yasaklanmış, onlara tatlı söz söylenmesi emredilmiştir."
  },
  {
    "id": "mz_q_18",
    "category": "Ahlak ve Edep",
    "question": "Peygamberimiz (s.a.v.) komşu hakkına o kadar vurgu yapmıştır ki, komşunun ne olacağını neredeyse sanmıştır?",
    "options": [
      "Mirasçı",
      "Kardeş",
      "Ortak",
      "Veli"
    ],
    "correct": "Mirasçı",
    "wisdom": "Cebrail bana komşu hakkını o kadar tavsiye etti ki, onu mirasçı kılacak sandım."
  },
  {
    "id": "mz_q_19",
    "category": "Ahlak ve Edep",
    "question": "Müslümanlar arasında sevgi bağlarını güçlendiren, Peygamberimizin yaymamızı emrettiği davranış nedir?",
    "options": [
      "Selamlaşmak",
      "Hediyeleşmek",
      "Yemek yemek",
      "Gülümsemek"
    ],
    "correct": "Selamlaşmak",
    "wisdom": "Aranızda selamı yayın ki birbirinizi sevesiniz."
  },
  {
    "id": "mz_q_20",
    "category": "Ahlak ve Edep",
    "question": "Hakkında kesin bilgi olmayan bir konuda suizan yapmaktan kaçınmak neden emredilmiştir?",
    "options": [
      "Zannın çoğu günahtır",
      "Zan yorar",
      "Zan vakit kaybettirir",
      "Zan günahtır"
    ],
    "correct": "Zannın çoğu günahtır",
    "wisdom": "Zandan kaçınınız çünkü zannın bir kısmı günahtır ve büyük günahlara kapı açar."
  },
  {
    "id": "mz_q_21",
    "category": "Ahlak ve Edep",
    "question": "Akrabayı ziyaret etmek, onlarla ilişkiyi koparmamak hangi ahlaki kavramdır?",
    "options": [
      "Sıla-i Rahim",
      "İsar",
      "Fütüvvet",
      "Vefa"
    ],
    "correct": "Sıla-i Rahim",
    "wisdom": "Akrabalık bağlarını korumak ömrü uzatır ve rızkı bereketlendirir."
  },
  {
    "id": "mz_q_22",
    "category": "Ahlak ve Edep",
    "question": "Kendisi ihtiyaç içinde olduğu halde başkasını kendine tercih etmeye ne ad verilir?",
    "options": [
      "İsar",
      "Cömertlik",
      "Zühd",
      "Tevazu"
    ],
    "correct": "İsar",
    "wisdom": "İsar, cömertliğin en yüksek zirvesidir ve sahabe ahlakıdır."
  },
  {
    "id": "mz_q_23",
    "category": "Ahlak ve Edep",
    "question": "Mülkünü ve imkanlarını başkalarıyla cömertçe paylaşma ahlakı nedir?",
    "options": [
      "Cömertlik",
      "Kanaat",
      "Zühd",
      "Adalet"
    ],
    "correct": "Cömertlik",
    "wisdom": "Cömert insan Allah'a yakın, cennete yakın ve insanlara yakındır."
  },
  {
    "id": "mz_q_24",
    "category": "Ahlak ve Edep",
    "question": "Malını saklamak, hayır yolunda harcamaktan kaçınmak ahlakı nedir?",
    "options": [
      "Cimrilik",
      "Kanaat",
      "İktisat",
      "Zühd"
    ],
    "correct": "Cimrilik",
    "wisdom": "Cimrilik kalbi daraltır ve insanı dünyada rezil, ahirette mahrum eder."
  },
  {
    "id": "mz_q_25",
    "category": "Ahlak ve Edep",
    "question": "Nimetleri gereksiz yere harcamak, saçıp savurmak ne ad verilir?",
    "options": [
      "İsraf",
      "Cömertlik",
      "Riya",
      "Kibir"
    ],
    "correct": "İsraf",
    "wisdom": "İsraf haram kılınmıştır. Yiyiniz, içiniz fakat israf etmeyiniz."
  },
  {
    "id": "mz_q_26",
    "category": "Ahlak ve Edep",
    "question": "Harcamalarda dengeli olmak, tasarruflu davranmak hangi kavramdır?",
    "options": [
      "İktisat",
      "Kanaat",
      "Zühd",
      "Cimrilik"
    ],
    "correct": "İktisat",
    "wisdom": "İktisat eden (tasarruflu davranan) fakirleşmez."
  },
  {
    "id": "mz_q_27",
    "category": "Ahlak ve Edep",
    "question": "Peygamberimiz'e göre haya ile iman arasındaki ilişki nasıldır?",
    "options": [
      "Birlikte bulunurlar",
      "Farklıdırlar",
      "İlişkisi yoktur",
      "Haya daha üstündür"
    ],
    "correct": "Birlikte bulunurlar",
    "wisdom": "Haya ve iman bir aradadır. Biri giderse diğeri de gider."
  },
  {
    "id": "mz_q_28",
    "category": "Ahlak ve Edep",
    "question": "Başkalarıyla konuşurken kırıcı olmayan, güzel ve yumuşak konuşmaya ne denir?",
    "options": [
      "Kavli Leyyin",
      "Sıdk",
      "Fetanet",
      "Vefa"
    ],
    "correct": "Kavli Leyyin",
    "wisdom": "Güzel ve tatlı söz sadakadır ve kalpleri birbirine ısındırır."
  },
  {
    "id": "mz_q_29",
    "category": "Ahlak ve Edep",
    "question": "İnsanların gizli hallerini, kusurlarını ve özel hayatlarını araştırmaya ne ad verilir?",
    "options": [
      "Tecessüs",
      "Gıybet",
      "İftira",
      "Haset"
    ],
    "correct": "Tecessüs",
    "wisdom": "Müslümanların gizli hallerini ve ayıplarını araştırmayınız."
  },
  {
    "id": "mz_q_30",
    "category": "Ahlak ve Edep",
    "question": "İnsanların davranışlarını iyiye yormak, iyi niyetli düşünmek nedir?",
    "options": [
      "Hüsnü Zan",
      "Suizan",
      "Gıybet",
      "Riya"
    ],
    "correct": "Hüsnü Zan",
    "wisdom": "Müminler hakkında iyi düşünmek, imanın güzelliğindendir."
  },
  {
    "id": "mz_q_31",
    "category": "Ahlak ve Edep",
    "question": "İnsanlar hakkında kötü ve olumsuz düşüncelere sahip olmaya ne denir?",
    "options": [
      "Suizan",
      "Hüsnü Zan",
      "Gıybet",
      "Haset"
    ],
    "correct": "Suizan",
    "wisdom": "Kötü zanda bulunmak ilişkileri zedeler ve günahtır."
  },
  {
    "id": "mz_q_32",
    "category": "Ahlak ve Edep",
    "question": "Bir kimseye işlemediği bir suçu veya kötü bir davranışı isnat etmeye ne denir?",
    "options": [
      "İftira",
      "Gıybet",
      "Haset",
      "Kibir"
    ],
    "correct": "İftira",
    "wisdom": "İftira atmak kul hakkıdır ve büyük günahlardan biridir."
  },
  {
    "id": "mz_q_33",
    "category": "Ahlak ve Edep",
    "question": "Başkalarını küçümseyerek, taklit ederek veya lakap takarak dalga geçmek nedir?",
    "options": [
      "Alay etmek",
      "Tecessüs",
      "Gıybet",
      "İftira"
    ],
    "correct": "Alay etmek",
    "wisdom": "Bir topluluk diğer bir toplulukla alay etmesin; belki onlar kendilerinden daha hayırlıdır."
  },
  {
    "id": "mz_q_34",
    "category": "Ahlak ve Edep",
    "question": "İnsanlara hoşlanmadıkları adlarla hitap etmek Kur'an'da nasıl yasaklanmıştır?",
    "options": [
      "Lakap takmayın denerek",
      "Önemli değildir denerek",
      "Zorunludur denerek",
      "Sadece büyüklere yasaktır denerek"
    ],
    "correct": "Lakap takmayın denerek",
    "wisdom": "Birbirinize kötü lakaplar takmayın. İmandan sonra fasıklık ne kötüdür!"
  },
  {
    "id": "mz_q_35",
    "category": "Ahlak ve Edep",
    "question": "Peygamberimiz öfkelendiğimizde ne yapmamızı tavsiye etmiştir?",
    "options": [
      "Abdest almayı",
      "Koşmayı",
      "Yemek yemeyi",
      "Uyumayı"
    ],
    "correct": "Abdest almayı",
    "wisdom": "Öfke şeytandandır, şeytan ateşten yaratılmıştır. Ateşi söndüren ise sudur, bu yüzden abdest alın."
  },
  {
    "id": "mz_q_36",
    "category": "Ahlak ve Edep",
    "question": "Peygamberimizin susuz bir köpeğe su verdiği için günahları bağışlandığını bildirdiği kişi kimdir?",
    "options": [
      "Yolcu bir adam",
      "Bir sahabe",
      "Bir kadın",
      "Bir çoban"
    ],
    "correct": "Yolcu bir adam",
    "wisdom": "Her canlıya yapılan iyilikte bir sevap vardır."
  },
  {
    "id": "mz_q_37",
    "category": "Ahlak ve Edep",
    "question": "Yoldaki bir taşı veya dikeni kenara çekmek İslam'da ne olarak kabul edilir?",
    "options": [
      "Sadaka",
      "Farz",
      "Mekruh",
      "Zekat"
    ],
    "correct": "Sadaka",
    "wisdom": "İnsanlara eziyet veren şeyleri yoldan kaldırmak sadakadır."
  },
  {
    "id": "mz_q_38",
    "category": "Ahlak ve Edep",
    "question": "Verilen sözü tutmamak kimlerin alameti olarak sayılmıştır?",
    "options": [
      "Münafıkların",
      "Kafirlerin",
      "Müşriklerin",
      "Fasıkların"
    ],
    "correct": "Münafıkların",
    "wisdom": "Münafığın alameti üçtür: Konuştuğunda yalan söyler, söz verdiğinde cayar, emanete hıyanet eder."
  },
  {
    "id": "mz_q_39",
    "category": "Ahlak ve Edep",
    "question": "Peygamberimiz Müslümanları birbirine kenetlenmiş neye benzetmiştir?",
    "options": [
      "Bina tuğlalarına",
      "Ağaç yapraklarına",
      "Deniz dalgalarına",
      "Bulutlara"
    ],
    "correct": "Bina tuğlalarına",
    "wisdom": "Müslümanlar birbirine kenetlenmiş bir bina gibidir, birbirlerini desteklerler."
  },
  {
    "id": "mz_q_40",
    "category": "Ahlak ve Edep",
    "question": "Müslüman kimdir sorusuna Peygamberimiz nasıl cevap vermiştir?",
    "options": [
      "Elinin ve dilinin güvenilir olduğu kimsedir",
      "Çok namaz kılandır",
      "Çok oruç tutandır",
      "Çok zengin olandır"
    ],
    "correct": "Elinin ve dilinin güvenilir olduğu kimsedir",
    "wisdom": "Müslüman, diğer Müslümanların elinden ve dilinden güvende olduğu kimsedir."
  },
  {
    "id": "mz_q_41",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 41)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 41)"
  },
  {
    "id": "mz_q_42",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 42)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 42)"
  },
  {
    "id": "mz_q_43",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 43)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 43)"
  },
  {
    "id": "mz_q_44",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 44)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 44)"
  },
  {
    "id": "mz_q_45",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 45)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 45)"
  },
  {
    "id": "mz_q_46",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 46)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 46)"
  },
  {
    "id": "mz_q_47",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 47)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 47)"
  },
  {
    "id": "mz_q_48",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 48)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 48)"
  },
  {
    "id": "mz_q_49",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 49)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 49)"
  },
  {
    "id": "mz_q_50",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 50)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 50)"
  },
  {
    "id": "mz_q_51",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 51)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 51)"
  },
  {
    "id": "mz_q_52",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 52)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 52)"
  },
  {
    "id": "mz_q_53",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 53)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 53)"
  },
  {
    "id": "mz_q_54",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 54)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 54)"
  },
  {
    "id": "mz_q_55",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 55)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 55)"
  },
  {
    "id": "mz_q_56",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 56)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 56)"
  },
  {
    "id": "mz_q_57",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 57)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 57)"
  },
  {
    "id": "mz_q_58",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 58)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 58)"
  },
  {
    "id": "mz_q_59",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 59)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 59)"
  },
  {
    "id": "mz_q_60",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 60)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 60)"
  },
  {
    "id": "mz_q_61",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 61)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 61)"
  },
  {
    "id": "mz_q_62",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 62)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 62)"
  },
  {
    "id": "mz_q_63",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 63)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 63)"
  },
  {
    "id": "mz_q_64",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 64)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 64)"
  },
  {
    "id": "mz_q_65",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 65)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 65)"
  },
  {
    "id": "mz_q_66",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 66)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 66)"
  },
  {
    "id": "mz_q_67",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 67)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 67)"
  },
  {
    "id": "mz_q_68",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 68)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 68)"
  },
  {
    "id": "mz_q_69",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 69)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 69)"
  },
  {
    "id": "mz_q_70",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 70)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 70)"
  },
  {
    "id": "mz_q_71",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 71)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 71)"
  },
  {
    "id": "mz_q_72",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 72)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 72)"
  },
  {
    "id": "mz_q_73",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 73)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 73)"
  },
  {
    "id": "mz_q_74",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 74)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 74)"
  },
  {
    "id": "mz_q_75",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 75)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 75)"
  },
  {
    "id": "mz_q_76",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 76)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 76)"
  },
  {
    "id": "mz_q_77",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 77)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 77)"
  },
  {
    "id": "mz_q_78",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 78)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 78)"
  },
  {
    "id": "mz_q_79",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 79)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 79)"
  },
  {
    "id": "mz_q_80",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 80)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 80)"
  },
  {
    "id": "mz_q_81",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 81)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 81)"
  },
  {
    "id": "mz_q_82",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 82)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 82)"
  },
  {
    "id": "mz_q_83",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 83)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 83)"
  },
  {
    "id": "mz_q_84",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 84)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 84)"
  },
  {
    "id": "mz_q_85",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 85)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 85)"
  },
  {
    "id": "mz_q_86",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 86)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 86)"
  },
  {
    "id": "mz_q_87",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 87)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 87)"
  },
  {
    "id": "mz_q_88",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 88)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 88)"
  },
  {
    "id": "mz_q_89",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 89)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 89)"
  },
  {
    "id": "mz_q_90",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 90)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 90)"
  },
  {
    "id": "mz_q_91",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 91)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 91)"
  },
  {
    "id": "mz_q_92",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 92)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 92)"
  },
  {
    "id": "mz_q_93",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 93)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 93)"
  },
  {
    "id": "mz_q_94",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 94)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 94)"
  },
  {
    "id": "mz_q_95",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 95)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 95)"
  },
  {
    "id": "mz_q_96",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 96)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 96)"
  },
  {
    "id": "mz_q_97",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 97)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 97)"
  },
  {
    "id": "mz_q_98",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 98)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 98)"
  },
  {
    "id": "mz_q_99",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 99)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 99)"
  },
  {
    "id": "mz_q_100",
    "category": "Ahlak ve Edep",
    "question": "Aşağıdaki davranışlardan hangisi İslam ahlakına ve edep kurallarına en uygundur? (Soru 100)",
    "options": [
      "Büyüklere saygı, küçüklere sevgi göstermek",
      "Kendi çıkarını her şeyin üstünde tutmak",
      "İnsanların hatalarını araştırmak",
      "Başkalarıyla alay etmek"
    ],
    "correct": "Büyüklere saygı, küçüklere sevgi göstermek",
    "wisdom": "İslam ahlakı sevgi, saygı, hoşgörü ve dürüstlük temelleri üzerine kuruludur. (Ahlak Soru 100)"
  },
  {
    "id": "mz_q_101",
    "category": "Peygamberler Tarihi",
    "question": "İlk yaratılan insan ve ilk peygamber aşağıdakilerden hangisidir?",
    "options": [
      "Hz. Adem (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. İdris (a.s.)"
    ],
    "correct": "Hz. Adem (a.s.)",
    "wisdom": "Hz. Adem, insanlığın babası ve ilk peygamberdir."
  },
  {
    "id": "mz_q_102",
    "category": "Peygamberler Tarihi",
    "question": "Büyük bir tufanla kavmi cezalandırılan ve gemi inşa eden peygamber kimdir?",
    "options": [
      "Hz. Nuh (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. İbrahim (a.s.)"
    ],
    "correct": "Hz. Nuh (a.s.)",
    "wisdom": "Hz. Nuh, azim sahibi (ulul-azm) peygamberlerin ilkidir ve Nuh Tufanı ile bilinir."
  },
  {
    "id": "mz_q_103",
    "category": "Peygamberler Tarihi",
    "question": "Nemrut tarafından ateşe atılan ama ateşin kendisini yakmadığı peygamber kimdir?",
    "options": [
      "Hz. İbrahim (a.s.)",
      "Hz. İsmail (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Yakub (a.s.)"
    ],
    "correct": "Hz. İbrahim (a.s.)",
    "wisdom": "Ateşe 'Ey ateş! İbrahim'e karşı serin ve esenlik ol!' denmiştir."
  },
  {
    "id": "mz_q_104",
    "category": "Peygamberler Tarihi",
    "question": "Hz. İbrahim'in kurban etmekle imtihan edildiği ve Kabe'yi babasıyla inşa eden oğlu kimdir?",
    "options": [
      "Hz. İsmail (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Yakub (a.s.)",
      "Hz. Yusuf (a.s.)"
    ],
    "correct": "Hz. İsmail (a.s.)",
    "wisdom": "Hz. İsmail, babası Hz. İbrahim ile birlikte Kabe'nin temellerini yükseltmiştir."
  },
  {
    "id": "mz_q_105",
    "category": "Peygamberler Tarihi",
    "question": "Oğlu Hz. Yusuf'un acısından dolayı gözleri kapanan peygamber kimdir?",
    "options": [
      "Hz. Yakub (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. İshak (a.s.)",
      "Hz. Harun (a.s.)"
    ],
    "correct": "Hz. Yakub (a.s.)",
    "wisdom": "Hz. Yakub, Kenan diyarında yaşamış ve oğlunun hasretiyle yıllarca ağlamıştır."
  },
  {
    "id": "mz_q_106",
    "category": "Peygamberler Tarihi",
    "question": "Kardeşleri tarafından kuyuya atılan, sonra Mısır'a maliye bakanı olan peygamber kimdir?",
    "options": [
      "Hz. Yusuf (a.s.)",
      "Hz. Yakub (a.s.)",
      "Hz. Bünyamin (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. Yusuf (a.s.)",
    "wisdom": "Hz. Yusuf, güzelliği ve rüya tabir etme mucizesiyle meşhurdur."
  },
  {
    "id": "mz_q_107",
    "category": "Peygamberler Tarihi",
    "question": "Ağır bir hastalık ve musibetlerle imtihan edilip sabrıyla sembol olan peygamber kimdir?",
    "options": [
      "Hz. Eyüp (a.s.)",
      "Hz. Zülkifl (a.s.)",
      "Hz. Elyasa (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Eyüp (a.s.)",
    "wisdom": "Hz. Eyüp, dertlere karşı gösterdiği sabırla insanlığa örnek olmuştur."
  },
  {
    "id": "mz_q_108",
    "category": "Peygamberler Tarihi",
    "question": "Asurluların başkenti Ninova halkına gönderilen ve balığın karnında tövbe eden peygamber kimdir?",
    "options": [
      "Hz. Yunus (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yahya (a.s.)"
    ],
    "correct": "Hz. Yunus (a.s.)",
    "wisdom": "Hz. Yunus, balığın karnında 'La ilahe illa ente subhaneke inni kuntu minez-zalimin' duasını okumuştur."
  },
  {
    "id": "mz_q_109",
    "category": "Peygamberler Tarihi",
    "question": "Kızıldeniz'i asasıyla ikiye yaran ve Firavun'a karşı tevhid mücadelesi veren peygamber kimdir?",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Harun (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Davud (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa, kendisine Tevrat indirilen ve Tur Dağı'nda Allah ile konuşan peygamberdir."
  },
  {
    "id": "mz_q_110",
    "category": "Peygamberler Tarihi",
    "question": "Demiri elinde hamur gibi şekillendiren, sesinin güzelliğiyle bilinen ve Zebur indirilen padişah peygamber kimdir?",
    "options": [
      "Hz. Davud (a.s.)",
      "Hz. Süleyman (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. İsa (a.s.)"
    ],
    "correct": "Hz. Davud (a.s.)",
    "wisdom": "Hz. Davud hem peygamber hem hükümdardı, sesinin güzelliği 'Davudî ses' deyimiyle anılır."
  },
  {
    "id": "mz_q_111",
    "category": "Peygamberler Tarihi",
    "question": "Rüzgara yön veren, hayvanların ve cinlerin dilini anlayan hükümdar peygamber kimdir?",
    "options": [
      "Hz. Süleyman (a.s.)",
      "Hz. Davud (a.s.)",
      "Hz. Zülkarneyn (a.s.)",
      "Hz. Lokman (a.s.)"
    ],
    "correct": "Hz. Süleyman (a.s.)",
    "wisdom": "Hz. Süleyman, babası Hz. Davud'un ardından büyük bir saltanat kurmuştur."
  },
  {
    "id": "mz_q_112",
    "category": "Peygamberler Tarihi",
    "question": "Babasız olarak dünyaya gelen, beşikteyken konuşan ve hastaları iyileştiren peygamber kimdir?",
    "options": [
      "Hz. İsa (a.s.)",
      "Hz. Yahya (a.s.)",
      "Hz. Zekeriya (a.s.)",
      "Hz. Musa (a.s.)"
    ],
    "correct": "Hz. İsa (a.s.)",
    "wisdom": "Hz. İsa, Allah'ın 'Ol' kelimesiyle ve ruhuyla Hz. Meryem'den babasız dünyaya gelmiştir."
  },
  {
    "id": "mz_q_113",
    "category": "Peygamberler Tarihi",
    "question": "Semud kavmine gönderilen ve mucize olarak kayadan bir deve çıkaran peygamber kimdir?",
    "options": [
      "Hz. Salih (a.s.)",
      "Hz. Hud (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Lut (a.s.)"
    ],
    "correct": "Hz. Salih (a.s.)",
    "wisdom": "Semud kavmi, Hz. Salih'in mucize devesini katlettiği için helak edilmiştir."
  },
  {
    "id": "mz_q_114",
    "category": "Peygamberler Tarihi",
    "question": "Ad kavmine gönderilen ve güçlü fırtınalarla kavmi helak olan peygamber kimdir?",
    "options": [
      "Hz. Hud (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Nuh (a.s.)",
      "Hz. Lut (a.s.)"
    ],
    "correct": "Hz. Hud (a.s.)",
    "wisdom": "Ad kavmi, yüksek sütunlu binalar inşa eden güçlü ama kibirli bir kavimdi."
  },
  {
    "id": "mz_q_115",
    "category": "Peygamberler Tarihi",
    "question": "Medyen ve Eyke halkına gönderilen, ölçü ve tartıda dürüstlüğü savunan hatip peygamber kimdir?",
    "options": [
      "Hz. Şuayb (a.s.)",
      "Hz. Musa (a.s.)",
      "Hz. Harun (a.s.)",
      "Hz. Lut (a.s.)"
    ],
    "correct": "Hz. Şuayb (a.s.)",
    "wisdom": "Hz. Şuayb, hitabetinin güzelliğinden dolayı 'Peygamberlerin Hatibi' olarak bilinir."
  },
  {
    "id": "mz_q_116",
    "category": "Peygamberler Tarihi",
    "question": "Hz. Nuh'un gemisi tufandan sonra hangi dağa oturmuştur?",
    "options": [
      "Cudi Dağı",
      "Ağrı Dağı",
      "Tur Dağı",
      "Uhud Dağı"
    ],
    "correct": "Cudi Dağı",
    "wisdom": "Kur'an-ı Kerim'de Nuh'un gemisinin 'Cudi' üzerine oturduğu belirtilir."
  },
  {
    "id": "mz_q_117",
    "category": "Peygamberler Tarihi",
    "question": "Hz. Yakub'un diğer adı (lakabı) nedir ve soyundan gelenlere ne denir?",
    "options": [
      "İsrail",
      "Kureyş",
      "Ensar",
      "Muhacir"
    ],
    "correct": "İsrail",
    "wisdom": "Hz. Yakub'un lakabı İsrail'dir ve soyundan gelenlere İsrailoğulları denir."
  },
  {
    "id": "mz_q_118",
    "category": "Peygamberler Tarihi",
    "question": "Mabette Hz. Meryem'in bakımını üstlenen ve yaşlılığında Hz. Yahya müjdelenen peygamber kimdir?",
    "options": [
      "Hz. Zekeriya (a.s.)",
      "Hz. Yahya (a.s.)",
      "Hz. İsa (a.s.)",
      "Hz. Elyasa (a.s.)"
    ],
    "correct": "Hz. Zekeriya (a.s.)",
    "wisdom": "Hz. Zekeriya, Kudüs'teki Süleyman Mabedi'nde görevliydi."
  },
  {
    "id": "mz_q_119",
    "category": "Peygamberler Tarihi",
    "question": "Terzilik mesleğinin pir sayılan ve göklere yükseltilen peygamber kimdir?",
    "options": [
      "Hz. İdris (a.s.)",
      "Hz. Şit (a.s.)",
      "Hz. Lokman (a.s.)",
      "Hz. Harun (a.s.)"
    ],
    "correct": "Hz. İdris (a.s.)",
    "wisdom": "Hz. İdris, kalemle yazan ve elbise dikip giyen ilk peygamberlerdendir."
  },
  {
    "id": "mz_q_120",
    "category": "Peygamberler Tarihi",
    "question": "Sodom ve Gomore şehirlerinde yaşayan, ahlaksızlıkları yüzünden taş yağmuruyla helak olan kavmin peygamberi kimdir?",
    "options": [
      "Hz. Lut (a.s.)",
      "Hz. İbrahim (a.s.)",
      "Hz. Şuayb (a.s.)",
      "Hz. Salih (a.s.)"
    ],
    "correct": "Hz. Lut (a.s.)",
    "wisdom": "Hz. Lut, Hz. İbrahim'in yeğenidir ve onunla aynı dönemde yaşamıştır."
  },
  {
    "id": "mz_q_121",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 21)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 21)"
  },
  {
    "id": "mz_q_122",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 22)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 22)"
  },
  {
    "id": "mz_q_123",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 23)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 23)"
  },
  {
    "id": "mz_q_124",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 24)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 24)"
  },
  {
    "id": "mz_q_125",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 25)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 25)"
  },
  {
    "id": "mz_q_126",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 26)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 26)"
  },
  {
    "id": "mz_q_127",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 27)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 27)"
  },
  {
    "id": "mz_q_128",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 28)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 28)"
  },
  {
    "id": "mz_q_129",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 29)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 29)"
  },
  {
    "id": "mz_q_130",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 30)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 30)"
  },
  {
    "id": "mz_q_131",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 31)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 31)"
  },
  {
    "id": "mz_q_132",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 32)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 32)"
  },
  {
    "id": "mz_q_133",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 33)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 33)"
  },
  {
    "id": "mz_q_134",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 34)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 34)"
  },
  {
    "id": "mz_q_135",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 35)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 35)"
  },
  {
    "id": "mz_q_136",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 36)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 36)"
  },
  {
    "id": "mz_q_137",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 37)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 37)"
  },
  {
    "id": "mz_q_138",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 38)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 38)"
  },
  {
    "id": "mz_q_139",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 39)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 39)"
  },
  {
    "id": "mz_q_140",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 40)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 40)"
  },
  {
    "id": "mz_q_141",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 41)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 41)"
  },
  {
    "id": "mz_q_142",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 42)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 42)"
  },
  {
    "id": "mz_q_143",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 43)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 43)"
  },
  {
    "id": "mz_q_144",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 44)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 44)"
  },
  {
    "id": "mz_q_145",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 45)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 45)"
  },
  {
    "id": "mz_q_146",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 46)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 46)"
  },
  {
    "id": "mz_q_147",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 47)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 47)"
  },
  {
    "id": "mz_q_148",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 48)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 48)"
  },
  {
    "id": "mz_q_149",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 49)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 49)"
  },
  {
    "id": "mz_q_150",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 50)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 50)"
  },
  {
    "id": "mz_q_151",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 51)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 51)"
  },
  {
    "id": "mz_q_152",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 52)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 52)"
  },
  {
    "id": "mz_q_153",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 53)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 53)"
  },
  {
    "id": "mz_q_154",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 54)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 54)"
  },
  {
    "id": "mz_q_155",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 55)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 55)"
  },
  {
    "id": "mz_q_156",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 56)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 56)"
  },
  {
    "id": "mz_q_157",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 57)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 57)"
  },
  {
    "id": "mz_q_158",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 58)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 58)"
  },
  {
    "id": "mz_q_159",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 59)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 59)"
  },
  {
    "id": "mz_q_160",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 60)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 60)"
  },
  {
    "id": "mz_q_161",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 61)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 61)"
  },
  {
    "id": "mz_q_162",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 62)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 62)"
  },
  {
    "id": "mz_q_163",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 63)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 63)"
  },
  {
    "id": "mz_q_164",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 64)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 64)"
  },
  {
    "id": "mz_q_165",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 65)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 65)"
  },
  {
    "id": "mz_q_166",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 66)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 66)"
  },
  {
    "id": "mz_q_167",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 67)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 67)"
  },
  {
    "id": "mz_q_168",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 68)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 68)"
  },
  {
    "id": "mz_q_169",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 69)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 69)"
  },
  {
    "id": "mz_q_170",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 70)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 70)"
  },
  {
    "id": "mz_q_171",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 71)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 71)"
  },
  {
    "id": "mz_q_172",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 72)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 72)"
  },
  {
    "id": "mz_q_173",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 73)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 73)"
  },
  {
    "id": "mz_q_174",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 74)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 74)"
  },
  {
    "id": "mz_q_175",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 75)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 75)"
  },
  {
    "id": "mz_q_176",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 76)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 76)"
  },
  {
    "id": "mz_q_177",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 77)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 77)"
  },
  {
    "id": "mz_q_178",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 78)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 78)"
  },
  {
    "id": "mz_q_179",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 79)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 79)"
  },
  {
    "id": "mz_q_180",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 80)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 80)"
  },
  {
    "id": "mz_q_181",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 81)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 81)"
  },
  {
    "id": "mz_q_182",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 82)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 82)"
  },
  {
    "id": "mz_q_183",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 83)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 83)"
  },
  {
    "id": "mz_q_184",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 84)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 84)"
  },
  {
    "id": "mz_q_185",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 85)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 85)"
  },
  {
    "id": "mz_q_186",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 86)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 86)"
  },
  {
    "id": "mz_q_187",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 87)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 87)"
  },
  {
    "id": "mz_q_188",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 88)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 88)"
  },
  {
    "id": "mz_q_189",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 89)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 89)"
  },
  {
    "id": "mz_q_190",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 90)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 90)"
  },
  {
    "id": "mz_q_191",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 91)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 91)"
  },
  {
    "id": "mz_q_192",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 92)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 92)"
  },
  {
    "id": "mz_q_193",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 93)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 93)"
  },
  {
    "id": "mz_q_194",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 94)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 94)"
  },
  {
    "id": "mz_q_195",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 95)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 95)"
  },
  {
    "id": "mz_q_196",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 96)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 96)"
  },
  {
    "id": "mz_q_197",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 97)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 97)"
  },
  {
    "id": "mz_q_198",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 98)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 98)"
  },
  {
    "id": "mz_q_199",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 99)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 99)"
  },
  {
    "id": "mz_q_200",
    "category": "Peygamberler Tarihi",
    "question": "Aşağıdaki peygamberlerden hangisine semavi bir kitap veya suhuflar indirilmiştir? (Soru 100)",
    "options": [
      "Hz. Musa (a.s.)",
      "Hz. Salih (a.s.)",
      "Hz. Yusuf (a.s.)",
      "Hz. Yunus (a.s.)"
    ],
    "correct": "Hz. Musa (a.s.)",
    "wisdom": "Hz. Musa'ya Tevrat indirilirken, diğer birçok peygambere suhuflar verilmiş veya önceki kitaplarla amel etmişlerdir. (Siyer Soru 100)"
  },
  {
    "id": "mz_q_201",
    "category": "İslam Devletleri",
    "question": "Peygamberimizden sonra İslam devletini yöneten ilk halife kimdir?",
    "options": [
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Ömer (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Ebu Bekir (r.a.)",
    "wisdom": "Hz. Ebu Bekir, ilk halife olup dinden dönenlerle mücadele etmiş ve Kur'an'ı mushaf haline getirmiştir."
  },
  {
    "id": "mz_q_202",
    "category": "İslam Devletleri",
    "question": "İspanya yarımadasında kurulup Avrupa'da bilim ve kültürün yayılmasına öncülük eden İslam devleti hangisidir?",
    "options": [
      "Endülüs Emevi Devleti",
      "Büyük Selçuklu Devleti",
      "Karahanlılar",
      "Gazneliler"
    ],
    "correct": "Endülüs Emevi Devleti",
    "wisdom": "Endülüs Emevi Devleti, Kurtuba (Cordoba) merkezli bilim merkezleriyle Avrupa'yı aydınlatmıştır."
  },
  {
    "id": "mz_q_203",
    "category": "İslam Devletleri",
    "question": "Orta Asya'da İslamiyet'i kabul eden ilk Türk-İslam devleti hangisidir?",
    "options": [
      "Karahanlılar",
      "Gazneliler",
      "Büyük Selçuklu Devleti",
      "Göktürkler"
    ],
    "correct": "Karahanlılar",
    "wisdom": "Karahanlılar, Satuk Buğra Han döneminde İslamiyet'i resmi din olarak kabul etmişlerdir."
  },
  {
    "id": "mz_q_204",
    "category": "İslam Devletleri",
    "question": "1071 Malazgirt Savaşı ile Anadolu'nun kapılarını Türklere açan Türk-İslam devleti hangisidir?",
    "options": [
      "Büyük Selçuklu Devleti",
      "Osmanlı Devleti",
      "Anadolu Selçuklu Devleti",
      "Harzemşahlar"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "Sultan Alparslan komutasındaki Selçuklu ordusu Malazgirt'te Bizans'ı yenerek Anadolu fethini başlatmıştır."
  },
  {
    "id": "mz_q_205",
    "category": "İslam Devletleri",
    "question": "Bağdat'ı başkent yaparak bilimsel çalışmaları 'Beytü'l-Hikme' (Bilgelik Evi) ile zirveye taşıyan İslam devleti hangisidir?",
    "options": [
      "Abbasiler",
      "Emeviler",
      "Fatımiler",
      "Eyyubiler"
    ],
    "correct": "Abbasiler",
    "wisdom": "Abbasiler dönemi, İslam medeniyetinin altın çağı olarak bilinir."
  },
  {
    "id": "mz_q_206",
    "category": "İslam Devletleri",
    "question": "Şam merkezli kurulan, sınırları İspanya'dan Hindistan'a kadar genişleten ilk hanedan İslam devleti hangisidir?",
    "options": [
      "Emeviler",
      "Abbasiler",
      "Gazneliler",
      "Memlükler"
    ],
    "correct": "Emeviler",
    "wisdom": "Emeviler, Muaviye tarafından Şam'da kurulmuştur."
  },
  {
    "id": "mz_q_207",
    "category": "İslam Devletleri",
    "question": "Söğüt ve Domaniç çevresinde kurulan, 600 yılı aşkın üç kıtaya hükmeden cihan devleti hangisidir?",
    "options": [
      "Osmanlı Devleti",
      "Selçuklu Devleti",
      "Babür İmparatorluğu",
      "Safeviler"
    ],
    "correct": "Osmanlı Devleti",
    "wisdom": "Osmanlı Devleti 1299 yılında Osman Gazi liderliğinde kurulmuştur."
  },
  {
    "id": "mz_q_208",
    "category": "İslam Devletleri",
    "question": "Hindistan'a 17 sefer düzenleyerek İslamiyet'in orada yayılmasını sağlayan Gazneli hükümdar kimdir?",
    "options": [
      "Gazneli Mahmut",
      "Alp Er Tunga",
      "Tuğrul Bey",
      "Sultan Mesut"
    ],
    "correct": "Gazneli Mahmut",
    "wisdom": "Sultan Mahmud, İslam dünyasında 'Sultan' unvanını kullanan ilk hükümdardır."
  },
  {
    "id": "mz_q_209",
    "category": "İslam Devletleri",
    "question": "1187 Hıttin Savaşı ile Kudüs'ü Haçlılardan geri alan ünlü İslam komutanı ve devlet kurucusu kimdir?",
    "options": [
      "Selahaddin Eyyubi",
      "Nureddin Zengi",
      "Baybars",
      "Kutuz"
    ],
    "correct": "Selahaddin Eyyubi",
    "wisdom": "Selahaddin Eyyubi, Kudüs fatihi ve Eyyubiler devletinin kurucusudur."
  },
  {
    "id": "mz_q_210",
    "category": "İslam Devletleri",
    "question": "Moğolları (İlhanlıları) Ayn Calut Savaşı'nda yeryüzünde ilk kez durduran ve Mısır'da hüküm süren devlet hangisidir?",
    "options": [
      "Memlükler",
      "Eyyubiler",
      "Abbasiler",
      "Gazneliler"
    ],
    "correct": "Memlükler",
    "wisdom": "Memlükler, askeri güçleriyle Moğol istilasını durdurmayı başarmıştır."
  },
  {
    "id": "mz_q_211",
    "category": "İslam Devletleri",
    "question": "Hindistan'da kurulan ve dünyaca ünlü Taç Mahal anıt mezarını inşa ettiren Türk-İslam devleti hangisidir?",
    "options": [
      "Babür İmparatorluğu",
      "Gazneliler",
      "Karahanlılar",
      "Safeviler"
    ],
    "correct": "Babür İmparatorluğu",
    "wisdom": "Şah Cihan, eşi Mümtaz Mahal için Agra kentinde Taç Mahal'i yaptırmıştır."
  },
  {
    "id": "mz_q_212",
    "category": "İslam Devletleri",
    "question": "Mısır'da kurulan ilk Türk-İslam devleti aşağıdakilerden hangisidir?",
    "options": [
      "Tolunoğulları",
      "İhşidiler",
      "Eyyubiler",
      "Memlükler"
    ],
    "correct": "Tolunoğulları",
    "wisdom": "Tolunoğulları, Mısır'da bağımsızlığını ilan eden ilk Türk hanedanıdır."
  },
  {
    "id": "mz_q_213",
    "category": "İslam Devletleri",
    "question": "Türk-İslam edebiyatının ilk yazılı eseri kabul edilen Kutadgu Bilig'in yazarı kimdir?",
    "options": [
      "Yusuf Has Hacib",
      "Kaşgarlı Mahmud",
      "Edip Ahmet Yükneki",
      "Ahmet Yesevi"
    ],
    "correct": "Yusuf Has Hacib",
    "wisdom": "Kutadgu Bilig, 'Mutluluk Veren Bilgi' anlamına gelir ve Karahanlılar döneminde yazılmıştır."
  },
  {
    "id": "mz_q_214",
    "category": "İslam Devletleri",
    "question": "Türkçenin ilk sözlüğü ve coğrafya haritasını içeren Divan-ı Lugati't-Türk'ün yazarı kimdir?",
    "options": [
      "Kaşgarlı Mahmud",
      "Yusuf Has Hacib",
      "Edip Ahmet Yükneki",
      "Hoca Ahmet Yesevi"
    ],
    "correct": "Kaşgarlı Mahmud",
    "wisdom": "Kaşgarlı Mahmud, Türkçenin Arapça kadar zengin bir dil olduğunu kanıtlamak için bu eseri yazmıştır."
  },
  {
    "id": "mz_q_215",
    "category": "İslam Devletleri",
    "question": "Büyük Selçuklu Devleti'nin ünlü veziri, kendi adıyla anılan Nizamiye Medreselerini kuran devlet adamı kimdir?",
    "options": [
      "Nizamülmülk",
      "Vezir Tonyukuk",
      "Pargalı İbrahim",
      "Sokullu Mehmet"
    ],
    "correct": "Nizamülmülk",
    "wisdom": "Nizamülmülk, yazdığı 'Siyasetname' eseriyle de yönetim sanatını anlatmıştır."
  },
  {
    "id": "mz_q_216",
    "category": "İslam Devletleri",
    "question": "Endülüs'teki son İslam devleti olan ve Granada (Gırnata) şehrinde Elhamra Sarayı'nı inşa eden devlet hangisidir?",
    "options": [
      "Beni Ahmer Devleti",
      "Murabıtlar",
      "Muvahhidler",
      "Kurtuba Halifeliği"
    ],
    "correct": "Beni Ahmer Devleti",
    "wisdom": "Beni Ahmer Devleti (Nasriler), 1492 yılında yıkılarak Endülüs'teki İslam egemenliği son bulmuştur."
  },
  {
    "id": "mz_q_217",
    "category": "İslam Devletleri",
    "question": "Malazgirt Savaşı'ndan önce Bizans elçisine 'Biz size boyun eğmeyeceğiz, zafer veya şehadet bizimdir' diyen Selçuklu sultanı kimdir?",
    "options": [
      "Sultan Alparslan",
      "Tuğrul Bey",
      "Melikşah",
      "Sultan Sencer"
    ],
    "correct": "Sultan Alparslan",
    "wisdom": "Sultan Alparslan beyaz elbisesiyle kefenini giyerek savaşa çıkmıştır."
  },
  {
    "id": "mz_q_218",
    "category": "İslam Devletleri",
    "question": "Osmanlı Devleti'nin kurucusu Osman Bey'e kılıç kuşanma ve devlet olma nasihatini veren din alimi (kayınpederi) kimdir?",
    "options": [
      "Şeyh Edebali",
      "Dursun Fakıh",
      "Akşemseddin",
      "Hacı Bayram Veli"
    ],
    "correct": "Şeyh Edebali",
    "wisdom": "Şeyh Edebali'nin 'İnsanı yaşat ki devlet yaşasın' sözü meşhurdur."
  },
  {
    "id": "mz_q_219",
    "category": "İslam Devletleri",
    "question": "1453 yılında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan Osmanlı padişahı kimdir?",
    "options": [
      "II. Mehmed (Fatih)",
      "I. Süleyman (Kanuni)",
      "Yavuz Sultan Selim",
      "II. Abdülhamid"
    ],
    "correct": "II. Mehmed (Fatih)",
    "wisdom": "İstanbul fethi, Peygamberimiz (s.a.v.)'in hadisindeki müjdeye mazhar olmuştur."
  },
  {
    "id": "mz_q_220",
    "category": "İslam Devletleri",
    "question": "Mısır Seferi ile halifeliği Osmanlı hanedanına kazandıran padişah kimdir?",
    "options": [
      "Yavuz Sultan Selim",
      "Fatih Sultan Mehmet",
      "Kanuni Sultan Süleyman",
      "II. Selim"
    ],
    "correct": "Yavuz Sultan Selim",
    "wisdom": "1517 Ridaniye Savaşı ile Memlük Devleti son bulmuş ve halifelik Osmanlı'ya geçmiştir."
  },
  {
    "id": "mz_q_221",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 21)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 21)"
  },
  {
    "id": "mz_q_222",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 22)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 22)"
  },
  {
    "id": "mz_q_223",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 23)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 23)"
  },
  {
    "id": "mz_q_224",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 24)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 24)"
  },
  {
    "id": "mz_q_225",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 25)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 25)"
  },
  {
    "id": "mz_q_226",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 26)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 26)"
  },
  {
    "id": "mz_q_227",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 27)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 27)"
  },
  {
    "id": "mz_q_228",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 28)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 28)"
  },
  {
    "id": "mz_q_229",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 29)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 29)"
  },
  {
    "id": "mz_q_230",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 30)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 30)"
  },
  {
    "id": "mz_q_231",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 31)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 31)"
  },
  {
    "id": "mz_q_232",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 32)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 32)"
  },
  {
    "id": "mz_q_233",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 33)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 33)"
  },
  {
    "id": "mz_q_234",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 34)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 34)"
  },
  {
    "id": "mz_q_235",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 35)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 35)"
  },
  {
    "id": "mz_q_236",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 36)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 36)"
  },
  {
    "id": "mz_q_237",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 37)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 37)"
  },
  {
    "id": "mz_q_238",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 38)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 38)"
  },
  {
    "id": "mz_q_239",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 39)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 39)"
  },
  {
    "id": "mz_q_240",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 40)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 40)"
  },
  {
    "id": "mz_q_241",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 41)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 41)"
  },
  {
    "id": "mz_q_242",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 42)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 42)"
  },
  {
    "id": "mz_q_243",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 43)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 43)"
  },
  {
    "id": "mz_q_244",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 44)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 44)"
  },
  {
    "id": "mz_q_245",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 45)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 45)"
  },
  {
    "id": "mz_q_246",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 46)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 46)"
  },
  {
    "id": "mz_q_247",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 47)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 47)"
  },
  {
    "id": "mz_q_248",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 48)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 48)"
  },
  {
    "id": "mz_q_249",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 49)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 49)"
  },
  {
    "id": "mz_q_250",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 50)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 50)"
  },
  {
    "id": "mz_q_251",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 51)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 51)"
  },
  {
    "id": "mz_q_252",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 52)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 52)"
  },
  {
    "id": "mz_q_253",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 53)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 53)"
  },
  {
    "id": "mz_q_254",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 54)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 54)"
  },
  {
    "id": "mz_q_255",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 55)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 55)"
  },
  {
    "id": "mz_q_256",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 56)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 56)"
  },
  {
    "id": "mz_q_257",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 57)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 57)"
  },
  {
    "id": "mz_q_258",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 58)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 58)"
  },
  {
    "id": "mz_q_259",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 59)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 59)"
  },
  {
    "id": "mz_q_260",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 60)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 60)"
  },
  {
    "id": "mz_q_261",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 61)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 61)"
  },
  {
    "id": "mz_q_262",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 62)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 62)"
  },
  {
    "id": "mz_q_263",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 63)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 63)"
  },
  {
    "id": "mz_q_264",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 64)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 64)"
  },
  {
    "id": "mz_q_265",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 65)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 65)"
  },
  {
    "id": "mz_q_266",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 66)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 66)"
  },
  {
    "id": "mz_q_267",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 67)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 67)"
  },
  {
    "id": "mz_q_268",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 68)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 68)"
  },
  {
    "id": "mz_q_269",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 69)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 69)"
  },
  {
    "id": "mz_q_270",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 70)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 70)"
  },
  {
    "id": "mz_q_271",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 71)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 71)"
  },
  {
    "id": "mz_q_272",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 72)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 72)"
  },
  {
    "id": "mz_q_273",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 73)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 73)"
  },
  {
    "id": "mz_q_274",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 74)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 74)"
  },
  {
    "id": "mz_q_275",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 75)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 75)"
  },
  {
    "id": "mz_q_276",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 76)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 76)"
  },
  {
    "id": "mz_q_277",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 77)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 77)"
  },
  {
    "id": "mz_q_278",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 78)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 78)"
  },
  {
    "id": "mz_q_279",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 79)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 79)"
  },
  {
    "id": "mz_q_280",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 80)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 80)"
  },
  {
    "id": "mz_q_281",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 81)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 81)"
  },
  {
    "id": "mz_q_282",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 82)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 82)"
  },
  {
    "id": "mz_q_283",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 83)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 83)"
  },
  {
    "id": "mz_q_284",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 84)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 84)"
  },
  {
    "id": "mz_q_285",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 85)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 85)"
  },
  {
    "id": "mz_q_286",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 86)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 86)"
  },
  {
    "id": "mz_q_287",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 87)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 87)"
  },
  {
    "id": "mz_q_288",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 88)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 88)"
  },
  {
    "id": "mz_q_289",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 89)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 89)"
  },
  {
    "id": "mz_q_290",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 90)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 90)"
  },
  {
    "id": "mz_q_291",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 91)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 91)"
  },
  {
    "id": "mz_q_292",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 92)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 92)"
  },
  {
    "id": "mz_q_293",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 93)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 93)"
  },
  {
    "id": "mz_q_294",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 94)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 94)"
  },
  {
    "id": "mz_q_295",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 95)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 95)"
  },
  {
    "id": "mz_q_296",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 96)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 96)"
  },
  {
    "id": "mz_q_297",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 97)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 97)"
  },
  {
    "id": "mz_q_298",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 98)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 98)"
  },
  {
    "id": "mz_q_299",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 99)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 99)"
  },
  {
    "id": "mz_q_300",
    "category": "İslam Devletleri",
    "question": "Aşağıdakilerden hangisi tarihteki önemli İslam devletlerinden biridir? (Soru 100)",
    "options": [
      "Büyük Selçuklu Devleti",
      "Roma İmparatorluğu",
      "Bizans İmparatorluğu",
      "Pers İmparatorluğu"
    ],
    "correct": "Büyük Selçuklu Devleti",
    "wisdom": "İslam devletleri Asya, Avrupa ve Afrika kıtalarında hüküm sürmüş büyük medeniyetler kurmuşlardır. (Devlet Soru 100)"
  },
  {
    "id": "mz_q_301",
    "category": "Genel Kültür",
    "question": "Suyun normal şartlar altında kaynama noktası kaç santigrat derecedir?",
    "options": [
      "100",
      "90",
      "120",
      "80"
    ],
    "correct": "100",
    "wisdom": "Su, deniz seviyesinde (1 atmosfer basınçta) 100 derecede kaynar."
  },
  {
    "id": "mz_q_302",
    "category": "Genel Kültür",
    "question": "Güneş sistemindeki en büyük gezegen aşağıdakilerden hangisidir?",
    "options": [
      "Jüpiter",
      "Satürn",
      "Dünya",
      "Mars"
    ],
    "correct": "Jüpiter",
    "wisdom": "Jüpiter, çap ve kütle bakımından Güneş sistemindeki en büyük gezegendir."
  },
  {
    "id": "mz_q_303",
    "category": "Genel Kültür",
    "question": "Yerçekimi kanununu formülleştirerek bilim dünyasına kazandıran bilim insanı kimdir?",
    "options": [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ],
    "correct": "Isaac Newton",
    "wisdom": "Newton kafasına düşen elma hikayesiyle ve kütleçekim yasalarıyla bilinir."
  },
  {
    "id": "mz_q_304",
    "category": "Genel Kültür",
    "question": "Oksijen elementinin kimyasal simgesi aşağıdakilerden hangisidir?",
    "options": [
      "O",
      "Ox",
      "Os",
      "H"
    ],
    "correct": "O",
    "wisdom": "Oksijen 'O' harfi ile simgelenir ve havadaki temel solunum gazıdır."
  },
  {
    "id": "mz_q_305",
    "category": "Genel Kültür",
    "question": "Işığın boşluktaki yaklaşık hızı saniyede kaç bin kilometredir?",
    "options": [
      "300.000",
      "150.000",
      "500.000",
      "100.000"
    ],
    "correct": "300.000",
    "wisdom": "Işık hızı evrendeki en yüksek hız sınırı kabul edilir ve saniyede yaklaşık 300.000 km'dir."
  },
  {
    "id": "mz_q_306",
    "category": "Genel Kültür",
    "question": "Dünya üzerinde kaç adet kıta bulunmaktadır?",
    "options": [
      "7",
      "6",
      "8",
      "5"
    ],
    "correct": "7",
    "wisdom": "Dünyada Asya, Avrupa, Afrika, Kuzey Amerika, Güney Amerika, Antarktika ve Okyanusya olmak üzere 7 kıta kabul edilir."
  },
  {
    "id": "mz_q_307",
    "category": "Genel Kültür",
    "question": "Dünyanın en büyük okyanusu aşağıdakilerden hangisidir?",
    "options": [
      "Büyük Okyanus (Pasifik)",
      "Atlas Okyanusu",
      "Hint Okyanusu",
      "Arktik Okyanusu"
    ],
    "correct": "Büyük Okyanus (Pasifik)",
    "wisdom": "Büyük Okyanus, Dünya yüzeyinin neredeyse üçte birini kaplar."
  },
  {
    "id": "mz_q_308",
    "category": "Genel Kültür",
    "question": "Canlıların kalıtsal bilgilerini taşıyan ve hücre çekirdeğinde bulunan sarmal yapıya ne ad verilir?",
    "options": [
      "DNA",
      "RNA",
      "Protein",
      "Enzim"
    ],
    "correct": "DNA",
    "wisdom": "DNA, tüm genetik şifremizi barındıran ikili sarmal yapıdır."
  },
  {
    "id": "mz_q_309",
    "category": "Genel Kültür",
    "question": "Yön bulmaya yarayan, üzerinde kuzey-güney doğrultusunu gösteren bir ibresi olan alet hangisidir?",
    "options": [
      "Pusula",
      "Barometre",
      "Termometre",
      "Sekstant"
    ],
    "correct": "Pusula",
    "wisdom": "Pusula, manyetik sapma prensibine göre çalışır ve yön bulmayı kolaylaştırır."
  },
  {
    "id": "mz_q_310",
    "category": "Genel Kültür",
    "question": "Telefonu icat ederek haberleşme tarihinde çığır açan mucit kimdir?",
    "options": [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi"
    ],
    "correct": "Alexander Graham Bell",
    "wisdom": "Graham Bell, 1876 yılında ilk çalışan telefon patentini almıştır."
  },
  {
    "id": "mz_q_311",
    "category": "Genel Kültür",
    "question": "Elektrik ampulünü uzun denemeler sonucunda icat eden ve geliştiren mucit kimdir?",
    "options": [
      "Thomas Edison",
      "Nikola Tesla",
      "Benjamin Franklin",
      "Michael Faraday"
    ],
    "correct": "Thomas Edison",
    "wisdom": "Edison, binlerce başarısız denemeden sonra karbon flamanlı ampulü bulmuştur."
  },
  {
    "id": "mz_q_312",
    "category": "Genel Kültür",
    "question": "Göz sağlığına iyi gelen, içinde bol miktarda A vitamini barındıran turuncu renkli sebze hangisidir?",
    "options": [
      "Havuç",
      "Patates",
      "Biber",
      "Domates"
    ],
    "correct": "Havuç",
    "wisdom": "Havuçta bulunan beta-karoten vücutta A vitaminine dönüşerek göz sağlığını korur."
  },
  {
    "id": "mz_q_313",
    "category": "Genel Kültür",
    "question": "Gökkuşağında kaç adet renk bulunur?",
    "options": [
      "7",
      "6",
      "8",
      "5"
    ],
    "correct": "7",
    "wisdom": "Gökkuşağında sırasıyla kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor olmak üzere 7 renk vardır."
  },
  {
    "id": "mz_q_314",
    "category": "Genel Kültür",
    "question": "Kovanlarda yaşayan, bal üreten ve bitkilerin tozlaşmasında hayati rol oynayan böcek hangisidir?",
    "options": [
      "Arı",
      "Karınca",
      "Kelebek",
      "Sinek"
    ],
    "correct": "Arı",
    "wisdom": "Arılar ekosistemin devamlılığı için en kritik canlılardan biridir."
  },
  {
    "id": "mz_q_315",
    "category": "Genel Kültür",
    "question": "Güneş bir gezegen midir yoksa yıldız mıdır?",
    "options": [
      "Orta büyüklükte bir yıldızdır",
      "Dev bir gezegendir",
      "Uydudur",
      "Kuyruklu yıldızdır"
    ],
    "correct": "Orta büyüklükte bir yıldızdır",
    "wisdom": "Güneş, Güneş sisteminin merkezinde yer alan orta büyüklükte bir yıldızdır."
  },
  {
    "id": "mz_q_316",
    "category": "Genel Kültür",
    "question": "Dünyayı saran, nefes almamızı sağlayan gaz tabakasına ne ad verilir?",
    "options": [
      "Atmosfer",
      "Litosfer",
      "Hidrosfer",
      "Biyosfer"
    ],
    "correct": "Atmosfer",
    "wisdom": "Atmosfer bizi Güneş'in zararlı ışınlarından ve göktaşlarından korur."
  },
  {
    "id": "mz_q_317",
    "category": "Genel Kültür",
    "question": "Gökyüzünde her zaman kuzey yönünü gösteren ve yön bulmada kullanılan parlak yıldız hangisidir?",
    "options": [
      "Kutup Yıldızı (Polaris)",
      "Çoban Yıldızı (Venüs)",
      "Sirius",
      "Halley"
    ],
    "correct": "Kutup Yıldızı (Polaris)",
    "wisdom": "Kutup Yıldızı, Dünyanın dönme ekseniyle hemen hemen aynı doğrultuda olduğu için yeri değişmez."
  },
  {
    "id": "mz_q_318",
    "category": "Genel Kültür",
    "question": "Vücudumuzun birincil enerji kaynağı olan besin grubu hangisidir?",
    "options": [
      "Karbonhidratlar",
      "Proteinler",
      "Yağlar",
      "Vitaminler"
    ],
    "correct": "Karbonhidratlar",
    "wisdom": "Karbonhidratlar hızlıca glikoza dönüşerek hücrelerimize enerji sağlar."
  },
  {
    "id": "mz_q_319",
    "category": "Genel Kültür",
    "question": "Bitkilerin Güneş ışığı yardımıyla karbondioksit ve suyu glikoza ve oksijene dönüştürmesi olayına ne denir?",
    "options": [
      "Fotosentez",
      "Terleme",
      "Klorofil",
      "Mayalanma"
    ],
    "correct": "Fotosentez",
    "wisdom": "Fotosentez, Dünya üzerindeki oksijen dengesinin temel kaynağıdır."
  },
  {
    "id": "mz_q_320",
    "category": "Genel Kültür",
    "question": "Yerkabuğundaki kırılmalar sonucu oluşan sarsıntıların büyüklüğünü ölçen alete ne ad verilir?",
    "options": [
      "Sismograf",
      "Barometre",
      "Altimetre",
      "Rüzgar gülü"
    ],
    "correct": "Sismograf",
    "wisdom": "Sismograf, deprem dalgalarının şiddetini ve süresini kaydeder."
  },
  {
    "id": "mz_q_321",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 21)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 21)"
  },
  {
    "id": "mz_q_322",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 22)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 22)"
  },
  {
    "id": "mz_q_323",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 23)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 23)"
  },
  {
    "id": "mz_q_324",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 24)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 24)"
  },
  {
    "id": "mz_q_325",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 25)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 25)"
  },
  {
    "id": "mz_q_326",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 26)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 26)"
  },
  {
    "id": "mz_q_327",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 27)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 27)"
  },
  {
    "id": "mz_q_328",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 28)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 28)"
  },
  {
    "id": "mz_q_329",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 29)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 29)"
  },
  {
    "id": "mz_q_330",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 30)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 30)"
  },
  {
    "id": "mz_q_331",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 31)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 31)"
  },
  {
    "id": "mz_q_332",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 32)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 32)"
  },
  {
    "id": "mz_q_333",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 33)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 33)"
  },
  {
    "id": "mz_q_334",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 34)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 34)"
  },
  {
    "id": "mz_q_335",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 35)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 35)"
  },
  {
    "id": "mz_q_336",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 36)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 36)"
  },
  {
    "id": "mz_q_337",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 37)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 37)"
  },
  {
    "id": "mz_q_338",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 38)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 38)"
  },
  {
    "id": "mz_q_339",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 39)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 39)"
  },
  {
    "id": "mz_q_340",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 40)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 40)"
  },
  {
    "id": "mz_q_341",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 41)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 41)"
  },
  {
    "id": "mz_q_342",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 42)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 42)"
  },
  {
    "id": "mz_q_343",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 43)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 43)"
  },
  {
    "id": "mz_q_344",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 44)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 44)"
  },
  {
    "id": "mz_q_345",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 45)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 45)"
  },
  {
    "id": "mz_q_346",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 46)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 46)"
  },
  {
    "id": "mz_q_347",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 47)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 47)"
  },
  {
    "id": "mz_q_348",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 48)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 48)"
  },
  {
    "id": "mz_q_349",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 49)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 49)"
  },
  {
    "id": "mz_q_350",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 50)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 50)"
  },
  {
    "id": "mz_q_351",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 51)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 51)"
  },
  {
    "id": "mz_q_352",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 52)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 52)"
  },
  {
    "id": "mz_q_353",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 53)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 53)"
  },
  {
    "id": "mz_q_354",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 54)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 54)"
  },
  {
    "id": "mz_q_355",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 55)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 55)"
  },
  {
    "id": "mz_q_356",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 56)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 56)"
  },
  {
    "id": "mz_q_357",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 57)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 57)"
  },
  {
    "id": "mz_q_358",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 58)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 58)"
  },
  {
    "id": "mz_q_359",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 59)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 59)"
  },
  {
    "id": "mz_q_360",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 60)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 60)"
  },
  {
    "id": "mz_q_361",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 61)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 61)"
  },
  {
    "id": "mz_q_362",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 62)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 62)"
  },
  {
    "id": "mz_q_363",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 63)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 63)"
  },
  {
    "id": "mz_q_364",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 64)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 64)"
  },
  {
    "id": "mz_q_365",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 65)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 65)"
  },
  {
    "id": "mz_q_366",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 66)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 66)"
  },
  {
    "id": "mz_q_367",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 67)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 67)"
  },
  {
    "id": "mz_q_368",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 68)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 68)"
  },
  {
    "id": "mz_q_369",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 69)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 69)"
  },
  {
    "id": "mz_q_370",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 70)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 70)"
  },
  {
    "id": "mz_q_371",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 71)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 71)"
  },
  {
    "id": "mz_q_372",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 72)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 72)"
  },
  {
    "id": "mz_q_373",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 73)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 73)"
  },
  {
    "id": "mz_q_374",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 74)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 74)"
  },
  {
    "id": "mz_q_375",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 75)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 75)"
  },
  {
    "id": "mz_q_376",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 76)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 76)"
  },
  {
    "id": "mz_q_377",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 77)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 77)"
  },
  {
    "id": "mz_q_378",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 78)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 78)"
  },
  {
    "id": "mz_q_379",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 79)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 79)"
  },
  {
    "id": "mz_q_380",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 80)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 80)"
  },
  {
    "id": "mz_q_381",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 81)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 81)"
  },
  {
    "id": "mz_q_382",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 82)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 82)"
  },
  {
    "id": "mz_q_383",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 83)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 83)"
  },
  {
    "id": "mz_q_384",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 84)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 84)"
  },
  {
    "id": "mz_q_385",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 85)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 85)"
  },
  {
    "id": "mz_q_386",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 86)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 86)"
  },
  {
    "id": "mz_q_387",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 87)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 87)"
  },
  {
    "id": "mz_q_388",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 88)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 88)"
  },
  {
    "id": "mz_q_389",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 89)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 89)"
  },
  {
    "id": "mz_q_390",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 90)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 90)"
  },
  {
    "id": "mz_q_391",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 91)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 91)"
  },
  {
    "id": "mz_q_392",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 92)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 92)"
  },
  {
    "id": "mz_q_393",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 93)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 93)"
  },
  {
    "id": "mz_q_394",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 94)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 94)"
  },
  {
    "id": "mz_q_395",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 95)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 95)"
  },
  {
    "id": "mz_q_396",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 96)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 96)"
  },
  {
    "id": "mz_q_397",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 97)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 97)"
  },
  {
    "id": "mz_q_398",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 98)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 98)"
  },
  {
    "id": "mz_q_399",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 99)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 99)"
  },
  {
    "id": "mz_q_400",
    "category": "Genel Kültür",
    "question": "Aşağıdakilerden hangisi bilimin temel dallarından biridir? (Soru 100)",
    "options": [
      "Fizik",
      "Astroloji",
      "Simya",
      "Falcı"
    ],
    "correct": "Fizik",
    "wisdom": "Fizik, madde ve enerjinin doğasını inceleyen temel bir doğa bilimidir. (Genel Soru 100)"
  },
  {
    "id": "mz_q_401",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim'in en uzun suresi hangisidir?",
    "options": [
      "Bakara Suresi",
      "Al-i İmran Suresi",
      "Yasin Suresi",
      "Fatiha Suresi"
    ],
    "correct": "Bakara Suresi",
    "wisdom": "Bakara Suresi 286 ayettir ve Kur'an'ın en uzun suresidir."
  },
  {
    "id": "mz_q_402",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim toplam kaç cüzden oluşmaktadır?",
    "options": [
      "30",
      "20",
      "40",
      "114"
    ],
    "correct": "30",
    "wisdom": "Kur'an-ı Kerim, her biri 20 sayfadan oluşan 30 cüze ayrılmıştır."
  },
  {
    "id": "mz_q_403",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim'de toplam kaç sure bulunmaktadır?",
    "options": [
      "114",
      "110",
      "120",
      "6666"
    ],
    "correct": "114",
    "wisdom": "Kur'an-ı Kerim Fatiha suresiyle başlar, Nas suresiyle biter ve 114 sureden oluşur."
  },
  {
    "id": "mz_q_404",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim'in ilk inen ayetleri hangi surededir?",
    "options": [
      "Alak Suresi",
      "Fatiha Suresi",
      "Müddessir Suresi",
      "Kalem Suresi"
    ],
    "correct": "Alak Suresi",
    "wisdom": "İlk vahiy Nur Dağı'ndaki Hira Mağarası'nda Alak Suresi'nin ilk 5 ayeti ('Oku!' emri) olarak inmiştir."
  },
  {
    "id": "mz_q_405",
    "category": "İslam Genel Kültürü",
    "question": "Allah'ın en güzel isimlerine genel olarak ne ad verilir?",
    "options": [
      "Esma-i Hüsna",
      "Esma-i Nebi",
      "Sıfat-ı Subutiyye",
      "Kelime-i Tevhid"
    ],
    "correct": "Esma-i Hüsna",
    "wisdom": "Esma-i Hüsna, Allah'ın güzel ve yüce 99 ismini ifade eder."
  },
  {
    "id": "mz_q_406",
    "category": "İslam Genel Kültürü",
    "question": "Hadis ilminde en güvenilir altı hadis kitabına ne ad verilir?",
    "options": [
      "Kütüb-i Sitte",
      "Kütüb-i Erbaa",
      "Riyazü's-Salihin",
      "Sahih-i Buhari"
    ],
    "correct": "Kütüb-i Sitte",
    "wisdom": "Kütüb-i Sitte, Buhari ve Müslim başta olmak üzere en muteber 6 hadis derlemesidir."
  },
  {
    "id": "mz_q_407",
    "category": "İslam Genel Kültürü",
    "question": "Müslümanların ilk kıblesi olan ve Kudüs'te bulunan kutsal mescid hangisidir?",
    "options": [
      "Mescid-i Aksa",
      "Mescid-i Haram",
      "Mescid-i Nebevi",
      "Kuba Mescidi"
    ],
    "correct": "Mescid-i Aksa",
    "wisdom": "Mescid-i Aksa, Peygamberimizin İsra ve Mirac hadisesini yaşadığı mübarek mekandır."
  },
  {
    "id": "mz_q_408",
    "category": "İslam Genel Kültürü",
    "question": "İslam tarihinde inşa edilen ilk mescit aşağıdakilerden hangisidir?",
    "options": [
      "Kuba Mescidi",
      "Mescid-i Nebevi",
      "Mescid-i Haram",
      "Mescid-i Aksa"
    ],
    "correct": "Kuba Mescidi",
    "wisdom": "Kuba Mescidi, hicret esnasında Medine yakınlarındaki Kuba köyünde bizzat Peygamberimiz tarafından yapılmıştır."
  },
  {
    "id": "mz_q_409",
    "category": "İslam Genel Kültürü",
    "question": "Hicri takvimin başlangıcı olarak kabul edilen tarihi olay hangisidir?",
    "options": [
      "Hicret (622)",
      "Mekke'nin Fethi",
      "Peygamberimizin Doğumu",
      "İlk Vahiy"
    ],
    "correct": "Hicret (622)",
    "wisdom": "Hicri takvim, Müslümanların Mekke'den Medine'ye hicretini (622) başlangıç kabul eder."
  },
  {
    "id": "mz_q_410",
    "category": "İslam Genel Kültürü",
    "question": "Şaban ayının 15. gecesi olan, günahların bağışlanması ve temize çıkma anlamına gelen kandil gecesi hangisidir?",
    "options": [
      "Berat Kandili",
      "Kadir Gecesi",
      "Mevlid Kandili",
      "Regaip Kandili"
    ],
    "correct": "Berat Kandili",
    "wisdom": "Berat, kurtuluş ve af gecesidir."
  },
  {
    "id": "mz_q_411",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim'in indirilmeye başlandığı, bin aydan daha hayırlı olan mübarek gece hangisidir?",
    "options": [
      "Kadir Gecesi",
      "Miraç Gecesi",
      "Regaip Gecesi",
      "Mevlid Gecesi"
    ],
    "correct": "Kadir Gecesi",
    "wisdom": "Kadir Gecesi, Kur'an'da bin aydan daha hayırlı olduğu müjdelenen tek gecedir."
  },
  {
    "id": "mz_q_412",
    "category": "İslam Genel Kültürü",
    "question": "Peygamberlerin iddialarını doğrulamak için Allah'ın izniyle gösterdikleri olağanüstü olaylara ne ad verilir?",
    "options": [
      "Mucize",
      "Keramet",
      "İstidrac",
      "İrhas"
    ],
    "correct": "Mucize",
    "wisdom": "Mucize sadece peygamberlere has, akılları aciz bırakan olağanüstü olaylardır."
  },
  {
    "id": "mz_q_413",
    "category": "İslam Genel Kültürü",
    "question": "Peygamber olmayan salih veli kulların gösterdiği olağanüstü hallere ne ad verilir?",
    "options": [
      "Keramet",
      "Mucize",
      "Sihir",
      "İstidrac"
    ],
    "correct": "Keramet",
    "wisdom": "Keramet, Allah'ın salih kullarına bir ikramıdır."
  },
  {
    "id": "mz_q_414",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim ayetlerini açıklayan, yorumlayan ve derinlemesine inceleyen bilim dalına ne ad verilir?",
    "options": [
      "Tefsir",
      "Hadis",
      "Fıkıh",
      "Kelam"
    ],
    "correct": "Tefsir",
    "wisdom": "Tefsir ilmiyle uğraşan alimlere 'Müfessir' denir."
  },
  {
    "id": "mz_q_415",
    "category": "İslam Genel Kültürü",
    "question": "Peygamber Efendimiz'in söz, davranış ve onaylarına (takrirlerine) ne ad verilir?",
    "options": [
      "Hadis / Sünnet",
      "Fıkıh",
      "Ayet",
      "İcma"
    ],
    "correct": "Hadis / Sünnet",
    "wisdom": "Hadisler, Kur'an-ı Kerim'den sonra İslam dininin ikinci temel kaynağıdır."
  },
  {
    "id": "mz_q_416",
    "category": "İslam Genel Kültürü",
    "question": "İslam hukukunu, ibadetlerin yapılış şekillerini ve günlük yaşam kurallarını inceleyen bilim dalı hangisidir?",
    "options": [
      "Fıkıh",
      "Kelam",
      "Tasavvuf",
      "Tefsir"
    ],
    "correct": "Fıkıh",
    "wisdom": "Fıkıh alimlerine 'Fakih' denir ve pratik dini hükümleri incelerler."
  },
  {
    "id": "mz_q_417",
    "category": "İslam Genel Kültürü",
    "question": "İslam inanç esaslarını akli ve nakli delillerle savunup açıklayan ilim dalı hangisidir?",
    "options": [
      "Kelam",
      "Fıkıh",
      "Hadis",
      "Siyer"
    ],
    "correct": "Kelam",
    "wisdom": "Kelam ilmi, inanca yönelik şüpheleri gidermeyi amaçlar."
  },
  {
    "id": "mz_q_418",
    "category": "İslam Genel Kültürü",
    "question": "Peygamber Efendimiz Hz. Muhammed (s.a.v.)'in hayatını ve savaşlarını konu edinen bilim dalına ne denir?",
    "options": [
      "Siyer",
      "Tefsir",
      "Kelam",
      "Tasavvuf"
    ],
    "correct": "Siyer",
    "wisdom": "Siyer kitapları Peygamberimizin doğumu, çocukluğu, gençliği ve peygamberlik dönemini anlatır."
  },
  {
    "id": "mz_q_419",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim'de yaygın olarak kabul edilen toplam ayet sayısı kaçtır?",
    "options": [
      "6236 veya 6666",
      "6000",
      "7000",
      "5555"
    ],
    "correct": "6236 veya 6666",
    "wisdom": "Surelerdeki numaralandırılmış ayetlerin toplamı 6236'dır, besmelelerle ve bazı sayımlarla 6666 olarak da ifade edilir."
  },
  {
    "id": "mz_q_420",
    "category": "İslam Genel Kültürü",
    "question": "Kur'an-ı Kerim'in tamamını ezbere bilen kişiye ne ad verilir?",
    "options": [
      "Hafız",
      "Müezzin",
      "İmam",
      "Kari"
    ],
    "correct": "Hafız",
    "wisdom": "Hafızlık, Kur'an'ın lafzını zihinde koruyarak günümüze ulaştıran şerefli bir makamdır."
  },
  {
    "id": "mz_q_421",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 21)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 21)"
  },
  {
    "id": "mz_q_422",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 22)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 22)"
  },
  {
    "id": "mz_q_423",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 23)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 23)"
  },
  {
    "id": "mz_q_424",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 24)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 24)"
  },
  {
    "id": "mz_q_425",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 25)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 25)"
  },
  {
    "id": "mz_q_426",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 26)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 26)"
  },
  {
    "id": "mz_q_427",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 27)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 27)"
  },
  {
    "id": "mz_q_428",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 28)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 28)"
  },
  {
    "id": "mz_q_429",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 29)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 29)"
  },
  {
    "id": "mz_q_430",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 30)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 30)"
  },
  {
    "id": "mz_q_431",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 31)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 31)"
  },
  {
    "id": "mz_q_432",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 32)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 32)"
  },
  {
    "id": "mz_q_433",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 33)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 33)"
  },
  {
    "id": "mz_q_434",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 34)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 34)"
  },
  {
    "id": "mz_q_435",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 35)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 35)"
  },
  {
    "id": "mz_q_436",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 36)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 36)"
  },
  {
    "id": "mz_q_437",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 37)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 37)"
  },
  {
    "id": "mz_q_438",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 38)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 38)"
  },
  {
    "id": "mz_q_439",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 39)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 39)"
  },
  {
    "id": "mz_q_440",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 40)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 40)"
  },
  {
    "id": "mz_q_441",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 41)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 41)"
  },
  {
    "id": "mz_q_442",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 42)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 42)"
  },
  {
    "id": "mz_q_443",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 43)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 43)"
  },
  {
    "id": "mz_q_444",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 44)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 44)"
  },
  {
    "id": "mz_q_445",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 45)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 45)"
  },
  {
    "id": "mz_q_446",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 46)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 46)"
  },
  {
    "id": "mz_q_447",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 47)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 47)"
  },
  {
    "id": "mz_q_448",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 48)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 48)"
  },
  {
    "id": "mz_q_449",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 49)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 49)"
  },
  {
    "id": "mz_q_450",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 50)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 50)"
  },
  {
    "id": "mz_q_451",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 51)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 51)"
  },
  {
    "id": "mz_q_452",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 52)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 52)"
  },
  {
    "id": "mz_q_453",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 53)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 53)"
  },
  {
    "id": "mz_q_454",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 54)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 54)"
  },
  {
    "id": "mz_q_455",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 55)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 55)"
  },
  {
    "id": "mz_q_456",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 56)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 56)"
  },
  {
    "id": "mz_q_457",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 57)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 57)"
  },
  {
    "id": "mz_q_458",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 58)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 58)"
  },
  {
    "id": "mz_q_459",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 59)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 59)"
  },
  {
    "id": "mz_q_460",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 60)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 60)"
  },
  {
    "id": "mz_q_461",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 61)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 61)"
  },
  {
    "id": "mz_q_462",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 62)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 62)"
  },
  {
    "id": "mz_q_463",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 63)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 63)"
  },
  {
    "id": "mz_q_464",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 64)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 64)"
  },
  {
    "id": "mz_q_465",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 65)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 65)"
  },
  {
    "id": "mz_q_466",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 66)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 66)"
  },
  {
    "id": "mz_q_467",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 67)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 67)"
  },
  {
    "id": "mz_q_468",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 68)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 68)"
  },
  {
    "id": "mz_q_469",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 69)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 69)"
  },
  {
    "id": "mz_q_470",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 70)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 70)"
  },
  {
    "id": "mz_q_471",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 71)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 71)"
  },
  {
    "id": "mz_q_472",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 72)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 72)"
  },
  {
    "id": "mz_q_473",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 73)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 73)"
  },
  {
    "id": "mz_q_474",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 74)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 74)"
  },
  {
    "id": "mz_q_475",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 75)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 75)"
  },
  {
    "id": "mz_q_476",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 76)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 76)"
  },
  {
    "id": "mz_q_477",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 77)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 77)"
  },
  {
    "id": "mz_q_478",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 78)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 78)"
  },
  {
    "id": "mz_q_479",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 79)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 79)"
  },
  {
    "id": "mz_q_480",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 80)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 80)"
  },
  {
    "id": "mz_q_481",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 81)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 81)"
  },
  {
    "id": "mz_q_482",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 82)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 82)"
  },
  {
    "id": "mz_q_483",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 83)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 83)"
  },
  {
    "id": "mz_q_484",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 84)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 84)"
  },
  {
    "id": "mz_q_485",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 85)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 85)"
  },
  {
    "id": "mz_q_486",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 86)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 86)"
  },
  {
    "id": "mz_q_487",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 87)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 87)"
  },
  {
    "id": "mz_q_488",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 88)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 88)"
  },
  {
    "id": "mz_q_489",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 89)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 89)"
  },
  {
    "id": "mz_q_490",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 90)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 90)"
  },
  {
    "id": "mz_q_491",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 91)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 91)"
  },
  {
    "id": "mz_q_492",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 92)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 92)"
  },
  {
    "id": "mz_q_493",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 93)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 93)"
  },
  {
    "id": "mz_q_494",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 94)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 94)"
  },
  {
    "id": "mz_q_495",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 95)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 95)"
  },
  {
    "id": "mz_q_496",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 96)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 96)"
  },
  {
    "id": "mz_q_497",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 97)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 97)"
  },
  {
    "id": "mz_q_498",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 98)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 98)"
  },
  {
    "id": "mz_q_499",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 99)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 99)"
  },
  {
    "id": "mz_q_500",
    "category": "İslam Genel Kültürü",
    "question": "Aşağıdaki kavramlardan hangisi İslam dininin temel inanç esaslarından biridir? (Soru 100)",
    "options": [
      "Meleklere iman",
      "Hacca gitmek",
      "Zekat vermek",
      "Namaz kılmak"
    ],
    "correct": "Meleklere iman",
    "wisdom": "İnanç esasları (imanın şartları) kalbi tasdiki gerektirirken, ibadetler ameli uygulamalardır. (İslam GK Soru 100)"
  },
  {
    "id": "mz_q_501",
    "category": "İslami Bilim Adamları",
    "question": "Matematikte 'Sıfır' (0) rakamını ilk kez kullanan ve cebir biliminin kurucusu olan bilim insanı kimdir?",
    "options": [
      "El-Harezmi",
      "İbn-i Sina",
      "Biruni",
      "Farabi"
    ],
    "correct": "El-Harezmi",
    "wisdom": "El-Harezmi, cebir kelimesine adını veren 'El-Kitabü'l-Muhtasar fi Hisabi'l-Cebri ve'l-Mukabele' eserinin yazarıdır."
  },
  {
    "id": "mz_q_502",
    "category": "İslami Bilim Adamları",
    "question": "Batı dünyasında 'Avicenna' olarak tanınan ve tıp alanındaki 'El-Kanun fi't-Tıbb' eseri yüzyıllarca Avrupa'da okutulan hekim kimdir?",
    "options": [
      "İbn-i Sina",
      "Ebu Bekir er-Razi",
      "İbn-i Rüşd",
      "Farabi"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İbn-i Sina, tıp, felsefe, astronomi alanlarında eserler vermiş dahi bir hekimdir."
  },
  {
    "id": "mz_q_503",
    "category": "İslami Bilim Adamları",
    "question": "Sibernetik ve robotik biliminin kurucusu kabul edilen, Diyarbakır Artuklu Sarayı'nda otomatik saatler ve robotlar yapan dahi mühendis kimdir?",
    "options": [
      "El-Cezeri",
      "Beni Musa",
      "Hazini",
      "Uluğ Bey"
    ],
    "correct": "El-Cezeri",
    "wisdom": "El-Cezeri, dişli çarklar, pistonlar ve su gücüyle çalışan ilk robotik makineleri icat etmiştir."
  },
  {
    "id": "mz_q_504",
    "category": "İslami Bilim Adamları",
    "question": "Gazneli Mahmud'un 'Sarayımın en değerli hazinesi' dediği, Dünya'nın çapını çok hassas hesaplayan coğrafya ve astronomi bilgini kimdir?",
    "options": [
      "El-Biruni",
      "Uluğ Bey",
      "Ali Kuşçu",
      "İbn-i Battuta"
    ],
    "correct": "El-Biruni",
    "wisdom": "Biruni, astronomi, coğrafya, matematik ve eczacılık alanında 100'den fazla eser yazmıştır."
  },
  {
    "id": "mz_q_505",
    "category": "İslami Bilim Adamları",
    "question": "Fatih Sultan Mehmet'in davetiyle İstanbul'a gelen, Ay'ın haritasını çıkaran ve Sahn-ı Seman Medresesi'nde dersler veren astronom kimdir?",
    "options": [
      "Ali Kuşçu",
      "Uluğ Bey",
      "Kadızade-i Rumi",
      "Piri Reis"
    ],
    "correct": "Ali Kuşçu",
    "wisdom": "Ali Kuşçu, Semerkant Rasathanesi'nde yetişmiş ve Osmanlı'da astronomiyi zirveye taşımıştır."
  },
  {
    "id": "mz_q_506",
    "category": "İslami Bilim Adamları",
    "question": "Semerkant'ta büyük bir rasathane kurup gökyüzü haritası (Zîc) hazırlayan padişah astronom kimdir?",
    "options": [
      "Uluğ Bey",
      "Ali Kuşçu",
      "Fatih Sultan Mehmet",
      "Melikşah"
    ],
    "correct": "Uluğ Bey",
    "wisdom": "Uluğ Bey, Timur'un torunudur ve devlet adamlığının yanında büyük bir gökbilimcidir."
  },
  {
    "id": "mz_q_507",
    "category": "İslami Bilim Adamları",
    "question": "Sosyoloji (toplum bilimi) ve tarih felsefesinin kurucusu kabul edilen, ünlü 'Mukaddime' eserinin yazarı kimdir?",
    "options": [
      "İbn-i Haldun",
      "İbn-i Rüşd",
      "Gazali",
      "İbn-i Tufeyl"
    ],
    "correct": "İbn-i Haldun",
    "wisdom": "İbn-i Haldun, devletlerin doğuşu, yükselişi ve çöküşünü bilimsel kurallara bağlamıştır."
  },
  {
    "id": "mz_q_508",
    "category": "İslami Bilim Adamları",
    "question": "1513 yılında çizdiği harika Dünya Haritası ve 'Kitab-ı Bahriye' adlı denizcilik eseriyle ünlü Osmanlı denizcisi kimdir?",
    "options": [
      "Piri Reis",
      "Seydi Ali Reis",
      "Barbaros Hayreddin",
      "Oruç Reis"
    ],
    "correct": "Piri Reis",
    "wisdom": "Piri Reis'in ceylan derisi üzerine çizdiği harita, Amerika kıtasını çok erken dönemde detaylıca göstermektedir."
  },
  {
    "id": "mz_q_509",
    "category": "İslami Bilim Adamları",
    "question": "Osmanlı İmparatorluğu'nda başmimarlık yapan, Selimiye ve Süleymaniye gibi şaheserleri inşa eden dahi mimar kimdir?",
    "options": [
      "Mimar Sinan",
      "Sedefkar Mehmet Ağa",
      "Mimar Kemalettin",
      "Mimar Davut Ağa"
    ],
    "correct": "Mimar Sinan",
    "wisdom": "Mimar Sinan, çıraklık eseri Şehzadebaşı, kalfalık eseri Süleymaniye, ustalık eseri Selimiye camileridir."
  },
  {
    "id": "mz_q_510",
    "category": "İslami Bilim Adamları",
    "question": "Kimya biliminin babası kabul edilen, maddeleri damıtma (imbik) yöntemini geliştiren ve atomun parçalanabileceğini ilk söyleyen alim kimdir?",
    "options": [
      "Cabir bin Hayyan",
      "Ebu Bekir er-Razi",
      "İbn-i Rüşd",
      "Kindi"
    ],
    "correct": "Cabir bin Hayyan",
    "wisdom": "Cabir bin Hayyan, laboratuvar ortamında kimyasal deneyler yapan ilk bilim insanlarından biridir."
  },
  {
    "id": "mz_q_511",
    "category": "İslami Bilim Adamları",
    "question": "Batı dünyasında 'Averroes' olarak bilinen, Aristoteles felsefesini yorumlayan ve Endülüs'te yaşayan büyük filozof kimdir?",
    "options": [
      "İbn-i Rüşd",
      "İbn-i Tufeyl",
      "İbn-i Arabi",
      "Farabi"
    ],
    "correct": "İbn-i Rüşd",
    "wisdom": "İbn-i Rüşd, akıl ile nakli (din) uzlaştırmaya çalışan büyük bir kelamcı ve felsefecidir."
  },
  {
    "id": "mz_q_512",
    "category": "İslami Bilim Adamları",
    "question": "Felsefe dünyasında Aristo'dan (Birinci Muallim) sonra 'Muallim-i Sani' (İkinci Öğretmen) unvanını alan filozof kimdir?",
    "options": [
      "Farabi",
      "İbn-i Sina",
      "Kindi",
      "Gazali"
    ],
    "correct": "Farabi",
    "wisdom": "Farabi, mantık, müzik ve siyaset felsefesinde devrimsel çalışmalar yapmıştır."
  },
  {
    "id": "mz_q_513",
    "category": "İslami Bilim Adamları",
    "question": "Orta Çağ'ın en büyük seyyahı kabul edilen, Fas'tan çıkıp 30 yıl boyunca tüm İslam coğrafyasını ve Çin'i gezen seyyah kimdir?",
    "options": [
      "İbn-i Battuta",
      "Evliya Çelebi",
      "Marco Polo",
      "İbn-i Cübeyr"
    ],
    "correct": "İbn-i Battuta",
    "wisdom": "İbn-i Battuta, gezdiği yerlerin sosyo-kültürel yapısını 'Rıhle' (Seyahatname) eserinde toplamıştır."
  },
  {
    "id": "mz_q_514",
    "category": "İslami Bilim Adamları",
    "question": "17. yüzyılda Osmanlı topraklarını ve çevresini gezerek 10 ciltlik muazzam bir 'Seyahatnâme' yazan seyyah kimdir?",
    "options": [
      "Evliya Çelebi",
      "Katip Çelebi",
      "Piri Reis",
      "Seydi Ali Reis"
    ],
    "correct": "Evliya Çelebi",
    "wisdom": "Evliya Çelebi, gezilerine rüyasında Peygamberimizden 'Şefaat ya Resulallah' diyecekken heyecanla 'Seyahat ya Resulallah' demesi üzerine başladığını anlatır."
  },
  {
    "id": "mz_q_515",
    "category": "İslami Bilim Adamları",
    "question": "Osmanlı'nın ünlü coğrafyacısı, bibliyografya uzmanı ve 'Cihannüma' ile 'Keşfü'z-Zunûn' eserlerinin yazarı kimdir?",
    "options": [
      "Katip Çelebi",
      "Hezarfen Ahmed Çelebi",
      "Lagari Hasan Çelebi",
      "Naima"
    ],
    "correct": "Katip Çelebi",
    "wisdom": "Katip Çelebi, binlerce kitabı tasnif ederek büyük bir bilgi hazinesi oluşturmuştur."
  },
  {
    "id": "mz_q_516",
    "category": "İslami Bilim Adamları",
    "question": "Galata Kulesi'nden kendi yaptığı kanatlarla uçarak Üsküdar'a iniş yapan Osmanlı bilgini kimdir?",
    "options": [
      "Hezarfen Ahmed Çelebi",
      "Lagari Hasan Çelebi",
      "Takiyüddin",
      "Mimar Sinan"
    ],
    "correct": "Hezarfen Ahmed Çelebi",
    "wisdom": "Hezarfen, 17. yüzyılda uçuş denemesi yapan öncü bir havacıdır."
  },
  {
    "id": "mz_q_517",
    "category": "İslami Bilim Adamları",
    "question": "Dünya tarihinde ilk insanlı roket uçuşunu barut macunu dolu bir fişekle gerçekleştiren Osmanlı mucidi kimdir?",
    "options": [
      "Lagari Hasan Çelebi",
      "Hezarfen Ahmed Çelebi",
      "Takiyüddin",
      "Evliya Çelebi"
    ],
    "correct": "Lagari Hasan Çelebi",
    "wisdom": "Lagari, IV. Murad'ın kızının doğum şenliklerinde havaya dikey uçuş yapıp denize sağ salim inmiştir."
  },
  {
    "id": "mz_q_518",
    "category": "İslami Bilim Adamları",
    "question": "İstanbul'da 1577 yılında ilk büyük Osmanlı rasathanesini kuran gökbilimci kimdir?",
    "options": [
      "Takiyüddin",
      "Ali Kuşçu",
      "Uluğ Bey",
      "Kadızade-i Rumi"
    ],
    "correct": "Takiyüddin",
    "wisdom": "Takiyüddin, geliştirdiği hassas saatler ve gözlem aletleriyle yıldızların hareketlerini izlemiştir."
  },
  {
    "id": "mz_q_519",
    "category": "İslami Bilim Adamları",
    "question": "Mısır'da sarkaç mekanizmasını saatlerde ilk kullanan ve büyük astronomi tabloları (Zîc-i Hâkimî) hazırlayan astronom kimdir?",
    "options": [
      "İbn-i Yunus",
      "El-Battani",
      "Sufi",
      "Hazini"
    ],
    "correct": "İbn-i Yunus",
    "wisdom": "İbn-i Yunus, trigonometriyi astronomiye başarıyla uygulamıştır."
  },
  {
    "id": "mz_q_520",
    "category": "İslami Bilim Adamları",
    "question": "Trigonometride sinüs, kosinüs, tanjant kavramlarını ilk kez sistemleştiren ve Güneş yılını 365 gün 5 saat olarak çok yakın hesaplayan astronom kimdir?",
    "options": [
      "El-Battani",
      "El-Harezmi",
      "Ömer Hayyam",
      "Biruni"
    ],
    "correct": "El-Battani",
    "wisdom": "El-Battani, Batı dünyasında 'Albategnius' olarak bilinir ve Kopernik'e ilham kaynağı olmuştur."
  },
  {
    "id": "mz_q_521",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 21)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 21)"
  },
  {
    "id": "mz_q_522",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 22)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 22)"
  },
  {
    "id": "mz_q_523",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 23)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 23)"
  },
  {
    "id": "mz_q_524",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 24)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 24)"
  },
  {
    "id": "mz_q_525",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 25)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 25)"
  },
  {
    "id": "mz_q_526",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 26)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 26)"
  },
  {
    "id": "mz_q_527",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 27)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 27)"
  },
  {
    "id": "mz_q_528",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 28)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 28)"
  },
  {
    "id": "mz_q_529",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 29)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 29)"
  },
  {
    "id": "mz_q_530",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 30)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 30)"
  },
  {
    "id": "mz_q_531",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 31)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 31)"
  },
  {
    "id": "mz_q_532",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 32)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 32)"
  },
  {
    "id": "mz_q_533",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 33)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 33)"
  },
  {
    "id": "mz_q_534",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 34)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 34)"
  },
  {
    "id": "mz_q_535",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 35)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 35)"
  },
  {
    "id": "mz_q_536",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 36)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 36)"
  },
  {
    "id": "mz_q_537",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 37)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 37)"
  },
  {
    "id": "mz_q_538",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 38)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 38)"
  },
  {
    "id": "mz_q_539",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 39)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 39)"
  },
  {
    "id": "mz_q_540",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 40)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 40)"
  },
  {
    "id": "mz_q_541",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 41)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 41)"
  },
  {
    "id": "mz_q_542",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 42)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 42)"
  },
  {
    "id": "mz_q_543",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 43)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 43)"
  },
  {
    "id": "mz_q_544",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 44)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 44)"
  },
  {
    "id": "mz_q_545",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 45)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 45)"
  },
  {
    "id": "mz_q_546",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 46)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 46)"
  },
  {
    "id": "mz_q_547",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 47)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 47)"
  },
  {
    "id": "mz_q_548",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 48)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 48)"
  },
  {
    "id": "mz_q_549",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 49)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 49)"
  },
  {
    "id": "mz_q_550",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 50)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 50)"
  },
  {
    "id": "mz_q_551",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 51)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 51)"
  },
  {
    "id": "mz_q_552",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 52)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 52)"
  },
  {
    "id": "mz_q_553",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 53)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 53)"
  },
  {
    "id": "mz_q_554",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 54)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 54)"
  },
  {
    "id": "mz_q_555",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 55)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 55)"
  },
  {
    "id": "mz_q_556",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 56)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 56)"
  },
  {
    "id": "mz_q_557",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 57)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 57)"
  },
  {
    "id": "mz_q_558",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 58)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 58)"
  },
  {
    "id": "mz_q_559",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 59)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 59)"
  },
  {
    "id": "mz_q_560",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 60)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 60)"
  },
  {
    "id": "mz_q_561",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 61)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 61)"
  },
  {
    "id": "mz_q_562",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 62)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 62)"
  },
  {
    "id": "mz_q_563",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 63)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 63)"
  },
  {
    "id": "mz_q_564",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 64)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 64)"
  },
  {
    "id": "mz_q_565",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 65)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 65)"
  },
  {
    "id": "mz_q_566",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 66)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 66)"
  },
  {
    "id": "mz_q_567",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 67)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 67)"
  },
  {
    "id": "mz_q_568",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 68)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 68)"
  },
  {
    "id": "mz_q_569",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 69)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 69)"
  },
  {
    "id": "mz_q_570",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 70)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 70)"
  },
  {
    "id": "mz_q_571",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 71)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 71)"
  },
  {
    "id": "mz_q_572",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 72)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 72)"
  },
  {
    "id": "mz_q_573",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 73)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 73)"
  },
  {
    "id": "mz_q_574",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 74)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 74)"
  },
  {
    "id": "mz_q_575",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 75)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 75)"
  },
  {
    "id": "mz_q_576",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 76)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 76)"
  },
  {
    "id": "mz_q_577",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 77)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 77)"
  },
  {
    "id": "mz_q_578",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 78)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 78)"
  },
  {
    "id": "mz_q_579",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 79)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 79)"
  },
  {
    "id": "mz_q_580",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 80)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 80)"
  },
  {
    "id": "mz_q_581",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 81)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 81)"
  },
  {
    "id": "mz_q_582",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 82)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 82)"
  },
  {
    "id": "mz_q_583",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 83)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 83)"
  },
  {
    "id": "mz_q_584",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 84)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 84)"
  },
  {
    "id": "mz_q_585",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 85)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 85)"
  },
  {
    "id": "mz_q_586",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 86)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 86)"
  },
  {
    "id": "mz_q_587",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 87)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 87)"
  },
  {
    "id": "mz_q_588",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 88)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 88)"
  },
  {
    "id": "mz_q_589",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 89)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 89)"
  },
  {
    "id": "mz_q_590",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 90)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 90)"
  },
  {
    "id": "mz_q_591",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 91)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 91)"
  },
  {
    "id": "mz_q_592",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 92)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 92)"
  },
  {
    "id": "mz_q_593",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 93)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 93)"
  },
  {
    "id": "mz_q_594",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 94)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 94)"
  },
  {
    "id": "mz_q_595",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 95)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 95)"
  },
  {
    "id": "mz_q_596",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 96)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 96)"
  },
  {
    "id": "mz_q_597",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 97)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 97)"
  },
  {
    "id": "mz_q_598",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 98)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 98)"
  },
  {
    "id": "mz_q_599",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 99)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 99)"
  },
  {
    "id": "mz_q_600",
    "category": "İslami Bilim Adamları",
    "question": "Aşağıdakilerden hangisi İslam medeniyetinde yetişmiş ünlü bilim insanlarından biridir? (Soru 100)",
    "options": [
      "İbn-i Sina",
      "Galileo",
      "Copernicus",
      "Einstein"
    ],
    "correct": "İbn-i Sina",
    "wisdom": "İslam bilim insanları matematik, tıp, fizik ve astronomi gibi birçok alanda modern bilimin temellerini atmışlardır. (Bilim Soru 100)"
  },
  {
    "id": "mz_q_601",
    "category": "Coğrafya",
    "question": "Türkiye Cumhuriyeti'nin başkenti aşağıdakilerden hangisidir?",
    "options": [
      "Ankara",
      "İstanbul",
      "İzmir",
      "Bursa"
    ],
    "correct": "Ankara",
    "wisdom": "Ankara, 13 Ekim 1923'te Türkiye'nin başkenti ilan edilmiştir."
  },
  {
    "id": "mz_q_602",
    "category": "Coğrafya",
    "question": "Dünyanın en uzun nehri aşağıdakilerden hangisidir?",
    "options": [
      "Nil Nehri",
      "Amazon Nehri",
      "Yangtze Nehri",
      "Fırat Nehri"
    ],
    "correct": "Nil Nehri",
    "wisdom": "Nil Nehri, Afrika kıtasında yer alır ve Akdeniz'e dökülür."
  },
  {
    "id": "mz_q_603",
    "category": "Coğrafya",
    "question": "Dünyanın en yüksek zirvesi olan dağ hangisidir?",
    "options": [
      "Everest Dağı",
      "K2 Dağı",
      "Kilimanjaro Dağı",
      "Ağrı Dağı"
    ],
    "correct": "Everest Dağı",
    "wisdom": "Everest Dağı, Nepal sınırlarında, Himalayalar'da yer alır ve yüksekliği 8.848 metredir."
  },
  {
    "id": "mz_q_604",
    "category": "Coğrafya",
    "question": "Dünyanın en büyük sıcak çölü aşağıdakilerden hangisidir?",
    "options": [
      "Büyük Sahra Çölü",
      "Gobi Çölü",
      "Kalahari Çölü",
      "Kızılkum Çölü"
    ],
    "correct": "Büyük Sahra Çölü",
    "wisdom": "Büyük Sahra Çölü, Afrika kıtasının kuzeyinde devasa bir alanı kaplar."
  },
  {
    "id": "mz_q_605",
    "category": "Coğrafya",
    "question": "Asya ve Avrupa kıtalarını birbirine bağlayan Türkiye'deki ünlü boğazlar hangileridir?",
    "options": [
      "İstanbul ve Çanakkale Boğazları",
      "Cebelitarık Boğazı",
      "Süveyş Kanalı",
      "Bering Boğazı"
    ],
    "correct": "İstanbul ve Çanakkale Boğazları",
    "wisdom": "İstanbul ve Çanakkale boğazları jeopolitik açıdan dünyanın en önemli geçiş yollarındandır."
  },
  {
    "id": "mz_q_606",
    "category": "Coğrafya",
    "question": "Dünyanın en büyük gölü (yüzölçümü bakımından) hangisidir?",
    "options": [
      "Hazar Denizi",
      "Superior Gölü",
      "Victoria Gölü",
      "Van Gölü"
    ],
    "correct": "Hazar Denizi",
    "wisdom": "Hazar Denizi, büyüklüğü ve tuzlu suyu nedeniyle deniz olarak anılsa da coğrafi olarak kapalı bir göldür."
  },
  {
    "id": "mz_q_607",
    "category": "Coğrafya",
    "question": "Dünyayı kuzey ve güney yarım küre olarak iki eşit parçaya böldüğü varsayılan hayali çizgiye ne denir?",
    "options": [
      "Ekvator",
      "Meridyen",
      "Paralel",
      "Başlangıç Meridyeni"
    ],
    "correct": "Ekvator",
    "wisdom": "Ekvator çizgisi, Güneş ışınlarını yıl boyunca dik ve dike yakın açılarla alır."
  },
  {
    "id": "mz_q_608",
    "category": "Coğrafya",
    "question": "Dünyanın nüfusu en kalabalık olan ülkesi hangisidir?",
    "options": [
      "Hindistan",
      "Çin",
      "ABD",
      "Endonezya"
    ],
    "correct": "Hindistan",
    "wisdom": "Hindistan, yakın dönemde Çin'i geçerek dünyanın en kalabalık nüfusuna sahip ülkesi olmuştur."
  },
  {
    "id": "mz_q_609",
    "category": "Coğrafya",
    "question": "Yüzölçümü bakımından dünyanın en büyük ülkesi hangisidir?",
    "options": [
      "Rusya",
      "Kanada",
      "Çin",
      "ABD"
    ],
    "correct": "Rusya",
    "wisdom": "Rusya, 17 milyon kilometrekareyi aşan topraklarıyla dünyanın en geniş ülkesidir."
  },
  {
    "id": "mz_q_610",
    "category": "Coğrafya",
    "question": "Akdeniz'i Kızıldeniz'e bağlayan yapay kanal hangisidir?",
    "options": [
      "Süveyş Kanalı",
      "Panama Kanalı",
      "Kiel Kanalı",
      "Korint Kanalı"
    ],
    "correct": "Süveyş Kanalı",
    "wisdom": "Süveyş Kanalı, Mısır'da yer alır ve deniz ticaret yollarını binlerce kilometre kısaltmıştır."
  },
  {
    "id": "mz_q_611",
    "category": "Coğrafya",
    "question": "Akdeniz'i Atlas Okyanusu'na bağlayan boğaz hangisidir?",
    "options": [
      "Cebelitarık Boğazı",
      "Babülmendep Boğazı",
      "Hürmüz Boğazı",
      "Malakka Boğazı"
    ],
    "correct": "Cebelitarık Boğazı",
    "wisdom": "Cebelitarık Boğazı adını, Tarık bin Ziyad'ın İspanya fethine çıkarken buraya ayak basmasından alır (Cebel-i Tarık: Tarık'ın Dağı)."
  },
  {
    "id": "mz_q_612",
    "category": "Coğrafya",
    "question": "Yüzölçümü bakımından dünyanın en küçük kıtası hangisidir?",
    "options": [
      "Okyanusya (Avustralya)",
      "Avrupa",
      "Antarktika",
      "Güney Amerika"
    ],
    "correct": "Okyanusya (Avustralya)",
    "wisdom": "Okyanusya, diğer kıtalara göre kara alanı en küçük olan kıtadır."
  },
  {
    "id": "mz_q_613",
    "category": "Coğrafya",
    "question": "Türkiye'den doğup Suriye ve Irak'tan geçerek Basra Körfezi'ne dökülen nehirler hangileridir?",
    "options": [
      "Fırat ve Dicle",
      "Kızılırmak ve Yeşilırmak",
      "Nil ve Kongo",
      "Seyhan ve Ceyhan"
    ],
    "correct": "Fırat ve Dicle",
    "wisdom": "Fırat ve Dicle nehirlerinin arasındaki bölgeye Mezopotamya adı verilir."
  },
  {
    "id": "mz_q_614",
    "category": "Coğrafya",
    "question": "Dünya üzerindeki en derin nokta olan çukurluk hangisidir?",
    "options": [
      "Mariana Çukuru",
      "Porto Riko Çukuru",
      "Java Çukuru",
      "Gökova Çukuru"
    ],
    "correct": "Mariana Çukuru",
    "wisdom": "Mariana Çukuru, Büyük Okyanus'ta yer alır ve derinliği yaklaşık 11 kilometredir."
  },
  {
    "id": "mz_q_615",
    "category": "Coğrafya",
    "question": "Basınç farkı nedeniyle havanın yatay yönde hareket etmesiyle oluşan doğa olayına ne ad verilir?",
    "options": [
      "Rüzgar",
      "Yağmur",
      "Nem",
      "Kasırga"
    ],
    "correct": "Rüzgar",
    "wisdom": "Rüzgarlar, yüksek basınç alanlarından alçak basınç alanlarına doğru eserler."
  },
  {
    "id": "mz_q_616",
    "category": "Coğrafya",
    "question": "Sınırları tamamen Türkiye içerisinde kalan en uzun nehir hangisidir?",
    "options": [
      "Kızılırmak",
      "Fırat",
      "Sakarya",
      "Yeşilırmak"
    ],
    "correct": "Kızılırmak",
    "wisdom": "Kızılırmak, Sivas'tan doğup Karadeniz'e dökülen en uzun nehrimizdir."
  },
  {
    "id": "mz_q_617",
    "category": "Coğrafya",
    "question": "Türkiye'nin en büyük gölü hangisidir?",
    "options": [
      "Van Gölü",
      "Tuz Gölü",
      "Beyşehir Gölü",
      "Eğirdir Gölü"
    ],
    "correct": "Van Gölü",
    "wisdom": "Van Gölü, sodalı suyuyla bilinen volkanik set gölüdür ve dünyanın en büyük sodalı gölüdür."
  },
  {
    "id": "mz_q_618",
    "category": "Coğrafya",
    "question": "Sınırları tamamen tek bir ülkeye (Türkiye'ye) ait olan iç deniz hangisidir?",
    "options": [
      "Marmara Denizi",
      "Karadeniz",
      "Ege Denizi",
      "Kızıldeniz"
    ],
    "correct": "Marmara Denizi",
    "wisdom": "Marmara Denizi, İstanbul ve Çanakkale boğazlarıyla Karadeniz ve Ege'yi bağlayan bir iç denizdir."
  },
  {
    "id": "mz_q_619",
    "category": "Coğrafya",
    "question": "Dünyanın en güneyinde yer alan, üzeri tamamen buzullarla kaplı olan ve üzerinde kalıcı yerleşim bulunmayan kıta hangisidir?",
    "options": [
      "Antarktika",
      "Grönland",
      "Avustralya",
      "Kuzey Kutbu"
    ],
    "correct": "Antarktika",
    "wisdom": "Antarktika, yeryüzünün en soğuk, en kuru ve en rüzgarlı kıtasıdır."
  },
  {
    "id": "mz_q_620",
    "category": "Coğrafya",
    "question": "Dünyadaki aktif deprem ve volkan faaliyetlerinin en yoğun olduğu, 'Pasifik Ateş Çemberi' olarak anılan bölge hangi okyanus çevresindedir?",
    "options": [
      "Büyük Okyanus",
      "Atlas Okyanusu",
      "Hint Okyanusu",
      "Arktik Okyanusu"
    ],
    "correct": "Büyük Okyanus",
    "wisdom": "Ateş Çemberi, dünyadaki depremlerin yaklaşık %90'ının gerçekleştiği kuşaktır."
  },
  {
    "id": "mz_q_621",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 21)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 21)"
  },
  {
    "id": "mz_q_622",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 22)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 22)"
  },
  {
    "id": "mz_q_623",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 23)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 23)"
  },
  {
    "id": "mz_q_624",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 24)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 24)"
  },
  {
    "id": "mz_q_625",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 25)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 25)"
  },
  {
    "id": "mz_q_626",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 26)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 26)"
  },
  {
    "id": "mz_q_627",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 27)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 27)"
  },
  {
    "id": "mz_q_628",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 28)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 28)"
  },
  {
    "id": "mz_q_629",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 29)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 29)"
  },
  {
    "id": "mz_q_630",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 30)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 30)"
  },
  {
    "id": "mz_q_631",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 31)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 31)"
  },
  {
    "id": "mz_q_632",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 32)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 32)"
  },
  {
    "id": "mz_q_633",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 33)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 33)"
  },
  {
    "id": "mz_q_634",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 34)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 34)"
  },
  {
    "id": "mz_q_635",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 35)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 35)"
  },
  {
    "id": "mz_q_636",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 36)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 36)"
  },
  {
    "id": "mz_q_637",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 37)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 37)"
  },
  {
    "id": "mz_q_638",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 38)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 38)"
  },
  {
    "id": "mz_q_639",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 39)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 39)"
  },
  {
    "id": "mz_q_640",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 40)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 40)"
  },
  {
    "id": "mz_q_641",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 41)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 41)"
  },
  {
    "id": "mz_q_642",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 42)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 42)"
  },
  {
    "id": "mz_q_643",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 43)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 43)"
  },
  {
    "id": "mz_q_644",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 44)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 44)"
  },
  {
    "id": "mz_q_645",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 45)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 45)"
  },
  {
    "id": "mz_q_646",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 46)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 46)"
  },
  {
    "id": "mz_q_647",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 47)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 47)"
  },
  {
    "id": "mz_q_648",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 48)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 48)"
  },
  {
    "id": "mz_q_649",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 49)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 49)"
  },
  {
    "id": "mz_q_650",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 50)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 50)"
  },
  {
    "id": "mz_q_651",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 51)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 51)"
  },
  {
    "id": "mz_q_652",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 52)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 52)"
  },
  {
    "id": "mz_q_653",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 53)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 53)"
  },
  {
    "id": "mz_q_654",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 54)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 54)"
  },
  {
    "id": "mz_q_655",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 55)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 55)"
  },
  {
    "id": "mz_q_656",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 56)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 56)"
  },
  {
    "id": "mz_q_657",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 57)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 57)"
  },
  {
    "id": "mz_q_658",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 58)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 58)"
  },
  {
    "id": "mz_q_659",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 59)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 59)"
  },
  {
    "id": "mz_q_660",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 60)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 60)"
  },
  {
    "id": "mz_q_661",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 61)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 61)"
  },
  {
    "id": "mz_q_662",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 62)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 62)"
  },
  {
    "id": "mz_q_663",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 63)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 63)"
  },
  {
    "id": "mz_q_664",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 64)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 64)"
  },
  {
    "id": "mz_q_665",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 65)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 65)"
  },
  {
    "id": "mz_q_666",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 66)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 66)"
  },
  {
    "id": "mz_q_667",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 67)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 67)"
  },
  {
    "id": "mz_q_668",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 68)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 68)"
  },
  {
    "id": "mz_q_669",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 69)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 69)"
  },
  {
    "id": "mz_q_670",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 70)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 70)"
  },
  {
    "id": "mz_q_671",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 71)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 71)"
  },
  {
    "id": "mz_q_672",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 72)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 72)"
  },
  {
    "id": "mz_q_673",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 73)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 73)"
  },
  {
    "id": "mz_q_674",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 74)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 74)"
  },
  {
    "id": "mz_q_675",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 75)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 75)"
  },
  {
    "id": "mz_q_676",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 76)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 76)"
  },
  {
    "id": "mz_q_677",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 77)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 77)"
  },
  {
    "id": "mz_q_678",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 78)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 78)"
  },
  {
    "id": "mz_q_679",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 79)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 79)"
  },
  {
    "id": "mz_q_680",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 80)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 80)"
  },
  {
    "id": "mz_q_681",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 81)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 81)"
  },
  {
    "id": "mz_q_682",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 82)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 82)"
  },
  {
    "id": "mz_q_683",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 83)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 83)"
  },
  {
    "id": "mz_q_684",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 84)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 84)"
  },
  {
    "id": "mz_q_685",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 85)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 85)"
  },
  {
    "id": "mz_q_686",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 86)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 86)"
  },
  {
    "id": "mz_q_687",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 87)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 87)"
  },
  {
    "id": "mz_q_688",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 88)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 88)"
  },
  {
    "id": "mz_q_689",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 89)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 89)"
  },
  {
    "id": "mz_q_690",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 90)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 90)"
  },
  {
    "id": "mz_q_691",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 91)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 91)"
  },
  {
    "id": "mz_q_692",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 92)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 92)"
  },
  {
    "id": "mz_q_693",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 93)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 93)"
  },
  {
    "id": "mz_q_694",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 94)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 94)"
  },
  {
    "id": "mz_q_695",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 95)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 95)"
  },
  {
    "id": "mz_q_696",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 96)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 96)"
  },
  {
    "id": "mz_q_697",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 97)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 97)"
  },
  {
    "id": "mz_q_698",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 98)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 98)"
  },
  {
    "id": "mz_q_699",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 99)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 99)"
  },
  {
    "id": "mz_q_700",
    "category": "Coğrafya",
    "question": "Aşağıdakilerden hangisi bir coğrafi terimdir ve yeryüzü şekillerini inceler? (Soru 100)",
    "options": [
      "Jeomorfoloji",
      "Astronomi",
      "Biyoloji",
      "Sosyoloji"
    ],
    "correct": "Jeomorfoloji",
    "wisdom": "Jeomorfoloji, yeryüzü şekillerinin oluşumunu ve gelişimini inceleyen fiziki coğrafya dalıdır. (Coğrafya Soru 100)"
  },
  {
    "id": "mz_q_701",
    "category": "Tarih",
    "question": "Tarih çağlarını başlatan en önemli gelişme olan yazıyı icat eden ilk uygarlık hangisidir?",
    "options": [
      "Sümerler",
      "Mısırlılar",
      "Babiller",
      "Asurlar"
    ],
    "correct": "Sümerler",
    "wisdom": "Sümerler, M.Ö. 3500'lerde çivi yazısını icat ederek tarihi çağları başlatmışlardır."
  },
  {
    "id": "mz_q_702",
    "category": "Tarih",
    "question": "Malazgirt Savaşı hangi yılda gerçekleşmiştir?",
    "options": [
      "1071",
      "1040",
      "1299",
      "1453"
    ],
    "correct": "1071",
    "wisdom": "1071 yılında Selçuklular Bizans'ı yenerek Anadolu'yu yurt edinmeye başlamıştır."
  },
  {
    "id": "mz_q_703",
    "category": "Tarih",
    "question": "Fatih Sultan Mehmet'in İstanbul'u fethettiği tarihi yıl hangisidir?",
    "options": [
      "1453",
      "1299",
      "1517",
      "1071"
    ],
    "correct": "1453",
    "wisdom": "İstanbul 29 Mayıs 1453'te fethedilmiştir."
  },
  {
    "id": "mz_q_704",
    "category": "Tarih",
    "question": "Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
    "options": [
      "29 Ekim 1923",
      "23 Nisan 1920",
      "19 Mayıs 1919",
      "30 Ağustos 1922"
    ],
    "correct": "29 Ekim 1923",
    "wisdom": "Cumhuriyet, TBMM tarafından 29 Ekim 1923'te resmen ilan edilmiştir."
  },
  {
    "id": "mz_q_705",
    "category": "Tarih",
    "question": "Ankara'da Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
    "options": [
      "23 Nisan 1920",
      "29 Ekim 1923",
      "30 Ağustos 1922",
      "19 Mayıs 1919"
    ],
    "correct": "23 Nisan 1920",
    "wisdom": "TBMM'nin açıldığı gün milli iradenin sembolü olarak çocuklara bayram ilan edilmiştir."
  },
  {
    "id": "mz_q_706",
    "category": "Tarih",
    "question": "Mustafa Kemal Atatürk, Kurtuluş Savaşı'nı başlatmak üzere Samsun'a hangi tarihte ayak basmıştır?",
    "options": [
      "19 Mayıs 1919",
      "23 Nisan 1920",
      "29 Ekim 1923",
      "30 Ağustos 1922"
    ],
    "correct": "19 Mayıs 1919",
    "wisdom": "19 Mayıs, Atatürk'ü Anma, Gençlik ve Spor Bayramı olarak kutlanır."
  },
  {
    "id": "mz_q_707",
    "category": "Tarih",
    "question": "Kurtuluş Savaşı'nın askeri safhasını zaferle bitiren ve her yıl bayram olarak kutlanan 30 Ağustos zaferi hangisidir?",
    "options": [
      "Büyük Taarruz",
      "Sakarya Meydan Muharebesi",
      "Çanakkale Savaşı",
      "I. İnönü Savaşı"
    ],
    "correct": "Büyük Taarruz",
    "wisdom": "30 Ağustos Zafer Bayramı, Başkomutanlık Meydan Muharebesi zaferini simgeler."
  },
  {
    "id": "mz_q_708",
    "category": "Tarih",
    "question": "Osmanlı Devleti'nin I. Dünya Savaşı'nda İtilaf Devletlerine karşı 'Çanakkale Geçilmez!' dediği tarihi zafer hangi yıldır?",
    "options": [
      "1915",
      "1914",
      "1918",
      "1920"
    ],
    "correct": "1915",
    "wisdom": "18 Mart 1915 Çanakkale Deniz Zaferi, milletimizin en büyük kahramanlık destanlarındandır."
  },
  {
    "id": "mz_q_709",
    "category": "Tarih",
    "question": "Türk tarihinin ve edebiyatının ilk yazılı belgeleri kabul edilen Orhun Abideleri hangi devlet döneminde dikilmiştir?",
    "options": [
      "Göktürkler (II. Göktürk)",
      "Uygurlar",
      "Hunlar",
      "Karahanlılar"
    ],
    "correct": "Göktürkler (II. Göktürk)",
    "wisdom": "Orhun Abideleri; Bilge Kağan, Kültigin ve Vezir Tonyukuk adına dikilmiş yazılı taşlardır."
  },
  {
    "id": "mz_q_710",
    "category": "Tarih",
    "question": "Antik çağın en gizemli yapılarından olan Gize Piramitleri hangi antik uygarlığa aittir?",
    "options": [
      "Antik Mısır",
      "Sümerler",
      "Romalılar",
      "Persler"
    ],
    "correct": "Antik Mısır",
    "wisdom": "Piramitler, firavunların mezarları olarak inşa edilmiş devasa taş yapılardır."
  },
  {
    "id": "mz_q_711",
    "category": "Tarih",
    "question": "Tarihte bilinen ilk yazılı antlaşma olan Kadeş Antlaşması hangi iki uygarlık arasında imzalanmıştır?",
    "options": [
      "Mısır ve Hitit",
      "Sümer ve Babil",
      "Asur ve Urartu",
      "Roma ve Kartaca"
    ],
    "correct": "Mısır ve Hitit",
    "wisdom": "Kadeş Antlaşması M.Ö. 1280 civarında Hititler ile Mısırlılar arasında yapılmıştır."
  },
  {
    "id": "mz_q_712",
    "category": "Tarih",
    "question": "Tarihte bilinen ilk Türk devleti olan Asya Hun İmparatorluğu'nun en parlak dönemini yaşatan hükümdar kimdir?",
    "options": [
      "Mete Han",
      "Teoman",
      "Bumin Kağan",
      "Bilge Kağan"
    ],
    "correct": "Mete Han",
    "wisdom": "Mete Han, Türk boylarını ilk kez tek çatı altında toplamış ve onlu askeri sistemi kurmuştur."
  },
  {
    "id": "mz_q_713",
    "category": "Tarih",
    "question": "Yerleşik hayata geçen, tarım ve matbaayla uğraşan ilk Türk devleti hangisidir?",
    "options": [
      "Uygurlar",
      "Hunlar",
      "Göktürkler",
      "Avarlar"
    ],
    "correct": "Uygurlar",
    "wisdom": "Uygurlar Maniheizm dinini kabul ederek savaşçılığı bırakmış ve kültürel faaliyetlere yönelmişlerdir."
  },
  {
    "id": "mz_q_714",
    "category": "Tarih",
    "question": "Roma İmparatorluğu hangi yılda Doğu (Bizans) ve Batı olarak ikiye bölünmüştür?",
    "options": [
      "395",
      "476",
      "1453",
      "330"
    ],
    "correct": "395",
    "wisdom": "Kavimler Göçü'nün etkisiyle zayıflayan Roma İmparatorluğu 395 yılında ikiye ayrılmıştır."
  },
  {
    "id": "mz_q_715",
    "category": "Tarih",
    "question": "Balamir önderliğindeki Hunların batıya hareketiyle Avrupa'nın sosyal ve siyasi yapısını değiştiren tarihi olay hangisidir?",
    "options": [
      "Kavimler Göçü",
      "Haçlı Seferleri",
      "Coğrafi Keşifler",
      "Rönesans"
    ],
    "correct": "Kavimler Göçü",
    "wisdom": "Kavimler Göçü, İlk Çağ'ın kapanıp Orta Çağ'ın açılmasına neden olmuştur."
  },
  {
    "id": "mz_q_716",
    "category": "Tarih",
    "question": "İslam tarihinde Kudüs'ü ilk kez fethedip Hristiyan ve Yahudilere inanç özgürlüğü tanıyan halife kimdir?",
    "options": [
      "Hz. Ömer (r.a.)",
      "Hz. Ebu Bekir (r.a.)",
      "Hz. Osman (r.a.)",
      "Hz. Ali (r.a.)"
    ],
    "correct": "Hz. Ömer (r.a.)",
    "wisdom": "Hz. Ömer Kudüs'e bizzat giderek teslim almış ve şehre adaletle hükmetmiştir."
  },
  {
    "id": "mz_q_717",
    "category": "Tarih",
    "question": "Müslümanların Mekke'yi kan dökmeden fethettiği tarihi yıl hangisidir?",
    "options": [
      "630",
      "622",
      "632",
      "610"
    ],
    "correct": "630",
    "wisdom": "Mekke'nin Fethi 630 yılında gerçekleşmiş, Peygamberimiz genel af ilan etmiştir."
  },
  {
    "id": "mz_q_718",
    "category": "Tarih",
    "question": "Müslümanlar ile Mekkeli müşrikler arasında yapılan ilk büyük savaş hangisidir?",
    "options": [
      "Bedir Savaşı (624)",
      "Uhud Savaşı",
      "Hendek Savaşı",
      "Mute Savaşı"
    ],
    "correct": "Bedir Savaşı (624)",
    "wisdom": "Bedir Savaşı, Müslümanların zaferiyle sonuçlanmış ve İslamiyet'in yayılmasını hızlandırmıştır."
  },
  {
    "id": "mz_q_719",
    "category": "Tarih",
    "question": "Medine'yi savunmak için Selman-ı Farisi'nin önerisiyle şehrin etrafına hendekler kazılan savunma savaşı hangisidir?",
    "options": [
      "Hendek Savaşı (627)",
      "Uhud Savaşı",
      "Hayber'in Fethi",
      "Tabuk Seferi"
    ],
    "correct": "Hendek Savaşı (627)",
    "wisdom": "Müşriklerin Medine'yi kuşatması hendekler ve Allah'ın yardımı fırtına ile başarısız olmuştur."
  },
  {
    "id": "mz_q_720",
    "category": "Tarih",
    "question": "Peygamber Efendimiz'in hicretin 10. yılında yüz binden fazla Müslümana hitap ettiği, insan hakları evrensel beyannamesi niteliğindeki konuşması nedir?",
    "options": [
      "Veda Hutbesi",
      "Akabe Biatı",
      "Hudeybiye Antlaşması",
      "Medine Sözleşmesi"
    ],
    "correct": "Veda Hutbesi",
    "wisdom": "Veda Hutbesi'nde kan davaları, faiz ve ırkçılık ayaklar altına alınmış, kadın hakları vurgulanmıştır."
  },
  {
    "id": "mz_q_721",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 21)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 21)"
  },
  {
    "id": "mz_q_722",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 22)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 22)"
  },
  {
    "id": "mz_q_723",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 23)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 23)"
  },
  {
    "id": "mz_q_724",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 24)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 24)"
  },
  {
    "id": "mz_q_725",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 25)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 25)"
  },
  {
    "id": "mz_q_726",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 26)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 26)"
  },
  {
    "id": "mz_q_727",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 27)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 27)"
  },
  {
    "id": "mz_q_728",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 28)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 28)"
  },
  {
    "id": "mz_q_729",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 29)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 29)"
  },
  {
    "id": "mz_q_730",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 30)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 30)"
  },
  {
    "id": "mz_q_731",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 31)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 31)"
  },
  {
    "id": "mz_q_732",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 32)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 32)"
  },
  {
    "id": "mz_q_733",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 33)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 33)"
  },
  {
    "id": "mz_q_734",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 34)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 34)"
  },
  {
    "id": "mz_q_735",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 35)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 35)"
  },
  {
    "id": "mz_q_736",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 36)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 36)"
  },
  {
    "id": "mz_q_737",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 37)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 37)"
  },
  {
    "id": "mz_q_738",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 38)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 38)"
  },
  {
    "id": "mz_q_739",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 39)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 39)"
  },
  {
    "id": "mz_q_740",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 40)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 40)"
  },
  {
    "id": "mz_q_741",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 41)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 41)"
  },
  {
    "id": "mz_q_742",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 42)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 42)"
  },
  {
    "id": "mz_q_743",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 43)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 43)"
  },
  {
    "id": "mz_q_744",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 44)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 44)"
  },
  {
    "id": "mz_q_745",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 45)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 45)"
  },
  {
    "id": "mz_q_746",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 46)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 46)"
  },
  {
    "id": "mz_q_747",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 47)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 47)"
  },
  {
    "id": "mz_q_748",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 48)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 48)"
  },
  {
    "id": "mz_q_749",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 49)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 49)"
  },
  {
    "id": "mz_q_750",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 50)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 50)"
  },
  {
    "id": "mz_q_751",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 51)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 51)"
  },
  {
    "id": "mz_q_752",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 52)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 52)"
  },
  {
    "id": "mz_q_753",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 53)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 53)"
  },
  {
    "id": "mz_q_754",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 54)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 54)"
  },
  {
    "id": "mz_q_755",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 55)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 55)"
  },
  {
    "id": "mz_q_756",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 56)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 56)"
  },
  {
    "id": "mz_q_757",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 57)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 57)"
  },
  {
    "id": "mz_q_758",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 58)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 58)"
  },
  {
    "id": "mz_q_759",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 59)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 59)"
  },
  {
    "id": "mz_q_760",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 60)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 60)"
  },
  {
    "id": "mz_q_761",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 61)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 61)"
  },
  {
    "id": "mz_q_762",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 62)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 62)"
  },
  {
    "id": "mz_q_763",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 63)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 63)"
  },
  {
    "id": "mz_q_764",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 64)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 64)"
  },
  {
    "id": "mz_q_765",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 65)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 65)"
  },
  {
    "id": "mz_q_766",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 66)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 66)"
  },
  {
    "id": "mz_q_767",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 67)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 67)"
  },
  {
    "id": "mz_q_768",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 68)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 68)"
  },
  {
    "id": "mz_q_769",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 69)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 69)"
  },
  {
    "id": "mz_q_770",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 70)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 70)"
  },
  {
    "id": "mz_q_771",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 71)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 71)"
  },
  {
    "id": "mz_q_772",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 72)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 72)"
  },
  {
    "id": "mz_q_773",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 73)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 73)"
  },
  {
    "id": "mz_q_774",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 74)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 74)"
  },
  {
    "id": "mz_q_775",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 75)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 75)"
  },
  {
    "id": "mz_q_776",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 76)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 76)"
  },
  {
    "id": "mz_q_777",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 77)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 77)"
  },
  {
    "id": "mz_q_778",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 78)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 78)"
  },
  {
    "id": "mz_q_779",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 79)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 79)"
  },
  {
    "id": "mz_q_780",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 80)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 80)"
  },
  {
    "id": "mz_q_781",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 81)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 81)"
  },
  {
    "id": "mz_q_782",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 82)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 82)"
  },
  {
    "id": "mz_q_783",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 83)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 83)"
  },
  {
    "id": "mz_q_784",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 84)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 84)"
  },
  {
    "id": "mz_q_785",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 85)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 85)"
  },
  {
    "id": "mz_q_786",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 86)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 86)"
  },
  {
    "id": "mz_q_787",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 87)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 87)"
  },
  {
    "id": "mz_q_788",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 88)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 88)"
  },
  {
    "id": "mz_q_789",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 89)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 89)"
  },
  {
    "id": "mz_q_790",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 90)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 90)"
  },
  {
    "id": "mz_q_791",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 91)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 91)"
  },
  {
    "id": "mz_q_792",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 92)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 92)"
  },
  {
    "id": "mz_q_793",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 93)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 93)"
  },
  {
    "id": "mz_q_794",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 94)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 94)"
  },
  {
    "id": "mz_q_795",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 95)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 95)"
  },
  {
    "id": "mz_q_796",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 96)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 96)"
  },
  {
    "id": "mz_q_797",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 97)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 97)"
  },
  {
    "id": "mz_q_798",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 98)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 98)"
  },
  {
    "id": "mz_q_799",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 99)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 99)"
  },
  {
    "id": "mz_q_800",
    "category": "Tarih",
    "question": "Tarih bilimi için en güvenilir bilgi kaynakları aşağıdakilerden hangisidir? (Soru 100)",
    "options": [
      "Birinci elden kaynaklar ve belgeler",
      "Kulaktan dolma hikayeler",
      "Efsaneler ve masallar",
      "Kişisel tahminler"
    ],
    "correct": "Birinci elden kaynaklar ve belgeler",
    "wisdom": "Tarih, belgelere ve kanıtlara dayalı olarak nesnel bir şekilde incelenmesi gereken bir sosyal bilimdir. (Tarih Soru 100)"
  }
];
