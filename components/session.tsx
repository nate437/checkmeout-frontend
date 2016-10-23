/// <reference path="../typing/gapi.auth2.d.ts"/>

class Session {
  public updateUser(newUser:any){
    this['user'] = newUser;
  };
}

var AppSession = new Session;

export default AppSession;
