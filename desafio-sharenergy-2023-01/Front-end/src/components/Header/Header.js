import {HeaderContainer} from './style'
import { NavbarLink } from './style'

const Header=()=>{

    return(
        <div>
            <HeaderContainer>
                <h2>Challenge Sharenergy 2023-01</h2>
        
                <nav>
                    <NavbarLink to="/home">Home</NavbarLink>
                    <NavbarLink to="/status-code">Status Code</NavbarLink>
                    <NavbarLink to="/random-dog">Random Dog</NavbarLink>
                    <NavbarLink to="/clients">Clients</NavbarLink>
                </nav>
                
            </HeaderContainer>
        </div>
    )
}

export default Header