$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get("", routes.homeRoute);
        

        this.get('/index.html', routes.homeRoute)
    });

    app.run();
});


$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('/index.html', routes.homeRoute);

       
    });

    app.run();
});