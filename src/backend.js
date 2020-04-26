
class Creeper {
  constructor () {
    this.onInstalled()
  }
  onInstalled () {
    chrome.runtime.onInstalled.addListener(() => {
      console.log('Installed')
    });
  }
}

let backend = new Creeper()
