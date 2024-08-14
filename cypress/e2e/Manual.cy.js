describe("User Authentication Tests", () => {
    beforeEach(() => {
        cy.visit('/');
      });
       
    it("Login command", () => {
      cy.visit('/');
      cy.get('[id="login2"]').should('be.visible').click(); 
      cy.wait(1000); 
      cy.Loginapp("VivekY","P@abc");
      cy.get('[id="nameofuser"]').should('have.text','Welcome VivekY');
  });  
  it("should count the number of children in the tbody", () => {
    cy.visit('/');
   
    const itemSelectors = [
        '#tbodyid > div:nth-child(1) > div > a > img',
        '#tbodyid > div:nth-child(2) > div > a > img',
        '#tbodyid > div:nth-child(3) > div > a > img',
      ];
      cy.wait(1000);
      itemSelectors.forEach((selector) => {
        cy.get(selector).should('be.visible').click();
        cy.wait(1000);
        cy.xpath('//*[@id="tbodyid"]/div[2]/div/a').should('be.visible').click();  
        cy.wait(1000);  
        cy.xpath('//*[@id="navbarExample"]/ul/li[4]/a').should('be.visible').click(); 
        cy.wait(1000);                                                                                                                                        
        cy.get('#navbarExample ul li:first-child a').should('be.visible').click();                                                                                                                                              
        });  
        let childrenCount;
        cy.log(childrenCount);
        cy.wait(2000);
        cy.xpath('//*[@id="navbarExample"]/ul/li[4]/a').should('be.visible').click(); 
        cy.wait(10000);
        cy.get('#tbodyid').children().its('length').then(count => {
            childrenCount = count; 
            cy.log(`Total number of children in #tbodyid: ${childrenCount}`);   
                cy.get('#totalp').invoke('text').then(text => {
                    const price = text.split('\n')[0].trim(); 
                    cy.log(`Intitialtotal Price: ${price}`);
                }); 
        });

        cy.get('#navbarExample ul li:first-child a').should('be.visible').click();
        cy.get('#tbodyid > div:nth-child(9) > div > a > img').should('be.visible').click();
        

        let productcount = 1;
        let productprice = 0;
        cy.get('#tbodyid').children().eq(2).invoke('text').then((priceText) => {
            const productprice = parseInt(priceText.match(/\d+/)[0], 10);
            cy.log(productprice);
        });
        cy.wait(1000);
        cy.xpath('//*[@id="tbodyid"]/div[2]/div/a').should('be.visible').click();  
        cy.wait(1000);  

        let finalCount;
        cy.log(finalCount);
        cy.wait(2000);
        cy.xpath('//*[@id="navbarExample"]/ul/li[4]/a').should('be.visible').click(); 
        cy.wait(10000);
        cy.get('#tbodyid').children().its('length').then(count => {
            finalCount = count; 
            cy.log(`Total number of children in #tbodyid: ${finalCount}`);   
                cy.get('#totalp').invoke('text').then(text => {
                    const finalPrice = text.split('\n')[0].trim(); 
                    cy.log(`Intitialtotal Price: ${finalPrice}`);
                }); 
        });

        

        

        

});

});