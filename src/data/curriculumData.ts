export interface Slide {
  type: 'cover' | 'content' | 'ayah' | 'hadith' | 'poem' | 'discussion' | 'activity' | 'quiz';
  title?: string;
  subtitle?: string;
  body?: string;
  items?: string[];
  arabicText?: string;
  reference?: string;
  emoji?: string;
  // Quiz-specific fields
  question?: string;
  options?: string[];
  correct?: string;
  wisdom?: string;
}

export interface Lesson {
  id: string;
  lessonNumber: number;
  title: string;
  // New slide-based format
  slides?: Slide[];
  // Legacy fields (kept for backward compat with existing 59 lessons)
  outcomes?: string[];
  wisdomNotes?: string;
  interactiveActivity?: string;
  quiz?: {
    question: string;
    options: string[];
    correct: string;
    wisdom: string;
  };
}

/** Converts a legacy lesson (outcomes/wisdomNotes/activity/quiz) into a Slide array */
export function lessonToSlides(lesson: Lesson): Slide[] {
  // If lesson already has slides, use them directly
  if (lesson.slides && lesson.slides.length > 0) {
    return lesson.slides;
  }

  // Auto-generate slides from legacy fields
  const slides: Slide[] = [];

  // Cover slide
  slides.push({
    type: 'cover',
    title: lesson.title,
    subtitle: `${lesson.lessonNumber}. Ders`,
    emoji: '📖',
  });

  // Outcomes slide
  if (lesson.outcomes && lesson.outcomes.length > 0) {
    slides.push({
      type: 'content',
      title: 'Ders Kazanımları',
      emoji: '🎯',
      items: lesson.outcomes,
    });
  }

  // Wisdom notes slide
  if (lesson.wisdomNotes) {
    slides.push({
      type: 'content',
      title: 'Bilgi ve Hikmet',
      emoji: '✨',
      body: lesson.wisdomNotes,
    });
  }

  // Activity slide
  if (lesson.interactiveActivity) {
    slides.push({
      type: 'activity',
      title: 'Sınıf Etkinliği',
      emoji: '🤝',
      body: lesson.interactiveActivity,
    });
  }

  // Quiz slide
  if (lesson.quiz) {
    slides.push({
      type: 'quiz',
      title: 'Bilgi Yarışması',
      emoji: '🎯',
      question: lesson.quiz.question,
      options: lesson.quiz.options,
      correct: lesson.quiz.correct,
      wisdom: lesson.quiz.wisdom,
    });
  }

  return slides;
}

export interface DayTopics {
  dayName: string;
  discipline: 'İTİKAD' | 'İBADET' | 'SİYER' | 'AHLAK';
  bgGrad: string;
  badgeColor: string;
  lessons: Lesson[];
}

export interface WeekCurriculum {
  weekNum: number;
  dateRange: string;
  title: string;
  summary: string;
  days: DayTopics[];
}


export const WEEKLY_CURRICULUM: WeekCurriculum[] = [
  {
    weekNum: 1,
    dateRange: "6 - 10 Temmuz",
    title: "1. HAFTA: İslam'ın Tohumu ve Temeli",
    summary: "Kelime-i Şehadet, iman-İslam esasları, temizlik, abdestin incelikleri, Hz. Peygamber'in çocukluğu ve temel ahlak kavramları.",
    days: [
      {
        dayName: "Pazartesi",
        discipline: "İTİKAD",
        bgGrad: "from-teal-500 to-emerald-600",
        badgeColor: "bg-teal-100 text-teal-850",
        lessons: [
          {
            id: "w1_d1_l1",
            lessonNumber: 1,
            title: "Kelime-i Tevhid ve Kelime-i Şehâdeti Öğreniyorum",
            outcomes: [
              "Kelime-i Tevhid ve Kelime-i Şehâdet'in okunuşlarını ve anlamlarını doğru bir şekilde söyler.",
              "Kelime-i Tevhid ve Kelime-i Şehâdet'in İslam'ın giriş kapısı ve temeli olduğunu açıklar."
            ],
            slides: [
              {
                type: 'cover',
                title: 'Kelime-i Tevhid ve Kelime-i Şehâdeti Öğreniyorum',
                subtitle: '1. Ders • İTİKAD',
                emoji: '🕌',
              },
              {
                type: 'content',
                title: 'Kelime-i Tevhid',
                emoji: '📖',
                arabicText: 'لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ',
                body: 'Lâ ilâhe illallah Muhammedün Resûlullah\n\nAnlamı: Allah\'tan başka ilah (tanrı) yoktur ve Hz. Muhammed (s.a.v.) O\'nun elçisidir.\n\nKelime-i Tevhid, İslam dininin temel taşıdır. Bir Müslüman\'ın söylemesi gereken ilk ve en önemli sözdür.',
              },
              {
                type: 'content',
                title: 'Kelime-i Şehâdet',
                emoji: '📖',
                arabicText: 'أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
                body: 'Eşhedü en lâ ilâhe illallah ve eşhedü enne Muhammeden abdühû ve resûlühû\n\nAnlamı: Ben şahitlik ederim ki Allah\'tan başka ilah yoktur ve yine şahitlik ederim ki Hz. Muhammed (s.a.v.) O\'nun kulu ve elçisidir.\n\nKelime-i Şehâdet getirmek, İslam\'ın ilk şartıdır ve Müslüman olmanın anahtarıdır.',
              },
              {
                type: 'poem',
                title: 'İslam\'ın Özü',
                emoji: '🌙',
                body: 'İslam\'ın özüdür bu güzel sözler,\nKalplere nur saçar, aydınlatır gözler.\nTevhid ile başlar imanın yolu,\nŞehâdetle tamdır Hakk\'ın resûlü.',
              },
              {
                type: 'content',
                title: 'Rabbimi Tanıyorum',
                emoji: '🌟',
                body: 'Allah birdir, tektir, eşi ve benzeri yoktur.\n\nO, bizi yaratan, bize sayısız nimetler veren, bizi seven ve koruyan Rabbimizdir.\n\nAllah her şeyi bilir, her şeyi görür ve her şeyi işitir. O\'nun gücü her şeye yeter.',
                items: [
                  'Allah birdir — O\'ndan başka ilah yoktur.',
                  'Allah tektir — Eşi ve benzeri yoktur.',
                  'Tüm nimetler O\'ndandır — Yediğimiz, içtiğimiz, nefes aldığımız her şey.',
                ],
              },
              {
                type: 'ayah',
                title: 'Bir Ayet Öğreniyorum',
                emoji: '📖',
                arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ',
                body: '"Allah, kendisinden başka ilah olmayandır."',
                reference: 'Tâhâ Sûresi, 8. Ayet',
              },
              {
                type: 'content',
                title: 'Günlük Hayatımızdaki Güzel Sözler',
                emoji: '💬',
                items: [
                  'Bismillahirrahmanirrahim — Her işe başlarken söyleriz. "Rahmân ve Rahîm olan Allah\'ın adıyla" demektir.',
                  'Elhamdülillah — Bir nimete kavuşunca söyleriz. "Hamd Allah\'a mahsustur" demektir.',
                  'Allahü Ekber — Allah\'ın büyüklüğünü hatırlamak istediğimizde söyleriz. "Allah en büyüktür" demektir.',
                ],
              },
              {
                type: 'poem',
                title: 'Besmele Şiiri',
                emoji: '✨',
                body: 'Besmeledir ilk adım, her işimin başında,\nRahmet iner, bereket, huzur gelir karşıma.\nBismillah de başla her güne,\nAllah\'ın adıyla gir her kapıya.',
              },
              {
                type: 'ayah',
                title: 'Bir Ayet',
                emoji: '📖',
                body: '"İman edip salih davranışlarda bulunanlar için cennetler olduğunu müjdele."',
                reference: 'Bakara Sûresi, 25. Ayet',
              },
              {
                type: 'hadith',
                title: 'Bir Hadis-i Şerif',
                emoji: '🌹',
                body: '"Besmele ile başlanmayan her iş bereketsizdir."',
                reference: 'Hadis-i Şerif — Peygamberimiz (s.a.v.)',
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Araştıralım, Paylaşalım!',
                emoji: '🗨️',
                items: [
                  'Müslüman kime denir?',
                  'Müslümanın söylemesi gereken ilk sözler nelerdir?',
                  'Kelime-i Tevhid ve Kelime-i Şehâdetin önemini büyüklerimize sorarak öğrendiklerimizi arkadaşlarımızla paylaşalım.',
                  'Besmele, Kelime-i Tevhid, Kelime-i Şehâdet, Elhamdülillah, Allahü Ekber gibi günlük dilde sıkça kullandığımız ve Allah\'ı andığımız başka hangi ifadeler var? Araştıralım.',
                ],
              },
              {
                type: 'activity',
                title: 'Sena ve Salih Kardeşlere Yardım Edelim!',
                emoji: '🧩',
                body: 'Sena ve Salih kardeşler, Kelime-i Tevhid ve Kelime-i Şehâdetle ilgili cümlelerdeki boşlukları doldurmaya çalışıyorlar. Onlara yardım etmeye ne dersiniz?',
                items: [
                  'Kelime-i Tevhid: "Lâ ilâhe illallah ............... Resûlullah"',
                  'Kelime-i Şehâdet: "Eşhedü en lâ ilâhe illallah ve eşhedü enne ............... abdühû ve resûlühû"',
                  'Kelime-i Şehâdet ve Kelime-i Tevhidin anlamını yazar mısın?',
                ],
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması',
                emoji: '🎯',
                question: 'Peygamberimiz (s.a.v.) bir Hadis-i Şerif\'te hangi durumda işlerin bereketsiz olacağını bildirmiştir?',
                options: [
                  'Akşam yemeği yemeyenlerin işleri bereketsiz olur',
                  'Besmele ile başlanmayan her iş bereketsizdir',
                  'Erken kalkmayan kişilerin işleri bereketsiz olur',
                  'Sadece cuma günleri çalışmayanların işleri bereketsiz olur',
                ],
                correct: 'Besmele ile başlanmayan her iş bereketsizdir',
                wisdom: 'Harika! Doğru cevap. Peygamberimiz (s.a.v.) "Besmele ile başlanmayan her iş bereketsizdir" buyurarak her işe Bismillahirrahmanirrahim diyerek başlamamızı öğütlemiştir.',
              },
            ],
          },
          {
            id: "w1_d1_l2",
            lessonNumber: 2,
            title: "İslam'ın ve İmanın Esaslarını Öğreniyorum",
            outcomes: [
              "İslam'ın 5 şartını ve İmanın 6 esasını ezbere sayar.",
              "İman ile İslam arasındaki bağı (iç inanç ile dış eylem bütünlüğü) kavrar."
            ],
            wisdomNotes: "İman içteki fidan, İslam ise o fidanın dışarıya verdiği meyvedir. İmanın şartları 6'dır: Allah'a, meleklere, kitaplara, peygamberlere, ahiret gününe, kader ve kazaya inanmak. İslam'ın şartları ise 5'tir: Kelime-i Şehâdet getirmek, namaz kılmak, zekat vermek, oruç tutmak ve hacca gitmek.",
            interactiveActivity: "Tahta Eşleştirme Oyunu: Sınıf iki gruba ayrılır. Karışık verilen şartlar 'İmanın Şartları' ve 'İslam'ın Şartları' sütunlarına sürüklenerek doğru yerleştirilir.",
            quiz: {
              question: "Aşağıdakilerden hangisi kalbimizle onayladığımız 'İmanın Altı Esasından' biridir?",
              options: [
                "Namaz kılmak",
                "Oruç tutmak",
                "Meleklere inanmak",
                "Zekat vermek"
              ],
              correct: "Meleklere inanmak",
              wisdom: "Bravo! İman esası görünmeyen ve gayb ile ilgili inançları kapsar. Meleklere inanmak imanın kurucu şartlarındandır."
            }
          },
          {
            id: "w1_d1_l3",
            lessonNumber: 3,
            title: "Allah'a İnanıyorum ve Allah'ın Güzel İsimleri",
            outcomes: [
              "Evrendeki mükemmel düzeni gözlemleyerek bir Yaratıcı olduğunu akıl ve mantık yoluyla açıklar.",
              "Allah'ın isimlerinden bazılarının (Esmaü'l-Hüsna: Rahman, Rahim, Alim, Basir) anlamını hayatına yansıtır."
            ],
            wisdomNotes: "Kâinattaki hiçbir şey tesadüfen olamaz. Bir resim gördüğümüzde ressamı, bir düzen gördüğümüzde kurucuyu anlarız. Allah'ın isimlerinden Alim (her şeyi bilen), Basir (her şeyi gören) ve Rahman (sonsuz merhametli) isimleri, bize yapayalnız olmadığımızı ve her an sevgiyle gözetlendiğimizi hatırlatır.",
            interactiveActivity: "Doğa Dedektifi: Pencereden dışarı bakıp veya sınıf içindeki düzeni tartışarak 'yeryüzünde planlı yaratılışın üç delilini' listeleme çalışması yapılır.",
            quiz: {
              question: "Allah'ın her şeyi hakkıyla işittiğini, en gizli fısıltıları bile bildiğini ifade eden asil ismi hangisidir?",
              options: [
                "Basîr",
                "Semî'",
                "Rahmân",
                "Kuddûs"
              ],
              correct: "Semî'",
              wisdom: "Harika! Allah Semî'dir; içimizden geçen duaları, fısıltıları bile sevgiyle duyar ve icabet eder."
            }
          }
        ]
      },
      {
        dayName: "Salı",
        discipline: "İBADET",
        bgGrad: "from-amber-500 to-orange-600",
        badgeColor: "bg-amber-100 text-amber-850",
        lessons: [
          {
            id: "w1_d2_l1",
            lessonNumber: 1,
            title: "İbadetin Anlamını ve Çeşitlerini Öğreniyorum - Bölüm I",
            outcomes: [
              "İbadet kavramının kelime ve fıkıh anlamını açıklar; insanın yaratıcısına bağlılığını göstermesinde ibadetlerin amaçlarını kavrar.",
              "İbadetleri yapılış şekillerine göre bedenî (namaz, oruç), malî (zekat) ve hem bedenî hem malî (hac) olmak üzere doğru şekilde sınıflandırır.",
              "İbadet kavramını kuru bir zorunluluk değil, hayatı anlamlandıran, insanı kötülüklerden koruyan ve yaratıcıyla bağ kuran manevi bir ihtiyaç olarak kavrar."
            ],
            wisdomNotes: "İbadet sözlükte boyun eğmek, itaat etmek ve saygı duymak demektir. Dinî terim olarak ise; müminin Allah'ın rızasını kazanmak amacıyla gerçekleştirdiği her güzel eylem ve her yapıcı vazifedir. İbadet, kuru bir zorunluluk değil; hayatı anlamlandıran, insanı kötülüklerden ve bencillikten koruyan, yaratıcımızla kalben bağ kuran manevi bir ihtiyaçtır. Yapılış şekillerine göre de üçe ayrılır: Bedenî (namaz, oruç gibi bedenle yapılanlar), Malî (zekat, sadaka gibi malla yapılanlar) ve hem Bedenî hem Malî (Hac gibi hem beden gücü hem de servet gerektiren birleşik ibadetler).",
            interactiveActivity: "Etkileşimli Sürükle-Eşleştir: Tahtada 'Sadece Bedenle', 'Sadece Malla', 'Hem Beden hem Malla' sınıflandırma sütunları oluşturulur. Öğrenciler ellerindeki ibadet türlerini tartışarak doğru bölüme yerleştirirler.",
            quiz: {
              question: "Aşağıdakilerden hangisi İslam fıkhına göre hem bedenî gücümüzü hem de malî imkanlarimizi birlikte kullanmamızı gerektiren bütüncül bir ibadettir?",
              options: [
                "Namaz kılmak",
                "Hacca gitmek",
                "Oruç tutmak",
                "Zekat vermek"
              ],
              correct: "Hacca gitmek",
              wisdom: "Harika! Doğru cevap. Hac ibadeti, hem fiziksel sabır ve bedenî güç, hem de seyahat bütçesi (malî birikim) gerektiren muhteşem bir birleşik ibadettir."
            }
          },
          {
            id: "w1_d2_l2",
            lessonNumber: 2,
            title: "Cami ve Ezanı Öğreniyorum - Bölüm II: Ezanın Evrensel Çağrısı",
            outcomes: [
              "Ezanın sözlerini, anlamını ve Müslümanlar için ifade ettiği evrensel çağrı sembolizmini analiz eder.",
              "Caminin toplumsal birlik, beraberlik ve yardımlaşmadaki fonksiyonel rollerini ve sosyal hayattaki birleştirici gücünü açıklarlar."
            ],
            wisdomNotes: "Ezan, kelime anlamı olarak 'bildirmek, duyurmak ve ilan etmek' demektir. Günde beş defa okunan ezan, tüm Müslümanları aynı inançta ve aynı safta birleştiren mukaddes, hür ve bağımsız bir tevhid sembolüdür. Ezanın her cümlesi, bizi sadece namaza değil; kurtuluşa (felah), ahlaka ve barışa davet eder. Dünyanın hangi köşesinde olursak olalım ezan sesi, kalplere kardeşlik ve sevinç aşılayan evrensel bir sestir.",
            interactiveActivity: "Kulak Ver ve Düşün: Sınıfta ezandaki 'Hayye ale'l-felâh' (Süratle kurtuluşa/başarıya gelin) ifadesinin günlük hayatımızda dürüst ve çalışkan bir genç olma yolundaki karşılığı üzerine 5 dakikalık bir müzakere yapılır.",
            quiz: {
              question: "Ezanın anlamında yer alan ve Müslümanları ebedi esenliğe, iç huzura, hakiki başarıya çağıran kutlu ifade hangisidir?",
              options: [
                "Eşhedü enne Muhammeden Resûlullah",
                "Allâhu Ekber",
                "Hayye ale'l-felâh",
                "Lâ ilâhe illâllah"
              ],
              correct: "Hayye ale'l-felâh",
              wisdom: "Süper! 'Hayye ale'l-felâh', bizi hakiki kurtuluşa, adalete, başarıya ve ebedi ahlaki zafere çağıran asil dille süslenmiş bir davettir."
            }
          },
          {
            id: "w1_d2_l3",
            lessonNumber: 3,
            title: "Cami ve Ezanı Öğreniyorum - Bölüm III: Caminin Bölümleri ve Sosyal Yaşam",
            outcomes: [
              "Caminin iç ve dış mimari bölümlerini (mihrap, minber, kürsü, minare, şerefe) tanır.",
              "Caminin sadece yaşlıların gittiği bir mekân değil; gençlerin ve tüm toplumun bir araya geldiği bir sosyal yaşam, eğitim ve kültür merkezi olduğu algısını yerleştirir."
            ],
            wisdomNotes: "Cami (Mescid), kelime anlamı olarak 'toplayan, bir araya getiren sığınak' demektir. Mimari açıdan caminin kısımları vardır: İmamın namaz kıldırdığı oyuk kısım 'mihrap', hutbe okunan basamaklı kürsü 'minber', vaaz kürsüsü 'kürsü', ezanın göklere yükseldiği kule 'minare', ezan okunan merdivenli minare balkonu ise 'şerefe'dir. Ancak camiler sadece taştan binalar değildir; buralar çocukların, gençlerin ve tüm halkın buluşarak ilim öğrendiği, dertleştiği, omuz omuza saf tuttuğu yaşayan sosyal ve kültürel bir yaşam merkezidir.",
            interactiveActivity: "Geleceğin Camisi Tasarım Atölyesi: Sınıf gruplara ayrılarak içerisinde kütüphane, gençlik kütüphanesi, doğa bahçesi, bilim alanı ve ibadethanenin bir arada olduğu bir 'Sosyal Cami Kültür Merkezi' çizimi yapar.",
            quiz: {
              question: "Caminin yapısı içinde cuma ve bayram günlerinde hatiplerin çıkıp toplumu aydınlattığı (hutbe irat ettiği) o merdivenli yüksek mimari yapının adı nedir?",
              options: [
                "Mihrap",
                "Minber",
                "Kürsü",
                "Şerefe"
              ],
              correct: "Minber",
              wisdom: "Bravo! Minber, hatiplerin cemaatin duyabileceği şekilde yüksekçe bir basamağa çıkıp topluma hayrı ve ahlakı tavsiye ettikleri basamaklı kürsüdür."
            }
          }
        ]
      },
      {
        dayName: "Çarşamba",
        discipline: "SİYER",
        bgGrad: "from-indigo-500 to-purple-600",
        badgeColor: "bg-indigo-100 text-indigo-850",
        lessons: [
          {
            id: "w1_d3_l1",
            lessonNumber: 1,
            title: "Peygamberimizin Çocukluğu ve Gençliği",
            outcomes: [
              "Hz. Muhammed'in (s.a.v.) doğduğu çevre, yetim ve öksüz kalışı gibi erken çocukluk dönemi olaylarını kavrar.",
              "Ailesi, dedesi Abdulmuttalib ve amcası Ebu Talib'in onun kişilik gelişimindeki hamiliğini açıklar."
            ],
            wisdomNotes: "Sevgili Peygamberimiz 571 yılında Mekke'de doğdu. Daha doğmadan babası Abdullah'ı kaybetmiş bir yetimdi. 6 yaşında ise canı annesi Amine vefat etti ve öksüz kaldı. Önce dedesi Abdulmuttalip, ardından amcası Ebu Talip onun bakımını üstlendi. O, çocukluğunu zorluklar içinde geçirirken dahi her zaman terbiyeli, ağırbaşlı ve dürüst bir çocuk olmuştu.",
            interactiveActivity: "Diyalog Seansı: Sınıfa sorun: 'Bir yetim ve öksüz olarak büyümek, Peygamberimiz cemaatimize yetim çocuklara karşı nasıl davranmamız gerektiğini nasıl fısıldar?'",
            quiz: {
              question: "Peygamberimiz Hz. Muhammed (s.a.v.) kaç yılında doğmuştur ve 6 yaşındayken vefat eden biricik validesinin adı nedir?",
              options: [
                "571 yılında doğmuştur - Validesi Hz. Amine'dir",
                "632 yılında doğmuştur - Validesi Hz. Hatice'dir",
                "571 yılında doğmuştur - Validesi Hz. Halime'dir",
                "610 yılında doğmuştur - Validesi Hz. Fatıma'dir"
              ],
              correct: "571 yılında doğmuştur - Validesi Hz. Amine'dir",
              wisdom: "Harika! Doğru cevap. Efendimiz yetim ve öksüz büyümüştü, bu yüzden yetimlerin kalbini korumak bizim en önemli ahlak görevlerimizdendir."
            }
          },
          {
            id: "w1_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Çocukluğu ve Gençliği",
            outcomes: [
              "Süt anneye veriliş nedenlerini, doğayla iç içe büyümesini değerlendirir.",
              "Peygamberimizin çocukluk çağındaki adil, saygılı ve yardımsever davranış modellerini listeler."
            ],
            wisdomNotes: "Peygamberimiz bebekliğinde havası temiz, konuşulan Arapçası duru olan kırsal kesimde süt annesi Halime'nin yanında büyüdü. Koyun gütmüş, doğayı gözlemlemiştir. Çocukluğunda hiçbir akranına zarar vermemiş, haksızlıklara karşı durmuş, her zaman adaletli bir oyun arkadaşı olmuştu.",
            interactiveActivity: "Görsel Canlandırma: Süt anne Halime'nin evindeki koyun otlatma ve doğa ile bütünleşme sahnelerini tahtada çizerek canlandırın.",
            quiz: {
              question: "Çocukluğunda çobanlık yapan Peygamberimizin doğayı, hayvanları gözlemleyerek kazandığı en büyük erdemlerden biri hangisi olmuştur?",
              options: [
                "Sessiz bir bencil olmak",
                "Canlılara karşı sonsuz şefkat, sabır ve koruyucu merhamet yeteneği geliştirmek",
                "Şehir hayatından nefret etmek",
                "Koyunlara karşı üstünlük kurmak"
              ],
              correct: "Canlılara karşı sonsuz şefkat, sabır ve koruyucu merhamet yeteneği geliştirmek",
              wisdom: "Kutlarız! Çobanlık yapmak sabır mektebidir. Peygamberler can dostlarımızı koruyarak tüm insanlığı şefkatle yönetme bilinci kazanmışlardır."
            }
          },
          {
            id: "w1_d3_l3",
            title: "Peygamberimizin Çocukluğu ve Gençliği",
            lessonNumber: 3,
            outcomes: [
              "Hılful Fudûl (Erdemliler Cemiyeti) anlaşmasına katılımını ve buradaki adalet mücadelesini analiz eder.",
              "El-Emîn (Güvenilir) sıfatının Mekke toplumu tarafından ona nasıl yakıştırıldığını açıklar."
            ],
            wisdomNotes: "Mekke'de zulümlere engel olmak, yabancı tüccarların mallarının gasp edilmesini önlemek amacıyla kurulan Hilfü'l-Fudûl (Erdemliler Birliği)'ne genç yaşta katıldı. Haksız kim olursa olsun mazlumun yanında duracağına söz verdi. Doğruluğu yüzünden Mekke halkı ona 'Muhammedü'l-Emîn' (Son derece güvenilir Muhammed) dedi.",
            interactiveActivity: "Rol Dağılımı: Mekke pazarında malı gasp edilen bir yabancı tüccarın davasını savunan Erdemliler Birliği üyelerinin mahkeme canlandırmasını yapın.",
            quiz: {
              question: "Peygamberimizin henüz gençken adaletsizliğin karşısına çıkıp katıldığı o asil cemiyetin adı nedir?",
              options: [
                "Suffe Meclisi",
                "Hilfü'l-Fudûl (Erdemliler Birliği)",
                "Darün Nedve",
                "Arafat Konseyi"
              ],
              correct: "Hilfü'l-Fudûl (Erdemliler Birliği)",
              wisdom: "Süpersiniz! Hilfü'l-Fudûl, sivil bir adalet arayışıdır. Gençlerin haksızlığa karşı sessiz kalmayıp omuz omuza durmalarını simgeler."
            }
          }
        ]
      },
      {
        dayName: "Perşembe",
        discipline: "AHLAK",
        bgGrad: "from-rose-500 to-pink-600",
        badgeColor: "bg-rose-100 text-rose-850",
        lessons: [
          {
            id: "w1_d4_l1",
            lessonNumber: 1,
            title: "Ahlak Nedir ve Din-Ahlak Bağı",
            outcomes: [
              "Ahlakın tanımını yapar; dinin nihai hedefinin güzel ahlakı tamamlamak olduğunu savunur.",
              "Karakterli insan davranışlarının inançla olan ayrılmaz birlikteliğini kavrar."
            ],
            wisdomNotes: "Ahlak, insanın iç dünyasındaki güzelliklerin dışarıya dürüst davranışlar olarak süzülmesidir. Sevgili Peygamberimiz 'Ben güzel ahlakı tamamlamak için gönderildim' buyurmuştur. Din ibadetten ibaret değildir; ibadetlerin gayesi dürüst, dürüst, şefkatli ve adaletli bir insan inşa etmektir.",
            interactiveActivity: "Fikir Ağacı: Akıllı tahtaya bir ağaç gövdesi çizin. Köklerine 'İman', dallarına ise dürüst ahlaki davranışları (doğruluk, saygı, cömertlik) yazarak tartışın.",
            quiz: {
              question: "Peygamberimizin kendi gönderiliş amacını açıklarken vurguladığı nihai gaye hangisidir?",
              options: [
                "Sadece kuralları zorlaştırmak",
                "Güzel ahlakı tamamlamak ve insanlığa dürüstlüğü yaymak",
                "Zengin bir esnaf olmak",
                "Mükemmel binalar inşa etmek"
              ],
              correct: "Güzel ahlakı tamamlamak ve insanlığa dürüstlüğü yaymak",
              wisdom: "Harika! Dinimizin özü, ibadetlerimizin asıl meyvesi güzel bir karaktere ve dürüst bir ahlaka sahip olmaktır."
            }
          },
          {
            id: "w1_d4_l2",
            lessonNumber: 2,
            title: "Sevgi ve Saygı Bilinci",
            outcomes: [
              "Yaratılan her canlıya (insan, hayvan, doğa) Yaratıcıdan dolayı sevgi ve saygıyla yaklaşılması gerektiğini örnekler.",
              "Küçükleri sevip büyüklere saygı göstermenin toplumsal barış zincirindeki yerini kavrar."
            ],
            wisdomNotes: "İslam merhamet dinidir. Peygamberimiz 'Küçüklerimizi sevmeyen, büyüklerimize saygı göstermeyen bizden değildir' uyarısında bulunmuştur. Can dostlarımıza merhamet etmek, ağaçları korumak, arkadaşlarımızın haklarına saygıyla yaklaşmak sevgi medeniyetimizin yapı taşlarıdır.",
            interactiveActivity: "Şefkat Köprüsü: Sınıfta en ufak bir çiçeğe veya evcil bir hayvana nasıl şefkatle davranmamız gerektiğini anlatan birer cümlelik tahta turlaması yapın.",
            quiz: {
              question: "Müslümanların kâinata ve canlılara karşı sevgisinin temel felsefesi ne olmalıdır?",
              options: [
                "Sadece kendi çıkarlarına uyan hayvanları sevmek",
                "Yaratılanı severiz Yaratandan ötürü - Her canlıya hürmetle yaklaşmak",
                "Doğadan tamamen kaçınmak",
                "Sadece güçlülerden korkmak"
              ],
              correct: "Yaratılanı severiz Yaratandan ötürü - Her canlıya hürmetle yaklaşmak",
              wisdom: "Tebrikler! Gerçek sevgi dürüstçe her hayat sahibini değerli kabul eder ve Yaratıcının bir emaneti olarak korur."
            }
          },
          {
            id: "w1_d4_l3",
            lessonNumber: 3,
            title: "Sorumluluk Bilinci ve Aileye Yardım",
            outcomes: [
              "Sorumluluk kavramını açıklar; evde, okulda ve odasındaki görevleri listeler.",
              "Anne-babasına ev işlerinde yardım etmenin bir görev ve ibadet değeri taşıdığını fark eder."
            ],
            wisdomNotes: "Sorumluluk, yaptığımız tercihlerin sonuçlarını üstlenmektir. Bir Müslüman genç kendi odasını toplamayı, ders çalışmayı ve en önemlisi ailesine evde yardım etmeyi bir yük değil, şerefli bir karakter sorumluluğu olarak görür. Peygamberimiz de evde kendi söküğünü diker, aileye destek olurdu.",
            interactiveActivity: "Zaman Çizelgesi Planı: Kendi haftalık sorumluluk tablonuzu (oda düzeni, çöpleri atma, sofrayı kurma) tasarlayıp tahtada paylaşın.",
            quiz: {
              question: "Peygamberimizin ev hayatındaki davranış modeli hakkında aşağıdakilerden hangisi ahlaka en uygun olanıdır?",
              options: [
                "Ev işlerini tamamen başkalarına yüklerdi",
                "Kendi işlerini bizzat yapar, kıyafetini diker ve ailesine her ev işinde yardım ederdi",
                "Ev düzenine karışmazdı",
                "Sürekli yalnız başına odasında kalırdı"
              ],
              correct: "Kendi işlerini bizzat yapar, kıyafetini diker ve ailesine her ev işinde yardım ederdi",
              wisdom: "Bravo! Kendi işini kendi görmek dürüst bir insana yakışan bağımsızlık ve asalet göstergesidir."
            }
          }
        ]
      }
    ]
  },
  {
    weekNum: 2,
    dateRange: "13 - 17 Temmuz",
    title: "2. HAFTA: Göremediklerimiz ve Sorumluluklarımız",
    summary: "Allah'ın sıfatları, meleklere iman, ibadetin anlamı ve caminin bölümleri, ilk vahyin geliş süreci ile dürüstlük ahlakı.",
    days: [
      {
        dayName: "Pazartesi",
        discipline: "İTİKAD",
        bgGrad: "from-teal-500 to-emerald-600",
        badgeColor: "bg-teal-100 text-teal-850",
        lessons: [
          {
            id: "w2_d1_l1",
            lessonNumber: 1,
            title: "Allah'a İnanıyorum Allah'ın Sıfatları(Zati ve Subuti Sıfatları) - Bölüm 1",
            outcomes: [
              "Allah'ın varlığına ve birliğine dair delilleri akli ve nakli boyutlarıyla kavrar.",
              "Allah'ın zati ve subuti sıfatlarını (İlim, Semî, Basar, Kudret vb.) öğrenerek bu sıfatların insan bilinci üzerindeki ahlaki etkilerini yorumlar."
            ],
            wisdomNotes: "Allah'ı tanımak, O'nun sıfatlarını öğrenmekle başlar. Zati sıfatlar sadece Allah'a has olan (Vücud, Kıdem, Beka, Vahdaniyet vb.), subuti sıfatlar ise benzerleri sınırlı olarak yaratılmışlarda da olan fakat Allah'ta sonsuz olan sıfatlardır (İlim, Semî, Basar, Kudret, Kelam vb.). Bu yüce sıfatlar, kâinattaki harika nizamı anlamamızı sağlar.",
            interactiveActivity: "Sıfat Keşfi: Sınıf iki gruba ayrılır. Karışık verilen Zati ve Subuti sıfat kartları tahtadaki doğru bölmelere yerleştirilir ve her sıfatın kâinattaki bir yansıması tartışılır.",
            quiz: {
              question: "Allah'ın her şeyi hakkıyla gördüğünü ve hiçbir şeyin O'ndan gizlenemeyeceğini ifade eden subuti sıfatı hangisidir?",
              options: [
                "İlim",
                "Kudret",
                "Basar",
                "Semî"
              ],
              correct: "Basar",
              wisdom: "Harika! Basar, sonsuz görme gücüdür. O'nun her şeyi görmesi, karanlık gecede siyah taşın üstündeki siyah karıncayı bile görmesi demektir."
            }
          },
          {
            id: "w2_d1_l2",
            lessonNumber: 2,
            title: "Allah'a İnanıyorum Allah'ın Sıfatları(Zati ve Subuti Sıfatları) - Bölüm 2",
            outcomes: [
              "Öğrencilerin yaratıcıyı korku temelli değil; sevgi, güven ve evrendeki harika matematiksel düzen üzerinden rasyonel bir yaklaşımla tanıması amaçlanır.",
              "Her şeyi gören ve bilen bir yaratıcı inancının insanda otokontrol (dürüst iç denetim) mekanizması geliştirdiğini kavrar."
            ],
            wisdomNotes: "İslam inancında Allah sevgisi esastır. Otokontrol, hiç kemse nin bizi denetlemediği anlarda bile Allah'ın bizi sevgiyle, merhametle izlediğinin (Alîm, Semî', Basîr sıfatları) bilincinde olarak dürüst ve ahlaklı kalabilme becerisidir. Bu sayede kötülüklerden korkuyla değil, yaratıcımıza duyduğumuz sevgi ve saygıyla kaçınırız.",
            interactiveActivity: "Otokontrol Oyunu: Sınıf içinde, 'Sadece güvenlik kamerasının olduğu yerde değil, kameranın olmadığı dürüst bir esnaf dükkanında' sergilenmesi gereken güvenilir ahlaki tutum drama ile canlandırılır.",
            quiz: {
              question: "Her anımızda bizi gören ve koruyan bir Yaratıcıya iman eden bir gencin geliştireceği en asil iç denetim gücü (ahlaki farkındalık) hangisidir?",
              options: [
                "Zorunlu eylem",
                "Otokontrol (İç Denetim)",
                "Gösterişli ibadet",
                "Korku temelli kaçış"
              ],
              correct: "Otokontrol (İç Denetim)",
              wisdom: "Tebrikler! Doğru cevap. Otokontrol, insanın kendi vicdanını her an Allah'ın huzurundaymış gibi canlı tutması ve kötülükten korunmasıdır."
            }
          },
          {
            id: "w2_d1_l3",
            lessonNumber: 3,
            title: "Meleklere İnanıyorum/Giriş, Çeşitli Melekler ve Görevleri - Bölüm 3",
            outcomes: [
              "Meleklerin yapısal özelliklerini (nurani, gözle görülmeyen, iradesiz varlıklar olmalarını) tanımlar ve dört büyük meleğin görevlerini listeler.",
              "Yazıcı melekler (Kirâmen Kâtibîn) ve koruyucu meleklerin varlığının, insanın sorumluluk bilincine ve yalnızlık hissini gidermesine olan katkısını değerlendirir.",
              "Görünmeyen alem (gayb) konusunun hurafe ve batıl inançlardan arındırılarak, tamamen sahih kaynaklar ışığında işlenmesi; melek şuurunun öğrenciye manevi bir emniyet ve huzur vermesi hedeflenir."
            ],
            wisdomNotes: "Melekler nurdan yaratılmış, günahsız ve iradesiz, yalnızca hayırlı işleri yapan gözle görülmeyen nurani varlıklardır. Dört büyük melek; Cebrail, Azrail, Mikail ve İsrafil'dir. Yanımızdaki yazıcı meleklerin (Kirâmen Kâtibîn) varlığı, hayatın her karesinin değerli ve kaydedilen birer iyilik fırsatı olduğunu fısıldar. Bu bilinç bize yalnız olmadığımızı hissettirir, içimize manevi bir emniyet verir.",
            interactiveActivity: "Gözümün Görmediği Dostlar: Sınıfta, meleklerin yalnızlık anlarındaki koruyucu hissini ve siber ortamda ya da tek başımızayken bize nasıl bir ahlaki sorumluluk yüklediğini anlatan kısa bir kompozisyon fırtınası yapılır.",
            quiz: {
              question: "Sağımızda ve solumuzda yer alan, yaptığımız hayırlı ve dürüst davranışları severek kaydeden yazıcı melekler hangileridir?",
              options: [
                "Münker ve Nekir",
                "Kirâmen Kâtibîn",
                "Harut ve Marut",
                "Hafaza Melekleri"
              ],
              correct: "Kirâmen Kâtibîn",
              wisdom: "Mükemmel! Kirâmen Kâtibîn melekleri her an yanımızda iyiliklerimizi kaydetmekten sevinç duyan asil katip dostlarımızdır."
            }
          }
        ]
      },
      {
        dayName: "Salı",
        discipline: "İBADET",
        bgGrad: "from-amber-500 to-orange-600",
        badgeColor: "bg-amber-100 text-amber-850",
        lessons: [
          {
            id: "w2_d2_l1",
            lessonNumber: 1,
            title: "Namazın Farzlarını Öğreniyorum/Namazın İçindeki ve Dışındaki Farzlar - Bölüm I",
            outcomes: [
              "Namaz ibadetinin geçerli olması için gereken dışındaki farzları (hazırlık şartları) ayırt eder.",
              "Namazın içindeki farzları (rükünler: iftitah tekbiri, kıyam, kıraat, rükû, secde, ka'de-i ahire) fıkhî kurallara uygun olarak açıklar.",
              "Formel fıkıh bilgilerini ezberletmek yerine; namaza hazırlığın (temizlik, niyet, odaklanma) insana günlük hayatta nasıl bir planlama, disiplin ve otokontrol kazandırdığı felsefi olarak işlenir."
            ],
            wisdomNotes: "Namaz kılmadan önceki hazırlık şartları (dışındaki farzlar) 6'dır: Hadesten taharet (abdest), Necasetten taharet (temizlik), Setr-i avret (örtünme), İstikbal-i kıble (Kabe'ye yönelme), Vakit ve Niyet. İçindeki farzlar da 6'dır: İftitah tekbiri, Kıyam, Kıraat, Rükû, Secde ve Ka'de-i ahire. Bu kurallar bütünü, gencin hayatını planlı ve temiz kurmasına destek olur.",
            interactiveActivity: "Randevu Planı Atölyesi: Hayatta en sevdiğiniz dostunuzla buluşurken yaptığınız hazırlıklar ile namaz öncesi hazırlık şartları arasındaki nezaket ve temizlik bağı kıyaslanır.",
            quiz: {
              question: "Aşağıdakilerden hangisi namaza başlamadan önce yapmamız gereken 'hazırlık (dışındaki)' şartlarından biridir?",
              options: [
                "Kıraat (Kur'an okumak)",
                "Rükû (Eğilmek)",
                "İstikbal-i Kıble (Kıbleye yönelmek)",
                "Secde etmek"
              ],
              correct: "İstikbal-i Kıble (Kıbleye yönelmek)",
              wisdom: "Bravo! İstikbal-i Kıble, namaza başlamadan önce Kabe'ye yönelmektir ve hazırlık şartlarındandır."
            }
          },
          {
            id: "w2_d2_l2",
            lessonNumber: 2,
            title: "Namazın Farzlarını Öğreniyorum/Abdest, Gusül ve Teyemmümün İncelikleri - Bölüm II",
            outcomes: [
              "Necasetten ve kirden arınma yolları olan abdest, gusül ve teyemmümün farzlarını ve uygulanış biçimlerini açıklar.",
              "Abdestin, insanın hem maddi temizliğine hem de ibadete manevi odaklanmasına olan katkısını değerlendirir."
            ],
            wisdomNotes: "Abdest namazın anahtarıdır. Necaset görünür kirlerdir, hades ise hükmi kirliliktir. Abdest, gusül ve su bulunmadığında toprakla alınan teyemmüm; Müslümanın her şart altında hem bedeni hem de ruhu pırıl pırıl tutmasını, zor durumlarda dahi çözümler bularak hayata odaklanmasını sağlar.",
            interactiveActivity: "Soru-Cevap Süzgeci: Sınıfta guslün ve teyemmümün hangi zorlu coğrafya veya durumlarda nasıl kolaylaştırıcı birer rahmet yolu olduğu senaryolar üzerinden masaya yatırılır.",
            quiz: {
              question: "Su bulunmadığı durumlarda temiz toprak veya toprak cinsinden bir maddeyle alınan manevi arınma ve ibadet temizliği hangisidir?",
              options: [
                "Gusül",
                "Teyemmüm",
                "Hadesten Taharet",
                "Necasetten Arınma"
              ],
              correct: "Teyemmüm",
              wisdom: "Mükemmel! Teyemmüm, İslam dininin ne denli kolaylık yansıttığını, zor durumlarda dahi ibadetin engellenemeyeceğini simgeleyen asil bir fıkıh çözümüdür."
            }
          },
          {
            id: "w2_d2_l3",
            lessonNumber: 3,
            title: "Namazın Farzlarını Öğreniyorum/Abdest, Gusül ve Teyemmümün İncelikleri - Bölüm III",
            outcomes: [
              "Abdest, gusül ve teyemmüm ibadetlerinin hayata getirdiği temizlik disiplinini kavrar.",
              "İslam dininin zorlaştıran değil kolaylaştıran 'kolaylık dini' olduğunu gerekçeleriyle açıklar."
            ],
            wisdomNotes: "Peygamberimiz 'Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz, nefret ettirmeyiniz' buyurmuştur. Su yoksa teyemmüm, hasta ise oturarak namaz kılmak, seyahatte ise namazları kısaltmak kolaylık ilkesinin en harika nişaneleridir. Bu ilke bizi ibadetlerimizden koparmayı değil, her şartta Allah'la bağımızı sürdürmeyi amaçlar.",
            interactiveActivity: "Ruhsal ve Maddi Detoks: Abdest alırken yıkanan organların ve yapılan niyetlerin sinir sistemini nasıl yatıştırdığı ve odaklanmayı artırdığı üzerine bilimsel bir inceleme sohbeti yapılır.",
            quiz: {
              question: "Dinimizin zor şartlar altında sunduğu abdest, teyemmüm, seyahat kolaylığı gibi fıkhi ruhsatlar dinimizin hangi temel niteliğini gösterir?",
              options: [
                "Yalnızca kurallardan oluştuğunu",
                "Katı ve tavizsiz bir yapıya sahip olduğunu",
                "Kolaylık ve merhamet dini olduğunu",
                "Sadece kırsal kesime hitap ettiğini"
              ],
              correct: "Kolaylık ve merhamet dini olduğunu",
              wisdom: "Doğru! İslam kolaylık dinidir ve kulunu her koşulda sevgiyle ibadete ulaştıracak açık kapılar bırakır."
            }
          }
        ]
      },
      {
        dayName: "Çarşamba",
        discipline: "SİYER",
        bgGrad: "from-indigo-500 to-purple-600",
        badgeColor: "bg-indigo-100 text-indigo-850",
        lessons: [
          {
            id: "w2_d3_l1",
            lessonNumber: 1,
            title: "Peygamberimize İlk Vahyin Gelişi - Bölüm I",
            outcomes: [
              "Hz. Muhammed'e (s.a.v.) Hira Mağarası'ndaki tefekkür arayışlarını ve derin sorgulamalarını açıklar.",
              "Hira Mağarası'nda gelen ilk vahyin (Alak Suresi 1-5) içeriğini ve bu süreçte Hz. Hatice'nin gösterdiği vefayı ve psikolojik desteği açıklar."
            ],
            wisdomNotes: "Mekke'de zulümlere, putperestliğe ve ahlaki yozlaşmaya şahit olan Sevgili Peygamberimiz, derin tefekkürler yapmak üzere Nur dağındaki Hira Mağarasına çekilirdi. 610 yılında burada Cebrail vasıtasıyla gelen ilk vahiy 'Yaratan Rabbinin adıyla oku!' emriyle başladı. Büyük bir endişeyle eve döndüğünde eşi Hz. Hatice ona olağanüstü bir psikolojik güven sundu.",
            interactiveActivity: "Vefa Canlandırması: Peygamberimiz titreyerek eve geldiğinde Hz. Hatice'nin onun karakterine kefil olarak söylediği sakinleştirici ve vefalı sözler sınıfta okunur ve aile içi dayanışma tartışılır.",
            quiz: {
              question: "Efendimiz vahyin ağırlığıyla ürperdiğinde ona sarılarak: 'Allah seni asla utandırmaz, çünkü sen dürüstsün ve yoksulu gözetirsin' diyerek sarsılmaz güven veren asil eşi kimdir?",
              options: [
                "Hz. Ayşe",
                "Hz. Hatice",
                "Hz. Fatıma",
                "Hz. Zeynep"
              ],
              correct: "Hz. Hatice",
              wisdom: "Harika! Hz. Hatice validemiz sarsılmaz sadakati, vefası ve eşsiz sevgisiyle İslam'ın ilk mümini ve en büyük destekçisi olmuştur."
            }
          },
          {
            id: "w2_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimize İlk Vahyin Gelişi - Bölüm II", // edited test
            outcomes: [
              "İslam'ın Mekke dönemindeki gizli ve açık davet süreçlerini, ilk Müslümanların zorluklara karşı gösterdikleri sabır ve kararlılığı değerlendirir.",
              "Vahyin ilk emri olan 'Oku!' kavramı üzerinden bilgiye, araştırmaya ve okumaya verilen değer işlenir."
            ],
            wisdomNotes: "İlk inen 'Oku!' emri sadece yazıyı değil; kâinat kitabını, yaratılıştaki adaleti ve insanı sevgi diliyle okumayı kapsar. İlk üç yıl boyunca yakın çevreye gizlice yapılan davet, ardından gelen açık tebliğ dönemiyle devam etmiştir. Müslümanlar maruz kaldıkları ambargo, işkence ve zorluklara rağmen sabırla davalarından geri adım atmamışlardır.",
            interactiveActivity: "Bilgi ve Sabır Zinciri: 'Oku' emriyle bilgiye ve bilime yönelen Müslümanların, zorluklar karşısındaki asil sabrını günümüz zorlu hayat tecrübeleriyle eşitleyen bir forum düzenlenir.",
            quiz: {
              question: "İslam'ın ilk emri olan 'Oku!' (Alak Suresi) ifadesi genç bir Müslümana en çok hangi sorumluluğu yükler?",
              options: [
                "Bilgi ve araştırmadan uzak durmayı",
                "İlim öğrenmeyi, dürüstlükle araştırmayı ve kâinatı hikmetle okumayı",
                "Sadece ezgiler ezberlemeyi",
                "Hiçbir şeye karışmadan sessizce beklemeyi"
              ],
              correct: "İlim öğrenmeyi, dürüstlükle araştırmayı ve kâinatı hikmetle okumayı",
              wisdom: "Bravo! İslam ilme, araştırmaya ve dürüst tefekküre can suyu veren, insanı cehaletten koruyan aydınlık bir okuldur."
            }
          },
          {
            id: "w2_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimize İlk Vahyin Gelişi - Bölüm III",
            outcomes: [
              "Zor zamanlarda aile içi dayanışmanın (Hz. Hatice örneği) ve sabrın önemini vurgular.",
              "Dârü'l Erkam mektebinin ilk sivil ahlak akademisi olarak gençlerin omuz omuza vererek dürüstlüğü öğrendikleri kutlu rolünü analiz eder."
            ],
            wisdomNotes: "Zor zamanlarda aile içi dayanışma ve akran desteği en büyük sığınaktır. İlk Müslüman gençlerin baskılara karşı omuz omuza vererek eğitim aldıkları yer, genç sahabe Erkam'ın evi (Dârü'l Erkam) olmuştur. Bu ev, İslam'ın ilk sivil akademi yuvası olup; adalet, ahlak ve sevgi ilkelerini hayata geçirecek kahramanları yetiştirmiştir.",
            interactiveActivity: "Erkam'ın Evi Buluşması: Sınıfta gençlerin kendilerini huzurlu hissettikleri, arkadaşlarıyla felsefi, ahlaki konuları rahatça konuştukları bir akran mektebi modeli kurgulanır.",
            quiz: {
              question: "İslam'ın ilk zulüm ve zorluk dönemlerinde gençlerin omuz omuza vererek ayetleri öğrendiği o asil eğitim merkezinin adı nedir?",
              options: [
                "Darün Nedve",
                "Suffe Mektebi",
                "Dârü'l Erkam (Erkam'ın Evi)",
                "Darüşşafaka"
              ],
              correct: "Dârü'l Erkam (Erkam'ın Evi)",
              wisdom: "Harika! Dârü'l Erkam, gençlerin dayanışması ve eğitim adanmışlığı sayesinde medeniyetimizin ilk kurucu sivil yuvası olmuştur."
            }
          }
        ]
      },
      {
        dayName: "Perşembe",
        discipline: "AHLAK",
        bgGrad: "from-rose-500 to-pink-600",
        badgeColor: "bg-rose-100 text-rose-850",
        lessons: [
          {
            id: "w2_d4_l1",
            lessonNumber: 1,
            title: "Temiz ve Erdemli Olmak - Bölüm 1",
            outcomes: [
              "İslamın temizlik anlayışını sadece maddi boyutla sınırlandırmayıp, manevi temizlikle bütünleştirir.",
              "Kötü söz, dedikodu, ve haset gibi davranışların ruhu kirlettiğini; erdemli olmanın bu kirlerden arınmakla mümkün olduğunu açıklar.",
              "Özellikle 6-8. sınıf düzeyinde sıkça görülen akran zorbalığı, arkadan konuşma ve siber zorbalık gibi durumların önüne geçmek için 'dil ve kalp temizliği' vurgulanır."
            ],
            wisdomNotes: "Temizlik imandandır! Ancak bu temizlik sadece el-yüz yıkamaktan ibaret değildir. Asıl kıymetli temizlik; yalan söylemeyen dürüst bir dil, haset ve gıybet barındırmayan parıl parıl bir kalptir. Sosyal medyada veya okullarda yapılan akran zorbalığı ve siber fısıltılar kalpleri kirletir. Müslüman genç diliyle de kalbiyle de pırıl pırıldır.",
            interactiveActivity: "Siber ve Sözlü Fısıltı Süzgeci: Tahtaya dilimizi ve kalbimizi koruyan üç filtre (Doğru mu? Merhametli mi? Gerekli mi?) çizilir ve akran zorbalığının önüne nasıl geçilebileceği canlandırılır.",
            quiz: {
              question: "Erdemli ve dürüst bir Müslüman genç, okuldaki veya dijital ortamlardaki arkadaşlarına karşı hangisini sergilerse 'dil ve kalp temizliği' yapmış olur?",
              options: [
                "Arkadaşlarının arkasından fısıldamak",
                "Zorbalık ve siber alaylara karşı durup şefkat diliyle yaklaşmak",
                "Haset edip kıskançlık beslemek",
                "Kötü sözü mizah adı altında yaymak"
              ],
              correct: "Zorbalık ve siber alaylara karşı durup şefkat diliyle yaklaşmak",
              wisdom: "Tebrikler! Gerçek temizlik, dilin kötü sözden, kalbin zulümden ve klavyenin siber zorbalıktan temiz tutulmasıdır."
            }
          },
          {
            id: "w2_d4_l2",
            lessonNumber: 2,
            title: "İyilik Yapmak - Bölüm 2",
            outcomes: [
              "Karşılık beklemeden iyilik yapmanın bireysel mutluluk ve toplumsal dayanışma üzerindeki etkilerini kavrar.",
              "Kötülüğe karşı bile iyilikle mukabele edebilmenin en yüksek ahlaki erdemlerden biri olduğunu değerlendirir.",
              "İyiliğin ticari bir alışveriş olmadığı, insanın kendi yaratılış özüne dönmesini sağlayan manevi bir ihtiyaç olduğu bilinci yerleştirilir."
            ],
            wisdomNotes: "İyilik bir ticaret, çıkar alışverişi veya alkış toplama şovu değildir. Gerçek iyilik; tamamen karşılıksız ve samimi olarak (ihlas ile) yapılır. Kur'an-ı Kerim, kötülüğe karşı en güzel şekilde (iyilikle) karşılık vermemizi söyler. İyilik yapmak, can cana dayanışma tazeleyerek hem kendi iç dünyamızı güldürür hem de toplumu barışa ulaştırır.",
            interactiveActivity: "Karşılıksız İyilik Küpü: Her öğrenci evde veya okulda bu hafta yapacağı, kimsenin bilmeyeceği ve karşılık beklemeyeceği üç gizli iyilik fikrini belirleyerek 'İyilik Kumbarasına' atar.",
            quiz: {
              question: "İslam ahlakına göre bir gencin kötülük yapan birine bile iyilikle ve güzellikle mukabele etmesi hangi yüce erdemi (Kur'an ahlakını) gösterir?",
              options: [
                "Korkaklık hissini",
                "Ticari kazanç beklentisini",
                "En yüksek ahlaki olgunluk ve asalet gücünü",
                "Çıkar ilişkisini"
              ],
              correct: "En yüksek ahlaki olgunluk ve asalet gücünü",
              wisdom: "Mükemmel! Kötülüğe karşı en güzel ahlakla ve iyilikle cevap vermek, nefreti dosta çeviren kurucu ve kalıcı bir erdemdir."
            }
          },
          {
            id: "w2_d4_l3",
            lessonNumber: 3,
            title: "Doğru ve Güvenilir Olmak - Bölüm 3",
            outcomes: [
              "Söz, iş ve davranışlarda dürüstlüğü rehber edinir; yalan ve aldatmanın toplumsal güven sermayesini nasıl yok ettiğini analiz eder.",
              "Hz.Muhammed'in gençlik yıllarındaki Muhammed'ül-Emin (güvenilir) Oluşunu örnek alarak emanet bilincini kavrar.",
              "Günümüz dijital dünyasında dürüstlüğün niçin en büyük karakter gücü (güven lini) olduğu somutlaştırılır."
            ],
            wisdomNotes: "Peygamberimiz gençliğinde dürüstlüğü ve adaleti sebebiyle tüm Mekkeliler tarafından 'Muhammed'ül-Emin' (Son derece güvenilen dürüst kimse) olarak isimlendirilmişti. Yalan söylemek, hile yapmak toplumsal güven sermayesini baltalar. Günümüzde dijital çağda hesap açarken veya oyun oynarken bile sözünün eri olmak dürüst insanın en parlak karakter gücüdür.",
            interactiveActivity: "Muhammed'ül-Emin İzleri: Dijital dünyada dürüstlük, emaneti koruma ve yalan haberlerin önlenmesi üzerine, bir 'Güven Karakteri Sözleşmesi' maddeleri tasarlanır.",
            quiz: {
              question: "Mekkelilerin henüz peygamber olmadan dahi Efendimize yakıştırdığı, güvenirliği simgeleyen asil unvan hangisidir?",
              options: [
                "Muhammed'üş-Şerif",
                "Muhammed'ül-Emin (Güvenilir Muhammed)",
                "Muhammed'ül-Gani",
                "Muhammed'ül-Adil"
              ],
              correct: "Muhammed'ül-Emin (Güvenilir Muhammed)",
              wisdom: "Süpersiniz! Muhammed'ül-Emin, güvenilirliği en zor anlarda bile muhafaza edebilmenin şanlı tarihî mührüdür."
            }
          }
        ]
      }
    ]
  },
  {
    weekNum: 3,
    dateRange: "20 - 24 Temmuz",
    title: "3. HAFTA: Rehber Kitaplar ve Peygamberler",
    summary: "İlahi kitaplar, peygamberlerin ortak sıfatları, namaz ibadetinin incelikleri ve çalışma ahlakı.",
    days: [
      {
        dayName: "Pazartesi",
        discipline: "İTİKAD",
        bgGrad: "from-teal-500 to-emerald-600",
        badgeColor: "bg-teal-100 text-teal-850",
        lessons: [
          {
            id: "w3_d1_l1",
            lessonNumber: 1,
            title: "Kitaplara İnanıyorum - Bölüm 1",
            outcomes: [
              "Vahiy, suhuf ve ilahi kitap kavramlarının anlamlarını açıklar.",
              "Dört büyük ilahi kitabı ve bu kitapların gönderildiği peygamberleri doğru şekilde eşleştirir."
            ],
            wisdomNotes: "İlahi kitaplar sevgi ve adalet kılavuzlarıdır. Gönderilen küçük sayfalara 'Suhuf' denir. Dört büyük kitap: Tevrat (Hz. Musa), Zebur (Hz. Davud), İncil (Hz. İsa) ve Kur'an-ı Kerim'dir. Kitaplar nerede karanlık haksızlık varsa oraya adalet ışığı saçmak için gönderilmiştir.",
            interactiveActivity: "Eşleştirme Kartları: Akıllı tahtaya kitapların isimlerini ve peygamberlerini yazıp çizgilerle birleştirin.",
            quiz: {
              question: "Şanlı kitaplarımızdan Zebur hangi peygamberimize vahyolunmuştur?",
              options: [
                "Hz. Musa",
                "Hz. Davud",
                "Hz. İbrahim",
                "Hz. İsa"
              ],
              correct: "Hz. Davud",
              wisdom: "Harika! Zebur, dertli nağmeleriyle davudi sesi olan Hz. Davud a.s.'a gönderilmiş kutsal rehberdir."
            }
          },
          {
            id: "w3_d1_l2",
            lessonNumber: 2,
            title: "Kitaplara İnanıyorum - Bölüm 2",
            outcomes: [
              "Son, bozulmamış evrensel rehber olan Kur'an-ı Kerim'in evrensel ve değişmeyen yapısını analiz eder.",
              "Kur'an okumanın, anlamanın ve üzerinde dürüstçe derin tefekkür etmenin hayatımızdaki rehber niteliğini kavrar."
            ],
            wisdomNotes: "Kur'an-ı Kerim, peygamberimiz aracılığıyla gelen son evrensel rehberdir. O hiçbir değişikliğe uğramadan günümüze kadar korunmuştur. Kur'an sadece ezberlenmek için değil, dürüstçe yaşamak, kâinatı bilimle anlamlandırmak ve insanlara merhamet etmek için inmiş bir sevgi anayasasıdır.",
            interactiveActivity: "Grup Keşfi: Kur'an'dan adalet ve çevre ile ilgili birer ayetin Türkçe karşılığını akıllı tahtada okuyarak yorumlayın.",
            quiz: {
              question: "Kur'an-ı Kerim'in evrensel ve değişmeyen bir rehber olmasının asıl sebebi nedir?",
              options: [
                "Sadece tarih hikayeleri içermesidir",
                "Bozulmadan, her zamana hitap eden dürüstlük, adalet ve sevgi mesajlarını muhafaza etmesidir",
                "Sadece belli bir millete hitap etmesidir",
                "Zor anlaşılır kelimelerden oluşmasıdır"
              ],
              correct: "Bozulmadan, her zamana hitap eden dürüstlük, adalet ve sevgi mesajlarını muhafaza etmesidir",
              wisdom: "Bravo! Kur'an evrenseldir; tüm çağlardaki insanları sömürüden koruyup saygınlığa, adalete ulaştırır."
            }
          },
          {
            id: "w3_d1_l3",
            lessonNumber: 3,
            title: "Kitaplara İnanıyorum - Bölüm 3",
            outcomes: [
              "İlahi kitapların, insanlığın yolunu aydınlatmak ve adaletli bir toplum düzeni kurmak için gönderilen merhamet dolu kılavuzlar olduğunu fark eder.",
              "Kutsal kitapların gönderiliş amaçlarının dünyada dürüstlük, hak, adalet ve sevgiyi egemen kılmak olduğunu kavrar."
            ],
            wisdomNotes: "Rabbimizin gönderdiği kutsal kitaplar, insanlığı karanlıklardan aydınlığa çıkarmak üzere lütfedilmiş birer merhamet kılavuzudur. Onlar sadece birer inanç kitabı değil; insan haklarını koruyan, zayıf ve mazlumu gözeten, adil bir toplumsal düzen kurmamızı emreden canlı ahlak manifestolarıdır. Kutsal kitapları okumak, dünyayı dürüstlük ve sevgiyle güzelleştirmek için bize büyük bir sorumluluk yükler.",
            interactiveActivity: "Hoca Müzakeresi: 'İlahi kitapların getirdiği adalet ilkeleri olmasaydı insan ilişkileri ve toplumsal düzen nasıl etkilenirdi?' konusunu tartışıp anahtar kavramları tahtaya yazın.",
            quiz: {
              question: "Yüce yaratıcının tarih boyunca insanlığa ilahi kitaplar göndermesinin asıl merhamet dolu amacı nedir?",
              options: [
                "İnsanların arasını açarak onları gruplara bölmek",
                "İnsanlığın yolunu aydınlatmak, adaletli ve şefkatli bir toplum düzeni kurulmasını sağlamak",
                "Sadece ezber yapılıp sınavlar kazanılması içindir",
                "Toplumsal hayattan tamamen soyutlanmayı emretmektir"
              ],
              correct: "İnsanlığın yolunu aydınlatmak, adaletli ve şefkatli bir toplum düzeni kurulmasını sağlamak",
              wisdom: "Harika! İlahi kitaplar birer sevgi, şefkat ve adalet feneridir. O fenerin ışığında yürüyen her genç, insanlığa dürüstçe faydalı bir ahlak abidesi haline gelir."
            }
          }
        ]
      },
      {
        dayName: "Salı",
        discipline: "İBADET",
        bgGrad: "from-amber-500 to-orange-600",
        badgeColor: "bg-amber-100 text-amber-850",
        lessons: [
          {
            id: "w3_d2_l1",
            lessonNumber: 1,
            title: "Namaz Kılıyorum - Bölüm 1",
            outcomes: [
              "Beş vakit namazın rekat yapılarını, sünnet ve farz ayrımını, kılınış safhalarını eksiksiz şekilde sıralar.",
              "Namazların günlük hayatımızı planlamadaki ve zamanımızı disipline etmedeki önemini fark eder."
            ],
            wisdomNotes: "Namaz, günde beş vakit Yaratıcımızla kurduğumuz en şerefli ve huzurlu randevudur. Sabah (4 rekat), Öğle (10 rekat), İkindi (8 rekat), Akşam (5 rekat) ve Yatsı (13 rekat) namazlarının kendilerine özel sünnet ve farz rekat dağılımları bulunur. Vakit planlaması, genç bir insanın hayatını muazzam bir zaman yönetimi ve disiplinle düzene sokar, ona manevi bir dinginlik verir.",
            interactiveActivity: "Rekat Eşleştirme Atlası: Sınıf tahtasında 5 vakit namazın rekat sayılarını ve farz-sünnet oranlarını eşleştirecek dürüst bir yarışma düzenleyin.",
            quiz: {
              question: "Sabah ve Akşam namazlarının farz rekat sayıları sırasıyla aşağıdakilerden hangisidir?",
              options: [
                "2 rekat farz - 3 rekat farz",
                "4 rekat farz - 2 rekat farz",
                "2 rekat farz - 4 rekat farz",
                "3 rekat farz - 4 rekat farz"
              ],
              correct: "2 rekat farz - 3 rekat farz",
              wisdom: "Bravo! Sabah namazının farzı 2, Akşam namazının farzı ise 3 rekattır. Bu asil ibadetler kalbimizi güne başlarken ve günü bitirirken huzurla doldurur."
            }
          },
          {
            id: "w3_d2_l2",
            lessonNumber: 2,
            title: "Namaz Kılıyorum - Bölüm 2",
            outcomes: [
              "Cemaatle namaz kılmanın, cuma ve bayram namazlarının toplumsal bütünleşmeye ve sosyalleşmeye katkısını fıkhî gerekçeleriyle değerlendirir.",
              "Birlikte ibadet etmenin bencillik duygusunu kırıp kardeşlik ve empati bağlarını güçlendirdiğini keşfeder."
            ],
            wisdomNotes: "Namaz sadece bireysel bir arınma değil; omuz omuza saf tutarak bencilce ayrışmayı önleyen harika bir sosyalleşme okuludur. Cemaatle kılınan vakit namazları, haftalık buluşma olan Cuma namazı ve yılda iki defa neşeyle kılınan Bayram namazları; toplumun her kesiminden insanı eşitler, zengin ile fakiri yan yana getirir ve aramızdaki dargınlıkları bitirerek kardeşlik bilincini coşturur.",
            interactiveActivity: "Drama Seansı: Camide veya cemaat ortamlarında tanışıp birbirinin derdiyle dertlenen iki farklı kuşaktan gencin yardımlaşma sohbetini sınıfta canlandırın.",
            quiz: {
              question: "Müslümanların haftalık olarak omuz omuza verip toplumsal bütünleşmeyi ve kardeşliği pekiştirdikleri, kılınması farz olan namaz hangisidir?",
              options: [
                "Teravih Namazı",
                "Cuma Namazı",
                "Bayram Namazı",
                "Teheccüd Namazı"
              ],
              correct: "Cuma Namazı",
              wisdom: "Mükemmel! Cuma namazı haftalık kutlu ve sivil bir buluşmadır; dürüst inananların kucaklaşıp toplumsal dayanışma tazeledikleri asil bir bayramdır."
            }
          },
          {
            id: "w3_d2_l3",
            lessonNumber: 3,
            title: "Namaz Kılıyorum - Bölüm 3",
            outcomes: [
              "Namaz kılmanın insanı kötülüklerden, haksızlıklardan ve tüm çirkin davranışlardan uzak tutan ahlaki bir zırh olduğunu kavrar.",
              "Namazdaki rüku ve secde gibi fiziksel duruşların, kibirsiz ve dürüst bir insan karakteri inşa etmedeki psikolojik etki ve dürüstlüğünü analiz eder."
            ],
            wisdomNotes: "Rabbimiz Kur'an'da: 'Şüphesiz namaz, insanı hayasızlıktan ve kötülükten alıkoyar' (Ankebut 45) buyurmaktadır. Günde 5 kez yapılan secde, insandaki kibri ve bencilliği eritir. Gerçek bir namaz, sadece bir ritüel değil; dükkanda yalan söylemeyi engelleyen, okulda arkadaşlarımıza kaba davranmamızı önleyen, siber zorbalık yapmaktan bizi alıkoyan sarsılmaz bir ahlak muhafızıdır.",
            interactiveActivity: "Hoca Sual Atölyesi: 'Bir insan günde beş vakit namaz kıldığı halde başkalarının haklarını gasbediyorsa, namazın ahlaki dönüşüm sırrında ne gibi bir eksiklik vardır?' sorusunun müzakeresini yapın.",
            quiz: {
              question: "Ankebut Suresi 45. ayete göre namaz ibadetinin dürüst bir Müslümanın amelleri ve ahlakı üzerindeki asıl koruyucu etkisi nedir?",
              options: [
                "İnsanı diğer insanlardan tamamen üstün kılmaktır",
                "İnsanı her türlü kötülükten, hayasızlıktan ve haksızlıktan alıkoymasıdır",
                "Sadece fiziksel bir zindelik kazandırmasıdır",
                "Maddi kazanç yollarını kolaylaştırmasıdır"
              ],
              correct: "İnsanı her türlü kötülükten, hayasızlıktan og haksızlıktan alıkoymasıdır",
              wisdom: "Süpersiniz! Dosdoğru kılınan namaz, insan karakterini koruyan og kötülüklere geçit vermeyen bir ahlak zırhıdır."
            }
          }
        ]
      },
      {
        dayName: "Çarşamba",
        discipline: "SİYER",
        bgGrad: "from-indigo-500 to-purple-600",
        badgeColor: "bg-indigo-100 text-indigo-850",
        lessons: [
          {
            id: "w3_d3_l1",
            lessonNumber: 1,
            title: "Peygamberimizin Hicreti - Bölüm 1",
            outcomes: [
              "Hicret'in dini, sosyal ve siyasi nedenlerini analiz ederek İslam tarihinin seyrini nasıl değiştirdiğini fark eder.",
              "Müslümanların maruz kaldığı ağır haksızlıklar karşısında inanç hürriyeti için göç etme hakkını kavrar."
            ],
            wisdomNotes: "Mekke'de zulüm ve baskılar dayanılmaz boyuta ulaşınca, Peygamberimiz ve Müslümanlar 622 yılında inançlarını dürüstçe yaşamak üzere Medine'ye göç etti. Buna 'Hicret' denir. Hicret kuru bir kaçış değil; adalet, özgürlük ve barış dolu yeni bir toplumu (Medine barışı) inşa etme yolculuğudur.",
            interactiveActivity: "Zaman Çizelgesi: Sınıf tahtasına Mekke ve Medine noktalarını çizip, hicret kararının sosyolojik sebeplerini yazın.",
            quiz: {
              question: "İslam tarihinde 622 yılında gerçekleşen ve inanç özgürlüğü mücadelesinin dönüm noktası kabul edilen göç olayına ne denir?",
              options: [
                "Veda Haccı",
                "Hicret",
                "İstişare",
                "Hilfü'l-Fudûl"
              ],
              correct: "Hicret",
              wisdom: "Harika! Hicret, yeni kutsal fidanların tutunması, adaletin ve barışın Medine toprağında filizlenmesi hareketidir."
            }
          },
          {
            id: "w3_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Hicreti - Bölüm 2",
            outcomes: [
              "Mekke'den Medine'ye göç esnasında vefasıyla öne çıkan sarsılmaz dostluk değerini ve sadakati (Hz. Ebubekir) kavrar.",
              "Hz. Ali'nin peygamberin can emniyeti için gösterdiği büyük cesaretini ve ilk kurulan Kuba Mescidi'nin tarihsel dönüm noktasını açıklar."
            ],
            wisdomNotes: "Hicret yolculuğunda sevgili Ebubekir, peygamberin sarsılmaz dostu ('sadakat timsali') olarak Sevr mağarasında ona can yoldaşlığı yaptı. Hz. Ali ise peygamberin yatağına canı pahasına uzanarak müşrikleri oyaladı ve büyük cesaret gösterdi. Kuba köyünde de İslam'ın ilk mescidi olan Kuba Mescidi inşa edilerek dinin kolektif kimliği taçlandırılmıştır.",
            interactiveActivity: "Diyalog Köşesi: 'Dostunun zor zamanında canı pahasına ona yardım etmek günümüze sarsılmaz bir sadakatle nasıl yansır?' sınıfta tartışın.",
            quiz: {
              question: "Müşrikleri şaşırtmak için canı pahasına peygamberimizin yatağına yatarak inanılmaz bir yiğitlik gösteren o genç kahraman kimdir?",
              options: [
                "Hz. Osman",
                "Hz. Ebubekir",
                "Hz. Ali",
                "Hz. Ömer"
              ],
              correct: "Hz. Ali",
              wisdom: "Bravo! Hz. Ali sevgisi ve korkusuz cesaretiyle genç neslimize dürüst adanmışlığın en harika sembolüdür."
            }
          },
          {
            id: "w3_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimizin Hicreti - Bölüm 3",
            outcomes: [
              "Zorluklar ve baskılar karşısında pes etmeyip her zaman dürüst ve yapıcı yeni çözüm yolları aramayı (Hicret vizyonu) örnek alır.",
              "Planlamadaki tedbir ile Allah'a duyulan tevekkül dengesini ve dostlukta sadakat değerini kavrar."
            ],
            wisdomNotes: "Hicret yolculuğu, baştan sona kusursuz bir planlama (tedbir) ve sonsuz bir güvenin (tevekkül) şanlı hikayesidir. Peygamberimiz yola çıkmadan önce en ince ayrıntısına kadar tüm lojistik tedbirleri almış (yol rehberleri tutulmuş, gizli güzergahlar seçilmiş, takip edilmesin diye Sevr mağarasına sığınılmış), ardından sonucu Allah'a bırakmıştır. Karşımıza çıkan engellerde küsüp kenara çekilmek yerine, hicret bilinciyle yeni dürüst og meşru çıkış kapıları inşa etmek ahlakımızdır.",
            interactiveActivity: "Strateji og Hedef Atölyesi: Hayatta karşılaştığınız zorluklarda 'Karamsar olmak yerine pes etmeyip yeni bir sayfa açarak çözüm üretmek' üzerine birer cümle yazıp tahtada okuyun.",
            quiz: {
              question: "Peygamberimizin Hicret esnasında yola çıkmadan önce tüm emniyet og lojistik hazırlıklara dikkat etmesi, ardından Yaratıcıya sığınması hangi ahlaki dengeyi mükemmel şekilde gösterir?",
              options: [
                "Hiçbir tedbir almadan tamamen boş vermeyi",
                "Önce hakkıyla tedbir alıp, sonra sonsuz bir dürüst tevekkülle Allah'a güvenme dengesini",
                "Korkarak geri çekilmeyi",
                "Her şeyi yalnız kendi gücüyle çözdüğünü sanmayı"
              ],
              correct: "Önce hakkıyla tedbir alıp, sonra sonsuz bir dürüst tevekkülle Allah'a güvenme dengesini",
              wisdom: "Tebrikler! Doğru tevekkül; üzerimize düşen her türlü dürüst planlama og tedbiri sergiledikten sonra sonucun huzurunu Allah'a teslim etmektir."
            }
          }
        ]
      },
      {
        dayName: "Perşembe",
        discipline: "AHLAK",
        bgGrad: "from-rose-500 to-pink-600",
        badgeColor: "bg-rose-100 text-rose-850",
        lessons: [
          {
            id: "w3_d4_l1",
            lessonNumber: 1,
            title: "Paylaşmak ve Yardımlaşmak - Bölüm 1",
            outcomes: [
              "Paylaşma ve yardımlaşmanın infak, sadaka ve vakıf kültürü üzerinden toplumsal adaleti ve barışı nasıl inşa ettiğini açıklar.",
              "Maddi imkanların yanı sıra bilgisini, zamanını, sevincini ve dertlerini paylaşmanın da yardımlaşma olduğunu kavrar.",
              "Bencillik ve aşırı tüketim çağında, elindekini paylaşmanın eksiltmediğini aksine çoğalttığını fark eder."
            ],
            wisdomNotes: "Sevdiğimiz şeylerden başkalarına da ikram etmeye, paylaşmaya 'İnfak' denir. İslam cimriliği yasaklar. Paylaşmak malı azaltmaz, aksine bereketlendirir ve yoksulluk nedeniyle oluşabilecek kin ve huzursuzluğu siler. Yarım hurma ile dahi olsa iyilik yapmak ahlakımızdır.",
            interactiveActivity: "İyilik Kumbarası: Sınıfla beraber bir 'Paylaşım Sandığı' veya kitap paylaşım köşesi kurarak pratik uygulamasını yapın.",
            quiz: {
              question: "Sevdiğimiz maddi ve manevi nimetlerden, arkadaş ve yoksullarla samimiyetle paylaşmaya ne denir?",
              options: [
                "Hasılat",
                "Cimrilik",
                "İnfak / Sadaka",
                "Gıybet"
              ],
              correct: "İnfak / Sadaka",
              wisdom: "Harika! İnfak etmek, kalbimizdeki paraya, maddeye olan hırs zincirini kırarak yüreğimizi sevgiyle özgürleştirir."
            }
          },
          {
            id: "w3_d4_l2",
            lessonNumber: 2,
            title: "Alın Teri ve Helal Kazanç - Bölüm 2",
            outcomes: [
              "İslam'ın emek sarf etmeye, alın terine ve helal kazanca verdiği değeri kavrar.",
              "Rüşvet, hırsızlık ve haksız kazanca karşı net bir duruş sergiler."
            ],
            wisdomNotes: "En kazanımlı yiyecek, insanın kendi eliyle kazandığı helal rızkıdır. İslam başkalarının hakkını gasp etmeyi, rüşvet ve emek hırsızlığını kesinlikle haram sayar. Dürüstçe çalışıp üretmek, sadece kendimize değil topluma da katma değer sunan bir ibadet değerindedir.",
            interactiveActivity: "Rol Oynaması: Bir esnafın sınavı: 'Müşteriye malın kusurunu dürüstçe anlatan bir satıcı karakteri' sınıfta canlandırın.",
            quiz: {
              question: "Sevgili peygamberimizin alın teriyle helal kazanmanın önemi hakkındaki meşhur ahlak ilkesi nedir?",
              options: [
                "Hiç çalışmadan sadece şans oyunları oynamaktır",
                "Hiç kimse elinin emeğinden, alın terinden daha hayırlı bir lokma yememiştir",
                "En kısa yoldan hileyle çok para kazanmaktır",
                "Maddi zenginliğin hiçbir önemi yoktur"
              ],
              correct: "Hiç kimse elinin emeğinden, alın terinden daha hayırlı bir lokma yememiştir",
              wisdom: "Bravo! Alın teri dökerek onuruyla ekmeğini kazanmak Müslüman gencin en şerefli karakter kalkanıdır."
            }
          },
          {
            id: "w3_d4_l3",
            lessonNumber: 3,
            title: "Doğru Tevekkül Bilinci - Bölüm 3",
            outcomes: [
              "Doğru tevekkül ile tembellik (hazıra konma) arasındaki farkı kavrar.",
              "Önce elinden gelen tüm çalışmayı yapıp ardından sonucu Allah'a bırakmanın huzurunu kavrar."
            ],
            wisdomNotes: "Çalışmadan, emek vermeden 'ben tevekkül ediyorum' diyerek beklemek tembelliktir, uyuşukluktur. Tevekkül; önce tarlayı sürmek, tohumu ekmek, sulamak, tüm dürüst emeği vermek ve ardından sonucu Allah'a bırakıp güvenmektir. Biz gayreti yapmakla, tohumu ekmekle mükellefiz.",
            interactiveActivity: "Hoca Sual Yolu: Sınıfa sorun: 'Sınava hiç çalışmadan sadece dua ederek girmek bir tevekkül müdür yoksa tevekkülün yanlış anlaşılması mıdır?'",
            quiz: {
              question: "İşlerimizi yürütürken her türlü yapıcı gayreti göstermek, alın terini akıtmak ve ardından hayırlı sonucu Allah'a bırakıp güvenmek ilkesine ne ad verilir?",
              options: [
                "Hançerlik",
                "Yanlış Tevekkül",
                "Gerçek Tevekkül",
                "Tembellik"
              ],
              correct: "Gerçek Tevekkül",
              wisdom: "Harika! Doğru tevekkül, üzerimize düşen tüm çalışmayı yapıp sonucu gönül rahatlığıyla Rabbimize teslim etmektir."
            }
          }
        ]
      }
    ]
  },
  {
    weekNum: 4,
    dateRange: "27 - 31 Temmuz",
    title: "4. HAFTA: Peygamberlerin İzinde ve İbadet Hayatımız",
    summary: "Peygamberlere iman ve sıfatları, oruç ve zekat ibadetleri, Peygamberimizin Medine hayatı ile haya, alay etmeme ve arkadaşlık ahlakı.",
    days: [
      {
        dayName: "Pazartesi",
        discipline: "İTİKAD",
        bgGrad: "from-teal-500 to-emerald-600",
        badgeColor: "bg-teal-100 text-teal-850",
        lessons: [
          {
            id: "w4_d1_l1",
            lessonNumber: 1,
            title: "Peygamberlere İnanıyorum 1",
            outcomes: [
              "Peygamberlik (nübüvvet/risalet) kurumunun amacını ve insanlık tarihi için önemini açıklar."
            ],
            wisdomNotes: "Peygamberlik (nübüvvet ve risalet), Allah'ın insanlara doğru yolu göstermek için seçtiği elçiler göndermesidir. Tarih boyunca peygamberler olmasaydı, insanlar iyi ile kötüyü, adalet ile zulmü ayırt etmekte zorlanırlardı. Peygamberler insanlık tarihinin kutlu öğretmenleridir.",
            interactiveActivity: "Rehber Arama Atölyesi: Yabancı bir şehirde yönümüzü bulmaya çalışırken haritaya veya rehbere duyduğumuz ihtiyaç ile hayat yolculuğunda peygamberlere duyduğumuz ihtiyaç kıyaslanır.",
            quiz: {
              question: "Allah'ın insanlara emirlerini bildirmek ve onlara rehberlik etmek için elçiler göndermesine din dilinde ne ad verilir?",
              options: [
                "Nübüvvet / Risalet (Peygamberlik)",
                "Mizan",
                "Muâhat",
                "İstişare"
              ],
              correct: "Nübüvvet / Risalet (Peygamberlik)",
              wisdom: "Tebrikler! Nübüvvet ve risalet, Allah'ın insanlara olan sonsuz merhametinin ve rehberliğinin en büyük göstergesidir."
            }
          },
          {
            id: "w4_d1_l2",
            lessonNumber: 2,
            title: "Peygamberlere İnanıyorum 2",
            outcomes: [
              "Peygamberlerin beş temel ortak sıfatını (sıdk, emanet, fetanet, ismet, tebliğ) hayatlarından somut ahlaki örneklerle analiz eder."
            ],
            wisdomNotes: "Tüm peygamberlerin ortak beş temel sıfatı vardır: Sıdk (doğruluk), Emanet (güvenilirlik), Fetanet (üstün zeka), İsmet (günahsızlık) ve Tebliğ (mesajı ulaştırma). Bu beş sıfat, dürüst bir insan karakterinin asil kurucu taşlarıdır.",
            interactiveActivity: "Sıfat Kartları Keşfi: Sıdk, Emanet, Fetanet, İsmet ve Tebliğ sıfatlarını anlatan kartlar sınıfta paylaştırılarak her sıfatın ahlaki önemi üzerine konuşulur.",
            quiz: {
              question: "Peygamberlerin en önemli ortak sıfatlarından olan ve 'en son derece güvenilir olmak, emanete hıyanet etmemek' anlamına gelen sıfat hangisidir?",
              options: [
                "Tebliğ",
                "Emanet",
                "İsmet",
                "Fetanet"
              ],
              correct: "Emanet",
              wisdom: "Harika! Emanet sıfatı, peygamberlerin her koşulda güvenilir olduğunu ifade eder. Müslüman gencin de en büyük süsü güvendir."
            }
          },
          {
            id: "w4_d1_l3",
            lessonNumber: 3,
            title: "Peygamberlere İnanıyorum 3",
            outcomes: [
              "Peygamberlerin sadece geçmişte yaşamış tarihi elçiler değil; dürüstlükleri (sıdk), üstün zekaları (fetanet) ve güvenilirlikleri (emanet) ile günümüz gençlerine yön veren en kusursuz canlı rol modeller olduğunu kavrar."
            ],
            wisdomNotes: "Peygamberler sadece tarih sayfalarında kalmış şahsiyetler değildir. Onların dürüstlükleri (sıdk), üstün zekaları (fetanet) ve güvenilirlikleri (emanet) bugün bizim için de en modern ve kusursuz canlı rol modellerdir. Onları örnek alan bir genç, toplumun en parlak yıldızı olur.",
            interactiveActivity: "Canlı Rol Model Sohbeti: Sosyal medyadaki geçici fenomenler ile peygamberlerin kalıcı ahlaki rol modellikleri arasındaki farklar üzerine sınıfta müzakere yapılır.",
            quiz: {
              question: "Peygamberlerin dürüstlük (sıdk) ve güvenilirlik (emanet) gibi sıfatlarını hayatına yansıtan modern bir gencin toplumda kazanacağı en büyük değer hangisidir?",
              options: [
                "Toplumun güvenini ve saygınlığını kazanarak örnek bir şahsiyet olmak",
                "Herkesi kandırabileceğini sanmak",
                "Yalnızlık içinde kalmak",
                "Sorumluluklarından tamamen kaçmak"
              ],
              correct: "Toplumun güvenini ve saygınlığını kazanarak örnek bir şahsiyet olmak",
              wisdom: "Bravo! Peygamberlerin sıfatları günümüz gençliğine en modern ve kalıcı asalet rehberidir."
            }
          }
        ]
      },
      {
        dayName: "Salı",
        discipline: "İBADET",
        bgGrad: "from-amber-500 to-orange-600",
        badgeColor: "bg-amber-100 text-amber-850",
        lessons: [
          {
            id: "w4_d2_l1",
            lessonNumber: 1,
            title: "Oruç tutuyorum 1",
            outcomes: [
              "Oruç ibadetinin anlamını, şartlarını, imsak ve iftar kavramlarını açıklar; orucu bozan ve bozmayan durumları fıkhî açıdan ayırt eder."
            ],
            wisdomNotes: "Oruç, imsak vaktinden akşam ezanına kadar ibadet niyetiyle yeme, içme ve orucu bozan durumlardan uzak durmaktır. Orucun şartları niyettir. Orucu bozan şeyler bilerek yemek-içmektir; unutarak yemek veya içmek ise orucu bozmaz. Dinimiz ibadetlerde niyet ve bilinci ön planda tutar.",
            interactiveActivity: "Fıkıh Bilgi Kartları: Sınıfta orucu bozan ve bozmayan durumlar üzerine hızlı soru-cevap kartları eşleştirilir.",
            quiz: {
              question: "Oruçlu olduğunu tamamen unutarak bir bardak su içen bir gencin orucu hakkında fıkhi hüküm nedir?",
              options: [
                "Orucu bozulmaz, hatırladığı andan itibaren tutmaya devam eder",
                "Orucu hemen bozulur ve ceza gerekir",
                "Orucu bozulur ama sadece kaza eder",
                "Namaz kılarak telafi etmelidir"
              ],
              correct: "Orucu bozulmaz, hatırladığı andan itibaren tutmaya devam eder",
              wisdom: "Mükemmel! Peygamberimiz unutarak yiyip içmenin Allah'ın bir ikramı olduğunu ve orucu bozmadığını müjdelemiştir."
            }
          },
          {
            id: "w4_d2_l2",
            lessonNumber: 2,
            title: "Oruç tutuyorum 2",
            outcomes: [
              "Ramazan ayı, sahur, teravih, mukabele, fitre ve mahya gibi kavramların kültürel ve dini değerini toplumsal empati bağlamında analiz eder.",
              "Aç kalmanın ötesinde; dilini kötü sözden, nefsini aşırılıklardan koruma (manevi oruç) ve imkanı olmayan insanların durumunu bizzat yaşayarak anlama (empati) duygusunu kazanır."
            ],
            wisdomNotes: "Oruç sadece mideye değil; gözümüze, kulağımıza ve özellikle dilimize kötü söz söyletmeyerek tutturulan manevi bir detokstur. Ramazan ayındaki sahur, teravih, mukabele, fitre ve mahya kültürü bizi birleştirir. Aç kalarak yoksul insanların hallerini anlar, empati kurarız.",
            interactiveActivity: "Manevi Filtre Egzersizi: Günlük hayatta akran zorbalığı veya kötü söz söyleme dürtüsüne karşı oruç bilinciyle nasıl sabır geliştireceğimizi canlandıran drama yapılır.",
            quiz: {
              question: "Oruç tutan bir gencin sadece aç kalmayıp, dilini kötü sözlerden ve arkadaşlarını kırmaktan (gıybet, alay) korumasına ne ad verilir?",
              options: [
                "Manevi oruç (irade terbiyesi)",
                "Formel namaz",
                "Hızlı diyet",
                "Suffe eğitimi"
              ],
              correct: "Manevi oruç (irade terbiyesi)",
              wisdom: "Harika! Oruç, beden ve ruh bütünlüğüyle tutulduğunda kalbi ve karakteri aydınlatan gerçek bir irade mektebidir."
            }
          },
          {
            id: "w4_d2_l3",
            lessonNumber: 3,
            title: "Zekatı Öğreniyorum",
            outcomes: [
              "Zekat ve sadaka ibadetinin toplumsal adaleti sağlamadaki rolünü kavrar.",
              "Kimlerin hangi mallardan ne oranda zekat vereceğini basit matematiksel problemlerle hesaplar."
            ],
            wisdomNotes: "Zekat; dinen zengin sayılan Müslümanların yılda bir kez belirli miktardaki mallarını yoksullarla paylaşması farzıdır. Zekat yoksulun hakkıdır, zenginin lütfu değildir. Nakit para, altın ve ticaret mallarında zekat oranı kırkta birdir, yani yüzde iki buçuktur (%2.5). Zekat, toplumdaki ekonomik dengesizlikleri azaltarak toplumsal barışı ve adaleti sağlar.",
            interactiveActivity: "Zekat Hesaplama Atölyesi: Tahtaya 100 bin TL birikimi olan bir gencin vermesi gereken zekat (1/40 hesabı) miktarını sınıfla birlikte hesaplayın.",
            quiz: {
              question: "Müslümanların altın, para ve ticaret mallarından vermesi gereken zekat oranı matematiksel ifadesi nedir?",
              options: [
                "Yarısı (%50)",
                "Kırkta biri (%2.5)",
                "Onda biri (%10)",
                "Beşte biri (%20)"
              ],
              correct: "Kırkta biri (%2.5)",
              wisdom: "Tebrikler! Zekat, toplumdaki uçurumları kapatan, bencilce birikime dur diyen asil bir ekonomik sevgi bağıdır."
            }
          }
        ]
      },
      {
        dayName: "Çarşamba",
        discipline: "SİYER",
        bgGrad: "from-indigo-500 to-purple-600",
        badgeColor: "bg-indigo-100 text-indigo-850",
        lessons: [
          {
            id: "w4_d3_l1",
            lessonNumber: 1,
            title: "Peygamberimizin Medine Hayatı 1",
            outcomes: [
              "Medine döneminde gerçekleştirilen Ensar-Muhacir Kardeşliği'nin (Muahat) toplumsal ve ekonomik işlevini analiz eder."
            ],
            wisdomNotes: "Hicret'ten sonra Mekke'den her şeyini bırakıp gelen Muhacirler ile onlara kucak açan Medineli Ensar arasında 'Muahat' (kardeşlik sözleşmesi) kuruldu. Ensar evlerini, tarlalarını ve aşını Muhacir kardeşleriyle yarı yarıya paylaştı. Bu, dünya tarihinin en büyük toplumsal dayanışma hareketidir.",
            interactiveActivity: "Paylaşım Çemberi: Sınıfta en değerli eşyalarımızdan birini zor durumdaki bir arkadaşımızla nasıl paylaşabileceğimizi Ensar-Muhacir örneği üzerinden konuşuruz.",
            quiz: {
              question: "Hicret sonrasında Medine'de ev sahibi Müslümanlar (Ensar) ile Mekkeli göçmenlerin (Muhacir) kardeş ilan edildiği toplumsal sözleşmeye ne ad verilir?",
              options: [
                "Muahat (Kardeşlik)",
                "Hilfü'l-Fudûl",
                "Medine Vesikası",
                "Arafat Vakfesi"
              ],
              correct: "Muahat (Kardeşlik)",
              wisdom: "Tebrikler! Muahat, bencilce biriktirmeyi değil, kardeşçe paylaşmayı esas alan muhteşem bir sosyal adalet modelidir."
            }
          },
          {
            id: "w4_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Medine Hayatı 2",
            outcomes: [
              "Mescid-i Nebevî'nin bir ibadethane olmanın ötesinde; eğitim (Suffe akademisi), yönetim ve sosyal yardımlaşma merkezi olmasını ve çok kültürlü barış ortamını sağlayan Medine Sözleşmesi'ni yorumlar."
            ],
            wisdomNotes: "Mescid-i Nebevi sadece bir ibadet yeri değildi. Yanındaki 'Suffe' bölümünde kimsesiz ve ilim aşığı gençler yatılı eğitim alırdı. Ayrıca elçilerin kabul edildiği, toplumsal sorunların çözüldüğü ve Medine Sözleşmesi ile Yahudiler, müşrikler ve Müslümanlar arasında barışın imzalandığı anayasal bir merkezdi.",
            interactiveActivity: "Suffe Okulu Canlandırması: Sınıfın bir köşesini Suffe mektebi ilan edip, orada ilim öğrenen genç sahabiler gibi güncel bilim ve ahlak konularını tartışın.",
            quiz: {
              question: "Mescid-i Nebevi'nin yanında kurulan, genç sahabilerin yatılı kalarak ilim öğrendiği ve İslam'ın ilk yatılı yüksekokulu kabul edilen yerin adı nedir?",
              options: [
                "Suffe",
                "Darü'l-Erkam",
                "Minber",
                "Kürsü"
              ],
              correct: "Suffe",
              wisdom: "Bravo! Suffe, ilmin ve güzel ahlakın omuz omuza öğretildiği kutlu bir akademi yuvasıdır."
            }
          },
          {
            id: "w4_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimizin Medine Hayatı 3",
            outcomes: [
              "Paylaşma, misafirperverlik, empati, farklı inanç ve kültürlerle bir arada barış içinde yaşama kültürü ortaokul seviyesine uygun olarak somutlaştırılır."
            ],
            wisdomNotes: "Peygamberimiz Medine'de kurduğu düzende kimseyi inancından dolayı dışlamamıştır. Medine Sözleşmesi ile herkesin din, can ve mal güvenliği anayasal güvence altına alınmıştır. Müslümanlar farklı din ve kültürlerle barış içinde, misafirperverlik ve empatiyle bir arada yaşama kültürünün en güzel örneklerini vermişlerdir.",
            interactiveActivity: "Medine Sözleşmesi Forumu: Farklılıklara saygı gösterip, okulda veya mahallede herkesle barış içinde yaşamak için uymamız gereken 3 temel kuralı tahtada listeleriz.",
            quiz: {
              question: "Medine'de yaşayan Müslümanlar, Yahudiler ve diğer gruplar arasında imzalanan ve inanç hürriyeti ile barışı sağlayan ilk yazılı anayasa hangisidir?",
              options: [
                "Medine Sözleşmesi (Vesikası)",
                "Veda Hutbesi",
                "Hılfü'l-Fudûl",
                "Kuba Beyannamesi"
              ],
              correct: "Medine Sözleşmesi (Vesikası)",
              wisdom: "Harika! Medine Sözleşmesi, farklı inançların adalet ve barış içinde bir arada yaşayabileceğini gösteren insanlık anıtıdır."
            }
          }
        ]
      },
      {
        dayName: "Perşembe",
        discipline: "AHLAK",
        bgGrad: "from-rose-500 to-pink-600",
        badgeColor: "bg-rose-100 text-rose-850",
        lessons: [
          {
            id: "w4_d4_l1",
            lessonNumber: 1,
            title: "UTANMA (HAYA)",
            outcomes: [
              "Haya ve utanma duygusunun insanın onurunu, saygınlığını ve fıtratını koruyan bir kalkan olduğunu kavrar.",
              "Haya duygusunun hem yaratıcıya hem de topluma karşı asil bir duruş olduğunu hadisler ışığında fark eder.",
              "Haya kavramı pasiflik, çekingenlik veya pısırıklık olarak değil; tam aksine insanın kendi özsaygısını korumasını ve kötülüklere karşı asil bir sınır çizmesini sağlayan güçlü bir karakter erdemi olarak işlenir."
            ],
            wisdomNotes: "Haya (utanma), bizi kötülüklere bulaşmaktan koruyan asil bir edep kalkanıdır. Haya çekingenlik veya pısırıklık değildir. Bilakis, kötülüğe, çirkinleşmeye ve saygısızlığa karşı yüreğinde sarsılmaz bir soylu duruş ve karakter sınırı taşımaktır. Haya hem Yaratıcı'ya hem de insanlara karşı bir saygı ifadesidir.",
            interactiveActivity: "Edep Sınırı Analizi: Günlük hayatta ve sosyal medyada saygı sınırlarını korumanın bir gencin karakter gücünü nasıl artırdığını tartışın.",
            quiz: {
              question: "Müslümanın çirkin kelimelerden ve ahlaksız davranışlardan uzak durmasını sağlayan asil edep ve utanma duygusuna ne denir?",
              options: [
                "Haya / Edep",
                "Pısırıklık",
                "Korkaklık",
                "Çekingenlik"
              ],
              correct: "Haya / Edep",
              wisdom: "Tebrikler! Haya, asalet süsüdür. İnsanın kendi onurunu korumasını sağlayan en zarif ahlak bağıdır."
            }
          },
          {
            id: "w4_d4_l2",
            lessonNumber: 2,
            title: "ALAY ETME",
            outcomes: [
              "İnsanların fiziksel özellikleri, kusurları, aksanları veya durumlarıyla alay etmenin ve lakap takmanın bir kul hakkı ihlali olduğunu analiz eder.",
              "Başkalarının onuruna ve kişilik haklarına saygı duymanın dini bir zorunluluk olduğunu kavrar.",
              "Ortaokul çağındaki akran zorbalığının en yaygın türü olan alaycılığın, bireyin ruh dünyasında açtığı derin yaralar empati yoluyla gösterilir. İslam'ın insan onuruna verdiği mutlak değer ön plana çıkarılır."
            ],
            wisdomNotes: "Kur'an-ı Kerim'de 'Bir topluluk diğer toplulukla dalga geçmesin, lakap takmasın' uyarısı vardır. Sınıfta bir arkadaşımızın aksanı, boyu, kilosu veya gözlüğü ile şaka adı altında dalga geçmek ağırca bir 'kul hakkı' ve kalp zorbalığıdır. Ahlaklı insan, herkesin onurunu gözetir.",
            interactiveActivity: "Kul Hakkı ve Zorbalık Forumu: Okulda veya arkadaş ortamlarında şaka zannedilen kelimelerin arkadaşlarımızın dünyasında açtığı yaraları konuşun.",
            quiz: {
              question: "Sınıf içinde arkadaşlarımıza lakaplar takmak ve fiziksel kusurlarıyla dalga geçmek dini açıdan hangi ihlali doğurur?",
              options: [
                "Hafif ve önemsiz bir şakadır",
                "Ağır bir kul hakkı ihlali ve ahlak zafiyetidir",
                "Sorumluluk doğurmayan bir eğlencedir",
                "Sadece öğretmenlerin uyaracağı bir durumdur"
              ],
              correct: "Ağır bir kul hakkı ihlali ve ahlak zafiyetidir",
              wisdom: "Harika! Dinimiz her insanın saygınlığını dokunulmaz kabul eder. Alaycılık, kul hakkı doğuran yıkıcı bir davranıştır."
            }
          },
          {
            id: "w4_d4_l3",
            lessonNumber: 3,
            title: "ARKADAŞLIK AHLAKI",
            outcomes: [
              "Dostluk ve arkadaşlık ilişkilerinde sadakat, dürüstlük, sır tutma, güven ve fedakarlık değerlerini roller üzerinden analiz eder.",
              "İyi ve kötü arkadaş seçiminin insanın karakter gelişimi üzerindeki doğrudan etkilerini ayırt eder.",
              "Ergenlik döneminde akran grubunun etkisinin en üst düzeyde olduğu gerçeğinden hareketle; insanı iyiliğe ve başarıya yönlendiren dostlar seçmenin ve bizzat güvenilir bir dost (Emin) olmanın yolları işlenir."
            ],
            wisdomNotes: "Dostluk ve arkadaşlık ilişkileri güven, dürüstlük ve sır tutma temelleri üzerine kuruludur. Arkadaşımızın yokluğunda onu savunmak sadakat göstergesidir. Doğru arkadaş seçimini yansıtarak ahlaklı karakter edinmek hedeflenir. Peygamberimiz (s.a.v.) ile Hz. Ebubekir'in sarsılmaz dostluğu bu konuda en büyük örneğimizdir.",
            interactiveActivity: "Güven Çemberi: Sınıftaki arkadaşlarınızın dürüstçe takdir ettiğiniz birer güven özelliğini tahtada listeleyin.",
            quiz: {
              question: "Dostluk ilişkisinde dürüst bir Müslüman gencin kesinlikle yapmaması gereken en önemli hata hangisidir?",
              options: [
                "Arkadaşına derslerinde yardım etmek",
                "Arkadaşının sırlarını başkalarına ifşa etmek ve arkasından kötü konuşmak (gıybet)",
                "Arkadaşının başarısını tebrik etmek",
                "Onunla paylaşımda bulunmak"
              ],
              correct: "Arkadaşının sırlarını başkalarına ifşa etmek ve arkasından kötü konuşmak (gıybet)",
              wisdom: "Doğru! Gerçek arkadaşlık güven üzerine kurulur. Sadakat göstermek ve sır tutmak dürüst gencin asalet simgesidir."
            }
          }
        ]
      }
    ]
  },
  {
    weekNum: 5,
    dateRange: "3 - 7 Ağustos",
    title: "5. HAFTA: Ebediyet Yolculuğu ve Güzel Karakter",
    summary: "Ahiret hayatı, kader ve kazaya iman, hac ibadeti ve dua etmenin anlamı, Peygamberimizin örnek kişiliği ile ahlaki sorumluluklarımız.",
    days: [
      {
        dayName: "Pazartesi",
        discipline: "İTİKAD",
        bgGrad: "from-teal-500 to-emerald-600",
        badgeColor: "bg-teal-100 text-teal-850",
        lessons: [
          {
            id: "w5_d1_l1",
            lessonNumber: 1,
            title: "Ahirete İnanıyorum 1",
            outcomes: [
              "Ahiret hayatının temel aşamalarını (berzah, kıyamet, ba's, haşir, mahşer, mizan, cennet ve cehennem) mantıksal ve kronolojik bir sırayla açıklar."
            ],
            wisdomNotes: "Ahiret inancı, insanın dünya hayatına anlam kazandırır. Evrenin yok oluşu ve yeniden dirilişin ardından tüm insanlar ilahi adaletin huzuruna çıkacaktır. Aşamaları: Berzah (kabir hayatı), Kıyamet, Ba's (yeniden diriliş), Haşir ve Mahşer (toplanma alanı), Mizan (amellerin tartılması), Cennet ve Cehennem'dir.",
            interactiveActivity: "Ahiret Hayatı Aşamaları: Sınıfta berzah, kıyamet, ba's, mahşer, mizan ve cennet/cehennem kavramlarını kronolojik olarak tahtada sıralama ve kart eşleştirme oyunu oynanır.",
            quiz: {
              question: "Ahiret hayatında insanların hesaba çekilmek üzere toplanacağı o büyük meydana ne ad verilir?",
              options: [
                "Mizan",
                "Mahşer",
                "Berzah",
                "Ba's"
              ],
              correct: "Mahşer",
              wisdom: "Tebrikler! Mahşer, tüm insanlığın adalet huzurunda toplanacağı alandır. Mizan ise amellerin tartıldığı terazidir."
            }
          },
          {
            id: "w5_d1_l2",
            lessonNumber: 2,
            title: "Ahirete İnanıyorum 2",
            outcomes: [
              "Ahiret inancının, insanın dünya hayatını anlamlandırmasındaki, adalet arayışındaki ve sorumluluk üstlenmesindeki ahlaki rolünü analiz eder.",
              "Ölüm ve ötesi temaları korku unsuru yapılmadan; mutlak adaletin tecelli edeceği, dünyadaki hiçbir iyiliğin karşılıksız kalmayacağı adil bir denge noktası olarak sunulur. Dünyadaki her davranışın bir sorumluluğu olduğu bilinci kazandırılır."
            ],
            wisdomNotes: "Ahiret inancı insana korku değil, sonsuz bir adalet duygusu ve huzur verir. Bu dünyada yapılan hiçbir iyilik kaybolmaz, hiçbir zulüm cezasız kalmaz. Ölüm bir son değil, gerçek adaletin başlayacağı kapıdır. Bu inanç bizi her an ahlaklı ve sorumlu davranmaya yönlendirir.",
            interactiveActivity: "Adalet Terazisi Sohbeti: 'Zarar gören veya hakkı yenen birinin ahirette hakkını tam alacağını bilmesinin verdiği manevi rahatlama' üzerine konuşulur.",
            quiz: {
              question: "Ahiret inancının dünya hayatımızda ve davranışlarımızda oluşturduğu en önemli ahlaki katkı aşağıdakilerden hangisidir?",
              options: [
                "İnsanda otokontrol (iç denetim) ve sorumluluk bilinci geliştirerek iyiliğe yönlendirmesi",
                "İnsanları sürekli üzgün yapması",
                "Sadece korku içinde yaşatması",
                "Dünya işlerini tamamen bırakmaya sebep olması"
              ],
              correct: "İnsanda otokontrol (iç denetim) ve sorumluluk bilinci geliştirerek iyiliğe yönlendirmesi",
              wisdom: "Tebrikler! Ahiret inancı, vicdanimizi diri tutarak haksızlıklardan kaçınmamızı sağlayan en güçlü ahlaki kalkandır."
            }
          },
          {
            id: "w5_d1_l3",
            lessonNumber: 3,
            title: "Kader ve Kazaya İnanıyorum",
            outcomes: [
              "Kader ve kaza kavramlarını evrendeki fiziksel, biyolojik ve toplumsal yasalar (sünnetullah) çerçevesinde ilişkilendirir.",
              "İnsanın ilahi irade karşısındaki kendi cüzi iradesini ve eylemlerinden doğan sorumluluğunu ayırt eder; doğru tevekkül anlayışını açıklar."
            ],
            wisdomNotes: "Kader, Allah'ın evrene koyduğu fiziksel, biyolojik ve toplumsal yasalardır (Sünnetullah). Kaza ise bu yasaların zamanı gelince gerçekleşmesidir. İnsana akıl ve hür irade (Cüzi İrade) verilmiştir. Bu nedenle yaptığımız her seçimin ahlaki sorumluluğu bize aittir. Tedbir aldıktan sonra Allah'a güvenmek ise tevekkül (doğru tevekkül) olarak bilinir.",
            interactiveActivity: "Kader ve İrade İstasyonları: Tahtaya fiziksel, biyolojik ve toplumsal yasalara örnekler yazarak insan iradesinin buradaki rolünü tartışın.",
            quiz: {
              question: "Önce elimizden gelen tüm çalışmayı ve hazırlığı yapıp, ardından sonucu Allah'a bırakıp güvenmeye ne denir?",
              options: [
                "Kaza",
                "Tevekkül",
                "Cüzi İrade",
                "Sünnetullah"
              ],
              correct: "Tevekkül",
              wisdom: "Harika! Tevekkül, tedbir aldıktan sonra kalbimizi Allah'ın adaletine teslim etmektir."
            }
          }
        ]
      },
      {
        dayName: "Salı",
        discipline: "İBADET",
        bgGrad: "from-amber-500 to-orange-600",
        badgeColor: "bg-amber-100 text-amber-850",
        lessons: [
          {
            id: "w5_d2_l1",
            lessonNumber: 1,
            title: "Haccı Öğreniyorum",
            outcomes: [
              "Hac ibadetinin yapılış aşamalarını (ihrama girme, vakfe, tavaf, sa'y) kronolojik sıra ile açıklar.",
              "Kâbe, Arafat, Safa-Merve, Mina ve Müzdelife gibi kutsal mekânların ve hac ritüellerinin (kurban, şeytan taşlama) ifade ettiği derin sembolik anlamları çözümler.",
              "Farklı ülkelerden, dillerden ve ırklardan milyonlarca insanın dikişsiz beyaz bir giysi (ihram) içinde eşitlenmesinin getirdiği evrensel kardeşlik, adalet ve insan hakları şuurunu fark ettirmektir."
            ],
            wisdomNotes: "Hac, belirli zamanlarda Kabe'yi ve kutsal mekanları ziyaret ederek yapılan farz bir ibadettir. Giydiğimiz dikişsiz beyaz ihram örtüsü, tüm dünya makamlarını sıfırlayarak Yaratıcı huzurunda mutlak eşitliği simgeler. Hac aşamaları: İhrama girme, Arafat'ta vakfe, Kabe'yi tavaf ve Safa-Merve arasında sa'y yapmaktır.",
            interactiveActivity: "Hac Yolculuğu Şeması: Akıllı tahtada Kabe, Arafat, Mina ve Safa-Merve noktalarını çizerek kronolojik hac akışını birlikte sıralayın.",
            quiz: {
              question: "Hac ibadeti esnasında tüm sınıf, ırk ve zenginlik rütbelerini kaldırıp eşitliği simgeleyen beyaz giysiye ne denir?",
              options: [
                "Kefen",
                "İhram",
                "Hırka",
                "Cübbe"
              ],
              correct: "İhram",
              wisdom: "Tebrikler! İhram, tüm insanların Allah huzurunda dikişsiz ve yalın olarak eşit olduğunu anlatan evrensel bir barış kıyafetidir."
            }
          },
          {
            id: "w5_d2_l2",
            lessonNumber: 2,
            title: "Dua ediyorum 1",
            outcomes: [
              "Dua kavramının anlamını, dindeki yerini, dua etmenin adabını ve insanın yaratıcısıyla kurduğu samimi iletişimin psikolojik/manevi faydalarını açıklar."
            ],
            wisdomNotes: "Dua, kulun Rabbine seslenmesi, O'nunla samimi ve doğrudan iletişim kurmasıdır. Dua etmek için aracıya gerek yoktur. Yalnızlık, kaygı ve endişe anlarımızda dua etmek, en güçlü ruhsal sığınaktır. Dua etmek kalbe huzur ve ümit aşılar.",
            interactiveActivity: "Dua Adabı Sohbeti: Dua ederken neden acele etmememiz gerektiği ve içtenliğin önemi üzerine sınıfta kısa bir müzakere yapılır.",
            quiz: {
              question: "Dua ibadeti hakkında aşağıda verilen bilgilerden hangisi İslam ahlakına en uygun olanıdır?",
              options: [
                "Dua, kul ile Yaratıcı arasında hiçbir aracı olmadan kurulan samimi bir bağdır",
                "Sadece camide dua edilebilir",
                "Dua ederken sadece kendimizi düşünmeliyiz",
                "Dua etmek insanı tembelliğe alıştırmalıdır"
              ],
              correct: "Dua, kul ile Yaratıcı arasında hiçbir aracı olmadan kurulan samimi bir bağdır",
              wisdom: "Tebrikler! Dinimizde her an, her yerde Rabbimize aracısız seslenebiliriz. Bu bizim en büyük manevi özgürlüğümüzdür."
            }
          },
          {
            id: "w5_d2_l3",
            lessonNumber: 3,
            title: "Dua ediyorum 2",
            outcomes: [
              "Kur'an-ı Kerim'de ve Hz. Peygamber’in hayatında geçen örnek dua metinlerini muhtevaları açısından inceler.",
              "Ergenlik döneminde yoğunlaşan yalnızlık, kaygı ve anlaşılmama hislerine karşı duanın; sığınma, dertleşme, şükür ve ümit kaynağı olan psikolojik tamir edici gücünü ön plana çıkarır."
            ],
            wisdomNotes: "Kur'an-ı Kerim ve Peygamberimiz bize en güzel duaları öğretir. 'Rabbena atina' gibi dualar hem dünya hem de ahiret güzelliği ister. Gençlik çağındaki yalnızlık veya gelecek kaygısına karşı dua, Rabbimizle dertleşerek manevi güç bulma, şükretme ve ümit besleme imkanı sunar.",
            interactiveActivity: "Örnek Dualar Keşfi: Kur'an'da geçen peygamber dualarından örnekler okunarak, bu dualardaki ortak ahlaki ve insani talepler listelenir.",
            quiz: {
              question: "Peygamberimizin en çok okuduğu dualardan olan ve hem dünya hem de ahiret için iyilik ve güzellik isteyen asil dua hangisidir?",
              options: [
                "Rabbena Duaları (Rabbena Atina)",
                "Sübhâneke",
                "Fatiha",
                "Kunut Duaları"
              ],
              correct: "Rabbena Duaları (Rabbena Atina)",
              wisdom: "Harika! Rabbena duaları, hem dünya hem ahiret dengesini gözeten muhteşem bir içerikle bize dua ufkunu gösterir."
            }
          }
        ]
      },
      {
        dayName: "Çarşamba",
        discipline: "SİYER",
        bgGrad: "from-indigo-500 to-purple-600",
        badgeColor: "bg-indigo-100 text-indigo-850",
        lessons: [
          {
            id: "w5_d3_l1",
            lessonNumber: 1,
            title: "Peygamberimizin Örnek Kişiliği 1",
            outcomes: [
              "Hz. Muhammed’in (s.a.v.) insanlık için bir Üsve-i Hasene (en güzel örnek) olduğunu ayet ve hadisler ışığında kavrar."
            ],
            wisdomNotes: "Peygamberimiz Hz. Muhammed (s.a.v.) tüm insanlık için 'Üsve-i Hasene' yani en güzel ahlak modelidir. O'nun attığı her adım, söylediği her söz, gençlere ve tüm insanlığa rehberlik eder. O'nu örnek almak, O'nun ahlakıyla ahlaklanmak demektir.",
            interactiveActivity: "Örnek İnsan Portresi: Sınıfta Peygamberimizin en çok etkilendiğimiz ahlaki davranışlarından birini tahtaya yazıp neden örnek aldığımızı açıklama çalışması yapılır.",
            quiz: {
              question: "Kur'an-ı Kerim'de Peygamber Efendimiz için kullanılan ve 'en güzel örnek' anlamına gelen asil sıfat hangisidir?",
              options: [
                "Üsve-i Hasene",
                "Muhammedü'l-Emin",
                "Hılfü'l-Fudûl",
                "Suffe Akademisi"
              ],
              correct: "Üsve-i Hasene",
              wisdom: "Tebrikler! Üsve-i Hasene, Peygamberimizin tüm insanlık için en mükemmel ve taklit edilesi güzel ahlak örneği olduğunu ifade eder."
            }
          },
          {
            id: "w5_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Örnek Kişiliği 2",
            outcomes: [
              "Peygamberimizin adaleti, merhameti ve tüm canlılara karşı gösterdiği sonsuz şefkati örnek alır."
            ],
            wisdomNotes: "Peygamberimiz adaletiyle ve merhametiyle tanınırdı. Kimseye haksızlık etmez, hak sahibinin hakkını hemen teslim ederdi. Çocuklara, yaşlılara, hatta hayvanlara karşı sonsuz bir merhamet ve şefkat doluydu. O'nun merhameti tüm alemleri kuşatmıştı.",
            interactiveActivity: "Adalet Terazisi ve Şefkat Rolü: Sınıfta haksızlığa uğrayan birine nasıl adil davranmamız gerektiği ve bir hayvana şefkat göstermenin önemi üzerine kısa canlandırmalar yapılır.",
            quiz: {
              question: "Peygamberimizin Mekkeli müşriklerin bile teslim ettiği, onun adaletini ve doğruluğunu temsil eden en belirgin vasfı nedir?",
              options: [
                "Hiç kimseyle konuşmaması",
                "Son derece güvenilir (Emin) ve adil bir şahsiyet olması",
                "Sadece kendi kabilesini koruması",
                "Zor kullanarak adaleti sağlaması"
              ],
              correct: "Son derece güvenilir (Emin) ve adil bir şahsiyet olması",
              wisdom: "Harika! Efendimiz, dürüstlüğü ve adaleti sayesinde peygamberlik öncesinde dahi herkesin güvendiği bir hakemdi."
            }
          },
          {
            id: "w5_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimizin Örnek Kişiliği 3",
            outcomes: [
              "Peygamberimizin istişareye (başkalarının fikrine değer vermeye) açık oluşunu, kolaylaştırıcılığını ve mütevazılığını hayatına aktarmaya istekli olur."
            ],
            wisdomNotes: "Peygamberimiz en büyük lider olmasına rağmen arkadaşlarına danışır (istişare eder), onların fikirlerine değer verirdi. İşleri kolaylaştırmayı emreder ve asla böbürlenmezdi. Kendisini halktan biri gibi görür, tevazuuyla kalpleri fethederdi.",
            interactiveActivity: "İstişare Meclisi: Sınıfta yapılacak bir etkinlik için tüm öğrencilerin görüşlerinin alındığı ve ortak karar verildiği bir 'danışma kurulu' canlandırması yapılır.",
            quiz: {
              question: "Peygamberimizin eğitim ve iletişim metodu olarak bizlere tavsiye ettiği, insanları dinden soğutmak yerine sevdirmeyi amaçlayan meşhur kolaylık ilkesi nedir?",
              options: [
                "Sürekli zorlu cezalar uygulayarak korkutmaktır",
                "Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz (sevdiriniz), nefret ettirmeyiniz",
                "Sadece kuralları ezberletip bırakmaktır",
                "İnsanları yalnızlık içinde terk etmektir"
              ],
              correct: "Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz (sevdiriniz), nefret ettirmeyiniz",
              wisdom: "Bravo! Bu muhteşem sünnet, hayatımızın her alanında insanlara empatiyle yaklaşmamızı sağlayan en harika ahlak şifresidir."
            }
          }
        ]
      },
      {
        dayName: "Perşembe",
        discipline: "AHLAK",
        bgGrad: "from-rose-500 to-pink-600",
        badgeColor: "bg-rose-100 text-rose-850",
        lessons: [
          {
            id: "w5_d4_l1",
            lessonNumber: 1,
            title: "Yalan Söylememe ve Sözünde Durma",
            outcomes: [
              "Yalanın güven toplumunu yok eden, insanı değersizleştiren bir ahlaki hastalık olduğunu fark eder.",
              "Her şart ve koşulda doğruluğu (sıdk) ve dürüstlüğü savunmanın karakter üzerindeki yapıcı gücünü analiz eder.",
              "Yalancılığın sadece bireysel bir kusur değil, toplumsal bağları çürüten bir kriz olduğunu; kısa vadeli menfaatler için yalana başvurmanın uzun vadede saygınlığı yok ettiğini kavrar."
            ],
            wisdomNotes: "Yalan, tüm ahlaksızlıkların zeminidir. Söylenen tek bir yalan, yıllarca kurulan güven kalesini saniyede eritir. Dürüst Müslüman, şaka dahi olsa asla yalan söylemeyen, verdiği sözü canı pahasına dürüstçe tutan kimsedir. Güvenilir olmak en büyük insan zenginliğidir.",
            interactiveActivity: "Sınıf Sözü: 'Gelecekte ne iş yaparsak yapalım (esnaf, mühendis, doktor) sözünün eri olmanın getireceği dürüst asalet dünyasını' konuşun.",
            quiz: {
              question: "İstekleri almak için yalan söylemenin, hile yapmanın dürüst bir insan karakterine zararı nedir?",
              options: [
                "Bizi daha zeki gösterir",
                "Güvenilirliğimizi sıfırlar, insan saygınlığını yok eder ve kul hakkı doğurur",
                "Zararsız bir pratik çözümdür",
                "Sosyal ilişkileri geçici olarak güzelleştirir"
              ],
              correct: "Güvenilirliğimizi sıfırlar, insan saygınlığını yok eder ve kul hakkı doğurur",
              wisdom: "Harika! Yalan konuşan kendisini küçültür. Emin insan ise dürüstlüğüyle dünyayı parıldatan bir yıldızdır."
            }
          },
          {
            id: "w5_d4_l2",
            lessonNumber: 2,
            title: "Haset Yerine Gıpta Erdemi",
            outcomes: [
              "Haset (kıskançlık) ile gıpta (gözlemleyerek örnek alma) arasındaki ince ahlaki farkı ayırt eder.",
              "Kıskançlığın insanın iç huzurunu bozan ve dostlukları yıkan olumsuz bir duygu olduğunu fark ederek bununla baş etme yollarını kavrar.",
              "Başkasının başarısını çekememe duygusunun enerjiyi tüketen bir pranga olduğunu; bunun yerine başkalarının başarısıyla mutlu olma bilincini kazanır."
            ],
            wisdomNotes: "Başkasının elindeki güzel şeylerin veya başarının yok olmasını istemeye, 'çekememezliğe' haset (kıskançlık) denir ve kalbi çürütür. Oysa o başarıyı sevgiyle takdir edip alkışlayarak 'Maşallah, ne güzel başarmış, ben de dürüstçe çalışıp onun gibi olayım' demek 'Gıpta Etmektir' ki bu kalbi güzelleştirir.",
            interactiveActivity: "Şefkat Kürsüsü: Sınıfta bu hafta dürüstçe başarmış bir arkadaşınızı takdir edip gıptayla alkışlama seansı gerçekleştirin.",
            quiz: {
              question: "Bir arkadaşımızın başarısını veya güzelliğini gördüğümüzde 'onda olmasın' diye haset etmek yerine, onu takdir edip örnek alma asilliğine ne denir?",
              options: [
                "Fesatlık etmek",
                "Gıpta Etmek / Takdir",
                "Hasetlik can can",
                "Yıkıcılık"
              ],
              correct: "Gıpta Etmek / Takdir",
              wisdom: "Çok doğru! Gıpta etmek pırıl pırıl bir sevgi kalbinin göstergesidir; haset kalbi eritirken, gıpta etmek bizi hayırlı adımlara heveslendirir."
            }
          },
          {
            id: "w5_d4_l3",
            lessonNumber: 3,
            title: "Anne-Baba Hakları ve Hayat Boyu Eminlik Sözleşmesi",
            outcomes: [
              "Anne babaya saygı göstermenin (birr-i valideyn), onlara 'öf' bile dememenin dini ve ahlaki bir sorumluluk olduğunu ayetler ışığında analiz eder.",
              "Aile içi hak, sorumluluk ve sevgi dengesini kavrar; anne ve babanın fedakarlıklarının bir vefa borcu olduğunu öğrenir."
            ],
            wisdomNotes: "Anne ve babamız bizim dünyaya geliş kapımız, en fedakar koruyucularımızdır. Kur'an onlara karşı 'öf' bile dememeyi emreder. Kuşak çatışmalarına yenilmeden onlara saygı göstermek vefa borcumuzdur. Yaz okulumuz biterken, ömrümüz boyu dürüstlük, merhamet ve Muhammedü'l-Emin yolunda yürüyeceğimize vicdanen sözleşiyoruz.",
            interactiveActivity: "Kapanış Sözleşmesi: Yaz okulunun son gününde, tüm sınıfla beraber bir ömür boyunca dürüst ve saygılı bireyler kalacağımıza dair tahtaya el boyamaları veya imzalar atarak sözleşin.",
            quiz: {
              question: "Anne ve babaya saygı göstermeyi, onlara öf bile dememeyi ifade eden asil ahlaki terim hangisidir?",
              options: [
                "Bürokratik saygı",
                "Birr-i Vâlideyn (Anne-Babaya İyilik)",
                "Muâhat Sözleşmesi",
                "Hilfü'l-Fudûl"
              ],
              correct: "Birr-i Vâlideyn (Anne-Babaya İyilik)",
              wisdom: "Tebrikler! Birr-i Vâlideyn ahlakımızın en kutlu çiçeğidir. Ailemizin rızası, Rabbimizin de rızasını kazandırır."
            }
          }
        ]
      }
    ]
  }
];
