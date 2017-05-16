const fontSizes = {
  h1: 25,
  h2: 22,
  h3: 20,
  h4: 18,
  paragraph: 16,
  sml: 13,
  xsml: 10,
  xxsml: 8,
}

const families = {
  headings: 'Roboto',
  body: 'Merriweather Sans'
}

export const fonts = {
  h1: {
    fontSize: fontSizes.h1,
    fontFamily: families.heading,
  },
  h2: {
    fontSize: fontSizes.h2,
    fontFamily: families.heading,
  },
  h3: {
    fontSize: fontSizes.h3,
    fontFamily: families.heading,
  },
  h4: {
    fontSize: fontSizes.h4,
    fontFamily: families.heading,
  },
  subHeading1: {
    fontSize: fontSizes.sml,
    fontWeight: 600,
  },
  subHeading2: {
    fontSize: fontSizes.xsml,
    fontWeight: 600,
  },
  subHeading3: {
    fontSize: fontSizes.xxsml,
    fontWeight: 600,
  },
  body: {
    fontSize: fontSizes.xsml,
    fontWeight: 300,
    lineHeight: fontSizes.xsml + 5,
  }
}

export const artboard = {
  height: 842,
  width: 595,
}
