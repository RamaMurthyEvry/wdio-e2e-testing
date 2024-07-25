
class LoginControls{
    public get inputUsername () { return $('#username') }
    public get inputPassword () { return $('#password') }
    public get btnSubmit () { return $('button[type="submit"]') }
}

export default new LoginControls();