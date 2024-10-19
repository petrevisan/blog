export default defineEventHandler((event) => {
    const posts =  [
        {
            "id": 0,
            "title": "This is the title",
            "subtitle": "Here comes the subtitle",
            "content": "lorem ipsum"
        },
        {
            "id": 1,
            "title": "This is the second title",
            "subtitle": "Here comes the 2nd subtitle",
            "content": "lorem ipsum x2"
        },
    ];
    const requestId = event.context.params?.id || 0;

    return posts.find(p => p.id === +requestId)
});
