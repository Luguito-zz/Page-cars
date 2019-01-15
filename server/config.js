process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if(process.env.NODE_ENV !== 'production'){
    urlDB = 'mongodb://localhost:27017/page-cars';
}else{
    urlDB = 'mongodb://page-cars:a123456@ds011258.mlab.com:11258/page-cars';
}

process.env.URLDB = urlDB;