async function graphQLQuery(query = {}) {
    {
        let response
        try {
            response = await fetch(`/graphql`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(query)
            });
        } catch (err) {
            console.log(err);
        }
        return await response.json()
    }
}

document.getElementById("graphQLButton").addEventListener("click", async function () {
    let response = await graphQLQuery()
    console.log("status from server response: ", response.status)

    let contechResponse = response.data

    console.log("status from contech response: ", contechResponse.status)
    console.log("data from contech response: ", contechResponse.data)


})