import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ISharedPost } from '../interfaces/shared-post.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedPostsService {
  httpClient = inject(HttpClient);
  baseUrl = `${import.meta.env.NG_APP_API_URL}/v1/api`;

  saveSharedPost(sharedPost: ISharedPost) {
    return this.httpClient.post<ISharedPost>(
      `${this.baseUrl}/shared-posts`,
      sharedPost
    );
  }
}
