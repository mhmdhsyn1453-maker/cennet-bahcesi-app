import { WEEKLY_CURRICULUM, Lesson } from '../data/curriculumData';
import { defaultGameData } from '../data/defaultQuestions';

// Soru tipleri tanımları
export interface UnifiedQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  wisdom: string;
  source: string; // Hangi ders veya kaynaktan geldiği
}

export interface AZQuestion {
  letter: string;
  question: string;
  answer: string;
  clues: string[];
}

export interface TrueFalseStatement {
  id: string;
  statement: string;
  isCorrect: boolean;
  explanation: string;
  category?: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap';
}

export interface VocabularyWord {
  word: string;
  category: string;
  clue: string;
}

// ==========================================
// 1. DİNAMİK MÜFREDAT SORULARI AYIKLAYICI
// ==========================================
export function getCurriculumQuizQuestions(): UnifiedQuizQuestion[] {
  const list: UnifiedQuizQuestion[] = [];

  // curriculumData'yı dolaşalım
  WEEKLY_CURRICULUM.forEach((week) => {
    week.days.forEach((day) => {
      day.lessons.forEach((lesson: Lesson) => {
        // Eski quiz yapısı varsa
        if (lesson.quiz) {
          list.push({
            id: `curr_q_${lesson.id}_legacy`,
            question: lesson.quiz.question,
            options: lesson.quiz.options,
            correct: lesson.quiz.correct,
            wisdom: lesson.quiz.wisdom || '',
            source: `${week.weekNum}. Hafta - ${day.dayName} - ${lesson.title}`,
          });
        }

        // Yeni slayt yapısı varsa ve içindeki quiz slaytları
        if (lesson.slides) {
          lesson.slides.forEach((slide, sIdx) => {
            if (slide.type === 'quiz' && slide.question && slide.options && slide.correct) {
              list.push({
                id: `curr_q_${lesson.id}_slide_${sIdx}`,
                question: slide.question,
                options: slide.options,
                correct: slide.correct,
                wisdom: slide.wisdom || '',
                source: `${week.weekNum}. Hafta - ${day.dayName} - ${lesson.title}`,
              });
            }
          });
        }
      });
    });
  });

  // defaultQuestions.ts'ten de sorular ekleyelim
  if (defaultGameData.dilemmaQuestions) {
    // Dilemma'ları da çoktan seçmeli formata dönüştürüp ekleyelim (isteğe bağlı)
  }

  // Genel Kültür Sorularını da ekleyelim
  list.push(...GENERAL_KNOWLEDGE_QUESTIONS);

  // Eğer müfredatta soru yoksa yedek soru listesi
  if (list.length === 0) {
    list.push({
      id: 'fallback_1',
      question: 'İslam dininin temel kaynağı nedir?',
      options: ['Kur\'an-ı Kerim', 'Tarih Kitapları', 'Sözlükler', 'Ansiklopediler'],
      correct: 'Kur\'an-ı Kerim',
      wisdom: 'İslam dininin inanç, ibadet ve ahlak esaslarının birinci elden kaynağı Kur\'an-ı Kerim\'dir.',
      source: 'Genel Bilgi',
    });
  }

  return list;
}

// ==========================================
// 2. A'DAN Z'YE HARF ZİNCİRİ (PASSAPAROLA) VERİ BANKASI
// ==========================================
// 5 hafta boyunca tekrar etmemesi için her harfe 3 alternatif soru tanımladık.
export const AZ_QUESTIONS_DB: Record<string, AZQuestion[]> = {
  A: [
    { letter: 'A', question: 'Allah\'ın izniyle eceli gelen varlıkların ruhunu teslim almakla görevli ölüm meleği kimdir?', answer: 'Azrail', clues: ['Ölüm meleği', 'Dört büyük melekten biri'] },
    { letter: 'A', question: 'Namaz kılabilmek için vücudumuzun belirli azalarını usulüne uygun olarak yıkama ve mesh etme temizliği nedir?', answer: 'Abdest', clues: ['Namazın ön hazırlığı', 'Temizlik ibadeti'] },
    { letter: 'A', question: 'Yerde, gökte ve tüm evrende her şeyi yaratan, eşi ve benzeri olmayan tek ilah kimdir?', answer: 'Allah', clues: ['Yaratıcımız', 'Tek ilah'] },
    { letter: 'A', question: 'İnsanın iyi veya kötü olarak nitelendirilmesine yol açan manevi nitelikleri ve huylarının bütününe ne ad verilir?', answer: 'Ahlak', clues: ['Karakter yapısı', 'Güzel davranışlar bütünü'] }
  ],
  B: [
    { letter: 'B', question: 'Müslümanlar ile Mekkeli müşrikler arasında hicretten sonra yapılan ilk büyük ve zaferle sonuçlanan savaş hangisidir?', answer: 'Bedir', clues: ['Hicretin 2. yılı', 'İlk büyük zafer'] },
    { letter: 'B', question: 'Her hayırlı işe başlarken söylediğimiz, "Rahmân ve Rahîm olan Allah\'ın adıyla" anlamına gelen söz hangisidir?', answer: 'Besmele', clues: ['Bismillah', 'Her hayırlı işin başı'] },
    { letter: 'B', question: 'Peygamberimizin sesi çok güzel olduğu için ezan okumakla görevlendirdiği ilk İslam müezzini kimdir?', answer: 'Bilal', clues: ['Bilal-i Habeşi', 'İlk müezzin'] },
    { letter: 'B', question: 'Kabe\'nin bir diğer adı olan ve "Allah\'ın Evi" anlamına gelen kelime hangisidir?', answer: 'Beytullah', clues: ['Allah\'ın evi', 'Kabe\'nin diğer ismi'] }
  ],
  C: [
    { letter: 'C', question: 'Allah\'tan aldığı vahiyleri peygamberlere ulaştırmakla görevli olan en büyük melek kimdir?', answer: 'Cebrail', clues: ['Vahiy meleği', 'Ruhu\'l-Kudüs'] },
    { letter: 'C', question: 'Müminlerin ahiret hayatında ebedi olarak kalacakları, içinde her türlü nimetin bulunduğu ödül yurdu neresidir?', answer: 'Cennet', clues: ['Müminlerin ödülü', 'Ebedi mutluluk yurdu'] },
    { letter: 'C', question: 'Müslümanların haftalık toplu ibadetlerini yaptıkları ve cemaatle namaz kıldıkları en mübarek gün hangisidir?', answer: 'Cuma', clues: ['Haftalık bayram günü', 'Sure adı da olan gün'] },
    { letter: 'C', question: 'Namazı bir imam önderliğinde arkasında durarak birlikte kılan Müslüman topluluğuna ne ad verilir?', answer: 'Cemaat', clues: ['Birlikte namaz kılanlar', 'Tek başına kılmanın zıttı'] }
  ],
  Ç: [
    { letter: 'Ç', question: 'Hicret esnasında Peygamberimizin aştığı, kum tepeleriyle kaplı çok sıcak coğrafi alanlara ne denir?', answer: 'Çöl', clues: ['Kum denizi', 'Sıcak coğrafya'] },
    { letter: 'Ç', question: 'Nuh peygamberin tufandan korumak için gemisine her hayvandan aldığı sayı miktarı?', answer: 'Çift', clues: ['İkişer adet', 'Tek olmayan'] },
    { letter: 'Ç', question: 'Peygamberimizin seferlerde veya savaşlarda içinde dinlendiği kumaştan yapılmış barınak türü?', answer: 'Çadır', clues: ['Göçebe barınağı', 'Otağ'] }
  ],
  D: [
    { letter: 'D', question: 'Dört büyük kitaptan biri olan Zebur hangi peygambere indirilmiştir?', answer: 'Davut', clues: ['Zebur\'un indirildiği nebi', 'Demiri hamur gibi şekillendiren peygamber'] },
    { letter: 'D', question: 'Kulun Allah\'a yönelerek O\'ndan yardım, bağışlanma ve isteklerde bulunması, O\'nunla konuşması ibadeti nedir?', answer: 'Dua', clues: ['İbadetin özü', 'Allah\'a yalvarış'] },
    { letter: 'D', question: 'Ahiret hayatının tarlası kabul edilen, üzerinde geçici bir süre yaşadığımız gezegen/yurt neresidir?', answer: 'Dünya', clues: ['Geçici hayat', 'Ahiret öncesi yer'] },
    { letter: 'D', question: 'Güzel ahlakın en temel kuralı olan, yalan söylememek ve doğru yoldan şaşmamak erdemi hangisidir?', answer: 'Dürüstlük', clues: ['Doğru sözlülük', 'Yalanın zıttı'] }
  ],
  E: [
    { letter: 'E', question: 'Namaz vaktinin girdiğini tüm insanlara bildirmek amacıyla müezzin tarafından okunan kutsal çağrı nedir?', answer: 'Ezan', clues: ['Namaz çağrısı', 'Günde 5 defa okunur'] },
    { letter: 'E', question: 'Peygamberimizin en yakın dostu, hicret arkadaşı ve İslam tarihinin ilk halifesi olan sahabe kimdir?', answer: 'Ebubekir', clues: ['Sıddık lakaplı sahabe', 'İlk halife'] },
    { letter: 'E', question: 'Allah\'ın Kur\'an-ı Kerim\'de geçen ve en güzel isimleri anlamına gelen ifadenin adı nedir?', answer: 'Esmaül Hüsna', clues: ['En güzel isimler', 'Allah\'ın 99 ismi'] },
    { letter: 'E', question: 'Ahiret hayatının hiç sonu olmadığını, sonsuzluğa kadar süreceğini ifade eden kelime hangisidir?', answer: 'Ebedi', clues: ['Sonsuz', 'Geçici olmayan'] }
  ],
  F: [
    { letter: 'F', question: 'Kur\'an-ı Kerim\'in ilk suresi olan ve namazın her rekatında okuduğumuz açılış suresinin adı nedir?', answer: 'Fatiha', clues: ['Kur\'an\'ın başlangıcı', 'Elham suresi'] },
    { letter: 'F', question: 'Allah\'ın biz Müslümanlardan kesin olarak yapmamızı istediği ve terk edilmesi günah olan ibadet emirlerine ne denir?', answer: 'Farz', clues: ['Kesin emir', 'Sünnetin üstü'] },
    { letter: 'F', question: 'Hz. Musa\'nın mucizeleri karşısında direnen, kendini tanrı ilan eden zalim Mısır hükümdarlarına ne denir?', answer: 'Firavun', clues: ['Mısır kralı', 'Kızıldeniz\'de boğulan inkarcı'] },
    { letter: 'F', question: 'Ramazan ayında oruç tutabilenlerin bayramdan önce fakirlere vermekle yükümlü olduğu vacip sadaka türü nedir?', answer: 'Fitre', clues: ['Fıtır sadakası', 'Ramazan ayı bağışı'] }
  ],
  G: [
    { letter: 'G', question: 'Bütün vücudun hiç kuru yer kalmayacak şekilde yıkanmasıyla yapılan boy abdestine ne denir?', answer: 'Gusül', clues: ['Boy abdesti', 'Tüm vücudu yıkama'] },
    { letter: 'G', question: 'Bir Müslüman kardeşimizin arkasından, duyduğunda hoşlanmayacağı doğru olan şeyleri konuşma günahı nedir?', answer: 'Gıybet', clues: ['Dedikodu', 'Ölmüş kardeş eti yemeye benzetilen günah'] },
    { letter: 'G', question: 'Peygamber Efendimizin bizzat ordunun başında komutan olarak katıldığı savaşlara ne ad verilir?', answer: 'Gazve', clues: ['Peygamberimizin katıldığı savaş', 'Seriyye zıttı'] },
    { letter: 'G', question: 'Dinen yapılması kesinlikle yasaklanan ve yapıldığında ahirette cezası olan kötülüklere ne denir?', answer: 'Günah', clues: ['Yasak davranışlar', 'Sevap zıttı'] }
  ],
  H: [
    { letter: 'H', question: 'Müslümanların dinlerini özgürce yaşayabilmek için Mekke\'den Medine\'ye göç etmeleri olayına ne ad verilir?', answer: 'Hicret', clues: ['Büyük göç', 'Hicri takvimin başlangıcı'] },
    { letter: 'H', question: 'Peygamber Efendimize ilk vahyin indirildiği Nur Dağı\'nda bulunan ünlü mağaranın adı nedir?', answer: 'Hira', clues: ['İlk vahiy mağarası', 'Nur dağındaki yer'] },
    { letter: 'H', question: 'Peygamberimizden sonra İslam devletinin başına geçen liderlere verilen genel unvan nedir?', answer: 'Halife', clues: ['Peygamber vekili', 'Devlet başkanı'] },
    { letter: 'H', question: 'Peygamberimizin söylediği güzel sözler, yaptığı işler ve sahabeden görüp onayladığı davranışların yazılı metinlerine ne denir?', answer: 'Hadis', clues: ['Peygamber kelamı', 'Sünnetin yazılı hali'] }
  ],
  I: [
    { letter: 'I', question: 'Kur\'an-ı Kerim\'de cennet tasvir edilirken altından aktığı söylenen tatlı su yataklarına ne denir?', answer: 'Irmak', clues: ['Cennet nehirleri', 'Akan sular'] },
    { letter: 'I', question: 'İslam dinine göre hiçbir üstünlük veya alçaklık sebebi olmayan, insan gruplarının ten renkleri ve soyları?', answer: 'Irk', clues: ['Ten rengi/kök', 'Millet soyu'] },
    { letter: 'I', question: 'Kötü giden bir durumu düzeltmek, barıştırmak, iyileştirmek anlamına gelen dini kavram nedir?', answer: 'Islah', clues: ['Düzeltme yapma', 'Arabuluculuk'] }
  ],
  İ: [
    { letter: 'İ', question: 'Dört büyük kutsal kitaptan biri olan ve Hz. İsa peygambere indirilen kitap hangisidir?', answer: 'İncil', clues: ['Hz. İsa\'nın kitabı', 'Müjde anlamına gelen kitap'] },
    { letter: 'İ', question: 'İslam dininin inanılmasını emrettiği esasları kalbiyle onaylayıp diliyle söyleyen kişilerin sahip olduğu inanç durumu?', answer: 'İman', clues: ['İnanma gücü', 'Mümin olma şartı'] },
    { letter: 'İ', question: 'Yapılan her ibadeti ve güzel davranışı sadece ve sadece Allah rızasını kazanmak için samimiyetle yapmak nedir?', answer: 'İhlas', clues: ['Samimiyet', 'Gösterişten uzak olmak'] },
    { letter: 'İ', question: 'Yaratıcımız Allah\'a olan sevgi, saygı ve bağlılığimizi göstermek için O\'nun emrettiği görevleri yerine getirmeye ne denir?', answer: 'İbadet', clues: ['Kulluk görevleri', 'Namaz, oruç vb. genel adı'] }
  ],
  K: [
    { letter: 'K', question: 'Yeryüzünde Allah ibadeti için inşa edilen ilk mabet olan ve namaz kılarken yöneldiğimiz Mekke\'deki yapı nedir?', answer: 'Kabe', clues: ['Kıblemiz', 'Siyah örtülü mukaddes ev'] },
    { letter: 'K', question: 'Allah tarafından peygamberimize indirilen ve kıyamete kadar değişmeyecek olan son ilahi kitabın adı nedir?', answer: 'Kuran', clues: ['Son kitap', 'Mucize kitap'] },
    { letter: 'K', question: 'Evrenin düzeninin bozularak yok olacağı ve insanların ahiret hesabı için diriltileceği o büyük güne ne denir?', answer: 'Kıyamet', clues: ['Dünyanın sonu', 'Büyük hesap günü'] },
    { letter: 'K', question: 'Cennette sadece Peygamber Efendimize ve onun ümmetine tahsis edildiği müjdelenen nehir veya havuzun adı nedir?', answer: 'Kevser', clues: ['Sure adı olan nehir', 'Cennet havuzu'] }
  ],
  L: [
    { letter: 'L', question: 'Kavminin yaptığı çirkin ahlaksızlıklar yüzünden helak olduğu ve kendisi inananlarla kurtulan peygamber kimdir?', answer: 'Lut', clues: ['Lut gölü kavmi peygamberi', 'Hz. İbrahim döneminde yaşayan elçi'] },
    { letter: 'L', question: 'Edebiyatımızda ve hat sanatımızda harflerinin duruşu nedeniyle Yaratıcıyı (Allah\'ı) simgeleyen kırmızı çiçek hangisidir?', answer: 'Lale', clues: ['Sembolik çiçek', 'İstanbul ile özdeşleşmiş bahar çiçeği'] },
    { letter: 'L', question: 'Kur\'an-ı Kerim\'de adı geçen, tıp bilgini ve oğluna verdiği altın değerindeki ahlak öğütleriyle tanınan hekim bilge şahsiyet?', answer: 'Lokman', clues: ['Bilge hekim', 'Lokman Hekim'] },
    { letter: 'L', question: 'Allah\'ın kullarına hiçbir karşılık beklemeden sunduğu ikram, ihsan, iyilik ve iyilik veriş durumuna ne denir?', answer: 'Lütuf', clues: ['Bağış, ikram', 'Kerem sahibi olmak'] }
  ],
  M: [
    { letter: 'M', question: 'Dört büyük melekten biri olan, doğa olaylarını (yağmur, rüzgar) ve canlıların rızıklarını yöneten melek hangisidir?', answer: 'Mikail', clues: ['Doğa olayları meleği', 'Rızık dağıtıcısı melek'] },
    { letter: 'M', question: 'Sevgili Peygamberimizin doğduğu, Kabe\'nin bulunduğu ve İslam\'ın doğduğu en mukaddes şehir neresidir?', answer: 'Mekke', clues: ['Peygamberimizin doğum yeri', 'Kabe\'nin şehri'] },
    { letter: 'M', question: 'Peygamberimizin hicret ettiği, içinde kabrinin (Ravza-i Mutahhara) bulunduğu nurlu şehir neresidir?', answer: 'Medine', clues: ['Peygamberimizin şehri', 'Yesrib\'in yeni adı'] },
    { letter: 'M', question: 'Camilere gidildiğinde namaz vakitlerinde ezan okuyan ve kamet getiren görevli kişiye ne ad verilir?', answer: 'Müezzin', clues: ['Ezanı seslendiren', 'Mescit görevlisi'] }
  ],
  N: [
    { letter: 'N', question: 'Yüzlerce yıl kavmini imana davet eden, inanmayanların tufanda boğulduğu, büyük bir gemi inşa eden peygamber kimdir?', answer: 'Nuh', clues: ['Tufan peygamberi', 'Büyük gemi yapan peygamber'] },
    { letter: 'N', question: 'İslam\'ın beş şartından biri olan, günde beş vakit yerine getirdiğimiz, dinin direği olan ibadet nedir?', answer: 'Namaz', clues: ['Dinin direği', 'Günde 5 vakit ibadet'] },
    { letter: 'N', question: 'İbadetlerin kabul olmasının ilk şartı olan, kalbimizle neyi niçin yapacağımıza karar verme eylemine ne denir?', answer: 'Niyet', clues: ['Ameller niyetlere göredir', 'Başlangıç kararı'] },
    { letter: 'N', question: 'Kendisine yeni bir kitap verilmeyip kendinden önceki peygamberlerin kitabını tebliğ eden peygamberlere ne denir?', answer: 'Nebi', clues: ['Resul olmayan elçi', 'Haber getiren peygamber'] }
  ],
  O: [
    { letter: 'O', question: 'İslam\'ın şartlarından biri olan, Ramazan ayında imsaktan akşama kadar yeme ve içmeyi bırakarak yapılan ibadet nedir?', answer: 'Oruç', clues: ['Aç kalma terbiyesi', 'Ramazan ibadeti'] },
    { letter: 'O', question: 'Uhud Savaşı\'nda Peygamberimizin kesinlikle yerlerinden ayrılmamalarını emrettiği, savaşın seyrini değiştiren tepe?', answer: 'Okçular', clues: ['Ayneyn tepesi askerleri', 'Savaşın seyrini değiştirenler'] },
    { letter: 'O', question: 'Kur\'an-ı Kerim\'in her biri 20 sayfadan oluşan cüzlerinin toplam sayısı kaçtır?', answer: 'Otuz', clues: ['Cüz sayısı', 'Bir ayın gün sayısı kadar'] }
  ],
  Ö: [
    { letter: 'Ö', question: 'Adaleti ve cesaretiyle tanınan, adaletin sembolü olan İslam tarihinin ikinci halifesi kimdir?', answer: 'Ömer', clues: ['Faruk lakaplı halife', 'Adalet timsali halife'] },
    { letter: 'Ö', question: 'Her canlı varlığın bir gün tadacağı, dünya hayatının bitip ahiret hayatının kapısının açılması olayı nedir?', answer: 'Ölüm', clues: ['Dünya hayatının sonu', 'Ahirete geçiş köprüsü'] },
    { letter: 'Ö', question: 'Günün tam ortasında, güneş tam tepedeyken kılınan ve farzı 4 rekat olan namaz vakti hangisidir?', answer: 'Öğle', clues: ['Gündüz kılınan ilk namaz', '10 rekatlık vakit namazı'] },
    { letter: 'Ö', question: 'Annesi ve babası hayattayken vefat etmiş olan, korunup gözetilmesi Kur\'an\'da sıkça emredilen küçük çocuklara ne denir?', answer: 'Yetim', clues: ['Annesi veya babası vefat eden', 'Korunması gereken küçük yavru'] }
  ],
  P: [
    { letter: 'P', question: 'Allah\'ın gönderdiği vahiyleri insanlara bildirmek, onlara doğru yolu göstermekle görevli elçilere ne denir?', answer: 'Peygamber', clues: ['Nebî veya Resûl', 'Allah\'ın elçisi'] },
    { letter: 'P', question: 'Mekke dönemindeki müşriklerin elleriyle taştan veya tahtadan yaparak tapındıkları heykellere ne ad verilir?', answer: 'Put', clues: ['Heykel tanrılar', 'İlahlaştırılan nesneler'] },
    { letter: 'P', question: 'Rebiülevvel ayının 12. gecesi dünyaya gelen Sevgili Peygamberimizin doğduğu haftanın ilk günü hangisidir?', answer: 'Pazartesi', clues: ['Haftanın ilk günü', 'Peygamberimizin doğum günü'] },
    { letter: 'P', question: 'Dinimizin zekat, sadaka ve infak emirleriyle teşvik ettiği, elimizdeki nimetleri başkalarıyla bölüşme erdemi?', answer: 'Paylaşmak', clues: ['Bölüşmek', 'Cömertliğin eylemi'] }
  ],
  R: [
    { letter: 'R', question: 'Namaz kılarken kıyamdan sonra ellerimizi diz kapaklarımıza koyarak eğildiğimiz duruş şekline ne ad verilir?', answer: 'Ruku', clues: ['Namazda eğilmek', 'Secdeden önceki adım'] },
    { letter: 'R', question: 'Kur\'an-ı Kerim\'in indirildiği, içerisinde bin aydan daha hayırlı Kadir Gecesi\'ni barındıran oruç ayı hangisidir?', answer: 'Ramazan', clues: ['Oruç ayı', '11 ayın sultanı'] },
    { letter: 'R', question: 'Kendisine yeni bir kutsal kitap indirilen ve yeni bir şeriat getiren peygamberlere ne ad verilir?', answer: 'Resul', clues: ['Kitap verilen peygamber', 'Nebi zıttı'] },
    { letter: 'R', question: 'Allah\'ın tüm canlılara yemeleri, içmeleri ve hayatlarını sürdürmeleri için verdiği nimetlerin genel adı nedir?', answer: 'Rızık', clues: ['Nimetler bütünü', 'Yiyecek ve içecekler'] }
  ],
  S: [
    { letter: 'S', question: 'Namaz kılarken alnımızı, burnumuzu, dizlerimizi, ellerimizi ve ayaklarımızı yere koyarak Allah\'a en yakın olduğumuz duruş?', answer: 'Secde', clues: ['Allah\'a en yakın an', 'Yere kapanmak'] },
    { letter: 'S', question: 'Sevgili Peygamberimizin yaptığı, tavsiye ettiği ve bizim de yapmamız durumunda sevap kazanacağımız güzel davranışlar?', answer: 'Sünnet', clues: ['Peygamberimizin yolu', 'Hadislerin pratik hali'] },
    { letter: 'S', question: 'Cemaatle namaz kılınırken Müslümanların omuz omuza vererek oluşturduğu düzgün sıralara ne ad verilir?', answer: 'Saf', clues: ['Namaz sıraları', 'Sıra olmak'] },
    { letter: 'S', question: 'İki Müslüman karşılaştığında birbirine esenlik ve barış dilemek için söylediği esenlik dileme sözü nedir?', answer: 'Selam', clues: ['Esselamu aleykum', 'Barış dileği'] }
  ],
  Ş: [
    { letter: 'Ş', question: 'Kelime-i Şehadet getirerek Allah\'ın varlığını ve birliğini kabul edip bunu herkese ilan etme durumuna ne denir?', answer: 'Şehadet', clues: ['Şahitlik etmek', 'Müslüman olma ilanı'] },
    { letter: 'Ş', question: 'Hz. Adem\'e secde etmediği için cennetten kovulan, insanları sürekli kötülüğe ve harama teşvik eden varlık kimdir?', answer: 'Şeytan', clues: ['İblis', 'Kötülüklerin vesvesecisi'] },
    { letter: 'Ş', question: 'Bize verdiği sağlık, akıl ve nimetler için Allah\'a teşekkür edip dile getirdiğimiz hamd etme eylemi nedir?', answer: 'Şükür', clues: ['Teşekkür etmek', 'Elhamdülillah demek'] },
    { letter: 'Ş', question: 'Peygamber Efendimizin ahiret gününde günahkar Müslümanların affedilmesi için yapacağı şefkat dolu yardım ve dua?', answer: 'Şefaat', clues: ['Peygamberimizin yardımı', 'Ahiret duası ve aracılığı'] }
  ],
  T: [
    { letter: 'T', question: 'Dört büyük kutsal kitaptan ilki olan ve Hz. Musa peygambere indirilen kutsal kitap hangisidir?', answer: 'Tevrat', clues: ['Hz. Musa\'nın kitabı', 'Museviliğin kutsal kitabı'] },
    { letter: 'T', question: 'İslam dininin en temel inancı olan, Allah\'ın bir ve tek olduğuna, ortağı olmadığına inanma ilkesi nedir?', answer: 'Tevhid', clues: ['Allah\'ın birliği', 'İhlas suresinin konusu'] },
    { letter: 'T', question: 'İmanın yarısı sayılan, hem bedenimizi hem elbisemizi hem de kalbimizi kirlerden arındırma eylemi nedir?', answer: 'Temizlik', clues: ['İmanın yarısıdır', 'Abdestin temeli'] },
    { letter: 'T', question: 'Nuh peygamber zamanında inanmayanların suda boğulmasına, inananların ise gemiyle kurtulmasına yol açan büyük su felaketi?', answer: 'Tufan', clues: ['Nuh tufanı', 'Su felaketi'] }
  ],
  U: [
    { letter: 'U', question: 'Uhud dağının eteklerinde yapılan ve okçuların tepeyi terk etmesi nedeniyle zor anlar yaşanan o meşhur savaş hangisidir?', answer: 'Uhud', clues: ['Uhud dağı savaşı', 'Hicretin 3. yılı'] },
    { letter: 'U', question: 'Hac zamanı dışında, yılın herhangi bir vaktinde Mekke\'ye gidip Kabe\'yi tavaf ederek yapılan ziyaret ibadeti nedir?', answer: 'Umre', clues: ['Küçük hac', 'Belirli vakti olmayan Kabe ziyareti'] },
    { letter: 'U', question: 'Kur\'an\'da bir nevi ölüm uykusuna benzetilen, bedenin ve zihnin dinlendiği doğal dinlenme hali nedir?', answer: 'Uyku', clues: ['Gece dinlenmesi', 'Ölümün kardeşi'] },
    { letter: 'U', question: 'Müslümanların birbirleriyle kardeş olması durumunu ifade eden Arapça kökenli kardeşlik kelimesi nedir?', answer: 'Uhuvvet', clues: ['Kardeşlik', 'Müminler kardeştir ayetinin konusu'] }
  ],
  Ü: [
    { letter: 'Ü', question: 'Bir peygambere inanan ve onun gösterdiği doğru yolu takip eden insanların oluşturduğu topluluğa ne denir?', answer: 'Ümmet', clues: ['Peygamber topluluğu', 'Biz Hz. Muhammed\'in ...iyiz'] },
    { letter: 'Ü', question: 'Allah\'ın merhametinden ve affından asla vazgeçmeyerek kalbimizde taşıdığımız güzel ve olumlu beklenti duygusu?', answer: 'Ümit', clues: ['Umut etmek', 'Karamsarlığın zıttı'] },
    { letter: 'Ü', question: 'Abdest alırken ağza su verme, burna su verme ve yüzü yıkama gibi adımları sünnete uygun olarak kaçar kez yaparız?', answer: 'Üç', clues: ['Sünnet olan sayı', 'İkinin bir fazlası'] }
  ],
  V: [
    { letter: 'V', question: 'Allah\'ın emir ve yasaklarını melek aracılığıyla veya doğrudan göndermesi olayına ne denir?', answer: 'Vahiy', clues: ['İlahi mesaj', 'Cebrail\'in getirdiği haber'] },
    { letter: 'V', question: 'Farz kadar kesin olmasa da yapılması dinen emredilen ibadetler (Örn: Bayram namazı kılmak, kurban kesmek)?', answer: 'Vacip', clues: ['Farzın bir altı', 'Kurban ibadetinin hükmü'] },
    { letter: 'V', question: 'Peygamber Efendimizin vefat etmeden önce kalabalık bir Müslüman topluluğuna hitap ettiği son haccına ne ad verilir?', answer: 'Veda', clues: ['Veda Haccı', 'Son hutbenin okunduğu hac'] },
    { letter: 'V', question: 'İslam dininin sevgisini ve korumasını teşvik ettiği, üzerinde doğup büyüdüğümüz bağımsız toprak parçası veya yurt?', answer: 'Vatan', clues: ['Yurt', 'Vatan sevgisi imandandır'] }
  ],
  Y: [
    { letter: 'Y', question: 'Kardeşleri tarafından kıskanılıp kuyuya atılan, rüya yorumlama mucizesiyle Mısır\'a maliye bakanı olan o çok yakışıklı peygamber?', answer: 'Yusuf', clues: ['Güzelliğiyle ünlü peygamber', 'Kuyu hikayesi'] },
    { letter: 'Y', question: 'Kavminden kızıp uzaklaştıktan sonra bindiği gemiden atılan ve denizde bir balığın karnında tövbe ederek kurtulan peygamber?', answer: 'Yunus', clues: ['Balığın karnındaki peygamber', 'Ninova halkı elçisi'] },
    { letter: 'Y', question: 'İslam\'da en büyük ahlaksızlık ve günahlardan kabul edilen, dürüstlüğün zıttı olan doğru olmayan söz söyleme kötülüğü?', answer: 'Yalan', clues: ['Dürüstlüğün zıttı', 'Münafıklık alameti olan davranış'] },
    { letter: 'Y', question: 'Kur\'an-ı Kerim\'in kalbi olarak nitelendirilen, adını ilk ayetindeki harflerden alan meşhur surenin adı nedir?', answer: 'Yasin', clues: ['Kur\'an\'ın kalbi', 'Ölülere ve dirilere okunan meşhur sure'] }
  ],
  Z: [
    { letter: 'Z', question: 'Maddi durumu iyi olan Müslümanların yılda bir kez mallarının belirli bir kısmını fakirlere vermesi farz olan ibadet?', answer: 'Zekat', clues: ['İslam\'ın beş şartından biri', 'Mali temizlik ve paylaşım'] },
    { letter: 'Z', question: 'Dört büyük ilahi kitaptan biri olan ve Hz. Davut peygambere indirilen kutsal kitabın adı nedir?', answer: 'Zebur', clues: ['Hz. Davut\'nun kitabı', 'Mezmurlar olarak da bilinen kitap'] },
    { letter: 'Z', question: 'Allah\'ı anmak, O\'nu dille tesbih etmek ve kalple hatırlamak için yapılan dua ve anma eylemlerine ne denir?', answer: 'Zikir', clues: ['Sübhanallah, Elhamdülillah demek', 'Anmak, hatırlamak'] },
    { letter: 'Z', question: 'Mekke\'de Hz. Hacer ve Hz. İsmail çölde susuz kaldığında Kabe\'nin altından mucizevi bir şekilde çıkan kutsal su?', answer: 'Zemzem', clues: ['Kutsal su', 'Hacer validemizin bulduğu su'] }
  ]
};

// ==========================================
// 3. DOĞRU/YANLIŞ OYUNU İÇİN İDDİA HAVUZU
// ==========================================
export const TRUE_FALSE_DB: TrueFalseStatement[] = [
  { id: 'tf_1', statement: 'Namaz kılarken kıbleye yani Kudüs\'teki Mescid-i Aksa\'ya yöneliriz.', isCorrect: false, explanation: 'Namaz kılarken yöneldiğimiz kıblemiz Mekke\'deki Kabe\'dir. Mescid-i Aksa ise ilk kıblemizdir.', category: 'inanc_ibadet' },
  { id: 'tf_2', statement: 'İslam\'ın en temel şartı ve inanç kapısı Kelime-i Şehadet getirmektir.', isCorrect: true, explanation: 'Müslüman olmanın ilk ve en temel şartı Kelime-i Şehadet getirerek imanı dil ile ikrar etmektir.', category: 'inanc_ibadet' },
  { id: 'tf_3', statement: 'Kur\'an-ı Kerim\'de adı geçen bütün peygamberlerin hayatı (kıssası) anlatılır.', isCorrect: false, explanation: 'Kur\'an\'da 25 peygamberin ismi geçer fakat bazılarının kıssaları detaylı anlatılırken bazılarından sadece isim olarak bahsedilir.', category: 'tarih_siyer' },
  { id: 'tf_4', statement: 'Kur\'an-ı Kerim\'in en uzun suresi Bakara Suresi\'dir.', isCorrect: true, explanation: 'Bakara suresi 286 ayettir ve Kur\'an-ı Kerim\'in en uzun suresidir.', category: 'inanc_ibadet' },
  { id: 'tf_5', statement: 'Abdest alırken kulaklarimizi yıkamak abdestin farzlarından biridir.', isCorrect: false, explanation: 'Kulakları mesh etmek abdestin sünnetidir. Abdestin farzı dörttür: Yüzü yıkamak, kolları yıkamak, başı mesh etmek ve ayakları yıkamak.', category: 'inanc_ibadet' },
  { id: 'tf_6', statement: 'Gıybet etmek, bir insanın arkasından onun hoşuna gitmeyecek doğru şeyleri konuşmaktır.', isCorrect: true, explanation: 'Eğer söylenen şey yalan ise bu iftira olur. Doğru olan bir kusuru arkadan konuşmak ise gıybettir ve haramdır.', category: 'ahlak_adap' },
  { id: 'tf_7', statement: 'Peygamber Efendimiz Medine\'de dünyaya gelmiş, Mekke\'ye hicret etmiştir.', isCorrect: false, explanation: 'Peygamberimiz Mekke\'de doğmuş, Mekkelilerin baskısı üzerine Medine\'ye hicret etmiştir.', category: 'tarih_siyer' },
  { id: 'tf_8', statement: 'Doğayı korumak, sokaktaki hayvanlara su vermek de dinimizde birer sadaka sayılır.', isCorrect: true, explanation: 'Sadaka sadece para ile olmaz. Güler yüz göstermek, yolu temizlemek, hayvanlara merhamet etmek de birer sadakadır.', category: 'ahlak_adap' },
  { id: 'tf_9', statement: 'Kutsal kitaplardan Tevrat, Hz. İsa peygambere indirilmiştir.', isCorrect: false, explanation: 'Tevrat Hz. Musa\'ya indirilmiştir. Hz. İsa\'ya indirilen ilahi kitap ise İncil\'dir.', category: 'inanc_ibadet' },
  { id: 'tf_10', statement: 'Namazın her rekatında mutlaka Fatiha Suresi okunur.', isCorrect: true, explanation: 'Fatiha suresi namazın bütün rekatlarında okunması vacip/farz olan temel suredir.', category: 'inanc_ibadet' },
  { id: 'tf_11', statement: 'İlk insan ve ilk peygamber Hz. Nuh\'tur.', isCorrect: false, explanation: 'İlk insan ve ilk peygamber Hz. Adem\'dir. Hz. Nuh ise ulu\'l-azm (büyük) peygamberlerden ikincisidir.', category: 'tarih_siyer' },
  { id: 'tf_12', statement: 'Ramazan orucu akıl sağlığı yerinde ve ergenlik çağına gelmiş her Müslümana farzdır.', isCorrect: true, explanation: 'Sağlığı elveren, akıllı ve ergenliğe ulaşmış her Müslümanın Ramazan ayında oruç tutması farzdır.', category: 'inanc_ibadet' },
  { id: 'tf_13', statement: 'Yalan söylemek sadece şaka amaçlı yapılıyorsa dinimizde günah sayılmaz.', isCorrect: false, explanation: 'Peygamberimiz şaka bile olsa yalan söylemeyi yasaklamış, dürüstlüğü emretmiştir.', category: 'ahlak_adap' },
  { id: 'tf_14', statement: 'Peygamberimizin sözlerine, işlerine ve onaylarına genel olarak Sünnet denir.', isCorrect: true, explanation: 'Peygamberimizin hayat tarzı, ahlakı ve bizlere örnek olan davranışları Sünnet olarak adlandırılır.', category: 'inanc_ibadet' },
  { id: 'tf_15', statement: 'Zekat ibadeti, fakir olan Müslümanların zenginlere yardım etmesidir.', isCorrect: false, explanation: 'Tam aksine, zengin olan Müslümanların yılda bir kez mallarının %2.5\'ini fakir kardeşleriyle paylaşması farz olan bir ibadetür.', category: 'inanc_ibadet' },
  { id: 'tf_16', statement: 'Mikail, kıyamet günü sur borusuna üfleyecek olan melek görevlidir.', isCorrect: false, explanation: 'Sur borusuna üfleyecek olan melek İsrafil\'dir. Mikail ise doğa olaylarını ve rızıkları düzenlemekle görevlidir.', category: 'inanc_ibadet' },
  { id: 'tf_17', statement: 'Kur\'an-ı Kerim toplam 114 sureden oluşmaktadır.', isCorrect: true, explanation: 'Kur\'an-ı Kerim Fatiha suresi ile başlar, Nas suresi ile biter ve toplam 114 suresi vardır.', category: 'inanc_ibadet' },
  { id: 'tf_18', statement: 'Peygamberimizin kabri şerifi Mekke\'deki Kabe\'nin hemen yanındadır.', isCorrect: false, explanation: 'Peygamberimizin kabri Medine\'deki Mescid-i Nebevi\'nin içinde, Ravza-i Mutahhara adı verilen yerdedir.', category: 'tarih_siyer' },
  { id: 'tf_19', statement: 'Uhud Savaşı\'nda okçuların yerlerini terk etmesi Müslüman ordusunun zor duruma düşmesine neden olmuştur.', isCorrect: true, explanation: 'Okçular tepesindeki askerler savaşın kazanıldığını düşünerek yerlerini terk etmiş ve arkadan kuşatılmaya sebep olmuşlardır.', category: 'tarih_siyer' },
  { id: 'tf_20', statement: 'Bir kimseye emanet edilen eşyayı korumak ve sahibine geri vermek güzel ahlakın gereğidir.', isCorrect: true, explanation: 'Emanete hıyanet etmemek, onu korumak Peygamberimizin en belirgin ahlak özelliklerindendir (Muhammedü\'l-Emin).', category: 'ahlak_adap' },
  { id: 'tf_21', statement: 'Dinimize göre anne ve babaya iyi davranmak, onlara güzel söz söylemek birer farz ibadettir.', isCorrect: true, explanation: 'Kur\'an-ı Kerim\'de anne-babaya iyi davranılması, onlara "öf" bile denmemesi kesin bir dille emredilmiştir.', category: 'ahlak_adap' },
  { id: 'tf_22', statement: 'Kur\'an-ı Kerim\'de ismi en çok geçen peygamber Hz. İsa\'dır.', isCorrect: false, explanation: 'Kur\'an-ı Kerim\'de ismi en çok zikredilen peygamber, 136 kez ile Hz. Musa\'dır.', category: 'tarih_siyer' },
  { id: 'tf_23', statement: 'Mekke\'den Medine\'ye hicret eden Müslümanlara Ensar denir.', isCorrect: false, explanation: 'Hicret eden Mekkeli Müslümanlara Muhacir denir. Onlara yardım eden Medineli Müslümanlara ise Ensar adı verilir.', category: 'tarih_siyer' },
  { id: 'tf_24', statement: 'Kutsal kitabımız Kur\'an-ı Kerim, Hz. Ebubekir döneminde kitap (mushaf) haline getirilmiştir.', isCorrect: true, explanation: 'Savaşlarda hafızların şehit olması üzerine Hz. Ebubekir döneminde Kur\'an sayfaları birleştirilerek kitap haline getirilmiştir.', category: 'tarih_siyer' },
  { id: 'tf_25', statement: 'Müslümanların kutsal mescitlerinden olan Mescid-i Aksa, Kudüs şehrinde yer almaktadır.', isCorrect: true, explanation: 'Mescid-i Aksa, Müslümanların ilk kıblesidir ve Filistin\'in Kudüs kentindedir.', category: 'inanc_ibadet' },
  { id: 'tf_26', statement: 'Hz. Yunus peygamber, dev bir kuşun karnında dua ederek kurtulmuştur.', isCorrect: false, explanation: 'Hz. Yunus peygamber, fırtınalı denize atıldıktan sonra büyük bir balığın (balinanın) karnında günlerce tövbe ederek kurtulmuştur.', category: 'tarih_siyer' },
  { id: 'tf_27', statement: 'Ezan okuyan görevli kişiye Müezzin, namaz kıldıran kişiye ise İmam denir.', isCorrect: true, explanation: 'Müezzin ezanla namaza çağırır, İmam ise cemaate namaz kıldırır.', category: 'inanc_ibadet' },
  { id: 'tf_28', statement: 'Peygamber Efendimiz çocuklarla karşılaşınca onlara selam vermez, sadece büyüklerin selamını alırdı.', isCorrect: false, explanation: 'Peygamberimiz çocuklara çok değer verir, onlarla selamlaşır, hatırlarını sorar ve başlarını okşardı.', category: 'ahlak_adap' },
  { id: 'tf_29', statement: 'Dinimizde gıybet etmek kul hakkı kapsamına girer.', isCorrect: true, explanation: 'Gıybet, konuşulan kişinin onurunu zedelediği için bir kul hakkı ihlalidir ve o kişiyle helalleşmek gerekir.', category: 'ahlak_adap' },
  { id: 'tf_30', statement: 'Arapça harflerden "Elif" harfi, kendinden sonra gelen harfle birleşmeyen harflerden biridir.', isCorrect: true, explanation: 'Elif, Dal, Zel, Ra, Ze, Vav harfleri kendilerinden sonra gelen harflerle birleşmezler.', category: 'inanc_ibadet' }
];

// ==========================================
// 4. KELİME BULMACA VE CAMİ YAPMACA SÖZLÜĞÜ
// ==========================================
export const VOCABULARY_DB: VocabularyWord[] = [
  { word: 'ABDEST', category: 'İbadet ve Temizlik', clue: 'Namaz kılmak ve Kabe\'yi tavaf etmek için belirli azaları yıkayarak yapılan ibadet temizliği.' },
  { word: 'ADALET', category: 'Güzel Ahlak', clue: 'Her hak sahibine hakkını teslim etmek, tarafsız olmak, evrendeki nizamın temeli olan denge.' },
  { word: 'CEBRAİL', category: 'Melekler', clue: 'Allah\'ın gönderdiği vahiyleri peygamberlere ulaştırmakla görevli en büyük melek.' },
  { word: 'CENNET', category: 'Ahiret Hayatı', clue: 'Müminlerin ebedi kalacakları, nehirler akan, her türlü nimetin bulunduğu ödül yurdu.' },
  { word: 'DÜRÜSTLÜK', category: 'Güzel Ahlak', clue: 'İnsanın sözünde ve işinde doğru olması, yalandan ve hileden tamamen uzak durması erdemi.' },
  { word: 'EBUBEKİR', category: 'Sahabeler', clue: 'Peygamberimizin en yakın dostu, hicret arkadaşı ve İslam tarihinin ilk halifesi.' },
  { word: 'ESMAÜLHÜSNA', category: 'İnanç Esasları', clue: 'Yaratıcımız Allah\'ın Kur\'an-ı Kerim\'de geçen en güzel 99 isminin genel adı.' },
  { word: 'EZAN', category: 'İbadet ve Şiar', clue: 'Namaz vaktinin girdiğini müminlere ilan eden, günde 5 vakit minarelerden okunan çağrı.' },
  { word: 'FARZ', category: 'Dini Hükümler', clue: 'Allah\'ın biz Müslümanlardan kesin olarak yapmamızı istediği, namaz kılmak gibi kesin emirler.' },
  { word: 'GIYBET', category: 'Ahlaki Yasaklar', clue: 'Bir kimsenin arkasından, duyduğunda hoşlanmayacağı kusurlarını konuşma günahı.' },
  { word: 'GUSÜL', category: 'İbadet ve Temizlik', clue: 'Tüm vücudun kuru yer kalmayacak şekilde yıkanmasıyla gerçekleştirilen boy abdesti.' },
  { word: 'HADİS', category: 'Dini Kaynaklar', clue: 'Peygamberimizin söylediği güzel sözler, yaptığı işler ve sahabeden görüp onayladığı şeyler.' },
  { word: 'HİCRET', category: 'İslam Tarihi', clue: 'Müslümanların baskı ve zulümden kaçarak Mekke\'den Medine\'ye göç etmesi tarihi olayı.' },
  { word: 'İBADET', category: 'Kulluk Vazifesi', clue: 'Allah\'ın rızasını kazanmak için yaptığımız namaz, oruç, zekat gibi kulluk görevleri.' },
  { word: 'İHLAS', category: 'Güzel Ahlak', clue: 'İbadetleri gösterişten uzak, sadece ve sadece Allah rızası için yapma samimiyeti.' },
  { word: 'İMAN', category: 'İnanç Esasları', clue: 'Allah\'ın varlığına, meleklerine, kitaplarına, peygamberlerine kalpten inanma durumu.' },
  { word: 'KABE', category: 'Kutsal Mekanlar', clue: 'Mekke\'de bulunan, Müslümanların namaz kılarken yöneldiği siyah örtülü mukaddes ev.' },
  { word: 'KIYAMET', category: 'Ahiret Hayatı', clue: 'Dünya hayatının son bulup evrenin yıkılacağı ve ahiret hesabının başlayacağı büyük gün.' },
  { word: 'LOKMAN', category: 'Kur\'an Kahramanları', clue: 'Kur\'an-ı Kerim\'de adı geçen, tıp bilgini ve oğluna verdiği ahlaki öğütlerle tanınan bilge şahsiyet.' },
  { word: 'MERHAMET', category: 'Güzel Ahlak', clue: 'Varlıkların acısını yüreğinde hissetmek, onlara şefkat göstermek ve korumak duygusu.' },
  { word: 'MİKAİL', category: 'Melekler', clue: 'Dört büyük melekten biri olan, rüzgar, yağmur gibi doğa olaylarını düzenleyen melek.' },
  { word: 'MÜEZZİN', category: 'Cami ve Görevliler', clue: 'Camilerde namaz vakitlerinde ezan okuyan, kamet getiren ses rengi güzel görevli kişi.' },
  { word: 'NAMAZ', category: 'İbadet ve Temizlik', clue: 'Günde 5 vakit yerine getirilen, dinin direği ve müminin miracı kabul edilen ibadet.' },
  { word: 'ORUÇ', category: 'İbadetler', clue: 'Ramazan ayında imsaktan akşam vaktine kadar yeme içmeyi keserek yapılan nefis terbiyesi.' },
  { word: 'ÖMER', category: 'Sahabeler', clue: 'Adaleti, cesareti ve kararlılığıyla bilinen, İslam tarihinin ikinci halifesi olan sahabi.' },
  { word: 'PEYGAMBER', category: 'İnanç Esasları', clue: 'Allah\'tan aldığı vahiyleri insanlara ulaştırmakla görevlendirilmiş ilahi elçiler.' },
  { word: 'SABIR', category: 'Güzel Ahlak', clue: 'Zorluklar karşısında telaş yapmadan, pes etmeden direnme ve kararlılık gösterme gücü.' },
  { word: 'SECDE', category: 'İbadet Adımları', clue: 'Namaz kılarken elleri, dizleri ve alnı yere koyarak Allah\'a en yakın olunan duruş.' },
  { word: 'SÜNNET', category: 'Dini Kaynaklar', clue: 'Peygamberimizin yaptığı ve bizlere de yapmamızı tavsiye ettiği güzel alışkanlıkları.' },
  { word: 'ŞÜKÜR', category: 'İbadetler', clue: 'Verdiği sayısız nimetler için Allah\'a dille hamd edip teşekkür etme ibadeti.' },
  { word: 'TEVHİD', category: 'İnanç Esasları', clue: 'Allah\'ın bir ve tek olduğuna, ortağı ve benzeri bulunmadığına inanmak ilkesi.' },
  { word: 'UHUD', category: 'İslam Tarihi', clue: 'Müşriklerle yapılan ve okçular tepesindeki askerlerin yerlerini terk ettiği dağ savaşı.' },
  { word: 'UMRE', category: 'İbadetler', clue: 'Hac mevsimi haricinde herhangi bir vakitte Mekke\'yi ve Kabe\'yi ziyaret etme ibadeti.' },
  { word: 'ÜMMET', category: 'İslam Toplumu', clue: 'Bir peygamberin çağrısına inanıp onun gösterdiği izden giden inananlar topluluğu.' },
  { word: 'VAHİY', category: 'İnanç Esasları', clue: 'Allah\'ın emir ve yasaklarını melek Cebrail vasıtasıyla peygamberlerine bildirmesi.' },
  { word: 'YUSUF', category: 'Peygamberler', clue: 'Güzelliğiyle meşhur olan, kardeşleri tarafından kuyuya atılan iffet abidesi peygamber.' },
  { word: 'ZEKAT', category: 'İbadetler', clue: 'Zengin Müslümanların yılda bir kez mallarının yüzde iki buçuğunu fakirlere vermesi farzı.' },
  { word: 'MUHACİR', category: 'İslam Tarihi', clue: 'Mekke\'deki baskılardan kaçarak Medine\'ye hicret eden göçmen Müslümanlara verilen ad.' },
  { word: 'ENSAR', category: 'İslam Tarihi', clue: 'Medine\'ye göç eden Mekkeli Müslümanları evlerinde ağırlayıp her şeyini paylaşan yardımcı Medineli Müslümanlar.' },
  { word: 'MUSHAF', category: 'Dini Kaynaklar', clue: 'Kur\'an-ı Kerim\'in iki kapak arasına getirilerek kitaplaşmış ilk haline verilen isim.' },
  { word: 'SADAKA', category: 'İbadetler', clue: 'Allah rızası için fakirlere yapılan maddi yardım veya güler yüz göstermek gibi her türlü manevi iyilik.' },
  { word: 'VACİP', category: 'Dini Hükümler', clue: 'Farz kadar kesin olmasa da yapılması dinen gerekli olan ibadetler (örn: kurban kesmek, bayram namazı).' },
  { word: 'MUCİZE', category: 'İnanç Esasları', clue: 'Peygamberlerin hak olduğunu kanıtlamak için Allah\'ın izniyle gerçekleştirdiği olağanüstü olaylar.' },
  { word: 'TAKVA', category: 'Güzel Ahlak', clue: 'Allah\'ın sevgisini kaybetmekten korkarak, O\'nun emirlerine sarılmak ve yasaklarından titizlikle kaçınmak.' },
  { word: 'TÖVBE', category: 'İbadetler', clue: 'Yapılan bir hatadan pişman olup bir daha yapmamaya söz vererek Allah\'tan bağışlanma dilemek.' },
  { word: 'MİRAÇ', category: 'İslam Tarihi', clue: 'Peygamberimizin göğe yükselerek Allah\'ın huzuruna kabul edildiği mucizevi manevi yolculuk.' },
  { word: 'SAHABE', category: 'İslam Tarihi', clue: 'Peygamber Efendimizi iman gözüyle görüp onunla sohbet etmiş ve Müslüman olarak vefat etmiş kişiler.' },
  { word: 'KIBLE', category: 'İbadetler', clue: 'Müslümanların namaz kılarken yöneldikleri Kabe-i Muazzama\'nın bulunduğu yön.' },
  { word: 'TECVİD', category: 'Dini Kaynaklar', clue: 'Kur\'an-ı Kerim\'i harflerin çıkış yerlerine, uzatma ve tutma kurallarına göre en güzel şekilde okuma ilmi.' },
  { word: 'GAZVE', category: 'İslam Tarihi', clue: 'Sevgili Peygamberimizin ordunun başında komutan olarak bizzat yer aldığı askeri sefer ve savaşlar.' },
  { word: 'BİSMİLLAH', category: 'Günlük Hayat', clue: 'Her işe başlarken "Allah\'ın adıyla" diyerek söylediğimiz hayırlı başlangıç cümlesi.' },
  { word: 'SEVAP', category: 'Ahiret Hayatı', clue: 'Hayırlı işer ve ibadetler karşılığında Allah\'ın ahirette bize vereceği ödül ve puanlar.' },
  { word: 'İHLAS', category: 'İnanç Esasları', clue: 'Tüm niyet ve ibadetleri sadece Allah rızasını kazanmak için samimiyetle yapma ilkesi.' },
  { word: 'ZEMZEM', category: 'Kutsal Mekanlar', clue: 'Kabe\'nin hemen yanından çıkan, Hz. İsmail ve annesi Hacer\'e ikram edilen kutsal su.' },
  { word: 'MÜMİN', category: 'İnanç Esasları', clue: 'Allah\'a ve İslam\'ın inanç esaslarına şüphe duymadan kalpten inanmış, güven veren kişi.' },
  { word: 'MÜSLÜMAN', category: 'İnanç Esasları', clue: 'Allah\'a teslim olan, din olarak İslam\'ı seçen ve peygamberimizin yolundan giden kişi.' },
  { word: 'ZİKİR', category: 'İbadetler', clue: 'Allah\'ı dille ve kalple anmak, O\'nu sürekli hatırlayarak tesbih etmek.' },
  { word: 'SILAİRAHİM', category: 'Güzel Ahlak', clue: 'Akrabaları ziyaret etmek, anne-baba ve yakın çevreyle bağları koparmayıp onları gözetmek.' },
  { word: 'TEVEKKÜL', category: 'İnanç Esasları', clue: 'Bir iş için elinden gelen tüm çabayı gösterdikten sonra sonucu Allah\'a bırakıp O\'na güvenmek.' }
];

// ==========================================
// 5. GENEL RASTGELE YARDIMCILARI
// ==========================================

// Diziyi karıştırmak için Fischer-Yates algoritması
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Harf sorusunun kategorisini belirleyen yardımcı
export function getAZQuestionCategory(answer: string): 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' {
  const inancIbadetWords = [
    'azrail', 'abdest', 'allah', 'besmele', 'beytullah', 'cebrail', 'cennet', 'cuma', 'cemaat', 
    'ezan', 'esmaül hüsna', 'ebedi', 'fatiha', 'farz', 'firavun', 'fitre', 'gusül', 'günah', 
    'incil', 'iman', 'ihlas', 'ibadet', 'kabe', 'kuran', 'kıyamet', 'kevser', 'mikail', 'namaz', 
    'niyet', 'oruç', 'otuz', 'öğle', 'ruku', 'ramazan', 'resul', 'rızık', 'secde', 'sünnet', 
    'saf', 'şehadet', 'şeytan', 'şükür', 'şefaat', 'tevrat', 'tevhid', 'temizlik', 'umre', 
    'uyku', 'ümmet', 'ümit', 'üç', 'vahiy', 'vacip', 'zekat', 'zebur', 'zikir', 'zemzem'
  ];
  
  const cleanWord = (str: string) => {
    return str
      .replace(/I/g, 'ı')
      .replace(/İ/g, 'i')
      .toLowerCase()
      .trim()
      .replace(/[^a-zçğışöü0-9]/g, '');
  };

  const clean = cleanWord(answer);
  if (inancIbadetWords.includes(clean)) return 'inanc_ibadet';
  
  const ahlakAdapWords = [
    'ahlak', 'dürüstlük', 'lale', 'lütuf', 'müezzin', 'öksüz', 'paylaşmak', 'selam', 'uhuvvet', 
    'vatan', 'yalan', 'sılairahim', 'tevekkül', 'yetim', 'ırmak', 'ırk', 'ıslah'
  ];
  if (ahlakAdapWords.includes(clean)) return 'ahlak_adap';
  
  return 'tarih_siyer'; // diğer tarihi/siyer şahsiyetleri için
}

// Belirli bir harf ve kategori için rastgele bir soru seçer
export function getRandomQuestionForLetter(letter: string, category: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' | 'all' = 'all'): AZQuestion {
  const uppercaseLetter = letter.toUpperCase();
  const list = AZ_QUESTIONS_DB[uppercaseLetter] || [];
  
  const filtered = category === 'all'
    ? list
    : list.filter(q => getAZQuestionCategory(q.answer) === category);
  
  const finalList = filtered.length > 0 ? filtered : list;
  const randomIndex = Math.floor(Math.random() * finalList.length);
  return finalList[randomIndex];
}

// Rastgele True/False iddiaları seçer
export function getRandomTrueFalseStatements(count: number): TrueFalseStatement[] {
  const shuffled = shuffleArray(TRUE_FALSE_DB);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Kategoriye göre rastgele True/False iddiaları seçer
export function getRandomTrueFalseStatementsByCategory(category: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' | 'all', count: number): TrueFalseStatement[] {
  const filtered = category === 'all' 
    ? TRUE_FALSE_DB 
    : TRUE_FALSE_DB.filter(item => item.category === category);
  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Rastgele kelime bulmaca ögeleri seçer
export function getRandomVocabularyWords(count: number): VocabularyWord[] {
  const shuffled = shuffleArray(VOCABULARY_DB);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Kategoriye göre rastgele kelime bulmaca ögeleri seçer
export function getRandomVocabularyWordsByCategory(group: 'inanc_ibadet' | 'tarih_siyer' | 'ahlak_adap' | 'all', count: number): VocabularyWord[] {
  const mapping: Record<string, string> = {
    'İbadet ve Temizlik': 'inanc_ibadet',
    'Melekler': 'inanc_ibadet',
    'İnanç Esasları': 'inanc_ibadet',
    'İbadet ve Şiar': 'inanc_ibadet',
    'Kulluk Vazifesi': 'inanc_ibadet',
    'İbadet Adımları': 'inanc_ibadet',
    'Ahiret Hayatı': 'inanc_ibadet',
    'İbadetler': 'inanc_ibadet',
    'Kutsal Mekanlar': 'inanc_ibadet',
    
    'Sahabeler': 'tarih_siyer',
    'İslam Tarihi': 'tarih_siyer',
    'Kur\'an Kahramanları': 'tarih_siyer',
    'Peygamberler': 'tarih_siyer',
    
    'Güzel Ahlak': 'ahlak_adap',
    'Ahlaki Yasaklar': 'ahlak_adap',
    'Günlük Hayat': 'ahlak_adap',
    'İslam Toplumu': 'ahlak_adap'
  };

  const filtered = group === 'all'
    ? VOCABULARY_DB
    : VOCABULARY_DB.filter(item => mapping[item.category] === group);
    
  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export const GENERAL_KNOWLEDGE_QUESTIONS: UnifiedQuizQuestion[] = [
  {
    id: 'gk_1',
    question: "Matematikte 'Sıfır' (0) rakamını ilk kez kullanan ve Cebir biliminin kurucusu kabul edilen ünlü Müslüman bilim insanı kimdir?",
    options: ["Harezmi", "İbn-i Sina", "Biruni", "Ali Kuşçu"],
    correct: "Harezmi",
    wisdom: "Harezmi, yazdığı eserlerle sıfır rakamını tüm dünyaya tanıtmış ve Cebir biliminin temellerini atmıştır.",
    source: "Genel Kültür - Bilim Tarihi"
  },
  {
    id: 'gk_2',
    question: "Avrupa'da 'Avicenna' olarak tanınan ve tıp alanındaki kitabı yüzyıllarca üniversitelerde okutulan büyük hekim kimdir?",
    options: ["İbn-i Rüşd", "İbn-i Sina", "Farabi", "Gazali"],
    correct: "İbn-i Sina",
    wisdom: "İbn-i Sina, 'El-Kanun fi't-Tıb' eseriyle tıp tarihine yön vermiş dahi bir hekim ve filozoftur.",
    source: "Genel Kültür - Bilim Tarihi"
  },
  {
    id: 'gk_3',
    question: "Diyarbakır Artuklu Sarayı'nda yaşamış, robotik ve sibernetik biliminin kurucusu kabul edilen dahi mucit kimdir?",
    options: ["El-Cezeri", "Piri Reis", "Mimar Sinan", "Uluğ Bey"],
    correct: "El-Cezeri",
    wisdom: "El-Cezeri, su gücüyle çalışan saatler, otomatik kapılar ve robotlar geliştirerek robotik bilimine öncülük etmiştir.",
    source: "Genel Kültür - Mucitler"
  },
  {
    id: 'gk_4',
    question: "Dünyamızın ısı ve ışık kaynağı olan, Dünya'ya en yakın yıldız hangisidir?",
    options: ["Kutup Yıldızı", "Güneş", "Sirius", "Mars"],
    correct: "Güneş",
    wisdom: "Güneş de bir yıldızdır ve dünyamızdaki yaşamın devamı için gereken ısı ve ışığı sağlar.",
    source: "Genel Kültür - Gökbilim"
  },
  {
    id: 'gk_5',
    question: "Mavi Gezegen olarak bilinen ve üzerinde yaşam barındırdığı bilinen tek gezegen hangisidir?",
    options: ["Jüpiter", "Venüs", "Dünya", "Mars"],
    correct: "Dünya",
    wisdom: "Dünya, atmosferi ve sıvı suyu sayesinde hayatın devam edebildiği özel tasarlanmış yuvamızdır.",
    source: "Genel Kültür - Coğrafya"
  },
  {
    id: 'gk_6',
    question: "Mimar Sinan'ın İstanbul'da yaptığı ve 'Kalfalık Eserim' olarak nitelendirdiği muhteşem cami hangisidir?",
    options: ["Selimiye Camii", "Süleymaniye Camii", "Şehzade Camii", "Fatih Camii"],
    correct: "Süleymaniye Camii",
    wisdom: "Süleymaniye Camii, estetiği, akustiği ve mimari dayanıklılığı ile Mimar Sinan'ın en nadide kalfalık şaheseridir.",
    source: "Genel Kültür - Sanat Tarihi"
  },
  {
    id: 'gk_7',
    question: "Mimar Sinan'ın 'Ustalık Eserim' dediği ve Edirne'de bulunan ünlü cami hangisidir?",
    options: ["Selimiye Camii", "Süleymaniye Camii", "Ortaköy Camii", "Sultanahmet Camii"],
    correct: "Selimiye Camii",
    wisdom: "Edirne'deki Selimiye Camii, UNESCO Dünya Mirası listesinde yer alan mimari bir zirvedir.",
    source: "Genel Kültür - Sanat Tarihi"
  },
  {
    id: 'gk_8',
    question: "Osmanlı döneminde kendi yaptığı kanatlarla İstanbul Boğazı'nda Galata Kulesi'nden Üsküdar'a uçan ünlü Türk mucit kimdir?",
    options: ["Lagari Hasan Çelebi", "Hezarfen Ahmed Çelebi", "Katip Çelebi", "Evliya Çelebi"],
    correct: "Hezarfen Ahmed Çelebi",
    wisdom: "Hezarfen Ahmed Çelebi, kuşların kanat yapısını inceleyerek uçuş denemeleri yapmış tarihi bir havacıdır.",
    source: "Genel Kültür - Mucitler"
  },
  {
    id: 'gk_9',
    question: "İstiklal Marşı'mızın şairi olan, vatan ve ahlak değerlerini şiirlerinde en güzel şekilde işleyen yazar kimdir?",
    options: ["Necip Fazıl Kısakürek", "Mehmet Akif Ersoy", "Yahya Kemal Beyatlı", "Cahit Sıtkı Tarancı"],
    correct: "Mehmet Akif Ersoy",
    wisdom: "Mehmet Akif Ersoy, bağımsızlık mücadelemizi destanlaştıran İstiklal Marşı'nı yazıp milletimize armağan etmiştir.",
    source: "Genel Kültür - Edebiyat"
  },
  {
    id: 'gk_10',
    question: "Fatih Sultan Mehmet'in 1453 yılında fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açtığı tarihi şehir hangisidir?",
    options: ["Roma", "Kudüs", "İstanbul", "Bağdat"],
    correct: "İstanbul",
    wisdom: "İstanbul'un fethi, hem dünya tarihinin akışını değiştirmiş hem de Peygamberimizin kutlu müjdesine nail olunmasını sağlamıştır.",
    source: "Genel Kültür - Tarih"
  },
  {
    id: 'gk_11',
    question: "Türkiye Cumhuriyeti'nin başkenti hangi şehrimizdir?",
    options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
    correct: "Ankara",
    wisdom: "Ankara, Türkiye Cumhuriyeti'nin yönetim merkezi ve başkentidir.",
    source: "Genel Kültür - Coğrafya"
  },
  {
    id: 'gk_12',
    question: "Dünyanın en yüksek dağı olarak kabul edilen ve Himalayalar'da bulunan dağ hangisidir?",
    options: ["Ağrı Dağı", "Everest Dağı", "Mont Blanc", "Fujiyama Dağı"],
    correct: "Everest Dağı",
    wisdom: "Everest Dağı, deniz seviyesinden 8.848 metre yüksekliğiyle dünyanın en yüksek zirvesidir.",
    source: "Genel Kültür - Coğrafya"
  },
  {
    id: 'gk_13',
    question: "Sıvı haldeki suyun donarak katı buz haline geçtiği sıcaklık derecesi kaçtır?",
    options: ["0 °C", "10 °C", "-5 °C", "100 °C"],
    correct: "0 °C",
    wisdom: "Saf su, deniz seviyesinde 0 santigrat derecede donmaya başlar.",
    source: "Genel Kültür - Fen Bilgisi"
  },
  {
    id: 'gk_14',
    question: "Yerçekimi kanununu ağaçtan düşen bir elmayı gözlemleyerek formülleştiren ünlü fizikçi kimdir?",
    options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
    correct: "Isaac Newton",
    wisdom: "Newton, kütleçekim yasasını keşfederek modern fiziğin kurucularından biri olmuştur.",
    source: "Genel Kültür - Fizik"
  },
  {
    id: 'gk_15',
    question: "Vücudumuzda kirli kanı temizlemek üzere akciğere gönderen ve temiz kanı vücuda pompalayan hayati organ hangisidir?",
    options: ["Karaciğer", "Mide", "Beyin", "Kalp"],
    correct: "Kalp",
    wisdom: "Kalp, bir pompa gibi çalışarak vücudumuzun her noktasına oksijen taşıyan kanı ulaştırır.",
    source: "Genel Kültür - Biyoloji"
  },
  {
    id: 'gk_16',
    question: "Tarihte ilk dünya haritalarından birini çizen ve Kitab-ı Bahriye isimli denizcilik kitabını yazan ünlü Osmanlı denizcisi kimdir?",
    options: ["Barbaros Hayrettin Paşa", "Piri Reis", "Seydi Ali Reis", "Turgut Reis"],
    correct: "Piri Reis",
    wisdom: "Piri Reis, ceylan derisi üzerine çizdiği harikulade dünya haritasıyla coğrafya tarihine damga vurmuştur.",
    source: "Genel Kültür - Coğrafya"
  },
  {
    id: 'gk_17',
    question: "Gökyüzündeki su damlacıklarının güneş ışınlarıyla kırılmasıyla oluşan rengarenk gökyüzü kuşağına ne ad verilir?",
    options: ["Kutup Işıkları", "Samanyolu", "Gökkuşağı", "Meteor Yağmuru"],
    correct: "Gökkuşağı",
    wisdom: "Gökkuşağı, ışığın su damlaları içinden geçerken yansıması ve kırılması sonucu yedi renge ayrılmasıyla oluşur.",
    source: "Genel Kültür - Doğa Bilimleri"
  },
  {
    id: 'gk_18',
    question: "Türkiye'nin sınırları içerisindeki en uzun nehri hangisidir?",
    options: ["Fırat Nehri", "Dicle Nehri", "Kızılırmak", "Sakarya Nehri"],
    correct: "Kızılırmak",
    wisdom: "Kızılırmak, 1355 km uzunluğuyla Türkiye topraklarında doğup yine Türkiye topraklarında denize dökülen en uzun nehrimizdir.",
    source: "Genel Kültür - Coğrafya"
  },
  {
    id: 'gk_19',
    question: "Karagöz ile Hacivat hangi geleneksel Türk tiyatrosu türüne aittir?",
    options: ["Gölge Oyunu", "Meddah", "Orta Oyunu", "Kukla"],
    correct: "Gölge Oyunu",
    wisdom: "Gölge oyunu, arkadan aydınlatılmış bir perde üzerine deri tasvirlerin yansıtılmasına dayanan geleneksel bir sanattır.",
    source: "Genel Kültür - Kültür Sanat"
  },
  {
    id: 'gk_20',
    question: "Osmanlı Devleti'nin kurucusu kabul edilen padişah kimdir?",
    options: ["Orhan Gazi", "Osman Gazi", "I. Murad", "Fatih Sultan Mehmet"],
    correct: "Osman Gazi",
    wisdom: "Osman Gazi, 1299 yılında Söğüt ve Domaniç civarında Osmanlı Beyliği'ni kurmuştur.",
    source: "Genel Kültür - Tarih"
  },
  {
    id: 'gk_21',
    question: "Canlıların kalıtsal özelliklerini (saç rengi, göz rengi vb.) taşıyan ve hücre çekirdeğinde bulunan yönetici molekülün adı nedir?",
    options: ["Protein", "DNA", "Vitamin", "Hücre Zarı"],
    correct: "DNA",
    wisdom: "DNA, hücrelerimizin nasıl çalışacağını belirleyen genetik bilgi kodlarını barındırır.",
    source: "Genel Kültür - Biyoloji"
  },
  {
    id: 'gk_22',
    question: "Bitkilerin güneş ışığı, su ve karbondioksit kullanarak kendi besinlerini üretme sürecine ne ad verilir?",
    options: ["Solunum", "Fotosentez", "Terleme", "Mayalanma"],
    correct: "Fotosentez",
    wisdom: "Fotosentez sayesinde bitkiler besin üretirken aynı zamanda havaya yaşam kaynağımız olan oksijeni salarlar.",
    source: "Genel Kültür - Botanik"
  },
  {
    id: 'gk_23',
    question: "Dünyanın en derin gölü kabul edilen ve Sibirya'da bulunan büyük tatlı su gölü hangisidir?",
    options: ["Hazar Gölü", "Van Gölü", "Baykal Gölü", "Lut Gölü"],
    correct: "Baykal Gölü",
    wisdom: "Baykal Gölü, hem dünyanın en derin gölüdür hem de dünyadaki tatlı su rezervinin yaklaşık %20'sini oluşturur.",
    source: "Genel Kültür - Coğrafya"
  },
  {
    id: 'gk_24',
    question: "Osmanlı padişahlarının devleti yönettiği ve şu an müze olan İstanbul'daki en ünlü tarihi saray hangisidir?",
    options: ["Dolmabahçe Sarayı", "Topkapı Sarayı", "Beylerbeyi Sarayı", "Çırağan Sarayı"],
    correct: "Topkapı Sarayı",
    wisdom: "Topkapı Sarayı, yaklaşık 400 yıl boyunca Osmanlı İmparatorluğu'nun idari ve ikamet merkezi olmuştur.",
    source: "Genel Kültür - Tarih"
  },
  {
    id: 'gk_25',
    question: "İletişimde dürüstlük, emanete sadakat ve yalandan kaçınmak gibi güzel davranışlar dinimizde hangi başlık altında toplanır?",
    options: ["İbadet", "Alek", "Fıkıh", "Tevhid"], // standard typo fallback
    correct: "Ahlak",
    wisdom: "Güzel ahlak, dinimizin inanç ve ibadetlerden sonra gelen en önemli ve tamamlayıcı ayağıdır.",
    source: "Genel Kültür - Ahlak"
  }
];
// Overwrite options list item to Ahlak:
GENERAL_KNOWLEDGE_QUESTIONS[24].options = ["İbadet", "Ahlak", "Fıkıh", "Tevhid"];

