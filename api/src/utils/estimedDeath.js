const estimedDeath = (date , lifExpectancyPeru = 74.6) => {

    const deathDay = new Date(date) 
    deathDay.setFullYear(deathDay.getFullYear()+ lifExpectancyPeru)
    return deathDay
}
module.exports ={
    estimedDeath
}