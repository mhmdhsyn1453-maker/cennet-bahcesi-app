import React, { useRef, useState, useEffect } from 'react';
import { Pencil, Eraser, Trash2, Lock, Unlock, Eye, EyeOff, LayoutGrid, X, Minus, Scissors, Grid } from 'lucide-react';
import { playSound } from './BuzzerAndTimer';

interface AkilliTahtaProps {
  onClose: () => void;
  isDarkMode?: boolean;
}

export const AkilliTahta: React.FC<AkilliTahtaProps> = ({ onClose, isDarkMode = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  // States
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [color, setColor] = useState<string>('#ff0000'); // default red
  const [thickness, setThickness] = useState<number>(4);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [lineStyle, setLineStyle] = useState<'solid' | 'dashed' | 'dotted'>('solid');
  const [isLocked, setIsLocked] = useState<boolean>(false); // interaction freeze lock
  const [boardMode, setBoardMode] = useState<'transparent' | 'white' | 'green'>('transparent');
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas sizes to window sizes
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.lineCap = 'round';
    context.lineJoin = 'round';
    contextRef.current = context;

    // Redraw if window resizes
    const handleResize = () => {
      // Save current drawings as image data before resizing
      try {
        const tempImage = context.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        // Restore context properties
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.putImageData(tempImage, 0, 0);
      } catch (e) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update context stroke settings
  const applySettings = () => {
    const ctx = contextRef.current;
    if (!ctx) return;

    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineWidth = thickness;

    // Handle line styles
    if (lineStyle === 'dashed') {
      ctx.setLineDash([12, 10]);
    } else if (lineStyle === 'dotted') {
      ctx.setLineDash([3, 8]);
    } else {
      ctx.setLineDash([]);
    }

    // Eraser background overrides
    if (tool === 'eraser') {
      ctx.setLineDash([]); // Eraser is always solid
      if (boardMode === 'transparent') {
        // Transparent mode eraser uses destination-out to erase pixels back to transparent!
        ctx.globalCompositeOperation = 'destination-out';
      } else if (boardMode === 'green') {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = '#064e3b'; // dark green background color
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = '#ffffff'; // white background color
      }
    } else {
      ctx.globalCompositeOperation = 'source-over';
    }
  };

  // Drawing Actions
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (isLocked) return;
    
    // Prevent default touch gestures (scrolling) when drawing on touch screens
    if (e.cancelable) e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    let clientX, clientY;
    if ('touches' in e) {
      if (e.touches.length === 0) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    applySettings();
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || isLocked) return;
    if (e.cancelable) e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    let clientX, clientY;
    if ('touches' in e) {
      if (e.touches.length === 0) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    contextRef.current?.lineTo(x, y);
    contextRef.current?.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playSound('fail');
  };

  const toggleLock = () => {
    setIsLocked(prev => !prev);
    playSound('tick');
  };

  // Determine drawing cursors
  const getCanvasCursor = () => {
    if (isLocked) return 'default';
    if (tool === 'eraser') return 'cell';
    return 'crosshair';
  };

  return (
    <div 
      className={`fixed inset-0 z-[99998] transition-colors duration-500 pointer-events-none select-none ${
        boardMode === 'white' 
          ? 'bg-white pointer-events-auto' 
          : boardMode === 'green' 
            ? 'bg-[#064e3b] pointer-events-auto' // green chalkboard
            : ''
      }`}
      id="akilli-tahta-container"
    >
      
      {/* 1. Kılavuz Çizgileri Arka Planı (Sadece boş tahta modlarında görünür) */}
      {boardMode !== 'transparent' && showGrid && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: boardMode === 'green'
              ? 'linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)'
              : 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      )}

      {/* 2. Çizim Tuvali */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className={`absolute inset-0 z-10 w-full h-full ${
          isLocked ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
        style={{ cursor: getCanvasCursor() }}
      />

      {/* 3. Çizim Yüzen Paleti */}
      <div 
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-auto flex flex-col items-center bg-white/95 dark:bg-slate-850/98 backdrop-blur-md border-3 ${
          isLocked 
            ? 'border-red-500 ring-4 ring-red-100 dark:ring-red-950/20' 
            : 'border-slate-200 dark:border-slate-700/80 shadow-2xl'
        } rounded-3xl p-2.5 gap-2.5 transition-all duration-300 w-28 scrollbar-none ${
          isCollapsed ? 'max-h-[56px] overflow-hidden' : 'max-h-[95vh]'
        }`}
      >
        {/* Collapse / Expand Toggle */}
        <button
          onClick={() => { setIsCollapsed(!isCollapsed); playSound('tick'); }}
          className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-500 rounded-2xl flex items-center justify-center cursor-pointer font-black text-sm shrink-0"
          title={isCollapsed ? "Araçları Göster" : "Araçları Gizle"}
        >
          {isCollapsed ? '▼' : '▲'}
        </button>

        {!isCollapsed && (
          <>
            {/* Araçlar: Kalem ve Silgi (Yan Yana - Büyük) */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-2xl gap-1 shrink-0 w-full">
              <button
                onClick={() => { setTool('pen'); playSound('tick'); }}
                className={`flex-1 h-11 rounded-xl flex items-center justify-center cursor-pointer transition-all ${
                  tool === 'pen' && !isLocked
                    ? 'bg-emerald-500 text-white shadow-md scale-105'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                }`}
                title="Yazı Kalemi"
              >
                <Pencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => { setTool('eraser'); playSound('tick'); }}
                className={`flex-1 h-11 rounded-xl flex items-center justify-center cursor-pointer transition-all ${
                  tool === 'eraser' && !isLocked
                    ? 'bg-emerald-500 text-white shadow-md scale-105'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                }`}
                title="Yazı Silgisi"
              >
                <Eraser className="w-5 h-5" />
              </button>
            </div>

            {/* Kilit ve Temizle (Yan Yana - Büyük) */}
            <div className="flex gap-1.5 w-full shrink-0">
              <button
                onClick={toggleLock}
                className={`flex-1 h-11 rounded-xl flex items-center justify-center cursor-pointer transition-all border ${
                  isLocked
                    ? 'bg-red-500 text-white border-red-600 animate-pulse'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
                title={isLocked ? "Çizimi Kilitlemeyi Kaldır" : "Etkileşimi Dondur"}
              >
                {isLocked ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
              </button>

              <button
                onClick={clearCanvas}
                className="flex-1 h-11 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-500 border border-slate-200 dark:border-slate-750 rounded-xl flex items-center justify-center cursor-pointer transition-all shadow-md active:scale-95 shrink-0"
                title="Tümünü Temizle"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Renk Seçimi (Kalem aktifken gösterilir - 3x2 Büyük Grid) */}
            {tool === 'pen' && (
              <div className="grid grid-cols-3 gap-1.5 border-t border-b border-slate-205 dark:border-slate-700/60 py-2.5 shrink-0 w-full justify-items-center">
                {[
                  { hex: '#ff0000', label: 'Kırmızı' },
                  { hex: '#0000ff', label: 'Mavi' },
                  { hex: '#00ff00', label: 'Yeşil' },
                  { hex: '#eab308', label: 'Sarı' },
                  { hex: '#000000', label: 'Siyah' },
                  { hex: '#ffffff', label: 'Beyaz' }
                ].map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => { setColor(c.hex); playSound('tick'); }}
                    className={`w-7 h-7 rounded-full border-2 cursor-pointer transition-transform ${
                      color === c.hex 
                        ? 'border-emerald-500 scale-110 shadow-md' 
                        : 'border-slate-300 dark:border-slate-600 hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.label}
                  />
                ))}
              </div>
            )}

            {/* Çizgi Tipi (Yan Yana) */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl gap-0.5 shrink-0 w-full">
              <button
                onClick={() => { setLineStyle('solid'); playSound('tick'); }}
                className={`flex-1 py-1 rounded-lg text-[9px] font-black tracking-tighter uppercase cursor-pointer text-center ${
                  lineStyle === 'solid' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500'
                }`}
                title="Düz Çizgi"
              >
                Düz
              </button>
              <button
                onClick={() => { setLineStyle('dashed'); playSound('tick'); }}
                className={`flex-1 py-1 rounded-lg text-[9px] font-black tracking-tighter uppercase cursor-pointer text-center ${
                  lineStyle === 'dashed' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500'
                }`}
                title="Kesikli Çizgi"
              >
                Kes
              </button>
              <button
                onClick={() => { setLineStyle('dotted'); playSound('tick'); }}
                className={`flex-1 py-1 rounded-lg text-[9px] font-black tracking-tighter uppercase cursor-pointer text-center ${
                  lineStyle === 'dotted' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500'
                }`}
                title="Noktalı Çizgi"
              >
                Nok
              </button>
            </div>

            {/* Kalınlık Seçimi (2x2 Büyük Grid) */}
            <div className="flex flex-col items-center gap-1 border-t border-slate-200/50 dark:border-slate-700/60 pt-2 shrink-0 w-full">
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase">Boyut</span>
              <div className="grid grid-cols-2 gap-1.5 w-full justify-items-center">
                {[3, 6, 12, 20].map((size) => (
                  <button
                    key={size}
                    onClick={() => { setThickness(size); playSound('tick'); }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border cursor-pointer ${
                      thickness === size
                        ? 'bg-emerald-500 text-white border-emerald-600 scale-105 shadow-md'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-655 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                    title={`${size}px Kalınlık`}
                  >
                    <span 
                      className="bg-current rounded-full" 
                      style={{ 
                        width: `${Math.max(2, Math.min(size / 1.2, 16))}px`, 
                        height: `${Math.max(2, Math.min(size / 1.2, 16))}px` 
                      }} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tahta Modları (Arka Plan - Büyük) */}
            <div className="flex flex-col items-center gap-1.5 border-t border-slate-200/50 dark:border-slate-700/60 pt-2 shrink-0 w-full">
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase text-center">Mod</span>
              <button
                onClick={() => { setBoardMode('transparent'); playSound('tick'); }}
                className={`w-full py-1.5 rounded-xl text-[10px] font-black uppercase border cursor-pointer text-center ${
                  boardMode === 'transparent' ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-405 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
                title="Şeffaf Tahta Modu (Uygulama Üstü)"
              >
                Şeffaf
              </button>
              <div className="flex gap-1 w-full">
                <button
                  onClick={() => { setBoardMode('white'); playSound('tick'); }}
                  className={`flex-1 py-1.5 rounded-xl text-[10px] font-black uppercase border cursor-pointer text-center ${
                    boardMode === 'white' ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-405 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                  title="Boş Beyaz Tahta"
                >
                  Beyaz
                </button>
                <button
                  onClick={() => { setBoardMode('green'); playSound('tick'); }}
                  className={`flex-1 py-1.5 rounded-xl text-[10px] font-black uppercase border cursor-pointer text-center ${
                    boardMode === 'green' ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-405 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                  title="Boş Yeşil Tahta"
                >
                  Yeşil
                </button>
              </div>

              {/* Kılavuz Çizgileri Toggle (Sadece beyaz veya yeşil tahtada) */}
              {boardMode !== 'transparent' && (
                <button
                  onClick={() => { setShowGrid(!showGrid); playSound('tick'); }}
                  className={`w-full py-1.5 rounded-xl border flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    showGrid 
                      ? 'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800' 
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-405 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                  title="Kılavuz Çizgileri Göster/Gizle"
                >
                  <Grid className="w-4 h-4" />
                  <span className="text-[9px] font-black uppercase">Kılavuz</span>
                </button>
              )}
            </div>
          </>
        )}

        {/* Kalemi Tamamen Kapat */}
        <button
          onClick={() => { onClose(); playSound('fail'); }}
          className="w-full h-11 bg-slate-900 text-white hover:bg-slate-850 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-xl flex items-center justify-center cursor-pointer shadow-md transition-all shrink-0"
          title="Kalemi Kapat"
        >
          <X className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
