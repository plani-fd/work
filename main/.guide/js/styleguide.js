$(function()
{
    $('main > .section > .group').each(function(i)
    {
        $(this).find('> pre').text( $(this).find('> .item').html() );
    });

    // 소스 넣기
    SyntaxHighlighter.highlight();
});