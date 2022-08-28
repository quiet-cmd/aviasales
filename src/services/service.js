class AviasaleServices {
  async getResource(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Could not fetch url: ${res.status}`);
      return await res.json();
    } catch (e) {
      return;
    }
  }

  async createSearchId() {
    if (this.searchId) return;
    const result = await this.getResource('https://front-test.dev.aviasales.ru/search');
    return result.searchId;
  }

  async getOneTicketsPackage(searchId) {
    const url = `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`;
    const res = await this.getResource(url);
    return res.tickets;
  }

  async getAllTickets(searchId) {
    let stop = false;
    let cnt = 0;
    const result = [];
    const url = `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`;
    while (!stop && cnt !== 10) {
      const res = await this.getResource(url);
      if (res === undefined) {
        cnt++;
        continue;
      }
      stop = res.stop;
      result.push(...res.tickets);
      cnt = 0;
    }
    return result;
  }
}

export default AviasaleServices;
