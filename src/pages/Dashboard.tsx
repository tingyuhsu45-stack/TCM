import React, { useState } from 'react';
import { initialSessions } from '../data/mockData';
import { Session } from '../types';
import { ChevronDown, ChevronUp, Search, Calendar, Users, GraduationCap, Edit3 } from 'lucide-react';

export default function Dashboard() {
  const [sessions, setSessions] = useState<Session[]>(initialSessions);
  const [sortKey, setSortKey] = useState<keyof Session>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (key: keyof Session) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedSessions = [...sessions].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleNoteChange = (id: string, note: string) => {
    setSessions(sessions.map(s => s.id === id ? { ...s, trainerNotes: note } : s));
  };

  const SortIcon = ({ columnKey }: { columnKey: keyof Session }) => {
    if (sortKey !== columnKey) return <ChevronDown size={14} className="opacity-0 group-hover:opacity-30 ml-1" />;
    return sortOrder === 'asc' ? <ChevronUp size={14} className="text-blue-500 ml-1" /> : <ChevronDown size={14} className="text-blue-500 ml-1" />;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Active Sessions</h1>
          <p className="text-slate-500 mt-1">Manage your training cohorts and survey statuses.</p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all hover:shadow-md transform hover:-translate-y-0.5">
          + New Session
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 text-sm font-medium">
                <th className="p-4 cursor-pointer hover:bg-slate-100 transition-colors group" onClick={() => handleSort('courseName')}>
                  <div className="flex items-center">Course Name <SortIcon columnKey="courseName" /></div>
                </th>
                <th className="p-4 cursor-pointer hover:bg-slate-100 transition-colors group" onClick={() => handleSort('date')}>
                  <div className="flex items-center">Date <SortIcon columnKey="date" /></div>
                </th>
                <th className="p-4 cursor-pointer hover:bg-slate-100 transition-colors group" onClick={() => handleSort('companyTaught')}>
                  <div className="flex items-center">Company <SortIcon columnKey="companyTaught" /></div>
                </th>
                <th className="p-4">Surveys Status</th>
                <th className="p-4">Trainer Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedSessions.map((session) => (
                <tr key={session.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="p-4 align-top">
                    <div className="font-semibold text-slate-900 flex items-center gap-2">
                       <GraduationCap size={16} className="text-blue-500" />
                       {session.courseName}
                    </div>
                  </td>
                  <td className="p-4 align-top text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-slate-400" />
                      {session.date}
                    </div>
                  </td>
                  <td className="p-4 align-top text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-slate-400" />
                      {session.companyTaught}
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="flex gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${session.surveysCompleted.pre ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>Pre</span>
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${session.surveysCompleted.end ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>End</span>
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${session.surveysCompleted.refresher ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>Refresher</span>
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="relative">
                      <Edit3 size={14} className="absolute right-3 top-3 text-slate-300 pointer-events-none group-hover:text-blue-400 transition-colors" />
                      <textarea 
                        className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        rows={2}
                        placeholder="Add private notes..."
                        value={session.trainerNotes}
                        onChange={(e) => handleNoteChange(session.id, e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
