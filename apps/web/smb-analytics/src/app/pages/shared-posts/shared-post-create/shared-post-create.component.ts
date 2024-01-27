import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SharedPostsActions } from '../../../store/shared-posts/shared-posts.actions';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'nx-smb-shared-post-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule,
  ],
  templateUrl: './shared-post-create.component.html',
  styleUrl: './shared-post-create.component.scss',
})
export class SharedPostCreateComponent {
  store = inject(Store);
  fb = inject(FormBuilder);

  sharedPostForm = this.fb.nonNullable.group({
    url: ['', [Validators.required, Validators.minLength(10)]],
    likeCount: [0, [Validators.required]],
    sharedAt: [
      new Date(),
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
  });

  onSubmit() {
    if (this.sharedPostForm.valid) {
      const sharedPost = this.sharedPostForm.getRawValue();
      this.store.dispatch(SharedPostsActions.saveSharedPost({ sharedPost }));
    }
  }
}
