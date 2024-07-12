import { click, setText } from '../utils/Commands.ts';
import Page from './Page.ts';
import loginControls from './Login.controls.ts'


class LoginPage extends Page {

    async login(userName: string, password: string) {
        await setText(loginControls.inputUsername, userName);
        await setText(loginControls.inputPassword, password)
        await click(loginControls.btnSubmit);
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
