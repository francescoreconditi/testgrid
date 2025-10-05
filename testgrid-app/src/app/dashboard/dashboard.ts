import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GridStack, GridStackWidget } from 'gridstack';

interface DashboardWidget {
  id: string;
  title: string;
  content: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit, AfterViewInit {
  @ViewChild('gridStackContainer', { static: false }) gridStackContainer!: ElementRef;

  private grid!: GridStack;
  isLocked = true;

  widgets: DashboardWidget[] = [
    {
      id: 'widget-1',
      title: 'Vendite Totali',
      content: '€125,430',
      x: 0,
      y: 0,
      w: 3,
      h: 2
    },
    {
      id: 'widget-2',
      title: 'Utenti Attivi',
      content: '1,523',
      x: 3,
      y: 0,
      w: 3,
      h: 2
    },
    {
      id: 'widget-3',
      title: 'Ordini Oggi',
      content: '89',
      x: 6,
      y: 0,
      w: 3,
      h: 2
    },
    {
      id: 'widget-4',
      title: 'Grafico Vendite',
      content: '📊 Trend in crescita del 23%',
      x: 0,
      y: 2,
      w: 6,
      h: 4
    },
    {
      id: 'widget-5',
      title: 'Attività Recenti',
      content: '• Nuovo ordine #1234\n• Cliente registrato\n• Pagamento ricevuto',
      x: 6,
      y: 2,
      w: 3,
      h: 4
    }
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initGridStack();
  }

  initGridStack(): void {
    const items: GridStackWidget[] = this.widgets.map(widget => ({
      id: widget.id,
      x: widget.x,
      y: widget.y,
      w: widget.w,
      h: widget.h
    }));

    this.grid = GridStack.init({
      column: 9,
      cellHeight: 70,
      acceptWidgets: true,
      disableResize: true,
      disableDrag: true,
      float: true
    }, this.gridStackContainer.nativeElement);
  }

  toggleLock(): void {
    this.isLocked = !this.isLocked;

    if (this.grid) {
      if (this.isLocked) {
        this.grid.disable();
      } else {
        this.grid.enable();
      }
    }
  }
}
