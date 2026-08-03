import React, { useState } from 'react';
import { Calendar, Filter, Clock, Globe, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { UPCOMING_ECONOMIC_EVENTS, EconomicEvent } from '../../data/researchData';

export const EconomicCalendarSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [impactFilter, setImpactFilter] = useState<string>('All');

  const categories = ['All', 'Rate', 'Inflation', 'GDP', 'Employment'];

  const filteredEvents = UPCOMING_ECONOMIC_EVENTS.filter((evt) => {
    const matchesCat = filterCategory === 'All' || evt.category === filterCategory;
    const matchesImpact = impactFilter === 'All' || evt.impact === impactFilter;
    return matchesCat && matchesImpact;
  });

  return (
    <section id="economic-calendar" className="py-12 lg:py-16 bg-slate-50/80 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>MACRO INDICATOR TRACKER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Global Economic Calendar
            </h2>
          </div>

          {/* Filter Toggles */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-emerald-600" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-slate-900 text-white font-bold shadow-2xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Events' : cat}
              </button>
            ))}

            <button
              onClick={() => setImpactFilter(impactFilter === 'High' ? 'All' : 'High')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                impactFilter === 'High'
                  ? 'bg-rose-600 text-white shadow-2xs'
                  : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
              }`}
            >
              <AlertCircle className="w-3 h-3" />
              High Impact Only
            </button>
          </div>
        </div>

        {/* Timeline Table / Cards */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="divide-y divide-slate-100">
            
            {/* Table Header Row */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-slate-50 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              <div className="col-span-2">Date & Time</div>
              <div className="col-span-2">Country</div>
              <div className="col-span-4">Event</div>
              <div className="col-span-1 text-center">Impact</div>
              <div className="col-span-1 text-right">Forecast</div>
              <div className="col-span-1 text-right">Previous</div>
              <div className="col-span-1 text-right">Actual</div>
            </div>

            {/* Event Items */}
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 items-center hover:bg-slate-50/80 transition-colors font-sans text-sm"
              >
                {/* Date & Time */}
                <div className="md:col-span-2 flex items-center gap-2 text-xs font-mono font-semibold text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{evt.date} • {evt.time}</span>
                </div>

                {/* Country */}
                <div className="md:col-span-2 flex items-center gap-2 text-xs font-medium text-slate-900">
                  <span className="text-base">{evt.countryFlag}</span>
                  <span>{evt.country}</span>
                </div>

                {/* Event Name */}
                <div className="md:col-span-4 font-bold text-slate-900 font-sans">
                  {evt.event}
                </div>

                {/* Impact Pill */}
                <div className="md:col-span-1 md:text-center">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    evt.impact === 'High'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {evt.impact}
                  </span>
                </div>

                {/* Forecast */}
                <div className="md:col-span-1 md:text-right text-xs font-mono text-slate-600">
                  <span className="md:hidden text-slate-400 mr-1">Forecast: </span>
                  {evt.forecast}
                </div>

                {/* Previous */}
                <div className="md:col-span-1 md:text-right text-xs font-mono text-slate-400">
                  <span className="md:hidden text-slate-400 mr-1">Prev: </span>
                  {evt.previous}
                </div>

                {/* Actual */}
                <div className="md:col-span-1 md:text-right text-xs font-mono font-bold">
                  {evt.actual ? (
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {evt.actual}
                    </span>
                  ) : (
                    <span className="text-slate-400 font-normal">Pending</span>
                  )}
                </div>
              </div>
            ))}

            {filteredEvents.length === 0 && (
              <div className="p-8 text-center text-slate-500 font-sans text-sm">
                No events match the selected filters.
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
