export const ActionButton = ({action, name, conditions}) => {
    console.log(action)
    let checker = conditions => {if(conditions && conditions !== true)return conditions.every(v => v === true);else return true}
    if(checker(conditions) || conditions === undefined){
        return (
            <div className="actionButton" onClick={()=>action()}>
                {name}
            </div>
        )
    }
    return null
}