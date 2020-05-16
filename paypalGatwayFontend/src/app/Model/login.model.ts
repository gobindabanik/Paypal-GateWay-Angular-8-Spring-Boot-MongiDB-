export class Login {
    public email : String ;
    public password :String ;
    constructor(login?: Login) {
      Object.assign(this, login);
    }
}
