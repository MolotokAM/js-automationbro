import {expect as chaiExpect} from 'chai'; // импортируем библиотеку ожиданий Chai, называя экспекты от chai как chaiExpect

describe('Watches',  () => {
    it('should show banner container',  ()=> {
        browser.url('https://by.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promoBanner=$('section.b-promobanner');
        expect(promoBanner).toBeDisabled();
    });

    it('should show the banner title', () => {
        const infoTitle = $('.b-promobanner__info-title');
        expect (infoTitle).toHaveTextContaining('Extra 20% off on select watches');
    });

    it ('should contain on banner button and verify its clickable', () => {
        const shopButton = $('.b-promobanner__info-btn');
        expect('shopButton').toHaveLinkContaining('/fashion/');
        expect(shopButton).toBeClickable(); // Проверяет кликабелен ли элемент
    });

    it ('should click on the shop button and verify new URL', () => {
        const shopButton = $('.b-promobanner__info-btn');
        shopButton.click();
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watches-sfc-4th-of-july-062929'
        );

        it ('should click on the shop button and verify new URL (first CHAI)', () => {
            const shopButton = $('.b-promobanner__info-btn');
            shopButton.click();
            const url = browser.getUrl();
            chaiExpect(url).to.include('/fashion/'); // Ожидаем что в URL будет содержаться /fashion/
            expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watches-sfc-4th-of-july-062929'
            );
        );
    });



});