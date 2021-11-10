const env = process.env.NODE_ENV || "development";



const Config =  {
    "development": {
        phone: "",
        email: "admin@satinescorts.com.au",
        address: "Melborune Vic 3000",
        twitter: "https://twitter.com/",
        url: "http://localhost:2000",
        api: "http://localhost:2000/api",
        privatekey: "wowwow",
        database:"escorts",
        username:"root",
        password:"Krishna123!#"
      },
      "test": {
            phone: "",
            email: "admin@satinescorts.com.au",
            address: "Melborune Vic 3000",
            twitter: "https://twitter.com/",
            url: "http://localhost:2000",
            api: "http://localhost:2000/api",
            privatekey: "wowwow",
      },
      "production": {
          phone: "0492 141 346",
          address: "Melborune Vic 3000",
          email: "info@lnbsydneyescorts.com.au",
          twitter: "https://twitter.com/",    
          url: "http://localhost:2000",
          api: "http://localhost:2000/api",
          privatekey: "wowwow",
      },



}

export default Config[env];