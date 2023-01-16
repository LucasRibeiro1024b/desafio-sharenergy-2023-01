export const goToLoginPage=(navigator)=>{
    navigator("/")
}

export const goToHomepage=(navigator)=>{
    navigator("/home")
}

export const goToClientsListPage=(navigator)=>{
    navigator("/clients")
}

export const goToRandomDogPage=(navigator)=>{
    navigator("/random-dog")
}

export const goToStatusCodePage=(navigator)=>{
    navigator("/status-code")
}

export const goToCreateClientPage=(navigator)=>{
    navigator("/create-client")
}

export const goToEditClientPage=(navigator, id)=>{
    navigator(`/edit-client/${id}`)
}

export const goToClientDetailsPage=(navigator, id)=>{
    navigator(`/client-details/${id}`)
}

export const returnPage=(navigator)=>{
    navigator(-1)
}