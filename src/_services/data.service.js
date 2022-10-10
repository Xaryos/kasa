
import Apparts from '@/_datas/logements.json'

const getAllApparts = () => {
    return Apparts
}

const getOneAppart = async (id) => {
    return await Apparts.filter(log => log.id === id)
}

export const dataService = {
    getAllApparts, getOneAppart
}