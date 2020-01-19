export default class ObjectHandler {

    /**
     * @param {json} data
     * @param {array} comparedFields
     * @return {boolean}
     */
    isEqualFields(data, comparedFields) {
        const dataFields = Object.keys(data);
        return comparedFields.every((field, index) => dataFields[index] === field);
    }

}