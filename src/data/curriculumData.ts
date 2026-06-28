export interface Slide {
  type: 'cover' | 'content' | 'ayah' | 'hadith' | 'poem' | 'discussion' | 'activity' | 'quiz';
  title?: string;
  subtitle?: string;
  body?: string;
  items?: string[];
  arabicText?: string;
  reference?: string;
  emoji?: string;
  image?: string;
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
  ezberItemId?: string; // Optional reference to custom Friday ezber items
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
  discipline: 'İTİKAD' | 'İBADET' | 'SİYER' | 'AHLAK' | 'EZBER' | 'DEĞERLENDİRME';
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
            slides: [
              {
                type: 'cover',
                title: "İslam'ın ve İmanın Esaslarını Öğreniyorum",
                subtitle: '1. Hafta • 1. Gün • 2. Ders',
                emoji: '🕌',
              },
              {
                type: 'content',
                title: 'Dinim İslam',
                emoji: '📖',
                body: "Biz müslümanız. Dinimiz, İslam dinidir. Çünkü biz, Allah'a ve Sevgili Peygamberimiz Hz. Muhammed'in, Allah'ın kulu ve elçisi olduğuna gönülden iman ediyoruz. Allah'a, meleklerine, kitaplarına, peygamberlerine, ahiret gününe, kader ve kazaya inanıyoruz.\n\nBu altı iman esasına kısaca 'inandım' anlamına gelen \"âmentü\" diyoruz.",
              },
              {
                type: 'content',
                title: 'İmanın Esasları',
                emoji: '✨',
                items: [
                  "1. Allah'a inanmak",
                  "2. Meleklere inanmak",
                  "3. Kitaplara inanmak",
                  "4. Peygamberlere inanmak",
                  "5. Ahiret gününe inanmak",
                  "6. Kader ve kazaya inanmak"
                ],
              },
              {
                type: 'content',
                title: 'BİZ BİLİYORUZ Kİ',
                emoji: '💡',
                items: [
                  "Allah bir ve tektir. Bizi ve tüm varlıkları yaratan O'dur.",
                  "Allah'ın melekleri vardır. Onlar Allah'ın verdiği görevleri yerine getiren ve kötülük nedir bilmeyen varlıklardır.",
                  "Allah, hayatı doğru ve güzel yaşamanın kurallarını öğreten kutsal kitaplar indirmiştir.",
                  "Allah, örnek insanlar olan peygamberler göndermiştir. Peygamberler insanları hep iyiliğe çağırmışlardır.",
                  "Allah, insanları öldükten sonra tekrar diriltecektir. Ahiret, insanlara dünyada yaptıklarının karşılığının verileceği sonsuz hayattır.",
                  "Allah, her şeyi bilir ve bir denge içinde yaratır. Her şey, Allah'ın izin vermesiyle olur."
                ],
              },
              {
                type: 'hadith',
                title: 'Bir Hadis Öğreniyorum',
                emoji: '🌹',
                body: '"Müslüman, elinden ve dilinden hiç kimsenin zarar görmediği kişidir."',
                reference: "Sevgili Peygamberimizin (s.a.s) sözlerine 'hadis' denir.",
              },
              {
                type: 'content',
                title: 'İslam\'ın Esasları',
                emoji: '🕋',
                body: "Dinimizde her müslümanın yapması gereken temel ibadetler vardır. Bunlara İslam'ın Esasları adı verilir. Şüphesiz ibadetler bunlarla sınırlı değildir ama bu beş ibadet çok önemlidir.",
                items: [
                  "1. Kelime-i şehadet getirmek",
                  "2. Namaz kılmak",
                  "3. Oruç tutmak",
                  "4. Zekât vermek",
                  "5. Hacca gitmek"
                ],
              },
              {
                type: 'hadith',
                title: 'Bir Hadis Öğreniyorum',
                emoji: '🌹',
                body: '"İslam\'ın beş esası vardır: Allah\'tan başka ilâh olmadığını ve Hz. Muhammed\'in O\'nun kulu ve elçisi olduğunu kabul etmek, namaz kılmak, zekât vermek, Ramazan orucunu tutmak ve gücü yetenler için Kâbe\'yi ziyaret ederek haccetmek."',
                reference: 'Hadis-i Şerif',
              },
              {
                type: 'content',
                title: 'Müslüman Güven Veren İnsandır',
                emoji: '🤝',
                body: "İslam huzur dini, müslüman güven veren insandır.\n\nÇünkü \"müslüman\" kelimesi, 'elinden ve dilinden kimseye zarar gelmeyen, güvenilir kişi' anlamına gelir. Müslümanlar, huzurun, barışın ve adaletin güvencesidir. İslam'ın rehberliğine uyan insanlar, her zaman huzur içerisinde ve kardeşçe yaşamışlardır.",
              },
              {
                type: 'content',
                title: 'BİZ MÜSLÜMANIZ',
                emoji: '🌟',
                items: [
                  "Allah'ı sever ve Allah'ın da bizi sevdiğine inanırız.",
                  "Allah'ın her şeyi gördüğünü, her sözü işittiğini bilir, doğru sözlü ve dürüst oluruz.",
                  "Allah'ın âdil olduğunu, adaletli olanları sevdiğini bilir; kimseye haksızlık etmeyiz.",
                  "Dünyadaki her şeyin Allah tarafından yaratıldığına inanır; bütün varlıklara sevgi ve merhametle davranırız."
                ],
              },
              {
                type: 'content',
                title: 'ÂMENTÜ',
                emoji: '🤲',
                arabicText: "Âmentü billâhi ve melâiketihi ve kütübihi ve rusülihî ve'l-yevmi'l-âhiri ve bi'l-kaderi hayrihi ve şerrihi minellahi teâlâ ve'l-ba'sü ba'de'l-mevti hakkun. Eşhedü en lâ ilahe illallah ve eşhedü enne Muhammeden abdühû ve resûlüh",
                body: "ANLAMI: Ben; Allah'a, meleklerine, kitaplarına, peygamberlerine, âhiret gününe, kadere, hayır ve şerrin Allah'ın yaratmasıyla olduğuna inandım. Öldükten sonra tekrar dirilmek gerçektir. Şahitlik ederim ki, Allah'tan başka ilâh yoktur. Yine şahitlik ederim ki, Hz. Muhammed (s.a.s) O'nun kulu ve elçisidir.",
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Araştıralım, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "Peygamberimiz müslümanı \"elinden ve dilinden zarar gelmeyen insan\" olarak tanımlarken neleri vurgulamaktadır? Düşünelim ve arkadaşlarımızla fikir alışverişinde bulunalım."
                ],
              },
              {
                type: 'activity',
                title: 'Haydi Tamamla ve Doğru Sıralayalım!',
                emoji: '🧩',
                items: [
                  "1. İbadet, Allah'a iyi bir kul olmak ve verdiği nimetler için O'na şükretmektir. Allah'ın en sevdiği ibadetler nelerdir?",
                  "2. Sevap ve günah olan davranışlara örnek verebilir misin?",
                  "Aşağıdaki kavramları 'İslam'ın Şartları' ve 'İmanın Şartları' başlıkları altında doğru sıraya koyalım: Meleklere İnanmak, Zekat Vermek, Namaz Kılmak, Kelime-i Şehadet Getirmek, Allah'a İnanmak, Oruç Tutmak, Peygamberlere İnanmak, Hacca Gitmek, Ahiret Gününe İnanmak, Kaza ve Kadere İnanmak, Kitaplara İnanmak."
                ],
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması',
                emoji: '🎯',
                question: "Öğrendiğimiz hadis-i şerife göre 'Müslüman' kelimesinin tanımı aşağıdakilerden hangisidir?",
                options: [
                  "Sadece ibadet eden kişidir.",
                  "Elinden ve dilinden hiç kimsenin zarar görmediği kişidir.",
                  "Sadece kendi ülkesinde yaşayan kişidir.",
                  "Sürekli çalışan kişidir."
                ],
                correct: "Elinden ve dilinden hiç kimsenin zarar görmediği kişidir.",
                wisdom: "Doğru cevap! Kitabımızda da belirtildiği gibi Peygamberimiz (s.a.s) müslümanı 'elinden ve dilinden hiç kimsenin zarar görmediği kişi' olarak tanımlamıştır."
              }
            ]
          },
          {
            id: "w1_d1_l3",
            lessonNumber: 3,
            title: "Allah'a İnanıyorum",
            outcomes: [
              "Gördüğümüz ve bildiğimiz ne varsa hepsinin yaratıcısı Allah'tır.",
              "Allah, dünyada yaşayacak en değerli varlık olan insanı yaratmıştır.",
              "Peygamberler bizlere nasıl yaşamamız gerektiğini öğretmişlerdir.",
              "Allah'ı tanıdıkça O'na olan sevgimiz artar. Allah'ı tanımak ise O'nun isimlerini öğrenmekle başlar."
            ],
            wisdomNotes: "Kâinatı Allah Yarattı. Allah, İnsanı Yoktan Var Etti. Peygamberleri Allah Gönderdi. En Güzel İsimler Allah'ındır.",
            interactiveActivity: "Bu şiir bize Allah'ın hangi özelliklerini anlatıyor, düşünelim. Soframızdaki nimetlerin bize ulaşana kadar hangi aşamalardan geçtiğini araştıralım ve arkadaşlarımızla paylaşalım.",
            slides: [
              {
                type: 'cover',
                title: "Allah'a İnanıyorum",
                subtitle: '1. Hafta • 1. Gün • 3. Ders',
                emoji: '🕌',
              },
              {
                type: 'content',
                title: 'Kâinatı Allah Yarattı',
                emoji: '🌍',
                body: "Gördüğümüz ve bildiğimiz ne varsa hepsinin yaratıcısı Allah'tır. Allah önce kâinatı yaratmıştır. Gökleri, yıldızları, ayı, güneşi yaratan, hepsine bir yörünge belirleyen Allah'tır. Rabbimiz, böylece gecenin ve gündüzün oluşmasını, mevsimlerin değişmesini sağlamış, bizim yaşamamız için en uygun ortamı oluşturmuştur. Dünyanın güneşe olan uzaklığı da bir ölçüye göre yaratılmıştır. Eğer güneş dünyamıza çok yakın olsaydı dünyamız yanıp kül olabilir. Çok uzak olsaydı bu defa da canlılar donabilirdi. Yeryüzünü yaratan da Allah'tır. Rabbimiz toprağı, suyu, ateşi, ağaçları, hayvanları, nehirleri, ormanları, kısacası insanın ihtiyaçlarını karşılayacak bütün varlıkları mükemmel bir uyum içinde yaratmıştır."
              },
              {
                type: 'ayah',
                title: 'Bir Ayet Öğreniyorum',
                emoji: '📖',
                body: "\"Rüzgârları rahmetinin önünde müjdeci olarak gönderen O'dur. Biz, ölü toprağa can vermek, yarattığımız nice hayvanlara ve nice insanlara su vermek için gökten tertemiz su indirdik.\"",
                reference: "(Furkan Süresi, 48-49. Ayetler)"
              },
              {
                type: 'content',
                title: 'Allah, İnsanı Yoktan Var Etti',
                emoji: '🤲',
                body: "Sonra Allah, dünyada yaşayacak en değerli varlık olan insanı yaratmıştır. İnsan çok özel yaratılmıştır. Diğer canlılardan farklıdır. Aklı ve iradesi vardır. Duygu sahibidir. Düşünebilir, konuşabilir. Allah'ın bu kâinattaki en sevdiği ve en çok değer verdiği varlık insandır. Yerde ve gökte var olan bütün güzellikler insanın emrine verilmiştir. Canlı cansız bütün varlıklar insana emanet edilmiştir. Bitkiler ve hayvanlar onun hizmetine sunulmuştur. Yeter ki, iyi bir hayat yaşasın ve daima iyilik yapsın..."
              },
              {
                type: 'content',
                title: 'Peygamberleri Allah Gönderdi',
                emoji: '✨',
                body: "İnsan doğar, adım adım büyür, gelişir ve zamanla yaşlanır. Gün gelir ölür ve böylece dünya hayatını tamamlar. Diğer canlılardan farklı olarak Allah'ın ona verdiği akılla kendi hayatına yön verir. Ama sadece aklını ve gücünü kullanmak insanı her zaman mutluluğa ulaştıramaz. İnsanın iyiyle kötüyü, güzel ile çirkini, doğruyla yanlışı birbirinden ayırt edebilmek için bir yol göstericiye ihtiyacı vardır. İşte bu yol gösterici, peygamberlerdir. Allah, insanları çok sevdiği, onların iyi ve güzel davranışlarda bulunmalarını istediği için peygamberler göndermiştir. Peygamberler bizlere nasıl yaşamamız gerektiğini öğretmişlerdir. Bizler de peygamberleri örnek alıp onlar gibi davranarak dünyada ve âhirette mutluluğa ulaşırız."
              },
              {
                type: 'content',
                title: 'En Güzel İsimler Allah\'ındır',
                emoji: '✨',
                body: "Öyle kudretli bir Rabbimiz var ki... O bir şeyin var olmasını istediği zaman \"OL\" der, o da oluverir. Çünkü O'nun her şeyi yaratmaya gücü yeter. Büyük küçük, görünen görünmeyen, canlı cansız her şey Allah'ın eseridir. Hiçbir şey kendi kendine var olmamıştır. Harika bir düzen ve sisteme sahip olan evrenin bir yaratanı vardır. O da bir ve tek olan Allah'tır. Allah'ı tanıdıkça O'na olan sevgimiz artar. Allah'ı tanımak ise O'nun isimlerini öğrenmekle başlar. En güzel isimler Allah'ındır."
              },
              {
                type: 'content',
                title: 'Allah\'ın İsimleri Bize Ne Öğretir?',
                emoji: '💡',
                body: "Bu isimler Allah'ın özellikleri hakkında bize bilgi verir. Örneğin, er-Rahmân ve er-Rahîm isimleri, Allah'ın çok merhametli olduğu anlamına gelir. el-Vedûd, 'kullarını çok seven ve sevilmeye en layık olan' demektir. Bizi çok seven Rabbimizi biz de çok severiz. Çünkü varlığımızı O'na borçluyuz. O'nu sevdikçe hayata tutunur ve mutlu oluruz. el-Kerîm, 'Kullarına karşı sonsuz lütuf ve iyilikte bulunma; er-Rezzák ise tüm varlıkların rızkını verenin Allah olduğunu ifade eder. Topraktaki karıncadan, denizin derinliklerindeki balıklara kadar tüm canlıların karnını doyuran Allah'tır. el-Musavvir, 'varlıklara birbirinden farklı şekiller veren' demektir. el-Musavvir ismi varlıkları farklı renk, şekil ve güzellikte yaratanın Allah olduğunu bize öğretir. Allah'ın 99 ismi vardır. Allah'ın isimlerini, Kur'an-ı Kerim'den ve Sevgili Peygamberimizin hadislerinden öğreniriz."
              },
              {
                type: 'content',
                title: 'Allah\'ın Güzel İsimlerinden - 1',
                emoji: '🤲',
                items: [
                  "el-EHAD: Allah, tek ve eşsiz olandır.",
                  "er-RAHMÂN: Allah, acıyan ve merhamet edendir.",
                  "er-RAHÎM: Allah, bağışlayıp esirgeyendir.",
                  "el-KADİR: Allah, her şeye gücü yetendir.",
                  "el-ALÎM: Allah, her şeyi bilendir.",
                  "el-ĞAFFÂR: Allah, hataları ve günahları bağışlayandır.",
                  "er-REZZAK: Allah, tüm canlıların rızkını verendir.",
                  "el-BASÎR: Allah, her şeyi görendir."
                ]
              },
              {
                type: 'content',
                title: 'Allah\'ın Güzel İsimlerinden - 2',
                emoji: '🤲',
                items: [
                  "el-HÂLIK: Allah, her şeyi yaratandır.",
                  "el-BERR: Allah, bütün iyilik ve güzelliklerin sahibidir.",
                  "el-VEDÛD: Allah, sevgiyi yaratan ve kullarını sevendir.",
                  "el-KERÎM: Allah, çok cömerttir.",
                  "el-HAFIZ: Allah, koruyandır.",
                  "es-SEMÎ': Allah, her şeyi işitendir.",
                  "el-ADL: Allah, çok adaletlidir."
                ]
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Araştıralım, Paylaşalım!',
                emoji: '🤲',
                items: [
                  "Şimdi bu isimlerle Allah'a dua edelim. İlk duamız bizden: Ey kullarını çok seven Rabbim! Beni ve ailemi cennetinle sevindir! Åmin."
                ]
              },
              {
                type: 'ayah',
                title: 'Bir Ayet Öğreniyorum',
                emoji: '📖',
                body: "\"En güzel isimler Allah'ındır. O'na güzel isimleriyle dua edin.\"",
                reference: "(A'raf Süresi, 180. Ayet)"
              },
              {
                type: 'ayah',
                title: 'Bir Ayet Öğreniyorum',
                emoji: '📖',
                body: "\"De ki: O, Allah'tır, tektir. Allah Samed'dir. (Her şey O'na muhtaçtır ama O hiçbir şeye muhtaç değildir.) O'nun çocuğu olmamıştır (Kimsenin babası değildir). Kendisi de doğmamıştır (Kimsenin çocuğu da değildir). Hiçbir şey O'na denk ve benzer olamaz.\"",
                reference: "(İhlas Süresi, 1-4. Ayetler)"
              },
              {
                type: 'poem',
                title: 'Sensin Allah\'ım',
                emoji: '🌙',
                body: "Sensin bizi yaratan,\nNimetlerle donatan,\nHayata huzur katan,\nSensin, sensin Allah'ım!\n\nYağmurları indiren,\nDünyamızı döndüren,\nYıldızları söndüren,\nSensin, sensin Allah'ım!\n\nHer varlıkta bir âhenk,\nSanatta yer göğe denk,\nÇiçeklere veren renk,\nSensin, sensin Allah'ım!\n\nYazı, kışı getiren,\nBaşakları bitiren,\nHer şeye güç yetiren,\nSensin, sensin Allah'ım!\n\nBulutları gezdiren,\nGemileri yüzdüren,\nKalemimle yazdıran\nSensin, sensin Allah'ım!\n\nHer varlık sana muhtaç,\nİmandır kalplere taç,\nHayattaki tek amaç,\nSensin, sensin Allah'ım!"
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Araştıralım, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "Bu şiir bize Allah'ın hangi özelliklerini anlatıyor, düşünelim.",
                  "Soframızdaki nimetlerin bize ulaşana kadar hangi aşamalardan geçtiğini araştıralım ve arkadaşlarımızla paylaşalım."
                ]
              }
            ]
          },
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
            title: "İbadetin Anlamını ve Çeşitlerini Öğreniyorum",
            outcomes: [
              "İbadet, yapıldığında Allah'ın sevgisini kazandıran her türlü söz ve davranıştır.",
              "Hayatımızı güzelleştiren, insanları mutlu ederken Allah'ın da rızasını kazanmamızı sağlayan her türlü iş ve davranış ibadettir.",
              "İbadetlerimizden bazılarını bedenimizle, bazılarını ise maddi imkânlarımızı kullanarak yaparız."
            ],
            wisdomNotes: "İbadet, yapıldığında Allah'ın sevgisini kazandıran her türlü söz ve davranıştır. Hayatımızı güzelleştiren, insanları mutlu ederken Allah'ın da rızasını kazanmamızı sağlayan her türlü iş ve davranış ibadettir. Bizi yaratan, yaşatan, bize sayısız güzellikler hediye eden, nimetler veren Rabbimize ibadetlerimizle, dualarımızla şükrederiz. İbadetlerin hem beden hem de ruh sağlığımız üzerinde çok önemli etkileri vardır. İbadet eden insan, sağlıklı, mutlu, güçlü ve özgüvenli olur. İbadetlerimizi sadece bu faydaları elde etmek için değil, Allah'ın rızasını ve sevgisini kazanmak için yaparız.",
            interactiveActivity: "Aşağıdaki cümlelerde eksikler kalmış. Boş bırakılan yerlere uygun kelimeleri yerleştirelim! (SÜNNET, İBADETTİR, KIBLEYE, MÜSLÜMAN, ABDEST, HELAL, HARAM)",
            slides: [
              {
                type: 'cover',
                title: "İbadetin Anlamını ve Çeşitlerini Öğreniyorum",
                subtitle: '1. Hafta • 2. Gün • 1. Ders',
                emoji: '🕌',
              },
              {
                type: 'content',
                title: 'İbadet Nedir?',
                emoji: '📖',
                body: "İbadet, yapıldığında Allah'ın sevgisini kazandıran her türlü söz ve davranıştır. Abdest almak, Kur'an okumak, namaz kılmak, oruç tutmak, zekât vermek, hacca gitmek, kurban kesmek, salâvat getirmek ibadet olduğu gibi güzel söz söylemek, anne, baba ve büyüklere saygılı davranmak, insanları iyilik yapmaya yönlendirmek ve kötülüğe engel olmak da birer ibadettir."
              },
              {
                type: 'content',
                title: 'Günlük Hayattaki İbadetler',
                emoji: '✨',
                body: "Hatta yol üzerinden insanları rahatsız eden bir şeyi kaldırmak, tebessüm etmek, sorana yol göstermek, yaşlıya yardım etmek, çevreyi temiz tutmak ve selam vermek de ibadettir.\n\nYuvasından düşmüş bir kuş yavrusunu yuvasına koymak, gözleri görmeyen birinin elinden tutup karşıdan karşıya geçmesine yardım etmek, sorumluluklarımızı yerine getirmek, hastaları ziyaret etmek, susamış bir hayvana su ve yiyecek vermek de ibadettir."
              },
              {
                type: 'content',
                title: 'İbadetin Şartları ve Çeşitleri',
                emoji: '💡',
                body: "Kısacası hayatımızı güzelleştiren, insanları mutlu ederken Allah'ın da rızasını kazanmamızı sağlayan her türlü iş ve davranış ibadettir. Karşılığında sevap vardır.\n\nİbadetlerin kendine göre yapılış şekli ve şartları vardır. Örneğin, namaz kılmak için abdest alır, vaktin girmesini bekleriz. Ramazan orucunu, Ramazan ayında tutarız. Zekâtı belli mallardan, belli miktarlarda veririz. İbadetlerimizden bazılarını bedenimizle, bazılarını ise maddi imkânlarımızı kullanarak yaparız."
              },
              {
                type: 'content',
                title: 'BİLİYOR MUYDUN?',
                emoji: '❓',
                items: [
                  "Allah'ın, yapmamızı kesin bir şekilde istediği ibadetlere \"farz\" denir.",
                  "Yapılması ve yiyilip içilmesi yasak olmayan şeylere \"helâl\" denir.",
                  "Yapılması ve yiyilip içilmesi kesin bir şekilde yasaklanan şeylere \"haram\" denir.",
                  "Sevgili Peygamberimizin söz ve davranışlarına, ahlâkına ve hayat modeline \"sünnet\" denir.",
                  "İbadetlerimiz ve güzel davranışlarımız için Rabbimizin bize verdiği ödüle \"sevap\" denir.",
                  "Dinimizin yasakladığı davranışlara \"günah\" denir.",
                  "Allah, temiz ve insan sağlığına yararlı olan şeyleri helal, kötü ve zararlı olan şeyleri de haram kılmıştır."
                ]
              },
              {
                type: 'content',
                title: 'Şükürler Olsun Rabbim!',
                emoji: '🤲',
                body: "Biz müslümanlar, Rabbimizi çok severiz. O'na olan sevgimizi, saygımızı ve şükrümüzü ifade etmek için ibadet ederiz. Bizi yaratan, yaşatan, bize sayısız güzellikler hediye eden, nimetler veren Rabbimize ibadetlerimizle, dualarımızla şükrederiz.\n\nİbadetlerimiz, aynı zamanda davranışlarımızı güzelleştirir. Birbirimize karşı daha anlayışlı, hoşgörülü, adaletli, merhametli ve sevgi dolu olmamızı sağlar. Toplum olarak birliğimizi ve beraberliğimizi güçlendirir, birbirimizi anlamamıza ve kaynaşmamıza vesile olur. Böylece biz güzelleşiriz, hayat güzelleşir."
              },
              {
                type: 'content',
                title: 'Nasıl Şükrederiz?',
                emoji: '🌟',
                items: [
                  "Rabbimize verdiği nimetler için \"Elhamdülillâh\" der, dilimizle şükrederiz.",
                  "Namaz kılarak, oruç tutarak ibadet eder, bedenimizle şükrederiz.",
                  "İhtiyaç sahiplerinin, fakirlerin, kimsesizlerin, muhacirlerin yardımına koşar, zekât ve sadaka verir, mal ve paramızla şükrederiz.",
                  "Müslüman kardeşlerimizle bir arada ibadet ve dua etmek için Kâbe'yi ziyaret eder, hem paramızla hem de bedenimizle şükrederiz."
                ]
              },
              {
                type: 'content',
                title: 'Peygamberimizi Örnek Almak',
                emoji: '🍽️',
                body: "Yemekten önce \"Bismillahirrahmanirrahîm\" derim, Peygamberimizin sünnetini yerine getiririm.\n\nYemekten sonra \"Elhamdülillâh\" derim, yine Peygamberimizin sünnetini yerine getiririm. Böylece onu örnek almış, onun gibi davranmış olurum."
              },
              {
                type: 'content',
                title: 'İbadetin Faydaları - Beden ve Ruh',
                emoji: '✨',
                body: "İbadetlerin hem beden hem de ruh sağlığımız üzerinde çok önemli etkileri vardır. Namaza hazırlık için abdest alır, böylece temizlenmiş oluruz. Namaz kılınca gönlümüze huzur ve güven duygusu dolar. Tazeleniriz, kendimizi Rabbimize daha da yakın hissederiz.\n\nOruç tuttuğumuzda vücudumuzdaki organları dinlendirmiş oluruz. Ayrıca oruç, şefkat ve merhamet duygularımızı geliştirir, bize sabretmeyi ve elimizdeki nimetleri paylaşmayı öğretir."
              },
              {
                type: 'content',
                title: 'İbadetin Faydaları - Toplum ve Kardeşlik',
                emoji: '🤝',
                body: "Zekât da paylaşma duygumuzu geliştirdiği gibi toplumda birlik ve beraberliği sağlar. Zekât veren kişi, müslüman kardeşinin hâlini anlamanın ve ona destek olmanın mutluluğunu yaşarken, zekât alan kişi de ihtiyacını gidermiş olur.\n\nHac ibadeti ise, dünyanın dört bir köşesinden Kâbe'ye gelen Müslümanların kardeşliğini pekiştirir. Farklı renklerde ve dillerde genç, yaşlı, kadın, erkek bütün Müslümanlar, Kâbe'de buluşurlar. Beyaz bir kıyafet olan ihramı giyerek Allah'ın huzurunda eşit olurlar."
              },
              {
                type: 'content',
                title: 'İbadet Bizi Güzelleştirir',
                emoji: '💡',
                body: "Bütün bunlar, ibadetlerin bize sağladığı faydalardan sadece birkaçıdır. İbadet etmek; bizi eğitir, hayatımızı düzene sokar, Rabbimizle ve çevremizdeki diğer insanlarla ilişkilerimizi güzelleştirir, ahlâkımızı olgunlaştırır. İbadet eden insan, sağlıklı, mutlu, güçlü ve özgüvenli olur.\n\nHayatımızı güzelleştiren ibadetleri yapmamızı Allah istemiştir. Bunun içindir ki, ibadetlerimizi sadece bu faydaları elde etmek için değil, Allah'ın rızasını ve sevgisini kazanmak için yaparız."
              },
              {
                type: 'content',
                title: 'Müjde Var!',
                emoji: '🎁',
                body: "Sadece Allah rızasını kazanmak için samimiyetle ibadet edenler, insanın hoşuna gidecek her şeyin olduğu, eşsiz güzelliklerle dolu cennetle müjdelenmiştir."
              },
              {
                type: 'ayah',
                title: 'Bir Ayet Öğreniyorum',
                emoji: '📖',
                body: "\"İman edip güzel işler yapanları, içinde ırmaklar akan ve ebedî kalacakları cennet köşklerine yerleştireceğiz. Çalışanların mükafatı ne güzeldir.\"",
                reference: "(Ankebut Sûresi, 58. Ayet)"
              },
              {
                type: 'ayah',
                title: 'Bir Ayet Öğreniyorum',
                emoji: '📖',
                body: "\"Allah, iman edip güzel işler yapanları içlerinden ırmaklar akan cennetlere koyacaktır. Orada altından bileziklerle, incilerle süsleneceklerdir. Oradaki giysileri ise ipektir.\"",
                reference: "(Hac Sûresi, 23. Ayet)"
              },
              {
                type: 'hadith',
                title: 'Bir Hadis Öğreniyorum',
                emoji: '🌹',
                body: "\"Kim 'Rab olarak Allah'ı, din olarak İslam'ı ve peygamber olarak da Muhammed'i gönülden benimsedim.' derse kesinlikle cennete girer.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'activity',
                title: 'Boşluğa Hangisi Gelecek?',
                emoji: '🧩',
                items: [
                  "1. Allah'a inanan, ona güvenen kişiye (MÜSLÜMAN) denir.",
                  "2. Her güzel iş (İBADETTİR).",
                  "3. Sevgili Peygamberimizin yaptığı davranışlara (SÜNNET) denir.",
                  "4. Namaz kılabilmek için (ABDEST) almalıyız.",
                  "5. Namaz kılarken yönümüzü (KIBLEYE) döneriz.",
                  "6. Allah temiz ve insan sağlığına yararlı olan şeyleri (HELAL), kötü ve zararlı olan şeyleri (HARAM) kılmıştır."
                ]
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması',
                emoji: '🎯',
                question: "Sevgili Peygamberimizin yaptığı davranışlara, ahlâkına ve hayat modeline ne denir?",
                options: [
                  "Farz",
                  "Sünnet",
                  "Helâl",
                  "Sevap"
                ],
                correct: "Sünnet",
                wisdom: "Doğru cevap! Sevgili Peygamberimizin söz ve davranışlarına, ahlâkına ve hayat modeline 'sünnet' denir."
              }
            ]
          },
          {
            id: "w1_d2_l2",
            lessonNumber: 2,
            title: "Cami ve Ezanı Öğreniyorum - Bölüm II: Ezanın Evrensel Çağrısı",
            outcomes: [
              "Ezanın sözlerini, anlamını ve Müslümanlar için ifade ettiği evrensel çağrı sembolizmini analiz eder.",
              "Ezanın ortaya çıkış sürecini ve ilk ezanın nasıl okunduğunu açıklar.",
              "Cemaatle namaz kılmanın faziletini ve önemini kavrar."
            ],
            wisdomNotes: "Sevgili Peygamberimiz ve Müslümanlar Mekke'den Medine'ye hicret etmişti. Müslümanların sayısı Medine'de günden güne artıyordu. Peygamberimizin arkadaşları gündelik hayatlarını ve ibadetlerini aksatmadan sürdürüyor, namaz kılacakları vakitleri güneşin konumuna göre belirliyorlardı. Ama farklı zamanlarda camiye geldiklerinden birlikte namaz kılamıyorlardı. Peygamber Efendimiz ise camide, cemaatle namaz kılmanın çok önemli olduğunu söylüyordu. Müslümanlara namaz vakitlerini duyurmak ve onları ibadete çağırmak için ortak bir işarete ihtiyaç vardı. Sahabeden Abdullah bin Zeyd'in ve diğer bazı kimselerin gördüğü rüya ile sorun çözüme kavuştu. Abdullah'a rüyasında ezanın sözleri öğretilmişti. Peygamber Efendimiz, ezanın Bilâl'e öğretilmesini ve ezanı onun okumasını istedi. Bilâl yüksek bir yere çıkarak ilk ezanı okudu.",
            interactiveActivity: "Yeni doğan bebeklerin sağ kulağına ezan, sol kulağına kâmet okunmasının anlamı üzerine düşünelim. Sabah ezanında diğer ezanlardan farklı olarak okunan \"es-Salatu hayrun minen nevm\" (Namaz uykudan daha hayırlıdır) cümlesinin hissettirdiklerini konuşalım.",
            slides: [
              {
                type: 'cover',
                title: 'Cami ve Ezanı Öğreniyorum',
                subtitle: 'Bölüm II: Ezanın Evrensel Çağrısı',
                emoji: '🕌',
              },
              {
                type: 'content',
                title: 'Ezan Bizi Namaza Çağırır',
                emoji: '📖',
                body: "Sevgili Peygamberimiz ve Müslümanlar Mekke'den Medine'ye hicret etmişti. Müslümanların sayısı Medine'de günden güne artıyordu. Peygamberimizin arkadaşları gündelik hayatlarını ve ibadetlerini aksatmadan sürdürüyor, namaz kılacakları vakitleri güneşin konumuna göre belirliyorlardı. Ama farklı zamanlarda camiye geldiklerinden birlikte namaz kılamıyorlardı."
              },
              {
                type: 'content',
                title: 'Ortak Bir Çağrı Arayışı',
                emoji: '🤔',
                body: "Peygamber Efendimiz ise camide, cemaatle namaz kılmanın çok önemli olduğunu söylüyordu. Müslümanlara namaz vakitlerini duyurmak ve onları ibadete çağırmak için ortak bir işarete ihtiyaç vardı. Ateş mi yakmalıydı? Boru ya da çan mı çalmalıydı? İnsanları namaza nasıl davet etmeliydi?"
              },
              {
                type: 'content',
                title: 'İlk Ezanın Doğuşu',
                emoji: '✨',
                body: "Sahabeden Abdullah bin Zeyd'in ve diğer bazı kimselerin gördüğü rüya ile sorun çözüme kavuştu. Abdullah'a rüyasında ezanın sözleri öğretilmişti. Gördüğü rüyayı hemen gelip Peygamberimize anlattı.\n\nPeygamber Efendimiz, ezanın Bilâl'e öğretilmesini ve ezanı onun okumasını istedi. Çünkü Bilâl'in sesi hem gür hem de güzeldi. Bilâl yüksek bir yere çıkarak ilk ezanı okudu. Ezanı duyan Müslümanlar hep birlikte namaz kılmak için camide toplandılar. İşte o günden itibaren Müslüman topraklarda ezan hiç susmadı."
              },
              {
                type: 'content',
                title: 'Ezanın Anlamı',
                emoji: '💡',
                body: "Ezan hem namaza davettir hem de Allah'ın birliğini, Hz. Muhammed'in O'nun peygamberi olduğunu ilandır. Bu sebeple, ezana saygı gösterir ve güzelce dinleriz."
              },
              {
                type: 'content',
                title: 'Ezan Sözleri ve Anlamları',
                emoji: '🤲',
                items: [
                  "Allahu Ekber Allahu Ekber (Allah, en büyüktür.)",
                  "Eşhedü en la ilahe illallah (Ben şahitlik ederim ki Allah'tan başka ilah yoktur.)",
                  "Eşhedü enne Muhammeden Resûlullah (Ben şahitlik ederim ki Hz. Muhammed, Allah'ın elçisidir.)",
                  "Hayye ale's-salâh (Haydi namaza!)",
                  "Hayye ale'l-felâh (Haydi kurtuluşa!)",
                  "Allahu Ekber Allahu Ekber (Allah, en büyüktür.)",
                  "Lâ ilahe illallah (Allah'tan başka ilâh yoktur.)"
                ]
              },
              {
                type: 'content',
                title: 'Biliyor Muydun?',
                emoji: '❓',
                items: [
                  "Sabah ezanında Hayye ale'l-felah'dan sonra \"es-Salatu hayrun minen nevm\" (Namaz uykudan daha hayırlıdır) denilir.",
                  "\"Kâmet\", farz namazlardan önce müezzin tarafından insanlara namazın başlamak üzere olduğunu duyurmak için okunur. Ezanla aynıdır. Sadece kamette \"Hayye ale'l-felâh\" dedikten sonra \"Kad kâmeti's-salah\" denilir.",
                  "Yeni doğan bebeklerin sağ kulağına ezan, sol kulağına kâmet okunur."
                ]
              },
              {
                type: 'hadith',
                title: 'Cemaatle Namazın Sevabı',
                emoji: '🌹',
                body: "\"Bir kimsenin cemaatle kıldığı namazın sevabı, evde veya çarşıda (dükkanında) yalnız başına kıldığı namazın sevabından yirmi beş kat fazladır. Zira o kimse, güzelce abdest alır da sırf namaz kılmak maksadıyla mescide gelirse, her adım attığında derecesi bir kat yükselir ve bir günahı da dökülür. Namazı kılıp da abdestini bozmadan namaz kıldığı yerde oturduğu müddetçe melekler ona \"Allah'ım, ona rahmet et; Allah'ım ona merhamet et.\" diye dua ederler. O kimse, namazı beklediği müddetçe namazda gibi olur.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Araştıralım, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "Namazlarımızı camide kılmakla evde kılmak arasında ne gibi farklar vardır?"
                ]
              }
            ]
          },
          {
            id: "w1_d2_l3",
            lessonNumber: 3,
            title: "Cami ve Ezanı Öğreniyorum - Bölüm III: Caminin Bölümleri ve Sosyal Yaşam",
            outcomes: [
              "Caminin iç ve dış mimari bölümlerini (mihrap, minber, kürsü, minare, şerefe, şadırvan, kubbe) tanır ve işlevlerini açıklar.",
              "Caminin ibadet yeri olmasının yanı sıra bir ilim merkezi ve toplumsal birleşme mekânı olduğunu kavrar."
            ],
            wisdomNotes: "Camiler, birlikte ibadet ettiğimiz yerlerdir. Camiye girmek bizi rahatlatır, camiyle buluşmak bizi dinlendirir. Camiler namaz kılınıp dua edilen ibadet yerleri olmasının yanında, hutbe, vaaz ve sohbetlerle faydalı bilgiler öğrendiğimiz birer ilim merkezidir. Bizleri bir araya getiren camiler, birlikte secde ettiğimiz, aynı kıbleye yöneldiğimiz ve tek yürek olarak Allah'a yalvardığımız mekânlardır. Bu yüzden camileri en güzel şekilde imar eder ve bakımına özen gösteririz. Onları her zaman temiz tutarız. Bayram ve cuma namazlarını her zaman camide, günlük namazlarımızı ise mümkün olduğu kadar camilerde cemaatle kılmaya çalışırız. Çünkü namazlarımızı camide kılmak, Peygamberimizin sünnetidir. Aynı safta Müslüman kardeşlerimizle omuz omuza ibadet etmek bize büyük mutluluk ve güven verir.",
            interactiveActivity: "Camide namazları kıldıran, hutbe okuyan ve dini bilgileri öğreten kişiye 'imam', ezan okuyan kişiye 'müezzin' denir. Sınıfta caminin bölümleri (Kürsü, Minare, Kubbe, Şadırvan, Minber, Mihrap) ile anlamlarını eşleştirme etkinliği yapalım.",
            slides: [
              {
                type: 'cover',
                title: 'Cami ve Ezanı Öğreniyorum',
                subtitle: 'Bölüm III: Caminin Bölümleri ve Sosyal Yaşam',
                emoji: '🕌',
              },
              {
                type: 'content',
                title: 'Cami ve Bölümleri',
                emoji: '📖',
                body: "Camiler, birlikte ibadet ettiğimiz yerlerdir. Camiye girmek bizi rahatlatır, camiyle buluşmak bizi dinlendirir. Camiler namaz kılınıp dua edilen ibadet yerleri olmasının yanında, hutbe, vaaz ve sohbetlerle faydalı bilgiler öğrendiğimiz birer ilim merkezidir."
              },
              {
                type: 'content',
                title: 'Birlik ve Beraberlik Mekânı',
                emoji: '🤝',
                body: "Bizleri bir araya getiren camiler, birlikte secde ettiğimiz, aynı kıbleye yöneldiğimiz ve tek yürek olarak Allah'a yalvardığımız mekânlardır. Bu yüzden camileri en güzel şekilde imar eder ve bakımına özen gösteririz. Onları her zaman temiz tutarız."
              },
              {
                type: 'content',
                title: 'Camide Cemaatle Namaz',
                emoji: '✨',
                body: "Bayram ve cuma namazlarını her zaman camide, günlük namazlarımızı ise mümkün olduğu kadar camilerde cemaatle kılmaya çalışırız. Çünkü namazlarımızı camide kılmak, Peygamberimizin sünnetidir. Aynı safta Müslüman kardeşlerimizle omuz omuza ibadet etmek bize büyük mutluluk ve güven verir."
              },
              {
                type: 'content',
                title: 'Caminin Bölümleri - 1',
                emoji: '🏛️',
                items: [
                  "MİHRAP: Camide kıble yönünde yer alan ve imamın namaz kıldırdığı mekan.",
                  "MİNBER: Mihrabın sağında bulunan, cuma ve bayram hutbelerinin okunduğu merdivenli kısım.",
                  "KÜRSÜ: Camide vaaz veya sohbet yapılan yer."
                ]
              },
              {
                type: 'content',
                title: 'Caminin Bölümleri - 2',
                emoji: '🏛️',
                items: [
                  "KUBBE: Caminin yarım küre şeklindeki tavanı.",
                  "MİNARE: Ezan okunan yer.",
                  "ŞADIRVAN: Caminin bahçesinde insanların abdest alması için yapılmış çeşmelerin bulunduğu yer."
                ]
              },
              {
                type: 'content',
                title: 'Biliyor Muydun?',
                emoji: '❓',
                items: [
                  "Camide namazları kıldıran, hutbe okuyan ve dini bilgileri öğreten kişiye \"imam\" denir.",
                  "Ezan okuyan kişiye \"müezzin\" denir."
                ]
              },
              {
                type: 'activity',
                title: 'Cami ve Bölümleri Eşleştirme',
                emoji: '🧩',
                body: "Aşağıda caminin bölümleri ve onlarla ilgili açıklamalar verilmiş. Haydi resimleri ve açıklamaları doğru isimle eşleştirelim! (Kürsü, Minare, Kubbe, Şadırvan, Minber, Mihrap)"
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Araştıralım, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "Ülkemizdeki Selimiye, Süleymaniye gibi tarihi camiler hakkında araştırma yaparak arkadaşlarımızla paylaşalım.",
                  "Camilerin toplumun birlik ve beraberliğine katkıları nelerdir?",
                  "Camiye ilk defa ne zaman ve kiminle gittiğini hatırlıyor musun? Nasıl bir duyguydu?",
                  "Caminin en çok hangi bölümü dikkatini çekti?",
                  "Evinize en yakın caminin adını biliyor musun?"
                ]
              }
            ]
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
            title: "Peygamberimizin Çocukluğu ve Gençliği - Bölüm 1",
            outcomes: [
              "Hz. Muhammed'in (s.a.v.) doğumunu, ailesini ve isminin anlamını açıklar.",
              "Peygamber Efendimizin (s.a.v) çocukluk yıllarını ve sütannesi Hz. Halime'nin yanındaki yaşamını kavrar."
            ],
            wisdomNotes: "571 yılı Nisan ayının son günleriydi. Abdülmuttalib, bir torun bekliyordu. Torununa \"Muhammed\" adını koydu. Muhammed \"övülen kişi\" demekti. Peygamber Efendimizin (s.a.v) annesi Hz. Âmine, onu bir süreliğine büyütecek sütannesi Hz. Halime'ye verdi. Annesi vefat ettiğinde Peygamber Efendimiz (s.a.v) altı yaşındaydı.",
            interactiveActivity: "Peygamber Efendimizin (s.a.v) doğumu ve ailesi hakkında kısa bir sohbet edip, kitabımızdaki 'Bilin Bakalım' şiirini birlikte okuyalım.",
            slides: [
              {
                type: 'cover',
                title: 'Peygamber Efendimizin Çocukluğu ve Gençliği',
                subtitle: 'Bölüm 1: Âlemlere Bir Müjde Geliyor',
                emoji: '🕌'
              },
              {
                type: 'poem',
                title: 'Doğum Müjdesi',
                emoji: '🌙',
                body: "Beş yüz yetmiş bir Nisandı,\nGelen en güzel insandı.\nDedesi öptü, kokladı,\n\"Muhammed'dir\" dedi adı."
              },
              {
                type: 'content',
                title: 'Cahiliye Döneminin Karanlığı',
                emoji: '🌑',
                body: "Peygamber Efendimiz (s.a.v) doğmadan önce Mekke'de ve dünyada cehalet hakimdi. İnsanlar kendi elleriyle yaptıkları putlara tapıyor, güçsüzleri ve kimsesizleri eziyorlardı. Dünyanın, adaleti ve ahlakı öğretecek bir rehbere, aydınlık bir güneşe ihtiyacı vardı."
              },
              {
                type: 'content',
                title: 'Âlemlere Bir Müjde Geliyor',
                emoji: '✨',
                body: "571 yılı Nisan ayının son günleriydi. Mekke'nin lideri Abdülmuttalib, büyük bir heyecanla bir torun bekliyordu. 20 Nisan Pazartesi günüydü. Koşarak biri geldi. \"Müjde! Müjde Abdülmuttalib! Bir torunun oldu.\" dedi."
              },
              {
                type: 'content',
                title: 'Hüzün ve Sevinç Bir Arada',
                emoji: '📖',
                body: "Abdülmuttalib, kalbinin hızla çarptığını hissetti. Gözlerinden sevinç gözyaşları süzülüverdi. Hızlı adımlarla eve geldi. Eve girdiğinde minik torununun ağlama sesleri duyuluyordu. Onu kucağına aldı, yüreğini hüzünle karışık bir sevinç kapladı."
              },
              {
                type: 'content',
                title: 'Yetim Doğan Güneş',
                emoji: '🌅',
                body: "Torununu öpüp koklarken oğlu Abdullah'ın kokusunu hissetti. Abdullah, Peygamber Efendimizin (s.a.v) babasıydı. Peygamber Efendimizin (s.a.v) doğumundan iki ay önce vefat etmiş, yavrusunu dünya gözüyle görememişti. Efendimiz (s.a.v) dünyaya yetim olarak gelmişti."
              },
              {
                type: 'content',
                title: 'Muhammed: Övülen Kişi',
                emoji: '💡',
                body: "Abdülmuttalib, torununa Kâbe'nin gölgesinde \"Muhammed\" adını koydu. Kendisine bir torun verdiği için Yüce Allah'a şükretti. Mekkeliler, \"Ona niçin bu adı koydun?\" diye sordular. O da, \"Yerde insanlar, gökte melekler onu övsün diye koydum.\" karşılığını verdi."
              },
              {
                type: 'poem',
                title: 'BİLİN BAKALIM?',
                emoji: '❓',
                body: "Abdullah babasıydı,\nİbrâhim'in duasıydı.\nAnnesidir Hz. Âmine,\nSütannesidir Hz. Halime."
              },
              {
                type: 'content',
                title: 'Mekke\'nin Havası ve Gelenekler',
                emoji: '🐪',
                body: "Havası çok sıcak olan Mekke, yeni doğan bebeklerin sağlıklı bir şekilde büyümesi için pek uygun bir yer değildi. Bu yüzden Mekke'deki aileler, bebekleri daha serin ve temiz havası olan yaylalarda yaşayan sütannelere verirlerdi."
              },
              {
                type: 'content',
                title: 'Sütannesi Hz. Halime',
                emoji: '🤲',
                body: "Peygamber Efendimizin (s.a.v) annesi Hz. Âmine de bu geleneğe uyarak, çocuğunu bir süreliğine büyütecek bir sütanne buldu. Bu kadının adı Hz. \"Halime\" idi. Sütannesi Hz. Halime, Peygamber Efendimizi (s.a.v) ilk gördüğü andan itibaren çok sevmişti."
              },
              {
                type: 'content',
                title: 'Hz. Halime\'nin Evine Gelen Bereket',
                emoji: '🌾',
                body: "Hz. Muhammed (s.a.v), sütannesi Hz. Halime'nin evine adım atar atmaz o eve büyük bir huzur ve bereket gelmişti. Cılız hayvanlar süt vermeye başlamış, kurumuş tarlalar yeşermişti. Hz. Halime ve kocası Haris, onun çok farklı ve özel bir çocuk olduğunu hemen anlamışlardı."
              },
              {
                type: 'content',
                title: 'Köyde Geçen Neşeli Yıllar',
                emoji: '🏕️',
                body: "Süt kardeşleri Hz. Şeyma, Abdullah ve Üneyse de ona çok alışmıştı. Peygamber Efendimiz (s.a.v), köy ortamında koşup oynuyor, koyun otlatıyor, günlerini neşe içinde geçiriyordu. Bu arada anadili olan Arapça'yı da en temiz ve düzgün hâliyle öğrenmişti."
              },
              {
                type: 'content',
                title: 'Anneye Yeniden Kavuşma',
                emoji: '👩‍👦',
                body: "Şefkatli bir kadın olan Hz. Halime ona gözü gibi bakıyordu. Ancak adı güzel kendi güzel Hz. Muhammed (s.a.v) beş yaşına geldiğinde annesi Hz. Âmine ondan daha fazla ayrı kalmak istemedi. Onu yanına alarak Mekke'ye getirdi."
              },
              {
                type: 'content',
                title: 'Hüzünlü Bir Veda: Ebva Köyü',
                emoji: '🥺',
                body: "Bir zaman sonra Hz. Âmine, altı yaşındaki oğlunu yanına alarak Medine'deki akrabalarını ziyarete gitti. Dönüş yolunda Ebva köyüne geldiklerinde annesi Hz. Âmine hastalandı ve orada vefat etti. Efendimiz (s.a.v) artık hem yetim hem de öksüz kalmıştı."
              },
              {
                type: 'quiz',
                title: 'Siyer Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimize (s.a.v) 'Muhammed' ismini kim vermiştir ve bu ismin anlamı nedir?",
                options: ["Babası Abdullah - Temiz kişi", "Dedesi Abdülmuttalib - Övülen kişi", "Amcası Ebu Talib - Lider kişi", "Sütannesi Hz. Halime - Doğru kişi"],
                correct: "Dedesi Abdülmuttalib - Övülen kişi",
                wisdom: "Harika! Dedesi ona yerde ve gökte övülmesi için bu muazzam ismi vermiştir."
              },
              {
                type: 'quiz',
                title: 'Siyer Yarışması - 2',
                emoji: '🎯',
                question: "Peygamber Efendimiz (s.a.v) doğmadan 2 ay önce vefat eden babasının adı ve 6 yaşında Ebva köyünde vefat eden annesinin adı sırasıyla hangisidir?",
                options: ["Ebu Talib / Hz. Halime", "Haris / Hz. Şeyma", "Abdullah / Hz. Âmine", "Abdülmuttalib / Hz. Fatıma"],
                correct: "Abdullah / Hz. Âmine",
                wisdom: "Tebrikler! Babası Abdullah, annesi ise Hz. Âmine'dir."
              }
            ]
          },
          {
            id: "w1_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Çocukluğu ve Gençliği - Bölüm 2",
            outcomes: [
              "Peygamber Efendimizin (s.a.v) dedesi Abdülmuttalib ve amcası Ebu Talib'in yanındaki yaşamını anlatır.",
              "Peygamber Efendimizin (s.a.v) gençlik yıllarındaki dürüstlüğünü ve 'Muhammedü'l-Emin' sıfatını açıklar."
            ],
            wisdomNotes: "Annesinin vefatından sonra 8 yaşına kadar dedesinin yanında kalan Peygamber Efendimiz (s.a.v), sonrasında amcası Ebu Talib'in himayesine girmiştir. Gençlik yıllarındaki üstün ahlakı sebebiyle Mekkeliler ona 'Muhammedü'l-Emin' adını vermişlerdir.",
            interactiveActivity: "Peygamber Efendimizin (s.a.v) 'Emin' sıfatı üzerine konuşup dürüstlüğün insana neler kazandıracağını tartışalım.",
            slides: [
              {
                type: 'cover',
                title: 'Peygamber Efendimizin Çocukluğu ve Gençliği',
                subtitle: 'Bölüm 2: Dedesi ve Amcasının Yanında',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Dedesi Peygamber Efendimize Kucak Açıyor',
                emoji: '📖',
                body: "Peygamber Efendimizin (s.a.v) dedesi Abdülmuttalib, Mekke'nin lideri olan dürüst, cesur ve iyiliksever bir insandı. Peygamber Efendimiz (s.a.v), altı yaşında annesi Hz. Âmine'yi kaybedip tamamen öksüz kalınca dedesi ona kucak açtı."
              },
              {
                type: 'content',
                title: 'Dedesinin Gözbebeği',
                emoji: '❤️',
                body: "İki yıl boyunca hep birlikteydiler. Dedesi, Peygamber Efendimiz (s.a.v) olmadan yemeğe oturmaz, onu yanından hiç ayırmazdı. Hatta Kâbe'nin gölgesindeki özel minderine sadece onun oturmasına izin verirdi."
              },
              {
                type: 'content',
                title: 'Büyük Bir Adam Olacak',
                emoji: '🌟',
                body: "İnsanlar dedesine ona neden bu kadar düşkün olduğunu sorduklarında, torunu Hz. Muhammed'e (s.a.v) şefkatle bakarak: \"İnanıyorum ki o, ileride çok büyük bir adam olacak.\" derdi."
              },
              {
                type: 'content',
                title: 'Yeniden Ayrılık ve Ebu Talib',
                emoji: '🥺',
                body: "Peygamber Efendimiz (s.a.v) sekiz yaşına geldiğinde onu çok seven dedesi Abdülmuttalib vefat etti. Dedesi ölmeden önce onu, öz oğullarından biri olan amcası Ebu Talib'e emanet etti."
              },
              {
                type: 'content',
                title: 'Amcasının Evinde Büyüyor',
                emoji: '🏡',
                body: "Ebu Talib, Hz. Muhammed'i (s.a.v) kendi çocuklarından hiç ayırmadı. Amcasını ve yengesi Fatıma'yı çok seven Peygamber Efendimiz (s.a.v), çocukluktan gençliğe uzanan yıllarını onların yanında sevgi ve güven içinde geçirdi."
              },
              {
                type: 'content',
                title: 'Vefakar Yenge: Fatıma Hatun',
                emoji: '🌸',
                body: "Yengesi Fatıma (r.anha), yetim ve öksüz kalan Peygamber Efendimize (s.a.v) adeta bir öz anne gibi bakıyordu. Kendi çocukları açken bile önce onun karnını doyurur, saçını tarar ve onu asla incitmezdi. Peygamber Efendimiz (s.a.v) de ona hep 'Anneciğim' derdi."
              },
              {
                type: 'content',
                title: 'Şam Yolculuğu ve Şefkat',
                emoji: '🐪',
                body: "Ebu Talib, iyi kalpli ve güvenilir bir tüccardı. Bir gün ticaret için Şam'a gidecekti. Peygamber Efendimiz (s.a.v) ondan ayrı kalmak istemediğini söyleyince Ebu Talib, \"Seni yanımda götüreceğim, artık hiç ayrılmayacağız.\" diyerek onu da kervana kattı."
              },
              {
                type: 'content',
                title: 'Çalışkan Bir Genç',
                emoji: '💪',
                body: "Peygamber Efendimiz (s.a.v) amcasının evinde asla yük olmadı. Gün oluyor ev işlerine yardım ediyor, gün oluyor Mekke tepelerinde hayvanları otlatarak çobanlık yapıyordu. Tembelliği hiç sevmez, daima çalışırdı."
              },
              {
                type: 'content',
                title: 'Kötülüklerden Uzak Bir Hayat',
                emoji: '🛡️',
                body: "Mekke'de gençler zamanlarını eğlence ve boş işlerle geçirip putlara taparken, O bu tür ortamlardan hep uzak durdu. Yüce Allah onu cahiliye döneminin tüm kötülüklerinden, yalanından ve adaletsizliğinden korudu."
              },
              {
                type: 'content',
                title: 'Muhammedü\'l-Emin',
                emoji: '⭐',
                body: "Peygamber Efendimiz (s.a.v), şerefli bir aileden gelen, iyi yetişmiş bir gençti. Mekke'de herkes onu takdir eder, güzel ahlâkından bahsederdi. Özü sözü bir olduğu, asla yalan söylemediği için ona \"Muhammedü'l-Emin\" yani \"Güvenilir Muhammed\" adını vermişlerdi."
              },
              {
                type: 'content',
                title: 'Dürüstlüğün Ödülü: Hz. Hatice',
                emoji: '💍',
                body: "Hz. Hatice (r.a), Mekke'de sevilen, saygı gören ve ticaretle uğraşan çok asil, zengin bir kadındı. Peygamber Efendimizin (s.a.v) o muazzam dürüstlüğünü duydu ve kervanlarını onun yönetmesini istedi. O'nun ahlakına hayran kalınca da evlilik teklif etti."
              },
              {
                type: 'content',
                title: 'Mutlu Bir Yuva Kuruluyor',
                emoji: '🏠',
                body: "Peygamber Efendimiz (s.a.v) 25 yaşına geldiğinde Hz. Hatice (r.a) ile evlendi. Hz. Muhammed (s.a.v) ve Hz. Hatice (r.a), birbirlerini çok seviyordu. Mutlu, huzurlu ve dürüstlük üzerine kurulu bir yuva kurarak tüm Mekke'ye örnek olmuşlardı."
              },
              {
                type: 'content',
                title: 'Büyük Bir Vefa Örneği',
                emoji: '🤝',
                body: "Peygamber Efendimiz (s.a.v) evlendikten sonra amcası Ebu Talib'in maddi sıkıntı yaşadığını gördü. Yıllarca kendisine bakan amcasına bir vefa borcu olarak, amcasının oğlu Hz. Ali'nin (r.a) bakımını üstlenip onu kendi evine aldı."
              },
              {
                type: 'quiz',
                title: 'Siyer Yarışması - 3',
                emoji: '🎯',
                question: "Peygamber Efendimize (s.a.v) gençliğinde dürüstlüğü ve sır tutması sebebiyle Mekkeliler tarafından verilen ve 'Güvenilir' anlamına gelen lakap nedir?",
                options: ["Seyyidü'l-Mürselin", "Muhammedü'l-Emin", "Hatemü'l-Enbiya", "Ebu'l-Kasım"],
                correct: "Muhammedü'l-Emin",
                wisdom: "Mükemmel! Gençliğinde hiç yalan söylemediği için ona Güvenilir Muhammed anlamına gelen Muhammedü'l-Emin dediler."
              },
              {
                type: 'quiz',
                title: 'Siyer Yarışması - 4',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v) 8 yaşından 25 yaşına kadar evinde kaldığı ve onu koruyan amcası kimdir?",
                options: ["Abbas", "Hz. Hamza (r.a)", "Ebu Talib", "Ebu Leheb"],
                correct: "Ebu Talib",
                wisdom: "Doğru cevap! Amcası Ebu Talib ona canı gibi bakmış ve onu tüm kötülüklerden korumuştur."
              }
            ]
          },
          {
            id: "w1_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimizin Çocukluğu ve Gençliği - Bölüm 3",
            outcomes: [
              "Peygamber Efendimizin (s.a.v) aile hayatını ve çocuklarını bilir.",
              "Kâbe Hakemliği (Hacerü'l-Esved) olayını kavrar ve Peygamber Efendimizin (s.a.v) çözüm becerisini değerlendirir."
            ],
            wisdomNotes: "Şefkatli bir baba olan Peygamber Efendimiz (s.a.v) ile Hz. Hatice'nin (r.a) dört kızı, iki oğlu olmuştur. Kâbe'nin tamiri sırasında Hacerül-Esved taşını yerine koyma konusunda çıkan kavgayı, adaleti ve aklıyla (Kâbe Hakemliği) kan dökülmeden çözmüştür.",
            interactiveActivity: "Peygamber Efendimizin (s.a.v) Kâbe Hakemliği olayını sınıfta canlandırarak adaletin ve aklın gücünü tartışalım.",
            slides: [
              {
                type: 'cover',
                title: 'Peygamber Efendimizin Çocukluğu ve Gençliği',
                subtitle: 'Bölüm 3: Anlaşmazlıkları Çözen Peygamber',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Gül Yüzlü Çocuklar',
                emoji: '🌸',
                body: "Şefkatli bir baba olan Peygamber Efendimiz (s.a.v) ile bilgili bir anne olan Hz. Hatice'nin (r.a) dört kızı, iki oğlu olmuştu. Bunlar; Kasım, Hz. Zeynep (r.a), Hz. Ümmü Gülsüm (r.a), Hz. Rukiye (r.a), Hz. Fâtıma (r.a) ve Abdullah'tı."
              },
              {
                type: 'content',
                title: 'Ebu\'l Kasım Lakabı',
                emoji: '👶',
                body: "İlk çocukları Kasım'ın doğmasıyla birlikte Arap geleneklerine göre Peygamber Efendimiz (s.a.v) \"Ebu'l-Kasım\" yani \"Kasım'ın babası\" lakabıyla anılmaya başlanmıştı. Hz. Hatice'nin (r.a) vefatından yıllar sonra ise Hz. Mariye'den (r.a) İbrahim adında bir oğlu daha olmuştu."
              },
              {
                type: 'hadith',
                title: 'Bir Hadis Öğreniyorum',
                emoji: '🌹',
                body: "\"Hiçbir anne baba, çocuğuna güzel ahlaktan daha değerli bir hediye vermemiştir.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'content',
                title: 'Kötülüklerin İçinde Bir İyilik Abidesi',
                emoji: '🤝',
                body: "Peygamber Efendimiz (s.a.v), çevresindekilere güven veren, herkesle iyi geçinen, nazik bir insandı. Her türlü kötülüğün var olduğu bir ortamda yaşamasına rağmen daima dürüst davranmış, kimseye eziyet etmemişti."
              },
              {
                type: 'content',
                title: 'Mekke\'de Bozulan Güven',
                emoji: '📉',
                body: "Otuz beş yaşına girmişti. O günlerde Mekke'de kimsenin kimseye güveni kalmamış, herkes kendi kabilesinin üstünlüğünü savunur hale gelmişti. Peygamber Efendimiz (s.a.v) toplumdaki bu sevgisizliğe ve güvensizliğe çok üzülüyordu."
              },
              {
                type: 'content',
                title: 'Kâbe\'nin Tamiri',
                emoji: '🛠️',
                body: "Mekke'de yaşanan büyük bir sel felaketi sonucu Kâbe'nin duvarları yıkılmıştı. Kureyş kabileleri bir araya gelerek Kâbe'yi yeniden inşa etmeye başladılar. Tamir işlemi oldukça uyumlu ilerliyordu."
              },
              {
                type: 'content',
                title: 'Kriz Anı: Hacerü\'l-Esved',
                emoji: '⚠️',
                body: "Sıra kutsal siyah taş olan 'Hacerü'l-Esved'i yerine yerleştirmeye geldiğinde büyük bir kriz çıktı. Her kabile bu şerefli görevi kendisi yapmak istiyor, kimse geri adım atmıyordu. Kılıçlar çekilmiş, kan dökülmesi an meselesiydi."
              },
              {
                type: 'content',
                title: 'Beklenen Hakem',
                emoji: '⚖️',
                body: "Mekke'nin yaşlılarından biri bir teklifte bulundu: 'Şu kapıdan (Beni Şeybe kapısı) Kâbe alanına ilk giren kişiyi hakem tayin edelim, o ne derse kabul edelim.' Herkes bu fikri onayladı ve kapıya bakarak beklemeye başladılar."
              },
              {
                type: 'content',
                title: 'İşte Muhammedü\'l-Emin Geliyor!',
                emoji: '🌟',
                body: "Bir gün düşünceli adımlarla Kâbe'ye doğru yürüyen Peygamber Efendimiz (s.a.v) kapıdan içeri girdi. Onu görenler hep bir ağızdan sevinçle: 'İşte el-Emin! İşte Muhammed! O doğru ve dürüst bir adam, onun vereceği karara hepimiz razıyız' diye bağırdılar."
              },
              {
                type: 'content',
                title: 'Kusursuz ve Zekice Bir Çözüm',
                emoji: '💡',
                body: "Durumu öğrenen Peygamber Efendimiz (s.a.v), zekasıyla ve adaletiyle muazzam bir çözüm buldu. Yere geniş bir örtü (hırkasını) serdi ve kutsal taşı kendi elleriyle örtünün tam ortasına yerleştirdi."
              },
              {
                type: 'content',
                title: 'Kan Dökülmesini Önleyen Adalet',
                emoji: '🕊️',
                body: "Ardından her kabilenin liderini örtünün bir ucundan tutmaya çağırdı. Liderler örtüyü havaya kaldırarak taşı konulacağı hizaya kadar getirdiler. Son olarak Peygamber Efendimiz (s.a.v) taşı kendi elleriyle alıp duvardaki yerine yerleştirdi."
              },
              {
                type: 'content',
                title: 'Barış ve Memnuniyet',
                emoji: '🤝',
                body: "Peygamber Efendimizin (s.a.v) bu dâhiyane çözümü sayesinde hiçbir kabile dışlanmamış, hepsi bu onurlu göreve ortak olmuştu. Kan dökülmesi engellenmiş ve herkes barış içinde dağılmıştı."
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "Mekkeliler birbirlerine kılıç çekecek kadar kızgınken, Peygamber Efendimizi (s.a.v) görünce neden hemen sakinleştiler ve onu hakem kabul ettiler?",
                  "Hacerü'l-Esved olayındaki bu çözüm, Peygamber Efendimizin (s.a.v) zekası ve birleştirici gücü hakkında bize ne gösterir?"
                ]
              },
              {
                type: 'activity',
                title: 'Yonca Etkinliği: Peygamberimizin Çevresi',
                emoji: '☘️',
                items: [
                  "Peygamber Efendimizin (s.a.v) yakın çevresindeki şu isimlerin ona yakınlık derecesini bulalım:",
                  "Ebu Talip (Amcası) | Hz. Hamza (r.a) (Amcası) | Hz. Şeyma (Süt Kardeşi)",
                  "Hz. Zeynep (r.a), Hz. Fatıma (r.a), Hz. Rukiye (r.a), Hz. Ümmü Gülsüm (r.a) (Kızları) | Kasım, Abdullah, İbrahim (Oğulları)"
                ]
              },
              {
                type: 'quiz',
                title: 'Hakemlik Yarışması',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v), Kâbe'nin onarımı sırasında Hacerü'l-Esved taşının yerleştirilmesi krizini örtü kullanarak barışçıl yolla çözmesine tarihte ne ad verilir?",
                options: ["Hicret", "Veda Hutbesi", "Kâbe Hakemliği", "Boykot"],
                correct: "Kâbe Hakemliği",
                wisdom: "Mükemmel! Peygamber Efendimiz (s.a.v) aklı ve adaletiyle Kâbe Hakemliği yaparak büyük bir savaşı önlemiştir."
              }
            ]
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
            title: "Ahlâk Nedir? - Bölüm I: Ahlâk Kavramı ve Toplum Huzuru",
            outcomes: [
              "Ahlâk kavramını bireysel özellikler ve farklılıklar üzerinden tanımlar.",
              "Güzel ahlâk sahibi olmanın birey ve toplum mutluluğu üzerindeki faydalarını açıklar."
            ],
            wisdomNotes: "Her birimiz, bizi diğer kişilerden ayıran farklı özellikler taşırız. Kimi arkadaşımız paylaşmayı, kimisi temizliği, kimisi de doğruluğu çok önemser. Bazılarımız sabırlıyken bazılarımız acelecidir. Bazı insanlar daha şefkatli, bazı insanlar daha cömerttir. İşte ahlâk, bir kişinin taşıdığı bu özelliklerin adıdır.",
            interactiveActivity: "Sınıftaki arkadaşlarımızın öne çıkan güzel özelliklerini (sabır, cömertlik, temizlik, doğruluk) tahtada listeleyerek ahlâk kavramını somutlaştıralım.",
            slides: [
              {
                type: 'cover',
                title: "Ahlâk Nedir?",
                subtitle: "1. Hafta • 4. Gün • 1. Ders",
                emoji: "🌱"
              },
              {
                type: 'content',
                title: "Giriş: Bizleri Birbirimizden Ayıran Özellikler",
                emoji: "📖",
                body: "Her birimiz, bizi diğer kişilerden ayıran farklı özellikler taşırız. Kimi arkadaşımız paylaşmayı, kimisi temizliği, kimisi de doğruluğu çok önemser. Bazılarımız sabırlıyken bazılarımız acelecidir. Bazı insanlar daha şefkatli, bazı insanlar daha cömerttir. İşte ahlâk, bir kişinin taşıdığı bu özelliklerin adıdır."
              },
              {
                type: 'content',
                title: "Güzel Ahlâkın Bireysel ve Çevresel Faydaları",
                emoji: "✨",
                body: "Güzel ahlâk sahibi olmak, hem kendimize hem de içinde yaşadığımız çevremize faydalı olmamızı sağlar. Birbirlerine karşı sevgi ve saygı kuralları içinde yaşayan, paylaşan, güvenilir ve dürüst olan, iyilik yapan, sorumluluklarının farkında olan insanların yaşadığı bir toplumda herkes mutlu ve huzurlu olur. Ahlâkı güzel insanlar, barış içinde ve kardeşçe yaşar."
              },
              {
                type: 'discussion',
                title: "Ahlâkımızı Güzelleştirmek İçin Ne Yapmalıyız?",
                emoji: "🤔",
                items: [
                  "Günlük yaşantımızda ahlâkımızı güzelleştirmek için pratik olarak neler yapmalıyız, hangi davranışlara dikkat etmeliyiz?",
                  "Herkesin güzel ahlâk sahibi olduğu bir toplum hayal edelim. Sizce böyle bir mahallede veya okulda yaşamak nasıl olurdu?"
                ]
              },
              {
                type: 'content',
                title: "Ahlaki Davranış Modelleri",
                emoji: "💎",
                body: "Ahlaklı bir birey toplumda şu temel direklerle var olur: İnsanlara karşı sevgi duymak, haklarına saygı göstermek, elindeki nimetleri cömertçe paylaşmak, her sözünde güvenilir ve dürüst olmak, sorumluluklarının bilincinde hareket etmek."
              },
              {
                type: 'content',
                title: "Bireysel Farklılıklarımız ve Sabır",
                emoji: "💡",
                body: "Ahlaki yapımız içindeki sabır and acelecilik gibi durumlar ilişkilerimizi doğrudan etkiler. Sabırlı ve şefkatli bir insan olmak, çevremizdeki insanlarla barış içinde ve kardeşçe yaşamanın en temel anahtarıdır."
              },
              {
                type: 'quiz',
                title: "Ahlâk Tanımı Yarışması",
                emoji: "🎯",
                question: "Bir kişiyi diğer kişilerden ayıran dürüstlük, temizlik, paylaşma, şefkat, sabır veya cömertlik gibi özelliklerin tamamına ne ad verilir?",
                options: ["Gelenek", "Ahlâk", "Özgüven", "Trafik"],
                correct: "Ahlâk",
                wisdom: "Doğru cevap! Bir kişinin taşıdığı tüm bu ahlaki özelliklerin adına ahlâk denir."
              },
              {
                type: 'quiz',
                title: "Toplum Huzuru Yarışması",
                emoji: "🎯",
                question: "Dürüst, güvenilir, paylaşımcı ve iyiliksever insanların yaşadığı bir toplumda aşağıdakilerden hangisi gerçekleşir?",
                options: ["Herkes mutsuz ve huzursuz olur.", "Herkes mutlu ve huzurlu olur.", "İnsanlar birbirine güvenmez.", "Barış ve kardeşlik bozulur."],
                correct: "Herkes mutlu ve huzurlu olur.",
                wisdom: "Harika! Birbirlerine karşı dürüst olan ve iyilik yapan insanların toplumunda herkes mutlu ve huzurlu olur."
              }
            ]
          },
          {
            id: "w1_d4_l2",
            lessonNumber: 2,
            title: "Ahlâk Nedir? - Bölüm II: İslam Güzel Ahlâktır",
            outcomes: [
              "İslam dininin güzel ahlâka verdiği önemi ve gayreti kavrar.",
              "Peygamber Efendimizin (s.a.s.) ahlaki modelini örnek alır."
            ],
            wisdomNotes: "Yüce dinimiz İslam, güzel ahlâk sahibi olmamızı ister. Her zaman ve her şartta iyi davranışlarda bulunmamız gerektiğini hatırlatır. Örneğimiz ve önderimiz Peygamberimiz (s.a.s), insanların en güzel ahlâklısıydı. Bize yakışan da tıpkı onun gibi güzel ahlâk elçisi olmaktır.",
            interactiveActivity: "Peygamber Efendimizin örnek ahlakı üzerine konuşup, hadis-i şerifi hep birlikte sesli olarak tekrarlayalım.",
            slides: [
              {
                type: 'cover',
                title: "İslam Güzel Ahlâktır",
                subtitle: "1. Hafta • 4. Gün • 2. Ders",
                emoji: "🕌"
              },
              {
                type: 'content',
                title: "Dinimiz ve Güzel Davranış",
                emoji: "📖",
                body: "Yüce dinimiz İslam, güzel ahlâk sahibi olmamızı ister. Her zaman ve her şartta iyi davranışlarda bulunmamız gerektiğini hatırlatır. Örneğimiz ve önderimiz Peygamberimiz (s.a.s), insanların en güzel ahlâklısıydı. Bize yakışan da tıpkı onun gibi güzel ahlâk elçisi olmaktır."
              },
              {
                type: 'content',
                title: "Allah Katında En Sevgili Kul",
                emoji: "💡",
                body: "Ahlâkını güzelleştiren, iyi olmak ve iyilik yapmak için gayret eden insanlar çok değerlidir. Bir gün Peygamberimize, 'Allah katında en sevgili kullar kimlerdir?' diye soruldu. Peygamber Efendimiz de, 'Ahlâkı en güzel olanlardır' buyurdu."
              },
              {
                type: 'hadith',
                title: "Bir Hadis Öğreniyorum",
                emoji: "🌹",
                body: "\"Sizin en hayırlınız, ahlâkı en güzel olanınızdır.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'content',
                title: "Güzel Ahlâk Elçisi Olmak",
                emoji: "✨",
                body: "Müslüman, hayatının her anında iyiliğin peşinde koşan ve ahlakını güzelleştirmek için gayret eden kimsedir. Peygamberimiz (s.a.s.) her şart altında iyi davranışlar sergileyerek bizlere izleyeceğimiz en doğru yolu miras bırakmıştır."
              },
              {
                type: 'content',
                title: "İyilik İçin Gayret Etmek",
                emoji: "🌟",
                body: "Ahlak sadece belirli zamanlarda değil, her zaman ve her şartta iyi davranışlar sergilemektir. Çevremize faydalı olmak, iyilik yapmak için çaba göstermek bizi Allah katında değerli kılar."
              },
              {
                type: 'quiz',
                title: "En Hayırlı Kişi Testi",
                emoji: "🎯",
                question: "Peygamber Efendimizin hadis-i şerifine göre bizim en hayırlımız kimdir?",
                options: ["En güçlü olanımız", "Ahlâkı en güzel olanımız", "En hızlı koşanımız", "Çok eşyası olanımız"],
                correct: "Ahlâkı en güzel olanımız",
                wisdom: "Mükemmel! Peygamberimiz 'Sizin en hayırlınız, ahlâkı en güzel olanınızdır' buyurarak bize hedefi göstermiştir."
              }
            ]
          },
          {
            id: "w1_d4_l3",
            lessonNumber: 3,
            title: "Ahlâk Nedir? - Bölüm III: Peygamberimizin Sünneti ve Sofra Adabı",
            outcomes: [
              "Peygamberimizin yemek yeme, su içme ve israf etmeme tavsiyelerini listeler.",
              "Yazılıma uyarlanmış interaktif etkinliklerle sofra kurallarını ve ahlaki davranışları uygular."
            ],
            wisdomNotes: "Peygamberimiz hayatını düşünelim: O, iyi kalpli bir child, güzel huylu bir genç, doğru sözlü bir yetişkin, örnek ahlâk sahibi bir Peygamber olmuştu. Yemek yerken sağ elimizle yememizi, yemeği yapana teşekkür etmemizi, suyu üç yudumda oturarak içmemizi ve temizliğe özen göstermemizi tavsiye etmiştir.",
            interactiveActivity: "Yemek Duasını ve Peygamberimizin sofra sünnetlerini interaktif boşluk doldurma ve trafik lambası mantığıyla sınıfça eşleştirelim.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Sünneti ve Sofra Ahlâkı",
                subtitle: "1. Hafta • 4. Gün • 3. Ders",
                emoji: "🍱"
              },
              {
                type: 'content',
                title: "Örnek Yaşayış Sünneti",
                emoji: "📖",
                body: "Peygamberimizin hayatını düşünelim: O, iyi kalpli bir çocuk, güzel huylu bir genç, doğru sözlü bir yetişkin, örnek ahlâk sahibi bir Peygamber olmuştu. Bizler onun ümmetiyiz. Bu yüzden bizler de insanlarla ilişkilerimizden yeme içmeye kadar tüm davranışlarımızda Peygamberimizi örnek alırız."
              },
              {
                type: 'content',
                title: "Sofra ve Tüketim Ahlâkı",
                emoji: "✨",
                body: "İnsanlarla olan ilişkilerimizde de tıpkı Peygamberimiz gibi doğru sözlü, güvenilir, merhametli, adaletli, cömert, sabırlı, iyi bir insan olmaya çalışırız. Peygamberimiz bizlere yemek yerken sağ elimizle yememizi, yemeği yapan kişiye teşekkür etmemizi, suyu üç yudumda ve oturarak içmemizi, temizliğe özen göstermemizi tavsiye etmiştir. Biz de bu tavsiyelere uyarız. Peygamberimiz yiyeceklerimizi israf etmememizi istemiştir. Biz de yemek yerken, su içerken buna dikkat eder, Allah'ın verdiği nimetleri israf etmeyiz."
              },
              {
                type: 'activity',
                title: "Doldurmaca: Peygamberimizin Sünnet Sofrası",
                emoji: "🧩",
                body: "Aşağıdaki sofra kurallarının boşluklarını PDF'teki verilere göre (BESMELE, ELHAMDÜLİLLAH, SAĞ, ÜÇ YUDUMDA, YIKARDI) zihnimizden dolduralım:",
                items: [
                  "1. Sevgili Peygamberimiz yemeğe başlamadan önce BESMELE çekerdi.",
                  "2. Yemeğin sonunda ELHAMDÜLİLLAH diyerek verdiği nimetler için Allah'a şükrederdi.",
                  "3. Yemeği SAĞ eliyle yerdi. Ağzına küçük lokmalar alırdı.",
                  "4. Su içtiğinde ÜÇ YUDUMDA içerdi.",
                  "5. Peygamberimiz sofraya oturmadan önce ellerini YIKARDI."
                ]
              },
              {
                type: 'content',
                title: "Yemek Duası ve Şükür",
                emoji: "🤲",
                body: "Peygamberimiz eğer yemekten önce besmele çekmeyi unutursanız, hatırladığınızda 'BİSMİLLÂHİ Fİ EVVELİ-Hİ VE AHİRİHİ' (Başında da sonunda da Allah'ın adıyla) deyin diye öğütlerdi.\n\nYemek Duası Okunuşu: Elhamdülillahillezî et'amenâ ve sekânâ ve cealenâ mine'l-müslimîn.\nAnlamı: Bizi yediren, içiren ve bizi Müslüman olarak yaratan Allah'a hamdolsun."
              },
              {
                type: 'activity',
                title: "Yazılıma Uyarlı Trafik Lambası Etkinliği",
                emoji: "🚦",
                body: "Kitabın boyama etkinliğini interaktif soru kartına çevirdik. Doğru davranışlara YEŞİL, yanlışlara KIRMIZI diyelim:",
                items: [
                  "• Ali'nin babasıyla namaz kılması ve Ahmet'in güvenilir bir çocuk olması (YEŞİL)",
                  "• Başkasının eşyasını izinsiz kullanmak ve doğru söylememek (KIRMIZI)",
                  "• Bitki ve hayvanlara zarar vermek ile insanlarla alay etmek (KIRMIZI)",
                  "• Elif'in yemeğe besmele ile başlaması ve eve 'Bismillah' diyerek girmek (YEŞİL)"
                ]
              },
              {
                type: 'quiz',
                title: "Unutulan Besmele Testi",
                emoji: "🎯",
                question: "Peygamberimizin tavsiyesine göre, yemek başında besmele çekmeyi unutan biri hatırlayınca ne demelidir?",
                options: ["Elhamdülillah", "Bismillahi fi evveli-hi ve ahirihi", "Bismillah", "Estagfirullah"],
                correct: "Bismillahi fi evveli-hi ve ahirihi",
                wisdom: "Harika! Yemek başında besmeleyi unutan kimse hatırlayınca 'Bismillahi fi evveli-hi ve ahirihi' demelidir."
              }
            ]
          },

        ]
      },
      {
        dayName: "Hafta Özeti",
        discipline: "DEĞERLENDİRME",
        bgGrad: "from-sky-500 to-blue-600",
        badgeColor: "bg-sky-100 text-sky-850",
        lessons: [
          {
            id: "w1_eval_l1",
            lessonNumber: 1,
            title: "1. Hafta Büyük Şampiyonluk Sınavı",
            outcomes: [
              "1. haftada işlenen İtikad, İbadet, Siyer ve Ahlak konularını pekiştirir.",
              "Öğrenilen bilgileri 15 soruluk büyük değerlendirme testiyle kalıcı hale getirir."
            ],
            wisdomNotes: "Hafta boyunca öğrendiğimiz tüm güzel bilgileri şimdi taçlandırma zamanı! Bu sınav bir not testi değil, bilgilerimizi ne kadar hafızamıza kazıdığımızın eğlenceli bir göstergesidir. Hazırsan başlayalım!",
            interactiveActivity: "Sınıfı iki gruba ayırarak 15 soruluk bu büyük yarışmayı puanlı bir bilgi şölenine çevirelim.",
            slides: [
              {
                type: 'cover',
                title: "1. Hafta Şampiyonluk Sınavı",
                subtitle: "Büyük Değerlendirme • 15 Soru",
                emoji: "🏆"
              },
              {
                type: 'content',
                title: "Büyük Yarışma Başlıyor!",
                emoji: "🚀",
                body: "Pazartesi gününden bu yana iman esaslarını, namazın hazırlıklarını, Peygamberimizin çocukluğunu ve ahlakın ne demek olduğunu öğrendik.\n\nŞimdi 15 soruluk büyük sınavla 'Haftanın Şampiyonu'nu belirleme zamanı! Her doğru cevap, seni bir adım daha öne taşıyacak."
              },
              {
                type: 'quiz',
                title: "Soru 1 / 15",
                emoji: "🎯",
                question: "İslam'ın giriş kapısı olan ve 'Allah'tan başka ilah yoktur, Hz. Muhammed O'nun elçisidir' anlamına gelen söz hangisidir?",
                options: ["Kelime-i Şehadet", "Kelime-i Tevhid", "Besmele", "Elhamdülillah"],
                correct: "Kelime-i Tevhid",
                wisdom: "Harika! Lâ ilâhe illallah Muhammedün Resûlullah sözü Kelime-i Tevhid'dir."
              },
              {
                type: 'quiz',
                title: "Soru 2 / 15",
                emoji: "🎯",
                question: "Peygamberimiz bir hadis-i şerifinde hangi kelime ile başlanmayan her işin bereketsiz olacağını bildirmiştir?",
                options: ["Sübhanallah", "Elhamdülillah", "Bismillahirrahmanirrahim", "Allahu Ekber"],
                correct: "Bismillahirrahmanirrahim",
                wisdom: "Tebrikler! Besmele ile başlamak her işe Allah'ın adıyla ve bereketiyle başlamaktır."
              },
              {
                type: 'quiz',
                title: "Soru 3 / 15",
                emoji: "🎯",
                question: "Aşağıdakilerden hangisi İslam'ın 5 temel şartından biri DEĞİLDİR?",
                options: ["Namaz Kılmak", "Zekât Vermek", "Oruç Tutmak", "Meleklere İnanmak"],
                correct: "Meleklere İnanmak",
                wisdom: "Doğru cevap! Meleklere inanmak İslam'ın değil, imanın 6 esasından biridir."
              },
              {
                type: 'quiz',
                title: "Soru 4 / 15",
                emoji: "🎯",
                question: "Allah'ın var olması, bir olması, her şeyi yaratması ve hiçbir şeye muhtaç olmamasını ifade eden, Allah'a inananları niteleyen kavram hangisidir?",
                options: ["Sünnet", "Tevhid İnancı", "Ahlak", "Kıble"],
                correct: "Tevhid İnancı",
                wisdom: "Mükemmel! Allah'ın bir ve tek olmasına, her şeyi yarattığına inanmak Tevhid inancıdır."
              },
              {
                type: 'quiz',
                title: "Soru 5 / 15",
                emoji: "🎯",
                question: "Dinimizde kesin olarak yapılması istenen işlere farz denir. Peki, kesin olarak yapılması YASAKLANAN davranışlara ne ad verilir?",
                options: ["Helal", "Haram", "Sevap", "Sünnet"],
                correct: "Haram",
                wisdom: "Harika! Dinimizin yenilmesini, içilmesini veya yapılmasını yasakladığı şeylere haram denir."
              },
              {
                type: 'quiz',
                title: "Soru 6 / 15",
                emoji: "🎯",
                question: "Camilerde imamın cemaate namaz kıldırdığı, kıble yönünde bulunan özel bölüme ne ad verilir?",
                options: ["Minber", "Şadırvan", "Mihrap", "Kürsü"],
                correct: "Mihrap",
                wisdom: "Doğru cevap! İmamın namaz kıldırdığı oyuk yapıya mihrap adı verilir."
              },
              {
                type: 'quiz',
                title: "Soru 7 / 15",
                emoji: "🎯",
                question: "Ezanın sözlerini rüyasında görerek Peygamberimize anlatan ve ilk ezanın okunmasına vesile olan sahabi kimdir?",
                options: ["Hz. Ebubekir", "Abdullah bin Zeyd", "Hz. Ömer", "Hz. Ali"],
                correct: "Abdullah bin Zeyd",
                wisdom: "Tebrikler! Abdullah bin Zeyd rüyasında ezan sözlerini görmüş, Efendimiz de bu sözleri Bilal-i Habeşi'ye okutmuştur."
              },
              {
                type: 'quiz',
                title: "Soru 8 / 15",
                emoji: "🎯",
                question: "Sevgili Peygamberimiz Hz. Muhammed (s.a.v.) hangi yıl ve ayda dünyaya gelmiştir?",
                options: ["610 yılı Ramazan", "571 yılı Nisan", "622 yılı Muharrem", "632 yılı Rebiülevvel"],
                correct: "571 yılı Nisan",
                wisdom: "Mükemmel bildin! Peygamber Efendimiz 571 yılının Nisan ayında (20 Nisan) doğmuştur."
              },
              {
                type: 'quiz',
                title: "Soru 9 / 15",
                emoji: "🎯",
                question: "Peygamberimizin annesi Hz. Âmine vefat ettikten sonra, 8 yaşına kadar ona kim bakmış ve korumuştur?",
                options: ["Amcası Ebu Talib", "Sütannesi Halime", "Dedesi Abdülmuttalib", "Dayısı"],
                correct: "Dedesi Abdülmuttalib",
                wisdom: "Harika! Annesinin vefatından sonra 8 yaşına kadar dedesi Abdülmuttalib ona kucak açmıştır."
              },
              {
                type: 'quiz',
                title: "Soru 10 / 15",
                emoji: "🎯",
                question: "Peygamberimizin gençlik yıllarında, dürüstlüğü ve özü sözü bir olması sebebiyle Mekkeliler ona hangi lakabı vermişlerdir?",
                options: ["Ebu'l-Kasım", "Muhammedü'l-Emin", "Hatemü'l-Enbiya", "Resulullah"],
                correct: "Muhammedü'l-Emin",
                wisdom: "Doğru cevap! Mekkeliler ona güvenilirlik ve dürüstlüğünden dolayı 'Muhammedü'l-Emin' (Güvenilir Muhammed) demişlerdir."
              },
              {
                type: 'quiz',
                title: "Soru 11 / 15",
                emoji: "🎯",
                question: "Kabe'nin onarımı sırasında Hacerü'l-Esved taşını yerine kimin koyacağı konusunda kavga çıkmıştı. Bu sorunu zekasıyla ve adaletiyle çözen (Kabe Hakemliği yapan) kimdir?",
                options: ["Hz. Hamza", "Ebu Talib", "Hz. Muhammed (s.a.s)", "Hz. Ebubekir"],
                correct: "Hz. Muhammed (s.a.s)",
                wisdom: "Tebrikler! Peygamberimiz bir örtü üzerine taşı koyarak tüm kabilelerin taşımasına izin vermiş ve büyük bir kavgayı önlemiştir."
              },
              {
                type: 'quiz',
                title: "Soru 12 / 15",
                emoji: "🎯",
                question: "Kişiyi diğer insanlardan ayıran dürüstlük, temizlik, paylaşma, şefkat ve cömertlik gibi özelliklerin tamamına ne ad verilir?",
                options: ["Kader", "Ahlâk", "İbadet", "İtikad"],
                correct: "Ahlâk",
                wisdom: "Mükemmel! Bir insanın taşıdığı bu güzel özelliklerin tamamına ahlâk adı verilir."
              },
              {
                type: 'quiz',
                title: "Soru 13 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimizin 'Sizin en hayırlınız...' şeklinde başlayan meşhur hadisinin devamı nasıldır?",
                options: ["En çok parası olanınızdır", "Ahlâkı en güzel olanınızdır", "Çok gezeninizdir", "En güçlü olanınızdır"],
                correct: "Ahlâkı en güzel olanınızdır",
                wisdom: "Harika! Efendimiz 'Sizin en hayırlınız, ahlâkı en güzel olanınızdır' buyurmuştur."
              },
              {
                type: 'quiz',
                title: "Soru 14 / 15",
                emoji: "🎯",
                question: "Yemeğe besmele ile başlamak, suyu oturarak üç yudumda içmek ve yemeği sağ el ile yemek kimin sünnetidir?",
                options: ["Hz. Musa'nın", "Hz. İbrahim'in", "Peygamberimiz Hz. Muhammed'in", "Sahabelerin"],
                correct: "Peygamberimiz Hz. Muhammed'in",
                wisdom: "Doğru cevap! Bunların hepsi Sevgili Peygamberimizin sofra adabında bizlere tavsiye ettiği harika sünnetlerdir."
              },
              {
                type: 'quiz',
                title: "Soru 15 / 15",
                emoji: "🎯",
                question: "Bir insanın elinden ve dilinden hiç kimsenin zarar görmediği, güven veren insana dinimizde ne ad verilir?",
                options: ["Muhacir", "Müslüman", "Ensar", "Hafız"],
                correct: "Müslüman",
                wisdom: "Muhteşem bir kapanış! Peygamberimiz 'Müslüman, elinden ve dilinden hiç kimsenin zarar görmediği kişidir' buyurmuştur."
              },
              {
                type: 'content',
                title: "🏆 SEN BİR ŞAMPİYONSUN! 🏆",
                emoji: "🏅",
                body: "Harika bir iş çıkardın! 1. haftanın tüm İtikad, İbadet, Siyer ve Ahlak konularını başarıyla tamamladın ve bilgilerini kanıtladın.\n\nŞimdi hafta sonu dinlenme zamanı, yeni haftada yepyeni maceralarla görüşmek üzere!"
              }
            ]
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
            title: "Allah'a İnanıyorum - Allah'ın Sıfatları (Zati ve Subuti Sıfatlar) - Bölüm 1",
            outcomes: [
              "Allah'ın varlığına ve birliğine dair delilleri akli ve nakli boyutlarıyla kavrar.",
              "Allah'ın zati sıfatlarını öğrenerek evrendeki mutlak düzenle bağını kurar."
            ],
            wisdomNotes: "Allah'ın varlığı ve birliği evrendeki harika nizamdan anlaşılır. Yalnızca Allah'a mahsus olan Zati sıfatlar, O'nun hiçbir varlığa benzemediğini ve tek olduğunu gösterir.",
            interactiveActivity: "Çevremizdeki doğaya, gökyüzüne and kendi yaratılışımıza bakarak evrendeki harika rasyonel düzenin delillerini tahtada listeleyelim.",
            slides: [
              {
                type: 'cover',
                title: "Allah'ın Sıfatları",
                subtitle: '2. Hafta • 1. Gün • 1. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: "Allah'ın Varlığının Delilleri",
                emoji: '📖',
                body: "Kâinatta gördüğümüz her şey mükemmel bir uyum ve rasyonel bir düzen içindedir. Hiçbir şey tesadüfen var olamaz. Bir resim gördüğümüzde bir ressamı, şık bir bina gördüğümüzde bir mimarı düşündüğümüz gibi, bu muazzam evreni gördüğümüzde de bir Yaratıcının varlığını akıl ve mantık yoluyla anlarız. O Yaratıcı, bir ve tek olan Allah'tır."
              },
              {
                type: 'content',
                title: 'Zati Sıfatlar Nedir?',
                emoji: '💡',
                body: "Allah'ın sıfatları ikiye ayrılır: Zati sıfatlar ve Subuti sıfatlar. Zati sıfatlar, sadece ve sadece Allah'ın zatına has olan, başka hiçbir varlıkta benzeri kesinlikle bulunmayan benzersiz özelliklerdir."
              },
              {
                type: 'content',
                title: '1. Vücud Sıfatı',
                emoji: '✨',
                body: "Vücud, Allah'ın var olması demektir. Allah vardır ve O'nun yokluğu kesinlikle düşünülemez. O, her şeyin varlık kaynağıdır."
              },
              {
                type: 'content',
                title: '2. Kıdem Sıfatı',
                emoji: '✨',
                body: "Kıdem, Allah'ın varlığının başlangıcının olmaması demektir. Evrendeki her varlığın bir başlangıç tarihi vardır ama Allah zamanın da yaratıcısı olduğu için O'ndan önce hiçbir şey yoktu."
              },
              {
                type: 'content',
                title: '3. Beka Sıfatı',
                emoji: '✨',
                body: "Beka, Allah'ın varlığının sonunun olmaması demektir. Kâinattaki her şey zamanı gelince yok olacaktır ama Allah ebedidir, sonsuza kadar var olmaya devam edecektir."
              },
              {
                type: 'content',
                title: '4. Vahdaniyet Sıfatı',
                emoji: '✨',
                body: "Vahdaniyet, Allah'ın bir ve tek olması demektir. O'nun zatında, sıfatlarında ve işlerinde hiçbir ortağı, dengi veya benzeri kesinlikle yoktur."
              },
              {
                type: 'content',
                title: '5. Muhalefetün Li\'l-Havadis',
                emoji: '✨',
                body: "Muhalefetün li'l-havadis, Allah'ın sonradan yaratılan hiçbir varlığa benzememesi demektir. Biz hayalimizde neyi canlandırırsak canlandıralım, Allah ondan tamamen farklıdır."
              },
              {
                type: 'content',
                title: '6. Kıyam Bi-Nefsihi',
                emoji: '✨',
                body: "Kıyam bi-nefsihi, Allah'ın var olmak için hiçbir mekâna, zamana veya varlığa muhtaç olmaması demektir. Her şey O'na muhtaçtır ama O hiçbir şeye muhtaç değildir."
              },
              {
                type: 'discussion',
                title: 'Düşünelim ve Yorumlayalım',
                emoji: '🤔',
                items: [
                  "Evrende birden fazla yaratıcı olsaydı, gökyüzündeki ve dünyadaki bu harika düzen nasıl etkilenirdi?",
                  "Allah'ın hiçbir şeye muhtaç olmaması (Kıyam bi-nefsihi) biz insanlara kendi zayıflığımız hakkında ne öğretir?"
                ]
              }
            ]
          },
          {
            id: "w2_d1_l2",
            lessonNumber: 2,
            title: "Allah'a İnanıyorum - Allah'ın Sıfatları (Zati ve Subuti Sıfatlar) - Bölüm 2",
            outcomes: [
              "Allah'ın subuti sıfatlarını (İlim, Semî, Basar, Kudret vb.) öğrenerek ahlaki bilincini geliştirir.",
              "Yaratıcı inancını korku temelli değil; sevgi, güven ve otokontrol mekanizması üzerinden rasyonel bir yaklaşımla yorumlar."
            ],
            wisdomNotes: "Subuti sıfatlar, Allah'ta sonsuz olan ama insanlara da sınırlı bir şekilde üflenmiş özelliklerdir. Her şeyi gören (Basar) ve her şeyi bilen (İlim) bir Yaratıcıya inanmak, insanda sevgi temelli bir iç denetim (otokontrol) oluşturur.",
            interactiveActivity: "Kimsenin bizi görmediği gizli bir anda, bizi sevgiyle izleyen ve koruyan bir Yaratıcının varlığını hissetmenin davranışlarımıza etkisini tartışalım.",
            slides: [
              {
                type: 'cover',
                title: "Allah'ın Sıfatları",
                subtitle: '2. Hafta • 1. Gün • 2. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Subuti Sıfatlar Nedir?',
                emoji: '💡',
                body: "Subuti sıfatlar; Allah'ın zatına ait olan ancak benzerleri sınırlı, eksik ve küçük ölçülerde yaratılmış varlıklara da lütfedilmiş özelliklerdir. Tabii ki Allah'ta bu sıfatlar sonsuz, kusursuz ve sınırsızdır."
              },
              {
                type: 'content',
                title: '1. Hayat ve 2. İlim Sıfatları',
                emoji: '✨',
                body: "HAYAT: Allah'ın canlı ve diri olması demektir. O'nun hayatı sonsuzdur.\n\nİLİM: Allah'ın her şeyi bilmesi demektir. Geçmişi, geleceği, kalbimizden geçen en gizli düşünceleri ve evrendeki harika matematiksel düzenin her detayını hakkıyla bilen yalnız O'dur."
              },
              {
                type: 'content',
                title: '3. Semî\' ve 4. Basar Sıfatları',
                emoji: '✨',
                body: "SEMÎ': Allah'ın her şeyi işitmesi demektir. Fısıltıları, içimizden geçen duaları ve evrendeki tüm sesleri aynı anda işitir.\n\nBASAR: Allah'ın her şeyi görmesi demektir. Karanlık bir gecede, siyah bir taşın üzerinde yürüyen siyah karıncayı bile sevgiyle görür."
              },
              {
                type: 'content',
                title: '5. İrade ve 6. Kudret Sıfatları',
                emoji: '✨',
                body: "İRADE: Allah'ın dilemesi demektir. O bir şeyin olmasını dilediğinde hiçbir engel önüne geçemez.\n\nKUDRET: Allah'ın her şeye gücünün yetmesi demektir. Evrendeki yıldızları döndüren, galaksileri bir denge içinde tutan sonsuz gücün sahibidir."
              },
              {
                type: 'content',
                title: '7. Kelam ve 8. Tekvin Sıfatları',
                emoji: '✨',
                body: "KELAM: Allah'ın ses ve harflere muhtaç olmadan konuşması demektir. Kutsal kitaplar bu sıfatın tecellisidir.\n\nTEKVİN: Allah'ın yoktan var etmesi, yaratması demektir. Her şeyi bir ölçüye göre yaratan O'dur."
              },
              {
                type: 'content',
                title: 'Korku Değil; Sevgi ve Güven İlişkisi',
                emoji: '🤝',
                body: "Biz Müslümanlar olarak Rabbimizi korku üzerine değil; sonsuz sevgi, emniyet ve güven üzerine tanırız. Evrene koyduğu harika matematiksel ve fiziksel kurallar, O'nun bize olan sevgisinin ve bizim için en uygun ortamı hazırladığının en net göstergesidir."
              },
              {
                type: 'content',
                title: 'Otokontrol Mekanizması Nedir?',
                emoji: '💡',
                body: "Otokontrol, dışarıda bir polis, bir kamera veya bir öğretmen yokken bile kendi vicdanımızla dürüst kalabilme gücüdür. Her şeyi bilen (İlim), her şeyi gören (Basar) ve işiten (Semî') bir Yaratıcının bizi her an sevgiyle gözetlediğini bilmek, iç dünyamızda muazzam bir ahlaki sorumluluk ve otokontrol geliştirir."
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "Her anımızı gören ve işiten merhametli bir Allah'a inanmak, tek başımızayken dijital ortamlarda ya da gerçek hayatta dürüst davranmamıza nasıl katkı sağlar?",
                  "Yaratıcıyi korkuyla değil de sevgi ve güvenle tanımak kalbimize nasıl bir huzur verir?"
                ]
              }
            ]
          },
          {
            id: "w2_d1_l3",
            lessonNumber: 3,
            title: "Meleklere İnanıyorum",
            outcomes: [
              "Meleklerin yapısı, özellikleri ve insanlardan farklı yönlerini açıklar.",
              "Dört büyük meleğin isimlerini ve görevlerini sıralar.",
              "Melek inancının insan hayatına getirdiği manevi huzur ve emniyeti kavrar."
            ],
            wisdomNotes: "Biz mü'miniz. Meleklerin varlığına inanırız. Melekler nurdan yaratılmış olan ve gözle görülmeyen varlıklardır. Erkek ya da kadın olarak cinsiyetleri yoktur. Yemeye, içmeye ve uyumaya ihtiyaç duymazlar. Melekler asla kötülük yapmaz, günah işlemezler.",
            interactiveActivity: "Dört büyük meleğin isimlerini (Cebrail, Mikail, İsrafil, Azrail) ve görevlerini tahtada karşılıklı olarak listeleyip sesli olarak tekrar edelim.",
            slides: [
              {
                type: 'cover',
                title: 'Meleklere İnanıyorum',
                subtitle: '2. Hafta • 1. Gün • 3. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Meleklere İman ve Özellikleri',
                emoji: '📖',
                body: "Biz mü'miniz. Meleklerin varlığına inanırız. Melekler nurdan yaratılmış olan ve gözle görülmeyen varlıklardır. İnsanlardan farklı yaratıldıkları için farklı özelliklere sahiptirler. Erkek ya da kadın olarak cinsiyetleri yoktur. Yemeye, içmeye ve uyumaya ihtiyaç duymazlar."
              },
              {
                type: 'content',
                title: 'Meleklerin Ahlakı ve Görevleri',
                emoji: '✨',
                body: "Melekler asla kötülük yapmaz, günah işlemezler. Her zaman iyi ve güzel davranışlarda bulunurlar. Gece gündüz Allah'a ibadet ve dua ederler. Allah'ın kendilerine verdiği görevleri yapar, insanlara yardımcı olurlar. Bunun içindir ki, iyi birisini tarif ederken \"melek gibi insan\" deriz."
              },
              {
                type: 'content',
                title: 'Melekler Bizim Dostumuzdur',
                emoji: '🤝',
                body: "Melekler bizim dostumuzdur. Bizim başarımız, cennete girmemiz, kazalardan belalardan korunmamız için dua ederler. İnsanların iyilik yapması onları çok mutlu eder. Bu yüzden melekler, iyilik yapan insanlar için iyilik defterlerine sevap yazarlar. Kötülük yaptığımızda ise üzülürler. Hatamızı fark etmemizi, pişman olup Allah'tan af dilememizi beklerler."
              },
              {
                type: 'content',
                title: 'Dört Büyük Melek',
                emoji: '💡',
                body: "Melekler her yerde bulunabilirler. Allah'ın sayısız meleği vardır. Bunlardan dört büyük meleğin isimleri; Cebrail, Mikail, İsrafil ve Azrail'dir."
              },
              {
                type: 'content',
                title: '1. Cebrail ve 2. Mikail',
                emoji: '💎',
                items: [
                  "CEBRAİL: Allah'tan aldığı \"vahiy\" denilen ayet ve bilgileri peygamberlere getiren melektir. Rabbimiz, emir ve yasaklarını Cebrail aracılığıyla peygamberlere göndermiştir. Peygamberler de hayatımızı düzenleyecek bu kuralları bize öğretmiştir.",
                  "MİKAİL: Yağmur, kar, rüzgâr gibi tabiat olaylarını düzenleyen melektir."
                ]
              },
              {
                type: 'content',
                title: '3. Azrail ve 4. İsrafil',
                emoji: '💎',
                items: [
                  "AZRAİL: Ömrü biten ve sırası gelen canlıların ölümü ile görevlidir.",
                  "İSRAFİL: Dünya hayatı sona ereceği zaman, Sûr'a üfleyerek bunu insanlara haber verecektir."
                ]
              },
              {
                type: 'ayah',
                title: 'Bir Ayet Öğreniyorum',
                emoji: '📖',
                body: "\"Göklerde ve yerde bulunan canlılar ve melekler büyüklük taslamadan Allah'a secde ederler.\"",
                reference: "(Nahl Süresi, 49. Âyet)"
              },
              {
                type: 'poem',
                title: 'Dua Eden Melekler',
                emoji: '🌙',
                body: "Nurdan nurlu varlıklar,\nSayısızca melek var.\nYerlerde göklerdeler,\nBize dua ederler."
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Araştıralım, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "\"Melek gibi insan\" sözü hangi özellikleri taşıyan insanlar için kullanılır? Araştıralım."
                ]
              },
              {
                type: 'activity',
                title: 'Uygulamaya Uyarlı Eşleştirme Kartı',
                emoji: '🧩',
                body: "PDF'teki karmaşık çizgi çekme etkinliğini sınıf içinde interaktif bir bilgi kartına dönüştürdük. Meleklerimizin görevlerini hep birlikte sesli olarak eşleştirelim:",
                items: [
                  "CEBRAİL — Peygamberlere vahiy getirmekle görevlidir.",
                  "MİKAİL — Yağmur, kar ve rüzgâr gibi tabiat olaylarını düzenler.",
                  "AZRAİL — Ömrü biten canlıların ruhunu teslim almakla görevlidir.",
                  "İSRAFİL — Kıyamet günü Sûr borusuna üflemekle görevlidir."
                ]
              }
            ]
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
            title: "Namazın Farzlarını Öğreniyorum",
            outcomes: [
              "Namaz ibadetinin geçerli olması için gereken dışındaki farzları (hazırlık şartları) ayırt eder.",
              "Namazın içindeki farzları (rükünler: iftitah tekbiri, kıyam, kıraat, rükû, secde, ka'de-i ahire) fıkhî kurallarına uygun olarak açıklar."
            ],
            wisdomNotes: "Namaz, kuru bir kurallar bütünü veya zorunluluk değil; insanın hayatını düzene sokan, ona planlama, zaman yönetimi, temizlik disiplini ve güçlü bir iç otokontrol mekanizması kazandıran felsefi ve manevi bir eğitim sürecidir.",
            interactiveActivity: "Sınıf içinde 'Namaz Hayatımı Nasıl Planlar?' başlığı altında bir otokontrol çemberi kuralım: Günlük işlerimizi, derslerimizi ve dinlenmelerimizi 5 vakit namazın vakit disiplinine göre nasıl planlayabileceğimizi tartışalım.",
            slides: [
              {
                type: 'cover',
                title: "Namazın Farzları ve Karakter Disiplini",
                subtitle: "2. Hafta • Salı • 1. Ders",
                emoji: "🕌"
              },
              {
                type: 'content',
                title: "Hayatı Anlamlandıran Disiplin: Namaz",
                emoji: "📖",
                body: "Namaz, Rabbimize olan sevgimizi ve bağlılığımızı canlı tutan en temel ibadettir. Ancak namaz sadece camide veya seccade üzerinde kalan bir eylem değildir. Günde 5 vakit belirli zaman dilimlerinde yerine getirilen bu ibadet, insana muazzam bir zaman yönetimi, günlük hayat planlaması ve sarsılmaz bir yaşam disiplini kazandırır."
              },
              {
                type: 'content',
                title: "Namazın Dışındaki Farzlar (Hazırlık Şartları)",
                emoji: "🧼",
                body: "Namaza başlamadan önce yerine getirmemiz gereken hazırlıklara namazın dışındaki farzlar denir. Bunlar bize temizliği ve zihinsel odaklanmayı öğretir:\n\n1. Hadesten Tahâret: Abdest almak.\n2. Necasetten Tahâret: Kıyafetin ve namaz kılınacak yerin temiz olması.\n3. Setr-i Avret: Örtülmesi gereken yerleri örtmek.\n4. İstikbal-i Kıble: Yönünü Kâbe'ye dönmek.\n5. Vakit: Kılınacak namazın vaktinin girmesi.\n6. Niyet: Hangi namazı kılacağını bilmek ve kalben odaklanmak."
              },
              {
                type: 'content',
                title: "Hazırlığın Felsefesi: Planlama ve Odaklanma",
                emoji: "💡",
                body: "Formel kuralları ezberlemekten ziyade, namaza hazırlık aşamalarının hayatımıza katkısını düşünelim. Güne abdestle (temizlikle) başlamak, giysilerini temiz tutmak, yöneleceğin hedefi (kıbleyi) belirlemek ve yapacağın işe tam niyet etmek; aslında başarılı bir insanın günlük hayatta sahip olması gereken planlama ve odaklanma becerilerinin ta kendisidir."
              },
              {
                type: 'content',
                title: "Namazın İçindeki Farzlar (Rükünler)",
                emoji: "🛐",
                body: "Namaz kılarken namazın içinde mutlaka yerine getirilmesi gereken kurallara içindeki farzlar veya rükünler denir:\n\n1. İftitah Tekbiri: Namaza 'Allahu Ekber' diyerek başlamak.\n2. Kıyam: Namazda ayakta durmak.\n3. Kıraat: Ayaktayken Kur'an okumak.\n4. Rükû: Elleri dizlere koyarak öne doğru eğilmek.\n5. Sücud (Secde): Alnı, burnu, dizleri ve elleri yere koymak.\n6. Ka'de-i Âhire: Namazın sonunda Ettehiyyatü duasını okuyacak kadar oturmak."
              },
              {
                type: 'content',
                title: "İç Otokontrol Mekanizması",
                emoji: "✨",
                body: "Namazdaki her hareket, insanın iç disiplinini pekiştirir. Kıyamda dimdik ve hareketsiz durmak sabrı; rükûda eğilmek saygıyı; secdeye varmak ise kibirden uzaklaşıp tevazu sahibi olmayı öğretir. Hayatın karmaşasından sıyrılıp günde 5 vakit seccadeye çıkan bir genç, güçlü bir iç otokontrol mekanizması geliştirir."
              },
              {
                type: 'activity',
                title: "Etkinlik: Yusuf'un Hazırlık Balonları",
                emoji: "🎈",
                body: "Yusuf namaz kılmak istiyor ama hazırlık şartlarını karıştırıyor. Hangileri namaza hazırlık (dışındaki farzlar) adımıdır, bulalım:",
                items: [
                  "• Abdest almak, kıyafetleri temizlemek, kıbleye yönelmek (HAZIRLIK ŞARTIDIR)",
                  "• Namaz vaktinin girmesi, kalben niyet etmek, uygun giyinmek (HAZIRLIK ŞARTIDIR)",
                  "• Su içmek, uyumak, yemek yemek (HAZIRLIK ŞARTI DEĞİLDİR)"
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Felsefi Tartışma",
                emoji: "🤔",
                items: [
                  "Namaz vakitlerinin günün farklı saatlerine dağılmış olması, bir öğrencinin ders çalışma ve dinlenme zamanlarını planlamasına nasıl yardımcı olur?",
                  "Namaz kılarken dikkati dağıtmadan sabit bir şekilde durmaya çalışmak (otokontrol), günlük hayattaki odaklanma sorunlarımızı nasıl çözer?"
                ]
              },
              {
                type: 'quiz',
                title: "Farzlar ve Disiplin Yarışması",
                emoji: "🎯",
                question: "Namaz kılınacak yerin, çevrenin ve giysilerin temiz olması anlamına gelen namaza hazırlık şartı hangisidir?",
                options: ["Hadesten Tahâret", "Necasetten Tahâret", "Setr-i Avret", "İstikbal-i Kıble"],
                correct: "Necasetten Tahâret",
                wisdom: "Harika! Necasetten tahâret, maddi kirlerden arınmayı ifade eder ve bize çevre temizliği disiplini kazandırır."
              }
            ]
          },
          {
            id: "w2_d2_l2",
            lessonNumber: 2,
            title: "Namazın Farzlarını Öğreniyorum - Abdest Nasıl Alınır?",
            outcomes: [
              "Abdest ibadetinin anlamını kavrar ve abdestin alınış aşamalarını kronolojik sıra ile listeler."
            ],
            wisdomNotes: "Abdest, bazı ibadetler için ön hazırlık olan harika bir temizlenme biçimidir. Namaz kılmak için abdest almak şarttır. Abdest, bedeni maddi kirlerden arındırırken ruhu da namaza hazırlar.",
            interactiveActivity: "Elimizdeki abdest görsellerini (niyet.png'den başlayarak) sırasıyla takip edelim ve sınıf içinde her bir adımın yapılış şeklini sesli olarak canlandıralım.",
            slides: [
              {
                type: 'content',
                title: "Manevi Temizlik: Abdest",
                emoji: "💧",
                body: "Temiz ve bakımlı olmayı hepimiz severiz. Dinimiz de temizliğe büyük önem verir. Abdest, bazı ibadetler için ön hazırlık olan bir temizlenme biçimidir. Namaz kılmak için abdest almak şarttır. Şimdi abdestin aşamalarını sırasıyla görsel adımlarla öğrenelim."
              },
              {
                type: 'content',
                title: "Adım 1: Niyet ve Besmele",
                emoji: "🚰",
                body: "Abdest almaya besmele çekip niyet ederek başlarız. 'Bismillahirrahmanirrahim' der ve kalben abdest almaya niyet ederiz.",
                image: "assets/img/abdest/niyet.png"
              },
              {
                type: 'content',
                title: "Adım 2: Elleri Yıkamak",
                emoji: "🧼",
                body: "Ellerimizi bileklere kadar güzelce üç defa yıkarız. Parmak aralarının da iyice yıkanmasına dikkat ederiz.",
                image: "assets/img/abdest/adim1.png"
              },
              {
                type: 'content',
                title: "Adım 3: Ağza Su Vermek",
                emoji: "🌊",
                body: "Sağ elimizle ağzımıza üç kez su alarak ağzımızın içini güzelce temizler ve çalkalarız.",
                image: "assets/img/abdest/adim2.png"
              },
              {
                type: 'content',
                title: "Adım 4: Burna Su Vermek",
                emoji: "👃",
                body: "Sağ elimizle burnumuza üç kez su çekeriz. Sol elimizle burnumuzu temizleyerek yıkarız.",
                image: "assets/img/abdest/adim3.png"
              },
              {
                type: 'content',
                title: "Adım 5: Yüzü Yıkamak",
                emoji: "✨",
                body: "Alından çene altına, kulak yumuşaklarına kadar yüzümüzü üç defa güzelce yıkarız.",
                image: "assets/img/abdest/adim4.png"
              },
              {
                type: 'content',
                title: "Adım 6: Kolları Yıkamak",
                emoji: "💪",
                body: "Kollarımızı da dirseklerimizle birlikte (dirsekler dahil) güzelce üçer defa yıkarız. Önce sağ kolu, sonra sol kolu yıkarız.",
                image: "assets/img/abdest/adim5.png"
              },
              {
                type: 'content',
                title: "Adım 7: Başı Mesh Etmek",
                emoji: "🤚",
                body: "Ellerimizi ıslatıp başımıza süreriz, yani başımızın üst kısmını ıslak elle mesh ederiz.",
                image: "assets/img/abdest/adim6.png"
              },
              {
                type: 'content',
                title: "Adım 8: Kulakları Mesh Etmek",
                emoji: "👂",
                body: "Yine ellerimizi ıslatıp serçe parmağımızla kulaklarımızın içini temizler, başparmağımızla da kulağımızın arkasını mesh ederiz.",
                image: "assets/img/abdest/adim7.png"
              },
              {
                type: 'content',
                title: "Adım 9: Boynu Mesh Etmek",
                emoji: "🙌",
                body: "Kulakları mesh ettikten sonra ellerimizin kalan parmaklarının arkasıyla boynumuzu güzelce mesh ederiz.",
                image: "assets/img/abdest/adim8.png"
              },
              {
                type: 'content',
                title: "Adım 10: Ayaklar ve Kapanış",
                emoji: "👣",
                body: "Son olarak, ayaklarımızı (topuklar ve parmak araları dahil) güzelce yıkadığımızda abdestimiz tamamdır. Önce sağ, sonra sol ayak yıkanır.",
                image: "assets/img/abdest/adim9.png"
              },
              {
                type: 'quiz',
                title: "Abdest Uygulaması Yarışması",
                emoji: "🎯",
                question: "Abdest alırken kollardan sonra yapılan, ıslak eli başın üzerine sürmeyi ifade eden fıkhî hareket hangisidir?",
                options: ["Gusül", "Kıyam", "Mesh etmek", "Tahâret"],
                correct: "Mesh etmek",
                wisdom: "Tebrikler! Islak elle başın, kulakların ve boynun silinmesi hareketine fıkıhta mesh etmek denir."
              }
            ]
          },
          {
            id: "w2_d2_l3",
            lessonNumber: 3,
            title: "Namazsın Farzlarını Öğreniyorum-Abdestin Farzları, Gusül ve Teyemmüm Fıkhı",
            outcomes: [
              "Abdestin farzlarını ve abdesti bozan durumları fıkhî kurallarıyla listeler.",
              "Gusül ve teyemmüm ibadetlerinin fıkhî şartlarını, yapılış biçimlerini ve felsefi amaçlarını açıklar."
            ],
            wisdomNotes: "İslam'da bedensel ve manevi arınma bir bütündür. Abdestin farzları atlanamaz birer temel direktir. Suyun bulunmadığı veya sağlık nedeniyle kullanılamadığı durumlarda temiz toprakla teyemmüm edilmesi, dinimizin zorluk çıkarmayıp kolaylaştırdığının en rasyonel felsefi kanıtıdır.",
            interactiveActivity: "Sınıf içinde 'Meraklı Gençler Soruyor' köşesi kuralım: Öğrencilerin abdest, gusül ve teyemmüm hakkında akıllarına gelen tüm sıra dışı fıkhî soruları ve mantıksal gerekçelerini sınıfça tartışalım.",
            slides: [
              {
                type: 'content',
                title: "Derinlemesine Temizlik Fıkhı",
                emoji: "🌱",
                body: "Sevgili Arkadaşlar! Abdest almayı öğrendik. Ancak abdestin, guslün ve teyemmümün arkasında yatan çok önemli fıkhî kurallar ve harika mantıksal sebepler vardır. Bu dersimizde, aklınıza gelebilecek tüm soruların cevaplarını ve bu ibadetlerin inceliklerini tek tek keşfedeceğiz."
              },
              {
                type: 'content',
                title: "1. Bölüm: Abdestin Olmazsa Olmazı (4 Farz)",
                emoji: "💡",
                body: "Abdest alırken yaptığımız bazı hareketler sünnet (Peygamberimizin tavsiyesi), bazıları ise farzdır (Allah'ın kesin emri). Farz demek, o hareket yapılmazsa abdestin asla geçerli olmaması demektir. Abdestin 4 temel farzı vardır:\n\n1. Yüzümüzü yıkamak.\n2. Ellerimizi ve kollarımızı dirseklerle birlikte yıkamak.\n3. Başımızı mesh etmek.\n4. Ayaklarımızı bileklerle birlikte yıkamak."
              },
              {
                type: 'content',
                title: "Meraklı Soru: Diğer Adımlar Neden Sünnet?",
                emoji: "🤔",
                body: "Soru: 'Hocam, ağzımızı, burnumuzu ve kulaklarımızı yıkamak farz değilse abdestimiz yine de kabul olur mu?'\n\nCevap: Eğer acil bir durum varsa (örneğin su çok azsa veya vakit daralıyorsa) sadece 4 farzı yaparak aldığın abdest fıkhen geçerlidir. Ancak normal zamanlarda ağzı, burnu yıkamak gibi sünnetleri yapmak ibadetin sevabını katlar ve Peygamberimizin rehberliğine uymamızı sağlar."
              },
              {
                type: 'content',
                title: "2. Bölüm: Abdesti Bozan Durumlar",
                emoji: "❌",
                body: "Aldığımız bir abdest, biz aksini yapana kadar geçerlidir. Ancak fıkhen belirlenmiş bazı durumlar abdest kalkanını kırar ve yeniden abdest almamızı gerektirir. Kitabımızda yer alan abdesti bozan 6 temel durumu ve mantıksal sebeplerini şimdi detaylıca inceleyelim."
              },
              {
                type: 'content',
                title: "Bozan Durum 1: Tuvalet İhtiyacı ve Gaz Çıkarmak",
                emoji: "🚾",
                body: "Tuvalet ihtiyacını gidermek ve gaz çıkarmak abdesti kesinlikle bozar. Çünkü bu durumlar bedenin doğal biyolojik atık çıkarma süreçleridir. Beden fiziken kirlendiği ve gaz çıkarma durumu namazın ciddiyetine, huşusuna uymayacağı için abdestin yenilenmesi şarttır."
              },
              {
                type: 'content',
                title: "Bozan Durum 2: Ağız Dolusu Kusmak",
                emoji: "🤮",
                body: "Ağız dolusu olacak şekilde kusmak abdesti bozar. Biyolojik olarak mideden gelen atıklar dışarı çıktığı için beden temizliği zedelenir. Eğer sadece hafif bir gaz veya ağız dolusu olmayan çok küçük bir mide sıvısı gelirse abdest bozulmaz."
              },
              {
                type: 'content',
                title: "Bozan Durum 3: Uyumak",
                emoji: "😴",
                body: "Derin bir şekilde, bilincini kaybedecek kadar uyumak abdesti bozar. \n\nMeraklı Soru: 'Hocam uyumak neden abdesti bozsun ki, uyurken kötü bir şey yapmıyoruz?'\n\nCevap: İnsan derin uykuya daldığında kasları tamamen gevşer. Kaslar gevşediği için insan farkında olmadan gaz çıkarabilir veya abdestini kaçırabilir. Yani uyumanın kendisi değil, kontrolü kaybetmek abdesti bozar. Oturduğu yerde hafifçe içi geçen insanın abdesti ise bozulmaz."
              },
              {
                type: 'content',
                title: "Bozan Durum 4: Namazda Yüksek Sesle Gülmek",
                emoji: "😆",
                body: "Namaz kılarken yanındakilerin işiteceği kadar yüksek sesle gülmek abdesti bozar.\n\nMeraklı Soru: 'Namaz dışında gülünce bozulmuyor da namazda gülünce abdest neden bozuluyor?'\n\nCevap: Namaz, alemlerin Rabbi olan Allah'ın huzuruna çıkmaktır. Bu huzurda lakayıt davranmak, ciddiyeti tamamen bozup sesli gülmek ibadete büyük bir saygısızlıktır. Dinimiz bu ciddiyetsizliğin önüne geçmek için cezai bir yaptırım olarak hem namazı iptal eder hem de abdesti bozar."
              },
              {
                type: 'content',
                title: "Bozan Durum 5: Bayılmak ve Bilinç Kaybı",
                emoji: "🧠",
                body: "Bayılmak, akli dengeyi geçici olarak kaybetmek veya alkol/ilaç gibi sebeplerle tamamen sızmak abdesti bozar. Tıpkı uykuda olduğu gibi, insan bayıldığında beden üzerindeki iradesini ve otokontrolünü tamamen kaybeder. Kendinde olmadığı için abdestin korunup korunmadığı bilinemez."
              },
              {
                type: 'content',
                title: "Bozan Durum 6: Vücuttan Kan veya İltihap Çıkması",
                emoji: "🩸",
                body: "Vücudun herhangi bir yerinden kan, iltihap veya sarı su gibi sıvıların çıkıp akması abdesti bozar.\n\nMeraklı Soru: 'Hocam sinek ısırdı, nokta kadar kan çıktı, abdestim gitti mi?'\n\nCevap: Hayır, nokta kadar çıkan ve yerinden etrafa taşmayan, akmayan kan abdesti bozmaz. Abdestin bozulması için çıkan kanın veya sıvının, çıktığı yaranın çevresine taşması ve akması gerekir."
              },
              {
                type: 'content',
                title: "Meraklı Soru: Ağlamak Abdesti Bozar mı?",
                emoji: "😢",
                body: "Soru: 'Hocam namaz kılarken veya normalde hüzünlenip ağlarsak, gözümüzden yaş akarsa abdestimiz bozulur mu?'\n\nCevap: Kesinlikle bozmaz! Gözyaşı bedenden çıkan bir kir veya kan değildir; saf ve temiz bir sıvıdır. Hatta namazda Allah korkusuyla veya samimiyetle ağlamak ibadetin manevi değerini artırır."
              },
              {
                type: 'content',
                title: "Meraklı Soru: Tırnak Kesmek veya Saç Taramak?",
                emoji: "✂️",
                body: "Soru: 'Abdestliyken tırnaklarımı kesersem veya saçımı tararken saçım dökülürse abdestim bozulur mu?'\n\nCevap: Hayır, kesinlikle bozmaz. Bedenimizden tırnak veya saç kopması abdest kalkanına zarar vermez. Abdestliyken tırnak kesebilir, saçınızı tıraş edebilirsiniz."
              },
              {
                type: 'content',
                title: "3. Bölüm: Tüm Vücudun Arınması (Gusül)",
                emoji: "🚿",
                body: "Gusül, fıkıhta boy abdesti anlamına gelir. Belli başlı durumlarda veya cuma/bayram gibi mübarek günlerde manevi temizlik amacıyla tüm vücudu hiç kuru yer kalmayacak şekilde yıkamaktır. Guslün geçerli olması için mutlaka yerine getirilmesi gereken 3 farzı vardır:\n\n1. Ağza bolca su alıp çalkalamak (Mazmaza).\n2. Burna su çekip iyice temizlemek (İstinşak).\n3. Bütün vücudu iğne ucu kadar kuru yer kalmayacak şekilde tamamen yıkamak."
              },
              {
                type: 'content',
                title: "Meraklı Soru: Gusül Alırken Nelere Dikkat Etmeli?",
                emoji: "🔍",
                body: "Soru: 'Hocam küpe deliği, tırnak arası veya diş telleri gusle engel olur mu?'\n\nCevap: Küpe deliklerinin içine su sızması, parmaklardaki yüzüklerin oynatılarak altının ıslanması gerekir. Diş telleri ve dolgular ise tıbbi bir zorunluluk olduğu için gusle kesinlikle engel değildir, dinimiz bu konuda kolaylık sağlamıştır."
              },
              {
                type: 'content',
                title: "4. Bölüm: Toprakla Gelen Kolaylık (Teyemmüm)",
                emoji: "🏜️",
                body: "Teyemmüm, su bulamadığımızda ya da su olduğu halde hastalık/aşırı soğuk gibi sebeplerle kullanamadığımız zamanlarda temiz toprakla veya toprak cinsinden (taş, mermer) bir maddeyle alınan manevi bir abdest çeşididir. Teyemmümün 2 farzı vardır:\n\n1. İbadet amacıyla niyet etmek.\n2. Elleri temiz toprağa vurup yüzü mesh etmek, tekrar vurup kollarımızı dirseklerle birlikte mesh etmek."
              },
              {
                type: 'content',
                title: "Meraklı Soru: Çamurla Teyemmüm Olur mu?",
                emoji: "🌧️",
                body: "Soru: 'Hocam yağmur yağdı, her yer çamur oldu, çamurla teyemmüm edebilir miyiz?'\n\nCevap: Hayır, teyemmümün yapılacağı toprağın mutlaka temiz ve kuru olması gerekir. Çamurla teyemmüm yapılmaz. Eğer kuru toprak yoksa temiz bir taş veya mermer duvar üzerine eller vurularak teyemmüm edilebilir."
              },
              {
                type: 'content',
                title: "Meraklı Soru: Toprak İnsanı Nasıl Temizler?",
                emoji: "🤔",
                body: "Soru: 'Hocam, elimize yüzümüze toprak sürünce fiziken kirlenmiş olmuyoruz mu? Toprak nasıl abdest yerine geçer?'\n\nCevap: Teyemmüm fiziki değil, tamamen manevi ve sembolik bir temizliktir. Amaç, su yoksa bile kulun 'Ben ibadet etmek istiyorum ve temizlik bilincimi koruyorum' diyerek Allah'a yönelmesidir. Ayrıca insan topraktan yaratılmıştır; toprakla temas etmek ruhsal bir arınma sağlar."
              },
              {
                type: 'content',
                title: "Meraklı Soru: Su Bulununca Teyemmüm Ne Olur?",
                emoji: "💧",
                body: "Soru: 'Teyemmümle namaz kılarken aniden musluktan su akmaya başlasa veya yağmur yağsa ne olur?'\n\nCevap: Fıkıhta çok net bir kural vardır: 'Suyu görünce teyemmüm bozulur.' Su bulunduğu veya kullanma imkanı doğduğu an teyemmüm geçerliliğini kaybeder, hemen suyla abdest almak gerekir."
              },
              {
                type: 'content',
                title: "Gusül ve Teyemmümün Sınırları",
                emoji: "🎯",
                body: "Unutmayın! Gusül ve teyemmüm kafamıza göre başvuracağımız yöntemler değildir. Teyemmüm sadece suyun gerçekten olmadığı veya kullanılamadığı acil durumlarda İslam'ın bize sunduğu harika bir kolaylık kapısıdır."
              },
              {
                type: 'activity',
                title: "Etkinlik: Doğru-Yanlış Fıkıh Paneli",
                emoji: "🧩",
                body: "Aşağıdaki iddiaları inceleyelim og hangilerinin doğru hangilerinin yanlış olduğunu bulalım:",
                items: [
                  "• Abdestliyken ağlamak abdesti bozar. (YANLIŞ - Gözyaşı temizdir.)",
                  "• Saç tararken saçın dökülmesi abdesti bozmaz. (DOĞRU - Beden parçası kopması bozmaz.)",
                  "• Namaz kılarken sesli gülmek hem namazı hem abdesti bozar. (DOĞRU - Saygısızlık yaptırımıdır.)",
                  "• Çamurlu toprakla teyemmüm alınabilir. (YANLIŞ - Toprak kuru ve temiz olmalıdır.)"
                ]
              },
              {
                type: 'discussion',
                title: "Sınıf İçi Akıl Yürütme Soruları",
                emoji: "🗨️",
                items: [
                  "Sizce dinimizin su bulunmadığında ibadeti iptal etmek yerine toprakla teyemmüm etmemizi istemesi, İslam'ın sürekliliğe ve niyetin temizliğine verdiği önemi nasıl gösterir?",
                  "Uykunun kendisinin değil, irade kaybının abdesti bozması felsefesi bize hayatta kendimizi kontrol etmenin önemi hakkında ne anlatır?"
                ]
              },
              {
                type: 'quiz',
                title: "Ortaokul Fıkıh Yarışması - 1",
                emoji: "🎯",
                question: "Aşağıdakilerden hangisi abdest alırken yapılması kesinlikle şart olan 4 farzdan biri DEĞİLDİR?",
                options: ["Yüzü yıkamak", "Ağzı su ile çalkalamak", "Başını mesh etmek", "Ayakları yıkamak"],
                correct: "Ağzı su ile çalkalamak",
                wisdom: "Tebrikler! Ağzı çalkalamak abdestin sünnetidir; yüzü, kolları, ayakları yıkamak ve başı mesh etmek ise farzdır."
              },
              {
                type: 'quiz',
                title: "Ortaokul Fıkıh Yarışması - 2",
                emoji: "🎯",
                question: "Gusül (boy) abdesti alırken ağza ve burna su verdikten sonra yapılması gereken üçüncü temel farz nedir?",
                options: ["Sadece ayakları yıkamak", "Bütün vücudu kuru yer kalmayacak şekilde yıkamak", "Başın dörtte birini mesh etmek", "Niyet edip beklemek"],
                correct: "Bütün vücudu kuru yer kalmayacak şekilde yıkamak",
                wisdom: "Harika! Guslün 3 farzı ağza su vermek, burna su vermek ve tüm vücudu tamamen yıkamaktır."
              },
              {
                type: 'quiz',
                title: "Ortaokul Fıkıh Yarışması - 3",
                emoji: "🎯",
                question: "Namaz kılarken ciddiyeti tamamen bozup yanındakilerin duyacağı kadar sesli gülmenin fıkhî sonucu nedir?",
                options: ["Sadece namaz bozulur", "Sadece abdest bozulur", "Hem namaz hem abdest bozulur", "Hiçbir şey bozulmaz"],
                correct: "Hem namaz hem abdest bozulur",
                wisdom: "Mükemmel bildin! Namazda sesli gülmek ibadetin ciddiyetini zedelediği için fıkhen hem namazı hem abdesti iptal eder."
              },
              {
                type: 'quiz',
                title: "Ortaokul Fıkıh Yarışması - 4",
                emoji: "🎯",
                question: "Teyemmüm abdesti almış bir mümin, namaza duracağı esnada aniden musluktan suların aktığını duyarsa ne yapmalıdır?",
                options: ["Teyemmümle namaza devam etmelidir", "Teyemmümü bozulmuştur, suyla normal abdest almalıdır", "Namazı kazaya bırakmalıdır", "Toprağa bir kez daha ellerini vurmalıdır"],
                correct: "Teyemmümü bozulmuştur, suyla normal abdest almalıdır",
                wisdom: "Muazzam! 'Suyu görünce teyemmüm bozulur' kuralı gereği, su imkanı doğduğu an teyemmüm biter ve suyla abdest alınır."
              }
            ]
          },
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
            title: "Peygamberimize İlk Vahyin Gelişi - Bölüm 1",
            outcomes: [
              "İlk vahiy öncesinde Mekke toplumunun durumunu açıklar.",
              "Peygamber Efendimizin (s.a.v) Hira mağarasındaki tefekkür sürecini ve Cebrail (a.s) ile ilk karşılaşmasını kavrar."
            ],
            wisdomNotes: "Mekkeliler, Yüce Allah'a (c.c) inanmayı bırakmış, putlara tapmaya başlamışlardı. Toplumda adalet kalmamıştı. Hz. Muhammed (s.a.v) düşünmek için Hira mağarasına gidiyordu. 610 yılı Ramazan ayında 40 yaşındayken Cebrail (a.s) gelip ona 'Oku!' dedi ve ilk vahiy indi.",
            interactiveActivity: "Alak Sûresi'nin ilk 5 ayetini okuyup, Yüce Allah'ın (c.c) ilk emrinin neden 'Oku' olduğu üzerine düşüncelerimizi paylaşalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimize İlk Vahyin Gelişi",
                subtitle: 'Bölüm 1: Hira\'dan Yükselen Nur',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Cahiliye Dönemi ve Mekke',
                emoji: '🌑',
                body: "Mekkeliler, Hz. İbrahim'den (a.s) kendilerine miras kalan bir olan Yüce Allah'a (Tevhid) inanmayı bırakmış, kendi elleriyle tahtadan ve taştan yaptıkları putlara tapmaya başlamışlardı. İnsanlık karanlık bir dönemden geçiyordu."
              },
              {
                type: 'content',
                title: 'Zulüm ve Haksızlıklar',
                emoji: '⚖️',
                body: "Toplumda adalet ve düzen kalmamıştı. Güçlü olan zayıfı eziyor, zenginler fakirlerin hakkını yiyordu. Kadınlara, kız çocuklarına ve kimsesizlere hiç değer verilmiyor, köleler pazarlarda eşya gibi satılıyordu."
              },
              {
                type: 'content',
                title: 'Kötülüklerin İçinde Bir Temiz Kalp',
                emoji: '💎',
                body: "Hz. Muhammed (s.a.v) gençliğinden beri asla putlara tapmamış, yalan söylememiş ve hiçbir kötülüğe bulaşmamıştı. Toplumdaki bu korkunç haksızlıklar ve ahlaki çöküş onu derinden üzüyor, kalbini daraltıyordu."
              },
              {
                type: 'content',
                title: 'Hira Mağarasına Çekiliş',
                emoji: '⛰️',
                body: "Mekke'nin kalabalığından ve kötülüklerinden rahatsız olan Peygamber Efendimiz (s.a.v), zaman zaman Nur Dağı'nda bulunan Hira mağarasına gidiyordu. Orada sessizlik içinde tefekküre dalıyor, kâinatın gerçek Yaratıcısını düşünüyordu."
              },
              {
                type: 'content',
                title: 'Sessizlik ve Tefekkür',
                emoji: '🧘',
                body: "Günlerce mağarada kalarak dünyanın ve insanların niçin yaratıldığını düşünüyor, bütün gün Yüce Allah'a (c.c) dua ediyordu. Mübarek kalbi, yaklaşmakta olan o büyük ilahi mesaja adeta hazırlanıyordu."
              },
              {
                type: 'content',
                title: '610 Yılı Ramazan Ayı',
                emoji: '🌙',
                body: "Tarihler 610 yılının Ramazan ayını (Kadir Gecesi) gösteriyordu. Peygamber Efendimiz (s.a.v) o sene tam 40 yaşındaydı. Yine Hira mağarasında derin bir tefekkür içindeyken aniden mağaranın içini muazzam bir nur kapladı."
              },
              {
                type: 'content',
                title: 'Vahiy Meleği: Cebrail (a.s)',
                emoji: '✨',
                body: "Yanına daha önce hiç görmediği, heybetli ve nurlu bir melek geldi. Bu melek, Yüce Allah'tan \"vahiy\" yani \"kutsal bilgi\" taşıyan Cebrail'di (a.s). İnsanlık tarihini değiştirecek o büyük an gelip çatmıştı."
              },
              {
                type: 'content',
                title: 'İlk Emir: OKU!',
                emoji: '📖',
                body: "Cebrail (a.s), Peygamber Efendimize (s.a.v) sıkıca sarıldı ve ona \"Oku!\" (İkra) dedi. Peygamberimiz (s.a.v) hayatında hiç okula gitmemişti, çok şaşırdı ve \"Ben okuma bilmem\" diye cevap verdi."
              },
              {
                type: 'content',
                title: 'Üçüncü Sıkış ve Kutsal Sözler',
                emoji: '💫',
                body: "Cebrail (a.s) onu ikinci ve üçüncü kez sıkıca sarıp tekrar \"Oku!\" deyince, Peygamber Efendimiz (s.a.v) \"Ne okuyayım?\" diye sordu. İşte o zaman Yüce Allah'ın (c.c) adıyla hayata ve dünyaya yeniden bakması gerektiğini anlatan o muazzam ayetler döküldü."
              },
              {
                type: 'content',
                title: 'Alak Suresinin İlk 5 Ayeti',
                emoji: '📜',
                body: "Cebrail (a.s), Alak Sûresinin ilk beş âyetini okudu ve Efendimiz (s.a.v) de bu ayetleri mübarek kalbine nakşetti. Böylece Hazreti Muhammed (s.a.v), 40 yaşında Yüce Allah (c.c) tarafından son peygamber olarak görevlendirilmiş oldu."
              },
              {
                type: 'ayah',
                title: 'Vahyin İlk Kelimeleri',
                emoji: '📖',
                body: "\"Yaratan Rabbinin adıyla oku! O insanı alaktan (embriyodan) yarattı. Oku! Rabbin sonsuz kerem sahibidir. Kalemle yazmayı öğreten O'dur. İnsana bilmediğini O öğretti.\"",
                reference: "(Alâk Süresi, 1-5. Ayetler)"
              },
              {
                type: 'discussion',
                title: 'İlk Mesaj Üzerine Düşünelim',
                emoji: '🤔',
                items: [
                  "Yüce Allah'ın (c.c) insanlığa gönderdiği ilk mesajın doğrudan 'OKU' olması İslam'ın ilme ve bilgiye verdiği önem hakkında bize ne anlatır?",
                  "Peygamber Efendimizin (s.a.v) toplumdaki adaletsizliklerden rahatsız olup Hira mağarasında düşünmeye çekilmesi, onun ahlakı hakkında ne gösterir?"
                ]
              },
              {
                type: 'activity',
                title: 'Hira Yolculuğu Empatisi',
                emoji: '🧩',
                body: "Sınıfça gözlerimizi kapatalım ve Mekke'nin o sıcağında, yapayalnız ve karanlık bir mağarada aniden Cebrail (a.s) meleğiyle karşılaşan Peygamber Efendimizin (s.a.v) o an hissettiği büyük şaşkınlık ve heyecanı anlamaya çalışalım."
              },
              {
                type: 'quiz',
                title: 'İlk Vahiy Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimize (s.a.v) 610 yılı Ramazan ayında Hira mağarasındayken gelen ilk vahiy (ilk 5 ayet) hangi surenin ayetleridir?",
                options: ["Bakara Suresi", "Yasin Suresi", "Alak Suresi", "İhlas Suresi"],
                correct: "Alak Suresi",
                wisdom: "Harika! Cebrail'in (a.s) getirdiği ilk ayetler 'Yaratan Rabbinin adıyla oku' diye başlayan Alak Suresinin ilk 5 ayetidir."
              },
              {
                type: 'quiz',
                title: 'İlk Vahiy Yarışması - 2',
                emoji: '🎯',
                question: "Cebrail'in (a.s) Hira mağarasında Peygamber Efendimize (s.a.v) söylediği ilk söz ve ilahi emir hangisidir?",
                options: ["Temizlen!", "Yaz!", "Uyan!", "Oku!"],
                correct: "Oku!",
                wisdom: "Doğru cevap! İslam'ın ilk emri, karanlıkları ilimle aydınlatmak için 'OKU' olmuştur."
              }
            ]
          },
          {
            id: "w2_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimize İlk Vahyin Gelişi - Bölüm 2",
            outcomes: [
              "Vahiy sonrasında Hz. Hatice'nin (r.anha) Peygamber Efendimize (s.a.v) verdiği manevi desteği açıklar.",
              "İslam'a ilk davet sürecini ve ilk Müslümanları tanır."
            ],
            wisdomNotes: "Peygamber Efendimiz (s.a.v) korku ve heyecanla evine gelip Hz. Hatice'ye (r.anha) sığındı. Hz. Hatice ona 'Allah seni utandırmaz' diyerek ilk inanan kişi oldu. İlk Müslümanlar: Eşi Hz. Hatice (r.anha), arkadaşı Hz. Ebu Bekir (r.a), yeğeni Hz. Ali (r.a) ve evlatlığı Hz. Zeyd'dir (r.a).",
            interactiveActivity: "İlk Müslümanların isimlerini panoda listeleyelim ve zor zamanlarda aile içi desteğin önemini konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimize İlk Vahyin Gelişi",
                subtitle: 'Bölüm 2: İlk İnananlar ve Destek',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Büyük Heyecan ve Eve Dönüş',
                emoji: '🏃',
                body: "Hira mağarasında Cebrail (a.s) ile karşılaşan ve ilk vahyi alan Sevgili Peygamberimiz (s.a.v), yaşadığı bu muazzam ve olağanüstü olayın etkisiyle büyük bir heyecan ve titreme içinde evine koştu."
              },
              {
                type: 'content',
                title: 'Beni Örtün!',
                emoji: '🧥',
                body: "Evine vardığında sevgili eşi Hz. Hatice'ye (r.anha) \"Beni örtün, beni örtün!\" dedi. Biraz dinlenip sakinleştikten sonra Hira mağarasında başından geçenleri tüm şeffaflığıyla eşine anlattı."
              },
              {
                type: 'content',
                title: 'Hz. Hatice\'nin (r.anha) Muazzam Desteği',
                emoji: '🤝',
                body: "Hz. Hatice (r.anha) onu büyük bir şefkatle dinledi ve asla şüphe duymadı. Onu sakinleştirmek için elinden tutarak tarihe altın harflerle geçen şu teselli edici sözleri söyledi:"
              },
              {
                type: 'content',
                title: 'Yüce Allah Seni Utandırmaz',
                emoji: '💬',
                body: "\"Korkma! Yemin ederim ki, Yüce Allah seni asla utandırmaz ve yalnız bırakmaz. Çünkü sen akrabalarını gözetir, her zaman doğru konuşursun. Yalan nedir bilmezsin.\""
              },
              {
                type: 'content',
                title: 'Ahlaka Duyulan Güven',
                emoji: '💎',
                body: "\"Sen güçsüzlerin sıkıntılarına ortak olur, fakirin ihtiyacını karşılarsın. Misafire ikramda bulunur, haklı olana daima yardım edersin.\" Hz. Hatice (r.anha) bu sözleriyle eşinin güzel ahlâkına ne kadar güvendiğini dile getirmişti."
              },
              {
                type: 'content',
                title: 'İslam\'a Davet Başlıyor',
                emoji: '📢',
                body: "Cebrail'in (a.s) bir sonraki gelişinde okuduğu ayetler, Peygamber Efendimize (s.a.v) tevhidi yani Yüce Allah'tan (c.c) başka ilâh olmadığını kalkıp insanlara anlatma görevi verdi. Artık tebliğ (davet) dönemi başlıyordu."
              },
              {
                type: 'content',
                title: 'İlk İnanan İnsan: Hz. Hatice (r.anha)',
                emoji: '🥇',
                body: "Peygamber Efendimizin (s.a.v) anlattıklarını tereddütsüz kabul eden ve yeryüzünde ona inanan ilk kişi, vefakar eşi Hz. Hatice (r.anha) oldu. Hz. Hatice, Peygamberimize bu zorlu görevinde her zaman en büyük desteği verdi."
              },
              {
                type: 'content',
                title: 'Maddi ve Manevi Fedakarlık',
                emoji: '🤲',
                body: "Hz. Hatice (r.anha) sadece inanmakla kalmadı; bütün servetini ve parasını fakir Müslümanlar için harcadı. En sıkıntılı, baskı dolu günlerde hep onun yanındaydı ve onu teselli ediyordu."
              },
              {
                type: 'content',
                title: 'Müslümanlar Çoğalıyor: İlk Erkek',
                emoji: '👥',
                body: "Hz. Hatice'den sonra Peygamberimizin en yakın çocukluk arkadaşı olan ve Mekke'nin saygın tüccarlarından Hz. Ebu Bekir (r.a) de ona inanarak Müslüman olan 'İlk Erkek' unvanını aldı."
              },
              {
                type: 'content',
                title: 'İlk Çocuk ve İlk Azadlı Köle',
                emoji: '👦',
                body: "Peygamberimizin evinde büyüyen amcaoğlu Hz. Ali (r.a) (10 yaşındayken) Müslüman olan 'İlk Çocuk' oldu. Yine Peygamberimizin evlatlığı olan Hz. Zeyd bin Harise (r.a) de İslam'ı seçerek ona destek veren o sadık ilk halkaya katıldı."
              },
              {
                type: 'content',
                title: 'Sır Gibi Saklanan Din',
                emoji: '🤫',
                body: "İlk yıllarda Müslümanlar inançlarını Mekkelilerin baskı ve işkencelerinden korunmak için gizli tuttular. Sadece çok güvendikleri akraba ve dostlarına İslam'ı anlattılar."
              },
              {
                type: 'poem',
                title: 'Sensin Bizim Peygamberimiz',
                emoji: '🌙',
                body: "Kırk yaşında peygamberdin,\nHaktan bizlere rehberdin,\nElinde son ilahî din,\nDoğru yolu sen gösterdin."
              },
              {
                type: 'discussion',
                title: 'Destek Üzerine Düşünelim',
                emoji: '🤔',
                items: [
                  "Hz. Hatice'nin (r.anha), eşinin gördüğü bu olağanüstü durumu hiç sorgulamadan ona inanması, Peygamber Efendimizin (s.a.v) önceki hayatındaki hangi özelliğiyle (Muhammedü'l-Emin) ilgilidir?",
                  "Zor bir durumda kaldığımızda veya korktuğumuzda en yakınlarımızın bize 'Sen iyi bir insansın, korkma' demesi bize nasıl bir güç verir?"
                ]
              },
              {
                type: 'quiz',
                title: 'İlk Müslümanlar Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimize (s.a.v) ilk vahiy geldiğinde eve gidip durumu anlattığı ve ona inanarak yeryüzündeki İLK Müslüman olan kişi kimdir?",
                options: ["Hz. Ebu Bekir (r.a)", "Hz. Ali (r.a)", "Hz. Hatice (r.anha)", "Hz. Hamza (r.a)"],
                correct: "Hz. Hatice (r.anha)",
                wisdom: "Mükemmel! Peygamberimize ilk inanan ve tüm servetini bu yolda harcayan eşi Hz. Hatice'dir (r.anha)."
              },
              {
                type: 'quiz',
                title: 'İlk Müslümanlar Yarışması - 2',
                emoji: '🎯',
                question: "Peygamber Efendimizin evinde büyüyen ve henüz 10 yaşındayken ona inanarak Müslüman olan 'İlk Çocuk' sahabi kimdir?",
                options: ["Hz. Zeyd (r.a)", "Hz. Ömer (r.a)", "Hz. Hasan (r.a)", "Hz. Ali (r.a)"],
                correct: "Hz. Ali (r.a)",
                wisdom: "Harika! Hz. Ali (r.a) çocuk yaşta büyük bir cesaret göstererek İslam'ı seçmiştir."
              }
            ]
          },
          {
            id: "w2_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimize İlk Vahyin Gelişi - Bölüm 3",
            outcomes: [
              "Peygamber Efendimizin (s.a.v) Safa tepesindeki açık davetini ve Mekkelilerin tepkisini analiz eder.",
              "İslam tarihinin önemli ilk Müslüman şahsiyetlerini (sahabeleri) listeler."
            ],
            wisdomNotes: "Gizli davet döneminden sonra Peygamber Efendimiz (s.a.v) Safa tepesine çıkarak halkı açıkça İslam'a çağırdı. Mekkeliler onun yalan söylemediğini bilmelerine rağmen putlarını bırakmak istemeyip düşmanlık yaptılar. Buna rağmen Hz. Hamza (r.a) ve Hz. Ömer (r.a) gibi güçlü isimlerin de katılımıyla Müslümanların sayısı 40'a ulaştı.",
            interactiveActivity: "Kitabımızdaki bulmaca sorularını (İlk vahyin indiği mağara, Peygamberimizin lakabı vb.) hep birlikte çözelim.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimize İlk Vahyin Gelişi",
                subtitle: 'Bölüm 3: Açık Davet ve Safa Tepesi',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Gizli Davetin Sonu',
                emoji: '🤫',
                body: "Peygamber Efendimiz (s.a.v) 3 yıl boyunca İslam'ı sadece güvendiği yakınlarına ve dostlarına anlattı. Ancak Yüce Allah'tan (c.c) gelen \"Sana emrolunanı açıkça bildir!\" ayetiyle birlikte artık gizlilik dönemi sona ermişti."
              },
              {
                type: 'content',
                title: 'Safa Tepesindeki Açık Davet',
                emoji: '📢',
                body: "Peygamber Efendimiz (s.a.v) bir gün Mekke'deki Safa tepesine çıkarak yüksek sesle tüm kabilelere seslendi. Herkes onun önemli bir şey söyleyeceğini düşünerek tepenin etrafında toplandı."
              },
              {
                type: 'content',
                title: 'Güvene Dayalı Bir Soru',
                emoji: '⚖️',
                body: "Efendimiz (s.a.v) onlara şöyle sordu:\n— 'Ey Kureyşliler! Size şu tepenin ardından veya şu vadiden size saldırmak üzere olan bir düşman ordusunun geldiğini haber versem, bana inanır mısınız?'"
              },
              {
                type: 'content',
                title: 'Mekkelilerin Tarihi İtirafı',
                emoji: '🤝',
                body: "Orada bulunanların hepsi (hatta ona en çok düşmanlık yapacak olanlar bile) tek bir ağızdan:\n— 'Evet, inanırız. Çünkü senin hiçbir zaman yalan söylediğini hiç duymadık, sen her zaman dürüsttün' dediler."
              },
              {
                type: 'content',
                title: 'Büyük İlan',
                emoji: '✨',
                body: "Sevgili Peygamberimiz (s.a.v) bunun üzerine:\n— 'Öyleyse yemin ederim ki, Yüce Allah'tan başka ilah yoktur. Ben de Allah'ın size ve bütün insanlara gönderdiği peygamberim. Sizi putları bırakıp tek olan Allah'a inanmaya çağırıyorum' dedi."
              },
              {
                type: 'content',
                title: 'Amcası Ebu Leheb\'in İtirazı',
                emoji: '🔥',
                body: "Peygamber Efendimizin öz amcası Ebu Leheb, bu sözleri duyunca çok sinirlendi ve 'Bizi bunun için mi buraya topladın!' diyerek ona kötü sözler söyleyip orayı terk etti."
              },
              {
                type: 'content',
                title: 'Mekkelilerin Tepkisi ve Baskılar',
                emoji: '⛓️',
                body: "Mekkeliler, Peygamberimizin hayatı boyunca yalan söylemediğini, güvenilir bir insan olduğunu biliyor ve kabul ediyorlardı. Buna rağmen sırf kendi zenginliklerini, köle sistemlerini ve atalarından kalan putperest gelenekleri bırakmamak için inat ettiler."
              },
              {
                type: 'content',
                title: 'Mücadele ve Sabır',
                emoji: '🛡️',
                body: "Kendi elleriyle yaptıkları putlara tapmaya devam ederken, bir yandan da Peygamber Efendimize (s.a.v) ve ona inanan fakir, kimsesiz Müslümanlara eziyet edip düşmanca davranmaya başladılar. Ancak Efendimiz büyük bir sabır ve cesaretle davasına devam etti."
              },
              {
                type: 'content',
                title: 'Güçlenen Kardeşlik Bağları',
                emoji: '👥',
                body: "Uygulanan tüm şiddete, hakarete ve boykotlara rağmen Müslümanların sayısı gün geçtikçe artıyordu. İlk Müslümanlar hiç kimseden korkmadan her zaman Peygamber Efendimizin arkasında dimdik duruyorlardı."
              },
              {
                type: 'content',
                title: 'Hz. Hamza ve Hz. Ömer\'in Katılımı',
                emoji: '⚔️',
                body: "Mekke'nin en güçlü, en cesur ve önde gelen isimlerinden olan Hz. Hamza (r.a) ve sonrasında Hz. Ömer (r.a) de İslam'ı seçerek Müslüman olmuştu. Onların katılımıyla Müslümanlar büyük bir moral buldu ve sayıları 40'a ulaştı."
              },
              {
                type: 'activity',
                title: 'İlk Müslümanların Listesi',
                emoji: '📜',
                items: [
                  "İlk Müslüman Kadın: Hz. HATİCE (r.anha)",
                  "İlk Müslüman Erkek: Hz. EBU BEKİR (r.a)",
                  "İlk Müslüman Çocuk: Hz. ALİ (r.a)",
                  "İlk Azadlı Köle: Hz. ZEYD BİN HARİSE (r.a)",
                  "Diğer Büyük İsimler: Hz. BİLAL (r.a), Hz. SÜMEYYE (r.anha), Hz. OSMAN (r.a), Hz. ÖMER (r.a), Hz. HAMZA (r.a)"
                ]
              },
              {
                type: 'activity',
                title: 'Ders Sonu Bulmaca Hatırlatması',
                emoji: '📝',
                items: [
                  "1. Her hayırlı işin başı nedir? (Besmele)",
                  "2. İlk vahyin indiği mağaranın adı nedir? (Hira)",
                  "3. Peygamberimize inanan ilk çocuk kimdir? (Hz. Ali)",
                  "4. İlk vahyi (Oku) getiren kutsal bilgi meleği kimdir? (Cebrail)"
                ]
              },
              {
                type: 'discussion',
                title: 'Ahlakın Şahitliği',
                emoji: '🤔',
                items: [
                  "Mekkelilerin putlarına karşı çıkan Peygamberimize (s.a.v) 'Yalancı' diyememeleri, ama yine de ona inanmamaları bize onların asıl korkularının ne olduğunu gösterir?",
                  "Safa tepesinde düşmanlarının bile 'Sen hiç yalan söylemedin' itirafında bulunması, Peygamber Efendimizin (s.a.v) dürüstlük abidesi bir hayat yaşadığını nasıl kanıtlar?"
                ]
              },
              {
                type: 'quiz',
                title: 'Siyer Davet Yarışması',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v) gizli davet döneminden sonra tüm Mekkelileri toplayarak İslam'ı açıkça ilk kez ilan ettiği meşhur tepenin adı nedir?",
                options: ["Uhud Dağı", "Sevr Dağı", "Safa Tepesi", "Nur Dağı"],
                correct: "Safa Tepesi",
                wisdom: "Harika! Efendimiz Safa Tepesine çıkarak tüm Kureyş'e Allah'ın birliğini haykırmıştır."
              },
              {
                type: 'quiz',
                title: 'İslam Kahramanları Yarışması',
                emoji: '🎯',
                question: "İslam'ın zorlu ilk yıllarında Müslüman olarak sahabelere büyük bir güç ve cesaret veren, Mekke'nin en güçlü yiğitlerinden olan iki amca/sahabi kimdir?",
                options: ["Hz. Hamza (r.a) ve Hz. Ömer (r.a)", "Ebu Cehil ve Ebu Leheb", "Ebu Süfyan ve Ebu Talib", "Hz. Zeyd (r.a) ve Hz. Bilal (r.a)"],
                correct: "Hz. Hamza (r.a) ve Hz. Ömer (r.a)",
                wisdom: "Mükemmel! Bu iki yiğidin İslam'ı seçmesiyle Müslümanlar Mekke'de Kabe'de açıkça namaz kılabilmiştir."
              }
            ]
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
            title: "Sevgi ve Saygı - Bölüm I: Kalbimizin Eşsiz Nimeti: Sevgi",
            outcomes: [
              "Sevgi kavramını kâinatın güzellikleri ve nimet tefekkürü üzerinden açıklar.",
              "Müminin kalbindeki Allah, Peygamber, vatan ve ezan sevgisinin tezahürlerini kavrar."
            ],
            wisdomNotes: "Birlikte yaşadığımız insanlara ve çevreye karşı gösterdiğimiz güzel davranışlarımız, içimizdeki sevginin sonucudur. Saygı, arkadaşlık, yardımlaşma, iyilik gibi davranışlar, Allah'ın kalbimize yerleştirdiği eşsiz bir nimet olan sevginin sonucudur.",
            interactiveActivity: "Kâinattaki nimetlerin (arıların bal yapması, ayın gece lambası olması) Allah'ın bizi sevmesinin delilleri olduğunu konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Sevgi ve Kalbimiz",
                subtitle: "2. Hafta • 4. Gün • 1. Ders",
                emoji: "❤️"
              },
              {
                type: 'content',
                title: "Kâinatın Sevgi Dili",
                emoji: "📖",
                body: "Masmavi gökyüzü... Rengarenk kelebekler... Damla damla inen yağmur... Lapa lapa yağan kar... Gökkuşağı... Işıl ışıl yıldızlar... Yağmur sonrası toprak kokusu... Bin bir renkli çiçekler... Meyve yüklü ağaçlar... Çimenlerde koşuşan kuzular... Hepsi ayrı bir güzel... İlkbahar ayrı, sonbahar ayrı güzel... Yaz mevsimi ayrı, kış mevsimi ayrı güzel... İsimlerini duymak bile içimizde tatlı bir duygu uyandırdı... İşte bu duygunun adı sevgidir..."
              },
              {
                type: 'content',
                title: "Müslümanın Sevgi Dünyası",
                emoji: "✨",
                body: "Birlikte yaşadığımız insanlara ve çevreye karşı gösterdiğimiz güzel davranışlarımız, içimizdeki sevginin sonucudur. Saygı, arkadaşlık, yardımlaşma, iyilik gibi davranışlar, Allah'ın kalbimize yerleştirdiği eşsiz bir nimet olan sevginin sonucudur. Sevgi dolu bir insanız... Sevgi dolu bir kalbimiz var... Çünkü biz Müslümanız... Allah'ı çok seviyoruz. Yaratan, bizi yaşatan, bize sevebilen bir kalp veren Allah'ı her şeyden daha çok seviyoruz. Sonra Rabbimizi bize öğreten Peygamberimizi seviyoruz. Kendimizi, anne-babamızı, akrabalarimizi, Müslümanları seviyoruz. Tüm insanları ve varlıkları seviyoruz. Çünkü hepsini yaratan Allah'tır. Sevgi dolu bir kalbimiz var... Ülkemizi, bayrağımızı seviyoruz. Ezanımızı seviyoruz..."
              },
              {
                type: 'content',
                title: "Allah da Bizleri Çok Seviyor",
                emoji: "💡",
                body: "Biz Allah'ı çok seviyoruz, Allah da bizleri çok seviyor. Allah'ın bizi sevdiğini, O'nun bizleri yaratmasından ve bizlere verdiği nimetlerden anlıyoruz. O'nun yarattığı güneşle, sebze ve meyvelerimiz büyüyor. O'nun yarattığı arılar bizim için bal yapıyor. O'nun yarattığı ay, gece lambası gibi bizi aydınlatıyor. O'nun gökten indirdiği suyu içiyoruz. O'nun yarattığı gözle görüyor, kulakla işitiyor, O'nun yarattığı kalple seviyoruz."
              },
              {
                type: 'content',
                title: "Sevginin Harekete Yansıması",
                emoji: "🌟",
                body: "Bir insanın gerçekten sevgi dolu olduğunu onun davranışlarından anlarız. Çünkü sevgi, insanın hareketlerine yansır. Sevgiyi tadan insan, etrafına da sevgi yayar. Yüreğindeki sevgi, iyi davranışlara dönüşür. Peygamberimizi model almamız, ona olan sevgimizin ispatıdır. Anne babamızla saygılı ve güzel bir iletişim kurmamız, onlara olan sevgimizi gösterir. İnsanlarla kardeş gibi geçinmemiz, insanları sevdiğimizi gösterir. Çevreye zarar vermememiz, çevreyi kirletmememiz ve hiçbir şeyi israf etmememiz varlıklara olan sevgimizi ortaya koyar."
              },
              {
                type: 'ayah',
                title: "Şefkat ve Düşkünlük Ayeti",
                emoji: "📖",
                body: "\"Andolsun, size kendi içinizden öyle bir peygamber gelmiştir ki, sizin sıkıntıya düşmeniz ona çok ağır gelir. O, size çok düşkün, müminlere karşı da çok şefkatli ve merhametlidir.\"",
                reference: "(Tevbe Suresi, 128. Ayet)"
              }
            ]
          },
          {
            id: "w2_d4_l2",
            lessonNumber: 2,
            title: "Sevgi ve Saygı - Bölüm II: Herkes için Saygı ve Kendine Değer Vermek",
            outcomes: [
              "Saygılı olmanın dinimizdeki yerini bir arada yaşama ahlakı üzerinden kavrar.",
              "Kendine saygı duymanın, vücut ve vakit kıymeti bilmenin gerekliliklerini açıklar."
            ],
            wisdomNotes: "Saygı, karşımızdakini dinlemek, ona değer vermektir. Saygı karşımızdakinin haklarını kabul etmek ve onu anlamaktır. Dinimiz, başta aile büyüklerimiz olmak üzere herkese saygılı davranmamızı ister. Kendimize duyduğumuz saygının gereği olarak aklımıza ve vücudumuza zarar verecek şeylerden uzak durmalıyız.",
            interactiveActivity: "PDF'teki Hucurat Suresi 11. ayetindeki uyarılar (alay etmeme, lakap takmama) üzerine konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Herkese Karşı Saygılıyım",
                subtitle: "2. Hafta • 4. Gün • 2. Ders",
                emoji: "🤝"
              },
              {
                type: 'content',
                title: "Toplum Hayatı ve Saygı Kuralları",
                emoji: "📖",
                body: "İnsan, toplumdan uzak bir şekilde tek başına yaşayamaz. Hayatımızı ailemiz, komşularımız, arkadaşlarımızla birlikte paylaştığımızda mutlu oluruz. Ancak unutmamalıyız ki, birlikte yaşadığımız insanlar ile olan ilişkilerimizde dikkat etmemiz gereken some önemli kurallar vardır. Saygılı olmak da bunlardan biridir. Saygı, karşımızdakini dinlemek, ona değer vermektir. Saygı karşımızdakinin haklarını kabul etmek ve onu anlamaktır."
              },
              {
                type: 'content',
                title: "Büyüklere Saygı, Küçüklere Şefkat",
                emoji: "✨",
                body: "Ailemiz bizim için çok değerlidir. Annemiz, babamız, dedemiz, babaannemiz, anneannemiz, amcamız, halamız, dayımız, teyzemiz ve diğer akrabalarımız bizi sevgi ile sarıp sarmalayan aile büyüklerimizdir. Onlara karşı saygıda kusur etmememiz gerektiğini biliriz. Çünkü dinimiz, başta aile büyüklerimiz olmak üzere herkese saygılı davranmamızı ister. Örneğin eve bir büyüğümüz geldiğinde ayağa kalkarak onu karşılarız. Selamına karşılık verir, elinde bir şey varsa alır, ona yardım ederiz. Tabi ki, sadece aile büyüklerimize karşı değil, bizden küçük olanlara karşı da saygıyı koruruz. Alay etmek, küçük düşürmek, kaba davranmak gibi saygısızlık anlamına gelen davranışlardan kaçınırız. Komşularımıza, öğretmenlerimize, arkadaşlarımıza, çevremizdeki tüm insanlara karşı aynı şekilde davranırız."
              },
              {
                type: 'content',
                title: "Kendime de Saygı Duyuyorum",
                emoji: "💎",
                body: "Diğer insanlara saygılı olmak kadar kendimize saygı göstermek de önemlidir. Mesela kimimiz sarı saçlı, kimimiz siyah saçlı; bazılarımız mavi gözlü, bazılarımız kahverengi gözlüyüz. Allah hepimizi birbirimizden farklı ve özel yaratmıştır. Allah bize bu kadar değer verdiğine göre biz de kendimize değer vermeliyiz. Kendimize verdiğimiz değerin gereği olarak, aklımıza ve vücudumuza zarar verecek şeylerden uzak durmalıyız. Zararlı yiyecek ve içecekleri tüketmemeli, hasta olmamak için gerekli önlemleri almalıyız. Aynı şekilde boş vakitlerimizi güzel ve faydalı bir şekilde değerlendirmeliyiz."
              },
              {
                type: 'ayah',
                title: "Alay Etmeme ve Kötü Lakap Ayeti",
                emoji: "📖",
                body: "\"Ey müminler! Bir topluluk diğer bir topluluğu alaya almasın. Belki de onlar, kendilerinden daha iyidirler. Kadınlar da kadınları alaya almasınlar. Belki onlar kendilerinden daha iyidirler. Kendi kendinizi ayıplamayın, birbirinizi kötü lakaplarla çağırmayın. İmandan sonra fâsıklık ne kötü bir isimdir! Kim de tevbe etmezse işte onlar zalimlerdir.\"",
                reference: "(Hucurat Sûresi, 11. Ayet)"
              },
              {
                type: 'hadith',
                title: "Büyüğe Saygı, Küçüğe Merhamet",
                emoji: "🌹",
                body: "\"Küçüğümüze merhamet etmeyen, büyüğümüze saygı göstermeyen ve iyiliği emredip/teşvik edip kötülükten sakındırmayan/uzaklaştırmayan bizden değildir.\"",
                reference: "Hadis-i Şerif"
              }
            ]
          },
          {
            id: "w2_d4_l3",
            lessonNumber: 3,
            title: "Sevgi ve Saygı - Bölüm III: Kıymet Bilme ve Soru Bulutları",
            outcomes: [
              "İman ve sevgi arasındaki ilişkiyi selamlaşma hadisi bağlamında açıklar.",
              "Beş şey gelmeden önce beş şeyin kıymetini bilme erdemini listeler."
            ],
            wisdomNotes: "İman etmedikçe cennete giremezsiniz. Birbirinizi sevmedikçe de iman etmiş olmazsınız. Aranızda selamı yayınız! Beş şey gelmeden önce beş şeyin kıymetini bil: Ölüm gelmeden önce hayatın, hastalıktan önce sağlığın, meşguliyetten önce boş vaktin, ihtiyarlamadan önce gençliğin, yoksulluk gelmeden önce zenginliğin.",
            interactiveActivity: "Slayttaki 'Soru Bulutları' interaktif öz değerlendirme sorularını arkadaşlık ilişkileri odağında sınıf içi diyalogla çözelim.",
            slides: [
              {
                type: 'cover',
                title: "Kıymet Bilmek ve Soru Bulutları",
                subtitle: "2. Hafta • 4. Gün • 3. Ders",
                emoji: "💭"
              },
              {
                type: 'hadith',
                title: "Sevginin ve İmanın Şartı: Selam",
                emoji: "🌹",
                body: "\"İman etmedikçe cennete giremezsiniz. Birbirinizi sevmedikçe de iman etmiş olmazsınız. Yaptığınız takdirde birbirinizi seveceğiniz bir şey söyleyeyim mi? Aranızda selamı yayınız!\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'hadith',
                title: "Beş Şeyin Kıymetini Bilmek",
                emoji: "🌹",
                body: "\"Beş şey gelmeden önce beş şeyin kıymetini bil:\n1. Ölüm gelmeden önce hayatın,\n2. Hastalıktan önce sağlığın,\n3. Meşguliyetten önce boş vaktin,\n4. İhtiyarlamadan önce gençliğin,\n5. Yoksulluk gelmeden önce zenginliğin.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'activity',
                title: "Etkinlik Kartı: Soru Bulutları",
                emoji: "☁️",
                body: "Kitabın ucu açık sayfasını soru kartına uyarladık. Sırayla samimiyetle cevaplayalım:",
                items: [
                  "Bulut 1: İyi bir arkadașta hangi özelliklerin olmasını istersin?",
                  "Bulut 2: Bir arkadașında asla olmasını istemediğin özellikler nelerdir?",
                  "Bulut 3: Arkadașında olmasını istediğin özelliklerden hangilerini sen tașıyorsun?",
                  "Bulut 4: Beğenmediğin bir özelliğin var mı? Onu değiștirmeye ne dersin?"
                ]
              },
              {
                type: 'quiz',
                title: "Sevgi ve Saygı Testi",
                emoji: "🎯",
                question: "Kur'an-ı Kerim'de belirtilen, Allah'ın çok sevdiği güzel davranışlardan biri hangisidir?",
                options: ["Alay etmek", "Kötü lakap takmak", "Yardımlaşmak ve sabretmek", "İsraf etmek"],
                correct: "Yardımlaşmak ve sabretmek",
                wisdom: "Harika! Kur'an-ı Kerim'de yardımlaşan, iyilik yapan, sabreden ve adaletli olan kimseleri Allah'ın çok sevdiği açıkça bildirilmiştir."
              }
            ]
          },
        ]
      },
      {
        dayName: "Hafta Özeti",
        discipline: "DEĞERLENDİRME",
        bgGrad: "from-sky-500 to-blue-600",
        badgeColor: "bg-sky-100 text-sky-850",
        lessons: [
          {
            id: "w2_eval_l1",
            lessonNumber: 1,
            title: "2. Hafta Büyük Şampiyonluk Sınavı",
            outcomes: [
              "2. haftada işlenen Allah'ın sıfatları, Meleklere iman, Abdest ve İlk Vahiy konularını pekiştirir.",
              "Öğrenilen bilgileri 15 soruluk büyük değerlendirme testiyle kalıcı hale getirir."
            ],
            wisdomNotes: "Bu hafta meleklerin nurlu dünyasını, abdestin ferahlığını ve Hira mağarasından yükselen ilk 'Oku' emrini öğrendik. Şimdi bu güzel bilgileri yarışarak hatırlama zamanı!",
            interactiveActivity: "Sınıfı iki gruba ayırarak 15 soruluk bu büyük yarışmayı puanlı bir bilgi şölenine çevirelim.",
            slides: [
              {
                type: 'cover',
                title: "2. Hafta Şampiyonluk Sınavı",
                subtitle: "Büyük Değerlendirme • 15 Soru",
                emoji: "🏆"
              },
              {
                type: 'content',
                title: "Büyük Yarışma Başlıyor!",
                emoji: "🚀",
                body: "Bu hafta boyunca Allah'ın sıfatlarını, melekleri, abdesti, teyemmümü, ilk vahyin gelişini ve sevgi/saygı ahlakını öğrendik.\n\nŞimdi 15 soruluk büyük sınavla 'Haftanın Şampiyonu'nu belirleme zamanı! Her doğru cevap seni zirveye taşıyacak."
              },
              {
                type: 'quiz',
                title: "Soru 1 / 15",
                emoji: "🎯",
                question: "Allah'ın zati sıfatlarından olan ve 'Varlığının başlangıcı olmaması' anlamına gelen sıfat hangisidir?",
                options: ["Vücud", "Beka", "Kıdem", "İlim"],
                correct: "Kıdem",
                wisdom: "Harika! Kıdem, Allah'ın varlığının bir başlangıcı olmaması demektir."
              },
              {
                type: 'quiz',
                title: "Soru 2 / 15",
                emoji: "🎯",
                question: "Allah'ın her şeyi, karanlık bir gecede siyah bir karıncayı bile kusursuzca görmesi anlamına gelen subuti sıfatı hangisidir?",
                options: ["Basar", "İrade", "Semî", "Kelam"],
                correct: "Basar",
                wisdom: "Tebrikler! Basar, Allah'ın her şeyi görmesi demektir."
              },
              {
                type: 'quiz',
                title: "Soru 3 / 15",
                emoji: "🎯",
                question: "Dört büyük melekten biri olan ve tabiat olaylarını (yağmur, kar, rüzgar) düzenlemekle görevli melek kimdir?",
                options: ["Azrail", "Cebrail", "Mikail", "İsrafil"],
                correct: "Mikail",
                wisdom: "Doğru cevap! Tabiat olaylarını Mikail (a.s.) düzenler."
              },
              {
                type: 'quiz',
                title: "Soru 4 / 15",
                emoji: "🎯",
                question: "Allah'ın emir ve vahiylerini peygamberlere ulaştırmakla görevli olan kutsal bilgi meleği kimdir?",
                options: ["Cebrail", "İsrafil", "Azrail", "Mikail"],
                correct: "Cebrail",
                wisdom: "Mükemmel! Vahiy meleği Cebrail'dir (a.s.)."
              },
              {
                type: 'quiz',
                title: "Soru 5 / 15",
                emoji: "🎯",
                question: "Aşağıdakilerden hangisi namaza hazırlık şartlarından (namazın dışındaki farzlardan) biri olan 'Necasetten Tahâret'in anlamıdır?",
                options: ["Abdest almak", "Kıbleye dönmek", "Elbisenin ve namaz kılınacak yerin temiz olması", "Vaktin girmesi"],
                correct: "Elbisenin ve namaz kılınacak yerin temiz olması",
                wisdom: "Harika! Necasetten tahâret, bedenin, elbisenin ve çevrenin kirlerden temizlenmesidir."
              },
              {
                type: 'quiz',
                title: "Soru 6 / 15",
                emoji: "🎯",
                question: "Abdest alırken yapılması kesinlikle zorunlu olan 4 farzdan biri aşağıdakilerden hangisidir?",
                options: ["Ağza su vermek", "Burnu temizlemek", "Yüzü yıkamak", "Kulakları mesh etmek"],
                correct: "Yüzü yıkamak",
                wisdom: "Doğru cevap! Ağız, burun ve kulaklar sünnettir; yüzü yıkamak ise abdestin 4 farzından biridir."
              },
              {
                type: 'quiz',
                title: "Soru 7 / 15",
                emoji: "🎯",
                question: "Su bulunmadığında veya sağlık sebebiyle kullanılamadığında temiz toprakla alınan sembolik abdest çeşidine ne denir?",
                options: ["Teyemmüm", "Gusül", "Kıyam", "Vakfe"],
                correct: "Teyemmüm",
                wisdom: "Tebrikler! Su olmadığında temiz toprakla teyemmüm edilir, dinimiz kolaylık dinidir."
              },
              {
                type: 'quiz',
                title: "Soru 8 / 15",
                emoji: "🎯",
                question: "Aşağıdaki durumlardan hangisi abdesti kesinlikle BOZAR?",
                options: ["Tırnak kesmek", "Namazda sesli gülmek", "Ağlamak", "Saç taramak"],
                correct: "Namazda sesli gülmek",
                wisdom: "Mükemmel bildin! Namazda yanındakinin duyacağı kadar sesli gülmek fıkhen abdesti bozar."
              },
              {
                type: 'quiz',
                title: "Soru 9 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimize (s.a.s) ilk vahiy, 610 yılı Ramazan ayında hangi mağarada gelmiştir?",
                options: ["Sevr Mağarası", "Hira Mağarası", "Kuba", "Arafat"],
                correct: "Hira Mağarası",
                wisdom: "Harika! İlk vahiy Nur Dağı'ndaki Hira mağarasında inmiştir."
              },
              {
                type: 'quiz',
                title: "Soru 10 / 15",
                emoji: "🎯",
                question: "Cebrail'in (a.s.) Peygamberimize getirdiği ilk ayetlerin (Alak Suresi) ilk emri nedir?",
                options: ["Temizlen!", "Yaz!", "Oku!", "Kalk!"],
                correct: "Oku!",
                wisdom: "Doğru cevap! İslam'ın ilk emri 'Yaratan Rabbinin adıyla Oku!' olmuştur."
              },
              {
                type: 'quiz',
                title: "Soru 11 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimize peygamberliği geldikten sonra ona inanan ve destek olan İLK Müslüman kimdir?",
                options: ["Hz. Ali", "Hz. Ebubekir", "Hz. Hatice", "Hz. Ömer"],
                correct: "Hz. Hatice",
                wisdom: "Tebrikler! İlk inanan ve ona en büyük desteği veren eşi Hz. Hatice olmuştur."
              },
              {
                type: 'quiz',
                title: "Soru 12 / 15",
                emoji: "🎯",
                question: "İslam dininin insanlara kazandırdığı, bir kimseyi diğerlerinden ayıran paylaşma, şefkat ve dürüstlük gibi özelliklerin tümüne ne ad verilir?",
                options: ["Haya", "Ahlak", "Kıssa", "İhram"],
                correct: "Ahlak",
                wisdom: "Mükemmel! Bir insanın taşıdığı bu manevi özelliklerin tümüne ahlak denir."
              },
              {
                type: 'quiz',
                title: "Soru 13 / 15",
                emoji: "🎯",
                question: "Kur'an-ı Kerim'de (Hucurat Suresi 11. Ayet) insanların birbirlerine karşı yapması KESİN OLARAK yasaklanan kötü davranış hangisidir?",
                options: ["Oyun oynamak", "Alay etmek ve kötü lakap takmak", "Soru sormak", "Hediyeleşmek"],
                correct: "Alay etmek ve kötü lakap takmak",
                wisdom: "Harika! Dinimiz insanların onuruna değer verir, alay etmeyi ve kötü lakap takmayı yasaklar."
              },
              {
                type: 'quiz',
                title: "Soru 14 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimizin hadisine göre; 'İman etmedikçe cennete giremezsiniz, birbirinizi sevmedikçe de iman etmiş olmazsınız. Aranızda ... yayınız.' Boşluğa ne gelmelidir?",
                options: ["Selamı", "Malı", "Dedikoduyu", "Korkuyu"],
                correct: "Selamı",
                wisdom: "Doğru cevap! Efendimiz sevginin ve imanın şartı olarak aramızda selamı yaymamızı emretmiştir."
              },
              {
                type: 'quiz',
                title: "Soru 15 / 15",
                emoji: "🎯",
                question: "Peygamberimizin 'Beş şey gelmeden önce beş şeyin kıymetini bil' uyarısında hangisi YOKTUR?",
                options: ["Ölüm gelmeden hayatın", "İhtiyarlamadan önce gençliğin", "Zengin olmadan önce fakirliğin", "Hastalıktan önce sağlığın"],
                correct: "Zengin olmadan önce fakirliğin",
                wisdom: "Muhteşem bir kapanış! Hadisin doğrusu 'Yoksulluk gelmeden önce zenginliğin kıymetini bil' şeklindedir."
              },
              {
                type: 'content',
                title: "🏆 SEN BİR ŞAMPİYONSUN! 🏆",
                emoji: "🏅",
                body: "Harika bir iş çıkardın! 2. haftanın tüm konularını başarıyla tamamladın ve bilgilerini kanıtladın.\n\nŞimdi hafta sonu dinlenme zamanı, yeni haftada yepyeni maceralarla görüşmek üzere!"
              }
            ]
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
            title: "Kitaplara İnanıyorum - Bölüm 1: İlahi Kitaplar ve Kur'an-ı Kerim",
            outcomes: [
              "İlahi kitap kavramını ve Allah'ın kitap gönderme amacını açıklar.",
              "Dört büyük kitabı ve indirildiği peygamberleri eşleştirir.",
              "Kur'an-ı Kerim'in temel niteliklerini ve nüzul sürecini kavrar."
            ],
            wisdomNotes: "Bizi çok severek dünyada ve ahirette mutlu olmamızı isteyen Rabbimiz, bize mutlu olmanın yollarını öğreten ilahi kitaplar göndermiştir. Dört büyük kitap; Tevrat (Hz. Musa), Zebur (Hz. Davud), İncil (Hz. İsa) ve Kur'an-ı Kerim'dir (Hz. Muhammed). Kur'an, tek harfi bile değişmeden bize ulaşan son hayır rehberidir.",
            interactiveActivity: "Dört büyük ilahi kitabı ve indirildikleri peygamberleri sınıf içinde karşılıklı eşleştirme oyunu olarak tekrar edelim.",
            slides: [
              {
                type: 'cover',
                title: "Kitaplara İnanıyorum",
                subtitle: '3. Hafta • 1. Gün • 1. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Kitaplara İman',
                emoji: '📖',
                body: "Bizi çok seven Rabbimiz, dünyada da âhirette de mutlu olmamızı ister. Bize mutlu olmanın yollarını öğreten kitapları da bu sebeple göndermiştir. Allah'ın emir ve yasaklarından oluşan, bize geçmişimizi ve öldükten sonra yaşayacaklarımızı anlatan bu kitaplara \"ilâhî kitaplar\" denir."
              },
              {
                type: 'poem',
                title: 'Dört Kitap Şiiri',
                emoji: '🌙',
                body: "Allah'tan bize hitap,\nGönderildi dört kitap,\nTevrat, İncil ve Zebur,\nKur'an'dır bizlere nur."
              },
              {
                type: 'content',
                title: 'Dört Büyük Kitap ve Peygamberler',
                emoji: '💡',
                body: "Allah tarafından insanlara, peygamberler aracılığı ile dört büyük kitap gönderilmiştir. Bunlar;\n\n1. Tevrat — Hazreti Musa'ya indirilmiştir.\n2. Zebur — Hazreti Davud'a indirilmiştir.\n3. İncil — Hazreti İsa'ya indirilmiştir.\n4. Kur'an-ı Kerim — Sevgili Peygamberimiz Hazreti Muhammed'e (s.a.s) gönderilmiştir."
              },
              {
                type: 'content',
                title: 'Kur\'an-ı Kerim\'in Eşsizliği',
                emoji: '✨',
                body: "Yüce kitabımız Kur'an-ı Kerim, tek harfi bile değişmeden bize kadar ulaşmıştır. O, dünyanın son gününe kadar bütün insanlığın hayat rehberidir. Allah, Kur'an-ı Kerim'den sonra başka bir kitap göndermeyecektir."
              },
              {
                type: 'content',
                title: 'Kur\'an-ı Kerim\'in Genel Nitelikleri',
                emoji: '💎',
                items: [
                  "Allah'ın insanlara gönderdiği son kitaptır.",
                  "İçindeki bilgiler bütün insanlar için geçerlidir.",
                  "Okunması ve ezberlenmesi ibadettir.",
                  "Dili Arapça'dır."
                ]
              },
              {
                type: 'content',
                title: 'Yaratan Rabbinin Adıyla Oku!',
                emoji: '📜',
                body: "Kur'an-ı Kerim bir defada ciltli bir kitap olarak Peygamberimize gelmedi. Vahiy meleği Cebrail onu bölümler halinde Peygamberimize getirdi. Hepsinin tamamlanması toplam 23 yıl sürdü."
              },
              {
                type: 'content',
                title: 'Kadir Gecesi ve İlk Vahiy',
                emoji: '🌟',
                body: "Kur'an-ı Kerim, 610 yılı Ramazan ayında indirilmeye başlandı. Kur'an-ı Kerim'in indirilmeye başlandığı geceye \"Kadir Gecesi\" denir. Cebrail'in Peygamberimize getirdiği ilk ayetler ise \"Oku!\" emriyle başlıyordu."
              },
              {
                type: 'content',
                title: 'Biliyor Muydun?',
                emoji: '❓',
                body: "İslam'ın ilk emri: \"Oku!\"dur. (Alak Suresi, 1. Ayet)"
              },
              {
                type: 'ayah',
                title: 'İlk Emir Ayeti',
                emoji: '📖',
                body: "\"Yaratan Rabbinin adıyla oku!\"",
                reference: "(Alak Suresi, 1. Ayet)"
              },
              {
                type: 'discussion',
                title: 'Düşünelim ve Tartışalım',
                emoji: '🤔',
                items: [
                  "Kur'an okumayı öğrenmek sence neden önemli?",
                  "Rabbimizin bize mutlu olmamız için kitaplar göndermesi O'nun bize olan sevgisini nasıl gösterir?"
                ]
              },
              {
                type: 'activity',
                title: 'Uygulamaya Uyarlı Eşleştirme Kartı',
                emoji: '🧩',
                body: "Aşağıdaki kitapları ve peygamberleri doğru şekilde eşleştirelim:",
                items: [
                  "Hazreti Musa — TEVRAT",
                  "Hazreti Davud — ZEBUR",
                  "Hazreti İsa — İNCİL",
                  "Hazreti Muhammed (s.a.s) — KUR'AN-I KERİM"
                ]
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması - 1',
                emoji: '🎯',
                question: "Kur'an-ı Kerim'in indirilmeye başlandığı mübarek geceye ne ad verilir?",
                options: ["Berat Gecesi", "Kadir Gecesi", "Mevlid Gecesi", "Regaib Gecesi"],
                correct: "Kadir Gecesi",
                wisdom: "Doğru cevap! Kur'an-ı Kerim, 610 yılı Ramazan ayında Kadir Gecesi'nde indirilmeye başlanmıştır."
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması - 2',
                emoji: '🎯',
                question: "Hazreti Davud'a (a.s.) indirilen ilahi kitabın adı nedir?",
                options: ["Tevrat", "İncil", "Zebur", "Kur'an-ı Kerim"],
                correct: "Zebur",
                wisdom: "Harika! Zebur, Hazreti Davud'a indirilmiş olan ilahi kitaptır."
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması - 3',
                emoji: '🎯',
                question: "Kur'an-ı Kerim'in vahiyle tamamlanması toplam kaç yıl sürmüştür?",
                options: ["10 Yıl", "23 Yıl", "40 Yıl", "610 Yıl"],
                correct: "23 Yıl",
                wisdom: "Tebrikler! Vahiy meleği Cebrail'in Kur'an'ı bölümler halinde tamamlaması toplam 23 yıl sürmüştür."
              }
            ]
          },
          {
            id: "w3_d1_l2",
            lessonNumber: 2,
            title: "Kitaplara İnanıyorum - Bölüm 2: Kur'an-ı Kerim'i Tanıyalım",
            outcomes: [
              "Ayet, sure, cüz, aşır ve mukabele gibi temel Kur'an kavramlarını tanımlar.",
              "Kur'an-ı Kerim'in yapısal özelliklerini (ayet ve sure sayıları, en uzun/en kısa sureler vb.) listeler.",
              "Kur'an-ı Kerim'in insandan beklediği saygı ve yaşam modellerini açıklar."
            ],
            wisdomNotes: "Kur'an'daki her cümleye ayet (6236 adet), bölümlere sure (114 adet) denir. 20 sayfalık bölümlere cüz, belli konuyu anlatan ayetlere aşır, birinin okuyup diğerinin takip etmesine mukabele, baştan sona okumaya hatim, ezberleyene hafız denir. Peygamberimizin çağına Asr-ı Saadet denmiştir.",
            interactiveActivity: "PDF'teki karışık harflerle verilen kelime bulmaca etkinliğini (SURE, CÜZ, AYET, HATİM, AŞIR, MUKABELE) hep birlikte çözelim.",
            slides: [
              {
                type: 'cover',
                title: "Kur'an-ı Kerim'i Tanıyalım",
                subtitle: '3. Hafta • 1. Gün • 2. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Kur\'an-ı Kerim\'in Yapısal Birimleri',
                emoji: '📖',
                items: [
                  "Kur'an-ı Kerim'deki her bir cümleye \"âyet\" denir. Sayfalarda çiçeğe benzer şekilli işaretler bir ayetin bittiğini gösterir.",
                  "Âyetlerden oluşan bölümlere \"sûre\" denir.",
                  "Kur'an-ı Kerim'in yirmişer sayfalık bölümlerine ise \"cüz\" adı verilir."
                ]
              },
              {
                type: 'content',
                title: 'Sayılarla Kur\'an-ı Kerim',
                emoji: '💡',
                items: [
                  "Kur'an-ı Kerim'de 6236 âyet vardır.",
                  "Kur'an-ı Kerim'de 114 sûre vardır.",
                  "Kur'an-ı Kerim'in ilk sûresi Fâtiha, son sûresi ise Nâs Sûresi'dir.",
                  "Kur'an-ı Kerim'in en uzun sûresi Bakara, en kısa sûresi ise Kevser Sûresidir."
                ]
              },
              {
                type: 'content',
                title: 'Hatim ve Hafız Ne Demektir?',
                emoji: '✨',
                body: "Kur'an-ı Kerim'i başından sonuna kadar yüzünden okumaya \"hatim\" denir.\n\nKur'an-ı Kerim'i baştan sona eksiksiz bir şekilde ezberleyen kişiye ise \"hafız\" adı verilir."
              },
              {
                type: 'content',
                title: 'Aşır ve Mukabele Nedir?',
                emoji: '🗣️',
                body: "AŞIR: Kur'an-ı Kerim'de belli bir konuyu anlatan ayetler topluluğuna denir.\n\nMUKABELE: Kur'an-ı Kerim'i birinin yüksek sesle okuyup, diğerlerinin ise kendi mushaflarından sessizce takip etmesine denir. Özellikle Ramazan aylarında çok yapılır."
              },
              {
                type: 'content',
                title: 'Kur\'an-ı Kerim Bizden Ne Bekler?',
                emoji: '🤝',
                items: [
                  "Kur'an okumayı öğrenmemizi,",
                  "Kur'an okunurken saygıyla dinlememizi,",
                  "Kur'an'ı anlamamızı ve onun öğrettiği şekilde yaşamamızı bekler."
                ]
              },
              {
                type: 'ayah',
                title: 'Tane Tane Okumak',
                emoji: '📖',
                body: "\"Kur'an'ı ağır ağır, tane tane oku.\"",
                reference: "(Müzzemmil Suresi, 4. Âyet)"
              },
              {
                type: 'content',
                title: 'Kur\'an-ı Kerim Bize Neler Anlatır?',
                emoji: '💎',
                body: "Kur'an-ı Kerim bize Allah'ı tanıtır. İnsanı ve kâinattaki diğer varlıkları anlatır. İnancımızı ve ibadetlerimizi öğretir. Anne-babamıza, çevremizdeki insanlara, canlı ve cansız bütün varlıklara karşı nasıl davranmamız gerektiğini söyler. Bize her konuda doğru yolu gösterir. Allah'ın emir ve yasaklarına uygun yaşayan insanlar, dünya ve âhirette mutlu ve huzurlu olur."
              },
              {
                type: 'content',
                title: 'Asr-ı Saadet (Mutluluk Çağı)',
                emoji: '🌟',
                body: "Sevgili Peygamberimiz sanki yaşayan bir Kur'an'dır. O, Kur'an'ın nasıl anlaşılacağını ve yaşanacağını bize gösteren en güzel örnektir. Peygamberimizin yaşadığı çağa 'Mutluluk Çağı' anlamında \"Asr-ı Saadet\" denilmiştir. Çünkü Peygamberimiz (s.a.s) ve onun zamanında yaşayan müslümanlar, Kur'an'a göre yaşayan mutlu bir toplum oluşturmuşlardır."
              },
              {
                type: 'content',
                title: 'Kur\'an Bize Dua ve İbadeti Öğretir',
                emoji: '🤲',
                body: "Bizi yaratan Rabbimize dua ederek O'na olan sevgimizi ve ihtiyacımızı dile getiririz. Allah Kur'an'da çok güzel dualarla bize nasıl dua edeceğimizi öğretir. Ayrıca Allah'ın sevdiği güzel bir kul olmak için yapmamız gereken ibadetlerin (Namaz, oruç, zekât, hac vb.) önemini vurgular."
              },
              {
                type: 'ayah',
                title: 'Dünya ve Ahiret Duası',
                emoji: '📖',
                body: "\"Rabbimiz, bize dünyada ve âhirette iyilik ve güzellikler ver!\"",
                reference: "(Bakara Suresi, 201. Ayet)"
              },
              {
                type: 'hadith',
                title: 'En Hayırlı Kişi',
                emoji: '🌹',
                body: "\"Sizin en hayırlınız Kur'an'ı öğrenen ve onu başkalarına öğretendir.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'hadith',
                title: 'Zorlanarak Okuyanın Sevabı',
                emoji: '🌹',
                body: "\"Kur'an'ı ezberleyip güzelce okuyan kişi, şerefli meleklerle birliktedir. Kur'an'ı zorlanarak da olsa okumaya çalışan kişiye ise iki kat sevap vardır.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'activity',
                title: 'Karışık Harflerden Kelime Bulma Etkinliği',
                emoji: '🧩',
                body: "Hikayede geçen ve harfleri karışık verilen kelimeleri doğru sıraya dizelim:",
                items: [
                  "E R S U — SURE",
                  "Ü Z C — CÜZ",
                  "Y T A E — AYET",
                  "A E B U L E M K — MUKABELE",
                  "H A T M — HATİM",
                  "R Ş A — AŞIR"
                ]
              },
              {
                type: 'discussion',
                title: 'Hatim Merasimi Üzerine Düşünelim',
                emoji: '🤔',
                items: [
                  "Melike'nin hatim merasiminde hissettiği mutluluk hakkında ne düşünüyorsunuz?",
                  "Siz de hayatınızda bir hatim indirmek ve bunu sevdiklerinizle kutlamak ister misiniz?"
                ]
              }
            ]
          },
          {
            id: "w3_d1_l3",
            lessonNumber: 3,
            title: "Kitaplara İnanıyorum - Bölüm 3: Kur'an Kıssaları: Hz. Nuh'un Gemisi",
            outcomes: [
              "Kıssa kavramının anlamını ve öğüt verici yönünü açıklar.",
              "Hazreti Nuh'un (a.s.) putperest kavmine karşı verdiği sabırlı mücadeleyi özetler.",
              "Nuh Tufanı kıssasından çıkarılabilecek ahlaki ve toplumsal dersleri yorumlar."
            ],
            wisdomNotes: "Kur'an-ı Kerim'de çok güzel kıssalar vardır. Kıssa 'öğüt verici hikâye' demektir. Yaşananlardan ders almak ve örnek davranışları hayatımıza aktarmak bizim payımızdır. Putlara tapan inkârcı toplum karşısında Hz. Nuh Allah'ın emriyle büyük bir gemi inşa etmiş, iman edenler ve her hayvandan birer çift tufandan kurtulmuştur.",
            interactiveActivity: "Hz. Nuh'un gemisine her hayvandan birer çift alınması ve tufandan sadece iman edenlerin kurtulması sahnelerini zihnimizde canlandırarak yorumlayalım.",
            slides: [
              {
                type: 'cover',
                title: "Kur'an Kıssaları: Hz. Nuh'un Gemisi",
                subtitle: '3. Hafta • 1. Gün • 3. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Kıssa Ne Demektir?',
                emoji: '📖',
                body: "Kur'an-ı Kerim bize güzel davranışları öğretirken kıssalardan yararlanır. Kıssa, \"öğüt verici hikâye\" demektir. Bu kıssalar bizden önce yaşayan toplumları, geçmiş peygamberlerin hayatlarını anlatır. Yaşananlardan ders almak ve örnek davranışları hayatımıza aktarmak da bizim payımızdır!"
              },
              {
                type: 'content',
                title: 'Putperest Toplum ve Hz. Nuh\'un Seçilişi',
                emoji: '💡',
                body: "İnsanlar, ilk insan ve ilk peygamber olan Hz. Adem'den sonra, Allah'a ibadet etmeyi bırakarak kendi elleriyle yaptıkları putlara tapmaya başlamışlardı. Güçlü ve zenginler, zayıf ve korunmaya muhtaç olanları eziyordu. Merhameti ve iyilik yapmayı unutmuşlardı. Bu yüzden toplumda barış ve huzur kalmamıştı. Allah, o toplumda yaşamakta olan Hz. Nuh'u seçerek peygamberlikle görevlendirdi."
              },
              {
                type: 'content',
                title: 'Hz. Nuh\'un Karakteri ve Çağrısı',
                emoji: '✨',
                body: "Hz. Nuh, kimseye haksızlık etmeyen, herkesin güvendiği ve sevdiği bir kişiydi. Muhtaç olanlara elinden geldiği kadar yardım eder, doğru bildiğini çekinmeden söylerdi. Hz. Nuh, peygamber olduktan sonra çevresindeki insanları Allah'a inanmaya ve sadece O'na ibadet etmeye çağırdı."
              },
              {
                type: 'content',
                title: 'Kavminin Alay Etmesi ve İnkarı',
                emoji: '🗣️',
                body: "Kavmi, Hz. Nuh'un bu güzel çağrısını kabul etmedikleri gibi onunla alay ettiler. Ona, \"Sen de bizim gibi bir insansın, sana neden inanacakmışız?\" dediler. Hz. Nuh'un bütün çabasına rağmen çok az kişi Allah'a iman etti. Diğerleri putlara tapmaya, kötülük ve zalimlik yapmaya devam ettiler."
              },
              {
                type: 'content',
                title: 'Meydan Okuma ve Hz. Nuh\'un Duası',
                emoji: '🤲',
                body: "Hz. Nuh, her şeye rağmen sabırla halkına güzel öğütler vermeye devam ediyordu. Bir gün ellerini açıp Allah'a şöyle dua etti: \"Ya Rabbi, benim sözlerimi yalanlıyorlar, bana yardım et!\" Bunun üzerine inkâr edenler Nuh Peygambere, \"Kendisinden yardım istediğin Rabbin bizi cezalandırsın da görelim.\" diyerek meydan okudular."
              },
              {
                type: 'content',
                title: 'Büyük Geminin İnşası',
                emoji: '🛠️',
                body: "Hz. Nuh'a ve ona inananlara yapılan baskılar artık dayanılmaz hâle gelmişti. Bunun üzerine Hz. Nuh, \"Rabbim, beni ve iman edenleri kurtar!\" diye dua etti. Allah, Nuh Peygambere bir gemi yapmasını bildirdi. O güne kadar hiç gemi yapılmadığı için kimse gemi yapmayı bilmiyordu. Allah ona, geminin nasıl yapılacağını öğretti. O da ormandan ağaçlar getirerek büyük bir gemi yaptı."
              },
              {
                type: 'content',
                title: 'Gemiye Biniş Emri',
                emoji: '🐪',
                body: "Gemi tamamlandıktan sonra Allah, Hz. Nuh'tan iman edenleri gemiye bindirmesini istedi. Ayrıca gemiye her hayvandan birer çift (erkek ve dişi olarak) almasını emretti. Kutlu yolcular gemideki yerlerini aldılar."
              },
              {
                type: 'content',
                title: 'Tufanın Başlaması',
                emoji: '⛈️',
                body: "Ertesi gün gökyüzü kara bulutlarla kaplanmıştı. İnsanların yüreğine korku salan şimşekler çakıyordu. Çok geçmeden âdeta bardaktan boşanırcasına yağmur yağmaya başladı. Yağmur dinmek bilmiyor, yağdıkça yağıyordu. Her yeri büyük sular kaplamaya başladı."
              },
              {
                type: 'content',
                title: 'Dağlar Bile Kurtaramadı',
                emoji: '🌊',
                body: "Hz. Nuh kurtulabilmeleri için herkesi son kez gemiye binmeye çağırdı. İnkâr edenler ise dağlara doğru kaçarak yüksek yerlerde kurtulacaklarını söylediler ve gemiye binmek istemediler. Ancak bu onları kurtarmaya yetmedi. Yağmur öylesine yağdı ki, bir karış toprak kalmayıncaya dek yer sularla kaplandı."
              },
              {
                type: 'content',
                title: 'İnkârcıların Sonu',
                emoji: '💡',
                body: "Allah'ın varlığını ve birliğini kabul etmeyen, zayıfları ezen, kötülük ve haksızlık yapan herkes büyük tufanda boğuldu. Yalnızca Hz. Nuh ve Allah'a yürekten iman edenler gemi sayesinde suların üzerinde selametle kurtuldu."
              },
              {
                type: 'content',
                title: 'Yeryüzünde Yeni Bir Başlangıç',
                emoji: '🌱',
                body: "Sular yavaş yavaş çekildi. Dağlar, ovalar yeniden ortaya çıktı. Gemi emniyetle karaya oturdu. Yeryüzünde temiz, yeni bir hayat ve insanlık için yepyeni, hayırlı bir dönem başladı."
              },
              {
                type: 'discussion',
                title: 'Kıssadan Ders Çıkaralım',
                emoji: '🤔',
                items: [
                  "Hz. Nuh'un kavminin, uyarılara rağmen dağlara kaçarak kurtulacaklarını sanmaları bize kibir hakkında ne öğretir?",
                  "Toplumda barış ve adaletin kaybolması, merhametsizliğin yayılması Nuh kavminin sonunu nasıl hazırlamıştır?"
                ]
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması - 1',
                emoji: '🎯',
                question: "Kur'an-ı Kerim'de yer alan öğüt verici hikayelere ne ad verilir?",
                options: ["Hadis", "Sure", "Aşır", "Kıssa"],
                correct: "Kıssa",
                wisdom: "Tebrikler! Kıssa, Kur'an'da geçmiş peygamberlerin ve toplumların hayatından anlatılan öğüt verici hikayelerdir."
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması - 2',
                emoji: '🎯',
                question: "Hazreti Nuh'un putperest kavmi tufanda yok olurken kimler kurtulmuştur?",
                options: ["Zengin olanlar", "Dağlara kaçanlar", "Hz. Nuh ve iman edenler", "Put yapanlar"],
                correct: "Hz. Nuh ve iman edenler",
                wisdom: "Doğru cevap! Tufandan yalnızca Allah'ın emriyle yapılan gemiye binen Hz. Nuh ve iman edenler kurtulmuştur."
              }
            ]
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
            title: "Namazın Kılınışı ve Namazı Bozan Durumlar (Ortaokul Hataları Özel)",
            outcomes: [
              "Namazın kılınış safhalarını (niyet, tekbir, kıyam, kıraat, rükû, kavme, secde, oturuş, selam) sırasıyla listeler.",
              "Namazı bozan ve namaz esnasında yapılmaması gereken hatalı davranışları (mekruhları) fıkhî gerekçeleriyle açıklar."
            ],
            wisdomNotes: "Namaz, alemlerin Rabbi olan Allah'ın huzuruna çıkmaktır. Bu huzurda bedenimiz sabit, kalbimiz ise uyanık olmalıdır. Namazda dikkati dağıtan, ciddiyeti bozan her hareket ibadetin manevi neşesini zedeler veya tamamen geçersiz kılar.",
            interactiveActivity: "Sınıfımızda 'Namazda Yapılan En Sık 5 Hata' adında bir canlandırma köşesi kuralım. Ortaokul öğrencilerinin namazda en çok yaptığı kıpırdanma, göz ucuyla etrafa bakma ve gülme gibi hataları fıkhî kurallarla analiz edelim.",
            slides: [
              {
                type: 'content',
                title: "Huzura Durmak: Namaz Kılıyorum",
                emoji: "🛐",
                body: "Namaz bizi günde beş defa Rabbimize yönelten en asil ibadettir. Namaz kıldığımızda Allah'a olan güvenimizi ifade ederiz. O'na içtenlikle yalvarır, sadece O'ndan yardım isteriz. Bu dersimizde hem namazın nasıl kılınacağını hem de huzurdayken asla yapmamamız gereken hataları öğreneceğiz."
              },
              {
                type: 'content',
                title: "1. Safha: Niyet",
                emoji: "🤲",
                body: "Kılınacak namaz için kalben ve zihnen niyet edilir. Örnek: 'Niyet ettim Allah rızası için sabah namazının farzını kılmaya.' Niyet, yapacağımız işe tam olarak odaklanmaktır.",
                image: "assets/img/namaz/1.png"
              },
              {
                type: 'content',
                title: "2. Safha: İftitah Tekbiri",
                emoji: "🤚",
                body: "Erkekler ellerini kulaklarına, kadınlar göğüs hizasına kaldırarak 'Allahu ekber' der. Bu hareketle dünya işlerini arkamızda bıraktığımızı ilan ederiz.",
                image: "assets/img/namaz/2.png"
              },
              {
                type: 'content',
                title: "3. Safha: Kıyam ve Kıraat",
                emoji: "🧍",
                body: "Sağ elle sol bilek tutulur. Erkekler ellerini göbeğinin altında, kadınlar göğsün üstünde tutar. Ayakta saygıyla durup (Kıyam), sırasıyla Sübhâneke, Fatiha ve bir sûre okuruz (Kıraat).",
                image: "assets/img/namaz/3.png"
              },
              {
                type: 'content',
                title: "4. Safha: Rükû",
                emoji: "📐",
                body: "Eller dizlere konularak, erkekler sırtı dümdüz olacak şekilde 90 derece, kadınlar ise hafifçe eğilir. Bu saygı duruşunda 3 defa 'sübhâne rabbiye'l-azim' denir.",
                image: "assets/img/namaz/4.png"
              },
              {
                type: 'content',
                title: "5. Safha: Kavme (Rükûdan Doğrulma)",
                emoji: "🧍‍♂️",
                body: "Rükûdan doğrularak dik dururuz. Kalkarken 'Semiallahu limen hamideh' denir. Ayakta tam dik durduğumuz o kısa anda ise 'Rabbenâ lekel-hamd' denir.",
                image: "assets/img/namaz/5.png"
              },
              {
                type: 'content',
                title: "6. Safha: Secde (Sücud)",
                emoji: "🙇",
                body: "Eller, alın ve burun yere değdirilir. Kulun Allah'a en yakın olduğu andır. 3 defa 'sübhane rabbiye'l-a'la' denir. Doğrulup hafifçe oturulur og ardından ikinci secdeye gidilir.",
                image: "assets/img/namaz/6.png"
              },
              {
                type: 'content',
                title: "7. Safha: Oturuşlar (Ka'de)",
                emoji: "🧎",
                body: "Eller dizlerin üzerine konur. Erkekler sol ayağın üzerine oturur, sağ ayağı dik tutar; kadınlar ayaklarını sağa çevirerek oturur. Tahiyyât, Salli-Barik ve Rabbenâ duaları okunur.",
                image: "assets/img/namaz/7.png"
              },
              {
                type: 'content',
                title: "8. Safha: Selam",
                emoji: "👋",
                body: "Önce sağ omuza, sonra sol omuza bakarak 'esselâmu aleyküm ve rahmetullah' denir ve namaz biter. Böylece tüm dünyaya barış ve esenlik dilemiş oluruz.",
                image: "assets/img/namaz/8.png"
              },
              {
                type: 'content',
                title: "Namazı Bozan Durumlar Nedir?",
                emoji: "⚠️",
                body: "Namazın içindeyken yapılması fıkhî olarak yasak olan ve ibadeti tamamen iptal eden durumlara namazı bozan durumlar denir. Şimdi ortaokul sıralarında en çok yapılan hatalarla birlikte bunları tek tek inceleyelim."
              },
              {
                type: 'content',
                title: "Bozan Durum 1: Namazda İken Konuşmak",
                emoji: "💬",
                body: "Namaz esnasında yanındaki arkadaşına laf atmak, fısıldamak, birinin hapşırmasına 'Çok yaşa' demek veya gelen bir soruya cevap vermek namazı tamamen bozar. Huzurdayken sadece dualar ve tesbihler okunur."
              },
              {
                type: 'content',
                title: "Bozan Durum 2: Bir Şeyler Yemek ve İçmek",
                emoji: "🍬",
                body: "Namaz kılarken ağızda kalan bir yiyecek kırıntısını yutmak, sakız çiğnemek veya namaza başlamadan önce ağıza atılan şekeri namazda emip yutmak namazı bozar. İbadet esnasında yeme içme eylemi tamamen kesilmelidir."
              },
              {
                type: 'content',
                title: "Bozan Durum 3: Yüksek Sesle Gülmek",
                emoji: "😆",
                body: "Namazda kendi işiteceği veya arkadaşının duyacağı kadar yüksek sesle gülmek namazı bozar. Ortaokul öğrencilerinin cemaatle namaz kılarken en sık yaptığı hatalardan biridir. Namazda sesli gülmek fıkhen abdesti de namazı da iptal eder."
              },
              {
                type: 'content',
                title: "Bozan Durum 4: Kıbleden Başka Yöne Dönmek",
                emoji: "🧭",
                body: "Namazda iken göğsünü kıbleden tamamen çevirmek namazı bozar. \n\nÖnemli Detay: Sadece göz ucuyla etrafa bakmak namazı bozmaz (ama mekruhtur, günahtır). Ancak göğüs kafesini kıble yönünden tamamen sağa veya sola çevirirseniz namazınız anında biter."
              },
              {
                type: 'content',
                title: "Bozan Durum 5: Abdestin Bozulması",
                emoji: "🧼",
                body: "Namaz kılarken vücuttan kan çıkması, gaz çıkarılması veya abdesti bozan durumlardan birinin yaşanması namazı bozar. Bu durumda namaz hemen bırakılır, abdest yenilenir ve namaz baştan kılınır."
              },
              {
                type: 'content',
                title: "Ortaokul Hataları 1: Sürekli Kıpırdamak ve Saçla Oynamak",
                emoji: "🧒",
                body: "Namazda iken üstünü başını düzeltmek, sürekli saçını arkaya atmak, kıyafetinin ipiyle oynamak 'Amel-i Kesir' (namaz dışı aşırı hareket) sınıfına girerse namazı bozar. Namaz kılan dışarıdan bakıldığında namaz kılmıyor gibi görünüyorsa o namaz iptal olur."
              },
              {
                type: 'content',
                title: "Ortaokul Hataları 2: Ayakları Yerden Kaldırıp Oynatmak",
                emoji: "👣",
                body: "Özellikle secdeye giderken veya ayaktayken sürekli ayakları havaya kaldırmak, yerini değiştirmek, adımlar atmak namazı bozar. Secdedeyken iki ayağın birden parmaklarının hiçbir şekilde yere değmemesi ve havada kalması namazı geçersiz kılar."
              },
              {
                type: 'content',
                title: "Ortaokul Hataları 3: Sağa Sola, Arkaya Bakmak (Mekruhlar)",
                emoji: "👀",
                body: "Namazda göz ucuyla yanındaki arkadaşına bakmak, saate bakmak, tavandaki lambaları saymak namazı bozmaz ama namazın sevabını yok eder. Buna fıkıhta 'mekruh' (hoş karşılanmayan hata) denir. Namazda gözümüz sadece secde yerine bakmalıdır."
              },
              {
                type: 'content',
                title: "Ortaokul Hataları 4: Esnerken Ağzı Kapatmamak",
                emoji: "🥱",
                body: "Namazda esnerken ağzı açık bırakmak ve 'haaay' diye ses çıkarmak namazın huşusuna aykırıdır. Esneme geldiğinde kendimizi tutmalı, engel olamıyorsak sol elimizin arkasıyla ağzımızı şık bir şekilde kapatmalıyız."
              },
              {
                type: 'content',
                title: "Ortaokul Hataları 5: Kaşınmak ve Sallanmak",
                emoji: "🖐️",
                body: "Namazda durmadan sağa sola beşik gibi sallanmak, tek elle sürekli vücudun farklı yerlerini kaşımak mekruhtur. Bir rekat içinde üç defa üst üste el kaldırıp kaşınmak namaz dışı hareket sayılacağı için namazı tehlikeye atar."
              },
              {
                type: 'content',
                title: "Namazı Bozmayan Durumlar Nelerdir?",
                emoji: "✅",
                body: "Namaz kılarken istem dışı gelişen bazı küçük durumlar namazı bozmaz:\n\n• Namazda iken terlemek veya gözden yaş gelmesi,\n• Önünden bir insanın veya hayvanın geçmesi,\n• Unutarak sadece tek bir kelime mırıldanıp hemen farkına varmak,\n• Sinek ısırması sonucu akan kan boyutu taşmayan küçük bir leke kalması."
              },
              {
                type: 'activity',
                title: "Etkinlik: Hakem Sensin! Namazı Bozar mı?",
                emoji: "🧩",
                body: "Aşağıdaki öğrenci davranışlarını inceleyelim og hangilerinin namazı bozacağını bulalım:",
                items: [
                  "1. Yusuf namaz kılarken montunun fermuarıyla sürekli aşağı yukarı oynuyor. (BOZAR - Amel-i kesir)",
                  "2. Zeynep secdeye giderken ayak parmaklarını yerden tamamen kaldırdı ve havada tuttu. (BOZAR - Secde şartı bozuldu)",
                  "3. Ömer namazda esnerken elinin arkasıyla ağzını kapattı. (BOZMAZ - Doğru davranıştır)",
                  "4. Ali göz ucuyla sınıftaki saate baktı ama vücudunu kıbleden çevirmedi. (BOZMAZ - Ama mekruhtur, sevabı azaltır)"
                ]
              },
              {
                type: 'discussion',
                title: "Sınıf İçi Değerlendirme Soruları",
                emoji: "🤔",
                items: [
                  "Namaz esnasında etrafa bakmamak ve gözlerimizi sadece secde noktasına odaklamak, günlük hayatta ders çalışırken dikkatimizin dağılmasını nasıl engeller?",
                  "Namazda sesli gülmenin hem abdesti hem namazı bozacak kadar ağır bir hata sayılmasının felsefi gerekçesi sizce ne olabilir?"
                ]
              },
              {
                type: 'quiz',
                title: "Namazı Bozanlar Yarışması - 1",
                emoji: "🎯",
                question: "Namaz kılarken fıkhî olarak göğüs kafesini kıble yönünden tamamen başka bir yöne çevirmenin sonucu nedir?",
                options: ["Namaz bozulmaz, sünnettir", "Namaz bozulur", "Sadece mekruh olur, namaz devam eder", "Abdest bozulur"],
                correct: "Namaz bozulur",
                wisdom: "Tebrikler! Kıbleye yönelmek namazın farzı olduğu için, göğsü kıbleden çevirmek namazı anında bozar."
              },
              {
                type: 'quiz',
                title: "Namazı Bozanlar Yarışması - 2",
                emoji: "🎯",
                question: "Aşağıdaki durumlardan hangisi namaz kılarken hem namazın geçerliliğini hem de aldığımız abdesti tamamen iptal eder?",
                options: ["Namazda terlemek", "Namazda yanındakilerin duyacağı kadar sesli gülmek", "Göz ucuyla duvardaki saate bakmak", "Namazda sure okumak"],
                correct: "Namazda yanındakilerin duyacağı kadar sesli gülmek",
                wisdom: "Mükemmel bildin! Namazda sesli gülmek huzurdaki ciddiyeti zedelediği için fıkhen hem abdesti hem namazı bozar."
              }
            ]
          },
          {
            id: "w3_d2_l2",
            lessonNumber: 2,
            title: "Beş Vakit Namazın Rekat Anatomisi ve Ahlaki Derinliği",
            outcomes: [
              "Beş vakit namazın rekat yapılarını, sünnet ve farz ayrımını eksiksiz şekilde listeler.",
              "Namazın fiziksel hareketlerinin manevi derinlikle birleştiğinde kalıcı bir ahlaki dönüşüm sağladığı bilincini kazanır."
            ],
            wisdomNotes: "Namaz, müminin hayat rehberidir. Her bir vakit namaz, günün farklı dilimlerinde ruhumuzu kötülüklerden temizleyen manevi bir banyo gibidir. Düzenli kılınan namaz ahlakı mükemmelleştirir.",
            interactiveActivity: "Her vakit namazı için ayrı bir 'Namaz Kimlik Kartı' açalım. Sınıfça rekat sayılarını, ilk sünnet, farz ve son sünnet ayrımlarını tahtada şemalaştıralım.",
            slides: [
              {
                type: 'content',
                title: "Ömrün Şükrü: Beş Vakit Namaz",
                emoji: "📊",
                body: "Nimettir her yeni gün, gelmez artık geçti dün; her nimet şükür ister, namazdır teşekkürün. Namaz, günün 5 farklı vaktinde bizi dünyevi hırslardan koparıp durduran, ruhumuzu tazeleyen muazzam bir rekat nizamına sahiptir."
              },
              {
                type: 'content',
                title: "Kalıcı Ahlaki Dönüşüm",
                emoji: "✨",
                body: "Namazın fiziksel hareketleri (kıyam, rükû, secde) kalbimizdeki imanla birleştiğinde, bizi kötülüklerden uzak tutan bir otokontrol mekanizması oluşturur. Günde 5 vakit Allah'ın huzuruna çıkan bir genç; yalandan, hileden, adaletsizlikten ve çirkin davranışlardan kendisini uzak tutma bilinci geliştirir."
              },
              {
                type: 'content',
                title: "1. Vakit: Sabah Namazı Kartı",
                emoji: "🌅",
                body: "Günün ilk ve en bereketli namazıdır. Uykunun en tatlı anında kalkılarak eda edilir. Toplam 4 rekattır:\n\n• 2 Rekat Sünnet (İlk olarak kılınır)\n• 2 Rekat Farz (Son olarak kılınır)\n\nGüne sabah namazıyla başlamak karakteri güçlendirir."
              },
              {
                type: 'content',
                title: "2. Vakit: Öğle Namazı Kartı",
                emoji: "☀️",
                body: "Hayatın ve işlerin en yoğun olduğu gün ortasında kılınır. Toplam 10 rekattır:\n\n• 4 Rekat İlk Sünnet\n• 4 Rekat Farz\n• 2 Rekat Son Sünnet\n\nBu vakitte namaza durmak, zihni dinlendirir ve stresi yok eder."
              },
              {
                type: 'content',
                title: "3. Vakit: İkindi Namazı Kartı",
                emoji: "🌇",
                body: "Gündüzün akşama döndüğü vakitte kılınır. Toplam 8 rekattır:\n\n• 4 Rekat Sünnet\n• 4 Rekat Farz\n\nÖnemli Özellik: İkindi namazının sünnetinde, 2. rekattaki oturuşta Salli-Barik duaları da okunur ve 3. rekata kalkıldığında Sübhâneke duası ile başlanır."
              },
              {
                type: 'content',
                title: "4. Vakit: Akşam Namazı Kartı",
                emoji: "🌆",
                body: "Güneşin batışıyla birlikte kılınan, vakti diğerlerine göre dar olan namazdır. Toplam 5 rekattır:\n\n• 3 Rekat Farz (Diğer namazlardan farklı olarak İLK ÖNCE farz kılınır!)\n• 2 Rekat Sünnet"
              },
              {
                type: 'content',
                title: "5. Vakit: Yatsı Namazı Kartı",
                emoji: "🌌",
                body: "Günün son namazıdır. Geceyi huzurla kapatmamızı sağlar. Toplam 10 rekattır:\n\n• 4 Rekat İlk Sünnet\n• 4 Rekat Farz\n• 2 Rekat Son Sünnet\n\nTıpkı ikindi namazı gibi, yatsının da ilk sünnetinde 2. rekatta Salli-Barik okunur ve 3. rekata Sübhâneke ile başlanır."
              },
              {
                type: 'content',
                title: "Yatsının Ardından: Vitir Namazı",
                emoji: "🌙",
                body: "Yatsı namazından sonra kılınan, 3 rekatlık vacip bir namazdır. En önemli fıkhî özelliği; 3. rekatta kıraat bittikten sonra rükûya gitmeden önce eller kulaklara kaldırılıp tekrar tekbir alınır og ayakta Kunut Duaları okunur."
              },
              {
                type: 'content',
                title: "Farz ve Sünnetin Hayat Felsefesi",
                emoji: "💡",
                body: "Farzlar, Allah'ın kesin emri olarak kulluğumuzun ana omurgasıdır. Sünnetler ise Peygamberimize olan sevgimizin ve bağlılığımızın kanıtıdır. Namaz rekatlarındaki bu muazzam denge, kula hayatın her alanında bir ölçü, nizam ve sorumluluk duygusu aşılar."
              },
              {
                type: 'activity',
                title: "Etkinlik: Rekat Matematik Bulmacası",
                emoji: "🧩",
                body: "Aşağıdaki fıkhî rekat eşleştirmelerini sınıfça hızlıca cevaplayalım:",
                items: [
                  "• Soru 1: Sünneti farzından sonra kılınan 5 rekatlık namaz hangisidir? (Cevap: Akşam namazı)",
                  "• Soru 2: Toplamda 10 rekat olan vakit namazları hangileridir? (Cevap: Öğle ve Yatsı namazları)",
                  "• Soru 3: İkinci rekat oturuşunda salli-barik okunan ilk sünnetler hangileridir? (Cevap: İkindi ve Yatsı namazlarının ilk sünnetleri)"
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Felsefi Düşünce",
                emoji: "🤔",
                items: [
                  "Namaz kılan bir insanın 'Her an Allah beni görüyor' bilincine sahip olması, onun kimsenin olmadığı yerlerde bile dürüst davranmasını (ahlaki dönüşümü) nasıl sağlar?",
                  "Günü sabah namazıyla açıp yatsı namazıyla kapatmak, bir gencin hayat planlamasına nasıl bir düzen getirir?"
                ]
              },
              {
                type: 'quiz',
                title: "Rekat Anatomisi Yarışması",
                emoji: "🎯",
                question: "Yatsı namazından sonra kılınan, 3. rekatında rükûya gitmeden önce tekbir alınıp ayakta Kunut duaları okunan namaz hangisidir?",
                options: ["Sabah Namazı", "Cuma Namazı", "Vitir Namazı", "Teravih Namazı"],
                correct: "Vitir Namazı",
                wisdom: "Harika! 3 rekat olan ve Kunut duaları okunan bu özel namaza Vitir namazı denir."
              }
            ]
          },
          {
            id: "w3_d2_l3",
            lessonNumber: 3,
            title: "Cemaatle Namaz - Sosyalleşme ve Toplumsal Bütünleşme",
            outcomes: [
              "Cemaatle namaz kılmanın, cuma ve bayram namazlarının toplumsal bütünleşmeye ve sosyalleşmeye katkısını fıkhî gerekçeleriyle değerlendirir.",
              "Salavat ve Tekbir kavramlarının toplumsal coşku üzerindeki etkisini açıklar."
            ],
            wisdomNotes: "İslam, cemaat ve birlik dinidir. Birlikte kılınan namazlar müminler arasındaki sosyal duvarları yıkar, kalpleri birbirine yaklaştırır, toplumsal dayanışma ruhunu zirveye taşır.",
            interactiveActivity: "Sınıf panosunda 'Cami Bizi Nasıl Birleştirir?' adlı bir zihin haritası yapalım. Mahalledeki insanların camide buluşmasının toplumsal sosyalleşmeye katkılarını listeyelim.",
            slides: [
              {
                type: 'content',
                title: "Birlikte İbadet: Cemaatle Namaz",
                emoji: "🤝",
                body: "Bir imama uyarak beraberce namaz kılmaya 'cemaatle namaz kılmak' denir. Cemaatle namaz, Müslümanların birlikte ibadet ederek tanışmalarını, kaynaşmalarını ve sosyalleşmelerini sağlar. Peygamberimiz (s.a.s) cemaatle kılınan namazın tek başına kılınan namazdan 27 kat daha sevap olduğunu bildirmiştir."
              },
              {
                type: 'content',
                title: "Sosyal Eşitlik ve Ümmet Bilinci",
                emoji: "🌍",
                body: "Cemaatle namazda zengin-fakir, amir-memur, büyük-küçük ayrımı yoktur. Herkes aynı safta, omuz omuza durur. Tek bir Rabbe yönelir, aynı anda rükûya ve secdeye varırız. Bu muazzam birlik, toplumsal sevgi ve saygı bağlarımızı kuvvetlendirir."
              },
              {
                type: 'content',
                title: "Haftalık Bayramımız: Cuma Namazı",
                emoji: "🕌",
                body: "Cuma günü Müslümanlar için haftalık bayram günüdür. Bu kutsal günde öğle namazı vaktinde cemaatle kılınan namaza 'cuma namazı' denir. Cuma namazı on rekattır. Hutbe okunarak topluma dini ve ahlaki mesajlar verilir. Camiler dolup taşar, insanlar birbiriyle kucaklaşır."
              },
              {
                type: 'content',
                title: "Ramazan Neşesi: Teravih Namazı",
                emoji: "🌙",
                body: "Teravih namazı, Ramazan ayında coşkuyla kıldığımız 20 rekatlık sünnet bir namazdır. Yatsı namazından sonra kılınır. Çocukların, gençlerin camileri doldurduğu, salavatların ve ilahilerin hep birlikte neşeyle söylendiği harika bir toplumsal sosyalleşme alanıdır."
              },
              {
                type: 'content',
                title: "Peygamberimize Vefa: Salavat",
                emoji: "🌹",
                body: "Salavat, Sevgili Peygamberimize ve onun ailesine yaptığımız asil bir sevgi duasıdır. Ortak değerimiz olan Efendimize salavat getirmek ümmet bağını güçlendirir.\n\nOkunuşu: 'Allahümme salli alâ seyyidina Muhammedin ve alâ âli seyyidinâ Muhammed.'\n\nAnlamı: 'Allah'ım, Peygamberimiz Muhammed'e ve onun ailesine rahmet ve selâm eyle.'"
              },
              {
                type: 'content',
                title: "Yıllık Büyük Bütünleşme: Bayram Namazı",
                emoji: "🎉",
                body: "Ramazan ve Kurban Bayramı sabahları cemaatle kılınan 2 rekatlık özel namazdır. Bayram namazından sonra camide büyük bir bayramlaşma halkası kurulur. Küsler barışır, yetimler, yoksullar ve kimsesizler ziyaret edilerek toplumsal dayanışma zirveye ulaşır."
              },
              {
                type: 'content',
                title: "Gökleri Çınlatan Coşku: Tekbir",
                emoji: "📣",
                body: "Tekbir, Allah'ın büyüklüğünü hep birlikte dünyaya ilan etmektir. Özellikle bayram sabahlarında camilerden yükselen tekbir sesleri, müminlerin gönüllerini tek bir ritimde birleştirir.\n\nOkunuşu: 'Allahu Ekber Allahu Ekber. Lâ İlâhe Illallahu Allahu Ekber. Allahu Ekber ve lillahi'l-hamd.'\n\nAnlamı: 'Allah en büyüktür. Allah'tan başka ilah yoktur. Bütün övgüler, şükürler O'nadır.'"
              },
              {
                type: 'activity',
                title: "Etkinlik: Sosyal İbadet Kartları",
                emoji: "🧩",
                body: "Cemaatle yapılan ibadetlerin toplumsal sosyalleşmeye olan katkılarını fıkhî gerekçeleriyle analiz edelim:",
                items: [
                  "• Gerekçe 1: Cemaatle namaz kılmak mahalledeki komşuların birbiriyle tanışmasını ve dertleşmesini sağlar.",
                  "• Gerekçe 2: Bayram namazı toplumsal dargınlıkları bitirir, küsleri barıştırır ve akraba ziyaretlerini canlandırır.",
                  "• Gerekçe 3: Cuma namazı haftalık bir kongre gibi tüm Müslümanları tek bir çatıda toplayıp ümmet bilincini pekiştirir."
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Sosyolojik Tartışma",
                emoji: "🤔",
                items: [
                  "Camilerde her statüden insanın yan yana, hiçbir ayrım olmadan saf tutması toplumsal adalet ve eşitlik duygusuna nasıl katkı sağlar?",
                  "Ramazan ayında Teravih namazına gitmenin ve salavatlar getirmenin çocukların zihninde nasıl güzel bir dinî kimlik oluşturduğunu düşünüyorsunuz?"
                ]
              },
              {
                type: 'quiz',
                title: "Toplumsal Bütünleşme Yarışması",
                emoji: "🎯",
                question: "Müslümanların haftalık bayramı olan Cuma gününde, öğle namazı vaktinde cemaatle kılınması farz olan namaz kaç rekattır?",
                options: ["2 Rekat", "4 Rekat", "5 Rekat", "10 Rekat"],
                correct: "10 Rekat",
                wisdom: "Mükemmel bildin! Cuma namazı, cemaatle kılınan ve hutbesiyle toplumu aydınlatan 10 rekatlık farz bir ibatettir."
              }
            ]
          },
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
              "Hicretin nedenlerini ve Mekkelilerin Müslümanlara uyguladığı baskıları açıklar.",
              "Hüzün Yılı kavramını ve Hicret kararının nasıl alındığını öğrenir."
            ],
            wisdomNotes: "Müşrikler tarafından müslümanlara 3 yıl süren çok ağır bir boykot uygulandı. Boykottan kısa süre sonra amcası Ebu Talip ve eşi Hz. Hatice (r.anha) peş peşe vefat etti; bu seneye 'HÜZÜN YILI' denildi. Mekkeliler Daru'l Nedve'de Peygamber Efendimizi (s.a.v) öldürme kararı alınca, Yüce Allah'ın (c.c) izniyle Medine'ye Hicret süreci başladı.",
            interactiveActivity: "Zarfları Açalım Etkinliği: Tarihsel olayları (Doğumu, İlk Vahiy, Hüzün Yılı, Hicret) kronolojik sıraya göre sınıfça dizelim.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Hicreti",
                subtitle: 'Bölüm 1: Boykot ve Hüzün Yılı',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Mekkelilerin Tahammülsüzlüğü',
                emoji: '🚫',
                body: "İslam'ın adaleti, eşitliği ve kardeşliği emreden mesajı Mekke'de hızla yayılıyordu. Fakirlerin ve kölelerin de Müslüman olmasıyla gücünü kaybedeceğinden korkan Mekkeli müşrikler, Peygamber Efendimizi (s.a.v) ve ona inananları durdurmak için şiddete ve zulme başvurdular."
              },
              {
                type: 'content',
                title: 'Zalimane Karar: Boykot (Ambargo)',
                emoji: '📜',
                body: "Şiddet işe yaramayınca tüm Kureyş kabileleri bir araya geldi ve Müslümanları Şi'b-i Ebi Talib denilen bir mahalleye sıkıştırarak çok ağır bir boykot ilan ettiler. Müslümanlarla kimse konuşmayacak, kız alıp vermeyecek, yiyecek ve su satmayacaktı."
              },
              {
                type: 'content',
                title: 'Üç Yıl Süren Açlık Sınavı',
                emoji: '🏜️',
                body: "Tam 3 yıl süren bu boykot sırasında Müslümanlar ağaç yapraklarını yiyecek kadar açlıkla sınandılar. Çocukların ağlama sesleri Mekke sokaklarından duyuluyordu. Ancak hiçbir Müslüman imanından dönmedi ve sabretti. Sonunda bu vicdansız boykot sona erdi."
              },
              {
                type: 'content',
                title: 'Üst Üste Gelen Acılar',
                emoji: '🖤',
                body: "Boykotun bitmesinden sadece 8 ay sonra Peygamber Efendimizi (s.a.v) her türlü tehlikeye karşı gövdesiyle koruyan sevgili amcası Ebu Talip vefat etti. Efendimiz bu acıyı atlatamadan, sadece üç gün sonra da hayattaki en büyük dayanağı olan sevgili eşi Hz. Hatice (r.anha) vefat etti."
              },
              {
                type: 'content',
                title: 'Senetü\'l-Hüzün: Hüzün Yılı',
                emoji: '🥺',
                body: "Peygamber Efendimiz (s.a.v) için en değerli iki insanın peş peşe vefat ettiği, Mekke'deki eziyetlerin zirveye ulaştığı bu zorlu seneye İslam tarihinde \"SENETÜ'L-HÜZÜN\" yani \"HÜZÜN YILI\" adı verilmiştir."
              },
              {
                type: 'content',
                title: 'Yesrib\'ten Gelen Umut Işığı',
                emoji: '🌟',
                body: "Mekke'de yaşam iyice imkansızlaşırken, Medine (o zamanki adıyla Yesrib) şehrinden gelen ve Müslüman olan yardımsever insanlar Peygamberimizle (s.a.v) gizlice görüşüp onu ve diğer Müslümanları kendi şehirlerine davet ettiler ve onları koruyacaklarına söz verdiler."
              },
              {
                type: 'content',
                title: 'Karanlık Toplantı: Daru\'l Nedve',
                emoji: '⚔️',
                body: "Müslümanların Medine'ye göç etmeye başladığını öğrenen Mekkeliler çok öfkelendi. İslam'ın başka bir şehirde güçlenip kendilerine tehlike olmasını engellemek için 'Daru'l Nedve' denilen mecliste toplandılar."
              },
              {
                type: 'content',
                title: 'Korkunç Suikast Planı',
                emoji: '🗡️',
                body: "Toplantıda Ebu Cehil'in fikriyle korkunç bir plan yapıldı: Her kabileden bir genç seçilecek ve hepsi aynı anda Peygamberimizin evini basıp onu öldürecekti. Böylece suç tüm Mekke'ye dağılacak ve kimse onlardan intikam alamayacaktı."
              },
              {
                type: 'content',
                title: 'Hicret İzni ve Emanetler',
                emoji: '🕊️',
                body: "Müşriklerin bu kötü planını Cebrail (a.s) aracılığıyla haber alan Sevgili Peygamberimiz (s.a.v), Yüce Allah'ın (c.c) izniyle o gece Medine'ye hicret (göç) etmeye karar verdi."
              },
              {
                type: 'content',
                title: 'Muhammedü\'l Emin\'in Sadakati',
                emoji: '📦',
                body: "Peygamber Efendimiz (s.a.v) evi kuşatılmış ve canı tehlikede olmasına rağmen, düşmanlarının kendisine güvenip bıraktığı kıymetli malları (emanetleri) unutmamıştı. O an bile başkasının hakkını düşünüyordu."
              },
              {
                type: 'content',
                title: 'Hz. Ali\'nin (r.a) Büyük Cesareti',
                emoji: '🛏️',
                body: "Peygamberimiz (s.a.v), sabah olup emanetleri sahiplerine ulaştırması için yeğeni Hz. Ali'yi (r.a) görevlendirdi. Ayrıca suikastçıları kandırmak ve zaman kazanmak için Hz. Ali'den o gece kendi yatağında yatmasını istedi. Hz. Ali ölüm tehlikesine rağmen hiç düşünmeden bunu kabul etti."
              },
              {
                type: 'content',
                title: 'Mucizevi Çıkış',
                emoji: '✨',
                body: "Gece yarısı olunca Peygamber Efendimiz (s.a.v), Yasin Suresi'nden ayetler okuyarak evini kuşatan silahlı gençlerin arasından onlara hiç görünmeden, adeta bir mucize eseri çıkıp gitti ve en yakın dostu Hz. Ebu Bekir'in (r.a) evine ulaştı."
              },
              {
                type: 'discussion',
                title: 'Emanet ve Ahlak Üzerine Düşünelim',
                emoji: '🤔',
                items: [
                  "Kendisini öldürmeye gelen insanların mallarını bile sahiplerine iade etmeyi düşünen bir Peygamberin (Muhammedü'l-Emin) ahlakından neler öğrenebiliriz?",
                  "Hz. Ali'nin (r.a), ölüm tehlikesine rağmen Peygamber Efendimizin (s.a.v) yatağına yatması dostluk, sadakat ve cesaret hakkında bize ne anlatır?"
                ]
              },
              {
                type: 'quiz',
                title: 'Siyer Bilgi Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimizin çok sevdiği eşi Hz. Hatice (r.anha) ve onu koruyan amcası Ebu Talib'in peş peşe vefat ettiği yıla İslam tarihinde ne ad verilir?",
                options: ["Asr-ı Saadet", "Boykot Yılı", "Fil Yılı", "Hüzün Yılı"],
                correct: "Hüzün Yılı",
                wisdom: "Doğru cevap! Bu iki büyük kaybın yaşandığı yıla Senetü'l-Hüzün (Hüzün Yılı) denmiştir."
              },
              {
                type: 'quiz',
                title: 'Siyer Bilgi Yarışması - 2',
                emoji: '🎯',
                question: "Mekkelilerin suikast planı yaptığı gece, hem müşrikleri oyalamak hem de emanetleri sahiplerine teslim etmek için Peygamberimizin (s.a.v) kendi yatağına yatırdığı cesur sahabi kimdir?",
                options: ["Hz. Ebu Bekir (r.a)", "Hz. Ömer (r.a)", "Hz. Ali (r.a)", "Hz. Osman (r.a)"],
                correct: "Hz. Ali (r.a)",
                wisdom: "Tebrikler! Hz. Ali (r.a) büyük bir fedakarlık göstererek o gece Efendimizin yatağında yatmıştır."
              }
            ]
          },
          {
            id: "w3_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Hicreti - Bölüm 2",
            outcomes: [
              "Sevr Mağarası'nda yaşanan olayları ve Yüce Allah'ın (c.c) koruma mucizesini açıklar.",
              "Hicret yolculuğundaki lojistik ve emniyet tedbirlerini değerlendirir."
            ],
            wisdomNotes: "Peygamberimiz (s.a.v) ve Hz. Ebu Bekir (r.a) şaşırtmaca yapmak için Medine'nin ters istikametindeki Sevr Dağı'ndaki mağaraya gizlendiler. Hz. Ebu Bekir'in kızı Hz. Esma (r.anha) onlara yiyecek taşıyor, oğlu Abdullah (r.a) istihbarat getiriyordu. Mağaranın önüne kadar gelen iz sürücülere karşı Peygamberimiz 'Üzülme, Allah bizimle beraberdir' diyerek muazzam bir tevekkül örneği göstermiştir.",
            interactiveActivity: "Peygamber Efendimizin (s.a.v) zorluk anlarında Hz. Ebu Bekir'e (r.a) söylediği 'Üzülme, Yüce Allah bizimle beraberdir' sözünün anlamı üzerine konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Hicreti",
                subtitle: 'Bölüm 2: Sevr Mağarası Sığınağı',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Stratejik Bir Karar: Ters İstikamet',
                emoji: '🗺️',
                body: "Peygamber Efendimiz (s.a.v) ve en yakın yol arkadaşı Hz. Ebu Bekir (r.a) gece yarısı yola çıktılar. Ancak doğrudan kuzeye, Medine'ye giden yola sapmadılar. İzlerini kaybettirmek ve güvenliği sağlamak için tam tersi istikametteki (güneye doğru) ıssız Sevr Dağı'na tırmandılar."
              },
              {
                type: 'content',
                title: 'Sevr Mağarasında 3 Gün',
                emoji: '⛰️',
                body: "Sarp ve tırmanması çok zor olan Sevr Dağı'ndaki bir mağaraya gizlendiler. Herkes onları Medine yolu üzerinde ararken onlar burada tam üç gün üç gece saklandılar. Bu durum Peygamberimizin tedbire ve stratejiye ne kadar önem verdiğini gösterir."
              },
              {
                type: 'content',
                title: 'Ebu Bekir\'in (r.a) Fedakar Ailesi',
                emoji: '👨‍👩‍👧‍👦',
                body: "Mağarada saklandıkları süre boyunca Hz. Ebu Bekir'in ailesi büyük görevler üstlendi. Kızı Hz. Esma (r.anha), gece karanlığında gizlice dağa tırmanarak onlara su ve yiyecek taşıyordu. Hatta torbayı bağlamak için kendi kuşağını ikiye bölüp vermişti."
              },
              {
                type: 'content',
                title: 'İstihbarat ve İz Gizleme',
                emoji: '👣',
                body: "Ebu Bekir'in oğlu Abdullah (r.a) ise gündüzleri Mekke sokaklarında dolaşıyor, müşriklerin planlarını öğrenip gece mağaraya haber getiriyordu. Çoban Amir bin Füheyre (r.a) ise koyunlarını mağara yolunda sürerek ayak izlerini siliyordu."
              },
              {
                type: 'content',
                title: 'Suikastçıların Şaşkınlığı ve Büyük Ödül',
                emoji: '💰',
                body: "Sabah olup yatağa saldıran müşrikler karşılarında Hz. Ali'yi (r.a) görünce deliye döndüler. Abdullah (r.a) mağaraya şu haberi getirdi: 'Sizi ölü veya diri kim getirirse ona 100 deve ödül verileceğini duyurdular. Bunu işiten herkes, en usta iz sürücüleri bile yollara düştü.'"
              },
              {
                type: 'content',
                title: 'Mağaranın Önündeki Tehlike',
                emoji: '😨',
                body: "Mekkelilerin en usta iz sürücüleri izleri takip ede ede tam Sevr Mağarası'nın ağzına kadar geldiler. O kadar yaklaşmışlardı ki, ayakları mağaranın içinden görünüyordu."
              },
              {
                type: 'content',
                title: 'La Tahzen! (Üzülme!)',
                emoji: '✨',
                body: "Bu tehlike karşısında Hz. Ebu Bekir (r.a) çok endişelendi ve 'Ey Allah'ın Resulü! Eğilip baksalar bizi görecekler, sana bir zarar gelecek diye çok korkuyorum' dedi."
              },
              {
                type: 'content',
                title: 'Muazzam Bir Tevekkül',
                emoji: '🤲',
                body: "Tehlikenin en zirve anında Sevgili Peygamberimiz (s.a.v) eşsiz bir sakinlik ve Yüce Allah'a tam güven (tevekkül) içinde şu cevabı verdi: 'Üzülme ey Ebu Bekir! Üçüncüsü Allah olan iki kişiye kim zarar verebilir? Allah bizimle beraberdir!'"
              },
              {
                type: 'content',
                title: 'İlahi Koruma: Örümcek ve Güvercin',
                emoji: '🕊️',
                body: "Müşrikler mağaraya bakacakken, mağaranın girişine bir örümceğin kalın bir ağ ördüğünü, bir yaban güvercininin ise hemen girişteki yuvada yumurtalarının üzerinde yattığını gördüler. 'Buraya insan girse bu ağ bozulur, bu kuş uçardı' diyerek içeri bakmadan dönüp gittiler."
              },
              {
                type: 'content',
                title: 'Çöl Yolculuğu Başlıyor',
                emoji: '🐪',
                body: "Aramalar gevşeyip ortalık sakinleşince, üç günün sonunda Peygamber Efendimiz (s.a.v), Hz. Ebu Bekir (r.a) ve onlara yolu gösterecek usta bir rehberle birlikte Medine'ye (kuzeye) doğru o zorlu ve sıcak çöl yolculuğuna başladılar."
              },
              {
                type: 'discussion',
                title: 'Tevekkül Üzerine Düşünelim',
                emoji: '🤔',
                items: [
                  "Peygamber Efendimiz (s.a.v) Yüce Allah'ın kendisini koruyacağını bildiği halde neden doğrudan Medine'ye gitmeyip ters yöndeki mağaraya saklanmış, izleri koyunlarla sildirmiştir? (Akıl ve Tedbirin önemi)",
                  "'Üzülme, Allah bizimle beraberdir' sözü, hayatta karşılaştığımız zorluklar ve korkular karşısında bize nasıl bir psikolojik güç verir?"
                ]
              },
              {
                type: 'quiz',
                title: 'Hicret Yolculuğu Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimiz (s.a.v) ve Hz. Ebu Bekir'in (r.a) Mekke'den ayrıldıktan sonra izlerini kaybettirmek için 3 gün boyunca saklandıkları yer neresidir?",
                options: ["Hira Mağarası", "Sevr Mağarası", "Arafat Dağı", "Kuba Köyü"],
                correct: "Sevr Mağarası",
                wisdom: "Harika! Sevr mağarası, hicret yolculuğunun en stratejik sığınağı olmuştur."
              },
              {
                type: 'quiz',
                title: 'Hicret Yolculuğu Yarışması - 2',
                emoji: '🎯',
                question: "Mağarada saklanırken müşriklerin kapıya kadar geldiğini görüp endişelenen Hz. Ebu Bekir'e (r.a), Peygamberimiz (s.a.v) hangi sözü söyleyerek onu teselli etmiştir?",
                options: ["Korkma, bizi bulamazlar", "Sessiz ol, duyacaklar", "Üzülme, Allah bizimle beraberdir", "Hemen arka taraftan kaçalım"],
                correct: "Üzülme, Allah bizimle beraberdir",
                wisdom: "Mükemmel! 'La tahzen innallahe meana' (Üzülme Allah bizimle beraberdir) sözü eşsiz bir tevekkül örneğidir."
              }
            ]
          },
          {
            id: "w3_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimizin Hicreti - Bölüm 3",
            outcomes: [
              "Hicret kavramının tanımını, tarihi ve sosyolojik anlamını açıklar.",
              "Kuba Mescidi'nin kurulmasını, Medine'deki coşkulu karşılamayı (Tala'al bedru) tarif eder.",
              "Mescid-i Nebevi'nin inşa edilme sürecini ve fonksiyonlarını öğrenir."
            ],
            wisdomNotes: "Müslümanların 622 yılında Mekke'den Medine'ye göç etmesine 'Hicret' denir. İlk mescit Kuba'da yapıldı. Medine halkı Peygamber Efendimizi (s.a.v) büyük bir coşkuyla karşıladı, Yesrib'in adı 'Medinetü'r-Rasul' oldu. Ebu Eyyüb el-Ensarî'nin (r.a) evinde misafir oldu ve Mescid-i Nebevi inşa edildi.",
            interactiveActivity: "Medinelilerin Peygamberimizi karşılarken okudukları 'Ay Doğdu Üzerimize' (Tala'al bedru aleyna) ilahisini sınıfta hep birlikte ritimle okuyalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Hicreti",
                subtitle: 'Bölüm 3: Medine\'ye Varış ve Yeni Hayat',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Mekke\'ye Hüzünlü Bir Veda',
                emoji: '🥺',
                body: "Çölde günlerce süren zorlu ve sıcak yolculuk esnasında Peygamber Efendimiz (s.a.v) dönüp doğduğu şehre, Kâbe'ye son bir kez baktı. İçindeki hüznü şu sözlerle dile getirdi:"
              },
              {
                type: 'content',
                title: 'Bir Gün Sana Döneceğim',
                emoji: '💔',
                body: "\"Ey Mekke, sen benim için yeryüzünün en güzel şehrisin. Eğer senin halkın beni senden ayırmasalardı, ben asla senden ayrılmazdım. Bir gün tekrar sana döneceğim.\" Efendimiz (s.a.v) yurdundan ayrıldığında 53 yaşındaydı."
              },
              {
                type: 'content',
                title: 'Hicret Ne Demektir?',
                emoji: '📚',
                body: "Müslümanların inançlarını özgürce yaşayabilmek, can güvenliklerini sağlamak ve İslam'ı daha rahat yayabilmek amacıyla 622 yılında Mekke'den Medine'ye göç etmesine \"HİCRET\" denir. Bu olay İslam tarihinin en büyük dönüm noktasıdır."
              },
              {
                type: 'content',
                title: 'Kuba Köyü ve İlk Mescit',
                emoji: '🧱',
                body: "Yorucu yolculuğun ardından Peygamberimiz (s.a.v) Medine'ye çok yakın olan Kuba köyüne ulaştı. Orada birkaç gün dinlendi. Bu süre zarfında Müslümanlarla birlikte çalışarak İslam dininin yeryüzündeki ilk mescidini, Kuba Mescidi'ni yaptırdı."
              },
              {
                type: 'content',
                title: 'Medine\'de Büyük Heyecan',
                emoji: '🎉',
                body: "Peygamberimizin (s.a.v) Kuba'da olduğu haberi Medine'ye ulaştığında şehirde bayram havası esti. İnsanlar her sabah şehrin dışına çıkıyor, güneş tepede yakıcı hale gelene kadar yolunu gözlüyorlardı."
              },
              {
                type: 'content',
                title: 'Hoş Geldin Ya Resulallah!',
                emoji: '🌟',
                body: "Nihayet beklenen gün geldi. Peygamber Efendimiz (s.a.v) Medine'ye girdiğinde halk onu büyük bir coşkuyla karşıladı. Çocuklar, kadınlar, yaşlılar evlerin damlarına çıkmış hep bir ağızdan ilahiler okuyor, sevinç gözyaşları döküyorlardı."
              },
              {
                type: 'poem',
                title: 'Tala\'al Bedru: Ay Doğdu Üzerimize',
                emoji: '🌙',
                body: "Ay doğdu üzerimize\nVeda tepelerinden.\nŞükür gerekti bizlere\nAllah'a davetinden.\n\nSen güneşsin, sen aysın,\nSen nur üstüne nursun.\nSen, Süreyya yıldızısın,\nEy sevgili, ey Resul!"
              },
              {
                type: 'content',
                title: 'Nurlu Şehir: Medinetü\'r-Rasul',
                emoji: '🏙️',
                body: "Hicretten önce karmaşa ve hastalıklarla anılan bu şehrin ismi 'Yesrib' idi. Peygamberimizin (s.a.v) gelişiyle birlikte şehre huzur ve nur geldiği için adı \"Medinetü'r-rasul\" (Peygamber Şehri) veya kısaca \"Medine\" (Nurlu Şehir) olarak değiştirildi."
              },
              {
                type: 'content',
                title: 'Beni Kim Misafir Edecek?',
                emoji: '🤔',
                body: "Medineliler Peygamberimizi kendi evlerinde ağırlamak için adeta yarışıyor, devenin yularından tutmaya çalışıyorlardı. Efendimiz kimseyi kırmamak için adaleti deveye bıraktı: \"Devenin (Kasva) yularını bırakın, o nereye çökerse orada misafir olacağım\" dedi."
              },
              {
                type: 'content',
                title: 'Mihmandar: Ebu Eyyüb el-Ensarî (r.a)',
                emoji: '🏠',
                body: "Deve yürüdü, boş bir arazide durup çöktü. Buraya en yakın ev, Ebu Eyyüb el-Ensarî'nin (r.a) eviydi. O, dünyalar kadar mutlu oldu. Peygamberimiz (s.a.v) onun evinde 7 ay misafir kaldı. (Ebu Eyyüb el-Ensari'nin kabri şu an İstanbul Eyüpsultan'dadır)."
              },
              {
                type: 'content',
                title: 'Mescid-i Nebevi\'nin İnşası',
                emoji: '🕌',
                body: "Devenin çöktüğü o boş hurma kurutma arazisi iki yetim kardeşe aitti. Peygamber Efendimiz (s.a.v) arsanın parasını kendi cebinden ödeyerek satın aldı. Ve oraya Müslümanların hem ibadet edeceği hem de okul olarak kullanacağı 'Mescid-i Nebevi' inşa edildi."
              },
              {
                type: 'content',
                title: 'Peygamberimiz İşçi Gibi Çalıştı',
                emoji: '💪',
                body: "Mescid yapılırken Peygamberimiz (s.a.v) bir kenarda oturup emir vermedi. O da bir işçi gibi kerpiç taşıdı, temelleri elleriyle attı. Mescidin hemen bitişiğine de kendisi ve ailesi için mütevazı küçük odalar yapıldı."
              },
              {
                type: 'discussion',
                title: 'Kardeşlik ve Neşe Üzerine',
                emoji: '🤔',
                items: [
                  "Medine halkının hiç tanımadıkları ve ülkelerinden kaçıp gelen Müslümanları şarkılarla, şiirlerle ve güler yüzle karşılaması bize günümüzdeki 'misafirperverlik' hakkında ne öğretir?",
                  "Peygamber Efendimizin kendi misafir olacağı yeri seçmek yerine devenin çökmesini beklemesi nasıl bir nezaket ve adalet örneğidir?"
                ]
              },
              {
                type: 'quiz',
                title: 'Hicretin Sonu Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v) Mekke'den Medine'ye (622 yılında) yaptığı bu kutsal göç yolculuğuna İslam tarihinde ne ad verilir?",
                options: ["Veda Haccı", "Hicret", "Miraç", "İsra"],
                correct: "Hicret",
                wisdom: "Harika! Müslümanların inançları uğruna yurtlarını terk etmesine Hicret denir."
              },
              {
                type: 'quiz',
                title: 'Hicretin Sonu Yarışması - 2',
                emoji: '🎯',
                question: "Peygamber Efendimizi Medine'de evinde 7 ay boyunca misafir eden ve kabri şu an İstanbul'da bulunan meşhur sahabi kimdir?",
                options: ["Ebu Eyyüb el-Ensarî (r.a)", "Hz. Ebu Bekir (r.a)", "Hz. Ömer (r.a)", "Hz. Bilal-i Habeşi (r.a)"],
                correct: "Ebu Eyyüb el-Ensarî (r.a)",
                wisdom: "Mükemmel bildin! Ebu Eyyüb el-Ensarî (r.a), Efendimizin Medine'deki ilk ev sahibi olma şerefine erişmiştir."
              }
            ]
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
            title: "Sorumluluk Bilinci - Bölüm I: Kâinattaki Kusursuz Görev Nizamı",
            outcomes: [
              "Kâinattaki varlıkların yaratılış amaçlarını ve aksatmadıkları ilahi görevlerini açıklar.",
              "İnsanın akıl ve irade sahibi bir varlık olarak başıboş yaratılmadığını fark eder."
            ],
            wisdomNotes: "Allah, yeryüzündeki hiçbir varlığı amaçsız yaratmamıştır. En küçüğünden en büyüğüne kadar bütün varlıkların mutlaka bir yaratılış amacı ve görevi vardır. Güneş dünyamızı aydınlatır, bulutlar yağmur yağdırır. Arılar bal yapmaktan, inekler süt vermekten yorulmaz.",
            interactiveActivity: "Doğadaki varlıkların nizamından ilham alarak insanın evrendeki iyiliği egemen kılma görevini konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Kâinatta Her Varlığın Bir Görevi Var",
                subtitle: "3. Hafta • 4. Gün • 1. Ders",
                emoji: "🌍"
              },
              {
                type: 'content',
                title: "Yaratılış Amacı ve Nizam",
                emoji: "📖",
                body: "Allah, yeryüzündeki hiçbir varlığı amaçsız yaratmamıştır. En küçüğünden en büyüğüne kadar bütün varlıkların mutlaka bir yaratılış amacı ve görevi vardır. Güneş her gün doğar, dünyamızı aydınlatır ve ısıtır. Bulutlardan damla damla yağmur yağınca toprak bereketlenir, sebzeler, meyveler büyür."
              },
              {
                type: 'content',
                title: "Aksatılmayan Tabiat Görevleri",
                emoji: "✨",
                body: "Kâinattaki her varlık Allah'ın kendisine verdiği görevi en güzel şekilde yerine getirir. Arılar bal yapmaktan, inekler, koyunlar süt vermekten yorulmaz. Güneş, doğması gereken saati bir an bile geciktirmez. Bahar gelince çiçekler açmam demez. Ağaçlar kuşlara, denizler balıklara yuva olur. Hepsi kendi görevlerini aksatmadan yerine getirirler."
              },
              {
                type: 'content',
                title: "Akıl, İrade og İnsan",
                emoji: "💡",
                body: "Kâinattaki her varlık görevini yerine getirirken, kâinatın gözbebeği olan insanın sorumsuz davranması düşünülemez. Çünkü insan akıl og irade sahibidir. Allah, iyiliği ve güzelliği yeryüzünde egemen kılması için insana görevler vermiştir. Kur'an-ı Kerim'deki emirlere ve yasaklara uymak, kâinattaki düzeni korumak, birlikte yaşadığımız toplumun kurallarına uymak bu görevlerimizdendir. Sorumluluklarımızı yerine getirdiğimizde Rabbimiz de bizi sever."
              }
            ]
          },
          {
            id: "w3_d4_l2",
            lessonNumber: 2,
            title: "Sorumluluk Bilinci - Bölüm II: Sorumluluklarım ve Tutumluluk",
            outcomes: [
              "Rabbine, kendisine, topluma ve doğaya karşı olan sorumluluk sınırlarını ayırt eder.",
              "Ülkemizdeki ekmek israfı verileri üzerinden tutumluluk ve erdem bilinci geliştirir."
            ],
            wisdomNotes: "Sorumluluklarımızın bir kısmı Rabbimizedir (namaz, oruç vb.). Bir kısmı ise kendimize ve diğer insanlara karşıdır (temizlik, sağlığı koruma, anne babaya yardım, odayı toplama). Ülkemizde yılda ortalama 2 milyar adetten fazla ekmek israf edilmektedir. Sorumluluk bilinci bizi başıboş ve hedefsiz olmaktan kurtarır.",
            interactiveActivity: "Ekmek israfının ekonomiye ve ahlakımıza olan etkilerini tartışarak vaktinde hareket etmenin önemini yorumlayalım.",
            slides: [
              {
                type: 'cover',
                title: "Sorumluluklarımızın Sınırları ve İsraf",
                subtitle: "3. Hafta • 4. Gün • 2. Ders",
                emoji: "⏱️"
              },
              {
                type: 'content',
                title: "Farklı Sorumluluk Alanlarımız",
                emoji: "📖",
                body: "Sorumluluklarımızın bir kısmı Rabbimizedir. Örneğin namaz, oruç gibi ibadetlerimizi aksatmadan yaparız. Bir kısmı ise kendimize ve diğer insanlara karşıdır. Örneğin düzenli ve temiz olmaya özen gösterir, sağlığımızı korur, anne babamıza yardım eder, odamızı toplar, vaktinde yatar vaktinde kalkarız. İnsanlara yardımcı olur, kurallara uyarız. Doğayı sever ve korur, çevreyi temiz tutarız. Allah'ın bize verdiği nimetler için şükreder ve asla israf etmeyiz."
              },
              {
                type: 'content',
                title: "Büyük Tehlike: Ekmek İsrafı",
                emoji: "⚠️",
                body: "Sorumluluklarımızı hiç kimsenin hatırlatmasına gerek kalmadan yerine getirmek artık bizim büyüdüğümüzü gösterir. Büyüdüğümüz için de görevlerimizi kendi başımıza ve zorlanmadan yaparız. Ülkemizde yılda ortalama 2 milyar adetten fazla ekmek israf edilmektedir. Ekmek israfı, ekonomimize her yıl çok büyük zararlar vermektedir. Görevlerimizi zamanında yapmadığımızda hayatımız alt üst olur. Örneğin vaktinde yatmadığımızda sabah zor uyanır, okula geç kalırız. Oyun oynarken ödevlerimizi yapmadığımızı hatırlatıp endişeleniriz."
              },
              {
                type: 'content',
                title: "Bizi Hedefsiz Olmaktan Kurtaran Erdem",
                emoji: "💎",
                body: "Sorumluluk sahibi olmamız bizi ve çevremizdeki diğer insanları mutlu eder. Evdeki sorumluluklarımız aile yaşantımızı, okuldaki sorumluluklarımız eğitim hayatımızı güzelleştirmek içindir. Toplumda uymamız gereken sorumluluklarımız ise insanlarla olan ilişkilerimizi güzelleştirmek içindir. Allah'a karşı sorumluluklarımız ise, bizi iyi bir insan hâline getirmek için vardır. Kısacası sorumluluk bilinci, bizi başıboş ve hedefsiz olmaktan kurtaran, hayatımızı düzenleyen bir erdem ve özelliktir."
              },
              {
                type: 'quiz',
                title: "Sorumluluk Bilgisi Testi",
                emoji: "🎯",
                question: "Sorumluluk bilinci yüksek olan bir mümin çocuk, kaynakları kullanırken özellikle hangi kötü davranıştan kesinlikle sakınır?",
                options: ["Şükretmekten", "İsraf ve ciddiyetsizlikten", "Temiz olmaktan", "Düzenli yatmaktan"],
                correct: "İsraf ve ciddiyetsizlikten",
                wisdom: "Mükemmel! Sorumluluk sahibi çocuklar Allah'ın verdiği nimetlerin değerini bilir, ekmek ve su gibi kaynakları asla israf etmezler."
              }
            ]
          },
          {
            id: "w3_d4_l3",
            lessonNumber: 3,
            title: "Konuşma Ahlâkı ve Dilin Gücü",
            outcomes: [
              "Konuşurken doğru, nazik, yapıcı ve kırıcı olmayan bir dil kullanmanın önemini fark eder.",
              "Gıybet, dedikodu, iftira ve kötü sözlerin insan ilişkilerine verdiği zararları fıkhî ve ahlaki açıdan analiz eder.",
              "Ağızdan çıkan her kelimenin ahlaki bir sorumluluk taşıdığı şuurunu kazanır."
            ],
            wisdomNotes: "Dil, insan ilişkilerini inşa eden veya yıkan en güçlü araçtır. Ağızdan çıkan her kelime ahlaki bir sorumluluk taşır. Gıybet, dedikodu ve iftira gibi kötü sözler toplumsal bağları zedeler ve fıkhî olarak kul hakkına girer. Mümin, özü sözü bir olan, konuşurken nezaketi ve doğruluğu elden bırakmayan kimsedir.",
            interactiveActivity: "Sınıf içinde 'Dilin Yapıcı Gücü' adında bir empati çalışması yapalım: Bize söylendiğinde kalbimizi kıracak kaba bir sözü, kırıcı olmayan nazik ve yapıcı bir dile nasıl çevirebileceğimizi tahtada canlandıralım.",
            slides: [
              {
                type: 'cover',
                title: "Konuşma Ahlâkı: Sözün Gücü",
                subtitle: "3. Hafta • 4. Gün • 3. Ders",
                emoji: "🗣️"
              },
              {
                type: 'content',
                title: "En Güçlü Araç: Dilimiz",
                emoji: "📖",
                body: "İnsanları birbirine yaklaştıran ya da birbirinden uzaklaştıran en güçlü araç dildir. Konuştuğumuz kelimelerle köprüler kurabilir, dostluklar inşa edebiliriz. Ancak dikkatsizce seçilen tek bir kelimeyle kalpleri kırıp insan ilişkilerini tamamen yıkabiliriz. Bu yüzden dilimizi nasıl kullandığımız, ahlakımızın en net aynasıdır."
              },
              {
                type: 'content',
                title: "Doğru, Nazik ve Yapıcı Dil",
                emoji: "✨",
                body: "İslam ahlâkı, konuşurken her zaman doğruyu söylemeyi, nezaketi elden bırakmamayı ve yapıcı olmayı emreder. Bir problemle karşılaştığımızda bile kırıcı, kaba veya incitici bir üslup yerine; sakin, yapıcı ve onarıcı bir dil seçmek erdemli insanın en büyük göstergesidir."
              },
              {
                type: 'content',
                title: "Kelimelerin Ahlaki Sorumluluğu",
                emoji: "💡",
                body: "Ağızdan çıkan her bir kelimenin ahlaki ve manevi bir sorumluluk taşıdığını unutmamalıyız. Sözlerimiz havada uçup kaybolmaz; insanların zihninde ve kalbinde kalıcı izler bırakır. Bu şuurla hareket eden bir mümin, söyleyeceği sözün nereye varacağını önceden hesap eder."
              },
              {
                type: 'content',
                title: "İlişkileri Yıkan Kötülük: Gıybet ve Dedikodu",
                emoji: "⚠️",
                body: "Gıybet, bir insanın arkasından, duyduğunda hoşlanmayacağı doğru bir şeyi konuşmaktır. Dedikodu ise insanların özel hayatlarını ve gizliliklerini dilden dile dolaştırarak güven ortamını yok etmektir. Bu kötü sözler, arkadaşlık bağlarına zehir sürer ve insanları birbirine düşman eder."
              },
              {
                type: 'content',
                title: "En Büyük Günahlardan Biri: İftira",
                emoji: "🔥",
                body: "İftira, bir insanda olmayan kötü bir davranışı veya suçu ona kasıtlı olarak yüklemektir. İftira, kul hakkını çiğneyen, bir insanın onurunu ve dürüstlüğünü lekeleyen en ağır ahlaki ve fıkhî kusurlardan biridir. İslam dini, doğruluğu araştırılmamış hiçbir bilginin yayılmamasını kesinlikle emreder."
              },
              {
                type: 'content',
                title: "Fıkhî Açıdan Kul Hakkı",
                emoji: "⚖️",
                body: "Gıybet, dedikodu ve iftira gibi dil kusurları fıkhî açıdan doğrudan 'Kul Hakkı' kapsamına girer. Bir kimsenin arkasından konuşarak onun haklarına zarar verdiğimizde, işlenen bu manevi hatanın affı ancak o insanın kendisinden helallik alınmasıyla mümkündür."
              },
              {
                type: 'content',
                title: "Ağzımızdan Çıkan Sözün Estetiği",
                emoji: "🌸",
                body: "Güzel ahlaklı bir çocuk, konuşurken ses tonunu ayarlayan, bağırmadan, kaba kelimeler seçmeden nezaketle konuşan kimsedir. Sözün doğrusunu söylemek kadar, onu en güzel, en yapıcı ve en estetik üslup ile aktarmak da dilimizin ahlaki sorumluluğudur."
              },
              {
                type: 'hadith',
                title: "Ya Hayır Söyle Ya Sus",
                emoji: "🌹",
                body: "\"Allah'a ve ahiret gününe iman eden kimse, ya hayır söylesin ya da sussun!\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'hadith',
                title: "Müslümanın Tarifi",
                emoji: "🌹",
                body: "\"Müslüman, insanların onun elinden ve dilinden güvende olduğu kimsedir.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: "Sözlerimizi Tartalım",
                emoji: "🤔",
                items: [
                  "Bir arkadaşınızın arkasından doğru bile olsa onun hoşlanmayacağı bir şeyi konuşmanın (gıybet) arkadaşlık güvenini nasıl sarstığını düşünelim.",
                  "Söylenen kaba bir söz mü yoksa fiziksel bir acı mı insan kalbinde daha derin ve kalıcı izler bırakır? Neden?"
                ]
              },
              {
                type: 'activity',
                title: "İnteraktif Sözü Onarma İstasyonu",
                emoji: "🛠️",
                body: "Günlük hayattaki kırıcı sözleri, konuşma ahlakına uygun olarak yapıcı ve nazik ifadelere dönüştürelim:",
                items: [
                  "• Kırıcı: 'Ödevini berbat yapmışsın, hiç beğenmedim!' -> Yapıcı: 'Gayretini takdir ediyorum, istersen eksik kalan kısımları beraber düzeltebiliriz.'",
                  "• Kırıcı: 'Çekil önümden, çok yavaşsın!' -> Yapıcı: 'Müsaade eder misin, biraz acelem var da geçebilir miyim?'",
                  "• Kırıcı: 'Seninle bir daha asla oyun oynamam!' -> Yapıcı: 'Bu kuralda anlaşamadık, istersen adil bir çözüm bulup yeniden başlayalım.'"
                ]
              },
              {
                type: 'quiz',
                title: "Dil Ahlâkı Bilgi Yarışması - 1",
                emoji: "🎯",
                question: "Bir insanın arkasından, duyduğunda üzüleceği doğru bir özelliğini konuşmaya İslam ahlakında ne ad verilir?",
                options: ["Tebliğ", "Gıybet", "İsmet", "Hatim"],
                correct: "Gıybet",
                wisdom: "Doğru cevap! Bir kimsenin gıyabında, hoşlanmayacağı şeyleri konuşmak gıybet olarak adlandırılır ve kul hakkıdır."
              },
              {
                type: 'quiz',
                title: "Dil Ahlâkı Bilgi Yarışması - 2",
                emoji: "🎯",
                question: "Bir insanda bulunmayan kötü bir niteliği veya suçu, onun üzerine asılsız olarak atmaya ne ad verilir?",
                options: ["Gıybet", "Dedikodu", "İftira", "Sıdk"],
                correct: "İftira",
                wisdom: "Harika! Olmayan bir şeyi birine yükleyerek onu lekelemeye iftira denir ve büyük günahtır."
              },
              {
                type: 'quiz',
                title: "Dil Ahlâkı Bilgi Yarışması - 3",
                emoji: "🎯",
                question: "Peygamber Efendimizin konuşma ahlakıyla ilgili müminlere getirdiği temel ölçü hangisidir?",
                options: ["Her zaman çok hızlı konuşmak", "Ya hayır söylemek ya da susmak", "Sadece kendi haklarını düşünmek", "Kelimeleri aceleyle seçmek"],
                correct: "Ya hayır söylemek ya da susmak",
                wisdom: "Tebrikler! Efendimiz müminleri boş ve zararlı konuşmaktan korumak için 'Ya hayır söyle ya sus' ölçüsünü getirmiştir."
              }
            ]
          }
        ]
      },
      {
        dayName: "Hafta Özeti",
        discipline: "DEĞERLENDİRME",
        bgGrad: "from-sky-500 to-blue-600",
        badgeColor: "bg-sky-100 text-sky-850",
        lessons: [
          {
            id: "w3_eval_l1",
            lessonNumber: 1,
            title: "3. Hafta Büyük Şampiyonluk Sınavı",
            outcomes: [
              "3. haftada işlenen İlahi Kitaplar, Kur'an-ı Kerim, Namaz Rekatları ve Hicret konularını pekiştirir."
            ],
            wisdomNotes: "Rehberimiz Kur'an'ı, dinin direği namazı ve Peygamberimizin büyük Hicret yolculuğunu öğrendik. Şimdi şampiyonluk zamanı!",
            interactiveActivity: "Sınıfı iki gruba ayırarak 15 soruluk bu büyük yarışmayı puanlı bir bilgi şölenine çevirelim.",
            slides: [
              {
                type: 'cover',
                title: "3. Hafta Şampiyonluk Sınavı",
                subtitle: "Büyük Değerlendirme • 15 Soru",
                emoji: "🏆"
              },
              {
                type: 'quiz',
                title: "Soru 1 / 15",
                emoji: "🎯",
                question: "Allah tarafından Hz. Musa'ya (a.s.) gönderilen ilahi kitabın adı nedir?",
                options: ["Zebur", "Tevrat", "İncil", "Kur'an-ı Kerim"],
                correct: "Tevrat",
                wisdom: "Doğru cevap! Hz. Musa'ya Tevrat, Hz. Davud'a Zebur indirilmiştir."
              },
              {
                type: 'quiz',
                title: "Soru 2 / 15",
                emoji: "🎯",
                question: "Kur'an-ı Kerim'de yer alan ve toplam 114 adet olan bölümlere ne ad verilir?",
                options: ["Ayet", "Cüz", "Sure", "Hatim"],
                correct: "Sure",
                wisdom: "Harika! Kur'an'da 114 sure ve 6236 ayet bulunur."
              },
              {
                type: 'quiz',
                title: "Soru 3 / 15",
                emoji: "🎯",
                question: "Ramazan ayında Kur'an-ı Kerim'i bir kişinin yüksek sesle okuyup diğerlerinin sessizce takip etmesi geleneğine ne ad verilir?",
                options: ["Aşır", "Mukabele", "Tavaf", "Vakfe"],
                correct: "Mukabele",
                wisdom: "Tebrikler! Bu güzel ve bereketli geleneğe mukabele denir."
              },
              {
                type: 'quiz',
                title: "Soru 4 / 15",
                emoji: "🎯",
                question: "Allah'ın emriyle büyük bir gemi inşa eden ve inananları büyük tufandan kurtaran peygamber kimdir?",
                options: ["Hz. Adem", "Hz. İbrahim", "Hz. Nuh", "Hz. İsa"],
                correct: "Hz. Nuh",
                wisdom: "Mükemmel bildin! Hz. Nuh, kendisine inananlarla birlikte tufandan gemi sayesinde kurtulmuştur."
              },
              {
                type: 'quiz',
                title: "Soru 5 / 15",
                emoji: "🎯",
                question: "Namazın içindeki farzlardan biri olan, ayaktayken Kur'an-ı Kerim okumaya fıkıhta ne ad verilir?",
                options: ["Kıyam", "Rükû", "Secde", "Kıraat"],
                correct: "Kıraat",
                wisdom: "Doğru! Namazda ayakta durmaya kıyam, ayaktayken Kur'an okumaya ise kıraat denir."
              },
              {
                type: 'quiz',
                title: "Soru 6 / 15",
                emoji: "🎯",
                question: "Günün en yoğun anında kılınan; 4 ilk sünnet, 4 farz ve 2 son sünnet olmak üzere toplam 10 rekat olan namaz hangisidir?",
                options: ["Sabah Namazı", "Öğle Namazı", "İkindi Namazı", "Akşam Namazı"],
                correct: "Öğle Namazı",
                wisdom: "Harika! Öğle namazı toplam 10 rekattır ve hayatın koşuşturmasında insana huzur verir."
              },
              {
                type: 'quiz',
                title: "Soru 7 / 15",
                emoji: "🎯",
                question: "Peygamberimizin 'Tek başına kılınandan 27 kat daha sevaptır' dediği ibadet şekli hangisidir?",
                options: ["Cemaatle namaz kılmak", "Nafile oruç tutmak", "Evde namaz kılmak", "Zekat vermek"],
                correct: "Cemaatle namaz kılmak",
                wisdom: "Tebrikler! Cemaatle namaz kılmak hem sosyalleşmeyi sağlar hem de 27 kat daha sevaptır."
              },
              {
                type: 'quiz',
                title: "Soru 8 / 15",
                emoji: "🎯",
                question: "Ramazan ayında yatsı namazından sonra cemaatle coşkuyla kılınan 20 rekatlık sünnet namazın adı nedir?",
                options: ["Vitir", "Bayram", "Cuma", "Teravih"],
                correct: "Teravih",
                wisdom: "Mükemmel! Teravih namazı Ramazan akşamlarının en güzel neşesidir."
              },
              {
                type: 'quiz',
                title: "Soru 9 / 15",
                emoji: "🎯",
                question: "Mekkelilerin boykotu sonrası Hz. Hatice ve Ebu Talib'in üst üste vefat ettiği o hüzünlü seneye İslam tarihinde ne ad verilir?",
                options: ["Asr-ı Saadet", "Hüzün Yılı", "Fil Yılı", "Kadir Gecesi"],
                correct: "Hüzün Yılı",
                wisdom: "Doğru cevap! Bu iki büyük kaybın yaşandığı yıla Senetü'l-Hüzün (Hüzün Yılı) denmiştir."
              },
              {
                type: 'quiz',
                title: "Soru 10 / 15",
                emoji: "🎯",
                question: "Peygamberimiz ve Hz. Ebubekir'in Medine'ye hicret ederken 3 gün boyunca saklandıkları ve Allah'ın onları koruduğu mağara hangisidir?",
                options: ["Hira Mağarası", "Sevr Mağarası", "Kuba", "Arafat"],
                correct: "Sevr Mağarası",
                wisdom: "Harika! Efendimiz Sevr Mağarasında Hz. Ebubekir'e 'Üzülme, Allah bizimle beraberdir' demiştir."
              },
              {
                type: 'quiz',
                title: "Soru 11 / 15",
                emoji: "🎯",
                question: "Müslümanların 622 yılında Mekke'den Medine'ye göç etmesi olayına ne ad verilir?",
                options: ["Hicret", "Tavaf", "Vakfe", "İhram"],
                correct: "Hicret",
                wisdom: "Tebrikler! Bu büyük ve zorlu göç yolculuğuna Hicret denir."
              },
              {
                type: 'quiz',
                title: "Soru 12 / 15",
                emoji: "🎯",
                question: "İslam dininin yeryüzündeki ilk mescidi, Peygamberimiz hicret ederken hangi köyde inşa edilmiştir?",
                options: ["Mina", "Müzdelife", "Kuba", "Taif"],
                correct: "Kuba",
                wisdom: "Mükemmel bildin! İslam'ın ilk mescidi Medine yakınlarındaki Kuba köyünde yapılmıştır."
              },
              {
                type: 'quiz',
                title: "Soru 13 / 15",
                emoji: "🎯",
                question: "Kâinattaki güneşin, arıların veya bulutların görevlerini aksatmadan yerine getirmesi, insana hangi ahlaki erdemi hatırlatmalıdır?",
                options: ["Kıskançlık", "Sorumluluk Bilinci", "Gıybet", "Acelecilik"],
                correct: "Sorumluluk Bilinci",
                wisdom: "Doğru cevap! Tabiat görevini aksatmazken akıl sahibi insanın sorumsuz davranması düşünülemez."
              },
              {
                type: 'quiz',
                title: "Soru 14 / 15",
                emoji: "🎯",
                question: "Bir insanın arkasından, onun duyduğunda hoşlanmayacağı doğru bir özelliğini konuşarak kul hakkına girmeye ne ad verilir?",
                options: ["İftira", "Sıdk", "Gıybet", "Tebliğ"],
                correct: "Gıybet",
                wisdom: "Harika! Doğru bile olsa birinin arkasından hoşlanmayacağı şekilde konuşmak gıybettir."
              },
              {
                type: 'quiz',
                title: "Soru 15 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimiz dil ahlakı konusunda 'Allah'a ve ahiret gününe iman eden kimse, ya hayır söylesin ya da...' diyerek nasıl devam etmiştir?",
                options: ["Sussun", "Bağırsın", "Gülmesin", "Uyumusun"],
                correct: "Sussun",
                wisdom: "Muhteşem bir final! 'Ya hayır söyle ya sus' kuralı, dilimizi kötülüklerden koruyan en büyük kalkandır."
              },
              {
                type: 'content',
                title: "🏆 SEN BİR ŞAMPİYONSUN! 🏆",
                emoji: "🏅",
                body: "Mükemmel! 3. haftanın zorlu sorularını bile kolayca aştın. Zihnindeki bilgiler ışıl ışıl parlıyor!"
              }
            ]
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
            title: "Peygamberlere İnanıyorum - Bölüm 1: Peygamberlere İman",
            outcomes: [
              "Peygamber kavramını ve Allah'ın peygamber gönderme amacını açıklar.",
              "Kur'an-ı Kerim'de adı geçen peygamberleri öğrenir ve ilk/son peygamberi bilir."
            ],
            wisdomNotes: "Allah, insanlara hem bu dünyada hem de ahirette mutluluğa ve huzura kavuşmanın yollarını gösteren rehberler göndermiştir. Bu rehberlere 'Peygamber' denir. Peygamberler, Allah'ın görevlendirdiği özel insanlardır. Onlar hayatın her alanında bizlere örnek olur, nasıl ibadet edeceğimizi ve nasıl iyi bir insan olacağımızı öğretirler. Kısaca onlar iyilik öğretmenleridir. İlk peygamber Hz. Adem, son peygamber ise Sevgili Peygamberimiz Hz. Muhammed'dir.",
            interactiveActivity: "İlk ve son peygamberin isimlerini tahtada eşleştirip, peygamberlerin neden birer 'iyilik öğretmeni' olduğunu kendi cümlelerimizle konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberlere İnanıyorum",
                subtitle: '4. Hafta • 1. Gün • 1. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Peygamberlere İman ve Rehberlik',
                emoji: '📖',
                body: "Allah, insanlara hem bu dünyada hem de ahirette mutluluğa ve huzura kavuşmanın yollarını gösteren rehberler göndermiştir. Bu rehberlere \"Peygamber\" denir. Peygamberler, Allah'ın görevlendirdiği özel insanlardır. Onlar hayatın her alanında bizlere örnek olur, nasıl ibadet edeceğimizi ve nasıl iyi bir insan olacağımızı öğretirler. Kısaca onlar iyilik öğretmenleridir."
              },
              {
                type: 'poem',
                title: 'BİLİN BAKALIM?',
                emoji: '❓',
                body: "Onlardır bize rehber\nYücelerden bin haber\nİyilik öğretmeni\nCennetleri müjdeler."
              },
              {
                type: 'content',
                title: 'Kur\'an\'da Adı Geçen Peygamberler',
                emoji: '📜',
                body: "Kur'an-ı Kerim'de adı geçen ve bizlere rehber olan peygamberlerin isimlerini öğrenelim:\n\nHz. Adem, Hz. İdris, Hz. Nuh, Hz. Hûd, Hz. Salih, Hz. İbrahim, Hz. Lût, Hz. İsmail, Hz. İshak, Hz. Yakûb, Hz. Yusuf, Hz. Şuayb, Hz. Musa, Hz. Harun, Hz. Davud, Hz. Süleyman, Hz. Eyyüb, Hz. Zülkifl, Hz. Yunus, Hz. İlyas, Hz. Elyesa, Hz. Zekeriya, Hz. Yahya, Hz. İsa, Hz. Muhammed (a.s)."
              },
              {
                type: 'content',
                title: 'İlk ve Son Peygamber',
                emoji: '🌟',
                body: "İlk insan ve ilk peygamber Hazreti Adem'dir.\n\nSon peygamber ise Sevgili Peygamberimiz Hazreti Muhammed'dir (s.a.s). Hz. Muhammed (s.a.s), bütün insanlara bir merhamet kaynağı, bir rehber ve bir müjdeci olarak gönderilmiştir."
              },
              {
                type: 'discussion',
                title: 'Düşünelim ve Paylaşalım',
                emoji: '🤔',
                items: [
                  "Peygamberler olmasaydı, Allah'a nasıl ibadet edeceğimizi ve nasıl iyi bir insan olacağımızı nereden öğrenirdik?",
                  "Peygamberlerimizin 'iyilik öğretmeni' olarak nitelendirilmesi bize onların görevleri hakkında ne anlatır?"
                ]
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması - 1',
                emoji: '🎯',
                question: "Yeryüzüne gönderilen ilk insan ve ilk peygamber kimdir?",
                options: ["Hazreti Nuh", "Hazreti İbrahim", "Hazreti Adem", "Hazreti Musa"],
                correct: "Hazreti Adem",
                wisdom: "Doğru cevap! İlk insan ve ilk peygamber Hazreti Adem'dir."
              },
              {
                type: 'quiz',
                title: 'Ders Sonu Bilgi Yarışması - 2',
                emoji: '🎯',
                question: "Bütün insanlara bir merhamet kaynağı, rehber ve müjdeci olarak gönderilen son peygamber kimdir?",
                options: ["Hazreti İsa", "Hazreti Muhammed (s.a.s)", "Hazreti Davud", "Hazreti Süleyman"],
                correct: "Hazreti Muhammed (s.a.s)",
                wisdom: "Harika! Son peygamber Sevgili Peygamberimiz Hazreti Muhammed'dir (s.a.s)."
              }
            ]
          },
          {
            id: "w4_d1_l2",
            lessonNumber: 2,
            title: "Peygamberlere İnanıyorum - Bölüm 2: Peygamberlerin Özellikleri",
            outcomes: [
              "Peygamberlerin başlıca beş temel özelliğini (Sıdk, Emanet, Fetânet, İsmet, Tebliğ) tanımlar.",
              "İlahi kitapların hangi peygamberlere gönderildiğini hatasız listeler."
            ],
            wisdomNotes: "Peygamberlerin başlıca beş özelliği vardır: Sıdk (Doğruluk), Emanet (Güvenilirlik), Fetânet (Akıllılık), İsmet (Günahsızlık) ve Tebliğ (Ulaştırma). Ayrıca Tevrat Hz. Musa'ya, İncil Hz. İsa'ya, Zebur Hz. Davud'a gönderilmiştir.",
            interactiveActivity: "PDF'teki bulut ipuçları etkinliğini interaktif soru kartlarına çevirdik. Peygamberlerin 5 sıfatının anlamlarını sınıfça sesli olarak cevaplayalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberlerin Özellikleri",
                subtitle: '4. Hafta • 1. Gün • 2. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Peygamberlerin Başlıca Beş Özelliği',
                emoji: '📖',
                body: "Peygamberler, Allah tarafından seçildikleri için çok üstün ahlaki özelliklere sahiptirler. Onların hayatımızı ve ahlakımızı şekillendiren başlıca beş temel niteliği vardır. Şimdi bunları sırasıyla tanıyalım."
              },
              {
                type: 'content',
                title: '1. Sıdk ve 2. Emanet',
                emoji: '⭐',
                items: [
                  "SIDK: \"Doğruluk\" demektir. Peygamberler, daima doğruyu söyleyen, asla yalan söylemeyen dürüst insanlardır.",
                  "EMANET: \"Güvenilir olmak\" demektir. Peygamberler, kendilerine bırakılan emanetleri koruyan, asla ihanet etmeyen, güvenilir insanlardır."
                ]
              },
              {
                type: 'content',
                title: '3. Fetânet ve 4. İsmet',
                emoji: '⭐',
                items: [
                  "FETÂNET: \"Akıllı olmak\" demektir. Peygamberler, Allah'ın mesajlarını insanlara en güzel şekilde anlatabilmek için son derece akıllı, zeki ve anlayışlı kimselerdir.",
                  "İSMET: \"Korunmuş olmak\" demektir. Peygamberler kötülüklerden ve günah işlemekten Allah tarafından özel olarak korunmuş temiz kimselerdir."
                ]
              },
              {
                type: 'content',
                title: '5. Tebliğ',
                emoji: '⭐',
                body: "TEBLİĞ: \"Ulaştırmak\" demektir. Peygamberler, Allah'tan aldıkları vahiyleri, emir ve yasakları hiçbir eksiklik veya fazlalık yapmadan aynen insanlara ulaştıran kimselerdir."
              },
              {
                type: 'content',
                title: 'Peygamberler ve İlahi Kitaplar',
                emoji: '💡',
                items: [
                  "Kendisine \"Tevrat\" isimli kutsal kitap gönderilen peygamber: Hazreti Musa'dır.",
                  "Kendisine \"Zebur\" isimli kutsal kitap gönderilen peygamber: Hazreti Davud'dur.",
                  "Kendisine \"İncil\" isimli kutsal kitap gönderilen peygamber: Hazreti İsa'dır.",
                  "Kendisine \"Kur'an-ı Kerim\" gönderilen son peygamber: Hazreti Muhammed'dir (s.a.s)."
                ]
              },
              {
                type: 'discussion',
                title: 'Düşünelim, Paylaşalım!',
                emoji: '🤔',
                items: [
                  "'Emin' yani güvenilir olmak bir insan için neden çok önemlidir? Güvenilir insanların özellikleri nelerdir?",
                  "Peygamberimize daha peygamber olmadan önce, gençlik çağlarında Mekkeliler neden Muhammedü'l-Emin demişlerdir?"
                ]
              },
              {
                type: 'activity',
                title: 'Uygulamaya Uyarlı Bulut Soruları',
                emoji: '🧩',
                body: "Aşağıdaki tanımların peygamberlerin hangi özelliğine ait olduğunu bulalım:",
                items: [
                  "1. Peygamberlerin her zaman doğru sözlü olmalarına ne denir? (SIDK)",
                  "2. Peygamberlerin dürüst ve güvenilir olmalarına ne denir? (EMANET)",
                  "3. Peygamberlerin son derece akıllı ve zeki olmalarına ne denir? (FETÂNET)",
                  "4. Peygamberlerin günah işlemekten korunmuş olmalarına ne denir? (İSMET)",
                  "5. Peygamberlerin Allah'ın sözlerini insanlara ulaştırmalarına ne denir? (TEBLİĞ)"
                ]
              },
              {
                type: 'quiz',
                title: 'Özellikleri Tanıma Yarışması',
                emoji: '🎯',
                question: "Peygamberlerin son derece akıllı, zeki ve anlayışlı olmaları anlamına gelen özellik hangisidir?",
                options: ["Sıdk", "Fetânet", "İsmet", "Tebliğ"],
                correct: "Fetânet",
                wisdom: "Harika! Fetânet, peygamberlerin üstün zekaya ve akla sahip olmaları demektir."
              }
            ]
          },
          {
            id: "w4_d1_l3",
            lessonNumber: 3,
            title: "Peygamberlere İnanıyorum - Bölüm 3: Kur'an Kıssaları: Hz. Musa",
            outcomes: [
              "Hazreti Musa'nın (a.s.) Nil nehrine bırakılışını ve sarayda büyüme kıssasını özetler.",
              "Asa mucizesini, sihirbazlarla olan mücadeleyi ve Kızıldeniz'in yarılması olayını kavrar."
            ],
            wisdomNotes: "Mısır hükümdarı Firavun erkek çocukların öldürülmesini emredince Hz. Musa'nın annesi onu Nil nehrine bıraktı. Firavun'un eşi Asiye bebeği bulup sarayda kendi annesiyle büyümesini sağladı. Hz. Musa peygamber olunca kardeşi Hz. Harun ile Firavun'u Allah'a inanmaya çağırdı. Asasının yılana dönüşmesi mucizesi karşısında sihirbazlar iman etti. Hz. Musa asasını vurunca Kızıldeniz ikiye ayrıldı, inananlar kurtuldu, Firavun ordusuyla boğuldu.",
            interactiveActivity: "Hz. Musa'nın Kızıldeniz'i asasıyla ikiye ayırması sahnesini zihnimizde canlandırarak Allah'ın inananları koruma gücü üzerine konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Kur'an Kıssaları: Hz. Musa",
                subtitle: '4. Hafta • 1. Gün • 3. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Nil Nehrine Bırakılan Bebek',
                emoji: '📖',
                body: "Mısır hükümdarı Firavun, bir gece rüyasında bir ateşin tahtını yerle bir ettiğini gördü. Bu rüya, doğacak bir erkek çocuğun Firavun'u tahtından indireceği şeklinde yorumlandı. Bu sebeple Firavun, o yıl doğan bütün erkek çocukların öldürülmesini emretti. O yıl doğan bebeklerden birisi de Musa idi. Bu yüzden onun hayatı da tehlike altındaydı."
              },
              {
                type: 'ayah',
                title: 'Anneye Verilen İlahi Müjde',
                emoji: '📖',
                body: "\"Onu emzir. Başına bir şey gelmesinden korktuğun zaman da onu suya bırak. Üzülme, korkma. Çünkü biz, onu sana geri vereceğiz.\"",
                reference: "(Kasas Sûresi, 7. Âyet)"
              },
              {
                type: 'content',
                title: 'Saraydaki Sepet ve Hz. Asiye',
                emoji: '✨',
                body: "Annesi bebeğini Rabbine emanet ederek bir beşik içinde Nil nehrine bıraktı. Beşik, Firavun'un sarayının önüne kadar geldi. Firavun'un karısı Asiye, nehir kıyısında gezerken sudaki beşiği fark etti. Beşikte sevimli bir bebek uyuyordu. Hemen kucağına aldı. Kocası Firavun'un yanına gitti. Bu çocuğu çok sevdiğini söyleyip, ona kötü bir şey yapmamasını istedi. Böylece Musa, sarayda yaşamaya başladı."
              },
              {
                type: 'content',
                title: 'Anne Sütü ve Yavrunun Kavuşması',
                emoji: '🍼',
                body: "Bebek, hiçbir kadının sütünü kabul etmiyordu. Musa'nın kız kardeşi saraya gelerek onu emzirebilecek bir sütanne bildiğini söyledi. Böylece Musa'nın öz annesinin çağrılmasını sağladı. Bebek, annesinin sütünü kabul etmişti. O kadının Musa'nın öz annesi olduğunu bilmiyorlardı. Ama Allah, tevekkül ve sabır gösteren anneyi yavrusuna kavuşturmuştu. Musa, Firavun'un sarayında öz annesiyle birlikte büyümeye başladı."
              },
              {
                type: 'content',
                title: 'Peygamberlik Görevi ve Hz. Harun',
                emoji: '📜',
                body: "Musa, dürüstlüğü ve güzel ahlâkı ile çevresindeki insanları etkileyen bir genç olmuştu. Daha sonra Allah, Musa'yı peygamber olarak görevlendirdi. Hazreti Musa, kendisi gibi peygamber olan kardeşi Hazreti Harun'la beraber Firavun'a gitti. Onu, Allah'ın varlığını ve birliğini tanımaya çağırdı. Ancak Firavun bu çağrıyı reddetti ve peygamberliğini ispatlaması için bir mucize istedi."
              },
              {
                type: 'content',
                title: 'Asa Mucizesi ve Sihirbazlar',
                emoji: '⚡',
                body: "Allah, Hazreti Musa'dan elindeki asâyı yani bastonu yere atmasını istedi. Asâyı atınca asa büyük bir yılana dönüştü. Firavun bunu bir sihir zannetti ve sihirbazlarını çağırdı. Sihirbazlar iplerin ve ağaç dallarının yerde kıvrılmasını sağladılar. Ancak Hazreti Musa'nın asâsı bütün sihirleri yuttu ve yok etti. Sihirbazlar bunun bir mucize olduğunu anlayınca Allah'a iman ettiler. Fakat Firavun iman etmedi."
              },
              {
                type: 'content',
                title: 'Kızıldeniz\'in Yarılması',
                emoji: '🌊',
                body: "Hazreti Musa halkını yanına alarak Mısır'dan çıkmaya karar verdi. Bunu haber alan Firavun, ordusuyla peşlerine düştü ve Kızıldeniz kıyısında onlara yetişti. Hazreti Musa, Yüce Allah'a dua etti. Allah, ona elindeki asâyı denize vurmasını emretti. Asâsını denize vurunca deniz ikiye ayrıldı. Hazreti Musa ve yanındakiler denizde açılan yoldan karşı kıyıya güvenle geçtiler."
              },
              {
                type: 'content',
                title: 'Zalimlerin Sonu',
                emoji: '💡',
                body: "Firavun ve ordusu da denizde açılan o yoldan geçmek isteyince, ikiye ayrılan deniz tekrar birleşti. Firavun ve ordusu dev dalgalar arasında boğuldu. Böylece Allah kendisine yürekten inananları, inkâr edenlerin kötülüklerinden ve zalimliklerinden korudu."
              },
              {
                type: 'quiz',
                title: 'Kıssa Bilgi Yarışması',
                emoji: '🎯',
                question: "Hazreti Musa'ya Firavun karşısında destek olması için kendisi gibi peygamber olarak görevlendirilen kardeşi kimdir?",
                options: ["Hazreti İsa", "Hazreti Harun", "Hazreti Yusuf", "Hazreti İdris"],
                correct: "Hazreti Harun",
                wisdom: "Tebrikler! Hazreti Harun, Hazreti Musa'nın kardeşi olup onunla birlikte Firavun'a tebliğe gitmiştir."
              }
            ]
          },
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
            title: "Oruç Tutuyorum - İbadetin Özü ve Ramazan İklimi",
            outcomes: [
              "Oruç ibadetinin anlamını, şartlarını, imsak ve iftar kavramlarını açıklar.",
              "Ramazan ayının Kur'an ayı olmasının önemini ve mukabele geleneğini fark eder."
            ],
            wisdomNotes: "Oruç sadece mideyi aç bırakmak değil; dili yalandan, kalbi dedikodudan, elleri kavgadan uzak tutarak tüm bedene sabır ve otokontrol kazandırma eğitimidir.",
            interactiveActivity: "Uygulamamız üzerinden 'İlk Harf Keşif Oyunu' yapalım: Ekrana yansıtacağımız sembollerin ilk harflerinden gizli Ramazan kavramlarını bulup felsefi anlamlarını sınıfça tartışalım.",
            slides: [
              {
                type: 'cover',
                title: "Oruç Tutuyorum: Ramazan ve Kur'an Ayı",
                subtitle: "4. Hafta • Salı • 1. Ders",
                emoji: "🌙"
              },
              {
                type: 'content',
                title: "Oruç Nedir?",
                emoji: "🍽️",
                body: "Oruç tutmak; ibadet amacıyla imsak vaktinden iftar vaktine kadar hiçbir şey yememek ve içmemektir. İslam'ın şartlarından biri olan Ramazan orucunu, diğer on bir aydan daha kıymetli ve özel olan Ramazan ayında tutarız."
              },
              {
                type: 'content',
                title: "Orucun Gerçek Anlamı",
                emoji: "💡",
                body: "Oruç, Allah'ın karşılığında en çok mükafat verdiği ibadetlerden birisidir. Çünkü insan sadece Rabbinin sevgisini kazanmak için gün boyunca yemekten ve içmekten uzak durur. Oruç tutmak sadece aç ve susuz kalmak demek değildir."
              },
              {
                type: 'content',
                title: "Bütün Bedene Oruç Sürprizi",
                emoji: "✨",
                body: "Oruçluyken sadece midemize değil, tüm azalarımıza oruç tuttururuz. Dilimizi yalandan ve dedikodudan korur; ellerimizi ve kalbimizi kavgadan, tartışmadan ve kötü davranışlardan tamamen uzak tutarız."
              },
              {
                type: 'content',
                title: "Ramazan Ayı: Kur'an Ayıdır",
                emoji: "📖",
                body: "Kur'an-ı Kerim, Ramazan ayında yer alan Kadir Gecesi'nde indirilmeye başlanmıştır. Peygamberimiz bu ayın çok değerli olduğunu söylemiş; gündüzleri oruç tutmuş, geceleri ise çokça ibadet etmiştir."
              },
              {
                type: 'content',
                title: "Peygamberimizin Ramazan Ahlakı",
                emoji: "🌹",
                body: "Efendimiz Ramazan ayında kimsesizlere yardım etmiş, yoksulları giydirmiş ve onları her akşam iftar sofrasına davet etmiştir. Biz de O'nu örnek alarak iftar sofralarimizi mümin kardeşlerimizle paylaşırız."
              },
              {
                type: 'content',
                title: "Temel Kavram: İmsak Nedir?",
                emoji: "⏰",
                body: "İmsak, gecenin bitmesiyle birlikte oruca başlama zamanıdır. Sabah ezanının okunmasıyla birlikte yeme ve içme eylemine son verilir ve gün boyu sürecek olan oruç ibadeti başlar."
              },
              {
                type: 'content',
                title: "Temel Kavram: İftar Nedir?",
                emoji: "🌤️",
                body: "İftar, akşam güneşinin batmasıyla birlikte orucun sona erdiği vakittir. Akşam ezanının okunması veya Ramazan topunun patlamasıyla birlikte niyetli olan ağızlar dualarla açılır."
              },
              {
                type: 'content',
                title: "Güzel Bir Gelenek: Mukabele",
                emoji: "🕌",
                body: "Ramazan ayında Kur'an-ı Kerim'in bir kişi tarafından yüksek sesle okunup, diğer dinleyenler tarafından gözle takip edilmesine 'mukabele' denir. Bu gelenek Peygamberimiz ile Cebrail aleyhisselamın her Ramazan Kur'an'ı karşılıklı okumalarına dayanır."
              },
              {
                type: 'content',
                title: "Peygamberimizden Sağlık Müjdesi",
                emoji: "❤️",
                body: "Sevgili Peygamberimiz; 'Oruç tutun, sağlık bulun!' buyuruyor. On bir ay boyunca durmaksızın çalışan vücudumuz, oruçla birlikte dinlenerek zindelik kazanır. Oruç tam bir biyolojik ve ruhsal yenilenmedir."
              },
              {
                type: 'content',
                title: "Orucun Hayatımıza 6 Katkısı",
                emoji: "🌟",
                body: "Oruç tutmak karakterimize şunları kazandırır:\n\n1. Allah'ın rızasını kazanmamıza vesile olur.\n2. Ahlâkımızı güzelleştirir, merhamet duygumuzu geliştirir.\n3. Nimetlerin kıymetini anlamamızı sağlar.\n4. Bize sabırlı olmayı öğretir.\n5. Yardımlaşma duygumuzu geliştirir.\n6. Sağlıklı olmamızı sağlar."
              },
              {
                type: 'content',
                title: "Ramazan Geldi Hoş Geldi - Şiir Köşesi",
                emoji: "📝",
                body: "Ramazan geldi hoş geldi,\nYüreklerden pası sildi,\nİnsan manasını bildi,\nİlim irfan sofrasıdır.\n\nKur'an'ın indiği tarih,\nSadaka, oruç, teravih,\nBilene ne büyük talih,\nMüminlerin safasıdır."
              },
              {
                type: 'content',
                title: "Merhamet Sayfası",
                emoji: "🤝",
                body: "Sahur, iftar, mukabele,\nVarlıkla yokluk el ele,\nGirebilmek bir gönüle,\nBir merhamet sayfasıdır.\n\nHer günü sanki bir kandil,\nAnlatmada çaresiz dil,\nHer gecesini Kadir bil,\nDerin rahmet deryasıdır."
              },
              {
                type: 'content',
                title: "Ramazan Sadakası: Fitre Nedir?",
                emoji: "🪙",
                body: "Fitre, Ramazan ayında durumu iyi olan Müslümanların, bayramdan önce ihtiyaç sahiplerine verdikleri vacip bir sadakadır. Amacı, fakir kardeşlerimizin de bayram coşkusuna yiyecek ve giyecekle katılabilmesini sağlamaktır."
              },
              {
                type: 'content',
                title: "Meraklı Gençler Soruyor: Kimler Oruç Tutamaz?",
                emoji: "❓",
                body: "Soru: 'Hocam her mümin mutlaka oruç tutmak zorunda mıdır?'\n\nCevap: Ramazan ayında oruç tutamayacak kadar ağır hasta olanlar, hamileler, bebek emziren anneler ve yolculuğa çıkanlar o an tutamayabilirler. Bu kişiler tutamadıkları oruçlarını daha sonra gününe gün kaza ederler."
              },
              {
                type: 'content',
                title: "Meraklı Gençler Soruyor: Unutarak Yemek?",
                emoji: "🤔",
                body: "Soru: 'Hocam oruçlu olduğumu tamamen unutup koca bir bardak su içtim, orucum gitti mi?'\n\nCevap: Kesinlikle gitmedi! Unutarak yemek ve içmek orucu bozmaz. Oruçlu olduğunu hatırladığın anda ağzındakini çıkarıp yıkar ve oruca devam edersin. Dinimiz unutmayı kulun hatası saymamış, Allah'ın bir ikramı olarak görmüştür."
              },
              {
                type: 'activity',
                title: "Dijital Etkinlik: Gizli Kelimeleri Çöz",
                emoji: "🧩",
                body: "Kitabımızdaki ilk harf bulmacasını dijital kodla oynuyoruz. Verilen resimlerin ilk harflerini birleştirip gizli kavramları bulalım:",
                items: [
                  "• S-ecde, A-rmut, H-avuç, U-çak, R-ükû -> SAHUR kavramına ulaştık!",
                  "• İ-ncir, F-ındık, T-elefon, A-yna, R-adyo -> İFTAR kavramına ulaştık!",
                  "• M-asa, U-çurtma, K-alem, A-nahtar, B-alık, E-l, L-ale, E-lma -> MUKABELE kavramına ulaştık!"
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Karakter Değerlendirmesi",
                emoji: "💭",
                items: [
                  "Oruç tutarken aç og susuz kalmamıza rağmen hiç kimsenin görmediği yerlerde bile gizlice su içmememiz, iç otokontrolümüzü ve dürüstlüğümüzü nasıl güçlendirir?",
                  "Mukabele geleneğinin tüm mahalleliyi camide bir araya getirmesi, toplumsal birlikteliğe ve sosyalleşmeye nasıl katkı sağlar?"
                ]
              },
              {
                type: 'quiz',
                title: "Ramazan Bilgisi Yarışması - 1",
                emoji: "🎯",
                question: "Gecenin bitmesiyle birlikte yeme içmeyi kesip oruca başlama vaktini ifade eden terim hangisidir?",
                options: ["İftar", "İmsak", "Sahur", "Mukabele"],
                correct: "İmsak",
                wisdom: "Harika! İmsak, gecenin bitmesiyle birlikte oruca başlama zamanıdır."
              },
              {
                type: 'quiz',
                title: "Ramazan Bilgisi Yarışması - 2",
                emoji: "🎯",
                question: "Aşağıdaki durumlardan hangisi namaz kılarken hem namazın geçerliliğini hem de aldığımız abdesti tamamen iptal eder?",
                options: ["Namazda terlemek", "Namazda yanındakilerin duyacağı kadar sesli gülmek", "Göz ucuyla duvardaki saate bakmak", "Namazda sure okumak"],
                correct: "Namazda yanındakilerin duyacağı kadar sesli gülmek",
                wisdom: "Mükemmel bildin! Namazda sesli gülmek huzurdaki ciddiyetini zedelediği için fıkhen hem abdesti hem namazı bozar."
              }
            ]
          },
          {
            id: "w4_d2_l2",
            lessonNumber: 2,
            title: "Oruç Tutuyorum - Sahur Bereketinden Bayram Neşesine",
            outcomes: [
              "Sahur, iftar ve teravih ibadetlerinin bereketini ve felsefesini açıklar.",
              "Ramazan ve Kurban bayramlarının toplumsal yardımlaşma ve akrabalık ilişkileri üzerindeki etkisini değerlendirir."
            ],
            wisdomNotes: "Ramazan ayı baştan sona bir bereket mevsimidir. Gecenin karanlığındaki sahur hareketliliği, akşam ezanındaki kutsal bekleyiş ve bayram sabahı getirilen tekbirler toplumu sevgi çemberine alır.",
            interactiveActivity: "Uygulamamızdaki 'Üçgen Kelime Eşleştirme Paneli' üzerinden kavramların hangi ibadete (Abdest, Oruç, Namaz) ait olduğunu sınıfça yarışarak bulalım.",
            slides: [
              {
                type: 'content',
                title: "Bereket ve Umut Ayı",
                emoji: "🧑‍🤝‍🧑",
                body: "Ramazan, bütün Müslümanları saran muazzam bir sevinç ve umutla gelir. Oruca hazırlanma telaşı her yanı sarar. Evlerde, çarşılarda tatlı bir koşuşturma başlar. Annelerimiz, ninelerimiz özel hazırlıklar yapar. İftar sofralarımız misafirlerle neşe bulur."
              },
              {
                type: 'content',
                title: "Şehirlerin Süsü: Mahya",
                emoji: "🏮",
                body: "Ramazan geldiğinde camilerin minarelerinde kandiller ışıl ışıl yanar. İki minare arasına asılan ışıklı yazılara 'mahya' denir. Mahyalarda 'Hoş Geldin Ya Şehr-i Ramazan', 'Oruç Tut Sıhhat Bul' gibi güzel ve parıldayan sözler yer alır."
              },
              {
                type: 'content',
                title: "Gecenin Bereketi: Sahur",
                emoji: "🌙",
                body: "Ramazan başladığında gecenin karanlığında ışıkları yanan evler görürüz. Davullar gümbür gümbür çalarken bir yandan da maniler okunur. Peygamberimizin sünnetine uyarak sahura kalkarız. Çünkü sahur yemeği yemek bize ertesi günün orucunu tutmamızda kolaylık ve güç sağlar."
              },
              {
                type: 'content',
                title: "Sahurda Niyet Zamanı",
                emoji: "📣",
                body: "Sahur yemeğini yedikten sonra oruç ibadetine kalben veya dil ile niyet ederiz: 'Allah'ım senin rızan için yarınki Ramazan orucumu tutmaya niyet ediyorum.' deriz. İmsak vaktinin girmesiyle nefsimizi kontrol altına alırız."
              },
              {
                type: 'content',
                title: "Kutsal Bekleyiş: İftar Neşesi",
                emoji: "🍲",
                body: "İftar vakti yaklaşınca içimizi ayrı bir heyecan kaplar. Kulağımız akşam ezanında hep birlikte iftarı bekleriz. Bazen de iftarı haber vermek için şehirlerde Ramazan topu atılır. Müezzin 'Allahu Ekber' diye ezan okumaya başlayınca tatlı bekleyiş sona erer."
              },
              {
                type: 'content',
                title: "Şükür ve Lezzet Sırrı",
                emoji: "🍯",
                body: "İftarda sanki her lokmamız bal gibidir, yemekler her zamankinden daha lezzetlidir. İçtiğimiz su her zamankinden daha tatlıdır. Bu duygularla Rabbimizin verdiği nimetlerin değerini anlar, yoksulların ve ihtiyaç sahiplerinin hâlini daha iyi hissederiz."
              },
              {
                type: 'content',
                title: "İftar Duası",
                emoji: "🤲",
                body: "Okunuşu: 'Allahümme leke sumtü ve bike âmentü ve aleyke tevekkeltü ve alâ rızgike eftartü.'\n\nAnlamı: 'Allah'ım senin rızan için oruç tuttum. Sana inandım. Sana güvendim. Senin verdiğin rızıkla orucumu açtım. (Amin)'"
              },
              {
                type: 'content',
                title: "Gönül Köprüleri: İftar Çadırları",
                emoji: "🎪",
                body: "Ramazanda komşularımızı, akrabalarımızı ve mahallemizdeki ihtiyaç sahibi insanları iftara davet ederiz. Ayrıca şehirlerde kocaman iftar çadırları kurulur. Evine yetişemeyenler, öğrenciler ve kimsesizler bu çadırlarda ücretsiz olarak neşeyle oruçlarını açarlar."
              },
              {
                type: 'content',
                title: "Peygamberimizden İki Sevinç Müjdesi",
                emoji: "🌹",
                body: "Sevgili Peygamberimiz buyuruyor ki: 'Oruçlunun iki sevinci vardır: Biri iftar ettiği zaman, diğeri de Allah'a kavuştuğu zamandır.' İftardaki o ilk yudum su, bu dünyadaki en temiz neşelerden biridir."
              },
              {
                type: 'content',
                title: "Gecenin Coşkusu: Teravih Namazı",
                emoji: "🕌",
                body: "Ramazan ayında iftarlarimizi yaptıktan sonra akın akın camilere gideriz. Kadın, erkek, yaşlı, çocuk hep birlikte yatsı namazının ardından teravih namazını kılarız. Kalbimizi büyük bir huzur ve mutluluk kaplar."
              },
              {
                type: 'content',
                title: "Bayramın Habercisi: Arefe Günü",
                emoji: "🗓️",
                body: "Ramazan ayının en son gününe, bayramdan bir önceki güne 'arefe' denir. Arefe günü herkeste bayrama kavuşmanın heyecanı vardır. Bayram için son temizlikler, tatlılar ve börekler hazırlanır; ahirete göç etmiş yakınlarımızın kabirleri ziyaret edilerek dualar okunur."
              },
              {
                type: 'content',
                title: "Yaşasın Bayram Geldi!",
                emoji: "🎉",
                body: "Bayram sabahı erkenden kalkar, en güzel bayramlık kıyafetlerimizi giyer ve bayram namazı kılmak için camiye gideriz. Camide hep birlikte tekbirler getirir, Allah'a şükrederiz. Hutbeyi dinledikten sonra büyük bir coşkuyla bayramlaşırız."
              },
              {
                type: 'content',
                title: "Toplumsal Kaynaşma ve İkram",
                emoji: "🍬",
                body: "Bayramda küsleri barıştırır, akrabalarımızı ziyaret ederiz. Büyüklerimizin ellerinden öperiz, onlar da bize şeker veya harçlık verir. Misafirlere börekler, tatlılar ikram edilir. En önemlisi; mahalledeki muhtaçları, kimsesizleri ve mülteci çocukları asla unutmayız, sevinci paylaşırız."
              },
              {
                type: 'content',
                title: "Süleyman'ın İlk Orucu Hikayesi",
                emoji: "👦",
                body: "Küçük Süleyman sahur tıkırtılarına uyanır, ailesiyle ilk sahurunu yapar. Gün boyu çok acıkıp susasa da sabreder. Akşam annesinin yaptığı ve normalde hiç sevmediği mercimek çorbasını iftarda içtiğinde hayatının en lezzetli çorbası olduğunu fark eder. Oruç ona nimetlerin değerini öğretmiştir."
              },
              {
                type: 'content',
                title: "Araştırmacı Gazeteci İş Başında!",
                emoji: "🎤",
                body: "Ödevimiz: Evde veya mahallede bizden büyük bir aile ferdiyle 'Çocuklukta Ramazan ve Oruç' konulu bir röportaj yapalım. Onlara ilk oruçlarını, çocukken bayramların nasıl geçtiğini ve teravih anılarını sorup not alalım."
              },
              {
                type: 'activity',
                title: "Etkinlik: Hangisi Nereye Ait?",
                emoji: "🧩",
                body: "Kitabımızdaki üçgen kelime gruplarını dijital olarak eşleştirelim:",
                items: [
                  "• RAMAZAN ÜÇGENİ: Sahur, İftar, İmsak, Ramazan Pidesi, Davul, Davet, Ezan",
                  "• BAYRAM ÜÇGENİ: Şeker, El öpmek, Harçlık, Misafir, Tatlı, Arefe, Ziyaret",
                  "• TERAVİH/YATSI ÜÇGENİ: 20 Rekat, Yatsı Namazı, Camilerin dolması, İlahiler"
                ]
              },
              {
                type: 'activity',
                title: "Etkinlik: Farklı Olan Kelimeyi Bul",
                emoji: "🔍",
                body: "Kitabımızdaki yıldız bulmacasını çözelim. Kelime grubuna uymayan yabancıyı yakalayalım:",
                items: [
                  "• 1. Grup: Kol, Ayak, Yüz, DİZ -> Yabancı kelime DİZ'dir. Çünkü diz abdestte yıkanan değil, namazda otururken ellerin konduğu yerdir.",
                  "• 2. Grup: İftar, Sahur, İmsak, KÂBE -> Yabancı kelime KÂBE'dir. Diğerleri oruçla ilgiliyken Kâbe namazın kıblesidir.",
                  "• 3. Grup: Selam, Secde, Rükû, SADAKA -> Yabancı kelime SADAKA'dır. Diğerleri namazın içindeki farzlarken sadaka bir mali yardımdır."
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Toplumsal Değerlendirme",
                emoji: "🤔",
                items: [
                  "Bayram sabahı erkenden kalkıp en güzel giysilerle camiye gitmek ve küslerin barışması, toplumdaki adalet ve kardeşlik duygularını nasıl ayakta tutar?",
                  "Süleyman'ın normalde sevmediği mercimek çorbasını iftarda çok lezzetli bulması, hayatta sahip olduğumuz şeylerin kıymetini anlama konusunda bize ne öğretir?"
                ]
              },
              {
                type: 'quiz',
                title: "Ramazan Fıkhı Yarışması - 1",
                emoji: "🎯",
                question: "Ramazan ayında camilerde minareler arasına asılan ışıklı, anlamlı yazılara ne ad verilir?",
                options: ["Kandil", "Mahya", "Mukabele", "Fitre"],
                correct: "Mahya",
                wisdom: "Harika! Minareleri süsleyen o ışıklı güzel yazılara mahya adı verilir."
              },
              {
                type: 'quiz',
                title: "Ramazan Fıkhı Yarışması - 2",
                emoji: "🎯",
                question: "Bayram gününden bir önceki, son hazırlıkların yapıldığı ve heyecanın dorukta olduğu güne ne ad verilir?",
                options: ["İmsak", "Kadir Gecesi", "Arefe", "Cuma"],
                correct: "Arefe",
                wisdom: "Mükemmel bildin! Bayramdan bir önceki kutsal güne arefe günü denir."
              }
            ]
          },
          {
            id: "w4_d2_l3",
            lessonNumber: 3,
            title: "Zekâtı Öğreniyorum - Paylaşmanın ve Sadakanın Gücü",
            outcomes: [
              "Zekât ibadetinin anlamını, şartlarını ve toplumsal dayanışmaya katkısını kavrar.",
              "Sadaka kavramının geniş çerçevesini listeler ve günlük hayattaki uygulama alanlarını ayırt eder."
            ],
            wisdomNotes: "Zekât, kalpten kalbe kurulan bir şefkat ve merhamet köprüsüdür. Malımızda fakirlerin hakkı vardır ve zekât bu hakkı adaletle teslim etmektir. Sadaka ise sadece para ile değil, bir tebessümle veya şefkat eliyle bile yapılabilen evrensel bir iyilik dilidir.",
            interactiveActivity: "Uygulamamız üzerinden 'Hece Hece Bilmece' oyunu oynayalım: Karışık verilen hecelerden zekât ve sadaka kavramlarını oluşturup toplumsal faydalarını sınıfça analiz edelim.",
            slides: [
              {
                type: 'content',
                title: "Zekâtı Öğreniyorum: Paylaşmanın Adı",
                emoji: "💰",
                body: "Güzel dinimiz İslam'ın temel ibadetlerinden birisi de zekâttır. Zekât, belirli bir zenginlik ölçüsüne ulaşmış Müslümanların, yılda bir kez para ve mal ile yaptıkları zorunlu bir ibadet şeklidir."
              },
              {
                type: 'content',
                title: "Zenginliğin Teşekkürü",
                emoji: "🤲",
                body: "Rabbimiz bizlere verdiği nimetleri ihtiyaç sahipleri ile cömertçe paylaşmamızı istemiştir. Bizler de Allah'ın verdiği zenginliğe, sağlığa ve mala teşekkür etmek amacıyla zekât veririz. Böylece paylaşmanın tadını ve huzurunu yaşarız."
              },
              {
                type: 'content',
                title: "Merhamet Köprüsü: Zekât",
                emoji: "🌉",
                body: "Zekât; insanlar arasındaki cimriliği, kıskançlığı ve bencil duyguları önleyen çok asil bir ibatettir. Bu yüzden toplumun huzur ve mutluluğuna doğrudan katkı sağlar. Zekât, zengin ile fakir arasında kurulan bir şefkat köprüsüdür."
              },
              {
                type: 'content',
                title: "Malımızdaki Gizli Hak",
                emoji: "🔍",
                body: "İslam fıkhına göre, sahip olduğumuz mallarda ve servette fakirlerin, yetimlerin ve ihtiyaç sahiplerinin hakkı vardır. İşte zekât vermek, kendi malından lütufta bulunmak değil; o malın içindeki hakkı gerçek sahibine adaletle teslim etmektir."
              },
              {
                type: 'content',
                title: "Zekâtın Şartları Nelerdir?",
                emoji: "📋",
                body: "Herkes zekât vermekle yükümlü değildir. Zekât vermenin temel fıkhî şartları şunlardır:\n\n• Müslüman, akıllı ve ergenlik çağına gelmiş olmak,\n• Dinimizin belirlediği zenginlik ölçüsüne (Nisap miktarı mala) sahip olmak,\n• Borçlarından ve temel ihtiyaçlarından fazla olan bu malın üzerinden bir tam yıl geçmiş olması."
              },
              {
                type: 'content',
                title: "Bilin Bakalım? - Eğlenceli Bilmece",
                emoji: "🧠",
                body: "Paylaşmanın adıdır,\nİmanın bir tadıdır.\nEl uzatmak herkese,\nYoksulun kanadıdır.\n\nBu güzel şiirsel bilmecenin cevabı tabii ki kalpleri birleştiren ZEKÂT ibadetidir!"
              },
              {
                type: 'content',
                title: "Geniş Bir İyilik Dünyası: Sadaka",
                emoji: "❤️",
                body: "Zekât sadece zenginlere farz iken, sadaka kapısı yediden yetmişe herkese açıktır. Allah'ın sevgisini ve rızasını kazanmak amacıyla yapılan her türlü güzel iyiliğe, yardıma ve ahlaki davranışa 'sadaka' denir."
              },
              {
                type: 'content',
                title: "Sadaka Vermek Çok Güzel! (Maddi Yardımlar)",
                emoji: "🪙",
                body: "Sadakanın en bilinen yönü maddi paylaşımdır. İhtiyacı olan bir arkadaşımıza kalem hediye etmek, harçlığımızı paylaşmak veya yoksul bir aileye gıda yardımında bulunmak çok güzel birer sadakadır."
              },
              {
                type: 'content',
                title: "Parasız Sadaka Olur mu? (Manevi Sadakalar)",
                emoji: "🤔",
                body: "Ortaokul Öğrencisinin Sorusu: 'Hocam benim hiç param yok, ben zengin değilim. Sadaka verip sevap kazanamayacak mıyım?'\n\nCevap: Müjde! Dinimizde sadaka vermek için zengin olmak şart değildir. Cebinden bir kuruş çıkmasa bile yapabileceğin onlarca manevi sadaka çeşidi vardır. Şimdi bunları görelim."
              },
              {
                type: 'content',
                title: "Manevi Sadaka 1: Gülümsemek",
                emoji: "😊",
                body: "Sınıfa girdiğinde arkadaşlarına güler yüz göstermek, öğretmenine ve ailene samimiyetle gülümsemek sadakadır. Gülümsemek kalplerdeki buzu eritir, etrafa pozitif enerji ve neşe saçar."
              },
              {
                type: 'content',
                title: "Manevi Sadaka 2: Güzel Söz Söylemek",
                emoji: "💬",
                body: "Arkadaşına 'Günaydın', 'Kalemin çok güzelmiş', 'Tebrik ederim sınavdan yüksek almışsın' demek veya kırılan bir kalbi güzel sözlerle tamir etmek sadakadır. Dilimizi kötü sözlerden korumak da bir arınmadır."
              },
              {
                type: 'content',
                title: "Manevi Sadaka 3: Çevreyi Temiz Tutmak",
                emoji: "🧹",
                body: "İnsanları rahatsız edebilecek yerdeki bir taşı, kırık cam parçasını, çöpü veya muz kabuğunu yoldan kaldırıp çöpe atmak sadakadır. Bu davranış çevre bilincini ve başkalarına saygıyı gösterir."
              },
              {
                type: 'content',
                title: "Manevi Sadaka 4: Hayvanlara Merhamet Etmek",
                emoji: "🐾",
                body: "Sokak hayvanları, kediler, köpekler ve kuşlar için kapımızın önüne bir kap temiz yemek ve su koymak harika bir sadakadır. Merhamet edenlere Allah da merhamet eder."
              },
              {
                type: 'content',
                title: "Manevi Sadaka 5: Saygı ve Yardım",
                emoji: "🚌",
                body: "Toplu taşıma araçlarında (otobüs, metro) yaşlılara, hamilelere, hastalara veya engelli vatandaşlara nezaketle yer vermek sadakadır. Aradığı adresi bulamayan veya yükü ağır olan birine yardımcı olmak da sadakadır."
              },
              {
                type: 'content',
                title: "Manevi Sadaka 6: Selamlaşmak ve Ağaç Dikmek",
                emoji: "🌳",
                body: "Karşılaştığın insanlara 'Selamün Aleyküm' diyerek esenlik dilemek sadakadır. Bir ağaç dikip insanların, kuşların onun gölgesinden ve meyvesinden faydalanmasını sağlamak da kıyamete kadar sürecek bir sadakadır."
              },
              {
                type: 'content',
                title: "Zekât ve Sadakanın Toplumsal Sonuçları",
                emoji: "📈",
                body: "Zekât ve sadaka kültürü gelişmiş toplumlarda hırsızlık, kıskançlık ve suç oranları azalır. İnsanlar arasında sevgi, güven ve sarsılmaz bir kardeşlik bağı kurulur. Varlık ile yokluk el ele verir, toplumsal barış sağlanır."
              },
              {
                type: 'activity',
                title: "Etkinlik: Hece Hece Bilmece Paneli",
                emoji: "🧩",
                body: "Karışık verilen hecelerden yola çıkarak fıkhî tanımları eşleştirelim:\n\n( Heceler: SE - KAT - LAŞ - PAY - DA - ZE - SA - VAP - MAK )",
                items: [
                  "1. Zenginlerin mallarını fakirlerle paylaştığı farz ibadet: ZEKÂT",
                  "2. Allah rızası için yapılan her türlü karşılıksız yardım ve iyilik: SADAKA",
                  "3. Yaptığımız iyi davranışlar karşılığında kazandığımız manevi ödül: SEVAP",
                  "4. Bize ait olan nimetleri başkalarına da ulaştırmak: PAYLAŞMAK"
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Felsefi Düşünce",
                emoji: "🤔",
                items: [
                  "Zekât verirken fakir insanı incitmemek, gururunu kırmamak ve gösterişten uzak durmak (gizlice vermek) sizce zekâtın ahlaki değerini nasıl etkiler?",
                  "Cebimizden hiç para çıkmadan sadece bir tebessümle, güzel sözle veya bir hayvana su vererek sadaka sevabı kazanabilmemiz, İslam'ın iyiliği yayma felsefesi hakkında bize ne anlatır?"
                ]
              },
              {
                type: 'quiz',
                title: "Zekât ve Sadaka Yarışması - 1",
                emoji: "🎯",
                question: "Allah'ın sevgisini ve rızasını kazanmak amacıyla yapılan her türlü güzel iyiliğe, yardıma ve ahlaki davranışa ne ad verilir?",
                options: ["Nisap", "Hades", "Sadaka", "Kıyam"],
                correct: "Sadaka",
                wisdom: "Mükemmel bildin! Sadaka, gülümsemeden maddi yardıma kadar uzanan çok geniş bir iyilik yelpazesidir."
              },
              {
                type: 'quiz',
                title: "Zekât ve Sadaka Yarışması - 2",
                emoji: "🎯",
                question: "İslam'ın beş şartından biri olan zekât ibadetiyle ilgili olarak aşağıda verilen fıkhî bilgilerden hangisi DOĞRUDUR?",
                options: ["Zekât sadece fakirlerin yerine getirmesi gereken bir ibatettir", "Zekât, cimriliği önleyen, mal og para ile yapılan farz bir ibatettir", "Zekât vermek için akıllı olmak şart değildir", "Sadece namaz kılanlar zekât verebilir"],
                correct: "Zekât, cimriliği önleyen, mal ve para ile yapılan farz bir ibatettir",
                wisdom: "Tebrikler! Zekât belirli şartları taşıyan zenginlerin malıyla yaptığı, toplumsal sevgiyi artıran harika bir farzdır."
              }
            ]
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
            title: "Peygamberimizin Medine Hayatı - Bölüm 1",
            outcomes: [
              "Muhacir ve Ensar kavramlarını tanımlar.",
              "Medine'de gerçekleştirilen Ensar-Muhacir kardeşliğinin (Muâhât) fedakarlık boyutunu ve toplumsal faydalarını açıklar."
            ],
            wisdomNotes: "Mekke'den Medine'ye dinleri uğruna her şeyini bırakıp göç eden Müslümanlara 'Muhacir', Medine'de onlara evini ve kalbini açanlara 'Ensar' denir. Peygamber Efendimiz (s.a.v) onları kardeş ilan etmiş (Muâhât), böylece tarihte eşi benzeri görülmemiş bir yardımlaşma destanı yazılmıştır.",
            interactiveActivity: "Kimlerle din kardeşi olduğumuzu düşünelim. Muhacir-Ensar kardeşliğinden ilhamla, günümüzde zor durumda olanlara nasıl destek olabileceğimizi tartışalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Medine Hayatı",
                subtitle: 'Bölüm 1: Muhacir ve Ensar Kardeşliği',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Sıfırdan Başlayan Hayatlar',
                emoji: '🏚️',
                body: "Mekkeli Müslümanlar, inançlarını özgürce yaşayabilmek için evlerini, tarlalarını, eşyalarını, hatta bazıları akrabalarını Mekke'de bırakarak Medine'ye gelmek zorunda kalmışlardı. Ceplerinde paraları, başlarını sokacak bir evleri yoktu."
              },
              {
                type: 'content',
                title: 'Muhacir Ne Demektir?',
                emoji: '🚶',
                body: "İslam dinini yaşamak, Yüce Allah'ın (c.c) ve Peygamberin (s.a.v) yolundan gitmek amacıyla her şeyini bırakıp Mekke'den Medine'ye hicret eden bu fedakar Müslümanlara \"Muhacir\" (Göç edenler) denir."
              },
              {
                type: 'content',
                title: 'Ensar Ne Demektir?',
                emoji: '🤝',
                body: "Medine'de yaşayıp, Peygamber Efendimizi (s.a.v) ve yersiz yurtsuz kalan Mekkeli Müslümanları şehirlerine davet eden, onlara evini, kalbini ve sofrasını açan yardımsever Müslümanlara ise \"Ensar\" (Yardımcılar) denir."
              },
              {
                type: 'content',
                title: 'Peygamberimizin Çözümü: Muâhât',
                emoji: '💡',
                body: "Sevgili Peygamberimiz (s.a.v), Medine'de bütün Müslümanların birbirleriyle kaynaşmasını ve evsiz kalanların barınmasını istiyordu. Tarihte eşi benzeri görülmemiş bir proje başlattı: Muâhât (Kardeşleşme)."
              },
              {
                type: 'content',
                title: 'Kan Bağını Aşan Kardeşlik',
                emoji: '❤️',
                body: "Peygamber Efendimiz (s.a.v), her bir Muhacir aileyi, Medineli bir Ensar ailesiyle resmen ahiret kardeşi ilan etti. Bu kardeşlik öyle güçlüydü ki, öz kardeşten bile ileri bir sevgi ve fedakarlığa dönüştü."
              },
              {
                type: 'content',
                title: 'Muazzam Bir Paylaşım Destanı',
                emoji: '🏡',
                body: "Bu kardeşlik sayesinde Ensar olanlar; fazladan evleri varsa anahtarını muhacir kardeşine verdi, tarlası varsa mahsulünü bölüştü, parasını, yiyeceğini ve en önemlisi sevgisini paylaştı."
              },
              {
                type: 'content',
                title: 'Huzur ve Güç Doğuyor',
                emoji: '🌱',
                body: "Bu eşsiz yardımlaşma sayesinde Muhacirler yaşadıkları evsizlik ve yoksulluk sıkıntısından kurtulmuş, kısa sürede kendi ayakları üzerinde durmayı başarmıştı. Ensar ise zor durumda olanlara yardım etmenin ve Yüce Allah'ın rızasını kazanmanın mutluluğunu yaşamıştı."
              },
              {
                type: 'content',
                title: 'İslam Toplumunun Temeli',
                emoji: '🧱',
                body: "Medine'de kurulan bu kardeşlik bağı, İslam devletinin ve medeniyetinin ne kadar sağlam, sevgi dolu ve adaletli bir temel üzerine oturduğunu tüm dünyaya göstermiştir."
              },
              {
                type: 'hadith',
                title: 'Müminlerin Yardımlaşması',
                emoji: '🌹',
                body: "\"Kim müslüman kardeşinin bir ihtiyacını giderirse, Allah da onun bir ihtiyacını giderir. Kim bir müslümanı sıkıntıdan kurtarırsa, Allah da onu kıyamet gününün sıkıntılarının birinden kurtarır.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'hadith',
                title: 'Kusurları Örtmek',
                emoji: '🌹',
                body: "\"Kim bir müslümanın kusurunu (hatasını) örter ve gizlerse, Allah da kıyamet gününde onun kusurunu örter.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: 'Kardeşlik Üzerine Düşünelim',
                emoji: '🤔',
                items: [
                  "Kendi sahip olduğun en sevdiğin oyuncakları, odanı veya harçlığını hiç tanımadığın ama zor durumda olan bir mülteci veya depremzede çocukla paylaşmak nasıl bir duygudur?",
                  "Ensar'ın gösterdiği bu muazzam cömertliğin günümüz dünyasındaki karşılığı sence nasıl olmalıdır?"
                ]
              },
              {
                type: 'quiz',
                title: 'Ensar ve Muhacir Yarışması - 1',
                emoji: '🎯',
                question: "İnançları uğruna her şeyini Mekke'de bırakıp Medine'ye göç eden fedakar Müslümanlara ne ad verilir?",
                options: ["Ensar", "Sahabi", "Muhacir", "Hafız"],
                correct: "Muhacir",
                wisdom: "Harika! Göç eden, yurdunu terk eden anlamında onlara 'Muhacir' denilmiştir."
              },
              {
                type: 'quiz',
                title: 'Ensar ve Muhacir Yarışması - 2',
                emoji: '🎯',
                question: "Medine'de yaşayıp, Mekke'den gelen Müslümanlara evini, bağını ve kalbini açarak onlara yardım eden Müslümanlara ne ad verilir?",
                options: ["Havariler", "Muhacir", "Kureyşliler", "Ensar"],
                correct: "Ensar",
                wisdom: "Mükemmel! Yardım edenler, kucak açanlar anlamında onlara 'Ensar' denilmiştir."
              }
            ]
          },
          {
            id: "w4_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Medine Hayatı - Bölüm 2",
            outcomes: [
              "Mescid-i Nebevi'nin bir eğitim ve ilim merkezi (Suffe) olarak işlevini açıklar.",
              "Mekkelilerle yapılan savunma savaşlarını (Bedir, Uhud, Hendek) ve Mekke'nin barışçıl fethini kronolojik olarak kavrar."
            ],
            wisdomNotes: "Mescid-i Nebevi sadece bir ibadethane değil, aynı zamanda Suffe adı verilen ilk yatılı okuldu. Mekkeli müşriklerin saldırılarına karşı Bedir, Uhud ve Hendek savaşları yapıldı. 630 yılında Mekke kan dökülmeden fethedildi, Kabe putlardan temizlendi ve Peygamber Efendimiz (s.a.v) kendisine zulmeden herkesi affetti.",
            interactiveActivity: "Peygamber Efendimizin (s.a.v) Mekke'yi fethettiğinde, kendisini yurdundan kovanlara intikam yerine 'Genel Af' ilan etmesinin erdemini sınıfça tartışalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Medine Hayatı",
                subtitle: 'Bölüm 2: Mescid Okulu ve Mekke\'nin Fethi',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Medine\'de Barış ve Güven Ortamı',
                emoji: '🕊️',
                body: "Müslümanlar Medine'de hep birlikte güzel bir hayat yaşıyorlardı. Mekke'deki eziyet ve sıkıntılar artık geride kalmıştı. Herkes birbirini kardeş görüyor, kimse kimseye haksızlık etmiyordu. Sevgili Peygamberimizin (s.a.v) rehberliğinde örnek ve adaletli bir toplum oluşmuştu."
              },
              {
                type: 'content',
                title: 'Örnek Ahlakla Yayılan İslam',
                emoji: '🌱',
                body: "Müslümanların dürüstlüğünden, kimsenin hakkını yememesinden ve güzel davranışlarından etkilenen Medineli diğer insanlar ve kabileler de hızla Müslüman oluyor, İslamiyet büyük bir hızla yayılıyordu."
              },
              {
                type: 'content',
                title: 'İlk Üniversite: Suffe',
                emoji: '📚',
                body: "Peygamber Efendimizin (s.a.v) Medine'ye yaptırdığı Mescid-i Nebevi sadece namaz kılınan bir yer değildi. Mescidin bitişiğine 'Suffe' adında üzeri kapalı bir bölüm yapılmıştı. Burası, kimsesiz ve fakir gençlerin yatılı kaldığı, gece gündüz ilim öğrendiği İslam'ın ilk üniversitesiydi."
              },
              {
                type: 'content',
                title: 'İlim Âşıkları',
                emoji: '✍️',
                body: "Sahabiler belirli zamanlarda Mescid-i Nebevi'de toplanıyor, Peygamberimizden (s.a.v) yeni inen Kur'an-ı Kerim âyetlerini öğreniyor, yazıyor ve ezberliyorlardı. Tüm sahabiler İslam dinini anlamak, yaşamak ve başka ülkelere anlatmak için büyük bir gayret gösteriyordu."
              },
              {
                type: 'content',
                title: 'Mekkelilerin Bitmeyen Öfkesi',
                emoji: '⚔️',
                body: "Müslümanların Medine'de güçlenmesinden, huzura kavuşmasından ve ticaret yollarını kontrol etmesinden rahatsız olan Mekkeli müşrikler, onlara karşı dev ordular toplayıp Medine'ye saldırdılar."
              },
              {
                type: 'content',
                title: 'Savunma Savaşları: Bedir, Uhud, Hendek',
                emoji: '🛡️',
                body: "Müşriklerin niyeti İslam'ı ve Müslümanları kökten yok etmekti. Ancak Yüce Allah (c.c) Müslümanların yardımcısıydı. Mekkelilerle sırasıyla Bedir, Uhud ve Hendek savunma savaşları yapıldı. Müslümanlar yurtlarını ve inançlarını kahramanca savundular."
              },
              {
                type: 'content',
                title: '630 Yılı: Büyük Fetih',
                emoji: '🕋',
                body: "Yıllar süren mücadelelerden sonra 630 yılında Peygamber Efendimiz (s.a.v) 10 bin kişilik büyük bir orduyla Mekke'ye yürüdü. Mekkeliler bu muazzam güç karşısında direnemediler ve Mekke kan dökülmeden, barışçıl bir şekilde fethedildi."
              },
              {
                type: 'content',
                title: 'Kâbe Putlardan Temizleniyor',
                emoji: '🧹',
                body: "Böylece Müslümanlar 8 yıl önce ağlayarak çıktıkları vatanlarına muzaffer bir şekilde geri döndüler. Peygamber Efendimiz (s.a.v) doğruca Kâbe'ye giderek, onu aslına uygun hale getirdi ve içindeki tüm putları devirerek temizledi."
              },
              {
                type: 'content',
                title: 'Tarihe Geçen Genel Af',
                emoji: '🤝',
                body: "Mekkeliler korku içinde kendilerinden intikam alınmasını bekliyorlardı. Ancak Âlemlere Rahmet olarak gönderilen Peygamberimiz (s.a.v) onlara: 'Bugün size kınama yoktur, hepiniz serbestsiniz!' diyerek kendisine onca eziyeti yapan herkesi affettiğini duyurdu."
              },
              {
                type: 'content',
                title: 'Kalplerin Fethi',
                emoji: '❤️',
                body: "Mekkeliler, Peygamber Efendimizin bu inanılmaz merhameti ve affediciliği karşısında çok etkilendiler. İntikam yerine sevgi gören Mekke halkı akın akın gelerek kendi istekleriyle Müslüman oldular."
              },
              {
                type: 'content',
                title: 'Elçiler ve Dünyaya Açılış',
                emoji: '🌍',
                body: "Mekke'nin fethiyle birlikte Arabistan yarımadasında İslamiyet tamamen hakim oldu. Peygamber Efendimiz (s.a.v) komşu ülkelerin (Bizans, İran, Mısır) krallarına elçiler ve mektuplar göndererek onları da barış ve tevhid dini olan İslam'a davet etti."
              },
              {
                type: 'hadith',
                title: 'Kardeşlik İlkesi',
                emoji: '🌹',
                body: "\"Müslüman müslümanın kardeşidir. Ona zulmetmez, onu tehlikede yalnız bırakmaz.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: 'Affetmenin Gücü',
                emoji: '🤔',
                items: [
                  "Peygamber Efendimizin (s.a.v) kendisine yıllarca işkence eden, onu yurdundan kovan Mekkelileri eline güç geçtiğinde cezalandırmak yerine affetmesi, İslam ahlakı hakkında bize ne gösterir?",
                  "Bir insandan intikam almak mı, yoksa onu affederek kalbini kazanmak mı daha büyük bir güç gerektirir?"
                ]
              },
              {
                type: 'quiz',
                title: 'Tarih ve Fetih Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v) Mescid-i Nebevi'nin yanına yaptırdığı, kimsesiz ve fakir gençlerin kalarak ilim öğrendikleri ilk İslam okulunun adı nedir?",
                options: ["Kuba", "Suffe", "Daru'l Nedve", "Ravza"],
                correct: "Suffe",
                wisdom: "Harika! Ashab-ı Suffe (Suffe öğrencileri) gece gündüz Kur'an ve ilim öğrenen muazzam bir ekipti."
              },
              {
                type: 'quiz',
                title: 'Tarih ve Fetih Yarışması - 2',
                emoji: '🎯',
                question: "Peygamberimizin (s.a.v) 630 yılında 10 bin kişilik bir orduyla kan dökmeden fethettiği ve putlardan temizlediği şehir hangisidir?",
                options: ["Taif", "Kudüs", "Medine", "Mekke"],
                correct: "Mekke",
                wisdom: "Mükemmel! 630 yılında Mekke fethedilmiş ve genel af ilan edilerek kalpler kazanılmıştır."
              }
            ]
          },
          {
            id: "w4_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimizin Medine Hayatı - Bölüm 3",
            outcomes: [
              "Veda Haccı ve Veda Hutbesi'ndeki evrensel insan hakları mesajlarını analiz eder.",
              "Maide Suresi 3. ayet bağlamında İslam dininin tamamlanışını kavrar."
            ],
            wisdomNotes: "632 yılında Peygamber Efendimiz (s.a.v) yüz binden fazla Müslümanla birlikte Mekke'ye hacca gitti. Buna 'Veda Haccı' denir. Arafat'ta 'Veda Hutbesi' konuşmasını yaptı. İnsanların eşit olduğunu ve insan haklarının korunması gerektiğini söyledi. Medine'ye döndükten kısa bir süre sonra vefat etti. Kabri Medine'dedir.",
            interactiveActivity: "Veda Hutbesi'ndeki insan hakları (eşitlik, adalet) mesajlarının günümüz dünyası için önemini tartışalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Medine Hayatı",
                subtitle: 'Bölüm 3: Veda Haccı ve Ebediyete Yolculuk',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Son Büyük Buluşma: Veda Haccı',
                emoji: '🕋',
                body: "Mekke'nin fethinden 2 yıl sonraydı. Tarihler 632 yılını gösteriyordu. Sevgili Peygamberimiz (s.a.v), hac ibadetini yerine getirmek için Medine'den yola çıktı. Onunla birlikte hac yapmak isteyen yüz binden fazla Müslüman da Mekke'ye akın etti. Peygamber Efendimizin bu son haccına \"Veda Haccı\" denir."
              },
              {
                type: 'content',
                title: 'Arafat\'ta Tarihi Konuşma',
                emoji: '🎤',
                body: "Peygamberimiz (s.a.s) hac vazifesi sırasında \"Arafat\" meydanında, devesinin üzerinde durarak mahşeri andıran o yüz bin kişilik muazzam kalabalığa tarihi bir konuşma yaptı. Bu eşsiz ve son konuşmaya \"Veda Hutbesi\" denir."
              },
              {
                type: 'content',
                title: 'İlk İnsan Hakları Evrensel Bildirgesi',
                emoji: '📜',
                body: "Veda Hutbesi, insanlık tarihinin en mükemmel insan hakları bildirgesidir. Peygamber Efendimiz (s.a.v) orada can, mal ve namus güvenliğinin kutsal olduğunu, faizin, kan davasının ve adaletsizliğin ayaklar altına alındığını tüm dünyaya ilan etmiştir."
              },
              {
                type: 'content',
                title: 'Eşitlik ve Takva İlkesi',
                emoji: '⚖️',
                body: "Peygamberimiz sözlerinde: 'Ey insanlar! Hepiniz Adem'in çocuklarısınız, Adem ise topraktandır. Arap'ın Arap olmayana, beyazın siyaha hiçbir üstünlüğü yoktur. Üstünlük ancak Yüce Allah'a olan saygı, ahlak ve iyiliktedir (Takva).' diyerek ırkçılığı kökten yıkmıştır."
              },
              {
                type: 'content',
                title: 'Kadın ve Aile Hakları',
                emoji: '👩‍👧',
                body: "Hutbede ayrıca kadınlara ve eşlere iyi davranılması gerektiğini, onların Yüce Allah'ın birer emaneti olduğunu vurgulamış; birbirimizin haklarına saygı göstermemizi vasiyet etmiştir."
              },
              {
                type: 'ayah',
                title: 'Dinin Tamamlanışı',
                emoji: '📖',
                body: "Veda Hutbesi sırasında Yüce Allah (c.c) şu ayeti indirerek İslam mesajının bittiğini müjdelemiştir: \n\"Bugün sizin için dininizi kemale erdirdim. Size nimetimi tamamladım ve sizin için din olarak İslam'ı seçtim.\"",
                reference: "(Maide Süresi, 3. Âyet)"
              },
              {
                type: 'content',
                title: 'Ebedi Alem ve Vefat',
                emoji: '🕊️',
                body: "Veda Haccı'ndan sonra Peygamber Efendimiz (s.a.v) Medine'ye döndü. Kısa bir süre sonra hastalandı. Ateşi çok yüksekti. Hastalığının en ağır anlarında bile cemaatle namaz kılmaya büyük özen gösterdi."
              },
              {
                type: 'content',
                title: 'En Yüce Dosta Kavuşma',
                emoji: '✨',
                body: "Tarihler 8 Haziran 632'yi gösterdiğinde, 63 yaşında iken \"En Yüce Dosta! (Refik-i Âlâ)\" diyerek fani dünyadan ebedi aleme göç etti. Bütün Müslümanlar, yetim kalan ashabı ve tüm Medine büyük bir yasa boğuldu."
              },
              {
                type: 'content',
                title: 'Ravza-i Mutahhara',
                emoji: '🟢',
                body: "Sevgili Peygamberimizin (s.a.v) nurlu kabri Medine'de, vefat ettiği odasındadır (Mescid-i Nebevi'nin içindedir). Buraya Tertemiz Bahçe anlamına gelen \"Ravza-i Mutahhara\" veya Yeşil Kubbe denir. Hacılar her yıl burayı ziyaret ederek Efendimize (s.a.v) hasretle selam ve salavat gönderirler."
              },
              {
                type: 'content',
                title: 'Ölümsüz Miras: Kur\'an ve Sünnet',
                emoji: '💎',
                body: "Peygamber Efendimiz (s.a.v) aramızdan ayrılmış olsa da bize iki paha biçilmez miras bırakmıştır: Kur'an-ı Kerim ve Sünneti (kendi örnek yaşayışı). Peygamberimizin hayatını öğrenmek bize rehberlik eder, yolumuzu aydınlatır ve ahlakımızı güzelleştirir."
              },
              {
                type: 'discussion',
                title: 'Veda Hutbesi ve İnsanlık',
                emoji: '🤔',
                items: [
                  "Peygamberimizin (s.a.v) Veda Hutbesi'nde 'Üstünlük ırkta, renkte değil ahlakta ve takvadadır' demesi, bugünün dünyasındaki ırkçılık ve ayrımcılık sorunlarına nasıl bir çözüm sunar?",
                  "Peygamberimize sevgi ve saygımızı sunmak için söylediğimiz 'Salavat' ne anlama gelir? Hep birlikte bir Salavat-ı Şerif okuyalım."
                ]
              },
              {
                type: 'quiz',
                title: 'Veda Haccı Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v) 632 yılında Arafat'ta 100 binden fazla Müslümana okuduğu ve insan haklarını dünyaya duyurduğu tarihi konuşmaya ne ad verilir?",
                options: ["Veda Hutbesi", "Hicret", "Cuma Hutbesi", "Safa Daveti"],
                correct: "Veda Hutbesi",
                wisdom: "Harika! Veda Hutbesi, insanlık tarihinin en muazzam ve kapsayıcı insan hakları evrensel bildirgesidir."
              },
              {
                type: 'quiz',
                title: 'Veda Haccı Yarışması - 2',
                emoji: '🎯',
                question: "Sevgili Peygamberimizin (s.a.v) vefatından sonra defnedildiği ve bugün Medine'de Mescid-i Nebevi'nin içinde bulunan 'Tertemiz Bahçe' anlamındaki kabrine ne ad verilir?",
                options: ["Kuba Mescidi", "Ravza-i Mutahhara", "Sevr Mağarası", "Makam-ı İbrahim"],
                correct: "Ravza-i Mutahhara",
                wisdom: "Doğru cevap! Ravza-i Mutahhara, Peygamberimizin yeşil kubbe altındaki mübarek kabridir."
              }
            ]
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
            title: "Utanma (Haya) - Karakterin Asil Kalkanı",
            outcomes: [
              "Haya ve utanma duygusunun insanın onurunu, saygınlığını ve fıtratını koruyan bir kalkan olduğunu kavrar.",
              "Haya duygusunun hem Yaratıcıya hem de topluma karşı asil bir duruş olduğunu hadisler ışığında fark eder.",
              "Haya kavramının pasiflik veya çekingenlik değil; özsaygıyı koruyan güçlü bir karakter erdemi olduğunu öğrenir."
            ],
            wisdomNotes: "Haya, insanın çirkin ve kötü davranışlardan kaçınmasını, hem Allah'tan hem de insanlardan utanarak özsaygısını korumasını sağlayan asil bir karakter erdemidir. Haya, bir pısırıklık veya hakkını savunamama durumu değildir; tam aksine, kötülüklere karşı asil ve güçlü bir sınır çizme gücüdür.",
            interactiveActivity: "Sınıf içinde 'Benim Ahlaki Sınırım' başlığı altında bir beyin fırtınası yapalım: Bizi kötü ve haksız davranışlar yapmaktan alıkoyan iç sesimizi ve utanma duygusunun hayatımızdaki koruyucu rolünü konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Utanma (Haya)",
                subtitle: "4. Hafta • 4. Gün • 1. Ders",
                emoji: "🛡️"
              },
              {
                type: 'content',
                title: "İnsanın Manevi Kalkanı: Haya",
                emoji: "📖",
                body: "Haya, insanın kötü, çirkin ve ahlaka uymayan söz ve davranışlardan uzak durmasını sağlayan asil bir utanma duygusudur. Bu duygu, insanın fıtratını, onurunu ve toplum içindeki saygınlığını tıpkı sağlam bir kalkan gibi dış etkilerden ve kötülüklerden korur."
              },
              {
                type: 'content',
                title: "Haya Pasiflik Değildir",
                emoji: "✨",
                body: "Haya kavramı kesinlikle bir pasiflik, çekingenlik, pısırıklık veya hakkını arayamamak olarak algılanmamalıdır. Tam aksine haya, insanın kendi özsaygısını bilmesi, değerlerini koruması ve kötülüklere karşı 'Hayır' diyerek asil bir sınır çizebilmesini sağlayan çok güçlü bir karakter erdemidir."
              },
              {
                type: 'content',
                title: "İki Boyutlu Bir Duruş",
                emoji: "💡",
                body: "Haya duygusunun iki önemli boyutu vardır. Birincisi, her anımızı gören Yaratıcımıza karşı duyduğumuz hayadır ki bu mümini yalnızken de dürüst kılar. İkincisi ise topluma karşı duyulan hayadır; bu da insanların haklarına saygı göstermemizi ve kaba davranışlardan uzak durmamızı sağlar."
              },
              {
                type: 'hadith',
                title: "İmandan Bir Bölüm",
                emoji: "🌹",
                body: "\"Haya imandandır ve haya bütünüyle hayırdır.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'hadith',
                title: "Ahlakın Özü",
                emoji: "🌹",
                body: "\"Her dinin bir ahlakı vardır, İslam'ın ahlakı da hayadır.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: "Haya Üzerine Konuşalım",
                emoji: "🤔",
                items: [
                  "Bir insanın kimse görmediğinde bile dürüst davranması ile Allah'a karşı duyduğu haya duygusu arasında nasıl bir bağ vardır?",
                  "Haya duygusunun çekingenlikten farkı nedir? Sınırlarını bilen bir insan neden daha güçlü bir karaktere sahiptir?"
                ]
              },
              {
                type: 'activity',
                title: "İnteraktif Durum Analizi: Karakter Sınırı",
                emoji: "🧩",
                body: "Aşağıdaki durumlarda asil bir haya duygusuna sahip bir gencin sergileyeceği doğru sınırları belirleyelim:",
                items: [
                  "• Durum A: Arkadaş ortamında birinin dedikodusu yapılmaya başlandığında pısırıkça susmak yerine, nazikçe ortamdan uzaklaşmak veya konuyu değiştirmek.",
                  "• Durum B: Sosyal medyada veya dijital dünyada tek başınayken, kimsenin ruhu duymayacak olsa bile kötü ve çirkin içeriklere bakmamak."
                ]
              },
              {
                type: 'quiz',
                title: "Haya Bilgi Yarışması - 1",
                emoji: "🎯",
                question: "İnsanın onurunu koruyan, kötülüklere karşı asil bir sınır çizmesini sağlayan ve İslam'ın özü olarak nitelendirilen karakter erdemi hangisidir?",
                options: ["Tebliğ", "Haya (Utanma)", "Fetânet", "Kıdem"],
                correct: "Haya (Utanma)",
                wisdom: "Tebrikler! Haya, müminin onurunu koruyan ve kötülüklere set çeken çok güçlü bir manevi kalkandır."
              },
              {
                type: 'quiz',
                title: "Haya Bilgi Yarışması - 2",
                emoji: "🎯",
                question: "Peygamber Efendimizin (s.a.s.) haya duygusunun niteliğiyle ilgili buyurduğu temel ölçü aşağıdakilerden hangisidir?",
                options: ["Haya insanı çekingen yapar.", "Haya bütünüyle hayırdır.", "Haya sadece büyükler içindir.", "Haya pasif kalmaktır."],
                correct: "Haya bütünüyle hayırdır.",
                wisdom: "Harika! Efendimiz 'Haya bütünüyle hayırdır' buyurarak bu duygunun insana sadece güzellik getireceğini bildirmiştir."
              }
            ]
          },
          {
            id: "w4_d4_l2",
            lessonNumber: 2,
            title: "Alay Etme ve Akran Zorbalığı",
            outcomes: [
              "İnsanların fiziksel özellikleri, kusurları, aksanları veya durumlarıyla alay etmenin bir kul hakkı ihlali olduğunu analiz eder.",
              "Başıkalarının onuruna ve kişilik haklarına saygı duymanın dini bir zorunluluk olduğunu kavrar.",
              "Akran zorbalığının ve alaycılığın bireyin ruh dünyasında açtığı derin yaraları empati yoluyla yorumlar."
            ],
            wisdomNotes: "İslam dini insan onuruna mutlak bir değer verir. İnsanların dış görünüşü, konuşma şekli, kusurları veya maddi durumlarıyla alay etmek, onlara lakap takmak kesinlikle yasaktır ve ağır bir kul hakkı ihlalidir. Özellikle ortaokul çağlarında görülen akran zorbalığı kalplerde derin yaralar açar.",
            interactiveActivity: "Tahtaya 'Empati Aynası' çizelim: Bize yapılmasını istemediğimiz bir lakap veya alaycı sözün başkasına söylendiğinde ne hissettireceğini karşılıklı roller üzerinden analiz edelim.",
            slides: [
              {
                type: 'cover',
                title: "Alay Etme ve Kul Hakkı",
                subtitle: "4. Hafta • 4. Gün • 2. Ders",
                emoji: "❌"
              },
              {
                type: 'content',
                title: "İnsan Onurunun Dokunulmazlığı",
                emoji: "📖",
                body: "Yüce dinimiz İslam, her insanın onuruna ve kişilik haklarına mutlak bir değer verir. İnsanları yaratan Allah'tır. Dolayısıyla bir insanın fiziksel özellikleriyle, konuşma aksanıyla, geçici kusurlarıyla veya maddi durumuyla alay etmek, aslında ilahi sanata saygısızlık etmektir."
              },
              {
                type: 'content',
                title: "Gizli Tehlike: Akran Zorbalığı",
                emoji: "⚠️",
                body: "Özellikle okul çağlarında akranlar arasında sıkça görülen alaycılık, şaka adı altında yapılan bir akran zorbalığı türüdür. 'Sadece şaka yapıyordum' demek, haksız bir davranışı haklı kılmaz. Alaycı sözler ve dışlamalar, maruz kalan arkadaşımızın ruh dünyasında çok derin ve iyileşmesi zor yaralar açar."
              },
              {
                type: 'content',
                title: "Ağır Bir Sorumluluk: Kul Hakkı İhlali",
                emoji: "⚖️",
                body: "Bir kimseye kötü lakaplar takmak veya onun eksiklikleriyle eğlenmek doğrudan bir kul hakkı ihlalidir. Kalbi kırılan, onuru zedelenen insandan gidip helallik istenmedikçe bu manevi ve ahlaki sorumluluk üzerimizden kalkmaz. Mümin, diliyle emniyet veren kimsedir."
              },
              {
                type: 'ayah',
                title: "Birbirinizi Ayıplamayın",
                emoji: "📖",
                body: "\"Ey müminler! Bir topluluk diğer bir topluluğu alaya almasın. Belki de onlar, kendilerinden daha iyidirler... Kendi kendinizi ayıplamayın, birbirinizi kötü lakaplarla çağırmayın.\"",
                reference: "(Hucurat Suresi, 11. Ayet)"
              },
              {
                type: 'discussion',
                title: "Zorbalığa Karşı Empati",
                emoji: "🤔",
                items: [
                  "Okulda veya sınıfta bir arkadaşımızın fiziksel bir özelliğiyle dalga geçildiğini gördüğümüzde, sessiz kalmak sizce zorbalığa ortak olmak mıdır? Ne yapmalıyız?",
                  "İslam'ın insan onuruna verdiği mutlak değeri düşündüğümüzde, birine lakap takmak neden büyük bir ahlaki kusurdur?"
                ]
              },
              {
                type: 'activity',
                title: "İstasyon: Şaka mı, Zorbalık mı?",
                emoji: "🚦",
                body: "Aşağıdaki durumları inceleyerek hangisinin masum bir şaka, hangisinin ise kul hakkına giren bir zorbalık olduğunu sınıfta sesli ayırt edelim:",
                items: [
                  "• Durum 1: Bir arkadaşımızın boyunun kısalığıyla ilgili sınıfta gülüşmeler başlatmak ve ona komik isimler takmak. (ZORBALIK / KUL HAKKI)",
                  "• Durum 2: Arkadaşımızın sınav notunu tüm sınıfa duyurup onunla dalga geçmek. (ZORBALIK / KUL HAKKI)",
                  "• Durum 3: Karşılıklı olarak iki arkadaşın birbirini kırmadan, incitmeden ortak bir anıya beraberce gülmesi. (MASUM ŞAKA)"
                ]
              },
              {
                type: 'quiz',
                title: "Onur ve Saygı Yarışması",
                emoji: "🎯",
                question: "Hucurat Suresi 11. ayete göre, müminlerin birbirlerine karşı yapması kesin olarak yasaklanan dil ve ahlak kusuru hangisidir?",
                options: ["Güler yüz göstermek", "Birbirini alaya almak ve kötü lakap takmak", "Emanetleri korumak", "Dürüst davranmak"],
                correct: "Birbirini alaya almak ve kötü lakap takmak",
                wisdom: "Harika! Ayet net bir şekilde müminlerin birbirini alaya almamasını ve kötü lakaplarla çağırmamasını emreder."
              }
            ]
          },
          {
            id: "w4_d4_l3",
            lessonNumber: 3,
            title: "Arkadaşlık Ahlakı ve Güvenilir Dost (Emin) Olmak",
            outcomes: [
              "Dostluk ilişkilerinde sadakat, dürüstlük, sır tutma, güven ve fedakarlık değerlerini analiz eder.",
              "İyi ve kötü arkadaş seçiminin karakter gelişimi üzerindeki doğrudan etkilerini ayırt eder.",
              "İnsanı iyiliğe yönlendiren dostlar seçmenin ve bizzat güvenilir bir dost (Emin) olmanın yollarını kavrar."
            ],
            wisdomNotes: "Ergenlik döneminde arkadaş grubunun insan üzerindeki etkisi en üst düzeydedir. İyi arkadaş insanı hayra, başarıya ve güzel ahlaka taşırken; kötü arkadaş kötülüğe sürükler. Mümin hem iyi arkadaş seçmeli hem de bizzat kendisi etrafına güven veren bir dost (Emin) olmalıdır.",
            interactiveActivity: "Rol analizi yapalım: Sırrımızı emanet ettiğimiz bir arkadaşımızın bu sırrı saklaması (sadakat) veya ifşa etmesi durumlarında dostluk bağının nasıl etkilendiğini roller üzerinden konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Arkadaşlık Ahlakı",
                subtitle: "4. Hafta • 4. Gün • 3. Ders",
                emoji: "🤝"
              },
              {
                type: 'content',
                title: "Dostluğun Temel Değerleri",
                emoji: "📖",
                body: "Gerçek bir dostluk ve arkadaşlık ilişkisi şu asil değerler üzerine inşa edilir: Zor zamanda yanında kalmak (sadakat), asla yalan söylememek (dürüstlük), arkadaşının mahremini korumak (sır tutma), her şartta emniyet hissettirmek (güven) ve gerektiğinde onun için özveride bulunmak (fedakarlık)."
              },
              {
                type: 'content',
                title: "Akran Grubunun Karakterimize Etkisi",
                emoji: "✨",
                body: "Özellikle gençlik ve ergenlik dönemlerinde arkadaş çevresinin insan karakteri üzerindeki etkisi en üst düzeydedir. Zamanla arkadaşımızın huyları, konuşma tarzı ve ahlakı bize sirayet eder. İnsanı iyiliğe, derslerinde başarıya ve güzel ahlaka yönlendiren dostlar seçmek, geleceğimizi doğrudan şekillendirir."
              },
              {
                type: 'content',
                title: "Bizzat 'Emin' Bir Dost Olmak",
                emoji: "💡",
                body: "İyi bir arkadaş aramadan önce, bizzat kendimizin etrafımızdaki insanlara karşı dürüst, güvenilir ve 'Emin' bir dost olması gerekir. Peygamber Efendimiz (s.a.s.) hayatı boyunca dostlarına tam bir sadakat ve güven vermiş, arkadaşları onu canından çok sevmiştir."
              },
              {
                type: 'hadith',
                title: "Arkadaşın Dini",
                emoji: "🌹",
                body: "\"Kişi arkadaşının dini ve ahlakı üzeredir. Bu yüzden her biriniz kiminle arkadaşlık ettiğine dikkat etsin!\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'hadith',
                title: "İyi ve Kötü Arkadaşın Misali",
                emoji: "🌹",
                body: "\"İyi arkadaşla kötü arkadaşın misali, misk taşıyan güzel kokucu ile demirci körüğü üfleyen kimse gibidir. Güzel kokucu sana ya o kokudan ikram eder ya da ondan güzel koku duyarsın. Demirci körüğü ise ya elbisenizi yakar ya da ondan kötü koku alırsınız.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: "Dostluğumuzu Ölçelim",
                emoji: "🤔",
                items: [
                  "Peygamberimizin güzel koku taşıyan insan benzetmesinden yola çıkarak, iyi bir arkadaşın bizim ahlakımıza kattığı güzellikleri nasıl açıklayabiliriz?",
                  "Bir arkadaşta sadakat ve sır tutma özellikleri kaybolduğunda, o dostluk neden tamamen temelinden sarsılır?"
                ]
              },
              {
                type: 'activity',
                title: "İnteraktif Terazi: Güvenilir Dostun Özellikleri",
                emoji: "⚖️",
                body: "Aşağıdaki davranışlardan hangilerinin gerçek dostluğa değer katacağını, hangilerinin ise dostluğu bitireceğini ayırt edelim:",
                items: [
                  "• Arkadaşının bir hatasını görünce onu herkesin içinde rezil etmek yerine nazikçe baş başayken uyarmak (DEĞER KATAR)",
                  "• Sırf arkadaş grubu istiyor diye bir başkasını dışlamak veya ona kaba davranmak (DOSTLUĞU BİTİRİR)",
                  "• Arkadaşı hastalandığında veya ders kaçırdığında ona notlarını ulaştırmak ve destek olmak (DEĞER KATAR)"
                ]
              },
              {
                type: 'quiz',
                title: "Arkadaşlık Ahlakı Testi",
                emoji: "🎯",
                question: "Peygamber Efendimizin hadis-i şerifindeki benzetmeye göre, çevresine sürekli güzellik, hayır ve ahlak yayan hayırlı bir arkadaş neye benzetilmiştir?",
                options: ["Demirci körüğüne", "Misk taşıyan güzel kokucuya", "Karanlık bulutlara", "Kuru ağaç dallarına"],
                correct: "Misk taşıyan güzel kokucuya",
                wisdom: "Tebrikler! İyi arkadaş, etrafına mis kokular yayan bir kokucuya benzetilmiştir; onun yanında kalan her zaman güzellik bulur."
              }
            ]
          }
        ]
      },
      {
        dayName: "Hafta Özeti",
        discipline: "DEĞERLENDİRME",
        bgGrad: "from-sky-500 to-blue-600",
        badgeColor: "bg-sky-100 text-sky-850",
        lessons: [
          {
            id: "w4_eval_l1",
            lessonNumber: 1,
            title: "4. Hafta Büyük Şampiyonluk Sınavı",
            outcomes: [
              "4. haftada işlenen Peygamberlerin sıfatları, Oruç, Zekat ve Haya ahlakı konularını pekiştirir."
            ],
            wisdomNotes: "Ramazanın bereketini, zekatın merhametini ve peygamberlerin o güzel ahlakını zihnimizde tazeleyelim!",
            interactiveActivity: "15 soruluk bu büyük yarışmayı puanlı bir bilgi şölenine çevirelim.",
            slides: [
              {
                type: 'cover',
                title: "4. Hafta Şampiyonluk Sınavı",
                subtitle: "Büyük Değerlendirme • 15 Soru",
                emoji: "🏆"
              },
              {
                type: 'quiz',
                title: "Soru 1 / 15",
                emoji: "🎯",
                question: "Peygamberlerin her zaman doğru söylemeleri ve asla yalan söylememeleri anlamına gelen sıfatları hangisidir?",
                options: ["Fetânet", "Emanet", "Sıdk", "Tebliğ"],
                correct: "Sıdk",
                wisdom: "Doğru cevap! Sıdk, peygamberlerin sarsılmaz doğruluğunu ifade eder."
              },
              {
                type: 'quiz',
                title: "Soru 2 / 15",
                emoji: "🎯",
                question: "Peygamberlerin günah işlemekten ve kötülük yapmaktan Allah tarafından korunmuş olmalarına ne ad verilir?",
                options: ["İsmet", "Kelam", "Kıdem", "Basar"],
                correct: "İsmet",
                wisdom: "Harika! İsmet sıfatı, onların tertemiz ve günahsız olduklarının kanıtıdır."
              },
              {
                type: 'quiz',
                title: "Soru 3 / 15",
                emoji: "🎯",
                question: "Firavun'un sarayında büyüyen, asasıyla Kızıldeniz'i ikiye ayıran büyük peygamber kimdir?",
                options: ["Hz. İbrahim", "Hz. Davud", "Hz. Musa", "Hz. İsa"],
                correct: "Hz. Musa",
                wisdom: "Tebrikler! Hz. Musa (a.s.), Allah'ın yardımıyla inananları Firavun'un zulmünden kurtarmıştır."
              },
              {
                type: 'quiz',
                title: "Soru 4 / 15",
                emoji: "🎯",
                question: "Sabah ezanının okunmasıyla (gecenin bitmesiyle) birlikte yeme içmeyi kesip oruca başlama vaktine ne denir?",
                options: ["İftar", "Sahur", "Mukabele", "İmsak"],
                correct: "İmsak",
                wisdom: "Mükemmel! İmsak vaktiyle beraber niyet edilir ve oruç ibadeti başlar."
              },
              {
                type: 'quiz',
                title: "Soru 5 / 15",
                emoji: "🎯",
                question: "Ramazan ayında durumu iyi olanların, bayramdan önce ihtiyaç sahiplerine verdikleri vacip sadakanın adı nedir?",
                options: ["Fidye", "Fitre", "Gusül", "Nisap"],
                correct: "Fitre",
                wisdom: "Doğru cevap! Fitre, yoksulların da bayram coşkusuna katılmasını sağlayan harika bir dayanışmadır."
              },
              {
                type: 'quiz',
                title: "Soru 6 / 15",
                emoji: "🎯",
                question: "Dinimize göre, unutarak bir şey yiyip içmek orucu bozar mı?",
                options: ["Evet, hemen bozar", "Sadece su içmek bozmaz", "Hayır, kesinlikle bozmaz", "Sadece Ramazan'da bozar"],
                correct: "Hayır, kesinlikle bozmaz",
                wisdom: "Harika! Dinimiz unutmayı kulun hatası saymaz, oruçlu olduğunu hatırlayınca ağzı yıkayıp oruca devam edilir."
              },
              {
                type: 'quiz',
                title: "Soru 7 / 15",
                emoji: "🎯",
                question: "Zengin olan Müslümanların yılda bir kez mal ve paralarından belirli bir miktarını ihtiyaç sahiplerine vermesi ibadetine ne denir?",
                options: ["Sadaka", "Zekât", "Hac", "Umre"],
                correct: "Zekât",
                wisdom: "Tebrikler! Zekât, cimriliği önleyen ve toplumu sevgiyle birbirine bağlayan farz bir ibadettir."
              },
              {
                type: 'quiz',
                title: "Soru 8 / 15",
                emoji: "🎯",
                question: "Cebimizden hiç para çıkmadan yaptığımız; gülümsemek, güzel söz söylemek veya sokak hayvanlarına su vermek gibi davranışlara ne ad verilir?",
                options: ["Manevi Sadaka", "Fitre", "Farz", "Sünnet"],
                correct: "Manevi Sadaka",
                wisdom: "Mükemmel bildin! Sadaka sadece para ile değil, kocaman bir gülümseme ve iyilikle de yapılır."
              },
              {
                type: 'quiz',
                title: "Soru 9 / 15",
                emoji: "🎯",
                question: "Mekke'den Medine'ye hicret eden Müslümanlara 'Muhacir', Medine'de onlara evini ve kalbini açıp yardım edenlere ise ne ad verilir?",
                options: ["Sahabi", "Hafız", "Ensar", "İmam"],
                correct: "Ensar",
                wisdom: "Doğru cevap! Ensar (Yardımcılar), Muhacir kardeşlerine her şeylerini vererek muazzam bir tarih yazmıştır."
              },
              {
                type: 'quiz',
                title: "Soru 10 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimizin 632 yılında yüz binden fazla Müslümanla birlikte yaptığı son hacca ne ad verilir?",
                options: ["Veda Haccı", "Umre", "Arafat Vakfesi", "Kadir Gecesi"],
                correct: "Veda Haccı",
                wisdom: "Harika! Bu hacda Efendimiz meşhur Veda Hutbesi'ni irad etmiş ve insan haklarını dünyaya duyurmuştur."
              },
              {
                type: 'quiz',
                title: "Soru 11 / 15",
                emoji: "🎯",
                question: "İnsanın çirkin davranışlardan kaçınmasını, özsaygısını korumasını sağlayan ve 'İslam'ın ahlakı' olarak bilinen manevi kalkan hangisidir?",
                options: ["Kibir", "Haya (Utanma)", "Haset", "Öfke"],
                correct: "Haya (Utanma)",
                wisdom: "Tebrikler! Haya, insanın onurunu koruyan asil bir duruş ve çok güçlü bir karakter erdemidir."
              },
              {
                type: 'quiz',
                title: "Soru 12 / 15",
                emoji: "🎯",
                question: "İnsanların fiziksel özellikleriyle, kusurlarıyla alay etmek ve onlara kötü lakaplar takmak dinimizde nasıldır?",
                options: ["Sünnettir", "Kul hakkıdır ve yasaktır", "Sadece şakadır", "Mekruhtur"],
                correct: "Kul hakkıdır ve yasaktır",
                wisdom: "Mükemmel! İnsan onuru dokunulmazdır. Alay etmek ve akran zorbalığı yapmak ağır bir kul hakkıdır."
              },
              {
                type: 'quiz',
                title: "Soru 13 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimiz, hadisinde 'İyi arkadaşla kötü arkadaşın misalini' anlatırken iyi arkadaşı neye benzetmiştir?",
                options: ["Demirci körüğüne", "Kuru bir ağaca", "Misk taşıyan güzel kokucuya", "Rüzgarlı bir havaya"],
                correct: "Misk taşıyan güzel kokucuya",
                wisdom: "Doğru cevap! İyi arkadaş her zaman etrafına ahlak ve güzellik (güzel koku) yayar."
              },
              {
                type: 'quiz',
                title: "Soru 14 / 15",
                emoji: "🎯",
                question: "Aşağıdakilerden hangisi dostluğa ve arkadaşlığa değer katan, onu güçlendiren özelliklerden biridir?",
                options: ["Sır tutmak ve sadakat", "Gıybet etmek", "Yalan söylemek", "Kıskançlık (Haset)"],
                correct: "Sır tutmak ve sadakat",
                wisdom: "Harika! Sır tutmak, güven ve sadakat gerçek bir dostluğun sarsılmaz temel direkleridir."
              },
              {
                type: 'quiz',
                title: "Soru 15 / 15",
                emoji: "🎯",
                question: "Maide Suresi 3. ayette Allah, 'Bugün sizin için dininizi kemale erdirdim' diyerek insanlara hangi dini seçtiğini müjdelemiştir?",
                options: ["İslam", "Hristiyanlık", "Yahudilik", "Haniflik"],
                correct: "İslam",
                wisdom: "Muhteşem bir kapanış! Yüce Allah, bizler için din olarak İslam'ı seçmiş ve nimetini tamamlamıştır."
              },
              {
                type: 'content',
                title: "🏆 SEN BİR ŞAMPİYONSUN! 🏆",
                emoji: "🏅",
                body: "Harika bir iş çıkardın! 4. haftanın tüm konularını da başarıyla tamamladın."
              }
            ]
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
            title: "Âhiret Hayatına İnanıyorum - Bölüm 1: Ölüm Bir Son Değildir",
            outcomes: [
              "Âhiret hayatı kavramını tanımlar ve ölümün bir son olmadığını açıklar.",
              "Dünya hayatında yapılan iyi ve kötü işlerin âhiretteki karşılığını fark eder."
            ],
            wisdomNotes: "Canlılar doğar, yaşar ve ölür. Ancak ölüm bir son değildir. Çünkü ölümden sonra yeni ve farklı bir hayat başlar. Bu hayata 'âhiret hayatı' denir. Ahiret hayatı, dünyada yaptığımız iyi ya da kötü tüm işlerin karşılığını alacağımız yerdir. Allah'a inanan ve iyi işler yapanlar, âhirette cennete gireceklerdir.",
            interactiveActivity: "Kitabımızdaki 'İyi ki âhiret var' şiirini sınıfta hep birlikte sesli olarak okuyalım ve hissettiklerimizi paylaşalım.",
            slides: [
              {
                type: 'cover',
                title: "Âhiret Hayatına İnanıyorum",
                subtitle: '5. Hafta • 1. Gün • 1. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Ölümden Sonra Yeni Bir Başlangıç',
                emoji: '📖',
                body: "Canlılar doğar, yaşar ve ölür. Ancak ölüm bir son değildir. Çünkü ölümden sonra yeni ve farklı bir hayat başlar. Bu hayata \"âhiret hayatı\" denir."
              },
              {
                type: 'content',
                title: 'İşlerimizin Karşılık Yeri',
                emoji: '⚖️',
                body: "Ahiret hayatı, dünyada yaptığımız iyi ya da kötü tüm işlerin karşılığını alacağımız yerdir. Allah'a inanan ve iyi işler yapanlar, âhirette cennete gireceklerdir. Orada insanın canının istediği her türlü güzellik vardır."
              },
              {
                type: 'content',
                title: 'İmansızlık ve Kötülüğün Cezası',
                emoji: '💡',
                body: "Allah'a ve âhiret hayatına inanmayanlar, kötülükle opmür geçirenler ise cehennemde cezalandırılacaklardır. Kötülükten vazgeçmeyen, insafsız ve imansız insanlar ise, mutlaka yaptıklarının cezasını çekecektir. Allah zalimleri asla sevmez."
              },
              {
                type: 'poem',
                title: 'İyi Ki Âhiret Var Şiiri',
                emoji: '🌙',
                body: "Bir hakikattir ölüm var,\nSana müjdeli sözüm var,\nİyilik yap sen üzülme!\nSonsuz ikinci bölüm var."
              },
              {
                type: 'hadith',
                title: 'Bir Hadis Öğreniyorum',
                emoji: '🌹',
                body: "\"Cennette hiçbir gözün görmediği, hiçbir kulağın duymadığı, hiç kimsenin aklından bile geçirmediği nimetler vardır.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: 'Ahirete İnanmanın Önemi',
                emoji: '🤔',
                items: [
                  "\"İyi ki âhiret var! Ya âhiret olmasaydı?\" Ahiret hayatına inanmak sence neden önemli?",
                  "Dünyada yapılan haksızlıkların ve kötülüklerin karşılıksız kalmaması, iyilerin ödüllendirilmesi fikri dünyadaki barışa nasıl katkı sağlar?"
                ]
              },
              {
                type: 'quiz',
                title: 'Konu Sonu Soru Kartı',
                emoji: '🎯',
                question: "Dünyada yapılan iyi ya da kötü tüm işlerin karşılığını alacağımız, ölümden sonra başlayan o sonsuz hayata ne ad verilir?",
                options: ["Asr-ı Saadet", "Ahiret Hayatı", "Kadir Gecesi", "Tufan Dönemi"],
                correct: "Ahiret Hayatı",
                wisdom: "Doğru cevap! Ölümden sonra başlayan, iyi ve kötü işlerin karşılığını göreceğimiz yeni hayata ahiret hayatı denir."
              }
            ]
          },
          {
            id: "w5_d1_l2",
            lessonNumber: 2,
            title: "Âhiret Hayatına İnanıyorum - Bölüm 2: Dünya ve Ahiret Mutluluğu",
            outcomes: [
              "İslam dininin dünya ve ahiret mutluluğunu hedefleyen kurallarını kavrar.",
              "İbadetlerin hem dünyadaki faydalarını hem de ahiretteki muhteşem ödüllerini analiz eder."
            ],
            wisdomNotes: "İslam dini, barış, huzur ve güzellik dinidir. Dinimiz, dünya ve âhirette mutlu olmamız için kurallar koyar. Yaptığımız ibadetlerin karşılığını sadece âhirette değil dünyada da görürüz. Rabbimiz dünyada yaptığımız güzel işlerin karşılığını, âhirette cennetle ve muhteşem ödüllerle verecektir. Bu sebeple, dünyada iken iyilikler yapmalı, her türlü kötülükten uzak durmalıyız.",
            interactiveActivity: "Abdest, oruç ve namaz gibi ibadetlerin dünyadaki huzurumuza ve sağlığımıza olan katkılarını akıllı tahtada karşılıklı fikir alışverişiyle listeleyelim.",
            slides: [
              {
                type: 'cover',
                title: "Dünya ve Ahiret Mutluluğu",
                subtitle: '5. Hafta • 1. Gün • 2. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Barış, Huzur og Güzellik Dinimiz',
                emoji: '📖',
                body: "İslam dini, barış, huzur ve güzellik dinidir. Dinimiz, dünya ve âhirette mutlu olmamız için kurallar koyar. Yaptığımız ibadetlerin karşılığını sadece âhirette değil dünyada da görürüz."
              },
              {
                type: 'content',
                title: 'İbadetlerin Dünyadaki Karşılıkları',
                emoji: '✨',
                items: [
                  "Abdest alır, temizleniriz.",
                  "Oruç tutar, sağlık buluruz.",
                  "Namaz kılan, huzurla dolar, rahatlarız."
                ]
              },
              {
                type: 'content',
                title: 'Muhteşem Ödüller',
                emoji: '🎁',
                body: "Rabbimiz dünyada yaptığımız güzel işlerin karşılığını, âhirette cennetle ve muhteşem ödüllerle verecektir. Böylece dünyadaki mutluluğumuz âhirette de devam edecektir. Bu sebeple, dünyada iken iyilikler yapmalı, her türlü kötülükten uzak durmalıyız."
              },
              {
                type: 'ayah',
                title: 'Büyük Başarı',
                emoji: '📖',
                body: "\"Allah şöyle diyecek: 'Bugün, doğrulara, doğruluklarının yarar sağlayacağı gündür.' Onlara içinden ırmaklar akan, içinde sonsuza kadar kalacakları cennetler vardır. Allah onlardan memnun olmuş, onlar da Allah'tan memnun olmuşlardır. İşte bu büyük başarıdır.\"",
                reference: "(Maide Süresi, 119. Ayet)"
              },
              {
                type: 'discussion',
                title: 'Cenneti Düşünelim',
                emoji: '🤔',
                items: [
                  "Sence cennet nasıl bir yerdir? Cennette neler olmasını isterdin?",
                  "Kur'an'da ve hadislerde cennetle müjdelenen kişilerin özellikleri (doğru sözlülük, iyilik yapmak) bize bugünkü ahlakımız hakkında ne anlatır?"
                ]
              },
              {
                type: 'quiz',
                title: 'Konu Sonu Soru Kartı',
                emoji: '🎯',
                question: "Maide Suresi 119. ayete göre, içinde sonsuza kadar kalınacak cennetlerin doğrulara verileceği o büyük gün, ne günü olarak nitelendirilmiştir?",
                options: ["Büyük Başarı", "Hüzün Yılı", "Tevhid Günü", "Asr-ı Saadet"],
                correct: "Büyük Başarı",
                wisdom: "Tebrikler! Ayette cennetlerin verileceği ve Allah'ın müminlerden memnun olacağı o gün 'büyük başarı' olarak nitelendirilmiştir."
              }
            ]
          },
          {
            id: "w5_d1_l3",
            lessonNumber: 3,
            title: "Kader ve Kazaya İnanıyorum",
            outcomes: [
              "Kader ve kaza kavramlarının anlamlarını açıklar.",
              "Evrendeki olayların ardındaki ilahi ölçüyü ve olumsuz görünen durumların hayırlı sonuçlarını fark eder.",
              "Kader inancının insana kazandırdığı sorumluluk bilincini ve ümitsizliğe düşmeme duygusunu kavrar."
            ],
            wisdomNotes: "Allah'ın, olmuş ve olacak her şeyi önceden bilmesine 'kader'; olayların vakti gelince meydana gelmesine de 'kaza' denir. Kader ve kazaya inanan insan, Allah'ın her şeyi bildiğine inanır ama aynı zamanda kendi üzerine düşen sorumluluğu yerine getirmek için çalışır. İstediği olmadığında asla ümitsizliğe düşmez.",
            interactiveActivity: "Kar yağması veya tohumun toprağa gömülmesi gibi ilk başta zor veya olumsuz görünen olayların sonradan ortaya çıkan güzel ve bereketli sonuçlarını sınıfça konuşalım.",
            slides: [
              {
                type: 'cover',
                title: "Kader ve Kazaya İnanıyorum",
                subtitle: '5. Hafta • 1. Gün • 3. Ders',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Her Şeydeki Gizli Güzellik',
                emoji: '📖',
                body: "Allah'ın yarattığı her şeyde bir güzellik vardır. Bu güzellik bazen hemen, bazen de sonradan görülür. Örneğin, kar yağdığında yollar kapanabilir, elektrikler kesilebilir. Bazı insanlar bunu görünce acele karar verir, \"Keşke kar yağmasaydı\" derler."
              },
              {
                type: 'content',
                title: 'Kışın Ardındaki İlkbahar Bereketi',
                emoji: '🌱',
                body: "Kış mevsimi biter ve ilkbahar gelir. Kış yağışlı geçtiği için karlar erir, sular çoğalır ve derelerden sular çağlar. Artık bahar bir başka güzeldir; kırlar, bahçeler rengarenktir. Ağaçlar çiçek açar; kuşlar, arılar, kelebekler neşeyle uçar, yiyecekler bereketlenir. İşte o zaman insan, \"Allah iyi ki de kar yağdırmış. Yoksa susuz kalabilirdik!\" diye düşünür ve Allah'a şükreder."
              },
              {
                type: 'content',
                title: 'Toprağın Altındaki Tohum',
                emoji: '🌾',
                body: "Çiçek tohumu toprağa gömülür ve toprağın altında karanlıkta kalır. Bu onun için kötü oldu, nefes alamıyor, çürüyecek sanırız. Aradan zaman geçer; topraktan bir filiz çıktığını görür ve anlarız ki sandığımız gibi değilmiş."
              },
              {
                type: 'content',
                title: 'Acele Karar Vermemek',
                emoji: '💡',
                body: "Hayatta da ilk bakışta hoşumuza gitmeyen şeyler olabilir. Ama bilemeyiz belki de bu durum bizim için iyidir, güzel sonuçları olacaktır. Mesela soğuk havalarda kıyafetlerimize dikkat etmediğimizde hastalanırız. Ama bu hastalık bize sağlığımızın değerini ve bundan sonra daha dikkatli olmamız gerektiğini öğretmiştir. O halde, sonucunu henüz tam olarak göremediğimiz olaylarla ilgili hemen olumsuz şeyler düşünmeyelim, acele karar vermeyelim."
              },
              {
                type: 'content',
                title: 'Allah Her Şeyin En İyisini Bilir',
                emoji: '✨',
                body: "Unutmayalım ki, her şey Allah'ın izniyle ve O'nun kontrolü altında meydana gelir. Allah, her şeyi gören ve bilendir. Allah'ın dediği olur. Allah, geçmişte olanları bildiği gibi, gelecekte olacakları da bilir. Allah her şeyin en iyisini, en güzelini verir."
              },
              {
                type: 'content',
                title: 'Çalışmak ve Dua Etmek',
                emoji: '🤲',
                body: "Biz, Allah'ın verdiği akılla ve gönderdiği bilgiler ışığında en doğruyu yapmaya çalışırız. Sonuçta başarıya ulaşmak için dua ederiz; çünkü başarı Allah'ın yardımıyla elde edilir. Elimizden geleni yapar, Allah'ın bizimle ilgili her zaman en iyi olanı yaratacağına inanırız."
              },
              {
                type: 'content',
                title: 'Kader ve Kaza Tanımları',
                emoji: '💎',
                items: [
                  "KADER: Allah'ın, olmuş ve olacak her şeyi önceden bilmesine denir.",
                  "KAZA: Planlanan olayların vakti gelince meydana gelmesine denir."
                ]
              },
              {
                type: 'content',
                title: 'Kader İnancının İnsana Katkısı',
                emoji: '🤝',
                body: "Kader ve kazaya inanan insan, Allah'ın her şeyi bildiğine, O'nun bilgisi olmaksızın bir yaprağın bile kımıldamadığına inanır; ama aynı zamanda kendi üzerine düşen sorumluluğu yerine getirmek için çalışır. İyiliğin peşinde koşar ve asla tembellik yapmaz. Başarılı olduğunda Allah'a şükreder, istediği olmadığında ise asla ümitsizliğe düşmez, daha çok çalışır."
              },
              {
                type: 'poem',
                title: 'Kader ve Kaza Şiiri',
                emoji: '🌙',
                body: "Yaratan her şeyi bilir,\nGelen hep ölçüyle gelir.\nBunu sezen huzur bulur.\nKorkularından kurtulur."
              },
              {
                type: 'discussion',
                title: 'Hayat Değerlendirmesi',
                emoji: '🤔',
                items: [
                  "İlk başta başımıza geldiğinde çok üzüldüğümüz ama sonradan 'İyi ki de böyle olmuş' dediğimiz bir olay yaşadık mı? Örneklerimizi paylaşalım.",
                  "Kader inancı olan bir insanın başarısızlık karşısında pes etmemesinin ve tembellik yapmamasının sebebi nedir?"
                ]
              },
              {
                type: 'quiz',
                title: 'Kader ve Kaza Bilgi Testi - 1',
                emoji: '🎯',
                question: "Allah'ın, olmuş ve olacak her şeyi zaman ve mekandan bağımsız olarak önceden bilmesine ne ad verilir?",
                options: ["Kaza", "Tebliğ", "Hatim", "Kader"],
                correct: "Kader",
                wisdom: "Doğru cevap! Allah'ın her şeyi önceden bilmesi ve planlaması 'kader' kavramı ile ifade edilir."
              },
              {
                type: 'quiz',
                title: 'Kader ve Kaza Bilgi Testi - 2',
                emoji: '🎯',
                question: "Önceden bilinen ve takdir edilen olayların, vakti ve zamanı gelince Allah'ın kontrolünde gerçekleşip meydana gelmesine ne ad verilir?",
                options: ["Kaza", "Kader", "Kıssa", "İsmet"],
                correct: "Kaza",
                wisdom: "Harika! Önceden bilinen olayların zamanı gelince gerçekleşip meydana gelmesine 'kaza' denir."
              }
            ]
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
            title: "Haccı Öğreniyorum - Kutsal Yolculuğun Esasları",
            outcomes: [
              "Hac ibadetinin anlamını, İslam'daki yerini ve fıkhî şartlarını açıklar.",
              "Hac ile umre arasındaki farkları ayırt ederek hac mekanlarının sembolik değerini kavrar."
            ],
            wisdomNotes: "Hac; ırkı, rengi, dili ne olursa olsun tüm dünya Müslümanlarını tek bir beyaz örtü altında buluşturan, insanlığın barış, eşitlik ve mahşer provası niteliğindeki muazzam bir evrensel kardeşlik kongresidir.",
            interactiveActivity: "Uygulamamız üzerinden 'Mekke ve Medine Kutsal Harita Yolculuğu' yapalım: Ekrana gelen kutsal mekanları (Kâbe, Arafat, Medine) sırasıyla inceleyip buralarda yapılan ibadetlerin felsefesini sınıfça keşfedelim.",
            slides: [
              {
                type: 'content',
                title: "Kutsal Yolculuk: Hac",
                emoji: "🕋",
                body: "Hac, namazlarımızı kılarken yöneldiğimiz Kâbe'yi ve çevresindeki kutsal yerleri ziyaret etmek, orada Allah'a ibadet etmek ve samimiyetle dua etmektir. Müslümanlar yılın belirli günlerinde dünyanın her ülkesinden Mekke'ye gelirler."
              },
              {
                type: 'content',
                title: "Kâbe Sırrı: Kıblemizin Anlamı",
                emoji: "🧭",
                body: "Kâbe bizim kıblemiz,\nNamazda yöneliriz.\nHac Kâbe'yi ziyaret,\nGitmek için dua et.\n\nKâbe, yeryüzünde Allah'a ibadet amacıyla yapılan ilk mabet olup, tüm müminlerin birliğini ve tevhid inancını simgeler."
              },
              {
                type: 'content',
                title: "Büyük Buluşma ve Evrensel Kardeşlik",
                emoji: "🌍",
                body: "Irkı, rengi, dili veya sosyal statüsü ne olursa olsun kadın-erkek bütün Müslümanlar hac sayesinde Mekke'de aynı anda buluşurlar. Birlikte saf tutar, namaz kılar ve Kur'an okurlar. Bu durum İslam'ın evrensel eşitlik dinî olduğunu kanıtlar."
              },
              {
                type: 'content',
                title: "İnsanlığın Barış Kongresi",
                emoji: "🕊️",
                body: "Hac mekanlarında toplanan milyonlarca mümin, sadece kendileri için değil; tüm insanlığın barışı, huzuru ve esenliği için ellerini açıp ortak dualar ederler. Böylece müminler arasındaki kardeşlik ve samimiyet bağları sarsılmaz bir güç kazanır."
              },
              {
                type: 'content',
                title: "Hac Nasıl Yapılır? - İhram Şartı",
                emoji: "🏳️",
                body: "Hac ibadetini yerine getirmek için 'İhram' denilen özel, dikişsiz beyaz kıyafetler giyilir. İhram, insanın bu dünyadaki tüm zenginlik, makam ve rütbelerinden sıyrılıp Allah'ın huzuruna tıpkı mahşerdeki gibi eşit şartlarda çıkmasını simgeler."
              },
              {
                type: 'content',
                title: "Kâbe'nin Etrafında Dönmek: Tavaf",
                emoji: "🔄",
                body: "İhram kıyafetleri giyildikten sonra Kâbe'nin etrafında dualarla yedi kez dönülür. Kâbe etrafındaki her bir dönüşe 'şavt', yedi kez dönmeye ise 'tavaf' denir. Tavaf, evrendeki tüm gezegenlerin bir merkez etrafında dönmesi gibi, müminin de hayatının merkezine Allah'ın rızasını koymasını felsefi olarak ifade eder."
              },
              {
                type: 'content',
                title: "Arafat Vakfesi: Mahşer Provası",
                emoji: "⛰️",
                body: "Haccın en önemli farzlarından biri de Arafat denilen kutsal bölgeye çıkıp belirli bir süre beklemektir (Vakfe). Milyonlarca hacı adayı Arafat'ta aynı anda ellerini açıp af dilerler. Bu sahne, tüm insanlığın hesap günü toplanacağı mahşer meydanını hatırlatır."
              },
              {
                type: 'content',
                title: "Haccın Diğer Adımları",
                emoji: "🐑",
                body: "Arafat'tan sonra Mina bölgesine geçilerek kötülükleri hayatından uzaklaştırmayı simgeleyen 'Şeytan taşlama' görevi yapılır. Ardından Allah'a olan bağlılığın bir nişanesi olarak Kurban kesilir, saç tıraşı olunarak ihramdan çıkılır ve böylece 'hacı' olunur."
              },
              {
                type: 'content',
                title: "Tarihe Yolculuk: İslam'ın Doğduğu Topraklar",
                emoji: "🏜️",
                body: "Hac ibadetini yapanlar, sadece bir görevi yerine getirmezler; aynı zamanda Sevgili Peygamberimizin doğup büyüdüğü, Kur'an-ı Kerim'in ayet ayet indiği ve İslam'ın dünyaya yayıldığı o şanlı kutsal yerleri gözleriyle görerek manevi bir tarih yolculuğuna çıkarlar."
              },
              {
                type: 'content',
                title: "Yeşil Kubbe: Medine Ziyareti",
                emoji: "🟢",
                body: "Mekke'deki görevler tamamlandıktan sonra müminler büyük bir aşkla Medine şehrine geçerler. Orada Sevgili Peygamberimizin kabrinin (Ravza-i Mutahhara) bulunduğu Mescid-i Nebevî'yi ziyaret eder, Efendimize olan selamlarını ve vefalarını sunarlar."
              },
              {
                type: 'content',
                title: "Hac ve Umre Arasındaki Farklar",
                emoji: "💡",
                body: "Çocukların en çok sorduğu sorulardan biri: 'Hocam umre ile hac aynı şey midir?'\n\nCevap: Umre ibateyi de tıpkı hac gibi Kâbe'yi ziyaret etmektir. Ancak Hac sadece yılın belirli günlerinde (Kurban bayramı döneminde) yapılan farz bir ibadetken; Umre yılın her zamanı yapılabilen sünnet bir ibadettir. Ayrıca umrede Arafat vakfesi ve şeytan taşlama yoktur."
              },
              {
                type: 'content',
                title: "Manevi Pınarlar: Zemzem Suyu",
                emoji: "💧",
                body: "Mekke'de Kâbe'nin yakınından çıkan kutsal ve bereketli suyun adı Zemzem'dir. Hazreti Hacer ve oğlu Hazreti İsmail'e Allah'ın bir lütfu olarak çölde çıkan bu su, yüzyıllardır tükenmeyen bir şifa ve bereket kaynağıdır. Hacılar bu suyu sevdiklerine hediye olarak getirirler."
              },
              {
                type: 'content',
                title: "Cennet Taşlanamaz: Hacerü'l-Esved",
                emoji: "⚫",
                body: "Kâbe'nin duvarında yer alan og tavafın başlangıç çizgisini gösteren siyah, parlak taşa Hacerü'l-Esved denir. Peygamberimiz bu taşı selamlamış veya öpmüştür. Hacılar da tavafa başlarken bu taşa selam vererek sözleşmelerini yenilerler."
              },
              {
                type: 'content',
                title: "Ortaokul Soru Köşesi: Herkes Hacca Gitmeli mi?",
                emoji: "❓",
                body: "Soru: 'Hocam maddi durumu kötü olan veya hasta olan birine de hac gitmek farz mıdır?'\n\nCevap: Hayır, İslam adalet dinidir. Hac ibadetinin farz olması için kişinin hem oraya gidip dönebilecek maddi zenginliğe (paraya) sahip olması hem de bu yolculuğa dayanacak bedensel sağlığının yerinde olması şarttır."
              },
              {
                type: 'content',
                title: "Ortaokul Soru Köşesi: Çocuklar Hacı Olur mu?",
                emoji: "👦",
                body: "Soru: 'Hocam bir çocuk ailesiyle hacca giderse hacı olur mu, büyüyünce tekrar gitmesi gerekir mi?'\n\nCevap: Küçük yaşta hacca giden çocuklar harika sevaplar kazanırlar ve 'hacı' unvanını alırlar. Ancak büyüyüp zengin olduklarında, farz olan hac görevini yetişkin bir birey olarak tekrar yerine getirmeleri fıkhen tavsiye edilir."
              },
              {
                type: 'content',
                title: "Ortaokul Soru Köşesi: İhram Kıyafetinin Sırrı",
                emoji: "🥋",
                body: "Soru: 'Hocam hacda neden herkes dikişsiz beyaz kıyafetler (ihram) giyiyor, normal kıyafet yasak mı?'\n\nCevap: İhram, muazzam bir eşitlik simgesidir. Üzerindeki lüks kıyafetleri çıkaran bir kral ile sıradan bir işçi yan yana durduğunda kimin zengin kimin fakir olduğu anlaşılamaz. Ayrıca beyaz ihram, insana bir gün öleceğini ve kefen giyeceğini hatırlatarak kibirden uzaklaştırır."
              },
              {
                type: 'content',
                title: "Hac Yolculuğunun Karakterimize Faydaları",
                emoji: "🎯",
                body: "Hac ibadeti bir gence şu ahlaki özellikleri kazandırır:\n\n• Mahşer kalabalığında sabretmeyi ve insanlara karşı anlayışlı olmayı öğretir.\n• Farklı kültürlerden müminlerle tanışarak sosyalleşme ve empati becerisini artırır.\n• Elindeki nimetlerin kıymetini bilip kibirden uzaklaşmasını sağlar."
              },
              {
                type: 'activity',
                title: "İnteraktif Eğlence: Kâbe Fark Bulmaca",
                emoji: "🧩",
                body: "Dökümanımızdaki Kâbe çizimlerini dikkatle inceleyelim. İki Kâbe resmi arasındaki fıkhî detayları ve çizim farklarını (Örneğin: Hacerü'l-Esved'in yeri, Kâbe kapısının işlemeleri, altın oluğun açısı) sınıfça ilk bulan kazanır!",
                items: [
                  "• Fark 1: Kâbe kapısının altındaki basamak detayları",
                  "• Fark 2: Hacerü'l-Esved taşının gümüş muhafaza çerçevesi",
                  "• Fark 3: Kâbe örtüsü (Kisve) üzerindeki altın yaldızlı hat yazıları"
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Felsefi Düşünce",
                emoji: "🤔",
                items: [
                  "Hac esnasında dünyanın dört bir yanından gelen milyonlarca insanın hiçbir dil engeline takılmadan aynı anda tek bir merkez (Kâbe) etrafında dönmesi, müminlerin vahdet (birlik) felsefesi hakkında bize ne anlatır?",
                  "Maddi durumun haccın ön şartı olması, İslam'ın ibadetlerde adalete ve kulun gücünün yettiği sorumluluklara verdiği önemi nasıl gösterir?"
                ]
              },
              {
                type: 'quiz',
                title: "Kutsal Yolculuk Yarışması",
                emoji: "🎯",
                question: "Hac ibadeti esnasında Kâbe'nin etrafında dualar okuyarak yedi kez dönmek anlamına gelen fıkhî rükün hangisidir?",
                options: ["Vakfe", "Tavaf", "İhram", "Sa'y"],
                correct: "Tavaf",
                wisdom: "Harika cevap! Kâbe etrafındaki yedi dönüşlük kutsal yürüyüşe Tavaf adı verilir."
              }
            ]
          },
          {
            id: "w5_d2_l2",
            lessonNumber: 2,
            title: "Dua Ediyorum - İbadetin Özü ve Muhtaçlık Felsefesi",
            outcomes: [
              "Dua kavramının anlamını, insan hayatındaki psikolojik ve manevi yerini açıklar.",
              "Evrendeki tüm varlıkların Allah'a olan muhtaçlığını felsefi gerekçeleriyle analiz eder."
            ],
            wisdomNotes: "Dua, kulun sınırlı gücüyle Allah'ın sonsuz gücüne sığınmasıdır. Her varlık hayatını sürdürmek için bir diğerine, hepsi birden ise hiçbir şeye muhtaç olmayan yüce Allah'a muhtaçtır.",
            interactiveActivity: "Uygulamamızdaki 'Gündelik Hayat Dua Paneli' üzerinden, gün içinde karşılaştığımız olaylara uygun dua cümlelerini (Elhamdülillah, İnşallah, Geçmiş olsun) eşleştirme yarışı yapalım.",
            slides: [
              {
                type: 'content',
                title: "Dua Ediyorum: Kulun İletişimi",
                emoji: "🤲",
                body: "Dua, Allah'a yalvarmaktır. Her şeyi yaratan, her şeye gücü yeten ve hiçbir şeye muhtaç olmayan sonsuz kudret sahibi Allah'tan istemeye 'dua' denir. Dua, kalbimizin Rabbimizle kurduğu en saf ve en kestirme iletişim yoludur."
              },
              {
                type: 'content',
                title: "Muhtaçlık Felsefesi: Canlılar Dünyası",
                emoji: "🌱",
                body: "Yeryüzündeki bütün canlılar var olmak için havaya, suya, toprağa ve güneşe muhtaçtır. Bir tohum yeşermek için toprağa muhtaçtır. Toprak yağmura, yağmur ise buluta muhtaçtır. Kuşlar uçabilmek için kanada, balıklar yaşayabilmek için suya muhtaçtır."
              },
              {
                type: 'content',
                title: "Biz İnsanlar Neye Muhtacız?",
                emoji: "🧒",
                body: "Dünyaya yeni gelen mini minicik bir bebek, annesinin sütüne ve şefkatli, sıcak kucağına muhtaçtır. Biz yetişkin insanlar da yaşayabilmek için her saniye nefes almaya, aldığımız o nefesi geri vermeye, yiyip içmeye ve korunmaya muhtacız."
              },
              {
                type: 'content',
                title: "Asla Muhtaç Olmayan Tek Varlık: Allah",
                emoji: "💡",
                body: "Yaşayan her varlık, kendi varlığını sürdürebilmek için mutlaka başka bir varlığın yardımına muhtaçtır. Ancak evrende her şey Allah'a muhtaç iken, Allah hiçbir şeye muhtaç değildir. Çünkü O, evrendeki bütün varlıkların tek ve eşsiz yaratıcısıdır."
              },
              {
                type: 'content',
                title: "Allah'ın İzni Olmadan Asla",
                emoji: "✨",
                body: "O hayat vermeden hiçbir canlı yaşayamaz. Allah'ın izni og emri olmadan hiçbir varlık büyüyemez, bir yaprak bile dalından düşemez. Kısacası; istediklerimizi elde etmek, tehlikelerden korunmak ve başarıya ulaşmak için daima Allah'ın yardımına ihtiyacımız vardır. Bu yüzden dua ederiz."
              },
              {
                type: 'content',
                title: "Dua İbadetin Özüdür",
                emoji: "📖",
                body: "Sonsuz merhamet ve şefkat sahibi yüce Allah bizi çok seviyor. Biz de O'nu çok seviyoruz. Güneş her sabah bizim içimizi ısıtmak için doğuyor. Cıvıl cıvıl öten kuşlar, bal yapan arılar, uçuşan kelebekler, rengarenk çiçekler, gürül gürül akan ırmaklar hep bizim için çalışıyor."
              },
              {
                type: 'content',
                title: "Nimetleri Düşünme Zamanı",
                emoji: "🍇",
                body: "Allah şu dünyadaki her şeyi bizim yaşamamız için harika bir düzenle yarattı. Bize koklamak için burun, tutmak için el, tatmak için dil, görmek için göz, duymak için kulak, koşmak için ayak verdi. Tüm bu nimetleri düşünüp şükür ve dua etmemiz için bize en büyük güç olan aklı verdi."
              },
              {
                type: 'content',
                title: "Yiyeceklerin Soframıza Yolculuğu",
                emoji: "🍞",
                body: "Yediklerimizi bir düşünelim. Güzel yiyecekler, ekmekler, meyveler soframıza gelene kadar toprağın altında, çiftçinin elinde ne kadar zahmetli aşamalardan geçiyor değil mi? Onları bize Rabbimizin birer hediyesi olarak gördüğümüz için yemeye başlamadan önce mutlaka 'Besmele' çekiyoruz."
              },
              {
                type: 'content',
                title: "Sofradan Sonra Şükür",
                emoji: "🍽️",
                body: "Yemeğimizi afiyetle yedikten sonra ise kalbimizden gelerek 'Elhamdülillâh' diyerek Allah'a teşekkür ediyoruz. Böylece bize verdiği bu harika nimetlerin eksilmemesi, artarak devam etmesi ve dünyadaki aç insanların da doyması için O'na en güzel duamızı ulaştırıyoruz."
              },
              {
                type: 'content',
                title: "Sofra ve Bereket Duası",
                emoji: "🤲",
                body: "Gelin hep birlikte kalbimizden geçen şu sofra duasını okuyalım:\n\n'Ey bizi yediren, içiren ve yaşatan Rabbimiz! Verdiğin nimetlere hamdolsun. Bize hayırlı ömürler ve helâlinden bol nimetler ihsan eyle, bedenimize sağlık ve afiyet ver. Amin.'"
              },
              {
                type: 'content',
                title: "Peygamberimizin Kolaylık Hadisi",
                emoji: "🌹",
                body: "Sevgili Peygamberimiz bir işe başlarken veya zorlandığında her zaman şu muazzam sözlerle dua ederdi:\n\n'Rabbim kolaylaştır, zorlaştırma. Rabbim işimi güzelleştirerek hayırlısıyla tamamla.'"
              },
              {
                type: 'content',
                title: "Dua Etmek Çok Kolaydır",
                emoji: "🎈",
                body: "Dua etmek için kalıplara veya zor kelimelere ihtiyacımız yoktur. Her zaman ve her yerde dua edebiliriz. Kendi sözcüklerimizle, içimizden geldiği gibi konuşabilir, duygu ve samimi dileklerimizi Allah'a açabiliriz. Çünkü Allah bizim sırlarımızı ve kimsenin bilmediği isteklerimizi hakkıyla bilendir."
              },
              {
                type: 'content',
                title: "Duanın Psikolojik Gücü: Yalnız Değilsin!",
                emoji: "🧠",
                body: "Allah'a dua etmek insana inanılmaz bir iç güven verir, bizi mutlu eder ve ruhumuzu rahatlatır. Dua ettiğimizde Allah'ın bizi gördüğünü, duyduğunu ve bu koca evrende hiçbir zaman tek başımıza, yalnız olmadığımızı kalben hissederiz."
              },
              {
                type: 'content',
                title: "Çalışmak ve Duayı Birleştirmek (Tevekkül)",
                emoji: "🎯",
                body: "Bizler Allah'ın bize verdiği sağlıklı bedenimizle iyi işler yapmak, derslerimize çalışmak ve başarılı olmak için gayret gösteririz. Elimizden geleni yaptıktan sonra ise işimizi kolaylaştırması, zihnimizi açması için Rabbimize dua ederiz. Çalışmadan sadece dua etmek fıkhen yanlıştır; önce emek, sonra dua gelir."
              },
              {
                type: 'content',
                title: "Zorluklar Karşısında İsyan Değil Dua",
                emoji: "🌈",
                body: "Hayatta her zaman mutlu anlar olmaz; bazen canımız sıkılır, hastalanırız veya hüzünleniriz. Bu sıkıntılar karşısında sabır gösteririz. Aynı zamanda dua ederek Allah'tan yardım dileriz. O'nun rahmetinden hiçbir zaman ümit kesmeyiz. Hastalandığımızda doktora gider, tedavi oluruz. Bununla beraber şifayı yaratacak olan Allah'a dua ederiz."
              },
              {
                type: 'content',
                title: "Hayatın Her Anına Yayılan Rahmet",
                emoji: "🌀",
                body: "Gece yatağımıza yatarken, sabah uyanırken, yeni bir yolculuğa çıkarken, heyecanla sınava girerken, üzüldüğümüzde veya çok sevinçli bir haber aldığımızda hep dua ederiz. Sadece kendimiz için değil, arkadaşlarımız, ailemiz ve dünyadaki tüm mazlumlar için dua ederiz. Çünkü sevdiklerimizin de mutlu olmasını isteriz."
              },
              {
                type: 'content',
                title: "Her Anımız Dua ile - Günlük Dua Dili",
                emoji: "🗣️",
                body: "Gündelik hayatta insanlarla olan ilişkilerimizde farkında olmadan sürekli dua sözleri kullanırız. Bu sözler toplumdaki sevgiyi artırır:\n\n• Allah razı olsun! • Allah'a emanet ol! • Geçmiş olsun!\n• Allah şifa versin! • Allah kolaylık versin! • İnşallah\n• Afiyet olsun! • Hayırlı olsun! • Allah kavuştursun!"
              },
              {
                type: 'activity',
                title: "Etkinlik: Dua Balonlarını Uçuralım",
                emoji: "🧩",
                body: "Kitabımızdaki balon boyama etkinliğini interaktif hale getirdik. Hangi durumda hangi dua cümlesini kuracağımızı eşleştirelim:",
                items: [
                  "1. Sınava giren bir arkadaşımıza ne deriz? -> 'Allah zihin açıklığı versin.'",
                  "2. Yemek yiyen bir aile büyüğümüze ne deriz? -> 'Afiyet olsun.'",
                  "3. Bir yerden ayrılırken arkada kalanlara ne deriz? -> 'Allah'a emanet olun / Allah'a ısmarladık.'",
                  "4. Yeni bir ev veya eşya alan komşumuza ne deriz? -> 'Hayırlı olsun.'"
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Felsefi Değerlendirme",
                emoji: "🤔",
                items: [
                  "Tohumun toprağa, toprağın yağmura, insanın ise hepsine muhtaç olması zincirini düşündüğünüzde, evrendeki bu muazzam bağımlılık bize yaratıcının tekliği hakkında ne anlatır?",
                  "Gündelik konuşmalarımızın arasına 'İnşallah', 'Afiyet olsun' veya 'Geçmiş olsun' gibi dua cümlelerini yerleştirmek, insanlar arasındaki saygı ve sevgi bağlarını nasıl güçlendirir?"
                ]
              },
              {
                type: 'quiz',
                title: "Dua Felsefesi Yarışması",
                emoji: "🎯",
                question: "Peygamber Efendimizin (s.a.s) bir işe başlarken işlerin yolunda gitmesi için okuduğu kolaylık duası fıkhen hangisidir?",
                options: ["Allahümme leke sumtü", "Rabbim kolaylaştır, zorlaştırma. İşimi güzellikle tamamla.", "Esselâmü aleyküm ve rahmetullah", "Sübhâne rabbiye'l-azîm"],
                correct: "Rabbim kolaylaştır, zorlaştırma. İşimi güzellikle tamamla.",
                wisdom: "Tebrikler! Efendimiz her işin başında 'Rabbim kolaylaştır, zorlaştırma' diyerek bereket isterdi."
              }
            ]
          },
          {
            id: "w5_d2_l3",
            lessonNumber: 3,
            title: "Peygamberlerin Duaları ve Hasan'ın Kabul Olan Duası",
            outcomes: [
              "Kur'an-ı Kerim'de geçen peygamber dualarının anlamlarını kavrayarak kendi hayatına uyarlar.",
              "Duanın kabul edilme şekillerini ve felsefi arka planını hikayeler üzerinden analiz eder."
            ],
            wisdomNotes: "Allah dualarımıza her zaman cevap verir. Ancak bizim için neyin hayırlı olduğunu bizden daha iyi bildiği için, bazen isteklerimizi tam istediğimiz anda değil, en doğru ve en güzel zamanda veya daha hayırlı bir surette kabul eder.",
            interactiveActivity: "Uygulamamızdaki 'Kendi Duamı Yazıyorum' panelini açalım. Sınıftaki her öğrencinin dökümandaki kalıpları (Allah'ım dünyadaki..., Derslerimde..., Aileme...) kullanarak kendi özgün duasını tasarlamasını sağlayalım.",
            slides: [
              {
                type: 'content',
                title: "Kutlu Rehberlerin Niyazı: Peygamber Duaları",
                emoji: "🌟",
                body: "Kur'an-ı Kerim'de og hadis-i şeriflerde, insanlığa ışık olan mübarek peygamberlerin zor anlarında Allah'a nasıl sığındıklarını anlatan harika dua örnekleri vardır. Onların duaları, bizim de kendi hayatımızda nasıl dua etmemiz gerektiğinin en güzel rehberidir."
              },
              {
                type: 'content',
                title: "Sevgili Peygamberimizin Karakter Duası",
                emoji: "🌹",
                body: "Peygamber Efendimiz Hazreti Muhammed (s.a.s.) her zaman dış güzellikten ziyade ahlak güzelliğine önem verir ve şöyle dua ederdi:\n\n'Allah'ım! Yaratılışımı (fiziksel görünüşümü) güzel yaptığın gibi, benim ahlâkımı da güzelleştir.'"
              },
              {
                type: 'content',
                title: "Hazreti Eyyûb'un Sabır ve Şifa Duası",
                emoji: "🩹",
                body: "Hazreti Eyyûb peygamber çok ağır bir hastalığa yakalanmış, yıllarca sabretmiş ve hiçbir zaman isyan etmemiştir. O'nun dillere destan olan şifa duası Kur'an'da şöyle geçer:\n\n'Rabbim! Şüphesiz ki ben derde (hastalığa) uğradım, sen ise merhametlilerin en merhametlisisin.'"
              },
              {
                type: 'content',
                title: "Hazreti Musa'nın Gönül Ferahlığı Duası",
                emoji: "🌊",
                body: "Hazreti Musa, Firavun'un karşısına çıkıp hakkı savunacağı o zorlu görev öncesinde heyecanını yenmek ve işini kolaylaştırmak için şöyle yalvarmıştı:\n\n'Rabbim! Bize dünyada da âhirette de iyilik ver. Rabbim! Gönlüme ferahlık ver, işimi bana kolaylaştır.'"
              },
              {
                type: 'content',
                title: "Hazreti Süleyman'ın Teşekkür ve Şükür Duası",
                emoji: "👑",
                body: "Kendisine muazzam bir zenginlik ve saltanat verilen Hazreti Süleyman, bu nimetler karşısında şımarmak yerine şükretmek için şöyle dua etmiştir:\n\n'Rabbim! Hem bana hem de anne babama verdiğin nimetlere şükretmemi ve hoşnut olacağın iyi işler yapmamı sağla. Rahmetinle beni iyi kulların arasına kat.'"
              },
              {
                type: 'content',
                title: "Hazreti İsa ve Hazreti Zekeriyya'nın Duaları",
                emoji: "🌾",
                body: "• Hazreti İsa'nın Rızık Duası: 'Allah'ım! Bize rızık ver. Sen rızık verenlerin en hayırlısısın.'\n\n• Hazreti Zekeriyya'nın Yalnızlık Duası: 'Rabbim! Beni bu dünyada yalnız bırakma, bana hayırlı nesiller nasip eyle.'"
              },
              {
                type: 'content',
                title: "Ata Peygamber Hazreti İbrahim'in Duası",
                emoji: "🔥",
                body: "Kâbe'yi inşa eden büyük peygamber Hazreti İbrahim, ailesi ve tüm inananlar için kıyamete kadar okunacak şu muhteşem duayı etmiştir:\n\n'Rabbimiz! Hesap verileceği gün beni, anne babamı ve bütün müminleri bağışla! Allah beni yaratan, bana doğru yolu gösteren, beni yediren, içiren ve hastalandığımda bana şifa verendir.'"
              },
              {
                type: 'content',
                title: "Hasan'ın Duası Hikayesi - Giriş",
                emoji: "👦",
                body: "Hasan, Ramazan Bayramı'na yedi gün kala büyük bir heyecan içindeydi. Ancak babası iş seyahati için İstanbul'daydı ve işleri çok yoğun olduğu için bayramda gelemeyebileceğini söylemişti. Hasan bu duruma çok üzülüyordu. Arkadaşı Mustafa onun bu üzüntüsünü fark etti."
              },
              {
                type: 'content',
                title: "Mustafa'nın Harika Tavsiyesi",
                emoji: "💡",
                body: "Mustafa, Hasan'a dert yanarken akıllıca bir fikir verdi: 'Yapacak bir şey olmaz mı Hasan? Bunun için Allah'a bol bol dua edebilirsin.' Bu fikir Hasan'ın içine umut ışığı yaktı ve o günden sonra babasının bayrama yetişmesi için her gece samimiyetle dua etmeye başladı."
              },
              {
                type: 'content',
                title: "Hayal Kırıklığı ve Annenin Şefkati",
                emoji: "👩‍👦",
                body: "Bayrama az kala annesi Hasan'a babasının gelemeyeceğini söyleyince Hasan ağlayarak: 'Ama ben o kadar da dua etmiştim!' diyerek sızlandı. Annesi şefkatle oğlunun saçını okşadı ve ona duanın felsefesini anlatacak harika bir dondurma örneği verdi."
              },
              {
                type: 'content',
                title: "Dondurma Örneği ve Duanın Felsefesi",
                emoji: "🍦",
                body: "Annesi dedi ki: 'Hani kışın hava çok soğukken benden ısrarla dondurma istemiştin ama ben hasta olmaman için vermemiştim ya. Bu seni sevmediğim anlamına gelmez. Allah da bizim için en hayırlısını bizden iyi bilir. Dualarımıza her zaman cevap verir ama en doğru zamanda ve en hayırlı şekilde.'"
              },
              {
                type: 'content',
                title: "Sürpriz Kapı ve Kabul Olan Dua",
                emoji: "🚪",
                body: "Bayram sabahı Hasan babasız da olsa neşeyle akrabalarıyla bayramlaştı. O esnada kapı zili çaldı. Hasan 'Ben bakarım!' diye fırlayıp kapıyı açtığında karşısında bavuluyla babası duruyordu! Babası işlerini beklenenden erken bitirip sürpriz yapmıştı. Hasan'ın duası tam zamanında kabul olmuştu."
              },
              {
                type: 'content',
                title: "Duanın Kabul Edilme Şekilleri",
                emoji: "🧠",
                body: "Hasan'ın hikayesinden öğreniyoruz ki, Allah dualarımızı hiçbir zaman yanıtsız bırakmaz. Ancak duanın kabulü 3 şekilde olur:\n\n1. İsteğimizi tam istediğimiz an aynen verir.\n2. Bizim için zararlıysa vermez, yerine ahirette daha büyük sevap verir.\n3. Bizim için en doğru og hayırlı zamanda, sürpriz bir şekilde verir."
              },
              {
                type: 'activity',
                title: "Etkinlik: Haydi Şimdi Duaya!",
                emoji: "🧩",
                body: "Dökümanımızdaki renkli dua kartlarını kendi kelimelerimizle tamamlayalım:",
                items: [
                  "• Allah'ım! Dünyadaki... (tüm çocuklara barış ve huzur ver.)",
                  "• Yüce Allah'ım! Derslerimde... (bana zihin açıklığı ve başarı ihsan eyle.)",
                  "• Rabbim! Bütün hastalara... (acil şifalar ve dayanma gücü ver.)",
                  "• Yüce Rabbim! Seni çok... (seviyorum, beni senin yolundan ayırma.)"
                ]
              },
              {
                type: 'discussion',
                title: "Ders Sonu Değerlendirme Soruları",
                emoji: "🤔",
                items: [
                  "Hasan'ın annesinin verdiği 'kışın dondurma isteme' örneği, dualarımızın bazen neden hemen gerçekleşmediğini anlamamız konusunda bize nasıl bir bakış açısı kazandırır?",
                  "Peygamberlerin zor durumlarda ilk olarak paraya veya güce değil, dua ile Allah'a sığınmaları onların iman felsefesi hakkında bize ne öğretir?"
                ]
              },
              {
                type: 'quiz',
                title: "Mübarek Dualar Yarışması - 1",
                emoji: "🎯",
                question: "Kur'an-ı Kerim'de geçen 'Rabbimiz! Hesap verileceği gün beni, anne babamı ve müminleri bağışla!' duası hangi peygambere aittir?",
                options: ["Hazreti Musa", "Hazreti İbrahim", "Hazreti Eyyûb", "Hazreti Süleyman"],
                correct: "Hazreti İbrahim",
                wisdom: "Harika cevap! Namazların son oturuşunda okuduğumuz Rabbenâğfirlî duası Hazreti İbrahim'in Kur'an'daki duasıdır."
              },
              {
                type: 'quiz',
                title: "Mübarek Dualar Yarışması - 2",
                emoji: "🎯",
                question: "Hazreti Eyyûb peygamberin amansız bir hastalığa yakalandığında Allah'a sığındığı sabır ve şifa cümlesi hangisidir?",
                options: ["Rabbim gönlüme ferahlık ver", "Şüphesiz ki ben derde uğradım, sen ise merhametlilerin en merhametlisisin", "Bize dünyada da ahirette de iyilik ver", "Rabbim beni yalnız bırakma"],
                correct: "Şüphesiz ki ben derde uğradım, sen ise merhametlilerin en merhametlisisin",
                wisdom: "Tebrikler! Hazreti Eyyûb bu asil ve sabırlı duasıyla tüm insanlığa şifa ve teslimiyet rehberi olmuştur."
              }
            ]
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
            title: "Peygamberimizin Örnek Kişiliği - Bölüm 1",
            outcomes: [
              "Peygamber Efendimizin (s.a.v) 'Üsve-i Hasene' (en güzel örnek) olma vasfını açıklar.",
              "Sahabi kavramını öğrenir; Peygamberimizin dostluk, akrabalık ve komşuluk ilişkilerindeki ahlakını kavrar."
            ],
            wisdomNotes: "Yüce Allah (c.c), 'Andolsun Allah'ın Resulünde sizin için güzel bir örnek vardır.' buyurmuştur. Peygamber Efendimiz (s.a.v) en samimi dost, en iyi akraba ve komşuydu. Arkadaşlarına danışır, komşularını ziyaret eder, akrabalık bağlarına büyük önem verirdi.",
            interactiveActivity: "Komşularımıza ve akrabalarımıza karşı ahlaki görevlerimizi sınıfta listeleyelim.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Örnek Kişiliği",
                subtitle: 'Bölüm 1: En Güzel Model ve Dost',
                emoji: '🕌'
              },
              {
                type: 'ayah',
                title: 'En Güzel Örnek: Üsve-i Hasene',
                emoji: '📖',
                body: "\"Andolsun Allah'ın Resulünde sizin için güzel bir örnek vardır.\"",
                reference: "(Ahzab Sûresi, 21. Âyet)"
              },
              {
                type: 'content',
                title: 'Söz ve Davranış Uyumu',
                emoji: '✨',
                body: "Peygamber Efendimiz (s.a.v), sadece sözleriyle öğüt veren biri değildi. Söylediği her güzel sözü önce kendi hayatında sergiler, insanlara öyle örnek olurdu. İnsanlara öğrettiği adalet, dürüstlük ve merhamet ilkelerini en başta kendi evinde ve sokağında uygulardı."
              },
              {
                type: 'content',
                title: 'İbadette de Zirve Model',
                emoji: '🤲',
                body: "O, Yüce Allah'a (c.c) çok şükreden bir kuldu. Herkesten çok çalışır, herkesten çok ibadet ederdi. Geceleri ayakları şişene kadar namaz kılardı. Rabbine güveni sonsuzdu. Bizler ibadetteki sabrı ve samimiyeti de ondan öğreniriz."
              },
              {
                type: 'content',
                title: 'Sahabi Ne Demektir?',
                emoji: '👥',
                body: "Peygamberimizi (s.a.v) hayattayken görmüş, onunla konuşmuş, ona iman etmiş ve Müslüman olarak vefat etmiş olan çok kıymetli arkadaşlarına, dostlarına \"Sahabi\" (Ashab) denir."
              },
              {
                type: 'content',
                title: 'En Samimi ve Vefakar Dost',
                emoji: '🤝',
                body: "Peygamberimiz insanları çok sever, arkadaşlarına ve sahabilerine büyük değer verirdi. En yakın dostu, zor zamanlarında onu hiç yalnız bırakmayan Hz. Ebu Bekir'di (r.a). Hz. Ömer (r.a), Hz. Osman (r.a), Hz. Ali (r.a), Ebu Zer (r.a), Talha (r.a) ve Zübeyir (r.a) de onun en yakın ve güvendiği arkadaşlarıydı."
              },
              {
                type: 'content',
                title: 'Fikirlere Değer Veren Lider',
                emoji: '🗣️',
                body: "Efendimiz (s.a.v) her şeyi kendisi bilmesine veya vahiy almasına rağmen, arkadaşlarına saygı duyar, yapacağı işlerde, savaş stratejilerinde daima onların fikirlerini alır ve onlara danışırdı (İstişare)."
              },
              {
                type: 'content',
                title: 'Akrabaya Gözetim (Sıla-i Rahim)',
                emoji: '🏠',
                body: "Akrabalık bağlarına büyük önem verir, akraba ile küsmeye ve ilişkiyi kesmeye kesinlikle müsaade etmezdi. Sütannesi Hz. Halime'ye ve süt kardeşlerine her zaman saygı duyar, onlarla yakından ilgilenir, ihsanda bulunurdu."
              },
              {
                type: 'content',
                title: 'Mükemmel Bir Komşu',
                emoji: '🏡',
                body: "Peygamberimizin (s.a.v) o nazik ve görgülü tavrından komşuları da büyük bir pay alırdı. O, komşusunu rahatsız etmeyen, evde pişen yemekten onlara da ikram eden, iyiliksever ve daima güleryüzlü bir komşuydu."
              },
              {
                type: 'content',
                title: 'Hastalıkta ve Sağlıkta Ziyaret',
                emoji: '💐',
                body: "Komşularının sürekli hatırlarını sorar, hasta olduklarında onları ziyarete (geçmiş olsuna) gider, dertleriyle dertlenirdi. Hatta kendisine kötülük eden Yahudi bir komşusu hastalandığında bile nezaketle onu ziyarete gitmiş, komşusu bu ahlak karşısında eriyip Müslüman olmuştur."
              },
              {
                type: 'hadith',
                title: 'Küskünlük Sınırı',
                emoji: '🌹',
                body: "\"Bir Müslümanın Müslüman kardeşine (darılıp) üç günden fazla dargın durması helal değildir.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'hadith',
                title: 'Komşu Hakkı',
                emoji: '🌹',
                body: "\"Komşusu açken tok yatan (ve komşusuyla ilgilenmeyen) bizden değildir.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: 'Komşuluk Ahlakını Konuşalım',
                emoji: '🤔',
                items: [
                  "Peygamber Efendimizin (s.a.v) kendisine çöp döken komşusunu bile hasta olduğunda ziyarete gitmesi, İslam ahlakındaki affedicilik ve komşuluk hakkı konusunda bize ne gibi bir ders verir?",
                  "Apartman hayatında yaşadığımız günümüzde, Peygamberimizin komşuluk sünnetlerini nasıl yerine getirebiliriz?"
                ]
              },
              {
                type: 'quiz',
                title: 'Dostluk ve Örnek Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimizi (s.a.v) hayattayken gören, onunla sohbet eden ve ona inanarak Müslüman olarak yaşayan arkadaşlarına ne ad verilir?",
                options: ["Tâbiin", "Ensar", "Sahabi", "Muhacir"],
                correct: "Sahabi",
                wisdom: "Harika! Efendimizin yol arkadaşlarına, dostlarına Sahabi denir."
              },
              {
                type: 'quiz',
                title: 'Dostluk ve Örnek Yarışması - 2',
                emoji: '🎯',
                question: "Kur'an-ı Kerim'de Ahzab Suresinde Peygamber Efendimiz için kullanılan ve 'En Güzel Örnek' anlamına gelen sıfat hangisidir?",
                options: ["Hatemü'l-Enbiya", "Muhammedü'l-Emin", "Üsve-i Hasene", "Rahmeten li'l-Alemin"],
                correct: "Üsve-i Hasene",
                wisdom: "Mükemmel bildin! Üsve-i Hasene, her konuda insanlığa en güzel rol model ve örnek demektir."
              }
            ]
          },
          {
            id: "w5_d3_l2",
            lessonNumber: 2,
            title: "Peygamberimizin Örnek Kişiliği - Bölüm 2",
            outcomes: [
              "Peygamber Efendimizin (s.a.v) şefkatli baba ve sevecen dede modelini analiz eder.",
              "Çocuklara verdiği mutlak değeri ve sevgiyi somut hatıralarla açıklar."
            ],
            wisdomNotes: "Sevgili Peygamberimiz (s.a.v) çocuklarına çok şefkatli bir babaydı. Torunları Hz. Hasan (r.a) ve Hz. Hüseyin'i (r.a) kucaklayıp bağrına basardı. Sadece kendi çocuklarını değil, bütün çocukları çok sever, onlara değer verirdi. Mescidinde daima çocukların olmasını isterdi. Kızı Hz. Fâtıma (r.anha) yanına geldiğinde ayağa kalkıp karşılardı.",
            interactiveActivity: "Peygamber Efendimizin (s.a.v) torunları Hz. Hasan (r.a) ve Hz. Hüseyin (r.a) ile mescidde yaşadığı minber hatırasını okuyup, çocuk sevgisinin dindeki yerini cevaplayalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Örnek Kişiliği",
                subtitle: 'Bölüm 2: Çocukların Sevgilisi Peygamberim',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'En Şefkatli Baba',
                emoji: '📖',
                body: "Sevgili Peygamberimiz (s.a.v) evlatlarına karşı dünyadaki en merhametli ve en şefkatli babaydı. Evde otoritesini bağırmakla veya asık suratla değil; daima güler yüzle, sabırla, sevgiyle ve hoşgörüyle sağlardı."
              },
              {
                type: 'content',
                title: 'Çocukların Fikrine Saygı',
                emoji: '💡',
                body: "Aile içinde bir karar alınacağı zaman çocuklarını küçümsemez, 'Sen daha küçüksün karışma' demezdi. Onların ne düşündüğünü merak eder, onların da fikrini alıp onlara değer verdiğini hissettirirdi."
              },
              {
                type: 'content',
                title: 'Kız Çocuklarına Devrim Gibi Değer',
                emoji: '👧',
                body: "Kız çocuklarının diri diri gömüldüğü ve utanç sayıldığı vahşi cahiliye döneminde Peygamber Efendimiz (s.a.v), kızı Hz. Fâtıma (r.anha) odasına girdiğinde saygıyla ayağa kalkar, onu alnından öper ve kendi yerine oturtarak tüm dünyaya kadın hakları dersi verirdi."
              },
              {
                type: 'content',
                title: 'Sevecen Bir Dede',
                emoji: '👴',
                body: "Peygamberimiz (s.a.v) torunlarına karşı da çok sevecen ve oyuncu bir dedeydi. Torunları Hz. Hasan (r.a) ve Hz. Hüseyin'i (r.a) çok sever, onlarla evde oyunlar oynar, onları sırtına alır atçılık oynar, kucaklayıp bağrına basar, öper ve dualar ederdi."
              },
              {
                type: 'content',
                title: 'Muazzam Bir Çocuk Sevgisi',
                emoji: '🌸',
                body: "Peygamberimiz sadece kendi çocuklarını ve torunlarını değil, sokaktaki bütün çocukları çok sever, onlara büyük bir birey gibi selam verirdi. Mevsimin çıkan ilk turfanda meyvesini daima meclisteki en küçük çocuğa ikram ederdi."
              },
              {
                type: 'content',
                title: 'Cami ve Çocuk Neşesi',
                emoji: '🕌',
                body: "Çocukların camide ses yapmasına kızanların aksine, Peygamberimiz (s.a.v) mescidinde daima çocukların cıvıl cıvıl seslerinin olmasını isterdi. Secdedeyken torunları sırtına bindiğinde, onlar inene kadar secdesini uzatır, çocukları asla yere atmazdı."
              },
              {
                type: 'content',
                title: 'Mesciddeki Meşhur Minber Hatırası',
                emoji: '👶',
                body: "Bir Cuma günü mescidde hutbe veriyordu, herkes pür dikkat onu dinlemekteydi. O sırada küçük Hasan ve Hüseyin, ayaklarına takılan uzun elbiseleriyle düşe kalka mescide girdiler. Küçükler minberdeki dedelerine ulaşmakta kararlı görünüyorlardı."
              },
              {
                type: 'content',
                title: 'Hutbeyi Bölen Şefkat',
                emoji: '🫂',
                body: "Peygamber Efendimizin (s.a.v) torunlarına karşı hissettiği sevgi öylesine yoğundu ki, onları görmezden gelerek o resmi konuşmasına devam edemedi. Cemaatin şaşkın bakışları arasında minberinden indi, iki yavruyu kucaklayıp bağrına bastı."
              },
              {
                type: 'hadith',
                title: 'Müteessir Bir Babanın Sözleri',
                emoji: '🌹',
                body: "Hutbesini tamamlamak üzere torunlarıyla birlikte tekrar minbere çıktığında cemaate gülümsedi ve şöyle dedi:\n\"Allah, 'mallarınız ve çocuklarınız imtihan vesilesidir' derken ne kadar doğru söylemiş! Şu iki yavrunun düşe kalka yürüyüşünü görünce dayanamadım da sözümü keserek onları kucağıma aldım.\""
              },
              {
                type: 'content',
                title: 'Cabir\'in (r.a) Unutulmaz Hatırası',
                emoji: '✨',
                body: "Sahabeden küçük Cabir (r.a) başından geçen mutlu bir hatırayı şöyle anlatmıştı: \"Resûlullah (s.a.v) ile namazı kıldım ve camiden çıktım. Yolda onu çocuklar karşıladılar. Onların her birinin yanaklarını teker teker büyük bir şefkatle okşamaya başladı.\""
              },
              {
                type: 'content',
                title: 'Güzel Kokulu Eller',
                emoji: '🌿',
                body: "Cabir (r.a) devam ediyor: \"Sıra bana gelince benim de yanağımı okşadı. Elinde öyle ferah bir serinlik ve öyle hoş bir koku hissettim ki, sanki mübarek elini yeni açılmış güzel koku satan birinin sepetinden çıkarmış gibiydi. O kokuyu ve sevgiyi hiç unutmadım.\""
              },
              {
                type: 'content',
                title: 'Üsâme b. Zeyd (r.a) Anlatıyor',
                emoji: '💡',
                body: "Zeyd'in oğlu küçük Üsame (r.a) şöyle anlatır: \"Hazreti Peygamber (s.a.v.) bir dizine beni, bir dizine de kendi öz torunu Hz. Hasan'ı (r.a) oturtur, ikimizi hiç ayırmadan birden bağrına basardı.\""
              },
              {
                type: 'hadith',
                title: 'Çocuklara Edilen Dua',
                emoji: '🌹',
                body: "Peygamberimiz Üsame (r.a) ve Hz. Hasan'ı (r.a) kucaklayıp şöyle dua ederdi:\n\"Rabbim! Bunlara şefkat ve merhametinle muamele eyle. Çünkü ben de bunlara karşı çok merhametliyim.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: 'Sevgi Dili Üzerine Konuşalım',
                emoji: '🤔',
                items: [
                  "Kız çocuklarına değer verilmeyen bir toplumda, Peygamber Efendimizin (s.a.v) kızı gelince ayağa kalkıp ona yer vermesi nasıl bir ahlaki devrimdir?",
                  "Camide ses yapan çocuklara kızmak yerine, secdesini uzatan ve hutbesini bölüp onları kucaklayan bir Peygamberin ümmeti olarak çocuklara nasıl davranmalıyız?"
                ]
              },
              {
                type: 'quiz',
                title: 'Peygamberimizin Çocuk Sevgisi - 1',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v) odaya her girdiğinde ayağa kalkarak saygıyla karşıladığı, alnından öpüp kendi yerine oturttuğu kızı kimdir?",
                options: ["Hz. Hatice", "Hz. Aişe", "Hz. Fatıma (r.anha)", "Hz. Zeynep"],
                correct: "Hz. Fatıma (r.anha)",
                wisdom: "Harika! Efendimiz en küçük kızı Hz. Fatıma'ya müthiş bir sevgi ve saygı göstererek tüm dünyaya örnek olmuştur."
              },
              {
                type: 'quiz',
                title: 'Peygamberimizin Çocuk Sevgisi - 2',
                emoji: '🎯',
                question: "Peygamber Efendimizin camide hutbe okurken onları düşe kalka yürürken görüp dayanamayarak minberden inip kucakladığı iki sevgili torunu kimlerdir?",
                options: ["İbrahim ve Kasım", "Zeyd ve Usame", "Hz. Hasan ve Hz. Hüseyin", "Ali ve Abdullah"],
                correct: "Hz. Hasan ve Hz. Hüseyin",
                wisdom: "Mükemmel! Hz. Hasan (r.a) ve Hz. Hüseyin (r.a), Efendimizin 'Onlar benim dünyadaki iki reyhanımdır' dediği torunlarıdır."
              }
            ]
          },
          {
            id: "w5_d3_l3",
            lessonNumber: 3,
            title: "Peygamberimizin Örnek Kişiliği - Bölüm 3",
            outcomes: [
              "Peygamber Efendimizin (s.a.v) dürüstlük, alçak gönüllülük, cömertlik, sabır, vefa ve adalet sıfatlarını hatıralarla açıklar.",
              "Enes bin Malik'in (r.a) azarlanmama hatırasını ve Abdullah'ın (r.a) hurma kıssasını ahlaki açıdan yorumlar."
            ],
            wisdomNotes: "Peygamberimiz (s.a.v) dürüst, alçak gönüllü, cömert, adaletli, vefalı ve sabırlıydı. İsraf etmez, misafirperverdi. Kendi işini kendisi yapar, kimseye yük olmazdı. Hataları yüze vurmaz, isim vermeden topluca uyarırdı. Kendisine yapılan iyiliği unutmazdı. Daima âdil davranırdı.",
            interactiveActivity: "Bulmaca Kelime Avı: Tabloda gizlenmiş olan 'GÜVENİLİRLİK, SABIR, DÜRÜSTLÜK, HOŞGÖRÜ, ŞEFKAT, ADALET, MERHAMET, VEFA' kavramlarını bulalım.",
            slides: [
              {
                type: 'cover',
                title: "Peygamberimizin Örnek Kişiliği",
                subtitle: 'Bölüm 3: Kusursuz Ahlak ve Karakter',
                emoji: '🕌'
              },
              {
                type: 'content',
                title: 'Özü Sözü Bir: Güvenilir Peygamberim',
                emoji: '📖',
                body: "Hazreti Muhammed (s.a.v), çocukluğundan itibaren hiçbir zaman doğruluktan ayrılmamıştı. Şaka bile olsa yalandan hiç hoşlanmazdı. Bütün hayatı boyunca doğru sözlülüğü ile insanların mutlak güvenini kazanmış, düşmanları bile onun eşyalarına güvenmiştir."
              },
              {
                type: 'content',
                title: 'İnsanların En İyisi Kimdir?',
                emoji: '💎',
                body: "Peygamberimize sahabiler tarafından 'İnsanların en iyisi kimdir?' diye sorulmuştu. Peygamberimiz dış görünüşe veya paraya atıf yapmadan: 'Temiz kalpli ve doğru sözlü olanlardır' diye cevap vermiştir."
              },
              {
                type: 'content',
                title: 'Yalana Karşı Net Tavır ve Çocuk Eğitimi',
                emoji: '💡',
                body: "Sahabeden Abdullah (r.a) şöyle anlatıyor: \"Peygamberimiz evimizde misafir olduğu bir sırada annem, 'Gel sana bir şey vereceğim' diye beni yanına çağırdı.\""
              },
              {
                type: 'content',
                title: 'Çocuğa Yalan Söylenmez',
                emoji: '🚫',
                body: "Peygamberimiz (s.a.v) anneme, 'Çocuğa gerçekten ne vermek istedin?' diye sorunca annem, 'Ona hurma vereceğim' diye cevap verdi. Bunun üzerine Peygamberimiz, 'Dikkat et! Eğer onu kandırıp söylediğin gibi bir şey vermeseydin, senin amel defterine bir yalan günahı yazılırdı' buyurdu."
              },
              {
                type: 'hadith',
                title: 'Dosdoğru Ol',
                emoji: '🌹',
                body: "\"Rabbim Yüce Allah'tır de, sonra (her işinde ve sözünde) dosdoğru ol.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'content',
                title: 'Alçak Gönüllü (Mütevazı) Lider',
                emoji: '✨',
                body: "Hazreti Muhammed (s.a.v), peygamber olmasına ve devlet başkanı statüsünde bulunmasına rağmen hiçbir şekilde kendisini insanlardan farklı, ayrıcalıklı ve üstün görmezdi. Kibirlenmekten nefret ederdi."
              },
              {
                type: 'content',
                title: 'Halkın İçinden Biri',
                emoji: '🏕️',
                body: "Yabancı bir elçi Mescide geldiğinde, ashabın arasında sıradan kıyafetlerle oturan Peygamberimizi tanıyamaz, 'Muhammed hanginiz?' diye sormak zorunda kalırdı. Başkaları konuşurken sözlerini asla kesmez, fakirleri bile sonuna kadar dikkatle dinlerdi."
              },
              {
                type: 'content',
                title: 'Kendi İşini Kendi Yapardı',
                emoji: '🧹',
                body: "Peygamberimiz (s.a.v) kibirli davranmaz, sade eşyalar kullanırdı. Kendi işini kendisi yapar, söküğünü diker, ayakkabısını tamir eder ve kimseye yük olmazdı. Yolculukta yemek için işbölümü yapıldığında 'Ben de ateş için çalı çırpı toplayayım' diyerek işe ortak olurdu."
              },
              {
                type: 'content',
                title: 'Eli Açık ve Gönlü Zengin',
                emoji: '🎁',
                body: "Peygamberimiz dünyanın en cömert insanıydı. Yüce Allah'ın kendisine verdiği nimetleri dağıtmayı, sevindirmeyi severdi. Kendisinden bir şey istendiği zaman 'Hayır' demez, asla boş çevirmezdi."
              },
              {
                type: 'content',
                title: 'Hediye Edilen Kumaş',
                emoji: '🧥',
                body: "Bir gün Peygamber Efendimize (s.a.v) bir parça kumaş hediye getirilmişti. Aslında o kumaşa ihtiyacı da vardı. Fakat yanında oturan arkadaşlarından biri \"Bu ne güzel kumaş!\" deyince Peygamberimiz kumaşı hiç düşünmeden hemen ona hediye etmişti."
              },
              {
                type: 'content',
                title: 'Sabreden ve Hoşgören',
                emoji: '🤝',
                body: "Hayatı boyunca (boykotlar, savaşlar, ölümler) yaşadığı sıkıntılar karşısında hep sabrederek mücadele etti. Hiçbir zaman ümitsizliğe kapılmadı. Gördüğü kusurları asla insanların yüzüne vurmaz, kimseyi utandırmazdı. Uyarılarını genel olarak 'Bazı kimselere ne oluyor ki...' diye isim vermeden yapardı."
              },
              {
                type: 'content',
                title: 'Enes Bin Malik\'in (r.a) Şahitliği',
                emoji: '👦',
                body: "Çocukluğundan itibaren 10 yıl Peygamberimizin hizmetinde bulunan küçük Enes (r.a) şöyle demiştir: \"Peygamberimiz bana bir gün bile 'Of!' demedi. Yaptığım yanlış bir şey için 'Bunu niye yaptın?', yapmadığım bir iş için de 'Niye yapmadın?' diye beni bir kez bile azarlamadı.\""
              },
              {
                type: 'content',
                title: 'Eşsiz Vefa Duygusu',
                emoji: '❤️',
                body: "Kendisine yapılan iyiliği hiçbir zaman unutmazdı. Sütannesi Hz. Halime yıllar sonra ziyarete geldiği zaman, heyecanla ayağa kalkar, \"Anneciğim!\" diyerek karşılar, üzerine oturması için kendi hırkasını yere sererdi."
              },
              {
                type: 'content',
                title: 'Hz. Hatice\'ye Olan Hasreti',
                emoji: '🌹',
                body: "Vefat eden sevgili eşi Hazreti Hatice'yi (r.anha) daima sevgiyle ve hasretle anardı. Mekke'den Medine'ye geçtikten yıllar sonra bile, ne zaman bir kurban kesse, kurbanın etinden Hazreti Hatice'nin akrabalarına ve arkadaşlarına da vefa olarak mutlaka gönderirdi."
              },
              {
                type: 'content',
                title: 'Şefkatli, Merhametli ve Âdil',
                emoji: '⚖️',
                body: "Peygamberimiz yetimlerle özellikle ilgilenirdi. İnsanlar arasında asla ayrım yapmaz, zengin-fakir hakkını korurdu. Kuralları en yakınları (kızı bile) olsa herkese eşit bir şekilde tavizsiz uygulardı."
              },
              {
                type: 'content',
                title: 'Hayvan Haklarına Saygı',
                emoji: '🐪',
                body: "Sadece insanlara değil, doğaya ve hayvanlara da merhametliydi. Bir yolculukta iki yavrusu olan bir serçenin yavrularını yuvasından alan sahabiye kızarak, \"Bu kuşu, yavrusunun acısı ile kıvrandıran kim? Hemen yavrularını yuvasına geri versin!\" buyurdu. Aç bırakılmış bir deve görünce sahibini sertçe uyardı."
              },
              {
                type: 'ayah',
                title: 'Âlemlere Rahmet',
                emoji: '📖',
                body: "\"(Ey Muhammed) Biz seni ancak âlemlere rahmet olarak gönderdik.\"",
                reference: "(Enbiya Sûresi, 107. Ayet)"
              },
              {
                type: 'hadith',
                title: 'Merhametin Karşılığı',
                emoji: '🌹',
                body: "\"Merhamet edenlere Yüce Allah da merhamet eder. Siz yeryüzündekilere merhamet edin ki, gökteki de size merhamet etsin.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: 'Ahlaki Modelleri Yorumlayalım',
                emoji: '🤔',
                items: [
                  "Peygamberimizin Enes bin Malik'i (r.a) 10 yıl boyunca bir kez bile azarlamamış olması, onun öfke kontrolü ve çocuk eğitimi hakkında bize ne öğretir?",
                  "Sırf çocuk ağlamasın diye 'Sana hurma vereceğim' deyip kandırmayı 'yalan günahı' sayan bir dinin mensubu olarak, günlük hayattaki küçük yalanlarımızı nasıl düzeltmeliyiz?"
                ]
              },
              {
                type: 'quiz',
                title: 'Örnek Ahlak Yarışması - 1',
                emoji: '🎯',
                question: "Peygamber Efendimizin 10 yıl hizmetinde bulunmasına rağmen 'Bana bir kez bile öf demedi, beni hiç azarlamadı' diyerek onun eşsiz hoşgörüsünü anlatan sahabi kimdir?",
                options: ["Hz. Ali (r.a)", "Enes bin Malik (r.a)", "Abdullah bin Ömer (r.a)", "Hz. Zeyd (r.a)"],
                correct: "Enes bin Malik (r.a)",
                wisdom: "Mükemmel! Enes bin Malik (r.a), Efendimizin evinde büyümüş ve onun sabrına en yakından şahit olmuştur."
              },
              {
                type: 'quiz',
                title: 'Örnek Ahlak Yarışması - 2',
                emoji: '🎯',
                question: "Peygamber Efendimizin (s.a.v), yıllar sonra kendisini ziyarete gelen sütannesi Hz. Halime'yi gördüğünde ayağa kalkıp hırkasını altına sermesi onun hangi ahlaki özelliğini gösterir?",
                options: ["Cesaretini", "Adaletini", "Vefakârlığını", "Çalışkanlığını"],
                correct: "Vefakârlığını",
                wisdom: "Harika! Yapılan iyiliği asla unutmamak ve kıymet bilmek muazzam bir vefa örneğidir."
              }
            ]
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
            title: "Yalan Söyleme - Güven Toplumunu Yıkan Ahlaki Hastalık",
            outcomes: [
              "Yalanın güven toplumunu yok eden, insanı değersizleştiren bir ahlaki hastalık olduğunu fark eder.",
              "Her şart ve koşulda doğruluğu (sıdk) ve dürüstlüğü savunmanın karakter üzerindeki yapıcı gücünü analiz eder.",
              "Yalancılığın toplumsal bağları çürüten bir kriz olduğunu, kısa vadeli menfaatlerin uzun vadede saygınlığı nasıl yok ettiğini kavrar."
            ],
            wisdomNotes: "Yalan, sadece bireysel bir kusur değil; insanlar arasındaki güven bağlarını kökten çürüten toplumsal bir krizdir. Kısa vadeli bir cezadan kaçmak veya anlık bir menfaat elde etmek için yalana başvurmak, uzun vadede insanın en büyük sermayesi olan saygınlığını ve dürüstlüğünü yok eder. Müminin karakter direği her şartta doğruluğu (sıdk) savunmaktır.",
            interactiveActivity: "Sınıf içinde 'Uzun Vadeli Terazi' adında bir analiz yapalım: Bir hatayı gizlemek için yalan söyleyen birinin anlık kazancıyla, dürüst davranıp gerçeği söyleyen birinin uzun vadede kazandığı saygınlığı tahtada karşılaştıralım.",
            slides: [
              {
                type: 'cover',
                title: "Yalan Söyleme ve Güven Krizi",
                subtitle: "5. Hafta • 4. Gün • 1. Ders",
                emoji: "🚫"
              },
              {
                type: 'content',
                title: "Ahlaki Bir Hastalık: Yalan",
                emoji: "📖",
                body: "Yalan, gerçeği bilerek çarpıtmak, insanları aldatmak ve özü sözü bir olmamaktır. İslam ahlakında yalan, insan ruhunu kirleten ve bireyi kendi gözünde ve toplum önünde değersizleştiren çok ciddi bir ahlaki hastalık olarak kabul edilir."
              },
              {
                type: 'content',
                title: "Güven Toplumunun Yok Oluşu",
                emoji: "⚠️",
                body: "Bir toplumun huzur içinde yaşayabilmesi ancak insanların birbirine güvenmesiyle mümkündür. Yalancılık, bireysel bir kusur olarak kalmaz; dostlukları, aile bağlarını ve ticari ilişkileri temelinden sarsarak toplumsal güveni tamamen yok eden bir krize dönüşür."
              },
              {
                type: 'content',
                title: "Kısa Vadeli Menfaat ve Uzun Vadeli Kayıp",
                emoji: "💡",
                body: "İnsanlar bazen zor bir durumdan kurtulmak, azarlanmamak veya küçük bir çıkar elde etmek için anlık olarak yalana başvurabilirler. Ancak bu durum rasyonel olarak incelendiğinde, kısa vadeli menfaatin uzun vadede muazzam bir saygınlık kaybına yol açtığı net bir gerçektir."
              },
              {
                type: 'content',
                title: "Karakterin Yapıcı Gücü: Sıdk",
                emoji: "✨",
                body: "Her ne pahasına olursa olsun, en zor anlarda bile doğruluğu (sıdk) ve dürüstlüğü korkusuzca savunmak, sarsılmaz bir karakterin en yapıcı gücüdür. Doğru sözlü insan, geçici olarak zorluk çekse bile uzun vadede herkesin saygı duyduğu, güvenilir bir sığınak haline gelir."
              },
              {
                type: 'hadith',
                title: "Doğruluk ve İyilik",
                emoji: "🌹",
                body: "\"Doğruluktan ayrılmayın. Çünkü doğruluk iyiliğe, iyilik de cennete götürür. Yalandan kaçının. Çünkü yalan kötülüğe, yalan ve kötülük de cehenneme götürür.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: "Dürüstlüğü Tartalım",
                emoji: "🤔",
                items: [
                  "Büyüklerimizin söylediği 'Yalancının mumu yatsıya kadar yanar' sözü, yalanın rasyonel ve kaçınılmaz sonu hakkında bize ne anlatır?",
                  "Bir arkadaşınızın size küçük bir konuda bile yalan söylediğini fark etseniz, onunla olan sonraki ilişkileriniz ve ona olan güveniniz nasıl etkilenir?"
                ]
              },
              {
                type: 'activity',
                title: "İstasyon: Doğruluk Yol ayrımı",
                emoji: "🚦",
                body: "Aşağıdaki zor durumlarda, anlık kurtuluş yerine dürüstlüğü seçen bir müminin sergileyeceği erdemli tavrı bulalım:",
                items: [
                  "• Durum 1: Evde istemeden değerli bir vazoyu kırdın ve kimse görmedi. (Tavır: Saklamadan, suçüstü yakalanmayı beklemeden sorumluluk alıp büyüklerine doğruyu söylemek.)",
                  "• Durum 2: Ödevini yapmayı unuttun ve öğretmen sınıfta kontrol ediyor. (Tavır: 'Defterimi evde unuttum' demek yerine, dürüstçe yapamadığını söyleyip özür dilemek.)"
                ]
              },
              {
                type: 'quiz',
                title: "Yalan ve Ahlak Yarışması",
                emoji: "🎯",
                question: "İslam ahlakına göre her şart ve koşulda dürüst davranmak, içi dışı, özü sözü bir olmak anlamına gelen kavram hangisidir?",
                options: ["Tebliğ", "İsmet", "Sıdk (Doğruluk)", "Haset"],
                correct: "Sıdk (Doğruluk)",
                wisdom: "Tebrikler! Sıdk, her şartta doğruluğun ve dürüstlüğün arkasında durarak karakteri inşa eden en temel ahlak sütunudur."
              }
            ]
          },
          {
            id: "w5_d4_l2",
            lessonNumber: 2,
            title: "Kıskançlık (Haset) - İç Huzuru Bozan Pranga",
            outcomes: [
              "Haset (kıskançlık) ile gıpta (özlemleyerek örnek alma) arasındaki ince ahlaki farkı ayırt eder.",
              "Kıskançlığın insanın iç huzurunu bozan ve dostlukları yıkan olumsuz bir duygu olduğunu fark ederek bununla baş etme yollarını kavrar.",
              "Başkasının başarısını çekememe duygusunun enerjiyi tüketen bir pranga olduğunu anlar, başkalarının başarısıyla mutlu olabilme bilinci kazanır."
            ],
            wisdomNotes: "Haset, başkasında olan bir nimetin, başarının veya mutluluğun ondan yok olmasını istemektir. Gıpta ise o berekete imrenmek, onun adına sevinip 'Ben de çalışıp yapabilirim' diyerek yapıcı şekilde örnek almaktır. Kıskançlık, insanın iç huzurunu ve enerjisini tüketen zihinsel bir prangadır.",
            interactiveActivity: "Tahtaya 'Haset ve Gıpta Terazisi' kuralım: Bir arkadaşımızın yüksek not alması karşısında haset eden bir kalbin ve gıpta eden bir kalbin üreteceği düşünceleri karşılaştıralım.",
            slides: [
              {
                type: 'cover',
                title: "Kıskançlık ve Kalbin Huzuru",
                subtitle: "5. Hafta • 4. Gün • 2. Ders",
                emoji: "🔥"
              },
              {
                type: 'content',
                title: "Haset Ne Demektir?",
                emoji: "📖",
                body: "Haset, yani kıskançlık, çevremizdeki bir insanın başarısını, güzel bir eşyasını veya mutluluğunu çekememek, o nimetin onun elinden çıkıp gitmesini gizliden gizliye arzulamaktır. Bu duygu, insan kalbine yerleştiğinde dostlukları ve sevgiyi yakıp yıkan büyük bir ahlaki hasardır."
              },
              {
                type: 'content',
                title: "İnce Ahlaki Fark: Haset ve Gıpta",
                emoji: "✨",
                body: "Kıskançlık ile imrenmek arasında çok ince ve hayati bir çizgi vardır. Haset, 'Onda var bende niye yok, onda da olmasın' demektir. Gıpta ise 'Maşallah arkadaşım ne güzel başarmış, onun adına çok sevindim; inşallah ben de gayret eder, çalışır ve onun gibi başarırım' diyerek yapıcı bir örnek almaktır."
              },
              {
                type: 'content',
                title: "Enerjiyi Tüketen Bir Pranga",
                emoji: "⚠️",
                body: "Başkasının mutluluğunu çekememek, insanın kendi gelişimine odaklanmasını engelleyen zihinsel bir prangadır. Haset eden kişi, sürekli başkalarını izlemekten kendi hayatını güzelleştirecek enerjiyi bulamaz, iç huzurunu tamamen kaybeder ve kendi kendini tüketir."
              },
              {
                type: 'content',
                title: "Kıskançlıkla Baş Etme Yolları",
                emoji: "💡",
                body: "Kıskançlık duygusu kalbimizi yokladığında onunla baş etmenin en güzel yolu; nimetin sahibini tebrik etmek, onun başarısıyla içtenlikle mutlu olabilmektir. Başkalarına hayır dua etmek ve kendi hedeflerimiz için çalışmak kalbimizi bu prangadan tamamen özgürleştirir."
              },
              {
                type: 'hadith',
                title: "Ateşin Odunu Tüketmesi",
                emoji: "🌹",
                body: "\"Haset etmekten sakınınız. Çünkü haset, ateşin odunu yakıp tükettiği gibi, insanın yaptığı güzel amelleri ve iyilikleri yer bitirir.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: "Kalbimizi İnceleyelim",
                emoji: "🤔",
                items: [
                  "Peygamber Efendimizin hasedi ateşe, iyilikleri ise oduna benzetmesini düşündüğümüzde, kıskançlık insan ruhuna nasıl bir zarar vermektedir?",
                  "Bir arkadaşımızın başarısıyla mutlu olabilmek (gıpta) bize nasıl bir iç huzuru ve motivasyon kazandırır?"
                ]
              },
              {
                type: 'activity',
                title: "İnteraktif Dönüşüm İstasyonu: Hasetten Gıptaya",
                emoji: "🔄",
                body: "Aşağıdaki haset dolu cümleleri, ahlaka uygun, yapıcı gıpta cümlelerine dönüştürelim:",
                items: [
                  "• Haset Cümlesi: 'Sınavdan yine en yüksek notu aldı, nefret ediyorum, umarım haftaya kötü alır.' -> Gıpta Cümlesi: 'Arkadaşımı tebrik ederim, çok iyi çalışmış. Ben de ondan çalışma taktikleri alıp sonraki sınavda notumu yükseltebilirim.'",
                  "• Haset Cümlesi: 'Onun yeni bisikleti çok güzel, keşke bozulsa da binemese.' -> Gıpta Cümlesi: 'Harika bir bisiklet, kazasız belasız binsin inşallah. Ben de harçlıklarımı biriktirip kendime güzel bir tane alabilirim.'"
                ]
              }
            ]
          },
          {
            id: "w5_d4_l3",
            lessonNumber: 3,
            title: "Anne Babaya Karşı Haklar - Vefa Borcu ve Saygı",
            outcomes: [
              "Anne babaya saygı göstermenin (birr-i valideyn), onlara 'öf' bile dememenin dini ve ahlaki bir sorumluluk olduğunu ayetler ışığında analiz eder.",
              "Aile içi hak, sorumluluk ve sevgi dengesini kavrayarak anne babanın fedakarlıklarının doğurduğu manevi vefa borcunu idrak eder.",
              "Ergenlik dönemindeki kuşak çatışmalarına sevgi diliyle ahlaki çözümler üretir."
            ],
            wisdomNotes: "Anne babaya iyilik ve saygı göstermeye İslam ahlakında 'birr-i valideyn' denir. Aile, toplumun temel kalbidir. Anne ve babanın çocukları üzerindeki fedakarlıkları sadece maddi değil, ömürlük manevi bir vefa borcu doğurur. Ergenlik döneminde yaşanan fikir ayrılıklarına kaba çıkışlar yerine sevgi ve tatlı dil rehber olmalıdır.",
            interactiveActivity: "PDF sınırlarımızda geçen Lokman ve İsra suresi ayetlerinin ışığında, evde anne babamıza karşı kullanmamamız gereken kırıcı kelimeleri ve onlara hürmet etmenin yollarını tahtada listeleyelim.",
            slides: [
              {
                type: 'cover',
                title: "Anne Babaya Karşı Sorumluluklarımız",
                subtitle: "5. Hafta • 4. Gün • 3. Ders",
                emoji: "💝"
              },
              {
                type: 'content',
                title: "Ahlakın Temeli: Birr-i Valideyn",
                emoji: "📖",
                body: "İslam ahlak nizamında anne babaya iyilik etmek, onlara saygı, hürmet ve itaat göstermek 'birr-i valideyn' olarak adlandırılır. Dinimiz, Allah'a kulluktan sonra en önemli ahlaki ödev olarak anne babaya iyi davranmayı kesin bir dille emretmiştir."
              },
              {
                type: 'content',
                title: "Manevi Vefa Borcumuz",
                emoji: "✨",
                body: "Aile, toplumun atan temel kalbidir. Anne ve babamız biz daha küçücük bir bebekken bizleri sevgiyle, sabırla ve binbir emekle büyütmüşlerdir. Onların bu eşsiz fedakarlıkları, üzerimizde sadece maddi değil, hayat boyu ödenmesi gereken muazzam bir manevi vefa borcu doğurur."
              },
              {
                type: 'content',
                title: "Kuşak Çatışmalarına Ahlaki Çözüm",
                emoji: "💡",
                body: "Gençlik ve ergenlik dönemlerinde bazen anne babamızla fikir ayrılıkları yaşayabiliriz; giymek istediğimiz bir kıyafet, gitmek istediğimiz bir yer konusunda bizi uyarmaları hoşumuza gitmeyebilir. Bu anlarda öfkeyle yaklaşmak yerine, onların tecrübesine saygı duymak, sevgi ve tatlı dille iletişim kurmak kuşak çatışmasının tek ahlaki çözümüdür."
              },
              {
                type: 'ayah',
                title: "Öf Bile Deme Ayeti",
                emoji: "📖",
                body: "\"Rabbisin kesin olarak emretti ki: Ancak O'na kulluk edin ve anne babaya iyi davranın. Onlardan biri veya her ikisi senin yanında yaşlılık çağına erişirlerse, onlara sakın 'öf' bile deme; onları azarlama; onlara tatlı ve güzel söz söyle.\"",
                reference: "(İsrâ Suresi, 23. Ayet)"
              },
              {
                type: 'ayah',
                title: "Şükrün İki Boyutu",
                emoji: "📖",
                body: "\"İnsana da, anne babasına iyi davranmasını emretdik. Annesi onu her gün biraz daha güçsüz düşerek karnında taşımıştır... (İşte onun için) insana şöyle emrettik: 'Bana ve anne babana şükret. Dönüş banadır.'\"",
                reference: "(Lokman Suresi, 14. Ayet)"
              },
              {
                type: 'hadith',
                title: "Cennetin Anahtarı",
                emoji: "🌹",
                body: "\"Cennet, annelerin ayakları altındadır.\"",
                reference: "Hadis-i Şerif"
              },
              {
                type: 'discussion',
                title: "Aile İçi İletişimi Değerlendirelim",
                emoji: "🤔",
                items: [
                  "İsra Suresi 23. ayette geçen 'öf bile deme' ifadesi, anne babaya karşı takınacağımız saygı sınırının hassasiyeti hakkında bize ne anlatır?",
                  "Büyüklerimizin bizim iyiliğimiz için getirdiği bazı kısıtlamalar ve kurallar, uzun vadede bizi hangi zararlardan korur? Havaların ısınması örneğini düşünelim."
                ]
              },
              {
                type: 'quiz',
                title: "Aile Hakları Testi",
                emoji: "🎯",
                question: "İslam ahlak literatüründe anne babaya hürmet göstermek, onlara iyi davranıp haklarını gözetmek anlamına gelen kavram hangisidir?",
                options: ["Birr-i valideyn", "Muhalefetün li'l-havadis", "Asr-ı Saadet", "Nuh Tufanı"],
                correct: "Birr-i valideyn",
                wisdom: "Harika! Birr-i valideyn, müminin en temel ve asil ahlaki sorumluluklarından biri olan anne babaya saygı ve vefa gösterme görevidir."
              }
            ]
          }
        ]
      },
      {
        dayName: "Hafta Özeti",
        discipline: "DEĞERLENDİRME",
        bgGrad: "from-sky-500 to-blue-600",
        badgeColor: "bg-sky-100 text-sky-850",
        lessons: [
          {
            id: "w5_eval_l1",
            lessonNumber: 1,
            title: "5. Hafta Büyük Şampiyonluk Sınavı",
            outcomes: [
              "5. haftada işlenen Ahiret inancı, Hac, Dua felsefesi ve Anne-Babaya saygı konularını pekiştirir."
            ],
            wisdomNotes: "Kutsal topraklardan ebediyet yurduna, duanın gücünden anne baba hakkına kadar öğrendiğimiz her şeyi şimdi büyük sınavda kanıtlayalım!",
            interactiveActivity: "Son haftanın, son ve en büyük şampiyonluk yarışmasına hazır mısın?",
            slides: [
              {
                type: 'cover',
                title: "5. Hafta Şampiyonluk Sınavı",
                subtitle: "Büyük Değerlendirme • 15 Soru",
                emoji: "🏆"
              },
              {
                type: 'quiz',
                title: "Soru 1 / 15",
                emoji: "🎯",
                question: "Dünyada yaptığımız iyi ya da kötü tüm işlerin karşılığını alacağımız, ölümden sonra başlayan sonsuz hayata ne ad verilir?",
                options: ["Ahiret Hayatı", "Kader", "Kıssa", "İhram"],
                correct: "Ahiret Hayatı",
                wisdom: "Doğru cevap! Ölüm bir son değil, ebedi olan Ahiret hayatının başlangıcıdır."
              },
              {
                type: 'quiz',
                title: "Soru 2 / 15",
                emoji: "🎯",
                question: "Allah'ın, olmuş ve olacak her şeyi zaman ve mekandan bağımsız olarak önceden bilmesine ve planlamasına ne ad verilir?",
                options: ["Kaza", "Kader", "Sıdk", "Emanet"],
                correct: "Kader",
                wisdom: "Harika! Her şeyin ilahi bir ölçü ve planla bilinmesine Kader denir."
              },
              {
                type: 'quiz',
                title: "Soru 3 / 15",
                emoji: "🎯",
                question: "Müslümanların yılın belirli günlerinde ihrama girerek Kâbe'yi, Arafat'ı ve kutsal toprakları ziyaret etmeleri ibadetine ne denir?",
                options: ["Oruç", "Zekât", "Hac", "Umre"],
                correct: "Hac",
                wisdom: "Tebrikler! Hac, evrensel eşitliğin ve kardeşliğin en büyük ibadetidir."
              },
              {
                type: 'quiz',
                title: "Soru 4 / 15",
                emoji: "🎯",
                question: "Hac ibadeti esnasında Kâbe'nin etrafında dualar eşliğinde yedi kez dönmeye fıkıhta ne ad verilir?",
                options: ["Vakfe", "Tavaf", "İhram", "Sa'y"],
                correct: "Tavaf",
                wisdom: "Mükemmel! Kâbe etrafındaki 7 dönüşlük kutsal yürüyüşe Tavaf denir."
              },
              {
                type: 'quiz',
                title: "Soru 5 / 15",
                emoji: "🎯",
                question: "İnsanın, sonsuz kudret sahibi olan Allah'a sığınmasına, O'ndan yardım istemesine ve O'nunla iletişim kurmasına ne denir?",
                options: ["Haset", "Gıybet", "Dua", "Kıssa"],
                correct: "Dua",
                wisdom: "Doğru cevap! Dua, insanın Rabbiyle kurduğu en samimi bağdır."
              },
              {
                type: 'quiz',
                title: "Soru 6 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimiz (s.a.s.) bir işe başlarken işinin kolaylaşması ve güzellikle bitmesi için ettiği dua hangisidir?",
                options: ["Rabbim kolaylaştır, zorlaştırma. İşimi güzellikle tamamla.", "Sübhanallah", "Elhamdülillah", "Allahü Ekber"],
                correct: "Rabbim kolaylaştır, zorlaştırma. İşimi güzellikle tamamla.",
                wisdom: "Harika! Bu dua, her müminin zorlandığında dilinden düşürmemesi gereken bir hazinedir."
              },
              {
                type: 'quiz',
                title: "Soru 7 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimizin hayatı boyunca sergilediği ahlakı sebebiyle Kur'an-ı Kerim'in onu tanımladığı sıfat hangisidir?",
                options: ["Sadece bir uyarıcı", "Üsve-i Hasene (En Güzel Örnek)", "Sıradan bir kul", "Yalnızca bir elçi"],
                correct: "Üsve-i Hasene (En Güzel Örnek)",
                wisdom: "Tebrikler! Ahzab Suresi'nde Efendimiz için bizlere 'En Güzel Örnek' (Üsve-i Hasene) olduğu müjdelenmiştir."
              },
              {
                type: 'quiz',
                title: "Soru 8 / 15",
                emoji: "🎯",
                question: "Peygamberimize inanan, onunla birlikte yaşamış, ona dost ve yol arkadaşı olmuş müminlere İslam'da ne ad verilir?",
                options: ["Sahabi", "Muhacir", "Ensar", "Hafız"],
                correct: "Sahabi",
                wisdom: "Mükemmel! Peygamberimizin o sadık ve vefakar arkadaşlarına Sahabi denir."
              },
              {
                type: 'quiz',
                title: "Soru 9 / 15",
                emoji: "🎯",
                question: "Peygamber Efendimizin hadisinde '... edenlere Allah da merhamet eder' boşluğuna ne gelmelidir?",
                options: ["Adaletli", "Merhamet", "Kibirli", "Zalimlik"],
                correct: "Merhamet",
                wisdom: "Doğru cevap! Yerdekilere merhamet edene, gökteki de merhamet eder."
              },
              {
                type: 'quiz',
                title: "Soru 10 / 15",
                emoji: "🎯",
                question: "Gerçeği bilerek çarpıtmak, insanları aldatmak ve güven toplumunu temelinden yıkan ahlaki hastalığa ne denir?",
                options: ["Gıybet", "İftira", "Yalan söylemek", "Haset"],
                correct: "Yalan söylemek",
                wisdom: "Harika! Yalan, insanın onurunu ve toplumun güvenini yok eden büyük bir krizdir."
              },
              {
                type: 'quiz',
                title: "Soru 11 / 15",
                emoji: "🎯",
                question: "Bir insanın başarısını veya mutluluğunu çekememek, 'onda olmasın' diyerek kendi iç huzurunu yok etmeye ne ad verilir?",
                options: ["Gıpta", "Haset (Kıskançlık)", "Tebliğ", "Sıdk"],
                correct: "Haset (Kıskançlık)",
                wisdom: "Tebrikler! Haset, ateşin odunu yaktığı gibi insanın içindeki iyilikleri ve huzuru yakar."
              },
              {
                type: 'quiz',
                title: "Soru 12 / 15",
                emoji: "🎯",
                question: "İslam ahlakında 'Birr-i Valideyn' ne anlama gelmektedir?",
                options: ["Komşu hakkını gözetmek", "Anne babaya saygı göstermek ve iyilik etmek", "Namazı cemaatle kılmak", "Akrabaları ziyaret etmek"],
                correct: "Anne babaya saygı göstermek ve iyilik etmek",
                wisdom: "Mükemmel bildin! Dinimiz Allah'a kulluktan sonra anne babaya hürmeti en büyük sorumluluk sayar."
              },
              {
                type: 'quiz',
                title: "Soru 13 / 15",
                emoji: "🎯",
                question: "İsra Suresi 23. ayette yaşlanan anne ve babamıza karşı söylememiz kesinlikle KESİN OLARAK yasaklanan kelime hangisidir?",
                options: ["Tamam", "Peki", "Öf", "Olur"],
                correct: "Öf",
                wisdom: "Doğru cevap! Ayet-i kerime onlara sakın 'öf' bile demememizi ve tatlı söz söylememizi emreder."
              },
              {
                type: 'quiz',
                title: "Soru 14 / 15",
                emoji: "🎯",
                question: "Kur'an-ı Kerim'de Hz. İbrahim'in (a.s.) Kâbe'yi inşa ettikten sonra ailesi ve müminler için ettiği af duasının başlangıcı nasıldır?",
                options: ["Rabbim kolaylaştır", "Rabbimiz! Hesap verileceği gün beni, anne babamı ve müminleri bağışla", "Allah'ım bize rızık ver", "Rabbim gönlüme ferahlık ver"],
                correct: "Rabbimiz! Hesap verileceği gün beni, anne babamı ve müminleri bağışla",
                wisdom: "Harika! Namazların sonunda okuduğumuz bu asil dua Hz. İbrahim'in Kur'an'daki duasıdır."
              },
              {
                type: 'quiz',
                title: "Soru 15 / 15",
                emoji: "🎯",
                question: "Bizi yaratan, yaşatan, sayısız nimetler veren Allah'a teşekkürü ifade etmek için en çok kullandığımız zikir hangisidir?",
                options: ["Elhamdülillah", "Estağfirullah", "Sübhanallah", "Allahu Ekber"],
                correct: "Elhamdülillah",
                wisdom: "Muhteşem bir kapanış! Elhamdülillah, Rabbimize olan sonsuz şükrümüzün ve vefamızın en güzel ifadesidir."
              },
              {
                type: 'content',
                title: "🏆 YAZ KURSUNUN BÜYÜK ŞAMPİYONU! 🏆",
                emoji: "👑",
                body: "Tebrikler! 5 haftalık muazzam bir yolculuğun sonuna geldin.\n\nİman esaslarından peygamberlerin hayatına, ibadet ahlakından sevgi ve saygıya kadar öğrendiğin tüm bu güzel değerler, hayatın boyunca yolunu aydınlatacak sarsılmaz birer meşale olsun. Yolun açık olsun!"
              }
            ]
          }
        ]
      }
    ]
  }
];
