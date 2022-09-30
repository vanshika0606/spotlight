class Features{
    constructor(query, queryStr){

        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        
        const keyword = this.queryStr.firstName?{

            firstName:{
                $regex:this.queryStr.firstName,
                $options:"i"
            },
        }:{};

       
       this.query = this.query.find({...keyword})
       return this;

    }
}

module.exports = Features;