class PersonasResolver {
    constructor (service){
        this.service = service
    }

     getAll (){
        return  this.service.getAll({})
    }

    async create({data}) {
        return await this.service.create(data)
    }


}
module.exports = PersonasResolver