import StyledInputBase from '@mui/material/InputBase';
import '../CSS/navbarbottom.css'
const NavbarPart1 = ({changeInputvalue,navstate}) => {
  return (
    <div className="navbarbottom" style={{backgroundColor:"red"}}>
    <StyledInputBase
    onChange={changeInputvalue}
    value={navstate}
          placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      sx={{width:"600px"}}
    />
       </div>


  )
}

export default NavbarPart1