const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`alive on http://localhost:${PORT}`)
)


app.get('/sneaktreatdb', (req, res) => {
    res.status(200).send([{
        id: 1,
        title: "Nike Dunk Low Retro White Black Panda (2021)",
        price: 119.95,
        description: "From the school-spirited College Colors Program to the vibrant Nike CO.JP collection, Nike Dunks have seen many colorways since the design’s inception in 1985. But with each new colorway, the Dunk’s classic color-blocking has remained in some capacity. Nike put its timeless color-blocking to work with the Nike Dunk Low Retro White Black.",
        category: "Nike Dunks",
        image: "https://i.imgur.com/IMAYbJU.jpg",

    }, {
        id: 2,
        title: "Nike Dunk Low Peach Cream (W)",
        price: 102,
        description: "The Nike Dunk Low Peach Cream W was made available as part of Nike’s 2022 fall collection.",
        category: "Dunk Low",
        image: "https://i.imgur.com/mHT058N.jpg",

    }, {
        id: 3,
        title: "Nike Dunk Low Dark Driftwood (W)",
        price: 110,
        description: "Nike-Dunk-Low-Dark-Driftwood-W",
        category: "sneaker",
        image: "https://i.imgur.com/xn3SdAn.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    }, {
        "id": 4,
        "title": "Nike Dunk Low Premium Vast Grey",
        "price": 110,
        "description": "The Nike Dunk Low Premium Vast Grey features a tonal grey suede upper, with warmer tones making up the base while cooler tones make up the overlays. From there, a contrasting cream and grey sole completes the design.",
        "category": "Dunk Low",
        "image": "https://i.imgur.com/xFKerOE.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    }, {
        "id": 5,
        "title": "Balenciaga Speed Graffiti Trainers Black White Logo (W)",
        "price": 825,
        "description": "Balenciaga Speed Graffiti Trainers Black White Logo (W).",
        "category": "Luxury Brands Balenciaga",
        "image": "https://i.imgur.com/AkATVci.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    }, {
        "id": 6,
        "title": "Lanvin Curb Sneaker Black Grey",
        "price": 890,
        "description": "Lanvin Curb Sneaker Black Grey",
        "category": "sneakers",
        "image": "https://i.imgur.com/zZRAcFx.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    }, {
        "id": 7,
        "title": "New Balance 574 mita sneakers Brown",
        "price": 130,
        "description": "New Balance 574 mita sneakers Brown",
        "category": "sneakers",
        "image": "https://i.imgur.com/WwecVDJ.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        }
    }, {
        "id": 8,
        "title": "Adidas NMD R1 United By Sneakers Tokyo",
        "price": 130,
        "description": "Adidas NMD R1 United By Sneakers Tokyo",
        "category": "sneaker",
        "image": "https://i.imgur.com/3xnDIb7.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    }, {
        "id": 9,
        "title": "Axel Arigato Dice Lo Sneaker White Black",
        "price": 270,
        "description": "Axel Arigato Dice Lo Sneaker White Black",
        "category": "sneakers",
        "image": "https://i.imgur.com/Idrm956.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    }, {
        "id": 10,
        "title": "Jordan 1 Mid Sneakersnstuff 20th Anniversary",
        "price": 149,
        "description": "This Jordan 1 Mid is comprised of a sail tumbled leather upper with suede overlays. Red accents on the ankle and Wings logo paired with a grey outsole and a special Sneakersnstuff hangtag completes the design. These sneakers released in December of 2019 for $140.",
        "category": "sneaker",
        "image": "https://i.imgur.com/Sl3tzPj.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    }, {
        "id": 11,
        "title": "Nike Kyrie 7 Sneaker Room Air and Earth",
        "price": 175,
        "description": "Nike Kyrie 7 Sneaker Room Air and Earth.",
        "category": "sneaker",
        "image": "https://i.imgur.com/4husoOV.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    }, {
        "id": 12,
        "title": "New Balance 991 MiUK SNS Blue Yellow",
        "price": 260,
        "description": "New Balance 991 MiUK SNS Blue Yellow",
        "category": "sneaker",
        "image": "https://i.imgur.com/5tZ8XJa.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    }, {
        "id": 13,
        "title": "Louis Vuitton x Lucien Clark A View Sneaker Black",
        "price": 1190,
        "description": "Louis Vuitton x Lucien Clark A View Sneaker Black",
        "category": "Luxury Sneaker",
        "image": "https://i.imgur.com/ujSKwKD.png",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    }, {
        "id": 14,
        "title": "Burberry Vintage Check Cotton ",
        "price": 590.99,
        "description": "Burberry Vintage Check Cotton Sneakers Archive Beige White",
        "category": "Luxury sneaker",
        "image": "https://i.imgur.com/BXQ3KIt.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        }
    }, {
        "id": 15,
        "title": "Dior B25 Oblique Runner Sneaker Black Suede",
        "price": 820,
        "description": "Dior B25 Oblique Runner Sneaker Black",
        "category": "Luxury Sneaker",
        "image": "https://i.imgur.com/HxJSfSH.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    }, {
        id: 16,
        title: "Louis Vuitton Luxembourg Sneaker White Monogram",
        price: 815,
        description: "Louis Vuitton Luxembourg Sneaker White Monogram",
        category: "Luxury sneaker",
        image: "https://i.imgur.com/QGSSe9Z.jpg",

    }, {
        id: 17,
        title: "Nike Air Force 1 Low NOLA",
        price: 150,
        description: "Nike Air Force 1 Low NOLA",
        category: "sneaker",
        image: "https://i.imgur.com/cd5uHTK.jpg",

    }, {
        id: 18,
        title: "Nike Air Force 1 Low 40th Anniversary Edition Split Black White",
        price: 150,
        description: "Nike Air Force 1 Low 40th Anniversary Edition Split Black White",
        category: "sneaker",
        image: "https://i.imgur.com/nTfSidz.jpg",

    }, {
        id: 19,
        title: "Jordan 1 Mid Sanded Purple (GS)",
        price: 90,
        description: "Jordan 1 Mid Sanded Purple (GS)",
        category: "sneaker",
        image: "https://i.imgur.com/d9qnhKn.jpg",

    }, {
        id: 20,
        title: "Jordan 1 Mid Oakland",
        price: 125,
        description: "Jordan 1 Mid Oakland",
        category: "sneaker",
        image: "https://i.imgur.com/kcGNpKH.jpg",

    }, {
        id: 21,
        title: "Nike Air Max 1 Jewel Rare Ruby",
        price: 140,
        description: "Nike Air Max 1 Jewel Rare Ruby are the classic touch on the Air series, having the ruby touch to spice things up.",
        category: "Rare Drops",
        image: "https://i.imgur.com/tz3UeSe.png",

    }, {
        id: 22,
        title: "Jordan 1 Retro Rare Air Bred",
        price: 209,
        description: "Jordan 1 Retro Rare Air Bred",
        category: "Rare Drops",
        image: "https://i.imgur.com/3U1CAso.jpg",
    }, {
        id: 23,
        title: "FEWOCiOUS RTFKT FEWO RARE",
        price: 140,
        description: "FEWOCiOUS RTFKT FEWO RARE",
        image: "https://i.imgur.com/42ay3jM.jpg",
        category: "Custom",

    }, {
        id: 24,
        title: "Burberry Leather Suede and House Check Sneaker",
        price: 140,
        "description": "Burberry Leather Suede and House Check Sneakers Black Archive Beige Black White",
        "category": "Rare Drops",
        image: "https://i.imgur.com/6mPapLB.jpg",
    }, {
        id: 25,
        title: "New Balance Vision Racer Jaden Smith Pink",
        price: 175,
        description: "Jaden Smith's special creative drop by New Balance features sneakers designed by the creative genius himself.",
        category: "Rare Drops",
        image: "https://i.imgur.com/680w00H.jpg",
        
    }, {
        id: 26,
        title: "Jordan 6 Retro Travis Scott British Khaki",
        price: 310.75,
        description: "Travis Scott and Jordan Brand teamed up to deliver the Air Jordan 6 Retro Travis Scott British Khaki. The British Khaki marks the second time that Travis has added his touch to the Jordan 6 silhouette, the first being the 2019 Air Jordan 6 Travis Scott.",
        category: "Rare Drops",
        image: "https://i.imgur.com/3rQthHO.jpg",
       
    }, {
        id: 27,
        title: "Jordan 1 Retro High Travis Scott",
        price: 250,
        description: "The first release as part of Travis Scott's monumental partnership with Nike, the Air Jordan 1 Travis Scott breaks the conventional rules of the Air Jordan 1 design. For starters, the side Swooshes are reversed, which each tailing facing the toe. Woven tongue tags are shifted and stitched to the side of the tongue instead of the top. Also, in the collar, there is a hidden stash pocket. A one-of-a-kind design fit for a one-of-a-kind artist.",
        category: "Rare Drops",
        image: "https://i.imgur.com/Vcz0c1r.jpg",
    }])
});

app.post('/sneaktreatdb/:ide', (req, res) => {
    const {ide} = req.params;
    const {title} = req.body;
    const {price} = req.body;
    const {description} = req.body;
    const {category} = req.body;
    const {image} = req.body;

    if(!price) {
        res.status(418).send({message: 'we need a price'})
    }
    if(!title) {
        res.status(418).send({message: 'we need a title'})
    }
    if(!description) {
        res.status(418).send({message: 'we need a description'})
    }
    if(!category) {
        res.status(418).send({message: 'we need a category'})
    }
    if(!image) {
        res.status(418).send({message: 'we need an image'})
    }
    res.send({
        message : `your sneaker with price ${price} and id of ${ide}`,
    })
});