import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../redux/counter.actions';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss'],
})
export class ReduxComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
