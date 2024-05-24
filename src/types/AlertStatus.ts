export type AlertStatus = 'info' | 'success' | 'warning' | 'error';

export interface DynamicToastChild {
  text: string;
  status: AlertStatus;
}
