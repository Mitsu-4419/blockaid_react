import React, {useState, memo} from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { Switch, FormControl, FormLabel } from "@chakra-ui/react"
import { useEffect } from "react"

const languageName = {
  en: "EN",
  ja: "JA",
}

const Language = memo(() => {
  const [english, setEnglish] = useState(false)
  const [currentLoc, setCurrentLoc] = useState('ja')

  const changeStatus = (currentLoc)=>{
    console.log(english)
    setEnglish(!english)
    console.log(english)
    changeLocale('en')
  }
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#2D3748` : `#CBD5E0`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
})

export default Language