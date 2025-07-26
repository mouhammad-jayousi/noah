
import React from 'react';
import Widget from './Widget';
import { CalendarEvent, Email, Task, DriveFile } from '../types';

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const TaskIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
const DriveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;


const mockCalendarEvents: CalendarEvent[] = [
  { time: '10:00 AM', title: 'Project Sync', color: 'border-l-teal-400' },
  { time: '12:30 PM', title: 'Lunch with team', color: 'border-l-sky-400' },
  { time: '3:00 PM', title: 'Q3 Planning Session', color: 'border-l-amber-400' },
];

const mockEmails: Email[] = [
  { sender: 'GitHub', subject: '[noah-ai] Your build has passed', snippet: 'CI checks for commit #a1b2c3d passed successfully...' },
  { sender: 'Alice', subject: 'Re: Project Update', snippet: 'Thanks for the summary! I have a few questions about the timeline...' },
];

const mockTasks: Task[] = [
  { id: 1, text: 'Draft Q4 marketing proposal', completed: false },
  { id: 2, text: 'Review new UI/UX mockups', completed: false },
  { id: 3, text: 'Onboard new engineer', completed: true },
];

const Dashboard: React.FC = () => {
  return (
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Widget title="Today's Schedule" icon={<CalendarIcon />}>
        <div className="space-y-3">
          {mockCalendarEvents.map((event) => (
            <div key={event.title} className={`pl-3 ${event.color}`}>
              <p className="font-semibold text-slate-200">{event.title}</p>
              <p className="text-sm text-slate-400">{event.time}</p>
            </div>
          ))}
        </div>
      </Widget>

      <Widget title="Priority Inbox" icon={<EmailIcon />}>
        <div className="space-y-4">
          {mockEmails.map((email) => (
            <div key={email.subject}>
              <p className="font-semibold text-slate-200 truncate">{email.subject}</p>
              <p className="text-sm text-slate-400 truncate"><span className="font-medium text-slate-300">{email.sender}:</span> {email.snippet}</p>
            </div>
          ))}
        </div>
      </Widget>

      <Widget title="Task List" icon={<TaskIcon />}>
        <div className="space-y-2">
          {mockTasks.map((task) => (
            <div key={task.id} className="flex items-center">
              <input type="checkbox" readOnly checked={task.completed} className="form-checkbox h-4 w-4 bg-slate-700 border-slate-500 text-cyan-500 rounded focus:ring-cyan-600" />
              <span className={`ml-3 text-slate-300 ${task.completed ? 'line-through text-slate-500' : ''}`}>{task.text}</span>
            </div>
          ))}
        </div>
      </Widget>
    </div>
  );
};

export default Dashboard;