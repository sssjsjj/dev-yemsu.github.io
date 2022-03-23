import htmlConverter from '@/utils/htmlConverter';

export default {
  SET_DATA(state, {type, data}) {
    state[type] = data
  },
  SET_MARKDOWN(state, {type, data}) {
    state[type] = htmlConverter(data)
  },
}