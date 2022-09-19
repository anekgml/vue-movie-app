exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'NAME',
            age: 55,
            email: 'aaaaaa@aaa.aaa'
        })
    }
}