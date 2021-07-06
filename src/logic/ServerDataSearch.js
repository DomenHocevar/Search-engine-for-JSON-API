


class ServerDataSearch {
    #data;
    constructor(url) {
        this.data = [];
        this.#init(url);
    }

    #init(url) {
        fetch(url)
        .then(response => (response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) this.data.push(data[i]);
            
            this.data.sort(compareName);
        }
        ));
    }
    
    getResultObjects(searchString) {
        
    
        const result = this.data.filter(object => object.name.includes(searchString));
        return result;
    }
}

function compareName(object1, object2) {
    if (object1.name < object2.name) return -1;
    if (object1.name > object2.name) return 1;
    return 0;
}


/*
const url = "https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json";
new ServerDataSearch(url);
*/

