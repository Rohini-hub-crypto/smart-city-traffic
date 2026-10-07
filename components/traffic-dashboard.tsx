'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Activity,
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  Camera,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  Crosshair,
  Cpu,
  Zap,
  Maximize2,
  Pause,
  Play,
  Radio,
  ShieldCheck,
  Signal,
  Siren,
  Video,
} from 'lucide-react'

const violations = [
  { plate: 'CA 8LXM214', owner: 'Jordan Lee', time: '10:42:18', sent: true },
  { plate: 'CA 7NPK603', owner: 'Avery Morgan', time: '10:38:51', sent: true },
  { plate: 'CA 9RDT822', owner: 'Samira Patel', time: '10:31:06', sent: false },
]

function PanelHeading({ icon: Icon, title, meta }: { icon: typeof Activity; title: string; meta?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.035] text-cyan-300">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <h2 className="truncate text-sm font-semibold tracking-wide text-slate-100">{title}</h2>
      </div>
      {meta && <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">{meta}</span>}
    </div>
  )
}

function MetricCard({ label, value, change, icon: Icon, accent }: { label: string; value: string; change: string; icon: typeof Activity; accent: 'cyan' | 'lime' }) {
  const color = accent === 'cyan' ? 'text-cyan-300' : 'text-lime-300'
  return (
    <article className="rounded-xl border border-white/[0.08] bg-[#0d141c] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase leading-4 tracking-[0.14em] text-slate-500">{label}</p>
          <p className="mt-3 font-mono text-[clamp(1.7rem,3vw,2.25rem)] font-semibold leading-none tracking-tight text-white">{value}</p>
        </div>
        <span className={`grid size-9 place-items-center rounded-lg bg-white/[0.04] ${color}`}>
          <Icon className="size-[18px]" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
        <ArrowUpRight className="size-3.5 text-lime-300" aria-hidden="true" />
        <span className="font-medium text-lime-300">{change}</span>
        <span>vs. previous hour</span>
      </div>
    </article>
  )
}

export default function TrafficDashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [emergencyActive, setEmergencyActive] = useState(true)

  return (
    <main className="min-h-screen bg-[#080d12] text-slate-100">
      <div className="mx-auto max-w-[1600px] px-4 pb-8 pt-5 sm:px-6 sm:pt-7 lg:px-8">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3.5">
            <div className="grid size-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.08)]">
              <Signal className="size-5" aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">NEXUS / MOBILITY</p>
                <span className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">Hackathon build</span>
              </div>
              <h1 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">Smart City Traffic Command</h1>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" /><span className="relative inline-flex size-2 rounded-full bg-emerald-400" /></span>
              SYSTEM OPERATIONAL
            </div>
            <button type="button" aria-label="Notifications" className="relative grid size-10 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-slate-400 transition hover:border-white/20 hover:text-white">
              <Bell className="size-[17px]" aria-hidden="true" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-cyan-300" />
            </button>
            <button type="button" className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-slate-300 transition hover:border-white/20">
              <span className="grid size-5 place-items-center rounded-full bg-slate-700 text-[9px] font-semibold text-white">OC</span>
              Ops center <ChevronDown className="size-3.5 text-slate-500" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-slate-500">NETWORK OVERVIEW <span className="px-1.5 text-slate-700">/</span> DISTRICT 04</p>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-[28px]">Intersection monitoring</h2>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs text-slate-400">
            <Clock3 className="size-3.5 text-slate-500" aria-hidden="true" />
            <span>Wednesday, October 7</span><span className="text-slate-700">•</span><span className="font-mono text-slate-300">10:42 AM</span>
          </div>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(410px,0.9fr)]">
          <section aria-labelledby="camera-heading" className="min-w-0 rounded-2xl border border-white/[0.08] bg-[#0b1118] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <PanelHeading icon={Video} title="Live camera feed" meta="CAM-04 / 1080P" />
              <div className="flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-400/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-rose-300">
                <span className="size-1.5 animate-pulse rounded-full bg-rose-400" /> LIVE
              </div>
            </div>
            <h2 id="camera-heading" className="sr-only">Live camera feed</h2>
            <div className={`traffic-feed relative isolate aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#101820] sm:aspect-[16/9] ${isAnalyzing ? 'is-analyzing' : ''}`}>
              <Image src="/night-intersection.png" alt="Elevated night view of a city intersection with cars moving through marked lanes" fill priority className="object-cover brightness-[0.72] saturate-[0.72]" sizes="(max-width: 1280px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071019]/90 via-transparent to-[#071019]/50" />
              <div className="feed-grid pointer-events-none absolute inset-0 opacity-40" />
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-white/10 bg-[#071019]/75 px-2.5 py-1.5 text-[10px] font-mono text-slate-200 backdrop-blur-sm sm:left-4 sm:top-4">
                <Crosshair className="size-3 text-cyan-300" aria-hidden="true" /> 37.7749° N, 122.4194° W
              </div>
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md border border-white/10 bg-[#071019]/75 px-2.5 py-1.5 text-[10px] font-mono text-slate-200 backdrop-blur-sm sm:right-4 sm:top-4">
                <Radio className="size-3 text-emerald-300" aria-hidden="true" /> 24 FPS
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">CAM 04 <span className="px-1 text-white/40">/</span> MARKET &amp; 8TH</p>
                    <p className="mt-1 text-sm font-medium text-white">Northbound intersection</p>
                  </div>
                  <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] text-slate-300">10:42:18 <span className="text-slate-500">UTC−07</span></span>
                </div>
              </div>
              {isAnalyzing && <div className="pointer-events-none absolute left-[36%] top-[40%] h-[18%] w-[14%] rounded-sm border border-cyan-300/90 shadow-[0_0_16px_rgba(34,211,238,0.35)]"><span className="absolute -top-5 left-0 bg-cyan-300 px-1.5 py-0.5 text-[9px] font-semibold text-slate-950">VEHICLE 98%</span></div>}
              {isAnalyzing && <div className="pointer-events-none absolute left-[63%] top-[50%] h-[12%] w-[11%] rounded-sm border border-lime-300/90 shadow-[0_0_16px_rgba(190,242,100,0.3)]"><span className="absolute -top-5 left-0 bg-lime-300 px-1.5 py-0.5 text-[9px] font-semibold text-slate-950">EV 94%</span></div>}
              <button type="button" aria-label="Expand camera feed" className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-md border border-white/10 bg-black/35 text-white/70 backdrop-blur-sm transition hover:bg-black/60 hover:text-white sm:bottom-4 sm:right-4"><Maximize2 className="size-3.5" aria-hidden="true" /></button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-[11px] text-slate-500"><Camera className="size-3.5" aria-hidden="true" /> Testing feed <span className="text-slate-700">•</span> Demo data only</p>
              <button type="button" onClick={() => setIsAnalyzing((active) => !active)} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1118] ${isAnalyzing ? 'border border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-200 hover:bg-cyan-300/[0.14]' : 'bg-cyan-300 text-[#071019] shadow-[0_0_24px_rgba(34,211,238,0.16)] hover:bg-cyan-200'}`}>
                {isAnalyzing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4 fill-current" aria-hidden="true" />}
                {isAnalyzing ? 'Stop AI Video Analysis' : 'Start AI Video Analysis'}
              </button>
            </div>
            {isAnalyzing && <p className="mt-3 flex items-center gap-2 text-[11px] text-cyan-200"><Cpu className="size-3.5" aria-hidden="true" /> Demo inference active — vehicle detection overlays enabled.</p>}
          </section>

          <aside aria-label="Live traffic analytics" className="flex min-w-0 flex-col gap-4">
            <section className="rounded-2xl border border-white/[0.08] bg-[#0b1118] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <PanelHeading icon={Activity} title="Signal controller" meta="INT-04" />
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-300" /> SYNCED</span>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#080d12] p-3.5 sm:p-4">
                <div className="flex gap-2 rounded-full border border-white/[0.08] bg-[#0c131a] p-2">
                  <span aria-label="Red signal off" className="size-5 rounded-full border border-rose-300/20 bg-rose-400/15" />
                  <span aria-label="Yellow signal off" className="size-5 rounded-full border border-amber-300/20 bg-amber-300/15" />
                  <span aria-label="Green signal active" className="size-5 rounded-full bg-emerald-400 shadow-[0_0_13px_rgba(52,211,153,0.75)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2"><p className="text-sm font-semibold text-emerald-300">GREEN · ACTIVE</p><p className="font-mono text-xs text-slate-400">00:18</p></div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full w-[68%] rounded-full bg-emerald-400" /></div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <MetricCard label="Total vehicles counted" value="1,284" change="12.8%" icon={Activity} accent="cyan" />
              <MetricCard label="EV vehicles counted" value="316" change="8.4%" icon={Zap} accent="lime" />
            </div>

            <section className={`rounded-xl border p-4 transition-colors ${emergencyActive ? 'emergency-active border-rose-400/30 bg-rose-500/[0.08]' : 'border-white/[0.08] bg-[#0d141c]'}`} aria-live="polite">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${emergencyActive ? 'bg-rose-400/15 text-rose-300' : 'bg-white/[0.06] text-slate-400'}`}><Siren className="size-[18px]" aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${emergencyActive ? 'text-rose-300' : 'text-slate-500'}`}>Emergency override</p>
                    <p className="mt-1 truncate text-sm font-semibold text-white">{emergencyActive ? 'Priority vehicle approaching' : 'No active emergency override'}</p>
                  </div>
                </div>
                <button type="button" aria-pressed={emergencyActive} onClick={() => setEmergencyActive((active) => !active)} className={`min-h-9 rounded-md border px-3 text-[11px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 ${emergencyActive ? 'border-rose-300/25 bg-rose-400/10 text-rose-200 hover:bg-rose-400/20' : 'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'}`}>
                  {emergencyActive ? 'Override active' : 'Activate override'}
                </button>
              </div>
              {emergencyActive && <p className="mt-3 flex items-center gap-2 border-t border-rose-300/10 pt-3 text-[11px] text-rose-200/75"><CircleAlert className="size-3.5 shrink-0" aria-hidden="true" /> Signal preemption enabled · inbound ambulance · 0.4 mi</p>}
            </section>

            <section className="rounded-xl border border-white/[0.08] bg-[#0d141c] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <PanelHeading icon={ArrowDownLeft} title="Free turn lane status" meta="SAFE BYPASS" />
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-emerald-300"><ShieldCheck className="size-3" aria-hidden="true" /> SAFE</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/[0.06] bg-[#080d12] p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300"><ArrowDownLeft className="size-3.5 text-cyan-300" aria-hidden="true" /> Free left</div>
                  <p className="mt-2 text-sm font-semibold text-emerald-300">Allowed</p>
                  <p className="mt-1 text-[10px] text-slate-500">Clear lane · 2.1 sec gap</p>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-[#080d12] p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300"><ArrowUpRight className="size-3.5 text-cyan-300" aria-hidden="true" /> Free right</div>
                  <p className="mt-2 text-sm font-semibold text-emerald-300">Allowed</p>
                  <p className="mt-1 text-[10px] text-slate-500">Pedestrian clear</p>
                </div>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-500"><ShieldCheck className="size-3" aria-hidden="true" /> AI safety checks active for pedestrian &amp; cross-traffic</p>
            </section>

            <section className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d141c]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-4 sm:px-5">
                <PanelHeading icon={CircleAlert} title="Helmet violations log" />
                <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] text-slate-400">Today <ChevronDown className="ml-1 inline size-3" aria-hidden="true" /></span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[440px] text-left">
                  <thead><tr className="border-b border-white/[0.06] text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500"><th scope="col" className="px-4 py-3 sm:px-5">License plate</th><th scope="col" className="px-3 py-3">Owner name</th><th scope="col" className="px-3 py-3 sm:pr-5">SMS status</th></tr></thead>
                  <tbody>{violations.map((violation) => <tr key={violation.plate} className="border-b border-white/[0.045] last:border-0"><td className="px-4 py-3.5 font-mono text-xs font-medium text-slate-200 sm:px-5">{violation.plate}<span className="mt-1 block font-sans text-[9px] font-normal text-slate-600">{violation.time}</span></td><td className="px-3 py-3.5 text-xs text-slate-400">{violation.owner}</td><td className="px-3 py-3.5 sm:pr-5">{violation.sent ? <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-2 py-1 text-[9px] font-medium text-emerald-300"><Check className="size-3" aria-hidden="true" /> Sent</span> : <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/15 bg-amber-300/[0.06] px-2 py-1 text-[9px] font-medium text-amber-200"><Bell className="size-3" aria-hidden="true" /> Pending</span>}</td></tr>)}</tbody>
                </table>
              </div>
              <div className="border-t border-white/[0.06] px-4 py-3 text-center text-[10px] text-slate-500 sm:px-5">Showing 3 of 12 flagged events <span className="px-1 text-slate-700">·</span> Demo records</div>
            </section>
          </aside>
        </div>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-4 text-[10px] text-slate-600">
          <span>NEXUS TRAFFIC INTELLIGENCE <span className="px-1.5 text-slate-700">/</span> DISTRICT 04</span>
          <span>All values shown are simulated for demonstration purposes.</span>
        </footer>
      </div>
    </main>
  )
}
