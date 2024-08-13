import { expect, Locator, Page } from "@playwright/test";


export class LoginPage {
    readonly page: Page
    readonly salonIdTextbox: Locator
    readonly salonPasswordTextbox: Locator
    readonly loginButton: Locator
    readonly requiredSalonPasswordLocator: Locator
    readonly requiredSalonIdLocator: Locator

    constructor(page: Page) {
        this.page = page
        this.salonIdTextbox = page.getByPlaceholder('아이디 입력')
        this.salonPasswordTextbox = page.getByPlaceholder('비밀번호 입력')
        this.loginButton = page.locator('button', { hasText: '로그인' })
    }

    async goto() {
        await this.page.goto('/login/login', { timeout: 5 * 5000 })
    }

    async enterSalonId(salonId: string) {
        await this.salonIdTextbox.fill('')
        await this.salonIdTextbox.fill(salonId)
        await this.salonIdTextbox.blur();
    }

    async enterSalonPassword(salonPassword: string) {
        await this.salonPasswordTextbox.fill(salonPassword);
        await this.salonPasswordTextbox.blur();
    }

    async clickButtonLogin() {
        await this.loginButton.click()
    }

    async loginSuccessful() {
        expect(this.page.url()).toContain('/#/')
    }

}