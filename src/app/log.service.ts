export enum LogLevel {
  DEBUG,
  INFO,
  ERROR,
}

import { Injectable, InjectionToken } from '@angular/core';

export const LOG_SERVICE = new InjectionToken('logger');
export const LOG_LEVEL = new InjectionToken('log_level');

@Injectable()
export class LogService {
  minimumLevel = LogLevel.INFO;

  constructor() {
    console.log('СОЗДАН ЛОГ_СЕРВИС (КОНСТРУКТОР), minLevel: ', this.minimumLevel);
  }

  ngOnInit() {
    console.log('СОЗДАН ЛОГ_СЕРВИС, minLevel: ', this.minimumLevel);
  }

  logInfoMessage(message: string) {
    this.logMessage(LogLevel.INFO, message);
  }
  logDebugMessage(message: string) {
    this.logMessage(LogLevel.DEBUG, message);
  }
  logErrorMessage(message: string) {
    this.logMessage(LogLevel.ERROR, message);
  }

  logMessage(level: LogLevel, message: string) {
    if (level >= this.minimumLevel) {
      console.log(`Message (${LogLevel[level]}): ${message}`);
    }
  }
}
