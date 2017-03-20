export class ServerLib {

  static getServerAddress(path){
    return "http://" + window.location.host  + path
  }

}

