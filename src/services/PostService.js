import axios from 'axios';

class PostService {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8000/api',
    });
  }

  async getAll() {
    try {
      const { data } = await this.client.get('posts');

      return data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  async get(id) {
    try {
      const { data } = await this.client.get(
        `posts/${id}?filter={"include":["comments"]}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async add(newPost) {
    try {
      const { data } = await this.client.post('posts', newPost);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async edit(id, post) {
    try {
      const { data } = await this.client.put(`posts/${id}`, post);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async delete(id) {
    try {
      const { data } = await this.client.delete(`posts/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async addComment(comment, postId) {
    try {
      const { data } = await this.client.post(
        `posts/${postId}/comments`,
        comment
      );

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}

export default new PostService();
