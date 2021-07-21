function Article( { titleName, date = "January 1, 1970", preview, minute }) {

    let coffee = "☕"
    let bento ="🍱"
    const coffeeNum = Math.ceil(minute/5)
    const bentoNum = Math.ceil(minute/10)
    //console.log(coffeeNum)
    let display=""
    function coffeeDisplay(coffeeNum) {
        for (let i = 1; i <=coffeeNum;i++ ){
            display+=coffee 
        }
        return display
    }
    function bentoDisplay(bentoNum) {
        for (let i = 1; i <=bentoNum;i++ ){
            display+=bento 
        }
        return display
    }

    return (
        <article>
            <h3>{titleName}</h3>
            <small>{date}</small>
            <p>{ minute < 30 ? coffeeDisplay(coffeeNum) : bentoDisplay(bentoNum)}</p>
            <p>{preview}</p>
            
        </article>
        
    )
}

export default Article

//if minute < 30, Math.minutes.ceil. divide by 5 = num. (NUm x coffeemoji) = let coffeEmoji