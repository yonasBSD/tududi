import { Tag } from './Tag';
import { Project } from './Project';

export interface Task {
    id?: number;
    uuid?: string;
    name: string;
    status: StatusType | number;
    priority?: PriorityType | number;
    due_date?: string;
    note?: string;
    today?: boolean;
    today_move_count?: number;
    tags?: Tag[];
    project_id?: number;
    Project?: Project;
    created_at?: string;
    updated_at?: string;
    recurrence_type?: RecurrenceType;
    recurrence_interval?: number;
    recurrence_end_date?: string;
    recurrence_weekday?: number;
    recurrence_month_day?: number;
    recurrence_week_of_month?: number;
    completion_based?: boolean;
    recurring_parent_id?: number;
    completed_at: string | null;
    parent_task_id?: number;
    subtasks?: Task[];
    Subtasks?: Task[]; // Handle API response case sensitivity (temporary)
    parent_child_logic_executed?: boolean; // Flag indicating if parent-child logic was executed during toggle
}

export type StatusType =
    | 'not_started'
    | 'in_progress'
    | 'done'
    | 'archived'
    | 'waiting';
export type PriorityType = 'low' | 'medium' | 'high';
export type RecurrenceType =
    | 'none'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'monthly_weekday'
    | 'monthly_last_day';
