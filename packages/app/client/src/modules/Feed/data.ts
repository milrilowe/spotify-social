export default [
    {
        "id": 1,
        "user": {
            "name": "John Doe",
            "avatar": "https://picsum.photos/200/300",

        },
        "song": {
            "title": "Hello World",
            "artist": "Band",
            "album": {
                "name": "Hello World",
                "image": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            },
        },
        "content": "This is a test post",
        "image": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
        "likes": 10,
        "comments": [{
            "id": 1,
            "user": {
                "name": "John Doe",
                "avatar": "https://picsum.photos/200/300",
            },
            "content": "This is a test comment",
            "likes": 10,
        }],
    },
    {
        "id": 2,
        "user": {
            "name": "Jane Doe",
            "avatar": "https://picsum.photos/200/300",
        },
        "song": {
            "title": "Hello World",
            "artist": "John Doe",
            "album": {
                "name": "Hello World",
                "image": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            },
        },
        "content": "This is a test post",
        "image": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
        "likes": 10,
        "comments": [{
            "id": 1,
            "user": {
                "name": "John Doe",
                "avatar": "https://picsum.photos/200/300",
            },
            "content": "This is a test comment",
            "likes": 10,
        }],
    },
]