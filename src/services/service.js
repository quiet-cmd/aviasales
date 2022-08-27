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

  async getTickets(searchId) {
    let stop = false;
    const result = [];
    const url = `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`;
    while (!stop) {
      const res = await this.getResource(url);
      if (res) {
        stop = res.stop;
        result.push(...res.tickets);
      }
    }
    return result;
  }
}

export default AviasaleServices;
