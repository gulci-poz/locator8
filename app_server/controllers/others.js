module.exports.about = function (req, res) {
    res.render('generic-text', {
        title: 'About',
        mission: 'locator8 was created to help people find places to sit down and get a bit of work done.',
        story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan.'
    });
};
