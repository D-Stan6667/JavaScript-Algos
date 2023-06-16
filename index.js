function indexer(text, alpha) {
    let number = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == alpha) {
            number++;
        }
    } 
    console.log(number);
}