var natural = require('natural');
var stopwords = require('stopwords').english;

var _maxKeywords = 10;
function extract ( text, maxKeywords ) {

    if (maxKeywords){
        _maxKeywords = maxKeywords;
    }

    var stemmer = natural.PorterStemmer;
    stemmer.attach();
    var stems = text.tokenizeAndStem();
    var keywords = {};
    for (var i = 0; i < stems.length; i++) {
        if (stems[i].length > 2 && stopwords.indexOf(stems[i]) == -1) {
            keywords[stems[i]] = 1 + (keywords[stems[i]] || 1);
        }
    }
    var sortable = [];
    for (var keyword in keywords) {
        if (!keywords.hasOwnProperty(keyword)) {
            continue;
        }
        sortable.push([keyword, keywords[keyword]]);
    }
    sortable.sort(function (a, b) {
        return b[1] - a[1]
    });

    var result = [];
    for ( var j = 0; j < (sortable.length > _maxKeywords ? _maxKeywords : sortable.length); j++ ) {
        result.push(sortable[j][0]);
    }
    return result;

}

module.exports.extract = extract;
