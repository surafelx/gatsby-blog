import React from "react"
import {Container, FeatureImage, Content, ContentCard } from "../components"

export const IndexPage = () => {
  return(
    <Container>
      <FeatureImage /> 
      <Content>
        <ContentCard date="March 22 2020" title="Lorem Ipsum" excerpt="Lorwm" slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage
