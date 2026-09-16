import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { getAssetPath } from '../utils/assets';

interface StageMarker {
  time: number;
  label: string;
  stage: string;
}

const STAGES: StageMarker[] = [
  { time: 0, label: 'Service Log Matrix', stage: '01' },
  { time: 6, label: 'Filter Modal — Milk Delivery / August 2026', stage: '02' },
  { time: 10, label: '31-Day Calendar View & AI Prompt', stage: '03' },
  { time: 12, label: 'Overdue Payments & Autopay Overview — ₹2,622 settlement', stage: '04' },
  { time: 15, label: 'Sharma Dairy Service Details', stage: '05' },
  { time: 19, label: 'Service Configuration & Pricing', stage: '06' },
  { time: 29, label: 'Resident Profile & Settings — Rohit Sharma', stage: '07' },
  { time: 32, label: 'Verified Tax Invoice & QR Code', stage: '08' },
  { time: 38, label: 'In-App Provider Chat — Raju Sharma', stage: '09' },
  { time: 44, label: 'Return to Service Matrix', stage: '10' },
];

export function ServotixResidentPrototypePlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(63.32);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay handled by browser policy
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      setCurrentTime(cur);

      // Find active stage
      let idx = 0;
      for (let i = STAGES.length - 1; i >= 0; i--) {
        if (cur >= STAGES[i].time) {
          idx = i;
          break;
        }
      }
      setActiveStageIndex(idx);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 63.32);
      setHasError(false);
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Continuous loop
  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const seekToStage = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <h4 className="font-editorial text-base text-white font-normal">
              Resident Prototype Walkthrough
            </h4>
            {hasError && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Prototype unavailable to preview
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-400">
            Interactive recording of the Resident user experience: daily service log tracking, 31-day history, overdue settlements, service spec configuration, tax invoicing, and in-app provider chat.
          </p>
        </div>

        {/* Playback Controls */}
        {!hasError && (
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={restartVideo}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-medium flex items-center space-x-1.5 transition-colors"
              title="Replay from start"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart</span>
            </button>
            <button
              onClick={togglePlay}
              className="px-3.5 py-1.5 rounded-xl bg-[#48A1EA] hover:bg-[#3b8fd3] text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-sm"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Main Video Presentation Stage */}
      <div className="space-y-4">
        {/* Responsive Widescreen Video Player Container */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group">
          {/* Native Aspect Ratio Container (1920x838) */}
          <div className="relative w-full aspect-[1920/838] bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={getAssetPath('assets/resident-prototype.mp4')}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onError={() => setHasError(true)}
              onEnded={handleEnded}
              onClick={togglePlay}
              className="w-full h-full object-contain cursor-pointer select-none bg-black"
            >
              <source src={getAssetPath('assets/resident-prototype.mp4')} type="video/mp4" />
            </video>

            {/* Fallback displayed ONLY if video fails to load */}
            {hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#0C0D11] z-10 select-none">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400/90 mb-3 shadow-inner">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-semibold text-white mb-2 font-sans">
                  Resident Prototype — Prototype unavailable to preview
                </h5>
                <p className="text-xs text-zinc-400 max-w-[260px] leading-relaxed">
                  The prototype video could not be loaded from <span className="font-mono text-[11px] text-zinc-300 bg-white/5 px-1 py-0.5 rounded">public/assets/resident-prototype.mp4</span>.
                </p>
              </div>
            )}

            {/* Hover Play/Pause Overlay Indicator */}
            {!hasError && (
              <button 
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                <div className="w-16 h-16 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl">
                  {isPlaying ? (
                    <Pause className="w-7 h-7" />
                  ) : (
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  )}
                </div>
              </button>
            )}
          </div>

          {/* Integrated Control Bar */}
          {!hasError && (
            <div className="p-4 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-white/10 space-y-3">
              {/* Progress Scrubbing Bar */}
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min={0}
                  max={duration || 63.32}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#48A1EA] hover:bg-white/30 transition-colors"
                />
              </div>

              {/* Bottom Control Actions & Status */}
              <div className="flex items-center justify-between">
                {/* Play, Volume, Restart Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={restartVideo}
                    className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                    title="Restart loop"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <div className="text-xs text-zinc-400 pl-1 font-medium">
                    <span className="text-white font-semibold">{formatTime(currentTime)}</span> / {formatTime(duration)}
                  </div>
                </div>

                {/* Active Chapter Badge & Fullscreen */}
                <div className="flex items-center space-x-3">
                  <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                    <span className="text-[#48A1EA] font-semibold mr-1.5">{STAGES[activeStageIndex].stage}</span>
                    <span className="truncate max-w-[280px]">{STAGES[activeStageIndex].label}</span>
                  </span>

                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 10-Step Walkthrough Interactive Chapters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
          {/* Chapter Timeline Grid (Left: 8 cols on lg) */}
          <div className="lg:col-span-8 p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#48A1EA] font-semibold">
                Walkthrough Chapters
              </span>
              <span className="text-[11px] text-zinc-400 font-medium">
                Chapter {activeStageIndex + 1} of {STAGES.length}
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Click any chapter below to jump the video player directly to that step in the prototype recording:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {STAGES.map((stg, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => seekToStage(stg.time)}
                    className={`text-left p-2.5 rounded-xl border transition-all flex items-center justify-between group ${
                      isActive 
                        ? 'bg-white/10 border-[#48A1EA] text-white shadow-sm' 
                        : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isActive ? 'bg-[#48A1EA] text-zinc-950' : 'bg-white/5 text-zinc-400'
                      }`}>
                        {stg.stage}
                      </span>
                      <span className="text-xs font-medium truncate">{stg.label}</span>
                    </div>

                    <span className={`text-[11px] shrink-0 font-medium ${isActive ? 'text-[#48A1EA] font-semibold' : 'text-zinc-400'}`}>
                      {formatTime(stg.time)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prototype Specifications Card (Right: 4 cols on lg) */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-[#111216] border border-white/10 space-y-3 text-xs">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
              Prototype Specifications
            </span>
            <ul className="space-y-2.5 text-zinc-400">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-200">Device Target:</strong> Android Compact (360 x 800) • 10 Chapters (~63s)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-200">Aspect Ratio:</strong> Original 1920x838 preserved without clipping screen content</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-200">Coverage:</strong> Service matrix, filter modal, 31-day August log & AI, overdue payments, Sharma Dairy specs, tax invoice & provider chat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
