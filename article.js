let article = {
        title: 'Mahabarth',
        body: 'historical story',
        author: 'vemana',
        price: 235,
        publishDate: '1-1-1970',
        category: ['history', 'sci-fi,', 'advanture'],
        comments: [
            { userName: 'sha', title: 'mahabarath', body: 'its good' },
            { userName: 'sHyaM', title: 'mahabarath', body: 'its nice' }
            // { userName: 'saM', title: article.title, body: article.body }
        ]
    }
    //console.log(article)
    //console.log(article.title)
    //console.log(article[category])
    //console.log(article.category)
    //console.log(article.comments)
let contact = {
        name: 'sHyaM',
        email: [{ one: 'shyamkumar97@live.com', t: 'shyamsha04@gmail.com' }],
        subject: 'hi sir ,my name is sHyaM i want know details of full stack',
        massege: 'sir please get touch with me'
    }
    // contact.forEach(element => {
    //     // console.log(contact[0].email)
    //     //console.log(`${contact[0].name} and subject ${contact[0].email[0]}`)
    // });
    //console.log(contact.email.one);
contact.email.forEach(function(mail) {
    console.log(mail)
    console.log(` one email ${mail.one}`)
})