describe('Product search on Ebay', () => {
    it('should open URL and verify title', () => {
        browser.url('https://www.ebay.com/');
        expect(browser).toHaveTitle(
            'Электроника, автомобили, мода, коллекционирование, купоны и другие товары | eBay'
        );
    });
    
    it('should search for a product and verify yhe search text value ',() => {
        const searchInput = $('#gh-ac');
        const searchBtn = $('#gh-btn');

        searchInput.addValue('Ноутбук');
        searchBtn.click();

        expect(searchInput).toHaveValue('Ноутбук');
    });

    it('should redirect to a new page and verify the title',  () => {
        expect(browser).toHaveTitle('ноутбук | eBay');
    });

    it('should update search category', ()=> {
       const category = $('#gh-cat option:nth-child(1)'); // XPath первой категории (Ноутбуки и нетбуки PC)
        expect(category).toHaveText('Ноутбуки и нетбуки PC');
    });
 });