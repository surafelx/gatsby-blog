import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    FooterWrapper,
    FooterSocialWrapper,
    FooterSocialIcons,
} from "../elements"

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath:{eq: "facebook.svg"}) {
                publicURL
            }
            linkedin: file(relativePath:{eq: "linkedin.svg"}) {
                publicURL
            }
            twitter: file(relativePath:{eq: "twitter.svg"}) {
                publicURL
            }
            instagram: file(relativePath:{eq: "instagram.svg"}) {
                publicURL
            }
        }
    `)
    return <FooterWrapper>
    <FooterSocialWrapper>
        <FooterSocialIcons>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={data.facebook.publicURL} alt="Facebook Logo" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={data.linkedin.publicURL} alt="Linkedin Logo" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={data.twitter.publicURL} alt="Twitter Logo" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={data.instagram.publicURL} alt="Instagram Logo" />
            </a>
        </FooterSocialIcons>
        <p>
            2020 Company. All Rights Reserved.
        </p>
    </FooterSocialWrapper>
    </FooterWrapper>
}