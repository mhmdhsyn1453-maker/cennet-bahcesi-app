import React, { useState } from 'react';
import { GameData, KelimeQuestion, DilemmaQuestion, GameZone } from '../types';
import { defaultGameData } from '../data/defaultQuestions';
import { ArrowLeft, Save, Plus, Trash2, RotateCcw, ShieldAlert, Check } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface SoruEditoruProps {
  gameData: GameData;
  onSave: (newData: GameData) => void;
  onResetToDefault: () => void;
  onClose: () => void;
}

export const SoruEditoru: React.FC<SoruEditoruProps> = ({
  gameData,
  onSave,
  onResetToDefault,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'kelime' | 'dilemma'>('kelime');
  const [currentData, setCurrentData] = useState<GameData>({ ...gameData });
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showConfirmReset, setShowConfirmReset] = useState<boolean>(false);

  // 1. Kelime Arkeolojisi Form States
  const [newKelime, setNewKelime] = useState({
    turkishWord: '',
    arabicRoot: '',
    description: '',
    clue1: '',
    clue2: '',
    clue3: '',
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
    correctOption: '',
    quranReference: '',
    wisdomNote: ''
  });

  // 2. Dilemma Form States
  const [newDilemma, setNewDilemma] = useState({
    title: '',
    scenario: '',
    opt1_text: '',
    opt1_points: 10,
    opt1_virtue: '',
    opt1_feedback: '',
    opt2_text: '',
    opt2_points: 5,
    opt2_virtue: '',
    opt2_feedback: '',
    opt3_text: '',
    opt3_points: 0,
    opt3_virtue: '',
    opt3_feedback: ''
  });

  const handleAddNewKelime = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKelime.turkishWord || !newKelime.arabicRoot || !newKelime.correctOption) {
      triggerError('Lütfen gerekli alanları (Sözcük, Kök ve Doğru Seçeneği) doldurun.');
      return;
    }

    const created: KelimeQuestion = {
      id: `custom_k_${Date.now()}`,
      turkishWord: newKelime.turkishWord,
      arabicRoot: newKelime.arabicRoot,
      description: newKelime.description || 'Değerli kelime açıklaması.',
      clues: [
        newKelime.clue1 || 'İlk ipucu.',
        newKelime.clue2 || 'İkinci ipucu.',
        newKelime.clue3 || 'Üçüncü ipucu.'
      ].filter(c => c !== ''),
      options: [
        newKelime.opt1 || 'Seçenek A',
        newKelime.opt2 || 'Seçenek B',
        newKelime.opt3 || 'Seçenek C',
        newKelime.opt4 || 'Seçenek D'
      ],
      correctOption: newKelime.correctOption,
      quranReference: newKelime.quranReference || 'Özel Ayet Atıfı',
      wisdomNote: newKelime.wisdomNote || 'Özel tefekkür notu.'
    };

    const updated = {
      ...currentData,
      kelimeQuestions: [...currentData.kelimeQuestions, created]
    };
    setCurrentData(updated);
    onSave(updated);
    playSound('success');

    // Reset Form
    setNewKelime({
      turkishWord: '',
      arabicRoot: '',
      description: '',
      clue1: '',
      clue2: '',
      clue3: '',
      opt1: '',
      opt2: '',
      opt3: '',
      opt4: '',
      correctOption: '',
      quranReference: '',
      wisdomNote: ''
    });

    triggerSuccess('Yeni Kelime Sorusu Başarıyla Eklendi ve Kaydedildi!');
  };

  const handleAddNewDilemma = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDilemma.title || !newDilemma.scenario || !newDilemma.opt1_text) {
      triggerError('Lütfen gerekli alanları (Başlık, Senaryo ve En Az Bir Seçenek) belirtin.');
      return;
    }

    const created: DilemmaQuestion = {
      id: `custom_d_${Date.now()}`,
      title: newDilemma.title,
      scenario: newDilemma.scenario,
      options: [
        {
          text: newDilemma.opt1_text,
          points: Number(newDilemma.opt1_points),
          virtue: newDilemma.opt1_virtue || 'Erdem',
          feedback: newDilemma.opt1_feedback || 'Geri bildirim'
        },
        {
          text: newDilemma.opt2_text,
          points: Number(newDilemma.opt2_points),
          virtue: newDilemma.opt2_virtue || 'Erdem',
          feedback: newDilemma.opt2_feedback || 'Geri bildirim'
        },
        {
          text: newDilemma.opt3_text,
          points: Number(newDilemma.opt3_points),
          virtue: newDilemma.opt3_virtue || 'Erdem',
          feedback: newDilemma.opt3_feedback || 'Geri bildirim'
        }
      ].filter(o => o.text !== '')
    };

    const updated = {
      ...currentData,
      dilemmaQuestions: [...currentData.dilemmaQuestions, created]
    };
    setCurrentData(updated);
    onSave(updated);
    playSound('success');

    setNewDilemma({
      title: '',
      scenario: '',
      opt1_text: '',
      opt1_points: 10,
      opt1_virtue: '',
      opt1_feedback: '',
      opt2_text: '',
      opt2_points: 5,
      opt2_virtue: '',
      opt2_feedback: '',
      opt3_text: '',
      opt3_points: 0,
      opt3_virtue: '',
      opt3_feedback: ''
    });

    triggerSuccess('Yeni Ahlaki İkilem Başarıyla Eklendi ve Kaydedildi!');
  };

  const handleDeleteKelime = (id: string) => {
    if (currentData.kelimeQuestions.length <= 1) return;
    const filtered = currentData.kelimeQuestions.filter(q => q.id !== id);
    const updated = { ...currentData, kelimeQuestions: filtered };
    setCurrentData(updated);
    onSave(updated);
    playSound('tick');
    triggerSuccess('Soru Havuzundan Başarıyla Silindi!');
  };

  const handleDeleteDilemma = (id: string) => {
    if (currentData.dilemmaQuestions.length <= 1) return;
    const filtered = currentData.dilemmaQuestions.filter(q => q.id !== id);
    const updated = { ...currentData, dilemmaQuestions: filtered };
    setCurrentData(updated);
    onSave(updated);
    playSound('tick');
    triggerSuccess('İkilem Havuzundan Başarıyla Silindi!');
  };

  const handleResetAction = () => {
    setShowConfirmReset(true);
  };

  const confirmResetAll = () => {
    onResetToDefault();
    setCurrentData({ ...defaultGameData });
    setShowConfirmReset(false);
    playSound('success');
    triggerSuccess('Tüm Soru Havuzu Sıfırlandı ve Varsayılana Döndürüldü!');
  };

  const triggerError = (msg: string) => {
    setErrorMsg(msg);
    playSound('fail');
    setTimeout(() => {
      setErrorMsg(null);
    }, 4000);
  };

  const triggerSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg(null);
    }, 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 col relative" id="soru-editoru-bright">
      
      {/* Reset Confirmation Modal */}
      {showConfirmReset && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-rose-200 rounded-[2.5rem] p-6 max-w-sm w-full text-center shadow-xl space-y-4 animate-scale-up">
            <div className="w-16 h-16 bg-rose-50 border-2 border-rose-200 rounded-2xl flex items-center justify-center text-rose-500 text-3xl mx-auto">
              ⚠️
            </div>
            <h3 className="font-display font-black text-slate-800 text-lg uppercase">Soru Havuzu Sıfırlansın Mı?</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              Tüm soruları varsayılan ayarlara geri yüklemek istediğinize emin misiniz? Özel eklediğiniz sorular silinecektir.
            </p>
            <div className="flex gap-2 justify-center pt-2">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border-2 border-slate-250 text-slate-700 rounded-xl text-xs font-black cursor-pointer"
              >
                Geri Dön
              </button>
              <button
                onClick={confirmResetAll}
                className="px-4 py-2 bg-rose-500 hover:bg-rose-600 border-2 border-rose-700 text-white rounded-xl text-xs font-black cursor-pointer shadow-sm"
              >
                Evet, Sıfırla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Panel */}
      <div className="bg-white border-3 border-slate-200 rounded-[2rem] p-5 mb-6 flex flex-col sm:flex-row items-center justify-between shadow-sm gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border-2 border-slate-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="font-display font-black text-slate-800 text-lg uppercase">HOCA SORU & ATÖLYE ODASI</h2>
            <p className="text-xs text-slate-500 font-semibold">Buradan melek meclislerine kendi özel ahlak ve kelime sorularınızı ekleyebilirsiniz.</p>
          </div>
        </div>

        <button
          onClick={handleResetAction}
          className="flex items-center gap-1.5 px-4 py-2 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-xl border-2 border-rose-200 text-xs font-black cursor-pointer transition"
        >
          <RotateCcw className="w-4 h-4" /> Tümünü Sıfırla
        </button>
      </div>

      {/* Action Notification Box */}
      {successMsg && (
        <div className="bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-4 text-emerald-800 text-xs font-black mb-6 flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-emerald-600" />
          {successMsg}
        </div>
      )}

      {/* Error Alert Box */}
      {errorMsg && (
        <div className="bg-rose-50 border-3 border-rose-300 rounded-2xl p-4 text-rose-800 text-xs font-black mb-6 flex items-center gap-2 animate-shake">
          <Check className="w-4 h-4 text-rose-600 hidden" />
          <span className="text-rose-600 font-extrabold">⚠️ Hata:</span>
          {errorMsg}
        </div>
      )}

      {/* Main Grid: Form editor + List View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Adding Form holds inside bright card */}
        <div className="lg:col-span-8 bg-white border-3 border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col">
          
          {/* Internal sub-navigation tabs */}
          <div className="flex border-b-2 border-slate-100 pb-3 mb-6">
            <button
              onClick={() => setActiveTab('kelime')}
              className={`flex-1 text-center py-2 text-xs font-display font-black uppercase cursor-pointer tracking-wider border-b-3 transition-all ${
                activeTab === 'kelime'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Kelime Sorusu Ekle
            </button>
            <button
              onClick={() => setActiveTab('dilemma')}
              className={`flex-1 text-center py-2 text-xs font-display font-black uppercase cursor-pointer tracking-wider border-b-3 transition-all ${
                activeTab === 'dilemma'
                  ? 'border-rose-500 text-rose-600'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              Ahlak İkilemi Ekle
            </button>
          </div>

          {/* Form 1: Kelime Arkeolojisi */}
          {activeTab === 'kelime' && (
            <form onSubmit={handleAddNewKelime} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black text-slate-500 mb-1 uppercase">TÜRKÇE KELİME*</label>
                  <input
                    type="text"
                    required
                    value={newKelime.turkishWord}
                    onChange={(e) => setNewKelime({...newKelime, turkishWord: e.target.value})}
                    placeholder="Örn: Medeniyet, Emanet"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-amber-500 focus:bg-white focus:outline-none p-2.5 rounded-xl text-xs text-slate-800 uppercase font-display font-bold font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-500 mb-1 uppercase">ARAPÇA KÖK*</label>
                  <input
                    type="text"
                    required
                    value={newKelime.arabicRoot}
                    onChange={(e) => setNewKelime({...newKelime, arabicRoot: e.target.value})}
                    placeholder="Örn: e-m-n (Emânet kökü)"
                    className="w-full bg-slate-50 border-2 border-slate-200 focus:border-amber-500 focus:bg-white focus:outline-none p-2.5 rounded-xl text-xs text-slate-800 font-bold font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black text-slate-500 mb-1 uppercase">AÇIKLAMA VE BİLGECE YORUMU</label>
                <textarea
                  value={newKelime.description}
                  onChange={(e) => setNewKelime({...newKelime, description: e.target.value})}
                  rows={2}
                  placeholder="Kelimelerin Kuran ayetlerindeki tatlı anlam kökenine ilişkin açıklaması."
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-amber-500 focus:bg-white focus:outline-none p-2.5 rounded-xl text-xs text-slate-800 font-medium leading-relaxed"
                />
              </div>

              <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                <span className="text-[10px] text-amber-800 font-black tracking-widest block mb-2 uppercase">İpucu Zincirleri (Sırayla Açılabilecek İpuçları)</span>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={newKelime.clue1}
                    onChange={(e) => setNewKelime({...newKelime, clue1: e.target.value})}
                    placeholder="1. Genel İpucu (Örn: Emin kökünden gelir...)"
                    className="w-full bg-white border-2 border-amber-200 focus:border-amber-400 focus:outline-none p-2 rounded-lg text-xs text-slate-700 font-medium"
                  />
                  <input
                    type="text"
                    value={newKelime.clue2}
                    onChange={(e) => setNewKelime({...newKelime, clue2: e.target.value})}
                    placeholder="2. İkinci Detaylı İpucu (Örn: Güvenilir olmakla çok barışıktır...)"
                    className="w-full bg-white border-2 border-amber-200 focus:border-amber-400 focus:outline-none p-2 rounded-lg text-xs text-slate-700 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl">
                <span className="col-span-1 sm:col-span-2 text-[10px] text-slate-500 font-black block uppercase">SEÇENEK ALT PARÇALARI VE DOĞRU CEVAP</span>
                <input
                  type="text"
                  required
                  value={newKelime.opt1}
                  onChange={(e) => setNewKelime({...newKelime, opt1: e.target.value})}
                  placeholder="Seçenek A* (Örn: E-M-N Güven)"
                  className="bg-white border-2 border-slate-200 p-2 rounded-lg text-xs text-slate-700 font-medium"
                />
                <input
                  type="text"
                  required
                  value={newKelime.opt2}
                  onChange={(e) => setNewKelime({...newKelime, opt2: e.target.value})}
                  placeholder="Seçenek B* (Örn: S-L-M Barış)"
                  className="bg-white border-2 border-slate-200 p-2 rounded-lg text-xs text-slate-700 font-medium"
                />
                <input
                  type="text"
                  required
                  value={newKelime.opt3}
                  onChange={(e) => setNewKelime({...newKelime, opt3: e.target.value})}
                  placeholder="Seçenek C (Örn: H-K-M Hüküm)"
                  className="bg-white border-2 border-slate-200 p-2 rounded-lg text-xs text-slate-700 font-medium"
                />
                <input
                  type="text"
                  required
                  value={newKelime.opt4}
                  onChange={(e) => setNewKelime({...newKelime, opt4: e.target.value})}
                  placeholder="Seçenek D (Örn: K-D-S Kutsallık)"
                  className="bg-white border-2 border-slate-200 p-2 rounded-lg text-xs text-slate-700 font-medium"
                />

                <div className="col-span-1 sm:col-span-2 mt-2">
                  <label className="block text-[10px] font-black text-amber-700 mb-1 uppercase">DOĞRU CEVAP* (YUKARIDAKİ SEÇENEKLERDEN BİRİNİ BİREBİR YAZIN)</label>
                  <input
                    type="text"
                    required
                    value={newKelime.correctOption}
                    onChange={(e) => setNewKelime({...newKelime, correctOption: e.target.value})}
                    placeholder="E-M-N Güven"
                    className="w-full bg-white border-3 border-amber-300 focus:border-amber-450 p-2.5 rounded-xl text-xs text-slate-800 font-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black text-slate-500 mb-1 uppercase">KURAN ATIFI / REFERANS</label>
                  <input
                    type="text"
                    value={newKelime.quranReference}
                    onChange={(e) => setNewKelime({...newKelime, quranReference: e.target.value})}
                    placeholder="Örn: Nahl Suresi, 90. Ayet"
                    className="w-full bg-slate-50 border-2 border-slate-200 p-2 rounded-lg text-xs text-slate-700 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-500 mb-1 uppercase">TEFEKKÜR / SÖZÜN ÖZÜ NOTU</label>
                  <input
                    type="text"
                    value={newKelime.wisdomNote}
                    onChange={(e) => setNewKelime({...newKelime, wisdomNote: e.target.value})}
                    placeholder="Örn: Güven, toplum binasının harcıdır."
                    className="w-full bg-slate-50 border-2 border-slate-200 p-2 rounded-lg text-xs text-slate-700 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-game-primary justify-center text-xs py-2.5 mt-2"
              >
                <Plus className="w-4 h-4 text-white" /> YENİ ARKEOLOJİ KELİMESİ EKLE
              </button>
            </form>
          )}

          {/* Form 2: Dilemma */}
          {activeTab === 'dilemma' && (
            <form onSubmit={handleAddNewDilemma} className="space-y-4">
              <div>
                <label className="block text-[11px] font-black text-slate-500 mb-1 uppercase">İKiLEM SENARYO BAŞLIĞI*</label>
                <input
                  type="text"
                  required
                  value={newDilemma.title}
                  onChange={(e) => setNewDilemma({...newDilemma, title: e.target.value})}
                  placeholder="Başlık (Örn: Sınavdaki Sır, Kayıp Emanet)"
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-rose-500 focus:bg-white focus:outline-none p-2.5 rounded-xl text-xs text-slate-800 font-black font-display"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-slate-500 mb-1 uppercase">SENARYO / GÜZEL AHLAK HİKAYESİ*</label>
                <textarea
                  required
                  value={newDilemma.scenario}
                  onChange={(e) => setNewDilemma({...newDilemma, scenario: e.target.value})}
                  rows={3}
                  placeholder="Çocukların kendilerini yerine koyacağı bir arkadaşlık, cami, okul veya dürüstlük senaryosu..."
                  className="w-full bg-slate-50 border-2 border-slate-200 focus:border-rose-500 focus:bg-white focus:outline-none p-2.5 rounded-xl text-xs text-slate-800 font-medium leading-relaxed"
                />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] text-rose-800 font-black block uppercase tracking-widest pl-1">ÜÇ SEÇENEKLİ AHLAKÎ KARAR MEKANİZMASI</span>

                {/* Option 1 */}
                <div className="p-3 border-2 border-rose-200 rounded-2xl bg-rose-50/50 space-y-2">
                  <div className="flex gap-2 items-center">
                    <span className="w-6 h-6 bg-rose-500 text-white rounded-lg text-xs font-black flex items-center justify-center shadow-inner">A</span>
                    <input
                      type="text"
                      required
                      value={newDilemma.opt1_text}
                      onChange={(e) => setNewDilemma({...newDilemma, opt1_text: e.target.value})}
                      placeholder="En erdemli ve dürüst karar (10 Puan Kazandırır)*"
                      className="flex-1 bg-white border-2 border-rose-200 p-2 rounded-lg text-xs text-slate-800 font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={newDilemma.opt1_virtue}
                      onChange={(e) => setNewDilemma({...newDilemma, opt1_virtue: e.target.value})}
                      placeholder="Kazandırılacak Değer (Örn: Kul Hakkı)"
                      className="bg-white border text-slate-700 p-1.5 rounded-md text-[10px] font-semibold border-rose-200"
                    />
                    <input
                      type="text"
                      value={newDilemma.opt1_feedback}
                      onChange={(e) => setNewDilemma({...newDilemma, opt1_feedback: e.target.value})}
                      placeholder="Doğru karar verildiğinde açıklamanotu"
                      className="bg-white border text-slate-700 p-1.5 rounded-md text-[10px] font-semibold border-rose-200"
                    />
                  </div>
                </div>

                {/* Option 2 */}
                <div className="p-3 border-2 border-slate-200 rounded-2xl bg-slate-50 space-y-2">
                  <div className="flex gap-2 items-center">
                    <span className="w-6 h-6 bg-slate-500 text-white rounded-lg text-xs font-black flex items-center justify-center shadow-inner">B</span>
                    <input
                      type="text"
                      required
                      value={newDilemma.opt2_text}
                      onChange={(e) => setNewDilemma({...newDilemma, opt2_text: e.target.value})}
                      placeholder="Orta Karar kaçamak durum (5 Puan Kazandırır)*"
                      className="flex-1 bg-white border-2 border-slate-200 p-2 rounded-lg text-xs text-slate-800 font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={newDilemma.opt2_virtue}
                      onChange={(e) => setNewDilemma({...newDilemma, opt2_virtue: e.target.value})}
                      placeholder="Değer Bağı (Örn: Çekingenlik)"
                      className="bg-white border text-slate-600 p-1.5 rounded-md text-[10px] font-semibold border-slate-200"
                    />
                    <input
                      type="text"
                      value={newDilemma.opt2_feedback}
                      onChange={(e) => setNewDilemma({...newDilemma, opt2_feedback: e.target.value})}
                      placeholder="Orta Karar Analizi"
                      className="bg-white border text-slate-600 p-1.5 rounded-md text-[10px] font-semibold border-slate-200"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-game-rose justify-center text-xs py-2.5 mt-2"
              >
                <Plus className="w-4 h-4 text-white" /> YENİ SENSELİ AHLAKİ İKİLEM EKLE
              </button>
            </form>
          )}

        </div>

        {/* Right Side: Current Questions List */}
        <div className="lg:col-span-4 bg-white border-3 border-slate-200 rounded-[2rem] p-5 flex flex-col justify-between shadow-sm h-fit max-h-[640px] overflow-y-auto">
          <div>
            <span className="text-[11px] uppercase font-black text-slate-500 block mb-3">
              MEVCUT YARIŞMA HAVUZU LİSTESİ
            </span>

            {activeTab === 'kelime' ? (
              <div className="space-y-2">
                <div className="text-xs font-black text-amber-700 mb-2">
                  Zeka Kelimeleri ({currentData.kelimeQuestions.length} Soru)
                </div>
                {currentData.kelimeQuestions.map((q, idx) => (
                  <div key={q.id} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs text-slate-800 font-black truncate max-w-[130px]">
                      {idx + 1}. "{q.turkishWord}"
                    </span>
                    <button
                      onClick={() => handleDeleteKelime(q.id)}
                      disabled={currentData.kelimeQuestions.length <= 1}
                      className="p-1 px-1.5 bg-rose-50 border border-rose-200 text-rose-600 rounded hover:bg-rose-100 transition disabled:opacity-40 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-xs font-black text-rose-700 mb-2">
                  Ahlak İkilemleri ({currentData.dilemmaQuestions.length} Soru)
                </div>
                {currentData.dilemmaQuestions.map((q, idx) => (
                  <div key={q.id} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs text-slate-800 font-black truncate max-w-[130px]">
                      {idx + 1}. {q.title}
                    </span>
                    <button
                      onClick={() => handleDeleteDilemma(q.id)}
                      disabled={currentData.dilemmaQuestions.length <= 1}
                      className="p-1 px-1.5 bg-rose-50 border border-rose-200 text-rose-600 rounded hover:bg-rose-100 transition disabled:opacity-40 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 p-3 bg-amber-50 rounded-xl border border-amber-200 text-[10.5px] text-amber-800 font-semibold leading-relaxed">
            <span className="font-black text-amber-900 block mb-1">💡 AKILLI TAHTA SİNCAP NOTU:</span>
            Oluşturulan tüm yeni sorular akıllı tahta hafızasında (localStorage) saklanır. Gün sonunda tahta kapatılsa bile ertesi sabah tüm sorularınız yerli yerinde durur!
          </div>
        </div>

      </div>
    </div>
  );
};
