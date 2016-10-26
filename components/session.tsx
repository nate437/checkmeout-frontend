/// <reference path="../typing/gapi.auth2.d.ts"/>

class Session {
  public updateUser(newUser:any, newToken:string, newId:string){
    this['user'] = newUser;
    this['token'] = newToken;
    this['id'] = newId;
  };
}

var AppSession = new Session;

export default AppSession;
