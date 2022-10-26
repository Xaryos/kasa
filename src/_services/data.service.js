
import Apparts from '@/_datas/logements.json'

const getAllApparts = () => {
    return Apparts
}

const getOneAppart = (id) => {
    return Apparts.find(log => log.id === id)

}

export const dataService = {
    getAllApparts, getOneAppart,
}