class BookFeatures{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    filter(){
        let sort;
        let str;
        if(this.queryStr.sort){
            sort = this.queryStr.sort;
        } else{
            sort = '';
        }
        if(this.queryStr.str){
            str = this.queryStr.str;
        } else{
            str = '';
        }
        if(str && sort){
            switch (sort){
                case 'all':
                    this.query = this.query.find({ $or: [ {'book_authors': { $elemMatch: { $regex: str, $options: 'i' }}},
                        {'book_name': { $regex: str, $options: 'i' }}, 
                        {'book_description': { $elemMatch: { $regex: str, $options: 'i' }}},
                        {'book_keywords': { $elemMatch:{ $regex: str, $options: 'i' }}}, 
                        {'book_genres': { $elemMatch:{ $regex: str, $options: 'i' }}} ]  
                    });
                    break;
                case 'book_name':
                    this.query = this.query.find({'book_name': { $regex: str, $options: 'i' }});
                    break;
                case 'book_authors':
                    this.query = this.query.find({'book_authors': { $elemMatch: { $regex: str, $options: 'i' }}});
                    break;
                case 'book_description':
                    this.query = this.query.find({'book_description': { $elemMatch: { $regex: str, $options: 'i' }}});
                    break;
                case 'book_keywords':
                    this.query = this.query.find({'book_keywords': { $elemMatch:{ $regex: str, $options: 'i' }}});
                    break;
                case 'book_genres':
                    this.query = this.query.find({'book_genres': { $elemMatch:{ $regex: str, $options: 'i' }}});
                    break;
            }
        } 
        return this;
    }
}

module.exports = {
    BookFeatures
}