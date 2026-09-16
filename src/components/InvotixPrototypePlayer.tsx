import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ChevronRight,
  Sparkles,
  Layers,
  FileText,
  Clock,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { getAssetPath } from '../utils/assets';

interface StageMarker {
  time: number;
  label: string;
  stage: string;
  description: string;
}

const INVOTIX_STAGES: StageMarker[] = [
  { 
    time: 0, 
    stage: '01', 
    label: 'Home Screen & Financial Overview', 
    description: 'Home screen showing quick financial summary (Monthly Revenue ₹12,450, Paid Today, Overdue), recent activity feed, and the primary Create New Invoice CTA.' 
  },
  { 
    time: 2, 
    stage: '02', 
    label: 'Select Invoice Creation Type', 
    description: '3 contextual paths: Quick Invoice (single-item), Bulk Invoice (multiple clients), and Event Specific.' 
  },
  { 
    time: 6, 
    stage: '03', 
    label: 'Quick Invoice Builder Flow', 
    description: 'Fast 2-tap client selection (John Doe), catalog line-item attachment (UI Design System), and live preview.' 
  },
  { 
    time: 14, 
    stage: '04', 
    label: 'Detailed Quick Invoice Editor', 
    description: 'Editing metadata (INV-2024-082, due dates), adjusting quantities, payment method, and 1-tap Save & Send.' 
  },
  { 
    time: 48, 
    stage: '05', 
    label: 'Bulk Invoice Creation Flow', 
    description: 'Configuring bulk items, filling or uploading spreadsheet data, batch preview selection, and bulk sending.' 
  },
  { 
    time: 89, 
    stage: '06', 
    label: 'Event-Specific Invoice Builder', 
    description: 'Package-based workflows (Sound, Stage Lighting, Microphones) with automated unit multipliers and tax summary.' 
  },
  { 
    time: 126, 
    stage: '07', 
    label: 'Financial Reports & Tax Analytics', 
    description: 'Payment status summaries (₹4,25,000 paid, ₹84,200 unpaid), monthly revenue curves, method breakdowns, and GST split.' 
  },
  { 
    time: 140, 
    stage: '08', 
    label: 'Account Preferences & Other Options', 
    description: 'Account preferences and settings: business profile details, payment setup (Razorpay/UPI), customer list, item catalog, template defaults, and invoice preferences.' 
  },
  { 
    time: 188, 
    stage: '09', 
    label: 'Live Invoice Template Customizer', 
    description: 'Interactive invoice styling: palette switcher (Red, Black, Green, Blue), typography (Anton, Roboto, Inter), and instant apply.' 
  },
  { 
    time: 206, 
    stage: '10', 
    label: 'Invoice Journey & Timeline Tracking', 
    description: 'Real-time lifecycle tracking: Sent → Reminder 1 → Reminder 2 → Paid with integrated QR codes and verification.' 
  },
];

export function InvotixPrototypePlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(231);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [hasError, setHasError] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play and handle initial mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback if browser requires interaction
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      setCurrentTime(cur);

      let idx = 0;
      for (let i = INVOTIX_STAGES.length - 1; i >= 0; i--) {
        if (cur >= INVOTIX_STAGES[i].time) {
          idx = i;
          break;
        }
      }
      setActiveStageIndex(idx);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 231);
      setHasError(false);
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

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

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const jumpToStage = (stageTime: number, index: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = stageTime;
      setCurrentTime(stageTime);
      setActiveStageIndex(index);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setActiveStageIndex(0);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const toggleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackRate(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const activeStage = INVOTIX_STAGES[activeStageIndex];

  return (
    <div className="space-y-6">
      {/* Top Header Card — Inspired by Case Study 1 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <h4 className="font-editorial text-base text-white font-normal">
              INVOTIX Prototype Walkthrough
            </h4>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#3899E8]/10 text-[#3899E8] border border-[#3899E8]/30">
              Interactive Recording
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            Interactive recording of the complete product experience: quick 2-tap invoices, bulk billing spreadsheets, package selectors, revenue tax analytics, template customizer, and live journey tracking.
          </p>
        </div>

        {/* Top Quick Actions */}
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
            className="px-3.5 py-1.5 rounded-xl bg-[#3899E8] hover:bg-[#2c84cc] text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-sm"
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
      </div>

      {/* Main Video Presentation Stage — Large High-Contrast Widescreen Stage */}
      <div className="space-y-4">
        <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group">
          {/* Responsive High-Impact Player Container */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[1920/880] bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={getAssetPath('assets/invotix-prototype.mp4')}
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
              <source src={getAssetPath('assets/invotix-prototype.mp4')} type="video/mp4" />
            </video>

            {/* Error Fallback */}
            {hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#0C0D11] z-10 select-none">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400/90 mb-3 shadow-inner">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-semibold text-white mb-2 font-sans">
                  INVOTIX Prototype — Prototype unavailable to preview
                </h5>
                <p className="text-xs text-zinc-400 max-w-[280px] leading-relaxed">
                  The prototype video could not be loaded from <span className="font-mono text-[11px] text-zinc-300 bg-white/5 px-1 py-0.5 rounded">public/assets/invotix-prototype.mp4</span>.
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

          {/* Clean Integrated Video Control Bar */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#0C0D12] border-t border-white/10 flex items-center justify-between gap-3 sm:gap-4">
            {/* Play/Pause & Audio */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>
              
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleSpeed}
                className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
                title="Playback Speed"
              >
                {playbackRate}x
              </button>
            </div>

            {/* Scrub Slider with Time display */}
            <div className="flex-1 flex items-center space-x-3">
              <span className="text-[11px] font-mono text-zinc-400 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#3899E8]"
              />
              <span className="text-[11px] font-mono text-zinc-400 w-10">
                {formatTime(duration)}
              </span>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors shrink-0"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Chapters Grid — Directly Below Video with Synced State */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3899E8] block font-semibold">
              Interactive Storyboard & Stage Navigator
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Stage {activeStage.stage} of {INVOTIX_STAGES.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {INVOTIX_STAGES.map((item, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => jumpToStage(item.time, idx)}
                  className={`text-left p-3 rounded-xl transition-all border flex flex-col justify-between ${
                    isActive 
                      ? 'bg-[#3899E8]/15 border-[#3899E8]/60 shadow-lg scale-[1.02]' 
                      : 'bg-black/40 border-white/5 hover:bg-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#3899E8] text-white' : 'bg-white/10 text-zinc-400'
                    }`}>
                      {item.stage}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {formatTime(item.time)}
                    </span>
                  </div>
                  <h5 className={`text-xs font-semibold line-clamp-1 ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {item.label}
                  </h5>
                  <p className="text-[10px] text-zinc-400 leading-tight mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Callout Box */}
          <div className="p-3.5 rounded-xl bg-[#12151F] border border-[#3899E8]/20 flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#3899E8] mt-1.5 shrink-0 animate-ping" />
            <div className="space-y-0.5">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-white">
                  Stage {activeStage.stage}: {activeStage.label}
                </span>
                <span className="text-[10px] font-mono text-[#3899E8] bg-[#3899E8]/10 px-1.5 py-0.5 rounded">
                  {formatTime(activeStage.time)}
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeStage.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
