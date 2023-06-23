




export const ActionButton = ({action, name, conditions}) => {
    console.log(conditions)
    let checker = conditions => conditions.every(v => v === true)
    console.log(checker(conditions))
    if(checker(conditions)){
        return (
            <div className="actionButton" onClick={action}>
                {name}
            </div>
        )
    }
    return null
}