import { join } from 'path';

class Data {
  constructor() {
    this.resumeData = fetch(join(__dirname, 'resume_data.json'), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then(r => r.json());
  }
}

export const data = new Data();
