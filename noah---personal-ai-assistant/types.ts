import React from 'react';

export interface WidgetProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export interface CalendarEvent {
  time: string;
  title: string;
  color: string;
}

export interface Email {
  sender: string;
  subject: string;
  snippet: string;
}

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface DriveFile {
  name: string;
  type: 'folder' | 'doc' | 'sheet' | 'image';
  lastModified: string;
}