const axios = require("axios");

async function apiCallPost(reqBody, url) {
    let response;

    try {
        response = await axios.post(url, reqBody, {
            withCredentials: true,
            credentials: "include",
            headers: {
                apikey:  "abcdefghijklmnopqrstuvwxyz",
            },
        });

        console.log("try apiCallPost ", reqBody);
    } catch (err) {
        // Handle Error Here
        response = err.response;
        console.log("catch apiCallPost ", reqBody);
    }
    return response;
}

let url = "http://localhost:3000/api/graphql"
let body =  {
    "query": "query RooterQueryType($cascadeInput: CascadeInput){\n      cascade(cascadeInput:$cascadeInput){\n      id\n      title\n      defType\n      parentId\n      updated\n      created\n      childrenNodes{\n          id\n          title\n          defType\n          parentId\n          updated\n          created\n          \n          childrenNodes{\n              id\n              title\n              defType\n              parentId\n              updated\n              created\n                          \n              childrenNodes{\n                  id\n                  title\n                  defType\n                  parentId\n                  updated\n                  created\n              }\n          }\n      }\n  }}",
    "variables": {
        "cascadeInput": {
            "configDef": {
                "title": [
                    "Poum"
                ]
            },
            "configObj": {},
            "typeData": {},
            "instanceData": {}
        }
    }
}


async function getNodes(){

    let response = await apiCallPost(body, url)
    return {
        status: response.status,
        data: response.data
    }
}

module.exports = getNodes