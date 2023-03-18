import React, { useEffect, useState } from 'react'
import { ContactHeader, ContentHeaders, Header, InputButton, InputField, InputSection, Logo, NavbarWrapper } from './NavbarStyles';

const Navbar = () => {
  return (
    <>
        <NavbarWrapper style={{gridTemplateColumns: "1fr 1fr"}}>
            <Logo to="/">more.tf</Logo>
            <ContentHeaders>
                <ContactHeader href="https://discord.gg/ZbYQGWbUnx" target="_blank">Contact</ContactHeader>
                <ContactHeader href="https://dev.more.tf/season-14-summary" target="_blank">S14 Summary</ContactHeader>
            </ContentHeaders>
        </NavbarWrapper>
    </>
  )
}

export default Navbar;