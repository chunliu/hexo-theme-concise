const htmlToText = require('html-to-text');
(function(){
    const sanitize = function (post) {
        const content = htmlToText.fromString(
            post,
            {
                ignoreImage: true,
                ignoreHref: true,
                wordwrap: false,
                uppercaseHeadings: false
            }
        );
        return content;
    }

    hexo.extend.helper.register('generateExcerpt', function (data, excerpt_length) {
        const excerptLength = excerpt_length || 300;
        const post = sanitize(data.content);
        const excerpt = post.substr(0, excerptLength).concat("...");
        return excerpt;
    });
})();