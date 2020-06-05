module.exports = function(json_doc){
    var title = json_doc.title.trim();
    var subtitle = json_doc.subtitle.trim();
    var content = json_doc.content.trim();
    var reference = json_doc.reference.trim();
    var date = json_doc.date.trim();
    return title + '\n\n' + subtitle + '\n\n' + content + '\n\n' + reference + '\n\n' + date;
}