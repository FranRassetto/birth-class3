describe('La Homepage', function()
{
         it('deberia tener el titulo correcto', function()
          {
            //browser.get('https://birth-class-franrassetto.c9.io/');
            browser.get('http://localhost:8080');
            element(by.id('name')).sendKeys('fran');
            element(by.id('botonSaberMas')).click();
            
            var loginMessage = element(by.id('titulo'));
            expect(loginMessage.isPresent()).toBe(true);
            expect(loginMessage.getText()).toEqual('La Fantabulos App del Fran V2.0 fran'); 
          });
});