class Data {
  constructor() {
    this.resumeData = fetch(`${process.env.PUBLIC_URL}/resume.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then(r => r.json());
  }
}

export const data = new Data();
