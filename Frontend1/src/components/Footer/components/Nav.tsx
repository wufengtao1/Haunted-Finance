import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href= {buyhSHARE} target="_blank">Get hCash</StyledLink>
      <StyledLink href= {buyhCASH} target="_blank">Get hShare</StyledLink>
      <StyledLink href="https://github.com/" target="_blank">GitHub</StyledLink>
      <StyledLink href="https://twitter.com/HauntedFinance" target="_blank">Twitter</StyledLink>
      <StyledLink href="https://t.me/off_haunted" target="_blank">Telegram</StyledLink>
      <StyledLink href="https://medium.com/haunted-cash" target="_blank">Medium</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
`
const buyhCASH ="https://testnet.swappi.io/#/swap?outputCurrency=0x828a9ca1347b3b3525fd94700b78bb048db1ef8b";
const buyhSHARE= "https://testnet.swappi.io/#/swap?outputCurrency=0xa375eb2ba2b6f672ac845ab21634112a4122bc99"
export default Nav