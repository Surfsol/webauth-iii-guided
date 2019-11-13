const { validateUser } = require('./users-helpers.js')

//sent an empty object, we saw the result fail
//sent an object with a username less than 2 characters, we verified if failed
//sent an object with a valid username, no password

describe("users helpers", ()=>{

    //Act: execute the system under test (SUT) -> validateUser method
    const actual= validateUser(invalidUser)
    //
    expect(actual.isSuccessful).toBe(expected)//matchers
})
    it("should fail if missing password", () => {
        const result = validateUser({username: "somebody"})
    })