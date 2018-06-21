export const state = () => {
  return {
    toggleDropDown: false,
    subnav: {
      "HOME": ["HOME PAGE"],
      "CLASSIFIEDS":  ["POST AND AD", "EDIT AN AD", "DELETE AN AD"],
      "MOVIES": ["ADD A MOVIE", "EDIT A MOVIE", "DELETE A MOVIE"],
      "EVENTS": ["ADD AN EVENT", "EDIT AN EVENT", "DELETE AN EVENT"],
      "CONTACT US": ["CONTACT US"]
    },
    itemId: ''
  }
}

export const mutations = {
}