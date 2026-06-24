import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  UserPlus, 
  Trash2, 
  Calendar, 
  Award, 
  BookOpen, 
  Plus, 
  Minus, 
  Check, 
  X, 
  Search, 
  ChevronRight, 
  Sparkles, 
  User,
  PlusCircle,
  FileText
} from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

export interface Student {
  id: string;
  name: string;
  elifbaPage: string;     // Örn: "Sayfa 14" veya "Cüz 5" veya "Kur'an Geçti"
  statusNotes: string;    // Örn: "Tecvid çalışması gerek"
  points: number;         // Yıldız puanı
  attendance: Record<string, 'present' | 'absent'>; // YYYY-MM-DD -> present/absent
}

export interface ClassGroup {
  id: string;
  name: string;
  students: Student[];
}

const LOCAL_STORAGE_KEY = 'cennet_bahcesi_classgroups_v1';
const ACTIVE_CLASS_KEY = 'cennet_bahcesi_active_class_id_v1';

export const SinifYonetimi: React.FC = () => {
  const [classes, setClasses] = useState<ClassGroup[]>([]);
  const [activeClassId, setActiveClassId] = useState<string>('');
  const [activeSubTab, setActiveSubTab] = useState<'attendance' | 'students' | 'setup'>('attendance');
  
  // Sınıf Ekleme
  const [newClassName, setNewClassName] = useState('');
  
  // Tekli Öğrenci Ekleme
  const [newStudentName, setNewStudentName] = useState('');
  
  // Toplu Öğrenci Ekleme
  const [bulkStudentNames, setBulkStudentNames] = useState('');
  const [showBulkAdd, setShowBulkAdd] = useState(false);
  
  // Yoklama Tarihi (Varsayılan Bugün)
  const [attendanceDate, setAttendanceDate] = useState(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  });

  // Arama filtresi
  const [searchTerm, setSearchTerm] = useState('');

  // Düzenlenen Öğrenci
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  // Verileri Yükle
  useEffect(() => {
    try {
      const storedClasses = localStorage.getItem(LOCAL_STORAGE_KEY);
      const storedActiveId = localStorage.getItem(ACTIVE_CLASS_KEY);
      
      if (storedClasses) {
        const parsed = JSON.parse(storedClasses);
        setClasses(parsed);
        if (storedActiveId && parsed.some((c: ClassGroup) => c.id === storedActiveId)) {
          setActiveClassId(storedActiveId);
        } else if (parsed.length > 0) {
          setActiveClassId(parsed[0].id);
        }
      }
    } catch (e) {
      console.error('Sınıf verileri yüklenirken hata:', e);
    }
  }, []);

  // Verileri Kaydet
  const saveToLocalStorage = (updatedClasses: ClassGroup[]) => {
    setClasses(updatedClasses);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedClasses));
    } catch (e) {
      console.error('Sınıf verileri kaydedilirken hata:', e);
    }
  };

  const selectClass = (id: string) => {
    setActiveClassId(id);
    localStorage.setItem(ACTIVE_CLASS_KEY, id);
    playSound('tick');
  };

  // Yeni Sınıf Ekle
  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim()) return;

    const newClass: ClassGroup = {
      id: 'class_' + Date.now(),
      name: newClassName.trim(),
      students: []
    };

    const updated = [...classes, newClass];
    saveToLocalStorage(updated);
    setActiveClassId(newClass.id);
    localStorage.setItem(ACTIVE_CLASS_KEY, newClass.id);
    setNewClassName('');
    playSound('complete');
  };

  // Sınıf Sil
  const handleDeleteClass = (classId: string) => {
    if (!window.confirm('Bu sınıfı ve tüm öğrencilerini silmek istediğinize emin misiniz? Bu işlem geri alınamaz!')) return;
    
    const updated = classes.filter(c => c.id !== classId);
    saveToLocalStorage(updated);
    
    if (activeClassId === classId) {
      if (updated.length > 0) {
        setActiveClassId(updated[0].id);
      } else {
        setActiveClassId('');
      }
    }
    playSound('fail');
  };

  // Tek Öğrenci Ekle
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim() || !activeClassId) return;

    const newStudent: Student = {
      id: 'stud_' + Date.now() + Math.random().toString(36).substr(2, 4),
      name: newStudentName.trim(),
      elifbaPage: 'Sayfa 1',
      statusNotes: '',
      points: 0,
      attendance: {}
    };

    const updated = classes.map(c => {
      if (c.id === activeClassId) {
        return { ...c, students: [...c.students, newStudent].sort((a, b) => a.name.localeCompare(b.name, 'tr')) };
      }
      return c;
    });

    saveToLocalStorage(updated);
    setNewStudentName('');
    playSound('tick');
  };

  // Toplu Öğrenci Ekle
  const handleBulkAddStudents = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulkStudentNames.trim() || !activeClassId) return;

    const names = bulkStudentNames
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0);

    if (names.length === 0) return;

    const newStudents: Student[] = names.map((name, idx) => ({
      id: 'stud_' + Date.now() + '_' + idx + Math.random().toString(36).substr(2, 2),
      name,
      elifbaPage: 'Sayfa 1',
      statusNotes: '',
      points: 0,
      attendance: {}
    }));

    const updated = classes.map(c => {
      if (c.id === activeClassId) {
        return { 
          ...c, 
          students: [...c.students, ...newStudents].sort((a, b) => a.name.localeCompare(b.name, 'tr')) 
        };
      }
      return c;
    });

    saveToLocalStorage(updated);
    setBulkStudentNames('');
    setShowBulkAdd(false);
    playSound('complete');
  };

  // Öğrenci Sil
  const handleDeleteStudent = (studentId: string) => {
    if (!window.confirm('Bu öğrenciyi silmek istediğinize emin misiniz?')) return;

    const updated = classes.map(c => {
      if (c.id === activeClassId) {
        return { ...c, students: c.students.filter(s => s.id !== studentId) };
      }
      return c;
    });

    saveToLocalStorage(updated);
    if (editingStudent?.id === studentId) {
      setEditingStudent(null);
    }
    playSound('fail');
  };

  // Yoklama İşaretle
  const toggleAttendance = (studentId: string) => {
    const updated = classes.map(c => {
      if (c.id === activeClassId) {
        return {
          ...c,
          students: c.students.map(s => {
            if (s.id === studentId) {
              const current = s.attendance[attendanceDate];
              let nextStatus: 'present' | 'absent' | undefined;
              
              if (!current) {
                nextStatus = 'present';
                playSound('success');
              } else if (current === 'present') {
                nextStatus = 'absent';
                playSound('fail');
              } else {
                nextStatus = undefined;
                playSound('tick');
              }

              const newAttendance = { ...s.attendance };
              if (nextStatus) {
                newAttendance[attendanceDate] = nextStatus;
              } else {
                delete newAttendance[attendanceDate];
              }

              return { ...s, attendance: newAttendance };
            }
            return s;
          })
        };
      }
      return c;
    });

    saveToLocalStorage(updated);
  };

  // Öğrenci Bilgilerini Güncelle (Modal)
  const handleUpdateStudentDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent || !activeClassId) return;

    const updated = classes.map(c => {
      if (c.id === activeClassId) {
        return {
          ...c,
          students: c.students.map(s => s.id === editingStudent.id ? editingStudent : s)
        };
      }
      return c;
    });

    saveToLocalStorage(updated);
    setEditingStudent(null);
    playSound('complete');
  };

  // Öğrenciye Yıldız Puanı Ver
  const handleAwardPoints = (studentId: string, diff: number) => {
    const updated = classes.map(c => {
      if (c.id === activeClassId) {
        return {
          ...c,
          students: c.students.map(s => {
            if (s.id === studentId) {
              const newPoints = Math.max(0, s.points + diff);
              if (diff > 0) playSound('complete');
              else playSound('fail');
              return { ...s, points: newPoints };
            }
            return s;
          })
        };
      }
      return c;
    });

    saveToLocalStorage(updated);
    if (editingStudent && editingStudent.id === studentId) {
      setEditingStudent(prev => prev ? { ...prev, points: Math.max(0, prev.points + diff) } : null);
    }
  };

  const activeClass = classes.find(c => c.id === activeClassId);

  // Arama filtresine göre öğrencileri filtrele
  const filteredStudents = activeClass
    ? activeClass.students.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  // Yoklama istatistikleri
  const totalStudents = activeClass ? activeClass.students.length : 0;
  const presentCount = activeClass
    ? activeClass.students.filter(s => s.attendance[attendanceDate] === 'present').length
    : 0;
  const absentCount = activeClass
    ? activeClass.students.filter(s => s.attendance[attendanceDate] === 'absent').length
    : 0;
  const unrecordedCount = totalStudents - presentCount - absentCount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-4" id="class-management-portal">
      {/* Header Panel */}
      <div className="bg-white border-3 border-slate-200 rounded-[2rem] p-6 mb-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3.5 bg-purple-50 border-2 border-purple-200 rounded-2xl text-purple-600">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-800 tracking-tight uppercase">
              SINIF YÖNETİMİ
            </h1>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
              Yoklama Defteri, Öğrenci Gelişimi ve Performans Yıldızları
            </p>
          </div>
        </div>

        {/* Sınıf Seçici */}
        <div className="flex flex-wrap items-center gap-2">
          {classes.length > 0 ? (
            <select
              value={activeClassId}
              onChange={(e) => selectClass(e.target.value)}
              className="bg-slate-50 hover:bg-slate-100 border-3 border-slate-200 rounded-2xl px-4 py-2.5 text-sm font-black cursor-pointer transition-colors text-slate-800"
            >
              {classes.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          ) : (
            <span className="text-xs font-black text-rose-500 bg-rose-50 border border-rose-100 px-3.5 py-2 rounded-xl">
              ⚠️ Lütfen önce bir sınıf ekleyin.
            </span>
          )}

          <button
            onClick={() => { setActiveSubTab('setup'); playSound('tick'); }}
            className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border-3 border-slate-200 hover:border-slate-350 text-slate-700 rounded-2xl text-xs font-black cursor-pointer transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 text-emerald-600" /> Sınıf Düzenle
          </button>
        </div>
      </div>

      {/* Sınıf Yoksa Sınıf Oluşturma Göster */}
      {classes.length === 0 ? (
        <div className="bg-white border-3 border-slate-200 rounded-[2.5rem] p-10 text-center shadow-md max-w-xl mx-auto my-12">
          <Users className="w-16 h-16 text-purple-300 mx-auto mb-4" />
          <h2 className="font-display font-black text-xl text-slate-800 uppercase mb-2">İlk Sınıfınızı Ekleyin</h2>
          <p className="text-xs text-slate-500 font-semibold mb-6">
            Öğrencileri takip etmeye başlamak için öncelikle bir sınıf adı (örn: 6-A Sınıfı) belirleyin.
          </p>

          <form onSubmit={handleCreateClass} className="flex gap-2">
            <input
              type="text"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              placeholder="Örn: 6-A Sınıfı"
              className="flex-1 bg-slate-50 border-3 border-slate-200 rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:border-purple-300"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 border-b-4 border-purple-750 text-white rounded-2xl font-black text-xs px-6 transition-all active:border-b-0 active:translate-y-1 py-3 cursor-pointer"
            >
              Ekle
            </button>
          </form>
        </div>
      ) : (
        <>
          {/* Sub-Tabs / Modül Seçici */}
          <div className="flex gap-2 mb-6 border-b-2 border-slate-150 pb-3 flex-wrap">
            <button
              onClick={() => { setActiveSubTab('attendance'); playSound('tick'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[12px] font-black tracking-wide transition-all cursor-pointer border-3 ${
                activeSubTab === 'attendance'
                  ? 'bg-purple-500 border-purple-600 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-350'
              }`}
            >
              <Calendar className="w-4 h-4" /> Yoklama Defteri
            </button>

            <button
              onClick={() => { setActiveSubTab('students'); playSound('tick'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[12px] font-black tracking-wide transition-all cursor-pointer border-3 ${
                activeSubTab === 'students'
                  ? 'bg-purple-500 border-purple-600 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-350'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Ders & Seviye Takibi
            </button>

            <button
              onClick={() => { setActiveSubTab('setup'); playSound('tick'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[12px] font-black tracking-wide transition-all cursor-pointer border-3 ${
                activeSubTab === 'setup'
                  ? 'bg-purple-500 border-purple-600 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-350'
              }`}
            >
              <UserPlus className="w-4 h-4" /> Öğrenci Ekle / Sınıf Ayarı
            </button>
          </div>

          {/* Tab Content */}
          <div className="relative">
            {/* VIEW A: YOKLAMA DEFTERİ */}
            {activeSubTab === 'attendance' && (
              <div className="space-y-6">
                {/* Yoklama Kontrol Çubuğu */}
                <div className="bg-white border-3 border-slate-200 p-5 rounded-[2rem] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Tarih Seçin:</span>
                    <input
                      type="date"
                      value={attendanceDate}
                      onChange={(e) => { setAttendanceDate(e.target.value); playSound('tick'); }}
                      className="bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-1.5 text-xs font-black text-slate-700 focus:outline-none"
                    />
                  </div>

                  {/* Arama Kutusu */}
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      placeholder="Öğrenci Ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-purple-300"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  </div>

                  {/* Yoklama İstatistikleri */}
                  <div className="flex gap-2 text-[10px] font-black uppercase tracking-wider">
                    <span className="bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-xl text-slate-700">
                      Toplam: {totalStudents}
                    </span>
                    <span className="bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-xl text-emerald-800">
                      Gelen: {presentCount}
                    </span>
                    <span className="bg-rose-50 border border-rose-200 px-2.5 py-1.5 rounded-xl text-rose-800">
                      Gelemeyen: {absentCount}
                    </span>
                  </div>
                </div>

                {/* Yoklama Öğrenci Grid */}
                {filteredStudents.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredStudents.map(student => {
                      const status = student.attendance[attendanceDate];
                      let cardStyle = "bg-white border-3 border-slate-200 hover:border-purple-300 shadow-sm";
                      let indicator = null;

                      if (status === 'present') {
                        cardStyle = "bg-emerald-50 border-3 border-emerald-400 shadow-emerald-500/5 ring-4 ring-emerald-100";
                        indicator = <Check className="w-4 h-4 text-emerald-600 bg-white rounded-full p-0.5 border" />;
                      } else if (status === 'absent') {
                        cardStyle = "bg-rose-50 border-3 border-rose-400 shadow-rose-500/5 ring-4 ring-rose-100";
                        indicator = <X className="w-4 h-4 text-rose-600 bg-white rounded-full p-0.5 border" />;
                      }

                      return (
                        <div
                          key={student.id}
                          onClick={() => toggleAttendance(student.id)}
                          className={`p-4 rounded-2xl flex flex-col justify-between items-center text-center cursor-pointer transition-all active:scale-95 min-h-[110px] ${cardStyle}`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className="text-[9px] font-black text-slate-400 tracking-wider">#{student.points} ⭐</span>
                            {indicator || <div className="w-4 h-4 rounded-full border-2 border-slate-200" />}
                          </div>

                          <div className="font-display font-black text-sm text-slate-800 mt-2 truncate w-full">
                            {student.name}
                          </div>

                          <div className="mt-2 text-[10px] font-extrabold uppercase tracking-wide text-slate-500">
                            {status === 'present' && <span className="text-emerald-700">Burada ✓</span>}
                            {status === 'absent' && <span className="text-rose-700">Yok ✗</span>}
                            {!status && <span>Yoklama Al</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white border-3 border-slate-200 rounded-[2rem] p-10 text-center shadow-sm">
                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="font-display font-black text-slate-800 uppercase text-sm">Hiçbir Öğrenci Bulunamadı</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-1">
                      {searchTerm ? 'Arama filtrenizi değiştirmeyi deneyin.' : 'Sınıfa başlamak için lütfen önce öğrenci ekleyin.'}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* VIEW B: DERS & SEVİYE TAKİBİ */}
            {activeSubTab === 'students' && (
              <div className="space-y-6">
                {/* Seviye Arama Çubuğu */}
                <div className="bg-white border-3 border-slate-200 p-5 rounded-[2rem] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <h3 className="font-display font-black text-sm text-slate-800">ÖĞRENCİ GELİŞİM LİSTESİ</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Kaldığı sayfaları güncelleyin ve yıldız puanı verin.</p>
                  </div>

                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      placeholder="Öğrenci Ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-purple-300"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>

                {/* Seviye Listesi */}
                {filteredStudents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredStudents.map(student => (
                      <div
                        key={student.id}
                        className="bg-white border-3 border-slate-200 hover:border-purple-250 p-5 rounded-3xl flex items-center justify-between shadow-sm hover:shadow-md transition-all gap-4"
                      >
                        {/* Sol Kısım: Öğrenci Detayları */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-display font-black text-base text-slate-800 truncate">
                              {student.name}
                            </h4>
                            <span className="flex items-center gap-1 bg-yellow-50 border border-yellow-250 text-yellow-800 font-black text-[9px] uppercase px-2 py-0.5 rounded-lg shrink-0">
                              ⭐ {student.points} Yıldız
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-800 bg-emerald-50 border border-emerald-250 rounded-lg px-2.5 py-0.5">
                              <BookOpen className="w-3 h-3 text-emerald-600" />
                              {student.elifbaPage || 'Sayfa 1'}
                            </span>
                            {student.statusNotes && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-50 border rounded-lg px-2 py-0.5 truncate max-w-[200px]" title={student.statusNotes}>
                                📝 {student.statusNotes}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Sağ Kısım: Hızlı Eylemler (Puanlama & Düzenleme) */}
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => handleAwardPoints(student.id, 5)}
                              className="p-1 px-2.5 bg-yellow-400 hover:bg-yellow-500 border-2 border-yellow-600 text-white rounded-lg text-[9px] font-black cursor-pointer transition active:scale-90"
                              title="+5 Yıldız Puanı"
                            >
                              +5 ⭐
                            </button>
                            <button
                              onClick={() => handleAwardPoints(student.id, 1)}
                              className="p-1 px-2.5 bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 text-slate-700 rounded-lg text-[9px] font-black cursor-pointer transition active:scale-90"
                              title="+1 Yıldız Puanı"
                            >
                              +1 ⭐
                            </button>
                          </div>

                          <button
                            onClick={() => { setEditingStudent(student); playSound('tick'); }}
                            className="p-2.5 bg-purple-50 hover:bg-purple-100 border-2 border-purple-250 text-purple-800 rounded-xl text-xs font-black cursor-pointer transition active:scale-95 flex items-center gap-1"
                          >
                            Ders Notu / Güncelle <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white border-3 border-slate-200 rounded-[2rem] p-10 text-center shadow-sm">
                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="font-display font-black text-slate-800 uppercase text-sm">Bulunamadı</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-1">Öğrenci listesi boş veya arama kriterine uymuyor.</p>
                  </div>
                )}
              </div>
            )}

            {/* VIEW C: SINIF AYARLARI & ÖĞRENCİ EKLEME */}
            {activeSubTab === 'setup' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Sol Panel: Sınıfa Öğrenci Ekle */}
                <div className="bg-white border-3 border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-black text-lg text-slate-800 uppercase pb-3 border-b-2 border-slate-100 mb-4 flex items-center gap-2">
                      <UserPlus className="w-5 h-5 text-purple-600" /> Öğrenci Ekleme
                    </h3>

                    {/* Tek Öğrenci Ekleme Formu */}
                    <form onSubmit={handleAddStudent} className="space-y-3 mb-6">
                      <span className="text-[10px] font-black text-slate-500 block uppercase tracking-wider">Tekil Öğrenci Ekle</span>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newStudentName}
                          onChange={(e) => setNewStudentName(e.target.value)}
                          placeholder="Örn: Hikmet Akbalık"
                          className="flex-1 bg-slate-50 border-3 border-slate-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-300"
                        />
                        <button
                          type="submit"
                          className="bg-emerald-500 hover:bg-emerald-600 border-b-4 border-emerald-700 text-white rounded-2xl font-black text-xs px-6 py-2.5 cursor-pointer transition active:translate-y-1 active:border-b-0"
                        >
                          Öğrenciyi Ekle
                        </button>
                      </div>
                    </form>

                    {/* Toplu Öğrenci Ekleme Formu */}
                    <div className="border-t border-slate-150 pt-4">
                      <button
                        onClick={() => { setShowBulkAdd(!showBulkAdd); playSound('tick'); }}
                        className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-slate-50 border-2 border-slate-250 text-slate-600 hover:text-purple-800 hover:bg-purple-50 rounded-2xl font-display text-xs font-black cursor-pointer transition active:scale-95"
                      >
                        <FileText className="w-4 h-4 text-purple-600" /> Toplu Öğrenci Ekleme Panelini {showBulkAdd ? 'Kapat' : 'Aç'}
                      </button>

                      {showBulkAdd && (
                        <form onSubmit={handleBulkAddStudents} className="space-y-3 mt-4">
                          <span className="text-[10px] font-black text-slate-500 block uppercase tracking-wider">
                            Her satıra bir isim gelecek şekilde yapıştırın veya yazın:
                          </span>
                          <textarea
                            rows={6}
                            value={bulkStudentNames}
                            onChange={(e) => setBulkStudentNames(e.target.value)}
                            placeholder="Örn:&#10;Ahmet Yılmaz&#10;Mehmet Öztürk&#10;Ayşe Kaya"
                            className="w-full bg-slate-50 border-3 border-slate-200 rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-300"
                          />
                          <button
                            type="submit"
                            className="w-full bg-purple-500 hover:bg-purple-600 border-b-4 border-purple-750 text-white rounded-2xl font-black text-xs py-3 cursor-pointer transition active:translate-y-1 active:border-b-0"
                          >
                            Tüm Listeyi Ekle
                          </button>
                        </form>
                      )}
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 mt-6 font-semibold uppercase tracking-wider leading-relaxed">
                    💡 Öğrencilerin isimleri eklendikten sonra otomatik olarak alfabetik sıraya göre listelenecektir.
                  </div>
                </div>

                {/* Sağ Panel: Mevcut Öğrenci Listesi / Sınıfları Düzenle */}
                <div className="bg-white border-3 border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-black text-lg text-slate-800 uppercase pb-3 border-b-2 border-slate-100 mb-4 flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" /> Sınıf ve Öğrenci Listesi
                      </span>
                      {activeClass && (
                        <button
                          onClick={() => handleDeleteClass(activeClass.id)}
                          className="text-rose-500 hover:text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl text-[10px] font-black cursor-pointer uppercase tracking-wider"
                          title="Sınıfı Tamamen Sil"
                        >
                          Sınıfı Sil
                        </button>
                      )}
                    </h3>

                    {/* Sınıf Oluşturma */}
                    <form onSubmit={handleCreateClass} className="flex gap-2 mb-6">
                      <input
                        type="text"
                        value={newClassName}
                        onChange={(e) => setNewClassName(e.target.value)}
                        placeholder="Yeni Sınıf Adı Girin..."
                        className="flex-1 bg-slate-50 border-3 border-slate-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-300"
                      />
                      <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 border-b-4 border-purple-750 text-white rounded-2xl font-black text-xs px-6 py-2.5 cursor-pointer transition active:translate-y-1 active:border-b-0"
                      >
                        Yeni Sınıf Kur
                      </button>
                    </form>

                    {/* Öğrencilerin Silinmesi/Listelenmesi */}
                    <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                      <span className="text-[10px] font-black text-slate-500 block uppercase tracking-wider mb-2">
                        Öğrenci Listesi ({totalStudents} Kişi)
                      </span>
                      {activeClass && activeClass.students.length > 0 ? (
                        activeClass.students.map((student, idx) => (
                          <div key={student.id} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border-2 border-slate-100 hover:border-slate-200 transition-colors">
                            <span className="text-xs font-bold text-slate-700">
                              {idx + 1}. {student.name}
                            </span>
                            <button
                              onClick={() => handleDeleteStudent(student.id)}
                              className="p-1.5 bg-slate-100 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-450 hover:text-rose-600 rounded-lg cursor-pointer transition-colors"
                              title="Öğrenciyi Sil"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-6 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-semibold">
                          Bu sınıfta henüz hiç öğrenci yok.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </>
      )}

      {/* STUDENT PROFILE & PROGRESS EDIT MODAL */}
      <AnimatePresence>
        {editingStudent && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border-4 border-slate-200 rounded-[2.5rem] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setEditingStudent(null)}
                className="absolute top-6 right-6 w-9 h-9 bg-slate-100 border-2 border-slate-250 text-slate-600 hover:text-slate-800 rounded-full flex items-center justify-center cursor-pointer font-black"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 pb-4 border-b-2 border-slate-100 mb-6">
                <div className="w-12 h-12 bg-purple-50 border-2 border-purple-250 rounded-2xl flex items-center justify-center text-xl text-purple-600 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-slate-800 uppercase">
                    {editingStudent.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                    Öğrenci Profil Kartı
                  </span>
                </div>
              </div>

              <form onSubmit={handleUpdateStudentDetails} className="space-y-4">
                {/* Elif-Ba Seviyesi */}
                <div>
                  <label className="text-[10px] font-black text-slate-500 block uppercase tracking-wider mb-1.5">
                    Ders / Kaldığı Sayfa Seviyesi
                  </label>
                  <input
                    type="text"
                    value={editingStudent.elifbaPage}
                    onChange={(e) => setEditingStudent({ ...editingStudent, elifbaPage: e.target.value })}
                    placeholder="Örn: Sayfa 15 veya Cüz 3 veya Kuran sayfa 156"
                    className="w-full bg-slate-50 border-3 border-slate-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-850 focus:outline-none focus:border-purple-300"
                  />
                </div>

                {/* Hoca Değerlendirme Notu */}
                <div>
                  <label className="text-[10px] font-black text-slate-500 block uppercase tracking-wider mb-1.5">
                    Hoca Durum Notu
                  </label>
                  <textarea
                    rows={3}
                    value={editingStudent.statusNotes}
                    onChange={(e) => setEditingStudent({ ...editingStudent, statusNotes: e.target.value })}
                    placeholder="Öğrencinin ezberleri, ahlakı veya dersi hakkında not ekleyin..."
                    className="w-full bg-slate-50 border-3 border-slate-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-850 focus:outline-none focus:border-purple-300"
                  />
                </div>

                {/* Puan Durumu */}
                <div>
                  <label className="text-[10px] font-black text-slate-500 block uppercase tracking-wider mb-2">
                    Yıldız Puanı Ayarla
                  </label>
                  <div className="flex items-center gap-3 bg-slate-50 border-2 border-slate-200 rounded-2xl p-3.5 justify-between">
                    <span className="font-display font-black text-slate-700 text-sm">
                      Mevcut Puan: <span className="text-purple-700 text-lg">{editingStudent.points} ⭐</span>
                    </span>

                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleAwardPoints(editingStudent.id, -1)}
                        className="p-1 px-3 bg-slate-100 hover:bg-slate-200 border-2 border-slate-350 text-slate-700 rounded-lg text-xs font-black cursor-pointer transition active:scale-90"
                      >
                        -1
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAwardPoints(editingStudent.id, 1)}
                        className="p-1 px-3 bg-yellow-400 hover:bg-yellow-500 border-2 border-yellow-600 text-white rounded-lg text-xs font-black cursor-pointer transition active:scale-90"
                      >
                        +1
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAwardPoints(editingStudent.id, 5)}
                        className="p-1 px-3 bg-emerald-500 hover:bg-emerald-600 border-2 border-emerald-700 text-white rounded-lg text-xs font-black cursor-pointer transition active:scale-90"
                      >
                        +5
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form Kaydet / Vazgeç */}
                <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 mt-6">
                  <button
                    type="button"
                    onClick={() => setEditingStudent(null)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 border-2 border-slate-300 text-slate-700 rounded-2xl text-xs font-black cursor-pointer"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 border-b-4 border-purple-750 text-white rounded-2xl text-xs font-black cursor-pointer transition active:translate-y-1 active:border-b-0"
                  >
                    Bilgileri Kaydet
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
