const easyCssTemplate = (utilityStyles) => `
const UTILITY_STYLES = Object.freeze(${JSON.stringify(utilityStyles, null, 2)})

const parseUtilityStylesToCssObject = (utilityStyles) =>
  utilityStyles
    .split(' ')
    .reduce(
      (acc, utility) => Object.assign(acc, UTILITY_STYLES[utility] || {}),
      {}
    );

export const ez = (...styles) => {
  // example: ez(["w-1/2 bg-pink-200", {background: 'pink'}])
  let mergedStyleObject = {};
  styles.forEach((style) => {
    const isUtilityStyles = typeof style === 'string';
    if (isUtilityStyles) {
      const parsedCssObject = parseUtilityStylesToCssObject(style);
      mergedStyleObject = Object.assign(mergedStyleObject, parsedCssObject);
    }

    if (typeof style === 'object')
      mergedStyleObject = Object.assign(mergedStyleObject, style);
  });

  return mergedStyleObject;
};
`

exports.buildEasyCssTemplate = (utilityStyles) => easyCssTemplate(utilityStyles)
