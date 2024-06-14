var cloudinary = require('cloudinary').v2;
/*
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});
*/

cloudinary.config({ 
    cloud_name: 'df4gjigss',
    api_key: '931985392132929', 
    api_secret: 'f_tr_j9pvKof20Pigv-_dG7x0_0'
});

module.exports = { cloudinary }