let routes =(()=>{
    function homeRoute(ctx) {
      
    
        this.loadPartials({
          navbar: '/templates/common/navbar.hbs',
          jumbotronHome: '/templates/common/jumbotronHome.hbs',
          footer: '/templates/common/footer.hbs',
          accountsBalance: '/templates/accountsBalance.hbs',
          createTransaction: '/templates/transactions/createTransaction.hbs',
          card: '/templates/cards/card.hbs',
          lastTransaction: '/templates/transactions/lastTransaction.hbs'
        }).then(function () {
          this.partial('/templates/homeView/home.hbs');
        });
      }

      return {
          homeRoute
      }
})();





