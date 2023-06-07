import { languages } from "@/lib"
import ProgressBar from "./ProgressBar"
import { P } from "@/components"
import React from "react"

const Language = () => {
  const mockLanguages = languages.slice(0, 4)

  const Container = ({ children }) => (
    <div className="flex flex-col items-start justify-center mt-2 hover:translate-x-1 transition-transform">
      {children}
    </div>
  )

  return (
    <div>
      {mockLanguages.map((language) => (
        <Container key={language.name}>
          <P className="text-gray-200 text-md md:text-lg md:mb-2">{language.name}</P>
          <ProgressBar progress={language.percentage} color={language.color} />
        </Container>
      ))}
    </div>
  )
}

export default Language
