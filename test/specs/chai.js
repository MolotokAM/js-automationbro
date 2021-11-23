import {expect as chaiExpect} from 'chai';
import 'chai/register-should';

describe('Watches',  () => {
    it('should show banner container', () => {
        browser.url('https://www.ebay.com/');
        const promoBanner = $('//*[@id="s0-0-32-3-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[1]/div/div');
        expect(promoBanner).toBeDisabled();
    });

    it('should show the banner title', () => {
        const infoTitle = $('//*[@id="s0-0-32-3-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[2]/div/div/div/h2/a/div/span');
        const infoTitleText = infoTitle.getText();
        expect(infoTitle).toHaveTextContaining('Береги автомобиль!');
        chaiExpect(infoTitleText).to.not.be.empty;
    });

    it('should contain on banner button and verify its clickable', () => {
        const shopButton = $('//*[@id="s0-0-32-3-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[2]/div/div/div/div[2]/a/div[2]');
        expect('shopButton').toHaveLinkContaining('/Auto-parts-and-Accessories/');
        const tag = shopButton.getTagName();

        expect(shopButton).toBeClickable(); // Проверяет кликабелен ли элемент
        chaiExpect(tag).to.equal('a');
        tag.should.equal('a');
    });

    it('should click on the shop button and verify new URL', () => {
        const shopButton = $('//*[@id="s0-0-32-3-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[2]/div/div/div/div[2]/a/div[2]');
        shopButton.click();
        expect(browser).toHaveUrl('https://by.ebay.com/b/Auto-parts-and-Accessories/bn_7117641174?_trkparms=%2526clkid%253D6111571997784190454');
    });

    it('should click on the shop button and verify new URL', () => {
        const shopButton = $('//*[@id="s0-0-32-3-0-0[0]-2-match-media-0-ebay-carousel-list"]/li[2]/div/div/div/div[2]/a/div[2]');
        shopButton.click();
        const url = browser.getUrl();
        chaiExpect(url).to.include('/Auto-parts-and-Accessories/'); // Ожидаем что в URL будет содержаться /Auto-parts-and-Accessories/
    //     expect(browser).toHaveUrl('https://by.ebay.com/b/Auto-parts-and-Accessories/bn_7117641174?_trkparms=%2526clkid%253D6111571997784190454');
    });



});