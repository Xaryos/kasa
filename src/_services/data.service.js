
import Apparts from '@/_datas/logements.json'

const getAllApparts = () => {
    return Apparts
}

const getOneAppart = (id) => {
    console.log(Apparts.find(log => log.id === id))
    return Apparts.find(log => log.id === id)
    
}

export const dataService = {
    getAllApparts, getOneAppart
}