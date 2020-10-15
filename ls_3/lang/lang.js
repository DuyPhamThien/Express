global.language = 'en';
global.langData = {
    vi:{
        'hello': 'Xin chao'
    },
    en: {
        'hello': 'Hello'
    }
    
}

global.lang = (string)=>{
    return get(langData[language][string], string);
}