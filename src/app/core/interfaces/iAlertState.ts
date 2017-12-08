export interface IAlertState {
  severity: string;
  inFlight: boolean;
  message: string;
  icon: string;
  showSave: boolean;
  saveText: string;
}
