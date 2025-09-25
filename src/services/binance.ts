class BinanceApi {
  static instance: BinanceApi

  static getInstance() {
    if (!this.instance) {
      this.instance = new BinanceApi()
    }

    return this.instance
  }

  fetch(): string {
    return "response"
  }
}

export default BinanceApi
