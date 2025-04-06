import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {
  status: string = 'Загрузка...';
  message: string = '';
  error: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.checkApiHealth();
  }

  checkApiHealth(): void {
    this.apiService.getHealthCheck().subscribe({
      next: (data) => {
        this.status = data.status;
        this.message = data.message;
      },
      error: (err) => {
        this.error = 'Ошибка соединения с API. Убедитесь, что бэкенд запущен.';
      }
    });
  }
}
