


export default class ServerDataSearch {
    #data;
    mainProperty;
    constructor(url, mainProperty) {
        this.#data = [];
        this.mainProperty = mainProperty;
        this.compareByMainProperty = this.compareByMainProperty.bind(this);
        this.#init(url);
    }

    #init(url) {
        fetch(url)
        .then(response => (response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                this.#data.push(data[i]);
                this.#data[i].uniqueIdForUseInTheSearchEngine = i;
            } 

            this.#data.sort(this.compareByMainProperty);
        }
        ));
    }
    
    compareByMainProperty(object1, object2) {
        if (object1[this.mainProperty] < object2[this.mainProperty]) return -1;
        if (object1[this.mainProperty] > object2[this.mainProperty]) return 1;
        return 0;
    }

    getResultObjects(searchString) {
        searchString = searchString.toLowerCase();
        
        const result = this.#data.filter(object => (object[this.mainProperty].toLowerCase()).includes(searchString));
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
new ServerDataSearch(url, "name");
*/


