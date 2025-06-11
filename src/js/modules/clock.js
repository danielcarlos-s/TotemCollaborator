
// Módulo para funcionalidades do relógio
export class Clock {
  constructor() {
    this.timeElement = document.getElementById('current-time');
    this.dateElement = document.getElementById('current-date');
  }

  formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    return hours + ':' + minutes;
  }

  formatDate(date) {
    const daysOfWeek = [
      "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", 
      "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthName = monthNames[date.getMonth()];
    
    return `${dayOfWeek}, ${dayOfMonth} de ${monthName}`;
  }

  updateClock() {
    const now = new Date();
    const timeString = this.formatTime(now);
    if (this.timeElement) {
      this.timeElement.textContent = timeString;
    }
  }

  updateDate() {
    const now = new Date();
    const dateString = this.formatDate(now);
    if (this.dateElement) {
      this.dateElement.textContent = dateString;
    }
  }

  init() {
    this.updateClock();
    this.updateDate();
    setInterval(() => this.updateClock(), 1000);
  }
}