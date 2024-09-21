exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.usernametextbox = page.getByLabel('Username')
        this.passwordtextbox =page.getByLabel('Password')
        this.loginbutton =  page.getByRole('button', { name: ' Login' })
    }

    async gotoLoginPage() {

        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async connexion(username, password) {

        await this.usernametextbox.fill(username)
        await this.passwordtextbox.fill(password)
        await this.loginbutton.click()

    }
}
